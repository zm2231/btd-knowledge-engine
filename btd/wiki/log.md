# Wiki Compilation Log

## [2026-04-10] Initial compilation — 3 sources

**Sources processed:**
- simon-sinek/most-leaders-dont-even-know-the-game-theyre-in
- andrej-karpathy (cross-source: 15 YT + 8 Twitter + 3 repos)
- ali-abdaal (cross-source: 10 YT videos)

**Pages created:**
- creators/simon-sinek.md
- creators/andrej-karpathy.md
- creators/ali-abdaal.md
- concepts/infinite-game.md
- concepts/empathy-in-leadership.md
- concepts/building-from-scratch.md
- concepts/evidence-based-learning.md
- concepts/tokenization.md

**Cross-references established:**
- infinite-game ↔ empathy-in-leadership (Sinek's leadership model)
- building-from-scratch ↔ tokenization ↔ how-llms-work (Karpathy's teaching arc)
- evidence-based-learning ↔ accountability-pattern (learning methods affect follow-through)
- ali-abdaal ↔ accountability-pattern (his content surfaces for users who drop things)

**Pending:** 68 raw sources not yet compiled. Priority: 3Blue1Brown (visual explanations), Nate Jones (AI business), Lenny Rachitsky (product/growth), group session transcripts.

## [2026-04-10] Cleanup pass — broken link fixes + corpus expansion

**Context:** Corpus expanded to 186 docs / 16,719 chunks. Added Paul Graham (8 essays), James Clear (8 articles), Andrew Huberman (6 YT), Cal Newport (11 YT), Lex Fridman AI interviews (5 YT), Lenny Rachitsky articles (10). LEANN index rebuilt.

**Pages created:**
- concepts/focus-protocols.md (Huberman — ADHD + focus + learning protocols)
- concepts/digital-minimalism.md (Newport — intentional tech use philosophy)
- concepts/startup-ideas.md (Paul Graham — well vs. crater, living at the edge)

**Broken links fixed:**
- deep-work.md → [[focus-protocols]] ✅
- andrew-huberman.md → [[focus-protocols]] ✅
- cal-newport.md → [[digital-minimalism]] ✅
- paul-graham.md → [[startup-ideas]] ✅

**Community lens established:** BTD = curious builders (non-technical to vibe-coders) who want to ship faster using AI. Content surfaces through the lens of: starting builds right, borrowing expert judgment, thinking differently. Not academic/research framing.

**Pending:** subagent pass for concept pages

## [2026-04-10] Major expansion — 9 subagents, 4 new creators, Simon Willison ingest

**Corpus expanded to:** 238 sources, 21 creators, index rebuilt

**New creators added:**
- mark-kashef (YouTube: Claude Code tutorials, skills, MCPs, n8n)
- kyle-balmer (YouTube: 3262 catalog items, top 15 ingested)
- sabrina-ramonov (YouTube: 1830 catalog items, top 15 ingested)
- alex-finn (YouTube: 229 catalog items, top 15 ingested)
- simon-willison (Blog/Atom: 30 articles ingested — practical LLM/Claude coverage)

**Infrastructure fixes:**
- `ingest-substack.js` patched to support Atom feeds (`<entry>`) alongside RSS (`<item>`)
- `ingest-substack.js` patched to support `feed_url` override in creator registry

**Concept pages created (via subagents, all BTD community lens):**
- attention-mechanism, backpropagation (Karpathy/3B1B cross-source, 3-layer citations)
- ai-for-non-technical, habit-loop (Mollick + Clear/Huberman)
- vibe-coding, skills-as-workflows (BTD-native, Nate Jones + BTD Substack + Karpathy)
- prompt-design, llm-limitations (Mollick + BTD + Karpathy)
- ai-agents, defaults (Nate Jones + BTD Substack — defaults is the founding BTD concept)
- build-in-public, taste (BTD Substack primary)
- claude-code, mcp-servers (Mark Kashef corpus)
- context-engineering, second-brain (Nate Jones)
- great-work (Paul Graham), mark-kashef creator page

**Cleanup pass:**
- All broken wiki links fixed (6 → 0)
- Orphan pages resolved (4 → 1, index.md expected)
- Index.md updated to 48 pages.

## [2026-04-10] Creator pages — 4 new creators

**Pages created:**
- creators/kyle-balmer.md (YouTube: AI business workflows, non-technical builders)
- creators/sabrina-ramonov.md (YouTube: AI tools, 1-person business, 8 Skills framework)
- creators/alex-finn.md (YouTube: Claude Code, MCP, workflows)
- creators/simon-willison.md (Blog/Atom: practical LLM coverage, tools, safety)

**Index updated:** 48 → 52 pages.

## [2026-04-10] Topic page — btd-builder-arc

**Page created:**
- topics/btd-builder-arc.md — manifesto topic page for the BTD community; six concepts (defaults, borrowed-judgment, startup-ideas, build-in-public, taste, great-work) narrated as a sequential arc from autopilot to shipping work you care about

**Sources drawn from (leann search):**
- beware-the-defaults/2026-01-01-the-silent-killer-of-the-ai-era (defaults — founding BTD piece)
- beware-the-defaults/2026-01-26-building-with-the-garage-door-open (build-in-public)
- nate-jones/undated-claude-opus-4-6 (taste + judgment)
- nate-jones/undated-the-ai-job-market-split-in-two (taste as error-detection)
- paul-graham/undated-startupideas (wells vs craters)
- btd-group/group-session-deconstructing-greatness (borrowed judgment)

**Purpose:** First BTD-native topic page. Explains why these six concepts form a journey rather than a collection — the sequence is the argument. Intended as the manifesto page users encounter early.

**Index updated:** 53 → 54 pages.

## [2026-04-10] Topic page — how-ai-actually-works

**Page created:**
- topics/how-ai-actually-works.md — pipeline narrative for BTD builders; ties together tokenization, attention-mechanism, backpropagation, how-llms-work, llm-limitations into a unified story

**Sources drawn from (leann search):**
- andrej-karpathy/undated-deep-dive-into-llms-like-chatgpt
- andrej-karpathy/20231123-1hr-talk-intro-to-large-language-models
- andrej-karpathy/undated-let-s-build-gpt-from-scratch-in-code-spelled-out
- andrej-karpathy/undated-let-s-reproduce-gpt-2-124m
- andrej-karpathy/undated-let-s-build-the-gpt-tokenizer
- andrej-karpathy/undated-how-i-use-llms
- 3blue1brown/20240401-transformers-the-tech-behind-llms-deep-learning-chapter-5
- 3blue1brown/20240407-attention-in-transformers-step-by-step-deep-learning-chapter-6

**Purpose:** Topic pages tell the story of how concepts connect — concept pages explain each piece, topic pages explain the pipeline. This is the first topic page; it sets the pattern.

**Index updated:** 52 → 53 pages.
