# BTD Knowledge Engine

You collect content from smart people. Podcasts, YouTube videos, articles, tweets, transcripts from calls you're on. Most of it streams by and you forget it within a week. The stuff that sticks, you can't find when you need it. The stuff that's actionable, you never act on because nobody told you what to do with it specifically for your situation.

This fixes that.

Register the creators you actually follow. The system catalogs everything they've published, lets you selectively pull down what matters, indexes it all for semantic search, and then (the part nobody else does) runs you through an interview that figures out who you are, where you're at, and what you should actually do next. Same corpus, different people, completely different output.

## What You Need

**Node.js 20+** and **npm**. That's the only hard requirement. Everything else is optional based on what sources you want to ingest and what you want to do.

```bash
git clone https://github.com/zm2231/btd-knowledge-engine.git
cd btd-knowledge-engine
npm install
```

### CLI Tools

| Tool | What it does | Install | When you need it |
|---|---|---|---|
| **yt-dlp** | YouTube metadata and playlist scanning | `brew install yt-dlp` or `pip install yt-dlp` | Ingesting YouTube |
| **LEANN** | Semantic vector search across all content | `pip install leann` | Search (core to everything) |
| **bird** | Twitter/X; pull tweets, threads, bookmarks | `brew install steipete/tap/bird` | Twitter sources |
| **podcast-dl** | Podcast RSS feed listing and episode download | Included in `npm install` | Podcast sources |
| **sbstck-dl** | Substack article download | `go install github.com/alexferrari88/sbstck-dl@latest` | Substack sources (falls back to RSS if unavailable) |
| **lightning-whisper-mlx** | Audio transcription (fastest on Apple Silicon) | `pip install lightning-whisper-mlx` | Podcast transcription (preferred) |
| **whisper-cli** | Audio transcription (whisper.cpp) | `brew install whisper-cpp` (auto-downloads model) | Podcast transcription (fallback) |

```bash
node --version        # 20+
yt-dlp --version      # any recent version
leann list            # should run without error
bird --version        # optional, 0.8+
```

### Whisper Setup (for podcasts)

Podcast ingestion downloads audio and transcribes locally. The script auto-detects the best available backend:

1. **lightning-whisper-mlx** (preferred) — native Apple Silicon, fastest. `pip install lightning-whisper-mlx`
2. **whisper-cli** (fallback) — whisper.cpp. `brew install whisper-cpp`. Auto-downloads `ggml-base.en` model on first use.
3. **Any OpenAI-compatible API** — set `WHISPER_URL` env var to override.

```bash
# Most users: just install MLX whisper
pip install lightning-whisper-mlx

# Or use a remote endpoint
export WHISPER_URL="http://your-server:8080/v1/audio/transcriptions"

# Or use a larger model for better accuracy
export WHISPER_MLX_MODEL="small"   # base (default), small, medium, large-v3
```

## Five Minutes to Working

```bash
# 1. Create your instance
node scripts/init.js my-kb

# 2. Register a creator and scan everything they've published
node scripts/add-creator.js karpathy "Andrej Karpathy" \
  --youtube "https://www.youtube.com/@AndrejKarpathy" \
  --twitter karpathy \
  --topics "ai,ml,building" \
  --instance my-kb --scan

# 3. Pull down the top 10 by views
node scripts/batch-ingest.js karpathy --limit 10 --top --instance my-kb

# 4. Build the search index
node scripts/index.js --instance my-kb

# 5. Search it
leann search btd-my-kb "how to approach building something new"
```

That's it. Semantic search across 10 transcripts with timed segments. The whole thing takes about 90 seconds.

## The User Flow

The ingestion pipeline is the foundation, but the product is what happens when a person shows up. Three flows, all orchestrated through `session.js`:

### 1. New User Intake

```bash
node scripts/session.js intake sarah
```

Assembles the SKILL.md interview (5 phases, non-sycophantic, calibrates rather than trusts self-assessment) and gives you everything you need to run it in Claude. The interview produces a constraint profile: what they actually want, where they actually are, what they're not thinking about, and what their real constraints look like.

```bash
# After the interview, save the profile
node scripts/profile.js save sarah --file profile.yaml
```

### 2. Generate Experiment

```bash
node scripts/session.js experiment sarah
```

Loads the profile, searches the corpus using the person's gaps and blind spots, pulls relevant content, and packages it all with the experiment card template. Give it to Claude and it generates a time-boxed, testable experiment: specific content to consume, specific exercises, a hypothesis, and how to know if it worked.

### 3. Check-in (Returning User)

```bash
node scripts/session.js checkin sarah
```

Loads the profile, the latest experiment, experiment history, and runs corpus searches targeted at whatever gap the experiment was addressing. Hands it to Claude with the RE-ENTRY.md protocol: figure out what happened, update the profile, generate the next experiment.

### Quick Status

```bash
node scripts/session.js status sarah
```

```
sarah
────────────────────────────────────────
Goal: Evaluate vendor AI claims for her team
Type: learn
Level: pre-beginner in AI/ML fundamentals
Gap: No mental model for how any of this works
Blind spots: 3
Experiments: 1
  Latest: 001-neural-network-basics.md
    Status: active | Outcome: null

Next action:
  → Check in: node scripts/session.js checkin sarah
```

## How Tracking Works

Two layers for content, one for users.

**Catalog**: everything a creator has published. Metadata only, no downloads. Built by `scan.js`.

**Ingest log**: what you've actually downloaded, transcribed, and indexed. Append-only JSONL. Scripts read this for dedup.

**User profiles**: constraint profile YAML + experiment cards + journal. Managed by `profile.js`, change history tracked in JSONL.

```bash
node scripts/status.js          # content dashboard
node scripts/profile.js list    # all users
```

## All Scripts

Every script takes `--instance <name>` (default: `btd`).

### Content Pipeline
| Script | What | Key flags |
|---|---|---|
| `init.js` | Create a new instance | |
| `add-creator.js` | Register a creator with any platform | `--youtube`, `--twitter`, `--podcast`, `--substack`, `--topics`, `--scan` |
| `scan.js` | Catalog published content (no download) | `--all`, `--youtube`, `--twitter`, `--podcast`, `--substack`, `--repo` |
| `batch-ingest.js` | Batch download YouTube transcripts | `--limit N`, `--top`, `--dry-run` (YouTube only) |
| `ingest-youtube.js` | Ingest a single YouTube URL | `--creator <slug>` |
| `ingest-twitter.js` | Ingest tweets from catalog | `--limit N`, `--dry-run` |
| `ingest-podcast.js` | Download + transcribe podcast episodes | `--feed <url>`, `--limit N`, `--list`, `--file <mp3>` |
| `ingest-substack.js` | Download Substack articles | `--scan`, `--limit N` |
| `ingest-repo.js` | Index a codebase (local path or GitHub URL) | `--scan` (preview), `--file-types` |
| `index.js` | Build/update LEANN semantic index | `--force` |
| `status.js` | Content dashboard (creators, catalogs, ingestion) | |

### User Flow
| Script | What |
|---|---|
| `session.js intake <user>` | Start intake interview |
| `session.js experiment <user>` | Generate next experiment (profile + corpus) |
| `session.js checkin <user>` | Returning user check-in |
| `session.js search <user> "<query>"` | Profile-aware corpus search |
| `session.js status <user>` | User status overview |
| `profile.js save <user>` | Save constraint profile (`--file` or `--stdin`) |
| `profile.js load <user>` | Print profile |
| `profile.js list` | List all users |
| `profile.js summary <user>` | Profile + experiment status |
| `profile.js update <user>` | Update a field (`--field`, `--value`) |
| `profile.js history <user>` | Profile change log |

## Sources

| Source | Catalog | Ingest | Notes |
|---|---|---|---|
| **YouTube** | `yt-dlp --flat-playlist` | `youtube-transcript-plus` (captions) | 17 videos in 21s. No audio download needed. |
| **Twitter/X** | `bird user-tweets --json` | Thread grouping into markdown | Rate limited; use small counts |
| **Podcasts** | `podcast-dl --list json` | Download mp3 + whisper transcription | 90MB episode transcribed in ~2.5min |
| **Substack** | `sbstck-dl` or RSS fallback | Markdown articles | Full HTML available in RSS feeds |
| **Repos/Code** | `ingest-repo.js --scan` | `ingest-repo.js` (clones + LEANN index) | GitHub URL or local path. Code + docs in same index as talks. |
| **Articles** | Manual | Drop `.md` in `raw/articles/` | Obsidian Web Clipper works well |
| **Transcripts** | Manual | Drop `.md` in `raw/transcripts/` | Meeting notes, group sessions |

## The Interview Layer

This is the part that makes it personal. The intake interview pushes back, probes, and calibrates. It doesn't take your word for it when you say you're "intermediate at AI." It asks you a question an intermediate would answer easily. If you can't, it adjusts silently.

The interview produces a constraint profile. The constraint profile routes corpus queries. Different profiles get fundamentally different content back. We tested this; "what is a neural network" pulls 3Blue1Brown visual explanations for beginners. "How to build an LLM from scratch" pulls Karpathy deep dives for builders. "Vikings and medieval raids" pulls a Lex Fridman podcast transcript. Same index, completely different results depending on who's asking and why.

My theory is that this is where most "personalized AI" products fail. They skip the interview, or they do a shallow one, and everyone gets the same output. Without the right questions, the best corpus in the world produces generic answers.

## Repo Structure

```
btd-knowledge-engine/
├── scripts/             # All tooling (instance-aware)
│   ├── session.js       #   User flow orchestrator (intake, checkin, experiment, search)
│   ├── profile.js       #   Profile management (save, load, update, history)
│   ├── add-creator.js   #   Register creators
│   ├── scan.js          #   Catalog published content
│   ├── batch-ingest.js  #   YouTube batch download
│   ├── ingest-*.js      #   Source-specific ingestion (youtube, twitter, podcast, substack)
│   ├── index.js         #   LEANN index build
│   ├── status.js        #   Content dashboard
│   └── init.js          #   Create new instance
├── skills/              # Interview engine
│   └── btd-intake/
│       ├── SKILL.md     #   Non-sycophantic intake interview (5 phases)
│       └── RE-ENTRY.md  #   Returning user check-in protocol
├── template/            # Clean starting point for new instances
├── btd/                 # Our instance (the BTD group's corpus)
│   ├── raw/             #   48 docs: YouTube, Twitter, Podcasts, Substack, transcripts
│   ├── registry/        #   5 creators, 1,643+ items cataloged
│   └── users/           #   Constraint profiles + experiment cards
├── question-bank/       # Interview state machine (needs rewrite for non-technical users)
├── docs/                # Blueprint, roadmap, architecture
└── .leann/              # LEANN index (8,164+ chunks)
```

## Current State (April 2026)

**Content** (run `node scripts/status.js` for live numbers):
- Creators span technical and non-technical: Karpathy, 3Blue1Brown, Nate Jones, Mollick, Lex Fridman, Sinek, Abdaal, Lenny Rachitsky + Karpathy code repos
- All 6 source type pipelines working: YouTube, Twitter, Podcast, Substack, Repos, Manual
- Cross-source search confirmed: Karpathy's talks about tokenization + his actual minbpe code in same query
- Retrieval diversity confirmed: productivity queries → Abdaal, leadership → Sinek, technical → Karpathy, product → Lenny

**Product:**
- Intake interview skill (SKILL.md) ready for Max to run
- Re-entry protocol (RE-ENTRY.md) ready
- Session orchestrator wires skills + profiles + corpus together
- Profile management with change tracking
- Experiment card template with structured outcome YAML for machine consumption

**What's next:** Max runs 3 real people through the intake interview, writes sample outputs by hand, and we build the synthesis pipeline that turns constraint profile + corpus into structured, actionable output. The tech is ready; now we test whether the questions are right.
