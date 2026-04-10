const fs = require('fs');
const path = require('path');

function readEntries(logPath) {
  if (!fs.existsSync(logPath)) return [];
  const raw = fs.readFileSync(logPath, 'utf8').trim();
  if (!raw) return [];
  return raw
    .split('\n')
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function writeEntries(logPath, entries) {
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  const content = entries.length ? `${entries.map((entry) => JSON.stringify(entry)).join('\n')}\n` : '';
  fs.writeFileSync(logPath, content);
}

function appendEntry(logPath, entry) {
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  fs.appendFileSync(logPath, `${JSON.stringify(entry)}\n`);
}

function relativeFile(rootDir, absolutePath) {
  return path.relative(rootDir, absolutePath);
}

function statusFromIndexed(indexed) {
  return indexed ? 'indexed' : 'downloaded';
}

function normalizePlatform(value) {
  return value || 'article';
}

function normalizeFile(rootDir, instanceName, entry) {
  const file = entry.file || entry.path;
  if (!file) return '';

  const normalized = String(file).replace(/^\.\//, '');
  if (normalized.startsWith(`${instanceName}/`)) return normalized;
  if (normalized.startsWith('raw/') || normalized.startsWith('wiki/') || normalized.startsWith('registry/') || normalized.startsWith('users/')) {
    return path.posix.join(instanceName, normalized).replace(/\\/g, '/');
  }
  return normalized.replace(/\\/g, '/');
}

function deriveSourceId(entry, normalizedPlatform) {
  return entry.source_id
    || entry.video_id
    || entry.thread_id
    || entry.tweet_id
    || entry.article_id
    || entry.url
    || entry.id
    || `${normalizedPlatform}:${entry.creator || 'unknown'}:${entry.title || entry.file || 'unknown'}`;
}

function normalizeEntry(rootDir, instanceName, entry) {
  const indexed = Boolean(entry.indexed);
  const platform = normalizePlatform(entry.platform || entry.source_type);
  const file = normalizeFile(rootDir, instanceName, entry);
  const title = entry.title || path.basename(file || entry.file || entry.path || entry.source_id || entry.id || 'untitled', '.md');

  const normalized = {
    source_id: String(deriveSourceId(entry, platform)),
    creator: String(entry.creator || 'unknown'),
    platform,
    title: String(title),
    file,
    url: entry.url || entry.repo_url || '',
    ingested_at: entry.ingested_at || new Date().toISOString(),
    status: indexed ? 'indexed' : 'downloaded',
  };

  const optionalKeys = [
    'video_id',
    'tweet_id',
    'thread_id',
    'article_id',
    'episode_number',
    'transcript_method',
    'segment_count',
    'char_count',
    'tweet_count',
    'is_thread',
    'segments',
    'feed_url',
    'repo_path',
    'index_name',
    'index_roots',
    'file_types',
    'file_count',
    'total_size_bytes',
    'indexed_at',
  ];

  for (const key of optionalKeys) {
    if (entry[key] !== undefined && entry[key] !== null) {
      normalized[key] = entry[key];
    }
  }

  if (entry.indexed !== undefined) {
    normalized.indexed = indexed;
  }

  return normalized;
}

function buildEntry({
  sourceId,
  creator,
  platform,
  title,
  file,
  url = '',
  indexed = false,
  extra = {},
}) {
  return {
    source_id: String(sourceId),
    creator: String(creator),
    platform: String(platform),
    title: String(title),
    file: String(file),
    url: String(url),
    ingested_at: new Date().toISOString(),
    status: statusFromIndexed(indexed),
    indexed,
    ...extra,
  };
}

module.exports = {
  appendEntry,
  buildEntry,
  normalizeEntry,
  readEntries,
  relativeFile,
  statusFromIndexed,
  writeEntries,
};
