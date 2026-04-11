---
title: "The Axios supply chain attack used individually targeted social engineering"
creator: simon-willison
platform: articles
date: 2026-04-03
url: https://simonwillison.net/2026/Apr/3/supply-chain-social-engineering/#atom-everything
---

# The Axios supply chain attack used individually targeted social engineering

A detailed postmortem on a sophisticated supply chain attack against the Axios JavaScript library, where attackers used individually tailored social engineering — fake Slack workspaces, cloned founder identities, and a fake video call — to install a Remote Access Trojan and steal credentials. Critical awareness content for any builder shipping open source software.

## Key Ideas
- Attackers built a convincing fake company presence (branded Slack, LinkedIn posts, fake team profiles) to earn trust before the actual attack
- The RAT was delivered by exploiting the urgency of joining a meeting — a vector that catches even experienced developers off-guard
- Supply chain attacks now use AI-assisted, personalized social engineering, not just code injection
- Any OSS maintainer whose project is worth targeting needs to treat unexpected software installation requests as high-risk, even in meeting contexts

## Concepts
[[llm-limitations]]

## Creator
[[simon-willison]]
