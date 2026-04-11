---
title: "andrej-karpathy thread — Researchers used to talk openly; LLM memory as tools in RL"
creator: andrej-karpathy
platform: twitter
date: 2026-03-05
url: "https://x.com/karpathy/status/2029696850366971921"
---

# LLM memory operations via RL tool use

Karpathy speculates publicly about an approach to LLM memory: introducing memory operations (read, write, compact, retrieve) as tools the model can call via reinforcement learning, rather than bolting on memory as an afterthought. Current memory implementations are "crappy early examples" — the right solution is to let the model learn when and how to use memory through RL training.

## Key Ideas
- Current LLM memory (conversation summaries, vector databases) is an external add-on, not something the model has learned to use natively
- Treating memory ops as RL tools would let models learn optimal memory management strategies rather than following hand-coded heuristics
- RL-trained memory could generalize across tasks in ways that hard-coded summarization strategies cannot
- The post laments the decline of open research discussion — this kind of speculation used to happen publicly on Twitter, before most researchers "disappeared into the gold mines"

## Concepts
[[how-llms-work]], [[llm-knowledge-bases]], [[context-engineering]]

## Creator
[[andrej-karpathy]]
