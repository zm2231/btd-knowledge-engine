---
title: "Attention in transformers, step-by-step | Deep Learning Chapter 6"
creator: 3blue1brown
platform: youtube
date: 20240407
url: "https://www.youtube.com/watch?v=eMlx5fFNoYc"
---

# Attention in transformers, step-by-step | Deep Learning Chapter 6

The definitive visual walkthrough of the attention mechanism. One head of attention = three learned matrices (query, key, value) that together compute which tokens are relevant to updating which other tokens, then apply those weighted updates to embeddings. Multi-headed attention (96 heads in GPT-3) runs many such heads in parallel, each potentially learning a different type of contextual relationship. GPT-3 devotes ~58B of its 175B parameters to attention across 96 layers.

## Key Ideas
- Queries ask "what am I looking for?", keys answer "what do I contain?", dot-product similarity produces the attention pattern
- Softmax normalizes attention weights column-by-column; masking prevents future tokens from influencing past ones
- Value matrices produce the actual update vectors added to embeddings; factored as low-rank (value-down × value-up)
- Multi-headed attention runs 96 independent heads in GPT-3, each with its own Q/K/V matrices
- Context size is a quadratic bottleneck: attention pattern size scales as context_length²

## Concepts
[[attention-mechanism]], [[how-llms-work]]

## Creator
[[3blue1brown]]
