# BTD Knowledge Engine

You collect content from smart people. Podcasts, YouTube videos, articles, tweets, transcripts from calls you're on. Most of it streams by and you forget it within a week. The stuff that sticks, you can't find when you need it. The stuff that's actionable, you never act on because nobody told you what to do with it specifically for your situation.

This fixes that.

Register the creators you actually follow. The system catalogs everything they've published, lets you selectively pull down what matters, and then does something most tools skip entirely: it compiles the content into a persistent knowledge base that gets smarter over time. Not just search; structured wiki pages where concepts are cross-referenced, contradictions are flagged, and synthesis happens once instead of being re-derived every query.

Then it runs you through an interview that figures out who you are, where you're at, and what you're not thinking about. Same corpus, different people, completely different output. The interview produces a constraint profile that routes everything; which content surfaces, how it's explained, what experiments get generated.

## How It Works

Two layers of content. The shared corpus comes with the repo; 24 creators, 288 sources, 311 wiki pages covering AI, building, productivity, leadership, and mental models. That's the library. Your personal content (repos you're building, creators you follow, notes you've written) goes in `local/`, which is gitignored and never conflicts with updates.

You `git pull` to get new shared content. Your stuff stays untouched.

```
btd/                    # The library (shared, curated, pullable)
  raw/                  # 288 ingested sources across 6 platforms
  wiki/                 # 311 compiled knowledge pages (Karpathy wiki pattern)
  registry/             # 24 creators, catalogs, ingest log

local/                  # Your desk (personal, gitignored)
  profile.md            # Your constraint profile from the intake interview
  experiments/          # Your experiment cards
  raw/                  # Your personal sources
  registry/             # Your personal creators
  wiki/                 # Your personal wiki (compiled from your sources)
```

## Get Started

```bash
git clone https://github.com/zm2231/btd-knowledge-engine.git
cd btd-knowledge-engine
npm install
```

Then open Claude Code in this repo and say "I'm new."

Claude reads CLAUDE.md, sees you have no profile, creates your local workspace, and runs a 15-minute intake interview. The interview pushes back, probes, and calibrates. It doesn't take your word for it when you say you're "intermediate at AI." It asks a question an intermediate would answer easily. If you can't, it adjusts silently.

The interview produces a constraint profile. The constraint profile routes everything after that. Different profiles get fundamentally different output from the same corpus.

If you mention creators you follow or repos you're building, it offers to index those into your personal corpus too. Same search, both sources, results labeled so you know what came from where.

## What's In The Shared Corpus

Run `node scripts/status.js` for live numbers. Every creator earns their spot by serving a specific type of learner; nothing is in here for volume.

| Need | Creator | What you get |
|---|---|---|
| How to actually learn | Cal Newport, Ali Abdaal | Deep work, spaced repetition, focus systems |
| Neuroscience of focus | Andrew Huberman | Dopamine, habits, studying protocols |
| Build habits that stick | James Clear | Atomic habits, identity-based change, 1% rule |
| Understand AI/ML | Andrej Karpathy, 3Blue1Brown | From neural nets to attention, with working code |
| AI for non-technical people | Ethan Mollick | How to actually use these tools at work |
| AI tools and workflows | Simon Willison, Sabrina Ramonov | Practical AI tool usage, MCP servers, Claude Code |
| Leadership and teams | Simon Sinek | Infinite game, empathy, accountability |
| Product and growth | Nate Jones, Lenny Rachitsky | AI business analysis, product strategy |
| Long-form AI interviews | Lex Fridman | Sam Altman, Karpathy, Hassabis, LeCun |
| Mental models | Shane Parrish | Decision-making, thinking frameworks |
| Building with AI | Alex Finn, Kyle Balmer, Mark Kashef | Context engineering, building in public |
| The BTD thesis | Beware The Defaults | Defaults, borrowed judgment, the builder arc |

"I can't focus" routes to Newport and Huberman. "I want to understand how LLMs work" routes to Karpathy's video plus his actual code. "I'm a manager trying to use AI" routes to Mollick. "I want to build something with AI this weekend" routes to the builder creators. The corpus isn't random; it's designed to serve the profiles the intake interview produces.

## The Three Layers

### 1. Raw Content (what's ingested)

YouTube transcripts, tweets, Substack articles, podcast transcriptions, code repos. All markdown with frontmatter. All searchable via LEANN semantic search. 288 sources across 24 creators, spanning technical depth (Karpathy building GPT from scratch) to practical application (Mollick on using AI at work without knowing how it works).

### 2. The Wiki (what's compiled)

Most knowledge tools stop at search. You ask a question, they find relevant chunks, the LLM stitches an answer together from fragments. Every question starts from scratch. Nothing accumulates.

The wiki is different. After content gets ingested, Claude compiles it into structured pages: concept pages that synthesize across sources, creator profiles that track contributions, topic overviews that connect ideas. The cross-references are already built. When you ask a question, the wiki already has the synthesis.

This follows the [Karpathy LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): raw data from sources gets compiled by the LLM into a persistent wiki, then operated on for Q&A. Your explorations get filed back into it. The wiki compounds over time.

311 pages right now. 33 concepts, 3 topic overviews, 18 creator profiles, 19 source directories. The shared wiki is curated; the operator maintains it. You can also compile your own personal wiki from your local sources.

### 3. The Interview (what's personalized)

My theory is that this is where most "personalized AI" products fail. They skip the interview, or they do a shallow one, and everyone gets the same output. Without the right questions, the best corpus in the world produces generic answers.

The intake interview is five phases: goal clarification, calibration (what you actually know vs what you claim), blind spot scanning (what you're not thinking about), constraints (your real situation, not your aspirational one), and personal sources (what you follow that we should index). If you mention repos or creators during the interview, the system offers to add them to your personal index on the spot.

The interview produces a constraint profile. The constraint profile routes everything. A pre-beginner PM gets Ethan Mollick articles explained without jargon. An advanced builder gets Karpathy repos with specific file paths. Same corpus, completely different experience.

## Personal Content

Your personal sources live in `local/` and never touch the shared corpus. Add creators you follow, index repos you're building, ingest newsletters you read. Search queries both indices and merges results.

```bash
# Add a creator to your personal corpus
node scripts/add-creator.js my-newsletter "Some Newsletter" --substack https://... --local --scan

# Index a repo you're working on
node scripts/ingest-repo.js /path/to/my/project --local

# Build your personal search index
node scripts/index.js --local

# Search both shared + personal
node scripts/search.js "your query" --top-k 5
```

When you `git pull` to get new shared content, your personal content stays exactly where it is. No merge conflicts, no data leakage, no cleanup.

## Claude Code Skills

Open Claude Code in this repo and these skills auto-activate:

| Skill | What it does | When it triggers |
|---|---|---|
| `/btd-intake` | Non-sycophantic intake interview (5+ phases) | New user, no profile |
| `/btd-reentry` | Returning user check-in, experiment generation | User has profile + experiments |
| `/wiki-compiler` | Compile raw sources into wiki pages | After ingestion, proactively |
| `/btd-ingest` | Content operations agent | Adding creators, ingesting, indexing |
| `/content-curator` | Decide what to ingest | Corpus planning, gap analysis |
| `/source-setup` | Help users build their personal corpus | "Add my sources," "index my repo" |

Claude reads CLAUDE.md on session start, checks if you have a profile, and routes to the right skill automatically. Returning users get the re-entry protocol; it loads your profile and latest experiment before saying anything. New users get the full intake.

## Adding Content to the Shared Corpus

The system supports 7 source types. Operator commands use `--instance btd` for shared content; users use `--local` for personal content.

| Source | How to add | Notes |
|---|---|---|
| YouTube | `node scripts/add-creator.js <slug> "Name" --youtube <url> --instance btd` | Transcripts via captions |
| Twitter/X | `node scripts/add-creator.js <slug> "Name" --twitter <handle> --instance btd` | Requires `bird` CLI |
| Podcasts | `node scripts/add-creator.js <slug> "Name" --podcast <feed-url> --instance btd` | Downloads + whisper transcription |
| Substack | `node scripts/add-creator.js <slug> "Name" --substack <url> --instance btd` | Full articles via RSS |
| Code repos | `node scripts/ingest-repo.js <github-url> --instance btd` | Clones + indexes into LEANN |
| Articles | Drop `.md` files in `btd/raw/articles/<creator>/` | Add YAML frontmatter |
| Transcripts | Drop `.md` files in `btd/raw/transcripts/` | Meeting notes, group sessions |

Scanning catalogs everything published. Ingestion is a human decision. The `/content-curator` skill helps you decide what's worth pulling in.

## Requirements

Node.js 20+ and npm. Everything else is optional based on what you want to do:

| Goal | What you need |
|---|---|
| Search the corpus | `leann` (`pip install leann`) |
| Add YouTube creators | `yt-dlp` (`brew install yt-dlp`) |
| Add Twitter creators | `bird` (`brew install steipete/tap/bird`) |
| Add podcasts | `podcast-dl` (included) + whisper backend |
| Add Substack | `sbstck-dl` (optional; RSS works as fallback) |
| Add code repos | `git` (usually pre-installed) |

For podcast transcription, the script auto-detects the best backend: `lightning-whisper-mlx` (fastest on Apple Silicon) > `whisper-cli` (whisper.cpp) > any OpenAI-compatible API via `WHISPER_URL`.

## Browse in Obsidian

The repo is pre-configured as an Obsidian vault. Open it in Obsidian and you get graph view of the wiki, backlinks between concepts, and a browsable file explorer across raw sources and wiki pages. The wiki's `[[wiki-links]]` render as clickable cross-references.

## Repo Structure

```
btd-knowledge-engine/
├── btd/                 # Shared corpus (upstream, curated)
│   ├── raw/             #   288 files: YouTube, Twitter, articles, transcripts
│   ├── wiki/            #   311 compiled knowledge pages
│   └── registry/        #   24 creators, catalogs, ingest log
├── local/               # Your workspace (gitignored, personal)
│   ├── profile.md       #   Constraint profile from intake
│   ├── experiments/     #   Experiment cards
│   ├── raw/             #   Personal sources
│   ├── registry/        #   Personal creators
│   └── wiki/            #   Personal wiki
├── scripts/             # All tooling (--local for personal, --instance for shared)
├── skills/              # Claude Code skills (auto-activate)
├── template/            # Templates for profiles and experiments
├── docs/                # Architecture docs
└── CLAUDE.md            # Runtime instructions (Claude reads this first)
```

## Current State (April 2026)

24 creators across 6 platforms. 288 indexed sources. 311 wiki pages with cross-references. 6 skills auto-routing based on user context. Composite search across shared and personal indices.

The full loop works: clone the repo, run the intake, get a constraint profile, receive personalized experiment cards with cited sources, add your own content on top, check in and iterate. Search retrieval is confirmed across every topic area; leadership queries hit Sinek, focus queries hit Newport and Huberman, technical queries hit Karpathy's videos and his actual code simultaneously.

The system is a template. You clone it, you get the library, you build your desk on top of it. Updates to the shared corpus come through `git pull`. Your personal content never conflicts.

## The BTD Community

This is the knowledge engine for [Beware The Defaults](https://bewarethedefault.substack.com). The community thesis: most people are running on autopilot, and the builders who notice their defaults are the ones who ship. The corpus, the interview, the experiment cards; all of it exists to help you notice what you're not thinking about and do something about it with the right borrowed judgment.

If you're here from the community, open Claude Code and say hi. If you're here from somewhere else, the intake interview will figure out who you are.
