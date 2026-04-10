# BTD Knowledge Engine

## What This Is
A personalized learning system that aggregates YouTube/podcast/article content from curated creators, indexes it with LEANN for semantic search, compiles it into an LLM-maintained wiki, and delivers personalized learning tracks based on individual intake interviews.

## Project Structure
```
raw/                    # Source content (transcripts, articles)
  youtube/{creator}/    # YouTube transcripts as .md with frontmatter
  articles/             # Web-clipped articles
  papers/               # Research papers
wiki/                   # LLM-compiled knowledge base
  concepts/             # Concept articles (one per concept)
  topics/               # Topic overviews
  creators/             # Creator profiles + teaching style notes
  INDEX.md              # Auto-maintained master index
users/                  # Per-user data
  {user-id}/
    profile.md          # From intake interview
    gap-assessment.md   # Current gaps
    tracks/             # Active learning tracks
    experiments/        # Experiment cards
    journal/            # Daily check-ins
templates/              # Protocol templates
scripts/                # Ingestion and maintenance scripts
```

## Key Principles
1. **Interview first** — never personalize without understanding the person
2. **Experiment-framed** — every learning action has a hypothesis and observable outcome
3. **Wiki is LLM-maintained** — humans rarely edit it directly
4. **Each stage feeds the next** — corpus→goal→questions→gap→experiments→action→feedback
5. **Compound, don't stream** — everything adds to the knowledge base

## LEANN Usage
- `btd-content` index: all raw content for semantic search
- Chunk transcripts at ~500 tokens with overlap
- Metadata must include: creator, source_type, topic_tags, date
- Search is primary retrieval mechanism for Q&A and track generation

## Content Domains
- Systems Thinking
- AI/ML
- Business Strategy
- (Expandable per BTD client needs)
