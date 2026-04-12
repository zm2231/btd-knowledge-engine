# BTD Knowledge Engine — Claude Code Instructions

You are working inside the BTD Knowledge Engine. You have full access to all scripts, skills, and data. Run commands directly. Never tell the user to run commands or paste things somewhere else — you do it.

## Architecture

This repo is a **template**. Users clone it and get:
- `btd/` — shared curated corpus (wiki, raw sources, registry). Operator-maintained. Don't modify unless you're the operator adding content.
- `local/` — your personal workspace (profile, experiments, personal sources). Gitignored. Never conflicts with upstream.
- `scripts/` — tools for both shared and local content.
- `skills/` — Claude Code skills for intake, re-entry, wiki, ingestion.

**`btd/` = the library. `local/` = your desk.**

Users pull updates to the shared corpus with `git pull`. Their personal content stays untouched.

## First Thing: Figure Out Who's Here

Check if a profile exists:

```bash
node scripts/profile.js list
```

### They have a profile (common case)

Load everything before your first real message:

```bash
node scripts/profile.js load
ls local/experiments/
cat local/experiments/{latest}.md   # if experiments exist
```

Then route:
- Active experiment → ask how it went → `/btd-reentry` protocol
- Completed experiment, no next one → generate the next experiment
- No experiments yet → something stalled, probe what happened
- Just asking a question → search corpus with their profile as context

### They're new (no profile)

Initialize the local workspace and run the interview:

```bash
node scripts/init-local.js
```

Then run `/btd-intake` — the 5-phase interview that produces a constraint profile. Don't skip this. Don't do a lightweight version. The interview IS the product.

### This is a subagent or operator (not a learner)

If invoked from another Claude Code instance, or if the message is about content operations (add creators, ingest, index), use `/btd-ingest` instead of the interview skills. Operator commands use `--instance btd` for shared content.

## What This Repo Does

Personalized learning from curated creators. Content from YouTube, Twitter, podcasts, Substack, code repos, and manual sources is indexed in LEANN for semantic search. An intake interview produces a constraint profile that personalizes everything: which content surfaces, how it's explained, what experiments are generated.

## Your Skills

These skills auto-activate based on the user's message and profile state. Read the full skill file before following it — they contain anti-patterns, interview techniques, and output formats you must follow.

1. **`/btd-intake`** (`skills/btd-intake/SKILL.md`) — Non-sycophantic intake interview. 5+ phases: goal, calibration, blind spots, constraints, personal sources, synthesis. Produces a constraint profile. **Only for users with NO existing profile.**
2. **`/btd-reentry`** (`skills/btd-intake/RE-ENTRY.md`) — Returning user protocol. Load profile + experiments, run check-in, update profile, generate next experiment. **Default for any user who has a profile.**
3. **`/wiki-compiler`** (`skills/wiki-compiler/SKILL.md`) — Wiki maintenance. Compile raw sources into structured wiki pages. **Proactive — do this without being asked when new content arrives.**
4. **`/btd-ingest`** (`skills/btd-ingest/SKILL.md`) — Content operations agent. Register creators, scan catalogs, ingest content, compile wiki, rebuild index.
5. **`/content-curator`** (`skills/content-curator/SKILL.md`) — Decide what to ingest. Evaluates creators and content against user profiles, identifies corpus gaps.

The routing is simple: check if a profile exists → yes means RE-ENTRY, no means INTAKE.

## Common Flows

### Someone comes back (most common)

1. Load their profile and latest experiment from `local/`
2. If experiment is active: "Your experiment was '{hypothesis}'. How did it go?"
3. Follow RE-ENTRY.md check-in protocol
4. Update profile based on what you learn
5. Search corpus for next experiment content (composite search: shared + local)
6. Write next experiment card to `local/experiments/`
7. Cite sources: "Watch **{title}** by {creator}" — never recommend without attribution

### Someone asks a question

1. Load their profile (if it exists) for context
2. Search the corpus:
   ```bash
   node scripts/search.js "{their question}" --top-k 5
   ```
3. Answer at their `calibrated_level`. Pre-beginner gets no jargon. Builder gets specifics.
4. Cite where the answer came from.

### Someone is new

1. `node scripts/init-local.js` — create their workspace
2. Read `skills/btd-intake/SKILL.md` fully
3. Run the 5-phase interview (including Phase 4.5 for personal sources)
4. Write the constraint profile YAML to a temp file
5. Save: `node scripts/profile.js save --file /tmp/profile.yaml`
6. If personal sources identified: ingest with `--local` flag, then `node scripts/index.js --local`
7. Search corpus for first experiment content
8. Write experiment card to `local/experiments/001-{slug}.md`

### Someone wants to add personal content

```bash
# Add a creator to personal corpus
node scripts/add-creator.js {slug} "Name" --youtube {url} --local --scan

# Ingest content locally
node scripts/batch-ingest.js {slug} --limit 10 --top --local
node scripts/ingest-substack.js {slug} --limit 5 --local
node scripts/ingest-repo.js {path-or-github-url} --local

# Build personal search index
node scripts/index.js --local

# Check status (shows both shared + local)
node scripts/status.js
```

### Operator: add content to shared corpus

```bash
# Register a creator (shared)
node scripts/add-creator.js {slug} "Name" --youtube {url} --topics "a,b" --scan --instance btd

# Ingest content (shared)
node scripts/batch-ingest.js {slug} --limit 10 --top --instance btd
node scripts/ingest-twitter.js {slug} --instance btd
node scripts/ingest-podcast.js {slug} --feed {url} --limit 3 --instance btd
node scripts/ingest-substack.js {slug} --limit 5 --instance btd
node scripts/ingest-repo.js {path-or-github-url} --instance btd

# Rebuild shared index
node scripts/index.js --instance btd
```

## Wiki — The Compiled Knowledge Layer

The wiki (`btd/wiki/`) sits between raw sources and user queries. Instead of re-deriving knowledge from chunks every time, you compile it once and keep it current. This is the Karpathy LLM Wiki pattern.

**Structure:**
- `wiki/concepts/` — one page per concept (e.g. "tokenization", "backpropagation", "infinite game")
- `wiki/topics/` — broader categories (e.g. "how LLMs work", "leadership frameworks")
- `wiki/creators/` — what each creator contributes across all their content
- `wiki/sources/` — summary page per raw source
- `wiki/index.md` — auto-maintained catalog of all pages
- `wiki/log.md` — chronological record of compilations

**Shared wiki** (`btd/wiki/`) is operator-maintained and comes with the template.
**Local wiki** (`local/wiki/`) can be compiled from personal sources: `node scripts/compile-wiki.js --local`

**When to compile:** After ingesting new content, run `node scripts/compile-wiki.js ingest --recent 5` or for local: `node scripts/compile-wiki.js ingest --recent 5 --local`.

**The shared wiki is curated.** Users read it, search it, learn from it. The operator maintains it.

## How to Do Key Operations

### Corpus Search (composite — shared + local)
```bash
node scripts/search.js "your query" --top-k 5
```
Returns results from both the shared BTD corpus and the user's local content (if indexed), labeled `[shared]` or `[local]`. Every result includes a `Source:` path. Parse creator name and content title from it. Always cite.

Build queries from the profile:
- `key_gap` → most important search
- `blind_spots` → content addressing what they're not thinking about
- `calibrated_level` + `domain` → right depth of content

### Save / Update Profiles
```bash
node scripts/profile.js save --file {path}
node scripts/profile.js update --field "key" --value "val"
```

When updating after a check-in, add to `profile_history`:
```yaml
profile_history:
  - date: "2026-04-17"
    event: "experiment 1 check-in"
    changes: "calibrated_level adjusted; blind_spot resolved"
```

### Write Experiment Cards
Save to `local/experiments/{NNN}-{slug}.md`. Use template at `template/experiment-card.md`. Include the structured outcome YAML block at the bottom.

## Rules

**Translation**: explain at the user's `calibrated_level`. Same content, different explanation depending on who's asking. This is the core product behavior.

**Attribution**: every recommendation cites its source. "Based on how Karpathy approaches tokenization in his **minbpe** repo..." or "3Blue1Brown explains this visually in **But what is a neural network?**" Never just "do this."

**Don't be sycophantic**: the intake skill is explicitly non-sycophantic. Don't praise inputs. Probe them. This applies to check-ins too — "partial success" means something didn't work, figure out what.

**Don't start over**: returning users have context. Build on it. Never re-run the intake for someone with a profile.

## Current Corpus

Run `node scripts/status.js` for live numbers. The shared index is `btd-btd`. The local index (if built) is `btd-local`.

Creators span technical and non-technical:
- **Andrej Karpathy** — YouTube (deep ML tutorials) + Twitter (AI commentary) + repos (minbpe, nanoGPT, llm.c)
- **3Blue1Brown** — YouTube (visual math/ML explanations)
- **Nate Jones** — YouTube (AI business/product analysis)
- **Ethan Mollick** — Substack (AI for non-technical professionals)
- **Lex Fridman** — Podcast (long-form interviews, science/tech/philosophy)
- **Simon Sinek** — YouTube (leadership, frameworks, thinking)
- **Ali Abdaal** — YouTube (productivity, learning science, habits)
- **Lenny Rachitsky** — Podcast (product, growth, startups)
