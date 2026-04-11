#!/usr/bin/env node
/**
 * Build/update the LEANN index for an instance.
 * 
 * Indexes wiki/ + raw/ together by default. Wiki pages are clean structured
 * summaries that act as high-quality "anchor" chunks, outranking noisy transcript
 * fragments. Raw files stay for evidence linking (actual quotes, passages).
 * Repos indexed alongside for code search.
 * 
 * Usage:
 *   node scripts/index.js                    # build/update btd index
 *   node scripts/index.js --force            # full rebuild
 *   node scripts/index.js --instance other
 *   node scripts/index.js --wiki-only         # index wiki/ only (no evidence depth)
 *   node scripts/index.js --raw-only          # index raw/ only (legacy, tweet-dominated)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { normalizeEntry, readEntries, writeEntries } = require('./ingest-log.js');

const args = process.argv.slice(2);
const instance = (() => { const i = args.indexOf('--instance'); return i !== -1 ? args[i+1] : 'btd'; })();
const force = args.includes('--force');


const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, instance);
const WIKI_DIR = path.join(INST, 'wiki');
const RAW_DIR = path.join(INST, 'raw');
const REGISTRY = path.join(INST, 'registry', 'creators.json');
const INDEX_NAME = `btd-${instance}`;
const INGEST_LOG = path.join(INST, 'registry', 'ingest-log.jsonl');

// Default: index wiki/ + raw/ together.
// Wiki pages are clean summaries with concept links — they act as high-quality
// "anchor" chunks that outrank noisy transcript fragments on topic queries.
// Raw files stay in the index for evidence linking (actual quotes, passages).
// --wiki-only: index only wiki/ (smaller, faster, no evidence depth)
// --raw-only:  index only raw/ (legacy behavior, tweet-dominated)
const wikiOnly = args.includes('--wiki-only');
const rawOnly = args.includes('--raw-only');

if (!rawOnly && !fs.existsSync(WIKI_DIR)) {
  console.error(`❌ Wiki directory not found: ${WIKI_DIR}`);
  console.error(`   Run 'node scripts/compile-wiki.js ingest' first, or use --raw-only for legacy indexing`);
  process.exit(1);
}

// Collect all indexable roots
const docRoots = [];
if (!rawOnly) docRoots.push(WIKI_DIR);
if (!wikiOnly) docRoots.push(RAW_DIR);
if (fs.existsSync(REGISTRY)) {
  const reg = JSON.parse(fs.readFileSync(REGISTRY, 'utf8'));
  for (const creator of reg.creators || []) {
    const repo = creator.platforms?.repo;
    if (repo?.path && fs.existsSync(repo.path)) {
      docRoots.push(repo.path);
    }
  }
}

// Check at least one root has content
const mdFiles = [];
function findFiles(dir, exts) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.')) findFiles(full, exts);
    else if (exts.some(e => entry.name.endsWith(e))) mdFiles.push(full);
  }
}
// For raw/ check .md; for repos check code extensions too
const codeExts = ['.md', '.py', '.js', '.ts', '.json', '.yaml', '.yml', '.go', '.rs', '.rb'];
for (const root of docRoots) {
  const isRepo = root !== RAW_DIR && root !== WIKI_DIR;
  findFiles(root, isRepo ? codeExts : ['.md']);
}

if (!mdFiles.length) {
  console.error(`No indexable files found in ${docRoots.join(', ')}`);
  process.exit(1);
}

const hasRepos = docRoots.some(r => r !== RAW_DIR && r !== WIKI_DIR);
console.log(`📚 Indexing ${mdFiles.length} files into LEANN index: ${INDEX_NAME}`);
console.log(`   Sources: ${docRoots.map(r => path.relative(ROOT, r) || r).join(', ')}`);
if (hasRepos) console.log(`   (includes ${docRoots.length - 1} repo${docRoots.length > 2 ? 's' : ''})`);
console.log(`   Mode: ${force ? 'full rebuild' : 'incremental'}`);
console.log('');

// Build LEANN index — unified across raw content + repos
const forceFlag = force ? '--force' : '';
const fileTypes = hasRepos ? codeExts.join(',') : '.md';
const docsArgs = docRoots.map(r => `"${r}"`).join(' ');
const cmd = [
  'leann build', INDEX_NAME,
  '--docs', ...docRoots.map(r => `"${r}"`),
  `--file-types ${fileTypes}`,
  '--embedding-model all-MiniLM-L6-v2',
  '--embedding-mode sentence-transformers',
  '--doc-chunk-size 350',
  '--doc-chunk-overlap 128',
  hasRepos ? '--include-hidden' : '',
  forceFlag,
].filter(Boolean).join(' ');

console.log(`   Running: ${cmd}\n`);

try {
  execSync(cmd, { stdio: 'inherit', timeout: 600000 });
  console.log(`\n✅ Index '${INDEX_NAME}' built/updated`);

  // Update ingest log — mark all as indexed
  if (fs.existsSync(INGEST_LOG)) {
    const entries = readEntries(INGEST_LOG).map((entry) => {
      const normalized = normalizeEntry(ROOT, instance, entry);
      normalized.indexed = true;
      normalized.status = 'indexed';
      return normalized;
    });
    writeEntries(INGEST_LOG, entries);
    console.log(`   Updated ingest log: ${entries.length} entries marked as indexed`);
  }

  console.log(`\nTest it:`);
  console.log(`   leann search ${INDEX_NAME} "how to approach building a new project"`);
  console.log(`   leann search ${INDEX_NAME} "feedback loops in systems thinking"`);
} catch (e) {
  console.error(`\n❌ Index build failed`);
  process.exit(1);
}
