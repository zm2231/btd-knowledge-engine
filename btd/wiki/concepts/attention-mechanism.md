---
title: Attention Mechanism
source_count: 4
last_updated: 2026-04-10
sources:
  - 3blue1brown/20240407-attention-in-transformers-step-by-step-deep-learning-chapter-6
  - andrej-karpathy/undated-let-s-build-gpt-from-scratch-in-code-spelled-out
  - andrej-karpathy/undated-let-s-reproduce-gpt-2-124m
  - repos/nanogpt
---

# Attention Mechanism

The attention mechanism is the core innovation inside every transformer — the architecture behind GPT, Claude, and almost every large language model you've touched. It answers one question: when the model processes a word, which other words in the sentence should it pay attention to? Without attention, the model would treat every word the same regardless of context. With it, the word "mole" can mean a small animal, a unit of chemistry, or a skin blemish — and the model figures out which from context. For anyone building with AI, attention is the reason LLMs can hold coherent multi-sentence context and why longer prompts are more expensive.

## What It Does (In Plain Terms)

Every token (word piece) in a sequence gets to "look around" at the other tokens and decide how much each one matters for understanding itself. The mechanism produces a weighted mix: token 5 might be 70% influenced by token 2 and 30% by token 1, and 0% by everything else. That mixture becomes the enriched representation the model uses going forward.

3Blue1Brown's chapter 6 uses this example: the phrases "American shrew mole," "one mole of carbon dioxide," and "take a biopsy of the mole" all contain the word "mole." Attention is exactly the mechanism that updates the embedding for "mole" based on surrounding words — so by the time the model processes it, the word carries the right meaning for that context.

## How It Works (The QKV Mechanism)

Each token produces three vectors from its embedding:

- **Query (Q)** — "what am I looking for?"
- **Key (K)** — "what do I contain?"
- **Value (V)** — "what information do I actually pass along?"

Attention scores are computed by multiplying queries against keys (a dot product), which measures how relevant each token is to every other. Those scores go through a softmax to turn them into probabilities (they all add up to 1). Then the values are averaged using those probabilities as weights. The result: each token gets a new representation that blends in information from the most relevant neighbors.

One subtle but important implementation detail: the scores are divided by the square root of the head size before softmax. This prevents the scores from becoming too extreme at initialization, which would cause the model to attend to basically one token and ignore everything else.

In a decoder (like GPT), future tokens are masked out — token 5 can only attend to tokens 1 through 5, never to 6, 7, 8. This is what makes autoregressive generation possible: the model is only allowed to look backward, not forward.

## Multi-Head Attention

Running attention once lets the model capture one kind of relationship. Running it in parallel across many "heads" lets the model capture many kinds simultaneously — subject-verb agreement, pronoun references, positional proximity, and so on. Each head learns its own Q/K/V projection. Their outputs are concatenated and projected back to the main dimension. The nanoGPT implementation makes this concrete: look at the `MultiHeadAttention` class in `model.py`.

Karpathy frames it cleanly: "attention is the reduce and the MLP is the map." The attention layer is where tokens exchange information with each other. The feed-forward layers that follow are where each token thinks about what it gathered, individually. The transformer alternates between these two operations, over and over.

## Self-Attention vs. Cross-Attention

Self-attention means Q, K, and V all come from the same source — tokens attending to other tokens in the same sequence. This is what GPT uses.

Cross-attention means Q comes from one sequence and K/V come from a different source. This is how encoder-decoder models (like the original translation transformers) work: the decoder queries the encoder's representations. It's also how some multimodal models attend across text and image tokens.

## At Different Levels

**Pre-beginner**: when an LLM reads your prompt, it doesn't treat each word in isolation. Every word "looks at" the other words and adjusts its meaning based on context. That's attention — it's why the model can tell that "it" in "the bank was steep so it was hard to climb" refers to the bank, not something else. Watch 3Blue1Brown's visual explanation first.

**Beginner**: 3Blue1Brown's "Attention in Transformers, Step by Step" (Deep Learning Chapter 6) is the clearest visual walkthrough of Q/K/V. Watch that, then Karpathy's "Let's build GPT" where he codes it up. The combination of visual intuition and line-by-line implementation is unmatched.

**Builder**: the full attention head in nanoGPT (`repos/nanogpt`, `model.py`) is about 20 lines. Key things to understand: the causal mask (`torch.tril`), the scaling by `1/sqrt(head_size)`, and the projection layers for Q/K/V. Flash Attention is a drop-in optimization that avoids materializing the full attention matrix in memory — Karpathy covers this in "Let's Reproduce GPT-2 (124M)." If you're building anything with a context window, understanding attention helps you reason about why longer contexts cost more compute.

## When to Surface

Show this page to users who:
- Have `calibrated_level: beginner` or above and are asking how LLMs work beyond the surface level
- Are building context-aware applications and want to understand why prompt length affects cost
- Have completed the [[how-llms-work]] page and are ready to go one layer deeper
- Are working through the [[building-from-scratch]] path and have hit the attention implementation in nanoGPT

## Related Concepts
- [[how-llms-work]] — attention is step 3 in the full LLM pipeline
- [[tokenization]] — tokens are what attention operates over; the token boundary decisions matter
- [[building-from-scratch]] — Karpathy builds attention from scratch in "Let's build GPT"; nanoGPT is the full implementation
