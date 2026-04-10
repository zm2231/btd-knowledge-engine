#!/usr/bin/env node

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const NODE = process.execPath;

function scriptPath(relativePath) {
  return path.join(ROOT, relativePath);
}

function fileExists(relativePath) {
  return fs.existsSync(scriptPath(relativePath));
}

function printMainHelp() {
  console.log(`BTD CLI

Usage:
  btd help
  btd <command> [args] [--instance <name>]

Core commands:
  btd init <instance>
  btd add <slug> "Name" [flags]
  btd scan [slug] [--all]
  btd ingest <slug> [--limit N --top]
  btd ingest:twitter <slug>
  btd ingest:podcast <slug> [flags]
  btd ingest:substack <slug> [flags]
  btd ingest:repo <path-or-url>
  btd index [--force]
  btd status

Wiki:
  btd wiki status
  btd wiki lint
  btd wiki index
  btd wiki ingest [--recent N]

Profiles:
  btd profile list
  btd profile show <user>
  btd profile save <user> [flags]

Sessions:
  btd session intake <user>
  btd session checkin <user>
  btd session status <user>
  btd search <user> "<query>"

Notes:
  - All commands accept --instance <name> (default: btd)
  - This is a thin wrapper around scripts/ in this repo
  - After npm link, run btd from anywhere and it will dispatch into this repo
`);
}

function printCommandHelp(command) {
  const helpByCommand = {
    init: 'btd init <instance> [--name "Display Name"]',
    add: 'btd add <slug> "Name" [--youtube <url>] [--twitter <handle>] [--podcast <feed-url>] [--substack <url>] [--topics csv] [--instance <name>] [--scan]',
    scan: 'btd scan [slug] [--all] [--youtube] [--twitter] [--podcast] [--substack] [--repo] [--count N] [--instance <name>]',
    ingest: 'btd ingest <slug> [--limit N] [--top] [--dry-run] [--all] [--instance <name>]',
    'ingest:twitter': 'btd ingest:twitter <slug> [--limit N] [--dry-run] [--instance <name>]',
    'ingest:podcast': 'btd ingest:podcast <slug> [flags] [--instance <name>]',
    'ingest:substack': 'btd ingest:substack <slug> [--scan] [--limit N] [--dry-run] [--instance <name>]',
    'ingest:repo': 'btd ingest:repo <path-or-url> [--scan] [--file-types csv] [--instance <name>]',
    index: 'btd index [--force] [--instance <name>]',
    status: 'btd status [--instance <name>]',
    wiki: 'btd wiki <status|lint|index|ingest> [args] [--instance <name>]',
    profile: 'btd profile <list|show|save> [args] [--instance <name>]',
    session: 'btd session <intake|checkin|status> <user> [--instance <name>]',
    search: 'btd search <user> "<query>" [--instance <name>]',
  };

  if (helpByCommand[command]) {
    console.log(helpByCommand[command]);
    return;
  }

  printMainHelp();
}

function runScript(relativeScript, forwardedArgs) {
  const target = scriptPath(relativeScript);
  execFileSync(NODE, [target, ...forwardedArgs], { stdio: 'inherit' });
}

function isHelpToken(value) {
  return value === 'help' || value === '--help' || value === '-h';
}

function normalizeTopLevelCommand(command) {
  return command || 'help';
}

function dispatch(argv) {
  const [rawCommand, ...rest] = argv;
  const command = normalizeTopLevelCommand(rawCommand);

  if (isHelpToken(command)) {
    if (rest[0]) {
      printCommandHelp(rest[0]);
      return;
    }
    printMainHelp();
    return;
  }

  if (command === 'init') {
    if (isHelpToken(rest[0])) return printCommandHelp('init');
    return runScript('scripts/init.js', rest);
  }

  if (command === 'add') {
    if (isHelpToken(rest[0])) return printCommandHelp('add');
    return runScript('scripts/add-creator.js', rest);
  }

  if (command === 'scan') {
    if (isHelpToken(rest[0])) return printCommandHelp('scan');
    return runScript('scripts/scan.js', rest);
  }

  if (command === 'ingest') {
    if (isHelpToken(rest[0])) return printCommandHelp('ingest');
    return runScript('scripts/batch-ingest.js', rest);
  }

  if (command === 'ingest:twitter') {
    if (isHelpToken(rest[0])) return printCommandHelp('ingest:twitter');
    return runScript('scripts/ingest-twitter.js', rest);
  }

  if (command === 'ingest:podcast') {
    if (isHelpToken(rest[0])) return printCommandHelp('ingest:podcast');
    return runScript('scripts/ingest-podcast.js', rest);
  }

  if (command === 'ingest:substack') {
    if (isHelpToken(rest[0])) return printCommandHelp('ingest:substack');
    return runScript('scripts/ingest-substack.js', rest);
  }

  if (command === 'ingest:repo') {
    if (isHelpToken(rest[0])) return printCommandHelp('ingest:repo');
    return runScript('scripts/ingest-repo.js', rest);
  }

  if (command === 'index') {
    if (isHelpToken(rest[0])) return printCommandHelp('index');
    return runScript('scripts/index.js', rest);
  }

  if (command === 'status') {
    if (isHelpToken(rest[0])) return printCommandHelp('status');
    return runScript('scripts/status.js', rest);
  }

  if (command === 'wiki') {
    const [subcommand, ...wikiArgs] = rest;
    if (!subcommand || isHelpToken(subcommand)) return printCommandHelp('wiki');
    return runScript('scripts/compile-wiki.js', [subcommand, ...wikiArgs]);
  }

  if (command === 'profile') {
    const [subcommand, ...profileArgs] = rest;
    if (!subcommand || isHelpToken(subcommand)) return printCommandHelp('profile');
    if (subcommand === 'list') return runScript('scripts/profile.js', ['list', ...profileArgs]);
    if (subcommand === 'show') return runScript('scripts/profile.js', ['summary', ...profileArgs]);
    if (subcommand === 'save') return runScript('scripts/profile.js', ['save', ...profileArgs]);
    return runScript('scripts/profile.js', [subcommand, ...profileArgs]);
  }

  if (command === 'session') {
    const [subcommand, ...sessionArgs] = rest;
    if (!subcommand || isHelpToken(subcommand)) return printCommandHelp('session');
    return runScript('scripts/session.js', [subcommand, ...sessionArgs]);
  }

  if (command === 'search') {
    if (isHelpToken(rest[0])) return printCommandHelp('search');
    return runScript('scripts/session.js', ['search', ...rest]);
  }

  console.error(`Unknown command: ${command}`);
  console.error('Run `btd help` for usage.');
  process.exit(1);
}

try {
  if (!fileExists('package.json')) {
    console.error('Could not locate btd-knowledge-engine package root.');
    process.exit(1);
  }
  dispatch(process.argv.slice(2));
} catch (error) {
  if (typeof error.status === 'number') process.exit(error.status);
  console.error(error.message || String(error));
  process.exit(1);
}
