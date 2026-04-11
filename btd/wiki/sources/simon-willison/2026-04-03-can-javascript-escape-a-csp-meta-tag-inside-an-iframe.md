---
title: "Can JavaScript Escape a CSP Meta Tag Inside an Iframe?"
creator: simon-willison
platform: articles
date: 2026-04-03
url: https://simonwillison.net/2026/Apr/3/test-csp-iframe-escape/#atom-everything
---

# Can JavaScript Escape a CSP Meta Tag Inside an Iframe?

A focused security research note on sandboxing untrusted HTML in iframes — the same problem Claude Artifacts solves — without a separate domain. Willison confirms that injecting a `<meta http-equiv="Content-Security-Policy">` tag at the top of iframe content works and resists subsequent JavaScript manipulation, giving builders a lightweight way to safely render AI-generated HTML.

## Key Ideas
- Injecting a CSP meta tag at the top of iframe content enforces the policy even if untrusted JS tries to remove or override it afterward
- This approach avoids the complexity of running a separate domain to host sandboxed content
- Directly relevant to anyone building Claude Artifacts-style "live preview" features
- Security sandbox design is a real concern when letting LLMs output executable HTML/JS

## Concepts
[[vibe-coding]], [[ai-agents]]

## Creator
[[simon-willison]]
