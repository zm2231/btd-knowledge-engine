---
title: "I gave Claude Code our entire codebase. Our customers noticed. | Al Chen (Galileo)"
creator: lenny-rachitsky
platform: article
date: 2026-04-06
url: "https://www.lennysnewsletter.com/p/i-gave-claude-code-our-entire-codebase"
---

# I gave Claude Code our entire codebase. Our customers noticed. | Al Chen (Galileo)

Al Chen (field engineer at Galileo, zero engineering background) built a system using Claude Code to query all 15 of Galileo's repositories simultaneously, combined with Confluence docs and customer-specific quirks files, to answer enterprise customer questions without engineering escalation. The result: customers noticed improved response quality and speed. Key insight: code is often a better source of truth than documentation because it never goes stale. Al's system turns single customer questions into scalable knowledge by capturing the context and answer in a reusable format.

## Key Ideas
- Code as source of truth: repos are more reliable than docs because they're always current
- 16-line daily sync script (written by Claude Code) pulls the latest main branch across all 15 repos every morning
- Customer quirks files: capturing deployment-specific knowledge per customer makes answers hyper-personalized
- MCPs enable combining repo context, Confluence, and Slack in a single query
- Single questions become scalable knowledge when you capture the context and answer systematically

## Concepts
[[build-in-public]], [[startup-ideas]], [[great-work]]

## Creator
[[lenny-rachitsky]]
