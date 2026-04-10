#!/usr/bin/env node
/**
 * Show status of an instance — creators, catalogs, ingestion, indexing.
 * Usage: node scripts/status.js [--instance name]
 */

const fs = require('fs');
const path = require('path');
const { normalizeEntry, readEntries } = require('./ingest-log.js');

const args = process.argv.slice(2);
const instance = (() => {
  const i = args.indexOf('--instance');
  return i !== -1 ? args[i + 1] : 'btd';
})();

const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, instance);
const REGISTRY = path.join(INST, 'registry', 'creators.json');
const CATALOG_DIR = path.join(INST, 'registry', 'catalogs');
const INGEST_LOG = path.join(INST, 'registry', 'ingest-log.jsonl');

console.log('═══════════════════════════════════════════');
console.log(`  BTD Knowledge Engine — ${instance}`);
console.log('═══════════════════════════════════════════\n');

const registry = fs.existsSync(REGISTRY) ? JSON.parse(fs.readFileSync(REGISTRY, 'utf8')) : { creators: [] };
const active = registry.creators.filter((creator) => creator.status === 'active');
console.log(`  Creators: ${active.length} active / ${registry.creators.length} total\n`);

for (const creator of registry.creators) {
  const icon = creator.status === 'active' ? '●' : '○';
  const platforms = Object.keys(creator.platforms || {}).join(', ');
  const catalogCount = creator.catalog_count || 0;
  const scanned = creator.last_scanned ? `scanned ${creator.last_scanned.split('T')[0]}` : 'not scanned';
  console.log(`  ${icon} ${creator.slug} — ${creator.name}`);
  console.log(`    Platforms: ${platforms} | Catalog: ${catalogCount} items | ${scanned}`);
  if (creator.topics?.length) console.log(`    Topics: ${creator.topics.join(', ')}`);
  console.log('');
}

if (fs.existsSync(CATALOG_DIR)) {
  const catalogs = fs.readdirSync(CATALOG_DIR).filter((file) => file.endsWith('.json'));
  if (catalogs.length) {
    console.log('───────────────────────────────────────────');
    console.log("  Catalogs (what's published)\n");
    let totalPublished = 0;
    for (const file of catalogs) {
      const data = JSON.parse(fs.readFileSync(path.join(CATALOG_DIR, file), 'utf8'));
      const count = data.items?.length || 0;
      totalPublished += count;
      const platform = data.platform || 'youtube';
      console.log(`  ${data.creator} (${platform}): ${count} items`);
    }
    console.log(`\n  Total published: ${totalPublished}`);
    console.log('');
  }
}

if (!fs.existsSync(INGEST_LOG)) {
  console.log('  No content ingested yet.');
  console.log('\n═══════════════════════════════════════════\n');
  process.exit(0);
}

const entries = readEntries(INGEST_LOG)
  .map((entry) => normalizeEntry(ROOT, instance, entry))
  .filter((entry) => entry.creator !== 'test');

console.log('───────────────────────────────────────────');
console.log('  Ingested Content\n');
console.log(`  Total logged:   ${entries.length}`);

const downloaded = entries.filter((entry) => entry.status === 'downloaded').length;
const indexed = entries.filter((entry) => entry.status === 'indexed').length;
console.log(`  Downloaded:     ${downloaded}`);
console.log(`  Indexed:        ${indexed}`);

const byPlatform = {};
const byCreator = {};
for (const entry of entries) {
  byPlatform[entry.platform] = (byPlatform[entry.platform] || 0) + 1;
  byCreator[entry.creator] = (byCreator[entry.creator] || 0) + 1;
}

if (entries.length) {
  console.log(`\n  By platform: ${Object.entries(byPlatform).map(([key, value]) => `${key}: ${value}`).join(', ')}`);
  console.log(`  By creator: ${Object.entries(byCreator).map(([key, value]) => `${key}: ${value}`).join(', ')}`);
}

const pendingIndex = entries.filter((entry) => entry.status !== 'indexed');
if (pendingIndex.length) {
  console.log('\n  ⏳ Pending LEANN indexing:');
  pendingIndex.forEach((entry) => console.log(`     ${entry.file}`));
}

console.log('\n═══════════════════════════════════════════\n');
