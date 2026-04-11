---
title: "The spelled-out intro to neural networks and backpropagation: building micrograd"
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=VMj-3S1tku0"
---

# The spelled-out intro to neural networks and backpropagation: building micrograd

Karpathy builds micrograd — a miniature autograd engine in ~100 lines of Python — from nothing, then builds a small neural network on top of it. The video makes backpropagation concrete: you see exactly how gradients flow backwards through a computation graph, why the chain rule works, and what `loss.backward()` is actually doing in PyTorch. The foundation for every other video in the series. Anyone who has used `.backward()` without fully understanding it should watch this before anything else.

## Key Ideas
- A neural network is a mathematical expression with parameters; training it means finding parameter values that minimize the loss via gradient descent
- Backpropagation is just the chain rule applied systematically through the computation graph — each node computes its local gradient and passes it back
- An autograd engine (like PyTorch's) records the computation graph during the forward pass, then traverses it in reverse during the backward pass
- Implementing this from scratch in 100 lines of Python makes the abstraction concrete — you stop treating `backward()` as magic
- The same principles that work in micrograd operate in PyTorch at scale — the difference is efficiency, not fundamentals

## Concepts
[[backpropagation]], [[building-from-scratch]], [[how-llms-work]]

## Creator
[[andrej-karpathy]]
