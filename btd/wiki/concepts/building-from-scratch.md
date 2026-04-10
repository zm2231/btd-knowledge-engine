---
title: Building From Scratch
source_count: 6
last_updated: 2026-04-10
sources:
  - andrej-karpathy/lets-build-gpt
  - andrej-karpathy/lets-build-the-gpt-tokenizer
  - andrej-karpathy/micrograd
  - andrej-karpathy/makemore-series
  - repos/nanogpt
  - repos/minbpe
---

# Building From Scratch

Karpathy's core pedagogical approach: implement the thing yourself, from zero, to understand it. Not "use the library" but "write the library." Not "here's the API" but "here's what happens inside the API."

## Why It Works

Understanding comes from building, not from reading about building. When Karpathy implements a GPT from scratch in 2 hours on camera, you see every design decision: why attention, why layer normalization here, why this learning rate. The library abstracts those decisions away. The from-scratch implementation makes them visible.

## The Pattern

1. Start with the simplest possible version that demonstrates the core idea
2. Build it up incrementally — each step adds one concept
3. Show the math, then show the code, then run it
4. The finished implementation is small enough to hold in your head (~300 lines for nanoGPT)

## Application by User Level

**Pre-beginner**: building from scratch is overwhelming. Start with 3Blue1Brown's visual explanations first, then graduate to Karpathy's walkthroughs.

**Beginner**: follow along with micrograd (neural net from scratch) or the makemore series. The code IS the tutorial.

**Intermediate**: use nanoGPT or minbpe as reference implementations. Read the code, modify it, break it, fix it.

**Builder**: fork the repo and adapt it. Karpathy's implementations are intentionally minimal so you can extend them.

## In the Corpus

Cross-source: the YouTube videos walk through the implementation live. The repos have the finished code. Search returns both — "here's him explaining why this line exists" + "here's the actual line."

## Related Concepts
- [[tokenization]] — minbpe is the tokenizer built from scratch
- [[how-llms-work]] — nanoGPT is an LLM built from scratch
