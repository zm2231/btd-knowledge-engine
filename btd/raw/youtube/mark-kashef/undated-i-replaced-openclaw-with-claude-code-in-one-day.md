---
title: "I Replaced OpenClaw With Claude Code in One Day"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=9Svv-n11Ysk"
video_id: "9Svv-n11Ysk"
duration: "15:07"
transcript_method: "youtube-captions"
segment_count: 428
char_count: 16345
status: ingested
topics: []
meta_patterns: []
---

# I Replaced OpenClaw With Claude Code in One Day

**Creator**: mark-kashef | **Duration**: 15:07
**URL**: https://www.youtube.com/watch?v=9Svv-n11Ysk
**Transcript**: 428 segments, 16345 chars

## Transcript

So what you're looking at right now isn't clawbot isn't open claw nano claw or any derivative. It's actually cloud code on my desktop running in telegram. And it's just as good if not better than openclaw out of the box. And I've even managed to make it multimodal. So if I take my phone right here and I take a video of myself momentarily and switching over to my actual desk and showing it my screen, showing it my laptop and I send that over. You'll see it goes right here. It's able to interpret. And you'll see on the left hand side, my cloud code is initializing. It's running on my real desktop with all the skills and everything it needs to process and understand this video. And after 30 to 40 seconds, our new Claude Claw comes back with a full interpretation of the video. So, it says, "You're showing off the setup, panning from your face to the Mac Mini with your microphone setup and the monitor along with the MacBook." So we don't only have access to video interpretation but we can create images with nano banana to ask it how cloud code works. We can make it respond to telegrams, WhatsApps, whatever you want, as well as explain to us how it's built. Now I spent weeks trying to make openclaw work for me to the point where I tried to make a derivative that I shared on this channel and even that wouldn't stick. So then I was pushed and led to ask the question, why not just make my own personal assistant using my existing cloud code? In other words, why not just use what you have and be able to interact with it remotely from anywhere you want? So in this video, I'm not only going to walk you through exactly how I did it, but also how it's designed and how you can do it, too. By the end of this video, you're going to have a personal assistant infinitely more tailored and powerful than OpenClaw. Let's dive in. So, I'm first going to walk you through the entire infrastructure and the concept of how and why this works. And then I'll show you this mega prompt that I've put together that should set you on the right path to build it yourself. So, my goal is that by the end of this video, you could take that mega prompt and you could take the transcript of this video and essentially feed that to your own version of Cloud Code and have it self build its own version. The main concept here is we just have a medium. In this case, our medium is Telegram and we have a bridge. This bridge is not some third party we have to worry about. It's actually Anthropics native agent SDK. And this SDK will allow us to bridge and create our own cloud code terminal that we can tap into. And once we have access to it, you essentially have access to the same terminal and the same underlying infrastructure on your computer. So in my case, I have 30 plus global skills, MCP servers, cloud MDs across different projects. I have web search and I was able to create and customize my own version of memory along with using my existing file system all from a few simple commands. So to be clear on where I stand, OpenClaw was the 4-minute mile. It was the breaking of limiting beliefs that we didn't have all the technology we needed to build a personal assistant at this magnitude. But the flaw with open claw or formerly claudebot was it was basically patching together different ways to create the existing harness of cloud code that already exists and is already exceptional. So even when I decided to replicate and clone every single version of repository like openclaw, like nanoclaw, like picclaw and recreate it myself, it worked. It was a lot faster. It was mine. But I still had to always do dual entry. So if I had a particular skill that works perfectly on my desktop version of cloud code, I would always have to pipe a version of it to work with this new creation I made. If I wanted to schedule something, I'd have to run it somewhere in the cloud. If I wanted to worry about security and authorization, I would have to audit each and everything I'm doing. So after realizing I had to mass customize and continually maintain all the burden of the brand new version I created of OpenClaw, I realized I basically created a derivative of a derivative of a derivative. So there had to be a simpler way and luckily there is. So in the old way, and when I say old, I say this jokingly because this was literally last week. I would take an existing version of this repo, replicate it, customize it, go back and forth with cloud code until it worked perfectly for me. But in the new way, I can just replicate and repurpose everything I've already built for the past six to seven months on my own desktop in terms of full infrastructure. So you get to use your existing cloud code, your existing plan. You don't have to pay for any form of API if you don't want to. And you can use it because it's literally using the one on your local computer using their bridge, not some third parties. And the beauty obviously is as soon as you set it up, your telegram or whatever interface you choose has instant access to the powerful harness of cloud code because if you just use the anthropic API, you get the intelligence of the model. So you can basically dial up and call your favorite model, however smart it is, and it will give you smart answers. But then you have to create the infrastructure and system to break that down and execute any tool calls and do everything it needs to do. With the agent SDK, you basically have a mini version, a subprocess of cloud code running at all times. So anytime you ping from Telegram, it goes and executes it. So the process end to end looks as follows. In stage one, you have Telegram. This pings over to the Telegram API. This authenticates and makes sure it's you. Then you have a media handler. In this case, if I send a video, if I send a photo, if I send a voice note, this is handled. And in stage five, we have memory injection. And this is where we take the most recent memories that you can see right here that live locally on my computer in a SQL light, which is free to run. No superbase, no convex, nothing. And I can store all the memories from our conversations right here. So if I click on browse data, you'll see that these are all the messages that I've sent in the past couple hours. Once the stage is set, pun intended, we then have the agent SDK, the most important part of the process, implement what's called a claude subprocess to essentially write the word claude in your terminal and then execute your command. And beyond that, it's all about taking the response from our existing claude code instance and then converts it into either text or voice, whatever you want, and sends it back to your Telegram. So, you go from one message to eight different stages in less than 5 seconds. So before we pop into the terminal and I walk you through the mega prompt that I've put together, I'm going to show you the memory system very quickly. So it's composed of three different layers. So layer one is triggered whenever you send that first message and it spawns a brand new conversation and that conversation has what's called a session ID. If we take a peek at my existing terminal right here, you'll see that all of these messages are occurring as a part of the exact same session ID, which allows us to persist context across it. Now naturally by doing this you're not breaking the laws of physics. So you're still subject to the context window of cloud code on your computer which is why using this in combination with the million context window from the sonnet model is probably the biggest cheat code. But let's say that's overkill for your particular use case. Then we have layer 2 which is a combination of SQLite a free database that can run on your local computer irrespective of your OS combined with a version of memory. So we have semantic memory which is a version of vector database based memory. Then we have episodic memory. So conversations can decay over time. So I could have a conversation back and forth and then the waiting of the most recent messages are much higher than prior messages. Now I tinkered back and forth until I got to my sweet spot. But all you'd have to do is follow the steps that I'll walk you through in this video and then you'll be able to decide what is the perfect version of memory for you. Or you can nuke this completely and build your own version. And last but not least, we have layer three, which is context injection. So before every message, we're searching recent memories, the top memories. We're dduplicating the conversation for anything that seems to be noise to keep things as fluid and buttery as possible. So with that, let's hop into the terminal as promised. And you'll see right here that I have a series of repos. And if you've watched my prior videos, then you'll know that a couple of the experiments that I ran involved cloning existing open- source repos including OpenClaw to create my own shopping list of the features that I wanted. And this project started along the same lines except I took it a completely different direction. So if we click on this folder and then we open this rebuild prompt right here and I click on reveal and finder and I open it up right here, you will see that this is indeed a behemoth. I'm not going to walk you through the whole prompt because as promised, it is a mega prompt. And the way I designed this prompt is if you just tag it, you don't even have to copy paste it. It should be able to explain how Claude Claw works, ask you for your preferences, push back on you to see what it is that you're trying to create to make sure that you can create your own tailored version. I did my best to take all the scars from my journey of building it myself and inject it in here. So if you do have a FAQ or a question in general that hopefully it's covered in here. So the TLDDR of this document is it tells you what Claude Claw is, what you can do with it and what you can do with it when it's running, what the steps involve, what does it cost to run depending on the infrastructure. So for myself I'm using Grock with a Q for voice notes just because it's a lot faster than 11 Labs. But if you want to use a clone voice, then 11 Labs is the best thing to do there. And then we have criteria for the knowledge base, session resumption, how the memory system should work when it's full. So all the micro behaviors. And if you want to connect your telegram to your WhatsApp, then these are the steps that you could use to replicate it. And in terms of cron jobs, which is one of the major features that people love about OpenClaw, the proactiveness per se, which is basically a series of cron jobs that run on your computer. This can create a scheduler created by Claude Code to stay on your computer. Obviously, to make this all work and make it persist, your computer has to be on or your Mac Mini. And then I've designed the rest of this prompt to pretty much interview you on every single thing that you care about. So, all you have to do is open your beautiful Cloud Code and do at rebuild and then just say execute this or whatever you want, read this or do whatever is in this, any permutation of that. And then it should go through and go through the essentially this wizard that I've compacted in markdown. So once it runs it, you should get this little ASR animation here. I called it clawed claw light because it's not my version of it. It's a general vanilla version of it. And then it goes through the assistant. It tells you exactly what's involved, the steps like you would have seen in the prompt. So now you can ask questions. You can say, "Help me set this up now." And then it should go and invoke the wizard. And behind the scenes, I've asked it to invoke the ask user input tool to basically pop up this multiple choice to make it as interactive as possible and not intimidating for you non-technical folks out there. For voice, in case you want to send and receive voice notes, you can choose from Grock, OpenAI, 11 Labs, no voice or add your own by going to type something. In my case, I could say Grock and then we click on enter. Next, what kind of memory system do you want? So in this case I have my own version that I've bestowed upon you the episodic plus semantic but you can create your entire different version or you can just walk through factory settings build it see if it works for you and then just iterate as needed then you click on full memory then you want to basically say what features you want to enable souler maybe you don't care about the video analysis or WhatsApp bridge and background service and you say submit and then you click submit right here then it starts the entire entire process for you. Now, in my case, it's about to overwrite everything that I've done. So, I'm going to escape for now because it's going to start asking me very tailored questions cuz all of this is already on my computer. But, it should go back and forth with you. And you should have more than enough to go through. And honestly, I did this from scratch in around an hour or two. And my prompts weren't very impressive outside of the first initial message telling it, I have a dream to use Claude Code with my Telegram and not break terms of service. Once you have it installed, ideally you should be able to execute a command like Claudeclaw and then start the onboarding process and you get a beautiful Aski art like this, the full-blown version of Claudeclaw. Then you can go down the wizard. You can click on yes to continue. And then you can say, do you want voice input? You can say yes. Do you want this? Yes. Video analysis, I can say no. And then WhatsApp, I can say no. Do you want to clone any of the repos? So in this case, I just give you the ability to do what I did. If you want to be able to shop different repos for different features you like, it's a part of the wizard as well. So I can click on no and I can click on no as well. Then it will ask you for either an API key or to ooth using your existing anthropic cloud code max plan. So the TLDDR of this process is you just take the mega prompt, you are posed with those four questions, then you can go back and forth and intervene. You have it get built. It can take anywhere between 10 to 30 minutes for it to get built depending on what the nuances are in your version. And the best part of this is unlike OpenCloud where you have to always worry about maintaining two different brains. One for your desktop and one for on the- go, you have one unified system, one unified AI operating system where you can go through this iteration process. So as you improve your cloud code system in general, your ecosystem, you improve your skills and you make those skills global. So all projects can take advantage of them, then your skills get better, your phone experience gets better on Telegram. You can use it from anywhere. You can point to it, you can use it on a Mac Mini, you can change everything into a different infrastructure so long as you have all those core things in place. And the last thing I'll say on this is despite me using cloud code in this video technically [music] any language model that has a command line interface CLI like codeex like Gemini can be used instead of this. So you could swap the entire process with whatever you want. So if you love codecs then absolutely go build your own version of codeexclaw. And that's pretty much it. So hopefully this is as exciting for you as it was for me cuz now you can get real leverage over building one system incredibly well. And like I said, I'm going to make available the mega prompt that I showed you in this video in the second link in the description below. And naturally, if you want to be able to copy my exact setup, get a deeper dive on all the nuts and bolts on how this works and take advantage of all the features that I'm naturally incentivized to add to this to make this amazing, then check out the first link in the description below, and maybe I'll see you in my early adopters community. And for the rest of you, if you enjoy this video, if you found it helpful, if you like the way I teach, I would super appreciate if you could leave a like and a comment on the video. It really helps the reach and it helps the channel, so I'd really appreciate it. I'll see you the next one.

## Timed Segments

[0:00] So what you&#39;re looking at right now
[0:01] isn&#39;t clawbot isn&#39;t open claw nano claw
[0:05] or any derivative. It&#39;s actually cloud
[0:07] code on my desktop running in telegram.
[0:10] And it&#39;s just as good if not better than
[0:12] openclaw out of the box. And I&#39;ve even
[0:15] managed to make it multimodal. So if I
[0:17] take my phone right here and I take a
[0:20] video of myself momentarily and
[0:22] switching over to my actual desk and
[0:25] showing it my screen, showing it my
[0:27] laptop and I send that over. You&#39;ll see
[0:30] it goes right here. It&#39;s able to
[0:31] interpret. And you&#39;ll see on the left
[0:33] hand side, my cloud code is
[0:35] initializing. It&#39;s running on my real
[0:37] desktop with all the skills and
[0:40] everything it needs to process and
[0:42] understand this video. And after 30 to
[0:44] 40 seconds, our new Claude Claw comes
[0:46] back with a full interpretation of the
[0:49] video. So, it says, &quot;You&#39;re showing off
[0:50] the setup, panning from your face to the
[0:53] Mac Mini with your microphone setup and
[0:55] the monitor along with the MacBook.&quot; So
[0:58] we don&#39;t only have access to video
[0:59] interpretation but we can create images
[1:01] with nano banana to ask it how cloud
[1:04] code works. We can make it respond to
[1:06] telegrams, WhatsApps, whatever you want,
[1:09] as well as explain to us how it&#39;s built.
[1:11] Now I spent weeks trying to make
[1:13] openclaw work for me to the point where
[1:15] I tried to make a derivative that I
[1:17] shared on this channel and even that
[1:18] wouldn&#39;t stick. So then I was pushed and
[1:21] led to ask the question, why not just
[1:23] make my own personal assistant using my
[1:26] existing cloud code? In other words, why
[1:28] not just use what you have and be able
[1:30] to interact with it remotely from
[1:32] anywhere you want? So in this video, I&#39;m
[1:34] not only going to walk you through
[1:35] exactly how I did it, but also how it&#39;s
[1:37] designed and how you can do it, too. By
[1:39] the end of this video, you&#39;re going to
[1:40] have a personal assistant infinitely
[1:42] more tailored and powerful than
[1:44] OpenClaw. Let&#39;s dive in. So, I&#39;m first
[1:46] going to walk you through the entire
[1:47] infrastructure and the concept of how
[1:50] and why this works. And then I&#39;ll show
[1:52] you this mega prompt that I&#39;ve put
[1:54] together that should set you on the
[1:56] right path to build it yourself. So, my
[1:58] goal is that by the end of this video,
[1:59] you could take that mega prompt and you
[2:01] could take the transcript of this video
[2:03] and essentially feed that to your own
[2:05] version of Cloud Code and have it self
[2:07] build its own version. The main concept
[2:09] here is we just have a medium. In this
[2:11] case, our medium is Telegram and we have
[2:13] a bridge. This bridge is not some third
[2:16] party we have to worry about. It&#39;s
[2:17] actually Anthropics native agent SDK.
[2:21] And this SDK will allow us to bridge and
[2:24] create our own cloud code terminal that
[2:26] we can tap into. And once we have access
[2:28] to it, you essentially have access to
[2:30] the same terminal and the same
[2:32] underlying infrastructure on your
[2:34] computer. So in my case, I have 30 plus
[2:36] global skills, MCP servers, cloud MDs
[2:39] across different projects. I have web
[2:42] search and I was able to create and
[2:43] customize my own version of memory along
[2:46] with using my existing file system all
[2:48] from a few simple commands. So to be
[2:50] clear on where I stand, OpenClaw was the
[2:53] 4-minute mile. It was the breaking of
[2:55] limiting beliefs that we didn&#39;t have all
[2:57] the technology we needed to build a
[2:59] personal assistant at this magnitude.
[3:02] But the flaw with open claw or formerly
[3:04] claudebot was it was basically patching
[3:06] together different ways to create the
[3:08] existing harness of cloud code that
[3:10] already exists and is already
[3:12] exceptional. So even when I decided to
[3:14] replicate and clone every single version
[3:17] of repository like openclaw, like
[3:20] nanoclaw, like picclaw and recreate it
[3:22] myself, it worked. It was a lot faster.
[3:25] It was mine. But I still had to always
[3:27] do dual entry. So if I had a particular
[3:30] skill that works perfectly on my desktop
[3:32] version of cloud code, I would always
[3:34] have to pipe a version of it to work
[3:36] with this new creation I made. If I
[3:38] wanted to schedule something, I&#39;d have
[3:40] to run it somewhere in the cloud. If I
[3:41] wanted to worry about security and
[3:43] authorization, I would have to audit
[3:45] each and everything I&#39;m doing. So after
[3:47] realizing I had to mass customize and
[3:50] continually maintain all the burden of
[3:52] the brand new version I created of
[3:54] OpenClaw, I realized I basically created
[3:56] a derivative of a derivative of a
[3:58] derivative. So there had to be a simpler
[4:01] way and luckily there is. So in the old
[4:03] way, and when I say old, I say this
[4:05] jokingly because this was literally last
[4:07] week. I would take an existing version
[4:09] of this repo, replicate it, customize
[4:12] it, go back and forth with cloud code
[4:14] until it worked perfectly for me. But in
[4:16] the new way, I can just replicate and
[4:18] repurpose everything I&#39;ve already built
[4:20] for the past six to seven months on my
[4:23] own desktop in terms of full
[4:24] infrastructure. So you get to use your
[4:26] existing cloud code, your existing plan.
[4:28] You don&#39;t have to pay for any form of
[4:30] API if you don&#39;t want to. And you can
[4:32] use it because it&#39;s literally using the
[4:34] one on your local computer using their
[4:36] bridge, not some third parties. And the
[4:38] beauty obviously is as soon as you set
[4:40] it up, your telegram or whatever
[4:42] interface you choose has instant access
[4:45] to the powerful harness of cloud code
[4:47] because if you just use the anthropic
[4:49] API, you get the intelligence of the
[4:52] model. So you can basically dial up and
[4:54] call your favorite model, however smart
[4:56] it is, and it will give you smart
[4:58] answers. But then you have to create the
[4:59] infrastructure and system to break that
[5:02] down and execute any tool calls and do
[5:04] everything it needs to do. With the
[5:06] agent SDK, you basically have a mini
[5:09] version, a subprocess of cloud code
[5:12] running at all times. So anytime you
[5:14] ping from Telegram, it goes and executes
[5:16] it. So the process end to end looks as
[5:19] follows. In stage one, you have
[5:21] Telegram. This pings over to the
[5:22] Telegram API. This authenticates and
[5:25] makes sure it&#39;s you. Then you have a
[5:27] media handler. In this case, if I send a
[5:29] video, if I send a photo, if I send a
[5:31] voice note, this is handled. And in
[5:33] stage five, we have memory injection.
[5:35] And this is where we take the most
[5:37] recent memories that you can see right
[5:38] here that live locally on my computer in
[5:41] a SQL light, which is free to run. No
[5:44] superbase, no convex, nothing. And I can
[5:46] store all the memories from our
[5:48] conversations right here. So if I click
[5:50] on browse data, you&#39;ll see that these
[5:52] are all the messages that I&#39;ve sent in
[5:54] the past couple hours. Once the stage is
[5:56] set, pun intended, we then have the
[5:59] agent SDK, the most important part of
[6:01] the process, implement what&#39;s called a
[6:03] claude subprocess to essentially write
[6:05] the word claude in your terminal and
[6:07] then execute your command. And beyond
[6:09] that, it&#39;s all about taking the response
[6:11] from our existing claude code instance
[6:13] and then converts it into either text or
[6:15] voice, whatever you want, and sends it
[6:17] back to your Telegram. So, you go from
[6:19] one message to eight different stages in
[6:21] less than 5 seconds. So before we pop
[6:23] into the terminal and I walk you through
[6:25] the mega prompt that I&#39;ve put together,
[6:27] I&#39;m going to show you the memory system
[6:29] very quickly. So it&#39;s composed of three
[6:30] different layers. So layer one is
[6:32] triggered whenever you send that first
[6:34] message and it spawns a brand new
[6:36] conversation and that conversation has
[6:38] what&#39;s called a session ID. If we take a
[6:40] peek at my existing terminal right here,
[6:42] you&#39;ll see that all of these messages
[6:44] are occurring as a part of the exact
[6:46] same session ID, which allows us to
[6:48] persist context across it. Now naturally
[6:51] by doing this you&#39;re not breaking the
[6:53] laws of physics. So you&#39;re still subject
[6:54] to the context window of cloud code on
[6:57] your computer which is why using this in
[7:00] combination with the million context
[7:02] window from the sonnet model is probably
[7:04] the biggest cheat code. But let&#39;s say
[7:05] that&#39;s overkill for your particular use
[7:07] case. Then we have layer 2 which is a
[7:10] combination of SQLite a free database
[7:12] that can run on your local computer
[7:14] irrespective of your OS combined with a
[7:17] version of memory. So we have semantic
[7:19] memory which is a version of vector
[7:21] database based memory. Then we have
[7:23] episodic memory. So conversations can
[7:25] decay over time. So I could have a
[7:28] conversation back and forth and then the
[7:30] waiting of the most recent messages are
[7:32] much higher than prior messages. Now I
[7:34] tinkered back and forth until I got to
[7:36] my sweet spot. But all you&#39;d have to do
[7:38] is follow the steps that I&#39;ll walk you
[7:39] through in this video and then you&#39;ll be
[7:41] able to decide what is the perfect
[7:43] version of memory for you. Or you can
[7:45] nuke this completely and build your own
[7:47] version. And last but not least, we have
[7:49] layer three, which is context injection.
[7:51] So before every message, we&#39;re searching
[7:53] recent memories, the top memories. We&#39;re
[7:56] dduplicating the conversation for
[7:57] anything that seems to be noise to keep
[7:59] things as fluid and buttery as possible.
[8:01] So with that, let&#39;s hop into the
[8:03] terminal as promised. And you&#39;ll see
[8:05] right here that I have a series of
[8:07] repos. And if you&#39;ve watched my prior
[8:09] videos, then you&#39;ll know that a couple
[8:11] of the experiments that I ran involved
[8:13] cloning existing open- source repos
[8:16] including OpenClaw to create my own
[8:18] shopping list of the features that I
[8:19] wanted. And this project started along
[8:21] the same lines except I took it a
[8:23] completely different direction. So if we
[8:24] click on this folder and then we open
[8:27] this rebuild prompt right here and I
[8:30] click on reveal and finder and I open it
[8:32] up right here, you will see that this is
[8:35] indeed a behemoth. I&#39;m not going to walk
[8:37] you through the whole prompt because as
[8:39] promised, it is a mega prompt. And the
[8:41] way I designed this prompt is if you
[8:43] just tag it, you don&#39;t even have to copy
[8:45] paste it. It should be able to explain
[8:47] how Claude Claw works, ask you for your
[8:50] preferences, push back on you to see
[8:53] what it is that you&#39;re trying to create
[8:54] to make sure that you can create your
[8:56] own tailored version. I did my best to
[8:58] take all the scars from my journey of
[9:00] building it myself and inject it in
[9:02] here. So if you do have a FAQ or a
[9:04] question in general that hopefully it&#39;s
[9:06] covered in here. So the TLDDR of this
[9:08] document is it tells you what Claude
[9:10] Claw is, what you can do with it and
[9:13] what you can do with it when it&#39;s
[9:14] running, what the steps involve, what
[9:17] does it cost to run depending on the
[9:18] infrastructure. So for myself I&#39;m using
[9:21] Grock with a Q for voice notes just
[9:23] because it&#39;s a lot faster than 11 Labs.
[9:25] But if you want to use a clone voice,
[9:27] then 11 Labs is the best thing to do
[9:28] there. And then we have criteria for the
[9:31] knowledge base, session resumption, how
[9:34] the memory system should work when it&#39;s
[9:35] full. So all the micro behaviors. And if
[9:38] you want to connect your telegram to
[9:40] your WhatsApp, then these are the steps
[9:42] that you could use to replicate it. And
[9:44] in terms of cron jobs, which is one of
[9:46] the major features that people love
[9:48] about OpenClaw, the proactiveness per
[9:51] se, which is basically a series of cron
[9:53] jobs that run on your computer. This can
[9:56] create a scheduler created by Claude
[9:58] Code to stay on your computer.
[10:00] Obviously, to make this all work and
[10:01] make it persist, your computer has to be
[10:03] on or your Mac Mini. And then I&#39;ve
[10:05] designed the rest of this prompt to
[10:07] pretty much interview you on every
[10:09] single thing that you care about. So,
[10:10] all you have to do is open your
[10:12] beautiful Cloud Code and do at rebuild
[10:16] and then just say execute this or
[10:19] whatever you want, read this or do
[10:20] whatever is in this, any permutation of
[10:23] that. And then it should go through and
[10:25] go through the essentially this wizard
[10:26] that I&#39;ve compacted in markdown. So once
[10:29] it runs it, you should get this little
[10:30] ASR animation here. I called it clawed
[10:32] claw light because it&#39;s not my version
[10:34] of it. It&#39;s a general vanilla version of
[10:36] it. And then it goes through the
[10:38] assistant. It tells you exactly what&#39;s
[10:40] involved, the steps like you would have
[10:41] seen in the prompt. So now you can ask
[10:43] questions. You can say, &quot;Help me set
[10:46] this up now.&quot; And then it should go and
[10:49] invoke the wizard. And behind the
[10:51] scenes, I&#39;ve asked it to invoke the ask
[10:54] user input tool to basically pop up this
[10:56] multiple choice to make it as
[10:58] interactive as possible and not
[11:00] intimidating for you non-technical folks
[11:02] out there. For voice, in case you want
[11:04] to send and receive voice notes, you can
[11:06] choose from Grock, OpenAI, 11 Labs, no
[11:09] voice or add your own by going to type
[11:11] something. In my case, I could say Grock
[11:14] and then we click on enter. Next, what
[11:17] kind of memory system do you want? So in
[11:19] this case I have my own version that
[11:21] I&#39;ve bestowed upon you the episodic plus
[11:23] semantic but you can create your entire
[11:25] different version or you can just walk
[11:28] through factory settings build it see if
[11:30] it works for you and then just iterate
[11:32] as needed then you click on full memory
[11:34] then you want to basically say what
[11:36] features you want to enable souler maybe
[11:39] you don&#39;t care about the video analysis
[11:41] or WhatsApp bridge and background
[11:43] service and you say submit and then you
[11:46] click submit right here then it starts
[11:48] the entire entire process for you. Now,
[11:50] in my case, it&#39;s about to overwrite
[11:51] everything that I&#39;ve done. So, I&#39;m going
[11:53] to escape for now because it&#39;s going to
[11:55] start asking me very tailored questions
[11:57] cuz all of this is already on my
[11:58] computer. But, it should go back and
[12:00] forth with you. And you should have more
[12:02] than enough to go through. And honestly,
[12:04] I did this from scratch in around an
[12:06] hour or two. And my prompts weren&#39;t very
[12:09] impressive outside of the first initial
[12:11] message telling it, I have a dream to
[12:14] use Claude Code with my Telegram and not
[12:16] break terms of service. Once you have it
[12:18] installed, ideally you should be able to
[12:20] execute a command like Claudeclaw and
[12:23] then start the onboarding process and
[12:25] you get a beautiful Aski art like this,
[12:28] the full-blown version of Claudeclaw.
[12:30] Then you can go down the wizard. You can
[12:32] click on yes to continue. And then you
[12:35] can say, do you want voice input? You
[12:37] can say yes. Do you want this? Yes.
[12:40] Video analysis, I can say no. And then
[12:42] WhatsApp, I can say no. Do you want to
[12:45] clone any of the repos? So in this case,
[12:46] I just give you the ability to do what I
[12:48] did. If you want to be able to shop
[12:50] different repos for different features
[12:52] you like, it&#39;s a part of the wizard as
[12:53] well. So I can click on no and I can
[12:57] click on no as well. Then it will ask
[12:59] you for either an API key or to ooth
[13:02] using your existing anthropic cloud code
[13:04] max plan. So the TLDDR of this process
[13:07] is you just take the mega prompt, you
[13:09] are posed with those four questions,
[13:11] then you can go back and forth and
[13:12] intervene. You have it get built. It can
[13:15] take anywhere between 10 to 30 minutes
[13:17] for it to get built depending on what
[13:19] the nuances are in your version. And the
[13:22] best part of this is unlike OpenCloud
[13:24] where you have to always worry about
[13:25] maintaining two different brains. One
[13:28] for your desktop and one for on the- go,
[13:30] you have one unified system, one unified
[13:33] AI operating system where you can go
[13:36] through this iteration process. So as
[13:38] you improve your cloud code system in
[13:40] general, your ecosystem, you improve
[13:42] your skills and you make those skills
[13:44] global. So all projects can take
[13:46] advantage of them, then your skills get
[13:48] better, your phone experience gets
[13:50] better on Telegram. You can use it from
[13:52] anywhere. You can point to it, you can
[13:54] use it on a Mac Mini, you can change
[13:56] everything into a different
[13:57] infrastructure so long as you have all
[13:59] those core things in place. And the last
[14:01] thing I&#39;ll say on this is despite me
[14:03] using cloud code in this video
[14:05] technically [music]
[14:06] any language model that has a command
[14:08] line interface CLI like codeex like
[14:11] Gemini can be used instead of this. So
[14:14] you could swap the entire process with
[14:16] whatever you want. So if you love codecs
[14:18] then absolutely go build your own
[14:20] version of codeexclaw. And that&#39;s pretty
[14:22] much it. So hopefully this is as
[14:24] exciting for you as it was for me cuz
[14:26] now you can get real leverage over
[14:28] building one system incredibly well. And
[14:30] like I said, I&#39;m going to make available
[14:32] the mega prompt that I showed you in
[14:34] this video in the second link in the
[14:36] description below. And naturally, if you
[14:37] want to be able to copy my exact setup,
[14:40] get a deeper dive on all the nuts and
[14:42] bolts on how this works and take
[14:44] advantage of all the features that I&#39;m
[14:46] naturally incentivized to add to this to
[14:48] make this amazing, then check out the
[14:50] first link in the description below, and
[14:52] maybe I&#39;ll see you in my early adopters
[14:54] community. And for the rest of you, if
[14:55] you enjoy this video, if you found it
[14:57] helpful, if you like the way I teach, I
[14:58] would super appreciate if you could
[15:00] leave a like and a comment on the video.
[15:02] It really helps the reach and it helps
[15:04] the channel, so I&#39;d really appreciate
[15:05] it. I&#39;ll see you the next one.
