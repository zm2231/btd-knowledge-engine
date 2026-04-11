---
title: "andrej-karpathy thread — CLIs are super exciting precisely because they are a legacy technology"
creator: andrej-karpathy
platform: twitter
date: 2026-02-24
url: "https://x.com/karpathy/status/2026360908398862478"
---

# CLIs as native AI agent interfaces

Karpathy makes a counterintuitive argument: CLIs are exciting for AI agents precisely because they are old. Every CLI tool has decades of documentation that LLMs have trained on, standardized input/output conventions that agents understand natively, and composability via pipes that agents can exploit. GUIs require visual grounding; CLIs require only text — which is exactly what LLMs produce.

## Key Ideas
- CLIs are a "legacy" technology that AI agents can use natively — the entire Unix toolkit (pipes, redirects, scripting) is available without browser automation or vision models
- LLMs have trained on extensive documentation for all major CLI tools — they can figure out flags, syntax, and composition without looking anything up
- Combining CLI tools (e.g., Polymarket CLI + GitHub CLI + shell scripting) lets agents build arbitrary data pipelines on demand
- The implication for builders: investing in CLI interfaces for your tool makes it AI-accessible for free

## Concepts
[[vibe-coding]], [[context-engineering]]

## Creator
[[andrej-karpathy]]
