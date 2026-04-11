---
title: "andrej-karpathy thread — autoresearch: AI agent iterates on training code indefinitely"
creator: andrej-karpathy
platform: twitter
date: 2026-03-07
url: "https://x.com/karpathy/status/2030371219518931079"
---

# autoresearch: human prompts, AI iterates on training code

Karpathy packages and releases "autoresearch" — a minimal repo (~630 lines) where a human writes the research direction in a markdown prompt and an AI agent iterates on the training code (Python) autonomously. The goal is continuous research progress without the human's involvement in the coding loop. The human's role is setting direction; the agent's role is experimental iteration.

## Key Ideas
- The human/AI division of labor in autoresearch: human writes `.md` (what to optimize for), agent writes `.py` (how to do it)
- The goal is "fastest research progress indefinitely without human involvement" — essentially an automated ML research assistant
- Minimal repo design (~630 lines, single GPU, one file) makes it hackable and understandable — the same philosophy as nanoGPT
- This is a concrete implementation of "agentic research" — not a thought experiment but a runnable system

## Concepts
[[building-from-scratch]], [[vibe-coding]]

## Creator
[[andrej-karpathy]]
