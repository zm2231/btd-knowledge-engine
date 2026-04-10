#!/usr/bin/env node
/**
 * Wiki compilation — LLM reads raw sources, builds/updates a structured wiki.
 * 
 * The wiki is the persistent knowledge layer between raw content and user queries.
 * Instead of re-deriving knowledge from chunks every time, the LLM compiles it once
 * and keeps it current. Cross-references, contradictions, and synthesis are pre-built.
 *
 * Usage:
 *   node scripts/compile-wiki.js ingest <source-file>    # Process one raw source into the wiki
 *   node scripts/compile-wiki.js ingest --recent 5       # Process 5 most recently ingested sources
 *   node scripts/compile-wiki.js lint                     # Health check: find gaps, contradictions, orphans
 *   node scripts/compile-wiki.js status                   # Show wiki state: pages, coverage, staleness
 *   node scripts/compile-wiki.js index                    # Rebuild wiki index.md
 *
 * All commands accept --instance <name> (default: btd)
 *
 * NOTE: This script prepares context and instructions for Claude Code to execute.
 * The actual compilation is done by the LLM, not by this script deterministically.
 * Run this in Claude Code and it will do the work.
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const action = args[0];
const getFlag = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : null; };
const hasFlag = (name) => args.includes(`--${name}`);

const INSTANCE = getFlag('instance') || 'btd';
const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, INSTANCE);
const WIKI_DIR = path.join(INST, 'wiki');
const RAW_DIR = path.join(INST, 'raw');
const INGEST_LOG = path.join(INST, 'registry', 'ingest-log.jsonl');

// Ensure wiki dirs
for (const sub of ['concepts', 'topics', 'creators', 'sources']) {
  fs.mkdirSync(path.join(WIKI_DIR, sub), { recursive: true });
}

function getWikiPages() {
  const pages = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.md') && !entry.name.startsWith('.')) {
        pages.push(path.relative(WIKI_DIR, full));
      }
    }
  }
  walk(WIKI_DIR);
  return pages;
}

function getRecentIngests(n) {
  if (!fs.existsSync(INGEST_LOG)) return [];
  const lines = fs.readFileSync(INGEST_LOG, 'utf8').trim().split('\n').filter(Boolean);
  return lines.slice(-n).map(l => {
    try { return JSON.parse(l); } catch { return null; }
  }).filter(Boolean);
}

function getRawSources() {
  const sources = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.md')) sources.push(path.relative(INST, full));
    }
  }
  walk(RAW_DIR);
  return sources;
}

if (!action || action === '--help' || action === '-h') {
  console.log(`Wiki Compilation

  node scripts/compile-wiki.js ingest <file>     Process one source into wiki
  node scripts/compile-wiki.js ingest --recent 5  Process recent ingests
  node scripts/compile-wiki.js lint               Health check
  node scripts/compile-wiki.js status             Wiki state
  node scripts/compile-wiki.js index              Rebuild index.md

  --instance <name> (default: btd)`);
  process.exit(0);
}

if (action === 'status') {
  const pages = getWikiPages();
  const sources = getRawSources();
  const indexExists = fs.existsSync(path.join(WIKI_DIR, 'index.md'));
  const logExists = fs.existsSync(path.join(WIKI_DIR, 'log.md'));
  
  console.log(`\n  Wiki — ${INSTANCE}`);
  console.log(`  ${'─'.repeat(40)}`);
  console.log(`  Pages: ${pages.length}`);
  console.log(`  Index: ${indexExists ? '✅' : '❌ not yet created'}`);
  console.log(`  Log: ${logExists ? '✅' : '❌ not yet created'}`);
  console.log(`  Raw sources: ${sources.length}`);
  
  if (pages.length > 0) {
    const byDir = {};
    pages.forEach(p => {
      const dir = path.dirname(p);
      byDir[dir] = (byDir[dir] || 0) + 1;
    });
    console.log(`\n  By section:`);
    for (const [dir, count] of Object.entries(byDir).sort()) {
      console.log(`    ${dir}/: ${count} pages`);
    }
  }
  
  if (pages.length === 0) {
    console.log(`\n  Wiki is empty. Start with:`);
    console.log(`    node scripts/compile-wiki.js ingest --recent 10`);
    console.log(`\n  Or in Claude Code, just say:`);
    console.log(`    "Compile the wiki from our raw sources"`);
  }
  console.log('');
  
} else if (action === 'index') {
  // Rebuild index.md from current wiki pages
  const pages = getWikiPages();
  if (pages.length === 0) {
    console.log('No wiki pages to index.');
    process.exit(0);
  }
  
  let index = `# Wiki Index\n\n`;
  index += `*Auto-generated. ${pages.length} pages.*\n\n`;
  
  const byDir = {};
  pages.forEach(p => {
    const dir = path.dirname(p);
    if (!byDir[dir]) byDir[dir] = [];
    byDir[dir].push(p);
  });
  
  for (const [dir, files] of Object.entries(byDir).sort()) {
    index += `## ${dir}\n\n`;
    for (const f of files.sort()) {
      const name = path.basename(f, '.md').replace(/-/g, ' ');
      index += `- [${name}](${f})\n`;
    }
    index += '\n';
  }
  
  fs.writeFileSync(path.join(WIKI_DIR, 'index.md'), index);
  console.log(`✅ Wiki index rebuilt: ${pages.length} pages indexed`);
  
} else if (action === 'ingest') {
  const sourceFile = args[1];
  const recent = parseInt(getFlag('recent') || '0');
  
  let sources = [];
  if (recent > 0) {
    sources = getRecentIngests(recent).map(e => e.file).filter(Boolean);
  } else if (sourceFile) {
    sources = [sourceFile];
  } else {
    console.error('Usage: compile-wiki.js ingest <file> or --recent N');
    process.exit(1);
  }
  
  if (sources.length === 0) {
    console.log('No sources to process.');
    process.exit(0);
  }
  
  // Check which sources already have wiki entries
  const logPath = path.join(WIKI_DIR, 'log.md');
  const existingLog = fs.existsSync(logPath) ? fs.readFileSync(logPath, 'utf8') : '';
  
  console.log(`\n  Wiki Compilation — ${sources.length} source(s)\n`);
  console.log(`  Wiki dir: ${WIKI_DIR}`);
  console.log(`  Current pages: ${getWikiPages().length}`);
  console.log(`\n  Sources to process:`);
  sources.forEach(s => {
    const inLog = existingLog.includes(s);
    console.log(`    ${inLog ? '⏭️ ' : '📄 '} ${s}${inLog ? ' (already compiled)' : ''}`);
  });
  
  const toProcess = sources.filter(s => !existingLog.includes(s));
  
  if (toProcess.length === 0) {
    console.log('\n  All sources already compiled. Use --force to reprocess.');
    process.exit(0);
  }
  
  console.log(`\n${'═'.repeat(60)}`);
  console.log('  INSTRUCTIONS FOR CLAUDE');
  console.log(`${'═'.repeat(60)}\n`);
  console.log(`For each source below, read the raw file and update the wiki:\n`);
  console.log(`1. Read the source file`);
  console.log(`2. Write/update a summary in wiki/sources/{source-slug}.md`);
  console.log(`3. For each key concept, write/update wiki/concepts/{concept}.md`);
  console.log(`4. For each topic covered, write/update wiki/topics/{topic}.md`);
  console.log(`5. Write/update wiki/creators/{creator}.md with this source's contributions`);
  console.log(`6. Update cross-references: link related pages to each other`);
  console.log(`7. Update wiki/index.md with any new pages`);
  console.log(`8. Append to wiki/log.md: date, source, pages created/updated\n`);
  console.log(`Wiki conventions:`);
  console.log(`- Every page has YAML frontmatter (title, source_count, last_updated)`);
  console.log(`- Use [[wiki-links]] between pages for cross-references`);
  console.log(`- Concepts are ideas/frameworks. Topics are broader categories.`);
  console.log(`- Creator pages track what they've contributed across all sources.`);
  console.log(`- When new data contradicts existing wiki content, flag it explicitly.\n`);
  console.log(`Sources to compile:`);
  toProcess.forEach(s => console.log(`  - ${path.join(INST, s)}`));
  console.log('');
  
} else if (action === 'lint') {
  const pages = getWikiPages();
  if (pages.length === 0) {
    console.log('Wiki is empty. Nothing to lint.');
    process.exit(0);
  }
  
  console.log(`\n${'═'.repeat(60)}`);
  console.log('  WIKI HEALTH CHECK');
  console.log(`${'═'.repeat(60)}\n`);
  console.log(`  Pages: ${pages.length}`);
  
  // Check for orphans (no inbound links)
  const allContent = {};
  pages.forEach(p => {
    allContent[p] = fs.readFileSync(path.join(WIKI_DIR, p), 'utf8');
  });
  
  const orphans = pages.filter(p => {
    const name = path.basename(p, '.md');
    return !Object.entries(allContent).some(([other, content]) => 
      other !== p && (content.includes(`[[${name}]]`) || content.includes(`(${p})`))
    );
  });
  
  if (orphans.length > 0) {
    console.log(`\n  Orphan pages (no inbound links): ${orphans.length}`);
    orphans.forEach(p => console.log(`    - ${p}`));
  }
  
  // Check for broken links
  const broken = [];
  for (const [page, content] of Object.entries(allContent)) {
    const links = content.match(/\[\[([^\]]+)\]\]/g) || [];
    for (const link of links) {
      const target = link.slice(2, -2);
      const exists = pages.some(p => path.basename(p, '.md') === target || p === target + '.md');
      if (!exists) broken.push({ page, target });
    }
  }
  
  if (broken.length > 0) {
    console.log(`\n  Broken wiki links: ${broken.length}`);
    broken.forEach(b => console.log(`    - ${b.page} → [[${b.target}]]`));
  }
  
  // Sources not yet compiled
  const sources = getRawSources();
  const logPath = path.join(WIKI_DIR, 'log.md');
  const log = fs.existsSync(logPath) ? fs.readFileSync(logPath, 'utf8') : '';
  const uncompiled = sources.filter(s => !log.includes(s));
  
  console.log(`\n  Sources: ${sources.length} total, ${sources.length - uncompiled.length} compiled, ${uncompiled.length} pending`);
  if (uncompiled.length > 0 && uncompiled.length <= 10) {
    uncompiled.forEach(s => console.log(`    - ${s}`));
  } else if (uncompiled.length > 10) {
    uncompiled.slice(0, 5).forEach(s => console.log(`    - ${s}`));
    console.log(`    ... and ${uncompiled.length - 5} more`);
  }
  
  if (orphans.length === 0 && broken.length === 0 && uncompiled.length === 0) {
    console.log('\n  ✅ Wiki is healthy');
  }
  console.log('');
  
} else {
  console.error(`Unknown action: ${action}. Use --help.`);
  process.exit(1);
}
