#!/usr/bin/env node
/**
 * Save, load, update, and list user profiles.
 *
 * Usage:
 *   node scripts/profile.js save <user-id> --file <yaml-or-md-file>   # save profile from file
 *   node scripts/profile.js save <user-id> --stdin                     # save profile from stdin (pipe from Claude)
 *   node scripts/profile.js load <user-id>                             # print profile to stdout
 *   node scripts/profile.js list                                       # list all users
 *   node scripts/profile.js summary <user-id>                          # profile + latest experiment status
 *   node scripts/profile.js update <user-id> --field "key" --value "val" # update a single field
 *   node scripts/profile.js history <user-id>                          # show profile change log
 *
 * All commands accept --instance <name> (default: btd)
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const action = args[0];
const userId = args[1];
const getFlag = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : null; };
const hasFlag = (name) => args.includes(`--${name}`);

const INSTANCE = getFlag('instance') || 'btd';
const ROOT = path.join(__dirname, '..');
const USERS_DIR = path.join(ROOT, INSTANCE, 'users');

if (!action || ['--help', '-h'].includes(action)) {
  console.log(`Usage:
  node scripts/profile.js save <user-id> --file <path>    Save profile from file
  node scripts/profile.js save <user-id> --stdin           Save profile from stdin
  node scripts/profile.js load <user-id>                   Print profile
  node scripts/profile.js list                             List all users
  node scripts/profile.js summary <user-id>                Profile + experiment status
  node scripts/profile.js update <user-id> --field --value Update one field
  node scripts/profile.js history <user-id>                Profile change log

  All commands: --instance <name> (default: btd)`);
  process.exit(0);
}

// --- Helpers ---

function userDir(id) {
  return path.join(USERS_DIR, id);
}

function profilePath(id) {
  return path.join(userDir(id), 'profile.md');
}

function ensureUserDirs(id) {
  const dir = userDir(id);
  for (const sub of ['experiments', 'journal']) {
    fs.mkdirSync(path.join(dir, sub), { recursive: true });
  }
}

function loadProfile(id) {
  const p = profilePath(id);
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, 'utf8');
}

function getExperiments(id) {
  const dir = path.join(userDir(id), 'experiments');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .map(f => {
      const content = fs.readFileSync(path.join(dir, f), 'utf8');
      // Parse frontmatter
      const match = content.match(/^---\n([\s\S]*?)\n---/);
      const meta = {};
      if (match) {
        match[1].split('\n').forEach(line => {
          const [key, ...rest] = line.split(':');
          if (key && rest.length) meta[key.trim()] = rest.join(':').trim();
        });
      }
      return { file: f, ...meta };
    });
}

function appendHistory(id, entry) {
  const histFile = path.join(userDir(id), 'profile-history.jsonl');
  fs.appendFileSync(histFile, JSON.stringify({
    ...entry,
    timestamp: new Date().toISOString()
  }) + '\n');
}

// --- Actions ---

if (action === 'save') {
  if (!userId) { console.error('Usage: profile.js save <user-id> --file <path> | --stdin'); process.exit(1); }
  
  ensureUserDirs(userId);
  const p = profilePath(userId);
  const existed = fs.existsSync(p);
  
  if (hasFlag('stdin')) {
    // Read from stdin
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', chunk => data += chunk);
    process.stdin.on('end', () => {
      fs.writeFileSync(p, data);
      appendHistory(userId, { event: existed ? 'profile_updated' : 'profile_created', source: 'stdin' });
      console.log(`✅ ${existed ? 'Updated' : 'Saved'} profile: ${p}`);
    });
  } else {
    const file = getFlag('file');
    if (!file) { console.error('Need --file <path> or --stdin'); process.exit(1); }
    const content = fs.readFileSync(file, 'utf8');
    fs.writeFileSync(p, content);
    appendHistory(userId, { event: existed ? 'profile_updated' : 'profile_created', source: file });
    console.log(`✅ ${existed ? 'Updated' : 'Saved'} profile: ${p}`);
    console.log(`   User directory: ${userDir(userId)}/`);
    console.log(`   Experiments:    ${userDir(userId)}/experiments/`);
    console.log(`   Journal:        ${userDir(userId)}/journal/`);
  }
  
} else if (action === 'load') {
  if (!userId) { console.error('Usage: profile.js load <user-id>'); process.exit(1); }
  const profile = loadProfile(userId);
  if (!profile) {
    console.error(`No profile found for '${userId}' in ${INSTANCE}/users/`);
    process.exit(1);
  }
  process.stdout.write(profile);
  
} else if (action === 'list') {
  if (!fs.existsSync(USERS_DIR)) {
    console.log(`No users yet in ${INSTANCE}/users/`);
    process.exit(0);
  }
  const users = fs.readdirSync(USERS_DIR).filter(f => {
    return fs.statSync(path.join(USERS_DIR, f)).isDirectory() && f !== '.gitkeep';
  });
  
  if (users.length === 0) {
    console.log(`No users yet in ${INSTANCE}/users/`);
    process.exit(0);
  }
  
  console.log(`\n  ${INSTANCE} — ${users.length} user${users.length === 1 ? '' : 's'}\n`);
  
  for (const u of users) {
    const hasProfile = fs.existsSync(profilePath(u));
    const experiments = getExperiments(u);
    const latest = experiments[experiments.length - 1];
    
    let status = hasProfile ? '✅ profile' : '⚠️  no profile';
    if (latest) {
      status += ` | experiment ${experiments.length}: ${latest.status || 'unknown'}`;
    } else {
      status += ' | no experiments';
    }
    
    console.log(`  ● ${u} — ${status}`);
  }
  console.log('');
  
} else if (action === 'summary') {
  if (!userId) { console.error('Usage: profile.js summary <user-id>'); process.exit(1); }
  
  const profile = loadProfile(userId);
  if (!profile) {
    console.error(`No profile found for '${userId}'`);
    process.exit(1);
  }
  
  const experiments = getExperiments(userId);
  const journals = (() => {
    const dir = path.join(userDir(userId), 'journal');
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
  })();
  
  console.log(`\n═══ ${userId} ═══\n`);
  console.log(`Profile: ${profilePath(userId)}`);
  console.log(`Experiments: ${experiments.length}`);
  console.log(`Journal entries: ${journals.length}`);
  
  if (experiments.length > 0) {
    const latest = experiments[experiments.length - 1];
    console.log(`\nLatest experiment: ${latest.file}`);
    console.log(`  Status: ${latest.status || 'unknown'}`);
    console.log(`  Outcome: ${latest.outcome || 'pending'}`);
    if (latest.start_date) console.log(`  Started: ${latest.start_date}`);
    if (latest.end_date) console.log(`  Ends: ${latest.end_date}`);
  }
  
  console.log(`\n--- Profile ---\n`);
  console.log(profile);
  
} else if (action === 'update') {
  if (!userId) { console.error('Usage: profile.js update <user-id> --field "key" --value "val"'); process.exit(1); }
  const field = getFlag('field');
  const value = getFlag('value');
  if (!field || !value) { console.error('Need --field and --value'); process.exit(1); }
  
  const profile = loadProfile(userId);
  if (!profile) { console.error(`No profile for '${userId}'`); process.exit(1); }
  
  // Simple YAML field replacement (top-level only)
  const regex = new RegExp(`^(${field}:)\\s*.*$`, 'm');
  if (regex.test(profile)) {
    const updated = profile.replace(regex, `$1 ${value}`);
    fs.writeFileSync(profilePath(userId), updated);
    appendHistory(userId, { event: 'field_updated', field, old_match: profile.match(regex)?.[0], new_value: value });
    console.log(`✅ Updated ${field} → ${value}`);
  } else {
    console.error(`Field '${field}' not found in profile. Edit manually or use 'save' to replace.`);
    process.exit(1);
  }
  
} else if (action === 'history') {
  if (!userId) { console.error('Usage: profile.js history <user-id>'); process.exit(1); }
  const histFile = path.join(userDir(userId), 'profile-history.jsonl');
  if (!fs.existsSync(histFile)) {
    console.log(`No history for '${userId}'`);
    process.exit(0);
  }
  const lines = fs.readFileSync(histFile, 'utf8').trim().split('\n').filter(Boolean);
  console.log(`\n  ${userId} — ${lines.length} events\n`);
  for (const line of lines) {
    try {
      const entry = JSON.parse(line);
      const date = entry.timestamp?.slice(0, 10) || '??';
      console.log(`  ${date}  ${entry.event}${entry.field ? ` (${entry.field})` : ''}${entry.source ? ` from ${entry.source}` : ''}`);
    } catch {}
  }
  console.log('');
  
} else {
  console.error(`Unknown action: ${action}. Use --help.`);
  process.exit(1);
}
