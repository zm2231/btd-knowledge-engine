---
title: "datasette-ports 0.2"
creator: simon-willison
platform: articles
date: 2026-04-06
url: https://simonwillison.net/2026/Apr/6/datasette-ports-2/#atom-everything
---

# datasette-ports 0.2

Patch release decoupling datasette-ports from the full Datasette install — `uvx datasette-ports` now works standalone. Small but meaningful: the tool becomes more useful to anyone who wants the port-listing feature without the overhead of a full Datasette installation.

## Key Ideas
- Standalone invocation via `uvx` removes the install barrier for a simple utility — good ergonomic design
- Releasing the plugin install path alongside standalone usage serves both power users and casual users

## Concepts
[[claude-code]]

## Creator
[[simon-willison]]
