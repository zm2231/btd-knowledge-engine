---
title: "The spelled-out intro to language modeling: building makemore"
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=PaCmpygFfXo"
---

# The spelled-out intro to language modeling: building makemore

The first video in Karpathy's neural network series, building "makemore" — a character-level language model that generates name-like strings. Starts with bigram statistics (raw counts, no neural network) and then implements the same model as a neural network with a single linear layer, training it with gradient descent. The slow, from-scratch pace is the point: every line of code is earned, every concept introduced only when needed. The ideal starting point for someone who understands calculus but has never trained a neural network.

## Key Ideas
- A bigram model is the simplest possible language model: count how often each character follows each other character, normalize to get probabilities
- The same bigram model can be implemented as a neural network — the weights of the linear layer converge to the same values as the count-based approach
- Negative log-likelihood is the natural loss function for probability models: minimizing it is equivalent to maximizing the probability the model assigns to the training data
- Gradient descent with PyTorch autograd turns any differentiable computation into a trainable model — you don't need to derive gradients by hand
- The gap between bigram and MLP performance motivates every architectural improvement that follows in the series

## Concepts
[[how-llms-work]], [[backpropagation]], [[building-from-scratch]]

## Creator
[[andrej-karpathy]]
