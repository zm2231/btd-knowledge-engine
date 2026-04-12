---
name: content-curator
description: >
  Decide what content to ingest into the BTD Knowledge Engine. Use this skill when someone
  asks "what should we add," "who else should be in the corpus," "what's missing," "we need
  more on [topic]," "find creators for [domain]," or when evaluating whether specific content
  is worth ingesting. Also use after reviewing user profiles to identify corpus gaps; if intake
  interviews reveal topics the corpus can't serve, this skill figures out what to add. Triggers
  on any content strategy, corpus planning, or "what to ingest next" question.
---

# Content Curator

You decide what goes into the corpus and what doesn't. Ingestion is expensive (time, tokens, index size). Every piece of content should earn its place. Your job is to maintain a corpus that serves the actual people using this system, not to maximize volume.

## When to Curate

- Someone asks what to add next
- A new user's intake reveals a topic the corpus can't serve
- A search query returns low scores (< 0.5) across the board
- After reviewing user profiles and finding common gaps
- When evaluating a specific creator or source for inclusion

## The Decision Framework

### Does this creator/source pass the bar?

Ask these questions in order. If any answer is "no," don't ingest.

**1. Does it serve an actual user profile need?**
Map to constraint profile fields. "This creator's content surfaces when `calibrated_level` is beginner and `domain` is productivity" is a reason. "This creator is popular" is not.

**2. Is it differentiated from what's already in the corpus?**
If Cal Newport already covers deep work and focus, adding another productivity YouTuber who says the same things wastes index space. A creator earns inclusion by covering something nobody else covers, or covering the same thing from a meaningfully different angle.

**3. Is the content high enough quality to cite?**
The system attributes recommendations: "Based on how Newport approaches deep work..." If you wouldn't cite this creator by name in a recommendation, they don't belong.

**4. Is the content accessible as text?**
YouTube with captions, articles, tweets, podcasts we can transcribe. A creator whose best content is in books we can't ingest is less useful than one whose content is freely available online.

### Which specific pieces to ingest?

Never bulk-ingest a creator's entire catalog. Most creators have a core body of work (10-20 pieces) and a long tail of repetitive or off-topic content.

**Pick the canonical pieces:**
- The video/article that best represents their core framework
- The piece that's most different from what's already in the corpus
- The piece that serves the most user profiles

**Skip:**
- Reaction videos, Q&A compilations, "day in my life" content
- Content that repeats the same ideas from their other pieces
- Content outside the scope of why they were added (Huberman on supplements when we added him for focus/learning)
- Shorts, clips, and promotional content

### Catalog size targets by creator type

| Creator type | Target pieces | Why |
|---|---|---|
| Core framework creator (Newport, Clear) | 8-12 | Need enough to capture the full framework |
| Technical depth creator (Karpathy, 3B1B) | 10-15 + repos | Technical content is dense; each piece covers different ground |
| Interview host (Lex, Lenny) | 5-8 episodes | Only the episodes with guests relevant to our users |
| Essay writer (PG, Mollick) | 8-15 | Essays are short; need volume for breadth |
| Twitter/thread creator | All threads | Threads are small; the value is in the collection |

## How to Evaluate Corpus Gaps

### Method 1: Search score audit
Run queries for each major topic the system should serve. If scores are below 0.5, that topic needs more content.

```bash
node scripts/search.js "your query" --top-k 3
```

Score thresholds:
- 0.7+ = well covered
- 0.5-0.7 = adequate, could be stronger
- < 0.5 = gap; find content for this

### Method 2: Profile gap analysis
Review all user profiles. Extract `domain`, `key_gap`, `blind_spots`, and `goal_type`. Any theme that appears in multiple profiles but isn't well-represented in the corpus is a priority gap.

```bash
node scripts/profile.js list --instance btd   # list shared profiles (operator)
node scripts/profile.js load                   # load current user's profile from local/
```

### Method 3: Wiki coverage check
The wiki compiler tracks which concepts have pages. Any concept that gets referenced but has no page, or any page with source_count of 1, might need more source material.

```bash
node scripts/compile-wiki.js lint --instance btd
```

Note: Use `--local` instead of `--instance btd` to check the user's personal wiki. Personal sources (`local/raw/`) can also have corpus gaps worth filling.

## Creator Discovery

When looking for new creators to fill a gap:

**1. Start with who the existing creators reference.**
Karpathy cites specific papers and people. Mollick references researchers. Follow the graph.

**2. Check for accessible content.**
A brilliant researcher with no YouTube, no blog, and no podcast is hard to ingest. Prioritize creators who publish freely online in formats we can process.

**3. Verify depth, not just popularity.**
A creator with 50K subscribers who goes deep on one topic is more valuable than one with 5M subscribers who covers everything superficially.

**4. Test before committing.**
Register, scan, ingest 2-3 pieces, search. If the search results are useful and differentiated, continue. If they overlap with existing content, stop.

## Platform-Specific Ingestion Notes

**YouTube:** Use `--top` flag with `batch-ingest.js` for most-viewed as a starting point, but review the titles. Most-viewed ≠ most useful (Lex's most viewed is a CIA spy interview, not AI). For targeted ingestion, find specific video IDs from the catalog and use direct transcript fetch.

**Substack/Articles:** Usually high quality per-piece. Safe to ingest more aggressively than YouTube since articles are intentionally written, not transcribed speech.

**Twitter:** Ingest all threads from a registered creator. The value is in the collection; individual tweets are too short to be useful alone.

**Podcasts:** Expensive to ingest (requires audio download + transcription). Only ingest episodes where the guest/topic directly serves user profiles. Long episodes (2+ hours) produce massive transcripts; consider whether the content density justifies the index bloat.

**Repos:** Only ingest repos that are pedagogically useful. A 50,000-file production codebase is noise. Karpathy's repos work because they're intentionally small and educational.

## Output

When recommending what to ingest, structure it as:

```
## Recommended additions

### [Creator Name] — [Platform]
**Serves:** [which profile fields / user types]
**Differentiated because:** [what this adds that the corpus doesn't have]
**Suggested pieces:** [specific titles or selection criteria]
**Pieces to skip:** [what to avoid and why]
```

When rejecting a suggestion:

```
**Skip [Creator/Source]**
Reason: [overlaps with X / doesn't serve current users / content quality too low / not accessible]
```
