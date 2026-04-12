#!/usr/bin/env node
/**
 * Scan and ingest Substack posts.
 *
 * Usage:
 *   node scripts/ingest-substack.js <creator-slug> --scan
 *   node scripts/ingest-substack.js <creator-slug> --limit 5
 *   node scripts/ingest-substack.js ethan-mollick --scan --instance btd
 *   node scripts/ingest-substack.js ethan-mollick --instance btd --dry-run
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const { appendEntry, buildEntry, readEntries, relativeFile } = require('./ingest-log.js');

const ROOT = path.join(__dirname, '..');
const { resolvePaths } = require('./scope.js');

function getArgs() {
  return process.argv.slice(2);
}

function getArg(args, flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

function getPositionalCreator(args) {
  return args.find((arg, index) => !arg.startsWith('--') && !['--instance', '--limit'].includes(args[index - 1]));
}

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 80) || 'article';
}

function escapeYamlString(value) {
  return String(value || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function decodeHtmlEntities(text) {
  return String(text || '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘')
    .replace(/&rsquo;/g, '’');
}

function stripCdata(value) {
  return String(value || '').replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '');
}

function stripHtml(html) {
  return decodeHtmlEntities(
    String(html || '')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n\n')
      .replace(/<\/div>/gi, '\n')
      .replace(/<\/h[1-6]>/gi, '\n\n')
      .replace(/<li[^>]*>/gi, '- ')
      .replace(/<\/li>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\r/g, '')
      .replace(/[ \t]+/g, ' ')
      .replace(/\n{3,}/g, '\n\n')
      .trim()
  );
}

function htmlToMarkdown(html) {
  let output = String(html || '');

  output = output.replace(/\r/g, '');
  output = output.replace(/<script[\s\S]*?<\/script>/gi, '');
  output = output.replace(/<style[\s\S]*?<\/style>/gi, '');
  output = output.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n\n');
  output = output.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n\n');
  output = output.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n\n');
  output = output.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n\n');
  output = output.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n\n');
  output = output.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n\n');
  output = output.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => `\n> ${stripHtml(inner).replace(/\n/g, '\n> ')}\n\n`);
  output = output.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, inner) => `- ${stripHtml(inner)}\n`);
  output = output.replace(/<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `[${stripHtml(text)}](${href})`);
  output = output.replace(/<img[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi, (_, src, alt) => `![${stripHtml(alt)}](${src})`);
  output = output.replace(/<img[^>]*alt=["']([^"']*)["'][^>]*src=["']([^"']+)["'][^>]*>/gi, (_, alt, src) => `![${stripHtml(alt)}](${src})`);
  output = output.replace(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi, (_, src) => `![](${src})`);
  output = output.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  output = output.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  output = output.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '_$1_');
  output = output.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '_$1_');
  output = output.replace(/<br\s*\/?>/gi, '\n');
  output = output.replace(/<\/p>/gi, '\n\n');
  output = output.replace(/<p[^>]*>/gi, '');
  output = output.replace(/<div[^>]*>/gi, '');
  output = output.replace(/<\/div>/gi, '\n');
  output = output.replace(/<figure[^>]*>/gi, '');
  output = output.replace(/<\/figure>/gi, '\n');
  output = output.replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, (_, inner) => `\n_${stripHtml(inner)}_\n`);
  output = output.replace(/<ul[^>]*>|<\/ul>|<ol[^>]*>|<\/ol>/gi, '\n');
  output = output.replace(/<[^>]+>/g, '');
  output = decodeHtmlEntities(output);
  output = output.replace(/[ \t]+\n/g, '\n');
  output = output.replace(/\n{3,}/g, '\n\n');
  return output.trim();
}

function normalizeDate(value) {
  if (!value) return { iso: null, day: 'undated' };
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return { iso: value, day: 'undated' };
  return { iso: date.toISOString(), day: date.toISOString().split('T')[0] };
}

function getTag(block, tagName) {
  const escaped = tagName.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const match = block.match(new RegExp(`<${escaped}[^>]*>([\\s\\S]*?)<\\/${escaped}>`, 'i'));
  return match ? stripCdata(match[1]).trim() : '';
}

function getBinaryPath(name) {
  const candidates = [
    name,
    path.join(process.env.HOME || '', 'go', 'bin', name),
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      execFileSync(candidate, ['--help'], { stdio: 'ignore' });
      return candidate;
    } catch {}
  }

  return null;
}

function fetchText(url, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      reject(new Error(`Too many redirects fetching ${url}`));
      return;
    }

    const client = url.startsWith('https:') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; btd-knowledge-engine/1.0; +https://github.com/zm2231/btd-knowledge-engine)',
        'Accept': 'application/rss+xml, application/xml, text/xml, text/html;q=0.9, */*;q=0.8',
      },
    }, res => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const nextUrl = new URL(res.headers.location, url).toString();
        res.resume();
        resolve(fetchText(nextUrl, redirectCount + 1));
        return;
      }

      if (res.statusCode !== 200) {
        let body = '';
        res.setEncoding('utf-8');
        res.on('data', chunk => {
          body += chunk;
        });
        res.on('end', () => reject(new Error(`HTTP ${res.statusCode} fetching ${url}: ${body.substring(0, 200)}`)));
        return;
      }

      let data = '';
      res.setEncoding('utf-8');
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => resolve(data));
    });

    req.on('error', reject);
    req.setTimeout(30000, () => {
      req.destroy(new Error(`Timeout fetching ${url}`));
    });
  });
}

function getFeedUrl(baseUrl, feedUrlOverride) {
  if (feedUrlOverride) return feedUrlOverride;
  const normalized = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return new URL('feed', normalized).toString();
}

function parseRssFeed(xml) {
  const items = [];
  // Support both RSS <item> and Atom <entry> formats
  const isAtom = xml.includes('xmlns="http://www.w3.org/2005/Atom"') || xml.includes('<feed ') || xml.includes('<entry>');
  const itemMatches = isAtom
    ? (xml.match(/<entry[\s\S]*?<\/entry>/gi) || [])
    : (xml.match(/<item[\s\S]*?<\/item>/gi) || []);

  for (const block of itemMatches) {
    const title = decodeHtmlEntities(getTag(block, 'title'));
    // Atom uses <link href="..."/> or <link>url</link>; RSS uses <link>url</link>
    const linkHref = block.match(/<link[^>]+href="([^"]+)"/i)?.[1];
    const linkText = decodeHtmlEntities(getTag(block, 'link'));
    const url = linkHref || linkText;
    const guid = decodeHtmlEntities(getTag(block, 'guid') || getTag(block, 'id')) || url;
    const pubDate = getTag(block, 'pubDate') || getTag(block, 'published') || getTag(block, 'updated');
    const descriptionHtml = getTag(block, 'description') || getTag(block, 'summary');
    const contentHtml = getTag(block, 'content:encoded') || getTag(block, 'content') || descriptionHtml;
    const creator = decodeHtmlEntities(getTag(block, 'dc:creator') || getTag(block, 'author'));

    if (!url) continue;

    const excerpt = stripHtml(descriptionHtml || contentHtml).substring(0, 400);

    items.push({
      id: guid || url,
      title: title || url,
      date: pubDate || null,
      url,
      excerpt,
      author: creator || null,
      content_html: contentHtml || '',
    });
  }

  return items;
}

async function scanSubstackCatalog(creator, options = {}) {
  const limit = options.limit || 0;
  const substack = creator.platforms?.substack;
  if (!substack?.url) return null;

  const feedUrl = getFeedUrl(substack.url, substack.feed_url);
  const xml = await fetchText(feedUrl);
  let items = parseRssFeed(xml).map(item => ({
    id: item.id,
    title: item.title,
    date: item.date,
    url: item.url,
    excerpt: item.excerpt,
    author: item.author,
  }));

  if (limit > 0) {
    items = items.slice(0, limit);
  }

  return {
    platform: 'substack',
    items,
    scanned_at: new Date().toISOString(),
  };
}

async function loadFeedItemsForCreator(creator) {
  const substack = creator.platforms?.substack;
  if (!substack?.url) throw new Error(`Creator ${creator.slug} does not have a Substack URL`);
  const xml = await fetchText(getFeedUrl(substack.url, substack.feed_url));
  return parseRssFeed(xml);
}

function getExistingArticleIds(ingestLog) {
  return new Set(
    readEntries(ingestLog)
      .flatMap((entry) => [entry.article_id, entry.source_id, entry.url])
      .filter(Boolean)
      .map(String)
  );
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildFrontmatter({ creatorSlug, article, markdown }) {
  const normalizedDate = normalizeDate(article.date);
  const cleanedMarkdown = String(markdown || '')
    .replace(new RegExp(`^#\\s+${escapeRegExp(article.title)}\\s*`, 'i'), '')
    .trim();

  return `---\ntitle: "${escapeYamlString(article.title)}"\ncreator: "${escapeYamlString(creatorSlug)}"\ndate: ${normalizedDate.iso || 'null'}\nurl: "${escapeYamlString(article.url)}"\nplatform: substack\nsource_type: substack\narticle_id: "${escapeYamlString(String(article.id))}"\ningested: ${new Date().toISOString().split('T')[0]}\nstatus: ingested\ntopics: []\nmeta_patterns: []\n---\n\n# ${article.title}\n\n**Creator**: ${creatorSlug}  \n**Date**: ${normalizedDate.iso || article.date || 'unknown'}  \n**URL**: ${article.url}  \n**Platform**: Substack\n\n${cleanedMarkdown}\n`;
}

function downloadArticleMarkdown(articleUrl) {
  const sbstckDl = getBinaryPath('sbstck-dl');
  if (!sbstckDl) {
    return null;
  }

  const tempDir = fs.mkdtempSync(path.join(require('os').tmpdir(), 'btd-substack-'));
  try {
    execFileSync(sbstckDl, ['download', '-u', articleUrl, '-f', 'md', '-o', tempDir], {
      stdio: 'pipe',
      encoding: 'utf-8',
      timeout: 120000,
    });

    const files = fs.readdirSync(tempDir).filter(file => file.endsWith('.md')).sort();
    if (!files.length) {
      return null;
    }

    const markdown = fs.readFileSync(path.join(tempDir, files[0]), 'utf-8').trim();
    return markdown;
  } catch {
    return null;
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

async function ingestSubstackCreator(creatorSlug, options = {}) {
  const instance = options.instance || 'btd';
  const isLocal = !!options.isLocal;
  const limit = options.limit || 0;
  const dryRun = !!options.dryRun;

  const paths = resolvePaths(ROOT, isLocal ? 'local' : 'shared', instance);
  const instanceDir = paths.base;
  const registryFile = paths.creatorsJson;
  const catalogFile = path.join(paths.catalogDir, `${creatorSlug}-substack.json`);
  const rawDir = path.join(paths.rawDir, 'articles', creatorSlug);
  const ingestLog = paths.ingestLog;

  const registry = JSON.parse(fs.readFileSync(registryFile, 'utf-8'));
  const creator = registry.creators.find(entry => entry.slug === creatorSlug);
  if (!creator) {
    throw new Error(`Creator '${creatorSlug}' not found in ${path.relative(ROOT, registryFile)}`);
  }

  if (!fs.existsSync(catalogFile)) {
    throw new Error(`No Substack catalog found for ${creatorSlug}. Run: node scripts/scan.js ${creatorSlug} --substack${instance !== 'btd' ? ` --instance ${instance}` : ''}`);
  }

  const catalog = JSON.parse(fs.readFileSync(catalogFile, 'utf-8'));
  const existingIds = getExistingArticleIds(ingestLog);
  let pending = (catalog.items || []).filter(item => !item.ingested && !existingIds.has(String(item.id)) && !existingIds.has(String(item.url)));
  if (limit > 0) {
    pending = pending.slice(0, limit);
  }

  if (!pending.length) {
    console.log(`No pending Substack posts for ${creatorSlug}.`);
    return { written: 0, skipped: (catalog.items || []).length, source: 'none' };
  }

  const feedItems = await loadFeedItemsForCreator(creator);
  const feedByUrl = new Map(feedItems.map(item => [item.url, item]));

  fs.mkdirSync(rawDir, { recursive: true });

  console.log(`📰 Ingesting Substack posts for ${creatorSlug}`);
  console.log(`   Instance: ${instance}`);
  console.log(`   Pending posts: ${pending.length}`);
  if (dryRun) console.log('   🏜️  DRY RUN');
  console.log('');

  let written = 0;

  for (const item of pending) {
    const source = feedByUrl.get(item.url) || item;
    const normalizedDate = normalizeDate(source.date || item.date);
    const fileSlug = slugify(source.title || item.title);
    const filename = `${normalizedDate.day}-${fileSlug}.md`;
    const filepath = path.join(rawDir, filename);
    const relPath = relativeFile(ROOT, filepath);

    console.log(`📥 ${source.title || item.title}`);
    console.log(`   ${item.url}`);

    if (dryRun) {
      console.log(`   (dry run — skipping ${relPath})\n`);
      continue;
    }

    const downloadedMarkdown = downloadArticleMarkdown(item.url);
    const markdownBody = downloadedMarkdown || htmlToMarkdown(source.content_html || '');
    const fullMarkdown = buildFrontmatter({
      creatorSlug,
      article: {
        id: item.id,
        title: source.title || item.title,
        date: source.date || item.date,
        url: item.url,
      },
      markdown: markdownBody,
    });

    fs.writeFileSync(filepath, fullMarkdown);

    const catalogItem = catalog.items.find(entry => String(entry.id) === String(item.id));
    if (catalogItem) {
      catalogItem.ingested = true;
    }
    catalog.ingested = catalog.items.filter(entry => entry.ingested).length;

    appendEntry(ingestLog, buildEntry({
      sourceId: String(item.id),
      creator: creatorSlug,
      platform: 'substack',
      title: source.title || item.title || fileSlug,
      file: relPath,
      url: item.url,
      indexed: false,
      extra: {
        article_id: String(item.id),
      },
    }));

    console.log(`   ✅ ${relPath}`);
    console.log(`   📝 ${markdownBody.length} chars${downloadedMarkdown ? ' via sbstck-dl' : ' via RSS fallback'}\n`);
    written++;
  }

  if (!dryRun) {
    fs.writeFileSync(catalogFile, JSON.stringify(catalog, null, 2) + '\n');
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Wrote: ${written}`);
  console.log(`⏭️  Skipped (already ingested): ${(catalog.items || []).length - pending.length}`);
  console.log(`📁 Output: ${path.relative(ROOT, rawDir)}`);

  return { written, skipped: (catalog.items || []).length - pending.length, source: getBinaryPath('sbstck-dl') ? 'sbstck-dl' : 'rss' };
}

async function runCli() {
  const args = getArgs();
  const creatorSlug = getPositionalCreator(args);
  const instance = getArg(args, '--instance') || 'btd';
  const isLocal = args.includes('--local');
  const limit = parseInt(getArg(args, '--limit') || '0', 10);
  const dryRun = args.includes('--dry-run');
  const scanMode = args.includes('--scan');

  if (!creatorSlug) {
    console.error('Usage: node scripts/ingest-substack.js <creator-slug> [--scan] [--limit N] [--instance name] [--local] [--dry-run]');
    process.exit(1);
  }

  const cliPaths = resolvePaths(ROOT, isLocal ? 'local' : 'shared', instance);
  const registryFile = cliPaths.creatorsJson;
  const registry = JSON.parse(fs.readFileSync(registryFile, 'utf-8'));
  const creator = registry.creators.find(entry => entry.slug === creatorSlug);
  if (!creator) {
    console.error(`Creator '${creatorSlug}' not found.`);
    process.exit(1);
  }

  if (scanMode) {
    const result = await scanSubstackCatalog(creator, { limit });
    if (!result) {
      console.error(`Creator '${creatorSlug}' does not have a Substack URL.`);
      process.exit(1);
    }

    const catalogDir = cliPaths.catalogDir;
    const catalogFile = path.join(catalogDir, `${creatorSlug}-substack.json`);
    fs.mkdirSync(catalogDir, { recursive: true });

    let existing = {};
    if (fs.existsSync(catalogFile)) {
      const previous = JSON.parse(fs.readFileSync(catalogFile, 'utf-8'));
      existing = Object.fromEntries((previous.items || []).map(item => [item.id, item]));
    }

    const merged = result.items.map(item => ({
      ...item,
      ingested: existing[item.id]?.ingested || false,
    }));

    fs.writeFileSync(catalogFile, JSON.stringify({
      creator: creatorSlug,
      platform: 'substack',
      scanned_at: result.scanned_at,
      total: merged.length,
      ingested: merged.filter(item => item.ingested).length,
      items: merged,
    }, null, 2) + '\n');

    console.log(`📰 Scanned Substack for ${creatorSlug}`);
    console.log(`   Feed: ${getFeedUrl(creator.platforms.substack.url)}`);
    console.log(`   Found: ${merged.length} post(s)`);
    console.log(`   Catalog: ${path.relative(ROOT, catalogFile)}`);
    return;
  }

  await ingestSubstackCreator(creatorSlug, { instance, isLocal, limit, dryRun });
}

module.exports = {
  scanSubstackCatalog,
  ingestSubstackCreator,
  htmlToMarkdown,
  parseRssFeed,
  getFeedUrl,
};

if (require.main === module) {
  runCli().catch(error => {
    console.error(error);
    process.exit(1);
  });
}
