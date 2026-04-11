---
title: 3Blue1Brown
source_count: 6
last_updated: 2026-04-10
platforms: youtube
---

# 3Blue1Brown (Grant Sanderson)

Math educator. His deep learning series (chapters 1-6) is the visual prerequisite for everything Karpathy teaches. If someone's intake reveals they want to understand AI but their `calibrated_level` is pre-beginner, this is where they start. Not Karpathy. Not Mollick. Here.

## Key Contributions

### [[backpropagation]]
Chapters 3 and 4 of the deep learning series. Chapter 3 builds intuition — how the network figures out which weights to change by propagating error backwards. Chapter 4 does the calculus. Together with Karpathy's micrograd repo, this is the complete backpropagation learning path: see it visually (3B1B), then implement it from scratch (Karpathy).

### [[attention-mechanism]]
Chapters 5 and 6. The transformer architecture and the attention mechanism that makes it work. This is the visual foundation for understanding why GPT is a GPT. Once you've seen attention as a matrix of "how much should each word look at every other word," Karpathy's code implementation in nanoGPT clicks immediately.

### [[how-llms-work]]
The full series builds toward LLM understanding: neural networks (chapter 1) → learning via gradient descent (chapter 2) → [[backpropagation]] (chapters 3-4) → transformers and [[attention-mechanism]] (chapters 5-6). It's the most complete visual pathway from "what is a neural network" to "how does ChatGPT work" in the corpus.

### Visual Intuition as Pedagogy
His unique contribution is making abstract math visceral. You don't just learn that gradient descent minimizes a loss function; you see it as a ball rolling down a surface. This visual intuition transfers — it's why the Karpathy connection works. Concepts land visually first, then the code makes sense.

## The Karpathy Connection

These two creators form a deliberate [[building-from-scratch]] learning path:
- 3B1B explains the concept visually (what [[attention-mechanism|attention]] does)
- Karpathy walks through the implementation (how to code it)
- The minbpe/nanoGPT repos have the working code

A search for "attention mechanism" returns both: 3B1B's visual explanation and Karpathy's implementation. That's the cross-source value.

## When to Surface This Creator

- `calibrated_level` is pre-beginner in AI/ML → chapters 1-3 first
- User wants to understand Karpathy's content but is lost → send them here first
- User asks "how do neural networks work" → chapter 1
- User asks "what is a transformer" → chapters 5-6
- User asks about [[backpropagation]] → chapters 3-4, then micrograd

## Sources in Corpus
- 6 YouTube videos: the complete deep learning series (neural networks, gradient descent, backpropagation x2, transformers, attention)
