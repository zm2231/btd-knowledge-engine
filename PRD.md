# BTD Knowledge Engine — Personalized Learning from Aggregated Content

## Vision

Turn the firehose of YouTube/podcast/article content from top creators into **personalized, actionable learning tracks** for each individual user. Not another playlist curator — a system that knows *where you are*, *where you want to go*, and *what to do next*.

The scarce resource isn't the corpus (information is free). It's the **workflow that makes it personal**: interview → gap assessment → experiment design → daily surfacing → tracking → feedback loop.

## Architecture (The Connective Tissue)

Each stage's output is the next stage's input. Remove any piece and it collapses.

```
┌─────────────────────────────────────────────────────────────┐
│                    CONTENT LAYER                             │
│                                                              │
│  YouTube Transcripts ─┐                                      │
│  Podcast Transcripts ──┼─→ raw/ ──→ LEANN Index ──→ Wiki    │
│  Articles/Papers ─────┘     │         (semantic)     (compiled│
│                              │                        by LLM) │
│                              ▼                               │
│                     Concept Extraction                       │
│                     Topic Graphs                             │
│                     Creator Attribution                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  PERSONALIZATION LAYER                        │
│                                                              │
│  1. INTERVIEW (Intake Assessment)                            │
│     - What are your goals? (career, skill, understanding)    │
│     - What do you already know? (self-assessment + probing)  │
│     - What's your context? (role, industry, time available)  │
│     - Learning style preferences                             │
│     → Output: User Profile + Initial Gap Assessment          │
│                                                              │
│  2. GAP ANALYSIS                                             │
│     Corpus + Goal → Relevant Questions                       │
│     Questions + User Answers → Gap Assessment                │
│     Gap + Corpus → Personalized Experiments                  │
│                                                              │
│  3. EXPERIMENT DESIGN                                        │
│     - Specific content to consume (with timestamps)          │
│     - Exercises/reflections to do after                      │
│     - Observable outcomes to track                           │
│     - Timeboxed (falsifiable — did it work or not?)          │
│                                                              │
│  4. DAILY SURFACE                                            │
│     - Today's content/exercise                               │
│     - Quick check-in on yesterday's experiment               │
│     - One key concept to reinforce                           │
│     → Without this: forgotten within a week                  │
│                                                              │
│  5. TRACKING + FEEDBACK                                      │
│     - Did the experiment produce the intended outcome?       │
│     - Update gap assessment                                  │
│     - Adjust next experiment                                 │
│     - Compound into personal dataset over time               │
│     → Without this: no learning, just activity               │
└─────────────────────────────────────────────────────────────┘
```

## Failure Modes (Design Constraints)

| If missing... | Result |
|---|---|
| Corpus too shallow | Generic answers |
| Goal too vague | Unfocused protocol |
| No interview | False personalization |
| No experiment frame | Unfalsifiable habits |
| No daily surface | Forgotten within a week |
| No tracking | No learning, just activity |

## Technical Implementation

### Phase 1: Content Ingestion Pipeline

1. **YouTube Transcript Extraction**
   - Use `yt-dlp` for transcript downloads (supports auto-generated + manual captions)
   - Batch process channel playlists from curated creator lists
   - Store as markdown in `raw/youtube/{creator}/{video-slug}.md`
   - Frontmatter: title, creator, date, URL, duration, topics (auto-tagged)

2. **LEANN Indexing**
   - Create `btd-content` LEANN index from raw transcripts
   - Chunk by ~500-token segments with overlap
   - Metadata: creator, timestamp range, topic tags
   - Enable semantic search across all content

3. **Wiki Compilation (LLM-driven)**
   - Extract concepts from corpus → `wiki/concepts/{concept}.md`
   - Create topic graphs → `wiki/topics/{topic}.md`
   - Creator profiles with teaching style notes → `wiki/creators/{creator}.md`
   - Cross-reference everything with backlinks
   - Auto-maintain `wiki/INDEX.md` with summaries

### Phase 2: Interview & Personalization Engine

1. **Intake Interview Protocol**
   - Structured conversation flow (stored as template)
   - Adaptive questioning based on responses
   - Output: `local/profile.yaml` + `local/gap-assessment.md`

2. **Learning Track Generation**
   - Match gaps to corpus content
   - Sequence content for progressive learning
   - Generate experiment cards: what to watch, what to try, what to measure
   - Store as `local/tracks/{track-name}/`

3. **Daily Surface Protocol**
   - Generate daily digest from active tracks
   - Include: content link, key concept, reflection prompt
   - Quick check-in questions for previous day

### Phase 3: Tracking & Feedback Loop

1. **Progress Tracking**
   - Log experiment outcomes
   - Track concept mastery (self-reported + quiz-based)
   - Adjust difficulty/pace

2. **Wiki Enhancement Loop**
   - User questions that stump the system → corpus gaps to fill
   - Popular paths → optimize content sequencing
   - A/B test different content for same concept

## Content Domains (Initial)

### Systems Thinking
- Donella Meadows, Peter Senge, Russell Ackoff
- YouTube channels: Systems Innovation, Cabrera Research Lab
- Key concepts: feedback loops, leverage points, mental models, stocks & flows

### AI/ML Tutoring
- 3Blue1Brown, Andrej Karpathy, Yannic Kilcher, StatQuest
- Papers with Code, distill.pub archives
- Key concepts: transformers, attention, training dynamics, agents

### Business/Strategy
- Relevant to BTD consulting context
- First principles thinking, decision frameworks
- Domain-specific content per client need

## Tech Stack

- **Storage**: Local filesystem (markdown + images)
- **Search**: LEANN CLI (semantic indexing)
- **LLM**: Claude via Pi for wiki compilation + Q&A
- **Frontend**: Obsidian (view wiki, tracks, visualizations)
- **Ingestion**: yt-dlp + custom scripts
- **Serving**: Could evolve into web app for client delivery

## What Makes This Different

Most "AI learning" tools are just:
- Smart playlists (no personalization depth)
- Chatbots over docs (no experiment/tracking loop)
- Course platforms (static, not adaptive)

This is different because:
1. **Interview-first**: Understands YOUR starting point
2. **Experiment-framed**: Every learning action is falsifiable
3. **Corpus-deep**: Semantic search across ALL content, not just metadata
4. **Feedback-looped**: System gets smarter about YOU over time
5. **Wiki-compiled**: Knowledge compounds, doesn't just stream by

## Open Questions

- [ ] How to handle video content where visuals matter (diagrams, code walkthroughs)?
- [ ] Optimal chunk size for LEANN indexing of transcripts?
- [ ] Interview protocol: how many questions before it feels like a burden vs. enough for real personalization?
- [ ] Daily surface: push (email/notification) vs. pull (user opens app)?
- [ ] Multi-user: separate LEANN indexes per user, or shared corpus + user-specific overlay?
- [ ] Revenue model: per-user subscription? Per-track? Enterprise licensing for BTD clients?
