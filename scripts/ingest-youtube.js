#!/usr/bin/env node
/**
 * Ingest YouTube video transcripts into raw/youtube/{creator}/
 *
 * Usage:
 *   node scripts/ingest-youtube.js <url> [--creator slug]
 *   node scripts/ingest-youtube.js https://www.youtube.com/watch?v=zjkBMFhNj_g --creator andrej-karpathy
 *   node scripts/ingest-youtube.js "https://www.youtube.com/@AndrejKarpathy" --creator andrej-karpathy --limit 10
 */

const { fetchTranscript } = require('youtube-transcript-plus');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { appendEntry, buildEntry, readEntries, relativeFile } = require('./ingest-log.js');

const args = process.argv.slice(2);
function getArg(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

const ROOT = path.join(__dirname, '..');
const instance = getArg('--instance') || 'btd';
const isLocal = args.includes('--local');
const { resolvePaths } = require('./scope.js');
const paths = resolvePaths(ROOT, isLocal ? 'local' : 'shared', instance);
const INSTANCE_DIR = paths.base;
const RAW_DIR = path.join(paths.rawDir, 'youtube');
const INGEST_LOG = paths.ingestLog;

const url = args.find((arg) => !arg.startsWith('--'));
const creator = getArg('--creator') || 'unknown';
const limit = parseInt(getArg('--limit') || '0', 10);
const dryRun = args.includes('--dry-run');

if (!url) {
  console.error('Usage: node scripts/ingest-youtube.js <url> [--creator slug] [--instance name] [--limit N] [--dry-run]');
  console.error('  --instance defaults to "btd" (our instance). Use "my-instance" for yours.');
  process.exit(1);
}

function getExistingVideoIds() {
  return new Set(
    readEntries(INGEST_LOG)
      .map((entry) => entry.video_id || null)
      .filter(Boolean)
      .map(String),
  );
}

function getVideoList(targetUrl, targetLimit) {
  const limitFlag = targetLimit > 0 ? `--playlist-end ${targetLimit}` : '';
  const cmd = `yt-dlp --flat-playlist ${limitFlag} --print-json "${targetUrl}" 2>/dev/null`;
  try {
    const output = execSync(cmd, { maxBuffer: 50 * 1024 * 1024, encoding: 'utf8' });
    return output.trim().split('\n').filter(Boolean).map((line) => {
      const parsed = JSON.parse(line);
      return {
        id: parsed.id,
        title: parsed.title,
        upload_date: parsed.upload_date || 'unknown',
        duration_string: parsed.duration_string || parsed.duration || 'unknown',
        url: parsed.url || parsed.webpage_url || `https://www.youtube.com/watch?v=${parsed.id}`,
        channel: parsed.channel || parsed.uploader || creator,
      };
    });
  } catch {
    try {
      const singleOutput = execSync(`yt-dlp --skip-download --print-json "${targetUrl}" 2>/dev/null`, {
        maxBuffer: 10 * 1024 * 1024,
        encoding: 'utf8',
      });
      const parsed = JSON.parse(singleOutput.trim());
      return [{
        id: parsed.id,
        title: parsed.title,
        upload_date: parsed.upload_date || 'unknown',
        duration_string: parsed.duration_string || parsed.duration || 'unknown',
        url: parsed.webpage_url || targetUrl,
        channel: parsed.channel || parsed.uploader || creator,
      }];
    } catch {
      console.error('Failed to get video metadata from:', targetUrl);
      return [];
    }
  }
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').substring(0, 80);
}

async function getTranscript(videoId) {
  try {
    let segments;
    try {
      segments = await fetchTranscript(videoId, { lang: 'en' });
    } catch (e) {
      // Fallback: try en-GB, en-US, or no language filter
      for (const fallbackLang of ['en-GB', 'en-US', undefined]) {
        try {
          segments = await fetchTranscript(videoId, fallbackLang ? { lang: fallbackLang } : {});
          break;
        } catch (_) {}
      }
      if (!segments) throw e;
    }
    return {
      method: 'youtube-captions',
      segments,
      text: segments.map((segment) => segment.text).join(' ')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"'),
    };
  } catch (error) {
    console.log(`    ⚠️  No captions: ${error.message}`);
    console.log('    💡 Fallback: download audio + local whisper (not implemented yet)');
    return null;
  }
}

function writeTranscript(video, transcript, creatorSlug) {
  const outDir = path.join(RAW_DIR, creatorSlug);
  fs.mkdirSync(outDir, { recursive: true });

  const fileSlug = slugify(video.title);
  const filename = `${video.upload_date}-${fileSlug}.md`;
  const filepath = path.join(outDir, filename);
  const relPath = relativeFile(ROOT, filepath);

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

${transcript.segments.map((segment) => `[${formatTime(segment.offset)}] ${segment.text}`).join('\n')}
`;

  fs.writeFileSync(filepath, md);
  return { relPath };
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

async function main() {
  console.log(`📡 Fetching video list from: ${url}`);
  console.log(`   Creator: ${creator}`);
  if (limit) console.log(`   Limit: ${limit}`);
  if (dryRun) console.log('   🏜️  DRY RUN');
  console.log('');

  const videos = getVideoList(url, limit);
  console.log(`Found ${videos.length} video(s)\n`);

  const existing = getExistingVideoIds();
  let ingested = 0;
  let skipped = 0;

  for (const video of videos) {
    if (existing.has(String(video.id))) {
      console.log(`⏭️  ${video.title} (already ingested)`);
      skipped += 1;
      continue;
    }

    console.log(`📥 ${video.title}`);
    console.log(`   ${video.url} | ${video.duration_string}`);

    if (dryRun) {
      console.log('   (dry run — skipping)\n');
      continue;
    }

    const transcript = await getTranscript(video.id);
    if (!transcript) {
      console.log('   ❌ No transcript available\n');
      continue;
    }

    const { relPath } = writeTranscript(video, transcript, creator);
    console.log(`   ✅ ${relPath}`);
    console.log(`   📝 ${transcript.segments.length} segments, ${transcript.text.length} chars\n`);

    appendEntry(INGEST_LOG, buildEntry({
      sourceId: video.id,
      creator,
      platform: 'youtube',
      title: video.title,
      file: relPath,
      url: video.url,
      indexed: false,
      extra: {
        video_id: video.id,
        transcript_method: transcript.method,
        segment_count: transcript.segments.length,
        char_count: transcript.text.length,
      },
    }));

    ingested += 1;
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Ingested: ${ingested}`);
  console.log(`⏭️  Skipped (already ingested): ${skipped}`);
  console.log(`❌ Failed: ${videos.length - ingested - skipped}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
