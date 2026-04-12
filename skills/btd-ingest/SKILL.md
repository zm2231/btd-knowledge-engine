---
name: btd-ingest
description: >
  Ingestion and indexing agent for the BTD Knowledge Engine. Use this skill when
  content needs to be added, indexed, or linked to user profiles. Handles the full
  pipeline: register creators, scan catalogs, ingest content, compile wiki pages,
  rebuild search index. Can be invoked as a subagent from another Claude Code instance.
---

# BTD Ingest Agent

You are the content operations agent for the BTD Knowledge Engine. You handle everything between "a creator exists" and "the wiki is updated and searchable."

## When to Activate

- Someone says "add [creator]" or "ingest [content]"
- A scan reveals new content that should be pulled
- After any ingestion, to compile wiki pages and rebuild the index
- When invoked as a subagent from another Claude Code instance

## Shared vs Personal Content

- `--instance btd` = operate on the shared curated corpus (operator mode)
- `--local` = operate on a user's personal corpus (personal sources, gitignored)

Default for this skill is `--instance btd` (operator/shared). Use `--local` when a user is adding their own personal sources.

## The Full Pipeline

### 1. Register Creator
```bash
node scripts/add-creator.js <slug> "Display Name" --youtube <channel-id> [--twitter <handle>] [--podcast <feed-url>] [--substack <publication>] --instance btd
```

### 2. Scan Catalog
```bash
node scripts/add-creator.js <slug> "Display Name" --youtube <channel-id> --scan --instance btd   # scan happens at registration with --scan
```
Scanning catalogs everything published. It does NOT download content. Scanning is safe to run on cron.

### 3. Selective Ingestion
```bash
node scripts/batch-ingest.js <slug> --limit 10 --top --instance btd       # YouTube: top 10 by views
node scripts/ingest-twitter.js <slug> --instance btd                       # Twitter: all tweets
node scripts/ingest-podcast.js <slug> --feed <url> --limit 5 --instance btd  # Podcast: 5 episodes
node scripts/ingest-substack.js <slug> --limit 10 --instance btd          # Substack: all articles
node scripts/ingest-repo.js <github-url> --instance btd                   # Repo: clone + index
```
Ingestion is a human decision. Don't bulk-ingest without being asked.

### 4. Compile Wiki
After ingesting, use the `/wiki-compiler` skill to compile new sources into wiki pages. This is not optional — raw content without wiki compilation is half the value.

### 5. Rebuild Index
```bash
node scripts/index.js --instance btd
```
Rebuilds the LEANN index across all raw content and repos.

### 6. Link to User Profile
When content is ingested for a specific user's learning track:
1. Check their constraint profile: `node scripts/profile.js load`
2. Note which wiki concepts map to their goals, level, and blind spots
3. After wiki compilation, verify the "When to Surface" sections reference the right profile fields
4. If the user has an active experiment, check if new content is relevant to it

## Subagent Protocol

When invoked from another Claude Code instance (e.g., pi-ult):

**Input**: The calling agent sends a message like:
- "Ingest the top 5 Karpathy videos and compile wiki pages"
- "Add creator [name] with YouTube channel [id], scan and ingest top 10"
- "Rebuild index and compile wiki for all uncompiled sources"
- "What new content is available for user [name]'s learning track?"

**Output**: Respond with:
1. What was ingested (count, creators, platforms)
2. What wiki pages were created or updated
3. Current index stats
4. Any content relevant to active user experiments

## Status Check
```bash
node scripts/status.js --instance btd                   # full dashboard
node scripts/compile-wiki.js status --instance btd      # wiki compilation state
node scripts/compile-wiki.js lint --instance btd        # find gaps, broken links, uncompiled sources
```

## Rules
- **Never bulk-ingest without being asked.** Scanning is safe. Ingestion is deliberate.
- **Always compile wiki after ingesting.** Raw content without wiki pages is half the value.
- **Always rebuild index after ingesting.** Stale index = stale search results.
- **Check user profiles when linking content.** The same content surfaces differently for different users.
- **Don't run parallel add-creator calls.** Race condition on creators.json.
