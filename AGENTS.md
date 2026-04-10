# BTD Knowledge Engine

Personalized learning system. Curated content → meta-pattern extraction → interview-based personalization → actionable experiments.

## Repo Structure

```
template/               ← Clean starting point. New users copy this.
  raw/                  ← Where ingested content goes
  wiki/                 ← LLM-compiled knowledge base
  registry/             ← Creator list + ingest tracking
  users/                ← Per-user profiles from intake interview

btd/                    ← OUR instance (the BTD group's corpus)
  raw/                  ← Our transcripts, videos, articles
  registry/             ← Our creators, our ingest log
  wiki/                 ← Our compiled knowledge base
  users/                ← Our user profiles

scripts/                ← Shared tooling (instance-aware via --instance flag)
skills/                 ← Shared skills (interview engine, etc.)
docs/                   ← Blueprint, architecture docs
question-bank/          ← Interview state machine definition
```

## Key Principles

1. **Files, not databases.** Markdown + frontmatter is the storage layer. LEANN is the search layer.
2. **Instance-aware scripts.** All scripts take `--instance <name>` (defaults to `btd`).
3. **Template is the product.** New user copies `template/`, runs scripts, gets their own corpus.
4. **Interview is the IP.** The `btd-intake` skill is what makes output personal, not the corpus.
5. **Non-sycophantic.** The interview pushes back, probes, calibrates. Never validates without testing.

## Scripts

```bash
# Ingest a YouTube video
node scripts/ingest-youtube.js <url> --creator <slug> [--instance btd]

# Ingest using our instance (default)
node scripts/ingest-youtube.js "https://youtube.com/watch?v=..." --creator andrej-karpathy

# Ingest into a different instance
node scripts/ingest-youtube.js "https://youtube.com/watch?v=..." --creator 3blue1brown --instance my-instance
```

## Ingestion Pipeline

youtube-transcript-plus for captions (fast, free, timed segments).
Fallback: yt-dlp audio download → local whisper via IQ endpoint.

```
URL → yt-dlp metadata → youtube-transcript-plus captions → markdown with frontmatter → ingest-log.jsonl
```
