# Raw Content

All ingested source material lives here. Each file is self-describing via frontmatter.
No separate database. The filesystem is the database. LEANN is the search layer.

## Structure

```
raw/
  youtube/{creator-slug}/          # YouTube video transcripts
    {date}-{video-slug}.md
  podcasts/{show-slug}/            # Podcast transcripts  
    {date}-{episode-slug}.md
  articles/                        # Web-clipped articles
    {date}-{slug}.md
  transcripts/                     # Meeting/session transcripts
    {date}-{slug}.md
  books/                           # Book notes/excerpts
    {slug}/
```

## Frontmatter Standard

Every raw file MUST have this frontmatter:

```yaml
---
title: "Episode/Video Title"
source_type: youtube | podcast | article | transcript | book
creator: "Creator Name"
creator_slug: "creator-name"        # for filesystem grouping
date: 2026-04-10                    # original publish/record date
ingested: 2026-04-10                # when we added it
url: "https://..."                  # source URL if applicable
duration: "1h 23m"                  # for audio/video
status: raw | extracted | indexed   # processing stage
topics: [systems-thinking, ai, building]
meta_patterns: []                   # filled after extraction
---
```

## Processing Pipeline

1. **raw** — File ingested, frontmatter added
2. **extracted** — Meta patterns pulled out (the skeletal layer, not the surface content)
3. **indexed** — Chunked and added to LEANN index

## Tracking

No database needed. To see what's ingested:
- `find raw/ -name "*.md" | head` — all files
- `grep -r "creator:" raw/ --include="*.md" -h | sort -u` — all creators  
- `grep -r "status: raw" raw/ --include="*.md" -l` — unprocessed files
- LEANN search for semantic queries across everything
