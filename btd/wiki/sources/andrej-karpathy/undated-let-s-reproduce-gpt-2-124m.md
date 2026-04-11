---
title: "Let's reproduce GPT-2 (124M)"
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=l8pRSuU81PU"
---

# Let's reproduce GPT-2 (124M)

A 4-hour end-to-end reproduction of OpenAI's GPT-2 (124M parameter model) — not just the architecture but the full training run on real data. Karpathy starts from scratch, builds nanoGPT, matches OpenAI's weights exactly, then trains from scratch on FineWeb to achieve GPT-2-level performance. The video covers training efficiency, hardware utilization, mixed precision, gradient accumulation, and the practical engineering required to train at scale. The most complete view available of what it actually takes to go from code to a working language model.

## Key Ideas
- Reproducing a published result end-to-end is the highest-quality way to understand it — every discrepancy forces you to confront what you don't understand
- Training efficiency matters enormously: mixed precision (bf16), flash attention, gradient accumulation, and DDP across GPUs each contribute multiplicatively
- The GPT-2 architecture is almost identical to what's used in frontier models today — understanding it at this depth gives you leverage on all subsequent LLM papers
- Data quality and mixture dominate model quality at small-to-medium scale; the dataset choice (FineWeb) matters more than most architectural tweaks
- The "time to GPT-2" benchmark is a useful north star: can you reproduce a known result faster? It keeps training pipelines honest

## Concepts
[[how-llms-work]], [[building-from-scratch]], [[attention-mechanism]], [[backpropagation]]

## Creator
[[andrej-karpathy]]
