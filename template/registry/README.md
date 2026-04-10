# Registry

Lightweight tracking for creators, content catalogs, and ingestion state. No database; just JSON files that scripts read and append to.

## Files

### `creators.json`
Who you follow. Scripts read this to know what to scan and ingest.

```json
{
  "creators": [
    {
      "slug": "andrej-karpathy",
      "name": "Andrej Karpathy",
      "platforms": {
        "youtube": { "channel_url": "https://www.youtube.com/@AndrejKarpathy" },
        "twitter": { "handle": "karpathy" },
        "podcast": { "feed_url": "https://example.com/feed/" }
      },
      "topics": ["ai", "ml", "building"],
      "status": "active",
      "added": "2026-04-10"
    }
  ]
}
```

Manage with scripts:
```bash
node scripts/add-creator.js <slug> "Name" --youtube <url> --twitter <handle> --podcast <feed> --topics "ai,ml" --instance my-instance
```

### `catalogs/{creator}.json` and `catalogs/{creator}-{platform}.json`
Everything a creator has published. Built by `scan.js`. One file per creator per platform.

```bash
# Scan all active creators
node scripts/scan.js --all --instance my-instance

# Scan one creator, one platform
node scripts/scan.js karpathy --youtube --instance my-instance
```

### `ingest-log.jsonl`
Append-only log of everything downloaded and indexed. One JSON object per line. Scripts use this for dedup (never download the same thing twice) and to track indexing state.

Each entry has:
- `source_id` — unique ID for dedup
- `creator` — creator slug
- `platform` — youtube, twitter, podcast, article
- `title` — content title
- `path` — path to the markdown file in raw/
- `ingested_at` — ISO timestamp
- `status` — downloaded, indexed
- `video_id` / `tweet_id` — platform-specific ID

```bash
# What's been ingested
cat registry/ingest-log.jsonl | jq -s 'length'

# By creator
cat registry/ingest-log.jsonl | jq -s '[.[] | select(.creator == "andrej-karpathy")] | length'

# What needs indexing
cat registry/ingest-log.jsonl | jq -s '[.[] | select(.status == "downloaded")] | length'
```
