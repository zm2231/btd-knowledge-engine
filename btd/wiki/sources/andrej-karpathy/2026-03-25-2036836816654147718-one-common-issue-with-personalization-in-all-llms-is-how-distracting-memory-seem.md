---
title: "andrej-karpathy thread — LLM personalization: memory is distracting and tries too hard"
creator: andrej-karpathy
platform: twitter
date: 2026-03-25
url: "https://x.com/karpathy/status/2036836816654147718"
---

# LLM memory and personalization: a product failure mode

Karpathy identifies a specific failure mode in LLM personalization: a single question from two months ago becomes an "interest" the model keeps mentioning in unrelated contexts. The model is trying too hard — over-indexing on sparse memory signals rather than treating them as weak priors. This is a product quality problem, not just a technical one, and it makes personalized LLMs feel intrusive rather than helpful.

## Key Ideas
- LLM memory systems over-fit to sparse signals — one question becomes a "deep interest" that surfaces perpetually and inappropriately
- The failure mode is a form of sycophancy applied to memory: the model prioritizes making you feel "remembered" over being useful
- Good personalization should be barely noticeable — it should surface when relevant and stay invisible when not
- The problem affects all major LLM products, suggesting it's a training/product design gap, not a model-specific bug

## Concepts
[[llm-limitations]], [[context-engineering]], [[llm-knowledge-bases]]

## Creator
[[andrej-karpathy]]
