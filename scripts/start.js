#!/usr/bin/env node

/**
 * btd start — First-run setup for new users.
 *
 * Checks if a profile exists for the current system user.
 * If not, creates the user directory and prints next steps.
 * If yes, shows their current state.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.join(__dirname, '..');
const instanceFlag = process.argv.indexOf('--instance');
const instance = instanceFlag !== -1 ? process.argv[instanceFlag + 1] : 'btd';
const INST = path.join(ROOT, instance);
const USERS = path.join(INST, 'users');

// Derive a user slug from system username or passed arg
const explicitUser = process.argv[2] && !process.argv[2].startsWith('-') ? process.argv[2] : null;
const systemUser = os.userInfo().username;
const userId = explicitUser || systemUser;

function getProfiles() {
  if (!fs.existsSync(USERS)) return [];
  return fs.readdirSync(USERS).filter(d =>
    fs.statSync(path.join(USERS, d)).isDirectory() &&
    fs.existsSync(path.join(USERS, d, 'profile.yaml'))
  );
}

function hasProfile(id) {
  return fs.existsSync(path.join(USERS, id, 'profile.yaml'));
}

function getExperiments(id) {
  const expDir = path.join(USERS, id, 'experiments');
  if (!fs.existsSync(expDir)) return [];
  return fs.readdirSync(expDir).filter(f => f.endsWith('.md')).sort();
}

// Main
const profiles = getProfiles();

console.log('');
console.log('  BTD Knowledge Engine');
console.log('  ════════════════════');
console.log('');

if (hasProfile(userId)) {
  const experiments = getExperiments(userId);
  console.log(`  Welcome back, ${userId}.`);
  console.log('');
  console.log(`  Profile: ${instance}/users/${userId}/profile.yaml`);
  console.log(`  Experiments: ${experiments.length}`);
  if (experiments.length > 0) {
    console.log(`  Latest: ${experiments[experiments.length - 1]}`);
  }
  console.log('');
  console.log('  Next steps:');
  console.log('    btd me                    Your full profile + experiment status');
  console.log('    btd session checkin        Check in on your current experiment');
  console.log('    btd search "query"         Search the corpus');
  console.log('');
  console.log('  Or open Claude Code in this repo — it reads your profile automatically');
  console.log('  and picks up where you left off.');
  console.log('');
} else {
  // New user
  console.log(`  Hey ${userId}. You don't have a profile yet.`);
  console.log('');

  if (profiles.length > 0) {
    console.log(`  Existing users: ${profiles.join(', ')}`);
    console.log('');
    console.log(`  If you're one of them, run: btd start <your-name>`);
    console.log('');
  }

  // Create user dir
  const userDir = path.join(USERS, userId);
  const expDir = path.join(userDir, 'experiments');
  fs.mkdirSync(expDir, { recursive: true });
  console.log(`  Created: ${instance}/users/${userId}/`);
  console.log('');
  console.log('  To get started, you have two options:');
  console.log('');
  console.log('  1. Open Claude Code in this repo and say "I\'m new"');
  console.log('     Claude runs a 15-minute intake interview, builds your profile,');
  console.log('     and generates your first experiment. This is the recommended path.');
  console.log('');
  console.log('  2. Run the intake from the CLI:');
  console.log(`     btd session intake ${userId}`);
  console.log('');
  console.log('  The intake figures out what you actually need (not what you think you');
  console.log('  need). It pushes back, probes, and calibrates. After that, everything');
  console.log('  is personalized to your profile.');
  console.log('');

  // Show what's available
  try {
    const { execFileSync } = require('child_process');
    const status = execFileSync(process.execPath, [path.join(ROOT, 'scripts', 'status.js'), '--instance', instance], { encoding: 'utf-8' });
    const creatorMatch = status.match(/Creators:\s+(\d+)/);
    const indexMatch = status.match(/(\d+)\s+chunks/i) || status.match(/Index:/);
    if (creatorMatch) {
      console.log(`  What's in the corpus: ${creatorMatch[1]} creators indexed and searchable.`);
      console.log('  Run btd status for the full breakdown.');
      console.log('');
    }
  } catch (e) {
    // status script might fail, that's fine
  }
}
