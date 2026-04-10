---
title: "But what is a Fourier series?  From heat flow to drawing with circles | DE4"
creator: "3blue1brown"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=r6sGWTCMz2k"
video_id: "r6sGWTCMz2k"
duration: "24:47"
transcript_method: "youtube-captions"
segment_count: 372
char_count: 24679
status: ingested
topics: []
meta_patterns: []
---

# But what is a Fourier series?  From heat flow to drawing with circles | DE4

**Creator**: 3blue1brown | **Duration**: 24:47
**URL**: https://www.youtube.com/watch?v=r6sGWTCMz2k
**Transcript**: 372 segments, 24679 chars

## Transcript

Here, we look at the math behind an animation like this one,  what's known as a complex Fourier series. Each little vector is rotating at some constant integer frequency,  and when you add them together, tip to tail, the final tip draws out some shape over time. By tweaking the initial size and angle of each vector,  we can make it draw pretty much anything we want, and here you'll see how. Before diving into it all, I want you to take  a moment to just linger on how striking this is. This particular animation has 300 rotating arrows in total. Go full screen for this if you can, the intricacy is worth it. Think about this, the action of each individual arrow is perhaps  the simplest thing you could imagine, rotation at a steady rate. And yet the collection of all added together is anything but simple,  and the mind-boggling complexity is put into an even sharper focus the farther we  zoom in, revealing the contributions of the littlest, quickest,  and downright frenetic arrows. When you consider the chaotic frenzy you're looking at,  and the clockwork rigidity underlying all the motions,  it's bizarre how the swarm acts with a kind of coordination to trace  out some very specific shape. And unlike much of the emergent complexity you find elsewhere in nature,  this is something that we have the math to describe and to control completely. Just by tuning the starting conditions, nothing more,  we can make this swarm conspire in all of the right ways to draw anything you want,  provided you have enough little arrows. What's even crazier is that the ultimate formula for all of this is incredibly short. Now often, Fourier series are described in terms of something that looks a little  different, functions of real numbers being broken down as a sum of sine waves. That turns out to be a special case of this more general rotating vector  phenomenon that we'll build up to, but it's where Fourier himself started,  and there's good reason for us to start the story there as well. Technically, this is the third video in a sequence about the heat equation,  what Fourier was working on when he developed his big idea. I would like to teach you about Fourier series in a way that doesn't depend on  you coming from those chapters, but if you have at least a high-level idea for  the problem from physics which originally motivated this piece of math,  it gives some indication for just how unexpectedly far-reaching Fourier series are. All you need to know is that we had a certain equation which tells us  how the temperature distribution on a rod would evolve over time,  and incidentally it also describes many other phenomena unrelated to heat. While it's hard to directly use this equation to figure out what will happen to an  arbitrary heat distribution, there's a simple solution if the initial function just  happens to look like a cosine wave, with the frequency tuned so that it's flat at each  end point. Specifically, as you graph what happens over time,  these waves simply get scaled down exponentially,  with higher frequency waves having a faster exponential decay. The heat equation happens to be what's known in the business as a linear equation,  meaning if you know two solutions and add them up, that sum is a new solution. You can even scale them each by some constant,  which gives you some dials to turn to construct a custom function solving the equation. This is a fairly straightforward property that you can verify for yourself,  but it's incredibly important. It means we can take our infinite family of solutions,  these exponentially decaying cosine waves, scale a few of them by some  custom constants of our choosing, and combine them to get a solution for a new,  tailor-made initial condition, which is some combination of cosine waves. One important thing I'd like you to notice is that when you combine these waves,  because the higher frequency ones decay faster,  the sum you construct will tend to smooth out over time,  as all the high frequency terms quickly go to zero,  leaving only the low frequency terms dominating. So in a funny way, all of the complexity in the evolution of this heat  distribution which the heat equation implies is captured by this  difference in the decay rates for the different pure frequency components. It's at this point that Fourier gains immortality. I think most normal people at this stage would say, well,  I can solve the heat equation when the initial distribution just happens to look like  a wave, or a sum of waves, but what a shame it is that most real world distributions  don't at all look like that. I mean, for example, let's say you brought together two rods  which were each at some uniform temperature, and you wanted  to know what happens immediately after they come into contact. To make the number simple, let's say the temperature of the left rod is 1 degree,  and the right rod is negative 1 degree, and that the total length,  L, of the combined two rods is 1. What this means is our initial temperature distribution is a step function,  which is so obviously different from a sine wave, or the sum of sine waves,  don't you think? I mean, it's almost entirely flat, not wavy, and for god's sake it's even discontinuous! And yet Fourier thought to ask a question which seems absurd. How do you express this as a sum of sine waves? Even more boldly, how do you express any initial distribution as a sum of sine waves? And it's more constrained than just that! You have to restrict yourself to adding waves which satisfy a certain boundary condition,  and as we saw last video, that means working with these cosine functions whose  frequencies are all some whole number multiple of a given base frequency. And by the way, if you were working with some different boundary condition,  say that the endpoints have to stay fixed, you'd have a different set of waves at  your disposal to piece together, in this case replacing that cosine expression with  a sine. It's strange how often progress in math looks more like  asking a new question rather than simply answering old ones. Fourier really does have a kind of immortality now,  with his name essentially synonymous with the idea of breaking  down functions and patterns as combinations of simple oscillations. It's really hard to overstate just how important and far-reaching that idea  turned out to be, well beyond anything Fourier himself could have imagined. And yet, the origin of all this is a piece of physics which,  at first glance, has nothing to do with frequencies and oscillations. If nothing else, this should give you a hint about  the general applicability of Fourier series. Now hang on, I hear some of you saying, none of these sums of sine waves that  you're showing are actually the step function, they're all just approximations. And it's true, any finite sum of sine waves will never be perfectly flat,  except for a constant function, nor will it be discontinuous. But Fourier thought more broadly, considering infinite sums. In the case of our step function, it turns out to be equal to this infinite sum,  where the coefficients are 1, negative one third, plus one fifth, minus one seventh,  and so on for all the odd frequencies, and all of it is rescaled by 4 divided by pi. I'll explain where those numbers come from in a moment. Before that, it's worth being clear about what we mean by a phrase like infinite sum,  which runs the risk of being a little vague. Consider the simpler context of numbers, where you could say,  for example, that this infinite sum of fractions equals pi divided by 4. As you keep adding the terms one by one, at all times what you have is rational,  it never actually equals the irrational pi divided by 4. But this sequence of partial sums approaches pi over 4, which is to say,  the numbers you see, while never equaling pi over 4,  get arbitrarily close to that value, and they stay arbitrarily close to that value. That's all a mouthful to say, so instead we abbreviate  and just say the infinite sum equals pi over 4. With functions, you're doing the same thing, but with many different values in parallel. Consider a specific input, and the value of all  of these scaled cosine functions for that input. If that input is less than 0.5, as you add more and more terms, the sum will approach 1. If that input is greater than 0.5, as you add more and more terms,  it would approach negative 1. At the input 0.5 itself, all of the cosines are 0,  so the limit of the partial sums is also 0. That means that, somewhat awkwardly, for this infinite sum to be strictly true,  we have to prescribe the value of this set function at the point of  discontinuity to be 0, sort of halfway along the jump. Analogous to an infinite sum of rational numbers being irrational,  the infinite sum of wavy continuous functions can equal a discontinuous flat function. Getting limits into the game allows for qualitative changes,  which finite sums alone never could. There are multiple technical nuances that I'm sweeping under the rug here. Does the fact that we're forced into a certain value for the step function  at the point of discontinuity make any difference for the heat flow problem? For that matter, what does it really mean to solve  a PDE with a discontinuous initial condition? Can we be sure that the limit of solutions to the heat equation is also a solution? And can we be sure that all functions actually have a Fourier series like this? If not, when not? These are exactly the kind of questions which real analysis is built to answer,  but it falls a bit deeper in the weeds than I'd like to go here,  so I'll relegate that all to links in the video's description. The upshot is that when you take the heat equation solutions associated with  these cosine waves and add them all up, all infinitely many of them,  you do get an exact solution describing how the step function will evolve over time,  and if you had done this in 1822, you would have become immortal for doing so. The key challenge in all of this, of course, is to find these coefficients. So far, we've been thinking about functions with real number outputs,  but for the computations, I'd like to show you something more general than what  Fourier originally did, applying to functions whose output can be any complex number  in the 2D plane, which is where all these rotating vectors from the opening come  back into play. Why the added complexity? Well, aside from being more general, in my view, the computations become cleaner,  and it's easier to understand why they actually work. More importantly, it sets a good foundation for the ideas that will come up later on  in the series, like the Laplace transform, and the importance of exponential functions. We'll still think of functions whose input is some real number on a finite interval,  say from 0 up to 1 for simplicity, but whereas something like a temperature  function will have outputs on the real number line,  this broader view will let the outputs wander anywhere in the 2D complex plane. You might think of such a function as a drawing,  with a pencil tip tracing out different points in the complex plane as the  input ranges from 0 to 1. And instead of sine waves being the fundamental building block,  as you saw at the start, we'll focus on breaking these functions down  as a sum of little vectors, all rotating at some constant integer frequency. Functions with real number outputs are essentially really boring drawings,  a one-dimensional pencil sketch. You might not be used to thinking of them like this,  since usually we visualize such a function with a graph,  but right now the path being drawn is only in the output space. If you do one of these decompositions into rotating vectors for a boring one-dimensional  drawing, what will happen is that the vectors with frequency 1 and negative 1 will  have the same length, and they'll be horizontal reflections of each other. When you just look at the sum of these two as they rotate,  that sum stays fixed on the real number line, and it oscillates like a sine wave. If you haven't seen it before, this might be a really weird way to think about what a  sine wave is, since we're used to looking at its graph rather than the output alone  wandering on the real number line, but in the broader context of functions with complex  number outputs, this oscillation on the horizontal line is what a sine wave looks like. Similarly, the pair of rotating vectors with frequencies 2 and negative 2 will  add another sine wave component, and so on, with the sine waves we were looking  for earlier now corresponding to pairs of vectors rotating in opposite directions. So the context that Fourier originally studied,  breaking down real-valued functions into sine waves,  is a special case of the more general idea of 2D drawings and rotating vectors. And at this point, maybe you don't trust me that widening our view to  complex functions makes things easier to understand, but bear with me,  it's really worth the added effort to see the fuller picture,  and I think you'll be pleased with how clean the actual computation is in  this broader context. You may also wonder why, if we're going to bump things up into two dimensions,  we don't just talk about 2D vectors, what does the square root  of negative one have to do with anything? Well, the heart and soul of Fourier series is the complex exponential, e to the i times t. As the input t ticks forward with time, this value walks  around the unit circle at a rate of one unit per second. In the next video you'll see a quick intuition for why exponentiating imaginary  numbers walks around circles like this from the perspective of differential equations. And beyond that, as the series progresses, I hope to give you some  sense for why complex exponentials like this are actually very important. In theory, you could describe all of the Fourier series stuff purely in terms of vectors,  and never breathe a word of i, the square root of negative one. The formulas would become more convoluted, but beyond that,  leaving out the function e to the x would somehow no longer authentically  reflect why this idea turns out to be so useful for solving differential equations. For right now, if you want, you can think of e to the i t as a  notational shorthand for describing rotating vectors,  but just keep in the back of your mind that it is more significant than mere shorthand. You'll notice I'm being a little loose with language using the words vector and complex  numbers somewhat interchangeably, in large part because thinking of complex numbers  as little arrows makes the idea of adding a lot of them together easier to visualize. Alright, armed with the function e to the i times t,  let's write down a formula for each of these rotating vectors we're working with. For right now, think of each of them as starting  pointing one unit to the right at the number 1. The easiest vector to describe is the constant one, which stays at the number 1,  never moving, or if you prefer, it's quote-unquote rotating just at a frequency of 0. Then there will be the vector rotating one cycle every second,  which we write as e to the 2 pi i times t. That 2 pi is there because as t goes from 0 to 1,  it needs to cover a distance of 2 pi along the circle. Technically in what's being shown, it's actually one cycle every 10 seconds  so things aren't too dizzying, I'm slowing everything down by a factor of 10. We also have a vector rotating at one cycle per second in the other direction,  e to the negative 2 pi i times t. Similarly, the one going two rotations per second is e to the 2 times 2 pi i times t,  where that 2 times 2 pi in the exponent describes how much distance is covered in one  second. And we go on like this over all integers, both positive and negative,  with a general formula of e to the n times 2 pi times i t. Notice, this makes it more consistent to write that constant vector  as e to the 0 times 2 pi times i t, which feels like an awfully  complicated way to write the number 1, but at least it fits the pattern. The control that we have, the set of knobs and dials we get to turn,  is the initial size and direction of each of these numbers. The way we control that is by multiplying each one by some complex constant,  which I'll call c sub n. For example, if we wanted the constant vector not to be at the number 1,  but to have a length of 0.5, c sub 0 would be 0.5. If we wanted the vector rotating at 1 cycle per second to start off at an  angle of 45 degrees, we'd multiply it by a complex number which has the effect  of rotating it by that much, which you can write as e to the pi fourths times i. And if its initial length needed to be 0.3, then the  coefficient c sub 1 would be 0.3 times that amount. Likewise, everyone in our infinite family of rotating vectors has some complex constant  being multiplied into it, which determines its initial angle and its total magnitude. Our goal is to express any arbitrary function f of t,  say this one that draws an eighth note as t goes from 0 to 1,  as a sum of terms like this, so we need some way of picking out these constants  one by one, given the data of the function itself. The easiest of these to find is the constant term. This term represents a sort of center of mass for the full drawing. If you were to sample a bunch of evenly spaced values for the  input t as it ranges from 0 to 1, the average of all the outputs  of the function for those samples would be the constant term c0. Or more accurately, as you consider finer and finer samples,  the average of the outputs for these samples approaches c0 in the limit. What I'm describing, finer and finer sums of a function for samples of  t from the input range, is an integral, an integral of f of t from 0 to 1. Normally, since I'm framing this all in terms of averages,  you would divide the integral by the length of the input range,  but that length is 1, so in this case, taking an integral and taking an  average are the same thing. There's a very nice way to think about why this integral would pull out c0. Remember, we want to think of this function as a sum of rotating vectors,  so consider this integral, this continuous average, as being applied to that whole sum. The average of a sum like this is the same as the sum over the averages of each part. You can read this move as a sort of subtle shift in perspective. Rather than looking at the sum of all the vectors at each point in time  and taking the average value they sweep out, look at the average of an  individual vector as t goes from 0 to 1, and then add up all these averages. But each of these vectors just makes a whole number of rotations around 0,  so its average value as t ranges from 0 to 1 will be 0. The only exception is the constant term. Since it stays static and doesn't rotate, its average value  is just whatever number it happened to start on, which is c0. So doing this average over the whole function is a  sort of clever way to kill all the terms that aren't c0. But here's the actual clever part. Let's say you wanted to compute a different term, like c2,  sitting in front of the vector rotating two cycles per second. The trick is to first multiply f of t by something that makes that vector hold still,  sort of the mathematical equivalent of giving a smartphone to an overactive child. Specifically, if you multiply the whole function by e to the negative  2 times 2 pi i times t, think about what happens to each term. Since multiplying exponentials results in adding what's in the exponent,  the frequency term in each of our exponents gets shifted down by 2. So now, as we do our averages of each term, that c-1  vector spins around negative 3 times with an average of 0. The c0 vector, previously constant, now rotates twice as t ranges from 0 to 1,  so its average is also 0. And likewise, all vectors other than the c2 term make some whole number of rotations,  meaning they average out to be 0. So taking the average of this modified function is  a clever way to kill all the terms other than c2. And of course, there's nothing special about the number 2 here,  you could replace it with any other n, and you have a general formula for cn,  which is what we're looking for. Out of context, this expression might look complicated, but remember,  you can read it as first modifying our function, our 2d drawing,  so as to make the nth little vector hold still,  and then performing an average which kills all the moving vectors and  leaves you only with the still part. Isn't that crazy? All of the complexity in these decompositions you're seeing of drawings into  sums of many rotating vectors is entirely captured in this little expression. So when I'm rendering these animations, that's exactly what I'm having the computer do. It treats the path like a complex function, and for a certain range of values n,  it computes this integral to find the coefficient c of n. For those of you curious about where the data for a path itself comes from,  I'm going the easy route and just having the program read in an SVG,  which is a file format that defines the image in terms of mathematical curves rather  than with pixel values. So the mapping f of t from a time parameter to points in space basically comes predefined. In what's shown right now, I'm using 101 rotating vectors,  computing the values of n from negative 50 up to 50. In practice, each of these integrals is computed numerically,  basically meaning it chops up the unit interval into many small pieces of size delta t,  and then adds up this value, f of t times e to the negative n 2 pi i t times delta t,  for each one of them. There are fancier methods for more efficient numerical integration,  but this gives the basic idea. And after you compute these 101 constants, each one determines an initial  angle and magnitude for the little vectors, and then you just set them all rotating,  adding them tip to tail as they go, and the path drawn out by the final  tip is some approximation of the original path you fed in. As the number of vectors used approaches infinity,  the approximation path gets more and more accurate. To bring this all back down to earth, consider the example we were looking at earlier,  of a step function, which remember was useful for modeling the heat dissipation  between two rods at different temperatures after they come into contact. Like any real number valued function, the step function  is like a boring drawing that's confined to one dimension. But this one is an especially dull drawing, since for inputs between 0 and 0.5,  the output just stays static at the number 1, and then it discontinuously  jumps to negative 1 for inputs between 0.5 and 1. So in the Fourier series approximation, the vector sum stays really  close to 1 for the first half of the cycle, then quickly jumps to negative 1,  and stays close to that for the second half of the cycle. And remember, each pair of vectors rotating in opposite directions  corresponds to one of the cosine waves we were looking at earlier. To find the coefficients, you would need to compute this integral,  and for the ambitious viewers among you itching to work out some integrals by hand,  this is one where you can actually do the calculus to get an exact answer,  rather than just having a computer do it numerically for you. I'll leave it as an exercise to work this out,  and to relate it back to the idea of cosine waves by pairing off the vectors  that rotate in opposite directions. And for the even more ambitious, I'll leave another exercise up on the screen for  how to relate this more general computation with what you might see in a textbook  describing Fourier series only in terms of real valued functions with sines and cosines. By the way, if you're looking for more Fourier series content,  I highly recommend the videos by Mathologer and The Coding Train,  and I'd also recommend this blog post, links of course in the description. So on the one hand, this concludes our discussion of the heat equation,  which was a little window into the study of partial differential equations. But on the other hand, this Fourier-to-Fourier series is a first glimpse at a deeper idea. Exponential functions, including their generalization into complex  numbers and even matrices, play a very important role for differential equations,  especially when it comes to linear equations. What you just saw, breaking down a function as a combination  of these exponentials and using that to solve a differential equation,  comes up again and again in different shapes and forms. Thank you.

## Timed Segments

[0:05] Here, we look at the math behind an animation like this one, 
[0:08] what&#39;s known as a complex Fourier series.
[0:11] Each little vector is rotating at some constant integer frequency, 
[0:15] and when you add them together, tip to tail, the final tip draws out some shape over time.
[0:21] By tweaking the initial size and angle of each vector, 
[0:24] we can make it draw pretty much anything we want, and here you&#39;ll see how.
[0:31] Before diving into it all, I want you to take 
[0:33] a moment to just linger on how striking this is.
[0:37] This particular animation has 300 rotating arrows in total.
[0:41] Go full screen for this if you can, the intricacy is worth it.
[0:50] Think about this, the action of each individual arrow is perhaps 
[0:54] the simplest thing you could imagine, rotation at a steady rate.
[0:58] And yet the collection of all added together is anything but simple, 
[1:02] and the mind-boggling complexity is put into an even sharper focus the farther we 
[1:06] zoom in, revealing the contributions of the littlest, quickest, 
[1:09] and downright frenetic arrows.
[1:12] When you consider the chaotic frenzy you&#39;re looking at, 
[1:15] and the clockwork rigidity underlying all the motions, 
[1:18] it&#39;s bizarre how the swarm acts with a kind of coordination to trace 
[1:21] out some very specific shape.
[1:23] And unlike much of the emergent complexity you find elsewhere in nature, 
[1:27] this is something that we have the math to describe and to control completely.
[1:31] Just by tuning the starting conditions, nothing more, 
[1:34] we can make this swarm conspire in all of the right ways to draw anything you want, 
[1:39] provided you have enough little arrows.
[1:42] What&#39;s even crazier is that the ultimate formula for all of this is incredibly short.
[1:52] Now often, Fourier series are described in terms of something that looks a little 
[1:56] different, functions of real numbers being broken down as a sum of sine waves.
[2:01] That turns out to be a special case of this more general rotating vector 
[2:04] phenomenon that we&#39;ll build up to, but it&#39;s where Fourier himself started, 
[2:07] and there&#39;s good reason for us to start the story there as well.
[2:11] Technically, this is the third video in a sequence about the heat equation, 
[2:14] what Fourier was working on when he developed his big idea.
[2:18] I would like to teach you about Fourier series in a way that doesn&#39;t depend on 
[2:21] you coming from those chapters, but if you have at least a high-level idea for 
[2:25] the problem from physics which originally motivated this piece of math, 
[2:28] it gives some indication for just how unexpectedly far-reaching Fourier series are.
[2:32] All you need to know is that we had a certain equation which tells us 
[2:36] how the temperature distribution on a rod would evolve over time, 
[2:40] and incidentally it also describes many other phenomena unrelated to heat.
[2:44] While it&#39;s hard to directly use this equation to figure out what will happen to an 
[2:49] arbitrary heat distribution, there&#39;s a simple solution if the initial function just 
[2:53] happens to look like a cosine wave, with the frequency tuned so that it&#39;s flat at each 
[2:57] end point.
[2:58] Specifically, as you graph what happens over time, 
[3:01] these waves simply get scaled down exponentially, 
[3:04] with higher frequency waves having a faster exponential decay.
[3:10] The heat equation happens to be what&#39;s known in the business as a linear equation, 
[3:15] meaning if you know two solutions and add them up, that sum is a new solution.
[3:20] You can even scale them each by some constant, 
[3:23] which gives you some dials to turn to construct a custom function solving the equation.
[3:29] This is a fairly straightforward property that you can verify for yourself, 
[3:32] but it&#39;s incredibly important.
[3:34] It means we can take our infinite family of solutions, 
[3:37] these exponentially decaying cosine waves, scale a few of them by some 
[3:41] custom constants of our choosing, and combine them to get a solution for a new, 
[3:45] tailor-made initial condition, which is some combination of cosine waves.
[3:50] One important thing I&#39;d like you to notice is that when you combine these waves, 
[3:54] because the higher frequency ones decay faster, 
[3:57] the sum you construct will tend to smooth out over time, 
[4:00] as all the high frequency terms quickly go to zero, 
[4:02] leaving only the low frequency terms dominating.
[4:06] So in a funny way, all of the complexity in the evolution of this heat 
[4:09] distribution which the heat equation implies is captured by this 
[4:12] difference in the decay rates for the different pure frequency components.
[4:18] It&#39;s at this point that Fourier gains immortality.
[4:21] I think most normal people at this stage would say, well, 
[4:24] I can solve the heat equation when the initial distribution just happens to look like 
[4:28] a wave, or a sum of waves, but what a shame it is that most real world distributions 
[4:32] don&#39;t at all look like that.
[4:34] I mean, for example, let&#39;s say you brought together two rods 
[4:37] which were each at some uniform temperature, and you wanted 
[4:40] to know what happens immediately after they come into contact.
[4:45] To make the number simple, let&#39;s say the temperature of the left rod is 1 degree, 
[4:49] and the right rod is negative 1 degree, and that the total length, 
[4:53] L, of the combined two rods is 1.
[4:54] What this means is our initial temperature distribution is a step function, 
[4:59] which is so obviously different from a sine wave, or the sum of sine waves, 
[5:03] don&#39;t you think?
[5:05] I mean, it&#39;s almost entirely flat, not wavy, and for god&#39;s sake it&#39;s even discontinuous!
[5:10] And yet Fourier thought to ask a question which seems absurd.
[5:14] How do you express this as a sum of sine waves?
[5:17] Even more boldly, how do you express any initial distribution as a sum of sine waves?
[5:21] And it&#39;s more constrained than just that!
[5:24] You have to restrict yourself to adding waves which satisfy a certain boundary condition, 
[5:28] and as we saw last video, that means working with these cosine functions whose 
[5:32] frequencies are all some whole number multiple of a given base frequency.
[5:36] And by the way, if you were working with some different boundary condition, 
[5:40] say that the endpoints have to stay fixed, you&#39;d have a different set of waves at 
[5:44] your disposal to piece together, in this case replacing that cosine expression with 
[5:48] a sine.
[5:49] It&#39;s strange how often progress in math looks more like 
[5:52] asking a new question rather than simply answering old ones.
[5:56] Fourier really does have a kind of immortality now, 
[5:58] with his name essentially synonymous with the idea of breaking 
[6:01] down functions and patterns as combinations of simple oscillations.
[6:05] It&#39;s really hard to overstate just how important and far-reaching that idea 
[6:09] turned out to be, well beyond anything Fourier himself could have imagined.
[6:13] And yet, the origin of all this is a piece of physics which, 
[6:16] at first glance, has nothing to do with frequencies and oscillations.
[6:21] If nothing else, this should give you a hint about 
[6:23] the general applicability of Fourier series.
[6:26] Now hang on, I hear some of you saying, none of these sums of sine waves that 
[6:29] you&#39;re showing are actually the step function, they&#39;re all just approximations.
[6:33] And it&#39;s true, any finite sum of sine waves will never be perfectly flat, 
[6:37] except for a constant function, nor will it be discontinuous.
[6:42] But Fourier thought more broadly, considering infinite sums.
[6:46] In the case of our step function, it turns out to be equal to this infinite sum, 
[6:51] where the coefficients are 1, negative one third, plus one fifth, minus one seventh, 
[6:57] and so on for all the odd frequencies, and all of it is rescaled by 4 divided by pi.
[7:03] I&#39;ll explain where those numbers come from in a moment.
[7:06] Before that, it&#39;s worth being clear about what we mean by a phrase like infinite sum, 
[7:10] which runs the risk of being a little vague.
[7:13] Consider the simpler context of numbers, where you could say, 
[7:17] for example, that this infinite sum of fractions equals pi divided by 4.
[7:21] As you keep adding the terms one by one, at all times what you have is rational, 
[7:26] it never actually equals the irrational pi divided by 4.
[7:30] But this sequence of partial sums approaches pi over 4, which is to say, 
[7:34] the numbers you see, while never equaling pi over 4, 
[7:37] get arbitrarily close to that value, and they stay arbitrarily close to that value.
[7:43] That&#39;s all a mouthful to say, so instead we abbreviate 
[7:46] and just say the infinite sum equals pi over 4.
[7:50] With functions, you&#39;re doing the same thing, but with many different values in parallel.
[7:55] Consider a specific input, and the value of all 
[7:58] of these scaled cosine functions for that input.
[8:02] If that input is less than 0.5, as you add more and more terms, the sum will approach 1.
[8:10] If that input is greater than 0.5, as you add more and more terms, 
[8:13] it would approach negative 1.
[8:17] At the input 0.5 itself, all of the cosines are 0, 
[8:20] so the limit of the partial sums is also 0.
[8:24] That means that, somewhat awkwardly, for this infinite sum to be strictly true, 
[8:28] we have to prescribe the value of this set function at the point of 
[8:32] discontinuity to be 0, sort of halfway along the jump.
[8:36] Analogous to an infinite sum of rational numbers being irrational, 
[8:40] the infinite sum of wavy continuous functions can equal a discontinuous flat function.
[8:47] Getting limits into the game allows for qualitative changes, 
[8:50] which finite sums alone never could.
[8:53] There are multiple technical nuances that I&#39;m sweeping under the rug here.
[8:56] Does the fact that we&#39;re forced into a certain value for the step function 
[8:59] at the point of discontinuity make any difference for the heat flow problem?
[9:03] For that matter, what does it really mean to solve 
[9:06] a PDE with a discontinuous initial condition?
[9:09] Can we be sure that the limit of solutions to the heat equation is also a solution?
[9:13] And can we be sure that all functions actually have a Fourier series like this?
[9:17] If not, when not?
[9:19] These are exactly the kind of questions which real analysis is built to answer, 
[9:22] but it falls a bit deeper in the weeds than I&#39;d like to go here, 
[9:25] so I&#39;ll relegate that all to links in the video&#39;s description.
[9:28] The upshot is that when you take the heat equation solutions associated with 
[9:33] these cosine waves and add them all up, all infinitely many of them, 
[9:37] you do get an exact solution describing how the step function will evolve over time, 
[9:41] and if you had done this in 1822, you would have become immortal for doing so.
[9:47] The key challenge in all of this, of course, is to find these coefficients.
[9:53] So far, we&#39;ve been thinking about functions with real number outputs, 
[9:57] but for the computations, I&#39;d like to show you something more general than what 
[10:00] Fourier originally did, applying to functions whose output can be any complex number 
[10:04] in the 2D plane, which is where all these rotating vectors from the opening come 
[10:08] back into play.
[10:10] Why the added complexity?
[10:12] Well, aside from being more general, in my view, the computations become cleaner, 
[10:16] and it&#39;s easier to understand why they actually work.
[10:20] More importantly, it sets a good foundation for the ideas that will come up later on 
[10:24] in the series, like the Laplace transform, and the importance of exponential functions.
[10:29] We&#39;ll still think of functions whose input is some real number on a finite interval, 
[10:33] say from 0 up to 1 for simplicity, but whereas something like a temperature 
[10:37] function will have outputs on the real number line, 
[10:40] this broader view will let the outputs wander anywhere in the 2D complex plane.
[10:45] You might think of such a function as a drawing, 
[10:47] with a pencil tip tracing out different points in the complex plane as the 
[10:51] input ranges from 0 to 1.
[10:53] And instead of sine waves being the fundamental building block, 
[10:56] as you saw at the start, we&#39;ll focus on breaking these functions down 
[10:59] as a sum of little vectors, all rotating at some constant integer frequency.
[11:03] Functions with real number outputs are essentially really boring drawings, 
[11:09] a one-dimensional pencil sketch.
[11:11] You might not be used to thinking of them like this, 
[11:14] since usually we visualize such a function with a graph, 
[11:17] but right now the path being drawn is only in the output space.
[11:25] If you do one of these decompositions into rotating vectors for a boring one-dimensional 
[11:30] drawing, what will happen is that the vectors with frequency 1 and negative 1 will 
[11:34] have the same length, and they&#39;ll be horizontal reflections of each other.
[11:39] When you just look at the sum of these two as they rotate, 
[11:42] that sum stays fixed on the real number line, and it oscillates like a sine wave.
[11:46] If you haven&#39;t seen it before, this might be a really weird way to think about what a 
[11:51] sine wave is, since we&#39;re used to looking at its graph rather than the output alone 
[11:55] wandering on the real number line, but in the broader context of functions with complex 
[11:59] number outputs, this oscillation on the horizontal line is what a sine wave looks like.
[12:04] Similarly, the pair of rotating vectors with frequencies 2 and negative 2 will 
[12:09] add another sine wave component, and so on, with the sine waves we were looking 
[12:14] for earlier now corresponding to pairs of vectors rotating in opposite directions.
[12:19] So the context that Fourier originally studied, 
[12:22] breaking down real-valued functions into sine waves, 
[12:25] is a special case of the more general idea of 2D drawings and rotating vectors.
[12:34] And at this point, maybe you don&#39;t trust me that widening our view to 
[12:37] complex functions makes things easier to understand, but bear with me, 
[12:41] it&#39;s really worth the added effort to see the fuller picture, 
[12:44] and I think you&#39;ll be pleased with how clean the actual computation is in 
[12:47] this broader context.
[12:49] You may also wonder why, if we&#39;re going to bump things up into two dimensions, 
[12:52] we don&#39;t just talk about 2D vectors, what does the square root 
[12:55] of negative one have to do with anything?
[12:58] Well, the heart and soul of Fourier series is the complex exponential, e to the i times t.
[13:04] As the input t ticks forward with time, this value walks 
[13:07] around the unit circle at a rate of one unit per second.
[13:12] In the next video you&#39;ll see a quick intuition for why exponentiating imaginary 
[13:16] numbers walks around circles like this from the perspective of differential equations.
[13:20] And beyond that, as the series progresses, I hope to give you some 
[13:23] sense for why complex exponentials like this are actually very important.
[13:27] In theory, you could describe all of the Fourier series stuff purely in terms of vectors, 
[13:31] and never breathe a word of i, the square root of negative one.
[13:35] The formulas would become more convoluted, but beyond that, 
[13:38] leaving out the function e to the x would somehow no longer authentically 
[13:42] reflect why this idea turns out to be so useful for solving differential equations.
[13:47] For right now, if you want, you can think of e to the i t as a 
[13:50] notational shorthand for describing rotating vectors, 
[13:53] but just keep in the back of your mind that it is more significant than mere shorthand.
[13:58] You&#39;ll notice I&#39;m being a little loose with language using the words vector and complex 
[14:02] numbers somewhat interchangeably, in large part because thinking of complex numbers 
[14:06] as little arrows makes the idea of adding a lot of them together easier to visualize.
[14:11] Alright, armed with the function e to the i times t, 
[14:13] let&#39;s write down a formula for each of these rotating vectors we&#39;re working with.
[14:18] For right now, think of each of them as starting 
[14:20] pointing one unit to the right at the number 1.
[14:23] The easiest vector to describe is the constant one, which stays at the number 1, 
[14:27] never moving, or if you prefer, it&#39;s quote-unquote rotating just at a frequency of 0.
[14:33] Then there will be the vector rotating one cycle every second, 
[14:36] which we write as e to the 2 pi i times t.
[14:39] That 2 pi is there because as t goes from 0 to 1, 
[14:42] it needs to cover a distance of 2 pi along the circle.
[14:47] Technically in what&#39;s being shown, it&#39;s actually one cycle every 10 seconds 
[14:50] so things aren&#39;t too dizzying, I&#39;m slowing everything down by a factor of 10.
[14:55] We also have a vector rotating at one cycle per second in the other direction, 
[14:59] e to the negative 2 pi i times t.
[15:04] Similarly, the one going two rotations per second is e to the 2 times 2 pi i times t, 
[15:10] where that 2 times 2 pi in the exponent describes how much distance is covered in one 
[15:16] second.
[15:20] And we go on like this over all integers, both positive and negative, 
[15:25] with a general formula of e to the n times 2 pi times i t.
[15:29] Notice, this makes it more consistent to write that constant vector 
[15:32] as e to the 0 times 2 pi times i t, which feels like an awfully 
[15:35] complicated way to write the number 1, but at least it fits the pattern.
[15:40] The control that we have, the set of knobs and dials we get to turn, 
[15:43] is the initial size and direction of each of these numbers.
[15:47] The way we control that is by multiplying each one by some complex constant, 
[15:51] which I&#39;ll call c sub n.
[15:53] For example, if we wanted the constant vector not to be at the number 1, 
[15:58] but to have a length of 0.5, c sub 0 would be 0.5.
[16:02] If we wanted the vector rotating at 1 cycle per second to start off at an 
[16:06] angle of 45 degrees, we&#39;d multiply it by a complex number which has the effect 
[16:10] of rotating it by that much, which you can write as e to the pi fourths times i.
[16:15] And if its initial length needed to be 0.3, then the 
[16:18] coefficient c sub 1 would be 0.3 times that amount.
[16:22] Likewise, everyone in our infinite family of rotating vectors has some complex constant 
[16:27] being multiplied into it, which determines its initial angle and its total magnitude.
[16:32] Our goal is to express any arbitrary function f of t, 
[16:36] say this one that draws an eighth note as t goes from 0 to 1, 
[16:40] as a sum of terms like this, so we need some way of picking out these constants 
[16:46] one by one, given the data of the function itself.
[16:51] The easiest of these to find is the constant term.
[16:55] This term represents a sort of center of mass for the full drawing.
[16:59] If you were to sample a bunch of evenly spaced values for the 
[17:02] input t as it ranges from 0 to 1, the average of all the outputs 
[17:06] of the function for those samples would be the constant term c0.
[17:11] Or more accurately, as you consider finer and finer samples, 
[17:14] the average of the outputs for these samples approaches c0 in the limit.
[17:20] What I&#39;m describing, finer and finer sums of a function for samples of 
[17:24] t from the input range, is an integral, an integral of f of t from 0 to 1.
[17:30] Normally, since I&#39;m framing this all in terms of averages, 
[17:33] you would divide the integral by the length of the input range, 
[17:37] but that length is 1, so in this case, taking an integral and taking an 
[17:40] average are the same thing.
[17:42] There&#39;s a very nice way to think about why this integral would pull out c0.
[17:47] Remember, we want to think of this function as a sum of rotating vectors, 
[17:51] so consider this integral, this continuous average, as being applied to that whole sum.
[17:57] The average of a sum like this is the same as the sum over the averages of each part.
[18:06] You can read this move as a sort of subtle shift in perspective.
[18:09] Rather than looking at the sum of all the vectors at each point in time 
[18:13] and taking the average value they sweep out, look at the average of an 
[18:17] individual vector as t goes from 0 to 1, and then add up all these averages.
[18:22] But each of these vectors just makes a whole number of rotations around 0, 
[18:27] so its average value as t ranges from 0 to 1 will be 0.
[18:31] The only exception is the constant term.
[18:33] Since it stays static and doesn&#39;t rotate, its average value 
[18:37] is just whatever number it happened to start on, which is c0.
[18:41] So doing this average over the whole function is a 
[18:44] sort of clever way to kill all the terms that aren&#39;t c0.
[18:48] But here&#39;s the actual clever part.
[18:49] Let&#39;s say you wanted to compute a different term, like c2, 
[18:52] sitting in front of the vector rotating two cycles per second.
[18:56] The trick is to first multiply f of t by something that makes that vector hold still, 
[19:01] sort of the mathematical equivalent of giving a smartphone to an overactive child.
[19:06] Specifically, if you multiply the whole function by e to the negative 
[19:10] 2 times 2 pi i times t, think about what happens to each term.
[19:16] Since multiplying exponentials results in adding what&#39;s in the exponent, 
[19:21] the frequency term in each of our exponents gets shifted down by 2.
[19:29] So now, as we do our averages of each term, that c-1 
[19:33] vector spins around negative 3 times with an average of 0.
[19:37] The c0 vector, previously constant, now rotates twice as t ranges from 0 to 1, 
[19:43] so its average is also 0.
[19:46] And likewise, all vectors other than the c2 term make some whole number of rotations, 
[19:51] meaning they average out to be 0.
[19:55] So taking the average of this modified function is 
[19:58] a clever way to kill all the terms other than c2.
[20:02] And of course, there&#39;s nothing special about the number 2 here, 
[20:05] you could replace it with any other n, and you have a general formula for cn, 
[20:08] which is what we&#39;re looking for.
[20:10] Out of context, this expression might look complicated, but remember, 
[20:14] you can read it as first modifying our function, our 2d drawing, 
[20:17] so as to make the nth little vector hold still, 
[20:20] and then performing an average which kills all the moving vectors and 
[20:23] leaves you only with the still part.
[20:26] Isn&#39;t that crazy?
[20:27] All of the complexity in these decompositions you&#39;re seeing of drawings into 
[20:31] sums of many rotating vectors is entirely captured in this little expression.
[20:36] So when I&#39;m rendering these animations, that&#39;s exactly what I&#39;m having the computer do.
[20:41] It treats the path like a complex function, and for a certain range of values n, 
[20:45] it computes this integral to find the coefficient c of n.
[20:51] For those of you curious about where the data for a path itself comes from, 
[20:54] I&#39;m going the easy route and just having the program read in an SVG, 
[20:57] which is a file format that defines the image in terms of mathematical curves rather 
[21:01] than with pixel values.
[21:03] So the mapping f of t from a time parameter to points in space basically comes predefined.
[21:10] In what&#39;s shown right now, I&#39;m using 101 rotating vectors, 
[21:14] computing the values of n from negative 50 up to 50.
[21:18] In practice, each of these integrals is computed numerically, 
[21:21] basically meaning it chops up the unit interval into many small pieces of size delta t, 
[21:26] and then adds up this value, f of t times e to the negative n 2 pi i t times delta t, 
[21:31] for each one of them.
[21:33] There are fancier methods for more efficient numerical integration, 
[21:36] but this gives the basic idea.
[21:38] And after you compute these 101 constants, each one determines an initial 
[21:42] angle and magnitude for the little vectors, and then you just set them all rotating, 
[21:47] adding them tip to tail as they go, and the path drawn out by the final 
[21:51] tip is some approximation of the original path you fed in.
[21:55] As the number of vectors used approaches infinity, 
[21:57] the approximation path gets more and more accurate.
[22:14] To bring this all back down to earth, consider the example we were looking at earlier, 
[22:18] of a step function, which remember was useful for modeling the heat dissipation 
[22:22] between two rods at different temperatures after they come into contact.
[22:26] Like any real number valued function, the step function 
[22:29] is like a boring drawing that&#39;s confined to one dimension.
[22:33] But this one is an especially dull drawing, since for inputs between 0 and 0.5, 
[22:38] the output just stays static at the number 1, and then it discontinuously 
[22:42] jumps to negative 1 for inputs between 0.5 and 1.
[22:46] So in the Fourier series approximation, the vector sum stays really 
[22:49] close to 1 for the first half of the cycle, then quickly jumps to negative 1, 
[22:53] and stays close to that for the second half of the cycle.
[22:57] And remember, each pair of vectors rotating in opposite directions 
[23:01] corresponds to one of the cosine waves we were looking at earlier.
[23:06] To find the coefficients, you would need to compute this integral, 
[23:09] and for the ambitious viewers among you itching to work out some integrals by hand, 
[23:13] this is one where you can actually do the calculus to get an exact answer, 
[23:16] rather than just having a computer do it numerically for you.
[23:19] I&#39;ll leave it as an exercise to work this out, 
[23:22] and to relate it back to the idea of cosine waves by pairing off the vectors 
[23:26] that rotate in opposite directions.
[23:28] And for the even more ambitious, I&#39;ll leave another exercise up on the screen for 
[23:32] how to relate this more general computation with what you might see in a textbook 
[23:36] describing Fourier series only in terms of real valued functions with sines and cosines.
[23:41] By the way, if you&#39;re looking for more Fourier series content, 
[23:44] I highly recommend the videos by Mathologer and The Coding Train, 
[23:48] and I&#39;d also recommend this blog post, links of course in the description.
[23:53] So on the one hand, this concludes our discussion of the heat equation, 
[23:57] which was a little window into the study of partial differential equations.
[24:01] But on the other hand, this Fourier-to-Fourier series is a first glimpse at a deeper idea.
[24:06] Exponential functions, including their generalization into complex 
[24:09] numbers and even matrices, play a very important role for differential equations, 
[24:13] especially when it comes to linear equations.
[24:16] What you just saw, breaking down a function as a combination 
[24:19] of these exponentials and using that to solve a differential equation, 
[24:23] comes up again and again in different shapes and forms.
[24:44] Thank you.
