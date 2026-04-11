---
title: "Anthropic's Project Glasswing - restricting Claude Mythos to security researchers - sounds necessary to me"
creator: simon-willison
platform: articles
date: 2026-04-07
url: https://simonwillison.net/2026/Apr/7/project-glasswing/#atom-everything
---

# Anthropic's Project Glasswing - restricting Claude Mythos to security researchers - sounds necessary to me

Anthropic's Claude Mythos is too capable at security research to release publicly — it found vulnerabilities in every major OS and browser, chained multi-step exploits, and independently discovered a 27-year-old OpenBSD bug. Willison covers the decision to restrict the model to trusted partners and endorses the approach, with full technical detail from the Anthropic Red Team blog.

## Key Ideas
- Mythos Preview achieved working Firefox exploits 181 times vs. near-0% for Opus 4.6 on the same benchmark — a qualitative capability jump, not an incremental improvement
- The model independently chained 4+ vulnerabilities into exploits, wrote JIT heap sprays, and found privilege escalation bugs across Linux and other OSes
- Anthropic's response — $100M in usage credits to vetted security partners, no public release — is a new model for managing dangerous capability releases
- This is concrete evidence that AI capability improvements can have threshold effects with serious real-world implications for infrastructure security

## Concepts
[[ai-agents]], [[llm-limitations]], [[how-llms-work]]

## Creator
[[simon-willison]]
