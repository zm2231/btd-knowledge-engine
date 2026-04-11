---
title: "andrej-karpathy thread — Enabled fp8 training for +4.3% improvement to \"time to GPT-2\""
creator: andrej-karpathy
platform: twitter
date: 2026-02-03
url: "https://x.com/karpathy/status/2018804068874064198"
---

# fp8 training: +4.3% improvement, GPT-2 repro down to 2.91 hours

Progress update on nanochat's "time to GPT-2" benchmark: enabling fp8 (8-bit floating point) training improved throughput enough to drop the GPT-2 reproduction time to 2.91 hours on an 8xH100 node. The tweet contextualizes the benchmark: reproducing GPT-2 (which OpenAI considered "too dangerous to release" in 2019) now costs roughly $20 on spot instances — making it the new MNIST of language model training.

## Key Ideas
- fp8 training is non-trivial to implement correctly — precision loss requires careful handling but yields meaningful throughput gains
- The "time to GPT-2" metric is a useful, reproducible benchmark for training efficiency progress
- The cost collapse of GPT-2-class training ($20 on spot instances) illustrates how rapidly the accessibility frontier has shifted
- What was a safety concern becomes a student exercise within a few years — the capability ladder keeps moving

## Concepts
[[building-from-scratch]], [[how-llms-work]]

## Creator
[[andrej-karpathy]]
