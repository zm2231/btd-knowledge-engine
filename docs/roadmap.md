# BTD Knowledge Engine — Roadmap

*Updated April 10, 2026 (evening)*

## What's Shipped

### Ingestion (all 6 source types working)
- [x] YouTube: yt-dlp scan → youtube-transcript-plus captions → markdown
- [x] Twitter: bird CLI → thread grouping → markdown
- [x] Podcasts: podcast-dl → lightning-whisper-mlx transcription → markdown
- [x] Substack: sbstck-dl / RSS fallback → markdown articles
- [x] Repos: clone + LEANN direct indexing (code + docs in same search)
- [x] Manual: drop .md files with frontmatter

### Search
- [x] LEANN index `btd-btd`: ~8,000+ chunks across 50+ docs from all source types
- [x] Cross-source retrieval confirmed: same query returns YouTube, Twitter, podcast, code results
- [x] Source attribution in every result (full file path → creator + content title)

### Personalization
- [x] SKILL.md: 5-phase non-sycophantic intake interview → constraint profile YAML
- [x] RE-ENTRY.md: returning user check-in → profile update → next experiment
- [x] profile.js: save, load, update, list, summary, history (with change tracking)
- [x] Experiment card template with structured outcome YAML block
- [x] CLAUDE.md: Claude Code reads this on session start, auto-routes to correct skill based on profile state

### Infrastructure
- [x] Unified ingest log schema across all scripts (source_id, platform, file, status)
- [x] Shared ingest-log.js helper (read, write, append, normalize)
- [x] status.js: clean dashboard, no more undefined
- [x] add-creator.js: supports all platforms (--youtube, --twitter, --podcast, --substack), --scan delegates to scan.js
- [x] batch-ingest.js: explicitly YouTube-only
- [x] init.js: creates full instance structure including raw/twitter/
- [x] Template system: init.js → fresh instance, all scripts instance-aware
- [x] Profile parsing: js-yaml (not regex), all nested fields accessible
- [x] Skill descriptions: auto-trigger based on user message + profile state
- [x] Getting started guide, AGENTS.md, docs

### Corpus (btd instance)
- 6 creators: Karpathy (YT+Twitter), 3Blue1Brown (YT), Nate Jones (YT), Mollick (Substack), Lex Fridman (Podcast), minbpe (Repo)
- 1,674 items cataloged, 50+ ingested
- 3 group session transcripts

## What's Next

### Max (not blocked by tech)
1. Run 3 real people through intake (use Claude Code in the repo, SKILL.md auto-triggers)
2. Save 3 constraint profiles to `local/`
3. Write 3 sample outputs by hand (gold standard for synthesis)
4. After first experiments: manual check-ins, capture what's needed for experiment #2

### More Corpus (could run now)
The corpus is AI/coding-heavy. For the product to serve non-technical builders, we need broader content:

**Creators to add:**
- Tim Ferriss (podcast) — frameworks for learning, decision-making, productivity
- Simon Sinek (YouTube) — leadership, "start with why", non-technical thinking frameworks
- Sahil Bloom (Twitter/Substack) — mental models, business, accessible frameworks
- James Clear (Substack) — habits, systems thinking, accessible to everyone
- Ali Abdaal (YouTube) — productivity, learning science, accessible to non-technical
- Lenny Rachitsky (podcast/Substack) — product management, growth, non-engineering perspective
- Patrick Collison (Twitter) — building companies, hiring, strategy
- Paul Graham (essays) — could ingest as articles, foundational startup/building thinking

**Repos to index:**
- `karpathy/nanoGPT` — pairs with his YouTube "Let's build GPT" video
- `karpathy/llm.c` — C implementation, pairs with his LLM deep dive
- `openai/tiktoken` — tokenization reference, pairs with minbpe
- Any repos from BTD group members' own projects

### Attribution Layer
Claude already cites sources per CLAUDE.md rules. Formalize in experiment card template:
- [ ] "Sources used" section with creator, content title, and why it was selected
- [ ] Link back to source URL when available
- [ ] For repos: reference specific files/functions

### Cron / Scheduled Ingestion
```
0 6 * * * node scripts/scan.js --all --instance btd       # daily catalog refresh
0 7 * * * node scripts/index.js --instance btd             # daily re-index
```
Not deployed yet. Deploy after corpus is more complete.

### LEANN Subindexes
Single index works for now. Consider splitting when corpus grows:
- Per-creator indexes for targeted search
- Per-platform indexes (search only code, only podcasts)
- LEANN metadata filtering may handle this without multiple indexes

### Continuous Usage Logging
- [ ] Log every search query (user, query, results, which were useful)
- [ ] Log every session (intake, checkin, experiment generation)
- [ ] Profile change history already tracked via profile.js
- [ ] Surface patterns: which content gets used most → informs ingestion priorities

### Decision Tree
`question-bank/decision-tree.json` is technical-builder-only (15 states for software architecture). SKILL.md is broader and works for all user types. The decision tree should either be rewritten for a general audience or deprecated entirely. SKILL.md as the sole interview definition is the current recommendation.

### Future: Claude Agents SDK
session.js is currently a utility script, not the product runtime. Claude Code IS the runtime (reads CLAUDE.md, runs skills, calls scripts). Future integration with Claude Agents SDK would enable:
- Standalone CLI that runs interviews without Claude Code
- Web UI with real-time interview + corpus search
- API endpoint for third-party integrations
- Multi-turn autonomous flows (intake → experiment → check-in loop)

Not the next step. The current Claude Code native flow needs to be tested with real users first.

### Future: Web UI
Lightweight frontend showing:
- User profiles and experiment history
- Corpus browser with search
- Experiment cards with source attribution
- Check-in interface

Depends on the Claude Code flow proving out with real users first.

## Prior Art

| Project | What they do | What we do differently |
|---|---|---|
| Readwise / Reader | Content aggregation + highlights | No personalization. Everyone gets the same content. |
| Mem.ai / Notion AI | Knowledge base + AI search | No interview, no experiments, no "what should I do with this" |
| Coursera / Khan Academy | Assessment → level → content | Course-scoped. Can't pull from arbitrary creators. |
| Obsidian + Dataview | Manual curation, powerful queries | No interview, no synthesis. Power user version of what we automate. |
| Snipd / Podwise | Podcast → transcript → highlights | No personalization or action output. |
| Shortform / Blinkist | Summaries + action items | Close to our output format, but zero personalization. |

**Our moat**: the interview. Everyone else starts with content. We start with the person.
