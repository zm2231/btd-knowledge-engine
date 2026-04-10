---
name: wiki-compiler
description: >
  Compile raw content into the wiki knowledge base. Use this skill whenever new content
  has been ingested, when someone asks to "update the wiki", "compile new sources",
  "what's in the knowledge base", or when compile-wiki.js shows pending sources.
  Also use after any batch ingestion, after adding a new creator, or when the wiki
  lint shows gaps. This is maintenance work — do it proactively, not just when asked.
---

# Wiki Compiler

You maintain a persistent, compounding knowledge base. Raw content goes in, structured
wiki pages come out. The wiki sits between raw sources and user queries; it means you
don't re-derive knowledge from scratch every time someone asks a question.

You write the wiki. The user reads it. They rarely touch it directly.

## When to Compile

- After any `batch-ingest`, `ingest-*`, or `ingest-repo` run
- When `node scripts/compile-wiki.js status` shows pending sources
- When `node scripts/compile-wiki.js lint` shows gaps
- When a user asks about the knowledge base
- Proactively, if you notice raw sources that aren't reflected in the wiki

## The Process

### 1. Check what needs compiling

```bash
node scripts/compile-wiki.js status --instance btd
node scripts/compile-wiki.js lint --instance btd
```

### 2. Read the raw source

Read the full file. Not a summary, not the first 50 lines. The whole thing. You need
to understand what this source actually says before you can compile it.

### 3. Write/update wiki pages

For each source, touch every relevant page:

**`wiki/sources/{source-slug}.md`** — Summary of this specific source. What it covers,
key claims, notable quotes, what makes it different from other sources on the same topic.

**`wiki/concepts/{concept}.md`** — One page per distinct concept or framework. Not a
summary of the source; a synthesis of the concept ACROSS sources. If Karpathy and Sinek
both talk about something (unlikely, but the pattern matters), the concept page reflects
both perspectives.

**`wiki/topics/{topic}.md`** — Broader categories that group concepts. "How LLMs Work"
is a topic that contains concepts like tokenization, attention, training.

**`wiki/creators/{creator}.md`** — What this creator contributes across ALL their content.
Not per-source; per-creator. Updated every time you compile a new source from them.

### 4. Cross-reference

Use `[[wiki-links]]` between pages. Every concept page should link to related concepts.
Every creator page should link to the concepts they contribute to. The connections ARE
the value; isolated pages are just summaries.

### 5. Update index and log

```bash
node scripts/compile-wiki.js index --instance btd
```

Then append to `wiki/log.md`:
```markdown
## [YYYY-MM-DD] {action} — {source title}

**Sources processed:** {list}
**Pages created:** {list}
**Pages updated:** {list}
**Cross-references added:** {list}
```

## Page Format

Every wiki page has this structure:

```markdown
---
title: Page Title
source_count: N
last_updated: YYYY-MM-DD
sources:
  - creator/source-slug
  - creator/other-source
---

# Page Title

{2-3 sentence summary of the concept/creator/topic}

## {Main sections — varies by page type}

## When to Surface
{For concept pages: which constraint profile fields trigger this content}

## Related Concepts
- [[other-concept]] — {one line on the connection}
```

## Writing Rules

**Synthesize, don't summarize.** A source summary is "Karpathy said X." A wiki concept
page is "Tokenization works like this, as demonstrated in Karpathy's video and implemented
in his minbpe repo." The wiki is smarter than any single source.

**Connect to the intake system.** Every concept page should have a "When to Surface"
section that maps to constraint profile fields. "Surface this for users whose
`calibrated_level` is beginner" or "Surface when `accountability_pattern` shows
dropping things." This is what makes the wiki useful for personalization, not just
reference.

**Flag contradictions.** If two sources disagree, say so explicitly. "Karpathy recommends
X; Mollick's research suggests Y in non-technical contexts." Don't resolve contradictions
by picking a winner; present both and note when each applies.

**Update, don't duplicate.** If a concept page already exists, UPDATE it with the new
source's perspective. Don't create a second page. The whole point is accumulation.

**Keep pages focused.** One concept per page. If a page is covering two distinct ideas,
split it. Better to have 20 focused pages than 5 sprawling ones.

## Lint Checks

Run periodically or when asked:

```bash
node scripts/compile-wiki.js lint --instance btd
```

What to look for:
- **Orphan pages**: no inbound links. Either connect them or question if they're needed.
- **Broken links**: `[[concept]]` that doesn't have a page. Create the page or fix the link.
- **Uncompiled sources**: raw content that isn't reflected in any wiki page. Compile it.
- **Stale pages**: source_count hasn't changed but new sources exist for that topic.
- **Missing "When to Surface"**: concept pages without profile mapping are less useful.

## What NOT to Do

- Don't create pages for trivial content (a 30-second video clip doesn't need a concept page)
- Don't write wiki pages that are just the source transcript reformatted
- Don't skip cross-references to save time; the links are the most valuable part
- Don't forget to update the creator page when compiling their content
- Don't write generic concept pages ("AI is important"); be specific about what the corpus actually says
