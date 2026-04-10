---
title: "The most unexpected answer to a counting puzzle"
creator: "3blue1brown"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=HEfHFsfGXjs"
video_id: "HEfHFsfGXjs"
duration: "5:13"
transcript_method: "youtube-captions"
segment_count: 82
char_count: 5002
status: ingested
topics: []
meta_patterns: []
---

# The most unexpected answer to a counting puzzle

**Creator**: 3blue1brown | **Duration**: 5:13
**URL**: https://www.youtube.com/watch?v=HEfHFsfGXjs
**Transcript**: 82 segments, 5002 chars

## Transcript

Sometimes, math and physics conspire in ways that just feel too good to be true. Let's play a strange sort of mathematical croquet. We're going to have two sliding blocks and a wall. The first block starts by coming in at some velocity from the right,  while the second one starts out stationary. Being overly idealistic physicists, let's assume there's no friction and  all of the collisions are perfectly elastic, which means no energy is lost. The astute among you might complain that such collisions would make no sound,  but your goal here is to count how many collisions take place,  so in slight conflict with that assumption I want to leave a little clack sound to better  draw your attention to that count. The simplest case is when both blocks have the same mass. The first block hits the second, transferring all of its momentum,  then the second one bounces off the wall, and then transfers all of  its momentum back to the first, which then sails off towards infinity. Three total clacks. What about if the first block was 100 times the mass of the second one? I promise I will explain to you all the relevant physics in due course,  it's not entirely obvious how you would predict the dynamics here,  but in the spirit of getting to the punchline, let's watch what happens. The second one will keep bouncing back and forth between the wall and the first block,  100 times its mass, like a satisfying game of Breakout,  slowly and discreetly redirecting that first block's momentum to point in the  opposite direction. In total, there will be 31 collisions before each block is sliding off towards infinity,  never to be touched again. What if the first block was 10,000 times the mass of the second one? In that case, there would be quite a few more clacks,  all happening very rapidly at one point, adding up and all to 313 total collisions. Well, actually, hang on. Wait for it. Wait for it. Okay, 314 clacks. If the first block was 1,000,000 times the mass of the other, then again,  with all of our crazy idealistic conditions, almost all of the clacks  happen in one big burst, this time resulting in a total of 3,141 collisions. Perhaps you see the pattern here, though it's forgivable if you don't,  since it defies all expectation. When the mass of that first block is some power of 100 times the mass of the second,  the total number of collisions have the same digits as pi. This absolutely blew my mind when it was first shared with me. Credit to the viewer Henry Cavill for introducing me to this fact,  which was originally discovered by the mathematician Gregory Galperin in 1995 and  published in 2003. Part of what I love about this is that if ever there were Olympic games  for algorithms that compute pi, this one would have to win medals both  for being the most elegant, and for being the most comically inefficient. I mean, think about the actual algorithm here. Step 1, implement a physics engine. Step 2, choose the number of digits d of pi you'd like to compute. Step 3, set the mass of one of the blocks to be 100 to the power d-1,  then send it travelling on a frictionless surface towards a block of mass 1. Step 4, count all of the collisions. For example, to calculate only 20 digits of pi, which fits so cleanly on this screen,  one block would have to have 100 billion billion billion billion times the mass of  the other, which if that small block was 1 kilogram,  means the big one has a mass about 10 times that of the supermassive black hole at  the center of the Milky Way. That means you would need to count 31 billion billion collisions. At one point in this virtual process, the frequency of clacks would  be around 100 billion billion billion billion clacks per second. So let's just say you would need very good numerical precision to get this working  accurately, and it would take a very long time for the algorithm to complete. I'll emphasize again that this process is way over-idealized,  quickly departing from anything that could possibly happen in real physics. But of course, you all know this is not interesting because of its potential  as an actual pi computing algorithm or as a pragmatic physics demonstration. It's mind-boggling because why on earth would pi show up here? And it's in such a weird way too. Its decimal digits are counting something, but usually pi shows  up when its precise value is describing something continuous. I will show you why this is true. Where there is pi, there is a hidden circle, and in this case,  that hidden circle comes from the conservation of energy. In fact, you're going to see two separate methods,  which are each as stunning and surprising as the fact itself. Delaying gratification though, I will make you  wait until the next video to see what's going on. In the meantime, I highly encourage you to take a stab at it yourself,  and be social about it. It's a hard puzzle, so it never hurts to recruit some other smart minds to the task. Thanks for watching. I'll see you next time. Bye.

## Timed Segments

[0:04] Sometimes, math and physics conspire in ways that just feel too good to be true.
[0:08] Let&#39;s play a strange sort of mathematical croquet.
[0:11] We&#39;re going to have two sliding blocks and a wall.
[0:14] The first block starts by coming in at some velocity from the right, 
[0:17] while the second one starts out stationary.
[0:19] Being overly idealistic physicists, let&#39;s assume there&#39;s no friction and 
[0:23] all of the collisions are perfectly elastic, which means no energy is lost.
[0:28] The astute among you might complain that such collisions would make no sound, 
[0:32] but your goal here is to count how many collisions take place, 
[0:35] so in slight conflict with that assumption I want to leave a little clack sound to better 
[0:39] draw your attention to that count.
[0:42] The simplest case is when both blocks have the same mass.
[0:45] The first block hits the second, transferring all of its momentum, 
[0:48] then the second one bounces off the wall, and then transfers all of 
[0:51] its momentum back to the first, which then sails off towards infinity.
[0:55] Three total clacks.
[0:57] What about if the first block was 100 times the mass of the second one?
[1:01] I promise I will explain to you all the relevant physics in due course, 
[1:05] it&#39;s not entirely obvious how you would predict the dynamics here, 
[1:08] but in the spirit of getting to the punchline, let&#39;s watch what happens.
[1:11] The second one will keep bouncing back and forth between the wall and the first block, 
[1:16] 100 times its mass, like a satisfying game of Breakout, 
[1:19] slowly and discreetly redirecting that first block&#39;s momentum to point in the 
[1:22] opposite direction.
[1:23] In total, there will be 31 collisions before each block is sliding off towards infinity, 
[1:29] never to be touched again.
[1:31] What if the first block was 10,000 times the mass of the second one?
[1:35] In that case, there would be quite a few more clacks, 
[1:40] all happening very rapidly at one point, adding up and all to 313 total collisions.
[1:48] Well, actually, hang on.
[1:50] Wait for it.
[1:51] Wait for it.
[1:56] Okay, 314 clacks.
[1:59] If the first block was 1,000,000 times the mass of the other, then again, 
[2:03] with all of our crazy idealistic conditions, almost all of the clacks 
[2:08] happen in one big burst, this time resulting in a total of 3,141 collisions.
[2:13] Perhaps you see the pattern here, though it&#39;s forgivable if you don&#39;t, 
[2:17] since it defies all expectation.
[2:18] When the mass of that first block is some power of 100 times the mass of the second, 
[2:23] the total number of collisions have the same digits as pi.
[2:28] This absolutely blew my mind when it was first shared with me.
[2:31] Credit to the viewer Henry Cavill for introducing me to this fact, 
[2:35] which was originally discovered by the mathematician Gregory Galperin in 1995 and 
[2:39] published in 2003.
[2:41] Part of what I love about this is that if ever there were Olympic games 
[2:45] for algorithms that compute pi, this one would have to win medals both 
[2:49] for being the most elegant, and for being the most comically inefficient.
[2:54] I mean, think about the actual algorithm here.
[2:56] Step 1, implement a physics engine.
[2:58] Step 2, choose the number of digits d of pi you&#39;d like to compute.
[3:03] Step 3, set the mass of one of the blocks to be 100 to the power d-1, 
[3:07] then send it travelling on a frictionless surface towards a block of mass 1.
[3:12] Step 4, count all of the collisions.
[3:16] For example, to calculate only 20 digits of pi, which fits so cleanly on this screen, 
[3:21] one block would have to have 100 billion billion billion billion times the mass of 
[3:25] the other, which if that small block was 1 kilogram, 
[3:28] means the big one has a mass about 10 times that of the supermassive black hole at 
[3:33] the center of the Milky Way.
[3:35] That means you would need to count 31 billion billion collisions.
[3:38] At one point in this virtual process, the frequency of clacks would 
[3:42] be around 100 billion billion billion billion clacks per second.
[3:46] So let&#39;s just say you would need very good numerical precision to get this working 
[3:50] accurately, and it would take a very long time for the algorithm to complete.
[3:54] I&#39;ll emphasize again that this process is way over-idealized, 
[3:57] quickly departing from anything that could possibly happen in real physics.
[4:01] But of course, you all know this is not interesting because of its potential 
[4:05] as an actual pi computing algorithm or as a pragmatic physics demonstration.
[4:09] It&#39;s mind-boggling because why on earth would pi show up here?
[4:14] And it&#39;s in such a weird way too.
[4:17] Its decimal digits are counting something, but usually pi shows 
[4:20] up when its precise value is describing something continuous.
[4:24] I will show you why this is true.
[4:26] Where there is pi, there is a hidden circle, and in this case, 
[4:29] that hidden circle comes from the conservation of energy.
[4:32] In fact, you&#39;re going to see two separate methods, 
[4:34] which are each as stunning and surprising as the fact itself.
[4:38] Delaying gratification though, I will make you 
[4:40] wait until the next video to see what&#39;s going on.
[4:42] In the meantime, I highly encourage you to take a stab at it yourself, 
[4:46] and be social about it.
[4:47] It&#39;s a hard puzzle, so it never hurts to recruit some other smart minds to the task.
[5:01] Thanks for watching. I&#39;ll see you next time. Bye.
