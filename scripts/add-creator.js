#!/usr/bin/env node
/**
 * Register a creator and optionally scan their configured platforms.
 *
 * Usage:
 *   node scripts/add-creator.js <slug> <name> --youtube <channel-url>
 *   node scripts/add-creator.js <slug> <name> --twitter <handle>
 *   node scripts/add-creator.js <slug> <name> --podcast <feed-url>
 *   node scripts/add-creator.js <slug> <name> --substack <url>
 *   node scripts/add-creator.js <slug> <name> --youtube <url> --twitter <handle> --topics "ai,building" --scan
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

function getArg(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

const positional = args.filter((arg, index) => !arg.startsWith('--') && !args[index - 1]?.startsWith('--'));
const slug = positional[0];
const name = positional[1];

const youtube = getArg('--youtube');
const twitter = getArg('--twitter');
const podcast = getArg('--podcast');
const substack = getArg('--substack');
const topics = (getArg('--topics') || '').split(',').map((topic) => topic.trim()).filter(Boolean);
const instance = getArg('--instance') || 'btd';
const isLocal = args.includes('--local');
const doScan = args.includes('--scan');

if (!slug || !name) {
  console.error('Usage: node scripts/add-creator.js <slug> "Name" [--youtube <url>] [--twitter <handle>] [--podcast <feed-url>] [--substack <url>] [--topics csv] [--instance name] [--local] [--scan]');
  process.exit(1);
}

const ROOT = path.join(__dirname, '..');
const { resolvePaths } = require('./scope.js');
const paths = resolvePaths(ROOT, isLocal ? 'local' : 'shared', instance);
const INSTANCE = paths.base;
const REGISTRY = paths.creatorsJson;
const CATALOG_DIR = paths.catalogDir;

for (const dir of [
  path.dirname(REGISTRY),
  CATALOG_DIR,
  path.join(INSTANCE, 'raw', 'youtube'),
  path.join(INSTANCE, 'raw', 'twitter'),
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

let registry = { creators: [] };
if (fs.existsSync(REGISTRY)) {
  registry = JSON.parse(fs.readFileSync(REGISTRY, 'utf8'));
}

if (registry.creators.find((creator) => creator.slug === slug)) {
  console.error(`⚠️  Creator '${slug}' already exists in registry`);
  process.exit(1);
}

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
if (substack) creator.platforms.substack = { url: substack, type: 'substack' };

registry.creators.push(creator);
fs.writeFileSync(REGISTRY, `${JSON.stringify(registry, null, 2)}\n`);

console.log(`✅ Registered: ${name} (${slug})`);
if (youtube) console.log(`   YouTube: ${youtube}`);
if (twitter) console.log(`   Twitter: @${twitter}`);
if (podcast) console.log(`   Podcast: ${podcast}`);
if (substack) console.log(`   Substack: ${substack}`);
if (topics.length) console.log(`   Topics: ${topics.join(', ')}`);

if (doScan) {
  console.log('\n📡 Scanning published content...');
  const scanArgs = [path.join(__dirname, 'scan.js'), slug, '--instance', isLocal ? 'local' : instance];
  if (youtube) scanArgs.push('--youtube');
  if (twitter) scanArgs.push('--twitter');
  if (podcast) scanArgs.push('--podcast');
  if (substack) scanArgs.push('--substack');

  execFileSync(process.execPath, scanArgs, {
    cwd: ROOT,
    stdio: 'inherit',
  });
}

const scopeFlag = isLocal ? '--local' : `--instance ${instance}`;
console.log('\nNext steps:');
console.log(`  node scripts/status.js                                    # see creators, catalogs, and ingest state`);
console.log(`  node scripts/scan.js ${slug} --instance ${isLocal ? 'local' : instance}                  # refresh catalog later`);
if (youtube) console.log(`  node scripts/batch-ingest.js ${slug} ${scopeFlag}           # ingest YouTube videos from catalog`);
if (twitter) console.log(`  node scripts/ingest-twitter.js ${slug} ${scopeFlag}         # ingest Twitter catalog`);
if (substack) console.log(`  node scripts/ingest-substack.js ${slug} ${scopeFlag}        # ingest Substack catalog`);
if (podcast) console.log(`  node scripts/ingest-podcast.js ${slug} ${scopeFlag}         # ingest podcast episodes`);
