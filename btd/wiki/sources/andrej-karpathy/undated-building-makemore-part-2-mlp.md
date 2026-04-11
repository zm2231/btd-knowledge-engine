---
title: "Building makemore Part 2: MLP"
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=TCH_1BHY58I"
---

# Building makemore Part 2: MLP

Extends makemore from a bigram model to a multi-layer perceptron (MLP), implementing the architecture from Bengio et al. 2003 — the paper that introduced learned character embeddings and a hidden layer to language modeling. Karpathy shows why the bigram model can't scale (the lookup table explodes exponentially with context length) and how the MLP with an embedding table solves this. Heavy focus on PyTorch tensor operations, embedding lookups, and the practical mechanics of building a training loop.

## Key Ideas
- Embedding tables map discrete tokens to continuous vectors; the model learns these embeddings during training, not by hand
- Concatenating embedded context characters and passing through a hidden layer with tanh nonlinearity gives the model much more expressive power than bigrams
- The embedding space geometry is meaningful: similar characters cluster together after training, showing the model has learned phonetic structure
- Batched training with random mini-batches is essential for efficiency — full-batch gradient descent is impractical even at small scale
- The train/dev/test split discipline applies even to toy experiments — it forces honest evaluation of generalization, not just memorization

## Concepts
[[how-llms-work]], [[backpropagation]], [[building-from-scratch]]

## Creator
[[andrej-karpathy]]
