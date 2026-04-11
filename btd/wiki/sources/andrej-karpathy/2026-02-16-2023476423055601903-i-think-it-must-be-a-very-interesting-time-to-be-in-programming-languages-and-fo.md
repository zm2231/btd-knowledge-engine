---
title: "andrej-karpathy thread — Interesting time to be in programming languages and formal methods"
creator: andrej-karpathy
platform: twitter
date: 2026-02-16
url: "https://x.com/karpathy/status/2023476423055601903"
---

# LLMs change programming language constraints completely

Karpathy argues that LLMs flip the economics of programming languages and formal methods. Translation (COBOL to modern, C to Rust) was previously too expensive; LLMs make it near-free. Meanwhile, LLMs are especially good at translation because both the source and destination provide context. The implication: language choice, codebase age, and tech debt constraints are all becoming less permanent.

## Key Ideas
- LLMs excel at code translation because both source and target provide mutual context — unlike de-novo generation, there's a ground truth to steer toward
- Legacy codebases (COBOL, old C, ancient Java) are now potentially translatable at low cost — the "rewrite from scratch" calculation has changed
- Type systems and formal methods become more valuable as LLMs write more code — they're the validators that catch what the model gets wrong
- Programming language adoption curves will change: easier languages that LLMs write well may gain share faster than languages with better theoretical properties

## Concepts
[[vibe-coding]], [[building-from-scratch]]

## Creator
[[andrej-karpathy]]
