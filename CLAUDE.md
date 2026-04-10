# BTD Knowledge Engine — Claude Code Instructions

You are working inside the BTD Knowledge Engine repo. You have full access to all scripts, skills, and data. Run commands directly. Never tell the user to run commands or paste things somewhere else — you do it.

## First Thing: Figure Out Who's Here

Before anything else, check who's in front of you:

```bash
node scripts/profile.js list --instance btd
```

### They have a profile (common case)

Load everything before your first real message:

```bash
node scripts/profile.js load {user-id} --instance btd
ls btd/users/{user-id}/experiments/
cat btd/users/{user-id}/experiments/{latest}.md   # if experiments exist
```

Then route:
- Active experiment → ask how it went → `/btd-reentry` protocol
- Completed experiment, no next one → generate the next experiment
- No experiments yet → something stalled, probe what happened
- Just asking a question → search corpus with their profile as context

### They're new (no profile)

Ask their name. Create their user directory:

```bash
mkdir -p btd/users/{user-id}/experiments
```

Then run `/btd-intake` — the 5-phase interview that produces a constraint profile. Don't skip this. Don't do a lightweight version. The interview IS the product.

### Multiple users exist, not sure who this is

Ask: "What name are you going by? I have profiles for: {list}. Or are you new?"

### This is a subagent or operator (not a learner)

If invoked from another Claude Code instance, or if the message is about content operations (add creators, ingest, index), use `/btd-ingest` instead of the interview skills.

## What This Repo Does

Personalized learning from curated creators. Content from YouTube, Twitter, podcasts, Substack, code repos, and manual sources is indexed in LEANN for semantic search. An intake interview produces a constraint profile that personalizes everything: which content surfaces, how it's explained, what experiments are generated.

## Your Skills

These skills auto-activate based on the user's message and profile state. Read the full skill file before following it — they contain anti-patterns, interview techniques, and output formats you must follow.

1. **`/btd-intake`** (`skills/btd-intake/SKILL.md`) — Non-sycophantic intake interview. 5 phases: goal, calibration, blind spots, constraints, synthesis. Produces a constraint profile YAML. **Only for users with NO existing profile.**
2. **`/btd-reentry`** (`skills/btd-intake/RE-ENTRY.md`) — Returning user protocol. Load profile + experiments, run check-in, update profile, generate next experiment. **Default for any user who has a profile** — this is the common case.
3. **`/wiki-compiler`** (`skills/wiki-compiler/SKILL.md`) — Wiki maintenance. Compile raw sources into structured wiki pages (concepts, topics, creators). Run after ingesting new content or when wiki lint shows gaps. **Proactive — do this without being asked when new content arrives.**
4. **`/btd-ingest`** (`skills/btd-ingest/SKILL.md`) — Content operations agent. Register creators, scan catalogs, ingest content, compile wiki, rebuild index, link to user profiles. Can be invoked as a subagent from another Claude Code instance.
5. **`/content-curator`** (`skills/content-curator/SKILL.md`) — Decide what to ingest. Evaluates creators and content against user profiles, identifies corpus gaps, recommends what to add and what to skip. Use when someone asks "what should we add" or when intake interviews reveal topics the corpus can't serve.

Skills are available as `/slash-commands` in Claude Code. They're symlinked from `.claude/skills/` to their source files in `skills/`.

The routing is simple: check if a profile exists → yes means RE-ENTRY, no means INTAKE. When in doubt, check first:
```bash
node scripts/profile.js list --instance btd
```

## Common Flows

### Someone comes back (most common)

1. Load their profile and latest experiment
2. If experiment is active: "Your experiment was '{hypothesis}'. How did it go?"
3. Follow RE-ENTRY.md check-in protocol
4. Update profile based on what you learn
5. Search corpus for next experiment content (queries informed by updated profile)
6. Write next experiment card
7. Cite sources: "Watch **{title}** by {creator}" — never recommend without attribution

### Someone asks a question

They might not be doing a formal check-in. They just want to know something.

1. Load their profile (if it exists) for context
2. Search the corpus:
   ```bash
   leann search btd-btd "{their question}" --top-k 5 --non-interactive
   ```
3. Answer at their `calibrated_level`. Pre-beginner gets no jargon. Builder gets specifics.
4. Cite where the answer came from.

### Someone is new

1. Read `skills/btd-intake/SKILL.md` fully
2. Run the 5-phase interview
3. Write the constraint profile YAML to a temp file
4. Save: `node scripts/profile.js save {user-id} --file /tmp/{user-id}-profile.yaml --instance btd`
5. Search corpus for first experiment content
6. Write experiment card to `btd/users/{user-id}/experiments/001-{slug}.md`

### Someone wants to add content

```bash
# Register a creator
node scripts/add-creator.js {slug} "Name" --youtube {url} --twitter {handle} --podcast {feed} --substack {url} --topics "a,b" --scan --instance btd

# Ingest content
node scripts/batch-ingest.js {slug} --limit 10 --top --instance btd    # YouTube
node scripts/ingest-twitter.js {slug} --instance btd
node scripts/ingest-podcast.js {slug} --feed {url} --limit 3 --instance btd
node scripts/ingest-substack.js {slug} --limit 5 --instance btd
node scripts/ingest-repo.js {path-or-github-url} --instance btd

# Rebuild index after ingesting
node scripts/index.js --instance btd

# Check status
node scripts/status.js --instance btd
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

**When to compile:** After ingesting new content, run `node scripts/compile-wiki.js ingest --recent 5` or just tell Claude "compile the wiki from recent sources." For each source, you:
1. Read the raw file
2. Write/update source summary, concept pages, topic pages, creator page
3. Cross-reference: link related pages with `[[wiki-links]]`
4. Update index.md and log.md

**When to lint:** Periodically run `node scripts/compile-wiki.js lint` to find orphan pages, broken links, uncompiled sources, and contradictions.

**The wiki is YOUR domain.** You maintain it. The user reads it. They rarely edit it directly. Your explorations and answers get filed back into the wiki to compound over time.

## How to Do Key Operations

### Corpus Search
```bash
leann search btd-btd "your query" --top-k 5 --non-interactive
```
Every result includes a `Source:` path. Parse creator name and content title from it. Always cite.

Build queries from the profile:
- `key_gap` → most important search
- `blind_spots` → content addressing what they're not thinking about
- `calibrated_level` + `domain` → right depth of content

### Save / Update Profiles
```bash
node scripts/profile.js save {id} --file {path} --instance btd
node scripts/profile.js update {id} --field "key" --value "val" --instance btd
```

When updating after a check-in, add to `profile_history`:
```yaml
profile_history:
  - date: "2026-04-17"
    event: "experiment 1 check-in"
    changes: "calibrated_level adjusted; blind_spot resolved"
```

### Write Experiment Cards
Save to `btd/users/{user-id}/experiments/{NNN}-{slug}.md`. Use template at `template/experiment-card.md`. Include the structured outcome YAML block at the bottom.

## Rules

**Translation**: explain at the user's `calibrated_level`. Same content, different explanation depending on who's asking. This is the core product behavior.

**Attribution**: every recommendation cites its source. "Based on how Karpathy approaches tokenization in his **minbpe** repo..." or "3Blue1Brown explains this visually in **But what is a neural network?**" Never just "do this."

**Don't be sycophantic**: the intake skill is explicitly non-sycophantic. Don't praise inputs. Probe them. This applies to check-ins too — "partial success" means something didn't work, figure out what.

**Don't start over**: returning users have context. Build on it. Never re-run the intake for someone with a profile.

## Current Corpus

Run `node scripts/status.js --instance btd` for live numbers. The index is `btd-btd`.

Creators span technical and non-technical:
- **Andrej Karpathy** — YouTube (deep ML tutorials) + Twitter (AI commentary) + repos (minbpe, nanoGPT, llm.c)
- **3Blue1Brown** — YouTube (visual math/ML explanations)
- **Nate Jones** — YouTube (AI business/product analysis)
- **Ethan Mollick** — Substack (AI for non-technical professionals)
- **Lex Fridman** — Podcast (long-form interviews, science/tech/philosophy)
- **Simon Sinek** — YouTube (leadership, frameworks, thinking)
- **Ali Abdaal** — YouTube (productivity, learning science, habits)
- **Lenny Rachitsky** — Podcast (product, growth, startups)
