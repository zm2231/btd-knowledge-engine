#!/usr/bin/env node

/**
 * btd me — Show your profile, current experiment, and what to do next.
 *
 * Template mode (default): reads from local/
 * Operator mode: btd me <user-id> --instance btd
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.join(__dirname, '..');
const args = process.argv.slice(2);
const instanceFlag = args.indexOf('--instance');
const explicitInstance = instanceFlag !== -1 ? args[instanceFlag + 1] : null;
const positionalUser = args[0] && !args[0].startsWith('-') ? args[0] : null;

// Determine mode
const useLocal = !explicitInstance && !positionalUser;
const profileDir = useLocal
  ? path.join(ROOT, 'local')
  : path.join(ROOT, explicitInstance || 'btd', 'users', positionalUser);
const profilePath = path.join(profileDir, 'profile.md');
const expDir = path.join(profileDir, 'experiments');

console.log('');

if (!fs.existsSync(profilePath)) {
  console.log('  No profile found.');
  console.log('');
  console.log('  Run btd start to set up, or open Claude Code and say "I\'m new".');
  console.log('');
  process.exit(0);
}

const raw = fs.readFileSync(profilePath, 'utf-8');
if (raw.includes('Profile not yet created')) {
  console.log('  Profile not yet created.');
  console.log('');
  console.log('  Open Claude Code and say "I\'m new" to run the intake interview.');
  console.log('');
  process.exit(0);
}

// Parse YAML frontmatter or plain YAML
let profile;
const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
if (fmMatch) {
  profile = yaml.load(fmMatch[1]) || {};
} else {
  profile = yaml.load(raw) || {};
}

const label = profile.user_id || (useLocal ? 'local' : positionalUser);
console.log(`  ${label}`);
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
const cs = profile.current_state;
if (cs) {
  if (cs.calibrated_level) console.log(`  Level: ${cs.calibrated_level}`);
  if (cs.domain) console.log(`  Domain: ${cs.domain}`);
  if (cs.key_gap) console.log(`  Key gap: ${cs.key_gap}`);
  console.log('');
}

// Blind spots
if (profile.blind_spots && profile.blind_spots.length > 0) {
  console.log('  Blind spots:');
  profile.blind_spots.forEach(bs => console.log(`    - ${bs}`));
  console.log('');
}

// Constraints
if (profile.constraints) {
  const c = profile.constraints;
  const parts = [];
  if (c.time_per_week) parts.push(`${c.time_per_week}/week`);
  if (c.accountability_pattern) parts.push(`accountability: ${c.accountability_pattern}`);
  if (parts.length > 0) {
    console.log(`  Constraints: ${parts.join(' | ')}`);
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

    try {
      const expContent = fs.readFileSync(path.join(expDir, latest), 'utf-8');
      const hypothesisMatch = expContent.match(/hypothesis:\s*"?([^"\n]+)"?/i);
      const statusMatch = expContent.match(/status:\s*(\w+)/i);
      if (hypothesisMatch) console.log(`  Hypothesis: ${hypothesisMatch[1]}`);
      if (statusMatch) console.log(`  Status: ${statusMatch[1]}`);
    } catch (e) {}

    console.log('');
    console.log('  Next: open Claude Code to check in on your experiment.');
  } else {
    console.log('  No experiments yet.');
    console.log('');
    console.log('  Next: open Claude Code to generate your first experiment.');
  }
} else {
  console.log('  No experiments yet.');
  console.log('');
  console.log('  Next: open Claude Code to generate your first experiment.');
}

console.log('');
