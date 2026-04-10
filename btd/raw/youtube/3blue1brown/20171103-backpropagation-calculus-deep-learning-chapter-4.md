---
title: "Backpropagation calculus | Deep Learning Chapter 4"
creator: "3blue1brown"
source_type: youtube
date: 20171103
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=tIeHLnjs5U8"
video_id: "tIeHLnjs5U8"
duration: "10:17"
transcript_method: "youtube-captions"
segment_count: 138
char_count: 8973
status: ingested
topics: []
meta_patterns: []
---

# Backpropagation calculus | Deep Learning Chapter 4

**Creator**: 3Blue1Brown | **Date**: 20171103 | **Duration**: 10:17
**URL**: https://www.youtube.com/watch?v=tIeHLnjs5U8
**Transcript**: 138 segments, 8973 chars via youtube-captions

## Transcript

[Submit subtitle corrections at criblate.com] The hard assumption here is that you've watched part 3, giving an intuitive walkthrough of the backpropagation algorithm. Here we get a little more formal and dive into the relevant calculus. It's normal for this to be at least a little confusing, so the mantra to regularly pause and ponder certainly applies as much here as anywhere else. Our main goal is to show how people in machine learning commonly think about the chain rule from calculus in the context of networks, which has a different feel from how most introductory calculus courses approach the subject. For those of you uncomfortable with the relevant calculus, I do have a whole series on the topic. Let's start off with an extremely simple network, one where each layer has a single neuron in it. This network is determined by three weights and three biases, and our goal is to understand how sensitive the cost function is to these variables. That way, we know which adjustments to those terms will cause the most efficient decrease to the cost function. And we're just going to focus on the connection between the last two neurons. Let's label the activation of that last neuron with a superscript L, indicating which layer it's in, so the activation of the previous neuron is a^(L-1). These are not exponents, they're just a way of indexing what we're talking about, since I want to save subscripts for different indices later on. Let's say that the value we want this last activation to be for a given training example is y, for example, y might be 0 or 1. So the cost of this network for a single training example is a^(L - y) squared. We'll denote the cost of that one training example as C0. As a reminder, this last activation is determined by a weight, which I'm going to call w(L), times the previous neuron's activation plus some bias, which I'll call b(L). And then you pump that through some special nonlinear function like the sigmoid or ReLU. It's actually going to make things easier for us if we give a special name to this weighted sum, like z, with the same superscript as the relevant activations. This is a lot of terms, and a way you might conceptualize it is that the weight, previous action and the bias all together are used to compute z, which in turn lets us compute a, which finally, along with a constant y, lets us compute the cost. And of course a(L-1) is influenced by its own weight and bias and such... but we're not going to focus on that right now. All of these are just numbers, right? And it can be nice to think of each one as having its own little number line. Our first goal is to understand how sensitive the cost function is to small changes in our weight w(L). Or phrased differently, what is the derivative of C with respect to w(L)? When you see this del w term, think of it as meaning some tiny nudge to W, like a change by 0.01, and think of this del C term as meaning whatever the resulting nudge to the cost is. What we want is their ratio. Conceptually, this tiny nudge to w(L) causes some nudge to z(L), which in turn causes some nudge to a(L), which directly influences the cost. So we break things up by first looking at the ratio of a tiny change to z(L) to this tiny change w(L), that is, the derivative of z(L) with respect to w(L). Likewise, you then consider the ratio of the change to a(L) to the tiny change in z(L) that caused it, as well as the ratio between the final nudge to C and this intermediate nudge to a(L). This right here is the chain rule, where multiplying together these three ratios gives us the sensitivity of C to small changes in w(L). So on screen right now, there's a lot of symbols, and take a moment to make sure it's clear what they all are, because now we're going to compute the relevant derivatives. The derivative of C with respect to a(L) works out to be 2(a(L)-y). Notice this means its size is proportional to the difference between the network's output and the thing we want it to be, so if that output was very different, even slight changes stand to have a big impact on the final cost function. The derivative of a(L) with respect to z(L) is just the derivative of our sigmoid function, or whatever nonlinearity you choose to use. And the derivative of z(L) with respect to w(L)... In this case comes out to be a(L-1). Now I don't know about you, but I think it's easy to get stuck head down in the formulas without taking a moment to sit back and remind yourself of what they all mean. In the case of this last derivative, the amount that the small nudge to the weight influenced the last layer depends on how strong the previous neuron is. Remember, this is where the neurons-that-fire-together-wire-together idea comes in. And all of this is the derivative with respect to w(L) only of the cost for a specific single training example. Since the full cost function involves averaging together all those costs across many different training examples, its derivative requires averaging this expression over all training examples. And of course, that is just one component of the gradient vector, which itself is built up from the partial derivatives of the cost function with respect to all those weights and biases. But even though that's just one of the many partial derivatives we need, it's more than 50% of the work. The sensitivity to the bias, for example, is almost identical. We just need to change out this del z del w term for a del z del b. And if you look at the relevant formula, that derivative comes out to be 1. Also, and this is where the idea of propagating backwards comes in, you can see how sensitive this cost function is to the activation of the previous layer. Namely, this initial derivative in the chain rule expression, the sensitivity of z to the previous activation, comes out to be the weight w(L). And again, even though we're not going to be able to directly influence that previous layer activation, it's helpful to keep track of, because now we can just keep iterating this same chain rule idea backwards to see how sensitive the cost function is to previous weights and previous biases. And you might think this is an overly simple example, since all layers have one neuron, and things are going to get exponentially more complicated for a real network. But honestly, not that much changes when we give the layers multiple neurons, really it's just a few more indices to keep track of. Rather than the activation of a given layer simply being a(L), it's also going to have a subscript indicating which neuron of that layer it is. Let's use the letter k to index the layer L-1, and j to index the layer L. For the cost, again we look at what the desired output is, but this time we add up the squares of the differences between these last layer activations and the desired output. That is, you take a sum over a(L)j minus yj squared. Since there's a lot more weights, each one has to have a couple more indices to keep track of where it is, so let's call the weight of the edge connecting this kth neuron to the jth neuron, w(L)_jk. Those indices might feel a little backwards at first, but it lines up with how you'd index the weight matrix I talked about in the part 1 video. Just as before, it's still nice to give a name to the relevant weighted sum, like z, so that the activation of the last layer is just your special function, like the sigmoid, applied to z. You can see what I mean, where all of these are essentially the same equations we had before in the one-neuron-per-layer case, it's just that it looks a little more complicated. And indeed, the chain-ruled derivative expression describing how sensitive the cost is to a specific weight looks essentially the same. I'll leave it to you to pause and think about each of those terms if you want. What does change here, though, is the derivative of the cost with respect to one of the activations in the layer L-1. In this case, the difference is that the neuron influences the cost function through multiple different paths. That is, on the one hand, it influences a(L)0, which plays a role in the cost function, but it also has an influence on a(L)1, which also plays a role in the cost function, and you have to add those up. And that, well, that's pretty much it. Once you know how sensitive the cost function is to the activations in this second-to-last layer, you can just repeat the process for all the weights and biases feeding into that layer. So pat yourself on the back! If all of this makes sense, you have now looked deep into the heart of backpropagation, the workhorse behind how neural networks learn. These chain rule expressions give you the derivatives that determine each component in the gradient that helps minimize the cost of the network by repeatedly stepping downhill. If you sit back and think about all that, this is a lot of layers of complexity to wrap your mind around, so don't worry if it takes time for your mind to digest it all.

## Timed Segments

[0:00] [Submit subtitle corrections at criblate.com]
[0:04] The hard assumption here is that you&#39;ve watched part 3,
[0:06] giving an intuitive walkthrough of the backpropagation algorithm.
[0:11] Here we get a little more formal and dive into the relevant calculus.
[0:14] It&#39;s normal for this to be at least a little confusing,
[0:17] so the mantra to regularly pause and ponder certainly applies as much here
[0:20] as anywhere else.
[0:21] Our main goal is to show how people in machine learning commonly think about
[0:25] the chain rule from calculus in the context of networks,
[0:28] which has a different feel from how most introductory calculus courses
[0:32] approach the subject.
[0:34] For those of you uncomfortable with the relevant calculus,
[0:36] I do have a whole series on the topic.
[0:39] Let&#39;s start off with an extremely simple network,
[0:43] one where each layer has a single neuron in it.
[0:46] This network is determined by three weights and three biases,
[0:49] and our goal is to understand how sensitive the cost function is to these variables.
[0:55] That way, we know which adjustments to those terms will
[0:58] cause the most efficient decrease to the cost function.
[1:01] And we&#39;re just going to focus on the connection between the last two neurons.
[1:05] Let&#39;s label the activation of that last neuron with a superscript L,
[1:10] indicating which layer it&#39;s in, so the activation of the previous neuron is a^(L-1).
[1:16] These are not exponents, they&#39;re just a way of indexing what we&#39;re talking about,
[1:20] since I want to save subscripts for different indices later on.
[1:23] Let&#39;s say that the value we want this last activation to be for
[1:27] a given training example is y, for example, y might be 0 or 1.
[1:32] So the cost of this network for a single training example is a^(L - y) squared.
[1:40] We&#39;ll denote the cost of that one training example as C0.
[1:45] As a reminder, this last activation is determined by a weight,
[1:49] which I&#39;m going to call w(L), times the previous neuron&#39;s activation plus some bias,
[1:55] which I&#39;ll call b(L).
[1:57] And then you pump that through some special nonlinear function like the sigmoid or ReLU.
[2:01] It&#39;s actually going to make things easier for us if we give a special name to
[2:05] this weighted sum, like z, with the same superscript as the relevant activations.
[2:10] This is a lot of terms, and a way you might conceptualize it is that the weight,
[2:15] previous action and the bias all together are used to compute z,
[2:19] which in turn lets us compute a, which finally, along with a constant y,
[2:23] lets us compute the cost.
[2:27] And of course a(L-1) is influenced by its own weight and bias and such...
[2:31] but we&#39;re not going to focus on that right now.
[2:35] All of these are just numbers, right?
[2:38] And it can be nice to think of each one as having its own little number line.
[2:41] Our first goal is to understand how sensitive the
[2:45] cost function is to small changes in our weight w(L).
[2:49] Or phrased differently, what is the derivative of C with respect to w(L)?
[2:55] When you see this del w term, think of it as meaning some tiny nudge to W,
[3:00] like a change by 0.01, and think of this del C term as meaning
[3:04] whatever the resulting nudge to the cost is.
[3:08] What we want is their ratio.
[3:11] Conceptually, this tiny nudge to w(L) causes some nudge to z(L),
[3:15] which in turn causes some nudge to a(L), which directly influences the cost.
[3:23] So we break things up by first looking at the ratio of a tiny change to z(L) to
[3:28] this tiny change w(L), that is, the derivative of z(L) with respect to w(L).
[3:33] Likewise, you then consider the ratio of the change to a(L) to
[3:36] the tiny change in z(L) that caused it, as well as the ratio
[3:40] between the final nudge to C and this intermediate nudge to a(L).
[3:45] This right here is the chain rule, where multiplying together these
[3:50] three ratios gives us the sensitivity of C to small changes in w(L).
[3:56] So on screen right now, there&#39;s a lot of symbols,
[3:59] and take a moment to make sure it&#39;s clear what they all are,
[4:02] because now we&#39;re going to compute the relevant derivatives.
[4:07] The derivative of C with respect to a(L) works out to be 2(a(L)-y).
[4:13] Notice this means its size is proportional to the difference between the network&#39;s
[4:18] output and the thing we want it to be, so if that output was very different,
[4:22] even slight changes stand to have a big impact on the final cost function.
[4:27] The derivative of a(L) with respect to z(L) is just the derivative
[4:31] of our sigmoid function, or whatever nonlinearity you choose to use.
[4:37] And the derivative of z(L) with respect to w(L)... In this case comes out to be a(L-1).
[4:45] Now I don&#39;t know about you, but I think it&#39;s easy to get stuck head down in the
[4:49] formulas without taking a moment to sit back and remind yourself of what they all mean.
[4:53] In the case of this last derivative, the amount that the small nudge to the
[4:58] weight influenced the last layer depends on how strong the previous neuron is.
[5:03] Remember, this is where the neurons-that-fire-together-wire-together idea comes in.
[5:09] And all of this is the derivative with respect to w(L)
[5:12] only of the cost for a specific single training example.
[5:16] Since the full cost function involves averaging together all
[5:19] those costs across many different training examples,
[5:22] its derivative requires averaging this expression over all training examples.
[5:28] And of course, that is just one component of the gradient vector,
[5:31] which itself is built up from the partial derivatives of the
[5:35] cost function with respect to all those weights and biases.
[5:40] But even though that&#39;s just one of the many partial derivatives we need,
[5:43] it&#39;s more than 50% of the work.
[5:46] The sensitivity to the bias, for example, is almost identical.
[5:50] We just need to change out this del z del w term for a del z del b.
[5:58] And if you look at the relevant formula, that derivative comes out to be 1.
[6:06] Also, and this is where the idea of propagating backwards comes in,
[6:10] you can see how sensitive this cost function is to the activation of the previous layer.
[6:15] Namely, this initial derivative in the chain rule expression,
[6:19] the sensitivity of z to the previous activation, comes out to be the weight w(L).
[6:26] And again, even though we&#39;re not going to be able to directly influence
[6:30] that previous layer activation, it&#39;s helpful to keep track of,
[6:33] because now we can just keep iterating this same chain rule idea backwards
[6:37] to see how sensitive the cost function is to previous weights and previous biases.
[6:43] And you might think this is an overly simple example, since all layers have one neuron,
[6:47] and things are going to get exponentially more complicated for a real network.
[6:51] But honestly, not that much changes when we give the layers multiple neurons,
[6:55] really it&#39;s just a few more indices to keep track of.
[6:59] Rather than the activation of a given layer simply being a(L),
[7:02] it&#39;s also going to have a subscript indicating which neuron of that layer it is.
[7:07] Let&#39;s use the letter k to index the layer L-1, and j to index the layer L.
[7:15] For the cost, again we look at what the desired output is,
[7:18] but this time we add up the squares of the differences between these last layer
[7:23] activations and the desired output.
[7:26] That is, you take a sum over a(L)j minus yj squared.
[7:33] Since there&#39;s a lot more weights, each one has to have a couple more
[7:37] indices to keep track of where it is, so let&#39;s call the weight of
[7:41] the edge connecting this kth neuron to the jth neuron, w(L)_jk.
[7:45] Those indices might feel a little backwards at first,
[7:48] but it lines up with how you&#39;d index the weight matrix I talked about in
[7:52] the part 1 video.
[7:53] Just as before, it&#39;s still nice to give a name to the relevant weighted sum,
[7:57] like z, so that the activation of the last layer is just your special function,
[8:02] like the sigmoid, applied to z.
[8:04] You can see what I mean, where all of these are essentially the same equations we had
[8:08] before in the one-neuron-per-layer case, it&#39;s just that it looks a little more
[8:13] complicated.
[8:15] And indeed, the chain-ruled derivative expression describing how
[8:19] sensitive the cost is to a specific weight looks essentially the same.
[8:23] I&#39;ll leave it to you to pause and think about each of those terms if you want.
[8:28] What does change here, though, is the derivative of the cost
[8:32] with respect to one of the activations in the layer L-1.
[8:37] In this case, the difference is that the neuron influences
[8:40] the cost function through multiple different paths.
[8:44] That is, on the one hand, it influences a(L)0, which plays a role in the cost function,
[8:50] but it also has an influence on a(L)1, which also plays a role in the cost function,
[8:55] and you have to add those up.
[8:59] And that, well, that&#39;s pretty much it.
[9:03] Once you know how sensitive the cost function is to the
[9:06] activations in this second-to-last layer, you can just repeat
[9:09] the process for all the weights and biases feeding into that layer.
[9:13] So pat yourself on the back!
[9:15] If all of this makes sense, you have now looked deep into the heart of backpropagation,
[9:20] the workhorse behind how neural networks learn.
[9:23] These chain rule expressions give you the derivatives that determine each component in
[9:28] the gradient that helps minimize the cost of the network by repeatedly stepping downhill.
[9:34] If you sit back and think about all that, this is a lot of layers of complexity to
[9:38] wrap your mind around, so don&#39;t worry if it takes time for your mind to digest it all.
