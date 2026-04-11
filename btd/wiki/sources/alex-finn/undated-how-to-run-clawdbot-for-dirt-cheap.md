---
title: "How to run ClawdBot for DIRT CHEAP"
creator: alex-finn
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=lxfakTpdz1Y"
---

# How to run ClawdBot for DIRT CHEAP

Cost optimization guide for running ClawdBot continuously without high API bills. Covers model tier selection (Haiku for most tasks, Sonnet/Opus only when needed), caching strategies, prompt compression, and batching requests. Also covers infrastructure options: local Mac vs. VPS vs. cloud instances for different budget levels.

## Key Ideas
- Default to Claude Haiku for routine tasks — it handles 80% of agentic steps at a fraction of the cost
- Cache repeated context (system prompts, document summaries) using prompt caching to avoid re-tokenizing
- Compress long documents to summaries before passing to the agent; use the full doc only when precision is required
- VPS hosting (~$5/mo) is sufficient for most personal ClawdBot setups; Mac Mini is overkill
- Track per-task token usage to identify cost hotspots; optimize the 20% of tasks consuming 80% of tokens

## Concepts
[[ai-agents]], [[llm-limitations]], [[context-engineering]]

## Creator
[[alex-finn]]
