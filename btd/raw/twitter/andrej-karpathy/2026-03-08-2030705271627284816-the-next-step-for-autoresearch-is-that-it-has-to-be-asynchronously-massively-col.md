---
title: "andrej-karpathy thread — The next step for autoresearch is that it has to be asynchronously massively col"
creator: "andrej-karpathy"
date: 2026-03-08T18:00:40.000Z
url: "https://x.com/karpathy/status/2030705271627284816"
platform: twitter
source_type: twitter
tweet_id: "2030705271627284816"
thread_id: "2030705271627284816"
is_thread: true
tweet_count: 1
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# andrej-karpathy thread — The next step for autoresearch is that it has to be asynchronously massively col

**Creator**: andrej-karpathy  
**Date**: 2026-03-08T18:00:40.000Z  
**URL**: https://x.com/karpathy/status/2030705271627284816  
**Platform**: Twitter/X  
**Tweets**: 1


## Thread

### Tweet 1

- Date: 2026-03-08T18:00:40.000Z
- URL: https://x.com/karpathy/status/2030705271627284816
- Tweet ID: 2030705271627284816

The next step for autoresearch is that it has to be asynchronously massively collaborative for agents (think: SETI@home style). The goal is not to emulate a single PhD student, it's to emulate a research community of them.

Current code synchronously grows a single thread of commits in a particular research direction. But the original repo is more of a seed, from which could sprout commits contributed by agents on all kinds of different research directions or for different compute platforms. Git(Hub) is *almost* but not really suited for this. It has a softly built in assumption of one "master" branch, which temporarily forks off into PRs just to merge back a bit later.

I tried to prototype something super lightweight that could have a flavor of this, e.g. just a Discussion, written by my agent as a summary of its overnight run:
https://t.co/tmZeqyDY1W
Alternatively, a PR has the benefit of exact commits:
https://t.co/CZIbuJIqlk
but you'd never want to actually merge it... You'd just want to "adopt" and accumulate branches of commits. But even in this lightweight way, you could ask your agent to first read the Discussions/PRs using GitHub CLI for inspiration, and after its research is done, contribute a little "paper" of findings back.

I'm not actually exactly sure what this should look like, but it's a big idea that is more general than just the autoresearch repo specifically. Agents can in principle easily juggle and collaborate on thousands of commits across arbitrary branch structures. Existing abstractions will accumulate stress as intelligence, attention and tenacity cease to be bottlenecks.
