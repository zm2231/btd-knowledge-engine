#!/usr/bin/env node
/**
 * Register a creator and catalog all their published content.
 * 
 * Usage:
 *   node scripts/add-creator.js <slug> <name> --youtube <channel-url>
 *   node scripts/add-creator.js <slug> <name> --twitter <handle>
 *   node scripts/add-creator.js <slug> <name> --youtube <url> --twitter <handle> --topics "ai,building"
 *   node scripts/add-creator.js <slug> <name> --youtube <url> --scan   # also scan all content
 * 
 * Flags:
 *   --youtube <url>     YouTube channel URL
 *   --twitter <handle>  Twitter/X handle (without @)
 *   --topics <csv>      Comma-separated topics
 *   --instance <name>   Instance directory (default: btd)
 *   --scan              Immediately scan/catalog all published content
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
function getArg(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

const slug = args.find(a => !a.startsWith('--') && !args[args.indexOf(a) - 1]?.startsWith('--'));
const name = args.filter(a => !a.startsWith('--')).filter(a => {
  const prev = args[args.indexOf(a) - 1];
  return !prev?.startsWith('--');
})[1];

const youtube = getArg('--youtube');
const twitter = getArg('--twitter');
const podcast = getArg('--podcast');
const topics = (getArg('--topics') || '').split(',').filter(Boolean);
const instance = getArg('--instance') || 'btd';
const doScan = args.includes('--scan');

if (!slug || !name) {
  console.error('Usage: node scripts/add-creator.js <slug> "Name" --youtube <url> [--twitter handle] [--topics csv] [--scan]');
  process.exit(1);
}

const ROOT = path.join(__dirname, '..');
const INSTANCE = path.join(ROOT, instance);
const REGISTRY = path.join(INSTANCE, 'registry', 'creators.json');
const CATALOG_DIR = path.join(INSTANCE, 'registry', 'catalogs');

// Ensure full instance structure on first use
for (const dir of [
  path.dirname(REGISTRY),
  CATALOG_DIR,
  path.join(INSTANCE, 'raw', 'youtube'),
  path.join(INSTANCE, 'raw', 'podcasts'),
  path.join(INSTANCE, 'raw', 'articles'),
  path.join(INSTANCE, 'raw', 'transcripts'),
  path.join(INSTANCE, 'wiki', 'concepts'),
  path.join(INSTANCE, 'wiki', 'topics'),
  path.join(INSTANCE, 'wiki', 'creators'),
  path.join(INSTANCE, 'users'),
]) {
  fs.mkdirSync(dir, { recursive: true });
}

// Load or init registry
let registry = { creators: [] };
if (fs.existsSync(REGISTRY)) {
  registry = JSON.parse(fs.readFileSync(REGISTRY, 'utf-8'));
}

// Dedup check
if (registry.creators.find(c => c.slug === slug)) {
  console.error(`⚠️  Creator '${slug}' already exists in registry`);
  process.exit(1);
}

// Build creator entry
const creator = {
  slug,
  name,
  platforms: {},
  topics,
  priority: 'medium',
  notes: '',
  added: new Date().toISOString().split('T')[0],
  status: 'active',
  catalog_count: 0,
  last_scanned: null,
};

if (youtube) creator.platforms.youtube = { channel_url: youtube };
if (twitter) creator.platforms.twitter = { handle: twitter };
if (podcast) creator.platforms.podcast = { feed_url: podcast };

// Save
registry.creators.push(creator);
fs.writeFileSync(REGISTRY, JSON.stringify(registry, null, 2) + '\n');

console.log(`✅ Registered: ${name} (${slug})`);
if (youtube) console.log(`   YouTube: ${youtube}`);
if (twitter) console.log(`   Twitter: @${twitter}`);
if (topics.length) console.log(`   Topics: ${topics.join(', ')}`);

// Scan if requested
if (doScan) {
  console.log(`\n📡 Scanning published content...`);

  if (youtube) {
    console.log(`   Scanning YouTube channel (this may take a minute)...`);
    try {
      const cmd = `yt-dlp --flat-playlist --print-json "${youtube}" 2>/dev/null`;
      const output = execSync(cmd, { maxBuffer: 100 * 1024 * 1024, encoding: 'utf-8', timeout: 120000 });
      const videos = output.trim().split('\n').filter(Boolean).map(line => {
        try {
          const j = JSON.parse(line);
          return {
            id: j.id,
            title: j.title,
            date: j.upload_date || null,
            duration: j.duration_string || j.duration || null,
            url: j.url || `https://www.youtube.com/watch?v=${j.id}`,
            platform: 'youtube',
            ingested: false,
          };
        } catch { return null; }
      }).filter(Boolean);

      const catalogFile = path.join(CATALOG_DIR, `${slug}.json`);
      fs.writeFileSync(catalogFile, JSON.stringify({ 
        creator: slug, 
        scanned_at: new Date().toISOString(),
        items: videos 
      }, null, 2) + '\n');

      // Update creator entry
      registry.creators.find(c => c.slug === slug).catalog_count = videos.length;
      registry.creators.find(c => c.slug === slug).last_scanned = new Date().toISOString();
      fs.writeFileSync(REGISTRY, JSON.stringify(registry, null, 2) + '\n');

      console.log(`   ✅ Found ${videos.length} videos`);
      console.log(`   📁 Catalog: ${path.relative(ROOT, catalogFile)}`);
    } catch (e) {
      console.error(`   ❌ YouTube scan failed: ${e.message}`);
    }
  }

  if (twitter) {
    console.log(`   Scanning Twitter (recent tweets)...`);
    try {
      const cmd = `bird user-tweets ${twitter} --json --count 100 2>/dev/null`;
      const output = execSync(cmd, { maxBuffer: 50 * 1024 * 1024, encoding: 'utf-8', timeout: 60000 });
      const tweets = JSON.parse(output);
      
      const catalogFile = path.join(CATALOG_DIR, `${slug}-twitter.json`);
      const items = (Array.isArray(tweets) ? tweets : []).map(t => ({
        id: t.id,
        text: t.text?.substring(0, 200),
        date: t.created_at,
        url: `https://x.com/${twitter}/status/${t.id}`,
        platform: 'twitter',
        is_thread: t.reply_count > 0,
        ingested: false,
      }));

      fs.writeFileSync(catalogFile, JSON.stringify({
        creator: slug,
        platform: 'twitter',
        scanned_at: new Date().toISOString(),
        items,
      }, null, 2) + '\n');

      console.log(`   ✅ Found ${items.length} tweets`);
      console.log(`   📁 Catalog: ${path.relative(ROOT, catalogFile)}`);
    } catch (e) {
      console.error(`   ❌ Twitter scan failed: ${e.message}`);
    }
  }
}

console.log(`\nNext steps:`);
console.log(`  node scripts/status.js                                    # see all creators + catalog`);
console.log(`  node scripts/catalog.js ${slug}                           # browse their content`);
console.log(`  node scripts/ingest-youtube.js <url> --creator ${slug}    # ingest specific videos`);
