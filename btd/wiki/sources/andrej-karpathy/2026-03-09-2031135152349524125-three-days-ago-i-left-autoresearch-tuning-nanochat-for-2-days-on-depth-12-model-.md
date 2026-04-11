---
title: "andrej-karpathy thread — autoresearch found 20 real improvements: 11% better \"time to GPT-2\""
creator: andrej-karpathy
platform: twitter
date: 2026-03-09
url: "https://x.com/karpathy/status/2031135152349524125"
---

# autoresearch delivers: 11% improvement to time-to-GPT-2 benchmark

Karpathy left autoresearch running for two days tuning nanochat on a depth=12 model and came back to ~20 proposed changes that all improved validation loss. He tested them on larger depth=24 models and they transferred. Stacking all changes: "time to GPT-2" dropped from 2.02 hours to 1.80 hours — an 11% improvement from fully automated agent research.

## Key Ideas
- Automated agent research produced ~20 real, additive improvements in two days of unattended running
- Changes found at small scale (depth=12) transferred to larger scale (depth=24) — a crucial validation step often skipped in manual research
- 11% improvement in a well-optimized benchmark is meaningful and hard to dismiss as noise
- The experiment establishes a proof of concept: agentic ML research can produce compounding improvements that compound over time

## Concepts
[[building-from-scratch]], [[how-llms-work]]

## Creator
[[andrej-karpathy]]
