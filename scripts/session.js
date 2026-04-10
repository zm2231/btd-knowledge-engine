#!/usr/bin/env node
/**
 * Session orchestrator — wires skills, profiles, experiments, and corpus together.
 * This is what you actually run when working with a user.
 *
 * Usage:
 *   node scripts/session.js intake <user-id>              # New user: run intake interview
 *   node scripts/session.js checkin <user-id>              # Returning user: load state, run check-in
 *   node scripts/session.js search <user-id> "<query>"     # Profile-aware corpus search
 *   node scripts/session.js experiment <user-id>           # Generate next experiment from profile + corpus
 *   node scripts/session.js status <user-id>               # Quick view: where is this user at?
 *
 * All commands accept --instance <name> (default: btd)
 *
 * What this script does:
 *   It assembles context (profile, experiments, corpus results) and prints a prompt
 *   that you paste into Claude (or pipe to an API). It doesn't run the LLM itself.
 *   Think of it as "here's everything Claude needs to do this session."
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const yaml = require('js-yaml');

const args = process.argv.slice(2);
const action = args[0];
const userId = args[1];
const getFlag = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : null; };

const INSTANCE = getFlag('instance') || 'btd';
const ROOT = path.join(__dirname, '..');
const INST = path.join(ROOT, INSTANCE);
const USERS_DIR = path.join(INST, 'users');
const SKILLS_DIR = path.join(ROOT, 'skills', 'btd-intake');
const LEANN_INDEX = `btd-${INSTANCE}`;
const INST_FLAG = INSTANCE === 'btd' ? '' : ` --instance ${INSTANCE}`;

if (!action || ['--help', '-h'].includes(action)) {
  console.log(`BTD Session Orchestrator

  node scripts/session.js intake <user-id>              New user intake interview
  node scripts/session.js checkin <user-id>             Returning user check-in
  node scripts/session.js search <user-id> "<query>"    Profile-aware corpus search
  node scripts/session.js experiment <user-id>          Generate next experiment
  node scripts/session.js status <user-id>              User status overview

  --instance <name>  (default: btd)`);
  process.exit(0);
}

// --- Helpers ---

function userDir(id) { return path.join(USERS_DIR, id); }
function profilePath(id) { return path.join(userDir(id), 'profile.md'); }

function loadFile(p) {
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8');
}

function getExperiments(id) {
  const dir = path.join(userDir(id), 'experiments');
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

function getJournals(id) {
  const dir = path.join(userDir(id), 'journal');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
}

function corpusSearch(query, topK = 5) {
  try {
    const result = execSync(
      `leann search ${LEANN_INDEX} "${query.replace(/"/g, '\\"')}" --top-k ${topK} --non-interactive 2>/dev/null`,
      { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024, timeout: 30000 }
    );
    return result;
  } catch {
    return '(corpus search unavailable — LEANN index may not be built)';
  }
}

function extractProfileFields(profileContent) {
  // Parse the profile as YAML. Profiles may have:
  // 1. Pure YAML (from SKILL.md output)
  // 2. YAML frontmatter (---\n...\n---) + markdown body with YAML blocks
  // 3. Markdown with embedded YAML-ish content
  
  let parsed = {};
  
  // Try 1: strip frontmatter and parse the body as YAML
  const fmMatch = profileContent.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)/);
  if (fmMatch) {
    // Parse frontmatter
    try { Object.assign(parsed, yaml.load(fmMatch[1]) || {}); } catch {}
    // Parse body as YAML (profiles are YAML with markdown headers as comments)
    const body = fmMatch[2]
      .replace(/^#[^\n]*/gm, '')  // strip markdown headers
      .replace(/^\s*\n/gm, '\n'); // collapse blank lines
    try { Object.assign(parsed, yaml.load(body) || {}); } catch {}
  }
  
  // Try 2: parse the whole thing as YAML (no frontmatter)
  if (Object.keys(parsed).length === 0) {
    try { parsed = yaml.load(profileContent) || {}; } catch {}
  }
  
  // Flatten nested fields for easy access
  const fields = {};
  
  // Top-level fields
  fields.user_id = parsed.user_id;
  fields.stated_goal = parsed.stated_goal;
  fields.actual_goal = parsed.actual_goal;
  fields.goal_type = parsed.goal_type;
  fields.hard_truth = parsed.hard_truth;
  
  // Nested: current_state
  const cs = parsed.current_state || {};
  fields.domain = cs.domain;
  fields.claimed_level = cs.claimed_level;
  fields.calibrated_level = cs.calibrated_level;
  fields.evidence = cs.evidence;
  fields.key_gap = cs.key_gap;
  
  // Nested: blind_spots (array)
  fields.blind_spots = Array.isArray(parsed.blind_spots) ? parsed.blind_spots : [];
  
  // Nested: constraints
  const con = parsed.constraints || {};
  fields.time_per_week = con.time_per_week;
  fields.time_evidence = con.time_evidence;
  fields.skills = Array.isArray(con.skills) ? con.skills : [];
  fields.tools = Array.isArray(con.tools) ? con.tools : [];
  fields.accountability_pattern = con.accountability_pattern;
  fields.budget = con.budget;
  
  // Nested: experiment
  const exp = parsed.experiment || {};
  fields.experiment_hypothesis = exp.hypothesis;
  fields.experiment_content = Array.isArray(exp.content) ? exp.content : [];
  fields.experiment_action = exp.action;
  fields.experiment_check = exp.check;
  fields.experiment_trap = exp.trap_to_avoid;
  
  // Clean: remove undefined values
  for (const k of Object.keys(fields)) {
    if (fields[k] === undefined || fields[k] === null) delete fields[k];
  }
  
  return fields;
}

function separator(title) {
  return `\n${'═'.repeat(60)}\n  ${title}\n${'═'.repeat(60)}\n`;
}

// --- Actions ---

if (action === 'intake') {
  if (!userId) { console.error('Usage: session.js intake <user-id>'); process.exit(1); }
  
  // Check if profile already exists
  if (fs.existsSync(profilePath(userId))) {
    console.error(`⚠️  Profile already exists for '${userId}'. Use 'checkin' instead, or delete the profile to start over.`);
    console.error(`   ${profilePath(userId)}`);
    process.exit(1);
  }
  
  const skill = loadFile(path.join(SKILLS_DIR, 'SKILL.md'));
  if (!skill) { console.error('SKILL.md not found'); process.exit(1); }
  
  console.log(separator('INTAKE SESSION — ' + userId));
  console.log(`\nLoad the following into Claude as a system prompt or skill, then begin the interview.\n`);
  console.log(`After the interview, Claude will produce a constraint profile YAML block.`);
  console.log(`Save it with: node scripts/profile.js save ${userId} --stdin --instance ${INSTANCE}`);
  console.log(`(Paste the YAML, then Ctrl+D)\n`);
  console.log(`Or save to a file first: node scripts/profile.js save ${userId} --file profile.yaml --instance ${INSTANCE}`);
  console.log(separator('SKILL (paste into Claude)'));
  console.log(skill);
  console.log(separator('BEGIN INTERVIEW'));
  console.log(`\nStart with: "Hi, I'm here to help you figure out what to do next. Tell me what you're working on or trying to learn."\n`);
  
} else if (action === 'checkin') {
  if (!userId) { console.error('Usage: session.js checkin <user-id>'); process.exit(1); }
  
  const profile = loadFile(profilePath(userId));
  if (!profile) {
    console.error(`No profile for '${userId}'. Run 'intake' first.`);
    process.exit(1);
  }
  
  const reentry = loadFile(path.join(SKILLS_DIR, 'RE-ENTRY.md'));
  const experiments = getExperiments(userId);
  const latest = experiments[experiments.length - 1];
  const fields = extractProfileFields(profile);
  
  console.log(separator('CHECK-IN SESSION — ' + userId));
  
  // Context dump for Claude
  console.log(separator('RE-ENTRY SKILL'));
  if (reentry) console.log(reentry);
  
  console.log(separator('USER PROFILE'));
  console.log(profile);
  
  if (latest) {
    console.log(separator('LATEST EXPERIMENT (#' + experiments.length + ')'));
    console.log(latest.content);
  } else {
    console.log(separator('NO EXPERIMENTS YET'));
    console.log('User has a profile but never started an experiment. RE-ENTRY.md has protocol for this.\n');
  }
  
  if (experiments.length > 1) {
    console.log(separator('EXPERIMENT HISTORY'));
    for (let i = 0; i < experiments.length - 1; i++) {
      const exp = experiments[i];
      // Just show frontmatter + title
      const titleMatch = exp.content.match(/^# .+$/m);
      console.log(`  ${exp.file}${titleMatch ? ' — ' + titleMatch[0].replace('# ', '') : ''}`);
    }
    console.log('');
  }
  
  // Corpus search based on profile gaps
  if (fields.key_gap) {
    console.log(separator('CORPUS: KEY GAP'));
    console.log(corpusSearch(fields.key_gap, 3));
  }
  if (fields.blind_spots?.length > 0) {
    console.log(separator('CORPUS: BLIND SPOTS'));
    console.log(corpusSearch(fields.blind_spots[0], 3));
  }
  
  console.log(separator('INSTRUCTIONS'));
  console.log(`Load everything above into Claude. The RE-ENTRY skill tells Claude how to run the check-in.`);
  console.log(`\nAfter the check-in:`);
  console.log(`  1. Update profile: node scripts/profile.js save ${userId} --file updated-profile.md --instance ${INSTANCE}`);
  console.log(`  2. Save new experiment to: ${userDir(userId)}/experiments/`);
  console.log(`  3. Or update experiment outcome in the existing card's YAML block\n`);
  
} else if (action === 'search') {
  const query = args[2] || getFlag('query');
  if (!userId || !query) { console.error('Usage: session.js search <user-id> "<query>"'); process.exit(1); }
  
  const profile = loadFile(profilePath(userId));
  const fields = profile ? extractProfileFields(profile) : {};
  
  // Build profile-aware query
  let augmented = query;
  if (fields.calibrated_level && fields.domain) {
    augmented = `${query} (${fields.calibrated_level} level, ${fields.domain})`;
  }
  
  console.log(separator('SEARCH — ' + userId));
  if (profile) {
    console.log(`  Profile: ${fields.calibrated_level || '?'} in ${fields.domain || '?'}`);
    console.log(`  Goal: ${fields.actual_goal || fields.goal_type || '?'}`);
    console.log(`  Query: "${query}"`);
    console.log(`  Augmented: "${augmented}"\n`);
  } else {
    console.log(`  No profile — searching without personalization\n`);
  }
  
  console.log('--- Direct query ---');
  console.log(corpusSearch(query, 3));
  
  if (augmented !== query) {
    console.log('--- Profile-augmented query ---');
    console.log(corpusSearch(augmented, 3));
  }
  
  if (fields.key_gap) {
    console.log('--- Gap-targeted query ---');
    console.log(corpusSearch(`${query} ${fields.key_gap}`, 2));
  }
  
} else if (action === 'experiment') {
  if (!userId) { console.error('Usage: session.js experiment <user-id>'); process.exit(1); }
  
  const profile = loadFile(profilePath(userId));
  if (!profile) { console.error(`No profile for '${userId}'`); process.exit(1); }
  
  const experiments = getExperiments(userId);
  const latest = experiments[experiments.length - 1];
  const fields = extractProfileFields(profile);
  const template = loadFile(path.join(ROOT, 'template', 'experiment-card.md'));
  const nextNum = experiments.length + 1;
  
  console.log(separator('GENERATE EXPERIMENT #' + nextNum + ' — ' + userId));
  
  console.log(separator('USER PROFILE'));
  console.log(profile);
  
  if (latest) {
    console.log(separator('PREVIOUS EXPERIMENT (#' + experiments.length + ')'));
    console.log(latest.content);
  }
  
  // Corpus search for relevant content
  const queries = [];
  if (fields.actual_goal) queries.push(fields.actual_goal);
  if (fields.key_gap) queries.push(fields.key_gap);
  if (fields.blind_spots?.[0]) queries.push(fields.blind_spots[0]);
  
  for (const q of queries) {
    console.log(separator('CORPUS: ' + q.slice(0, 50)));
    console.log(corpusSearch(q, 3));
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
  console.log(`\nSave to: ${userDir(userId)}/experiments/${String(nextNum).padStart(3,'0')}-{slug}.md\n`);
  
} else if (action === 'status') {
  if (!userId) { console.error('Usage: session.js status <user-id>'); process.exit(1); }
  
  const profile = loadFile(profilePath(userId));
  const experiments = getExperiments(userId);
  const journals = getJournals(userId);
  const latest = experiments[experiments.length - 1];
  
  if (!profile) {
    console.log(`\n  ${userId}: no profile yet. Run: node scripts/session.js intake ${userId}${INST_FLAG}\n`);
    process.exit(0);
  }
  
  const fields = extractProfileFields(profile);
  
  console.log(`\n  ${userId}`);
  console.log(`  ${'─'.repeat(40)}`);
  console.log(`  Goal: ${fields.actual_goal || '?'}`);
  console.log(`  Type: ${fields.goal_type || '?'}`);
  console.log(`  Level: ${fields.calibrated_level || '?'} in ${fields.domain || '?'}`);
  console.log(`  Gap: ${fields.key_gap || '?'}`);
  if (fields.blind_spots?.length) console.log(`  Blind spots: ${fields.blind_spots.length}`);
  console.log(`  Experiments: ${experiments.length}`);
  console.log(`  Journal entries: ${journals.length}`);
  
  if (latest) {
    // Parse status from frontmatter
    const statusMatch = latest.content.match(/^status:\s*(.+)$/m);
    const outcomeMatch = latest.content.match(/^outcome:\s*(.+)$/m);
    console.log(`  Latest: ${latest.file}`);
    console.log(`    Status: ${statusMatch?.[1] || 'unknown'} | Outcome: ${outcomeMatch?.[1] || 'pending'}`);
  }
  
  console.log(`\n  Next action:`);
  if (experiments.length === 0) {
    console.log(`    → Generate first experiment: node scripts/session.js experiment ${userId}${INST_FLAG}`);
  } else if (latest) {
    const statusMatch = latest.content.match(/^status:\s*(.+)$/m);
    const status = statusMatch?.[1]?.trim();
    if (status === 'active') {
      console.log(`    → Check in: node scripts/session.js checkin ${userId}${INST_FLAG}`);
    } else {
      console.log(`    → Generate next experiment: node scripts/session.js experiment ${userId}${INST_FLAG}`);
    }
  }
  console.log('');
  
} else {
  console.error(`Unknown action: ${action}. Use --help.`);
  process.exit(1);
}
