#!/usr/bin/env node
/**
 * Composite search across shared (btd-btd) and local (btd-local) LEANN indices.
 *
 * Usage:
 *   node scripts/search.js "how do transformers work"
 *   node scripts/search.js "query" --top-k 5
 *   node scripts/search.js "query" --shared-only    # skip local index
 *   node scripts/search.js "query" --local-only     # skip shared index
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const query = args.find(a => !a.startsWith('--'));
const topKIdx = args.indexOf('--top-k');
const topK = topKIdx !== -1 ? parseInt(args[topKIdx + 1], 10) : 5;
const sharedOnly = args.includes('--shared-only');
const localOnly = args.includes('--local-only');

if (!query) {
  console.error('Usage: node scripts/search.js "query" [--top-k N] [--shared-only] [--local-only]');
  process.exit(1);
}

const ROOT = path.join(__dirname, '..');
const LOCAL_DIR = path.join(ROOT, 'local');
const hasLocal = fs.existsSync(path.join(LOCAL_DIR, 'registry', 'creators.json'));

function searchIndex(indexName, label) {
  try {
    const cmd = `leann search ${indexName} "${query.replace(/"/g, '\\"')}" --top-k ${topK} --non-interactive`;
    const output = execSync(cmd, { encoding: 'utf8', timeout: 30000 });
    return { label, output: output.trim(), found: true };
  } catch (e) {
    // Index might not exist yet
    return { label, output: '', found: false };
  }
}

const results = [];

if (!localOnly) {
  results.push(searchIndex('btd-btd', 'shared'));
}

if (!sharedOnly && hasLocal) {
  results.push(searchIndex('btd-local', 'local'));
}

// Output
for (const r of results) {
  if (r.found && r.output) {
    console.log(`\n── ${r.label.toUpperCase()} CORPUS ──────────────────────────────`);
    console.log(r.output);
  }
}

if (!results.some(r => r.found && r.output)) {
  console.log('No results found.');
  if (!hasLocal && !sharedOnly) {
    console.log('(No local index found. Run `node scripts/init-local.js` + `node scripts/index.js --local` to enable local search.)');
  }
}
