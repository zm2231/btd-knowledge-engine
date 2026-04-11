---
title: "andrej-karpathy thread — nanochat now trains GPT-2 capability model in just 2 hours on a single 8XH100 no"
creator: "andrej-karpathy"
date: 2026-03-05T23:30:25.000Z
url: "https://x.com/karpathy/status/2029701092347630069"
platform: twitter
source_type: twitter
tweet_id: "2029701092347630069"
thread_id: "2029701092347630069"
is_thread: true
tweet_count: 3
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# andrej-karpathy thread — nanochat now trains GPT-2 capability model in just 2 hours on a single 8XH100 no

**Creator**: andrej-karpathy  
**Date**: 2026-03-05T23:30:25.000Z  
**URL**: https://x.com/karpathy/status/2029701092347630069  
**Platform**: Twitter/X  
**Tweets**: 3
**Last Tweet**: 2026-03-06T16:03:19.000Z


## Thread

### Tweet 1

- Date: 2026-03-05T23:30:25.000Z
- URL: https://x.com/karpathy/status/2029701092347630069
- Tweet ID: 2029701092347630069

nanochat now trains GPT-2 capability model in just 2 hours on a single 8XH100 node (down from ~3 hours 1 month ago). Getting a lot closer to ~interactive! A bunch of tuning and features (fp8) went in but the biggest difference was a switch of the dataset from FineWeb-edu to NVIDIA ClimbMix (nice work NVIDIA!). I had tried Olmo, FineWeb, DCLM which all led to regressions, ClimbMix worked really well out of the box (to the point that I am slightly suspicious about about goodharting, though reading the paper it seems ~ok).

In other news, after trying a few approaches for how to set things up, I now have AI Agents iterating on nanochat automatically, so I'll just leave this running for a while, go relax a bit and enjoy the feeling of post-agi :). Visualized here as an example: 110 changes made over the last ~12 hours, bringing the validation loss so far from 0.862415 down to 0.858039 for a d12 model, at no cost to wall clock time. The agent works on a feature branch, tries out ideas, merges them when they work and iterates. Amusingly, over the last ~2 weeks I almost feel like I've iterated more on the "meta-setup" where I optimize and tune the agent flows even more than the nanochat repo directly.

### Tweet 2

- Date: 2026-03-05T23:35:31.000Z
- URL: https://x.com/karpathy/status/2029702379034267985
- Tweet ID: 2029702379034267985

sorry just to clarify - the real benchmark of interest is:

"what is the research org agent code that produces improvements on nanochat the fastest?"

this is the new meta.

### Tweet 3

- Date: 2026-03-06T16:03:19.000Z
- URL: https://x.com/karpathy/status/2029950967031247231
- Tweet ID: 2029950967031247231

ah yes, this is what post-agi feels like :) i didn't touch anything. brb sauna https://t.co/odILIDAQaF
