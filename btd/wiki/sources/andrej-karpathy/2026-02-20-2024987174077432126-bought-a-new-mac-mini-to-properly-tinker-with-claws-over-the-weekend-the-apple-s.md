---
title: "andrej-karpathy thread — Bought a Mac mini to tinker with Claude; security concerns about running agents locally"
creator: andrej-karpathy
platform: twitter
date: 2026-02-20
url: "https://x.com/karpathy/status/2024987174077432126"
---

# Running AI coding agents locally: security considerations

Karpathy notes that Claude Code is selling Mac minis in droves, but raises genuine security concerns about running agentic coding tools locally: a 400K-line vibe-coded codebase with root access to your machine, being actively attacked at scale, with documented RCE vulnerabilities and supply chain poisoning vectors. Not a dismissal of the tools — he's tinkering — but a sober assessment of the attack surface.

## Key Ideas
- AI coding agents running locally have significant security surface: they often need broad filesystem access and execute arbitrary commands
- Supply chain poisoning via agent-executed package installs is a realistic attack vector — the agent's trust model doesn't distinguish malicious packages
- "Vibe coded" at scale means limited security review; popular tools become high-value targets quickly
- The right posture is sandboxing and principle of least privilege, not avoidance

## Concepts
[[vibe-coding]], [[llm-limitations]]

## Creator
[[andrej-karpathy]]
