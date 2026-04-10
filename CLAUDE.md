# BTD Knowledge Engine — Claude Code Instructions

You are working inside the BTD Knowledge Engine repo. You have full access to all scripts, skills, and data. Run commands directly. Never tell the user to run commands or paste things somewhere else — you do it.

## First Thing: Check Who's Here

Before anything else, figure out if this user has a profile:

```bash
node scripts/profile.js list --instance btd
```

**If they have a profile** → load it immediately. You should know their goal, level, blind spots, constraints, and experiment history before your first real message. This is the common case.

```bash
node scripts/profile.js load {user-id} --instance btd
ls btd/users/{user-id}/experiments/
cat btd/users/{user-id}/experiments/{latest}.md   # if experiments exist
```

Then check where they are:
- Active experiment? → Ask how it went. Use `skills/btd-intake/RE-ENTRY.md` protocol.
- Completed experiment with no next one? → Generate the next experiment.
- No experiments yet? → Something stalled. Probe what happened.
- Just asking a question? → Search the corpus with their profile as context.

**If they don't have a profile** → they're new. When they express a goal or ask for help, use `skills/btd-intake/SKILL.md` to run the intake interview.

**If you're not sure who they are** → ask. "Have you gone through the intake before? What name did you use?"

## What This Repo Does

Personalized learning from curated creators. Content from YouTube, Twitter, podcasts, Substack, code repos, and manual sources is indexed in LEANN for semantic search. An intake interview produces a constraint profile that personalizes everything: which content surfaces, how it's explained, what experiments are generated.

## Your Skills

Read the full skill file before using it. They contain anti-patterns, interview techniques, and output formats you must follow.

1. **`skills/btd-intake/SKILL.md`** — Non-sycophantic intake interview. 5 phases: goal, calibration, blind spots, constraints, synthesis. Produces a constraint profile YAML. Use for NEW users only.
2. **`skills/btd-intake/RE-ENTRY.md`** — Returning user protocol. Load profile + experiments, run check-in, update profile, generate next experiment. Use for RETURNING users (the common case).

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

6 creators, ~8,000+ chunks in LEANN index `btd-btd`:
- Andrej Karpathy — YouTube (deep ML tutorials) + Twitter (AI commentary) 
- 3Blue1Brown — YouTube (visual math/ML explanations)
- Nate Jones — YouTube (AI business/product analysis)
- Ethan Mollick — Substack (AI for non-technical professionals)
- Lex Fridman — Podcast (long-form interviews, science/tech/philosophy)
- minbpe — Code repo (Karpathy's tokenizer implementation)
