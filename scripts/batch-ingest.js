#!/usr/bin/env node
/**
 * Batch ingest from a creator's catalog. Picks videos not yet ingested.
 * 
 * Usage:
 *   node scripts/batch-ingest.js <creator-slug>              # ingest all
 *   node scripts/batch-ingest.js <creator-slug> --limit 5    # ingest 5
 *   node scripts/batch-ingest.js <creator-slug> --top        # most viewed first
 *   node scripts/batch-ingest.js --all --limit 10            # 10 per creator
 *   node scripts/batch-ingest.js <creator-slug> --dry-run
 */

const { fetchTranscript } = require('youtube-transcript-plus');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function getArg(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

const instance = getArg('--instance') || 'btd';
const limit = parseInt(getArg('--limit') || '0', 10);
const dryRun = args.includes('--dry-run');
const topFirst = args.includes('--top');
const doAll = args.includes('--all');
const targetSlug = args.find(a => !a.startsWith('--') && !['--instance','--limit'].includes(args[args.indexOf(a)-1]));

if (!targetSlug && !doAll) {
  console.error('Usage: node scripts/batch-ingest.js <creator-slug> [--limit N] [--top] [--dry-run] [--instance name]');
  console.error('       node scripts/batch-ingest.js --all [--limit N]');
  process.exit(1);
}

const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, instance);
const CATALOG_DIR = path.join(INST, 'registry', 'catalogs');
const RAW_DIR = path.join(INST, 'raw', 'youtube');
const INGEST_LOG = path.join(INST, 'registry', 'ingest-log.jsonl');

// Load existing video IDs for dedup
function getExistingVideoIds() {
  if (!fs.existsSync(INGEST_LOG)) return new Set();
  return new Set(
    fs.readFileSync(INGEST_LOG, 'utf-8').trim().split('\n').filter(Boolean)
      .map(l => { try { return JSON.parse(l).video_id; } catch { return null; } })
      .filter(Boolean)
  );
}

function appendToLog(entry) {
  fs.appendFileSync(INGEST_LOG, JSON.stringify(entry) + '\n');
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').substring(0, 80);
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

async function ingestVideo(video, creatorSlug) {
  try {
    const segments = await fetchTranscript(video.id, { lang: 'en' });
    const text = segments.map(s => s.text).join(' ')
      .replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');

    const outDir = path.join(RAW_DIR, creatorSlug);
    fs.mkdirSync(outDir, { recursive: true });

    const dateStr = video.date || 'undated';
    const fileSlug = slugify(video.title);
    const filename = `${dateStr}-${fileSlug}.md`;
    const filepath = path.join(outDir, filename);
    const relPath = path.relative(ROOT, filepath);

    const md = `---
title: "${video.title.replace(/"/g, '\\"')}"
creator: "${creatorSlug}"
source_type: youtube
date: ${dateStr}
ingested: ${new Date().toISOString().split('T')[0]}
url: "${video.url}"
video_id: "${video.id}"
duration: "${video.duration_string || video.duration || 'unknown'}"
transcript_method: "youtube-captions"
segment_count: ${segments.length}
char_count: ${text.length}
status: ingested
topics: []
meta_patterns: []
---

# ${video.title}

**Creator**: ${creatorSlug} | **Duration**: ${video.duration_string || video.duration || 'unknown'}
**URL**: ${video.url}
**Transcript**: ${segments.length} segments, ${text.length} chars

## Transcript

${text}

## Timed Segments

${segments.map(s => `[${formatTime(s.offset)}] ${s.text}`).join('\n')}
`;

    fs.writeFileSync(filepath, md);

    appendToLog({
      id: `${dateStr}-${fileSlug}`,
      source_type: 'youtube',
      creator: creatorSlug,
      status: 'ingested',
      ingested_at: new Date().toISOString(),
      file: relPath,
      url: video.url,
      video_id: video.id,
      transcript_method: 'youtube-captions',
      segment_count: segments.length,
      char_count: text.length,
      extracted: false,
      indexed: false,
    });

    return { success: true, segments: segments.length, chars: text.length, file: relPath };
  } catch (e) {
    return { success: false, error: e.message };
  }
}

async function processCatalog(creatorSlug) {
  const catalogFile = path.join(CATALOG_DIR, `${creatorSlug}.json`);
  if (!fs.existsSync(catalogFile)) {
    console.error(`   No catalog for ${creatorSlug}. Run: node scripts/scan.js ${creatorSlug}`);
    return { ingested: 0, failed: 0, skipped: 0 };
  }

  const catalog = JSON.parse(fs.readFileSync(catalogFile, 'utf-8'));
  const existing = getExistingVideoIds();

  // Filter to not-yet-ingested
  let pending = catalog.items.filter(v => !existing.has(v.id));
  
  // Sort by views if --top
  if (topFirst) pending.sort((a, b) => (b.view_count || 0) - (a.view_count || 0));

  // Apply limit
  if (limit > 0) pending = pending.slice(0, limit);

  if (!pending.length) {
    console.log(`   All content already ingested.`);
    return { ingested: 0, failed: 0, skipped: 0 };
  }

  console.log(`   ${pending.length} to ingest (${catalog.items.length - pending.length} already done)\n`);

  let ingested = 0, failed = 0;

  for (const video of pending) {
    process.stdout.write(`   📥 ${video.title.substring(0, 60)}...`);

    if (dryRun) {
      console.log(` (dry run)`);
      continue;
    }

    const result = await ingestVideo(video, creatorSlug);
    if (result.success) {
      console.log(` ✅ ${result.segments} segments`);
      // Update catalog
      const item = catalog.items.find(i => i.id === video.id);
      if (item) item.ingested = true;
      ingested++;
    } else {
      console.log(` ❌ ${result.error.substring(0, 60)}`);
      failed++;
    }
  }

  // Save updated catalog
  catalog.ingested = catalog.items.filter(i => i.ingested).length;
  fs.writeFileSync(catalogFile, JSON.stringify(catalog, null, 2) + '\n');

  return { ingested, failed, skipped: catalog.items.length - pending.length - ingested };
}

async function main() {
  const catalogs = doAll
    ? fs.readdirSync(CATALOG_DIR).filter(f => f.endsWith('.json') && !f.includes('-twitter')).map(f => f.replace('.json', ''))
    : [targetSlug];

  let totalIngested = 0, totalFailed = 0;

  for (const slug of catalogs) {
    console.log(`\n━━━ ${slug} ━━━`);
    const result = await processCatalog(slug);
    totalIngested += result.ingested;
    totalFailed += result.failed;
  }

  console.log(`\n═══════════════════════════════════════`);
  console.log(`  Ingested: ${totalIngested} | Failed: ${totalFailed}`);
  if (totalIngested > 0) {
    console.log(`  Next: node scripts/index.js`);
  }
  console.log(`═══════════════════════════════════════\n`);
}

main().catch(e => { console.error(e); process.exit(1); });
