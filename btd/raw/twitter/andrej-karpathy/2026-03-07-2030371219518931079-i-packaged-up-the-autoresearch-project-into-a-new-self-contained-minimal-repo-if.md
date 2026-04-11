---
title: "andrej-karpathy thread — I packaged up the \"autoresearch\" project into a new self-contained minimal repo "
creator: "andrej-karpathy"
date: 2026-03-07T19:53:15.000Z
url: "https://x.com/karpathy/status/2030371219518931079"
platform: twitter
source_type: twitter
tweet_id: "2030371219518931079"
thread_id: "2030371219518931079"
is_thread: true
tweet_count: 2
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# andrej-karpathy thread — I packaged up the "autoresearch" project into a new self-contained minimal repo 

**Creator**: andrej-karpathy  
**Date**: 2026-03-07T19:53:15.000Z  
**URL**: https://x.com/karpathy/status/2030371219518931079  
**Platform**: Twitter/X  
**Tweets**: 2
**Last Tweet**: 2026-03-07T20:03:18.000Z


## Thread

### Tweet 1

- Date: 2026-03-07T19:53:15.000Z
- URL: https://x.com/karpathy/status/2030371219518931079
- Tweet ID: 2030371219518931079

I packaged up the "autoresearch" project into a new self-contained minimal repo if people would like to play over the weekend. It's basically nanochat LLM training core stripped down to a single-GPU, one file version of ~630 lines of code, then:

- the human iterates on the prompt (.md)
- the AI agent iterates on the training code (.py)

The goal is to engineer your agents to make the fastest research progress indefinitely and without any of your own involvement. In the image, every dot is a complete LLM training run that lasts exactly 5 minutes. The agent works in an autonomous loop on a git feature branch and accumulates git commits to the training script as it finds better settings (of lower validation loss by the end) of the neural network architecture, the optimizer, all the hyperparameters, etc. You can imagine comparing the research progress of different prompts, different agents, etc.

https://t.co/YCvOwwjOzF
Part code, part sci-fi, and a pinch of psychosis :)

### Tweet 2

- Date: 2026-03-07T20:03:18.000Z
- URL: https://x.com/karpathy/status/2030373745991536982
- Tweet ID: 2030373745991536982

(I still have the bigger cousin running on prod nanochat, working a bigger model and on 8XH100, which looks like this now. I'll just leave this running for a while...) https://t.co/aWya9hpUMl
