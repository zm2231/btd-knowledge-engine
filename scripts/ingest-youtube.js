#!/usr/bin/env node
/**
 * Ingest YouTube video transcripts into raw/youtube/{creator}/
 * 
 * Usage:
 *   node scripts/ingest-youtube.js <url> [--creator slug]
 *   node scripts/ingest-youtube.js https://www.youtube.com/watch?v=zjkBMFhNj_g --creator andrej-karpathy
 *   node scripts/ingest-youtube.js "https://www.youtube.com/@AndrejKarpathy" --creator andrej-karpathy --limit 10
 * 
 * Sources: youtube-transcript-plus for captions, yt-dlp for metadata + playlists
 * Fallback: if no captions available, downloads audio → local whisper transcription
 */

const { fetchTranscript } = require('youtube-transcript-plus');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const instance = getArg('--instance') || 'btd';
const INSTANCE_DIR = path.join(ROOT, instance);
const RAW_DIR = path.join(INSTANCE_DIR, 'raw', 'youtube');
const INGEST_LOG = path.join(INSTANCE_DIR, 'registry', 'ingest-log.jsonl');

// ---- Args ----
const args = process.argv.slice(2);

function getArg(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

const url = args.find(a => !a.startsWith('--'));
const creator = getArg('--creator') || 'unknown';
const limit = parseInt(getArg('--limit') || '0', 10);
const dryRun = args.includes('--dry-run');

if (!url) {
  console.error('Usage: node scripts/ingest-youtube.js <url> [--creator slug] [--instance name] [--limit N] [--dry-run]');
  console.error('  --instance defaults to "btd" (our instance). Use "my-instance" for yours.');
  process.exit(1);
}

// ---- Dedup ----
function getExistingVideoIds() {
  if (!fs.existsSync(INGEST_LOG)) return new Set();
  return new Set(
    fs.readFileSync(INGEST_LOG, 'utf-8')
      .trim().split('\n').filter(Boolean)
      .map(line => { try { return JSON.parse(line).video_id; } catch { return null; } })
      .filter(Boolean)
  );
}

function appendToLog(entry) {
  fs.appendFileSync(INGEST_LOG, JSON.stringify(entry) + '\n');
}

// ---- Metadata via yt-dlp ----
function getVideoList(url, limit) {
  const limitFlag = limit > 0 ? `--playlist-end ${limit}` : '';
  const cmd = `yt-dlp --flat-playlist ${limitFlag} --print-json "${url}" 2>/dev/null`;
  try {
    const output = execSync(cmd, { maxBuffer: 50 * 1024 * 1024, encoding: 'utf-8' });
    return output.trim().split('\n').filter(Boolean).map(line => {
      const j = JSON.parse(line);
      return {
        id: j.id,
        title: j.title,
        upload_date: j.upload_date || 'unknown',
        duration_string: j.duration_string || j.duration || 'unknown',
        url: j.url || j.webpage_url || `https://www.youtube.com/watch?v=${j.id}`,
        channel: j.channel || j.uploader || creator,
      };
    });
  } catch (e) {
    // Single video — try extracting its metadata
    try {
      const cmd2 = `yt-dlp --skip-download --print-json "${url}" 2>/dev/null`;
      const output = execSync(cmd2, { maxBuffer: 10 * 1024 * 1024, encoding: 'utf-8' });
      const j = JSON.parse(output.trim());
      return [{
        id: j.id,
        title: j.title,
        upload_date: j.upload_date || 'unknown',
        duration_string: j.duration_string || 'unknown',
        url: j.webpage_url || url,
        channel: j.channel || j.uploader || creator,
      }];
    } catch {
      console.error('Failed to get video metadata from:', url);
      return [];
    }
  }
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80);
}

// ---- Transcript fetching ----
async function getTranscript(videoId) {
  try {
    const segments = await fetchTranscript(videoId, { lang: 'en' });
    return {
      method: 'youtube-captions',
      segments,
      text: segments.map(s => s.text).join(' ').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"'),
    };
  } catch (e) {
    // No captions available — could fall back to whisper here
    console.log(`    ⚠️  No captions: ${e.message}`);
    console.log(`    💡 Fallback: download audio + local whisper (not implemented yet)`);
    return null;
  }
}

// ---- Write markdown ----
function writeTranscript(video, transcript, creatorSlug) {
  const outDir = path.join(RAW_DIR, creatorSlug);
  fs.mkdirSync(outDir, { recursive: true });

  const fileSlug = slugify(video.title);
  const filename = `${video.upload_date}-${fileSlug}.md`;
  const filepath = path.join(outDir, filename);
  const relPath = path.relative(ROOT, filepath);

  const md = `---
title: "${video.title.replace(/"/g, '\\"')}"
creator: "${creatorSlug}"
source_type: youtube
date: ${video.upload_date}
ingested: ${new Date().toISOString().split('T')[0]}
url: "${video.url}"
video_id: "${video.id}"
duration: "${video.duration_string}"
transcript_method: "${transcript.method}"
segment_count: ${transcript.segments.length}
char_count: ${transcript.text.length}
status: ingested
topics: []
meta_patterns: []
---

# ${video.title}

**Creator**: ${video.channel} | **Date**: ${video.upload_date} | **Duration**: ${video.duration_string}
**URL**: ${video.url}
**Transcript**: ${transcript.segments.length} segments, ${transcript.text.length} chars via ${transcript.method}

## Transcript

${transcript.text}

## Timed Segments

${transcript.segments.map(s => `[${formatTime(s.offset)}] ${s.text}`).join('\n')}
`;

  fs.writeFileSync(filepath, md);
  return { filepath, relPath, filename };
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ---- Main ----
async function main() {
  console.log(`📡 Fetching video list from: ${url}`);
  console.log(`   Creator: ${creator}`);
  if (limit) console.log(`   Limit: ${limit}`);
  if (dryRun) console.log(`   🏜️  DRY RUN`);
  console.log('');

  const videos = getVideoList(url, limit);
  console.log(`Found ${videos.length} video(s)\n`);

  const existing = getExistingVideoIds();
  let ingested = 0;
  let skipped = 0;

  for (const video of videos) {
    // Dedup
    if (existing.has(video.id)) {
      console.log(`⏭️  ${video.title} (already ingested)`);
      skipped++;
      continue;
    }

    console.log(`📥 ${video.title}`);
    console.log(`   ${video.url} | ${video.duration_string}`);

    if (dryRun) {
      console.log(`   (dry run — skipping)\n`);
      continue;
    }

    // Fetch transcript
    const transcript = await getTranscript(video.id);
    if (!transcript) {
      console.log(`   ❌ No transcript available\n`);
      continue;
    }

    // Write file
    const { relPath } = writeTranscript(video, transcript, creator);
    console.log(`   ✅ ${relPath}`);
    console.log(`   📝 ${transcript.segments.length} segments, ${transcript.text.length} chars\n`);

    // Log
    appendToLog({
      id: `${video.upload_date}-${slugify(video.title)}`,
      source_type: 'youtube',
      creator: creator,
      status: 'ingested',
      ingested_at: new Date().toISOString(),
      file: relPath,
      url: video.url,
      video_id: video.id,
      transcript_method: transcript.method,
      segment_count: transcript.segments.length,
      char_count: transcript.text.length,
      extracted: false,
      indexed: false,
    });

    ingested++;
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Ingested: ${ingested}`);
  console.log(`⏭️  Skipped (already ingested): ${skipped}`);
  console.log(`❌ Failed: ${videos.length - ingested - skipped}`);
}

main().catch(e => { console.error(e); process.exit(1); });
