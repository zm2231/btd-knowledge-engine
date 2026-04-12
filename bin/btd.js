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
  console.log(`BTD Knowledge Engine

Usage:
  btd <command> [args] [--local | --instance <name>]

Getting started:
  btd start                              First-run setup
  btd me                                 Your profile + current experiment
  btd status                             Corpus dashboard (shared + local)

Search:
  btd search "<query>" [--top-k N]       Search shared + local corpus
  btd search "<query>" --shared-only     Search shared corpus only
  btd search "<query>" --local-only      Search local corpus only

Content (shared corpus, operator):
  btd add <slug> "Name" [flags]          Register a creator
  btd scan [slug] [--all]                Catalog their content
  btd ingest <slug> [--limit N --top]    Pull down YouTube transcripts
  btd ingest:twitter <slug>              Pull tweets
  btd ingest:podcast <slug> [flags]      Pull + transcribe episodes
  btd ingest:substack <slug>             Pull articles
  btd ingest:repo <path-or-url>          Index a code repo
  btd index [--force]                    Rebuild LEANN search index

Content (personal, --local):
  btd add <slug> "Name" [flags] --local  Add creator to personal corpus
  btd ingest <slug> --local              Ingest to personal corpus
  btd ingest:repo <path> --local         Index your own repo
  btd index --local                      Build personal search index

Wiki:
  btd wiki status                        What's compiled vs pending
  btd wiki lint                          Find gaps and broken links
  btd wiki index                         Rebuild wiki index
  btd wiki ingest [--recent N]           Compile recent sources
  btd wiki ingest --local                Compile personal wiki

Profile:
  btd profile list                       Your profile status
  btd profile show                       Full profile + experiments
  btd profile save --file <path>         Save a profile YAML

Admin:
  btd init                               Create local/ workspace
  btd help                               This message

Notes:
  --local targets your personal corpus in local/ (gitignored)
  --instance <name> targets a shared instance (default: btd)
  No flag needed for search (queries both automatically)
`);
}

function printCommandHelp(command) {
  const helpByCommand = {
    init: 'btd init                              Create local/ workspace',
    add: 'btd add <slug> "Name" [--youtube <url>] [--twitter <handle>] [--podcast <feed-url>] [--substack <url>] [--topics csv] [--local | --instance <name>] [--scan]',
    scan: 'btd scan [slug] [--all] [--youtube] [--twitter] [--podcast] [--substack] [--repo] [--local | --instance <name>]',
    ingest: 'btd ingest <slug> [--limit N] [--top] [--dry-run] [--all] [--local | --instance <name>]',
    'ingest:twitter': 'btd ingest:twitter <slug> [--limit N] [--dry-run] [--local | --instance <name>]',
    'ingest:podcast': 'btd ingest:podcast <slug> [flags] [--local | --instance <name>]',
    'ingest:substack': 'btd ingest:substack <slug> [--scan] [--limit N] [--dry-run] [--local | --instance <name>]',
    'ingest:repo': 'btd ingest:repo <path-or-url> [--scan] [--file-types csv] [--local | --instance <name>]',
    index: 'btd index [--force] [--wiki-only] [--raw-only] [--local | --instance <name>]',
    status: 'btd status [--instance <name>]',
    wiki: 'btd wiki <status|lint|index|ingest> [args] [--local | --instance <name>]',
    profile: 'btd profile <list|show|save> [--file <path>]',
    search: 'btd search "<query>" [--top-k N] [--shared-only] [--local-only]',
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

  if (command === 'start') {
    return runScript('scripts/start.js', rest);
  }

  if (command === 'me') {
    return runScript('scripts/me.js', rest);
  }

  if (command === 'init') {
    if (isHelpToken(rest[0])) return printCommandHelp('init');
    return runScript('scripts/init-local.js', rest);
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

  if (command === 'search') {
    if (isHelpToken(rest[0])) return printCommandHelp('search');
    return runScript('scripts/search.js', rest);
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
