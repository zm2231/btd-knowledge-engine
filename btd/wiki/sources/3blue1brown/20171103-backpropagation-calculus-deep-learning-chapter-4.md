---
title: "Backpropagation calculus | Deep Learning Chapter 4"
creator: 3blue1brown
platform: youtube
date: 20171103
url: "https://www.youtube.com/watch?v=tIeHLnjs5U8"
---

# Backpropagation calculus | Deep Learning Chapter 4

The formal calculus companion to Chapter 3. Starting with a minimal single-neuron-per-layer network, 3B1B derives how sensitivity of the cost to any weight is a chain-rule product of three derivatives: dC/da · da/dz · dz/dw. The key result: the weight update depends on how strongly the previous neuron was firing — a direct calculus expression of "neurons that fire together wire together." Extends cleanly to multi-neuron layers with extra indices but the same logic.

## Key Ideas
- Chain rule decomposition: cost sensitivity to a weight = three-term product along the computation path
- dz/dw = previous layer activation — large activations amplify weight updates
- Sensitivity to bias is almost identical, with dz/db = 1 instead
- Multi-layer extension: neurons influence cost through multiple paths — derivatives sum across all paths
- The chain rule iterated backward is exactly what backpropagation implements in code

## Concepts
[[backpropagation]]

## Creator
[[3blue1brown]]
