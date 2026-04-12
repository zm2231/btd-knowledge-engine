#!/usr/bin/env node
/**
 * Initialize the local/ workspace for a new user.
 *
 * Creates the personal content directory structure that mirrors btd/ (shared)
 * but stays gitignored. Called automatically during intake if local/ doesn't
 * exist, or run standalone:
 *
 *   node scripts/init-local.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LOCAL = path.join(ROOT, 'local');

if (fs.existsSync(path.join(LOCAL, 'profile.md'))) {
  console.log('✅ local/ workspace already exists');
  process.exit(0);
}

// Create directory tree
const dirs = [
  '',
  'experiments',
  'journal',
  'raw/youtube',
  'raw/twitter',
  'raw/articles',
  'raw/podcasts',
  'raw/repos',
  'raw/transcripts',
  'raw/assets',
  'registry',
  'registry/catalogs',
  'wiki/concepts',
  'wiki/topics',
];

for (const dir of dirs) {
  fs.mkdirSync(path.join(LOCAL, dir), { recursive: true });
}

// Empty creators registry
fs.writeFileSync(
  path.join(LOCAL, 'registry', 'creators.json'),
  JSON.stringify({ creators: [] }, null, 2) + '\n'
);

// Empty ingest log
fs.writeFileSync(path.join(LOCAL, 'registry', 'ingest-log.jsonl'), '');

// Profile placeholder
fs.writeFileSync(
  path.join(LOCAL, 'profile.md'),
  `---
# Profile not yet created. Run /btd-intake to generate your constraint profile.
---
`
);

// Profile history
fs.writeFileSync(
  path.join(LOCAL, 'profile-history.jsonl'),
  JSON.stringify({ event: 'local_initialized', timestamp: new Date().toISOString() }) + '\n'
);

// Sources manifest template
fs.writeFileSync(
  path.join(LOCAL, 'sources.yaml'),
  `# Personal sources — creators, repos, newsletters you want indexed locally.
# These stay in your clone (gitignored) and are searchable alongside the shared BTD corpus.
#
# Add sources via CLI:
#   node scripts/add-creator.js my-creator "Name" --youtube <url> --local --scan
#   node scripts/ingest-repo.js <path-or-url> --local
#   node scripts/index.js --local
#
# Or list them here for reference:
sources: []
`
);

// Wiki index placeholder
fs.writeFileSync(
  path.join(LOCAL, 'wiki', 'index.md'),
  `# Local Wiki Index

*Personal wiki — compiled from your local sources. Run \`node scripts/compile-wiki.js --local\` to build.*
`
);

console.log('✅ Created local/ workspace');
console.log(`   Profile:     local/profile.md (run /btd-intake to fill)`);
console.log(`   Experiments: local/experiments/`);
console.log(`   Raw content: local/raw/`);
console.log(`   Registry:    local/registry/`);
console.log(`   Wiki:        local/wiki/`);
console.log(`   Sources:     local/sources.yaml`);
console.log('');
console.log('   This directory is gitignored — your content stays in your clone only.');
