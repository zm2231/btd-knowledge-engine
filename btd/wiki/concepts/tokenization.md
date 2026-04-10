---
title: Tokenization
source_count: 3
last_updated: 2026-04-10
sources:
  - andrej-karpathy/lets-build-the-gpt-tokenizer
  - repos/minbpe
  - andrej-karpathy/deep-dive-into-llms
---

# Tokenization

How text gets converted into numbers that a neural network can process. Sounds simple; it's not. Tokenization decisions ripple through everything: model performance on different languages, arithmetic ability, code handling, context window efficiency.

## The Core Idea

Neural networks operate on numbers, not text. Tokenization is the translation layer. The dominant approach is Byte Pair Encoding (BPE): start with individual characters, repeatedly merge the most frequent pair into a new token, build up a vocabulary of subword units.

"tokenization" might become ["token", "ization"] or ["to", "ken", "iz", "ation"] depending on the vocabulary. Common words get single tokens; rare words get split into pieces.

## Why It Matters More Than You'd Think

Karpathy's video makes the case that many LLM "bugs" are actually tokenization artifacts:
- Bad at arithmetic? The numbers are tokenized inconsistently (13 might be one token, 137 might be two)
- Worse at non-English languages? The tokenizer was trained mostly on English, so other languages use more tokens per word (worse context efficiency)
- Struggles with code? Whitespace tokenization affects how the model "sees" indentation

## Cross-Source Depth

This concept has the strongest cross-source coverage in the corpus:
- **Video**: "Let's Build the GPT Tokenizer" — 2+ hour walkthrough of BPE from scratch
- **Code**: minbpe repo — the actual Python implementation, ~300 lines
- **Context**: "Deep Dive into LLMs" — covers tokenization as part of the full LLM pipeline

A search for "tokenization" returns all three. A pre-beginner gets pointed to the video. A builder gets pointed to the code. Both get the same underlying concept.

## Related Concepts
- [[building-from-scratch]] — minbpe is the canonical example
- [[how-llms-work]] — tokenization is step 1 of the LLM pipeline
