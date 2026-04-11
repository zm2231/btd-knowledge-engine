---
title: "Gradient descent, how neural networks learn | Deep Learning Chapter 2"
creator: 3blue1brown
platform: youtube
date: 20171016
url: "https://www.youtube.com/watch?v=IHZwWFHWa-w"
---

# Gradient descent, how neural networks learn | Deep Learning Chapter 2

The learning chapter: introduces the cost function, gradient descent, and how a network adjusts 13,000 weights and biases to minimize error across training examples. 3B1B makes the high-dimensional gradient concrete by showing that each component tells you how much that particular weight or bias matters — it encodes relative importance, not just direction. Closes with a sobering look at what the hidden layers actually learned (not interpretable edges) and a research discussion on memorization vs. structure.

## Key Ideas
- Learning = finding weights/biases that minimize a cost function measuring output error across all training examples
- Gradient descent: repeatedly step in the direction of steepest cost decrease, computed as the negative gradient
- The gradient vector encodes relative importance — large magnitude means that weight has outsized impact on cost
- Stochastic gradient descent (mini-batches) trades exact gradient for computational speed
- Networks can achieve ~96% digit accuracy yet learn patterns unrecognizable to humans

## Concepts
[[backpropagation]], [[how-llms-work]]

## Creator
[[3blue1brown]]
