#!/usr/bin/env node
/**
 * Initialize a new instance from the template.
 *
 * Usage:
 *   node scripts/init.js my-instance
 *   node scripts/init.js my-instance --name "My Knowledge Base"
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const instanceName = args.find((arg) => !arg.startsWith('--'));

if (!instanceName) {
  console.error('Usage: node scripts/init.js <instance-name> [--name "Display Name"]');
  console.error('');
  console.error('Creates a new instance directory with the full structure.');
  console.error('Then use --instance <name> with all other scripts.');
  process.exit(1);
}

const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, instanceName);

if (fs.existsSync(INST)) {
  console.error(`⚠️  Directory '${instanceName}' already exists.`);
  process.exit(1);
}

const dirs = [
  'raw/youtube',
  'raw/twitter',
  'raw/podcasts',
  'raw/articles',
  'raw/transcripts',
  'wiki/concepts',
  'wiki/topics',
  'wiki/creators',
  'registry/catalogs',
  'users',
];

for (const dir of dirs) {
  fs.mkdirSync(path.join(INST, dir), { recursive: true });
}

fs.writeFileSync(
  path.join(INST, 'registry', 'creators.json'),
  `${JSON.stringify({ creators: [] }, null, 2)}\n`,
);

console.log(`✅ Created instance: ${instanceName}/`);
console.log('');
console.log('Structure:');
dirs.forEach((dir) => console.log(`  ${instanceName}/${dir}/`));
console.log(`  ${instanceName}/registry/creators.json`);
console.log('');
console.log('Next steps:');
console.log(`  node scripts/add-creator.js <slug> "Name" --youtube <url> --instance ${instanceName} --scan`);
console.log(`  node scripts/batch-ingest.js <slug> --limit 10 --instance ${instanceName}`);
console.log(`  node scripts/index.js --instance ${instanceName}`);
console.log(`  node scripts/status.js --instance ${instanceName}`);
