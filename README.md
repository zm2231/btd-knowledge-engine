# BTD Knowledge Engine

Personalized learning from curated content. Register creators you follow, catalog everything they've published, selectively ingest what matters, and search semantically across all of it — then use an interview-based system to make it actionable for each individual person.

## How It Works

```
Register creators → Scan their published content → Selectively ingest → LEANN semantic index
                                                                              ↓
                                                            Interview figures out who YOU are
                                                                              ↓
                                                            Personalized output (experiments,
                                                            build plans, learning tracks)
```

**Two-layer tracking:** The system knows about everything a creator has published (catalog) vs what you've actually downloaded and indexed (ingest log). You browse the catalog and pull what's valuable — not everything.

## Requirements

- **Node.js** >= 20
- **yt-dlp** — YouTube metadata and playlist scanning (`brew install yt-dlp`)
- **LEANN CLI** — Semantic vector indexing (`pip install leann`)
- **bird** — Twitter/X CLI for tweet ingestion ([github.com/nicholasgasior/bird](https://github.com/nicholasgasior/bird)) *(optional)*
- **podcast-dl** — Podcast RSS ingestion (installed as npm dep)

```bash
# Install dependencies
npm install

# Verify tools
yt-dlp --version
leann --help
bird --version  # optional
```

## Quick Start

```bash
# 1. Register a creator
node scripts/add-creator.js andrej-karpathy "Andrej Karpathy" \
  --youtube "https://www.youtube.com/@AndrejKarpathy" \
  --topics "ai,ml,building" --scan

# 2. Browse their catalog (all published content)
cat btd/registry/catalogs/andrej-karpathy.json | jq '.total'

# 3. Ingest their top 10 videos by views
node scripts/batch-ingest.js andrej-karpathy --limit 10 --top

# 4. Build the semantic index
node scripts/index.js

# 5. Search across everything
leann search btd-btd "how to think about building a new project"

# 6. Check status
node scripts/status.js
```

## Scripts

| Script | What it does |
|---|---|
| `scripts/add-creator.js` | Register a creator with YouTube/Twitter/podcast platforms. `--scan` to catalog immediately. |
| `scripts/scan.js` | Catalog all published content from a creator or `--all`. No downloads — just metadata. |
| `scripts/batch-ingest.js` | Download transcripts from catalog. `--limit N`, `--top` (most viewed first), `--dry-run`. |
| `scripts/ingest-youtube.js` | Ingest a single YouTube URL directly. |
| `scripts/index.js` | Build/update the LEANN semantic index. `--force` for full rebuild. |
| `scripts/status.js` | Dashboard — creators, catalogs, ingestion state, pending work. |

All scripts accept `--instance <name>` (defaults to `btd`). For your own instance, copy `template/` and pass `--instance my-instance`.

## Supported Sources

| Source | Catalog | Ingest | Notes |
|---|---|---|---|
| **YouTube** | `yt-dlp --flat-playlist` | `youtube-transcript-plus` (captions) | Fast — 17 videos in 21s |
| **Twitter/X** | `bird user-tweets --json` | Coming soon | Threads, bookmarks |
| **Podcasts** | `podcast-dl --list json` | `podcast-dl` + whisper | RSS feed based |
| **Substack** | RSS feed parsing | Coming soon | Full article content in RSS |
| **Articles** | Manual (Obsidian Web Clipper) | Drop `.md` in `raw/articles/` | Add frontmatter |

## Repo Structure

```
btd-knowledge-engine/
├── template/            # Clean starting point — copy this for your own instance
│   ├── raw/             #   Where content goes (youtube/, podcasts/, articles/, transcripts/)
│   ├── wiki/            #   LLM-compiled knowledge base (concepts/, topics/, creators/)
│   ├── registry/        #   Creator list + ingest log
│   └── users/           #   Per-user profiles from intake interview
├── btd/                 # Our instance (the BTD group's actual corpus)
│   ├── raw/             #   37 ingested docs across 4 creators
│   └── registry/        #   4 creators, 1,137 items cataloged
├── scripts/             # Shared tooling (instance-aware)
├── skills/              # Interview engine (btd-intake)
├── docs/                # Blueprint, architecture decisions
├── question-bank/       # Interview state machine definition
└── .leann/              # LEANN index data (7,894 chunks)
```

## The Interview Layer

The `skills/btd-intake/SKILL.md` is the core IP — a non-sycophantic interview engine that:

- **Pushes back** on vague goals ("That's a category, not a project")
- **Calibrates** actual skill level through probing, not self-assessment
- **Finds blind spots** — what you're not thinking about
- **Produces a constraint profile** that routes corpus queries differently per person

Same corpus, different people → different output. Tested and confirmed via LEANN retrieval.

## Current State (April 2026)

- **4 creators**: Karpathy (17 YT), 3Blue1Brown (233 YT), Nate Jones (887 YT), Mollick (substack, pending)
- **1,137 items cataloged**, 37 ingested, 7,894 chunks indexed
- **Retrieval quality confirmed**: different queries pull from different creators/content types
- **Next**: Max runs 3 people through intake, writes sample outputs by hand, we build synthesis pipeline
