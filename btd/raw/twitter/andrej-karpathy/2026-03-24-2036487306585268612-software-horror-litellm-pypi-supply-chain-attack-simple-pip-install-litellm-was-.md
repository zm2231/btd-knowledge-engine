---
title: "andrej-karpathy thread — Software horror: litellm PyPI supply chain attack. Simple `pip install litellm` "
creator: "andrej-karpathy"
date: 2026-03-24T16:56:24.000Z
url: "https://x.com/karpathy/status/2036487306585268612"
platform: twitter
source_type: twitter
tweet_id: "2036487306585268612"
thread_id: "2036487306585268612"
is_thread: true
tweet_count: 1
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# andrej-karpathy thread — Software horror: litellm PyPI supply chain attack. Simple `pip install litellm` 

**Creator**: andrej-karpathy  
**Date**: 2026-03-24T16:56:24.000Z  
**URL**: https://x.com/karpathy/status/2036487306585268612  
**Platform**: Twitter/X  
**Tweets**: 1


## Thread

### Tweet 1

- Date: 2026-03-24T16:56:24.000Z
- URL: https://x.com/karpathy/status/2036487306585268612
- Tweet ID: 2036487306585268612

Software horror: litellm PyPI supply chain attack. 

Simple `pip install litellm` was enough to exfiltrate SSH keys, AWS/GCP/Azure creds, Kubernetes configs, git credentials, env vars (all your API keys), shell history, crypto wallets, SSL private keys, CI/CD secrets, database passwords.

LiteLLM itself has 97 million downloads per month which is already terrible, but much worse, the contagion spreads to any project that depends on litellm. For example, if you did `pip install dspy` (which depended on litellm>=1.64.0), you'd also be pwnd. Same for any other large project that depended on litellm.

Afaict the poisoned version was up for only less than ~1 hour. The attack had a bug which led to its discovery - Callum McMahon was using an MCP plugin inside Cursor that pulled in litellm as a transitive dependency. When litellm 1.82.8 installed, their machine ran out of RAM and crashed. So if the attacker didn't vibe code this attack it could have been undetected for many days or weeks.

Supply chain attacks like this are basically the scariest thing imaginable in modern software. Every time you install any depedency you could be pulling in a poisoned package anywhere deep inside its entire depedency tree. This is especially risky with large projects that might have lots and lots of dependencies. The credentials that do get stolen in each attack can then be used to take over more accounts and compromise more packages.

Classical software engineering would have you believe that dependencies are good (we're building pyramids from bricks), but imo this has to be re-evaluated, and it's why I've been so growingly averse to them, preferring to use LLMs to "yoink" functionality when it's simple enough and possible.
