---
title: "scan-for-secrets 0.3"
creator: simon-willison
platform: articles
date: 2026-04-06
url: https://simonwillison.net/2026/Apr/6/scan-for-secrets/#atom-everything
---

# scan-for-secrets 0.3

Adds a `--redact` option that shows matched secrets, asks for confirmation, then rewrites files in-place replacing all matches (including encoded variants) with `REDACTED`. Turns the tool from a passive scanner into an active remediation tool, completing the workflow for safely publishing transcripts.

## Key Ideas
- The `--redact` flag completes a full remediation workflow: scan → confirm → rewrite — not just detection
- Confirmation before rewriting is a good safety pattern for any tool that modifies files in-place
- Encoding-aware redaction (handles JSON-escaped, backslash-escaped variants) is harder than it looks and worth having in a shared tool

## Concepts
[[claude-code]]

## Creator
[[simon-willison]]
