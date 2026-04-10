# Registry

Lightweight tracking for creators, content, and ingestion state. No database — just JSON files that scripts can read and append to.

## Files

### `creators.json`
Who we track. Add creators here; ingestion scripts read this to know what to fetch.

```bash
# List all active creators
jq '.creators[] | select(.status == "active") | .slug' registry/creators.json

# Get all YouTube channels to scrape
jq '.creators[] | select(.platforms.youtube != null and .status == "active") | {slug, url: .platforms.youtube.channel_url}' registry/creators.json
```

### `ingest-log.jsonl`
Append-only log of everything that's been ingested. One JSON object per line. Scripts append here after successful download.

Fields:
- `id` — unique ID (usually `{date}-{slug}`)
- `source_type` — youtube | podcast | article | transcript
- `creator` — creator slug from creators.json
- `status` — downloaded | ingested | extracted | indexed
- `ingested_at` — ISO timestamp
- `file` — path to the file in raw/
- `extracted` — meta-patterns extracted? (bool)
- `indexed` — added to LEANN index? (bool)
- `url` — source URL (for youtube/articles)
- `video_id` — YouTube video ID (for dedup)

```bash
# What hasn't been extracted yet
cat registry/ingest-log.jsonl | jq -s '.[] | select(.extracted == false) | .file'

# What hasn't been indexed yet  
cat registry/ingest-log.jsonl | jq -s '.[] | select(.indexed == false) | .file'

# Everything from a specific creator
cat registry/ingest-log.jsonl | jq -s '.[] | select(.creator == "andrej-karpathy") | .id'

# Count by status
cat registry/ingest-log.jsonl | jq -s 'group_by(.status) | map({status: .[0].status, count: length})'
```

## How Scripts Use This

### Ingestion cron (fetch new content)
1. Read `creators.json` → get active creators with YouTube channels
2. For each creator, run `yt-dlp --dateafter {last_check}` to find new videos
3. Check `ingest-log.jsonl` for existing `video_id` to dedup
4. Download transcript → write to `raw/youtube/{creator-slug}/`
5. Append entry to `ingest-log.jsonl` with `status: ingested`

### Extraction cron (pull meta-patterns)
1. Read `ingest-log.jsonl` → find entries where `extracted == false`
2. Run LLM extraction on each file
3. Update the entry (rewrite line) with `extracted: true`

### Indexing cron (update LEANN)
1. Read `ingest-log.jsonl` → find entries where `indexed == false`
2. Add files to LEANN index
3. Update entry with `indexed: true`
