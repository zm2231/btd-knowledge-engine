#!/usr/bin/env node
/**
 * Batch ingest YouTube transcripts from a creator catalog.
 *
 * Usage:
 *   node scripts/batch-ingest.js <creator-slug>              # ingest all pending YouTube videos
 *   node scripts/batch-ingest.js <creator-slug> --limit 5    # ingest 5 videos
 *   node scripts/batch-ingest.js <creator-slug> --top        # most viewed first
 *   node scripts/batch-ingest.js --all --limit 10            # 10 YouTube videos per creator
 *   node scripts/batch-ingest.js <creator-slug> --dry-run
 */

const { fetchTranscript } = require('youtube-transcript-plus');
const fs = require('fs');
const path = require('path');
const { appendEntry, buildEntry, readEntries, relativeFile } = require('./ingest-log.js');

const args = process.argv.slice(2);
function getArg(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

const instance = getArg('--instance') || 'btd';
const isLocal = args.includes('--local');
const limit = parseInt(getArg('--limit') || '0', 10);
const dryRun = args.includes('--dry-run');
const topFirst = args.includes('--top');
const doAll = args.includes('--all');
const targetSlug = args.find((arg) => !arg.startsWith('--') && !['--instance', '--limit'].includes(args[args.indexOf(arg) - 1]));

if (!targetSlug && !doAll) {
  console.error('Usage: node scripts/batch-ingest.js <creator-slug> [--limit N] [--top] [--dry-run] [--instance name] [--local]');
  console.error('       node scripts/batch-ingest.js --all [--limit N]');
  process.exit(1);
}

const ROOT = path.join(__dirname, '..');
const { resolvePaths } = require('./scope.js');
const paths = resolvePaths(ROOT, isLocal ? 'local' : 'shared', instance);
const INST = paths.base;
const CATALOG_DIR = paths.catalogDir;
const RAW_DIR = path.join(paths.rawDir, 'youtube');
const INGEST_LOG = paths.ingestLog;

function getExistingVideoIds() {
  return new Set(
    readEntries(INGEST_LOG)
      .map((entry) => entry.video_id || null)
      .filter(Boolean)
      .map(String),
  );
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
    const text = segments.map((segment) => segment.text).join(' ')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"');

    const outDir = path.join(RAW_DIR, creatorSlug);
    fs.mkdirSync(outDir, { recursive: true });

    const dateStr = video.date || 'undated';
    const fileSlug = slugify(video.title);
    const filename = `${dateStr}-${fileSlug}.md`;
    const filepath = path.join(outDir, filename);
    const relPath = relativeFile(ROOT, filepath);

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

${segments.map((segment) => `[${formatTime(segment.offset)}] ${segment.text}`).join('\n')}
`;

    fs.writeFileSync(filepath, md);

    appendEntry(INGEST_LOG, buildEntry({
      sourceId: video.id,
      creator: creatorSlug,
      platform: 'youtube',
      title: video.title,
      file: relPath,
      url: video.url,
      indexed: false,
      extra: {
        video_id: video.id,
        transcript_method: 'youtube-captions',
        segment_count: segments.length,
        char_count: text.length,
      },
    }));

    return { success: true, segments: segments.length, chars: text.length, file: relPath };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function processCatalog(creatorSlug) {
  const catalogFile = path.join(CATALOG_DIR, `${creatorSlug}.json`);
  if (!fs.existsSync(catalogFile)) {
    console.error(`   No YouTube catalog for ${creatorSlug}. Run: node scripts/scan.js ${creatorSlug} --youtube${instance !== 'btd' ? ` --instance ${instance}` : ''}`);
    return { ingested: 0, failed: 0, skipped: 0 };
  }

  const catalog = JSON.parse(fs.readFileSync(catalogFile, 'utf8'));
  if (catalog.platform && catalog.platform !== 'youtube') {
    console.error(`   ${creatorSlug} is not a YouTube catalog.`);
    return { ingested: 0, failed: 0, skipped: 0 };
  }

  const existing = getExistingVideoIds();
  let pending = (catalog.items || []).filter((video) => !existing.has(String(video.id)) && !video.ingested);

  if (topFirst) {
    pending.sort((a, b) => (b.view_count || 0) - (a.view_count || 0));
  }

  if (limit > 0) {
    pending = pending.slice(0, limit);
  }

  if (!pending.length) {
    console.log('   All YouTube content already ingested.');
    return { ingested: 0, failed: 0, skipped: 0 };
  }

  console.log(`   ${pending.length} to ingest (${catalog.items.length - pending.length} already done)\n`);

  let ingested = 0;
  let failed = 0;

  for (const video of pending) {
    process.stdout.write(`   📥 ${video.title.substring(0, 60)}...`);

    if (dryRun) {
      console.log(' (dry run)');
      continue;
    }

    const result = await ingestVideo(video, creatorSlug);
    if (result.success) {
      console.log(` ✅ ${result.segments} segments`);
      const item = catalog.items.find((catalogItem) => catalogItem.id === video.id);
      if (item) item.ingested = true;
      ingested += 1;
    } else {
      console.log(` ❌ ${result.error.substring(0, 60)}`);
      failed += 1;
    }
  }

  catalog.ingested = catalog.items.filter((item) => item.ingested).length;
  fs.writeFileSync(catalogFile, `${JSON.stringify(catalog, null, 2)}\n`);

  return { ingested, failed, skipped: catalog.items.length - pending.length - ingested };
}

function listAllYoutubeCatalogs() {
  return fs.readdirSync(CATALOG_DIR)
    .filter((file) => file.endsWith('.json'))
    .filter((file) => {
      const data = JSON.parse(fs.readFileSync(path.join(CATALOG_DIR, file), 'utf8'));
      return !data.platform || data.platform === 'youtube';
    })
    .map((file) => file.replace(/\.json$/, ''));
}

async function main() {
  const catalogs = doAll ? listAllYoutubeCatalogs() : [targetSlug];

  let totalIngested = 0;
  let totalFailed = 0;

  for (const slug of catalogs) {
    console.log(`\n━━━ ${slug} ━━━`);
    const result = await processCatalog(slug);
    totalIngested += result.ingested;
    totalFailed += result.failed;
  }

  console.log('\n═══════════════════════════════════════');
  console.log(`  Ingested: ${totalIngested} | Failed: ${totalFailed}`);
  if (totalIngested > 0) {
    console.log(`  Next: node scripts/index.js${instance !== 'btd' ? ` --instance ${instance}` : ''}`);
  }
  console.log('═══════════════════════════════════════\n');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
