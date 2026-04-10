#!/usr/bin/env node
/**
 * Normalize an instance ingest log to the unified schema.
 * Removes test creator entries and rewrites legacy file/path/source_type/id fields.
 *
 * Usage:
 *   node scripts/migrate-ingest-log.js [--instance btd]
 */

const path = require('path');
const { normalizeEntry, readEntries, writeEntries } = require('./ingest-log.js');

const args = process.argv.slice(2);
const instance = (() => {
  const i = args.indexOf('--instance');
  return i !== -1 ? args[i + 1] : 'btd';
})();

const ROOT = path.join(__dirname, '..');
const INGEST_LOG = path.join(ROOT, instance, 'registry', 'ingest-log.jsonl');

const migrated = readEntries(INGEST_LOG)
  .map((entry) => normalizeEntry(ROOT, instance, entry))
  .filter((entry) => entry.creator !== 'test');

writeEntries(INGEST_LOG, migrated);
console.log(`✅ Migrated ${migrated.length} ingest log entries for ${instance}`);
