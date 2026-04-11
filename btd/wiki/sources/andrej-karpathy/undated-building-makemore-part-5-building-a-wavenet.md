---
title: "Building makemore Part 5: Building a WaveNet"
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=t3YJ5hKiMQ0"
---

# Building makemore Part 5: Building a WaveNet

Extends makemore from a flat MLP to a hierarchical architecture inspired by WaveNet (DeepMind, 2016) — the same paper that influenced transformer design. Instead of concatenating all context characters into a single layer, the model progressively fuses pairs of characters across multiple layers, creating a tree-structured computation. Karpathy also introduces proper PyTorch module composition (building a small neural net library) as the architecture becomes complex enough to require it.

## Key Ideas
- Hierarchical fusion (process pairs, then pairs of pairs) is more parameter-efficient than flat concatenation for long contexts — this is the architectural insight behind both WaveNet and transformers
- Building a clean Module abstraction forces you to think about what a layer's interface should be — the same discipline that makes PyTorch code maintainable
- Deeper models with residual connections outperform wider shallow models for the same parameter count on sequence tasks
- The progression from bigram → MLP → WaveNet-style model traces the actual historical development of sequence modeling architectures
- Diminishing returns on a toy task often reflect the task's ceiling, not the model's limit — knowing when to move on is a practical research skill

## Concepts
[[how-llms-work]], [[backpropagation]], [[building-from-scratch]], [[attention-mechanism]]

## Creator
[[andrej-karpathy]]
