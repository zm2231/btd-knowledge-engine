---
title: "andrej-karpathy thread — With the coming tsunami of demand for tokens, significant memory+compute opportunities"
creator: andrej-karpathy
platform: twitter
date: 2026-02-25
url: "https://x.com/karpathy/status/2026452488434651264"
---

# LLM memory/compute architecture: SRAM vs DRAM tradeoffs

Karpathy explains a fundamental constraint in LLM inference hardware: the two-pool memory architecture (fast on-chip SRAM vs. slow off-chip DRAM) is what makes LLMs expensive to run, and the mismatch between these pools is the core engineering problem that everyone serving models at scale is trying to solve. Written as a primer for builders who want to understand why inference costs what it costs.

## Key Ideas
- LLM inference is memory-bandwidth-bound, not compute-bound — the bottleneck is moving weights and KV cache between SRAM and DRAM, not multiplication
- On-chip SRAM is fast but tiny (tens of MB); off-chip DRAM is large but slow (hundreds of GB) — model weights and KV cache mostly live in DRAM
- Flash attention and other kernel optimizations are explicitly designed to minimize round-trips between these two memory pools
- The token demand tsunami means this architectural constraint will determine which inference providers scale cheaply and which don't

## Concepts
[[how-llms-work]], [[building-from-scratch]]

## Creator
[[andrej-karpathy]]
