#!/usr/bin/env node
/**
 * Ingest tweets from a creator catalog into raw/twitter/{creator}/.
 *
 * Usage:
 *   node scripts/ingest-twitter.js <creator-slug>
 *   node scripts/ingest-twitter.js andrej-karpathy --limit 10
 *   node scripts/ingest-twitter.js andrej-karpathy --instance my-instance --dry-run
 */

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
const creator = args.find((arg, index) => !arg.startsWith('--') && args[index - 1] !== '--instance' && args[index - 1] !== '--limit');
const limit = parseInt(getArg('--limit') || '0', 10);
const dryRun = args.includes('--dry-run');

if (!creator) {
  console.error('Usage: node scripts/ingest-twitter.js <creator-slug> [--limit N] [--instance name] [--local] [--dry-run]');
  console.error('  --instance defaults to "btd" (our instance). Use "my-instance" for yours.');
  process.exit(1);
}

const { resolvePaths } = require('./scope.js');
const paths = resolvePaths(ROOT, isLocal ? 'local' : 'shared', instance);
const INSTANCE_DIR = paths.base;
const CATALOG_FILE = path.join(paths.catalogDir, `${creator}-twitter.json`);
const RAW_DIR = path.join(paths.rawDir, 'twitter', creator);
const INGEST_LOG = paths.ingestLog;

function slugify(text) {
  return String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').substring(0, 80) || 'tweet';
}

function escapeYamlString(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function normalizeDate(value) {
  if (!value) return { iso: null, day: 'undated' };
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return { iso: value, day: 'undated' };
  return { iso: date.toISOString(), day: date.toISOString().split('T')[0] };
}

function getExistingTweetIds() {
  const entries = readEntries(INGEST_LOG);
  return new Set(entries.flatMap((entry) => [entry.tweet_id, entry.thread_id, entry.source_id]).filter(Boolean).map(String));
}

function groupTweets(items) {
  const groups = new Map();

  for (const item of items) {
    const conversationId = String(item.conversation_id || item.id);
    const existing = groups.get(conversationId) || {
      id: conversationId,
      conversation_id: conversationId,
      tweets: [],
    };
    existing.tweets.push(item);
    groups.set(conversationId, existing);
  }

  return Array.from(groups.values())
    .map((group) => {
      group.tweets.sort((a, b) => new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime());
      const first = group.tweets[0];
      const last = group.tweets[group.tweets.length - 1];
      const isThread = group.tweets.length > 1 || group.tweets.some((tweet) => tweet.is_thread);
      return {
        id: isThread ? String(group.conversation_id) : String(first.id),
        conversation_id: String(group.conversation_id),
        tweets: group.tweets,
        first,
        last,
        isThread,
      };
    })
    .sort((a, b) => new Date(a.first.date || 0).getTime() - new Date(b.first.date || 0).getTime());
}

function buildMarkdown(group) {
  const { first, last, tweets, isThread } = group;
  const primaryDate = normalizeDate(first.date);
  const titleSource = (first.text || '').replace(/\s+/g, ' ').trim() || `${creator} tweet`;
  const title = isThread ? `${creator} thread — ${titleSource.substring(0, 80)}` : titleSource.substring(0, 100);
  const canonicalUrl = first.url || `https://x.com/${creator}/status/${first.id}`;
  const fileSlug = slugify(titleSource);
  const filename = `${primaryDate.day}-${group.id}-${fileSlug}.md`;

  const body = tweets.map((tweet, index) => {
    const tweetDate = normalizeDate(tweet.date);
    const text = (tweet.text || '').trim() || '[no text captured]';
    const tweetUrl = tweet.url || `https://x.com/${creator}/status/${tweet.id}`;
    return `### ${isThread ? `Tweet ${index + 1}` : 'Tweet'}\n\n- Date: ${tweetDate.iso || tweet.date || 'unknown'}\n- URL: ${tweetUrl}\n- Tweet ID: ${tweet.id}\n\n${text}`;
  }).join('\n\n');

  const markdown = `---
title: "${escapeYamlString(title)}"
creator: "${escapeYamlString(creator)}"
date: ${primaryDate.iso || 'null'}
url: "${escapeYamlString(canonicalUrl)}"
platform: twitter
source_type: twitter
tweet_id: "${escapeYamlString(String(first.id))}"
thread_id: "${escapeYamlString(String(group.conversation_id))}"
is_thread: ${isThread}
tweet_count: ${tweets.length}
ingested: ${new Date().toISOString().split('T')[0]}
status: ingested
topics: []
meta_patterns: []
---

# ${title}

**Creator**: ${creator}  
**Date**: ${primaryDate.iso || first.date || 'unknown'}  
**URL**: ${canonicalUrl}  
**Platform**: Twitter/X  
**Tweets**: ${tweets.length}
${last && last !== first ? `**Last Tweet**: ${normalizeDate(last.date).iso || last.date || 'unknown'}\n` : ''}

## ${isThread ? 'Thread' : 'Tweet'}

${body}
`;

  return { filename, markdown, title, canonicalUrl };
}

function markCatalogItemsIngested(catalog, group) {
  const ids = new Set(group.tweets.map((tweet) => String(tweet.id)));
  for (const item of catalog.items) {
    if (ids.has(String(item.id))) {
      item.ingested = true;
    }
  }
  catalog.ingested = catalog.items.filter((item) => item.ingested).length;
}

async function main() {
  if (!fs.existsSync(CATALOG_FILE)) {
    console.error(`No Twitter catalog found for ${creator}: ${path.relative(ROOT, CATALOG_FILE)}`);
    console.error(`Run: node scripts/scan.js ${creator} --twitter${instance !== 'btd' ? ` --instance ${instance}` : ''}`);
    process.exit(1);
  }

  const catalog = JSON.parse(fs.readFileSync(CATALOG_FILE, 'utf8'));
  const existing = getExistingTweetIds();
  const pendingItems = (catalog.items || []).filter((item) => !existing.has(String(item.id)) && !existing.has(String(item.conversation_id || item.id)) && !item.ingested);

  if (!pendingItems.length) {
    console.log(`No pending tweets for ${creator}.`);
    return;
  }

  let groups = groupTweets(pendingItems);
  if (limit > 0) groups = groups.slice(0, limit);

  fs.mkdirSync(RAW_DIR, { recursive: true });

  console.log(`🐦 Ingesting Twitter catalog for ${creator}`);
  console.log(`   Instance: ${instance}`);
  console.log(`   Pending tweets: ${pendingItems.length}`);
  console.log(`   Files to write: ${groups.length}`);
  if (dryRun) console.log('   🏜️  DRY RUN');
  console.log('');

  let written = 0;

  for (const group of groups) {
    const { filename, markdown, title, canonicalUrl } = buildMarkdown(group);
    const filepath = path.join(RAW_DIR, filename);
    const relPath = relativeFile(ROOT, filepath);

    console.log(`📥 ${title}`);
    console.log(`   ${canonicalUrl}`);

    if (dryRun) {
      console.log(`   (dry run — skipping ${relPath})\n`);
      continue;
    }

    fs.writeFileSync(filepath, markdown);
    markCatalogItemsIngested(catalog, group);

    appendEntry(INGEST_LOG, buildEntry({
      sourceId: group.conversation_id,
      creator,
      platform: 'twitter',
      title,
      file: relPath,
      url: canonicalUrl,
      indexed: false,
      extra: {
        tweet_id: String(group.first.id),
        thread_id: String(group.conversation_id),
        tweet_count: group.tweets.length,
        is_thread: group.isThread,
      },
    }));

    console.log(`   ✅ ${relPath}`);
    console.log(`   📝 ${group.tweets.length} tweet(s)\n`);
    written += 1;
  }

  if (!dryRun) {
    fs.writeFileSync(CATALOG_FILE, `${JSON.stringify(catalog, null, 2)}\n`);
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Wrote: ${written}`);
  console.log(`⏭️  Skipped (already ingested): ${catalog.items.length - pendingItems.length}`);
  console.log(`📁 Output: ${path.relative(ROOT, RAW_DIR)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
