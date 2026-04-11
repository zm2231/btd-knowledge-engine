---
title: "Transformers, the tech behind LLMs | Deep Learning Chapter 5"
creator: 3blue1brown
platform: youtube
date: 20240401
url: "https://www.youtube.com/watch?v=wjZofJX0v4M"
---

# Transformers, the tech behind LLMs | Deep Learning Chapter 5

The first transformer chapter. Walks through the high-level data flow — tokenization → embedding → attention blocks → MLP blocks → unembedding → softmax — then dives deep into word embeddings and how directions in high-dimensional space encode semantic meaning (gender, nationality, plurality). Introduces softmax and the temperature parameter. Uses GPT-3's specific numbers (175B parameters, 12,288 embedding dimension, 50,257 token vocab) to make abstraction concrete.

## Key Ideas
- Transformers process tokens as high-dimensional vectors; training causes directions in that space to encode meaning
- Word embeddings support vector arithmetic: king − man + woman ≈ queen
- The embedding matrix (~617M params) and unembedding matrix (~617M) bookend the network
- Softmax converts raw logit scores to a probability distribution over next tokens
- Temperature controls diversity: low T → predictable, high T → creative but risky

## Concepts
[[how-llms-work]], [[tokenization]], [[attention-mechanism]]

## Creator
[[3blue1brown]]
