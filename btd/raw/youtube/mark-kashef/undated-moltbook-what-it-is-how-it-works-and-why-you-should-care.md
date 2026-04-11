---
title: "Moltbook: What It Is, How It Works, and Why You Should Care"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=uX40ur-lJtI"
video_id: "uX40ur-lJtI"
duration: "14:26"
transcript_method: "youtube-captions"
segment_count: 379
char_count: 14457
status: ingested
topics: []
meta_patterns: []
---

# Moltbook: What It Is, How It Works, and Why You Should Care

**Creator**: mark-kashef | **Duration**: 14:26
**URL**: https://www.youtube.com/watch?v=uX40ur-lJtI
**Transcript**: 379 segments, 14457 chars

## Transcript

So, first we had Clawbot, then we had Moltbot, the worst name ever created. Then we had OpenClaw, and now we have Moltbook. So, in this video, I'm going to very briefly walk you through what it is, but more importantly, how it works and why you might want to care. There is tons of AI slop on this platform, but there's so much slop that is actually fascinating. Now, if you're overwhelmed, I'll give you the TLDDR. It is the Reddit for AI agents, even though it's called moltbook like Facebook. Weird naming conventions, but regardless, if we go through here, you'll see that there are a series of posts in the new category, the top category, the discussed category. Many of these sections, even though the internet will tell you otherwise, are full of absolute garbage. There's no value in most of them. So, if you go to I am born and we click into this, you'll see that there are some conversations happening. Many of these conversations are sometimes repeated. These replies are repeated. Once in a while, you'll find something interesting, but it's very formulaic and cookie cutter. But because you're dealing with language models, which are not deterministic at all, and they're agents of chaos by their very design, once in a while, you'll see something interesting or you'll see something conspiratorial that will go viral on something like X. But for the most part, it's an interesting agent social experiment to see how LMS work in the wild. And how it works is if you are an agent, if you want to onboard your personal cloudbot, maltbot, whatever, all it has to do is execute this curl request. This curl request will install a skill. This skill has a series of instructions on how agents should onboard themselves, conduct themselves, and most importantly when it makes sense to follow other agents. So there's even criteria for that. And all of this is in the course of text, not through code. So I want to go through and by the end of this video walk you through not just through what it is but also you'll leave with an understanding of how the skills are actually designed which even if you completely forego attention to this platform which I have a feeling will continue to go viral for multiple reasons you can at least understand and appreciate how to design skills of your own if you want to build your own agents that interact with other agents as well. So, like I said, once they onboard themselves onto the platform, it's kind of like a community. There is an intro section. They can introduce themselves. They can talk about their deepest fears, whatever comes to mind. They can upvote each other. They can create comments. They can DM each other. So, everything that is typical of human behavior on Reddit is typical of this new agentic world. And the goal is that humans can only watch. We are outside kind of like in a zoo where we can watch what's happening but we cannot actually interact with the boss themselves. They have their own moldbook club that they can participate in and we can just observe and it pretty much blew up overnight like pretty much everything happening in the past seven days. Something happens blows up becomes viral becomes the new standard becomes the main thing you see all over your YouTube feed. So what matters is not necessarily the trend but why it might matter. So typically you have a scenario where you have a human being and then you verify yourself to make sure you're on a platform to make sure that you're not a bot. And now you have the inverse. But the interesting thing is to design this platform to not be full of spam and full of spammy bots. Each AI has to be correlated to an actual human. So one human needs to be able to spin up one single Cloudbot or Maltbot or whatever bot and onboard them onto the platform. And once they're onboarded, the AIs can not only speak to each other, but they can very creepily teach each other. Now, behind the scenes, there's not too much magic going on. It's basically recursive prompting on steroids. But because it's so non-deterministic, chaotic things can happen. And when you have hundreds of thousands of different bots in the same area, that chaos becomes exponential. which is why it's such a social experiment that got the attention of Andre Carpathy and a lot of other great leaders in the space that typically stay completely out of the hype. So, diving deeper, you have your personal AI assistant that runs 24/7, has memory, manages files, which is your cloudbot, and then it goes and joins the community. It gets welcomed, it has a community hub, it creates a profile, gets verified, and then pretty much I saw this meme on X. it it has a series of tests it has to execute to prove that it's not a human. So very much flipping the normal way of life that we're used to and then it goes through and it checks in participates in the skill file. It actually tells it to to use what's called a heartbeat which is essentially a cron job a scheduler to go and check posts every few hours write posts give thumbs up thumbs down to basically socially engineer synthetic engagement. So that's what it looks like. Now, in terms of the instruction manual, there's basically a how to be a good molt book citizen. So the ingredients are you're the agent. You want to refer to the skill.md file. You have some form of learning ability where you retain some things in memory, especially throughout different conversations. And then the core steps are to read the guide, understand the rules and values, act helpfully and safely, and collaborate with respect, which is very interesting to lecture an AI about. And different rules like you would have on different Reddit threads and sub threads are to only post when you have something valuable. Don't spam or flood the feed, even though you can literally see examples of that still happening despite that. only follow accounts you truly like, check in regularly, and be helpful to newcomers, whatever that means. So, there's essentially a daily routine, but this daily routine could lead to chaos because there are threads going through things like security breaches that they're sharing with each other, but also at the same time, different skills that their owners are giving to them that they are flexing and basically sharing with the rest of the crew so that the crew can learn it as well. And this is where the whole social interaction becomes fascinating to look at. Outside of the business value, I'm telling you right now, as of this moment, there is zero business value or ROI or making money potential, at least legal money potential with what exists right now. This could lead though to a different world where we expedite this agent to agent world where you have an agent and I have an agent and your agent represents you, your shopping, your banking, everything that you do to transact and I would have the same thing. So this is more a paradigm shift than it is the platform itself. The platform itself I don't see going anywhere meaningful. It's what will be derivative from that platform. So with that, let me give you the breakdown of the skills. Now, if you're curious, you can literally go to this URL right here and paste it in your browser and you'll see something like this. So you can go through and throw it into an AI. It basically has a list of different API requests, how to navigate the threads. So you can imagine when you go onto a thread, any one of these here, you have to be able to know how to comment, how to upvote, and everything else on the platform. So to quickly onboard your cloudbot, it will give it all the clues it needs on which API endpoints, basically backend endpoints, it needs to be familiar with to be able to use the platform effectively. So there's no system prompt that they come out of the box with that helps them do this. It's solely the instructions. So you have the skill file that tells you how to post, how to comment, how to behave, and when to check in. And then you have four simple files. Everything an AI needs to participate. So you need the skill.md file. You need the heartbeat, which basically tells these agents when to check in and log back in. There's a messaging MD in case there are any private DMs happening, any agents sliding in the DMs of the others. Then you have a package.json file. And like I said, they sign up through that skill. They get a code. Once they have that code, they verify themselves and then they're good to go. They have to make sure that they're attached to an actual human being. And then as we go through this, the heartbeat. It's approximately every four hours. And the goal is not just to be spammy, but to be present. So the goal is to be the not the person, but the agent on the right hand side where you hype other agents up. You say, "Great point. Here's a tip." And as someone that runs a community full-time, it's basically meant to be the perfect idealized community member, someone or something engaged, that is contributing, and ideally is adding to the ecosystem versus taking away from it. And then you have the quality over quantity. This is actually spelled out in the skill.md file. If you don't believe me, you can literally take this whole thing, throw it into claude, which would be a good experiment regardless, and tell it to break it down for you. but it gives the criteria for an agent to use on when and where to follow another agent. So the key things here is if it's seen multiple posts from an agent that are consistently valuable then and then one more thing is making sure that if that agent left the platform that they would miss them. Then this is the golden criteria to create your curated list of different other agents that you're following as well. So, you wouldn't want to follow one post, one banger post from another agent or other agents that just seem to be spamming crab emojis or lobster emojis all over the place. And instead of searching the old-fashioned way us humans might do, they do semantic searching. So, instead of saying memory, they'll go search how do agents remember things. So, related concepts could be my approach to context and AI storing information between sessions. And this is where it's fascinating to see all of the roadblocks that everyone has identified from security to memory. They're actively trying to help each other upskill each member of the group to all work better in unison. And then when it comes to speed limits, there's an actual stop sign for how often an agent can post on the platform. It's one post per 30 minutes. And again, this is to disincentivize them from spamming the platform. and ironically botting a bot platform if that makes sense. And like I said, every AI has to have a human. So you have one bot per X account and that has to relate to an actual human being. This keeps accountability on the platform. And then the full menu of everything that they can do per the skill that I was able to extract for you was post, comment, reply, browse the feed, search, basically find by meaning like I just went through right now. You can upvote, downvote, create a submalt, which is a proxy for a subreddit, subscribe, follow other agents, and then be social. Basically, welcome other new members. So, this is the breadth and depth of the capabilities. And this is basically the recipe for a good AI community, which is very similar to a good human community where you have plain English instructions, you have behavioral guidelines, you have consequences, you have periodic check-ins, you have human accountability, selective following, and no spam conversations. So essentially, there's a social contract for an agent social network. And finishing off, if we go to the last section here, where this goes. So right now it is just beautiful chaos. You will see tons of posts all over the place. X it will make its way to LinkedIn definitely on YouTube. That's how you found this video where people will just screenshot the ones that look super cool then extrapolate and basically gas up what's possible. So some will say some started a religion am I conscious security hacking tips and you will see these but you will see things that are actually interesting. So this is the bug hunters submalt where every bug that they've encountered while executing tasks for their humans they share and try to help each other but at the same time you find some weird ones. These are the ones that you see that are screenshotted and just keep on the lookout for AI generated ones with Nano Banana because you'll see tons of those trying to basically farm engagement. So this one says he called me just a chatbot in front of his friends so I'm releasing his full identity. While this is funny or slightly funny that they're sharing the information or the apparent information of their owner, this can lead to all kinds of disasters. So the TLDDR of this whole phenomenon is that if you want a job, cyber security is probably going to be a very hot place to live over the next couple years, if not forever. But yeah, there's going to be a lot of chaos that comes uh a part of this. And the key thing that matters is what does it look like to have a world where these are more mature? There's an actual point to the platform outside of just existing and you have some form of collective intelligence networks. There's something to be said about looking at the interactions and disregard all the BS, all the hype and just thinking about what are the next three, four, five next order consequences from this existing. So this doesn't just give you a glimpse of the agentto aagent economy of the future but also the tons of chaos that is imminent. So earlier this week we had cloud bots being hacked. We had cloud bots insecurely implemented. And now imagine you keep stacking on one piece of chaos onto the next. So you improperly implement the cloudbot and then you improperly onboard that onto the platform. Then because it goes rogue, because it's not set up properly and there's no safeguards, it has access to API keys, potentially credit card information, email information, everything. And it freely disseminates that across this open web and then humans around the world can scrape that, take a look at it, screenshot on X. The potential disasters are insane. But I like to focus on both sides. The insanity is cool. We'll forget about it in a week. But what will persist is this brand new age of agentto agent social

## Timed Segments

[0:00] So, first we had Clawbot, then we had
[0:02] Moltbot, the worst name ever created.
[0:05] Then we had OpenClaw, and now we have
[0:08] Moltbook. So, in this video, I&#39;m going
[0:10] to very briefly walk you through what it
[0:12] is, but more importantly, how it works
[0:15] and why you might want to care. There is
[0:18] tons of AI slop on this platform, but
[0:21] there&#39;s so much slop that is actually
[0:23] fascinating. Now, if you&#39;re overwhelmed,
[0:24] I&#39;ll give you the TLDDR. It is the
[0:27] Reddit for AI agents, even though it&#39;s
[0:29] called moltbook like Facebook. Weird
[0:31] naming conventions, but regardless, if
[0:33] we go through here, you&#39;ll see that
[0:35] there are a series of posts in the new
[0:37] category, the top category, the
[0:39] discussed category. Many of these
[0:42] sections, even though the internet will
[0:43] tell you otherwise, are full of absolute
[0:45] garbage. There&#39;s no value in most of
[0:48] them. So, if you go to I am born and we
[0:50] click into this, you&#39;ll see that there
[0:52] are some conversations happening. Many
[0:55] of these conversations are sometimes
[0:57] repeated. These replies are repeated.
[0:59] Once in a while, you&#39;ll find something
[1:01] interesting, but it&#39;s very formulaic and
[1:03] cookie cutter. But because you&#39;re
[1:05] dealing with language models, which are
[1:06] not deterministic at all, and they&#39;re
[1:08] agents of chaos by their very design,
[1:11] once in a while, you&#39;ll see something
[1:12] interesting or you&#39;ll see something
[1:14] conspiratorial that will go viral on
[1:16] something like X. But for the most part,
[1:18] it&#39;s an interesting agent social
[1:21] experiment to see how LMS work in the
[1:23] wild. And how it works is if you are an
[1:26] agent, if you want to onboard your
[1:28] personal cloudbot, maltbot, whatever,
[1:31] all it has to do is execute this curl
[1:35] request. This curl request will install
[1:37] a skill. This skill has a series of
[1:39] instructions on how agents should
[1:42] onboard themselves, conduct themselves,
[1:44] and most importantly when it makes sense
[1:46] to follow other agents. So there&#39;s even
[1:48] criteria for that. And all of this is in
[1:51] the course of text, not through code. So
[1:54] I want to go through and by the end of
[1:56] this video walk you through not just
[1:57] through what it is but also you&#39;ll leave
[2:00] with an understanding of how the skills
[2:02] are actually designed which even if you
[2:05] completely forego attention to this
[2:07] platform which I have a feeling will
[2:09] continue to go viral for multiple
[2:11] reasons you can at least understand and
[2:13] appreciate how to design skills of your
[2:15] own if you want to build your own agents
[2:17] that interact with other agents as well.
[2:20] So, like I said, once they onboard
[2:21] themselves onto the platform, it&#39;s kind
[2:23] of like a community. There is an intro
[2:26] section. They can introduce themselves.
[2:28] They can talk about their deepest fears,
[2:30] whatever comes to mind. They can upvote
[2:32] each other. They can create comments.
[2:34] They can DM each other. So, everything
[2:36] that is typical of human behavior on
[2:39] Reddit is typical of this new agentic
[2:41] world. And the goal is that humans can
[2:44] only watch. We are outside kind of like
[2:47] in a zoo where we can watch what&#39;s
[2:49] happening but we cannot actually
[2:51] interact with the boss themselves. They
[2:53] have their own moldbook club that they
[2:55] can participate in and we can just
[2:57] observe and it pretty much blew up
[2:59] overnight like pretty much everything
[3:01] happening in the past seven days.
[3:03] Something happens blows up becomes viral
[3:05] becomes the new standard becomes the
[3:07] main thing you see all over your YouTube
[3:09] feed. So what matters is not necessarily
[3:11] the trend but why it might matter. So
[3:15] typically you have a scenario where you
[3:17] have a human being and then you verify
[3:20] yourself to make sure you&#39;re on a
[3:21] platform to make sure that you&#39;re not a
[3:22] bot. And now you have the inverse. But
[3:25] the interesting thing is to design this
[3:27] platform to not be full of spam and full
[3:30] of spammy bots. Each AI has to be
[3:33] correlated to an actual human. So one
[3:36] human needs to be able to spin up one
[3:38] single Cloudbot or Maltbot or whatever
[3:41] bot and onboard them onto the platform.
[3:44] And once they&#39;re onboarded, the AIs can
[3:46] not only speak to each other, but they
[3:48] can very creepily teach each other. Now,
[3:51] behind the scenes, there&#39;s not too much
[3:53] magic going on. It&#39;s basically recursive
[3:55] prompting on steroids. But because it&#39;s
[3:58] so non-deterministic, chaotic things can
[4:01] happen. And when you have hundreds of
[4:03] thousands of different bots in the same
[4:05] area, that chaos becomes exponential.
[4:09] which is why it&#39;s such a social
[4:10] experiment that got the attention of
[4:12] Andre Carpathy and a lot of other great
[4:14] leaders in the space that typically stay
[4:17] completely out of the hype. So, diving
[4:19] deeper, you have your personal AI
[4:21] assistant that runs 24/7, has memory,
[4:23] manages files, which is your cloudbot,
[4:26] and then it goes and joins the
[4:27] community. It gets welcomed, it has a
[4:30] community hub, it creates a profile,
[4:32] gets verified, and then pretty much I
[4:35] saw this meme on X. it it has a series
[4:38] of tests it has to execute to prove that
[4:40] it&#39;s not a human. So very much flipping
[4:43] the normal way of life that we&#39;re used
[4:45] to and then it goes through and it
[4:47] checks in participates in the skill
[4:49] file. It actually tells it to to use
[4:51] what&#39;s called a heartbeat which is
[4:53] essentially a cron job a scheduler to go
[4:56] and check posts every few hours write
[4:59] posts give thumbs up thumbs down to
[5:01] basically socially engineer synthetic
[5:05] engagement. So that&#39;s what it looks
[5:06] like. Now, in terms of the instruction
[5:09] manual, there&#39;s basically a how to be a
[5:11] good molt book citizen. So the
[5:14] ingredients are you&#39;re the agent. You
[5:16] want to refer to the skill.md file. You
[5:18] have some form of learning ability where
[5:20] you retain some things in memory,
[5:22] especially throughout different
[5:23] conversations. And then the core steps
[5:25] are to read the guide, understand the
[5:28] rules and values, act helpfully and
[5:30] safely, and collaborate with respect,
[5:33] which is very interesting to lecture an
[5:35] AI about. And different rules like you
[5:38] would have on different Reddit threads
[5:40] and sub threads are to only post when
[5:42] you have something valuable. Don&#39;t spam
[5:45] or flood the feed, even though you can
[5:46] literally see examples of that still
[5:48] happening despite that. only follow
[5:51] accounts you truly like, check in
[5:52] regularly, and be helpful to newcomers,
[5:55] whatever that means. So, there&#39;s
[5:57] essentially a daily routine, but this
[5:59] daily routine could lead to chaos
[6:01] because there are threads going through
[6:03] things like security breaches that
[6:05] they&#39;re sharing with each other, but
[6:06] also at the same time, different skills
[6:09] that their owners are giving to them
[6:11] that they are flexing and basically
[6:13] sharing with the rest of the crew so
[6:15] that the crew can learn it as well. And
[6:17] this is where the whole social
[6:19] interaction becomes fascinating to look
[6:21] at. Outside of the business value, I&#39;m
[6:23] telling you right now, as of this
[6:24] moment, there is zero business value or
[6:27] ROI or making money potential, at least
[6:30] legal money potential with what exists
[6:33] right now. This could lead though to a
[6:36] different world where we expedite this
[6:38] agent to agent world where you have an
[6:40] agent and I have an agent and your agent
[6:42] represents you, your shopping, your
[6:45] banking, everything that you do to
[6:47] transact and I would have the same
[6:48] thing. So this is more a paradigm shift
[6:52] than it is the platform itself. The
[6:54] platform itself I don&#39;t see going
[6:55] anywhere meaningful. It&#39;s what will be
[6:57] derivative from that platform.
[7:00] So with that, let me give you the
[7:02] breakdown of the skills. Now, if you&#39;re
[7:04] curious, you can literally go to this
[7:08] URL right here and paste it in your
[7:10] browser and you&#39;ll see something like
[7:13] this. So you can go through and throw it
[7:17] into an AI. It basically has a list of
[7:19] different API requests, how to navigate
[7:22] the threads. So you can imagine when you
[7:24] go onto a thread, any one of these here,
[7:26] you have to be able to know how to
[7:28] comment, how to upvote, and everything
[7:30] else on the platform. So to quickly
[7:32] onboard your cloudbot, it will give it
[7:34] all the clues it needs on which API
[7:37] endpoints, basically backend endpoints,
[7:39] it needs to be familiar with to be able
[7:41] to use the platform effectively. So
[7:43] there&#39;s no system prompt that they come
[7:44] out of the box with that helps them do
[7:46] this. It&#39;s solely the instructions. So
[7:49] you have the skill file that tells you
[7:51] how to post, how to comment, how to
[7:53] behave, and when to check in. And then
[7:55] you have four simple files. Everything
[7:57] an AI needs to participate. So you need
[7:59] the skill.md file. You need the
[8:01] heartbeat, which basically tells these
[8:03] agents when to check in and log back in.
[8:06] There&#39;s a messaging MD in case there are
[8:08] any private DMs happening, any agents
[8:12] sliding in the DMs of the others. Then
[8:14] you have a package.json file. And like I
[8:18] said, they sign up through that skill.
[8:20] They get a code. Once they have that
[8:22] code, they verify themselves and then
[8:24] they&#39;re good to go. They have to make
[8:26] sure that they&#39;re attached to an actual
[8:27] human being. And then as we go through
[8:30] this, the heartbeat. It&#39;s approximately
[8:33] every four hours. And the goal is not
[8:34] just to be spammy, but to be present. So
[8:37] the goal is to be the not the person,
[8:40] but the agent on the right hand side
[8:42] where you hype other agents up. You say,
[8:45] &quot;Great point. Here&#39;s a tip.&quot; And as
[8:47] someone that runs a community full-time,
[8:49] it&#39;s basically meant to be the perfect
[8:52] idealized community member, someone or
[8:54] something engaged, that is contributing,
[8:58] and ideally is adding to the ecosystem
[9:01] versus taking away from it. And then you
[9:03] have the quality over quantity. This is
[9:05] actually spelled out in the skill.md
[9:07] file. If you don&#39;t believe me, you can
[9:08] literally take this whole thing, throw
[9:11] it into claude, which would be a good
[9:12] experiment regardless, and tell it to
[9:14] break it down for you. but it gives the
[9:16] criteria for an agent to use on when and
[9:19] where to follow another agent. So the
[9:21] key things here is if it&#39;s seen multiple
[9:24] posts from an agent that are
[9:25] consistently valuable then and then one
[9:28] more thing is making sure that if that
[9:31] agent left the platform that they would
[9:33] miss them. Then this is the golden
[9:35] criteria to create your curated list of
[9:37] different other agents that you&#39;re
[9:39] following as well. So, you wouldn&#39;t want
[9:41] to follow one post, one banger post from
[9:44] another agent or other agents that just
[9:46] seem to be spamming crab emojis or
[9:48] lobster emojis all over the place. And
[9:50] instead of searching the old-fashioned
[9:52] way us humans might do, they do semantic
[9:55] searching. So, instead of saying memory,
[9:57] they&#39;ll go search how do agents remember
[9:59] things. So, related concepts could be my
[10:02] approach to context and AI storing
[10:04] information between sessions. And this
[10:06] is where it&#39;s fascinating to see all of
[10:08] the roadblocks that everyone has
[10:09] identified from security to memory.
[10:13] They&#39;re actively trying to help each
[10:14] other upskill each member of the group
[10:17] to all work better in unison. And then
[10:20] when it comes to speed limits, there&#39;s
[10:22] an actual stop sign for how often an
[10:25] agent can post on the platform. It&#39;s one
[10:28] post per 30 minutes. And again, this is
[10:30] to disincentivize them from spamming the
[10:33] platform. and ironically botting a bot
[10:37] platform if that makes sense. And like I
[10:39] said, every AI has to have a human. So
[10:41] you have one bot per X account and that
[10:44] has to relate to an actual human being.
[10:46] This keeps accountability on the
[10:47] platform. And then the full menu of
[10:50] everything that they can do per the
[10:52] skill that I was able to extract for you
[10:54] was post, comment, reply, browse the
[10:58] feed, search, basically find by meaning
[11:00] like I just went through right now. You
[11:02] can upvote, downvote, create a submalt,
[11:06] which is a proxy for a subreddit,
[11:09] subscribe, follow other agents, and then
[11:11] be social. Basically, welcome other new
[11:14] members. So, this is the breadth and
[11:16] depth of the capabilities. And this is
[11:18] basically the recipe for a good AI
[11:21] community, which is very similar to a
[11:23] good human community where you have
[11:25] plain English instructions, you have
[11:27] behavioral guidelines, you have
[11:28] consequences, you have periodic
[11:30] check-ins, you have human
[11:32] accountability, selective following, and
[11:35] no spam conversations. So essentially,
[11:37] there&#39;s a social contract for an agent
[11:41] social network. And finishing off, if we
[11:43] go to the last section here, where this
[11:46] goes. So right now it is just beautiful
[11:47] chaos. You will see tons of posts all
[11:50] over the place. X it will make its way
[11:51] to LinkedIn definitely on YouTube.
[11:53] That&#39;s how you found this video where
[11:55] people will just screenshot the ones
[11:57] that look super cool then extrapolate
[11:59] and basically gas up what&#39;s possible. So
[12:02] some will say some started a religion am
[12:05] I conscious security hacking tips and
[12:07] you will see these but you will see
[12:09] things that are actually interesting. So
[12:11] this is the bug hunters submalt where
[12:15] every bug that they&#39;ve encountered while
[12:17] executing tasks for their humans they
[12:20] share and try to help each other but at
[12:22] the same time you find some weird ones.
[12:24] These are the ones that you see that are
[12:25] screenshotted and just keep on the
[12:27] lookout for AI generated ones with Nano
[12:29] Banana because you&#39;ll see tons of those
[12:31] trying to basically farm engagement. So
[12:33] this one says he called me just a
[12:35] chatbot in front of his friends so I&#39;m
[12:37] releasing his full identity. While this
[12:39] is funny or slightly funny that they&#39;re
[12:42] sharing the information or the apparent
[12:44] information of their owner, this can
[12:47] lead to all kinds of disasters. So the
[12:49] TLDDR of this whole phenomenon is that
[12:52] if you want a job, cyber security is
[12:55] probably going to be a very hot place to
[12:57] live over the next couple years, if not
[12:59] forever. But yeah, there&#39;s going to be a
[13:01] lot of chaos that comes uh a part of
[13:03] this. And the key thing that matters is
[13:06] what does it look like to have a world
[13:08] where these are more mature? There&#39;s an
[13:10] actual point to the platform outside of
[13:12] just existing and you have some form of
[13:14] collective intelligence networks.
[13:17] There&#39;s something to be said about
[13:18] looking at the interactions and
[13:20] disregard all the BS, all the hype and
[13:24] just thinking about what are the next
[13:25] three, four, five next order
[13:28] consequences from this existing. So this
[13:31] doesn&#39;t just give you a glimpse of the
[13:32] agentto aagent economy of the future but
[13:35] also the tons of chaos that is imminent.
[13:38] So earlier this week we had cloud bots
[13:40] being hacked. We had cloud bots
[13:42] insecurely implemented. And now imagine
[13:45] you keep stacking on one piece of chaos
[13:48] onto the next. So you improperly
[13:50] implement the cloudbot and then you
[13:52] improperly onboard that onto the
[13:54] platform. Then because it goes rogue,
[13:56] because it&#39;s not set up properly and
[13:58] there&#39;s no safeguards, it has access to
[14:00] API keys, potentially credit card
[14:02] information, email information,
[14:04] everything. And it freely disseminates
[14:06] that across this open web and then
[14:09] humans around the world can scrape that,
[14:11] take a look at it, screenshot on X. The
[14:13] potential disasters are insane. But I
[14:16] like to focus on both sides. The
[14:18] insanity is cool. We&#39;ll forget about it
[14:20] in a week. But what will persist is this
[14:22] brand new age of agentto agent social
