#!/usr/bin/env node
/**
 * Podcast ingestion: download episodes → transcribe via whisper → save as markdown.
 *
 * Usage:
 *   node scripts/ingest-podcast.js <creator-slug> --feed <rss-url> [--limit 5] [--instance btd]
 *   node scripts/ingest-podcast.js <creator-slug> --file <mp3-path> --title "Episode Title"
 *   node scripts/ingest-podcast.js <creator-slug> --list  (list episodes from feed without downloading)
 *
 * Requires:
 *   - podcast-dl (npm dep, installed)
 *   - whisper endpoint at WHISPER_URL (default: http://100.122.112.83:8100/v1/audio/transcriptions)
 *     or local whisper-cli with a model
 */

const fs = require('fs');
const path = require('path');
const { execSync, execFileSync } = require('child_process');

// --- Args ---
const args = process.argv.slice(2);
const creatorSlug = args.find(a => !a.startsWith('--'));
const getFlag = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : null; };
const hasFlag = (name) => args.includes(`--${name}`);

const INSTANCE = getFlag('instance') || 'btd';
const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, INSTANCE);
const RAW_DIR = path.join(INST, 'raw', 'podcasts');
const REGISTRY = path.join(INST, 'registry', 'creators.json');
const INGEST_LOG = path.join(INST, 'registry', 'ingest-log.jsonl');
const TEMP_DIR = path.join(ROOT, '.tmp', 'podcast-dl');

const WHISPER_URL = process.env.WHISPER_URL || 'http://100.122.112.83:8100/v1/audio/transcriptions';
const WHISPER_MODEL = process.env.WHISPER_MODEL || 'whisper-1';
const MAX_CHUNK_MB = parseInt(process.env.WHISPER_MAX_MB || '24'); // split files larger than this

const LIMIT = parseInt(getFlag('limit') || '5');
const FEED_URL = getFlag('feed');
const FILE_PATH = getFlag('file');
const TITLE = getFlag('title');
const DRY_RUN = hasFlag('dry-run');
const LIST_ONLY = hasFlag('list');

if (!creatorSlug) {
  console.error('Usage: node scripts/ingest-podcast.js <creator-slug> --feed <rss-url> [--limit 5]');
  console.error('       node scripts/ingest-podcast.js <creator-slug> --file <mp3> --title "Title"');
  console.error('       node scripts/ingest-podcast.js <creator-slug> --list --feed <rss-url>');
  process.exit(1);
}

// --- Helpers ---
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
}

function alreadyIngested(id) {
  if (!fs.existsSync(INGEST_LOG)) return false;
  const lines = fs.readFileSync(INGEST_LOG, 'utf8').trim().split('\n').filter(Boolean);
  return lines.some(l => {
    try { return JSON.parse(l).source_id === id; } catch { return false; }
  });
}

function appendIngestLog(entry) {
  fs.mkdirSync(path.dirname(INGEST_LOG), { recursive: true });
  fs.appendFileSync(INGEST_LOG, JSON.stringify(entry) + '\n');
}

function listEpisodes(feedUrl, limit) {
  const raw = execSync(`npx podcast-dl --url "${feedUrl}" --list json --limit ${limit} 2>/dev/null`, {
    encoding: 'utf8', maxBuffer: 50 * 1024 * 1024
  });
  return JSON.parse(raw);
}

function downloadEpisode(feedUrl, offset) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  // Clear temp dir
  for (const f of fs.readdirSync(TEMP_DIR)) {
    fs.unlinkSync(path.join(TEMP_DIR, f));
  }
  // Use a sanitized episode template to avoid special chars in filenames
  execSync(
    `npx podcast-dl --url "${feedUrl}" --out-dir "${TEMP_DIR}" --offset ${offset} --limit 1 --include-episode-meta --episode-template "episode-${offset}" 2>&1`,
    { encoding: 'utf8', maxBuffer: 200 * 1024 * 1024, timeout: 600000 }
  );
  // Find the downloaded audio file
  const files = fs.readdirSync(TEMP_DIR).filter(f => /\.(mp3|m4a|ogg|wav|flac|opus)$/i.test(f));
  if (files.length === 0) throw new Error('No audio file downloaded');
  return path.join(TEMP_DIR, files[0]);
}

function getFileSizeMB(filePath) {
  return fs.statSync(filePath).size / (1024 * 1024);
}

function splitAudio(filePath, chunkMB) {
  // Use ffmpeg to split into chunks by duration estimate
  const sizeMB = getFileSizeMB(filePath);
  if (sizeMB <= chunkMB) return [filePath];
  
  const chunks = Math.ceil(sizeMB / chunkMB);
  // Get duration
  let duration;
  try {
    const probe = execSync(`ffprobe -v quiet -show_entries format=duration -of csv=p=0 "${filePath}"`, { encoding: 'utf8' });
    duration = parseFloat(probe.trim());
  } catch {
    console.log(`   ⚠️  Can't probe duration, sending full file (${sizeMB.toFixed(1)}MB)`);
    return [filePath];
  }
  
  const chunkDuration = Math.floor(duration / chunks);
  const chunkPaths = [];
  const ext = path.extname(filePath);
  
  for (let i = 0; i < chunks; i++) {
    const start = i * chunkDuration;
    const chunkPath = filePath.replace(ext, `-chunk${i}${ext}`);
    execSync(
      `ffmpeg -y -i "${filePath}" -ss ${start} -t ${chunkDuration} -c copy "${chunkPath}" 2>/dev/null`,
      { timeout: 120000 }
    );
    chunkPaths.push(chunkPath);
  }
  
  return chunkPaths;
}

function transcribeFile(audioPath) {
  const sizeMB = getFileSizeMB(audioPath);
  const chunks = splitAudio(audioPath, MAX_CHUNK_MB);
  
  const transcripts = [];
  for (let i = 0; i < chunks.length; i++) {
    if (chunks.length > 1) {
      process.stdout.write(`   🎤 Transcribing chunk ${i + 1}/${chunks.length}...`);
    } else {
      process.stdout.write(`   🎤 Transcribing (${sizeMB.toFixed(1)}MB)...`);
    }
    
    try {
      const result = execSync(
        `curl -s "${WHISPER_URL}" -F "file=@${chunks[i]}" -F "model=${WHISPER_MODEL}" -F "response_format=verbose_json"`,
        { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 600000 }
      );
      
      const parsed = JSON.parse(result);
      
      if (parsed.segments) {
        // Verbose JSON with timestamps
        transcripts.push(...parsed.segments.map(s => ({
          start: s.start,
          end: s.end,
          text: s.text.trim()
        })));
      } else if (parsed.text) {
        transcripts.push({ start: 0, end: 0, text: parsed.text.trim() });
      } else {
        throw new Error('Unexpected response format');
      }
      
      console.log(' ✅');
    } catch (err) {
      console.log(` ❌ ${err.message}`);
      // Try plain text fallback
      try {
        const result = execSync(
          `curl -s "${WHISPER_URL}" -F "file=@${chunks[i]}" -F "model=${WHISPER_MODEL}"`,
          { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 600000 }
        );
        const parsed = JSON.parse(result);
        if (parsed.text) {
          transcripts.push({ start: 0, end: 0, text: parsed.text.trim() });
          console.log('   ✅ (plain text fallback)');
        }
      } catch (e2) {
        console.log(`   ❌ Transcription failed completely: ${e2.message}`);
      }
    }
    
    // Clean up chunk files
    if (chunks[i] !== audioPath) {
      try { fs.unlinkSync(chunks[i]); } catch {}
    }
  }
  
  return transcripts;
}

function formatTimestamp(seconds) {
  if (!seconds) return '';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
}

function segmentsToMarkdown(segments, meta) {
  const date = meta.pubDate ? new Date(meta.pubDate).toISOString().slice(0, 10) : 'undated';
  
  let frontmatter = `---\n`;
  frontmatter += `title: "${meta.title.replace(/"/g, '\\"')}"\n`;
  frontmatter += `creator: "${meta.creator}"\n`;
  frontmatter += `platform: podcast\n`;
  frontmatter += `date: "${date}"\n`;
  if (meta.feedUrl) frontmatter += `feed_url: "${meta.feedUrl}"\n`;
  if (meta.episodeNum) frontmatter += `episode_number: ${meta.episodeNum}\n`;
  frontmatter += `segments: ${segments.length}\n`;
  frontmatter += `---\n\n`;
  
  let body = `# ${meta.title}\n\n`;
  
  const hasTimestamps = segments.some(s => s.start > 0 || s.end > 0);
  
  if (hasTimestamps) {
    for (const seg of segments) {
      const ts = formatTimestamp(seg.start);
      body += ts ? `**[${ts}]** ${seg.text}\n\n` : `${seg.text}\n\n`;
    }
  } else {
    // No timestamps — just paragraphs, break every ~500 words
    const fullText = segments.map(s => s.text).join(' ');
    const words = fullText.split(/\s+/);
    const chunkSize = 500;
    for (let i = 0; i < words.length; i += chunkSize) {
      body += words.slice(i, i + chunkSize).join(' ') + '\n\n';
    }
  }
  
  return frontmatter + body;
}

// --- Main ---
async function main() {
  // Single file mode
  if (FILE_PATH) {
    if (!TITLE) {
      console.error('--title required with --file');
      process.exit(1);
    }
    console.log(`\n📥 Transcribing: ${FILE_PATH}`);
    const segments = transcribeFile(FILE_PATH);
    if (segments.length === 0) {
      console.error('❌ No transcript produced');
      process.exit(1);
    }
    
    const creatorDir = path.join(RAW_DIR, creatorSlug);
    fs.mkdirSync(creatorDir, { recursive: true });
    
    const filename = `${slugify(TITLE)}.md`;
    const md = segmentsToMarkdown(segments, { title: TITLE, creator: creatorSlug });
    fs.writeFileSync(path.join(creatorDir, filename), md);
    
    appendIngestLog({
      source_id: `podcast:${creatorSlug}:${slugify(TITLE)}`,
      creator: creatorSlug,
      platform: 'podcast',
      title: TITLE,
      path: `${INSTANCE}/raw/podcasts/${creatorSlug}/${filename}`,
      ingested_at: new Date().toISOString(),
      status: 'downloaded',
      segments: segments.length
    });
    
    console.log(`✅ Saved: ${creatorDir}/${filename} (${segments.length} segments)`);
    return;
  }
  
  // Feed mode
  if (!FEED_URL) {
    // Try to get feed from registry
    if (fs.existsSync(REGISTRY)) {
      const reg = JSON.parse(fs.readFileSync(REGISTRY, 'utf8'));
      const creator = reg.creators.find(c => c.slug === creatorSlug);
      if (creator?.platforms?.podcast?.feed_url) {
        return main_feed(creator.platforms.podcast.feed_url);
      }
    }
    console.error('No --feed URL and no podcast feed in registry for this creator.');
    console.error('Use: --feed <rss-url> or register with: node scripts/add-creator.js ... --podcast <feed-url>');
    process.exit(1);
  }
  
  return main_feed(FEED_URL);
}

async function main_feed(feedUrl) {
  console.log(`\n🎙️  Podcast ingestion: ${creatorSlug}`);
  console.log(`   Feed: ${feedUrl}`);
  
  // List episodes
  let episodes;
  try {
    episodes = listEpisodes(feedUrl, LIST_ONLY ? 50 : LIMIT);
  } catch (err) {
    console.error(`❌ Failed to list episodes: ${err.message}`);
    process.exit(1);
  }
  
  if (LIST_ONLY) {
    console.log(`\n   ${episodes.length} episodes:\n`);
    episodes.forEach((ep, i) => {
      const date = ep.pubDate ? new Date(ep.pubDate).toISOString().slice(0, 10) : '??';
      console.log(`   ${String(i).padStart(3)}  ${date}  ${ep.title}`);
    });
    return;
  }
  
  console.log(`   Episodes: ${episodes.length} to process\n`);
  
  const creatorDir = path.join(RAW_DIR, creatorSlug);
  fs.mkdirSync(creatorDir, { recursive: true });
  
  let ingested = 0;
  let failed = 0;
  
  for (let i = 0; i < episodes.length; i++) {
    const ep = episodes[i];
    const sourceId = `podcast:${creatorSlug}:${ep.episodeNum || slugify(ep.title)}`;
    
    if (alreadyIngested(sourceId)) {
      console.log(`   ⏭️  ${ep.title} (already ingested)`);
      continue;
    }
    
    const date = ep.pubDate ? new Date(ep.pubDate).toISOString().slice(0, 10) : 'undated';
    console.log(`   📥 ${ep.title}`);
    
    if (DRY_RUN) {
      console.log(`      (dry run — would download and transcribe)`);
      continue;
    }
    
    try {
      // Download
      process.stdout.write(`      Downloading...`);
      const audioPath = downloadEpisode(feedUrl, i);
      const sizeMB = getFileSizeMB(audioPath);
      console.log(` ✅ (${sizeMB.toFixed(1)}MB)`);
      
      // Transcribe
      const segments = transcribeFile(audioPath);
      
      if (segments.length === 0) {
        console.log(`      ❌ No transcript produced, skipping`);
        failed++;
        continue;
      }
      
      // Save markdown
      const filename = `${date}-${slugify(ep.title)}.md`;
      const md = segmentsToMarkdown(segments, {
        title: ep.title,
        creator: creatorSlug,
        pubDate: ep.pubDate,
        feedUrl: feedUrl,
        episodeNum: ep.episodeNum
      });
      
      fs.writeFileSync(path.join(creatorDir, filename), md);
      
      appendIngestLog({
        source_id: sourceId,
        creator: creatorSlug,
        platform: 'podcast',
        title: ep.title,
        path: `${INSTANCE}/raw/podcasts/${creatorSlug}/${filename}`,
        ingested_at: new Date().toISOString(),
        status: 'downloaded',
        segments: segments.length,
        episode_number: ep.episodeNum
      });
      
      console.log(`      ✅ Saved: ${filename} (${segments.length} segments)`);
      ingested++;
      
      // Clean up audio
      try { fs.unlinkSync(audioPath); } catch {}
      
    } catch (err) {
      console.log(`      ❌ Failed: ${err.message}`);
      failed++;
    }
  }
  
  console.log(`\n═══════════════════════════════════════`);
  console.log(`  Ingested: ${ingested} | Failed: ${failed}`);
  if (ingested > 0) console.log(`  Next: node scripts/index.js --instance ${INSTANCE}`);
  console.log(`═══════════════════════════════════════\n`);
}

main().catch(err => { console.error(err); process.exit(1); });
