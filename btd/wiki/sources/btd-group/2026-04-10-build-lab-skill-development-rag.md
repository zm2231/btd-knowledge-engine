---
title: "Build Lab - Skill Development and RAG Architecture"
creator: btd-group
platform: transcript
date: 2026-04-10
---

# Build Lab - Skill Development and RAG Architecture

A live BTD build session where Zain and Max work through the architecture of the personalized knowledge engine — the system that became this repo. The group debates RAG vs. graph retrieval, constraint-first scoping, and the product question of who the system is actually for: technical builders, non-technical learners, or "borrowed brain" users who want expert judgment without jargon. Real-time Claude Code use, skill iteration, and architecture tradeoffs surface throughout.

## Key Ideas
- RAG is the pragmatic choice over knowledge graphs for a quick build; graph is overkill unless the problem demands traversal
- Constraint mapping before architecture is essential — AI without constraints makes assumptions that degrade output quality silently
- The system design frames three possible products: judgment tool for builders, personalized learning engine for learners, and borrowed brain for non-technical builders; the group leans toward the latter two
- "Load the problem, not the solution" — Zain's scoping skill starts with current state before recommending a stack
- Prompts should eliminate AI's assumptions by asking explicitly what is ambiguous before any build begins

## Concepts
[[vibe-coding]], [[skills-as-workflows]], [[borrowed-judgment]], [[claude-code]]

## Creator
[[nate-jones]]
