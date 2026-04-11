---
title: "andrej-karpathy thread — nanochat trains GPT-2 capability model in 2 hours on a single 8xH100 node"
creator: andrej-karpathy
platform: twitter
date: 2026-03-05
url: "https://x.com/karpathy/status/2029701092347630069"
---

# nanochat: GPT-2 in 2 hours via dataset improvement

Progress update: nanochat now reproduces GPT-2 quality in 2 hours on a single 8xH100 node (down from ~3 hours a month earlier). The key driver wasn't architectural — it was switching the training dataset from FineWeb-edu to NVIDIA's ClimbMix. The point: dataset quality and mix are often the highest-leverage variable, more impactful than code or architecture optimizations.

## Key Ideas
- Dataset choice was the biggest single factor: ClimbMix outperformed FineWeb, FineWeb-edu, Olmo, and DCLM on this benchmark
- The benchmark is now approaching "interactive" speed — training a GPT-2-class model in under 2 hours means rapid iteration becomes possible
- Combination of fp8 training, dataset switch, and other tuning is additive — multiple independent improvements stack
- Being "slightly sus" of the dataset result is good epistemic hygiene: suspiciously good results warrant replication and scrutiny

## Concepts
[[building-from-scratch]], [[how-llms-work]]

## Creator
[[andrej-karpathy]]
