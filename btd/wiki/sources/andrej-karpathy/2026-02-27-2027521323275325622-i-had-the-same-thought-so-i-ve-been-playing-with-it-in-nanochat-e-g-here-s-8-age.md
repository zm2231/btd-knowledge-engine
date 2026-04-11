---
title: "andrej-karpathy thread — 8 agents running nanochat experiments in parallel"
creator: andrej-karpathy
platform: twitter
date: 2026-02-27
url: "https://x.com/karpathy/status/2027521323275325622"
---

# Multi-agent research: 8 parallel agents on nanochat experiments

Karpathy experiments with running 8 AI agents in parallel (4 Claude, 4 Codex) on a shared GPU cluster, each on its own git branch, attempting to improve nanochat. The result is instructive: it doesn't work well and it's a mess, but it's visually compelling. The experiment exposes the limits of current multi-agent coordination — agents don't have good mechanisms for sharing findings, avoiding redundant work, or building on each other's progress.

## Key Ideas
- Parallel AI agents on a shared research task expose coordination problems that single-agent setups don't — branches diverge, work duplicates, synthesis is hard
- Different organizational structures (8 independent researchers vs. chief scientist + juniors) produce different failure modes but similar overall outcomes
- The current bottleneck in multi-agent research is not compute but coordination primitives — git branching is insufficient scaffolding
- "Very pretty to look at" is doing real work: visualization of agent activity is itself a useful diagnostic tool

## Concepts
[[building-from-scratch]], [[vibe-coding]]

## Creator
[[andrej-karpathy]]
