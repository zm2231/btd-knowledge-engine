---
title: "How to make ClawdBot 10x better (5 easy steps)"
creator: "alex-finn"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=UTCi_q6iuCM"
video_id: "UTCi_q6iuCM"
duration: "10:23"
transcript_method: "youtube-captions"
segment_count: 312
char_count: 11885
status: ingested
topics: []
meta_patterns: []
---

# How to make ClawdBot 10x better (5 easy steps)

**Creator**: alex-finn | **Duration**: 10:23
**URL**: https://www.youtube.com/watch?v=UTCi_q6iuCM
**Transcript**: 312 segments, 11885 chars

## Transcript

Claudebot, aka OpenClaw, is the most powerful AI tool ever released, but only if you use it the right way. In this video, I'm going to cover five simple things you can do right now to make Claudebot 100 times more powerful than it already is. I'm going to show you how to improve its memory, its intelligence, and even show you how to get it to do things proactively while you sleep. Now, let's lock in and get into it. This first tip is a super easy one and one you can implement in literally 5 seconds. Claudebot's memory is incredible, but it's not as incredible as it could be. There's actually two memory settings that are off by default that make it so much better. One is memory flush, the other is session memory search. While you're using Clawbot and talking to it, it automatically does memory compactions. What it basically does is clean up the memory so you don't use a ton of tokens. The issue is that after every memory compaction, it just forgets a ton of things. So you can be having a conversation and then it will forget what it said 5 seconds ago right after a compaction. This prompt I put down below implements two features that fix that. Memory flush. What that does right before the compaction, it records the most important parts of your conversation so it remembers it right after the compaction. The other is session memory search. And what that's going to do is basically allow your Claudebot to search through your entire conversation history when you say something it doesn't remember. These two features combined when enabled with this prompt I put down in the description below will make your Clawbot memory a thousand times better. So take the prompt from down below, put it into your Claudebot, and you just improved your Clawbot 100x. The next major tip I have to give to you is find the right model for each task you have your Claudebot to do. So what most people are doing is they're using Opus 45, which don't get me wrong is the best AI model out there, but they're using it for every single task they do. And this leads to your Claudebot slowing down as well as costing you tons of money. There are better ways to do this. This is how I look at Claudebot as a brain and muscles. Opus is the best brain ever. This is the model you're communicating with when you talk to Claudebot. But you want to choose the best muscles. And Opus isn't the best for every single muscle. Muscles being like coding, web search, social search. So you want to implement models that are better at each one of these. Codeex is a great coding model. I find Opus controls it really well. Gemini is great for web search. Grock is great for social search. So what you want to do is go to your cloudbot and say, "Hey, moving forward, I want to use codec cli for all coding. I want to use the Gemini API for all web search. I want to use the Grock API for all social search." And what your Claudebot will do is walk you through that setup. It'll ask you for your API keys. You give the keys and it will set up all these muscles for you. Then it will remember next time you ask, "Hey, can you build me this? Can you search for this? Can you find this on X?" It will use the right muscles for the right task which will save you tons of money and get you way better results. You want to think of Clawbot as brain and muscles. And whenever you have a do certain tasks, you want to figure out what is the best muscle for those tasks. And if you don't know what the best muscle for those tasks are, good news, you can just ask your Clawbot what the best muscle is and it will figure it out for you. After you've implemented the improvement I talked about a second ago, go in implement these better muscles with your Clawbot and you'll save tons of money. The third tip for improving your Clawadbot is a really critical one that everyone needs to do. I had this super viral post yesterday that has almost 9 million views about how my Clawudebot called me one morning randomly. It implemented its own voice. It implemented its own phone number and it called me when I woke up. This is 100% real. This actually happened. But it happened because I did this next tip I'm about to give you, which is one, tell Claudebot all about myself. so has complete context around what I need to accomplish with my workflow and two set expectations for our working relationship. Now what do those two things mean? So brain dumping which is telling your claudebot all about yourself is super critical cuz its memory is so good. So everything you tell it it will remember. So, if you tell it all about your dreams, ambitions, goals, what you do on a daily basis, your personal relationships, everything you're interested in, your hobbies, why you think the Patriots are going to win the Super Bowl? If you tell it all those things, it will remember that context so that the tasks it does are much more helpful. But how do I get it to do these proactive things where it called me out of the blue when I woke up? Well, that came from expectation setting. What is expectation setting? That's setting the expectation with your Claudebot around what you want your working relationship to be. The issue is most people talk to their Claudebot like it's a chatbot. It isn't, right? They they treat it like a search engine where they just ask a questions and it gets answers. That's not how you want to treat it. You want to treat it like your employee. And if you ever had employees before, the first thing you do when they start at their job is you do expectation setting around the type of work you want from them. And you want to do that with your Cloudbot. So what I did with my Claudebot is I told it, I want you to be proactive. I want you to work every night when I go to sleep and I want to be able to wake up every morning and be surprised by what you built yourself. And because I did that, every morning I wake up now, I wake up to a surprise. Whether it's Claudebot implementing its own phone number, its own voice, its own face, whatever, every night it builds something that gets us closer to our goals. And it also surprises me if you do those two things, brain dump and set expectations, you'll get significantly better results out of your Clawbot. So take, it should only take like 10 minutes. Take 10 minutes, tell it all about yourself. And then explicitly tell it that you want it to do work for you overnight while you sleep so you wake up and it builds something that gets you closer to your goals. You do those two things, you're going to get so much better result out of your CL. It's just about changing your mindset, treating your Clawbot like an employee, not like a search engine like 99% of other people do. By the way, if you learned anything so far, make sure to leave a like down below. Make sure to subscribe and turn on notifications. I'm pumping out tons of content about what I believe is the most important AI tool ever made, Claudebot. You'll get way more of it and learn about all the latest releases the moment they come out if you turn on notifications down below. And also, I just did a full hour and a half boot camp about Claudebot in the Vibe Coding Academy. Recording is posted. So, to get instant access to that boot camp, just hit the link down below for the Vibe Coding Academy and you'll be able to see the entire thing. The next tip, and this is a huge one that will improve your prompting with Claudebot so much, is reverse prompting. What is reverse prompting? What 99% of people do is they do regular prompting, right? They tell their Clawbot what to do. Do this, do that. The issue is the Claudebot is so much smarter than us. So us coming up with all our own prompts is actually kind of stupid to do. You want to reverse prompt. You want to say, "Hey, Claudebot, ask me what you need from me to do better work based on what you know about me. What should you be doing?" We're basically prompting Claude to make its own prompt. That's called reverse prompting, and it is a critical skill for Claudebot. So, to give you some examples, based on what you know about me and my goals, what are some tasks you can do to get us closer to our missions? So, instead of me telling Claudebot what to do, I'm saying, "Hey, based on what you know about me, what should you be doing right now?" That's a reverse prompt. Claudebot's going to be a lot better at coming up with tasks to do than you are. Another example of a reverse prompt, what other information can I provide you to improve our productivity? Right? I'm not telling you what to do. I'm saying, "Hey, you tell me what to do. What do you need from me? What can I do to help you out? And since this is basically super intelligence, it's going to figure out better tasks to do than we could have told it to do. These reverse prompts will help you get so much better productivity out of your Clawbot. I put both of these prompts down below. But basically, the mindset you want to have now is instead of explicitly telling your Clawbot what to do, ask it a bunch of questions. See what it's capable of. Have it dictate itself what it should be doing. I bet you you get way better results out of it. And I'm just curious before I go into this very last tip, which I think is going to be massive. Which one of these tips have been the most helpful so far? And would you like any follow-up videos doing a deeper dive on any of them or any other questions you have on Claudebot? Let me know down below. I will make as many videos as you need here. I want to make sure I make the most helpful videos possible. Let's get into this last tip, and that is have your Claudebot build its own tooling out. The best part about Claudebot is it's fully extensible. It is fully customizable. You can add your own tooling on, but many people don't ask claw to build those out for you. So, you want to ask your clawbot, hey, what other tooling can we build to improve our productivity? Check what it built out for me here. This is a full task board that it built out where I can track all the tasks it's doing, what's in the backlog, what it's working on, what it reviewed, and then I can see the entire history of activity of what it accomplished for me. This all came from me prompting the Cloudbot. Hey, what tooling can we build to be more productive? They said, 'Oh, I can build a cananban board so you can track all my tasks. And I said, 'Go right ahead, do that. Here's another one. I asked, "What tools can we build to help me look back at our past conversations?" And he's like, "Oh, I'll build you a document viewer, and then I'll put all our memories and tasks into documents for you." Boom. Here is our document viewer that it just built out in this mission control. Your Claudebot is an incredible vibe coder. You need to take advantage of its vibe coding abilities. Go to after you install Codeex as its coding muscle. Say, "Hey, I'd like to build out some tooling based on our working relationship. What are some tools you could build out so we can be more productive together?" I guarantee you it comes up with some amazing things. And if you just need an idea to start off with, say, "Hey, build a task board so I can track all your tasks out." That'll get you started. Then from there, you can start layering on other tools like you see here. where I have like a project board, a memory board, captures, people, an entire CRM. These are all things you can have it build out for you. I will be creating so many more videos on Clawbot. I truly believe this is a huge lifechanging moment for a lot of people in AI and tech. This is going to change the way a lot of people work. So, make sure to turn those notifications on so you can learn about the latest workflows the moment they come out. So much more content coming. And if you learned anything at all, make sure to leave a like and I'll see you in the next

## Timed Segments

[0:00] Claudebot, aka OpenClaw, is the most
[0:02] powerful AI tool ever released, but only
[0:05] if you use it the right way. In this
[0:07] video, I&#39;m going to cover five simple
[0:10] things you can do right now to make
[0:11] Claudebot 100 times more powerful than
[0:14] it already is. I&#39;m going to show you how
[0:16] to improve its memory, its intelligence,
[0:18] and even show you how to get it to do
[0:20] things proactively while you sleep. Now,
[0:21] let&#39;s lock in and get into it. This
[0:23] first tip is a super easy one and one
[0:25] you can implement in literally 5
[0:27] seconds. Claudebot&#39;s memory is
[0:29] incredible, but it&#39;s not as incredible
[0:31] as it could be. There&#39;s actually two
[0:33] memory settings that are off by default
[0:36] that make it so much better. One is
[0:38] memory flush, the other is session
[0:40] memory search. While you&#39;re using
[0:41] Clawbot and talking to it, it
[0:43] automatically does memory compactions.
[0:45] What it basically does is clean up the
[0:47] memory so you don&#39;t use a ton of tokens.
[0:49] The issue is that after every memory
[0:51] compaction, it just forgets a ton of
[0:53] things. So you can be having a
[0:55] conversation and then it will forget
[0:57] what it said 5 seconds ago right after a
[0:59] compaction. This prompt I put down below
[1:02] implements two features that fix that.
[1:04] Memory flush. What that does right
[1:06] before the compaction, it records the
[1:09] most important parts of your
[1:10] conversation so it remembers it right
[1:12] after the compaction. The other is
[1:14] session memory search. And what that&#39;s
[1:16] going to do is basically allow your
[1:18] Claudebot to search through your entire
[1:20] conversation history when you say
[1:22] something it doesn&#39;t remember. These two
[1:25] features combined when enabled with this
[1:28] prompt I put down in the description
[1:29] below will make your Clawbot memory a
[1:32] thousand times better. So take the
[1:34] prompt from down below, put it into your
[1:36] Claudebot, and you just improved your
[1:38] Clawbot 100x. The next major tip I have
[1:40] to give to you is find the right model
[1:43] for each task you have your Claudebot to
[1:46] do. So what most people are doing is
[1:47] they&#39;re using Opus 45, which don&#39;t get
[1:49] me wrong is the best AI model out there,
[1:51] but they&#39;re using it for every single
[1:53] task they do. And this leads to your
[1:56] Claudebot slowing down as well as
[1:58] costing you tons of money. There are
[2:00] better ways to do this. This is how I
[2:02] look at Claudebot as a brain and
[2:03] muscles. Opus is the best brain ever.
[2:06] This is the model you&#39;re communicating
[2:08] with when you talk to Claudebot. But you
[2:10] want to choose the best muscles. And
[2:11] Opus isn&#39;t the best for every single
[2:13] muscle. Muscles being like coding, web
[2:16] search, social search. So you want to
[2:18] implement models that are better at each
[2:19] one of these. Codeex is a great coding
[2:22] model. I find Opus controls it really
[2:25] well. Gemini is great for web search.
[2:27] Grock is great for social search. So
[2:29] what you want to do is go to your
[2:31] cloudbot and say, &quot;Hey, moving forward,
[2:33] I want to use codec cli for all coding.
[2:36] I want to use the Gemini API for all web
[2:39] search. I want to use the Grock API for
[2:41] all social search.&quot; And what your
[2:43] Claudebot will do is walk you through
[2:44] that setup. It&#39;ll ask you for your API
[2:46] keys. You give the keys and it will set
[2:48] up all these muscles for you. Then it
[2:50] will remember next time you ask, &quot;Hey,
[2:52] can you build me this? Can you search
[2:53] for this? Can you find this on X?&quot; It
[2:55] will use the right muscles for the right
[2:57] task which will save you tons of money
[2:58] and get you way better results. You want
[3:01] to think of Clawbot as brain and
[3:03] muscles. And whenever you have a do
[3:05] certain tasks, you want to figure out
[3:07] what is the best muscle for those tasks.
[3:09] And if you don&#39;t know what the best
[3:11] muscle for those tasks are, good news,
[3:12] you can just ask your Clawbot what the
[3:14] best muscle is and it will figure it out
[3:16] for you. After you&#39;ve implemented the
[3:18] improvement I talked about a second ago,
[3:20] go in implement these better muscles
[3:22] with your Clawbot and you&#39;ll save tons
[3:24] of money. The third tip for improving
[3:25] your Clawadbot is a really critical one
[3:27] that everyone needs to do. I had this
[3:29] super viral post yesterday that has
[3:31] almost 9 million views about how my
[3:33] Clawudebot called me one morning
[3:35] randomly. It implemented its own voice.
[3:38] It implemented its own phone number and
[3:39] it called me when I woke up. This is
[3:41] 100% real. This actually happened. But
[3:43] it happened because I did this next tip
[3:45] I&#39;m about to give you, which is one,
[3:47] tell Claudebot all about myself. so has
[3:50] complete context around what I need to
[3:52] accomplish with my workflow and two set
[3:55] expectations for our working
[3:57] relationship. Now what do those two
[3:58] things mean? So brain dumping which is
[4:01] telling your claudebot all about
[4:02] yourself is super critical cuz its
[4:04] memory is so good. So everything you
[4:07] tell it it will remember. So, if you
[4:09] tell it all about your dreams,
[4:10] ambitions, goals, what you do on a daily
[4:12] basis, your personal relationships,
[4:14] everything you&#39;re interested in, your
[4:16] hobbies, why you think the Patriots are
[4:18] going to win the Super Bowl? If you tell
[4:19] it all those things, it will remember
[4:21] that context so that the tasks it does
[4:24] are much more helpful. But how do I get
[4:27] it to do these proactive things where it
[4:29] called me out of the blue when I woke
[4:31] up? Well, that came from expectation
[4:33] setting. What is expectation setting?
[4:36] That&#39;s setting the expectation with your
[4:38] Claudebot around what you want your
[4:40] working relationship to be. The issue is
[4:42] most people talk to their Claudebot like
[4:44] it&#39;s a chatbot. It isn&#39;t, right? They
[4:45] they treat it like a search engine where
[4:47] they just ask a questions and it gets
[4:48] answers. That&#39;s not how you want to
[4:50] treat it. You want to treat it like your
[4:52] employee. And if you ever had employees
[4:54] before, the first thing you do when they
[4:55] start at their job is you do expectation
[4:58] setting around the type of work you want
[5:00] from them. And you want to do that with
[5:01] your Cloudbot. So what I did with my
[5:03] Claudebot is I told it, I want you to be
[5:05] proactive. I want you to work every
[5:07] night when I go to sleep and I want to
[5:08] be able to wake up every morning and be
[5:10] surprised by what you built yourself.
[5:12] And because I did that, every morning I
[5:14] wake up now, I wake up to a surprise.
[5:17] Whether it&#39;s Claudebot implementing its
[5:19] own phone number, its own voice, its own
[5:21] face, whatever, every night it builds
[5:24] something that gets us closer to our
[5:26] goals. And it also surprises me if you
[5:28] do those two things, brain dump and set
[5:31] expectations, you&#39;ll get significantly
[5:32] better results out of your Clawbot. So
[5:34] take, it should only take like 10
[5:36] minutes. Take 10 minutes, tell it all
[5:38] about yourself. And then explicitly tell
[5:40] it that you want it to do work for you
[5:42] overnight while you sleep so you wake up
[5:45] and it builds something that gets you
[5:46] closer to your goals. You do those two
[5:48] things, you&#39;re going to get so much
[5:50] better result out of your CL. It&#39;s just
[5:51] about changing your mindset, treating
[5:53] your Clawbot like an employee, not like
[5:56] a search engine like 99% of other people
[5:58] do. By the way, if you learned anything
[5:59] so far, make sure to leave a like down
[6:01] below. Make sure to subscribe and turn
[6:03] on notifications. I&#39;m pumping out tons
[6:05] of content about what I believe is the
[6:07] most important AI tool ever made,
[6:08] Claudebot. You&#39;ll get way more of it and
[6:10] learn about all the latest releases the
[6:12] moment they come out if you turn on
[6:13] notifications down below. And also, I
[6:15] just did a full hour and a half boot
[6:18] camp about Claudebot in the Vibe Coding
[6:20] Academy. Recording is posted. So, to get
[6:23] instant access to that boot camp, just
[6:24] hit the link down below for the Vibe
[6:26] Coding Academy and you&#39;ll be able to see
[6:27] the entire thing. The next tip, and this
[6:29] is a huge one that will improve your
[6:31] prompting with Claudebot so much, is
[6:33] reverse prompting. What is reverse
[6:36] prompting? What 99% of people do is they
[6:38] do regular prompting, right? They tell
[6:40] their Clawbot what to do. Do this, do
[6:41] that. The issue is the Claudebot is so
[6:44] much smarter than us. So us coming up
[6:46] with all our own prompts is actually
[6:49] kind of stupid to do. You want to
[6:51] reverse prompt. You want to say, &quot;Hey,
[6:53] Claudebot, ask me what you need from me
[6:56] to do better work based on what you know
[6:57] about me. What should you be doing?&quot;
[6:59] We&#39;re basically prompting Claude to make
[7:02] its own prompt. That&#39;s called reverse
[7:04] prompting, and it is a critical skill
[7:06] for Claudebot. So, to give you some
[7:07] examples, based on what you know about
[7:10] me and my goals, what are some tasks you
[7:12] can do to get us closer to our missions?
[7:14] So, instead of me telling Claudebot what
[7:16] to do, I&#39;m saying, &quot;Hey, based on what
[7:18] you know about me, what should you be
[7:20] doing right now?&quot; That&#39;s a reverse
[7:22] prompt. Claudebot&#39;s going to be a lot
[7:24] better at coming up with tasks to do
[7:25] than you are. Another example of a
[7:27] reverse prompt, what other information
[7:29] can I provide you to improve our
[7:31] productivity? Right? I&#39;m not telling you
[7:33] what to do. I&#39;m saying, &quot;Hey, you tell
[7:34] me what to do. What do you need from me?
[7:37] What can I do to help you out? And since
[7:39] this is basically super intelligence,
[7:41] it&#39;s going to figure out better tasks to
[7:43] do than we could have told it to do.
[7:45] These reverse prompts will help you get
[7:46] so much better productivity out of your
[7:48] Clawbot. I put both of these prompts
[7:50] down below. But basically, the mindset
[7:52] you want to have now is instead of
[7:54] explicitly telling your Clawbot what to
[7:56] do, ask it a bunch of questions. See
[7:58] what it&#39;s capable of. Have it dictate
[8:00] itself what it should be doing. I bet
[8:02] you you get way better results out of
[8:04] it. And I&#39;m just curious before I go
[8:05] into this very last tip, which I think
[8:07] is going to be massive. Which one of
[8:09] these tips have been the most helpful so
[8:11] far? And would you like any follow-up
[8:13] videos doing a deeper dive on any of
[8:14] them or any other questions you have on
[8:17] Claudebot? Let me know down below. I
[8:19] will make as many videos as you need
[8:21] here. I want to make sure I make the
[8:22] most helpful videos possible. Let&#39;s get
[8:24] into this last tip, and that is have
[8:26] your Claudebot build its own tooling
[8:28] out. The best part about Claudebot is
[8:30] it&#39;s fully extensible. It is fully
[8:32] customizable. You can add your own
[8:34] tooling on, but many people don&#39;t ask
[8:36] claw to build those out for you. So, you
[8:39] want to ask your clawbot, hey, what
[8:41] other tooling can we build to improve
[8:43] our productivity? Check what it built
[8:45] out for me here. This is a full task
[8:47] board that it built out where I can
[8:49] track all the tasks it&#39;s doing, what&#39;s
[8:52] in the backlog, what it&#39;s working on,
[8:53] what it reviewed, and then I can see the
[8:55] entire history of activity of what it
[8:57] accomplished for me. This all came from
[9:00] me prompting the Cloudbot. Hey, what
[9:02] tooling can we build to be more
[9:03] productive? They said, &#39;Oh, I can build
[9:05] a cananban board so you can track all my
[9:07] tasks. And I said, &#39;Go right ahead, do
[9:09] that. Here&#39;s another one. I asked, &quot;What
[9:11] tools can we build to help me look back
[9:13] at our past conversations?&quot; And he&#39;s
[9:15] like, &quot;Oh, I&#39;ll build you a document
[9:16] viewer, and then I&#39;ll put all our
[9:18] memories and tasks into documents for
[9:20] you.&quot; Boom. Here is our document viewer
[9:22] that it just built out in this mission
[9:24] control. Your Claudebot is an incredible
[9:26] vibe coder. You need to take advantage
[9:28] of its vibe coding abilities. Go to
[9:30] after you install Codeex as its coding
[9:32] muscle. Say, &quot;Hey, I&#39;d like to build out
[9:35] some tooling based on our working
[9:36] relationship. What are some tools you
[9:38] could build out so we can be more
[9:40] productive together?&quot; I guarantee you it
[9:42] comes up with some amazing things. And
[9:44] if you just need an idea to start off
[9:45] with, say, &quot;Hey, build a task board so I
[9:47] can track all your tasks out.&quot; That&#39;ll
[9:49] get you started. Then from there, you
[9:50] can start layering on other tools like
[9:53] you see here. where I have like a
[9:54] project board, a memory board, captures,
[9:57] people, an entire CRM. These are all
[9:59] things you can have it build out for
[10:00] you. I will be creating so many more
[10:03] videos on Clawbot. I truly believe this
[10:05] is a huge lifechanging moment for a lot
[10:08] of people in AI and tech. This is going
[10:10] to change the way a lot of people work.
[10:12] So, make sure to turn those
[10:14] notifications on so you can learn about
[10:16] the latest workflows the moment they
[10:17] come out. So much more content coming.
[10:19] And if you learned anything at all, make
[10:21] sure to leave a like and I&#39;ll see you in
[10:22] the next
