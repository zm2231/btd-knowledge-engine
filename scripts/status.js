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

console.log('\n═══════════════════════════════════════════');

// --- Local corpus section ---
const LOCAL_DIR = path.join(ROOT, 'local');
const LOCAL_REGISTRY = path.join(LOCAL_DIR, 'registry', 'creators.json');
const LOCAL_INGEST_LOG = path.join(LOCAL_DIR, 'registry', 'ingest-log.jsonl');
const LOCAL_PROFILE = path.join(LOCAL_DIR, 'profile.md');

if (fs.existsSync(LOCAL_DIR)) {
  console.log('');
  console.log('───────────────────────────────────────────');
  console.log('  Local Corpus');
  console.log('───────────────────────────────────────────\n');

  // Local creators
  const localReg = fs.existsSync(LOCAL_REGISTRY) ? JSON.parse(fs.readFileSync(LOCAL_REGISTRY, 'utf8')) : { creators: [] };
  const localActive = localReg.creators.filter(c => c.status === 'active');
  console.log(`  Creators: ${localActive.length}${localActive.length ? ' (' + localActive.map(c => c.slug).join(', ') + ')' : ''}`);

  // Local ingest count
  const localEntries = fs.existsSync(LOCAL_INGEST_LOG) ? readEntries(LOCAL_INGEST_LOG) : [];
  console.log(`  Ingested: ${localEntries.length}`);

  // Profile status
  if (fs.existsSync(LOCAL_PROFILE)) {
    const profileContent = fs.readFileSync(LOCAL_PROFILE, 'utf8');
    if (profileContent.includes('Profile not yet created')) {
      console.log(`  Profile: not yet created (run /btd-intake)`);
    } else {
      console.log(`  Profile: ✅ active`);
    }
  } else {
    console.log(`  Profile: none (run node scripts/init-local.js)`);
  }

  // Experiment status
  const expDir = path.join(LOCAL_DIR, 'experiments');
  if (fs.existsSync(expDir)) {
    const exps = fs.readdirSync(expDir).filter(f => f.endsWith('.md')).sort();
    if (exps.length) {
      const latest = exps[exps.length - 1];
      const content = fs.readFileSync(path.join(expDir, latest), 'utf8');
      const statusMatch = content.match(/status:\s*(\w+)/);
      const endMatch = content.match(/end_date:\s*"?([^"\n]+)/);
      let expStatus = statusMatch ? statusMatch[1] : 'unknown';
      if (endMatch && expStatus === 'active') {
        const due = new Date(endMatch[1]);
        if (due < new Date()) expStatus += ' ⚠️ OVERDUE';
        else expStatus += ` (due ${endMatch[1].replace(/"/g, '')})`;
      }
      console.log(`  Experiment ${exps.length}: ${expStatus}`);
    } else {
      console.log(`  Experiments: none`);
    }
  }

  console.log('');
}

console.log('═══════════════════════════════════════════\n');
