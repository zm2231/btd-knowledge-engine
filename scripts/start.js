#!/usr/bin/env node

/**
 * btd start — First-run setup for new users.
 *
 * Template model: checks if local/ workspace exists.
 * If not, creates it and prints next steps.
 * If yes, shows current state.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LOCAL = path.join(ROOT, 'local');
const PROFILE = path.join(LOCAL, 'profile.md');
const EXP_DIR = path.join(LOCAL, 'experiments');

function hasProfile() {
  if (!fs.existsSync(PROFILE)) return false;
  const content = fs.readFileSync(PROFILE, 'utf8');
  return !content.includes('Profile not yet created');
}

function getExperiments() {
  if (!fs.existsSync(EXP_DIR)) return [];
  return fs.readdirSync(EXP_DIR).filter(f => f.endsWith('.md')).sort();
}

// Main
console.log('');
console.log('  BTD Knowledge Engine');
console.log('  ════════════════════');
console.log('');

if (hasProfile()) {
  const experiments = getExperiments();
  console.log('  Welcome back.');
  console.log('');
  console.log(`  Profile: local/profile.md`);
  console.log(`  Experiments: ${experiments.length}`);
  if (experiments.length > 0) {
    console.log(`  Latest: ${experiments[experiments.length - 1]}`);
  }
  console.log('');
  console.log('  Next steps:');
  console.log('    node scripts/profile.js summary     Your full profile + experiment status');
  console.log('    node scripts/search.js "query"      Search shared + local corpus');
  console.log('    node scripts/status.js              Corpus status');
  console.log('');
  console.log('  Or open Claude Code in this repo. It reads your profile automatically');
  console.log('  and picks up where you left off.');
  console.log('');
} else {
  // New user
  if (!fs.existsSync(LOCAL)) {
    console.log('  Setting up your local workspace...');
    console.log('');
    require('./init-local.js');
    console.log('');
  } else {
    console.log('  You have a local workspace but no profile yet.');
    console.log('');
  }

  console.log('  To get started, you have two options:');
  console.log('');
  console.log('  1. Open Claude Code in this repo and say "I\'m new"');
  console.log('     Claude runs a 15-minute intake interview, builds your profile,');
  console.log('     and generates your first experiment. This is the recommended path.');
  console.log('');
  console.log('  2. Run the intake from the CLI:');
  console.log('     node scripts/profile.js save --file <your-profile.yaml>');
  console.log('');
  console.log('  The shared corpus has 24 creators and 288+ sources ready to search.');
  console.log('  Your personal content goes in local/ (gitignored, never conflicts');
  console.log('  with upstream updates).');
  console.log('');
}
