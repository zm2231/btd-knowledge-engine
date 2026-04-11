---
title: "Claude Code and What Comes Next"
creator: ethan-mollick
platform: articles
date: 2026-01-07
url: "https://www.oneusefulthing.org/p/claude-code-and-what-comes-next"
---

# Claude Code and What Comes Next

Mollick's hands-on introduction to Claude Code as a new category of AI tool — not a chatbot, but a persistent autonomous agent with access to your computer. He demonstrates it building and deploying a working e-commerce site from a single prompt in 74 minutes. The article explains the architectural tricks that make this possible: context compaction (Memento-style note-taking to work around limited context windows), Skills (on-demand instruction sets the AI loads when needed), and subagents (specialized models launched by the main agent for specific tasks). Written for non-programmers, it argues these tools are broadly relevant to all knowledge workers.

## Key Ideas
- Context compaction lets Claude work for hours: when the window fills, it summarizes progress, clears memory, and resumes from notes
- Skills are plain-language instruction files the AI loads contextually — non-technical users can write them, and the AI can help create them
- Subagents allow parallel specialized work: one agent researches, another creates images, the orchestrator delegates
- MCP (Model Context Protocol) lets any company give Claude access to their tools or data — creates a flexible extension ecosystem
- The current tools are built for programmers but harnesses for other knowledge work are coming — don't dismiss them as coding-only

## Concepts
[[ai-agents]], [[vibe-coding]], [[skills-as-workflows]]

## Creator
[[ethan-mollick]]
