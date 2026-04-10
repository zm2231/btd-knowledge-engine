#!/usr/bin/env node
/**
 * Show status of an instance — creators, catalog, ingestion, indexing.
 * Usage: node scripts/status.js [--instance name]
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const instance = (() => { const i = args.indexOf('--instance'); return i !== -1 ? args[i+1] : 'btd'; })();

const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, instance);
const REGISTRY = path.join(INST, 'registry', 'creators.json');
const CATALOG_DIR = path.join(INST, 'registry', 'catalogs');
const INGEST_LOG = path.join(INST, 'registry', 'ingest-log.jsonl');

console.log(`═══════════════════════════════════════════`);
console.log(`  BTD Knowledge Engine — ${instance}`);
console.log(`═══════════════════════════════════════════\n`);

// Creators
const registry = fs.existsSync(REGISTRY) ? JSON.parse(fs.readFileSync(REGISTRY, 'utf-8')) : { creators: [] };
const active = registry.creators.filter(c => c.status === 'active');
console.log(`  Creators: ${active.length} active / ${registry.creators.length} total\n`);

for (const c of registry.creators) {
  const icon = c.status === 'active' ? '●' : '○';
  const platforms = Object.keys(c.platforms).join(', ');
  const catalogCount = c.catalog_count || 0;
  const scanned = c.last_scanned ? `scanned ${c.last_scanned.split('T')[0]}` : 'not scanned';
  console.log(`  ${icon} ${c.slug} — ${c.name}`);
  console.log(`    Platforms: ${platforms} | Catalog: ${catalogCount} items | ${scanned}`);
  if (c.topics?.length) console.log(`    Topics: ${c.topics.join(', ')}`);
  console.log('');
}

// Catalogs
if (fs.existsSync(CATALOG_DIR)) {
  const catalogs = fs.readdirSync(CATALOG_DIR).filter(f => f.endsWith('.json'));
  if (catalogs.length) {
    console.log(`───────────────────────────────────────────`);
    console.log(`  Catalogs (what's published)\n`);
    let totalPublished = 0;
    for (const file of catalogs) {
      const data = JSON.parse(fs.readFileSync(path.join(CATALOG_DIR, file), 'utf-8'));
      const count = data.items?.length || 0;
      totalPublished += count;
      const platform = data.platform || 'youtube';
      console.log(`  ${data.creator} (${platform}): ${count} items`);
    }
    console.log(`\n  Total published: ${totalPublished}`);
    console.log('');
  }
}

// Ingest log
if (fs.existsSync(INGEST_LOG)) {
  const entries = fs.readFileSync(INGEST_LOG, 'utf-8').trim().split('\n').filter(Boolean).map(l => JSON.parse(l));
  
  const ingested = entries.length;
  const extracted = entries.filter(e => e.extracted).length;
  const indexed = entries.filter(e => e.indexed).length;

  console.log(`───────────────────────────────────────────`);
  console.log(`  Ingested Content\n`);
  console.log(`  Downloaded:    ${ingested}`);
  console.log(`  Extracted:     ${extracted}  (${ingested - extracted} pending)`);
  console.log(`  Indexed:       ${indexed}  (${ingested - indexed} pending)`);

  // By source
  const bySource = {};
  const byCreator = {};
  for (const e of entries) {
    bySource[e.source_type] = (bySource[e.source_type] || 0) + 1;
    byCreator[e.creator] = (byCreator[e.creator] || 0) + 1;
  }
  console.log(`\n  By source: ${Object.entries(bySource).map(([k,v]) => `${k}: ${v}`).join(', ')}`);
  console.log(`  By creator: ${Object.entries(byCreator).map(([k,v]) => `${k}: ${v}`).join(', ')}`);

  // Pending
  const pendingExtract = entries.filter(e => !e.extracted);
  const pendingIndex = entries.filter(e => !e.indexed);
  if (pendingExtract.length) {
    console.log(`\n  ⏳ Pending extraction:`);
    pendingExtract.forEach(e => console.log(`     ${e.file}`));
  }
  if (pendingIndex.length) {
    console.log(`\n  ⏳ Pending LEANN indexing:`);
    pendingIndex.forEach(e => console.log(`     ${e.file}`));
  }
} else {
  console.log(`  No content ingested yet.`);
}

console.log(`\n═══════════════════════════════════════════\n`);
