---
title: "andrej-karpathy thread — New art project: GPT in 243 lines of pure Python"
creator: andrej-karpathy
platform: twitter
date: 2026-02-11
url: "https://x.com/karpathy/status/2021694437152157847"
---

# GPT in 243 lines of pure, dependency-free Python

Karpathy releases a minimal GPT implementation — train and inference in 243 lines of pure Python with zero dependencies. The framing is deliberately "art project": he's done everything possible to strip away accidental complexity, leaving only the essential algorithmic content. The goal is a readable reference that shows exactly what is necessary and nothing else.

## Key Ideas
- 243 lines is the irreducible minimum for a complete GPT implementation — everything else in standard codebases is efficiency, not necessity
- Dependency-free means you can read every line of the stack — no black boxes from NumPy, PyTorch, or any library
- This is the extreme end of Karpathy's "build it to understand it" philosophy — maximum legibility at the cost of performance
- Comparing this to a full training pipeline reveals exactly which complexity is essential vs. incidental

## Concepts
[[building-from-scratch]], [[how-llms-work]], [[attention-mechanism]]

## Creator
[[andrej-karpathy]]
