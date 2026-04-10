#!/usr/bin/env node

/**
 * btd me — Show your profile, current experiment, and what to do next.
 *
 * Detects user from system username or explicit arg.
 * Loads profile, finds latest experiment, shows status.
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const yaml = require('js-yaml');

const ROOT = path.join(__dirname, '..');
const instanceFlag = process.argv.indexOf('--instance');
const instance = instanceFlag !== -1 ? process.argv[instanceFlag + 1] : 'btd';
const INST = path.join(ROOT, instance);
const USERS = path.join(INST, 'users');

const explicitUser = process.argv[2] && !process.argv[2].startsWith('-') ? process.argv[2] : null;
const systemUser = os.userInfo().username;
const userId = explicitUser || systemUser;

const profilePath = path.join(USERS, userId, 'profile.yaml');
const expDir = path.join(USERS, userId, 'experiments');

console.log('');

if (!fs.existsSync(profilePath)) {
  console.log(`  No profile found for "${userId}".`);
  console.log('');
  console.log('  Run btd start to set up, or open Claude Code and say "I\'m new".');
  console.log('');
  process.exit(0);
}

// Load profile
const raw = fs.readFileSync(profilePath, 'utf-8');
const profile = yaml.load(raw);

console.log(`  ${profile.user_id || userId}`);
console.log('  ════════════════════');
console.log('');

if (profile.stated_goal) {
  console.log(`  Goal: ${profile.stated_goal}`);
}
if (profile.actual_goal && profile.actual_goal !== profile.stated_goal) {
  console.log(`  Real goal: ${profile.actual_goal}`);
}
if (profile.goal_type) {
  console.log(`  Type: ${profile.goal_type}`);
}
console.log('');

// Current state
if (profile.current_state) {
  const cs = profile.current_state;
  if (cs.calibrated_level) console.log(`  Level: ${cs.calibrated_level}`);
  if (cs.domain) console.log(`  Domain: ${cs.domain}`);
  if (cs.key_gap) console.log(`  Key gap: ${cs.key_gap}`);
}
console.log('');

// Blind spots
if (profile.blind_spots && profile.blind_spots.length > 0) {
  console.log('  Blind spots:');
  profile.blind_spots.forEach(bs => console.log(`    • ${bs}`));
  console.log('');
}

// Constraints
if (profile.constraints) {
  const c = profile.constraints;
  const parts = [];
  if (c.time_per_week) parts.push(`${c.time_per_week}/week`);
  if (c.accountability_pattern) parts.push(`accountability: ${c.accountability_pattern}`);
  if (c.learning_style) parts.push(`style: ${c.learning_style}`);
  if (parts.length > 0) {
    console.log(`  Constraints: ${parts.join(' · ')}`);
    console.log('');
  }
}

// Experiments
if (fs.existsSync(expDir)) {
  const experiments = fs.readdirSync(expDir).filter(f => f.endsWith('.md')).sort();
  if (experiments.length > 0) {
    console.log(`  Experiments: ${experiments.length} total`);
    const latest = experiments[experiments.length - 1];
    console.log(`  Latest: ${latest}`);

    // Try to read the experiment for status
    try {
      const expContent = fs.readFileSync(path.join(expDir, latest), 'utf-8');
      const hypothesisMatch = expContent.match(/hypothesis:\s*"?([^"\n]+)"?/i);
      const statusMatch = expContent.match(/status:\s*(\w+)/i);
      if (hypothesisMatch) console.log(`  Hypothesis: ${hypothesisMatch[1]}`);
      if (statusMatch) console.log(`  Status: ${statusMatch[1]}`);
    } catch (e) {}

    console.log('');
    console.log('  Next: open Claude Code and check in, or run:');
    console.log(`    btd session checkin ${userId}`);
  } else {
    console.log('  No experiments yet.');
    console.log('');
    console.log('  Next: open Claude Code — it will generate your first experiment');
    console.log('  based on your profile.');
  }
} else {
  console.log('  No experiments yet.');
  console.log('');
  console.log('  Next: open Claude Code — it will generate your first experiment.');
}

console.log('');
