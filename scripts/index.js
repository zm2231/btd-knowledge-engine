#!/usr/bin/env node
/**
 * Build/update the LEANN index for an instance.
 * Indexes all content in raw/ — incremental by default.
 * 
 * Usage:
 *   node scripts/index.js                    # build/update btd index
 *   node scripts/index.js --force            # full rebuild
 *   node scripts/index.js --instance other
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const instance = (() => { const i = args.indexOf('--instance'); return i !== -1 ? args[i+1] : 'btd'; })();
const force = args.includes('--force');

const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, instance);
const RAW_DIR = path.join(INST, 'raw');
const INDEX_NAME = `btd-${instance}`;
const INGEST_LOG = path.join(INST, 'registry', 'ingest-log.jsonl');

// Check raw dir has content
const mdFiles = [];
function findMd(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) findMd(full);
    else if (entry.name.endsWith('.md') && !entry.name.startsWith('.')) mdFiles.push(full);
  }
}
findMd(RAW_DIR);

if (!mdFiles.length) {
  console.error(`No markdown files found in ${RAW_DIR}`);
  process.exit(1);
}

console.log(`📚 Indexing ${mdFiles.length} files into LEANN index: ${INDEX_NAME}`);
console.log(`   Source: ${RAW_DIR}`);
console.log(`   Mode: ${force ? 'full rebuild' : 'incremental'}`);
console.log('');

// Build LEANN index
const forceFlag = force ? '--force' : '';
const cmd = [
  'leann build', INDEX_NAME,
  '--docs', RAW_DIR,
  '--file-types .md',
  '--embedding-model all-MiniLM-L6-v2',
  '--embedding-mode sentence-transformers',
  '--doc-chunk-size 350',
  '--doc-chunk-overlap 128',
  forceFlag,
].filter(Boolean).join(' ');

console.log(`   Running: ${cmd}\n`);

try {
  execSync(cmd, { stdio: 'inherit', timeout: 600000 });
  console.log(`\n✅ Index '${INDEX_NAME}' built/updated`);

  // Update ingest log — mark all as indexed
  if (fs.existsSync(INGEST_LOG)) {
    const lines = fs.readFileSync(INGEST_LOG, 'utf-8').trim().split('\n').filter(Boolean);
    const updated = lines.map(line => {
      const entry = JSON.parse(line);
      entry.indexed = true;
      return JSON.stringify(entry);
    });
    fs.writeFileSync(INGEST_LOG, updated.join('\n') + '\n');
    console.log(`   Updated ingest log: ${lines.length} entries marked as indexed`);
  }

  console.log(`\nTest it:`);
  console.log(`   leann search ${INDEX_NAME} "how to approach building a new project"`);
  console.log(`   leann search ${INDEX_NAME} "feedback loops in systems thinking"`);
} catch (e) {
  console.error(`\n❌ Index build failed`);
  process.exit(1);
}
