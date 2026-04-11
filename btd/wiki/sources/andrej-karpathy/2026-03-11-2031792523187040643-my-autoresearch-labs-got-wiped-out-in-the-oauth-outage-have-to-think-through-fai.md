---
title: "andrej-karpathy thread — autoresearch labs wiped out in oauth outage; intelligence brownouts"
creator: andrej-karpathy
platform: twitter
date: 2026-03-11
url: "https://x.com/karpathy/status/2031792523187040643"
---

# AI infrastructure reliability: "intelligence brownouts"

Karpathy's autoresearch labs were wiped out during an OAuth outage — all running agents lost. Brief but substantive: it surfaces the infrastructure dependency problem for persistent AI agents, and coins "intelligence brownouts" as a term for the phenomenon of AI systems going offline. The tweet is also a prompt to think seriously about failover design for long-running agent systems.

## Key Ideas
- Long-running AI agent systems have the same infrastructure reliability requirements as production services — but few teams design for it
- A single auth service outage can cascade to wipe persistent agent state, experiments, and running tasks
- "Intelligence brownouts" — periods where AI capabilities are unavailable — will become significant as AI embeds deeper into workflows
- Checkpoint strategies and auth-independent persistence are the obvious mitigations, worth designing in from the start

## Concepts
[[vibe-coding]], [[llm-limitations]]

## Creator
[[andrej-karpathy]]
