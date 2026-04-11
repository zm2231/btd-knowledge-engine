---
title: "scan-for-secrets 0.1"
creator: simon-willison
platform: articles
date: 2026-04-05
url: https://simonwillison.net/2026/Apr/5/scan-for-secrets-3/#atom-everything
---

# scan-for-secrets 0.1

Initial release of Willison's CLI tool for scanning directories for accidentally exposed API keys and secrets before publishing Claude Code session transcripts. Built using README-driven development: write the full spec in a README first, then hand it to Claude Code with red/green TDD to implement it.

## Key Ideas
- README-driven development is a practical prompt-design pattern: write the full spec first, then let Claude Code implement it — the README becomes both the spec and the documentation
- The tool scans not just literal secrets but common encodings (JSON escaping, backslash escaping) that a naive grep would miss
- Solves a real risk for builders who share AI session transcripts publicly
- Red/green TDD used as a discipline to keep Claude Code honest during implementation

## Concepts
[[claude-code]], [[prompt-design]], [[vibe-coding]]

## Creator
[[simon-willison]]
