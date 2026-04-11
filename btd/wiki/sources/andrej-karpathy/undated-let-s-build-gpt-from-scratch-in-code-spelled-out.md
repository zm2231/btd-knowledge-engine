---
title: "Let's build GPT: from scratch, in code, spelled out."
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=kCc8FmEb1nY"
---

# Let's build GPT: from scratch, in code, spelled out.

The canonical "build it to understand it" implementation of a GPT — Karpathy builds a character-level transformer in PyTorch from a blank Jupyter notebook, explaining every component as he writes it. Covers tokenization, embedding tables, self-attention, multi-head attention, feedforward layers, residual connections, and the training loop. The definitive resource for builders who want to understand how GPT actually works at the code level, not just conceptually.

## Key Ideas
- Self-attention is the core mechanism: every token in the sequence "attends to" and aggregates information from all previous tokens via learned query/key/value matrices
- The transformer architecture is a stack of attention + feedforward blocks with residual connections — the residuals make training deep networks tractable
- Positional encoding is necessary because attention has no inherent notion of sequence order — positions must be injected explicitly
- Training a character-level model on Shakespeare is small enough to run locally, but the architecture scales directly to GPT-sized models with the same code structure
- Loss curves and generation samples tell you what's working — running the model and seeing its outputs is more instructive than staring at the math

## Concepts
[[how-llms-work]], [[attention-mechanism]], [[building-from-scratch]], [[backpropagation]]

## Creator
[[andrej-karpathy]]
