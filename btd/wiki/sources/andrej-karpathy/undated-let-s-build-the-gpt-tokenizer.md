---
title: "Let's build the GPT Tokenizer"
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=zduSFxRajkE"
---

# Let's build the GPT Tokenizer

A 2+ hour deep dive into tokenization — "my least favorite part of LLMs," as Karpathy puts it — where he builds the Byte Pair Encoding (BPE) tokenizer used in GPT models from scratch. The video explains why tokenization matters, how BPE works, and — critically — why it causes so many of the weird failures in LLMs: arithmetic errors, spelling mistakes, non-English degradation, and sensitivity to whitespace. Essential for anyone debugging strange LLM behavior or building a pipeline that feeds text into models.

## Key Ideas
- Tokenization converts raw text to integers; the vocabulary and merge rules are learned from the training corpus — they're not linguistic primitives
- BPE iteratively merges the most frequent adjacent byte pairs, creating a vocabulary that compresses common patterns efficiently
- Tokens are not words — "tokenization" might be one token or three depending on context, and the same string can tokenize differently depending on surrounding whitespace
- Many LLM failure modes (bad arithmetic, inability to spell, language inconsistency) trace directly back to tokenization artifacts, not model reasoning failures
- Building the tokenizer yourself makes its quirks concrete — you stop treating them as mysterious bugs and start working around them intentionally

## Concepts
[[tokenization]], [[how-llms-work]], [[building-from-scratch]], [[llm-limitations]]

## Creator
[[andrej-karpathy]]
