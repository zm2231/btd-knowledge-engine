# Your Knowledge Engine Instance

Copy this folder or use `init.js` to start your own instance.

## Quick Start

```bash
# Option A: Use init script (recommended)
node scripts/init.js my-instance

# Option B: Copy template manually
cp -r template/ my-instance/

# Then: add your first creator and scan their content
node scripts/add-creator.js andrej-karpathy "Andrej Karpathy" \
  --youtube "https://www.youtube.com/@AndrejKarpathy" \
  --topics "ai,ml,building" \
  --instance my-instance \
  --scan

# Ingest top 10 videos by views
node scripts/batch-ingest.js andrej-karpathy --limit 10 --top --instance my-instance

# Build semantic index
node scripts/index.js --instance my-instance

# Search
leann search btd-my-instance "how to think about building a project"

# Check status
node scripts/status.js --instance my-instance
```

## Structure

```
my-instance/
├── raw/                      # Ingested content
│   ├── youtube/{creator}/    #   Video transcripts (auto-ingested)
│   ├── podcasts/{show}/      #   Podcast transcripts
│   ├── articles/             #   Web-clipped articles
│   └── transcripts/          #   Meeting/session transcripts
├── wiki/                     # LLM-compiled knowledge base
│   ├── concepts/             #   One file per concept
│   ├── topics/               #   Topic overviews
│   └── creators/             #   Creator profiles
├── registry/                 # Tracking
│   ├── creators.json         #   Who you follow
│   ├── catalogs/             #   Everything they've published
│   └── ingest-log.jsonl      #   What you've downloaded
└── users/                    # Per-user profiles from intake interview
```

## All Scripts

All scripts accept `--instance <name>` (defaults to `btd`).

| Script | What it does |
|---|---|
| `init.js` | Create a new instance with full directory structure |
| `add-creator.js` | Register a creator. `--scan` to catalog their content immediately |
| `scan.js` | Catalog all published content. `--all` for every active creator |
| `batch-ingest.js` | Download transcripts. `--limit N` `--top` `--dry-run` |
| `ingest-youtube.js` | Ingest a single YouTube URL |
| `index.js` | Build/update LEANN semantic index. `--force` for full rebuild |
| `status.js` | Dashboard: creators, catalogs, ingestion, indexing state |
