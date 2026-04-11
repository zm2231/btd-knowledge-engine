---
title: "andrej-karpathy thread — There was a nice time where researchers talked about various ideas quite openly "
creator: "andrej-karpathy"
date: 2026-03-05T23:13:33.000Z
url: "https://x.com/karpathy/status/2029696850366971921"
platform: twitter
source_type: twitter
tweet_id: "2029696850366971921"
thread_id: "2029696850366971921"
is_thread: true
tweet_count: 1
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# andrej-karpathy thread — There was a nice time where researchers talked about various ideas quite openly 

**Creator**: andrej-karpathy  
**Date**: 2026-03-05T23:13:33.000Z  
**URL**: https://x.com/karpathy/status/2029696850366971921  
**Platform**: Twitter/X  
**Tweets**: 1


## Thread

### Tweet 1

- Date: 2026-03-05T23:13:33.000Z
- URL: https://x.com/karpathy/status/2029696850366971921
- Tweet ID: 2029696850366971921

There was a nice time where researchers talked about various ideas quite openly on twitter. (before they disappeared into the gold mines :)).

My guess is that you can get quite far even in the current paradigm by introducing a number of memory ops as "tools" and throwing them into the mix in RL. E.g. current compaction and memory implementations are crappy, first, early examples that were somewhat bolted on, but both can be fairly easily generalized and made part of the optimization as just another tool during RL.

That said neither of these is fully satisfying because clearly people are capable of some weight-based updates (my personal suspicion - mostly during sleep). So there should be even more room for more exotic approaches for long-term memory that do change the weights, but exactly - the details are not obvious. This is a lot more exciting, but also more into the realm of research outside of the established prod stack.
