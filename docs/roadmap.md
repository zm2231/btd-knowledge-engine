# BTD Knowledge Engine — Roadmap

*Updated April 10, 2026 (end of day)*

## What's Working

- **YouTube pipeline**: register → scan (yt-dlp) → catalog → batch-ingest (youtube-transcript-plus) → index → search. 3 creators, 1,137 videos cataloged, 35 ingested.
- **Twitter pipeline**: register → scan (bird CLI, JSON extraction fixed) → catalog → ingest with thread grouping → index. Karpathy: 10 cataloged, 8 ingested as markdown.
- **Podcast pipeline**: register → scan (podcast-dl, paginated) → catalog → download mp3 → whisper transcription (IQ endpoint) → markdown → index. Lex Fridman: 496 cataloged, 1 transcribed (110KB).
- **Substack pipeline**: VividEagle building now on `tech/substack-ingestion` branch using `sbstck-dl`. Mollick's feed ready.
- **LEANN index**: `btd-btd`, 8,164 chunks across 46 docs from 4 source types. Retrieval quality confirmed across all types.
- **Template system**: `init.js` creates fresh instances, all scripts instance-aware with `--instance` flag. Clean for anyone to clone and use.
- **SKILL.md intake interview**: 5 phases, constraint profile YAML output, anti-patterns, corpus integration logic.
- **RE-ENTRY.md**: Full re-entry protocol for returning users (load profile → check-in → update → next experiment).
- **Experiment card template**: Frontmatter with structured fields, daily check-ins, reflection section.
- **5 creators registered**: Karpathy (YT+Twitter), 3Blue1Brown (YT), Nate Jones (YT), Mollick (Substack, pending), Lex Fridman (YT+Podcast). 1,643 total items cataloged.

## What's Not Built Yet

### Ingestion — Remaining

| Gap | Status | Blocks |
|---|---|---|
| Substack ingestion | VividEagle building (`tech/substack-ingestion`) | Mollick content in corpus |
| Cron/scheduled scan+index | Cron plan written, not deployed | Auto-refresh of catalogs |
| Auto-ingest on scan | Not started (intentional — selective ingestion is human decision) | Nothing |

### Product — The Actual Output

| Gap | Priority | What it is | Blocks |
|---|---|---|---|
| **Synthesis pipeline** | P0 | constraint profile → LEANN query → LLM → structured output | The actual product. Nothing works without this. |
| **Experiment outcome YAML** | P1 | Structured fields at end of experiment card (outcome, hypothesis_validated, profile_updates, next_seed) | Auto-generating experiment #2 from #1 |
| **Profile save/load scripts** | P1 | `save-profile.js` to write YAML to `users/{id}/profile.md`, load on re-entry | Tracking across sessions, re-entry flow |
| **Check-in flow** | P1 | Structured follow-up: load experiment → ask what happened → update profile → generate next | Experiment iteration loop |
| **Wiki compilation** | P2 | LLM extracts concepts/patterns from raw content into `wiki/` | Pre-compiled knowledge layer (v2, not blocking v1) |

### Infrastructure

| Gap | Priority | Notes |
|---|---|---|
| Decision tree rewrite | P2 | `question-bank/decision-tree.json` is technical-only (15 states for software builders). SKILL.md is broader. Either rewrite tree for non-technical audience or deprecate in favor of SKILL.md as sole interview def. |
| Knowledge CLI / alias | P3 | `btd scan karpathy` instead of `node scripts/scan.js karpathy`. Nice-to-have, not blocking. |
| Error recovery | P3 | batch-ingest retries, partial failure handling |

## What Max Needs to Do (Not Blocked by Tech)

Everything Max needs is ready. The SKILL.md works as a Claude skill right now.

1. **Run 3 people through intake** using SKILL.md directly (ignore decision-tree.json)
2. **Save 3 constraint profile YAMLs** to `btd/users/{person}/profile.md` (create dirs manually)
3. **Write 3 sample outputs by hand** — same project idea, 3 different profiles. This is the gold standard for what the synthesis pipeline should produce.
4. After first experiments: **manual check-ins**, write down what you'd need to know to generate experiment #2

## Prior Art / What Exists Already

| Project | What they do well | What they don't do |
|---|---|---|
| **Readwise / Reader** | Content aggregation, highlights, spaced repetition | No personalization layer. No interview. Everyone gets the same content. |
| **Mem.ai / Notion AI** | Knowledge base + AI search | No interview, no experiment generation, no "what should I do with this" layer |
| **Coursera / Khan Academy** | Assessment → level placement → content routing | Course-scoped, not corpus-scoped. Can't pull from arbitrary creators. |
| **Khanmigo (Socratic tutoring)** | Interview-style interaction | Only for known curricula. Our interview is open-ended. |
| **Obsidian + Dataview** | Manual curation, powerful queries | No interview, no synthesis. Power user version of what we're automating. |
| **Snipd / Podwise** | Podcast → transcript → highlights | Good ingestion, no personalization or action output. |
| **Shortform / Blinkist** | Book summaries + action items | Close to our synthesis output format, but zero personalization. |

**Our difference**: the interview IS the product. Everyone else starts with content and tries to make it useful. We start with the person and figure out what content matters for them specifically.

## Automation / Cron Plan

```
# Daily: scan for new content from all active creators
0 6 * * * cd /path/to/btd-knowledge-engine && node scripts/scan.js --all --instance btd

# Daily: re-index if new content was ingested
0 7 * * * cd /path/to/btd-knowledge-engine && node scripts/index.js --instance btd

# Weekly: status report
0 9 * * 1 cd /path/to/btd-knowledge-engine && node scripts/status.js --instance btd
```

Auto-ingest is intentionally NOT cron'd. Catalog everything, but pulling content down is a human decision.

## Build Order

### Done ✅
- [x] Repo, README, template, AGENTS.md
- [x] Creator registry + catalog scanning (YouTube, Twitter, Podcasts)
- [x] YouTube ingestion (youtube-transcript-plus, instant captions)
- [x] Twitter ingestion (bird CLI, thread grouping) — VividEagle
- [x] Podcast ingestion (podcast-dl + IQ whisper transcription)
- [x] LEANN index across all source types (8,164 chunks, 46 docs)
- [x] SKILL.md intake interview (5 phases, constraint profile output)
- [x] RE-ENTRY.md (returning user protocol)
- [x] Template system (init.js, instance-aware scripts)
- [x] Roadmap, blueprint visualization, architecture docs
- [x] Retrieval quality confirmed across sources

### This Week
- [ ] VividEagle: Substack ingestion (sbstck-dl, Mollick)
- [ ] Structured experiment outcome YAML block
- [ ] Profile save/load scripts
- [ ] Max: 3 intake interviews → 3 constraint profiles
- [ ] Max: 3 handwritten sample outputs

### Next Week
- [ ] Test LEANN retrieval with real constraint profiles
- [ ] Reverse-engineer output templates from Max's samples
- [ ] Cron deployment (scan + index)
- [ ] Check-in flow (load experiment → follow-up → profile update)

### Week After
- [ ] Synthesis pipeline (constraint profile × corpus → structured output)
- [ ] Test automated vs handwritten output
- [ ] Fix questions → routing → templates (in that order if mismatch)
- [ ] Profile update flow (experiment outcome → profile revision)

## From Build Lab Session (April 10, 2026)

Key ideas surfaced during the group build lab that should shape next steps:

### Attribution / Visible Intelligence (Max, high priority)
The user needs to see WHERE insights come from. Not just "here's what to do" but "this came from Karpathy's tokenization lecture" or "I'm asking this because of {framework} from {creator}." LEANN already returns source paths with every result; the gap is surfacing that in the output templates. This is a presentation layer change, not an index change.

Concrete implementation:
- Search results already include `Source: btd/raw/youtube/andrej-karpathy/...`
- Experiment cards should cite specific creators and content
- Synthesis output should say "Based on how Karpathy approaches X" not just "here's what to do"
- Consider a "sources used" section in every generated output

### Voice Agent (Max's test project, not this repo)
Max ran the intake skill against a voice agent build as his test project. The voice agent itself (cognitive fingerprint extraction via live problem-solving) is a separate product idea, not a feature of this repo. Noted here because the intake skill successfully reframed his build during the session.

### Repo/Codebase Ingestion (in progress)
VividEagle building `ingest-repo.js`. The value: search across Karpathy's TALKS about tokenization AND his `minbpe` implementation code in the same query. Same index, different source types.

### Community Getting Started Guide (high priority)
Group wants this usable by non-technical members using Claude Code. Need:
- [ ] `docs/getting-started.md` — assumes Claude Code installed, walks through first creator → first search in 5 minutes
- [ ] Skills packaged so Claude Code users can just load them (SKILL.md, RE-ENTRY.md already work as skills)
- [ ] Skill creator skill — a skill that helps users create their own skills from the patterns in this repo
- [ ] Skills shared in community Slack/School

### Attribution Layer (high priority)
Every generated output must trace back to sources. Not "here's what to do" but "this came from Karpathy's tokenization lecture, specifically this segment." Implementation:
- [ ] Search results already include `Source:` paths — parse creator + content title from path
- [ ] Experiment cards cite specific creators and timestamps
- [ ] Synthesis output: "Based on how {creator} approaches {topic} in {content title}" with links
- [ ] "Sources used" section in every generated output
- [ ] Session search already does this partially — formalize it in output templates

### LEANN Subindexes
Right now everything goes in one index (`btd-btd`). Subindexes would let you:
- Search only YouTube content, only tweets, only repos
- Search only one creator's content
- Search only content tagged for a specific topic
- Combine subindexes for targeted queries (e.g. "Karpathy YouTube + code repos only")

Implementation options:
- [ ] Multiple LEANN indexes per instance (e.g. `btd-youtube`, `btd-twitter`, `btd-repos`)
- [ ] Or: metadata filtering on the single index (LEANN supports this via passage metadata)
- [ ] `session.js search` routes to appropriate subindex based on profile + query context

### Continuous Usage / Logging
Track how the system is actually being used so it improves:
- [ ] Every search query logged with user, query, results returned, which results were useful
- [ ] Every session logged (intake, checkin, experiment generation) with user + timestamp
- [ ] Profile change history (already built in `profile.js`)
- [ ] Experiment outcome tracking (structured YAML already in template)
- [ ] Usage patterns surface which content gets retrieved most → informs what to ingest next
- [ ] Weekly digest: "You searched X times, generated Y experiments, Z check-ins"

### Tools Mentioned in Session
- **Bird CLI** for Twitter scraping (already integrated)
- **LEANN** — group was impressed by the semantic search demo. Multiple people installing.
- **Impeccable.style** — design audit CLI + skills (for future UI work)
- **FireCrawl** — Max adding to his Last 30 Days skill for web scraping
