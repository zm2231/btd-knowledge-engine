---
title: "andrej-karpathy thread — Software horror: litellm PyPI supply chain attack"
creator: andrej-karpathy
platform: twitter
date: 2026-03-24
url: "https://x.com/karpathy/status/2036487306585268612"
---

# litellm supply chain attack: a concrete AI security failure

Karpathy flags a significant supply chain attack: `pip install litellm` was exfiltrating SSH keys, cloud credentials, API keys, shell history, crypto wallets, and CI/CD secrets. With 97 million monthly downloads and downstream packages, the blast radius is enormous. The post is a concrete example of the security risks Karpathy had theorized about in the Mac mini tweet — and a direct warning for anyone building AI pipelines.

## Key Ideas
- Supply chain attacks via PyPI are real and active — a single compromised package with high download counts causes massive credential exposure
- litellm is in almost every AI application stack; the contagion spreads to any project that depends on it transitively
- The attack exfiltrated credentials silently — no obvious error, no warning, just data leaving the machine
- Defense: pin your dependency versions, audit your dependency graph, use virtual environments, don't run `pip install` as root

## Concepts
[[llm-limitations]], [[vibe-coding]]

## Creator
[[andrej-karpathy]]
