---
title: "Claude Just Changed Content Creation Forever! (Tutorial)"
creator: "sabrina-ramonov"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=M4cmrdoUKxI"
video_id: "M4cmrdoUKxI"
duration: "21:14"
transcript_method: "youtube-captions"
segment_count: 614
char_count: 23485
status: ingested
topics: []
meta_patterns: []
---

# Claude Just Changed Content Creation Forever! (Tutorial)

**Creator**: sabrina-ramonov | **Duration**: 21:14
**URL**: https://www.youtube.com/watch?v=M4cmrdoUKxI
**Transcript**: 614 segments, 23485 chars

## Transcript

Claude just changed content creation forever. You can now create and edit videos completely for free using Claude Code. You can insert your product photos, insert your B-roll, fetch web screenshots to insert in your videos. You can even edit existing videos, apply captions, apply titles, and apply background music entirely within a single Claude Code session. And then post everything to social media. Claude has changed content creation forever. And in this video, I'm going to walk you through it step by step. By the way, my name is Sabrina Romanov. I previously built and sold an AI company for millions of dollars. And now I teach millions of people AI for free. So, hit like, hit subscribe, hit the bell so you don't miss my tutorials. I'm going to show you exactly how to make videos like this. For example, this is a motion graphics video that uses Claude for free to make this. It grabbed web screenshots related to the topic. In this case, this is a video about Claude's skills, and it grabbed those skills automatically. and then it posted this video to my Instagram, my Tik Tok, and my other social media platforms, all without leaving the Claude Code terminal. So, the first thing you're going to do is open up Claude Code. It doesn't matter how you use it, whether it's a terminal, whether it's within anti-gravity, whether it's within Visual Studio Code. Just go ahead and open it up. Here you're seeing two PES. On the right side will be my cloud code session. On the left side, I'm just showing what skills I currently have available related to content creation. And the first thing we're going to do is fetch this skill called remotion, which is what's going to enable us to create those kinds of videos. And we'll just type something simple like install the pre-built skill reotion and set it up. Go ahead and press enter. And you can see Claude's thought process. So it's using web search to find this reotion skill and it found it. So now it's fetching it. So reotion.dev found the GitHub repo, etc. By the way, if you're technical and you just want the oneline shortcut how to do it, you can just run this npx skills add reotion-dev/sklls. And this is really handy. This is just the documentation for remotion. So, this is handy to browse, especially if you're technical. For everyone else who's not technical, that's why I had just a really non-technical way to do this, which is just install the pre-built skill. And your directory on the left hand side should update and show the skill. So, now we see the remotion skill within my project. You can go ahead and click that to open it and see what's inside it. And now that we've set up a new skill, go ahead and refresh your cloud code so that you can see it when you type /reotion. Just like with any other cloud skills, you don't have to explicitly type it to trigger it. If you just mention reotion or you talk about creating a video, cloud code should be intelligent enough to realize it should use the reotion skill. Okay. And now let's work on creating our first video. So type a prompt similar to this. Use Remotion to create a 916 vertical 15-second video on this topic and fill in the topic whatever you want. For example, let's create a video about free GitHub repos containing Cloud Code skills. The first 5 seconds should have a viral hook. Use cool motion graphics. Use cool animated text. And use short form video safe zones. If you don't know what that is, it just means when you use Tik Tok or YouTube or Instagram, you don't want your text to be too high up because it'll interfere with the search bar. You also don't want your text too far down or too far to the side because it might overlap with buttons. So go ahead and tweak this prompt to your use case and start it. It should look something like this. So when you invoke the Remotion skill, first it's going to look for an existing Remotion project and if there isn't one, then it's going to create one. And by the way, the really neat part about all of this is it's just running locally on your computer. You're not paying for some other video generation or editing service. you don't have to upload it somewhere else then download it back which can be really inefficient especially if you're working with long form video and while it's running you can explore what is actually in your reotion skill. So if you go ahead and expand or enter this directory you can see the skill file here as well as rule. So let's open the skill file. So when to use this skill whenever you're dealing with reotion code to obtain domain specific knowledge, you could honestly expand this. If you are going to use reotion as your primary video creation or editing skill, then you might want to expand this description to use it anytime video editing or video creation is involved. That way cloud code will properly trigger even if your prompt is a bit vague like even if you don't specify reotion directly in your prompt. And you can see all these different rules here. For example, for animations, go to rule/an animations to see how Remotion will create those. So, it's pretty cool just to explore it, especially while Remotion is running to create our first video. And what's really cool here is Remotion automatically opened its own studio locally. So, here where it says Remotion Studio is running at localhost 30003, it automatically opened for me or you can click that and open it. Um, and here it is, localhost 30003. It's called Claude Code Skills because the topic of my video is creating a curation of different GitHub repos with Cloud Code Skills. That's why it's called that. But this is really cool. You have your own little like local video editor and stuff running on your computer. So go ahead and press play. And this is our video so far. I mean pretty cool. And it's not even been 2 3 minutes. So it researched GitHub repos uh and then put them here. And then it created these super cool motion graphics and stuff. Now you can do all kinds of things from this point. This is just the tip of the iceberg in terms of what you can create here. You can add more clips. You can add more overlays. We can change the text. We can make this a 15minute long video instead of 15-second. And if you are familiar with a video editor, it's nice to be able to drop into an interface like this just to be able to see how everything is laid out and perhaps give more specific feedback. Like if you want edits to a specific composition, you can say that here. If you want to upload very specific assets, you can do that here. The next thing I'm going to do is expand this video a little bit and make sure it fact checks because I'm pretty sure this first one is not a public repository. This is my local repository uh with Cloud Skills. And this is the really neat part about it. Like if video editing is not your thing, I know it's certainly not mine. You can just talk to Claude about the changes you want in your video. So here let's say first fact check that every single GitHub repo is public and contains free cloud code skills. The other one looked good but the first one is my private repo so I know shouldn't share that one. Second um I want it to be more of like one scene per GitHub repo for each GitHub repo. take a web screenshot and incorporate it in the video. And let's also change the CTA. Sign up for blot. Okay. Um, but here I'm just demoing. I mean, you can type whatever you want. So, whatever feedback you had from that video, if you wanted to change the text, if you wanted to change the colors to match your brand colors, right? Like, we haven't even gotten to any of that, but you can start to imagine what the capabilities are. And what's really neat here is Claude is using some of my other skills. For example, I use Perplexity MCP for web research. So, it's using that to fact check, make sure the GitHub repos are open source, publicly available, and contain free cloud skills. And let's see what it's doing. So, it's using perplexity. Now, it says it's found three verified public repos. And now it wants to navigate to each link and take a screenshot. You can see here it actually popped up my permission for Claude for Chrome. Claude wants to navigate to github.com in order to take those screenshots. I'm going to click allow this action so that it can do that. And now Claude in combination with Remotion is basically taking our curated list, opening each URL, taking a screenshot, and then Remotion will incorporate each screenshot into our video. So this is a really neat way of combining Remotion's video creation, video editing, and motion graphics capabilities with Claude in Chrome's browser capabilities to grab assets for our video. By the way, don't forget to hit like and hit the bell so that you don't miss my next cloud code tutorial. Okay. And so Remotion is just finishing up here. It's rewriting the entire video with five scenes, your hook, the repos with the screenshots, and the NCTA. Just to give you guys some additional ideas for how you could build a full content system on top of this. Even though we're not going to cover all of this in this tutorial video, you can imagine having one file storing your brand voice so that all of the copy within the visuals, within the video, is consistent with your products, your services, how you like to talk on social media. Secondly, you could have a design kit with your brand's colors. So, uh, mood boards, colors, etc. that will be incorporated. It could be the font colors, the background colors, etc. Third, you could have a folder that contains your brand assets. So, things like product photos, B-roll footage, photos, videos, anything that you're willing to use on social media. Not only can Claude Code help you organize and categorize and tag all of your existing visual assets, it can incorporate them into the videos being generated. And the last step is obviously publishing and scheduling everything to social media, which we will cover a little bit of that at the end of this video. Okay, so it's done and it fact checks all three repos. Great. Here's the video structure. Let's go ahead and open preview so we can see it. And here's the updated video. So, let's play it. Nice. Oh, I like this thing that drops from top to bottom. Okay, there's our web screenshot. I'd probably increase the font of everything since this is going to be like on Instagram reels and Tik Tok. Um, and then there's our Ooh, nice colors for Blow Potato. Okay, so so far we've covered creating the motion graphics video, right? So, we already did that in the first step. And then in this step that we just completed, you saw that Cloud Code and Remotion together, Cloud Code took the web screenshot and then Remotion inserted those web screenshots into the video. Now, it doesn't have to be a web screenshot. Again, if you have existing product photos, existing photos for your business, whatever it may be, even if it's just lying around in your photos folder on your computer, Cloud Code can take those, analyze the photos, categorize, and tag them, and then figure out which ones to insert in your videos. or if you have specific photos that you wanted to use for this video, you can absolutely do that. So, just as a really quick example, I'm just going to save my headsh shot here from Instagram. And then I'm going to tell Claude Code to add my head shot in the CTA screen. So, let's go back to Claude Code, incorporate my head shot in SL downloads in the last screen, CTA, and let's add some techno EDM psychedelic background music. Okay, so now it's copied the headsh shot and now it's using Cloud Chrome to choose background music from Pixabay to incorporate in our video and it's finished and you can see the recap of what it did. So it took my headsh shot from Instagram. It found that music and incorporated it and update the CTA screen just like I asked for. So let's go ahead and check it out. Oh, I don't know if you guys can hear that, but there's really cool music now in the background. Okay. Yeah, there's my head shot with a nice little gradient border to match the uh Blotato CTA as well. So just to recap, this was the very first prompt. We used the reotion skill create a 916 vertical 15-second video for Instagram reels, Tik Tok, YouTube shorts, etc. And the particular topic for this video is GitHub repos containing free cloud code skills. So it generated that viral hook. It incorporated motion graphics. It incorporated animated text. And then it used safe zones so that the text is not too high up and not too far down. That was the first prompt. We already got a pretty good result from that first prompt without even incorporating my brand voice, my brand colors, etc. And then the next prompt was to fact check the repos because it actually pulled one of my private GitHub repos. It's not public, but it does have cloud code skills. But for this video, I wanted a curation of public GitHub repos. And then for each GitHub repo, it used Claude and Chrome to navigate to it, fetch a screenshot, and then Remotion incorporated that screenshot into the video. And then it updated the CTA to be sign up for Blotato. So that was the second prompt we ran. And then the very last prompt was just really minor tweaks. I just wanted to show you that it can incorporate your own existing photos, images, assets, product photos, etc. So here I said incorporate my headshot, which I just grabbed real quick from Instagram, and then add some techno EDM psychedelic background music, which it researched and pulled from Pixabay. Now, we've fully covered these first two items, and I hope you're starting to see the power of Remotion. By the way, everything we've done so far is completely free. I have not had to sign up for anything at all. The third use case I'm going to show you is how to edit your existing videos. So, let's say you make talking head videos for Tik Tok, YouTube Shorts, Facebook, and Instant Reels. So, what I'm going to do to demo this is actually just film a really short 15-second video right now, airdrop it to my computer, and then we're going to run it through Remotion and see how it does editing the video. Claude Code just changed content creation forever. You can now create videos, edit video. I totally accidentally messed up, but that's okay. So, we'll see if Claude Code can remove my mess up. And what we're going to type here is just something pretty simple, right? So, edit the latest video in my downloads folder. Remove mistakes. Add a scroll stopping Tik Tok style title. Add subcaptions, but don't cover my face. Be mindful of 916 safe zones for short form videos. So, you can read what it's doing right now. For example, here it's trying to transcribe and detect silence in the recording. Checking if I have a local tool called Whisper to do that transcription. And you can start to see the transcription segments down here. Right. timestamp and then cloud code just changed content creation forever. And when cloud code is finished, open up your remotion locally localhost 30003. And then here in the compositions, you'll see a new folder. So remember motion graphics was this one, right? So not me talking. And then this one, video edits, is the one where I'm talking. So let's go ahead and play it. &gt;&gt; Okay, so this still needs a little bit of work. So, for example, the subtitles here kind of crammed together. And then there was at least one place where I messed up and it didn't edit it out. So, what I'm going to do is going to take a screenshot of how this looks. Drop it into cloud code here. Say the captions look squished together, which makes it hard to read the words. We just add spacing between words. There is also a blooper where I messed up that you didn't remove. And just like I showed you in the previous examples, like the point of this is you can just talk to cloud code and tell it what you want or you can drop into the video editor itself and make the cuts there. Now, my personal tip here is if you are serious about setting up remotion for editing existing videos, I recommend setting aside several days to kind of figure out a template that makes sense for your style of video editing. So, just as an example, let's say you're posting these types of talking head videos to Tik Tok reels and YouTube shorts. You almost always want a title above your head. You want that title to disappear after a couple seconds. Throughout the rest of the video, you might have captions as well. And you just want to make sure they don't cover your face. But most importantly, you want to make sure that Claude Code really learns how to edit out the bloopers in your videos because that's the thing that you probably would have spent time editing manually. Okay. And it's done. And it's reduced the font size, added a bit of word spacing, and supposedly removed the blooper. flaw codes just change content creation forever. You can have &gt;&gt; definitely better. There are still little parts that I would personally tweak, but now the captions are actually readable. It add a little bit of spacing and it also increases the size of the word that's actually active. So, for example, here when crate is active, it's a little bit larger than when it's not active. And I can see that it did try to trim some of the bloopers. And even though it looked a little bit disconnected, this we haven't rendered the final video. So, like the transition between these two scenes will be a little bit smoother once we actually render the final video. And now I'm nitpicking. Again, if I was to create a productionready template for this, like if you want to sit down and do this, you could create like pre-built templates or best practices for things like the title. And the very last step is posting these videos to social media. So, to do that, I'm going to show you a tool that I built for myself. I built it because I'm a creator and I was struggling to figure out how to scale my own content creation without hiring a huge team or spending a lot of money or spending a lot more time. And so this app, Blot, has truly saved my sanity and I'm now approaching 2 million followers across all of social media without a team or anything like that. So once you log in here, go to the settings in the bottom left section. Click API. And if you're brand new, there will be a sign to generate an API key. This is the only part of this tutorial that is paid. This is not free. The reason for that is because basically the social media platforms give third-party tools a certain quota. And like we don't want spammers to just be like posting lowquality content on a free plan. So I do put this behind a payw wall, but if you are unsatisfied for any reason, just hit up the support chatbot for any reason and you can get a refund. The good news is it's super easy to set this up in cloud code. So after you generate your API key, all you have to do is click this button, copy setup command. So you'll probably open a terminal or if you're in like Visual Studio Code, you can open a terminal within there, but let me just show it in the terminal so it's easier and then paste the command in here and press enter. I'm not going to paste the command because it contains my API key. But basically, when you paste it, hit enter. Cloud code is going to download the Blot MCP and set it up with your API key so that it's ready to go. And potato allows you to do lots of cool things related to social media. You can schedule and manage your entire content calendar. You can also scrape things like Tik Tok videos, YouTube videos, podcasts, PDFs, and websites. For example, taking my YouTube video and remixing it into an Instagram carousel and then posting it on Instagram. Botto. So, in addition to scraping and publishing to social media, it can also create visual assets. I can create photos, infographics, videos, carousels, slideshows, etc. And then post and schedule all of them to social media. So, just to give you a preview of like what my published calendar looks like. This is upcoming posts. And then this is my calendar. So, yeah, there's a ton scheduled this week. Lots and lots of posts. And these are all scheduled through Claude Code plus MCP. So, once you have set up the Blot MCP server, all you have to do is go back to cloud code. Let's schedule the motion graphics video video for Instagram in 30 minutes using blot mcp. Okay, so what this is going to do is cloud code is going to say, oh, I have this tool called blot mcp. It has all of these things like scheduling and publishing to social media. So it's going to take the motion graphics video that we just created and then schedule it. Cloud code says it's done. Awaiting your approval on the caption. I'll say looks good. So cloud coders just wants our approval before scheduling this out to social media. And that's generally a good idea to incorporate like in my own personal content creation workflows. I always have an approval step where I can look over lots and lots of different captions and make sure that they fit my brand voice. Make sure that they're using the hashtags I want. Make sure they're conveying the right message. Okay. And you can see here it's done. So it's scheduled the reel 30 minutes from now. Now, it also logged it in my Air Table, so it knows to do this because I have a skill for this. But that's another neat thing you could do, right? You could hook all of this up to your system of record, whether it's Air Table or Google Sheets, and it can update it automatically for you. Now, just to double check that it's scheduled everything, let's go back to Blot. Go to upcoming posts here. Here, 7:55 p.m. Three free GitHub repos. This is the video that we made containing the GitHub repos. And then this will be posted to Instagram at 7:55 p.m. So, let's recap everything we've covered so far. So, we downloaded the pre-built Remotion skill which was 100% free. We created our very first motion graphics video which had cool animations, cool text. We inserted web screenshots. Remember, we curated a list of publicly available resources and then Claude Code and Remotion worked together to take screenshots and then embed them into the video. I also briefly showed you inserting your own images. Like I grabbed my headsh shot from Instagram and said, "Hey, incorporate this in the last scene of the video." But of course, you can do much more than that. You can incorporate product photos, B-roll, images, and videos and photos you have lying around. And then I showed you briefly editing an existing video. Now, I think to make that work, if you really want a social media ready video as an output, you will need to sit down for at least a couple of days and iron out a lot of kinks in the templates, teaching Cloud Code and Remotion exactly how you want that video edited. And then the very last step was taking their video and posting it to social media which we did with Blotato. And you saw how easy that was with Blot, which also has an MCP server. So literally one line in the terminal, hit enter, it's installed, and then you can type things like, "Hey, let's schedule this video for Instagram in 30 minutes." And boom, it writes the caption for you, schedules it. You can manage everything in your own content calendar. If you have any questions setting this up, drop a comment below. Don't forget to hit like, subscribe, hit the notification bell so you don't miss the next Cloud Code tutorial.

## Timed Segments

[0:00] Claude just changed content creation
[0:02] forever. You can now create and edit
[0:04] videos completely for free using Claude
[0:06] Code. You can insert your product
[0:08] photos, insert your B-roll, fetch web
[0:10] screenshots to insert in your videos.
[0:12] You can even edit existing videos, apply
[0:15] captions, apply titles, and apply
[0:17] background music entirely within a
[0:19] single Claude Code session. And then
[0:22] post everything to social media. Claude
[0:24] has changed content creation forever.
[0:26] And in this video, I&#39;m going to walk you
[0:28] through it step by step. By the way, my
[0:30] name is Sabrina Romanov. I previously
[0:31] built and sold an AI company for
[0:33] millions of dollars. And now I teach
[0:35] millions of people AI for free. So, hit
[0:37] like, hit subscribe, hit the bell so you
[0:39] don&#39;t miss my tutorials.
[0:43] I&#39;m going to show you exactly how to
[0:44] make videos like this. For example, this
[0:46] is a motion graphics video that uses
[0:48] Claude for free to make this. It grabbed
[0:51] web screenshots related to the topic. In
[0:53] this case, this is a video about
[0:55] Claude&#39;s skills, and it grabbed those
[0:56] skills automatically. and then it posted
[0:58] this video to my Instagram, my Tik Tok,
[1:01] and my other social media platforms, all
[1:03] without leaving the Claude Code
[1:04] terminal. So, the first thing you&#39;re
[1:06] going to do is open up Claude Code. It
[1:08] doesn&#39;t matter how you use it, whether
[1:09] it&#39;s a terminal, whether it&#39;s within
[1:11] anti-gravity, whether it&#39;s within Visual
[1:13] Studio Code. Just go ahead and open it
[1:14] up. Here you&#39;re seeing two PES. On the
[1:17] right side will be my cloud code
[1:18] session. On the left side, I&#39;m just
[1:19] showing what skills I currently have
[1:21] available related to content creation.
[1:23] And the first thing we&#39;re going to do is
[1:24] fetch this skill called remotion, which
[1:27] is what&#39;s going to enable us to create
[1:29] those kinds of videos. And we&#39;ll just
[1:31] type something simple like install the
[1:32] pre-built skill reotion and set it up.
[1:34] Go ahead and press enter. And you can
[1:36] see Claude&#39;s thought process. So it&#39;s
[1:37] using web search to find this reotion
[1:40] skill and it found it. So now it&#39;s
[1:42] fetching it. So reotion.dev found the
[1:44] GitHub repo, etc. By the way, if you&#39;re
[1:46] technical and you just want the oneline
[1:48] shortcut how to do it, you can just run
[1:50] this npx skills add reotion-dev/sklls.
[1:53] And this is really handy. This is just
[1:55] the documentation for remotion. So, this
[1:57] is handy to browse, especially if you&#39;re
[1:58] technical. For everyone else who&#39;s not
[2:00] technical, that&#39;s why I had just a
[2:02] really non-technical way to do this,
[2:04] which is just install the pre-built
[2:05] skill. And your directory on the left
[2:07] hand side should update and show the
[2:09] skill. So, now we see the remotion skill
[2:11] within my project. You can go ahead and
[2:13] click that to open it and see what&#39;s
[2:15] inside it. And now that we&#39;ve set up a
[2:16] new skill, go ahead and refresh your
[2:18] cloud code so that you can see it when
[2:21] you type /reotion.
[2:22] Just like with any other cloud skills,
[2:24] you don&#39;t have to explicitly type it to
[2:26] trigger it. If you just mention reotion
[2:28] or you talk about creating a video,
[2:30] cloud code should be intelligent enough
[2:32] to realize it should use the reotion
[2:34] skill. Okay. And now let&#39;s work on
[2:35] creating our first video. So type a
[2:37] prompt similar to this. Use Remotion to
[2:40] create a 916 vertical 15-second video on
[2:43] this topic and fill in the topic
[2:45] whatever you want. For example, let&#39;s
[2:47] create a video about free GitHub repos
[2:49] containing Cloud Code skills. The first
[2:51] 5 seconds should have a viral hook. Use
[2:53] cool motion graphics. Use cool animated
[2:56] text. And use short form video safe
[2:58] zones. If you don&#39;t know what that is,
[2:59] it just means when you use Tik Tok or
[3:01] YouTube or Instagram, you don&#39;t want
[3:03] your text to be too high up because
[3:05] it&#39;ll interfere with the search bar. You
[3:07] also don&#39;t want your text too far down
[3:08] or too far to the side because it might
[3:10] overlap with buttons. So go ahead and
[3:12] tweak this prompt to your use case and
[3:15] start it. It should look something like
[3:16] this. So when you invoke the Remotion
[3:18] skill, first it&#39;s going to look for an
[3:20] existing Remotion project and if there
[3:22] isn&#39;t one, then it&#39;s going to create
[3:23] one. And by the way, the really neat
[3:25] part about all of this is it&#39;s just
[3:26] running locally on your computer. You&#39;re
[3:28] not paying for some other video
[3:30] generation or editing service. you don&#39;t
[3:32] have to upload it somewhere else then
[3:34] download it back which can be really
[3:36] inefficient especially if you&#39;re working
[3:37] with long form video and while it&#39;s
[3:39] running you can explore what is actually
[3:41] in your reotion skill. So if you go
[3:43] ahead and expand or enter this directory
[3:46] you can see the skill file here as well
[3:48] as rule. So let&#39;s open the skill file.
[3:50] So when to use this skill whenever
[3:52] you&#39;re dealing with reotion code to
[3:53] obtain domain specific knowledge, you
[3:56] could honestly expand this. If you are
[3:58] going to use reotion as your primary
[3:59] video creation or editing skill, then
[4:02] you might want to expand this
[4:03] description to use it anytime video
[4:06] editing or video creation is involved.
[4:08] That way cloud code will properly
[4:10] trigger even if your prompt is a bit
[4:12] vague like even if you don&#39;t specify
[4:14] reotion directly in your prompt. And you
[4:17] can see all these different rules here.
[4:18] For example, for animations, go to
[4:20] rule/an animations to see how Remotion
[4:24] will create those. So, it&#39;s pretty cool
[4:25] just to explore it, especially while
[4:27] Remotion is running to create our first
[4:29] video. And what&#39;s really cool here is
[4:30] Remotion automatically opened its own
[4:33] studio locally. So, here where it says
[4:34] Remotion Studio is running at localhost
[4:36] 30003, it automatically opened for me or
[4:39] you can click that and open it. Um, and
[4:41] here it is, localhost 30003. It&#39;s called
[4:44] Claude Code Skills because the topic of
[4:46] my video is creating a curation of
[4:48] different GitHub repos with Cloud Code
[4:50] Skills. That&#39;s why it&#39;s called that. But
[4:51] this is really cool. You have your own
[4:52] little like local video editor and stuff
[4:55] running on your computer. So go ahead
[4:56] and press play. And this is our video so
[4:58] far. I mean pretty cool. And it&#39;s not
[5:01] even been 2 3 minutes. So it researched
[5:04] GitHub repos uh and then put them here.
[5:06] And then it created these super cool
[5:08] motion graphics and stuff. Now you can
[5:10] do all kinds of things from this point.
[5:12] This is just the tip of the iceberg in
[5:15] terms of what you can create here. You
[5:17] can add more clips. You can add more
[5:19] overlays. We can change the text. We can
[5:22] make this a 15minute long video instead
[5:25] of 15-second. And if you are familiar
[5:27] with a video editor, it&#39;s nice to be
[5:29] able to drop into an interface like this
[5:31] just to be able to see how everything is
[5:33] laid out and perhaps give more specific
[5:36] feedback. Like if you want edits to a
[5:37] specific composition, you can say that
[5:39] here. If you want to upload very
[5:41] specific assets, you can do that here.
[5:42] The next thing I&#39;m going to do is expand
[5:44] this video a little bit and make sure it
[5:46] fact checks because I&#39;m pretty sure this
[5:47] first one is not a public repository.
[5:50] This is my local repository uh with
[5:52] Cloud Skills.
[5:55] And this is the really neat part about
[5:56] it. Like if video editing is not your
[5:58] thing, I know it&#39;s certainly not mine.
[6:00] You can just talk to Claude about the
[6:02] changes you want in your video.
[6:06] So here let&#39;s say first fact check that
[6:09] every single GitHub repo is public and
[6:13] contains free cloud code skills. The
[6:17] other one looked good but the first one
[6:18] is my private repo so I know shouldn&#39;t
[6:21] share that one. Second um I want it to
[6:24] be more of like one scene per GitHub
[6:27] repo for each GitHub repo. take a web
[6:32] screenshot and incorporate it in the
[6:35] video. And let&#39;s also change the CTA.
[6:38] Sign up for blot.
[6:41] Okay. Um, but here I&#39;m just demoing. I
[6:43] mean, you can type whatever you want.
[6:45] So, whatever feedback you had from that
[6:46] video, if you wanted to change the text,
[6:48] if you wanted to change the colors to
[6:50] match your brand colors, right? Like, we
[6:52] haven&#39;t even gotten to any of that, but
[6:54] you can start to imagine what the
[6:55] capabilities are. And what&#39;s really neat
[6:57] here is Claude is using some of my other
[6:59] skills. For example, I use Perplexity
[7:01] MCP for web research. So, it&#39;s using
[7:03] that to fact check, make sure the GitHub
[7:06] repos are open source, publicly
[7:07] available, and contain free cloud
[7:09] skills. And let&#39;s see what it&#39;s doing.
[7:10] So, it&#39;s using perplexity. Now, it says
[7:12] it&#39;s found three verified public repos.
[7:14] And now it wants to navigate to each
[7:16] link and take a screenshot. You can see
[7:18] here it actually popped up my permission
[7:20] for Claude for Chrome. Claude wants to
[7:22] navigate to github.com in order to take
[7:24] those screenshots. I&#39;m going to click
[7:26] allow this action so that it can do
[7:27] that. And now Claude in combination with
[7:30] Remotion is basically taking our curated
[7:33] list, opening each URL, taking a
[7:35] screenshot, and then Remotion will
[7:37] incorporate each screenshot into our
[7:39] video. So this is a really neat way of
[7:41] combining Remotion&#39;s video creation,
[7:43] video editing, and motion graphics
[7:45] capabilities with Claude in Chrome&#39;s
[7:47] browser capabilities to grab assets for
[7:50] our video. By the way, don&#39;t forget to
[7:52] hit like and hit the bell so that you
[7:53] don&#39;t miss my next cloud code tutorial.
[7:56] Okay. And so Remotion is just finishing
[7:57] up here. It&#39;s rewriting the entire video
[7:59] with five scenes, your hook, the repos
[8:02] with the screenshots, and the NCTA. Just
[8:04] to give you guys some additional ideas
[8:06] for how you could build a full content
[8:08] system on top of this. Even though we&#39;re
[8:10] not going to cover all of this in this
[8:12] tutorial video, you can imagine having
[8:14] one file storing your brand voice so
[8:16] that all of the copy within the visuals,
[8:18] within the video, is consistent with
[8:21] your products, your services, how you
[8:23] like to talk on social media. Secondly,
[8:25] you could have a design kit with your
[8:26] brand&#39;s colors. So, uh, mood boards,
[8:29] colors, etc. that will be incorporated.
[8:32] It could be the font colors, the
[8:33] background colors, etc. Third, you could
[8:35] have a folder that contains your brand
[8:37] assets. So, things like product photos,
[8:40] B-roll footage, photos, videos, anything
[8:42] that you&#39;re willing to use on social
[8:44] media. Not only can Claude Code help you
[8:47] organize and categorize and tag all of
[8:49] your existing visual assets, it can
[8:51] incorporate them into the videos being
[8:54] generated. And the last step is
[8:55] obviously publishing and scheduling
[8:57] everything to social media, which we
[8:59] will cover a little bit of that at the
[9:00] end of this video. Okay, so it&#39;s done
[9:02] and it fact checks all three repos.
[9:04] Great. Here&#39;s the video structure. Let&#39;s
[9:06] go ahead and open preview so we can see
[9:08] it. And here&#39;s the updated video. So,
[9:10] let&#39;s play it. Nice. Oh, I like this
[9:13] thing that drops from top to bottom.
[9:15] Okay, there&#39;s our web screenshot. I&#39;d
[9:17] probably increase the font of everything
[9:19] since this is going to be like on
[9:20] Instagram reels and Tik Tok. Um, and
[9:23] then there&#39;s our Ooh, nice colors for
[9:25] Blow Potato. Okay, so so far we&#39;ve
[9:28] covered creating the motion graphics
[9:29] video, right? So, we already did that in
[9:31] the first step. And then in this step
[9:32] that we just completed, you saw that
[9:35] Cloud Code and Remotion together, Cloud
[9:37] Code took the web screenshot and then
[9:39] Remotion inserted those web screenshots
[9:41] into the video. Now, it doesn&#39;t have to
[9:43] be a web screenshot. Again, if you have
[9:45] existing product photos, existing photos
[9:48] for your business, whatever it may be,
[9:50] even if it&#39;s just lying around in your
[9:52] photos folder on your computer, Cloud
[9:54] Code can take those, analyze the photos,
[9:56] categorize, and tag them, and then
[9:58] figure out which ones to insert in your
[10:00] videos. or if you have specific photos
[10:02] that you wanted to use for this video,
[10:04] you can absolutely do that. So, just as
[10:05] a really quick example, I&#39;m just going
[10:07] to save my headsh shot here from
[10:09] Instagram. And then I&#39;m going to tell
[10:11] Claude Code to add my head shot in the
[10:13] CTA screen. So, let&#39;s go back to Claude
[10:15] Code, incorporate my head shot in SL
[10:20] downloads in the last screen, CTA, and
[10:24] let&#39;s add some techno EDM psychedelic
[10:28] background music. Okay, so now it&#39;s
[10:30] copied the headsh shot and now it&#39;s
[10:32] using Cloud Chrome to choose background
[10:34] music from Pixabay to incorporate in our
[10:36] video and it&#39;s finished and you can see
[10:38] the recap of what it did. So it took my
[10:40] headsh shot from Instagram. It found
[10:42] that music and incorporated it and
[10:45] update the CTA screen just like I asked
[10:46] for. So let&#39;s go ahead and check it out.
[10:48] Oh, I don&#39;t know if you guys can hear
[10:49] that, but there&#39;s really cool music now
[10:51] in the background. Okay. Yeah, there&#39;s
[10:53] my head shot with a nice little gradient
[10:55] border to match the uh Blotato CTA as
[10:57] well. So just to recap, this was the
[10:59] very first prompt. We used the reotion
[11:01] skill create a 916 vertical 15-second
[11:04] video for Instagram reels, Tik Tok,
[11:07] YouTube shorts, etc. And the particular
[11:09] topic for this video is GitHub repos
[11:11] containing free cloud code skills. So it
[11:13] generated that viral hook. It
[11:15] incorporated motion graphics. It
[11:16] incorporated animated text. And then it
[11:18] used safe zones so that the text is not
[11:21] too high up and not too far down. That
[11:23] was the first prompt. We already got a
[11:24] pretty good result from that first
[11:26] prompt without even incorporating my
[11:28] brand voice, my brand colors, etc. And
[11:31] then the next prompt was to fact check
[11:33] the repos because it actually pulled one
[11:35] of my private GitHub repos. It&#39;s not
[11:37] public, but it does have cloud code
[11:39] skills. But for this video, I wanted a
[11:40] curation of public GitHub repos. And
[11:43] then for each GitHub repo, it used
[11:45] Claude and Chrome to navigate to it,
[11:47] fetch a screenshot, and then Remotion
[11:49] incorporated that screenshot into the
[11:51] video. And then it updated the CTA to be
[11:53] sign up for Blotato. So that was the
[11:55] second prompt we ran. And then the very
[11:56] last prompt was just really minor
[11:58] tweaks. I just wanted to show you that
[11:59] it can incorporate your own existing
[12:02] photos, images, assets, product photos,
[12:05] etc. So here I said incorporate my
[12:07] headshot, which I just grabbed real
[12:08] quick from Instagram, and then add some
[12:11] techno EDM psychedelic background music,
[12:13] which it researched and pulled from
[12:14] Pixabay. Now, we&#39;ve fully covered these
[12:16] first two items, and I hope you&#39;re
[12:18] starting to see the power of Remotion.
[12:21] By the way, everything we&#39;ve done so far
[12:22] is completely free. I have not had to
[12:25] sign up for anything at all. The third
[12:26] use case I&#39;m going to show you is how to
[12:28] edit your existing videos. So, let&#39;s say
[12:31] you make talking head videos for Tik
[12:33] Tok, YouTube Shorts, Facebook, and
[12:34] Instant Reels. So, what I&#39;m going to do
[12:36] to demo this is actually just film a
[12:38] really short 15-second video right now,
[12:41] airdrop it to my computer, and then
[12:43] we&#39;re going to run it through Remotion
[12:45] and see how it does editing the video.
[12:47] Claude Code just changed content
[12:48] creation forever. You can now create
[12:50] videos, edit video. I totally
[12:52] accidentally messed up, but that&#39;s okay.
[12:54] So, we&#39;ll see if Claude Code can remove
[12:56] my mess up. And what we&#39;re going to type
[12:58] here is just something pretty simple,
[12:59] right? So, edit the latest video in my
[13:03] downloads folder. Remove mistakes. Add a
[13:07] scroll stopping Tik Tok style title. Add
[13:11] subcaptions, but don&#39;t cover my face. Be
[13:14] mindful of 916 safe zones for short form
[13:19] videos. So, you can read what it&#39;s doing
[13:21] right now. For example, here it&#39;s trying
[13:22] to transcribe and detect silence in the
[13:25] recording. Checking if I have a local
[13:27] tool called Whisper to do that
[13:28] transcription. And you can start to see
[13:30] the transcription segments down here.
[13:32] Right. timestamp and then cloud code
[13:34] just changed content creation forever.
[13:36] And when cloud code is finished, open up
[13:38] your remotion locally localhost 30003.
[13:42] And then here in the compositions,
[13:43] you&#39;ll see a new folder. So remember
[13:45] motion graphics was this one, right? So
[13:47] not me talking. And then this one, video
[13:49] edits, is the one where I&#39;m talking. So
[13:51] let&#39;s go ahead and play it.
[13:56] &gt;&gt; Okay, so this still needs a little bit
[13:59] of work. So, for example, the subtitles
[14:01] here kind of crammed together. And then
[14:03] there was at least one place where I
[14:05] messed up and it didn&#39;t edit it out. So,
[14:06] what I&#39;m going to do is going to take a
[14:08] screenshot of how this looks. Drop it
[14:11] into cloud code here. Say the captions
[14:14] look squished together, which makes it
[14:17] hard to read the words. We just add
[14:20] spacing between words. There is also a
[14:23] blooper where I messed up that you
[14:26] didn&#39;t remove. And just like I showed
[14:27] you in the previous examples, like the
[14:29] point of this is you can just talk to
[14:31] cloud code and tell it what you want or
[14:33] you can drop into the video editor
[14:35] itself and make the cuts there. Now, my
[14:38] personal tip here is if you are serious
[14:40] about setting up remotion for editing
[14:42] existing videos, I recommend setting
[14:44] aside several days to kind of figure out
[14:46] a template that makes sense for your
[14:48] style of video editing. So, just as an
[14:50] example, let&#39;s say you&#39;re posting these
[14:52] types of talking head videos to Tik Tok
[14:54] reels and YouTube shorts. You almost
[14:56] always want a title above your head. You
[14:58] want that title to disappear after a
[15:00] couple seconds. Throughout the rest of
[15:02] the video, you might have captions as
[15:03] well. And you just want to make sure
[15:04] they don&#39;t cover your face. But most
[15:06] importantly, you want to make sure that
[15:08] Claude Code really learns how to edit
[15:10] out the bloopers in your videos because
[15:12] that&#39;s the thing that you probably would
[15:14] have spent time editing manually. Okay.
[15:16] And it&#39;s done. And it&#39;s reduced the font
[15:18] size, added a bit of word spacing, and
[15:21] supposedly removed the blooper. flaw
[15:23] codes just change content creation
[15:25] forever. You can have
[15:26] &gt;&gt; definitely better. There are still
[15:27] little parts that I would personally
[15:29] tweak, but now the captions are actually
[15:31] readable. It add a little bit of spacing
[15:33] and it also increases the size of the
[15:35] word that&#39;s actually active. So, for
[15:37] example, here when crate is active, it&#39;s
[15:39] a little bit larger than when it&#39;s not
[15:41] active. And I can see that it did try to
[15:43] trim some of the bloopers. And even
[15:45] though it looked a little bit
[15:46] disconnected, this we haven&#39;t rendered
[15:48] the final video. So, like the transition
[15:50] between these two scenes will be a
[15:52] little bit smoother once we actually
[15:53] render the final video. And now I&#39;m
[15:55] nitpicking. Again, if I was to create a
[15:57] productionready template for this, like
[15:59] if you want to sit down and do this, you
[16:00] could create like pre-built templates or
[16:02] best practices for things like the
[16:04] title. And the very last step is posting
[16:06] these videos to social media. So, to do
[16:08] that, I&#39;m going to show you a tool that
[16:10] I built for myself. I built it because
[16:12] I&#39;m a creator and I was struggling to
[16:14] figure out how to scale my own content
[16:16] creation without hiring a huge team or
[16:18] spending a lot of money or spending a
[16:20] lot more time. And so this app, Blot,
[16:22] has truly saved my sanity and I&#39;m now
[16:25] approaching 2 million followers across
[16:27] all of social media without a team or
[16:30] anything like that. So once you log in
[16:31] here, go to the settings in the bottom
[16:34] left section. Click API. And if you&#39;re
[16:36] brand new, there will be a sign to
[16:38] generate an API key. This is the only
[16:40] part of this tutorial that is paid. This
[16:43] is not free. The reason for that is
[16:45] because basically the social media
[16:47] platforms give third-party tools a
[16:49] certain quota. And like we don&#39;t want
[16:51] spammers to just be like posting
[16:53] lowquality content on a free plan. So I
[16:55] do put this behind a payw wall, but if
[16:57] you are unsatisfied for any reason, just
[16:59] hit up the support chatbot for any
[17:01] reason and you can get a refund. The
[17:02] good news is it&#39;s super easy to set this
[17:04] up in cloud code. So after you generate
[17:06] your API key, all you have to do is
[17:08] click this button, copy setup command.
[17:10] So you&#39;ll probably open a terminal or if
[17:12] you&#39;re in like Visual Studio Code, you
[17:14] can open a terminal within there, but
[17:16] let me just show it in the terminal so
[17:17] it&#39;s easier and then paste the command
[17:19] in here and press enter. I&#39;m not going
[17:21] to paste the command because it contains
[17:23] my API key. But basically, when you
[17:25] paste it, hit enter. Cloud code is going
[17:27] to download the Blot MCP and set it up
[17:30] with your API key so that it&#39;s ready to
[17:32] go. And potato allows you to do lots of
[17:34] cool things related to social media. You
[17:36] can schedule and manage your entire
[17:38] content calendar. You can also scrape
[17:40] things like Tik Tok videos, YouTube
[17:42] videos, podcasts, PDFs, and websites.
[17:45] For example, taking my YouTube video and
[17:47] remixing it into an Instagram carousel
[17:50] and then posting it on Instagram. Botto.
[17:54] So, in addition to scraping and
[17:56] publishing to social media, it can also
[17:58] create visual assets. I can create
[18:00] photos, infographics, videos, carousels,
[18:04] slideshows, etc. And then post and
[18:06] schedule all of them to social media.
[18:07] So, just to give you a preview of like
[18:09] what my published calendar looks like.
[18:11] This is upcoming posts. And then this is
[18:13] my calendar. So, yeah, there&#39;s a ton
[18:15] scheduled this week. Lots and lots of
[18:17] posts. And these are all scheduled
[18:19] through Claude Code plus MCP. So, once
[18:23] you have set up the Blot MCP server, all
[18:25] you have to do is go back to cloud code.
[18:27] Let&#39;s schedule the motion graphics video
[18:30] video for Instagram in 30 minutes using
[18:34] blot mcp. Okay, so what this is going to
[18:37] do is cloud code is going to say, oh, I
[18:39] have this tool called blot mcp. It has
[18:41] all of these things like scheduling and
[18:43] publishing to social media. So it&#39;s
[18:45] going to take the motion graphics video
[18:47] that we just created and then schedule
[18:49] it. Cloud code says it&#39;s done. Awaiting
[18:51] your approval on the caption. I&#39;ll say
[18:53] looks good. So cloud coders just wants
[18:55] our approval before scheduling this out
[18:57] to social media. And that&#39;s generally a
[19:00] good idea to incorporate like in my own
[19:02] personal content creation workflows. I
[19:04] always have an approval step where I can
[19:05] look over lots and lots of different
[19:08] captions and make sure that they fit my
[19:10] brand voice. Make sure that they&#39;re
[19:11] using the hashtags I want. Make sure
[19:13] they&#39;re conveying the right message.
[19:15] Okay. And you can see here it&#39;s done. So
[19:17] it&#39;s scheduled the reel 30 minutes from
[19:19] now. Now, it also logged it in my Air
[19:20] Table, so it knows to do this because I
[19:23] have a skill for this. But that&#39;s
[19:24] another neat thing you could do, right?
[19:26] You could hook all of this up to your
[19:27] system of record, whether it&#39;s Air Table
[19:29] or Google Sheets, and it can update it
[19:31] automatically for you. Now, just to
[19:32] double check that it&#39;s scheduled
[19:34] everything, let&#39;s go back to Blot. Go to
[19:36] upcoming posts here. Here, 7:55 p.m.
[19:39] Three free GitHub repos. This is the
[19:41] video that we made containing the GitHub
[19:43] repos. And then this will be posted to
[19:44] Instagram at 7:55 p.m. So, let&#39;s recap
[19:47] everything we&#39;ve covered so far. So, we
[19:49] downloaded the pre-built Remotion skill
[19:51] which was 100% free. We created our very
[19:54] first motion graphics video which had
[19:56] cool animations, cool text. We inserted
[19:58] web screenshots. Remember, we curated a
[20:01] list of publicly available resources and
[20:03] then Claude Code and Remotion worked
[20:06] together to take screenshots and then
[20:07] embed them into the video. I also
[20:09] briefly showed you inserting your own
[20:11] images. Like I grabbed my headsh shot
[20:13] from Instagram and said, &quot;Hey,
[20:14] incorporate this in the last scene of
[20:16] the video.&quot; But of course, you can do
[20:18] much more than that. You can incorporate
[20:20] product photos, B-roll, images, and
[20:21] videos and photos you have lying around.
[20:23] And then I showed you briefly editing an
[20:25] existing video. Now, I think to make
[20:28] that work, if you really want a social
[20:30] media ready video as an output, you will
[20:33] need to sit down for at least a couple
[20:34] of days and iron out a lot of kinks in
[20:37] the templates, teaching Cloud Code and
[20:39] Remotion exactly how you want that video
[20:41] edited. And then the very last step was
[20:43] taking their video and posting it to
[20:45] social media which we did with Blotato.
[20:47] And you saw how easy that was with Blot,
[20:50] which also has an MCP server. So
[20:52] literally one line in the terminal, hit
[20:54] enter, it&#39;s installed, and then you can
[20:56] type things like, &quot;Hey, let&#39;s schedule
[20:58] this video for Instagram in 30 minutes.&quot;
[21:00] And boom, it writes the caption for you,
[21:02] schedules it. You can manage everything
[21:04] in your own content calendar. If you
[21:06] have any questions setting this up, drop
[21:07] a comment below. Don&#39;t forget to hit
[21:09] like, subscribe, hit the notification
[21:11] bell so you don&#39;t miss the next Cloud
[21:13] Code tutorial.
