---
title: "But what is the Fourier Transform?  A visual introduction."
creator: "3blue1brown"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=spUNpyF58BY"
video_id: "spUNpyF58BY"
duration: "19:42"
transcript_method: "youtube-captions"
segment_count: 293
char_count: 19339
status: ingested
topics: []
meta_patterns: []
---

# But what is the Fourier Transform?  A visual introduction.

**Creator**: 3blue1brown | **Duration**: 19:42
**URL**: https://www.youtube.com/watch?v=spUNpyF58BY
**Transcript**: 293 segments, 19339 chars

## Transcript

This right here is what we're going to build to this video,  a certain animated approach to thinking about a super important idea from math,  the Fourier transform. For anyone unfamiliar with what that is, my number one goal  here is just for the video to be an introduction to that topic. But even for those of you who are already familiar with it,  I still think that there's something fun and enriching about seeing what all of its  components actually look like. The central example to start is going to be the classic one,  decomposing frequencies from sound. But after that I also want to show a glimpse of how this idea extends well beyond  sound and frequency into many seemingly disparate areas of math, and even physics. Really, it's crazy just how ubiquitous this idea is. Let's dive in. This sound right here is a pure A, 440 beats per second,  meaning if you were to measure the air pressure right next to your  headphones or your speaker as a function of time,  it would oscillate up and down around its usual equilibrium in this wave,  making 440 oscillations each second. A lower pitch note, like a D, has the same structure, just fewer beats per second. And when both of them are played at once, what do you think the resulting pressure vs. time graph looks like? Well, at any point in time, this pressure difference is going to  be the sum of what it would be for each of those notes individually,  which let's face it is kind of a complicated thing to think about. At some points the peaks match up with each other, resulting in a really high pressure. At other points they tend to cancel out. And all in all, what you get is a wave-ish pressure vs. time graph that is not a pure sine wave, it's something more complicated. And as you add in other notes, the wave gets more and more complicated. But right now, all it is is a combination of four pure frequencies,  so it seems needlessly complicated given the low amount of information put into it. A microphone recording any sound just picks up on the air pressure  at many different points in time, it only sees the final sum. So our central question is going to be how you can take a signal  like this and decompose it into the pure frequencies that make it up. Pretty interesting, right? Adding up those signals really mixes them all together,  so pulling them back apart feels akin to unmixing multiple paint colors that have  all been stirred up together. The general strategy is going to be to build for ourselves a mathematical machine that  treats signals with a given frequency differently from how it treats other signals. To start, consider simply taking a pure signal,  say with a lowly 3 beats per second, so we can plot it easily. And let's limit ourselves to looking at a finite portion of this graph,  in this case the portion between 0 seconds and 4.5 seconds. The key idea is going to be to take this graph and sort of wrap it up around a circle. Concretely, here's what I mean by that. Imagine a little rotating vector where at each point in time  its length is equal to the height of our graph for that time. So high points of the graph correspond to a greater distance from the origin,  and low points end up closer to the origin. And right now I'm drawing it in such a way that moving forward 2  seconds in time corresponds to a single rotation around the circle. Our little vector drawing this wound up graph is rotating at half a cycle per second. So this is important, there are two different frequencies at play here. There's the frequency of our signal, which goes up and down 3 times per second,  and then separately there's the frequency with which we're wrapping the graph  around the circle, which at the moment is half of a rotation per second. But we can adjust that second frequency however we want. Maybe we want to wrap it around faster? Or maybe we go and wrap it around slower? And that choice of winding frequency determines what the wound up graph looks like. Some of the diagrams that come out of this can be pretty complicated,  although they are very pretty, but it's important to keep in mind that  all that's happening here is that we're wrapping the signal around a circle. The vertical lines that I'm drawing up top, by the way,  are just a way to keep track of the distance on the original graph that corresponds to  a full rotation around the circle. So lines spaced out by 1.5 seconds would mean  it takes 1.5 seconds to make one full revolution. And at this point we might have some sort of vague sense that something special will  happen when the winding frequency matches the frequency of our signal, 3 beats per second. All of the high points on the graph happen on the right side of the circle,  and all of the low points happen on the left. But how precisely can we take advantage of that in  our attempt to build a frequency unmixing machine? Well, imagine this graph is having some kind of mass to it, like a metal wire. This little dot is going to represent the center of mass of that wire. As we change the frequency and the graph winds up differently,  that center of mass kind of wobbles around a bit. And for most of the winding frequencies, the peaks and valleys are all spaced out  around the circle in such a way that the center of mass stays pretty close to the origin. But when the winding frequency is the same as the frequency of our signal,  in this case 3 cycles per second, all of the peaks are on the right,  and all of the valleys are on the left, so the center of mass is unusually far  to the right. Here, to capture this, let's draw some kind of plot that keeps  track of where that center of mass is for each winding frequency. Of course, the center of mass is a two-dimensional thing,  it requires two coordinates to fully keep track of, but for the moment,  let's only keep track of the x-coordinate. So for a frequency of zero, when everything is bunched up on the right,  this x-coordinate is relatively high. And then as you increase that winding frequency,  and the graph balances out around the circle, the x-coordinate of  that center of mass goes closer to zero, and it just kind of wobbles around a bit. But then, at 3 beats per second, there's a spike, as everything lines up to the right. This right here is the central construct, so let's sum up what we have so far. We have that original intensity vs time graph,  and then we have the wound up version of that in some two-dimensional plane,  and then as a third thing, we have a plot for how the winding frequency influences  the center of mass of that graph. And by the way, let's look back at those really low frequencies near zero. This big spike around zero in our new frequency plot just  corresponds to the fact that the whole cosine wave is shifted up. If I had chosen a signal that oscillates around zero, dipping into negative values,  then as we play around with various winding frequencies,  this plot of the winding frequency vs center of mass would only have a spike  at the value of 3. But negative values are a little bit weird and messy to think about,  especially for a first example, so let's just continue thinking in terms of the  shifted up graph. I just want you to understand that that spike around zero only corresponds to the shift. Our main focus, as far as frequency decomposition is concerned, is that bump at 3. This whole plot is what I'll call the almost Fourier transform of the original signal. There's a couple small distinctions between this and the actual Fourier transform,  which I'll get to in a couple minutes, but already you might be able to  see how this machine lets us pick out the frequency of a signal. Just to play around with it a little bit more, take a different Fourier signal,  let's say with a lower frequency of 2 beats per second, and do the same thing. Wind it around a circle, imagine different potential winding frequencies,  and as you do that keep track of where the center of mass of that graph is,  and then plot the x coordinate of that center of mass as you adjust the winding frequency. Just like before, we get a spike when the winding frequency is the same as  the signal frequency, which in this case is when it equals 2 cycles per second. But the real key point, the thing that makes this machine so delightful,  is how it enables us to take a signal consisting of multiple frequencies and pick out  what they are. Imagine taking the two signals we just looked at,  the wave with 3 beats per second and the wave with 2 beats per second, and add them up. Like I said earlier, what you get is no longer a nice pure cosine wave,  it's something a little more complicated. But imagine throwing this into our winding frequency machine. It is certainly the case that as you wrap this thing around it looks a  lot more complicated, you have this chaos and chaos and chaos and chaos,  and then whoop, things seem to line up really nicely at 2 cycles per second. Then as you continue on it's more chaos and more chaos and more chaos and chaos  and chaos and chaos, whoop, things nicely align again at 3 cycles per second. And like I said before, the wound up graph can look kind of busy and complicated,  but all it is is the relatively simple idea of wrapping the graph around a circle. It's just a more complicated graph and a pretty quick winding frequency. Now what's going on here with the two different spikes is that if you were to  take two signals and then apply this almost Fourier transform to each of them  individually, and then add up the results, what you get is the same as if you  first added up the signals and then applied this almost Fourier transform. And the attentive viewers among you might want to pause and ponder  and convince yourself that what I just said is actually true. It's a pretty good test to verify for yourself that it's clear  what exactly is being measured inside this winding machine. Now this property makes things really useful to us,  because the transform of a pure frequency is close to zero everywhere except  for a spike around that frequency, so when you add together two pure frequencies,  the transform graph just has these little peaks above the frequencies that went into it. So this little mathematical machine does exactly what we wanted. It pulls out the original frequencies from their jumbled up sums,  unmixing the mixed bucket of paint. And before continuing into the full math that describes this operation,  let's just get a quick glimpse of one context where this thing is useful, sound editing. Let's say that you have some recording and it's got an  annoying high pitch that you would like to filter out. Well at first your signal is coming in as a function of various intensities over time,  different voltages given to your speaker from one millisecond to the next. But we want to think of this in terms of frequencies. So when you take the Fourier transform of that signal,  the annoying high pitch is going to show up just as a spike at some high frequency. Filtering that out by just smushing the spike down,  what you'd be looking at is the Fourier transform of a sound that's just like your  recording, only without that high frequency. Luckily there's a notion of an inverse Fourier transform that tells  you which signal would have produced this as its Fourier transform. I'll be talking about that inverse much more fully in the next video,  but long story short, applying the Fourier transform to the Fourier  transform gives you back something close to the original function. Kind of, this is a little bit of a lie, but it's in the direction of truth. And most of the reason it's a lie is that I still have yet to  tell you what the actual Fourier transform is,  since it's a little more complex than this x-coordinate of the center of mass idea. First off, bringing back this wound up graph and looking at its center of mass,  the x-coordinate is really only half the story, right? I mean, this thing is in two dimensions, it's got a y-coordinate as well. And as is typical in math, whenever you're dealing with something two-dimensional,  it's elegant to think of it as the complex plane,  where this center of mass is going to be a complex number that has both a real  and an imaginary part. And the reason for talking in terms of complex numbers,  rather than just saying it has two coordinates,  is that complex numbers lend themselves to really nice descriptions of  things that have to do with winding and rotation. For example, Euler's formula famously tells us that if you take e to some number times i,  you're going to land on the point that you get if you were to walk that number of  units around a circle with radius 1 counterclockwise starting on the right. So imagine you wanted to describe rotating at a rate of 1 cycle per second. One thing you could do is take the expression e to the 2 pi times i times t,  where t is the amount of time that has passed, since for a circle with radius 1,  2 pi describes the full length of its circumference. And this is a little dizzying to look at, so maybe you want to describe  a different frequency, something lower and more reasonable,  and for that you would just multiply that time t in the exponent by the frequency f. For example, if f was 1 tenth, then this vector makes one full turn every 10 seconds,  since the time t has to increase all the way to 10 before the full exponent looks like 2  pi i. I have another video giving some intuition on why this is the  behavior of e to the x for imaginary inputs, if you're curious,  but for right now we're just going to take it as a given. Now why am I telling you this, you might ask? Well it gives us a really nice way to write down the idea  of winding up the graph into a single tight little formula. First off, the convention in the context of Fourier transforms is to think about  rotating in the clockwise direction, so let's throw a negative sign up into that exponent. Now take some function describing a signal intensity versus time,  like this pure cosine wave we had before, and call it g of t. If you multiply this exponential expression times g of t,  it means that the rotating complex number is getting scaled up and down according to  the value of this function. So you can think of this little rotating vector with  its changing length as drawing the wound up graph. So think about it, this is awesome, this really small expression  is a super elegant way to encapsulate the whole idea of  winding a graph around a circle with a variable frequency, f. And remember, the thing we want to do with this wound up graph is to track  its center of mass, so think about what formula is going to capture that. Well, to approximate it at least, you might sample a whole bunch of times  from the original signal, see where those points end up on the wound up graph,  and then just take an average, that is, add them all together as complex numbers,  and then divide by the number of points you've sampled. This will become more accurate if you sample more points which are closer together. And in the limit, rather than looking at the sum of a whole bunch of  points divided by the number of points, you take an integral of this  function divided by the size of the time interval we're looking at. The idea of integrating a complex valued function might seem weird,  and to anyone who's shaky with calculus maybe even intimidating,  but the underlying meaning here really doesn't require any calculus knowledge. The whole expression is just the center of mass of the wound up graph. So great, step by step, we have built up this kind of complicated but let's face it,  surprisingly small expression for the whole winding machine idea I talked about,  and now there is only one final distinction to point out between this and the actual  honest-to-goodness Fourier transform, namely, just don't divide out by the time interval. The Fourier transform is just the integral part of this. What that means is that instead of looking at the center of mass,  you would scale it up by some amount. If the portion of the original graph you were using spanned 3 seconds,  you would multiply the center of mass by 3. If it was spanning 6 seconds, you would multiply the center of mass by 6. Physically, this has the effect that when a certain frequency persists for a long time,  then the magnitude of the Fourier transform at that frequency is scaled up more and more. For example, what we're looking at here is how when you have a pure frequency of 2  beats per second and you wind it around the graph at 2 cycles per second,  the center of mass stays in the same spot, just tracing out the same shape.  But the longer that signal persists, the larger the value of the Fourier transform  at that frequency. For other frequencies, even if you just increase it by a bit,  this is cancelled out by the fact that for longer time intervals,  you're giving the wound-up graph more of a chance to balance itself around the circle. That is a lot of different moving parts, so let's  step back and summarize what we have so far. The Fourier transform of an intensity vs. time function, like g of t, is a new function, which doesn't have time as an input,  but instead takes in a frequency, what I've been calling the winding frequency. In terms of notation, by the way, the common convention is to  call this new function g-hat with a little circumflex on top of it. The output of this function is a complex number,  some point in the 2d plane that corresponds to the strength of a given  frequency in the original signal. The plot I've been graphing for the Fourier transform is just the real  component of that output, the x-coordinate, but you could also graph  the imaginary component separately if you wanted a fuller description. And all of this is encapsulated inside that formula we built up. And out of context, you can imagine how seeing this formula would seem sort of daunting,  but if you understand how exponentials correspond to rotation,  how multiplying that by the function g of t means drawing a wound up version of the  graph, and how an integral of a complex valued function can be interpreted in terms  of a center of mass idea, you can see how this whole thing carries with it a very rich  intuitive meaning. And by the way, one quick small note before we can call this wrapped up. Even though in practice, with things like sound editing,  you'll be integrating over a finite time interval,  the theory of Fourier transforms is often phrased where the bounds of this  integral are negative infinity and infinity. Concretely, what that means is that you consider this expression  for all possible finite time intervals, and you just ask,  what is its limit as that time interval grows to infinity? And man oh man, there is so much more to say. So much, I don't want to call it done here. This transform extends to corners of math well  beyond the idea of extracting frequencies from signal. So the next video I put out is going to go through a couple of these,  and that's really where things start getting interesting. So stay subscribed for when that comes out, or an alternate option  is to just binge on a couple 3Blue and Brown videos so that the  YouTube recommender is more inclined to show you new things that come out. Really the choice is yours. Thank you.

## Timed Segments

[0:04] This right here is what we&#39;re going to build to this video, 
[0:07] a certain animated approach to thinking about a super important idea from math, 
[0:11] the Fourier transform.
[0:13] For anyone unfamiliar with what that is, my number one goal 
[0:16] here is just for the video to be an introduction to that topic.
[0:20] But even for those of you who are already familiar with it, 
[0:23] I still think that there&#39;s something fun and enriching about seeing what all of its 
[0:27] components actually look like.
[0:29] The central example to start is going to be the classic one, 
[0:32] decomposing frequencies from sound.
[0:34] But after that I also want to show a glimpse of how this idea extends well beyond 
[0:39] sound and frequency into many seemingly disparate areas of math, and even physics.
[0:44] Really, it&#39;s crazy just how ubiquitous this idea is.
[0:49] Let&#39;s dive in.
[0:50] This sound right here is a pure A, 440 beats per second, 
[0:54] meaning if you were to measure the air pressure right next to your 
[0:58] headphones or your speaker as a function of time, 
[1:02] it would oscillate up and down around its usual equilibrium in this wave, 
[1:06] making 440 oscillations each second.
[1:09] A lower pitch note, like a D, has the same structure, just fewer beats per second.
[1:15] And when both of them are played at once, what do you think the resulting pressure vs.
[1:19] time graph looks like?
[1:22] Well, at any point in time, this pressure difference is going to 
[1:25] be the sum of what it would be for each of those notes individually, 
[1:29] which let&#39;s face it is kind of a complicated thing to think about.
[1:33] At some points the peaks match up with each other, resulting in a really high pressure.
[1:38] At other points they tend to cancel out.
[1:41] And all in all, what you get is a wave-ish pressure vs.
[1:44] time graph that is not a pure sine wave, it&#39;s something more complicated.
[1:48] And as you add in other notes, the wave gets more and more complicated.
[1:53] But right now, all it is is a combination of four pure frequencies, 
[1:57] so it seems needlessly complicated given the low amount of information put into it.
[2:03] A microphone recording any sound just picks up on the air pressure 
[2:06] at many different points in time, it only sees the final sum.
[2:10] So our central question is going to be how you can take a signal 
[2:14] like this and decompose it into the pure frequencies that make it up.
[2:18] Pretty interesting, right?
[2:20] Adding up those signals really mixes them all together, 
[2:23] so pulling them back apart feels akin to unmixing multiple paint colors that have 
[2:27] all been stirred up together.
[2:29] The general strategy is going to be to build for ourselves a mathematical machine that 
[2:34] treats signals with a given frequency differently from how it treats other signals.
[2:40] To start, consider simply taking a pure signal, 
[2:43] say with a lowly 3 beats per second, so we can plot it easily.
[2:47] And let&#39;s limit ourselves to looking at a finite portion of this graph, 
[2:51] in this case the portion between 0 seconds and 4.5 seconds.
[2:55] The key idea is going to be to take this graph and sort of wrap it up around a circle.
[3:04] Concretely, here&#39;s what I mean by that.
[3:07] Imagine a little rotating vector where at each point in time 
[3:10] its length is equal to the height of our graph for that time.
[3:14] So high points of the graph correspond to a greater distance from the origin, 
[3:18] and low points end up closer to the origin.
[3:22] And right now I&#39;m drawing it in such a way that moving forward 2 
[3:25] seconds in time corresponds to a single rotation around the circle.
[3:29] Our little vector drawing this wound up graph is rotating at half a cycle per second.
[3:35] So this is important, there are two different frequencies at play here.
[3:38] There&#39;s the frequency of our signal, which goes up and down 3 times per second, 
[3:42] and then separately there&#39;s the frequency with which we&#39;re wrapping the graph 
[3:47] around the circle, which at the moment is half of a rotation per second.
[3:51] But we can adjust that second frequency however we want.
[3:54] Maybe we want to wrap it around faster?
[3:58] Or maybe we go and wrap it around slower?
[4:03] And that choice of winding frequency determines what the wound up graph looks like.
[4:09] Some of the diagrams that come out of this can be pretty complicated, 
[4:12] although they are very pretty, but it&#39;s important to keep in mind that 
[4:15] all that&#39;s happening here is that we&#39;re wrapping the signal around a circle.
[4:20] The vertical lines that I&#39;m drawing up top, by the way, 
[4:23] are just a way to keep track of the distance on the original graph that corresponds to 
[4:27] a full rotation around the circle.
[4:30] So lines spaced out by 1.5 seconds would mean 
[4:33] it takes 1.5 seconds to make one full revolution.
[4:37] And at this point we might have some sort of vague sense that something special will 
[4:41] happen when the winding frequency matches the frequency of our signal, 3 beats per second.
[4:46] All of the high points on the graph happen on the right side of the circle, 
[4:49] and all of the low points happen on the left.
[4:52] But how precisely can we take advantage of that in 
[4:55] our attempt to build a frequency unmixing machine?
[4:59] Well, imagine this graph is having some kind of mass to it, like a metal wire.
[5:04] This little dot is going to represent the center of mass of that wire.
[5:08] As we change the frequency and the graph winds up differently, 
[5:11] that center of mass kind of wobbles around a bit.
[5:16] And for most of the winding frequencies, the peaks and valleys are all spaced out 
[5:19] around the circle in such a way that the center of mass stays pretty close to the origin.
[5:26] But when the winding frequency is the same as the frequency of our signal, 
[5:30] in this case 3 cycles per second, all of the peaks are on the right, 
[5:34] and all of the valleys are on the left, so the center of mass is unusually far 
[5:38] to the right.
[5:42] Here, to capture this, let&#39;s draw some kind of plot that keeps 
[5:45] track of where that center of mass is for each winding frequency.
[5:49] Of course, the center of mass is a two-dimensional thing, 
[5:51] it requires two coordinates to fully keep track of, but for the moment, 
[5:54] let&#39;s only keep track of the x-coordinate.
[5:57] So for a frequency of zero, when everything is bunched up on the right, 
[6:01] this x-coordinate is relatively high.
[6:03] And then as you increase that winding frequency, 
[6:06] and the graph balances out around the circle, the x-coordinate of 
[6:10] that center of mass goes closer to zero, and it just kind of wobbles around a bit.
[6:26] But then, at 3 beats per second, there&#39;s a spike, as everything lines up to the right.
[6:44] This right here is the central construct, so let&#39;s sum up what we have so far.
[6:47] We have that original intensity vs time graph, 
[6:50] and then we have the wound up version of that in some two-dimensional plane, 
[6:55] and then as a third thing, we have a plot for how the winding frequency influences 
[7:00] the center of mass of that graph.
[7:03] And by the way, let&#39;s look back at those really low frequencies near zero.
[7:07] This big spike around zero in our new frequency plot just 
[7:11] corresponds to the fact that the whole cosine wave is shifted up.
[7:16] If I had chosen a signal that oscillates around zero, dipping into negative values, 
[7:21] then as we play around with various winding frequencies, 
[7:25] this plot of the winding frequency vs center of mass would only have a spike 
[7:30] at the value of 3.
[7:32] But negative values are a little bit weird and messy to think about, 
[7:35] especially for a first example, so let&#39;s just continue thinking in terms of the 
[7:39] shifted up graph.
[7:41] I just want you to understand that that spike around zero only corresponds to the shift.
[7:45] Our main focus, as far as frequency decomposition is concerned, is that bump at 3.
[7:51] This whole plot is what I&#39;ll call the almost Fourier transform of the original signal.
[7:56] There&#39;s a couple small distinctions between this and the actual Fourier transform, 
[8:00] which I&#39;ll get to in a couple minutes, but already you might be able to 
[8:03] see how this machine lets us pick out the frequency of a signal.
[8:07] Just to play around with it a little bit more, take a different Fourier signal, 
[8:11] let&#39;s say with a lower frequency of 2 beats per second, and do the same thing.
[8:16] Wind it around a circle, imagine different potential winding frequencies, 
[8:20] and as you do that keep track of where the center of mass of that graph is, 
[8:24] and then plot the x coordinate of that center of mass as you adjust the winding frequency.
[8:30] Just like before, we get a spike when the winding frequency is the same as 
[8:34] the signal frequency, which in this case is when it equals 2 cycles per second.
[8:39] But the real key point, the thing that makes this machine so delightful, 
[8:43] is how it enables us to take a signal consisting of multiple frequencies and pick out 
[8:48] what they are.
[8:49] Imagine taking the two signals we just looked at, 
[8:51] the wave with 3 beats per second and the wave with 2 beats per second, and add them up.
[8:56] Like I said earlier, what you get is no longer a nice pure cosine wave, 
[8:59] it&#39;s something a little more complicated.
[9:02] But imagine throwing this into our winding frequency machine.
[9:06] It is certainly the case that as you wrap this thing around it looks a 
[9:09] lot more complicated, you have this chaos and chaos and chaos and chaos, 
[9:12] and then whoop, things seem to line up really nicely at 2 cycles per second.
[9:16] Then as you continue on it&#39;s more chaos and more chaos and more chaos and chaos 
[9:20] and chaos and chaos, whoop, things nicely align again at 3 cycles per second.
[9:23] And like I said before, the wound up graph can look kind of busy and complicated, 
[9:27] but all it is is the relatively simple idea of wrapping the graph around a circle.
[9:31] It&#39;s just a more complicated graph and a pretty quick winding frequency.
[9:36] Now what&#39;s going on here with the two different spikes is that if you were to 
[9:40] take two signals and then apply this almost Fourier transform to each of them 
[9:45] individually, and then add up the results, what you get is the same as if you 
[9:49] first added up the signals and then applied this almost Fourier transform.
[9:55] And the attentive viewers among you might want to pause and ponder 
[9:58] and convince yourself that what I just said is actually true.
[10:01] It&#39;s a pretty good test to verify for yourself that it&#39;s clear 
[10:04] what exactly is being measured inside this winding machine.
[10:09] Now this property makes things really useful to us, 
[10:11] because the transform of a pure frequency is close to zero everywhere except 
[10:16] for a spike around that frequency, so when you add together two pure frequencies, 
[10:20] the transform graph just has these little peaks above the frequencies that went into it.
[10:26] So this little mathematical machine does exactly what we wanted.
[10:29] It pulls out the original frequencies from their jumbled up sums, 
[10:33] unmixing the mixed bucket of paint.
[10:36] And before continuing into the full math that describes this operation, 
[10:40] let&#39;s just get a quick glimpse of one context where this thing is useful, sound editing.
[10:44] Let&#39;s say that you have some recording and it&#39;s got an 
[10:47] annoying high pitch that you would like to filter out.
[10:50] Well at first your signal is coming in as a function of various intensities over time, 
[10:55] different voltages given to your speaker from one millisecond to the next.
[10:59] But we want to think of this in terms of frequencies.
[11:02] So when you take the Fourier transform of that signal, 
[11:05] the annoying high pitch is going to show up just as a spike at some high frequency.
[11:11] Filtering that out by just smushing the spike down, 
[11:13] what you&#39;d be looking at is the Fourier transform of a sound that&#39;s just like your 
[11:18] recording, only without that high frequency.
[11:21] Luckily there&#39;s a notion of an inverse Fourier transform that tells 
[11:24] you which signal would have produced this as its Fourier transform.
[11:29] I&#39;ll be talking about that inverse much more fully in the next video, 
[11:32] but long story short, applying the Fourier transform to the Fourier 
[11:36] transform gives you back something close to the original function.
[11:40] Kind of, this is a little bit of a lie, but it&#39;s in the direction of truth.
[11:44] And most of the reason it&#39;s a lie is that I still have yet to 
[11:47] tell you what the actual Fourier transform is, 
[11:50] since it&#39;s a little more complex than this x-coordinate of the center of mass idea.
[11:55] First off, bringing back this wound up graph and looking at its center of mass, 
[11:59] the x-coordinate is really only half the story, right?
[12:02] I mean, this thing is in two dimensions, it&#39;s got a y-coordinate as well.
[12:05] And as is typical in math, whenever you&#39;re dealing with something two-dimensional, 
[12:10] it&#39;s elegant to think of it as the complex plane, 
[12:12] where this center of mass is going to be a complex number that has both a real 
[12:16] and an imaginary part.
[12:21] And the reason for talking in terms of complex numbers, 
[12:23] rather than just saying it has two coordinates, 
[12:25] is that complex numbers lend themselves to really nice descriptions of 
[12:29] things that have to do with winding and rotation.
[12:32] For example, Euler&#39;s formula famously tells us that if you take e to some number times i, 
[12:37] you&#39;re going to land on the point that you get if you were to walk that number of 
[12:42] units around a circle with radius 1 counterclockwise starting on the right.
[12:47] So imagine you wanted to describe rotating at a rate of 1 cycle per second.
[12:54] One thing you could do is take the expression e to the 2 pi times i times t, 
[12:59] where t is the amount of time that has passed, since for a circle with radius 1, 
[13:04] 2 pi describes the full length of its circumference.
[13:08] And this is a little dizzying to look at, so maybe you want to describe 
[13:12] a different frequency, something lower and more reasonable, 
[13:16] and for that you would just multiply that time t in the exponent by the frequency f.
[13:21] For example, if f was 1 tenth, then this vector makes one full turn every 10 seconds, 
[13:27] since the time t has to increase all the way to 10 before the full exponent looks like 2 
[13:33] pi i.
[13:34] I have another video giving some intuition on why this is the 
[13:37] behavior of e to the x for imaginary inputs, if you&#39;re curious, 
[13:40] but for right now we&#39;re just going to take it as a given.
[13:44] Now why am I telling you this, you might ask?
[13:46] Well it gives us a really nice way to write down the idea 
[13:49] of winding up the graph into a single tight little formula.
[13:53] First off, the convention in the context of Fourier transforms is to think about 
[13:58] rotating in the clockwise direction, so let&#39;s throw a negative sign up into that exponent.
[14:04] Now take some function describing a signal intensity versus time, 
[14:08] like this pure cosine wave we had before, and call it g of t.
[14:12] If you multiply this exponential expression times g of t, 
[14:16] it means that the rotating complex number is getting scaled up and down according to 
[14:21] the value of this function.
[14:24] So you can think of this little rotating vector with 
[14:27] its changing length as drawing the wound up graph.
[14:31] So think about it, this is awesome, this really small expression 
[14:35] is a super elegant way to encapsulate the whole idea of 
[14:38] winding a graph around a circle with a variable frequency, f.
[14:43] And remember, the thing we want to do with this wound up graph is to track 
[14:47] its center of mass, so think about what formula is going to capture that.
[14:51] Well, to approximate it at least, you might sample a whole bunch of times 
[14:55] from the original signal, see where those points end up on the wound up graph, 
[15:00] and then just take an average, that is, add them all together as complex numbers, 
[15:05] and then divide by the number of points you&#39;ve sampled.
[15:09] This will become more accurate if you sample more points which are closer together.
[15:14] And in the limit, rather than looking at the sum of a whole bunch of 
[15:18] points divided by the number of points, you take an integral of this 
[15:21] function divided by the size of the time interval we&#39;re looking at.
[15:25] The idea of integrating a complex valued function might seem weird, 
[15:29] and to anyone who&#39;s shaky with calculus maybe even intimidating, 
[15:32] but the underlying meaning here really doesn&#39;t require any calculus knowledge.
[15:36] The whole expression is just the center of mass of the wound up graph.
[15:41] So great, step by step, we have built up this kind of complicated but let&#39;s face it, 
[15:46] surprisingly small expression for the whole winding machine idea I talked about, 
[15:51] and now there is only one final distinction to point out between this and the actual 
[15:56] honest-to-goodness Fourier transform, namely, just don&#39;t divide out by the time interval.
[16:02] The Fourier transform is just the integral part of this.
[16:06] What that means is that instead of looking at the center of mass, 
[16:09] you would scale it up by some amount.
[16:11] If the portion of the original graph you were using spanned 3 seconds, 
[16:15] you would multiply the center of mass by 3.
[16:19] If it was spanning 6 seconds, you would multiply the center of mass by 6.
[16:25] Physically, this has the effect that when a certain frequency persists for a long time, 
[16:30] then the magnitude of the Fourier transform at that frequency is scaled up more and more.
[16:36] For example, what we&#39;re looking at here is how when you have a pure frequency of 2 
[16:40] beats per second and you wind it around the graph at 2 cycles per second, 
[16:45] the center of mass stays in the same spot, just tracing out the same shape. 
[16:49] But the longer that signal persists, the larger the value of the Fourier transform 
[16:54] at that frequency.
[16:56] For other frequencies, even if you just increase it by a bit, 
[16:59] this is cancelled out by the fact that for longer time intervals, 
[17:02] you&#39;re giving the wound-up graph more of a chance to balance itself around the circle.
[17:08] That is a lot of different moving parts, so let&#39;s 
[17:11] step back and summarize what we have so far.
[17:14] The Fourier transform of an intensity vs.
[17:17] time function, like g of t, is a new function, which doesn&#39;t have time as an input, 
[17:22] but instead takes in a frequency, what I&#39;ve been calling the winding frequency.
[17:28] In terms of notation, by the way, the common convention is to 
[17:31] call this new function g-hat with a little circumflex on top of it.
[17:35] The output of this function is a complex number, 
[17:38] some point in the 2d plane that corresponds to the strength of a given 
[17:43] frequency in the original signal.
[17:46] The plot I&#39;ve been graphing for the Fourier transform is just the real 
[17:49] component of that output, the x-coordinate, but you could also graph 
[17:53] the imaginary component separately if you wanted a fuller description.
[17:57] And all of this is encapsulated inside that formula we built up.
[18:01] And out of context, you can imagine how seeing this formula would seem sort of daunting, 
[18:07] but if you understand how exponentials correspond to rotation, 
[18:10] how multiplying that by the function g of t means drawing a wound up version of the 
[18:15] graph, and how an integral of a complex valued function can be interpreted in terms 
[18:20] of a center of mass idea, you can see how this whole thing carries with it a very rich 
[18:25] intuitive meaning.
[18:27] And by the way, one quick small note before we can call this wrapped up.
[18:30] Even though in practice, with things like sound editing, 
[18:33] you&#39;ll be integrating over a finite time interval, 
[18:36] the theory of Fourier transforms is often phrased where the bounds of this 
[18:40] integral are negative infinity and infinity.
[18:43] Concretely, what that means is that you consider this expression 
[18:46] for all possible finite time intervals, and you just ask, 
[18:49] what is its limit as that time interval grows to infinity?
[18:54] And man oh man, there is so much more to say.
[18:57] So much, I don&#39;t want to call it done here.
[18:58] This transform extends to corners of math well 
[19:01] beyond the idea of extracting frequencies from signal.
[19:04] So the next video I put out is going to go through a couple of these, 
[19:06] and that&#39;s really where things start getting interesting.
[19:10] So stay subscribed for when that comes out, or an alternate option 
[19:13] is to just binge on a couple 3Blue and Brown videos so that the 
[19:16] YouTube recommender is more inclined to show you new things that come out.
[19:19] Really the choice is yours.
[19:26] Thank you.
