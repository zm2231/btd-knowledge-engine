---
title: "This Workflow Auto Posts in 7 Different Socials (Free Template)"
creator: "sabrina-ramonov"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=8sPYxqU1SoQ"
video_id: "8sPYxqU1SoQ"
duration: "18:09"
transcript_method: "youtube-captions"
segment_count: 513
char_count: 19610
status: ingested
topics: []
meta_patterns: []
---

# This Workflow Auto Posts in 7 Different Socials (Free Template)

**Creator**: sabrina-ramonov | **Duration**: 18:09
**URL**: https://www.youtube.com/watch?v=8sPYxqU1SoQ
**Transcript**: 513 segments, 19610 chars

## Transcript

Learn how to build an N8N AI agent that researches viral trending news in your niche and then automatically creates an AI avatar video with a background video behind the avatar so that it's super engaging and then publishes the video to seven social platforms. Everything 100% automated within N8N. Real quick, if you don't know me, my name is Sabrina Romanov. I'm an AI educator with mission to teach 1 million people AI for free. And I've previously built and sold an AI company for millions of dollars. Now, real quick, here's how the avatar looks. My Instagram, here's the background of my dragon behind it. Here it is on my YouTube shorts. Here it is on my Facebook page. Here it is in threads. Here it is on my LinkedIn. Here it is on Twitter. And here it is on. And this is a very highquality avatar made with Hey Jen, an 11labs voice and a faceless background video made in Blot looping behind my avatar just to keep the video visually engaging. I'm going to walk step by step through how to build this. But in the video description, you can just download this template for free. You don't have to join any school community or pay for anything. Let's start at the high level. 1 2 3. What is actually happening here? The first step over here in the yellow brown area is your AI agent researching daily news. In this case, utilizing hacker news and writing a script for the avatar video as well as a video caption. This second block is where we actually create the AI avatar video using Hey Jen's API. And optionally, you can also use your 11 Labs voice, but you don't have to. The third step over here in green handles publishing to Instagram, YouTube, Facebook, threads, LinkedIn, Twitter, and Tik Tok. Let's dive in step by step how it works. Here is just a schedule trigger. Right now, it's set to run once a day at 10:00 a.m. You can change this to run hourly or as often as you want. The second node is an AI agent, a tools agent. It's using Open AI. You can use whatever model you like. In my case, since I'm researching AI related news, I like to use the more technical model 03 Mini. This AI agent has two different tools attached to it. So, one tool retrieves all of the latest front page articles from Hacker News. Okay. Again, you don't have to do anything here, but if you want to customize it, you can change how many articles are returned. You can change the keywords to be searched. In my case, I'm looking for AI news. And you can change where it's searching. Now, this other tool retrieves the article itself as well as the comments related to that article. The reason I enable this is because usually Hacker News is a pretty balanced discussion. It's not just AI hype hype hype. It's more balanced than that. And so, I like to include the comment so that my AI agent has context on like the pros and cons and skepticism around the piece of news. And here's the actual prompt for the AI agent. It's pretty simple. First, it fetches the top 10 stories from Hacker News from the past 24 hours related to AI or LLM. So, that is using the first Hacker News tool to retrieve a bunch of stories. Next, it selects the top story most likely to go viral on social media. And third, it fetches the article itself and the Hacker News comments. That's the second tool that I walk you through. And then, it's going to create a 30-se secondond monologue script for our AI avatar video, roughly following these guidelines. Of course, feel free to tweak this. I try to include lots of details and stats from the article. Sixth grade reading level, so it's not too technical and a balanced viewpoint. The fifth step is optional. Usually, the hook is not super great. So, I want the AI to replace the first two sentences with more sensational hooks that grab a viewer's attention. The third sentence, by the third sentence, however, the script should already start diving into the article's details. And then the last step is to have some kind of CTA. So replace the last sentence with hit follow to stay ahead in AI. And it's important that the AI agent only outputs the exact video script. You don't want any intermediate thoughts or notes or like preamble to the script. You just want the script itself, which we're going to feed into Hen. So once we have that, once we have the video script, next we're going to write a video caption. And I have two processes here. One to write a long form caption for Tik Tok, YouTube, Instagram, Facebook, etc. And then another step writes like a shortened version of the caption for Twitter threads and blue sky which have a character limit. First of all, I feed it in example. This is personally how I like to structure my captions so they're SEO optimized, but obviously feel free to tweak this to your liking. The rough guideline is paragraph summarizing the information followed by three bullet point questions a viewer might ask searching for this news and then the following hashtags at the end. for my AI avatar video. For this one anyway, it's always going to be reporting AI news. So, I just know the hashtags that I want. And you can see an example output here. The hacker news article it actually grabbed is this one. Google is winning on every AI front. You can open this to read the article. And here's the long caption. Google is being discussed to its dominance in AI and its hardware investments as well. And then here you can see the three questions with new lines and the hashtags at the end. Okay. Okay. And then the short caption is just a simple version of that, right? A very short two sentence caption. Sixth grade language balance neutral perspective. Now, this section in red is where we're actually going to create the avatar video. If you haven't already, sign up for Hen. And what you're going to do is create your own avatar. Click create new avatar. Hyperrealistic. Click get started. Click still. I recommend still instead of motion. Let's talk a little bit about how to actually record your avatar video. For me, what works well is using like a selfie stick stand. So, the camera cannot move at all. Hey, Jen will reject your footage if your camera moves or if you stitch multiple clips together. Film it outside in natural sunlight. Uh, you can sit in the shade if the sunlight is too harsh. I just use my iPhone front camera because I want to see where my eyes are looking. It's really important that your eyes are like looking directly at the camera for as long as you can. and speak continuously for 5 minutes. Look directly at the camera. Minimize like external gestures and hand movements and stuff like that. You really want to be as still as possible and try to use jargon specific to your niche. So in AI, I'll say things like LLMs, chat GBT, things that are kind of newer terminology. You want to make sure you're giving the avatar lots of examples of that. Once you do that, you just upload the footage and wait for your avatar to be created. The standard version will use your current background. So, this is a hyperrealistic avatar where I'm sitting outside that's like actually uh just my backyard in the background. However, if you want an avatar where you can replace the background with some other kind of image or video, open the avatar that you just created and then you're going to want to select background removal. And you will have to upgrade your Hey Gen plan, I believe, to enable this feature. And then for voice, I linked mine to my 11 Labs voice, but you can also use the default voice. And I'll show you real quick how to integrate your 11 Labs voice if you have one. Just click here, integrate thirdparty voice. And it's going to ask you for your 11 Labs API key. Once you input it, you'll be able to see your 11 Labs voices here. And you'll know it's from 11 Labs because it says 11 Labs here. Okay? And this is the instant voice clone. So you can do this with a cheaper version of 11 Labs. But if you want the highest quality voice, use the professional voice cloning feature from 11 Labs. It's about $100 per month, and that's the one I favored here. So that's the one I'm using for my avatar videos. Okay. So now to actually integrate HGEN and stuff, go to settings, go to subscriptions and API gen API and then copy your API key. Now let's go back to our program and this setup node is where you're going to fill out your parameters. Open this up. This is where you're going to paste your API key. And then to grab your avatar ID, go to avatars, click on the avatars you've created, and then here, click copy avatar ID. Okay, paste that in. Voice ID is similar. Just go to AI voice and whichever voice you want, click get voice ID. Okay, paste it in here. And then background video URL. So this is an example of a faceless video that I made in Blot. Shout out to House of Dragon if you watch that. And all I do is take the URL from Blot and paste it in here as the background video URL. And this is cool because you can actually make faceless videos related to your content and then automatically have them play behind your avatar. So this is showing roughly how to do that. Once you set up hijen, you don't really need to touch anything else. Everything just uses the values you provided in the previous step. So this will actually call Hey genen to create the avatar video. I'll open up the JSON real quick. So this is information about your avatar. Make sure matting is true if you want to use your avatar with a green screen and that background video. If you don't want to use the green screen, you just want to use a default avatar, just set this to false. Okay. Offset is like where your avatar is positioned. So for my Tik Tok videos, sometimes I like to be in the bottom right corner, which would be 2.2. Here I just put it as the default so you can see what it looks like. For voice here, you can customize these parameters. So speed, pitch, and emotion. These are all optional parameters, but I included them here. So input text is going to be the script that the avatar says. And then voice ID, we previously input in the previous step. Same for video URL here. And there are a lot of different options for how to customize this. So, I do recommend going to the Hunen API, docs.hen.com/reference, then click create avatar video. And you can see all the parameters here, the ones that are optional. You don't have to include. Let's say you want a different background. Let's say instead of a video background, which is what I currently have, you want an image background, right? So, type would be image instead of video. So, change this to image. The URL of the image. So instead of the background video URL, you'd pass in the image URL. And then the fit, the default is cover, but you could crop it, contain it, or do nothing with it. In this in this case, I just left it as a default cover. And since this is a video, you can do things like loop it. But if it's an image, then this parameter doesn't exist. Make sure to just reference the Hen API if you are customizing some of these parameters. And the most important thing here, make sure your dimension is 916 so that it looks good when you publish it to social media. And lastly here, this is the title for your hen video. This is used so that you can find it again within Hey Gen, but you can change this to anything you want. You can see a bunch of my avatars that I was testing this morning and they're all titled the same thing. So you may want to put like a timestamp if that's important to you. Okay, so that's creating the avatar video and then it takes a while to create the video. So I found a 30-se secondond video. I'll usually wait eight minutes or so. Another way to approach this if you're more technical is to have a callback URL where you separate the video creation and end template from the publishing template. But in this example, I just wanted to show the full thing, have everything in one place. Then the last step is to get the avatar video. So this is pretty simple. Again, you don't need to change anything. We're just calling this URL, passing in the video ID and our API key. Okay. And then the output is the video URL like this. Okay. So now we're done with that. We're going to get ready to publish to seven social platforms. So open this up and you're going to want to edit this. You're going to need to pass in your Blot API key and account IDs. You don't need to touch anything here for the final text. For publishing the posts, we are going to use Blotato, which is an app I've built. It's basically an all-in-one content creation tool where you can create content, repurpose content, and distribute dozens of pieces of content per week. And it includes an API so that you can programmatically publish to all the major social platforms. Okay. So once you sign up here, you're going to log into your Blot account. Go to settings on the bottom left. This is where you're going to connect all the social media accounts you want to publish to. On the starter plan, 29 bucks per month, you can connect up to 20 accounts. So, it's quite generous compared to everything else in the market and it includes API access at that price. Okay. Once you've connected your accounts, you'll also want to generate an API key. This is a paid feature, so just be wary of that. When you generate an API key, you will end your free trial and it will start your paid subscription. The reason for that is I just want to reduce like spammers. I want to make sure my third party integration remains in good standing with the social platforms. Okay. So, once you have that, click copy your API key. Put it in here. Boom. And then for each of the accounts, you'll see this accounts ID. So go ahead, copy that. So this is Tik Tok. Paste it in Tik Tok ID, etc. When you connect Facebook, you'll see like a bunch of pages. And then copy the page ID you want and put it here. Uh similarly for LinkedIn, you can post either to a personal profile or a page. If you want to post to a LinkedIn page, you'll need the LinkedIn page ID as well. Okay. So do that for all your social accounts. And then these last two things here are the final video captions. a long version and a short version. So this long version is like I said paragraph, three bullet point questions for SEO optimization and hashtags. The short version is just a two sentence succinct summary of the content. So the long version will go to all of the platforms except Twitter threads blue sky. The short version will go to Twitter threads and blue sky. Okay? And that's all you have to change. You do not have to touch anything else. Then the next step, we're going to upload our avatar video to Blotato first so that there's a stable permanent URL. Again, you don't need to change anything here. All we're doing is sending the video URL to Blot and it's going to upload that media to Blot servers. And then it returns a Blot URL, which is what we're going to use to publish to the social platforms. And again, you don't need to change anything here except prepare for publish. For example, I've opened up in Instagram. Okay, use the API key. And here's the sample JSON request for Instagram. It's pretty simple. So here's the text. It uses the final long text. Target type Instagram platform Instagram. The media URL is the Blot provided URL and then your Instagram account ID. And if you ever have questions on like what parameters you can use, just head over to the Blotato help docs. Help. Scroll down to the API section. This is a quick start, right, with examples. So you can post immediately. You can post at a scheduled time. You can even post threads with multiple posts. And then the API reference. Here is the publish post endpoint which goes into a lot of detail on what you can do and the parameters that are available for each platform. So here for example, Twitter is just target type. LinkedIn has an optional page ID if you want to publish to a company page. For Facebook, page ID is required. Tik Tok has all of these other parameters that you can tweak if you want. But again, to run this entire thing the first time through, you don't need to change anything. I'll open up the Tik Tok one because that one does have a bunch of parameters. Here's the JSON. And you can see there are a bunch of additional parameters. The only one you might want to change if you are posting avatars is is AI generated. It it's up to you. This sometimes Tik Tok does get mad if it figures out you're posting an AI avatar and haven't disclosed it. So text here is the same. Target type, Tik Tok, Tik Tok, etc. Account ID is your Tik Tok account ID. And then what I like to do is test each one at a time. So I'll deactivate for example like all of these and only test Instagram. That's pretty much it for the entire workflow. And again, you're generating really awesome high quality videos like this. I personally would probably move my avatar just a little bit down like bottom right corner so that there's a little bit more visibility of the video playing behind me. And then an advanced step is to burn some captions right above my head here which I'll show in a future video. And so just to recap, first our AI agent is researching hacker news for content related to AI. Then writing a long caption, a short caption, as well as the video script. Then we're using Hey Gen to create the avatar video. And then we're using the Blot API to publish to seven platforms. Now I'm going to recap the only things you need to change to get this running the first time. Okay? You don't want to change too much yet, customize too much yet. You want to make sure everything is running smoothly first and then you can tweak it as needed. And note some of the most common issues here are for the Hunen API, you do need the paid plan. The free plan only gives you 10 credits and you basically consume them when you make one API call. If you're failing at this step, get avatar video, like it's not returning a URL, then that usually means you need to upgrade your API plan for Hey Gen, or you need to increase the wait time. So the longer your script, the longer it takes to create that avatar video. Okay, so to recap, the only two places you need to change are these setup nodes. Setup Hen and prepare for publish. Okay, so setup Hunen again, open it, put your Hen API key, your avatar ID, your voice ID, and a background video URL. For the sake of having an example, I'm going to leave this URL in there. So when you run it the first time, just use this video URL. The second area you have to change is prepare for publish. Like I said, put in your potato API key and accounts IDs. You don't need to touch these two at the bottom here. And that's it. Those are the only two nodes you need to change to get everything running the first time. Obviously, you will need to have some kind of a gen avatar. But if you don't want to make one yet, you can just use one of their pre-built avatars, right? So if I use Brandon, for example, you can just copy that avatar ID for testing purposes. Similarly, for testing purposes, I recommend reducing this time. Instead of a 30- secondond script, just do like a 5-second script. So that way it generates the video really quickly and you can test everything out. When you do that, you can also change the weight amount to like 2 minutes and it should be done. So that just helps speed up your testing and iteration process. And this template will be available for free in the video description, so you can grab it there. If you enjoyed this video, hit like, hit subscribe, drop a comment below if you want me to make more videos like this.

## Timed Segments

[0:00] Learn how to build an N8N AI agent that
[0:02] researches viral trending news in your
[0:04] niche and then automatically creates an
[0:06] AI avatar video with a background video
[0:09] behind the avatar so that it&#39;s super
[0:11] engaging and then publishes the video to
[0:14] seven social platforms. Everything 100%
[0:17] automated within N8N. Real quick, if you
[0:19] don&#39;t know me, my name is Sabrina
[0:20] Romanov. I&#39;m an AI educator with mission
[0:23] to teach 1 million people AI for free.
[0:25] And I&#39;ve previously built and sold an AI
[0:28] company for millions of dollars. Now,
[0:30] real quick, here&#39;s how the avatar looks.
[0:32] My Instagram, here&#39;s the background of
[0:34] my dragon behind it. Here it is on my
[0:36] YouTube shorts. Here it is on my
[0:38] Facebook page. Here it is in threads.
[0:41] Here it is on my LinkedIn. Here it is on
[0:43] Twitter. And here it is on. And this is
[0:46] a very highquality avatar made with Hey
[0:48] Jen, an 11labs voice and a faceless
[0:51] background video made in Blot looping
[0:54] behind my avatar just to keep the video
[0:56] visually engaging. I&#39;m going to walk
[0:57] step by step through how to build this.
[1:00] But in the video description, you can
[1:01] just download this template for free.
[1:04] You don&#39;t have to join any school
[1:05] community or pay for anything. Let&#39;s
[1:07] start at the high level. 1 2 3. What is
[1:09] actually happening here? The first step
[1:11] over here in the yellow brown area is
[1:14] your AI agent researching daily news. In
[1:16] this case, utilizing hacker news and
[1:19] writing a script for the avatar video as
[1:22] well as a video caption. This second
[1:24] block is where we actually create the AI
[1:26] avatar video using Hey Jen&#39;s API. And
[1:29] optionally, you can also use your 11
[1:31] Labs voice, but you don&#39;t have to. The
[1:33] third step over here in green handles
[1:36] publishing to Instagram, YouTube,
[1:38] Facebook, threads, LinkedIn, Twitter,
[1:40] and Tik Tok. Let&#39;s dive in step by step
[1:42] how it works. Here is just a schedule
[1:44] trigger. Right now, it&#39;s set to run once
[1:46] a day at 10:00 a.m. You can change this
[1:48] to run hourly or as often as you want.
[1:51] The second node is an AI agent, a tools
[1:54] agent. It&#39;s using Open AI. You can use
[1:56] whatever model you like. In my case,
[1:58] since I&#39;m researching AI related news, I
[2:01] like to use the more technical model 03
[2:03] Mini. This AI agent has two different
[2:05] tools attached to it. So, one tool
[2:07] retrieves all of the latest front page
[2:10] articles from Hacker News. Okay. Again,
[2:13] you don&#39;t have to do anything here, but
[2:14] if you want to customize it, you can
[2:16] change how many articles are returned.
[2:18] You can change the keywords to be
[2:19] searched. In my case, I&#39;m looking for AI
[2:22] news. And you can change where it&#39;s
[2:24] searching. Now, this other tool
[2:25] retrieves the article itself as well as
[2:28] the comments related to that article.
[2:30] The reason I enable this is because
[2:32] usually Hacker News is a pretty balanced
[2:34] discussion. It&#39;s not just AI hype hype
[2:37] hype. It&#39;s more balanced than that. And
[2:38] so, I like to include the comment so
[2:40] that my AI agent has context on like the
[2:43] pros and cons and skepticism around the
[2:46] piece of news. And here&#39;s the actual
[2:48] prompt for the AI agent. It&#39;s pretty
[2:50] simple. First, it fetches the top 10
[2:52] stories from Hacker News from the past
[2:54] 24 hours related to AI or LLM. So, that
[2:57] is using the first Hacker News tool to
[2:59] retrieve a bunch of stories. Next, it
[3:01] selects the top story most likely to go
[3:03] viral on social media. And third, it
[3:06] fetches the article itself and the
[3:08] Hacker News comments. That&#39;s the second
[3:10] tool that I walk you through. And then,
[3:12] it&#39;s going to create a 30-se secondond
[3:14] monologue script for our AI avatar
[3:16] video, roughly following these
[3:18] guidelines. Of course, feel free to
[3:19] tweak this. I try to include lots of
[3:21] details and stats from the article.
[3:23] Sixth grade reading level, so it&#39;s not
[3:25] too technical and a balanced viewpoint.
[3:27] The fifth step is optional. Usually, the
[3:29] hook is not super great. So, I want the
[3:31] AI to replace the first two sentences
[3:33] with more sensational hooks that grab a
[3:36] viewer&#39;s attention. The third sentence,
[3:38] by the third sentence, however, the
[3:40] script should already start diving into
[3:42] the article&#39;s details. And then the last
[3:44] step is to have some kind of CTA. So
[3:47] replace the last sentence with hit
[3:48] follow to stay ahead in AI. And it&#39;s
[3:51] important that the AI agent only outputs
[3:53] the exact video script. You don&#39;t want
[3:55] any intermediate thoughts or notes or
[3:58] like preamble to the script. You just
[3:59] want the script itself, which we&#39;re
[4:01] going to feed into Hen. So once we have
[4:03] that, once we have the video script,
[4:04] next we&#39;re going to write a video
[4:06] caption. And I have two processes here.
[4:09] One to write a long form caption for Tik
[4:12] Tok, YouTube, Instagram, Facebook, etc.
[4:15] And then another step writes like a
[4:17] shortened version of the caption for
[4:19] Twitter threads and blue sky which have
[4:21] a character limit. First of all, I feed
[4:22] it in example. This is personally how I
[4:25] like to structure my captions so they&#39;re
[4:27] SEO optimized, but obviously feel free
[4:29] to tweak this to your liking. The rough
[4:32] guideline is paragraph summarizing the
[4:34] information followed by three bullet
[4:36] point questions a viewer might ask
[4:38] searching for this news and then the
[4:41] following hashtags at the end. for my AI
[4:44] avatar video. For this one anyway, it&#39;s
[4:46] always going to be reporting AI news.
[4:48] So, I just know the hashtags that I
[4:50] want. And you can see an example output
[4:52] here. The hacker news article it
[4:53] actually grabbed is this one. Google is
[4:55] winning on every AI front. You can open
[4:57] this to read the article. And here&#39;s the
[5:00] long caption. Google is being discussed
[5:02] to its dominance in AI and its hardware
[5:05] investments as well. And then here you
[5:07] can see the three questions with new
[5:09] lines and the hashtags at the end. Okay.
[5:10] Okay. And then the short caption is just
[5:12] a simple version of that, right? A very
[5:14] short two sentence caption. Sixth grade
[5:16] language balance neutral perspective.
[5:18] Now, this section in red is where we&#39;re
[5:20] actually going to create the avatar
[5:22] video. If you haven&#39;t already, sign up
[5:24] for Hen. And what you&#39;re going to do is
[5:26] create your own avatar. Click create new
[5:28] avatar.
[5:30] Hyperrealistic. Click get started. Click
[5:32] still. I recommend still instead of
[5:35] motion. Let&#39;s talk a little bit about
[5:37] how to actually record your avatar
[5:39] video. For me, what works well is using
[5:42] like a selfie stick stand. So, the
[5:44] camera cannot move at all. Hey, Jen will
[5:46] reject your footage if your camera moves
[5:48] or if you stitch multiple clips
[5:50] together. Film it outside in natural
[5:53] sunlight. Uh, you can sit in the shade
[5:54] if the sunlight is too harsh. I just use
[5:57] my iPhone front camera because I want to
[6:00] see where my eyes are looking. It&#39;s
[6:02] really important that your eyes are like
[6:04] looking directly at the camera for as
[6:06] long as you can. and speak continuously
[6:08] for 5 minutes. Look directly at the
[6:11] camera. Minimize like external gestures
[6:13] and hand movements and stuff like that.
[6:15] You really want to be as still as
[6:17] possible and try to use jargon specific
[6:20] to your niche. So in AI, I&#39;ll say things
[6:22] like LLMs, chat GBT, things that are
[6:25] kind of newer terminology. You want to
[6:27] make sure you&#39;re giving the avatar lots
[6:29] of examples of that. Once you do that,
[6:30] you just upload the footage and wait for
[6:32] your avatar to be created. The standard
[6:34] version will use your current
[6:36] background. So, this is a hyperrealistic
[6:38] avatar where I&#39;m sitting outside that&#39;s
[6:41] like actually uh just my backyard in the
[6:43] background. However, if you want an
[6:45] avatar where you can replace the
[6:47] background with some other kind of image
[6:49] or video, open the avatar that you just
[6:51] created and then you&#39;re going to want to
[6:52] select background removal. And you will
[6:54] have to upgrade your Hey Gen plan, I
[6:57] believe, to enable this feature. And
[6:59] then for voice, I linked mine to my 11
[7:02] Labs voice, but you can also use the
[7:04] default voice. And I&#39;ll show you real
[7:05] quick how to integrate your 11 Labs
[7:07] voice if you have one. Just click here,
[7:09] integrate thirdparty voice. And it&#39;s
[7:10] going to ask you for your 11 Labs API
[7:12] key. Once you input it, you&#39;ll be able
[7:14] to see your 11 Labs voices here. And
[7:17] you&#39;ll know it&#39;s from 11 Labs because it
[7:18] says 11 Labs here. Okay? And this is the
[7:21] instant voice clone. So you can do this
[7:23] with a cheaper version of 11 Labs. But
[7:25] if you want the highest quality voice,
[7:28] use the professional voice cloning
[7:29] feature from 11 Labs. It&#39;s about $100
[7:31] per month, and that&#39;s the one I favored
[7:34] here. So that&#39;s the one I&#39;m using for my
[7:35] avatar videos. Okay. So now to actually
[7:37] integrate HGEN and stuff, go to
[7:40] settings, go to subscriptions and API
[7:42] gen API and then copy your API key. Now
[7:45] let&#39;s go back to our program and this
[7:49] setup node is where you&#39;re going to fill
[7:50] out your parameters. Open this up. This
[7:52] is where you&#39;re going to paste your API
[7:54] key. And then to grab your avatar ID, go
[7:56] to avatars, click on the avatars you&#39;ve
[7:58] created, and then here, click copy
[8:00] avatar ID. Okay, paste that in. Voice ID
[8:03] is similar. Just go to AI voice and
[8:05] whichever voice you want, click get
[8:06] voice ID. Okay, paste it in here. And
[8:09] then background video URL. So this is an
[8:11] example of a faceless video that I made
[8:13] in Blot. Shout out to House of Dragon if
[8:16] you watch that. And all I do is take the
[8:18] URL from Blot and paste it in here as
[8:21] the background video URL. And this is
[8:23] cool because you can actually make
[8:24] faceless videos related to your content
[8:27] and then automatically have them play
[8:28] behind your avatar. So this is showing
[8:31] roughly how to do that. Once you set up
[8:33] hijen, you don&#39;t really need to touch
[8:34] anything else. Everything just uses the
[8:37] values you provided in the previous
[8:38] step. So this will actually call Hey
[8:41] genen to create the avatar video. I&#39;ll
[8:42] open up the JSON real quick. So this is
[8:45] information about your avatar. Make sure
[8:47] matting is true if you want to use your
[8:48] avatar with a green screen and that
[8:50] background video. If you don&#39;t want to
[8:52] use the green screen, you just want to
[8:54] use a default avatar, just set this to
[8:56] false. Okay. Offset is like where your
[8:58] avatar is positioned. So for my Tik Tok
[9:00] videos, sometimes I like to be in the
[9:02] bottom right corner, which would be 2.2.
[9:05] Here I just put it as the default so you
[9:07] can see what it looks like. For voice
[9:09] here, you can customize these
[9:10] parameters. So speed, pitch, and
[9:12] emotion. These are all optional
[9:13] parameters, but I included them here. So
[9:16] input text is going to be the script
[9:17] that the avatar says. And then voice ID,
[9:20] we previously input in the previous
[9:22] step. Same for video URL here. And there
[9:24] are a lot of different options for how
[9:26] to customize this. So, I do recommend
[9:28] going to the Hunen API,
[9:32] docs.hen.com/reference, then click
[9:33] create avatar video. And you can see all
[9:36] the parameters here, the ones that are
[9:38] optional. You don&#39;t have to include.
[9:40] Let&#39;s say you want a different
[9:41] background. Let&#39;s say instead of a video
[9:43] background, which is what I currently
[9:45] have, you want an image background,
[9:47] right? So, type would be image instead
[9:49] of video. So, change this to image. The
[9:51] URL of the image. So instead of the
[9:54] background video URL, you&#39;d pass in the
[9:56] image URL. And then the fit, the default
[9:58] is cover, but you could crop it, contain
[10:01] it, or do nothing with it. In this in
[10:03] this case, I just left it as a default
[10:05] cover. And since this is a video, you
[10:07] can do things like loop it. But if it&#39;s
[10:09] an image, then this parameter doesn&#39;t
[10:11] exist. Make sure to just reference the
[10:13] Hen API if you are customizing some of
[10:16] these parameters. And the most important
[10:18] thing here, make sure your dimension is
[10:20] 916 so that it looks good when you
[10:22] publish it to social media. And lastly
[10:24] here, this is the title for your hen
[10:26] video. This is used so that you can find
[10:28] it again within Hey Gen, but you can
[10:30] change this to anything you want. You
[10:32] can see a bunch of my avatars that I was
[10:34] testing this morning and they&#39;re all
[10:35] titled the same thing. So you may want
[10:37] to put like a timestamp if that&#39;s
[10:38] important to you. Okay, so that&#39;s
[10:40] creating the avatar video and then it
[10:41] takes a while to create the video. So I
[10:43] found a 30-se secondond video. I&#39;ll
[10:45] usually wait eight minutes or so.
[10:48] Another way to approach this if you&#39;re
[10:50] more technical is to have a callback URL
[10:52] where you separate the video creation
[10:55] and end template from the publishing
[10:58] template. But in this example, I just
[11:00] wanted to show the full thing, have
[11:02] everything in one place. Then the last
[11:03] step is to get the avatar video. So this
[11:05] is pretty simple. Again, you don&#39;t need
[11:07] to change anything. We&#39;re just calling
[11:09] this URL, passing in the video ID and
[11:12] our API key. Okay. And then the output
[11:14] is the video URL like this. Okay. So now
[11:18] we&#39;re done with that. We&#39;re going to get
[11:19] ready to publish to seven social
[11:21] platforms. So open this up and you&#39;re
[11:23] going to want to edit this. You&#39;re going
[11:25] to need to pass in your Blot API key and
[11:28] account IDs. You don&#39;t need to touch
[11:30] anything here for the final text. For
[11:32] publishing the posts, we are going to
[11:34] use Blotato, which is an app I&#39;ve built.
[11:36] It&#39;s basically an all-in-one content
[11:38] creation tool where you can create
[11:40] content, repurpose content, and
[11:42] distribute dozens of pieces of content
[11:43] per week. And it includes an API so that
[11:46] you can programmatically publish to all
[11:48] the major social platforms. Okay. So
[11:50] once you sign up here, you&#39;re going to
[11:52] log into your Blot account. Go to
[11:55] settings on the bottom left. This is
[11:57] where you&#39;re going to connect all the
[11:59] social media accounts you want to
[12:00] publish to. On the starter plan, 29
[12:02] bucks per month, you can connect up to
[12:04] 20 accounts. So, it&#39;s quite generous
[12:06] compared to everything else in the
[12:07] market and it includes API access at
[12:10] that price. Okay. Once you&#39;ve connected
[12:11] your accounts, you&#39;ll also want to
[12:13] generate an API key. This is a paid
[12:16] feature, so just be wary of that. When
[12:17] you generate an API key, you will end
[12:20] your free trial and it will start your
[12:21] paid subscription. The reason for that
[12:23] is I just want to reduce like spammers.
[12:26] I want to make sure my third party
[12:27] integration remains in good standing
[12:29] with the social platforms. Okay. So,
[12:31] once you have that, click copy your API
[12:33] key. Put it in here. Boom. And then for
[12:35] each of the accounts, you&#39;ll see this
[12:37] accounts ID. So go ahead, copy that. So
[12:39] this is Tik Tok. Paste it in Tik Tok ID,
[12:42] etc. When you connect Facebook, you&#39;ll
[12:44] see like a bunch of pages. And then copy
[12:46] the page ID you want and put it here. Uh
[12:49] similarly for LinkedIn, you can post
[12:50] either to a personal profile or a page.
[12:53] If you want to post to a LinkedIn page,
[12:54] you&#39;ll need the LinkedIn page ID as
[12:56] well. Okay. So do that for all your
[12:58] social accounts. And then these last two
[13:00] things here are the final video
[13:02] captions. a long version and a short
[13:04] version. So this long version is like I
[13:07] said paragraph, three bullet point
[13:09] questions for SEO optimization and
[13:11] hashtags. The short version is just a
[13:14] two sentence succinct summary of the
[13:16] content. So the long version will go to
[13:18] all of the platforms except Twitter
[13:20] threads blue sky. The short version will
[13:22] go to Twitter threads and blue sky.
[13:24] Okay? And that&#39;s all you have to change.
[13:26] You do not have to touch anything else.
[13:29] Then the next step, we&#39;re going to
[13:30] upload our avatar video to Blotato first
[13:34] so that there&#39;s a stable permanent URL.
[13:36] Again, you don&#39;t need to change anything
[13:38] here. All we&#39;re doing is sending the
[13:40] video URL to Blot and it&#39;s going to
[13:42] upload that media to Blot servers. And
[13:45] then it returns a Blot URL, which is
[13:48] what we&#39;re going to use to publish to
[13:49] the social platforms. And again, you
[13:51] don&#39;t need to change anything here
[13:52] except prepare for publish. For example,
[13:54] I&#39;ve opened up in Instagram. Okay, use
[13:57] the API key. And here&#39;s the sample JSON
[14:00] request for Instagram. It&#39;s pretty
[14:01] simple. So here&#39;s the text. It uses the
[14:03] final long text. Target type Instagram
[14:05] platform Instagram. The media URL is the
[14:08] Blot provided URL and then your
[14:11] Instagram account ID. And if you ever
[14:13] have questions on like what parameters
[14:15] you can use, just head over to the
[14:16] Blotato help docs.
[14:18] Help. Scroll down to the API section.
[14:22] This is a quick start, right, with
[14:24] examples. So you can post immediately.
[14:26] You can post at a scheduled time. You
[14:28] can even post threads with multiple
[14:30] posts. And then the API reference. Here
[14:32] is the publish post endpoint which goes
[14:35] into a lot of detail on what you can do
[14:37] and the parameters that are available
[14:39] for each platform. So here for example,
[14:41] Twitter is just target type. LinkedIn
[14:43] has an optional page ID if you want to
[14:45] publish to a company page. For Facebook,
[14:47] page ID is required. Tik Tok has all of
[14:50] these other parameters that you can
[14:52] tweak if you want. But again, to run
[14:54] this entire thing the first time
[14:55] through, you don&#39;t need to change
[14:57] anything. I&#39;ll open up the Tik Tok one
[14:59] because that one does have a bunch of
[15:00] parameters. Here&#39;s the JSON. And you can
[15:02] see there are a bunch of additional
[15:04] parameters. The only one you might want
[15:06] to change if you are posting avatars is
[15:08] is AI generated. It it&#39;s up to you. This
[15:11] sometimes Tik Tok does get mad if it
[15:13] figures out you&#39;re posting an AI avatar
[15:15] and haven&#39;t disclosed it. So text here
[15:17] is the same. Target type, Tik Tok, Tik
[15:19] Tok, etc. Account ID is your Tik Tok
[15:21] account ID. And then what I like to do
[15:23] is test each one at a time. So I&#39;ll
[15:26] deactivate for example like all of these
[15:28] and only test Instagram. That&#39;s pretty
[15:30] much it for the entire workflow. And
[15:32] again, you&#39;re generating really awesome
[15:34] high quality videos like this. I
[15:36] personally would probably move my avatar
[15:38] just a little bit down like bottom right
[15:40] corner so that there&#39;s a little bit more
[15:42] visibility of the video playing behind
[15:44] me. And then an advanced step is to burn
[15:46] some captions right above my head here
[15:49] which I&#39;ll show in a future video. And
[15:51] so just to recap, first our AI agent is
[15:53] researching hacker news for content
[15:55] related to AI. Then writing a long
[15:57] caption, a short caption, as well as the
[15:59] video script. Then we&#39;re using Hey Gen
[16:01] to create the avatar video. And then
[16:03] we&#39;re using the Blot API to publish to
[16:05] seven platforms. Now I&#39;m going to recap
[16:07] the only things you need to change to
[16:09] get this running the first time. Okay?
[16:12] You don&#39;t want to change too much yet,
[16:13] customize too much yet. You want to make
[16:15] sure everything is running smoothly
[16:17] first and then you can tweak it as
[16:19] needed. And note some of the most common
[16:21] issues here are for the Hunen API, you
[16:24] do need the paid plan. The free plan
[16:26] only gives you 10 credits and you
[16:27] basically consume them when you make one
[16:30] API call. If you&#39;re failing at this
[16:32] step, get avatar video, like it&#39;s not
[16:34] returning a URL, then that usually means
[16:36] you need to upgrade your API plan for
[16:39] Hey Gen, or you need to increase the
[16:41] wait time. So the longer your script,
[16:43] the longer it takes to create that
[16:44] avatar video. Okay, so to recap, the
[16:47] only two places you need to change are
[16:49] these setup nodes. Setup Hen and prepare
[16:52] for publish. Okay, so setup Hunen again,
[16:54] open it, put your Hen API key, your
[16:57] avatar ID, your voice ID, and a
[16:59] background video URL. For the sake of
[17:02] having an example, I&#39;m going to leave
[17:04] this URL in there. So when you run it
[17:06] the first time, just use this video URL.
[17:09] The second area you have to change is
[17:10] prepare for publish. Like I said, put in
[17:13] your potato API key and accounts IDs.
[17:15] You don&#39;t need to touch these two at the
[17:17] bottom here. And that&#39;s it. Those are
[17:19] the only two nodes you need to change to
[17:21] get everything running the first time.
[17:24] Obviously, you will need to have some
[17:26] kind of a gen avatar. But if you don&#39;t
[17:28] want to make one yet, you can just use
[17:29] one of their pre-built avatars, right?
[17:31] So if I use Brandon, for example, you
[17:34] can just copy that avatar ID for testing
[17:36] purposes. Similarly, for testing
[17:38] purposes, I recommend reducing this
[17:40] time. Instead of a 30- secondond script,
[17:42] just do like a 5-second script. So that
[17:45] way it generates the video really
[17:47] quickly and you can test everything out.
[17:49] When you do that, you can also change
[17:50] the weight amount to like 2 minutes and
[17:52] it should be done. So that just helps
[17:54] speed up your testing and iteration
[17:56] process. And this template will be
[17:58] available for free in the video
[18:00] description, so you can grab it there.
[18:01] If you enjoyed this video, hit like, hit
[18:03] subscribe, drop a comment below if you
[18:05] want me to make more videos like this.
