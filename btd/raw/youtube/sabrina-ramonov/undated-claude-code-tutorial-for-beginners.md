---
title: "Claude Code Tutorial for Beginners"
creator: "sabrina-ramonov"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=3HVH2Iuplqo"
video_id: "3HVH2Iuplqo"
duration: "35:03"
transcript_method: "youtube-captions"
segment_count: 1024
char_count: 39220
status: ingested
topics: []
meta_patterns: []
---

# Claude Code Tutorial for Beginners

**Creator**: sabrina-ramonov | **Duration**: 35:03
**URL**: https://www.youtube.com/watch?v=3HVH2Iuplqo
**Transcript**: 1024 segments, 39220 chars

## Transcript

If you're not using Cloud Code right now, you are falling behind millions of other people that are using it to get real work done, automate tedious things, learn things 10 times faster, start new businesses, and so much more. It is the AI tool of the year. Imagine Chat GPT, but with the ability to actually get real work done. That is Claude Code, and I'm so excited today to walk you through exactly how to install it for beginners who are absolutely non-technical. We're going to walk through setting up your first MCP server and we're going to walk through building your very first AI social media assistance. This is going to be a comprehensive tutorial for absolute beginners. You do not need any technical background. And I wanted to really walk you through a realworld practical use case, which is why we're going to plug in an MCP server as well and build out your very first AI social media assistant. Okay, step one is to create a claude.ai account. So, go ahead, go over to claw.ai. If you don't have an account already, go ahead and sign up for an account. Then on the bottom left corner, this is where you can access your settings. So go ahead and click settings, right? Click billing on the lefth hand side. And many people ask me which plan should they pay for. If you're absolutely new to Claude, you're not sure yet if you're going to use it a lot. Just start with the pro plan, $20 per month. Keep in mind though that you will probably hit the usage limits pretty quickly, especially if you have AI calling all different types of tools that you use such as notion, air table, Google sheets, etc. I am personally on the max plan at $200 per month. I have never hit the usage limit and I'm super happy with that plan, but you will naturally progress. So, just start on the lowest least commitment plan. And if you end up using Cloud Code significantly, which I suspect you will, you'll realize you can cancel many other tools and just invest in Cloud Code. Once you've set up your cloud.ai account, go ahead, go to code.claude.com. Now, you've probably seen many tutorials that reference this section, and it's basically a kind of a scary looking documentation that shows you all the different ways you can install Cloud Code. I'm going to show you the beginnerfriendly option, but if you are technical, you know your way around a terminal, this is the easiest place to get started. You just copy one of these commands depending on your operating system. If you're on Mac, Linux, or Windows Subsystem for Linux, on Windows, click this one. But you're doing Windows PowerShell, click this one. However, for most people watching this video, this is already intimidating. So, I'm going to suggest a slightly different approach that I think will be much more productive. If you are absolutely non-technical new to this stuff, just go to Google or your search bar and type in visualstudio code. The first result should be this code.visisualstudio.com. Go ahead and click that and download it for your operating system. Boom. Click download. Okay. So now the download is starting. Go ahead and click it to start the real download. I accept. Go ahead. Next. Next. Just choose all the default options here. And of course, it'll look a little bit different if you're on Mac, but it's essentially the same installation process. At the end of the wizard, it should say launch Visual Studio Code. So, go ahead and click finish. And if it didn't launch automatically, just open up your app navigation and type in Visual Studio Code. This is the icon. So, it should look like this. So, go ahead and open that up. Okay. So, just to recap, we've set up our cloud.ai account. We've installed Visual Studio Code. And now we're going to install the official Claude Code extension for Visual Studio Code. You can think of it an extension. It's kind of just like a plugin into Visual Studio Code to give it superpowers. And if you're wondering what this Visual Studio Code thing is, I kind of call it a Google Doc, but for developers, or at least traditionally, you would be a developer to use this kind of tool. But the reason I recommend it, even if you're non-technical and you're just a beginner starting out, is because it makes it so much easier to review the work that Cloud Code is doing. I'm going to show you in a bit in this tutorial, but when you ask Cloud Code to do something and it produces different outputs or even temporary plans, it's way easier to use an editor to view the output or the thinking process of cloud code than to use a terminal. Okay, so it should look like this now. And on the left sidebar, actually, hang on one sec. I I have to bring up my left sidebar. On your left sidebar, there should be a couple different icons. Look for the one that says extensions. It should look like three cubes. I hid it from my normal view. Um, but if you don't see it, you can always go to view at the top and then click extensions here. Okay. Then we're going to search for Cloud Code. Should be the first result here. And go ahead and install this. Make sure it has over 4 million downloads here. So, you're downloading the correct extension. If it downloaded correctly, it should look like this. uninstall, right? Because that means it's installed. Okay? And then you should see this orange icon in the top right corner. So go ahead and click that. So when you click that orange icon in the top right corner, Cloud Code will open and it will open in the folder that you have open here in Visual Studio Code. If you want to add multiple folders for Cloud Code to be able to like easily operate on and you want to see what's happening in those folders, on the left hand side, this is where the files and folders are going to appear. Um, you can do something like for example file open folder or you can add folder to workspace if you want to add multiple folders to this workspace or you can open a different folder containing a different project. In this case, my folder is completely empty because we're just going to start from scratch. But if it's your first time, I recommend just creating an empty folder and then opening that. That way, you know, everything we create will just be stored there and it won't impact anything else on your computer. Once you've gone ahead and created that folder, then you'll want to open it here. So go to file, open folder, and then find the folder that you just created. And it will look like this. Again, it's empty because we don't have any files yet. So go ahead. Once you've done that, let's go ahead and use cloud code. So let's just ask it what can you do. This is one of my favorite tips working with any AI tool. I like to just literally ask the tool what it can do. It can walk me through exactly how it's useful. So it can be used for code development. It can be used for researching the web. It can be used for planning. And it even told us to type slashhelp if we want more information on available commands. So let's start typing that slash and then the menu pops up. Okay, so this is really neat. So these are additional commands that you can invoke within cloud code. We're not going to go through all of them today, but it's just handy to know that that's where this is. For example, if you want to switch the model to a different model, you just type /model and choose the one that you want to work with. In my case, I almost always use opus 4.6 six. Unless I'm doing really, really easy stuff or if I don't want to eat up my usage limits, then I might switch to a lesser model. You can also tell Claude exactly how often it should ask you for permission. So, the default is it will ask you any time before it edits files. But if you want to change that, you can click it, right? So, instead, it could be in planning mode. If you just want to spend most of your time planning, you can, this is the default mode. It'll ask you before any edits or you can have it edit files automatically. Okay, so let's get started just diving in and using claw code. So let's ask it to do something related to social media marketing. Um let's say research the latest Kimmy claw open claw tool and write a viral LinkedIn post output the draft. Okay. And now what's happening is claude code is thinking. So the first thing it did is asked us for permission to search the web automatically. So it's asking allow searching for this query. So this means claude code is going to research the internet about this Kimmy claw AI tool in 2026. You can either click these options or you can just press the number. So I want to say yes. So I'm going to press one. If you want to give it additional context, you can tell Claude what to do instead by typing here and then pressing enter. In this case, let's just click one for yes. It's going to keep asking to allow the search. And what's really cool is you can see its thinking process. So it searched this. You can see it's green here. So it was successful. You can click on this to actually see what it searched. Like this is the output of running that query. And if this is hard to read, don't worry. So go to I think it's view. Go to view and then click word wrap. So this will now wrap everything in your browser. So it's a little bit easier to read. Um but it's really cool because you can see claw thought process at each step and verify that it's doing the work that you want at each step. So here again, it's asking us to fetch from this URL. I'm going to say yes, allow these domains while we're doing research. And you may have noticed on the left side, a file was actually created in the process. So if you go ahead and click that settings.local JSON, notice how it's under this directory.Cloud. Let me zoom in here. Okay. So what this means is cloud code remembered the permissions that we granted. Remember when I said I'm going to allow it to fetch the web at this domain for this project. So now that we have a permissions file, Cloud Code will know if I ever want to go to this website or this website, I'm allowed to do so. And this permissions file will only apply to this project. So you can have a different set of permissions for one project and a different set of permissions for another project as it makes sense. Okay, now Claude is writing a bullet point draft. And he's asking, would you like me to adjust the LinkedIn post draft? Looks good as is. more personal story, shorter and punchier, more technical depth. Let's make it shorter and punchier since this is LinkedIn. And here's the draft. So, it actually did output the draft over here. So, LinkedIn post draft. And there's a separate um directory on your computer where it's going to store its plans. But you can always click on this or we can ask Claude to actually create the draft within this project. So, I'll do that in a second. But keep in mind, you can click a lot of these links, right? So, it'll open the corresponding file, which is really handy. Okay. So here's our LinkedIn post draft. This is the plan. I'm just going to say no keep planning for now so we can take a look at it. Okay. So here's the plan on the lefth hand side. But let's say we want to write this LinkedIn post here in our project file so that we can go back to it at any time. So let's go ahead and ask claude. Let's first of all switch from plan mode to ask before edits mode and say write uh let's say create a file in this project containing the LinkedIn draft. also create another file with a draft for Twitter. So, two slightly different writing styles since Twitter has a strict character limit unless you have a premium account. So, this will create two files in this project. One with our LinkedIn draft. Okay, so here is the draft. I'm going to zoom out so it's a little bit easier to see. And this mode that just came up, what this means is Claude is asking us permission to write this file. So, allow write to this file. And it's showing us the before and after. So this left panel looks empty because the file didn't exist. And the right side of this is showing the post that Claude will be writing. So here I'm going to say yes, allow all edits this session, which means if I want Claude to tweak this draft, it'll go ahead and do that without asking me for permission every single time. And notice how it's switched now from ask before every edit to edit automatically because of what I answered when it asked for permission. Okay, so now we have two files, right? So just click on these, right? LinkedIn Twitter draft. I'm going to close the previous planet made as well as the settings. We don't really need to look at that anymore. But yeah, this is why I'm kind of um equating the Visual Studio code to Google Doc for editors. Um so traditionally these files would contain code, right? And editors would and coders would edit this code to build their apps. But you can also use this interface to quickly scan and review the outputs from cloud code. So here, Cloud Code wrote our LinkedIn draft regarding OpenClaw and Kimmy and then it also wrote a Twitter draft and in fact it wrote a Twitter thread. Tweet one, tweet two, tweet three, tweet 4. So if you want to make any edits before this goes out, you can easily do that in here or you can ask Claude to do it for you. But the nice thing is all of the files are stored here in this project directory. I'm going to show you just a couple more prompts so you can get comfortable using Claude code. So, for example, let's say make sure to fact check all this information since Kimmy Claw is brand new point. It's going to ask permission again for a bunch of websites and I granted it access. Okay. And after it's doing its research and after I asked it to fact check this, it said a couple things need correcting. So, some things like partially true, misleading, right? So, it's going ahead and edit our drafts based on my request to fact check this post. And here's the conclusion. All other claims checked out across multiple sources, which is great. Now, there can always be a situation when multiple sources are wrong, but at least you have kind of done. But if multiple credible sources are reporting the same thing, it's much less likely that you're reporting something incorrect. Now, let's say you want to take this to the next level, like how do you incorporate your brand voice, your own marketing assets? The beautiful thing about Cloud Code and many other generative AI tools is you can just ask them the best way to interact with them so that they can help you accomplish your goal. So let's just ask Claude Code what would be the best way to incorporate my brand voice in these drafts as well as all drafts moving forward so that you don't have to repeat this process again and again. And Claude's answering we should create a brand voice file in our project so that it can reference it every time it writes content. And now it's going to build that guide by asking me a couple of questions about my brand voice. Um, I would say maybe thoughtful and analytical. There's multiple questions here. So, tone, CTA, and examples, so make sure to click through all of them. How do you typically end posts? I like to end it with a question. And then examples. Do you have existing LinkedIn posts? I do somewhere, but uh, let's just say for now, no. Build from scratch. Obviously, if you have your own content, that's great. Just click yes. It's asking some more follow-up questions. I'll just say mix of the above. What should your posts never sound like? No. Sometimes I do like to say crushing it. So I'll just say and the key point I really want you to learn is that you can just ask Claude code how do I do this? You don't have to search for the perfect YouTube tutorial to follow along. Claude Code can actually teach you step by step or you can brainstorm with it interactively. Come up with a plan. Give it feedback like h I don't think this sounds like me. This sounds more like me over here. like just keep going with that interactive feedback and realize that instead of your instead of your default being oh let me find a tutorial that walks me through this. Your default mode of thinking should be let me ask claude code and see what we can do. Okay. And if you scroll up here you can actually see the brand voice guide it wrote. You may have noticed the file it added over here on the left side. Let's go ahead and open that up. And obviously this is a very light brand voice file but you can add a lot more to it. So, I'm just giving you kind of the basic skeleton to get started, and you can add a ton more on top of this. So, one neat thing here is Claude's saying, "For future content, I'll reference the brand voice guide automatically." You can also tweak at any time to refine the voice. But how does that actually work? So, let's go ahead and ask Claude, how does this actually work? If I close this conversation, how will you know to reference the brand voice guide automatically? Okay, and this is really interesting. and Claude actually backed up on its answer which I figured it would do but this is a really useful experience and experiment to go through um because there also always keep in mind that AI so question it be like how would this work can you walk me through how it would work and now Claude is saying if you close this conversation I start fresh with no memory of this session but I do have a persistent memory file that gets loaded it's currently empty if I save a note there pointing to your brand voice then I'll see it every time so now it's going to set it up. So, it went ahead and updated its memory file here and it summarized exactly what I did here. So, that was a really nice example which honestly I didn't even plan, but it worked out perfectly. Right? The key thing to always understand is you're still talking to AI at the end of the day, which means it can be wrong. It can have outdated knowledge. It may hallucinate. It may put emphasis on the wrong context instead of the right context for your situation. And so, just as a habit, always ask why. How does that work? Walk me through it. Why? If something doesn't add up or seem right or doesn't make sense to you, just dig in deeper. I really want you to embrace cloud code as a partner, but it can also be wrong. So like it is important that you understand what is going on. And the more you understand how to work with cloud code, the more productivity and leverage you'll be able to gain working with it. Okay, now the next step in our agenda, we have completed all of these, which is great. And now we're going to set up our very first MCP server and launch our AI social media assistance. Now, I was debating whether I should include MCP in a beginner tutorial like this. But the reason why I think it's so important is because understanding MCP and how to connect MCP will allow you to use Cloud Code to perform realworld tasks. What I mean by this is, okay, now we have two draft social media posts. Let's say we're happy with these drafts. Okay, but what do you do next? How do you actually post them to social media? I mean, you would have to copy and paste this, right? Open up Twitter or open up some kind of scheduler tool for social media. Copy paste each of these things. This is a Twitter thread, by the way. So, you're going to copy paste tweet one, tweet two, tweet three, tweet four, and this alternative version, you're going to have to copy paste each one of those into your social media scheduling app or into Twitter directly and then post it. And then you're going to open this LinkedIn draft, copy paste this, and then post it to LinkedIn. You may also want to create a visual for this content, right? Most LinkedIn posts, by the way, have a visual attached, whether it's an image or video. So, how do you do that? You would normally open up another tool like Canva or Adobe or whatever you use to make nice infographics and images. You'd open that up separately and then grab everything and upload it to LinkedIn. Then grab everything and upload it to Twitter. So, the amazing thing about MCP is all of that tedious work you'd have to do separately, you can now do all in one place. And all you have to do is tell Claude in plain English. Hey, I want to make an infographic accompanying this post. Hey, this post is ready to go. Let's post it on Twitter or let's schedule it a week out from now. You can do all of those things within Cloud Code. And that is why I'm so excited to teach folks how to use Cloud Code because you can actually get real work done. It's not just coming up with a post, but you have to do everything else yourself, right? Because that's not super efficient either. What I'm going to show you, you're going to use cloud code. It's going to write the post. You should review it, obviously, add your human voice, your perspective, things that are unique to you. And then within Cloud Code as well, you can make visuals and post or schedule them out to all of your social media platforms without ever having to leave Cloud Code. But to do this, we need to learn to integrate at least one MCP. So, real quick, what is MCP? The simple way I like to describe it is it allows cloud code to interact with the apps you actually use. So if you use email, if you use air table, if you use notion or here, Google doc, MCP allows AI to efficiently interact with the apps that you actually use on a day-to-day basis. Now, full disclosure, this is an app I built as a content creator. I've grown from zero to 1.5 million followers without a team and without budget. And the only way I've been able to do that is to figure out AI and automation to scale myself. And I built an MCP server so that I could do all of this within cloud code. So go to the website blot.com, click login or start your free week. On the bottom left, click settings. Okay. And this is where you're going to be able to grab your API key. Now the API key is a paid feature here. I know that's not amazing, but it significantly helps me to reduce spam. I do have a no questions asked money back guarantee. So like seriously, if you're not happy with this for any reason, you can just get a refund. But I do have a payw wall up to reduce spam posts. If you're logging in for the first time, you won't have an API key generated yet. So there will be a big button here that says generate API key. So go ahead and click that. Then the second step is to copy the setup command. So go ahead and click that. Then go over to cloud code and paste that in there. So this is the command. If you have cloud code installed via terminal already before watching this video, then you can just take this command and run it in your terminal and that will work. However, in this video, since I focused on installing cloud code via Visual Studio Code, this command actually won't work. So, we need to add just a little bit extra to help cloud code out. So, we're going to take this add the following MCP server as if you were running cloud MCP ad and add it to user scope, meaning it's going to be used and available for multiple projects that you may have in cloud code. And we're telling Cloud to create the file if it doesn't exist yet. So, go ahead and copy this or screenshot this and add it to the beginning of your prompt. Okay, so now your prompt should look like this. And then go ahead and click enter. It's going to ask for a bunch of permissions. So, it's trying to see if that file already exists. Okay, the file exists. Great. So, now it's going to add it to the file, which is great. Okay. And now Claude is verifying that it was added correctly, but it also opened the file here. So, it should beclaude JSON. And the nice thing about doing it this way, if so, if you don't add this initial part, cloud code will try to set up your MCP server in a different file. And it can lead to confusion because you're going to have different MCP servers in your global user scope and then other MCP servers in your personal project. If you're brand new to this, like you're a beginner to this, that can just lead to extra confusion. For any future MCP servers you want to install, you can also add this thing at the beginning and it will install all of them at the same scope in the same configuration file. So you can just see all of them and manage all of them there. Okay, let's go back to cloud code. And it says done. The Blueot MCP server has been added. Let's go look for it. So, this is the cloud J file. Should scroll down. There should be a section called MCP servers potato. Here's the URL. And then that should be your API key. If for some reason you're you didn't uh paste your API key or it didn't copy over, you can copy your API key from your potato settings. Okay. And then paste it in here if for some reason it did not copy over. And we will need to restart Cloud Code for the new MCP server to be picked up. Okay. So, it's telling us this right here. To do that, just click the plus button in the top right corner. This will start a new session. Um, I'm on Windows, but if you're on Mac, uh, you should also be able to click this button, this orange icon, and it will open a new cloud code session. Let's go ahead and click that. Okay. And yeah, let's try using our AI social media assistant. So, let's say make a whiteboard infographic from the LinkedIn draft. Now, remember when I said the purpose of installing an MCP server, even though this is an absolute beginner tutorial, is because we want Cloud Code to be able to do useful things. It's like, it's great that it can write the copy. I mean, chat GPT can also do that. What about creating the visual? What about actually scheduling it and publishing it to social media? So, that's the part we're going to walk through right now. Okay. And it's going to ask you for all of these permissions. I just say yes, allow these permissions. And again, don't be concerned if like stuff is red here. That's just Claude figuring it out. Like that one didn't work. Okay, this one worked. Now the visual is being generated. Let me check on the progress. Now, when you create a visual, especially a whiteboard infographic, it's going to use an AI model to make that visual. So, it can take 30 seconds or upwards to a minute to finish. But you can check on the progress by going to your potato account, click videos, and you should see the draft here. Right? So, this was the one that errored out when Cloud Code initially tried it, but it didn't quite work. And then this was the one that was successful. And the cool thing is Cloud Code just figured it out. It was able to read my extensive API documentation and just figure it out. So go ahead and click into this draft that you can see it's still generating the script or the prompt for this whiteboard infographic. And when it's done, Blotto will actually automatically refresh the page. So you can see the infographic draft. So this is the draft and then it's going to render the final version. So that will take probably another 20 seconds. But if you go back to cloud code, it actually gave us the preview here. So this is actually the preview. Okay. So here one thing is if you click this link, the link will actually not be valid because there's too much stuff here. So after the JPEG, all of this like timestamp and stuff shouldn't be clickable. So that's why it's not popping up. If you kind of remove all of that junk, so you just see like the JPEG extension at the end and then click enter, then you will see the infographic template. But we can also ask Claude code to clarify and just say that link didn't work. Could you check it again and output just the link? And let me just go back to our LinkedIn post as well. So yeah, so this post was about Kimmy and Open Clock Combining. The company behind Kimmy is called Moonshot AI. So that's why it's referencing that. And here's the link. So let's go ahead and click that. Okay, that is the clean link. So it works. Okay, so basically in a matter of 1 minute, Cloud Code took our LinkedIn post draft that we put in our brand voice and then generated a whiteboard infographic to go along with it. And if you're wondering if these types of posts do well, uh this is a post I made about 18 hours ago using this Cloud Code system, using one of the infographic templates, and it's almost 10,000 views now. And I posted this like late last night. Okay, so now we have an AI social media assistant that is creating copy in our brand voice. Obviously, we can beef up this brand voice guide. This was just the starting point. Uh, it can also make visuals. So, I just showed one infographic template, but there's actually all kinds of visuals you can make. So, if you click create new video up here, you'll see like all of these different templates. You can make AI videos with AI voices, 11 Labs voiceovers. You can make image slideshows like this for Tik Tok. You can make carousels for Instagram, quote cards, all kinds of different infographic styles like this. This anime one is one of my favorite. I think I'm going to start doing those for LinkedIn. Product scene photos. So, if you have a product reference image and you want it like in a certain scene, you can use this templates. If you have existing footage, uh you can use this template which will generate captions and B-roll. And if you have existing images or video clips, you can also feed them in here and it will create a social media ready video with a title with subcaptions with optional music as well. And what was really cool is Claude actually decided which template to use based on our request. We said, "Hey, make an infographic to accompany this and it chose the infographic template that it thought would be a great fit for this topic." Okay. Now, the last step is like how do you actually publish this to social media? So, what we're going to do first is connect our social media accounts to Blotato. So, again, go back to go to settings, go to accounts, and then click login with your social account. So, I'm going to log in to Twitter here. Okay. And you should see the connected accounts down at the bottom here. And I'm also going to log in to link. Okay. So, now we have both accounts here. By the way, you can also post the LinkedIn company pages. So, just so you know. And now, let's go back to Claude Code. Okay. So, let's just say we make some edits here. Like, oh, I don't like all these hashtags at the bottom. Okay. Make sure to save the file. So if there's like a little dot, maybe that was too quick. But let's say you make some edits. There'll be a little dot here. That means it's unsaved changes. So make just go ahead click save just like you normally would. And then here's the Twitter draft. And now we want to tell Cloud Code to post this on social media. And we can be somewhat free form with it. So let's say okay, I'm ready to post now. Let's say for LinkedIn, schedule it for tomorrow morning with an infographic. And let's say for Twitter, no infographic, but schedule the thread, right? So in the draft, it gave us a single tweet version or a fourpart Twitter thread. Let's go with a thread. Schedule the thread. I don't know what today is. What is today? Tuesday. Okay. Uh schedule a thread Thursday morning. Okay. So now what should happen is cloud code is first checking what social accounts we have connected. So go ahead and click yes. So it's going to fetch like, oh, you have this Twitter account or you have this LinkedIn account. By the way, you can have multiple accounts of the same platform. You can have multiple Twitter accounts connected, multiple Facebook accounts connected, multiple Instagram accounts connected. So, that's really handy. Once it fetches the accounts, then it's going to like create the request that's going to publish it to social media or in this case schedule it in advance. Okay. Okay. So, now it's scheduling now LinkedIn for tomorrow with the infographic, Thursday for Twitter, and no image. Okay. It says both scheduled, but let's go check. So in potato we can check our calendar right on the lefth hand side click calendar click upcoming posts and boom and this is by the way a spare account that's why everything's empty nothing's connected but yeah this was just pub scheduled right this looks like a very legit um LinkedIn post now you may be wondering about the m dashes and stuff like that but obviously you can put humanize prompts within your brand voice guidelines to get rid of some of that and I actually go through that in my more advanced version of this tutorial and then here's the Twitter thread. So, it's it's um segmented like this because it's going to be one tweet at a time, but all of them in the same Twitter thread. And let's just talk about other types of prompts you can run. So, like what else can you do with this MCP server? So, you can create the posts, right? It can help you draft the copy. It can also analyze YouTube, Tik Tok videos, podcast URLs. So, let's go to YouTube real quick. Let's grab like the latest Hormosi video or something. Okay, this one. It took 36 years to realize what I'll tell you in 26 minutes. So, let me just copy the URL of this. Okay. And then let's go back to Cloud Code. Okay. And say I analyze this YouTube video. Boom. And what this is going to do is use the built-in Blot tool to extract transcripts from YouTube videos, Tik Tok videos, etc. You can see the MCP tool call here. Okay. So, this is the tool call and this is really neat because you can take a video that is super awesome, right? Summarize it into bullet points for Instagram tailored to your audience like why this particular topic is interesting or different or relevant to your particular audience. Add your tweaks to the content, your human level tweaks, and then publish everything out. Okay. And here's the breakdown of the YouTube transcript. Literally in less than 30 seconds pulled the entire transcript and the key arguments. Now, let's make an Instagram carousel. Let's say write an Instagram carousel based on this YouTube video. then create it with potato and schedule it for I don't know what day it is tomorrow evening. Okay, so this is getting a little more complicated but it's so cool because you can just talk freely in plain language like you are talking to a person like hey we're I I just shared this YouTube video with you. Yeah, it's super cool. Let's make an Instagram carousel out of it and like put in some of our language, some of our philosophy in there. Create a Instagram carousel visual to accompany it and then schedule it for publishing. like this is how you would get work done. This is how you would interact with someone to communicate this instruction. And the beautiful thing is you can do all of this within cloud code. And that is why I really wanted to showcase the power of MCP even in this beginner tutorial because if you didn't see this, you might think, oh, cloud code, okay, it writes cool stuff. I mean, so does chat GPT, so does Gemini. Like what actually makes it different or powerful? But now with this MCP integration, you can do all kinds of crazy things, things that you are probably doing manually right now. Like after this post is published, are you updating an table or Google Sheets with the posts links? Like cloud code can do that. You can hook up an MCP to air table to notion to your Google Workspace to your CRM and just have cloud code operate on the same data that you operate on. Like it can read the data, it can obviously be careful, but it can write to the data. can change the data in your systems. Okay. And now it's done with the carousel images and it generated the slides one by one. That's why you see multiple links here. So if we open one of these links, right? So this is the first carousel slide. This is probably the second carousel slide. Okay, great. And then oh, so it didn't schedule it to Instagram because I don't have my Instagram connected. That makes sense. I'm not logged into Instagram on this computer. But it would work similarly like before, right? Like we would just go here, check it out in our calendar, and it would appear here. So this paradigm is truly the closest I have ever seen, experienced or built for myself that that comes close to a true AI assistant for social media. You can tell it to do things. It can research topics. It can write drafts in your brand voice. It can do quality checks, which I cover in advanced tutorials. It can create the visuals accompanying your post. And it can schedule and publish everything on social media. It can even update your systems with the published post URL once your post goes live. Feed it back into Air Table. feeded back into Google Sheets. So, just to summarize everything we talked about. So, first we set up our Claude accounts and again many people ask me about pricing. I'm very happy on the Max plan. It seems expensive but when you realize how many other AI tools you can stop paying for, I think it's well worth it. Then we installed Visual Studio Code. This is in my opinion the easiest way to get up and running with Cloud Code. So, you don't have to open a scary looking terminal. The other benefit of Visual Studio C code is it makes it super easy to review what cloud code is doing, what it's thinking, the drafts, you know, so you can e you can edit everything here. Just think of it as your own Google doc, okay? Or you can have cloud code edit it and you just watch it make the changes. So that is one really big advantage of using an editor like Visual Studio Code. Even though it sounds scary, it's really not that bad. Just think about it as a Google doc where you're going to be collaborating with Cloud Code and reviewing its work. Okay? And then we installed the claude code official extension. Right? So that's this little orange button here. If you're on Mac, you can just click this button. It'll open new sessions. For my Windows, I click this plus button on the top right corner. Um we talked a little bit about some slash options. So switching model um edits like the permissions and stuff like that. And then we asked Cloud Code what it can do, right? So we started with having Cloud Code write some copy, which was fine. We added some minimal brand voice guidelines. You can you can beef that up significantly. And then we set up your very first MCP server in this Blot for social media visual generation as well as publishing and managing your entire content calendar. And the beautiful thing is once Cloud Code has that MCP server integration, it can do all of these things as a true as a true AI social media assistant should be able to do. It should be able to research any topic you throw at it. It should be able to write posts in your brand voice where you are just reviewing and tweaking and fine-tuning as a final step. It should be able to create visuals such as faceless videos, infographics, carousels for Instagram, slideshows for Tik Tok. And an AI social media assistant should be able to actually schedule and publish all of your content to social media. If you have any questions, please drop them below. Hit like, drop a comment. I'd love to hear from you. And there is a more advanced version of this tutorial. So check out the entire series.

## Timed Segments

[0:00] If you&#39;re not using Cloud Code right
[0:01] now, you are falling behind millions of
[0:03] other people that are using it to get
[0:05] real work done, automate tedious things,
[0:07] learn things 10 times faster, start new
[0:09] businesses, and so much more. It is the
[0:12] AI tool of the year. Imagine Chat GPT,
[0:15] but with the ability to actually get
[0:17] real work done. That is Claude Code, and
[0:19] I&#39;m so excited today to walk you through
[0:21] exactly how to install it for beginners
[0:24] who are absolutely non-technical. We&#39;re
[0:26] going to walk through setting up your
[0:27] first MCP server and we&#39;re going to walk
[0:29] through building your very first AI
[0:31] social media assistance. This is going
[0:33] to be a comprehensive tutorial for
[0:35] absolute beginners. You do not need any
[0:37] technical background. And I wanted to
[0:39] really walk you through a realworld
[0:41] practical use case, which is why we&#39;re
[0:43] going to plug in an MCP server as well
[0:45] and build out your very first AI social
[0:48] media assistant. Okay, step one is to
[0:50] create a claude.ai account. So, go
[0:52] ahead, go over to claw.ai. If you don&#39;t
[0:55] have an account already, go ahead and
[0:57] sign up for an account. Then on the
[0:58] bottom left corner, this is where you
[1:00] can access your settings. So go ahead
[1:02] and click settings, right? Click billing
[1:04] on the lefth hand side. And many people
[1:06] ask me which plan should they pay for.
[1:08] If you&#39;re absolutely new to Claude,
[1:10] you&#39;re not sure yet if you&#39;re going to
[1:11] use it a lot. Just start with the pro
[1:13] plan, $20 per month. Keep in mind though
[1:15] that you will probably hit the usage
[1:18] limits pretty quickly, especially if you
[1:20] have AI calling all different types of
[1:22] tools that you use such as notion, air
[1:24] table, Google sheets, etc. I am
[1:26] personally on the max plan at $200 per
[1:29] month. I have never hit the usage limit
[1:31] and I&#39;m super happy with that plan, but
[1:33] you will naturally progress. So, just
[1:35] start on the lowest least commitment
[1:36] plan. And if you end up using Cloud Code
[1:39] significantly, which I suspect you will,
[1:41] you&#39;ll realize you can cancel many other
[1:43] tools and just invest in Cloud Code.
[1:45] Once you&#39;ve set up your cloud.ai
[1:47] account, go ahead, go to
[1:49] code.claude.com.
[1:51] Now, you&#39;ve probably seen many tutorials
[1:53] that reference this section, and it&#39;s
[1:55] basically a kind of a scary looking
[1:57] documentation that shows you all the
[1:59] different ways you can install Cloud
[2:01] Code. I&#39;m going to show you the
[2:03] beginnerfriendly option, but if you are
[2:05] technical, you know your way around a
[2:07] terminal, this is the easiest place to
[2:09] get started. You just copy one of these
[2:11] commands depending on your operating
[2:12] system. If you&#39;re on Mac, Linux, or
[2:14] Windows Subsystem for Linux, on Windows,
[2:16] click this one. But you&#39;re doing Windows
[2:18] PowerShell, click this one. However, for
[2:20] most people watching this video, this is
[2:22] already intimidating. So, I&#39;m going to
[2:24] suggest a slightly different approach
[2:26] that I think will be much more
[2:27] productive. If you are absolutely
[2:29] non-technical new to this stuff, just go
[2:31] to Google or your search bar and type in
[2:33] visualstudio code. The first result
[2:35] should be this code.visisualstudio.com.
[2:38] Go ahead and click that and download it
[2:40] for your operating system. Boom. Click
[2:42] download. Okay. So now the download is
[2:44] starting. Go ahead and click it to start
[2:47] the real download. I accept. Go ahead.
[2:49] Next. Next. Just choose all the default
[2:52] options here. And of course, it&#39;ll look
[2:54] a little bit different if you&#39;re on Mac,
[2:55] but it&#39;s essentially the same
[2:57] installation process. At the end of the
[2:58] wizard, it should say launch Visual
[3:00] Studio Code. So, go ahead and click
[3:02] finish. And if it didn&#39;t launch
[3:03] automatically, just open up your app
[3:06] navigation and type in Visual Studio
[3:09] Code. This is the icon. So, it should
[3:10] look like this. So, go ahead and open
[3:12] that up. Okay. So, just to recap, we&#39;ve
[3:14] set up our cloud.ai account. We&#39;ve
[3:16] installed Visual Studio Code. And now
[3:18] we&#39;re going to install the official
[3:20] Claude Code extension for Visual Studio
[3:22] Code. You can think of it an extension.
[3:24] It&#39;s kind of just like a plugin into
[3:25] Visual Studio Code to give it
[3:27] superpowers. And if you&#39;re wondering
[3:28] what this Visual Studio Code thing is, I
[3:31] kind of call it a Google Doc, but for
[3:34] developers, or at least traditionally,
[3:35] you would be a developer to use this
[3:38] kind of tool. But the reason I recommend
[3:39] it, even if you&#39;re non-technical and
[3:41] you&#39;re just a beginner starting out, is
[3:43] because it makes it so much easier to
[3:45] review the work that Cloud Code is
[3:47] doing. I&#39;m going to show you in a bit in
[3:49] this tutorial, but when you ask Cloud
[3:51] Code to do something and it produces
[3:53] different outputs or even temporary
[3:55] plans, it&#39;s way easier to use an editor
[3:58] to view the output or the thinking
[4:00] process of cloud code than to use a
[4:02] terminal. Okay, so it should look like
[4:04] this now. And on the left sidebar,
[4:07] actually, hang on one sec. I I have to
[4:08] bring up my left sidebar. On your left
[4:10] sidebar, there should be a couple
[4:12] different icons. Look for the one that
[4:14] says extensions. It should look like
[4:16] three cubes. I hid it from my normal
[4:19] view. Um, but if you don&#39;t see it, you
[4:20] can always go to view at the top and
[4:23] then click extensions here. Okay. Then
[4:25] we&#39;re going to search for Cloud Code.
[4:26] Should be the first result here. And go
[4:28] ahead and install this. Make sure it has
[4:30] over 4 million downloads here. So,
[4:32] you&#39;re downloading the correct
[4:34] extension. If it downloaded correctly,
[4:35] it should look like this. uninstall,
[4:37] right? Because that means it&#39;s
[4:38] installed. Okay? And then you should see
[4:40] this orange icon in the top right
[4:42] corner. So go ahead and click that. So
[4:44] when you click that orange icon in the
[4:46] top right corner, Cloud Code will open
[4:48] and it will open in the folder that you
[4:51] have open here in Visual Studio Code. If
[4:53] you want to add multiple folders for
[4:55] Cloud Code to be able to like easily
[4:57] operate on and you want to see what&#39;s
[4:58] happening in those folders, on the left
[5:00] hand side, this is where the files and
[5:02] folders are going to appear. Um, you can
[5:04] do something like for example file open
[5:07] folder or you can add folder to
[5:09] workspace if you want to add multiple
[5:11] folders to this workspace or you can
[5:14] open a different folder containing a
[5:15] different project. In this case, my
[5:17] folder is completely empty because we&#39;re
[5:19] just going to start from scratch. But if
[5:20] it&#39;s your first time, I recommend just
[5:22] creating an empty folder and then
[5:23] opening that. That way, you know,
[5:25] everything we create will just be stored
[5:27] there and it won&#39;t impact anything else
[5:28] on your computer. Once you&#39;ve gone ahead
[5:30] and created that folder, then you&#39;ll
[5:32] want to open it here. So go to file,
[5:34] open folder, and then find the folder
[5:36] that you just created. And it will look
[5:37] like this. Again, it&#39;s empty because we
[5:39] don&#39;t have any files yet. So go ahead.
[5:41] Once you&#39;ve done that, let&#39;s go ahead
[5:42] and use cloud code. So let&#39;s just ask it
[5:45] what can you do. This is one of my
[5:46] favorite tips working with any AI tool.
[5:48] I like to just literally ask the tool
[5:50] what it can do. It can walk me through
[5:52] exactly how it&#39;s useful. So it can be
[5:54] used for code development. It can be
[5:56] used for researching the web. It can be
[5:58] used for planning. And it even told us
[6:00] to type slashhelp if we want more
[6:02] information on available commands. So
[6:03] let&#39;s start typing that slash and then
[6:05] the menu pops up. Okay, so this is
[6:07] really neat. So these are additional
[6:09] commands that you can invoke within
[6:11] cloud code. We&#39;re not going to go
[6:13] through all of them today, but it&#39;s just
[6:14] handy to know that that&#39;s where this is.
[6:16] For example, if you want to switch the
[6:18] model to a different model, you just
[6:19] type /model and choose the one that you
[6:21] want to work with. In my case, I almost
[6:23] always use opus 4.6 six. Unless I&#39;m
[6:26] doing really, really easy stuff or if I
[6:29] don&#39;t want to eat up my usage limits,
[6:31] then I might switch to a lesser model.
[6:33] You can also tell Claude exactly how
[6:35] often it should ask you for permission.
[6:37] So, the default is it will ask you any
[6:39] time before it edits files. But if you
[6:42] want to change that, you can click it,
[6:43] right? So, instead, it could be in
[6:45] planning mode. If you just want to spend
[6:46] most of your time planning, you can,
[6:48] this is the default mode. It&#39;ll ask you
[6:49] before any edits or you can have it edit
[6:52] files automatically. Okay, so let&#39;s get
[6:53] started just diving in and using claw
[6:56] code. So let&#39;s ask it to do something
[6:58] related to social media marketing. Um
[7:00] let&#39;s say research the latest Kimmy claw
[7:04] open claw tool and write a viral
[7:08] LinkedIn post output the draft. Okay.
[7:12] And now what&#39;s happening is claude code
[7:14] is thinking. So the first thing it did
[7:15] is asked us for permission to search the
[7:17] web automatically. So it&#39;s asking allow
[7:20] searching for this query. So this means
[7:21] claude code is going to research the
[7:23] internet about this Kimmy claw AI tool
[7:25] in 2026. You can either click these
[7:28] options or you can just press the
[7:29] number. So I want to say yes. So I&#39;m
[7:31] going to press one. If you want to give
[7:33] it additional context, you can tell
[7:35] Claude what to do instead by typing here
[7:37] and then pressing enter. In this case,
[7:39] let&#39;s just click one for yes. It&#39;s going
[7:41] to keep asking to allow the search. And
[7:44] what&#39;s really cool is you can see its
[7:45] thinking process. So it searched this.
[7:47] You can see it&#39;s green here. So it was
[7:49] successful. You can click on this to
[7:52] actually see what it searched. Like this
[7:54] is the output of running that query. And
[7:57] if this is hard to read, don&#39;t worry. So
[7:59] go to I think it&#39;s view. Go to view and
[8:01] then click word wrap. So this will now
[8:03] wrap everything in your browser. So it&#39;s
[8:05] a little bit easier to read. Um but it&#39;s
[8:07] really cool because you can see claw
[8:09] thought process at each step and verify
[8:12] that it&#39;s doing the work that you want
[8:14] at each step. So here again, it&#39;s asking
[8:16] us to fetch from this URL. I&#39;m going to
[8:18] say yes, allow these domains while we&#39;re
[8:21] doing research. And you may have noticed
[8:23] on the left side, a file was actually
[8:25] created in the process. So if you go
[8:27] ahead and click that settings.local
[8:29] JSON, notice how it&#39;s under this
[8:31] directory.Cloud.
[8:32] Let me zoom in here. Okay. So what this
[8:34] means is cloud code remembered the
[8:36] permissions that we granted. Remember
[8:38] when I said I&#39;m going to allow it to
[8:40] fetch the web at this domain for this
[8:43] project. So now that we have a
[8:45] permissions file, Cloud Code will know
[8:47] if I ever want to go to this website or
[8:49] this website, I&#39;m allowed to do so. And
[8:51] this permissions file will only apply to
[8:54] this project. So you can have a
[8:56] different set of permissions for one
[8:57] project and a different set of
[8:59] permissions for another project as it
[9:01] makes sense. Okay, now Claude is writing
[9:03] a bullet point draft. And he&#39;s asking,
[9:06] would you like me to adjust the LinkedIn
[9:08] post draft? Looks good as is. more
[9:10] personal story, shorter and punchier,
[9:12] more technical depth. Let&#39;s make it
[9:14] shorter and punchier since this is
[9:15] LinkedIn. And here&#39;s the draft. So, it
[9:17] actually did output the draft over here.
[9:20] So, LinkedIn post draft. And there&#39;s a
[9:22] separate um directory on your computer
[9:25] where it&#39;s going to store its plans. But
[9:27] you can always click on this or we can
[9:29] ask Claude to actually create the draft
[9:31] within this project. So, I&#39;ll do that in
[9:33] a second. But keep in mind, you can
[9:34] click a lot of these links, right? So,
[9:36] it&#39;ll open the corresponding file, which
[9:38] is really handy. Okay. So here&#39;s our
[9:39] LinkedIn post draft. This is the plan.
[9:42] I&#39;m just going to say no keep planning
[9:43] for now so we can take a look at it.
[9:44] Okay. So here&#39;s the plan on the lefth
[9:46] hand side. But let&#39;s say we want to
[9:48] write this LinkedIn post here in our
[9:51] project file so that we can go back to
[9:53] it at any time. So let&#39;s go ahead and
[9:54] ask claude. Let&#39;s first of all switch
[9:56] from plan mode to ask before edits mode
[9:59] and say write uh let&#39;s say create a file
[10:02] in this project containing the LinkedIn
[10:05] draft. also create another file with a
[10:07] draft for Twitter. So, two slightly
[10:10] different writing styles since Twitter
[10:11] has a strict character limit unless you
[10:13] have a premium account. So, this will
[10:15] create two files in this project. One
[10:17] with our LinkedIn draft. Okay, so here
[10:19] is the draft. I&#39;m going to zoom out so
[10:22] it&#39;s a little bit easier to see. And
[10:23] this mode that just came up, what this
[10:25] means is Claude is asking us permission
[10:28] to write this file. So, allow write to
[10:30] this file. And it&#39;s showing us the
[10:32] before and after. So this left panel
[10:34] looks empty because the file didn&#39;t
[10:36] exist. And the right side of this is
[10:38] showing the post that Claude will be
[10:41] writing. So here I&#39;m going to say yes,
[10:42] allow all edits this session, which
[10:44] means if I want Claude to tweak this
[10:47] draft, it&#39;ll go ahead and do that
[10:48] without asking me for permission every
[10:50] single time. And notice how it&#39;s
[10:51] switched now from ask before every edit
[10:54] to edit automatically because of what I
[10:56] answered when it asked for permission.
[10:58] Okay, so now we have two files, right?
[11:00] So just click on these, right? LinkedIn
[11:02] Twitter draft. I&#39;m going to close the
[11:03] previous planet made as well as the
[11:05] settings. We don&#39;t really need to look
[11:06] at that anymore. But yeah, this is why
[11:08] I&#39;m kind of um equating the Visual
[11:11] Studio code to Google Doc for editors.
[11:13] Um so traditionally these files would
[11:16] contain code, right? And editors would
[11:18] and coders would edit this code to build
[11:20] their apps. But you can also use this
[11:22] interface to quickly scan and review the
[11:26] outputs from cloud code. So here, Cloud
[11:28] Code wrote our LinkedIn draft regarding
[11:31] OpenClaw and Kimmy and then it also
[11:33] wrote a Twitter draft and in fact it
[11:36] wrote a Twitter thread. Tweet one, tweet
[11:38] two, tweet three, tweet 4. So if you
[11:39] want to make any edits before this goes
[11:41] out, you can easily do that in here or
[11:44] you can ask Claude to do it for you. But
[11:46] the nice thing is all of the files are
[11:48] stored here in this project directory.
[11:50] I&#39;m going to show you just a couple more
[11:52] prompts so you can get comfortable using
[11:54] Claude code. So, for example, let&#39;s say
[11:56] make sure to fact check all this
[11:59] information since Kimmy Claw is brand
[12:03] new point. It&#39;s going to ask permission
[12:05] again for a bunch of websites and I
[12:07] granted it access. Okay. And after it&#39;s
[12:09] doing its research and after I asked it
[12:11] to fact check this, it said a couple
[12:14] things need correcting. So, some things
[12:16] like partially true, misleading, right?
[12:18] So, it&#39;s going ahead and edit our drafts
[12:20] based on my request to fact check this
[12:23] post. And here&#39;s the conclusion. All
[12:25] other claims checked out across multiple
[12:27] sources, which is great. Now, there can
[12:29] always be a situation when multiple
[12:31] sources are wrong, but at least you have
[12:34] kind of done. But if multiple credible
[12:37] sources are reporting the same thing,
[12:39] it&#39;s much less likely that you&#39;re
[12:41] reporting something incorrect. Now,
[12:44] let&#39;s say you want to take this to the
[12:45] next level, like how do you incorporate
[12:46] your brand voice, your own marketing
[12:48] assets? The beautiful thing about Cloud
[12:50] Code and many other generative AI tools
[12:53] is you can just ask them the best way to
[12:55] interact with them so that they can help
[12:56] you accomplish your goal. So let&#39;s just
[12:58] ask Claude Code what would be the best
[13:00] way to incorporate my brand voice in
[13:03] these drafts as well as all drafts
[13:06] moving forward so that you don&#39;t have to
[13:08] repeat this process again and again. And
[13:10] Claude&#39;s answering we should create a
[13:12] brand voice file in our project so that
[13:14] it can reference it every time it writes
[13:16] content. And now it&#39;s going to build
[13:18] that guide by asking me a couple of
[13:20] questions about my brand voice. Um, I
[13:23] would say maybe thoughtful and
[13:24] analytical. There&#39;s multiple questions
[13:26] here. So, tone, CTA, and examples, so
[13:29] make sure to click through all of them.
[13:30] How do you typically end posts? I like
[13:32] to end it with a question. And then
[13:34] examples. Do you have existing LinkedIn
[13:37] posts? I do somewhere, but uh, let&#39;s
[13:39] just say for now, no. Build from
[13:41] scratch. Obviously, if you have your own
[13:42] content, that&#39;s great. Just click yes.
[13:44] It&#39;s asking some more follow-up
[13:45] questions. I&#39;ll just say mix of the
[13:47] above. What should your posts never
[13:49] sound like? No. Sometimes I do like to
[13:52] say crushing it. So I&#39;ll just say and
[13:54] the key point I really want you to learn
[13:56] is that you can just ask Claude code how
[13:58] do I do this? You don&#39;t have to search
[14:00] for the perfect YouTube tutorial to
[14:03] follow along. Claude Code can actually
[14:05] teach you step by step or you can
[14:07] brainstorm with it interactively. Come
[14:09] up with a plan. Give it feedback like h
[14:11] I don&#39;t think this sounds like me. This
[14:13] sounds more like me over here. like just
[14:15] keep going with that interactive
[14:16] feedback and realize that instead of
[14:18] your instead of your default being oh
[14:20] let me find a tutorial that walks me
[14:22] through this. Your default mode of
[14:23] thinking should be let me ask claude
[14:25] code and see what we can do. Okay. And
[14:27] if you scroll up here you can actually
[14:28] see the brand voice guide it wrote. You
[14:30] may have noticed the file it added over
[14:32] here on the left side. Let&#39;s go ahead
[14:33] and open that up. And obviously this is
[14:35] a very light brand voice file but you
[14:37] can add a lot more to it. So, I&#39;m just
[14:39] giving you kind of the basic skeleton to
[14:41] get started, and you can add a ton more
[14:43] on top of this. So, one neat thing here
[14:45] is Claude&#39;s saying, &quot;For future content,
[14:47] I&#39;ll reference the brand voice guide
[14:49] automatically.&quot; You can also tweak at
[14:51] any time to refine the voice. But how
[14:52] does that actually work? So, let&#39;s go
[14:54] ahead and ask Claude, how does this
[14:56] actually work? If I close this
[14:59] conversation, how will you know to
[15:02] reference the brand voice guide
[15:04] automatically? Okay, and this is really
[15:05] interesting. and Claude actually backed
[15:07] up on its answer which I figured it
[15:09] would do but this is a really useful
[15:11] experience and experiment to go through
[15:14] um because there also always keep in
[15:15] mind that AI so question it be like how
[15:18] would this work can you walk me through
[15:20] how it would work and now Claude is
[15:22] saying if you close this conversation I
[15:24] start fresh with no memory of this
[15:25] session but I do have a persistent
[15:28] memory file that gets loaded it&#39;s
[15:30] currently empty if I save a note there
[15:32] pointing to your brand voice then I&#39;ll
[15:34] see it every time so now it&#39;s going to
[15:35] set it up. So, it went ahead and updated
[15:38] its memory file here and it summarized
[15:40] exactly what I did here. So, that was a
[15:42] really nice example which honestly I
[15:44] didn&#39;t even plan, but it worked out
[15:45] perfectly. Right? The key thing to
[15:47] always understand is you&#39;re still
[15:49] talking to AI at the end of the day,
[15:51] which means it can be wrong. It can have
[15:53] outdated knowledge. It may hallucinate.
[15:55] It may put emphasis on the wrong context
[15:58] instead of the right context for your
[15:59] situation. And so, just as a habit,
[16:02] always ask why. How does that work? Walk
[16:04] me through it. Why? If something doesn&#39;t
[16:06] add up or seem right or doesn&#39;t make
[16:08] sense to you, just dig in deeper. I
[16:10] really want you to embrace cloud code as
[16:13] a partner, but it can also be wrong. So
[16:16] like it is important that you understand
[16:18] what is going on. And the more you
[16:20] understand how to work with cloud code,
[16:22] the more productivity and leverage
[16:24] you&#39;ll be able to gain working with it.
[16:26] Okay, now the next step in our agenda,
[16:28] we have completed all of these, which is
[16:30] great. And now we&#39;re going to set up our
[16:32] very first MCP server and launch our AI
[16:35] social media assistance. Now, I was
[16:37] debating whether I should include MCP in
[16:39] a beginner tutorial like this. But the
[16:41] reason why I think it&#39;s so important is
[16:43] because understanding MCP and how to
[16:46] connect MCP will allow you to use Cloud
[16:49] Code to perform realworld tasks. What I
[16:52] mean by this is, okay, now we have two
[16:54] draft social media posts. Let&#39;s say
[16:56] we&#39;re happy with these drafts. Okay, but
[16:58] what do you do next? How do you actually
[17:00] post them to social media? I mean, you
[17:02] would have to copy and paste this,
[17:04] right? Open up Twitter or open up some
[17:06] kind of scheduler tool for social media.
[17:09] Copy paste each of these things. This is
[17:11] a Twitter thread, by the way. So, you&#39;re
[17:12] going to copy paste tweet one, tweet
[17:14] two, tweet three, tweet four, and this
[17:16] alternative version, you&#39;re going to
[17:17] have to copy paste each one of those
[17:19] into your social media scheduling app or
[17:21] into Twitter directly and then post it.
[17:24] And then you&#39;re going to open this
[17:25] LinkedIn draft, copy paste this, and
[17:27] then post it to LinkedIn. You may also
[17:29] want to create a visual for this
[17:31] content, right? Most LinkedIn posts, by
[17:33] the way, have a visual attached, whether
[17:36] it&#39;s an image or video. So, how do you
[17:38] do that? You would normally open up
[17:39] another tool like Canva or Adobe or
[17:42] whatever you use to make nice
[17:43] infographics and images. You&#39;d open that
[17:45] up separately and then grab everything
[17:48] and upload it to LinkedIn. Then grab
[17:50] everything and upload it to Twitter. So,
[17:51] the amazing thing about MCP is all of
[17:54] that tedious work you&#39;d have to do
[17:56] separately, you can now do all in one
[17:58] place. And all you have to do is tell
[18:00] Claude in plain English. Hey, I want to
[18:03] make an infographic accompanying this
[18:05] post. Hey, this post is ready to go.
[18:07] Let&#39;s post it on Twitter or let&#39;s
[18:09] schedule it a week out from now. You can
[18:11] do all of those things within Cloud
[18:12] Code. And that is why I&#39;m so excited to
[18:14] teach folks how to use Cloud Code
[18:16] because you can actually get real work
[18:18] done. It&#39;s not just coming up with a
[18:20] post, but you have to do everything else
[18:22] yourself, right? Because that&#39;s not
[18:24] super efficient either. What I&#39;m going
[18:25] to show you, you&#39;re going to use cloud
[18:27] code. It&#39;s going to write the post. You
[18:28] should review it, obviously, add your
[18:30] human voice, your perspective, things
[18:32] that are unique to you. And then within
[18:33] Cloud Code as well, you can make visuals
[18:35] and post or schedule them out to all of
[18:38] your social media platforms without ever
[18:40] having to leave Cloud Code. But to do
[18:42] this, we need to learn to integrate at
[18:44] least one MCP. So, real quick, what is
[18:46] MCP? The simple way I like to describe
[18:49] it is it allows cloud code to interact
[18:52] with the apps you actually use. So if
[18:55] you use email, if you use air table, if
[18:57] you use notion or here, Google doc, MCP
[19:00] allows AI to efficiently interact with
[19:03] the apps that you actually use on a
[19:05] day-to-day basis. Now, full disclosure,
[19:07] this is an app I built as a content
[19:09] creator. I&#39;ve grown from zero to 1.5
[19:11] million followers without a team and
[19:13] without budget. And the only way I&#39;ve
[19:15] been able to do that is to figure out AI
[19:17] and automation to scale myself. And I
[19:20] built an MCP server so that I could do
[19:22] all of this within cloud code. So go to
[19:24] the website blot.com, click login or
[19:27] start your free week. On the bottom
[19:29] left, click settings. Okay. And this is
[19:31] where you&#39;re going to be able to grab
[19:32] your API key. Now the API key is a paid
[19:35] feature here. I know that&#39;s not amazing,
[19:38] but it significantly helps me to reduce
[19:41] spam. I do have a no questions asked
[19:43] money back guarantee. So like seriously,
[19:45] if you&#39;re not happy with this for any
[19:46] reason, you can just get a refund. But I
[19:48] do have a payw wall up to reduce spam
[19:51] posts. If you&#39;re logging in for the
[19:52] first time, you won&#39;t have an API key
[19:54] generated yet. So there will be a big
[19:56] button here that says generate API key.
[19:58] So go ahead and click that. Then the
[20:00] second step is to copy the setup
[20:02] command. So go ahead and click that.
[20:04] Then go over to cloud code and paste
[20:06] that in there. So this is the command.
[20:09] If you have cloud code installed via
[20:11] terminal already before watching this
[20:13] video, then you can just take this
[20:15] command and run it in your terminal and
[20:17] that will work. However, in this video,
[20:19] since I focused on installing cloud code
[20:21] via Visual Studio Code, this command
[20:24] actually won&#39;t work. So, we need to add
[20:26] just a little bit extra to help cloud
[20:28] code out. So, we&#39;re going to take this
[20:30] add the following MCP server as if you
[20:32] were running cloud MCP ad and add it to
[20:35] user scope, meaning it&#39;s going to be
[20:37] used and available for multiple projects
[20:40] that you may have in cloud code. And
[20:41] we&#39;re telling Cloud to create the file
[20:43] if it doesn&#39;t exist yet. So, go ahead
[20:45] and copy this or screenshot this and add
[20:48] it to the beginning of your prompt.
[20:49] Okay, so now your prompt should look
[20:51] like this. And then go ahead and click
[20:53] enter. It&#39;s going to ask for a bunch of
[20:54] permissions. So, it&#39;s trying to see if
[20:56] that file already exists. Okay, the file
[20:59] exists. Great. So, now it&#39;s going to add
[21:02] it to the file, which is great. Okay.
[21:04] And now Claude is verifying that it was
[21:06] added correctly, but it also opened the
[21:08] file here. So, it should beclaude JSON.
[21:11] And the nice thing about doing it this
[21:12] way, if so, if you don&#39;t add this
[21:15] initial part, cloud code will try to set
[21:18] up your MCP server in a different file.
[21:21] And it can lead to confusion because
[21:23] you&#39;re going to have different MCP
[21:24] servers in your global user scope and
[21:27] then other MCP servers in your personal
[21:29] project. If you&#39;re brand new to this,
[21:31] like you&#39;re a beginner to this, that can
[21:32] just lead to extra confusion. For any
[21:35] future MCP servers you want to install,
[21:37] you can also add this thing at the
[21:39] beginning and it will install all of
[21:41] them at the same scope in the same
[21:44] configuration file. So you can just see
[21:45] all of them and manage all of them
[21:47] there. Okay, let&#39;s go back to cloud
[21:48] code. And it says done. The Blueot MCP
[21:50] server has been added. Let&#39;s go look for
[21:52] it. So, this is the cloud J file. Should
[21:55] scroll down. There should be a section
[21:56] called MCP servers potato. Here&#39;s the
[21:59] URL. And then that should be your API
[22:01] key. If for some reason you&#39;re you
[22:03] didn&#39;t uh paste your API key or it
[22:05] didn&#39;t copy over, you can copy your API
[22:07] key from your potato settings. Okay. And
[22:09] then paste it in here if for some reason
[22:11] it did not copy over. And we will need
[22:13] to restart Cloud Code for the new MCP
[22:16] server to be picked up. Okay. So, it&#39;s
[22:18] telling us this right here. To do that,
[22:20] just click the plus button in the top
[22:22] right corner. This will start a new
[22:23] session. Um, I&#39;m on Windows, but if
[22:26] you&#39;re on Mac, uh, you should also be
[22:28] able to click this button, this orange
[22:30] icon, and it will open a new cloud code
[22:32] session. Let&#39;s go ahead and click that.
[22:34] Okay. And yeah, let&#39;s try using our AI
[22:36] social media assistant. So, let&#39;s say
[22:39] make a whiteboard infographic from the
[22:42] LinkedIn draft. Now, remember when I
[22:44] said the purpose of installing an MCP
[22:46] server, even though this is an absolute
[22:48] beginner tutorial, is because we want
[22:50] Cloud Code to be able to do useful
[22:53] things. It&#39;s like, it&#39;s great that it
[22:54] can write the copy. I mean, chat GPT can
[22:57] also do that. What about creating the
[22:58] visual? What about actually scheduling
[23:00] it and publishing it to social media?
[23:02] So, that&#39;s the part we&#39;re going to walk
[23:03] through right now. Okay. And it&#39;s going
[23:04] to ask you for all of these permissions.
[23:06] I just say yes, allow these permissions.
[23:09] And again, don&#39;t be concerned if like
[23:11] stuff is red here. That&#39;s just Claude
[23:13] figuring it out. Like that one didn&#39;t
[23:15] work. Okay, this one worked. Now the
[23:17] visual is being generated. Let me check
[23:18] on the progress. Now, when you create a
[23:20] visual, especially a whiteboard
[23:21] infographic, it&#39;s going to use an AI
[23:23] model to make that visual. So, it can
[23:25] take 30 seconds or upwards to a minute
[23:28] to finish. But you can check on the
[23:30] progress by going to your potato
[23:31] account, click videos, and you should
[23:33] see the draft here. Right? So, this was
[23:35] the one that errored out when Cloud Code
[23:37] initially tried it, but it didn&#39;t quite
[23:39] work. And then this was the one that was
[23:40] successful. And the cool thing is Cloud
[23:42] Code just figured it out. It was able to
[23:44] read my extensive API documentation and
[23:46] just figure it out. So go ahead and
[23:48] click into this draft that you can see
[23:50] it&#39;s still generating the script or the
[23:52] prompt for this whiteboard infographic.
[23:55] And when it&#39;s done, Blotto will actually
[23:56] automatically refresh the page. So you
[23:59] can see the infographic draft. So this
[24:01] is the draft and then it&#39;s going to
[24:03] render the final version. So that will
[24:04] take probably another 20 seconds. But if
[24:07] you go back to cloud code, it actually
[24:09] gave us the preview here. So this is
[24:11] actually the preview. Okay. So here one
[24:14] thing is if you click this link, the
[24:16] link will actually not be valid because
[24:18] there&#39;s too much stuff here. So after
[24:20] the JPEG, all of this like timestamp and
[24:23] stuff shouldn&#39;t be clickable. So that&#39;s
[24:25] why it&#39;s not popping up. If you kind of
[24:26] remove all of that junk, so you just see
[24:28] like the JPEG extension at the end and
[24:31] then click enter, then you will see the
[24:33] infographic template. But we can also
[24:35] ask Claude code to clarify and just say
[24:37] that link didn&#39;t work. Could you check
[24:40] it again and output just the link? And
[24:42] let me just go back to our LinkedIn post
[24:43] as well. So yeah, so this post was about
[24:46] Kimmy and Open Clock Combining. The
[24:49] company behind Kimmy is called Moonshot
[24:51] AI. So that&#39;s why it&#39;s referencing that.
[24:53] And here&#39;s the link. So let&#39;s go ahead
[24:55] and click that. Okay, that is the clean
[24:56] link. So it works. Okay, so basically in
[24:59] a matter of 1 minute, Cloud Code took
[25:02] our LinkedIn post draft that we put in
[25:04] our brand voice and then generated a
[25:07] whiteboard infographic to go along with
[25:09] it. And if you&#39;re wondering if these
[25:10] types of posts do well, uh this is a
[25:12] post I made about 18 hours ago using
[25:15] this Cloud Code system, using one of the
[25:18] infographic templates, and it&#39;s almost
[25:20] 10,000 views now. And I posted this like
[25:22] late last night. Okay, so now we have an
[25:24] AI social media assistant that is
[25:26] creating copy in our brand voice.
[25:28] Obviously, we can beef up this brand
[25:30] voice guide. This was just the starting
[25:32] point. Uh, it can also make visuals. So,
[25:34] I just showed one infographic template,
[25:36] but there&#39;s actually all kinds of
[25:38] visuals you can make. So, if you click
[25:39] create new video up here, you&#39;ll see
[25:41] like all of these different templates.
[25:43] You can make AI videos with AI voices,
[25:45] 11 Labs voiceovers. You can make image
[25:47] slideshows like this for Tik Tok. You
[25:49] can make carousels for Instagram, quote
[25:52] cards, all kinds of different
[25:54] infographic styles like this. This anime
[25:56] one is one of my favorite. I think I&#39;m
[25:58] going to start doing those for LinkedIn.
[25:59] Product scene photos. So, if you have a
[26:01] product reference image and you want it
[26:03] like in a certain scene, you can use
[26:05] this templates. If you have existing
[26:08] footage, uh you can use this template
[26:10] which will generate captions and B-roll.
[26:12] And if you have existing images or video
[26:14] clips, you can also feed them in here
[26:16] and it will create a social media ready
[26:18] video with a title with subcaptions with
[26:20] optional music as well. And what was
[26:22] really cool is Claude actually decided
[26:25] which template to use based on our
[26:27] request. We said, &quot;Hey, make an
[26:28] infographic to accompany this and it
[26:30] chose the infographic template that it
[26:32] thought would be a great fit for this
[26:34] topic.&quot; Okay. Now, the last step is like
[26:35] how do you actually publish this to
[26:37] social media? So, what we&#39;re going to do
[26:39] first is connect our social media
[26:41] accounts to Blotato. So, again, go back
[26:43] to go to settings, go to accounts, and
[26:45] then click login with your social
[26:47] account. So, I&#39;m going to log in to
[26:48] Twitter here. Okay. And you should see
[26:50] the connected accounts down at the
[26:51] bottom here. And I&#39;m also going to log
[26:53] in to link. Okay. So, now we have both
[26:55] accounts here. By the way, you can also
[26:56] post the LinkedIn company pages. So,
[26:59] just so you know. And now, let&#39;s go back
[27:00] to Claude Code. Okay. So, let&#39;s just say
[27:04] we make some edits here. Like, oh, I
[27:05] don&#39;t like all these hashtags at the
[27:07] bottom. Okay. Make sure to save the
[27:09] file. So if there&#39;s like a little dot,
[27:11] maybe that was too quick. But let&#39;s say
[27:13] you make some edits. There&#39;ll be a
[27:14] little dot here. That means it&#39;s unsaved
[27:16] changes. So make just go ahead click
[27:19] save just like you normally would. And
[27:20] then here&#39;s the Twitter draft. And now
[27:22] we want to tell Cloud Code to post this
[27:25] on social media. And we can be somewhat
[27:27] free form with it. So let&#39;s say okay,
[27:29] I&#39;m ready to post now. Let&#39;s say for
[27:32] LinkedIn, schedule it for tomorrow
[27:34] morning with an infographic. And let&#39;s
[27:36] say for Twitter, no infographic, but
[27:39] schedule the thread, right? So in the
[27:42] draft, it gave us a single tweet version
[27:43] or a fourpart Twitter thread. Let&#39;s go
[27:46] with a thread. Schedule the thread. I
[27:48] don&#39;t know what today is. What is today?
[27:50] Tuesday. Okay. Uh schedule a thread
[27:52] Thursday morning. Okay. So now what
[27:54] should happen is cloud code is first
[27:57] checking what social accounts we have
[27:58] connected. So go ahead and click yes. So
[28:00] it&#39;s going to fetch like, oh, you have
[28:02] this Twitter account or you have this
[28:03] LinkedIn account. By the way, you can
[28:04] have multiple accounts of the same
[28:07] platform. You can have multiple Twitter
[28:08] accounts connected, multiple Facebook
[28:10] accounts connected, multiple Instagram
[28:12] accounts connected. So, that&#39;s really
[28:13] handy. Once it fetches the accounts,
[28:15] then it&#39;s going to like create the
[28:17] request that&#39;s going to publish it to
[28:19] social media or in this case schedule it
[28:21] in advance. Okay. Okay. So, now it&#39;s
[28:22] scheduling now LinkedIn for tomorrow
[28:24] with the infographic, Thursday for
[28:26] Twitter, and no image. Okay. It says
[28:29] both scheduled, but let&#39;s go check. So
[28:31] in potato we can check our calendar
[28:33] right on the lefth hand side click
[28:34] calendar click upcoming posts and boom
[28:37] and this is by the way a spare account
[28:39] that&#39;s why everything&#39;s empty nothing&#39;s
[28:41] connected but yeah this was just pub
[28:43] scheduled right this looks like a very
[28:45] legit um LinkedIn post now you may be
[28:47] wondering about the m dashes and stuff
[28:49] like that but obviously you can put
[28:51] humanize prompts within your brand voice
[28:54] guidelines to get rid of some of that
[28:56] and I actually go through that in my
[28:57] more advanced version of this tutorial
[28:59] and then here&#39;s the Twitter thread. So,
[29:01] it&#39;s it&#39;s um segmented like this because
[29:03] it&#39;s going to be one tweet at a time,
[29:05] but all of them in the same Twitter
[29:06] thread. And let&#39;s just talk about other
[29:08] types of prompts you can run. So, like
[29:10] what else can you do with this MCP
[29:12] server? So, you can create the posts,
[29:14] right? It can help you draft the copy.
[29:16] It can also analyze YouTube, Tik Tok
[29:18] videos, podcast URLs. So, let&#39;s go to
[29:21] YouTube real quick. Let&#39;s grab like the
[29:23] latest Hormosi video or something. Okay,
[29:25] this one. It took 36 years to realize
[29:27] what I&#39;ll tell you in 26 minutes. So,
[29:30] let me just copy the URL of this. Okay.
[29:32] And then let&#39;s go back to Cloud Code.
[29:34] Okay. And say I analyze this YouTube
[29:36] video. Boom. And what this is going to
[29:38] do is use the built-in Blot tool to
[29:40] extract transcripts from YouTube videos,
[29:43] Tik Tok videos, etc. You can see the MCP
[29:45] tool call here. Okay. So, this is the
[29:47] tool call and this is really neat
[29:48] because you can take a video that is
[29:50] super awesome, right? Summarize it into
[29:52] bullet points for Instagram tailored to
[29:54] your audience like why this particular
[29:56] topic is interesting or different or
[29:59] relevant to your particular audience.
[30:01] Add your tweaks to the content, your
[30:03] human level tweaks, and then publish
[30:05] everything out. Okay. And here&#39;s the
[30:07] breakdown of the YouTube transcript.
[30:08] Literally in less than 30 seconds pulled
[30:10] the entire transcript and the key
[30:12] arguments. Now, let&#39;s make an Instagram
[30:13] carousel. Let&#39;s say write an Instagram
[30:17] carousel based on this YouTube video.
[30:20] then create it with potato and schedule
[30:23] it for I don&#39;t know what day it is
[30:25] tomorrow evening. Okay, so this is
[30:27] getting a little more complicated but
[30:28] it&#39;s so cool because you can just talk
[30:30] freely in plain language like you are
[30:32] talking to a person like hey we&#39;re I I
[30:35] just shared this YouTube video with you.
[30:36] Yeah, it&#39;s super cool. Let&#39;s make an
[30:38] Instagram carousel out of it and like
[30:40] put in some of our language, some of our
[30:42] philosophy in there. Create a Instagram
[30:44] carousel visual to accompany it and then
[30:46] schedule it for publishing. like this is
[30:48] how you would get work done. This is how
[30:50] you would interact with someone to
[30:52] communicate this instruction. And the
[30:54] beautiful thing is you can do all of
[30:56] this within cloud code. And that is why
[30:58] I really wanted to showcase the power of
[31:00] MCP even in this beginner tutorial
[31:02] because if you didn&#39;t see this, you
[31:04] might think, oh, cloud code, okay, it
[31:06] writes cool stuff. I mean, so does chat
[31:08] GPT, so does Gemini. Like what actually
[31:11] makes it different or powerful? But now
[31:13] with this MCP integration, you can do
[31:15] all kinds of crazy things, things that
[31:17] you are probably doing manually right
[31:20] now. Like after this post is published,
[31:22] are you updating an table or Google
[31:24] Sheets with the posts links? Like cloud
[31:26] code can do that. You can hook up an MCP
[31:28] to air table to notion to your Google
[31:31] Workspace to your CRM and just have
[31:33] cloud code operate on the same data that
[31:36] you operate on. Like it can read the
[31:38] data, it can obviously be careful, but
[31:41] it can write to the data. can change the
[31:43] data in your systems. Okay. And now it&#39;s
[31:45] done with the carousel images and it
[31:47] generated the slides one by one. That&#39;s
[31:49] why you see multiple links here. So if
[31:51] we open one of these links, right? So
[31:53] this is the first carousel slide. This
[31:55] is probably the second carousel slide.
[31:57] Okay, great. And then oh, so it didn&#39;t
[31:59] schedule it to Instagram because I don&#39;t
[32:00] have my Instagram connected. That makes
[32:02] sense. I&#39;m not logged into Instagram on
[32:04] this computer. But it would work
[32:06] similarly like before, right? Like we
[32:08] would just go here, check it out in our
[32:09] calendar, and it would appear here. So
[32:11] this paradigm is truly the closest I
[32:14] have ever seen, experienced or built for
[32:16] myself that that comes close to a true
[32:19] AI assistant for social media. You can
[32:22] tell it to do things. It can research
[32:23] topics. It can write drafts in your
[32:25] brand voice. It can do quality checks,
[32:27] which I cover in advanced tutorials. It
[32:29] can create the visuals accompanying your
[32:31] post. And it can schedule and publish
[32:33] everything on social media. It can even
[32:35] update your systems with the published
[32:37] post URL once your post goes live. Feed
[32:39] it back into Air Table. feeded back into
[32:41] Google Sheets. So, just to summarize
[32:42] everything we talked about. So, first we
[32:44] set up our Claude accounts and again
[32:46] many people ask me about pricing. I&#39;m
[32:48] very happy on the Max plan. It seems
[32:51] expensive but when you realize how many
[32:53] other AI tools you can stop paying for,
[32:55] I think it&#39;s well worth it. Then we
[32:57] installed Visual Studio Code. This is in
[32:59] my opinion the easiest way to get up and
[33:01] running with Cloud Code. So, you don&#39;t
[33:03] have to open a scary looking terminal.
[33:05] The other benefit of Visual Studio C
[33:07] code is it makes it super easy to review
[33:10] what cloud code is doing, what it&#39;s
[33:12] thinking, the drafts, you know, so you
[33:14] can e you can edit everything here. Just
[33:16] think of it as your own Google doc,
[33:18] okay? Or you can have cloud code edit it
[33:20] and you just watch it make the changes.
[33:22] So that is one really big advantage of
[33:24] using an editor like Visual Studio Code.
[33:26] Even though it sounds scary, it&#39;s really
[33:28] not that bad. Just think about it as a
[33:30] Google doc where you&#39;re going to be
[33:31] collaborating with Cloud Code and
[33:32] reviewing its work. Okay? And then we
[33:34] installed the claude code official
[33:36] extension. Right? So that&#39;s this little
[33:38] orange button here. If you&#39;re on Mac,
[33:40] you can just click this button. It&#39;ll
[33:41] open new sessions. For my Windows, I
[33:44] click this plus button on the top right
[33:46] corner. Um we talked a little bit about
[33:47] some slash options. So switching model
[33:50] um edits like the permissions and stuff
[33:52] like that. And then we asked Cloud Code
[33:54] what it can do, right? So we started
[33:56] with having Cloud Code write some copy,
[33:58] which was fine. We added some minimal
[34:01] brand voice guidelines. You can you can
[34:03] beef that up significantly. And then we
[34:05] set up your very first MCP server in
[34:07] this Blot for social media visual
[34:10] generation as well as publishing and
[34:11] managing your entire content calendar.
[34:13] And the beautiful thing is once Cloud
[34:15] Code has that MCP server integration, it
[34:18] can do all of these things as a true as
[34:21] a true AI social media assistant should
[34:23] be able to do. It should be able to
[34:26] research any topic you throw at it. It
[34:28] should be able to write posts in your
[34:30] brand voice where you are just reviewing
[34:33] and tweaking and fine-tuning as a final
[34:35] step. It should be able to create
[34:37] visuals such as faceless videos,
[34:39] infographics, carousels for Instagram,
[34:41] slideshows for Tik Tok. And an AI social
[34:43] media assistant should be able to
[34:45] actually schedule and publish all of
[34:47] your content to social media. If you
[34:49] have any questions, please drop them
[34:51] below. Hit like, drop a comment. I&#39;d
[34:53] love to hear from you. And there is a
[34:54] more advanced version of this tutorial.
[34:56] So check out the entire series.
