---
title: "andrej-karpathy thread — New art project. Train and inference GPT in 243 lines of pure, dependency-free P"
creator: "andrej-karpathy"
date: 2026-02-11T21:14:49.000Z
url: "https://x.com/karpathy/status/2021694437152157847"
platform: twitter
source_type: twitter
tweet_id: "2021694437152157847"
thread_id: "2021694437152157847"
is_thread: true
tweet_count: 3
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# andrej-karpathy thread — New art project. Train and inference GPT in 243 lines of pure, dependency-free P

**Creator**: andrej-karpathy  
**Date**: 2026-02-11T21:14:49.000Z  
**URL**: https://x.com/karpathy/status/2021694437152157847  
**Platform**: Twitter/X  
**Tweets**: 3
**Last Tweet**: 2026-02-12T08:21:38.000Z


## Thread

### Tweet 1

- Date: 2026-02-11T21:14:49.000Z
- URL: https://x.com/karpathy/status/2021694437152157847
- Tweet ID: 2021694437152157847

New art project. 
Train and inference GPT in 243 lines of pure, dependency-free Python. This is the *full* algorithmic content of what is needed. Everything else is just for efficiency. I cannot simplify this any further.
https://t.co/HmiRrQugnP

### Tweet 2

- Date: 2026-02-12T01:19:43.000Z
- URL: https://x.com/karpathy/status/2021756066678419508
- Tweet ID: 2021756066678419508

(oops should have added to this thread instead of separate post). Made a few changes and put it up here as a mirror to the gist because I wanted it to one page. https://t.co/piVWid3nsb https://t.co/7zZ9WeERsq

### Tweet 3

- Date: 2026-02-12T08:21:38.000Z
- URL: https://x.com/karpathy/status/2021862247568642485
- Tweet ID: 2021862247568642485

I spent more test time compute and realized that my micrograd can be dramatically simplified even further. You just return local gradients for each op and get backward() to do the multiply (chaining) with global gradient from loss. So each op just expresses the bare fundamentals of what it needs to: the forward computation and the backward gradients for it.

Huge savings from 243 lines of code to just 200 (~18%).

Also, the code now fits even more beautifully to 3 columns and happens to break just right:

Column 1: Dataset, Tokenizer, Autograd
Column 2: GPT model
Column 3: Training, Inference

Ok now surely we are done.
