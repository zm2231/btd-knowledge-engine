#!/usr/bin/env node
/**
 * Podcast ingestion: download episodes → transcribe via whisper → save as markdown.
 *
 * Usage:
 *   node scripts/ingest-podcast.js <creator-slug> --feed <rss-url> [--limit 5] [--instance btd]
 *   node scripts/ingest-podcast.js <creator-slug> --file <mp3-path> --title "Episode Title"
 *   node scripts/ingest-podcast.js <creator-slug> --list  (list episodes from feed without downloading)
 *
 * Whisper backend (auto-detected in this order):
 *   1. WHISPER_URL env var → any OpenAI-compatible /v1/audio/transcriptions endpoint
 *   2. Local whisper-cli (brew install whisper-cpp) → auto-downloads ggml-base.en model if needed
 *   3. Ollama (if it ever adds audio support)
 *
 * Override:
 *   WHISPER_URL="http://localhost:8080/v1/audio/transcriptions" node scripts/ingest-podcast.js ...
 *   WHISPER_MODEL_PATH="/path/to/ggml-large-v3.bin" node scripts/ingest-podcast.js ...
 */

const fs = require('fs');
const path = require('path');
const { execSync, execFileSync } = require('child_process');
const { appendEntry, buildEntry, readEntries, relativeFile } = require('./ingest-log.js');

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

const MAX_CHUNK_MB = parseInt(process.env.WHISPER_MAX_MB || '24');

// --- Whisper backend detection ---
const MODELS_DIR = path.join(ROOT, '.models');
const DEFAULT_MODEL_NAME = 'ggml-base.en.bin';
const MODEL_URL = `https://huggingface.co/ggerganov/whisper.cpp/resolve/main/${DEFAULT_MODEL_NAME}`;

function detectWhisperBackend() {
  // 1. Explicit URL override
  if (process.env.WHISPER_URL) {
    return {
      type: 'api',
      url: process.env.WHISPER_URL,
      model: process.env.WHISPER_MODEL || 'whisper-1'
    };
  }

  // 2. lightning-whisper-mlx (fastest on Apple Silicon, no server needed)
  try {
    execSync("python3 -c 'from lightning_whisper_mlx import LightningWhisperMLX' 2>/dev/null", { encoding: 'utf8', stdio: 'pipe' });
    const modelSize = process.env.WHISPER_MLX_MODEL || 'base';
    return { type: 'mlx', model: modelSize };
  } catch (e) { if (process.env.DEBUG) console.error('  MLX detect failed:', e.message?.split('\n')[0]); }

  // 3. Local whisper-cli (whisper.cpp)
  try {
    const whisperPath = execSync('which whisper-cli 2>/dev/null', { encoding: 'utf8' }).trim();
    if (whisperPath) {
      const modelPath = findOrDownloadModel();
      if (modelPath) {
        return { type: 'local', binary: whisperPath, model: modelPath };
      }
    }
  } catch {}

  // 4. Check common API endpoints
  for (const url of [
    'http://127.0.0.1:8080/v1/audio/transcriptions',  // whisper.cpp server
    'http://127.0.0.1:8000/v1/audio/transcriptions',  // generic
  ]) {
    try {
      execFileSync('curl', ['-sf', '--connect-timeout', '2', url.replace('/audio/transcriptions', '/models')], { stdio: 'ignore' });
      return { type: 'api', url, model: process.env.WHISPER_MODEL || 'whisper-1' };
    } catch {}
  }

  return null;
}

function findOrDownloadModel() {
  // Check env override
  if (process.env.WHISPER_MODEL_PATH && fs.existsSync(process.env.WHISPER_MODEL_PATH)) {
    return process.env.WHISPER_MODEL_PATH;
  }

  // Check common locations
  const candidates = [
    path.join(MODELS_DIR, DEFAULT_MODEL_NAME),
    path.join(MODELS_DIR, 'ggml-small.en.bin'),
    path.join(MODELS_DIR, 'ggml-medium.bin'),
    path.join(MODELS_DIR, 'ggml-large-v3.bin'),
    // Homebrew whisper-cpp models
    ...(() => {
      try {
        const dir = execSync('brew --prefix whisper-cpp 2>/dev/null', { encoding: 'utf8' }).trim();
        return fs.readdirSync(path.join(dir, 'share', 'whisper-cpp'))
          .filter(f => f.endsWith('.bin') && !f.includes('tiny'))
          .map(f => path.join(dir, 'share', 'whisper-cpp', f));
      } catch { return []; }
    })(),
    // Home directory
    path.join(process.env.HOME || '', '.cache', 'whisper', DEFAULT_MODEL_NAME),
  ];

  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }

  // Auto-download base.en (142MB)
  console.log(`\n   📥 Downloading whisper model: ${DEFAULT_MODEL_NAME} (142MB)...`);
  console.log(`      From: ${MODEL_URL}`);
  fs.mkdirSync(MODELS_DIR, { recursive: true });
  const dest = path.join(MODELS_DIR, DEFAULT_MODEL_NAME);
  try {
    execFileSync('curl', ['-L', '-o', dest, MODEL_URL], { timeout: 300000, stdio: 'inherit' });
    console.log(`      ✅ Saved to ${dest}`);
    return dest;
  } catch (e) {
    console.error(`      ❌ Download failed: ${e.message}`);
    console.error(`      Manual download: curl -L -o ${dest} "${MODEL_URL}"`);
    return null;
  }
}

const WHISPER = detectWhisperBackend();
if (!WHISPER && !hasFlag('list')) {
  console.error(`❌ No whisper backend found. Options:`);
  console.error(`   1. Set WHISPER_URL to an OpenAI-compatible transcription endpoint`);
  console.error(`   2. Install whisper-cli: brew install whisper-cpp`);
  console.error(`      (a ggml-base.en model will be auto-downloaded on first use)`);
  console.error(`   3. Run a whisper server: whisper-server -m model.bin --port 8080`);
  process.exit(1);
} else if (WHISPER && !hasFlag('list')) {
  const desc = WHISPER.type === 'mlx'
    ? `lightning-whisper-mlx (${WHISPER.model})`
    : WHISPER.type === 'api'
    ? `API → ${WHISPER.url}`
    : `local whisper-cli → ${path.basename(WHISPER.model)}`;
  console.log(`   🎤 Whisper: ${desc}`);
}

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
  return readEntries(INGEST_LOG).some((entry) => String(entry.source_id || '') === String(id));
}

function appendIngestLog(entry) {
  appendEntry(INGEST_LOG, entry);
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

function transcribeChunkMLX(audioPath) {
  // lightning-whisper-mlx: runs natively on Apple Silicon, fastest option
  const modelSize = WHISPER.model || 'base';
  const scriptPath = path.join(TEMP_DIR, '_whisper_mlx.py');
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  fs.writeFileSync(scriptPath, `import json
from lightning_whisper_mlx import LightningWhisperMLX
w = LightningWhisperMLX(model='${modelSize}', batch_size=12, quant=None)
r = w.transcribe('${audioPath.replace(/'/g, "\\'")}')
segs = []
for s in (r.get('segments') or []):
    if isinstance(s, (list, tuple)) and len(s) >= 3:
        segs.append({"start": s[0]/1000, "end": s[1]/1000, "text": s[2].strip()})
    elif isinstance(s, dict):
        segs.append({"start": s.get("start",0), "end": s.get("end",0), "text": s.get("text","").strip()})
if not segs and r.get('text'):
    segs.append({"start": 0, "end": 0, "text": r['text'].strip()})
print(json.dumps(segs))
`);
  const result = execSync(`python3 "${scriptPath}"`, {
    encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 600000
  });
  return JSON.parse(result);
}

function transcribeChunkLocal(audioPath) {
  // whisper-cli (whisper.cpp): local binary with ggml model
  const outBase = audioPath.replace(/\.[^.]+$/, '-out');
  execSync(
    `"${WHISPER.binary}" -m "${WHISPER.model}" -f "${audioPath}" -oj --no-prints -of "${outBase}" 2>/dev/null`,
    { timeout: 600000 }
  );
  const jsonPath = outBase + '.json';
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  try { fs.unlinkSync(jsonPath); } catch {}
  
  return (data.transcription || []).map(s => ({
    start: parseTimestamp(s.timestamps?.from),
    end: parseTimestamp(s.timestamps?.to),
    text: (s.text || '').trim()
  })).filter(s => s.text);
}

function parseTimestamp(ts) {
  // "00:00:00,000" → seconds
  if (!ts) return 0;
  const match = ts.match(/(\d+):(\d+):(\d+)/);
  if (!match) return 0;
  return parseInt(match[1]) * 3600 + parseInt(match[2]) * 60 + parseInt(match[3]);
}

function transcribeChunkAPI(audioPath) {
  // OpenAI-compatible API endpoint
  const result = execFileSync(
    'curl',
    ['-s', WHISPER.url, '-F', `file=@${audioPath}`, '-F', `model=${WHISPER.model}`, '-F', 'response_format=verbose_json'],
    { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024, timeout: 600000 }
  );
  const parsed = JSON.parse(result);
  
  if (parsed.segments) {
    return parsed.segments.map(s => ({ start: s.start, end: s.end, text: s.text.trim() }));
  } else if (parsed.text) {
    return [{ start: 0, end: 0, text: parsed.text.trim() }];
  }
  throw new Error('Unexpected API response format');
}

function transcribeChunk(audioPath) {
  if (WHISPER.type === 'mlx') return transcribeChunkMLX(audioPath);
  if (WHISPER.type === 'local') return transcribeChunkLocal(audioPath);
  if (WHISPER.type === 'api') return transcribeChunkAPI(audioPath);
  throw new Error('No whisper backend configured');
}

function transcribeFile(audioPath) {
  const sizeMB = getFileSizeMB(audioPath);
  // MLX handles large files natively; only chunk for API/local backends
  const needsChunking = WHISPER.type === 'api';
  const chunks = needsChunking ? splitAudio(audioPath, MAX_CHUNK_MB) : [audioPath];
  
  const transcripts = [];
  for (let i = 0; i < chunks.length; i++) {
    if (chunks.length > 1) {
      process.stdout.write(`   🎤 Transcribing chunk ${i + 1}/${chunks.length}...`);
    } else {
      process.stdout.write(`   🎤 Transcribing (${sizeMB.toFixed(1)}MB)...`);
    }
    
    try {
      const segments = transcribeChunk(chunks[i]);
      transcripts.push(...segments);
      console.log(` ✅ (${segments.length} segments)`);
    } catch (err) {
      console.log(` ❌ ${err.message.split('\n')[0]}`);
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
    
    appendIngestLog(buildEntry({
      sourceId: `podcast:${creatorSlug}:${slugify(TITLE)}`,
      creator: creatorSlug,
      platform: 'podcast',
      title: TITLE,
      file: relativeFile(ROOT, path.join(creatorDir, filename)),
      indexed: false,
      extra: {
        segments: segments.length,
      },
    }));
    
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
      
      appendIngestLog(buildEntry({
        sourceId: sourceId,
        creator: creatorSlug,
        platform: 'podcast',
        title: ep.title,
        file: relativeFile(ROOT, path.join(creatorDir, filename)),
        url: ep.link || ep.enclosure?.url || '',
        indexed: false,
        extra: {
          segments: segments.length,
          episode_number: ep.episodeNum,
        },
      }));
      
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
