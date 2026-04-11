---
title: "andrej-karpathy thread — Enabled fp8 training for +4.3% improvement to \"time to GPT-2\", down to 2.91 hour"
creator: "andrej-karpathy"
date: 2026-02-03T21:49:32.000Z
url: "https://x.com/karpathy/status/2018804068874064198"
platform: twitter
source_type: twitter
tweet_id: "2018804068874064198"
thread_id: "2018804068874064198"
is_thread: true
tweet_count: 1
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# andrej-karpathy thread — Enabled fp8 training for +4.3% improvement to "time to GPT-2", down to 2.91 hour

**Creator**: andrej-karpathy  
**Date**: 2026-02-03T21:49:32.000Z  
**URL**: https://x.com/karpathy/status/2018804068874064198  
**Platform**: Twitter/X  
**Tweets**: 1


## Thread

### Tweet 1

- Date: 2026-02-03T21:49:32.000Z
- URL: https://x.com/karpathy/status/2018804068874064198
- Tweet ID: 2018804068874064198

Enabled fp8 training for +4.3% improvement to "time to GPT-2", down to 2.91 hours now. Also worth noting that if you use 8XH100 spot instance prices, this GPT-2 repro really only costs ~$20. So this is exciting -

GPT-2 (7 years ago): too dangerous to release.
GPT-2 (today): new MNIST! :)

Surely this can go well below 1 hr.

A few more words on fp8, it was a little bit more tricky than I anticipated and it took me a while to reach for it and even now I'm not 100% sure if it's a great idea because of less overall support for it. On paper, fp8 on H100 is 2X the FLOPS, but in practice it's a lot less. We're not 100% compute bound in the actual training run, there is extra overhead from added scale conversions, the GEMMs are not large enough on GPT-2 scale to make the overhead clearly worth it, and of course - at lower precision the quality of each step is smaller. For rowwise scaling recipe the fp8 vs bf16 loss curves were quite close but it was stepping net slower. For tensorwise scaling the loss curves separated more (i.e. each step is of worse quality), but we now at least do get a speedup (~7.3%). You can naively recover the performance by bumping the training horizon (you train for more steps, but each step is faster) and hope that on net you come out ahead. In this case and overall, playing with these recipes and training horizons a bit, so far I ended up with ~5% speedup. torchao in their paper reports Llama3-8B fp8 training speedup of 25% (vs my ~7.3% without taking into account capability), which is closer to what I was hoping for initially, though Llama3-8B is a lot bigger model. This is probably not the end of the fp8 saga. it should be possible to improve things by picking and choosing which layers to apply it on exactly, and being more careful with the numerics across the network.
