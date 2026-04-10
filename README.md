# BTD Knowledge Engine

You collect content from smart people. Podcasts, YouTube videos, articles, tweets, transcripts from calls you're on. Most of it streams by and you forget it within a week. The stuff that sticks, you can't find when you need it. The stuff that's actionable, you never act on because nobody told you what to do with it specifically for your situation.

This fixes that.

Register the creators you actually follow. The system catalogs everything they've published, lets you selectively pull down what matters, indexes it all for semantic search, and then (the part nobody else does) runs you through an interview that figures out who you are, where you're at, and what you should actually do next. Same corpus, different people, completely different output.

## What You Need

**Node.js 20+** and **npm**. That's the only hard requirement. Everything else is optional based on what sources you want to ingest.

```bash
# Clone and install
git clone https://github.com/zm2231/btd-knowledge-engine.git
cd btd-knowledge-engine
npm install
```

### CLI Tools (install what you need)

| Tool | What it does | Install | Required? |
|---|---|---|---|
| **yt-dlp** | YouTube metadata, playlist scanning, audio download | `brew install yt-dlp` or `pip install yt-dlp` | Yes, if ingesting YouTube |
| **LEANN** | Semantic vector search across all your content | `pip install leann` | Yes, for search |
| **bird** | Twitter/X; pull tweets, threads, bookmarks | `brew install steipete/tap/bird` | Only for Twitter sources |
| **podcast-dl** | Podcast RSS feed listing and episode download | Included in `npm install` | Only for podcasts |

Verify your setup:
```bash
node --version        # 20+
yt-dlp --version      # any recent version
leann list            # should run without error
bird --version        # optional, 0.8+
```

## Five Minutes to Working

```bash
# 1. Create your instance
node scripts/init.js my-kb

# 2. Register a creator and scan everything they've published
node scripts/add-creator.js karpathy "Andrej Karpathy" \
  --youtube "https://www.youtube.com/@AndrejKarpathy" \
  --topics "ai,ml,building" \
  --instance my-kb --scan

# 3. Pull down the top 10 by views
node scripts/batch-ingest.js karpathy --limit 10 --top --instance my-kb

# 4. Build the search index
node scripts/index.js --instance my-kb

# 5. Search it
leann search btd-my-kb "how to approach building something new"
```

That's it. You now have semantic search across 10 transcripts with timed segments. The whole thing takes about 90 seconds.

## How Tracking Works

Two layers, because knowing what exists is different from having it downloaded.

**Catalog**: everything a creator has published. Title, date, duration, URL. Built on registration with `--scan`, updated whenever you run `scan.js`. No downloads; just metadata.

**Ingest log**: what you've actually pulled down, extracted, and indexed. Append-only JSONL. Every script reads this for dedup; you never download the same thing twice.

```bash
# See the full picture
node scripts/status.js --instance my-kb
```

```
Creators: 1 active
  ● karpathy — Andrej Karpathy
    YouTube: 17 items cataloged | 10 ingested | scanned today

Downloaded: 10 | Indexed: 10 | Pending extraction: 10
```

You're looking at 17 published videos, 10 downloaded with transcripts, all 10 searchable. The other 7 are in the catalog whenever you want them.

## All Scripts

Every script takes `--instance <name>`. Defaults to `btd` (our group's instance). Use your own.

```bash
# npm shortcuts
npm run init -- my-kb
npm run add-creator -- slug "Name" --youtube <url> --instance my-kb --scan
npm run scan -- slug --instance my-kb
npm run ingest -- slug --limit 10 --top --instance my-kb
npm run index -- --instance my-kb
npm run status -- --instance my-kb
```

| Script | What | Key flags |
|---|---|---|
| `init.js` | Create a new instance with full directory structure | |
| `add-creator.js` | Register a creator with their platforms | `--youtube`, `--twitter`, `--topics`, `--scan` |
| `scan.js` | Catalog all published content without downloading | `--all`, `--youtube`, `--twitter`, `--podcast` |
| `batch-ingest.js` | Download transcripts from the catalog | `--limit N`, `--top` (most viewed), `--dry-run` |
| `ingest-youtube.js` | Ingest a single YouTube URL directly | `--creator <slug>` |
| `index.js` | Build/update LEANN semantic index | `--force` (full rebuild) |
| `status.js` | Dashboard; creators, catalogs, ingestion state | |

## Sources

| Source | How it catalogs | How it ingests | Speed |
|---|---|---|---|
| **YouTube** | `yt-dlp --flat-playlist` (metadata only) | `youtube-transcript-plus` (captions API) | 17 videos in 21s |
| **Twitter/X** | `bird user-tweets --json` | Coming soon | |
| **Podcasts** | `podcast-dl --list json` (RSS) | Audio download + local whisper | |
| **Substack** | RSS feed parsing | Coming soon | |
| **Articles** | Manual (Obsidian Web Clipper) | Drop `.md` in `raw/articles/` | |
| **Transcripts** | Manual | Drop `.md` in `raw/transcripts/` | |

YouTube is the most mature pipeline. Transcripts come directly from YouTube's caption API; no audio download, no whisper, just text with timed segments. Most videos have auto-generated English captions. The few that don't (silent videos, music) get skipped with a clear error.

## Repo Structure

```
btd-knowledge-engine/
├── template/            # Clean starting point; copy this or use init.js
├── btd/                 # Our instance (the BTD group's corpus)
│   ├── raw/             #   37 docs: 15 Karpathy, 10 3B1B, 10 Nate Jones, 2 group transcripts
│   └── registry/        #   4 creators, 1,137 items cataloged
├── scripts/             # All tooling; instance-aware via --instance
├── skills/              # btd-intake: the non-sycophantic interview engine
├── docs/                # Blueprint visualization, architecture decisions
├── question-bank/       # Interview state machine (the IP)
└── .leann/              # LEANN index data (7,894 chunks across 37 docs)
```

## The Interview Layer

This is the part that makes it personal. The `skills/btd-intake/SKILL.md` is an interview engine that pushes back, probes, and calibrates. It doesn't take your word for it when you say you're "intermediate at AI." It asks you a question an intermediate would answer easily. If you can't, it adjusts silently.

The interview produces a constraint profile. The constraint profile routes corpus queries. Different profiles get fundamentally different content back. We tested this; "what is a neural network" pulls 3Blue1Brown visual explanations, "how to build an LLM from scratch" pulls Karpathy deep dives, "how to think about constraints" pulls our group session transcripts. Same index, completely different results.

My theory is that this is where most "personalized AI" products fail. They skip the interview, or they do a shallow one, and everyone gets the same output. Without the right questions, the best corpus in the world produces generic answers.

## Current State

- **4 creators**: Karpathy (17 YT), 3Blue1Brown (233 YT), Nate Jones (887 YT), Mollick (substack, pending)
- **1,137 items cataloged**, 37 ingested, 7,894 chunks indexed in LEANN
- **Retrieval quality confirmed**: different constraint profiles pull different content
- **Pipeline working end to end**: register → scan → ingest → index → search

What's next is Max running 3 real people through the intake interview, writing sample outputs by hand, and us building the synthesis layer that turns constraint profile + corpus retrieval into structured, actionable output. The tech is ready; now we test whether the questions are right.
