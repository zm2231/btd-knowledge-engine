---
title: "andrej-karpathy thread — With the coming tsunami of demand for tokens, there are significant opportunitie"
creator: "andrej-karpathy"
date: 2026-02-25T00:21:37.000Z
url: "https://x.com/karpathy/status/2026452488434651264"
platform: twitter
source_type: twitter
tweet_id: "2026452488434651264"
thread_id: "2026452488434651264"
is_thread: true
tweet_count: 1
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# andrej-karpathy thread — With the coming tsunami of demand for tokens, there are significant opportunitie

**Creator**: andrej-karpathy  
**Date**: 2026-02-25T00:21:37.000Z  
**URL**: https://x.com/karpathy/status/2026452488434651264  
**Platform**: Twitter/X  
**Tweets**: 1


## Thread

### Tweet 1

- Date: 2026-02-25T00:21:37.000Z
- URL: https://x.com/karpathy/status/2026452488434651264
- Tweet ID: 2026452488434651264

With the coming tsunami of demand for tokens, there are significant opportunities to orchestrate the underlying memory+compute *just right* for LLMs.

The fundamental and non-obvious constraint is that due to the chip fabrication process, you get two completely distinct pools of memory (of different physical implementations too): 1) on-chip SRAM that is immediately next to the compute units that is incredibly fast but of very of low capacity, and 2) off-chip DRAM which has extremely high capacity, but the contents of which you can only suck through a long straw. On top of this, there are many details of the architecture (e.g. systolic arrays), numerics, etc.

The design of the optimal physical substrate and then the orchestration of memory+compute across the top volume workflows of LLMs (inference prefill/decode, training/finetuning, etc.) with the best throughput/latency/$ is probably today's most interesting intellectual puzzle with the highest rewards (\cite 4.6T of NVDA). All of it to get many tokens, fast and cheap. Arguably, the workflow that may matter the most (inference decode *and* over long token contexts in tight agentic loops) is the one hardest to achieve simultaneously by the ~both camps of what exists today (HBM-first NVIDIA adjacent and SRAM-first Cerebras adjacent). Anyway the MatX team is A++ grade so it's my pleasure to have a small involvement and congratulations on the raise!
