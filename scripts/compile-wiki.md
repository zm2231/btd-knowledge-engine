# Wiki Compilation Protocol

## Purpose
This document describes how the LLM should compile and maintain the wiki from raw content. Run this as a prompt/protocol, not as a script.

## Step 1: Concept Extraction
For each document in `raw/`:
1. Read the full content
2. Extract key concepts (named ideas, frameworks, techniques, terms)
3. For each concept, check if `wiki/concepts/{concept-slug}.md` exists
   - If not: create it with definition, source attribution, related concepts
   - If yes: update with new source/perspective, add backlink

## Step 2: Topic Compilation
Group related concepts into topic articles:
1. Read all concept files
2. Identify natural clusters (systems thinking, machine learning, etc.)
3. Create/update `wiki/topics/{topic}.md` with:
   - Overview
   - Key concepts (linked)
   - Learning progression (beginner → advanced)
   - Best content per level (linked to raw sources)

## Step 3: Creator Profiles
For each creator in `raw/youtube/`:
1. Analyze their content style, depth, topics covered
2. Create `wiki/creators/{creator}.md` with:
   - Teaching style (visual, theoretical, practical, etc.)
   - Best content by topic
   - Who they're best for (beginner, intermediate, advanced)
   - Complementary creators (different perspective on same topic)

## Step 4: Index Maintenance
Update `wiki/INDEX.md` with:
- Total content count by source type
- All concepts (alphabetical, with one-line summaries)
- All topics (with concept counts)
- Recent additions
- Known gaps (topics with thin coverage)

## Step 5: Health Check (Linting)
Periodically run:
- [ ] Find concepts referenced but not defined
- [ ] Find orphan concepts (no topic linkage)
- [ ] Check for contradictory information across sources
- [ ] Identify stale content (>1 year, fast-moving field)
- [ ] Suggest new content to ingest (fill gaps)

## Frequency
- After each batch ingest: Steps 1-4
- Weekly: Step 5
- On demand: Any step for specific content
