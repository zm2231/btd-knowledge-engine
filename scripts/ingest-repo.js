#!/usr/bin/env node
/**
 * Index a code repository directly into a BTD instance's LEANN index.
 *
 * Usage:
 *   node scripts/ingest-repo.js /path/to/repo --instance btd
 *   node scripts/ingest-repo.js https://github.com/user/repo --instance btd
 *   node scripts/ingest-repo.js https://github.com/user/repo --scan
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DEFAULT_FILE_TYPES = '.py,.js,.ts,.md,.json,.yaml,.yml,.go,.rs,.rb';
const SKIP_DIRS = new Set([
  '.git',
  'node_modules',
  'dist',
  'build',
  'coverage',
  'vendor',
  'target',
  '__pycache__',
  '.venv',
  'venv',
  '.next',
  '.nuxt',
  '.turbo',
  '.cache',
  '.idea',
  '.vscode',
]);

const args = process.argv.slice(2);

function getArg(flag) {
  const i = args.indexOf(flag);
  return i !== -1 && i + 1 < args.length ? args[i + 1] : null;
}

function getPositionalArgs(argv) {
  const positionals = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      const next = argv[i + 1];
      if (next && !next.startsWith('--') && ['--instance', '--file-types'].includes(arg)) i++;
      continue;
    }
    positionals.push(arg);
  }
  return positionals;
}

const source = getPositionalArgs(args)[0];
const instance = getArg('--instance') || 'btd';
const scanOnly = args.includes('--scan');
const fileTypesArg = getArg('--file-types') || DEFAULT_FILE_TYPES;

const ROOT = path.join(__dirname, '..');

function getSharedProjectRoot(currentRoot) {
  const marker = `${path.sep}.worktrees${path.sep}`;
  const normalized = path.resolve(currentRoot);
  const idx = normalized.indexOf(marker);
  return idx === -1 ? normalized : normalized.slice(0, idx);
}

const SHARED_PROJECT_ROOT = getSharedProjectRoot(ROOT);
const INSTANCE_DIR = path.join(ROOT, instance);
const SHARED_INSTANCE_DIR = path.join(SHARED_PROJECT_ROOT, instance);
const REGISTRY = path.join(INSTANCE_DIR, 'registry', 'creators.json');
const CATALOG_DIR = path.join(INSTANCE_DIR, 'registry', 'catalogs');
const INGEST_LOG = path.join(INSTANCE_DIR, 'registry', 'ingest-log.jsonl');
const INDEX_NAME = `btd-${instance}`;
const TMP_REPO_DIR = path.join(SHARED_PROJECT_ROOT, '.tmp', 'repos');

function isGitHubUrl(value) {
  return /^https?:\/\/github\.com\/[^/]+\/[^/]+(?:\/)?(?:\.git)?$/i.test(String(value || '').trim());
}

function normalizeFileTypes(value) {
  const seen = new Set();
  const list = String(value || '')
    .split(',')
    .map(part => part.trim().toLowerCase())
    .filter(Boolean)
    .map(part => part.startsWith('.') ? part : `.${part}`)
    .filter(part => {
      if (seen.has(part)) return false;
      seen.add(part);
      return true;
    });

  if (!list.length) {
    throw new Error('At least one file type must be provided');
  }

  return list;
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\.git$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function ensureInstanceStructure() {
  for (const dir of [
    path.dirname(REGISTRY),
    CATALOG_DIR,
    path.join(INSTANCE_DIR, 'raw', 'youtube'),
    path.join(INSTANCE_DIR, 'raw', 'twitter'),
    path.join(INSTANCE_DIR, 'raw', 'podcasts'),
    path.join(INSTANCE_DIR, 'raw', 'articles'),
    path.join(INSTANCE_DIR, 'raw', 'transcripts'),
    path.join(INSTANCE_DIR, 'users'),
    path.join(INSTANCE_DIR, 'wiki', 'concepts'),
    path.join(INSTANCE_DIR, 'wiki', 'topics'),
    path.join(INSTANCE_DIR, 'wiki', 'creators'),
    TMP_REPO_DIR,
  ]) {
    ensureDir(dir);
  }
}

function loadRegistry() {
  if (!fs.existsSync(REGISTRY)) return { creators: [] };
  return JSON.parse(fs.readFileSync(REGISTRY, 'utf-8'));
}

function saveRegistry(registry) {
  fs.writeFileSync(REGISTRY, JSON.stringify(registry, null, 2) + '\n');
}

function appendToLog(entry) {
  fs.appendFileSync(INGEST_LOG, JSON.stringify(entry) + '\n');
}

function getCatalogFile(slug) {
  return path.join(CATALOG_DIR, `${slug}-repo.json`);
}

function parseGitHubUrl(url) {
  const parsed = new URL(url.replace(/\.git$/i, ''));
  const parts = parsed.pathname.replace(/^\//, '').split('/').filter(Boolean);
  if (parts.length < 2) throw new Error(`Unsupported GitHub URL: ${url}`);
  return {
    owner: parts[0],
    repo: parts[1],
    canonicalUrl: `https://github.com/${parts[0]}/${parts[1]}`,
  };
}

function getGitRemoteUrl(repoPath) {
  try {
    return execSync('git config --get remote.origin.url', {
      cwd: repoPath,
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
      timeout: 10000,
    }).trim() || null;
  } catch {
    return null;
  }
}

function pathHasHiddenSegment(targetPath) {
  return path.resolve(targetPath).split(path.sep).some(segment => segment.startsWith('.') && segment.length > 1);
}

function cloneOrUpdateGitHubRepo(url) {
  const { owner, repo, canonicalUrl } = parseGitHubUrl(url);
  const cloneDir = path.join(TMP_REPO_DIR, `${slugify(owner)}--${slugify(repo)}`);

  if (fs.existsSync(path.join(cloneDir, '.git'))) {
    console.log(`🔄 Updating cached clone: ${path.relative(ROOT, cloneDir)}`);
    execSync('git fetch --depth 1 origin', { cwd: cloneDir, stdio: 'inherit', timeout: 120000 });
    execSync('git reset --hard FETCH_HEAD', { cwd: cloneDir, stdio: 'inherit', timeout: 120000 });
  } else {
    ensureDir(TMP_REPO_DIR);
    console.log(`📦 Cloning ${canonicalUrl}`);
    execSync(`git clone --depth 1 "${canonicalUrl}" "${cloneDir}"`, { stdio: 'inherit', timeout: 180000 });
  }

  return {
    repoPath: cloneDir,
    repoUrl: canonicalUrl,
    repoName: repo,
    owner,
    fromGitHub: true,
  };
}

function resolveRepoSource(input) {
  if (isGitHubUrl(input)) return cloneOrUpdateGitHubRepo(input);

  const repoPath = path.resolve(input);
  if (!fs.existsSync(repoPath)) throw new Error(`Repo path does not exist: ${repoPath}`);
  if (!fs.statSync(repoPath).isDirectory()) throw new Error(`Repo path is not a directory: ${repoPath}`);

  return {
    repoPath,
    repoUrl: getGitRemoteUrl(repoPath),
    repoName: path.basename(repoPath),
    owner: null,
    fromGitHub: false,
  };
}

function scanRepoFiles(repoPath, fileTypes, includeHidden) {
  const wanted = new Set(fileTypes.map(ext => ext.toLowerCase()));
  const items = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(repoPath, fullPath);

      if (!includeHidden && entry.name.startsWith('.')) continue;
      if (entry.isDirectory() && SKIP_DIRS.has(entry.name)) continue;

      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }

      if (!entry.isFile()) continue;

      const ext = path.extname(entry.name).toLowerCase();
      if (!wanted.has(ext)) continue;

      const stat = fs.statSync(fullPath);
      items.push({
        id: relativePath,
        path: relativePath,
        ext,
        size_bytes: stat.size,
        modified_at: stat.mtime.toISOString(),
        ingested: false,
      });
    }
  }

  walk(repoPath);
  items.sort((a, b) => a.path.localeCompare(b.path));

  const byExtension = Object.fromEntries(fileTypes.map(ext => [ext, 0]));
  let totalSizeBytes = 0;
  for (const item of items) {
    byExtension[item.ext] = (byExtension[item.ext] || 0) + 1;
    totalSizeBytes += item.size_bytes;
  }

  return {
    items,
    totalFiles: items.length,
    totalSizeBytes,
    byExtension,
  };
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let idx = 0;
  while (value >= 1024 && idx < units.length - 1) {
    value /= 1024;
    idx += 1;
  }
  return `${value.toFixed(value >= 10 || idx === 0 ? 0 : 1)} ${units[idx]}`;
}

function writeCatalog({ slug, name, repoPath, repoUrl, fileTypes, scanResult }) {
  const catalogFile = getCatalogFile(slug);

  let existing = {};
  if (fs.existsSync(catalogFile)) {
    const prev = JSON.parse(fs.readFileSync(catalogFile, 'utf-8'));
    existing = Object.fromEntries((prev.items || []).map(item => [item.id, item]));
  }

  const mergedItems = scanResult.items.map(item => ({
    ...item,
    ingested: existing[item.id]?.ingested || false,
  }));

  const catalog = {
    creator: slug,
    name,
    platform: 'repo',
    scanned_at: new Date().toISOString(),
    repo_path: repoPath,
    repo_url: repoUrl,
    file_types: fileTypes,
    total: mergedItems.length,
    ingested: mergedItems.filter(item => item.ingested).length,
    total_size_bytes: mergedItems.reduce((sum, item) => sum + (item.size_bytes || 0), 0),
    by_extension: mergedItems.reduce((acc, item) => {
      acc[item.ext] = (acc[item.ext] || 0) + 1;
      return acc;
    }, {}),
    items: mergedItems,
  };

  fs.writeFileSync(catalogFile, JSON.stringify(catalog, null, 2) + '\n');
  return { catalogFile, catalog };
}

function markCatalogIndexed(slug) {
  const catalogFile = getCatalogFile(slug);
  if (!fs.existsSync(catalogFile)) return null;

  const catalog = JSON.parse(fs.readFileSync(catalogFile, 'utf-8'));
  catalog.items = (catalog.items || []).map(item => ({ ...item, ingested: true }));
  catalog.ingested = catalog.items.length;
  fs.writeFileSync(catalogFile, JSON.stringify(catalog, null, 2) + '\n');
  return { catalogFile, catalog };
}

function upsertRepoCreator({ slug, name, repoPath, repoUrl, fileTypes, catalogCount, lastScanned }) {
  const registry = loadRegistry();
  let creator = registry.creators.find(entry => entry.slug === slug);

  if (!creator) {
    creator = {
      slug,
      name,
      platforms: {},
      topics: ['code', 'repository'],
      priority: 'medium',
      notes: 'Code repository indexed directly into the shared LEANN corpus.',
      added: new Date().toISOString().split('T')[0],
      status: 'active',
      catalog_count: 0,
      last_scanned: null,
    };
    registry.creators.push(creator);
  }

  creator.name = creator.name || name;
  creator.platforms = creator.platforms || {};
  creator.platforms.repo = {
    path: repoPath,
    url: repoUrl,
    file_types: fileTypes,
  };
  creator.catalog_count = catalogCount;
  creator.last_scanned = lastScanned;

  saveRegistry(registry);
  return creator;
}

function getCombinedIndexRoots(currentRepoPath) {
  const sharedRawRoot = path.join(SHARED_INSTANCE_DIR, 'raw');
  const rawRoot = fs.existsSync(sharedRawRoot) ? sharedRawRoot : path.join(INSTANCE_DIR, 'raw');
  const registry = loadRegistry();
  const roots = [rawRoot];

  for (const creator of registry.creators || []) {
    const repoPath = creator.platforms?.repo?.path;
    if (repoPath && fs.existsSync(repoPath)) roots.push(repoPath);
  }

  if (currentRepoPath && fs.existsSync(currentRepoPath)) roots.push(currentRepoPath);

  return [...new Set(roots.map(root => path.resolve(root)))];
}

function buildLeannCommand({ repoPath, fileTypes }) {
  const docs = getCombinedIndexRoots(repoPath);
  const parts = [
    'leann build',
    INDEX_NAME,
    '--force',
    '--docs',
    ...docs.map(doc => `"${doc}"`),
    `--file-types ${fileTypes.join(',')}`,
    '--embedding-model all-MiniLM-L6-v2',
    '--embedding-mode sentence-transformers',
    '--doc-chunk-size 350',
    '--doc-chunk-overlap 128',
    '--code-chunk-size 400',
    '--code-chunk-overlap 50',
  ];

  if (docs.some(doc => pathHasHiddenSegment(doc))) {
    parts.push('--include-hidden');
  }

  return { command: parts.join(' '), docs };
}

async function scanRepoCatalog(creator, options = {}) {
  const repoPlatform = creator.platforms?.repo;
  if (!repoPlatform?.path && !repoPlatform?.url) return null;

  const fileTypes = normalizeFileTypes(options.fileTypes || repoPlatform.file_types || DEFAULT_FILE_TYPES);
  const resolved = resolveRepoSource(repoPlatform.path || repoPlatform.url);
  const repoPath = resolved.repoPath;
  const includeHidden = pathHasHiddenSegment(repoPath);
  const scanResult = scanRepoFiles(repoPath, fileTypes, includeHidden);

  return {
    creator: creator.slug,
    name: creator.name,
    platform: 'repo',
    scanned_at: new Date().toISOString(),
    repo_path: repoPath,
    repo_url: repoPlatform.url || resolved.repoUrl,
    file_types: fileTypes,
    total: scanResult.totalFiles,
    total_size_bytes: scanResult.totalSizeBytes,
    by_extension: scanResult.byExtension,
    items: scanResult.items,
  };
}

function toProjectRelative(targetPath) {
  const resolved = path.resolve(targetPath);
  const relative = path.relative(SHARED_PROJECT_ROOT, resolved);
  return relative.startsWith('..') ? resolved : relative || '.';
}

function printSummary({ slug, repoPath, repoUrl, fileTypes, scanResult, catalogFile, scanOnlyMode }) {
  console.log(`\n📦 Repo: ${slug}`);
  console.log(`   Path: ${repoPath}`);
  if (repoUrl) console.log(`   URL: ${repoUrl}`);
  console.log(`   File types: ${fileTypes.join(',')}`);
  console.log(`   Files: ${scanResult.totalFiles}`);
  console.log(`   Total size: ${formatBytes(scanResult.totalSizeBytes)}`);
  console.log(`   By extension: ${Object.entries(scanResult.byExtension).filter(([, count]) => count > 0).map(([ext, count]) => `${ext}:${count}`).join(', ') || 'none'}`);
  console.log(`   Catalog: ${path.relative(ROOT, catalogFile)}`);
  if (scanOnlyMode) {
    console.log('   Mode: scan only (no LEANN indexing)');
  } else {
    console.log(`   Index: ${INDEX_NAME}`);
  }
}

async function main() {
  if (!source) {
    console.error('Usage: node scripts/ingest-repo.js <local-path|github-url> [--scan] [--file-types csv] [--instance name]');
    process.exit(1);
  }

  ensureInstanceStructure();

  const fileTypes = normalizeFileTypes(fileTypesArg);
  const resolved = resolveRepoSource(source);
  const repoPath = resolved.repoPath;
  const repoUrl = resolved.repoUrl;
  const repoName = resolved.repoName;
  const slug = slugify(repoName);
  const name = resolved.owner ? `${resolved.owner}/${repoName}` : repoName;
  const includeHidden = pathHasHiddenSegment(repoPath);
  const scanResult = scanRepoFiles(repoPath, fileTypes, includeHidden);

  upsertRepoCreator({
    slug,
    name,
    repoPath,
    repoUrl,
    fileTypes,
    catalogCount: scanResult.totalFiles,
    lastScanned: new Date().toISOString(),
  });

  const { catalogFile } = writeCatalog({
    slug,
    name,
    repoPath,
    repoUrl,
    fileTypes,
    scanResult,
  });

  printSummary({ slug, repoPath, repoUrl, fileTypes, scanResult, catalogFile, scanOnlyMode: scanOnly });

  if (scanOnly) return;

  const { command, docs } = buildLeannCommand({ repoPath, fileTypes });
  console.log(`\n🚀 Running: ${command}`);
  console.log(`   Combined roots: ${docs.map(toProjectRelative).join(', ')}\n`);
  execSync(command, { cwd: SHARED_PROJECT_ROOT, stdio: 'inherit', timeout: 1800000 });

  markCatalogIndexed(slug);
  appendToLog({
    id: `${slug}-${new Date().toISOString()}`,
    source_type: 'repo',
    platform: 'repo',
    creator: slug,
    status: 'indexed',
    ingested_at: new Date().toISOString(),
    indexed_at: new Date().toISOString(),
    file: toProjectRelative(repoPath),
    repo_path: repoPath,
    repo_url: repoUrl,
    index_name: INDEX_NAME,
    index_roots: docs,
    file_types: fileTypes,
    file_count: scanResult.totalFiles,
    total_size_bytes: scanResult.totalSizeBytes,
    extracted: true,
    indexed: true,
  });

  console.log(`\n✅ Repo indexed into ${INDEX_NAME}`);
  console.log(`   Added ${scanResult.totalFiles} file(s) from ${slug}`);
}

if (require.main === module) {
  main().catch(error => {
    console.error(`\n❌ ${error.message}`);
    process.exit(1);
  });
}

module.exports = {
  scanRepoCatalog,
  resolveRepoSource,
  scanRepoFiles,
  normalizeFileTypes,
  DEFAULT_FILE_TYPES,
};
