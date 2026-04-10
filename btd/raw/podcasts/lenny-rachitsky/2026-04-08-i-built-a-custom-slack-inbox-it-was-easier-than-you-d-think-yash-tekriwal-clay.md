---
title: "I built a custom Slack inbox. It was easier than you’d think. | Yash Tekriwal (Clay)"
creator: "lenny-rachitsky"
platform: podcast
date: "2026-04-08"
feed_url: "https://www.lennysnewsletter.com/feed"
episode_number: 20
segments: 486
---

# I built a custom Slack inbox. It was easier than you’d think. | Yash Tekriwal (Clay)

I truly wake up to maybe 100 to 150 new Slack notifications, not even just like,

**[0:05]** "Oh, these are unread channels." Truly, someone has tagged me. 60 to 80 percent are more in the

**[0:10]** FYI category. So my 100 to 150 that's giving me anxiety is actually more like 30 to 40 that I

**[0:17]** really need to be on top of. You can use AI to do a task for you like categorize things,

**[0:23]** summarize things, or you can use AI just to build a tool that would have been much harder to build

**[0:27]** before with very straightforward APIs and structured data. Exactly, think about like a can band

**[0:32]** style board. You have in red on the left, action required, urgent, you actually need to get back

**[0:37]** to it. In the middle we've got a yellow, you need to read column, and then on the right in green,

**[0:41]** much more easy, I have a bunch of FYIs. I can just go ahead and click this archive all button,

**[0:46]** they'll disappear from the dash, and then those notifications will also disappear on my Slack.

**[0:50]** Ugh, that's magic. And this is such a better way to just get through your queue.

**[0:54]** My dream is for someone else to watch this video and say I want to build that app on top of Slack,

**[0:59]** and then I can go pay that person $15 a month for this app to be maintained and used,

**[1:03]** and then I can file bug reports with them instead of having to fix it myself, because I would happily

**[1:07]** pay that. Welcome back to How AI AI. I'm Claire Vo, product leader and AI obsessive here on a

**[1:16]** mission to help you build better with these new tools. Today we have Yash Tucker all head of

**[1:21]** education at clay, and he is a hyper optimizer showing us how he uses perplexity computer

**[1:27]** to work through the hundreds of Slack messages he gets every day. We're also going to debate

**[1:33]** is SaaS really dead. Let's get to it. This episode is brought to you by Guru, the AI layer of truth

**[1:40]** for your company's knowledge. Here's the problem. Your AI is only as good as the information you

**[1:46]** feed it. Most companies are getting confident but wrong answers from AI because their underlying

**[1:52]** knowledge is outdated, incomplete, or just plain incorrect. Bad information doesn't just slow you

**[1:59]** down. It costs you money and puts you at risk. Guru solves this by adding a verification layer

**[2:05]** between your company's knowledge and AI tools. Instead of just hoping your AI gets it right,

**[2:11]** Guru automatically scores content for accuracy, flags, outdated information, and ensures your

**[2:18]** team gets trustworthy answers every time. It works with the tools you already use,

**[2:23]** so you don't have to change how you work. Thousands of companies trust Guru to keep their AI accurate

**[2:29]** and compliant. Ready to stop playing Russian roulette with your company's knowledge?

**[2:34]** Visit getguru.com to learn more. Welcome to how AI Yash. I'm so excited. We've been trying to make

**[2:42]** this happen for months and we've been trying to make it happen over Slack for months. What I love

**[2:49]** about that is what we're going to start this episode off with is how you get yourself unburied

**[2:56]** from the deluge of Slack messages and emails and work you have to do on a daily basis.

**[3:05]** Yeah, so I wish I could say I had built this back when we were organizing it, but maybe that gives

**[3:09]** you a little bit more leeway for understanding me losing Slack threads all the time. For context,

**[3:14]** you can see my Slack screen right here. Right now I cleared this truly two hours ago and I already

**[3:20]** have another 40 plus messages of which you can see like eight or more are DMs. And it's just

**[3:26]** going to keep going up. Right now, I truly wake up to maybe 100 to 150 new Slack notifications,

**[3:34]** not even just like, oh, these are unread channels. Truly, someone has tagged me. It's a DM. They've

**[3:39]** tagged me. It's a group DM or something else, which all feel very important, but not all

**[3:46]** notifications are created equal in Slack. For example, I care much more about getting back

**[3:51]** to you on scheduling our podcast recording than I do about my colleagues really fun comment on

**[3:56]** their dog that they posted a photo of in the fun dog channel, but I get an equal notification for

**[4:01]** both. And so what I sort of started doing with perplexity computer when it came out about a month

**[4:06]** ago is thinking if I could truly just design any software or like paradigm myself, what would I do,

**[4:13]** how and why? And so perplexity computer is actually not exactly how we initially solved the Slack

**[4:18]** problem. We'll come back to that in just a second. But I think the framework is also what matters

**[4:23]** most is I needed to be able to envision what does a better world look like instead of just asking

**[4:29]** Claude or perplexity or open claw make my slack easier. And so that better world that I thought

**[4:34]** of is if not all notifications are created equal, then what if I could better categorize my notifications

**[4:41]** by DMs versus group DMs versus threads versus group at mentions? Because I treat all those

**[4:48]** differently. I try to clear my DMs ASAP because I tell everyone if I'm not responding within

**[4:54]** 24 hours DM me. So that urgency needs to be there. But then on top of that, of course,

**[4:59]** people are DMing me about random things like who wants to go dancing this weekend, who wants to go

**[5:03]** to dinner for a hotpot this week, and all sorts of other fun things. So even within each of those

**[5:08]** four categories, right, the DMs, the groups, the threads, the app mentions, I also want to sub

**[5:13]** categorize by what requires real action for me. What do I need to read? But maybe doesn't need a

**[5:18]** response from me. And what are more of the like FYI for your information notifications? And as you

**[5:24]** might guess, a little precursor that I'll give you is like 60 to 80% of my notifications every day

**[5:30]** are more in the FYI category. So my 100 to 150 that's giving me anxiety is actually more like

**[5:37]** 30 to 40 than I really need to be on top of. And that makes things a lot easier. But I need to

**[5:43]** build a system to get there. So if I could repeat your problem back to you, you're very important

**[5:49]** at work and also super fun and popular. And this is just causing you tons of ad mentions. And you're

**[5:56]** going to show us how you use perplexity computer. Although I think you started with something else

**[6:02]** to kind of solve this problem and prototype your way out of it. Exactly. I think the other like

**[6:08]** general framework I'll give here is that I do think something that I coach a lot of people on

**[6:12]** my team about as well is when to use AI purely like an MCP even versus when to use AI to build

**[6:20]** something deterministic like code or an API call. And so for example, here in Slack, there's enough

**[6:27]** API and points available that we could get into that I know I should be able to build the information

**[6:33]** organization organization system just using code. And so actually I did that via my little we can

**[6:41]** do a detour here Jarvis my open clock. Let's see if I can even find my here we go thread. It's a

**[6:49]** very long thread that we can come into all the way up on Slack. I'm not going to go through and

**[6:56]** do all of this, but you can sort of see in here a quick glance. It's building the digest for me,

**[7:03]** right? So it's looking at, okay, what is the timestamp? What do I want to mark? For example,

**[7:07]** Slack has a whole info chart that we could find online and then put in this if we wanted to on

**[7:11]** how they've built their notification system. It's very intentional, whether or not it's unread or

**[7:17]** gives you a number or how many numbers it gives you is all dependent on the stream in which it

**[7:21]** comes in. And so for me to actually pull not every single new message in my slack because that would

**[7:27]** be overwhelming, but to only pull the ones that I care about with only the context that I care

**[7:32]** about requires a little bit of just systems thinking, I need to look at what was the last time I

**[7:38]** looked at the message. Did I look at only the most recent message or have I looked at another

**[7:43]** message in the thread before? Because then I don't need to see the whole thing. I just need to see

**[7:47]** only the most recent messages. So all of this data is tracked in Slack via these timestamps.

**[7:53]** And you can see me going back and forth with Jarvis here for a long, long time on what is unread,

**[7:59]** what is not, how do I look at these channels. And so this back and forth, which truly goes on for

**[8:04]** like thousands of messages, so we won't do all of it, took me like a full day to really prototype

**[8:10]** and build and understand to get to a point where to be fair, now those 100 plus notifications

**[8:16]** come in to this Jarvis Digest channel in Slack. It does group it into direct

**[8:23]** @mentions. You've got those three sub buckets, then we've got dms, then we've got group mentions,

**[8:29]** and then we've got threads. So this is the four overall buckets. And then within each of those

**[8:35]** buckets, I could now, and this is what I did for a week, just command click into each of these,

**[8:41]** open up a new thread, decide what I need to respond, come in, respond, and then go back.

**[8:46]** Just to kind of narrate for people that are maybe not watching the YouTube, what we're seeing here,

**[8:52]** you basically said, look, I get this all-purpose inbox from Slack with notifications and unread.

**[8:58]** I get hundreds of them, of which maybe two dozen are actually interesting to me.

**[9:02]** I have a pretty clear sense of how I want those organized and prioritized at my own workflow.

**[9:09]** I'm going to spin up Open Claw as a coding agent in Discord. I think I spotted,

**[9:14]** spotted Discord. And why Discord real quick?

**[9:17]** So my one reasoning for Discord, I started on Telegram with Open Claw, like I think many people

**[9:21]** do, but I really like the threading nature of Discord for organizing all of my chats. For example,

**[9:28]** in Discord, my favorite command, similar to Slack, is command K. And then I can quick find,

**[9:32]** quick search, any thread that I want. I can pick up the context where I need to, and I can open and

**[9:36]** close those threads to keep it really clean in terms of what I want to stay active and what I

**[9:41]** want to stay inactive. Great. So you used Open Claw in Discord to basically say, hey, I know we

**[9:48]** can reverse engineer how Slack determines what unread messages are and how they categorize them,

**[9:55]** which would be incredibly painful as a human because I'd have to go knee-deep in the docks,

**[10:00]** read a bunch of stuff, memorize all these codes, super annoying. You go figure that out, we're

**[10:05]** going to do back and forth, and then we're going to build this automated Slack digest feed that

**[10:11]** pushes every day a very targeted list of unreads grouped by, again, things that are coming directly

**[10:19]** to me, things that are coming to a group, things that are in channels I care about for work, things

**[10:23]** that are in channels I don't care about for work purposes. And then even within that, they are

**[10:30]** prioritized, and then they're deep-linked. So you can actually go into that deep-pleak, take action,

**[10:36]** pop out, and work through your inbox almost like a prioritized email inbox or a task list.

**[10:43]** Exactly. The only thing I would add to your great narration is that it's important to also

**[10:49]** note that pretty much all of what you just described while built with AI, the only place in which AI

**[10:55]** is repeatedly used in the system that was constructed is in the categorization of messages that need

**[11:00]** action from me, need to be read in our FYIs. Everything else is custom code built using an AI

**[11:08]** assistant, but it's truly still deterministic in the categorization that gets put out into the

**[11:13]** digest. And that just goes to your earlier point of like you can use AI in these two ways. You can

**[11:18]** use AI to do a task for you like categorize things or summarize things and or you can use AI just to

**[11:26]** build a tool that would have been much harder to build before with very straightforward APIs

**[11:31]** and structured data. Exactly. Okay. And then, you know, this is this is great. It's still, you know,

**[11:38]** to my to my naive eye, it's still pretty overwhelming, right? It's like a really long list of things.

**[11:46]** And so what was the next step you took here in terms of making this even more usable for you in

**[11:50]** your day to day? Yeah. So for context, right, for anyone that's not watching the YouTube as well,

**[11:54]** this message is helpful, but I have to scroll at least four to five screens down just to be able

**[12:00]** to even see all of the notifications that are already summarized for me. So you can also imagine

**[12:06]** just how much worse my actual slack is. I used this for like a week and it was more effective,

**[12:12]** but it was also just a draining. And so then my wish became what if I just had an actual software

**[12:17]** that I could build on top of this that looked clean felt like superhuman for email, had navigability,

**[12:23]** and let me sort of categorize this long digest of just text and emojis into a real interface.

**[12:31]** So that is where we come into perplexity computer. And so I will pull up

**[12:37]** perplexity computer here. And you can actually see right here, this is the digest and I ended up

**[12:43]** building what we'll first do is even show you the thread in which I built this digest. So this one

**[12:51]** also had a fair bit of back and forth, but 80% of what you just saw, which I'll describe for people

**[12:57]** not watching in a second, was built in like the first four messages. And I do think this is actually

**[13:02]** worth digging into some of the guts, right? I'm asking you to analyze the message structure in the

**[13:07]** digest channel because via connectors and the browser it has access to everything that I'm looking

**[13:12]** at. And then what I think is so good about perplexity computer that is unique to perplexity and not

**[13:18]** Claude or OpenAI because they are frontier model companies is that they are shameless about using

**[13:25]** all of the different AI models to build each part of the task in subsequent order. So you can see

**[13:31]** here for fetching the digest, it was using sonnet 4.6. Then you can even see down here, I believe it

**[13:37]** starts running different tasks in parallel. And you can see that it's using Gemini, I believe for

**[13:42]** planning at some point, you can see that's using Gemini for coding Python. You can see it's reading

**[13:47]** different skills that it's building. It then uses Opus for the actual build because that's more

**[13:53]** intense. And it wants a little bit of a better layer of reasoning. And I could just keep going

**[13:57]** down and down. But all of this work happens from just my first message. So there's a additional layer

**[14:04]** of troubleshooting and intelligence and sort of testing for am I building the right thing that

**[14:10]** removes the need for me as a human in the loop to constantly go back and say, you tried, good job,

**[14:16]** but also it doesn't work. Like it literally doesn't even do what I asked you to do. Try again,

**[14:21]** that frustrating, I have to re prompt you loop over and over again is much, much better with

**[14:25]** computer because of how they've built this ensemble orchestration. So let's take a minute to talk

**[14:31]** about perplexity computer, because we haven't actually seen anybody demonstrate this tool on the

**[14:37]** podcast. And so why, you know, above dropping this in quad code or codecs, which as you called out

**[14:44]** has its limitations in terms of being single provider in terms of model, you know, you showed

**[14:50]** you used open claw as well to do a similar task. What has drawn you to perplexity computer? And what

**[14:56]** do you think is unique about the setup? Yeah, it's a good question. Right. So I think there's

**[15:00]** probably three things that really draw me to perplexity computer, ranging from like simple to a little

**[15:04]** bit more involved. The silliest but simplest one is running things in parallel, right? In

**[15:10]** cloud code and codecs, I'm still having essentially a chat based back and forth conversation. And so

**[15:16]** I'm doing one thing at a time. But often I maybe want to kick off a task. I could do this in separate

**[15:21]** terminal windows if I really wanted to for cloud code. But it's annoying. I can actually just

**[15:26]** kick off, you can even see here in the screen, right? I kicked off like four different tasks

**[15:30]** in the span of 10 minutes of each other this morning, and then have them all running at the

**[15:34]** same time. So that's one thing that I think is very simple, but concurrent runs and long running

**[15:39]** tasks are really nice in perplexity computer. Number two is that cloud, co-work and codecs

**[15:46]** sort of have these connectors so they can access to different apps, but they're primarily built

**[15:51]** for co-generation. They're built for app making. I would actually say perplexity computer while

**[15:56]** used often to build these UIs and tasks. Like those are the fancy things you might see if

**[16:01]** you go to use cases here. Like a lot of people are building app because everyone thinks in apps.

**[16:06]** It's actually far greater than that sort of in the same way that people discovered

**[16:09]** cloud code can do so much more than just coding. It's a really good local agent.

**[16:14]** But the reason I like the perplexity computer element is actually because it's in the cloud,

**[16:19]** because it's in the cloud, it is much more natively connected to all these different tools. I don't

**[16:23]** have to go give it in the way that I give open cloud, right? Like access to different skills

**[16:27]** to be able to go do things in software. It can just go do it and ask me for logins on my own.

**[16:33]** And that native connection to all those tools helps me be able to do things much more fluidly

**[16:39]** at the speed of thought because everything is being recorded everywhere. So like a really easy

**[16:43]** example that I actually deleted because it was an accident, but I can just talk through real quick

**[16:47]** is I also use Notion AI to record all of my meeting notes. Perplexity computer is connected to Notion

**[16:54]** AI. And so what I am always doing in all of my meetings is saying, hey, here's a bunch of

**[17:00]** follow up things that we should probably do. Let's make sure we get them all done. I try

**[17:04]** and put all of those most important ones in my task management. But because that transcription

**[17:08]** exists, it's in Notion and computer has access to Notion. I can then also go into computer and say,

**[17:15]** look through all of my meeting transcripts from the end of the day to day, gather the list of

**[17:19]** action items, categorize the ones that you think are important, throw them into my Asana if they're

**[17:23]** longer term action items, and actually for anything that's just a message or a notification or an

**[17:28]** email, draft me the response. Can you show us what connectors you you're using regularly,

**[17:33]** just so people can have a sense of what you're talking about? Oh, you're using like all of them.

**[17:37]** So many, I mean, not even close to all of them, right? But for everyone listening,

**[17:42]** I've got the bare basics, Google Drive, Gmail with calendar, Notion, Asana, Slack, forms,

**[17:49]** tasks, type form, zoom, Spotify, which I haven't really used, but I thought it would be fun,

**[17:54]** you know, air table, Google slides. And then there are tons of other ones I'm not using,

**[17:59]** like linear super base. I've looked at trying to use maybe like Snowflake more data dog more,

**[18:06]** but I'm focusing really just on what am I actually getting value out of today?

**[18:10]** Instead of chasing, I have what I would call shiny object syndrome. So one day, I'll maybe get back

**[18:16]** to all the shiny objects. But for now, this is what provides the lion's share of the value back to me.

**[18:22]** Great. And then just to kind of like loop the thread back to what we were originally talking

**[18:25]** about. So you show us perplexity computer, you really like it, multi model, multi threaded,

**[18:31]** concurrency, nice to use, lots of connectors. And then you flash to the beginning, but let's

**[18:37]** just show what you build for that, that Slack management tool. Because I think it's really cool.

**[18:41]** Yeah. So I'll do my best to visually describe those not watching.

**[18:45]** You can imagine a dashboard UI. It looks sort of like any task management tool you've had before.

**[18:50]** Think about like a can band style board, but instead of multiple cards for all the sections

**[18:55]** of tasks that you've got, you've just got three main ones. You have in red on the left,

**[19:00]** option required, urgent, you actually need to get back to it. In the middle, we've got a yellow,

**[19:05]** need to read column. I should make sure that I'm understanding what's going on here,

**[19:09]** but I probably don't need to respond. And then on the right in green, much more easy,

**[19:13]** I have a bunch of FYIs. Hey, here's what dinner is. Here's where the address is. Here's what

**[19:18]** someone is doing for the launch that we just planned. And so then there's a bunch of other

**[19:22]** smaller dials that I've customized on here. So I can group this like we were talking about earlier

**[19:26]** by order of operations. Do I want to go through my DMS first? Do I want to go through my group

**[19:31]** mentions first? I have a sidebar on the left that I can categorize those by. And then the best

**[19:37]** thing about this dashboard for me is that I use this all the time, the FYI notifications on the

**[19:43]** right. I can just go ahead and click this archive all button. They'll disappear from the dash. And

**[19:48]** then those notifications will also disappear on my slack. That's magic. Because I know you can

**[19:54]** in slack, I think you can do like mark all as red, but you can't be like mark my DMS as red or mark

**[20:00]** FYI as red or like multi select. And so you're sitting there with either like 100 unread messages

**[20:07]** or zero. There's nowhere in between. And this is such a better way to just get through get

**[20:15]** through your queue. And one thing I have to say was like there's this incessant debate of like

**[20:20]** is SAS dead is like SAS apocalypse happening. Like it's who's going to build the new slack that's

**[20:26]** better is slack the new slack. And what I love about this moment is like slack is still great.

**[20:32]** Like it's it's so good. It's great for sending messages. I don't know if it's great for reading

**[20:36]** message. That is great for sending message. And you can with the very low effort say my company is

**[20:44]** using slack. We're happy with it generally nine out of 10. And to get into 10 out of 10,

**[20:50]** I'm just going to build the thing that works with my brain. And it doesn't even have to be about a

**[20:54]** deficiency of the existing software. It just has to be, you know, closing the gap between your ideal

**[21:00]** workflow as an individual and what you get out of SAS. And it's I just think it's such an interesting

**[21:08]** model. As we think about like, what are these? What are these productivity tools going to become?

**[21:14]** What are these collaboration tools going to become? Is there like, you know, slack core

**[21:20]** and then slack custom, right? And you just build on top of it.

**[21:25]** I yeah, I so agree. I would actually say maybe my very hot take here. I think we will see an

**[21:31]** explosion in software being created and used because of all these tools. I don't think the average

**[21:36]** person or even the proficient person is going to start custom by building and coding all these

**[21:41]** tools. I don't think the intelligence of AI, at least the way we're seeing it ramp currently,

**[21:45]** is getting to a point where my mom could go in and say makes slack easy and then it builds this.

**[21:51]** I think instead what will happen is you sort of like you were saying optimize these tools and

**[21:56]** I'll be so honest. If someone else, my dream is for someone else to like watch this video,

**[22:01]** look at this and say I want to build that app on top of slack and then I can go pay that person

**[22:06]** $15 a month for this app to be maintained and used. And then I can file bug reports with them

**[22:11]** instead of having to fix it myself because I would happily pay that.

**[22:14]** I agree. And it's I what I think is so fun is I'm like a B2B girl. I've done product for a long

**[22:20]** time. There has always been this long tail queue of like customer requests being like,

**[22:26]** I would really just love it if that button in the bottom left of this page to this very niche thing

**[22:32]** from my specific vertical like that would be great wins it on the roadmap. And the answer is a

**[22:38]** reasonable SaaS PM is like never. And now you can kind of like replace this concept with okay,

**[22:45]** point of four deployed engineer at that and say like we're never going to build that for you.

**[22:48]** That's a you you problem, babe. But let me show you how you can get that on your own. And then again,

**[22:56]** yes, I agree with you. I think kind of like two things are going to happen. One, just so many

**[23:02]** more creative opportunities for software to be built. Just as you said, like somebody maybe will

**[23:06]** watch this and be like, yes, I'm going to build like slice slack digest as a product. The second

**[23:12]** thing is like there's probably like tam of this big for that product. And because the cost of building

**[23:19]** it's so low, who cares? Like somebody could go turn it into a 10k a month like project or a 20k

**[23:25]** month project doesn't have to be venture scale doesn't have to like hit a billion dollars doesn't

**[23:30]** have to have a million users and still like be useful. And I feel like there's so much useful

**[23:36]** software that we could have because it's been so expensive to build and not worth people's time.

**[23:43]** And I'm just I'm with you like let let's go do more. Agreed. Yeah. And then, you know,

**[23:49]** then slack can do the thing where they just go like this and like scoop them up. Exactly.

**[23:52]** Stock can then acquire all those people. I think you'll see a Cambrian explosion of like businesses

**[23:56]** that wouldn't have existed without venture funding or that people wouldn't have wanted to build that

**[24:00]** can make their own money or get acquired by larger companies. Yeah. Yeah. That's I mean,

**[24:05]** that's basically what what I'm doing right now. So it's like, yeah, that's true. I'm living it.

**[24:09]** I love this. This is genius. People take this idea, think about the most. All right. I often

**[24:16]** tell people to build their anti to do list and then spend an hour a day burning down that list,

**[24:22]** which is like I never ever ever want to go through my slack on roads again in an unpurretized way.

**[24:28]** That's going to be on my anti to do list. So I'm going to spend an hour a day trying to figure

**[24:32]** out how to like dig myself out of that problem. Another one like I have is I never ever ever

**[24:37]** want to delete spam out of my email by hand. Like I so often have to go through and like click

**[24:44]** the checkboxes and delete. So I never so like, how do I solve that problem? I never ever ever want

**[24:50]** to like manually, you know, hand to Asana enter my action items after a meeting. And so this idea of

**[24:57]** an anti to do list, which I can share, I have a like a list of like a hundred ideas that could go on

**[25:02]** an anti to do list. And spending time with AI to automate those is such a worthy use of time.

**[25:08]** Totally agree. And I think computers maybe another step in the journey of people just being able to

**[25:13]** do more with less. Yeah, it's just it's all getting better. This episode is brought to you by Thought

**[25:18]** Spot. Product leaders know the struggle. Your users want data insights, but they don't want to

**[25:24]** leave your app to find them. Thought Spot embedded solves this by putting analytics directly into

**[25:30]** your product. Your users can search in plain English and explore data instantly, right where they work.

**[25:37]** No separate tools and zero context switching. What sets thought spot apart is that it's not just

**[25:43]** another bolt on dashboard. It's a search driven AI powered experience that feels native to your app.

**[25:50]** Developers can embed it with just a few lines of code and then fully customize the look and feel.

**[25:56]** The result? More engaged users faster decisions and a product that delivers more value every time

**[26:02]** someone logs in. If analytics is becoming core to your product strategy, visit go dot thought spot

**[26:10]** dot com slash how I AI for more information and try the free trial at go dot dot spot dot com slash

**[26:18]** how I AI slash trial. Okay, so you are a pro user. Any other use cases for computer that you think

**[26:27]** are useful? Any other like beautiful UIs you've built that you wouldn't have been able to do before?

**[26:31]** Yeah, so I'll actually show one other one that I've built. And then I'll show one that like someone

**[26:36]** on my team has built as well because I think I'm trying to get everyone to be thinking about

**[26:39]** and using these tools. And they're both sort of different use cases. So I think mine unsurprisingly

**[26:44]** falls in the same thematic form of Yash has too much information and Yash wants to consolidate

**[26:50]** the information and be really helpful as quickly as possible. So what I can show you here is

**[26:56]** similar to the slack digest. I first just wanted to make sure, okay, am I actually getting the right

**[27:01]** things into this digest before I spend more time trying to make it pretty? And so I have a bunch

**[27:06]** of slacks and emails. I realize I stopped reading the news because I've been so deep in slack and

**[27:11]** email. So I want some news in there. And I could actually and probably will add a couple of other

**[27:16]** communication streams to this long term. But I just wanted to get those three in there.

**[27:20]** And so I got a couple of days of the text working in here. And then I was like, okay,

**[27:25]** the text similar to slack also boring. Why not code up a UI? I will say computer seems to default to

**[27:31]** can man style pretty you eyes. We've got another three can man cards here. It goes in order of

**[27:36]** a news email and slack in terms of what needs my actions. Obviously a little bit of event diagram

**[27:42]** overlap with my slack digest bot. But if I want to consolidate to just like truly mission critical,

**[27:48]** this is also really good. And in terms of talking people through what the iterative process here

**[27:53]** looks like, I can tell you right step one was getting the text in here and then saying, oh,

**[27:58]** that's actually not an important message. Can you tell me why you categorized it that way?

**[28:02]** And then explaining to computer how to rebuild the background skill it's using to make all this

**[28:07]** categorization. Step two was then getting the UI in here. And then step three is actual usability.

**[28:14]** So when I had the UI in the first place, it didn't think to default link me out to all of the messages

**[28:20]** so that I could go back and look at them. So I asked you and now on the slack notification,

**[28:24]** I can link back out to it. I have to go back and add it for email and then add it for news. But that

**[28:29]** way it becomes a real command center of all the things that I want to go see. I'm going to give you

**[28:34]** one other fun tip, which is I saw somebody on X posted that they had their Claude build a like

**[28:40]** newspaper style digest of all the things that like that Claude code had done.

**[28:46]** So maybe you could put this in like a fun newspaper style where you like wake up every morning and

**[28:51]** you read or like a magazine, something really wake up. Yeah, extra extra. Here's how the day is

**[28:58]** going. Exactly. I like that idea a lot. Image gen. Yeah. Yeah. Yeah. Okay. So I really, I really

**[29:06]** like this. And again, you know, we've seen so many of these like daily briefing use cases and we've

**[29:10]** seen everything from like, I get, you know, markdown, very cold structured markdown in the terminal

**[29:17]** from Claude code that I like store in Obsidian because I'm like an esoteric, you know, dark

**[29:22]** mode thinker to, you know, I just use like chat GPT pulse and every morning it sends me something

**[29:28]** cute. Nice. Which is like, I've built myself an app that again, matches my mental model

**[29:35]** of how how I want to use this and is optimized for for me. And I can actually use as not just

**[29:44]** information, but as an interactive kind of command center for my work.

**[29:48]** Exactly. And I think the thing that you just reminded me of, like two other thoughts I'll

**[29:52]** mention here. Number one is the other benefit of computer for the non technically initiated

**[29:58]** is that even if I were to go code this up in cloud code or codecs, I would love to go like,

**[30:03]** put the GitHub repo up, I still have to deploy it to herself to still make sure that it's all

**[30:06]** working in production. In some way, shape or form, not that hard to do to be quite fair,

**[30:11]** but still does an extra technical layer. I think that has not yet been removed from usability of

**[30:16]** that type of software for perplexity computer. It's already deployed. It's already live on the web.

**[30:21]** And you can see this button in the top right corner. I can just share it in the same way that I wish

**[30:26]** cloud code built me something that I could share like cloud artifacts does if I go in cloud chat.

**[30:31]** But again, my frustration is, I don't want to have to remember which one of cloud seven different

**[30:35]** tools to go into to figure out what my use case is going to be. And quite often, I fluly want to

**[30:41]** start in one and then maybe end up in the other. And then my other question is, because this is

**[30:46]** pulling from emails and Slack, I'm presuming this app is reusing the connectors from perplexity

**[30:53]** computer, or are you setting those authentication tokens separately? Correct. So all the connectors

**[30:59]** here are the default auth for what computers using in that app as well. And so that's really,

**[31:04]** really cool. Exactly. It's so, so smart. Because even if I'm coding with connectors that I have

**[31:10]** in codecs and cloud code, it's to set up auth every single time. It's doing it all from scratch

**[31:15]** every single time. And the other thing that's really cool about computer is it's intelligent enough

**[31:20]** that if the auth isn't working, it'll warn you, it'll try and go reauthenticate.

**[31:25]** And it'll even just try and do it in browser because almost everything exists on the web today.

**[31:30]** So they can still build you the proof of concept. That is good stuff. This is good stuff. Okay.

**[31:35]** Just to recap for folks, I'm like staring in awe, you know, as an AI person, you get like a

**[31:40]** clairvoy to hand experience. This means I'll take it. Appreciate it. Love it. So just to recap,

**[31:48]** you were just getting build yourself custom apps for processing your work, using perplexity

**[31:53]** computer, bunch out of the box connectors that can be both used to just like natively query your

**[31:58]** information and give you answers, as well as be deployed as the backend for apps, personal

**[32:03]** productivity apps that are optimized for your workflow. And then is there one more you want to

**[32:07]** quickly show? Yeah, you actually just reminded me, as you were talking about that, that I showcase

**[32:12]** a lot of like information consolidation streams because that's what's most on my mind right now.

**[32:16]** But I've also sent computer to a couple of other people on my team that I know are good

**[32:20]** tinkerers. And I've just been like, use it, ask me questions, let me know how it goes.

**[32:25]** One of my favorite uses of this that I would never even have anticipated on my own is that

**[32:30]** we have clay university. So just to give you an example so that anyone watching can also see this.

**[32:34]** And for anyone not watching, I'll describe it to you. We have a lot of content on a website

**[32:39]** about how to learn clay. And it's well architected. Our design team did a great job,

**[32:43]** shout out to all of them. And so beautiful. Yeah, if I had made it, I did make it in the past,

**[32:48]** no one liked it. Right. But there's a lot of information here, and it's not really persona

**[32:53]** based or built. And as we as a company have scaled and are now scaling into further segmentations

**[32:58]** of different industries and audiences and who we sell to based on the features that we've built,

**[33:03]** it makes more sense to say, if you're in revops coming to the clay website for university,

**[33:08]** where do you start? Because not all things similar to my Slack notification issue are created equal

**[33:13]** for you based on the profession you're coming into on the website. That's a major design system

**[33:18]** overhaul to take on top of this website. And it takes a lot of thinking. We none of us on the

**[33:23]** education team are designers. I went into Figma make no, no shades to Figma make to try and rebuild

**[33:30]** it. But the problem is that I had to like, redescribe everything to Figma make in order to even get

**[33:35]** it to look accurate to what we already had for design on the university. So it's not able to

**[33:40]** ingest this sort of like visual context layer that I have. What was really cool about what my

**[33:45]** teammate shout out Chris Ming did here is he went in and said, Oh, perplex the computer can access it

**[33:51]** in the browser has all the different models. So it should also be able to visually recognize and

**[33:55]** then understand what I'm prompting back and forth. So he took an hour just chatting back and forth

**[34:00]** with computer. It doesn't look as pretty for those not watching, but it's functionally much

**[34:05]** closer to what we're trying to envision. Okay. Now if I'm logged out, I can see all these different

**[34:10]** persona based journeys. I've got SDR, BDR, RevOps, marketing ops, GTM engineer, and it even went ahead

**[34:17]** and built in this top right corner. What does it look like once you're logged in? So now Sarah Chen,

**[34:22]** random name, not a real person. How many courses have you completed? What are the next courses for

**[34:28]** you based on you can see your persona on the top right being in RevOps? Let's look at what workshops

**[34:33]** you should go to look at what the cohorts are. All of this helps our design team then better

**[34:37]** quickly understand what we're looking for. Because the other thing that I get frustrated with all the

**[34:42]** time is the gap or the chasm in communication between design and any of their stakeholders.

**[34:48]** Because they know what they need to do, but they don't have all the context that we have.

**[34:51]** And so being able to build a visual bridge between those two is incredibly valuable.

**[34:56]** I love it. Okay. So you're using it. You're getting your team to use it. It's not just for

**[35:01]** personal productivity. You can use it to prototype, pull in existing sites, really understand the

**[35:06]** context of them and then build something that you can use to communicate to your cross functional

**[35:11]** partners to get work just done better and faster. Exactly. And I'm going to give you a compliment.

**[35:15]** I get I see a lot of B2B websites. Clay. Beautiful. Top top top of the team. Yeah, it's it's gorgeous.

**[35:26]** If you have not seen it, go go check it out. And if you have watched my I think it was like my

**[35:31]** Opus four six versus GPT five three design head to head episode. If you watch closely, I redesigned

**[35:38]** the chat PRD website. And I say, I love the clay website, use that as an inspiration. So

**[35:44]** excellent work there. Okay. So you are a hyper optimizer. Any other use cases you want to show

**[35:51]** for us before we get to our lightning round. No, let's just go for it. Let's do the lightning

**[35:56]** round. So we have seen a lot of personal productivity work here. But you said that like 70 I'm this

**[36:04]** is how I remember it. So, you know, we're gonna with it's God's truth. Like 70% of what people

**[36:10]** are asking you to do is go get hot pot and like hang out on the weekend. You're just a very fun

**[36:13]** one person. So are there any fun, you know, now that you've dug yourself out of slack and email

**[36:19]** and your digest and all your works being prototyped by your team, what are your fun use cases of AI?

**[36:25]** I think my my preface to this is that I don't think I'm as fun as everyone else is with AI.

**[36:30]** But for whatever reason, like I treat AI truly as like a work tool. I have friends who are like in

**[36:36]** they call chat GPT chat, you know, they're having like a personal conversation. They're sending text

**[36:41]** messages back and forth and then sending screenshots of chats response to the text messages to me

**[36:46]** being like, look at how good it is. And for some reason, that's where I draw the line of like,

**[36:50]** I don't I don't need a chat therapist. And also half of the time I'm pointing out to my friends

**[36:55]** that I would disagree with what Chad is saying. I think it's just there to support you.

**[36:59]** And I'm here to tell you that that's not the right support. So that's one thing I'll put aside.

**[37:04]** The other thing that I'll say I probably use it for the most in terms of like personal fun in my life

**[37:08]** is brainstorming and research. So I love games. I love board games. I love activities. I love sports.

**[37:16]** Me and my friends host like a winter and a summer Olympics every year. We're now doing a spring

**[37:22]** and a fall. And it's typically a medley of a bunch of random activities. We'll do like

**[37:27]** Apple bobbing who can pull out all the napkins out of a box the fastest trivia is really fun.

**[37:32]** And we'll do like one of my favorite that I stole from a friend was a list of 10 things.

**[37:36]** You just have to guess was it a sword a fish or soup and shockingly no one scored above a 40%

**[37:43]** on that round. So we love doing these types of activities that if I had infinite time,

**[37:48]** I would just spend all of my brain power thinking about how to make this more and more fun.

**[37:52]** But most of the time I have an inkling of the things that I want to do. So for example,

**[37:57]** this last winter Olympics that we held with all of my friends. I knew we wanted to have like

**[38:01]** two or three ironic throwback to college in terms of drinking games. We wanted to have two or three

**[38:05]** more fun conversational games and maybe two or three like actual games. So I had a long brain

**[38:11]** storming session with Jarvis about what are all the activities that we've done before? What are

**[38:16]** the themes on them? How should we actually think about vamping new activities and almost never is

**[38:20]** it actually exactly what I want? But it gets me in the thought process of oh that is pretty much

**[38:25]** close to what I want. Let me make the final modifications myself. And then it's also really

**[38:30]** good for like the ops actually of organizing all that we have 20 people come. So now then we

**[38:36]** wanted to be really intentional about matching people in teams. I put everyone in pairs but I

**[38:41]** wanted you to interact with more than just your pair throughout the day. So then for each of

**[38:44]** the games that were four before we were rotating which pairs are with other pairs to come form

**[38:50]** mega pairs to then compete in the game so that you got exposure to like everyone else throughout

**[38:54]** the day. And so that I thought was really really fun and I used that all the time. I actually bought

**[39:00]** 10 new board games because I found them via Claude yesterday and I was like these look fun.

**[39:04]** So I think that's so fun and you were not the only board game gaming person that we had on the

**[39:10]** podcast. We actually had an entire episode about how two two friends started a board game cafe

**[39:19]** using chatgbt and all sorts of stuff. So nerds be using AI to play board games.

**[39:27]** This is what I'm going to give nerds AI.

**[39:29]** Yeah. I mean one of the things that I do like though is to be like to throw big social events

**[39:35]** and love the idea of putting more structure around like how people meet each other and what

**[39:39]** they do and how to make it fun. I also love a group activity. I recently ran a month long

**[39:46]** March sadness 64 song emo bracket where we decided what was the saddest emo song over all of

**[39:53]** and I used like I had like this five coded app. It was like a nightmare to run before. It was

**[39:57]** so fun to run. We had like over 100 people in it. And so I do think it is like a fun

**[40:02]** kind of like jumping off point. It's never where you want to end up. But it gives you enough ideas

**[40:08]** that you'd be like, Oh, I can pluck a little from that a little from this and then and then

**[40:12]** get your friends together. So I love that. Okay. My my last question, which I ask everybody.

**[40:18]** You seem like such a positive person. You seem like very proactive, very capable with AI.

**[40:24]** But it's open claw occasionally like it's real dumb. What what do you do when

**[40:32]** AI is not giving you what you want? What is your prompting strategy? How do you write the ship?

**[40:39]** I'll give you a very nuanced answer. I think there's three things. Right. So thing number one is with

**[40:44]** open claw in particular, it's even just recognizing that some skills, maybe shouldn't be MCP skills.

**[40:49]** Case in point, my calendar open claw is really bad at dates. And I don't know why I cannot tell

**[40:56]** what today is. I cannot tell that I'm like talking in 2026. And I therefore am planning a trip for

**[41:02]** 2026. Why would I plan a trip for 2025? That makes no sense. But like I can build in a crown

**[41:08]** drop that basically then says anytime I send a date message, just send the timestamp as well

**[41:13]** and recognize that this is the moment in time in which you are answering this question. And my

**[41:17]** hypothesis is it has something to do with like how the models are trained or when they were developed.

**[41:21]** So that helps. But like method number one is recognize that maybe sometimes the thing you are

**[41:26]** asking the AI to do is not the thing the AI should do or that you need to give it better context.

**[41:32]** Method number two, which gets much more silly is be strict with it. Like I type in all caps,

**[41:39]** I will tell it like horrible things will happen. I'll be like, I'm going to lose my job. I'm going

**[41:45]** to have to fire my team if you don't do this correctly. My brother might not be able to make

**[41:49]** it back home. And like all of these horrible like the more extreme you get with the examples,

**[41:55]** the more it's like, okay, on this shot, I promise I will get it. Even if you supply no reason,

**[42:00]** it has to be nowhere close to connected for you to actually get it to do better. But I will really

**[42:06]** tell that there are negative repercussions and it does get stricter sometimes. And then I think

**[42:10]** the last thing I'll mention, which is really good for, I think in particular, open claw and clawed,

**[42:15]** is I try to build skills for the things that it's not really repeatedly good at doing. So for example,

**[42:21]** I have a Google Calendar skill that I'm constantly refining and iterating. And so the more nuanced

**[42:26]** thing that I do is whenever it repeatedly gets something wrong, I ask it to explain to me why and

**[42:31]** how it arrived at that conclusion. And then I ask it to kind of go through the skill and tell me

**[42:36]** what do you think is missing from the skill that would maybe make it better for the next time around

**[42:39]** if I just give you the correct answer. And iteratively, I have noticed it does get better and better over

**[42:44]** time. The warning is it's not a one shot thing. It'll take 10, 12, 20 messages, but you will notice

**[42:51]** the improvement gradually. I love it. And honestly, I've asked this question probably now, 60 something

**[42:58]** times and no one has admitted that they are like threatened with all the time, all the time. It's

**[43:08]** so unusually effective. The like data reason for it, I think is the reward specification and the

**[43:13]** parameter and everything else. But like, it works, you know, I mean, I always, I always reference

**[43:18]** parenting. When we come to this question and I tell my kids and I will tell the AI, I wouldn't

**[43:25]** yell at you if it wasn't the only thing that worked. We got it. Okay, this was so good. Where can we

**[43:34]** find you and how can we be helpful? Great questions. You can find me on LinkedIn or Twitter. I think

**[43:40]** it's just my name, Yash Takurowal or Yash Tech on Twitter or X, whatever people call it now. And

**[43:48]** honestly, the cop out answer I'll give you to how to be helpful is let me know how I can be

**[43:52]** helpful to you. I love teaching people things. I run education at clay. I love this AI stuff

**[43:56]** clearly. And so the only thing on my mind is how to help more people have more fun with these

**[44:00]** things. What a wonderful way to end. Thank you. And I'll talk to you soon. Talk soon. See you Claire.

**[44:06]** Bye y'all. Thanks so much for watching. If you enjoyed the show, please like and subscribe here

**[44:13]** on YouTube or even better leave us a comment with your thoughts. You can also find this podcast on

**[44:18]** Apple podcasts, Spotify, or your favorite podcast app. Please consider leaving us a rating and review

**[44:24]** which will help others find the show. You can see all our episodes and learn more about the show at

**[44:30]** howiaipod.com. See you next time.

