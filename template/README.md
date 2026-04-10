# Your Knowledge Engine Instance

This is your starting point. Copy this folder, name it whatever you want, and start building your corpus.

## Quick Start

```bash
# 1. Copy the template
cp -r template/ my-instance/

# 2. Add your first creator
node scripts/add-creator.js my-instance andrej-karpathy "Andrej Karpathy" \
  --youtube "https://www.youtube.com/@AndrejKarpathy" \
  --topics "ai,ml,building"

# 3. Ingest a video
node scripts/ingest-youtube.js "https://www.youtube.com/watch?v=zjkBMFhNj_g" \
  --creator andrej-karpathy --instance my-instance

# 4. Check status
node scripts/status.js my-instance

# 5. Run the intake interview
# (coming soon — the skill that figures out who YOU are and what you need)
```

## Structure

```
my-instance/
  raw/                    # Source content — transcripts, articles, clippings
    youtube/{creator}/    # YouTube transcripts (auto-ingested)
    podcasts/{show}/      # Podcast transcripts
    articles/             # Web-clipped articles
    transcripts/          # Meeting/session transcripts (manual)
  wiki/                   # LLM-compiled knowledge base (don't edit manually)
    concepts/             # One file per concept
    topics/               # Topic overviews
    creators/             # Creator profiles + teaching style
  registry/               # Tracking — who you follow, what's been ingested
    creators.json         # Your creator list
    ingest-log.jsonl      # Append-only log of all ingested content
  users/                  # Per-user profiles (from intake interview)
    {user-id}/
      profile.md
      experiments/
```

## What Goes Where

| You want to... | Do this |
|---|---|
| Add a new YouTube creator | `node scripts/add-creator.js` or edit `registry/creators.json` |
| Ingest a specific video | `node scripts/ingest-youtube.js <url>` |
| Ingest all new videos from tracked creators | `node scripts/fetch-new.js` |
| Add an article | Obsidian Web Clipper → save to `raw/articles/` |
| Add a meeting transcript | Drop `.md` in `raw/transcripts/` with frontmatter |
| See what's been ingested | `node scripts/status.js` |
| Run the intake interview | `node scripts/interview.js` (coming soon) |
