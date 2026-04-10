#!/usr/bin/env node
/**
 * Scan a creator's platforms and catalog all published content.
 * Knows about everything they've published — separate from what's been downloaded.
 * 
 * Usage:
 *   node scripts/scan.js <creator-slug>           # scan one creator
 *   node scripts/scan.js --all                     # scan all active creators
 *   node scripts/scan.js <creator-slug> --youtube  # scan only youtube
 *   node scripts/scan.js --instance my-instance --all
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function getArg(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

const instance = getArg('--instance') || 'btd';
const scanAll = args.includes('--all');
const onlyYoutube = args.includes('--youtube');
const onlyTwitter = args.includes('--twitter');
const onlyPodcast = args.includes('--podcast');
const twitterCount = parseInt(getArg('--count') || '50', 10);
const targetSlug = args.find(a => !a.startsWith('--') && !['--instance','--all','--count'].includes(args[args.indexOf(a)-1]));

const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, instance);
const REGISTRY = path.join(INST, 'registry', 'creators.json');
const CATALOG_DIR = path.join(INST, 'registry', 'catalogs');

if (!targetSlug && !scanAll) {
  console.error('Usage: node scripts/scan.js <creator-slug> | --all [--youtube] [--twitter] [--podcast] [--count N] [--instance name]');
  process.exit(1);
}

fs.mkdirSync(CATALOG_DIR, { recursive: true });

const registry = JSON.parse(fs.readFileSync(REGISTRY, 'utf-8'));
const creators = scanAll
  ? registry.creators.filter(c => c.status === 'active')
  : registry.creators.filter(c => c.slug === targetSlug);

if (!creators.length) {
  console.error(scanAll ? 'No active creators found.' : `Creator '${targetSlug}' not found.`);
  process.exit(1);
}

// ---- YouTube scan ----
function scanYoutube(creator) {
  const yt = creator.platforms.youtube;
  if (!yt?.channel_url) return null;

  console.log(`   📺 YouTube: ${yt.channel_url}`);
  try {
    const cmd = `yt-dlp --flat-playlist --print-json "${yt.channel_url}" 2>/dev/null`;
    const output = execSync(cmd, { maxBuffer: 200 * 1024 * 1024, encoding: 'utf-8', timeout: 300000 });
    const items = output.trim().split('\n').filter(Boolean).map(line => {
      try {
        const j = JSON.parse(line);
        return {
          id: j.id,
          title: j.title,
          date: j.upload_date || null,
          duration: j.duration || null,
          duration_string: j.duration_string || null,
          url: `https://www.youtube.com/watch?v=${j.id}`,
          view_count: j.view_count || null,
        };
      } catch { return null; }
    }).filter(Boolean);

    return { platform: 'youtube', items, scanned_at: new Date().toISOString() };
  } catch (e) {
    console.error(`   ❌ YouTube scan failed: ${e.message.substring(0, 100)}`);
    return null;
  }
}

function parseJsonArrayFromMixedOutput(output) {
  const trimmed = output.trim();
  if (!trimmed) return [];

  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) return parsed;
  } catch {}

  let start = trimmed.indexOf('[');
  while (start !== -1) {
    let depth = 0;
    let inString = false;
    let escaping = false;

    for (let i = start; i < trimmed.length; i++) {
      const char = trimmed[i];

      if (escaping) {
        escaping = false;
        continue;
      }

      if (char === '\\' && inString) {
        escaping = true;
        continue;
      }

      if (char === '"') {
        inString = !inString;
        continue;
      }

      if (inString) continue;

      if (char === '[') depth++;
      if (char === ']') {
        depth--;
        if (depth === 0) {
          const candidate = trimmed.slice(start, i + 1);
          try {
            const parsed = JSON.parse(candidate);
            if (Array.isArray(parsed)) return parsed;
          } catch {}
        }
      }
    }

    start = trimmed.indexOf('[', start + 1);
  }

  throw new Error('Could not find a valid JSON array in bird output');
}

// ---- Twitter scan ----
function scanTwitter(creator) {
  const tw = creator.platforms.twitter;
  if (!tw?.handle) return null;

  console.log(`   🐦 Twitter: @${tw.handle}`);
  try {
    const cmd = `bird user-tweets ${tw.handle} --json --count ${twitterCount} --no-emoji 2>/dev/null`;
    const output = execSync(cmd, { maxBuffer: 50 * 1024 * 1024, encoding: 'utf-8', timeout: 60000 });
    const tweets = parseJsonArrayFromMixedOutput(output);
    const items = (Array.isArray(tweets) ? tweets : []).map(t => {
      const replyCount = t.reply_count ?? t.replyCount ?? 0;
      const conversationId = t.conversation_id ?? t.conversationId ?? t.id;
      const inReplyToStatusId = t.in_reply_to_status_id ?? t.inReplyToStatusId ?? null;
      const inReplyToUserId = t.in_reply_to_user_id ?? t.inReplyToUserId ?? null;
      const retweetCount = t.retweet_count ?? t.retweetCount ?? 0;
      const likeCount = t.favorite_count ?? t.favoriteCount ?? t.like_count ?? t.likeCount ?? 0;

      return {
        id: t.id,
        text: (t.full_text || t.fullText || t.text || '').substring(0, 280),
        date: t.created_at || t.createdAt || null,
        url: `https://x.com/${tw.handle}/status/${t.id}`,
        retweet_count: retweetCount,
        like_count: likeCount,
        is_reply: !!(inReplyToStatusId || inReplyToUserId),
        is_thread: replyCount > 0 || (conversationId && String(conversationId) !== String(t.id)),
        conversation_id: conversationId,
        in_reply_to_status_id: inReplyToStatusId,
      };
    });

    return { platform: 'twitter', items, scanned_at: new Date().toISOString() };
  } catch (e) {
    console.error(`   ❌ Twitter scan failed: ${e.message.substring(0, 100)}`);
    return null;
  }
}

// ---- Podcast scan ----
function scanPodcast(creator) {
  const pod = creator.platforms.podcast;
  if (!pod?.rss_url) return null;

  console.log(`   🎙️  Podcast: ${pod.rss_url}`);
  try {
    const cmd = `npx podcast-dl --url "${pod.rss_url}" --list json 2>/dev/null`;
    const output = execSync(cmd, { maxBuffer: 50 * 1024 * 1024, encoding: 'utf-8', timeout: 120000 });
    
    let episodes;
    try {
      episodes = JSON.parse(output);
    } catch {
      // podcast-dl --list json might output line-by-line
      episodes = output.trim().split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);
    }

    const items = (Array.isArray(episodes) ? episodes : []).map(ep => ({
      id: ep.guid || ep.title,
      title: ep.title,
      date: ep.pubDate || ep.release_date || null,
      duration: ep.duration || ep.itunes?.duration || null,
      url: ep.enclosure?.url || ep.link || null,
      has_transcript: !!(ep.podcast_transcript || ep.transcript),
    }));

    return { platform: 'podcast', items, scanned_at: new Date().toISOString() };
  } catch (e) {
    console.error(`   ❌ Podcast scan failed: ${e.message.substring(0, 100)}`);
    return null;
  }
}

// ---- Main ----
let totalItems = 0;

for (const creator of creators) {
  console.log(`\n━━━ ${creator.name} (${creator.slug}) ━━━`);

  const results = [];

  if (!onlyTwitter && !onlyPodcast) {
    const yt = scanYoutube(creator);
    if (yt) results.push(yt);
  }
  if (!onlyYoutube && !onlyPodcast) {
    const tw = scanTwitter(creator);
    if (tw) results.push(tw);
  }
  if (!onlyYoutube && !onlyTwitter) {
    const pod = scanPodcast(creator);
    if (pod) results.push(pod);
  }

  // Write catalog per platform
  for (const result of results) {
    const filename = result.platform === 'youtube' 
      ? `${creator.slug}.json`
      : `${creator.slug}-${result.platform}.json`;
    const catalogFile = path.join(CATALOG_DIR, filename);
    
    // Merge with existing catalog (preserve ingested flags)
    let existing = {};
    if (fs.existsSync(catalogFile)) {
      const prev = JSON.parse(fs.readFileSync(catalogFile, 'utf-8'));
      existing = Object.fromEntries((prev.items || []).map(i => [i.id, i]));
    }

    // Merge: keep ingested flag from existing, update metadata from scan
    const merged = result.items.map(item => ({
      ...item,
      ingested: existing[item.id]?.ingested || false,
    }));

    fs.writeFileSync(catalogFile, JSON.stringify({
      creator: creator.slug,
      platform: result.platform,
      scanned_at: result.scanned_at,
      total: merged.length,
      ingested: merged.filter(i => i.ingested).length,
      items: merged,
    }, null, 2) + '\n');

    console.log(`   ✅ ${result.platform}: ${merged.length} items (${merged.filter(i => i.ingested).length} ingested)`);
    totalItems += merged.length;
  }

  // Update registry
  const regEntry = registry.creators.find(c => c.slug === creator.slug);
  if (regEntry) {
    regEntry.catalog_count = results.reduce((sum, r) => sum + r.items.length, 0);
    regEntry.last_scanned = new Date().toISOString();
  }
}

// Save updated registry
fs.writeFileSync(REGISTRY, JSON.stringify(registry, null, 2) + '\n');

console.log(`\n═══════════════════════════════════════`);
console.log(`  Total cataloged: ${totalItems} items`);
console.log(`  Run: node scripts/status.js`);
console.log(`═══════════════════════════════════════\n`);
