---
title: LLM Knowledge Bases
source_count: 1
last_updated: 2026-04-10
sources:
  - andrej-karpathy/twitter-llm-knowledge-bases
---

# LLM Knowledge Bases

Karpathy's pattern for building personal knowledge bases using LLMs. This is the direct inspiration for this project's wiki layer.

## The Pattern

Raw data from sources → LLM compiles into a markdown wiki → wiki is operated on by CLIs for Q&A → everything viewable in Obsidian. The LLM writes and maintains the wiki; you rarely touch it directly.

The key insight: most people's experience with LLMs and documents is RAG (retrieve chunks, generate answer from fragments). The LLM re-discovers knowledge from scratch every question. Nothing accumulates. Karpathy's approach is different: compile once, keep current, compound over time.

## How This Project Implements It

- `raw/` = source documents (transcripts, articles, code)
- `wiki/` = LLM-compiled knowledge base (concepts, topics, creators)
- `skills/wiki-compiler/SKILL.md` = instructions for how Claude maintains the wiki
- LEANN index = search layer across both raw and wiki content
- Obsidian = browsing interface (graph view, backlinks, cross-references)

## The Compounding Effect

Every query answer can be filed back into the wiki. A comparison you asked for, an analysis, a connection you discovered. Your explorations don't disappear into chat history; they accumulate in the knowledge base. The wiki gets richer with every source you add and every question you ask.

## Related Concepts
- [[building-from-scratch]] — same philosophy applied to learning
- [[how-llms-work]] — the technology that makes wiki compilation possible
