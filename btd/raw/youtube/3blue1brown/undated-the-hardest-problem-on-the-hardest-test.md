---
title: "The hardest problem on the hardest test"
creator: "3blue1brown"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=OkmNXy7er84"
video_id: "OkmNXy7er84"
duration: "11:15"
transcript_method: "youtube-captions"
segment_count: 181
char_count: 11367
status: ingested
topics: []
meta_patterns: []
---

# The hardest problem on the hardest test

**Creator**: 3blue1brown | **Duration**: 11:15
**URL**: https://www.youtube.com/watch?v=OkmNXy7er84
**Transcript**: 181 segments, 11367 chars

## Transcript

Do you guys know about the Putnam? It's a math competition for undergraduate students. It's a six-hour long test that just has 12 questions  broken up into two different three-hour sessions. And each one of those questions is scored 1 to 10,  so the highest possible score would be 120. And yet, despite the fact that the only students taking this thing each year are those  who clearly are already pretty interested in math, the median score is around 1 or 2. So it's a hard test. And on each one of those sections of six questions,  the problems tend to get harder as you go from 1 to 6,  although of course difficulty is in the eye of the beholder. But the thing about those fives and sixes is that even though they're  positioned as the hardest problems on a famously hard test,  quite often these are the ones with the most elegant solutions available,  some subtle shift in perspective that transforms it from very challenging to doable. Here I'm going to share with you one problem that came up  as the sixth question on one of these tests a while back. And those of you who follow the channel know that rather than just jumping  straight to the solution, which in this case would be surprisingly short,  when possible I like to take the time to walk you through how you might  have stumbled across the solution yourself, where the insight comes from. That is, make a video more about the problem-solving  process than about the problem used to exemplify it. So anyway, here's the question. If you choose four random points on a sphere, and consider the  tetrahedron with these points as its vertices,  what is the probability that the center of the sphere is inside that tetrahedron? Go ahead, take a moment and kind of digest this question. You might start thinking about which of these tetrahedra contain the sphere's center,  which ones don't, how you might systematically distinguish the two,  and how do you approach a problem like this? Where do you even start? Well, it's usually a good idea to think about simpler cases,  so let's knock things down to two dimensions, where you'll choose three random  points on a circle, and it's always helpful to name things so let's call these guys P1,  P2, and P3. The question is, what's the probability that the triangle  formed by these points contains the center of the circle? I think you'll agree it's way easier to visualize now, but it's still a hard question. So again, you ask, is there a way to simplify what's going on,  get ourselves to some kind of foothold that we can build up from? Well, maybe you imagine fixing P1 and P2 in place, and only letting that third point vary. And when you do this, and play around with it in your mind,  you might notice that there's a special region, a certain arc,  where when P3 is in that arc, the triangle contains the center, otherwise not. Specifically, if you draw lines from P1 and P2 through the center,  these lines divide up the circle into four different arcs,  and if P3 happens to be in the one on the opposite side as P1 and P2,  the triangle has the center. If it's in any of the other arcs though, no luck. We're assuming here that all of the points of the circle are equally likely. So what is the probability that P3 lands in that arc? It's the length of that arc divided by the full circumference of the circle,  the proportion of the circle that this arc makes up. So what is that proportion? Obviously that depends on where you put the first two points. I mean, if they're 90 degrees apart from each other,  then the relevant arc is one quarter of the circle. But if those two points were farther apart, that proportion would be something closer  to a half, and if they were really close together, that proportion gets closer to zero. So think about this for a moment. P1 and P2 are chosen randomly, with every point on the circle being equally likely. So what is the average size of this relevant arc? Maybe you imagine fixing P1 in place, and just  considering all the places that P2 might be. All of the possible angles between these two lines,  every angle from 0 degrees up to 180 degrees, is equally likely. So every proportion between 0 and 0.5 is equally likely,  and that means that the average proportion is 0.25. So, if the average size of this arc is a quarter of the full circle,  the average probability that the third point lands in it is a quarter,  and that means that the overall probability that our triangle contains the  center is a quarter. But can we extend this into the three-dimensional case? If you imagine three out of those four points just being fixed in place,  which points of the sphere can the fourth one be on so that the  tetrahedron that they form contain the center of the sphere? Just like before, let's go ahead and draw some lines from each  of those fixed three points through the center of the sphere. It's also helpful if we draw some planes that are determined by any pair of these lines. What these planes do, you might notice, is divide the sphere into  eight different sections, each of which is a sort of spherical triangle. And our tetrahedron is only going to contain the center of the sphere if the  fourth point is in the spherical triangle on the opposite side as the first three. Now, unlike the 2D case, it's pretty difficult to think about the  average size of this section, as we let the initial three points vary. Those of you with some multivariable calculus under your belt might think,  let's just try a surface integral. And by all means, pull out some paper and give it a try. But it's not easy. And of course it should be difficult. I mean, this is the sixth problem on a Putnam, what do you expect? And what do you even do with that? Well, one thing you can do is back up to the two-dimensional case and  contemplate if there is a different way to think about the same answer we got. That answer, one-fourth, looks suspiciously clean,  and raises the question of what that four represents. One of the main reasons I wanted to make a video about this particular problem is that  what's about to happen carries with it a broader lesson for mathematical problem solving. Think about those two lines we drew for p1 and p2 through the origin. They made the problem a lot easier to think about. And in general, whenever you've added something to the problem  setup that makes it conceptually easier, see if you can reframe  the entire question in terms of those things you just added. In this case, rather than thinking about choosing three points randomly,  start by saying, choose two random lines that pass through the circle's center. For each line, there's two possible points it could correspond to,  so just flip a coin for each one to choose which of the endpoints is going to be p1,  and likewise for the other, which endpoint is going to be p2. Choosing a random line and flipping a coin like this is the same thing as choosing  a random point on the circle, it just feels a little bit convoluted at first. But the reason for thinking about the random process this  way is that things are actually about to become easier. We'll still think about that third point, p3, as just being a random point on the circle,  but imagine that it was chosen before you do the two coin flips. Because you see, once the two lines and the third point are set in stone,  there's only four possibilities for where P1 and P2 might end up,  based on those coin flips, each one being equally likely. But one and only one of those four outcomes leaves p1 and p2 on the opposite  side of the circle as p3, with the triangle they form containing the center. So no matter where those two lines end up, and where that p3 ends up,  it's always a 1 fourth chance that the coin flips leave us with a triangle containing  the center. Now that's very subtle. Just by reframing how we think about the random process for choosing points,  the answer 1 quarter popped out in a very different way from how it did before. And importantly, this style of argument generalizes seamlessly up into three dimensions. Again, instead of starting off by picking four random points,  imagine choosing three random lines through the center of the sphere,  and then some random point for p4. That first line passes through the sphere at two points,  so flip a coin to decide which of those two points is going to be p1. Likewise, for each of the other lines, flip a coin to decide where p2 and p3 end up. There's eight equally likely outcomes of those coin flips,  but one and only one of them is going to place p1, p2,  and p3 on the opposite side of the center as p4. So one and only one of these eight equally likely  outcomes gives us a tetrahedron that contains the center. Again, it's kind of subtle how that pops out to us, but isn't that elegant? This is a valid solution to the problem, but admittedly  the way I've stated it so far rests on some visual intuition. If you're curious about how you might write it up in a way that doesn't  rely on visual intuition, I've left a link in the description to one  such write-up in the language of linear algebra, if you're curious. And this is pretty common in math, where having the key insight and  understanding is one thing, but having the relevant background to articulate  that understanding more formally is almost a separate muscle entirely,  one that undergraduate math students kind of spend most of their time building up. But the main takeaway here is not the solution itself,  but how you might find that key insight if it was put in front of you and you  were just left to solve it. Namely, just keep asking simpler versions of the  question until you can get some kind of foothold. And then when you do, if there's any kind of added construct that proves to be useful,  see if you can reframe the whole question around that new construct. To close things off here, I've got another probability puzzle,  one that comes from this video sponsor, brilliant.org. Suppose you have eight students sitting in a circle taking the Putnam. It's a hard test, so each student tries to cheat off of his neighbor,  choosing randomly which neighbor to cheat from. Now circle all of the students that don't have somebody cheating off of their test. What is the expected number of such circled students? It's an interesting question, right? Brilliant.org is a site where you can practice your problem  solving abilities with questions like this and many, many more. And that really is the best way to learn. You're going to find countless interesting questions curated in a pretty  thoughtful way so that you really do come away better at problem solving. If you want more probability, they have a really good course on probability,  but they've got all sorts of other math and science as well,  so you're almost certainly going to find something that interests you. Me? I've been a fan for a while, and if you go to brilliant.org slash 3b1b,  it lets them know that you came from here, and the first 256 of you to visit that  link can get 20% off their premium membership, which is the one I use,  if you want to upgrade. Also if you're just itching to see a solution to this puzzle,  which by the way uses a certain tactic in probability that's useful in a lot of  other circumstances, I also left a link in the description that just jumps you  straight to the solution.

## Timed Segments

[0:03] Do you guys know about the Putnam?
[0:05] It&#39;s a math competition for undergraduate students.
[0:08] It&#39;s a six-hour long test that just has 12 questions 
[0:11] broken up into two different three-hour sessions.
[0:14] And each one of those questions is scored 1 to 10, 
[0:16] so the highest possible score would be 120.
[0:19] And yet, despite the fact that the only students taking this thing each year are those 
[0:24] who clearly are already pretty interested in math, the median score is around 1 or 2.
[0:28] So it&#39;s a hard test.
[0:31] And on each one of those sections of six questions, 
[0:33] the problems tend to get harder as you go from 1 to 6, 
[0:36] although of course difficulty is in the eye of the beholder.
[0:40] But the thing about those fives and sixes is that even though they&#39;re 
[0:43] positioned as the hardest problems on a famously hard test, 
[0:46] quite often these are the ones with the most elegant solutions available, 
[0:50] some subtle shift in perspective that transforms it from very challenging to doable.
[0:56] Here I&#39;m going to share with you one problem that came up 
[0:58] as the sixth question on one of these tests a while back.
[1:01] And those of you who follow the channel know that rather than just jumping 
[1:04] straight to the solution, which in this case would be surprisingly short, 
[1:07] when possible I like to take the time to walk you through how you might 
[1:10] have stumbled across the solution yourself, where the insight comes from.
[1:14] That is, make a video more about the problem-solving 
[1:17] process than about the problem used to exemplify it.
[1:20] So anyway, here&#39;s the question.
[1:21] If you choose four random points on a sphere, and consider the 
[1:25] tetrahedron with these points as its vertices, 
[1:28] what is the probability that the center of the sphere is inside that tetrahedron?
[1:33] Go ahead, take a moment and kind of digest this question.
[1:37] You might start thinking about which of these tetrahedra contain the sphere&#39;s center, 
[1:42] which ones don&#39;t, how you might systematically distinguish the two, 
[1:45] and how do you approach a problem like this?
[1:48] Where do you even start?
[1:51] Well, it&#39;s usually a good idea to think about simpler cases, 
[1:54] so let&#39;s knock things down to two dimensions, where you&#39;ll choose three random 
[1:58] points on a circle, and it&#39;s always helpful to name things so let&#39;s call these guys P1, 
[2:03] P2, and P3.
[2:04] The question is, what&#39;s the probability that the triangle 
[2:07] formed by these points contains the center of the circle?
[2:14] I think you&#39;ll agree it&#39;s way easier to visualize now, but it&#39;s still a hard question.
[2:18] So again, you ask, is there a way to simplify what&#39;s going on, 
[2:22] get ourselves to some kind of foothold that we can build up from?
[2:25] Well, maybe you imagine fixing P1 and P2 in place, and only letting that third point vary.
[2:31] And when you do this, and play around with it in your mind, 
[2:34] you might notice that there&#39;s a special region, a certain arc, 
[2:37] where when P3 is in that arc, the triangle contains the center, otherwise not.
[2:42] Specifically, if you draw lines from P1 and P2 through the center, 
[2:46] these lines divide up the circle into four different arcs, 
[2:49] and if P3 happens to be in the one on the opposite side as P1 and P2, 
[2:53] the triangle has the center.
[2:55] If it&#39;s in any of the other arcs though, no luck.
[3:01] We&#39;re assuming here that all of the points of the circle are equally likely.
[3:04] So what is the probability that P3 lands in that arc?
[3:08] It&#39;s the length of that arc divided by the full circumference of the circle, 
[3:12] the proportion of the circle that this arc makes up.
[3:15] So what is that proportion?
[3:17] Obviously that depends on where you put the first two points.
[3:20] I mean, if they&#39;re 90 degrees apart from each other, 
[3:22] then the relevant arc is one quarter of the circle.
[3:25] But if those two points were farther apart, that proportion would be something closer 
[3:29] to a half, and if they were really close together, that proportion gets closer to zero.
[3:34] So think about this for a moment.
[3:35] P1 and P2 are chosen randomly, with every point on the circle being equally likely.
[3:40] So what is the average size of this relevant arc?
[3:46] Maybe you imagine fixing P1 in place, and just 
[3:48] considering all the places that P2 might be.
[3:51] All of the possible angles between these two lines, 
[3:54] every angle from 0 degrees up to 180 degrees, is equally likely.
[3:58] So every proportion between 0 and 0.5 is equally likely, 
[4:02] and that means that the average proportion is 0.25.
[4:08] So, if the average size of this arc is a quarter of the full circle, 
[4:12] the average probability that the third point lands in it is a quarter, 
[4:16] and that means that the overall probability that our triangle contains the 
[4:20] center is a quarter.
[4:26] But can we extend this into the three-dimensional case?
[4:29] If you imagine three out of those four points just being fixed in place, 
[4:33] which points of the sphere can the fourth one be on so that the 
[4:37] tetrahedron that they form contain the center of the sphere?
[4:41] Just like before, let&#39;s go ahead and draw some lines from each 
[4:44] of those fixed three points through the center of the sphere.
[4:47] It&#39;s also helpful if we draw some planes that are determined by any pair of these lines.
[4:53] What these planes do, you might notice, is divide the sphere into 
[4:56] eight different sections, each of which is a sort of spherical triangle.
[5:01] And our tetrahedron is only going to contain the center of the sphere if the 
[5:05] fourth point is in the spherical triangle on the opposite side as the first three.
[5:11] Now, unlike the 2D case, it&#39;s pretty difficult to think about the 
[5:14] average size of this section, as we let the initial three points vary.
[5:21] Those of you with some multivariable calculus under your belt might think, 
[5:24] let&#39;s just try a surface integral.
[5:26] And by all means, pull out some paper and give it a try.
[5:28] But it&#39;s not easy.
[5:30] And of course it should be difficult.
[5:31] I mean, this is the sixth problem on a Putnam, what do you expect?
[5:35] And what do you even do with that?
[5:39] Well, one thing you can do is back up to the two-dimensional case and 
[5:42] contemplate if there is a different way to think about the same answer we got.
[5:46] That answer, one-fourth, looks suspiciously clean, 
[5:49] and raises the question of what that four represents.
[5:53] One of the main reasons I wanted to make a video about this particular problem is that 
[5:57] what&#39;s about to happen carries with it a broader lesson for mathematical problem solving.
[6:01] Think about those two lines we drew for p1 and p2 through the origin.
[6:05] They made the problem a lot easier to think about.
[6:08] And in general, whenever you&#39;ve added something to the problem 
[6:11] setup that makes it conceptually easier, see if you can reframe 
[6:14] the entire question in terms of those things you just added.
[6:18] In this case, rather than thinking about choosing three points randomly, 
[6:23] start by saying, choose two random lines that pass through the circle&#39;s center.
[6:28] For each line, there&#39;s two possible points it could correspond to, 
[6:31] so just flip a coin for each one to choose which of the endpoints is going to be p1, 
[6:35] and likewise for the other, which endpoint is going to be p2.
[6:39] Choosing a random line and flipping a coin like this is the same thing as choosing 
[6:43] a random point on the circle, it just feels a little bit convoluted at first.
[6:47] But the reason for thinking about the random process this 
[6:50] way is that things are actually about to become easier.
[6:53] We&#39;ll still think about that third point, p3, as just being a random point on the circle, 
[6:58] but imagine that it was chosen before you do the two coin flips.
[7:02] Because you see, once the two lines and the third point are set in stone, 
[7:06] there&#39;s only four possibilities for where P1 and P2 might end up, 
[7:10] based on those coin flips, each one being equally likely.
[7:13] But one and only one of those four outcomes leaves p1 and p2 on the opposite 
[7:18] side of the circle as p3, with the triangle they form containing the center.
[7:23] So no matter where those two lines end up, and where that p3 ends up, 
[7:27] it&#39;s always a 1 fourth chance that the coin flips leave us with a triangle containing 
[7:32] the center.
[7:35] Now that&#39;s very subtle.
[7:37] Just by reframing how we think about the random process for choosing points, 
[7:40] the answer 1 quarter popped out in a very different way from how it did before.
[7:45] And importantly, this style of argument generalizes seamlessly up into three dimensions.
[7:51] Again, instead of starting off by picking four random points, 
[7:55] imagine choosing three random lines through the center of the sphere, 
[7:59] and then some random point for p4.
[8:03] That first line passes through the sphere at two points, 
[8:05] so flip a coin to decide which of those two points is going to be p1.
[8:09] Likewise, for each of the other lines, flip a coin to decide where p2 and p3 end up.
[8:15] There&#39;s eight equally likely outcomes of those coin flips, 
[8:18] but one and only one of them is going to place p1, p2, 
[8:22] and p3 on the opposite side of the center as p4.
[8:26] So one and only one of these eight equally likely 
[8:29] outcomes gives us a tetrahedron that contains the center.
[8:35] Again, it&#39;s kind of subtle how that pops out to us, but isn&#39;t that elegant?
[8:40] This is a valid solution to the problem, but admittedly 
[8:43] the way I&#39;ve stated it so far rests on some visual intuition.
[8:47] If you&#39;re curious about how you might write it up in a way that doesn&#39;t 
[8:50] rely on visual intuition, I&#39;ve left a link in the description to one 
[8:52] such write-up in the language of linear algebra, if you&#39;re curious.
[8:56] And this is pretty common in math, where having the key insight and 
[8:59] understanding is one thing, but having the relevant background to articulate 
[9:03] that understanding more formally is almost a separate muscle entirely, 
[9:07] one that undergraduate math students kind of spend most of their time building up.
[9:12] But the main takeaway here is not the solution itself, 
[9:14] but how you might find that key insight if it was put in front of you and you 
[9:18] were just left to solve it.
[9:20] Namely, just keep asking simpler versions of the 
[9:22] question until you can get some kind of foothold.
[9:25] And then when you do, if there&#39;s any kind of added construct that proves to be useful, 
[9:29] see if you can reframe the whole question around that new construct.
[9:35] To close things off here, I&#39;ve got another probability puzzle, 
[9:38] one that comes from this video sponsor, brilliant.org.
[9:41] Suppose you have eight students sitting in a circle taking the Putnam.
[9:44] It&#39;s a hard test, so each student tries to cheat off of his neighbor, 
[9:48] choosing randomly which neighbor to cheat from.
[9:51] Now circle all of the students that don&#39;t have somebody cheating off of their test.
[9:56] What is the expected number of such circled students?
[10:00] It&#39;s an interesting question, right?
[10:03] Brilliant.org is a site where you can practice your problem 
[10:05] solving abilities with questions like this and many, many more.
[10:08] And that really is the best way to learn.
[10:10] You&#39;re going to find countless interesting questions curated in a pretty 
[10:14] thoughtful way so that you really do come away better at problem solving.
[10:18] If you want more probability, they have a really good course on probability, 
[10:21] but they&#39;ve got all sorts of other math and science as well, 
[10:23] so you&#39;re almost certainly going to find something that interests you.
[10:27] Me?
[10:27] I&#39;ve been a fan for a while, and if you go to brilliant.org slash 3b1b, 
[10:31] it lets them know that you came from here, and the first 256 of you to visit that 
[10:36] link can get 20% off their premium membership, which is the one I use, 
[10:40] if you want to upgrade.
[10:42] Also if you&#39;re just itching to see a solution to this puzzle, 
[10:45] which by the way uses a certain tactic in probability that&#39;s useful in a lot of 
[10:48] other circumstances, I also left a link in the description that just jumps you 
[10:52] straight to the solution.
