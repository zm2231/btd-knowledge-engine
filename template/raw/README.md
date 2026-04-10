# Raw Content

All ingested source material lives here. Each file is self-describing via frontmatter.
No separate database. The filesystem is the database. LEANN is the search layer.

## Structure

```
raw/
  youtube/{creator-slug}/          # YouTube video transcripts
    {date}-{video-slug}.md
  twitter/{creator-slug}/          # Tweet threads and standalone tweets
    {date}-{tweet-id}-{slug}.md
  podcasts/{creator-slug}/         # Podcast episode transcripts
    {date}-{episode-slug}.md
  articles/{creator-slug}/         # Web-clipped articles, Substack posts
    {date}-{slug}.md
  transcripts/                     # Meeting/session transcripts
    {date}-{slug}.md
```

## Frontmatter by Source

Scripts produce these fields automatically. You don't need to write frontmatter by hand unless you're dropping in files manually.

### YouTube
```yaml
---
title: "Video Title"
creator: "creator-slug"
source_type: youtube
date: 2026-04-10         # upload date (or 'undated' if unavailable)
ingested: 2026-04-10
url: "https://youtube.com/watch?v=..."
video_id: "abc123"
duration: "1:23:45"
transcript_method: "youtube-captions"
segment_count: 1500
---
```

### Twitter
```yaml
---
title: "creator thread — First 100 chars of tweet..."
creator: "creator-slug"
date: 2026-04-10T20:10:52.000Z
url: "https://x.com/handle/status/123"
platform: twitter
source_type: twitter
tweet_id: "123"
thread_id: "123"
is_thread: true          # or false for standalone
tweet_count: 3
ingested: 2026-04-10
---
```

### Podcasts
```yaml
---
title: "Episode Title"
creator: "creator-slug"
platform: podcast
date: "2026-04-10"
feed_url: "https://example.com/feed/"
episode_number: 42
segments: 4              # number of whisper chunks
---
```

### Manual files (articles, transcripts)
If you're dropping in files manually (Obsidian Web Clipper, meeting notes, etc.), add at minimum:

```yaml
---
title: "Title"
creator: "creator-slug"  # or "manual" for your own notes
source_type: article      # or transcript
date: 2026-04-10
---
```

## Processing Pipeline

1. **Ingested** — file downloaded, frontmatter added, logged in `registry/ingest-log.jsonl`
2. **Indexed** — chunked and added to LEANN semantic index via `scripts/index.js`

## Finding content

```bash
# All files
find raw/ -name "*.md" | wc -l

# By creator
ls raw/youtube/andrej-karpathy/

# By source type
find raw/twitter/ -name "*.md"

# Semantic search across everything
leann search btd-my-instance "how to think about building a project"
```
