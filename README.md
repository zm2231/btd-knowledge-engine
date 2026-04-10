# BTD Knowledge Engine

You collect content from smart people. Podcasts, YouTube videos, articles, tweets, transcripts from calls you're on. Most of it streams by and you forget it within a week. The stuff that sticks, you can't find when you need it. The stuff that's actionable, you never act on because nobody told you what to do with it specifically for your situation.

This fixes that.

Register the creators you actually follow. The system catalogs everything they've published, lets you selectively pull down what matters, and then does something most tools skip entirely: it compiles the content into a persistent knowledge base that gets smarter over time. Not just search; structured wiki pages where concepts are cross-referenced, contradictions are flagged, and synthesis happens once instead of being re-derived every query.

Then it runs you through an interview that figures out who you are, where you're at, and what you're not thinking about. Same corpus, different people, completely different output. The interview produces a constraint profile that routes everything; which content surfaces, how it's explained, what experiments get generated.

## Get Started

```bash
git clone https://github.com/zm2231/btd-knowledge-engine.git
cd btd-knowledge-engine
npm install && npm link
```

Then:

```bash
btd start
```

That's it. It detects your username, creates your profile directory, and tells you what to do next. Two paths from here:

**Path A (recommended):** Open Claude Code in this repo and say "I'm new." Claude reads CLAUDE.md, sees you have no profile, and runs a 15-minute intake interview. The interview pushes back, probes, and calibrates. It produces a constraint profile that personalizes everything after that.

**Path B:** Run `btd session intake <your-name>` from the CLI.

Either way, you end up with a profile. After that:

```bash
btd me                    # your profile, current experiment, what to do next
btd search "your query"   # search the corpus
btd status                # what's in the corpus
```

## What's In The Corpus

Run `btd status` for live numbers. The corpus currently spans 16 creators across 6 platforms, curated to serve different types of learners:

| Need | Creator | What you get |
|---|---|---|
| How to actually learn | Cal Newport, Ali Abdaal | Deep work, spaced repetition, focus systems |
| Neuroscience of focus | Andrew Huberman | Dopamine, habits, studying protocols, ADHD |
| Build habits that stick | James Clear | Atomic habits, identity-based change, 1% rule |
| Understand AI/ML | Andrej Karpathy, 3Blue1Brown | From neural nets to attention, with working code |
| AI for non-technical people | Ethan Mollick | How to actually use these tools at work |
| Build and ship things | Paul Graham | Essays on startups, ideas, ambition, maker schedule |
| Leadership and teams | Simon Sinek | Infinite game, empathy, accountability |
| Product and growth | Nate Jones, Lenny Rachitsky | AI business analysis, product strategy |
| Long-form AI interviews | Lex Fridman | Sam Altman, Karpathy, Hassabis, LeCun, Demis |
| Mental models | Shane Parrish | Decision-making, thinking frameworks (cataloged) |

Every creator maps to a constraint profile field. "I can't focus" routes to Newport and Huberman. "I want to understand how LLMs work" routes to Karpathy's video plus his actual code. "I'm a manager trying to use AI" routes to Mollick. The corpus isn't random; it's designed to serve the profiles the intake interview produces.

## The Three Layers

### 1. Raw Content (what's ingested)

YouTube transcripts, tweets, Substack articles, Paul Graham essays, podcast transcriptions, code repos. All markdown with frontmatter. All searchable via LEANN semantic search.

### 2. The Wiki (what's compiled)

Most knowledge tools stop at search. You ask a question, they find relevant chunks, the LLM stitches an answer together from fragments. Every question starts from scratch. Nothing accumulates.

The wiki is different. After content gets ingested, Claude compiles it into structured pages: concept pages that synthesize across sources, creator profiles that track contributions, topic overviews that connect ideas. The cross-references are already built. When you ask a question, the wiki already has the synthesis.

This follows the [Karpathy LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): raw data from sources gets compiled by the LLM into a persistent wiki, then operated on for Q&A. Your explorations get filed back into it. The wiki compounds over time.

### 3. The Interview (what's personalized)

The intake interview pushes back, probes, and calibrates. It doesn't take your word for it when you say you're "intermediate at AI." It asks you a question an intermediate would answer easily. If you can't, it adjusts silently.

The interview produces a constraint profile. The constraint profile routes everything. Different profiles get fundamentally different output from the same corpus.

My theory is that this is where most "personalized AI" products fail. They skip the interview, or they do a shallow one, and everyone gets the same output. Without the right questions, the best corpus in the world produces generic answers.

## The CLI

Everything goes through `btd`. Install globally with `npm link`.

### You (the user)

```bash
btd start                              # first-run setup
btd me                                 # your profile + current experiment
btd session intake <user>              # run the intake interview
btd session checkin <user>             # returning user check-in
btd search <user> "query"              # search corpus for you
```

### Content (adding sources)

```bash
btd add <slug> "Name" --youtube <url>  # register a creator
btd scan <slug>                        # catalog their content (no download)
btd scan --all                         # catalog all creators
btd ingest <slug> --limit 10 --top     # pull YouTube transcripts
btd ingest:twitter <slug>              # pull tweets
btd ingest:podcast <slug>              # download + transcribe episodes
btd ingest:substack <slug>             # pull articles
btd ingest:repo <github-url>           # index a code repo
btd index                              # rebuild the search index
btd status                             # what's in the corpus
```

### Wiki (compiled knowledge)

```bash
btd wiki status                        # what's compiled vs pending
btd wiki lint                          # find gaps and broken links
btd wiki index                         # rebuild wiki index
```

### Profiles

```bash
btd profile list                       # all registered users
btd profile show <user>                # full profile summary
```

All commands accept `--instance <name>` (default: `btd`).

## Browse in Obsidian

The repo is pre-configured as an Obsidian vault. Open it in Obsidian and you get graph view of the wiki, backlinks between concepts, and a browsable file explorer across raw sources, wiki pages, and user profiles. The wiki's `[[wiki-links]]` render as clickable cross-references. No search needed; follow the connections.

## Claude Code Skills

Open Claude Code in this repo and these skills auto-activate as `/slash-commands`:

| Skill | What it does | When it triggers |
|---|---|---|
| `/btd-intake` | Non-sycophantic intake interview (5 phases) | New user, no profile |
| `/btd-reentry` | Returning user check-in protocol | User has profile + experiments |
| `/wiki-compiler` | Compile raw sources into wiki pages | After ingestion, proactively |
| `/btd-ingest` | Content operations agent | Adding creators, ingesting, indexing |
| `/content-curator` | Decide what to ingest | Corpus planning, gap analysis |

Claude reads CLAUDE.md on session start, checks if you have a profile, and routes to the right skill automatically. You don't need to invoke them manually.

## Adding Content

The system supports 7 source types. Every script is instance-aware (`--instance`).

| Source | How to add | Notes |
|---|---|---|
| YouTube | `btd add <slug> "Name" --youtube <url>` then `btd ingest <slug>` | Transcripts via captions, no audio download |
| Twitter/X | `btd add <slug> "Name" --twitter <handle>` then `btd ingest:twitter <slug>` | Requires `bird` CLI |
| Podcasts | `btd add <slug> "Name" --podcast <feed-url>` then `btd ingest:podcast <slug>` | Downloads audio + whisper transcription |
| Substack | `btd add <slug> "Name" --substack <url>` then `btd ingest:substack <slug>` | Full articles via `sbstck-dl` or RSS |
| Code repos | `btd ingest:repo <github-url>` | Clones + indexes directly into LEANN |
| Articles | Drop `.md` files in `raw/articles/<creator>/` | Add YAML frontmatter |
| Transcripts | Drop `.md` files in `raw/transcripts/` | Meeting notes, group sessions |

Scanning catalogs everything published. Ingestion is a human decision. The `/content-curator` skill helps you decide what's worth ingesting.

## Requirements

**Hard requirement:** Node.js 20+ and npm.

Everything else is optional based on what you want to do:

| Goal | What you need |
|---|---|
| Search existing corpus | `leann` (`pip install leann`) |
| Add YouTube creators | `yt-dlp` (`brew install yt-dlp`) |
| Add Twitter creators | `bird` (`brew install steipete/tap/bird`) |
| Add podcasts | `podcast-dl` (included) + whisper backend |
| Add Substack | `sbstck-dl` (optional; RSS works as fallback) |
| Add code repos | `git` (usually pre-installed) |

For podcast transcription, the script auto-detects the best backend: `lightning-whisper-mlx` (fastest on Apple Silicon) > `whisper-cli` (whisper.cpp) > any OpenAI-compatible API via `WHISPER_URL`.

## Repo Structure

```
btd-knowledge-engine/
├── bin/btd.js           # CLI wrapper — all commands go through here
├── .claude/skills/      # Symlinks to skills (slash commands in Claude Code)
├── scripts/             # All tooling (instance-aware)
├── skills/              # Claude Code skills
│   ├── btd-intake/      #   Intake interview + re-entry protocol
│   ├── btd-ingest/      #   Content operations agent
│   ├── wiki-compiler/   #   Wiki compilation
│   └── content-curator/ #   What to ingest decisions
├── template/            # Clean starting point for new instances
├── btd/                 # Our instance (the BTD group's corpus)
│   ├── raw/             #   117 files: YouTube, Twitter, articles, transcripts
│   ├── wiki/            #   Compiled knowledge pages
│   ├── registry/        #   16 creators, catalogs, ingest log
│   └── users/           #   Constraint profiles + experiment cards
├── docs/                # Blueprint, roadmap, getting started
└── CLAUDE.md            # Runtime instructions (Claude reads this first)
```

## Current State (April 2026)

Run `btd status` for live numbers. The system is functional end-to-end: register a creator, scan their catalog, ingest selectively, compile wiki pages, rebuild the index, run an intake interview, generate experiments, check in, iterate.

What's next: Max runs 3 real people through the intake interview, writes sample outputs by hand, and we build the synthesis pipeline that turns constraint profile plus corpus into structured, actionable output. The tech is ready; now we test whether the questions are right.
