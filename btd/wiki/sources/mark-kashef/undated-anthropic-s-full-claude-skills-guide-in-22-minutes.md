---
title: "Anthropic's Full Claude Skills Guide In 22 Minutes"
creator: mark-kashef
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=TzJecWCbex0"
---

# Anthropic's Full Claude Skills Guide In 22 Minutes

Dense summary of Anthropic's 33-page official skills guide, diagrammed across all six chapters: fundamentals, planning, testing, distribution, patterns, and resources. Covers the three-level skill loading system (YAML front matter always in context, procedural body loaded on match, linked scripts loaded on use), five design patterns (sequential, multi-MCP, iterative refinement, conditional branching, domain-specific), and how to write trigger words that reliably activate the right skill. Required reading for anyone building serious Claude Code workflows.

## Key Ideas
- Skills load in three tiers — only the YAML front matter is always in context; deeper layers load just-in-time
- Perfect skill descriptions: what it does + when to use it + trigger phrases, all under 1000 characters
- Five design patterns: sequential, multi-MCP coordination, iterative refinement, conditional branching, domain-specific
- Skills can replace n8n/Make/Zapier workflows by embedding Python functions directly
- Battle-test a skill for a month before making it global; skills should evolve with your workflow

## Concepts
[[skills-as-workflows]], [[claude-code]], [[mcp-servers]], [[context-engineering]], [[prompt-design]]

## Creator
[[mark-kashef]]
