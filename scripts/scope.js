/**
 * Path resolver for shared (btd/) vs local (local/) content.
 *
 * Usage:
 *   const { resolvePaths } = require('./scope.js');
 *   const paths = resolvePaths(ROOT, 'local');
 *   // paths.rawDir, paths.registryDir, paths.wikiDir, paths.creatorsJson,
 *   // paths.ingestLog, paths.catalogDir, paths.leannIndex, paths.base
 */

const path = require('path');

function resolvePaths(rootDir, scope, instance) {
  if (scope === 'local') {
    const base = path.join(rootDir, 'local');
    return {
      base,
      rawDir: path.join(base, 'raw'),
      registryDir: path.join(base, 'registry'),
      creatorsJson: path.join(base, 'registry', 'creators.json'),
      catalogDir: path.join(base, 'registry', 'catalogs'),
      ingestLog: path.join(base, 'registry', 'ingest-log.jsonl'),
      wikiDir: path.join(base, 'wiki'),
      leannIndex: 'btd-local',
      scope: 'local',
    };
  }

  // shared (default) — uses instance name for path
  const inst = instance || 'btd';
  const base = path.join(rootDir, inst);
  return {
    base,
    rawDir: path.join(base, 'raw'),
    registryDir: path.join(base, 'registry'),
    creatorsJson: path.join(base, 'registry', 'creators.json'),
    catalogDir: path.join(base, 'registry', 'catalogs'),
    ingestLog: path.join(base, 'registry', 'ingest-log.jsonl'),
    wikiDir: path.join(base, 'wiki'),
    leannIndex: `btd-${inst}`,
    scope: 'shared',
  };
}

/**
 * Parse --local flag from process.argv and return the scope.
 * Also reads --instance for shared scope fallback.
 */
function scopeFromArgs(argv) {
  const args = argv || process.argv.slice(2);
  const isLocal = args.includes('--local');
  const instIdx = args.indexOf('--instance');
  const instance = instIdx !== -1 && instIdx + 1 < args.length ? args[instIdx + 1] : 'btd';
  return { scope: isLocal ? 'local' : 'shared', instance };
}

module.exports = { resolvePaths, scopeFromArgs };
