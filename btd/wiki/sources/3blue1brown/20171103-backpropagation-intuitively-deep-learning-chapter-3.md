---
title: "Backpropagation, intuitively | Deep Learning Chapter 3"
creator: 3blue1brown
platform: youtube
date: 20171103
url: "https://www.youtube.com/watch?v=Ilg3gGewQ5U"
---

# Backpropagation, intuitively | Deep Learning Chapter 3

An intuition-first walkthrough of backpropagation — no calculus, just nudges. For each training example, the algorithm figures out how every weight and bias should change to reduce cost, with nudge sizes proportional to current activation strength (the "neurons that fire together wire together" analogy). The key insight: you propagate desired changes backwards through the network, averaging across all training examples to get the true gradient.

## Key Ideas
- Backprop computes how a single training example wants each weight/bias nudged — proportional, not binary
- Connections between highly active neurons get the strongest weight updates ("fire together, wire together")
- Desired changes propagate backward: output layer → second-to-last → ... accumulating at each layer
- Averaging nudges across all training examples gives the true negative gradient
- Mini-batches approximate the full gradient cheaply — the "drunk man stumbling downhill" analogy

## Concepts
[[backpropagation]], [[how-llms-work]]

## Creator
[[3blue1brown]]
