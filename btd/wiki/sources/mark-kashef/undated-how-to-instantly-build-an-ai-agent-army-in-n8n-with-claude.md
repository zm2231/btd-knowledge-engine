---
title: "How to INSTANTLY Build An AI Agent Army in n8n with Claude"
creator: mark-kashef
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=u2NluvotA80"
---

# How to INSTANTLY Build An AI Agent Army in n8n with Claude

Detailed walkthrough of generating a full n8n orchestrator + subagent system from one prompt using Claude 4 Opus with extended thinking and web search. The key unlock: pre-build an `agents_tools.json` file by manually attaching every tool you might want to a single n8n AI agent, downloading it as JSON, and using that as a knowledge base for Claude — solving the problem of Opus not reliably knowing which tool methods the AI agent node accepts vs. trigger-only nodes. Includes three business examples (TikTok agency, pet concierge, coffee chain).

## Key Ideas
- Claude 4 Opus + extended thinking + web search = reliable n8n JSON generation without manual cheat sheets
- The agents_tools.json cheat code: build one agent with all desired tools in n8n, export JSON, feed to Claude as training data
- AI agent nodes only accept a subset of tool methods (not triggers) — this is the core error source to solve
- Structure: one orchestrator agent → subworkflows with 2–5 tools each; avoid sub-subworkflow chains
- Prompt placement matters: business description at the end of a long prompt gets more attention

## Concepts
[[ai-agents]], [[prompt-design]], [[context-engineering]]

## Creator
[[mark-kashef]]
