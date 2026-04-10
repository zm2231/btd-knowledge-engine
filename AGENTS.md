# BTD Knowledge Engine

Personalized learning system. Curated content → semantic index → interview-based personalization → actionable experiments with source attribution.

## Repo Structure

```
scripts/                ← All tooling (instance-aware via --instance flag)
  session.js            ←   USER FLOW: intake, checkin, experiment, search, status
  profile.js            ←   Profile management: save, load, update, history
  add-creator.js        ←   Register creators with platforms
  scan.js               ←   Catalog published content (no download)
  batch-ingest.js       ←   YouTube batch download
  ingest-youtube.js     ←   Single YouTube video
  ingest-twitter.js     ←   Twitter thread ingestion
  ingest-podcast.js     ←   Podcast download + whisper transcription
  ingest-substack.js    ←   Substack article ingestion
  ingest-repo.js        ←   Codebase/repo ingestion (via LEANN)
  index.js              ←   Build/update LEANN semantic index
  status.js             ←   Content dashboard
  init.js               ←   Create new instance

skills/                 ← Skills for Claude Code
  btd-intake/
    SKILL.md            ←   Non-sycophantic intake interview (5 phases → constraint profile)
    RE-ENTRY.md         ←   Returning user check-in protocol

template/               ← Clean starting point for new instances
btd/                    ← BTD group's instance (run `node scripts/status.js` for live counts)
docs/                   ← Blueprint, roadmap, getting-started guide
question-bank/          ← Interview state machine (deprecated — use SKILL.md directly)
.leann/                 ← LEANN index data
```

## Key Principles

1. **Files, not databases.** Markdown + frontmatter is storage. LEANN is search.
2. **Instance-aware scripts.** All scripts take `--instance <name>` (defaults to `btd`).
3. **Interview IS the product.** The question bank + intake skill is the IP. Corpus is the raw material; constraint profile is the lens.
4. **Source attribution.** Every search result traces back to creator + content. User-facing output must cite sources.
5. **Skills for Claude Code.** SKILL.md and RE-ENTRY.md work directly as Claude Code skills. session.js assembles context for Claude.

## User Flows

### New user
```
session.js intake <user> → interview with SKILL.md → profile.js save → session.js experiment <user>
```

### Returning user
```
session.js checkin <user> → RE-ENTRY.md protocol → update profile → next experiment
```

### Adding content
```
add-creator.js → scan.js → batch-ingest/ingest-*.js → index.js
```

## For Claude Code Users

When a user asks to run the intake interview, use `skills/btd-intake/SKILL.md` as the skill. When they return, use `skills/btd-intake/RE-ENTRY.md`. The `session.js` script assembles all context (profile, experiments, corpus results) but you can also load the pieces directly.

Profiles live in `<instance>/users/<user-id>/profile.md`. Experiments in `<instance>/users/<user-id>/experiments/`. Always save profile changes via `profile.js` to maintain the change history log.

## Content Sources (all working)

| Source | Catalog | Ingest | Index |
|---|---|---|---|
| YouTube | `yt-dlp` | `youtube-transcript-plus` | LEANN |
| Twitter | `bird` CLI | Thread grouping → markdown | LEANN |
| Podcasts | `podcast-dl` | Download + whisper (MLX/local/API) | LEANN |
| Substack | `sbstck-dl` / RSS | Markdown articles | LEANN |
| Repos | `leann build` | Direct code indexing | LEANN |
| Manual | Drop `.md` files | Frontmatter required | LEANN |
