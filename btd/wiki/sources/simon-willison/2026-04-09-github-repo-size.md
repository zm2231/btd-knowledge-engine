---
title: "GitHub Repo Size"
creator: simon-willison
platform: articles
date: 2026-04-09
url: https://simonwillison.net/2026/Apr/9/github-repo-size/#atom-everything
---

# GitHub Repo Size

A single-purpose browser tool that fetches GitHub repo size via the CORS-friendly public API. GitHub's UI doesn't show repo size; this tool exposes it with a URL-based interface. Illustrates the pattern of building tiny client-side tools around public APIs with no backend required.

## Key Ideas
- The GitHub API returns repo size and is CORS-friendly — no proxy or backend needed for a simple lookup tool
- Single-purpose URL-parameterized tools (`?repo=owner/name`) are easy to share and bookmark
- Shows the value of knowing which public APIs are CORS-enabled for building lightweight client-side utilities

## Concepts
[[vibe-coding]]

## Creator
[[simon-willison]]
