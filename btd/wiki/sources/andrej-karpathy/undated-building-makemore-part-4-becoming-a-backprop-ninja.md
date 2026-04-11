---
title: "Building makemore Part 4: Becoming a Backprop Ninja"
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=q8SA3rM6ckI"
---

# Building makemore Part 4: Becoming a Backprop Ninja

Removes PyTorch autograd entirely and manually derives the backward pass for the full MLP — every gradient expression written out by hand, then verified against autograd. Karpathy argues that backpropagation is a "leaky abstraction": you can use it without understanding it, but deep networks will eventually fail in ways that only make sense if you know what the gradients are doing. The video is deliberately tedious — the point is to build the muscle memory for gradient derivation.

## Key Ideas
- Backprop through cross-entropy + softmax has a particularly clean form: the gradient is just (predicted probabilities - one-hot targets), which is worth memorizing
- Every operation in the forward pass has a corresponding local gradient rule; composing these via the chain rule gives you the full backward pass
- Manual backprop reveals which operations are cheap and which are expensive in the backward pass — useful for optimizing custom training loops
- The exercise of matching manual gradients to autograd output is a concrete debugging technique for custom operations in frameworks like PyTorch
- Understanding what gradients look like numerically (their scale, distribution, and which layers they touch) is prerequisite to diagnosing training failures

## Concepts
[[backpropagation]], [[building-from-scratch]]

## Creator
[[andrej-karpathy]]
