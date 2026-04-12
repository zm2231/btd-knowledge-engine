#!/usr/bin/env node
/**
 * Session orchestrator — wires skills, profiles, experiments, and corpus together.
 *
 * Template mode (default — single user, local/):
 *   node scripts/session.js intake                   # New user: run intake interview
 *   node scripts/session.js checkin                   # Returning user: load state, run check-in
 *   node scripts/session.js search "<query>"          # Profile-aware corpus search
 *   node scripts/session.js experiment                # Generate next experiment
 *   node scripts/session.js status                    # Quick status overview
 *
 * Operator mode (multi-user in btd/users/):
 *   node scripts/session.js intake <user-id> --instance btd
 *   node scripts/session.js checkin <user-id> --instance btd
 *   etc.
 *
 * What this script does:
 *   It assembles context (profile, experiments, corpus results) and prints a prompt
 *   that you paste into Claude (or pipe to an API). It doesn't run the LLM itself.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const yaml = require('js-yaml');

const args = process.argv.slice(2);
const action = args[0];
const getFlag = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : null; };

const ROOT = path.join(__dirname, '..');

// Determine mode: local (template) vs operator (multi-user)
const explicitInstance = getFlag('instance');
// In local mode, the first positional after action is the query (for search) or nothing
// In operator mode, the first positional after action is the user-id
const positionalAfterAction = args[1] && !args[1].startsWith('--') ? args[1] : null;
const useLocal = !explicitInstance;
const INSTANCE = explicitInstance || 'btd';

// Resolve paths based on mode
const LOCAL_DIR = path.join(ROOT, 'local');
const USERS_DIR = path.join(ROOT, INSTANCE, 'users');
const SKILLS_DIR = path.join(ROOT, 'skills', 'btd-intake');

function resolveUserDir() {
  if (useLocal) return LOCAL_DIR;
  if (!positionalAfterAction) { console.error('Need <user-id> with --instance mode'); process.exit(1); }
  return path.join(USERS_DIR, positionalAfterAction);
}

function resolveUserId() {
  if (useLocal) return 'local';
  return positionalAfterAction;
}

const USER_DIR = resolveUserDir();

if (!action || ['--help', '-h'].includes(action)) {
  console.log(`BTD Session Orchestrator

  node scripts/session.js intake              Run intake interview
  node scripts/session.js checkin             Returning user check-in
  node scripts/session.js search "<query>"    Profile-aware corpus search
  node scripts/session.js experiment          Generate next experiment
  node scripts/session.js status              User status overview

  --instance <name>  Operator mode (multi-user in btd/users/)`);
  process.exit(0);
}

// --- Helpers ---

function profilePath() { return path.join(USER_DIR, 'profile.md'); }

function loadFile(p) {
  if (!fs.existsSync(p)) return null;
  const content = fs.readFileSync(p, 'utf8');
  if (content.includes('Profile not yet created')) return null;
  return content;
}

function getExperiments() {
  const dir = path.join(USER_DIR, 'experiments');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .map(f => ({
      file: f,
      path: path.join(dir, f),
      content: fs.readFileSync(path.join(dir, f), 'utf8')
    }));
}

function getJournals() {
  const dir = path.join(USER_DIR, 'journal');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
}

function compositeSearch(query, topK = 5) {
  // Use the composite search script
  try {
    return execFileSync(
      process.execPath,
      [path.join(ROOT, 'scripts', 'search.js'), query, '--top-k', String(topK)],
      { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024, timeout: 30000, stdio: ['ignore', 'pipe', 'ignore'] }
    );
  } catch {
    return '(corpus search unavailable)';
  }
}

function extractProfileFields(profileContent) {
  let parsed = {};

  const fmMatch = profileContent.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)/);
  if (fmMatch) {
    try { Object.assign(parsed, yaml.load(fmMatch[1]) || {}); } catch {}
    const body = fmMatch[2]
      .replace(/^#[^\n]*/gm, '')
      .replace(/^\s*\n/gm, '\n');
    try { Object.assign(parsed, yaml.load(body) || {}); } catch {}
  }

  if (Object.keys(parsed).length === 0) {
    try { parsed = yaml.load(profileContent) || {}; } catch {}
  }

  const fields = {};
  fields.user_id = parsed.user_id;
  fields.stated_goal = parsed.stated_goal;
  fields.actual_goal = parsed.actual_goal;
  fields.goal_type = parsed.goal_type;
  fields.hard_truth = parsed.hard_truth;

  const cs = parsed.current_state || {};
  fields.domain = cs.domain;
  fields.claimed_level = cs.claimed_level;
  fields.calibrated_level = cs.calibrated_level;
  fields.evidence = cs.evidence;
  fields.key_gap = cs.key_gap;

  fields.blind_spots = Array.isArray(parsed.blind_spots) ? parsed.blind_spots : [];

  const con = parsed.constraints || {};
  fields.time_per_week = con.time_per_week;
  fields.time_evidence = con.time_evidence;
  fields.skills = Array.isArray(con.skills) ? con.skills : [];
  fields.tools = Array.isArray(con.tools) ? con.tools : [];
  fields.accountability_pattern = con.accountability_pattern;
  fields.budget = con.budget;

  const exp = parsed.experiment || {};
  fields.experiment_hypothesis = exp.hypothesis;
  fields.experiment_content = Array.isArray(exp.content) ? exp.content : [];
  fields.experiment_action = exp.action;
  fields.experiment_check = exp.check;
  fields.experiment_trap = exp.trap_to_avoid;

  for (const k of Object.keys(fields)) {
    if (fields[k] === undefined || fields[k] === null) delete fields[k];
  }

  return fields;
}

function separator(title) {
  return `\n${'═'.repeat(60)}\n  ${title}\n${'═'.repeat(60)}\n`;
}

const label = resolveUserId();
const userDirRel = useLocal ? 'local/' : `${INSTANCE}/users/${positionalAfterAction}/`;

// --- Actions ---

if (action === 'intake') {
  if (fs.existsSync(profilePath()) && loadFile(profilePath())) {
    console.error(`⚠️  Profile already exists. Use 'checkin' instead, or delete the profile to start over.`);
    console.error(`   ${profilePath()}`);
    process.exit(1);
  }

  const skill = loadFile(path.join(SKILLS_DIR, 'SKILL.md'));
  if (!skill) { console.error('SKILL.md not found'); process.exit(1); }

  console.log(separator('INTAKE SESSION'));
  console.log(`\nLoad the following into Claude as a system prompt or skill, then begin the interview.\n`);
  console.log(`After the interview, Claude will produce a constraint profile YAML block.`);
  console.log(`Save it with: node scripts/profile.js save --file profile.yaml`);
  console.log(separator('SKILL (paste into Claude)'));
  console.log(skill);
  console.log(separator('BEGIN INTERVIEW'));
  console.log(`\nStart with: "Hi, I'm here to help you figure out what to do next. Tell me what you're working on or trying to learn."\n`);

} else if (action === 'checkin') {
  const profile = loadFile(profilePath());
  if (!profile) {
    console.error(`No profile found. Run 'intake' first.`);
    process.exit(1);
  }

  const reentry = loadFile(path.join(SKILLS_DIR, 'RE-ENTRY.md'));
  const experiments = getExperiments();
  const latest = experiments[experiments.length - 1];
  const fields = extractProfileFields(profile);

  console.log(separator('CHECK-IN SESSION'));
  console.log(separator('RE-ENTRY SKILL'));
  if (reentry) console.log(reentry);
  console.log(separator('USER PROFILE'));
  console.log(profile);

  if (latest) {
    console.log(separator('LATEST EXPERIMENT (#' + experiments.length + ')'));
    console.log(latest.content);
  } else {
    console.log(separator('NO EXPERIMENTS YET'));
    console.log('Profile exists but no experiment started. RE-ENTRY.md has protocol for this.\n');
  }

  if (experiments.length > 1) {
    console.log(separator('EXPERIMENT HISTORY'));
    for (let i = 0; i < experiments.length - 1; i++) {
      const exp = experiments[i];
      const titleMatch = exp.content.match(/^# .+$/m);
      console.log(`  ${exp.file}${titleMatch ? ' — ' + titleMatch[0].replace('# ', '') : ''}`);
    }
    console.log('');
  }

  if (fields.key_gap) {
    console.log(separator('CORPUS: KEY GAP'));
    console.log(compositeSearch(fields.key_gap, 3));
  }
  if (fields.blind_spots?.length > 0) {
    console.log(separator('CORPUS: BLIND SPOTS'));
    console.log(compositeSearch(fields.blind_spots[0], 3));
  }

  console.log(separator('INSTRUCTIONS'));
  console.log(`Load everything above into Claude. The RE-ENTRY skill tells Claude how to run the check-in.`);
  console.log(`\nAfter the check-in:`);
  console.log(`  1. Update profile: node scripts/profile.js save --file updated-profile.md`);
  console.log(`  2. Save new experiment to: ${userDirRel}experiments/`);
  console.log(`  3. Or update experiment outcome in the existing card's YAML block\n`);

} else if (action === 'search') {
  const query = positionalAfterAction;
  if (!query) { console.error('Usage: session.js search "<query>"'); process.exit(1); }

  const profile = loadFile(profilePath());
  const fields = profile ? extractProfileFields(profile) : {};

  let augmented = query;
  if (fields.calibrated_level && fields.domain) {
    augmented = `${query} (${fields.calibrated_level} level, ${fields.domain})`;
  }

  console.log(separator('SEARCH'));
  if (profile) {
    console.log(`  Profile: ${fields.calibrated_level || '?'} in ${fields.domain || '?'}`);
    console.log(`  Goal: ${fields.actual_goal || fields.goal_type || '?'}`);
    console.log(`  Query: "${query}"`);
    console.log(`  Augmented: "${augmented}"\n`);
  } else {
    console.log(`  No profile — searching without personalization\n`);
  }

  console.log('--- Direct query ---');
  console.log(compositeSearch(query, 3));

  if (augmented !== query) {
    console.log('--- Profile-augmented query ---');
    console.log(compositeSearch(augmented, 3));
  }

  if (fields.key_gap) {
    console.log('--- Gap-targeted query ---');
    console.log(compositeSearch(`${query} ${fields.key_gap}`, 2));
  }

} else if (action === 'experiment') {
  const profile = loadFile(profilePath());
  if (!profile) { console.error('No profile found. Run intake first.'); process.exit(1); }

  const experiments = getExperiments();
  const latest = experiments[experiments.length - 1];
  const fields = extractProfileFields(profile);
  const template = loadFile(path.join(ROOT, 'template', 'experiment-card.md'));
  const nextNum = experiments.length + 1;

  console.log(separator('GENERATE EXPERIMENT #' + nextNum));
  console.log(separator('USER PROFILE'));
  console.log(profile);

  if (latest) {
    console.log(separator('PREVIOUS EXPERIMENT (#' + experiments.length + ')'));
    console.log(latest.content);
  }

  const queries = [];
  if (fields.actual_goal) queries.push(fields.actual_goal);
  if (fields.key_gap) queries.push(fields.key_gap);
  if (fields.blind_spots?.[0]) queries.push(fields.blind_spots[0]);

  for (const q of queries) {
    console.log(separator('CORPUS: ' + q.slice(0, 50)));
    console.log(compositeSearch(q, 3));
  }

  console.log(separator('EXPERIMENT TEMPLATE'));
  if (template) console.log(template);

  console.log(separator('INSTRUCTIONS'));
  console.log(`Give Claude everything above and ask it to generate experiment #${nextNum}.`);
  console.log(`\nThe experiment should:`);
  console.log(`  - Build on the previous experiment (if any)`);
  console.log(`  - Target the key gap or a blind spot from the profile`);
  console.log(`  - Use content from the corpus search results above`);
  console.log(`  - Be completable in ${fields.time_per_week || 'their available time'}`);
  console.log(`  - Have a testable hypothesis and observable outcome`);
  console.log(`\nSave to: ${userDirRel}experiments/${String(nextNum).padStart(3,'0')}-{slug}.md\n`);

} else if (action === 'status') {
  const profile = loadFile(profilePath());
  const experiments = getExperiments();
  const journals = getJournals();
  const latest = experiments[experiments.length - 1];

  if (!profile) {
    console.log(`\n  No profile yet. Run: node scripts/session.js intake\n`);
    process.exit(0);
  }

  const fields = extractProfileFields(profile);

  console.log(`\n  ${label}`);
  console.log(`  ${'─'.repeat(40)}`);
  console.log(`  Goal: ${fields.actual_goal || '?'}`);
  console.log(`  Type: ${fields.goal_type || '?'}`);
  console.log(`  Level: ${fields.calibrated_level || '?'} in ${fields.domain || '?'}`);
  console.log(`  Gap: ${fields.key_gap || '?'}`);
  if (fields.blind_spots?.length) console.log(`  Blind spots: ${fields.blind_spots.length}`);
  console.log(`  Experiments: ${experiments.length}`);
  console.log(`  Journal entries: ${journals.length}`);

  if (latest) {
    const statusMatch = latest.content.match(/^status:\s*(.+)$/m);
    const outcomeMatch = latest.content.match(/^outcome:\s*(.+)$/m);
    console.log(`  Latest: ${latest.file}`);
    console.log(`    Status: ${statusMatch?.[1] || 'unknown'} | Outcome: ${outcomeMatch?.[1] || 'pending'}`);
  }

  console.log(`\n  Next action:`);
  if (experiments.length === 0) {
    console.log(`    → Generate first experiment: node scripts/session.js experiment`);
  } else if (latest) {
    const statusMatch = latest.content.match(/^status:\s*(.+)$/m);
    const status = statusMatch?.[1]?.trim();
    if (status === 'active') {
      console.log(`    → Check in: node scripts/session.js checkin`);
    } else {
      console.log(`    → Generate next experiment: node scripts/session.js experiment`);
    }
  }
  console.log('');

} else {
  console.error(`Unknown action: ${action}. Use --help.`);
  process.exit(1);
}
