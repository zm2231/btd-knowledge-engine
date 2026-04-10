# BTD Knowledge Engine — Roadmap

*Updated April 10, 2026*

## What's Working

- **Ingestion pipeline**: register → scan → batch-ingest → index → search (YouTube fully mature)
- **4 creators**: Karpathy (17 YT), 3Blue1Brown (233 YT), Nate Jones (887 YT), Mollick (substack, pending)
- **1,137 items cataloged**, 37 ingested, 7,894 chunks in LEANN index `btd-btd`
- **SKILL.md intake interview**: 5 phases, constraint profile YAML output, anti-patterns, re-entry protocol, corpus integration logic
- **Experiment card template**: frontmatter + structured fields, daily check-ins, reflection
- **Template system**: `init.js` creates fresh instances, all scripts instance-aware
- **Retrieval quality confirmed**: different queries pull different creators/content types

## What's Not Built Yet

### Ingestion Gaps

| Gap | Status | Notes |
|---|---|---|
| Twitter ingestion | VividEagle building on `tech/twitter-ingestion` | `bird` CLI works, JSON parsing fix in progress, rate limited |
| Substack/article ingestion | Not started | Mollick RSS at `https://www.oneusefulthing.org/feed`, full HTML in feed |
| Podcast ingestion | **Building now** | `podcast-dl` installed, need ingest script + whisper transcription |
| Cron/scheduled ingestion | Not started | Auto-scan new content from registered creators on schedule |

### Product Gaps

| Gap | Blocks | Notes |
|---|---|---|
| Experiment outcome YAML | Auto-generating experiment #2 from #1 | Card has freeform reflection, needs structured fields for machine consumption |
| Synthesis pipeline | The actual product output | constraint profile → LEANN query → LLM structured output |
| Wiki compilation | Pre-compiled knowledge layer | No `wiki/` content exists; hybrid approach means this is v2 |
| Profile save script | Tracking across sessions | No `save-profile.js`; Max saves manually for now |
| Re-entry flow | **Returning users** | SKILL.md describes protocol but nothing loads previous profile or experiment state |
| Check-in flow | Experiment iteration | No structured way to do follow-ups and update profiles |

### Infrastructure

| Gap | Priority | Notes |
|---|---|---|
| Cron for `scan.js --all` | Medium | Daily or weekly catalog refresh for all active creators |
| Cron for `index.js` | Medium | Re-index after new ingestion |
| Auto-ingest on scan | Low | Option to auto-pull new content when scan finds it |
| Error recovery | Low | batch-ingest retries, partial failure handling |

## Decision Tree vs SKILL.md Mismatch

The `question-bank/decision-tree.json` has 15 states designed for technical builders (`q-data-shape`, `q-deployment-model`, `q-compliance`). The SKILL.md handles builders, learners, AND explorers including non-technical people. **Max should use SKILL.md directly for interviews, not the decision tree.** The decision tree needs a full rewrite to match the SKILL.md's broader audience, or we deprecate it in favor of SKILL.md as the sole interview definition.

## Existing Projects / Prior Art to Study

- **Readwise / Reader**: content aggregation + highlights + spaced repetition. They solve collection well but have zero personalization layer. No interview, no constraint profiles, everyone gets the same content.
- **Mem.ai / Notion AI**: knowledge base + AI search. Good at retrieval, but no interview, no experiment generation, no "what should I do with this" layer.
- **Coursera / Khan Academy adaptive learning**: closest to the personalized track idea. They have assessment → level placement → content routing. But it's course-scoped, not corpus-scoped. They can't pull from arbitrary creators.
- **Socratic method tutoring (Khanmigo, etc.)**: interview-style interaction but for known curricula. Our interview is open-ended; theirs is scoped to specific lessons.
- **Obsidian + Dataview + templates**: the "second brain" crowd. Manual curation, no interview, no synthesis. The power user version of what we're automating.
- **Podcast transcription services (Snipd, Podwise)**: podcast → transcript → highlights. Good ingestion patterns to study for our podcast pipeline.
- **Shortform / Blinkist**: book summaries + actionable takeaways. Their output format (key insights + action items) is close to what our synthesis layer should produce, but they have no personalization.

**What we're doing differently**: the interview IS the product. Everyone else starts with content and tries to make it useful. We start with the person and figure out what content matters for them specifically. The corpus is the raw material; the constraint profile is the lens.

## Automation / Cron Plan

```
# Daily: scan for new content from all active creators
0 6 * * * cd /path/to/btd-knowledge-engine && node scripts/scan.js --all --instance btd

# Daily: re-index if new content was ingested
0 7 * * * cd /path/to/btd-knowledge-engine && node scripts/index.js --instance btd

# Weekly: status report (email/slack/log)
0 9 * 1 * cd /path/to/btd-knowledge-engine && node scripts/status.js --instance btd
```

Auto-ingest is intentionally NOT cron'd. Catalog everything, but selective ingestion is a human decision. You browse the catalog and pull what's valuable.

## Critical Path (Next 2 Weeks)

### Week 1 (now)
- [x] Z: Pipeline working end-to-end
- [x] Z: README, template, scripts all usable
- [ ] Z: Podcast ingestion script
- [ ] Z: Re-entry flow (load profile + last experiment on return)
- [ ] Z: Structured experiment outcome YAML fields
- [ ] VividEagle: Twitter ingestion
- [ ] Max: Run 3 people through intake using SKILL.md
- [ ] Max: Save 3 constraint profile YAMLs to `btd/users/`

### Week 2
- [ ] Max: Write 3 sample outputs by hand (gold standard)
- [ ] Max: Manual check-ins with 3 test users after first experiment
- [ ] Z: Test LEANN retrieval with 3 real constraint profiles
- [ ] Z: Reverse-engineer output templates from Max's samples
- [ ] Z: Substack ingestion (Mollick)
- [ ] Z: Cron setup for daily scan + index

### Week 3
- [ ] Build synthesis pipeline (constraint profile → corpus query → structured output)
- [ ] Test automated output vs Max's handwritten samples
- [ ] If mismatch: fix questions → routing → templates (in that order)
- [ ] Profile update flow (experiment outcome → profile revision)
