---
title: "CLAUDE CODE FULL COURSE 🤯"
creator: "sabrina-ramonov"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=fYX6hHC9FhQ"
video_id: "fYX6hHC9FhQ"
duration: "1:12:20"
transcript_method: "youtube-captions"
segment_count: 1960
char_count: 74635
status: ingested
topics: []
meta_patterns: []
---

# CLAUDE CODE FULL COURSE 🤯

**Creator**: sabrina-ramonov | **Duration**: 1:12:20
**URL**: https://www.youtube.com/watch?v=fYX6hHC9FhQ
**Transcript**: 1960 segments, 74635 chars

## Transcript

So, welcome to my ultimate Claude Code free course where we will be building an AI marketing officer completely from scratch. I will walk you through installing Claude Code for the first time, creating two custom skills, hooking up hooks to check for quality in all of your content, hooking up your brand voice and samples, and then building out a multi-platform publishing pipeline that utilizes parallel sub agents for efficiency. And so by the end of this video, you'll be able to type one sentence and Claude will research your topic, draft a week's worth of content, including visuals generated, show you the plan so you can edit it, review it, put your own voice there, wait for your approval, and then schedule everything across all of your socials. This is the definition of batch producing content and using AI to have leverage and scale yourself. So this is a rough outline of what we'll talk about. the first part. A lot of people have questions on just how to set up cloud code, how do you do permissions, what are the different modes, like what is context, etc. So, I'm just going to go over like the basics and foundations. And this will help you no matter what you decide to build with Cloud Code. These are just really, really handy tips and tricks I've learned from over 500 hours using Cloud Code on a regular basis to build my product. After we set it up, we're going to create our very first skill that's going to be able to take a topic or a YouTube video, create a post out of it, create a visual, and publish it to social media. The next step is creating your brand voice and adding samples that reflect your brand. And so, we're going to be improving the skill that we've built. And then the third step, I call it quality gates. That might sound like a weird word, but it's essentially using a feature called hooks so that we can automatically check the quality of each post before going out. So, a simple example is like if you don't want m dashes in your content, we can have cloud code automatically check every single post for m dashes, remove it or replace them before they get published. That's a very simple example, but you can also think about like keywords that your brand doesn't want to be associated with. You can also think about like color schemes in the visuals. There are all kinds of quality checks that you can add. I'm just giving some of the more simpler examples. Okay. And then after that, I'm going to introduce you to sub aents and we're going to do multiplatform posting with sub aents so that each sub aent asynchronously handles publishing to its own social platform. And then the fifth step is we're going to create a second skill that plans the full week of content, gives it to you for review, and then schedules it out on your calendar. So this is really optimized for intermediate level content creators who just have a couple hours each week, right, to sit down, create content, and batch schedule everything. And then the very last step is I'm going to talk about the Claude MD file. So basically your memory as you do these projects adding them to your cloud MD the things you've learned tips and tricks that are helpful when interacting with cloud make sure to add that to your cloud MD at the end of every session that you have. So first let's install cloud code. So that's number one. And I know many of you have already installed cloud code but just bear with me for people who have not done that. I'm not going to literally walk through it step by step but if you're brand new sign up for a claude account obviously. So, go to claude.ai. A lot of people do ask me about pricing, so I'll just talk about that really quickly. I am personally on the $200 per month plan. Like, I get so much value from Cloud Code. It's absolutely worth it to me. If you are just on this $20 per month plan, you are going to hit the limits very quickly because of all the tool calls involved when you use an agentic tool like Claude Code. So, I recommend at minimum this $100 per month plan. Obviously, if you're just testing it out, you know, stick to the $20 per month plan and you will find that you will be able to cancel so many different tools once you actually pick up Cloud Code and start using it. So, that's the plan. And then what we're going to do is we're going to install this free tool called Visual Studio Code. And it's basically an editor. You can think of it as like Google Docs but for developers. The reason why I encourage people to use this is because it makes it really nice to review the work that cloud code is doing. So if you are just using a terminal, it's a little bit harder to like review the output of whatever AI is generating. So when our AI marketing officer generates a weekly content plan, we want to be able to easily look at it, make edits, provide feedback, etc. And so I just recommend getting used to using cloud code in some kind of editor. It doesn't have to be Visual Studio Code. You can use other tools like anti-gravity has is a fork of VS Code. So, you can just download the Cloud Code extension as well. In my testing, I found it to be a bit slower and buggier, which is why for now, I'm sticking to Visual Studio Code for Cloud Code. So, go ahead and download it and then open it. It's going to look empty, but you can open files and stuff like this. And then on the left hand side, actually mine looks a little bit different than yours probably, but look for this icon that says extensions, okay? And then search for Claude. And the first result should have over 4 million downloads. So go ahead and install that. So this is going to be the Claude Code official extension for Visual Studio Code. So go ahead and install that. Once it's installed, you will see this orange icon in the top right corner. This is Cloud Code. So, go ahead and click that. Boom. And it's going to look something like this. Yours is probably not pink, but it's going to look something like this. And then, since you're brand new to it, it should prompt you to log in. Like, if it doesn't immediately prompt you, type /log and then you should see this option to log in. So, go ahead and just type /lo or click that option, and it will prompt you through all the next steps like signing up, authenticating your account, etc. you. It's super super easy at that point. Next, create a folder where we're going to build this out. So, I've already created my folder. I called it AI Social Media Manager. So, go ahead and create your folder and then open it within Visual Studio Code. So, you should see your folder name right here like this. So, a lot of people ask me about permissions. So, when you start using Cloud Code, it's going to ask you permission literally for everything. And it's kind of annoying. you have to like grant permission, let it do things every single time. So, this is a really handy prompt. And what this prompt does is it will tell Cloud Code to allow most relatively safe commands. By safe, I mean non-destructive commands so that it doesn't ask you again and again. So, if you're on YouTube, you can just screenshot this, right? So, screenshot this and drop it in the cloud code to get the text. I can also pull it up here, right? So, here's the prompt right here. And again, this will just add permissions. In for this particular case, I'm only adding it to this cloud project. So that if you are currently using cloud code and you don't want it to be affected to other projects, then you know this line will take care of that. If you do want this applied to all projects, then you can just remove this section and it will add it globally to your user. So yeah, go ahead and type that prompt. So here where it's saying allow bash command. So this is an example of it asking for permissions. Someone's asking, "How do you add Cloud extensions?" So, to add the extension on the left sidebar, you'll see an icon that kind of looks like I actually changed my whole sidebar, but it looks like three cubes. Like one cube's kind of tilted. So, if you hover over the icons on the left, you should find one that says extensions. And just search for Claude Code. If you type Claude, it should be the first one that pops up. And that's how you download it. Yeah, it's usually on the left side if you are with a fresh install. And so here it's asking for permissions. This is exactly the type of thing we want it to just like do automatically. Like I don't want it to ask me every single time. It's checking what's in a directory, right? But first it's checking what's in the directory and then it's going to plan to update our cloud settings. So here it's going to edit settings.json. Okay, just click yes. So what this is doing conceptually is there are lots of bash commands and other commands like searching the internet that claude is going to ask you for permission for like all the time and it's super annoying. It's like you can do it just go like you can check what's in a directory it's fine like you're not going to break anything. So I personally allow claude code to just proceed with non-destructive commands. Even some commands that write contents I will allow it right. It's it's more about like your familiarity with it. Do you know what cloud code is doing? Are you able to follow along? This is a pretty safe one. This is a pretty safe variation. Uh okay. So if I open like this file. So these are like lots of different permissions that we are granting Claude. So it doesn't have to ask us like every single time. Um, the next thing people ask me about is modes. So, here on the bottom left, it says ask before edits. So, this is generally best practice. If you're new to all of this stuff, I recommend staying in this mode. But, there are other modes like edit automatically in plan mode. So, what I do practically is I spend about 90% of my time in plan mode so that Claude doesn't accidentally change anything. And then when I'm very happy with a plan, then I switch to edit automatically. So, we spend 90% of our time back and forth sparring back and forth on the plan. And then only when I'm super happy with it and confident it's going to not break stuff, then I switch to edit automatically and just let Claude like implement the plan as we've discussed. So, you can leave it at edit automatically. For this pretty simple tutorial, like most of my time, I'm working on a complex existing codebase. So, it's really important that I know what clot is doing, what it's changing. But for this simple build, especially if you're building something from scratch, you can be a little more aggressive and just leave it at edit automatically. A lot of people also ask me about context. So if you're new to Cloud Code, click slash. Well, that's not great. So I just changed the theme right before [laughter] this live. So normally when you click slash, you should be able to see the title of each command. So like attach file, mention file, clear conversation, switch model, thinking, account and usage, toggle, fast mode. So a couple things I will point out. So /mod switch model. So a lot of people ask me I generally use opus 4.6 for all technical work and I will only use these lesser ones like haiku sonnet. If I'm doing something that is just like super easy. But for building stuff that's technical I will stick to whatever is the most capable model. As of today it's opus 4.6. So go ahead and click opus 4.6 or you can type it as well. Right click enter. And then the other thing I wanted to talk about is context. So personally for me when I code especially with complex existing codebase I clear the context every single feature or bug. So to do that you just type slashclear. I find that I get better results when I start with a clean slate when I'm going to do a new feature or do a new bug fix. That's me personally. Other people swear by storing all of the memory and just like augmenting the memory capabilities of cloud code so that it remembers everything. I found I get much better results if I clear the context on every new type of thing I'm working on. So if it's a new feature I'm adding I will clear the context. Okay. And then the last thing I'll talk about in terms of setup again this is because like a lot of people ask me what's the difference between the visual studio code official cloud code extension and the terminal. There are actually differences. So if you're new to Visual Studio Code, in your top bar, there will be an option that says terminal and then that will allow you to open a terminal. And one of the biggest differences is the terminal typically has the latest features in cloud code whereas the official extension may not yet. So one example of that is cloud code in Chrome. You can launch it in the terminal by typing cloud--chrome. But in cloud code, it won't work that same way. In cloud code official extension, which is what we're using here, that won't work. The other thing, and the reason why I use it in the terminal, is for some reason Vim mode just doesn't work within the cloud code official extension. So, I just like to use it in the terminal. However, the downside of the terminal is just doesn't look as pretty or as userfriendly as the official extension. Somebody asked about anti-gravity. I have tried anti-gravity in claude code. I found it to be just like really slow and like laggy for some reason and I was just trying it today as well. But I do like with anti-gravity you can compare the answers between anti-gravity's agent and Gemini and then claude code as well. Now let's actually start building something. Our first step is to create a post skill. I guess I should start with what are skills. So it's basically like a custom command and then it encapsulates a set of instructions and it can include code. It can include API calls and the nice thing is that they persist across different sessions and stuff. So you can just be like slashpost and then it will know what to do based on the skill that you've created and it lives in your project. So you can have skills at different level. You can have an in your project level you can have global skills that are accessible across all projects. And so what we're going to do first is create a skill here. So and I know it looks long, but I I just did some stuff that will help in just getting this working as fast as possible for you. So let me just walk through what this prompt is. So it's it looks scary, but it's really not that bad. Like first line is just we're creating a cloud skill. We're going to call it post. Here's the documentation for skills for claude. And then what does the skill do? It's going to be an AI social media manager that makes posts for these social platforms. By the way, you can change these social platforms. I just chose four randomly. You can post to like nine social platforms, but for this, honestly, for this, I'll probably just post two, but I'll build it for four. Okay. How does it work? The user chooses a platform and and inputs like a topic or an existing draft. They can even input a URL like a YouTube video, a Tik Tok video, an article, an audio file, a website, a blog, or a PDF. Or they can even input their own image or photos. And then AI is going to figure out the user's intent based on whatever you said. We're going to use my tool to extract the content. For example, if you are uploading a Tik Tok video, Blot can grab the transcript from that video, create visuals like infographics, carousels, slideshows, and videos, and then publish to socials. This is just the link to the Blotato API docs so that Cloud Code knows where to go. I like to include this because when you're testing, you probably don't want to publish everything immediately cuz I accidentally did that earlier today and I had to go back and delete a bunch of posts. So, and this is just saying that we have three options for scheduling. We can publish everything right now. We can publish at a future date, a specific date or time, or we can schedule at our next free slot. So, the way many social media schedules work is you kind of set up a schedule. Like, every day I'm going to post on Instagram at 9:00 a.m. So, that's your slot. So, as you create draft Instagram posts, you just schedule them out and they just fill up your slot. So if you're already full for the next week and your next open slot is like two weeks from now, then your next post will just be scheduled in that next open slot two weeks from now. So it's just a it's just really handy if when you're batch creating content especially. So you sit down once a week, you just create content for that week. Boom, you don't have to worry about it. This line tells Claude that we're going to set up the Blot API key in this file settings.local.json. This one, this line says, "We're also going to create a running log of all of our published posts and their URLs." I just thought this would be cool. So, like after we publish a post, we can actually track it and get the URL. And then this last line is just ask me clarifying questions one at a time until you're 95% confident you can complete the task successfully. Okay, so let's copy paste this. So, let's just copy it over here. I'm going to zoom out because this is really zoomed in. And the first thing Claude will do is like try to understand what I'm asking. So here Claude, you can see its thinking process. So first it's going to research how to create a skill properly and second it's going to research the API documentation. Third, it's going to design the /ost skill. Then it's going to set up the file for our Blot API key. Then it's going to create the log where we're going to store all of our published posts. And then it's going to ask clarifying questions based on anything it is still confused about. That last line is actually really important. Um because you're going to find that no matter how amazing you think your prompt is, there's always blind spots, edge cases, things you didn't think about. So Claude will just ask you one at a time like, "What's your preference, A or B? What's your preference, C or D?" Again until it's like 95% confident it can complete the task successfully. And I found that works really, really well. And I can be very lazy prompting. As long as I add that line at the end, it will force me to actually clarify what I mean. And again, it looks long, but it's really not. It's just like create a new cloud skill. This is what we're going to name it. Here's the docs. This is what the skill does. Okay. This is the API we're using. This section is just so like it clearly allows you to schedule in the future cuz I know sometimes like it forgets to let you do that. And then yeah, this part at the end is like, okay, here's where we're going to put our API key. I also want to keep track of all my posts and just ask me clarifying questions. And we can see that it's starting to ask me questions. So I'm just going to move this. So the first question is like making this directory. So I'm going to say yes, allow all. So you might have seen the options like yes, yes, allow all for this session. Honestly, for the purpose of this tutorial, you can safely click number two like just give permission for everything in this session. So okay so now it's writing our skillmd file. So on the left this is like your directory. It's it's your folder structure right. So you created this placeholder folder where we're going to experiment with all this. And now claude created this file skill.md. You can see it here. Allow write to blot API reference. Just say yes. So this is claude just creating the stuff we need. So your skills are going to be here. So this is the post skill that we talked about and then you can open it up here. So this is pretty cool to look at. And then this is our settings. So that's going to store API key. So here, settings.local.json. So this is where you're going to post your API key. And if you have other services you want to integrate, let's say you want to plug in Canva or Google Drive, like something for video generation, right? Like you can put your API keys here as well. Okay. So now Claude is asking, please paste your Blueot API key so I can add it. I'm just going to say I'll add it later. just as a best practice, you know, you should probably just like put it there yourself so you know where this is and how to manage it. And I will talk about how to get your API key in a sec. I just want to show you the skill.md file. Okay, so for the skill MD file, let's look at what it created. So this is the name of the skill post. This is what it does. This is actually really important because this is how claude code decides when to use skills. So, you can trigger a skill explicitly by typing slash [laughter] I should not have changed this to a pink theme like right before. Um, or you can you you can just say something and then Claude will determine that hey, I should use this skill based on the description of what it does. So, you do want a description that is a little bit lengthy and comprehensive. So, this is a social media post creator. Step one, parse user intent, right? That's what we said like this. The reason why this is a little bit open is so that you don't have to remember to structure your request in a certain way. You can just type whatever and like posts will come out of whatever you typed. That's how I kind of designed this. If you pass in a YouTube URL, a Tik Tok link, a PDF link, an audio file, etc., those will also be extracted. Like I'm going to do a demo where we put in the latest Hormosi video and we create a bunch of carousels from them. Right? So that's another thing you can do. And then step three is to actually generate the post content. Now these are pretty generic, right? We're going to fix this when we do the brand voice step. So don't mind that for now. And then if you want a visual with your post, this is an optional step. You can make one as well. So this will use my API to make visuals. And then the rest of it is just like literally how to publish a post, right? So this is just pulled from the API. Um because I noticed, you know, a lot of tutorials will show you how to use cloud code to make content, but then it's like, well, now what? Like you still have to make the visual, you still have to post to social media. Unless you can do all of those other tedious things, you haven't like saved that much time. And so the workflow I'm showing today is like end to end. But we're just going to start with one post at a time, but by the end, you will have literally the entire week planned for you by your AI marketing officer. Okay. So, just as a best practice, by the way, it is a good idea to read what Claude is doing. I know we get lazy, we get sloppy, and we're like, I don't need to read this, but it's you like you're going to learn so much faster and be more confident in directing Claude in the right direction if you just kind of like follow along with what it did. So, okay, now it's saying we're ready. We're going to replace our API key. Okay, so remember this settings file where we have our API key. So, let's go grab it real quick. So, go to website. So, if you're not familiar with it, blot.com is an app I built basically so that I could make a  ton of content without going insane. Um, it's like literally what it's for. Okay, so just log in here or sign up here. And then once you're in, it'll look like this. Go to the bottom left, go to settings. Okay, and then go to API. And this is where you're going to generate an API key. It is a paid feature, by the way. So, like don't generate it unless you're paying. So, hopefully you're already an existing user. But go ahead and copy your API key and then add it here. And for anyone watching, I don't have social accounts connected to this throwaway account. So, yeah. Okay. I'm just going to zoom out. I think I accidentally deleted a quotation mark. Okay. I'm just going to copy it again to double check cuz I'm paranoid. Okay. Yeah. So, just double check that. Make sure you still have quotations around your Blotato API key, right? So, it should look like this. Click save. So, if there's like a dot here, that means you have unsaved changes. So, you can do controls or commands S on Mac to save your changes. Okay. So, we've added our API key. We haven't connected a social account yet, but let's just see what the post skill does. After you add a post skill, you may not see it in the menu. I mean, I do see it here, but just to be safe, I usually refresh cloud code just to make sure like everything is loaded correctly again. So, one thing you can do on the top right session, click new session. Boom. This will create a new Cloud Code session. Okay. And then I'm going to grab a YouTube video. So, this is one of Horoszy's latest videos. You're 28 minutes away from never being broke again. And then um we're going to do type /ost. And then the topic, let's do like AI entrepreneur tips. And then I'll just paste the YouTube link here. And let's say we want this for Twitter. Um I forget if that was the format to use, but hopefully it will tell us. Okay. Submit YouTube video for content extraction. So that's good. So this means it parsed the YouTube URL and it's going to submit it to the API so we can get the transcript. So I'm going to go ahead and click two because I don't want to give permission to this every time. Okay. And then allow this bash command. So what this does for those who are you don't really need to understand this but if you're technically interested this is going to pull the blot API until the contents extraction is done. And sometimes there are errors right like here exit code one. So there's a parse error invalid instruction. The cool thing about cloud code is it actually tries to fix it itself. And so we'll see if that can work. I am curious what it did. So perfect. I've extracted the content. Draft Twitter post. Your money goals are too small. AI entrepreneur. Stop hoarding money. Start hoarding skills. This sounds like Alex Horoszi if you um watch any of his content. So, okay. So, we have now a draft Twitter post and it gave us three options. We'll just choose the one that I see. I actually just listened to his podcast about inflation on this one. I think I like option two. Oh, actually, let's make an infographic. Okay. And obviously if you want to edit it like you don't like the wording, you don't like certain things, you can do that now. But we the next step here is to add brand voice. So like don't worry about that too much yet. Okay. So allow bash command. Yes. Okay. Now it's testing. Oh, unauthorized. That's not good. Okay. So it is complaining about an API key permission issue. That's kind of weird. The API key should work. try again because the API key just worked to extract the source. So [laughter] I'm just going to tell it to try again. Okay, so the API key is working. It was just complaining because I don't have any social media accounts connected yet. So but first let me create the infographic. Then we'll connect your Twitter account. And so one of the reasons guys I'm doing this completely live even though it's like kind of nerve-wracking when it doesn't work is because like this is the process. Cloud code takes care of a lot by trying to figure it out itself. But the more context you can give it about like what's working, what's not working, the faster it'll be able to figure it out. And don't freak out if it doesn't work the first time. It might just be some minor thing. So in this case, like Claude code just re misinterpreted a response it got from the Blot API. I don't have any social accounts connected yet. So, it thought that like something was wrong, but the truth is I just haven't connected my social accounts yet, that's all. And so, everything was working correctly, but it interpreted it incorrectly. But anyway, I'm doing this live to show you like it's it's okay if stuff doesn't work as expected the first time. It often doesn't, but just keep just read what's happening, you know, work through it a little bit, right? It didn't take very long to fix it. There was nothing actually to fix. It was just claude code again misinterpreting the results from the API. Okay. So now it's pull it's actually creating the infographic. So if we actually go to blot, we should eventually see it when it's created. So here and then I will also use this opportunity to go ahead and connect my social account now. So go to settings and then log in with a social account. I'm going to choose one I don't care about. So Twitter probably. Okay. And then once it's connected, okay, then you'll have Twitter down there. Okay, that's great. I should have chosen like a text carousel because it doesn't take as long. So I don't know how long this will take. If it takes too long, I will just create like a text carousel instead. So once you teach the skill and connect API, will it find and reformat content on its own? Yeah, I mean you can basically give it let's say like a list, you can have it search for a list of YouTube videos or a list of things relevant in your niche and then it will just take that content and create other new content out of it. But the next step is actually applying your brand voice which is really important. So it's not just like you you you know taking someone else's content. But yeah, I mean this this can be completely automated which is kind of the crazy part. But I I recommend having a human in the loop for sure. That's why in the last section it's going to create a content plan for the week and then you review it and add your edits and stuff. But everything's so streamlined and the text editor itself is a really nice interface for actually editing your drafts. You will need a Blotato account if you want to generate visuals and upload to social media. If you just want to generate like the text content, you can without blot. So that can be completely for free. You just can't upload like a YouTube video because Claude won't be able to get the transcript. you will have to like use some other tool to fetch YouTube and Tik Tok transcripts. And then to generate the visual, you still would have to use like some other tool. And then for the third one, publishing to social media, yeah, you would have to use some tool for that. But if you just want to do the copy, then that should be fine. Oh man, it said I ran out of credits. Okay, let me try a template that doesn't cost any credits. Okay, use a carousel template. I forget the names of my carousel templates. So, if I click create new video here, you can like see different templates and stuff. I'm trying to choose one that doesn't cost any AI credits or anything. Uh, which one do I like? Oh, like quote card carousel. Let's try that. So, it's uh so it should be published soon. So, if you go to Blot, you'll actually see the carousel here. And then if I go to Twitter, so this is my live Twitter account, right? So, here is the carousel on Twitter. So I'm going to delete this now. I'm going to go ahead and try this again also with a different type of post. So people were asking like do you have to create a visual right? So if I just do slashpost and then let's put a topic like how to ski in icy conditions. So what this will do this won't research any YouTube video or Tik Tok video. It it will just use a perplexity AI research agent just to research this topic and then create a post based on it. So, let's say instead of a Twitter post, we want a LinkedIn post. So, just type LinkedIn at the end. I was not locked out. I ran out of credits, so I just logged into the database and gave myself a ton of credits. Okay, so what it's doing now, it fetched the completed post from Twitter and then it updated the log. So, if you go to post-log, boom. So, this is the post that I just showed you on Twitter, but deleted, but you can see what it posted here. Okay. So now I put a new post request to write this simple thing about how to ski in icy conditions. So it's asking if it should use the skill. I'm going to say yes, allow it. So it's going to trigger our skill again, but it's not going to use blot. So if you don't want to use blot, just do this, but don't put in like a YouTube video or a Tik Tok video because you would need an external tool to be able to scrape those sources of data. Okay, cool. So we got LinkedIn postdraft. So that's option one, LinkedIn post. So then option do I used to dread icy ski days. That is true. Okay. Sharpen your edges. Which do you prefer? I think I prefer post two. And then so if I say I prefer this, it's going to proceed to post the LinkedIn and it's going to post just a text post without an image. Now one thing you can do if you have a bunch of images locally on your computer like images, videos just saved on your computer, you can post those instead of using AI generation. I think I just don't have any images or videos on this computer. But this is the cool thing about cloud code. It can access whatever is on your computer. So if you have a separate folder like social photos that you've already like dumped in there, like you know they're good to go for social media, you can have cloud code like pull a couple of those photos and post them as a carousel on Instagram. You can even add title and captions on top of those photos and then post them as a carousel in Instagram. So that's one way to use this without having to like pay for AI image and video generation which can get a little bit pricey. So now what we're going to do is feed samples of your brand voice and writing style. So you guys may be familiar with this. This is like the short version of my humaniz AI writing prompt. And its job is really just to like remove super obvious annoying signs of AI, right? It's not it's not going to make your writing incredible. It's just like the baseline. And so what you want to do is add voice samples for each platform. What we're going to do instead of pasting samples. Let's say you're pretty new to content creation. You have no idea about your own samples. What you can do instead is say look up this particular creator's samples and use them as like stylistic inspiration. So we're going to do that for Twitter and LinkedIn. I would say there's still many use cases for non today. So where cloud code is pretty weak is anything related to orchestration. And so like deploying this, making it accessible to teammates, scheduling workflows, triggering workflows, integrations like pre-built integrations with thousands of apps and services. Those are all things NAD and other workflow automation tools still very much excel at today. Cloud code does not excel in those areas as of today. But you can do cool things like combine cloud code with NAD through MCP so that cloud code can just fix your NADN automation. So that is a really nice middle ground where you get the orchestration benefits of a mature workflow tool like naden or make.com. But you can use cloud code to like actually fix it and create the workflow for you. Um, okay. So I'm going to copy it now. I'm going to drop it here. And then where it says Twitter voice here, I'm just going to say find samples from let's say Alex Horoszi for Twitter. And for LinkedIn, let's say Justin Welsh. For today, I'm just going to like connect Twitter and LinkedIn. I'm not going to connect Instagram and Facebook, but we can put placeholders here. Okay. So, click enter. And now what Cloud Code's going to do is like research those two particular influencers and basically get their samples and put a bunch of their samples within your brand guidelines. Obviously, you should use your own samples if you have them, but if you are pretty new to content creation, it is normal to kind of like stylistically try to copy big influencers just so that you get the hang of things. But you can see what cloud code is doing, right? So again, I always encourage you to read what it's doing. Web fetch, right? And then when it's orange or red like this, it's like for some reason this particular request failed. Maybe the website blocked it or didn't pull anything. When it's green, that means it was successful. So I just encourage you to get used to kind of reading, scanning what cloud code is doing so you have an understanding of what it's tried and what's working, what's not working. Okay. Okay, so now it's gathered examples from both both Hormosi and Justin Welsh and it's going to update the post skill right now with the brand voice. Okay, so I'm going to open the post skill again so we can look at it. And here is the section that it's added, right? So it's asking for permission. So you can click yes. There's also a check mark up here by the way to accept proposed changes. Okay, now it decided to regenerate that LinkedIn skiing post using the brand voice. Okay, skiing on ice terrifies most people. I used to hate it too. Then one day changed everything. An instructor told me we Yeah. So this is definitely Justin Welsh style. So if you're familiar with his writing, this definitely brings that out. But I guess what we can do now is like do it but for Twitter so you can see the difference. So ski tips in icy conditions. And then let's put Twitter. So this post should be stylistically pretty different from the LinkedIn one. Although Hormosy and Justin Welsh actually do overlap quite a bit in um in copywriting style, but Twitter is a bit punchier and a bit shorter form than LinkedIn. So yeah, so these are like shorter options to fit in the character count. So like boom boom boom, right? So that's Twitter, that is LinkedIn and already it's much better than kind of the generic stuff that we were getting before adding the brand voice. Okay. So if I open skill.md basically you can put your samples here if you already have samples as a creator and that is how you will get like much better results. So the next step is to create what I call them quality gates. I call it a gate because you don't have to like invoke it like as soon as you go to publish something you have to cross this quality gate and it's going to check automatically. So what I mean by that is we're going to use cloud code hooks. So, a hook is basically like a piece of code that can be triggered at automatically at certain times. It's a script that's going to run before the attempt to publish. And that hook will check for, for example, m dashes. It'll check that your posts don't exceed the platform character limit. If you're trying to post to platforms like Instagram or YouTube that require you to upload an image or video, it's going to check that as well. It's going to check for any banned word. So, if you have a band words list in your brand voice, it's going to check that. And the thing is, you can make this like much more complex and nuanced in terms of what quality means to you. You could even have this as an LLM score your posts in terms of verality. Like, let's say your quality check like scores for verality and if it scores above eight, it can be posted. If it scores below an eight, we're going to go back and rewrite it until it scores above an eight. That's like a little bit more complex, so I don't have time for this here, but these are like really cool things that you can do with cloud code hooks. And the nice thing is you don't have to remember to call them. They just run like based on how you set it up. In this case, they're going to run before any bash command that contains curl and this API, this address, meaning we're trying to publish a post. Okay. And then it is going to ask you for a bunch of permissions and stuff. And then what we're going to do is test it. So we're going to test a post that exceeds the character limit for example on Twitter and then it the quality gate should prevent it from being published and it will give you the reason as well like it will explain this post is forbidden because it's exceeded the character limit for that platform. Okay so allow write to validate post. So this is going to be the script. I know this is really small but on the left hand side there's a new directory that was created called hooks and then this file called validate-post. So this is going to run before the attempt to publish and then this is the code inside. You don't have to do anything with that. I'm just like showing you to be aware like generally this is how things are structured. So if you have a project it's going to have one directory for all of your hooks, one directory for all of your skills and then it's going to edit your settings over here so that the hook can run automatically. And you don't have to do anything. Just explaining like what it's doing. Okay. So, it's making some more edits. Someone said, "This looks much more complicated than NADN." It's it's really not is the thing. That's that's kind of the crazy part cuz like I use NADN a lot. Like I have production workflows running 24/7 self-hosted in NAND right now. I think they're very complimentary tools. Like I don't consider them for the same tasks. So, someone earlier was asking me that like is NADN dead? And I was replying that there's a lot in the orchestration layer that is really nice with NN. But cloud code is also amazing because it just can build like almost anything you want it to and it can debug itself if you give it a feedback loop. For example, if you use the Claude Chrome extension, similar to anti-gravity's Chrome extension, you can have it look at your app, look at your website, and keep improving it until it looks the right way, until it functions the right way. And so it's it's it's really really powerful. I maybe it looks scary because it's like black and pink. I don't know. But anyway, so we're going to try testing this. So So I'm just going to say test the post hook on an excess excessive character tweet. Okay. But it did actually test it itself, which is nice. But let's try one more time. So here it's testing this hook with an oversized tweet. Like just to illustrate the power of cloud code, like let's say we just think of another quality check we want. Let's say the quality check is like you must mention our company name at least twice in the post. So you're more of a business brand or a marketing brand or you want the CTA to always include your website. We can literally add that in 2 seconds and it would work like out of the box especially that one cuz that one is simpler. Um someone's asking how do you visualize your website that you create in cloud code. So this particular project from start to finish does not have a front end. It's not a web app, but you could actually create a front-end dashboard for all of this. I just like couldn't fit it in the time, but like by the end of this, if you want to just create a front end, an app visual on top of this, you can easily do that with cloud code. So, you can just like type into an input box like here's the topic I want. Do you ever let it self-compact? I do, but I try not to. Like for example, if I'm working on a new feature or a bug and I've actually hit the context window, I consider that like I don't want to say failure on my part, but like I must have been missing something for it to to take that many turns of conversation. Um, okay. So allow write to test results. Okay. Okay. So it's testing the hook with a valid post. By the way, if you're using the Cloud Code official extension, you can click on these things. You can click on input and see what the input was. is you can click on output and see what the output was. So that's a neat thing as well. Okay. Okay. So now we have our quality check. So it's going to check things like m dashes. It's going to check character limits. It's going to check band words. And all of that is customizable, right? So if you have like a bunch more band words, you can add them real quick. So the next part is to actually build our first sub agent, right? So we have our post skill, we have our brand voice, we have our quality gates, but right now it's just like we publish to one platform at a time instead of multiple platforms at a time. So what we're going to do is update. So just take a screenshot of this and drop it into cloud code. We're going to update our original skill so we can post to multiple platforms at the same time. So for example, if I type the word all, right? Instead, so instead of typing Twitter or LinkedIn, I'm going to type all. So now it's going to create a visual that's related to this topic. It's going to spawn a sub aent for each platform. And then each sub aent is going to adapt the post for the platform. And then each sub aent is going to publish to the platform. And then we're going to log all of the results over here in our posts log MD. And so the reason this is nice and efficient is because publishing is asynchronous. Like imagine you're publishing a whole week's worth of content and you're doing like five posts a day. So that would be like 35 posts. So now we can just like parallelize that effort instead of like scheduling them one at a time. What I'm going to do real quick is connect my LinkedIn account cuz so far I've just been on my Twitter account. I'm going to connect my LinkedIn and then if it's successfully connected, you should see your accounts on the list at the bottom. And then let's go back to Cloud Code. Remember to copy paste this into Cloud Code. So this will be the next thing and then we're going to test it by dropping in a YouTube video again and then asking it to use our brand voice and then create posts for all the platforms we have connected which right now are LinkedIn and Twitter and then automatically publish to both platforms with a visual. So make this edit. Yes. And then I'm going to grab the YouTube video real quick and just prepare what we're going to post. Are you concerned that you're at nearly 90% context use? Not really. I mean this is a pretty simple project. I also generally like to clear the context. It's just a habit like but this is it's just such a simple project. So I'm not that concerned about it. It's not like it's trying to debug like a really complex issue and we've tried you know 20 different things and now the context window is almost used up. We're actually just building a lot of different things piling on top of each other. But like honestly I could have reset the context for each new feature we're adding and it would have worked perfectly fine. Okay, so it's going to write something. Okay, so the crossplatform publishing Postkill now supports publishing to all platforms simultaneously with a single command. Okay, and here it is. By the way, like most of the links within here are clickable. So you can just like click to navigate. So that's really handy. So let's do a different topic. Let's do like like super advanced Claude code tips. So, I'm going to create a crossplatform post. Let me follow the crossplatform workflow. Number one, it's going to create a shared visual asset. I kind of hope it chooses an infographic. I was like really excited to show the infographic, but the first time I created a visual, I ran out of credits. So, I had to log into my production database and give my test user a bunch of credits. So, we didn't get to see the infographic yet. Okay. So, now it's fetching all my accounts. Oh, I don't have LinkedIn or Instagram account. So, that is going to get it confused. Okay, so here's one of the Facebook posts. Then that's the Twitter post. I will probably tell Claude code I don't have Facebook and Instagram accounts connected just so it stops trying. Um, but okay, here's the temporary LinkedIn post. And by the way, in the final step, we will have like a full content plan cuz obviously you want to read the post and like add any tweaks. Um, I'm just going to say, oh yeah, this is actually something to point out. So, if you're new to Cloud Code, so you could choose options one, two, three. There's like always pre-built options, but let's say you want to tell it something or it's missing something, you can type here, tell Claude what to do instead and just type it. And I'm just going to say, by the way, I don't have Instagram or Facebook accounts yet. Just do Twitter and LinkedIn. Otherwise, it's going to like try to do that forever. I'm going to check if it created the visual. Ah, it didn't choose an infographic. It chose another carousel. Ah, okay. Next time I might tell it very explicitly to choose an infographic, but yeah, these are the cloud code advanced tips, right? So, okay. I mean, there I was making a bunch of these earlier when going through it and like there's a bunch of like really fun infographics you can make. Like this one was really funny. Trail markers for building solo. I put the topic like who is Sabrina Romanov? So, it made this like chalkboard infographic. That's pretty neat. Oh, hang on. It's asking for permission. Okay. Publish to Twitter and capture submission ID. Yes, publish link. Now, it's going to publish LinkedIn posts. Okay. Um, but yeah, I was hoping it would choose one of these whiteboard infographics, but it did not. So if you do wanted to use a certain set of templates like obviously you can also put that in your preferences. Right? In this particular flow we just have it completely decide what to do. So it just ended up choosing that other quote card carousel. Okay. Then let me check Twitter. Did it post already? Oh yeah it posts. Okay. So here's the cloud code. So this is 28 seconds ago and then that one was also 33 minutes ago. So basically what's happened is we published on Twitter here. So I just deleted some of the posts that were on Twitter. But it basically created one visual that is going to post to multiple platform. The next step is the one I really want to get to, which is like actually planning the entire week and the draft because that one, it's nice that AI can generate all of these drafts, but like ultimately you do want quality control, right? You want to be able to see what the plan is and make a lot of tweaks to the plan to make sure that it's high quality. But we have all the pieces now. So we have the content creation skill right/post that will do the copywriting for each platform and generate a visual. We have the brand voice guideline with writing samples, banned words. Um we have a quality gate that runs automatically whenever you try to publish. So this can catch things like m dashes or too many characters. It can catch really anything you can imagine. So whatever you think of in terms of quality, like I mentioned earlier, one use case is you could have it score the verality of your post and if it scores below a certain number, it it could retry rewrite the post so that it scores a little bit higher. And then we have parallel posting with multiple sub aents. So now we're going to tie everything together into just like one command that plans and schedules one week of contents. And then for this, I actually do want to update this to say I really want a whiteboard infographic because that's what I was really excited to show that I'm going to say update post skill so that it chooses an infographic visual template, not a carousel, just because we've done two carousels already. So, I want to showcase something a little bit different. You can also create videos, by the way, like you can feed in your own assets, photos and videos to populate slideshows and videos, but that's a little bit more advanced, so we won't cover that today. Okay, so it's going to update that. And then here is the prompt. Again, it looks long, but it's it's really not crazy. So, we're going to create a second skill. This one's going to be called plan week. And it's different from the first one. So the first one is just like, hey, I have an idea and I want to post and I want to have all of these posts across the platform. So it's like posting one idea at a time to multiple platforms. This skill is like really planning your whole week. So given a topic or a set of topics, it's going to plan like multiple posts and across multiple platforms as well. It's similar as before, it's going to figure out what you want from whatever you provide. So you could provide a combination of topics and Tik Tok videos and YouTube videos and it's going to be able to extract them and it's going to research the topic, write the weekly content plan. It's going to output it in a separate file so that you can view the entire plan, make your edits and suggestions there before anything gets scheduled out. It's also going to ask if you want a visual for the posts. So I might just just for time purposes, I might just do visuals for like half the posts, right? instead of all of the posts for the week. And then it's going to draft the text post, show you what it looks like. Let's see. It's going to show you the plan, wait for your approval. This line again is just to, you know, make it clear to schedule in the next free slot. And then after you approve the post, it's going to use parallel sub agents to go ahead and schedule it in the next free slot. And then similarly, it's going to ask clarifying questions one at a time in case we missed anything really important. And this is the last like technical prompt though. So the only thing after this is just creating the claude MD file as a way to codify everything we've learned in the interaction. Okay. So question is how many posts per day should the weekly plan include? So let's do B. So it's going to be one post per platform per day, but we're only going to focus on LinkedIn and Twitter. I don't have IG, Facebook connected. You can also customize it. So it could be like specify each time you run the command. Again, the beauty of cloud code is like this is all easily easily changeable. If you if we choose B and we decide like right now we're going to switch it to D, I mean it takes like 2 seconds and it's done. Whereas with a guey based tool like NAN or other types of drag and drop tools like it really would take a lot more work than this to rewire everything to change the conditions. So once you get into cloud code, it's it's pretty addictive and like very powerful what you can build. Okay. So question two, should the weekly plan cover all seven days or weekdays? Let's just say weekdays only for now. Let's let's pretend we take a break on weekends. Someone is asking how does the agent authenticate? So it's authenticating through Blot's official API connection to those platforms. It's not claude code like in authenticating directly with the social platforms. Okay. content approach. Do we want one main topic or URL and create 10 different angles or generate completely different topics each day or you can specify it each time, right? I'm just going to say a for simplicity. So, we're just going to give it like one URL and create 10 different angles from it. Okay, let's do let's do a different Hormosi video. Okay, let's go back here. Okay, question four. for when publishing. Yeah, let's just do next free slot because we're actually like scheduling this in advance. And then actually that's a good opportunity to set up our slots. So slots are just like times when you can publish. So here when you go to calendar, go to your weekly schedule and you'll see this button add slot. So what this means is if I just want to publish let's say Monday, Tuesday, Wednesday, Thursday, Friday every day at 10:00 a.m. on Twitter and let's say LinkedIn. So those will be my slots. So all I have to do is like create content, drop it in the slot, and it's just going to be scheduled in the next open time. And this is really handy because different platforms, you know, punish too frequent posting differently. So like on Twitter, you can totally tweet 15 times a day and you don't get punished for that, right? But on LinkedIn, you generally don't want to post more than once per day because you would be annoying your network. on Instagram like three posts a day like I do is already pushing it, right? So just depending on the platform, your frequency might be different. The times you post might be a little different. So it's really nice to set up slots and then all you have to do is like add content to the slots like and so you don't have to worry about like what exact time the content is going out. So now it is compacting. You hit the context window. So but again it's really not that big of a deal. like this is a pretty simple thing that we're building. Um, so I'm not like super concerned about it. But so occasionally though I do notice it kind of like times out and freezes and I have to like stop it. But this looks okay so far. So you can schedule it to post on nine social platforms. Instagram, Facebook, Tik Tok, LinkedIn, Pinterest, Blue Sky Threads, Twitter, YouTube. Yeah. So you can create these slots and schedule to all of these different platforms. So it's really neat. Does a post generate faster if your images and videos are locally on your machine? Yes. So one option here is to completely ignore AI image and video generation and just use your own photos and videos. And you can do that. You can just like tell Claude, hey, I want to pass this local set of photos or videos I have over to the API to schedule them. And so I probably should do that in another tutorial because that would be cool. Like, you know, I have folders as well just of like selfie photos that I actually would post on LinkedIn because selfie photos do really well on LinkedIn for some reason. So that would be cool if it just like grabbed one of the selfie photos, right? And just like put it with my LinkedIn post. If you're starting out on LinkedIn, I honestly recommend posting only three times a week and just like spend a little more time improving the hook of your post for LinkedIn or improving the visual of your post for LinkedIn. What if this stream is being done by an AI? How fast do you run out of your weekly allowance on Claude? I've actually never hit my weekly limit on Claude, but I'm also not one of those people that's like just like running multiple crazy stuff 24/7. like I just use it like a normal person like several hours a day. Okay, so it's done here. So weekly plan was created. So I've created oh weekly plan. Okay, plan week. Just to be safe, I I have a habit of doing this. I always refresh or start a new cloud code session after building a new skill just to make sure it triggers. Um it probably will trigger anyway, but that's just my habit. Okay, then let's grab Alex Horoszy's YouTube video. Boom. I think it's slash plan week. And I'm just going to pass in this URL. And because it's planning the whole week, we don't have to specify the platforms. Like it already is going to try to post it to all the platforms. Okay. So, let's just do that. Currently using Zapier, but I run out of activities. Is there a cheaper AI to use that's similar? Yeah, honestly, make.com is significantly cheaper than Zapier. I know it's increasing its prices as well, but comparatively, it's still significantly cheaper than Zapier. And I think it's the most similar to Zapier. So it's called Make like just like make something make.com. A lot of pe people do use Naden. It has a self-hosted option. So it can be like ultra cheap to run for really high volume workloads, but the learning curve is a bit steeper. So if you're coming from Zapier, I honestly would recommend just checking out make.com. It it already is much cheaper to use. Yes. When using cloud code, you think you close the session and open it again. Yeah, I think that's where I picked up the habit because I typically use Cloud Code with a terminal within Visual Studio Code. And I mentioned this earlier, but that's because you get access to some of the newer beta features such as cloud in Chrome, which is a beta feature not accessible through the official extension as far as I know yet. And you also get Vim mode that actually works. Super weird cuz the official extension used to have Vim mode. Like I was pretty sure I was using it before, but now it doesn't. So I I use cloud code within a terminal within Visual Studio Code. But the downside of it, it's just like not as pretty. It's just like really pretty here with the official extension. I think this was like a really long video. So it's it extracted the content from the YouTube video. I don't know how long it is. Oh wow. I should not have chosen this video. Oh my god, it's like two hours long. That's why it's like chunking up the YouTube transcript. Well, it was cool. It actually did it right. Like I was surprised that worked. And now it's in the process of generating 10 unique angles from the video and then writing 10 full postdrafts and then creating five infographics, one per day. And then it's going to output the plan and then present the plan and get approval. Okay. So it's creating Monday infographic, closer framework, Tuesday infographic, pricing and offers. I'll zoom in. Wednesday infographic volatility and risk. Thursday content to ads. Friday infographic focus and pick one. All five infographics are cued. So if we go back to blueot, if the infographics truly are cued, then yeah, you'll see the five drafts here. You can see that they were created like a few seconds ago. So that means they're in the queue. Okay. Pull all five infographic jobs. Yes. So what polling means is like the API is asynchronous. So it's like I start creating an infographic and then you have to check when it's done. And it depends like how long it takes depends on like what models you're using. So if you're generating video, that's going to take like five to 10 minutes. And like that's the main reason I'm not demoing video generation right now cuz it's going to take a while. If you're using a template that does not involve any any AI image generation, for example, it's just like different graphics, pre-built graphics or your own images and videos. So you're just uploading them. You're not generating anything. That generates like a lot more quickly. That's done a lot more quickly. So, okay. So, now it's writing the complete content plan while infographics generate. There's the content plan. Oh, yay. The infographics appeared. So, nice thing with Blot. I was super lazy. So, it will just like refresh the page. Whatever the infographic is done, it'll like navigate directly to the infographic. So, this is from the 2hour long hormosi live stream, right? Turn your best organic content into paid ads that drive leads. Identify winners, blah blah blah. And it's it's a cool like slanted whiteboard infographic. But let's take a look at some of the other ones. So, I don't know which day this is, but like the power of focus and business. Pick one, go allin. This is another nice whiteboard infographic. Nice colors and stuff like that. Okay, let's choose another one. I'm just curious like what it wrote is okay. Volatility versus risk. So, I haven't heard him actually talk much about this. So, this is pretty interesting. And by the way, these are all taken from a 2hour Hormosi live stream, right? Obviously, you want to put your own thoughts and perspective in here, but just showcasing what is possible. So, the offer stack that fixes your cash flow forever. And then this one is the closer deal. So, if you're familiar with Hormosi, this is like his sales closer framework step by step. So, this this one's actually really cute with this funnel that's colorful. So, that's cute. Okay. Does it animate? You actually can animate it. But again, that would take like five more minutes. So, that's the main reason I'm not showing any video generation because it just takes a long time and then if something goes wrong, I have to retry it. Whiteboard infographics are a nice middle ground, right? Like it took maybe 2, 3 minutes, but it's not like an insanely long amount of time. So, now it's going to fetch the infographics, but most importantly, we can look at the content plan. Yeah. So on the left hand side there should be a content plan document. Boom. Here. Okay. So I'm going to open it. I'll try to expand it. So this is the content plan. So Monday LinkedIn the this is the angle. So this is not the post. This is like the angle it extracted from the 2-hour long YouTube video. And then this is the draft post. So okay, Alex Hormosi fixed it in 10 minutes. It's called closer. Boom. Boom. Boom. If you're familiar with LinkedIn, like you know, like this is the format for LinkedIn, right? And then this is the visual and it has the ID so you can go check on it. And then this is post to Twitter for Monday. So this is the same day and it's going to use the same infographic, but it's going to have like a tweet. So it's limited to 280 characters. Okay. And then here's Tuesday for LinkedIn. So the angle is stop charging monthly. package your services into outcomebased offers that fix cash flow. And then here's the draft post for LinkedIn Hormosi style, right? And then here is Tuesday, the Twitter version. So it's significantly shorter. And then Wednesday, so I'm not going to go through every single one, but like what's cool in Visual Studio Code is Claude Code is aware of which lines you've selected. So, let's say I just want to edit Wednesday. You can actually just select like this area and be like just completely rewrite this area. So, it's hard to see, but there's a thing down here that says 24 lines selected. So, Claude Code is aware. So, if you select these two lines, it's aware of what you're selecting. So, it can apply the prompt just on your selection. So, you can just like select Wednesday and be like just rewrite Wednesday, you know. So, that's really cool. That's one of the benefits of like using cloud code within an editor like this. The other thing is you can also just tell cloud code you don't like this and to rewrite it, right? So like you have the option here to manually edit, revise, tweak the post so that it fits your brand voice. You also have the option to have Claude code help you. So, if you're noticing something kind of inconsistent across all of these posts, you can tell Cloud Code, hey, like there's something I don't like about these posts, like I'm really not liking the theme or the writing style. And Cloud Code will work with you to like keep revising the drafts until you're happy. And that's really important because like most people should not start out with full automation of content. if you don't know how to make good content, like you're not going to learn by setting and forgetting it and like never looking and like it's there's still a ton of trial and error involved. But the beauty of once you set up this system is you can like focus all your time on just like tweaking the drafts and it's already pre-built with your brand voice. It can analyze apparently a 2hour long YouTube video which I didn't think would work but it worked like insanely well. It can generate images. is it can generate like the infographics like we showed about, right? Like this one is super cool, the closer framework and now you can spend like the majority of your time actually just improving the content instead of spending the majority of your time figuring out how to post the five social platforms, scheduling it on each one, generating the visuals for each one, etc. Okay, so here's the plan summary. Here's the themes. Edit any posts directly. Let's just say approve, but just schedule it in advance. Okay, so now it's going to try to publish the 10 posts, but hopefully it listens to me when I say schedule next post. Um, this will save me at least 5 hours each week. Well, this is just the base version. Like you can extend this to publish to like four more social platforms, three different brands. Like you can have insane quality gates. I call I I think I'm the only one who calls this a quality gate. I like maybe quality check is an easier term, but what I said before about like a quality check that scores your post based on comparing it to a database of like 200 viral posts and then if you score below a certain threshold, it like rewrites the hook, right? So like you can do all kinds of like really crazy things once you establish this as the base. Okay, so now it's going to like publish and publish publish. It would be nice if it just did that without asking me for permission. So, we'll do this in the next step. And then I'm going to check my calendar to make sure it's posting. So, I feel like it's just posting and not actually respecting the post in the future. So, I'm going to check Twitter. So, yes, it just posted all of our posts instead of scheduling in the future. So, I will need to fix that before I actually launch the prompts. But what's supposed to happen is it's supposed to schedule it here. So you can see all the upcoming posts here, but it decided to be very trigger happy and just schedule them all at this moment. So, but I will tweak the prompt so that that doesn't happen. I was just kind of on a time crunch for this one. The very last thing I definitely did want to talk about is the Claude MD file. Um, if you mean pricing tier for Cloud Code, I'm personally on the 200 per month plan, but you can definitely do this as well on the lower tier plans, especially if you're just like batching content cuz like a lot of the people who hit the limits of the lower tier plans are using it like a lot. But in this type of workflow, you could just like sit down for a few hours, batch all your content for the next week or two, right? And you should be okay with the limits in that way. So, let's go to the very last thing. The last thing is to create your claude MD file. So now we have a working system. We have the two skills, the quality checks, the brand voice, and the published posts log. I forget if I showed that, but this is basically a log of all the published post including the links. So you could hook this up to another tool and get the analytics for your post and stuff if you want that. But most importantly, I wanted to talk about the claude MD file. You can think of this as a way to like codify everything that you've built and learned. And so I like I'm kind of religious with my cloud MD file. I'm always like keeping it up to date and cleaning it up, especially for my super long cloud MD file for my codebase. And it's going to create a cloudm file that links to the docs. You know, tells Claude where the API key is, links to our brand voice file, links just it kind of just explains what's in this project, what is this project for, and any other patterns or conventions we establish. So, just go ahead and copy this. This one shouldn't take long. There's not many tool calls or anything. Okay. And while we're waiting for that, just to recap everything we've built. Step one, we just did one social post to confirm that everything worked end to end. So you can type slashpost and then your topic and then the platform you want to post on and it's going to generate the post, generate a visual if you want one, and then post it to Twitter. And then the next step is incorporating the brand voice, remember, with a sample. So, for now, we just use kind of my humanized AI prompt to clean up the AI sounding content and then samples from Justin Welsh and Alex Hormosi, which you could replace with people in your niche, but ideally, I highly recommend putting your own writing samples and stuff. And then step three are like quality checks. So, for example, remove all M dashes or replace them with something else. You can also check character length. You you can do all kinds of things with quality checks. Like some people don't want to have hooks that are more than 10 words long. Like that's a very strict thing for their copyriting. So like that could be a quality check. If you don't want emojis in the post, that could be a quality check. If you want to make sure your website is always at the end of the post, that could be a quality check. So there are many many things you can incorporate in step three to to really save you a ton of time. And then step four is like posting to multiple platforms in parallel with sub aents that are working in parallel. So we created one visual and then we posted to both LinkedIn and Twitter. And then step five is planning the full week. So when you do plan week instead of post. This is a new skill. You put in the topic. In our case we put in a 2hour long hormosi live stream and then Blotato like extracted all the content from that 2-hour long live stream. sliced it up into different angles and created 10 posts for the week for LinkedIn and Twitter. And it should have scheduled it for the future. It actually published all of them. So, I will be sure to tweak that before I roll out the prompts and tutorial. And then step six, what we're waiting for now is the Claude MD file. This helps Claude just instantly remember what is your project about, where are things located, how are things structured, best practices in running or working with your project. And so here it created the cloud MD file. And so that's great. So here's the cloud MD file. So it says what the app is, the APIs we're using, different conventions, the endpoints that we're going to be calling, scheduling, um, different visual templates. At some point I told it to prefer infographics because we kept getting car like carousels without an infographic. So I just wanted to showcase what the infographics look like. Quick rules, crossplatform publishing, quality gates skills. So just just summarizing what is already in the rest of the project like literally how it's structured so that every time you start a new cloud code session, it's not starting like completely fresh. It has all of this context about what is this project about? How does it work? What are the important things to know and important conventions? Okay, I think that's it. Yeah, just under two hours. Wow, that's a long one. But yeah, thank you so much for joining. You have my full permission to repurpose this tutorial. Build whatever you want from this. It's actually a very very very powerful base template and very incredibly powerful and so many ways to customize it from here. I'll do a future tutorial where I show using your own images in video so you don't have to pay for AI image generation, right? which can get expensive. But yeah, thank you guys for joining. I plan to do more series like this. I know it was like kind of fast in the beginning, so I will also make like some more beginner level tutorials that go a bit more slowly for folks who are like just starting out with this. So, thanks everybody. Take care.

## Timed Segments

[0:00] So, welcome to my ultimate Claude Code
[0:02] free course where we will be building an
[0:04] AI marketing officer completely from
[0:06] scratch. I will walk you through
[0:08] installing Claude Code for the first
[0:10] time, creating two custom skills,
[0:12] hooking up hooks to check for quality in
[0:15] all of your content, hooking up your
[0:17] brand voice and samples, and then
[0:19] building out a multi-platform publishing
[0:21] pipeline that utilizes parallel sub
[0:23] agents for efficiency. And so by the end
[0:25] of this video, you&#39;ll be able to type
[0:27] one sentence and Claude will research
[0:29] your topic, draft a week&#39;s worth of
[0:31] content, including visuals generated,
[0:34] show you the plan so you can edit it,
[0:36] review it, put your own voice there,
[0:38] wait for your approval, and then
[0:39] schedule everything across all of your
[0:41] socials. This is the definition of batch
[0:44] producing content and using AI to have
[0:47] leverage and scale yourself. So this is
[0:49] a rough outline of what we&#39;ll talk
[0:51] about. the first part. A lot of people
[0:53] have questions on just how to set up
[0:55] cloud code, how do you do permissions,
[0:57] what are the different modes, like what
[0:59] is context, etc. So, I&#39;m just going to
[1:01] go over like the basics and foundations.
[1:03] And this will help you no matter what
[1:05] you decide to build with Cloud Code.
[1:07] These are just really, really handy tips
[1:09] and tricks I&#39;ve learned from over 500
[1:12] hours using Cloud Code on a regular
[1:14] basis to build my product. After we set
[1:16] it up, we&#39;re going to create our very
[1:18] first skill that&#39;s going to be able to
[1:19] take a topic or a YouTube video, create
[1:22] a post out of it, create a visual, and
[1:24] publish it to social media. The next
[1:26] step is creating your brand voice and
[1:28] adding samples that reflect your brand.
[1:31] And so, we&#39;re going to be improving the
[1:33] skill that we&#39;ve built. And then the
[1:35] third step, I call it quality gates.
[1:37] That might sound like a weird word, but
[1:39] it&#39;s essentially using a feature called
[1:41] hooks so that we can automatically check
[1:44] the quality of each post before going
[1:46] out. So, a simple example is like if you
[1:48] don&#39;t want m dashes in your content, we
[1:51] can have cloud code automatically check
[1:54] every single post for m dashes, remove
[1:56] it or replace them before they get
[1:58] published. That&#39;s a very simple example,
[2:01] but you can also think about like
[2:02] keywords that your brand doesn&#39;t want to
[2:04] be associated with. You can also think
[2:06] about like color schemes in the visuals.
[2:08] There are all kinds of quality checks
[2:10] that you can add. I&#39;m just giving some
[2:12] of the more simpler examples. Okay. And
[2:15] then after that, I&#39;m going to introduce
[2:16] you to sub aents and we&#39;re going to do
[2:18] multiplatform posting with sub aents so
[2:22] that each sub aent asynchronously
[2:24] handles publishing to its own social
[2:26] platform. And then the fifth step is
[2:27] we&#39;re going to create a second skill
[2:29] that plans the full week of content,
[2:31] gives it to you for review, and then
[2:33] schedules it out on your calendar. So
[2:36] this is really optimized for
[2:38] intermediate level content creators who
[2:40] just have a couple hours each week,
[2:42] right, to sit down, create content, and
[2:44] batch schedule everything. And then the
[2:46] very last step is I&#39;m going to talk
[2:48] about the Claude MD file. So basically
[2:50] your memory as you do these projects
[2:53] adding them to your cloud MD the things
[2:55] you&#39;ve learned tips and tricks that are
[2:56] helpful when interacting with cloud make
[2:58] sure to add that to your cloud MD at the
[3:01] end of every session that you have. So
[3:03] first let&#39;s install cloud code. So
[3:05] that&#39;s number one. And I know many of
[3:08] you have already installed cloud code
[3:09] but just bear with me for people who
[3:11] have not done that. I&#39;m not going to
[3:13] literally walk through it step by step
[3:15] but if you&#39;re brand new sign up for a
[3:17] claude account obviously. So, go to
[3:19] claude.ai.
[3:21] A lot of people do ask me about pricing,
[3:23] so I&#39;ll just talk about that really
[3:25] quickly. I am personally on the $200 per
[3:29] month plan. Like, I get so much value
[3:31] from Cloud Code. It&#39;s absolutely worth
[3:33] it to me. If you are just on this $20
[3:36] per month plan, you are going to hit the
[3:38] limits very quickly because of all the
[3:40] tool calls involved when you use an
[3:43] agentic tool like Claude Code. So, I
[3:45] recommend at minimum this $100 per month
[3:48] plan. Obviously, if you&#39;re just testing
[3:50] it out, you know, stick to the $20 per
[3:52] month plan and you will find that you
[3:55] will be able to cancel so many different
[3:57] tools once you actually pick up Cloud
[3:59] Code and start using it. So, that&#39;s the
[4:01] plan. And then what we&#39;re going to do is
[4:03] we&#39;re going to install this free tool
[4:05] called Visual Studio Code. And it&#39;s
[4:08] basically an editor. You can think of it
[4:10] as like Google Docs but for developers.
[4:13] The reason why I encourage people to use
[4:15] this is because it makes it really nice
[4:18] to review the work that cloud code is
[4:20] doing. So if you are just using a
[4:22] terminal, it&#39;s a little bit harder to
[4:24] like review the output of whatever AI is
[4:27] generating. So when our AI marketing
[4:30] officer generates a weekly content plan,
[4:32] we want to be able to easily look at it,
[4:34] make edits, provide feedback, etc. And
[4:37] so I just recommend getting used to
[4:39] using cloud code in some kind of editor.
[4:41] It doesn&#39;t have to be Visual Studio
[4:43] Code. You can use other tools like
[4:45] anti-gravity has is a fork of VS Code.
[4:49] So, you can just download the Cloud Code
[4:51] extension as well. In my testing, I
[4:53] found it to be a bit slower and buggier,
[4:56] which is why for now, I&#39;m sticking to
[4:58] Visual Studio Code for Cloud Code. So,
[5:00] go ahead and download it and then open
[5:03] it. It&#39;s going to look empty, but you
[5:05] can open files and stuff like this. And
[5:08] then on the left hand side, actually
[5:10] mine looks a little bit different than
[5:12] yours probably, but look for this icon
[5:14] that says extensions, okay? And then
[5:17] search for Claude. And the first result
[5:20] should have over 4 million downloads. So
[5:23] go ahead and install that. So this is
[5:25] going to be the Claude Code official
[5:27] extension for Visual Studio Code. So go
[5:30] ahead and install that. Once it&#39;s
[5:32] installed, you will see this orange icon
[5:35] in the top right corner. This is Cloud
[5:37] Code. So, go ahead and click that. Boom.
[5:40] And it&#39;s going to look something like
[5:41] this. Yours is probably not pink, but
[5:44] it&#39;s going to look something like this.
[5:45] And then, since you&#39;re brand new to it,
[5:48] it should prompt you to log in. Like, if
[5:50] it doesn&#39;t immediately prompt you, type
[5:53] /log and then you should see this option
[5:56] to log in. So, go ahead and just type
[5:59] /lo or click that option, and it will
[6:01] prompt you through all the next steps
[6:03] like signing up, authenticating your
[6:05] account, etc. you. It&#39;s super super easy
[6:07] at that point. Next, create a folder
[6:10] where we&#39;re going to build this out. So,
[6:12] I&#39;ve already created my folder. I called
[6:14] it AI Social Media Manager. So, go ahead
[6:17] and create your folder and then open it
[6:20] within Visual Studio Code. So, you
[6:22] should see your folder name right here
[6:24] like this. So, a lot of people ask me
[6:27] about permissions. So, when you start
[6:30] using Cloud Code, it&#39;s going to ask you
[6:32] permission literally for everything. And
[6:34] it&#39;s kind of annoying. you have to like
[6:35] grant permission, let it do things every
[6:37] single time. So, this is a really handy
[6:40] prompt. And what this prompt does is it
[6:42] will tell Cloud Code to allow most
[6:45] relatively safe commands. By safe, I
[6:48] mean non-destructive commands so that it
[6:51] doesn&#39;t ask you again and again. So, if
[6:53] you&#39;re on YouTube, you can just
[6:55] screenshot this, right? So, screenshot
[6:57] this and drop it in the cloud code to
[6:59] get the text. I can also pull it up
[7:01] here, right? So, here&#39;s the prompt right
[7:03] here. And again, this will just add
[7:05] permissions. In for this particular
[7:07] case, I&#39;m only adding it to this cloud
[7:10] project. So that if you are currently
[7:12] using cloud code and you don&#39;t want it
[7:13] to be affected to other projects, then
[7:16] you know this line will take care of
[7:17] that. If you do want this applied to all
[7:19] projects, then you can just remove this
[7:22] section and it will add it globally to
[7:23] your user. So yeah, go ahead and type
[7:26] that prompt. So here where it&#39;s saying
[7:28] allow bash command. So this is an
[7:30] example of it asking for permissions.
[7:32] Someone&#39;s asking, &quot;How do you add Cloud
[7:34] extensions?&quot; So, to add the extension on
[7:36] the left sidebar, you&#39;ll see an icon
[7:39] that kind of looks like I actually
[7:41] changed my whole sidebar, but it looks
[7:44] like three cubes. Like one cube&#39;s kind
[7:46] of tilted. So, if you hover over the
[7:48] icons on the left, you should find one
[7:50] that says extensions. And just search
[7:53] for Claude Code. If you type Claude, it
[7:55] should be the first one that pops up.
[7:57] And that&#39;s how you download it.
[8:00] Yeah, it&#39;s usually on the left side if
[8:02] you are with a fresh install. And so
[8:04] here it&#39;s asking for permissions. This
[8:06] is exactly the type of thing we want it
[8:08] to just like do automatically. Like I
[8:11] don&#39;t want it to ask me every single
[8:12] time. It&#39;s checking what&#39;s in a
[8:14] directory, right? But first it&#39;s
[8:16] checking what&#39;s in the directory and
[8:17] then it&#39;s going to plan to update our
[8:19] cloud settings. So here it&#39;s going to
[8:21] edit settings.json.
[8:24] Okay, just click yes. So what this is
[8:26] doing conceptually is there are lots of
[8:29] bash commands and other commands like
[8:31] searching the internet that claude is
[8:33] going to ask you for permission for like
[8:35] all the time and it&#39;s super annoying.
[8:37] It&#39;s like you can do it just go like you
[8:40] can check what&#39;s in a directory it&#39;s
[8:42] fine like you&#39;re not going to break
[8:43] anything. So I personally allow claude
[8:46] code to just proceed with
[8:48] non-destructive commands. Even some
[8:50] commands that write contents I will
[8:52] allow it right. It&#39;s it&#39;s more about
[8:54] like your familiarity with it. Do you
[8:55] know what cloud code is doing? Are you
[8:57] able to follow along? This is a pretty
[8:59] safe one. This is a pretty safe
[9:00] variation. Uh okay. So if I open like
[9:04] this file. So these are like lots of
[9:06] different permissions that we are
[9:08] granting Claude. So it doesn&#39;t have to
[9:10] ask us like every single time. Um, the
[9:12] next thing people ask me about is modes.
[9:14] So, here on the bottom left, it says ask
[9:17] before edits. So, this is generally best
[9:19] practice. If you&#39;re new to all of this
[9:21] stuff, I recommend staying in this mode.
[9:24] But, there are other modes like edit
[9:25] automatically in plan mode. So, what I
[9:28] do practically is I spend about 90% of
[9:32] my time in plan mode so that Claude
[9:34] doesn&#39;t accidentally change anything.
[9:36] And then when I&#39;m very happy with a
[9:38] plan, then I switch to edit
[9:40] automatically. So, we spend 90% of our
[9:43] time back and forth sparring back and
[9:45] forth on the plan. And then only when
[9:48] I&#39;m super happy with it and confident
[9:49] it&#39;s going to not break stuff, then I
[9:52] switch to edit automatically and just
[9:54] let Claude like implement the plan as
[9:57] we&#39;ve discussed. So, you can leave it at
[9:59] edit automatically. For this pretty
[10:01] simple tutorial, like most of my time,
[10:03] I&#39;m working on a complex existing
[10:05] codebase. So, it&#39;s really important that
[10:07] I know what clot is doing, what it&#39;s
[10:10] changing. But for this simple build,
[10:12] especially if you&#39;re building something
[10:14] from scratch, you can be a little more
[10:16] aggressive and just leave it at edit
[10:17] automatically. A lot of people also ask
[10:19] me about context. So if you&#39;re new to
[10:21] Cloud Code, click slash. Well, that&#39;s
[10:23] not great. So I just changed the theme
[10:25] right before [laughter] this live. So
[10:27] normally when you click slash, you
[10:29] should be able to see the title of each
[10:32] command. So like attach file, mention
[10:34] file, clear conversation, switch model,
[10:36] thinking, account and usage, toggle,
[10:38] fast mode. So a couple things I will
[10:40] point out. So /mod switch model. So a
[10:43] lot of people ask me I generally use
[10:45] opus 4.6 for all technical work and I
[10:49] will only use these lesser ones like
[10:51] haiku sonnet. If I&#39;m doing something
[10:53] that is just like super easy. But for
[10:56] building stuff that&#39;s technical I will
[10:58] stick to whatever is the most capable
[11:00] model. As of today it&#39;s opus 4.6. So go
[11:03] ahead and click opus 4.6 or you can type
[11:06] it as well. Right click enter. And then
[11:09] the other thing I wanted to talk about
[11:10] is context. So personally for me when I
[11:14] code especially with complex existing
[11:16] codebase I clear the context every
[11:19] single feature or bug. So to do that you
[11:21] just type slashclear. I find that I get
[11:24] better results when I start with a clean
[11:26] slate when I&#39;m going to do a new feature
[11:29] or do a new bug fix. That&#39;s me
[11:31] personally. Other people swear by
[11:33] storing all of the memory and just like
[11:35] augmenting the memory capabilities of
[11:37] cloud code so that it remembers
[11:39] everything. I found I get much better
[11:41] results if I clear the context on every
[11:43] new type of thing I&#39;m working on. So if
[11:45] it&#39;s a new feature I&#39;m adding I will
[11:47] clear the context. Okay. And then the
[11:49] last thing I&#39;ll talk about in terms of
[11:51] setup again this is because like a lot
[11:52] of people ask me what&#39;s the difference
[11:54] between the visual studio code official
[11:57] cloud code extension and the terminal.
[11:59] There are actually differences. So if
[12:02] you&#39;re new to Visual Studio Code, in
[12:03] your top bar, there will be an option
[12:06] that says terminal and then that will
[12:08] allow you to open a terminal. And one of
[12:11] the biggest differences is the terminal
[12:13] typically has the latest features in
[12:16] cloud code whereas the official
[12:17] extension may not yet. So one example of
[12:20] that is cloud code in Chrome. You can
[12:22] launch it in the terminal by typing
[12:25] cloud--chrome.
[12:26] But in cloud code, it won&#39;t work that
[12:28] same way. In cloud code official
[12:30] extension, which is what we&#39;re using
[12:31] here, that won&#39;t work. The other thing,
[12:33] and the reason why I use it in the
[12:35] terminal, is for some reason Vim mode
[12:37] just doesn&#39;t work within the cloud code
[12:39] official extension. So, I just like to
[12:41] use it in the terminal. However, the
[12:43] downside of the terminal is just doesn&#39;t
[12:45] look as pretty or as userfriendly as the
[12:47] official extension. Somebody asked about
[12:49] anti-gravity. I have tried anti-gravity
[12:51] in claude code. I found it to be just
[12:53] like really slow and like laggy for some
[12:56] reason and I was just trying it today as
[12:59] well. But I do like with anti-gravity
[13:01] you can compare the answers between
[13:03] anti-gravity&#39;s agent and Gemini and then
[13:06] claude code as well. Now let&#39;s actually
[13:08] start building something. Our first step
[13:09] is to create a post skill. I guess I
[13:12] should start with what are skills. So
[13:14] it&#39;s basically like a custom command and
[13:16] then it encapsulates a set of
[13:19] instructions and it can include code. It
[13:21] can include API calls and the nice thing
[13:24] is that they persist across different
[13:26] sessions and stuff. So you can just be
[13:27] like slashpost and then it will know
[13:30] what to do based on the skill that
[13:32] you&#39;ve created and it lives in your
[13:34] project. So you can have skills at
[13:36] different level. You can have an in your
[13:38] project level you can have global skills
[13:40] that are accessible across all projects.
[13:43] And so what we&#39;re going to do first is
[13:45] create a skill here. So and I know it
[13:48] looks long, but I I just did some stuff
[13:50] that will help in just getting this
[13:52] working as fast as possible for you. So
[13:54] let me just walk through what this
[13:55] prompt is. So it&#39;s it looks scary, but
[13:58] it&#39;s really not that bad. Like first
[13:59] line is just we&#39;re creating a cloud
[14:01] skill. We&#39;re going to call it post.
[14:03] Here&#39;s the documentation for skills for
[14:05] claude. And then what does the skill do?
[14:07] It&#39;s going to be an AI social media
[14:09] manager that makes posts for these
[14:11] social platforms. By the way, you can
[14:13] change these social platforms. I just
[14:15] chose four randomly. You can post to
[14:18] like nine social platforms, but for
[14:20] this, honestly, for this, I&#39;ll probably
[14:21] just post two, but I&#39;ll build it for
[14:23] four. Okay. How does it work? The user
[14:26] chooses a platform and and inputs like a
[14:30] topic or an existing draft. They can
[14:32] even input a URL like a YouTube video, a
[14:35] Tik Tok video, an article, an audio
[14:38] file, a website, a blog, or a PDF. Or
[14:41] they can even input their own image or
[14:42] photos. And then AI is going to figure
[14:45] out the user&#39;s intent based on whatever
[14:48] you said. We&#39;re going to use my tool to
[14:51] extract the content. For example, if you
[14:53] are uploading a Tik Tok video, Blot can
[14:56] grab the transcript from that video,
[14:58] create visuals like infographics,
[15:00] carousels, slideshows, and videos, and
[15:03] then publish to socials. This is just
[15:05] the link to the Blotato API docs so that
[15:08] Cloud Code knows where to go. I like to
[15:10] include this because when you&#39;re
[15:11] testing, you probably don&#39;t want to
[15:13] publish everything immediately cuz I
[15:16] accidentally did that earlier today and
[15:17] I had to go back and delete a bunch of
[15:19] posts. So, and this is just saying that
[15:22] we have three options for scheduling. We
[15:24] can publish everything right now. We can
[15:26] publish at a future date, a specific
[15:29] date or time, or we can schedule at our
[15:31] next free slot. So, the way many social
[15:34] media schedules work is you kind of set
[15:36] up a schedule. Like, every day I&#39;m going
[15:38] to post on Instagram at 9:00 a.m. So,
[15:40] that&#39;s your slot. So, as you create
[15:42] draft Instagram posts, you just schedule
[15:44] them out and they just fill up your
[15:46] slot. So if you&#39;re already full for the
[15:48] next week and your next open slot is
[15:51] like two weeks from now, then your next
[15:53] post will just be scheduled in that next
[15:55] open slot two weeks from now. So it&#39;s
[15:57] just a it&#39;s just really handy if when
[15:59] you&#39;re batch creating content
[16:00] especially. So you sit down once a week,
[16:03] you just create content for that week.
[16:05] Boom, you don&#39;t have to worry about it.
[16:06] This line tells Claude that we&#39;re going
[16:08] to set up the Blot API key in this file
[16:11] settings.local.json.
[16:13] This one, this line says, &quot;We&#39;re also
[16:16] going to create a running log of all of
[16:18] our published posts and their URLs.&quot; I
[16:20] just thought this would be cool. So,
[16:21] like after we publish a post, we can
[16:23] actually track it and get the URL. And
[16:26] then this last line is just ask me
[16:28] clarifying questions one at a time until
[16:30] you&#39;re 95% confident you can complete
[16:33] the task successfully. Okay, so let&#39;s
[16:35] copy paste this. So, let&#39;s just copy it
[16:37] over here. I&#39;m going to zoom out because
[16:40] this is really zoomed in. And the first
[16:42] thing Claude will do is like try to
[16:44] understand what I&#39;m asking. So here
[16:46] Claude, you can see its thinking
[16:48] process. So first it&#39;s going to research
[16:50] how to create a skill properly and
[16:52] second it&#39;s going to research the API
[16:54] documentation. Third, it&#39;s going to
[16:56] design the /ost skill. Then it&#39;s going
[16:59] to set up the file for our Blot API key.
[17:02] Then it&#39;s going to create the log where
[17:04] we&#39;re going to store all of our
[17:05] published posts. And then it&#39;s going to
[17:07] ask clarifying questions based on
[17:09] anything it is still confused about.
[17:11] That last line is actually really
[17:13] important. Um because you&#39;re going to
[17:15] find that no matter how amazing you
[17:17] think your prompt is, there&#39;s always
[17:19] blind spots, edge cases, things you
[17:21] didn&#39;t think about. So Claude will just
[17:23] ask you one at a time like, &quot;What&#39;s your
[17:25] preference, A or B? What&#39;s your
[17:26] preference, C or D?&quot; Again until it&#39;s
[17:30] like 95% confident it can complete the
[17:32] task successfully. And I found that
[17:34] works really, really well. And I can be
[17:36] very lazy prompting. As long as I add
[17:38] that line at the end, it will force me
[17:40] to actually clarify what I mean. And
[17:42] again, it looks long, but it&#39;s really
[17:44] not. It&#39;s just like create a new cloud
[17:46] skill. This is what we&#39;re going to name
[17:48] it. Here&#39;s the docs. This is what the
[17:50] skill does. Okay. This is the API we&#39;re
[17:53] using. This section is just so like it
[17:55] clearly allows you to schedule in the
[17:57] future cuz I know sometimes like it
[17:59] forgets to let you do that. And then
[18:01] yeah, this part at the end is like,
[18:03] okay, here&#39;s where we&#39;re going to put
[18:04] our API key. I also want to keep track
[18:06] of all my posts and just ask me
[18:08] clarifying questions. And we can see
[18:10] that it&#39;s starting to ask me questions.
[18:11] So I&#39;m just going to move this. So the
[18:13] first question is like making this
[18:15] directory. So I&#39;m going to say yes,
[18:17] allow all. So you might have seen the
[18:19] options like yes, yes, allow all for
[18:21] this session. Honestly, for the purpose
[18:23] of this tutorial, you can safely click
[18:26] number two like just give permission for
[18:28] everything in this session. So okay so
[18:31] now it&#39;s writing our skillmd file. So on
[18:33] the left this is like your directory.
[18:36] It&#39;s it&#39;s your folder structure right.
[18:38] So you created this placeholder folder
[18:40] where we&#39;re going to experiment with all
[18:42] this. And now claude created this file
[18:44] skill.md. You can see it here. Allow
[18:48] write to blot API reference. Just say
[18:50] yes. So this is claude just creating the
[18:52] stuff we need. So your skills are going
[18:54] to be here. So this is the post skill
[18:56] that we talked about and then you can
[18:58] open it up here. So this is pretty cool
[19:01] to look at. And then this is our
[19:02] settings. So that&#39;s going to store API
[19:04] key. So here, settings.local.json.
[19:07] So this is where you&#39;re going to post
[19:08] your API key. And if you have other
[19:10] services you want to integrate, let&#39;s
[19:12] say you want to plug in Canva or Google
[19:14] Drive, like something for video
[19:16] generation, right? Like you can put your
[19:17] API keys here as well. Okay. So now
[19:20] Claude is asking, please paste your
[19:22] Blueot API key so I can add it. I&#39;m just
[19:25] going to say I&#39;ll add it later. just as
[19:27] a best practice, you know, you should
[19:29] probably just like put it there yourself
[19:31] so you know where this is and how to
[19:33] manage it. And I will talk about how to
[19:34] get your API key in a sec. I just want
[19:37] to show you the skill.md file. Okay, so
[19:39] for the skill MD file, let&#39;s look at
[19:41] what it created. So this is the name of
[19:42] the skill post. This is what it does.
[19:45] This is actually really important
[19:46] because this is how claude code decides
[19:49] when to use skills. So, you can trigger
[19:52] a skill explicitly by typing slash
[19:55] [laughter] I should not have changed
[19:56] this to a pink theme like right before.
[19:59] Um, or you can you you can just say
[20:02] something and then Claude will determine
[20:04] that hey, I should use this skill based
[20:07] on the description of what it does. So,
[20:09] you do want a description that is a
[20:11] little bit lengthy and comprehensive.
[20:13] So, this is a social media post creator.
[20:15] Step one, parse user intent, right?
[20:17] That&#39;s what we said like this. The
[20:19] reason why this is a little bit open is
[20:21] so that you don&#39;t have to remember to
[20:24] structure your request in a certain way.
[20:25] You can just type whatever and like
[20:28] posts will come out of whatever you
[20:30] typed. That&#39;s how I kind of designed
[20:32] this. If you pass in a YouTube URL, a
[20:35] Tik Tok link, a PDF link, an audio file,
[20:38] etc., those will also be extracted. Like
[20:41] I&#39;m going to do a demo where we put in
[20:43] the latest Hormosi video and we create a
[20:45] bunch of carousels from them. Right? So
[20:47] that&#39;s another thing you can do. And
[20:49] then step three is to actually generate
[20:51] the post content. Now these are pretty
[20:54] generic, right? We&#39;re going to fix this
[20:56] when we do the brand voice step. So
[20:58] don&#39;t mind that for now. And then if you
[21:00] want a visual with your post, this is an
[21:03] optional step. You can make one as well.
[21:05] So this will use my API to make visuals.
[21:08] And then the rest of it is just like
[21:09] literally how to publish a post, right?
[21:12] So this is just pulled from the API. Um
[21:14] because I noticed, you know, a lot of
[21:16] tutorials will show you how to use cloud
[21:17] code to make content, but then it&#39;s
[21:19] like, well, now what? Like you still
[21:21] have to make the visual, you still have
[21:23] to post to social media. Unless you can
[21:25] do all of those other tedious things,
[21:27] you haven&#39;t like saved that much time.
[21:30] And so the workflow I&#39;m showing today is
[21:31] like end to end. But we&#39;re just going to
[21:33] start with one post at a time, but by
[21:35] the end, you will have literally the
[21:38] entire week planned for you by your AI
[21:40] marketing officer. Okay. So, just as a
[21:43] best practice, by the way, it is a good
[21:44] idea to read what Claude is doing. I
[21:47] know we get lazy, we get sloppy, and
[21:49] we&#39;re like, I don&#39;t need to read this,
[21:51] but it&#39;s you like you&#39;re going to learn
[21:52] so much faster and be more confident in
[21:55] directing Claude in the right direction
[21:56] if you just kind of like follow along
[21:58] with what it did. So, okay, now it&#39;s
[22:00] saying we&#39;re ready. We&#39;re going to
[22:01] replace our API key. Okay, so remember
[22:04] this settings file where we have our API
[22:06] key. So, let&#39;s go grab it real quick.
[22:08] So, go to website. So, if you&#39;re not
[22:11] familiar with it, blot.com is an app I
[22:13] built basically so that I could make a
[22:15]  ton of content without going
[22:17] insane. Um, it&#39;s like literally what
[22:20] it&#39;s for. Okay, so just log in here or
[22:22] sign up here. And then once you&#39;re in,
[22:24] it&#39;ll look like this. Go to the bottom
[22:27] left, go to settings. Okay, and then go
[22:31] to API. And this is where you&#39;re going
[22:34] to generate an API key. It is a paid
[22:36] feature, by the way. So, like don&#39;t
[22:38] generate it unless you&#39;re paying. So,
[22:41] hopefully you&#39;re already an existing
[22:42] user. But go ahead and copy your API key
[22:45] and then add it here. And for anyone
[22:48] watching, I don&#39;t have social accounts
[22:49] connected to this throwaway account. So,
[22:51] yeah. Okay. I&#39;m just going to zoom out.
[22:54] I think I accidentally deleted a
[22:56] quotation mark. Okay. I&#39;m just going to
[22:58] copy it again to double check cuz I&#39;m
[23:00] paranoid. Okay. Yeah. So, just double
[23:01] check that. Make sure you still have
[23:03] quotations around your Blotato API key,
[23:05] right? So, it should look like this.
[23:07] Click save. So, if there&#39;s like a dot
[23:10] here, that means you have unsaved
[23:12] changes. So, you can do controls or
[23:15] commands S on Mac to save your changes.
[23:18] Okay. So, we&#39;ve added our API key. We
[23:21] haven&#39;t connected a social account yet,
[23:23] but let&#39;s just see what the post skill
[23:25] does. After you add a post skill, you
[23:28] may not see it in the menu. I mean, I do
[23:30] see it here, but just to be safe, I
[23:33] usually refresh cloud code just to make
[23:35] sure like everything is loaded correctly
[23:37] again. So, one thing you can do on the
[23:39] top right session, click new session.
[23:42] Boom. This will create a new Cloud Code
[23:45] session. Okay. And then I&#39;m going to
[23:46] grab a YouTube video. So, this is one of
[23:49] Horoszy&#39;s latest videos. You&#39;re 28
[23:51] minutes away from never being broke
[23:53] again. And then um we&#39;re going to do
[23:56] type /ost. And then the topic, let&#39;s do
[24:00] like AI entrepreneur tips. And then I&#39;ll
[24:04] just paste the YouTube link here. And
[24:05] let&#39;s say we want this for Twitter. Um I
[24:08] forget if that was the format to use,
[24:10] but hopefully it will tell us.
[24:13] Okay. Submit YouTube video for content
[24:15] extraction. So that&#39;s good. So this
[24:17] means it parsed the YouTube URL and it&#39;s
[24:19] going to submit it to the API so we can
[24:22] get the transcript. So I&#39;m going to go
[24:23] ahead and click two because I don&#39;t want
[24:25] to give permission to this every time.
[24:28] Okay. And then allow this bash command.
[24:30] So what this does for those who are you
[24:32] don&#39;t really need to understand this but
[24:33] if you&#39;re technically interested this is
[24:35] going to pull the blot API until the
[24:38] contents extraction is done. And
[24:41] sometimes there are errors right like
[24:42] here exit code one. So there&#39;s a parse
[24:46] error invalid instruction. The cool
[24:47] thing about cloud code is it actually
[24:49] tries to fix it itself. And so we&#39;ll see
[24:52] if that can work. I am curious what it
[24:55] did. So perfect. I&#39;ve extracted the
[24:57] content. Draft Twitter post. Your money
[25:00] goals are too small. AI entrepreneur.
[25:02] Stop hoarding money. Start hoarding
[25:04] skills. This sounds like Alex Horoszi if
[25:06] you um watch any of his content. So,
[25:09] okay. So, we have now a draft Twitter
[25:11] post and it gave us three options. We&#39;ll
[25:13] just choose the one that I see. I
[25:16] actually just listened to his podcast
[25:18] about inflation on this one. I think I
[25:20] like option two. Oh, actually, let&#39;s
[25:23] make an infographic.
[25:25] Okay.
[25:27] And obviously if you want to edit it
[25:30] like you don&#39;t like the wording, you
[25:31] don&#39;t like certain things, you can do
[25:33] that now. But we the next step here is
[25:35] to add brand voice. So like don&#39;t worry
[25:37] about that too much yet. Okay. So allow
[25:40] bash command. Yes. Okay. Now it&#39;s
[25:43] testing. Oh, unauthorized. That&#39;s not
[25:46] good. Okay. So it is complaining about
[25:49] an API key permission issue. That&#39;s kind
[25:52] of weird. The API key should work. try
[25:55] again because the API key just worked to
[25:57] extract the source. So [laughter] I&#39;m
[26:00] just going to tell it to try again.
[26:02] Okay, so the API key is working. It was
[26:04] just complaining because I don&#39;t have
[26:06] any social media accounts connected yet.
[26:08] So but first let me create the
[26:10] infographic. Then we&#39;ll connect your
[26:12] Twitter account. And so one of the
[26:13] reasons guys I&#39;m doing this completely
[26:15] live even though it&#39;s like kind of
[26:17] nerve-wracking when it doesn&#39;t work is
[26:19] because like this is the process. Cloud
[26:23] code takes care of a lot by trying to
[26:25] figure it out itself. But the more
[26:28] context you can give it about like
[26:30] what&#39;s working, what&#39;s not working, the
[26:32] faster it&#39;ll be able to figure it out.
[26:35] And don&#39;t freak out if it doesn&#39;t work
[26:37] the first time. It might just be some
[26:39] minor thing. So in this case, like
[26:41] Claude code just re misinterpreted a
[26:44] response it got from the Blot API. I
[26:46] don&#39;t have any social accounts connected
[26:48] yet. So, it thought that like something
[26:50] was wrong, but the truth is I just
[26:51] haven&#39;t connected my social accounts
[26:53] yet, that&#39;s all. And so, everything was
[26:55] working correctly, but it interpreted it
[26:57] incorrectly. But anyway, I&#39;m doing this
[26:58] live to show you like it&#39;s it&#39;s okay if
[27:01] stuff doesn&#39;t work as expected the first
[27:03] time. It often doesn&#39;t, but just keep
[27:05] just read what&#39;s happening, you know,
[27:07] work through it a little bit, right? It
[27:09] didn&#39;t take very long to fix it. There
[27:12] was nothing actually to fix. It was just
[27:14] claude code again misinterpreting the
[27:16] results from the API. Okay. So now it&#39;s
[27:18] pull it&#39;s actually creating the
[27:20] infographic. So if we actually go to
[27:22] blot, we should eventually see it when
[27:24] it&#39;s created. So here and then I will
[27:27] also use this opportunity to go ahead
[27:30] and connect my social account now. So go
[27:32] to settings and then log in with a
[27:35] social account. I&#39;m going to choose one
[27:37] I don&#39;t care about. So Twitter probably.
[27:40] Okay. And then once it&#39;s connected,
[27:43] okay, then you&#39;ll have Twitter down
[27:44] there. Okay, that&#39;s great. I should have
[27:46] chosen like a text carousel because it
[27:48] doesn&#39;t take as long. So I don&#39;t know
[27:49] how long this will take. If it takes too
[27:51] long, I will just create like a text
[27:52] carousel instead. So once you teach the
[27:55] skill and connect API, will it find and
[27:58] reformat content on its own? Yeah, I
[28:00] mean you can basically give it let&#39;s say
[28:03] like a list, you can have it search for
[28:05] a list of YouTube videos or a list of
[28:07] things relevant in your niche and then
[28:09] it will just take that content and
[28:12] create other new content out of it. But
[28:15] the next step is actually applying your
[28:17] brand voice which is really important.
[28:19] So it&#39;s not just like you you you know
[28:22] taking someone else&#39;s content. But yeah,
[28:25] I mean this this can be completely
[28:27] automated which is kind of the crazy
[28:28] part. But I I recommend having a human
[28:30] in the loop for sure. That&#39;s why in the
[28:32] last section it&#39;s going to create a
[28:34] content plan for the week and then you
[28:36] review it and add your edits and stuff.
[28:38] But everything&#39;s so streamlined and the
[28:40] text editor itself is a really nice
[28:42] interface for actually editing your
[28:44] drafts. You will need a Blotato account
[28:47] if you want to generate visuals and
[28:50] upload to social media. If you just want
[28:52] to generate like the text content, you
[28:55] can without blot. So that can be
[28:57] completely for free. You just can&#39;t
[29:00] upload like a YouTube video because
[29:02] Claude won&#39;t be able to get the
[29:03] transcript. you will have to like use
[29:05] some other tool to fetch YouTube and Tik
[29:08] Tok transcripts. And then to generate
[29:10] the visual, you still would have to use
[29:12] like some other tool. And then for the
[29:14] third one, publishing to social media,
[29:16] yeah, you would have to use some tool
[29:18] for that. But if you just want to do the
[29:20] copy, then that should be fine. Oh man,
[29:24] it said I ran out of credits. Okay, let
[29:25] me try a template that doesn&#39;t cost any
[29:27] credits. Okay, use a carousel template.
[29:31] I forget the names of my carousel
[29:33] templates. So, if I click create new
[29:35] video here, you can like see different
[29:37] templates and stuff. I&#39;m trying to
[29:38] choose one that doesn&#39;t cost any AI
[29:40] credits or anything. Uh, which one do I
[29:42] like? Oh, like quote card carousel.
[29:45] Let&#39;s try that. So, it&#39;s uh so it should
[29:47] be published soon. So, if you go to
[29:50] Blot, you&#39;ll actually see the carousel
[29:52] here. And then if I go to Twitter, so
[29:55] this is my live Twitter account, right?
[29:58] So, here is the carousel on Twitter. So
[30:01] I&#39;m going to delete this now. I&#39;m going
[30:02] to go ahead and try this again also with
[30:05] a different type of post. So people were
[30:08] asking like do you have to create a
[30:09] visual right? So if I just do slashpost
[30:12] and then let&#39;s put a topic like how to
[30:15] ski in icy conditions. So what this will
[30:18] do this won&#39;t research any YouTube video
[30:21] or Tik Tok video. It it will just use a
[30:23] perplexity AI research agent just to
[30:26] research this topic and then create a
[30:28] post based on it. So, let&#39;s say instead
[30:29] of a Twitter post, we want a LinkedIn
[30:31] post. So, just type LinkedIn at the end.
[30:33] I was not locked out. I ran out of
[30:35] credits, so I just logged into the
[30:37] database and gave myself a ton of
[30:38] credits. Okay, so what it&#39;s doing now,
[30:40] it fetched the completed post from
[30:42] Twitter and then it updated the log. So,
[30:44] if you go to post-log, boom. So, this is
[30:48] the post that I just showed you on
[30:50] Twitter, but deleted, but you can see
[30:52] what it posted here. Okay. So now I put
[30:54] a new post request to write this simple
[30:58] thing about how to ski in icy
[31:00] conditions. So it&#39;s asking if it should
[31:02] use the skill. I&#39;m going to say yes,
[31:03] allow it. So it&#39;s going to trigger our
[31:05] skill again, but it&#39;s not going to use
[31:07] blot. So if you don&#39;t want to use blot,
[31:10] just do this, but don&#39;t put in like a
[31:12] YouTube video or a Tik Tok video because
[31:14] you would need an external tool to be
[31:16] able to scrape those sources of data.
[31:18] Okay, cool. So we got LinkedIn
[31:20] postdraft. So that&#39;s option one,
[31:22] LinkedIn post. So then option do I used
[31:24] to dread icy ski days. That is true.
[31:27] Okay. Sharpen your edges. Which do you
[31:29] prefer? I think I prefer post two. And
[31:31] then so if I say I prefer this, it&#39;s
[31:33] going to proceed to post the LinkedIn
[31:35] and it&#39;s going to post just a text post
[31:37] without an image. Now one thing you can
[31:40] do if you have a bunch of images locally
[31:43] on your computer like images, videos
[31:45] just saved on your computer, you can
[31:47] post those instead of using AI
[31:50] generation. I think I just don&#39;t have
[31:52] any images or videos on this computer.
[31:54] But this is the cool thing about cloud
[31:56] code. It can access whatever is on your
[31:58] computer. So if you have a separate
[32:00] folder like social photos that you&#39;ve
[32:03] already like dumped in there, like you
[32:05] know they&#39;re good to go for social
[32:06] media, you can have cloud code like pull
[32:08] a couple of those photos and post them
[32:10] as a carousel on Instagram. You can even
[32:12] add title and captions on top of those
[32:14] photos and then post them as a carousel
[32:16] in Instagram. So that&#39;s one way to use
[32:18] this without having to like pay for AI
[32:21] image and video generation which can get
[32:24] a little bit pricey. So now what we&#39;re
[32:26] going to do is feed samples of your
[32:28] brand voice and writing style. So you
[32:30] guys may be familiar with this. This is
[32:31] like the short version of my humaniz AI
[32:34] writing prompt. And its job is really
[32:36] just to like remove super obvious
[32:39] annoying signs of AI, right? It&#39;s not
[32:42] it&#39;s not going to make your writing
[32:43] incredible. It&#39;s just like the baseline.
[32:45] And so what you want to do is add voice
[32:48] samples for each platform. What we&#39;re
[32:50] going to do instead of pasting samples.
[32:52] Let&#39;s say you&#39;re pretty new to content
[32:54] creation. You have no idea about your
[32:56] own samples. What you can do instead is
[32:58] say look up this particular creator&#39;s
[33:01] samples and use them as like stylistic
[33:04] inspiration. So we&#39;re going to do that
[33:05] for Twitter and LinkedIn. I would say
[33:06] there&#39;s still many use cases for non
[33:09] today. So where cloud code is pretty
[33:11] weak is anything related to
[33:13] orchestration. And so like deploying
[33:15] this, making it accessible to teammates,
[33:18] scheduling workflows, triggering
[33:20] workflows, integrations like pre-built
[33:23] integrations with thousands of apps and
[33:25] services. Those are all things NAD and
[33:27] other workflow automation tools still
[33:29] very much excel at today. Cloud code
[33:32] does not excel in those areas as of
[33:34] today. But you can do cool things like
[33:36] combine cloud code with NAD through MCP
[33:39] so that cloud code can just fix your
[33:41] NADN automation. So that is a really
[33:43] nice middle ground where you get the
[33:45] orchestration benefits of a mature
[33:47] workflow tool like naden or make.com.
[33:49] But you can use cloud code to like
[33:51] actually fix it and create the workflow
[33:53] for you. Um, okay. So I&#39;m going to copy
[33:55] it now. I&#39;m going to drop it here. And
[33:56] then where it says Twitter voice here,
[33:58] I&#39;m just going to say find samples from
[34:02] let&#39;s say Alex Horoszi for Twitter. And
[34:04] for LinkedIn, let&#39;s say Justin Welsh.
[34:06] For today, I&#39;m just going to like
[34:08] connect Twitter and LinkedIn. I&#39;m not
[34:09] going to connect Instagram and Facebook,
[34:11] but we can put placeholders here. Okay.
[34:14] So, click enter. And now what Cloud
[34:16] Code&#39;s going to do is like research
[34:18] those two particular influencers and
[34:20] basically get their samples and put a
[34:22] bunch of their samples within your brand
[34:25] guidelines. Obviously, you should use
[34:27] your own samples if you have them, but
[34:29] if you are pretty new to content
[34:31] creation, it is normal to kind of like
[34:34] stylistically try to copy big
[34:36] influencers just so that you get the
[34:38] hang of things. But you can see what
[34:39] cloud code is doing, right? So again, I
[34:41] always encourage you to read what it&#39;s
[34:43] doing. Web fetch, right? And then when
[34:46] it&#39;s orange or red like this, it&#39;s like
[34:48] for some reason this particular request
[34:50] failed. Maybe the website blocked it or
[34:52] didn&#39;t pull anything. When it&#39;s green,
[34:54] that means it was successful. So I just
[34:57] encourage you to get used to kind of
[34:59] reading, scanning what cloud code is
[35:01] doing so you have an understanding of
[35:03] what it&#39;s tried and what&#39;s working,
[35:05] what&#39;s not working. Okay. Okay, so now
[35:07] it&#39;s gathered examples from both both
[35:09] Hormosi and Justin Welsh and it&#39;s going
[35:11] to update the post skill right now with
[35:12] the brand voice. Okay, so I&#39;m going to
[35:14] open the post skill again so we can look
[35:16] at it.
[35:18] And here is the section that it&#39;s added,
[35:20] right? So it&#39;s asking for permission. So
[35:21] you can click yes. There&#39;s also a check
[35:23] mark up here by the way to accept
[35:25] proposed changes. Okay, now it decided
[35:28] to regenerate that LinkedIn skiing post
[35:30] using the brand voice. Okay, skiing on
[35:34] ice terrifies most people. I used to
[35:35] hate it too. Then one day changed
[35:37] everything. An instructor told me we
[35:39] Yeah. So this is definitely Justin Welsh
[35:42] style. So if you&#39;re familiar with his
[35:43] writing, this definitely brings that
[35:45] out. But I guess what we can do now is
[35:47] like do it but for Twitter so you can
[35:49] see the difference. So ski tips in icy
[35:52] conditions. And then let&#39;s put Twitter.
[35:54] So this post should be stylistically
[35:57] pretty different from the LinkedIn one.
[36:00] Although Hormosy and Justin Welsh
[36:02] actually do overlap quite a bit in um in
[36:05] copywriting style, but Twitter is a bit
[36:07] punchier and a bit shorter form than
[36:10] LinkedIn. So yeah, so these are like
[36:12] shorter options to fit in the character
[36:14] count. So like boom boom boom, right? So
[36:18] that&#39;s Twitter, that is LinkedIn and
[36:20] already it&#39;s much better than kind of
[36:22] the generic stuff that we were getting
[36:24] before adding the brand voice. Okay. So
[36:26] if I open skill.md basically you can put
[36:28] your samples here if you already have
[36:31] samples as a creator and that is how you
[36:34] will get like much better results. So
[36:36] the next step is to create what I call
[36:39] them quality gates. I call it a gate
[36:41] because you don&#39;t have to like invoke it
[36:44] like as soon as you go to publish
[36:46] something you have to cross this quality
[36:48] gate and it&#39;s going to check
[36:50] automatically. So what I mean by that is
[36:52] we&#39;re going to use cloud code hooks. So,
[36:55] a hook is basically like a piece of code
[36:57] that can be triggered at automatically
[37:00] at certain times. It&#39;s a script that&#39;s
[37:02] going to run before the attempt to
[37:04] publish. And that hook will check for,
[37:06] for example, m dashes. It&#39;ll check that
[37:09] your posts don&#39;t exceed the platform
[37:11] character limit. If you&#39;re trying to
[37:12] post to platforms like Instagram or
[37:15] YouTube that require you to upload an
[37:17] image or video, it&#39;s going to check that
[37:19] as well. It&#39;s going to check for any
[37:21] banned word. So, if you have a band
[37:23] words list in your brand voice, it&#39;s
[37:25] going to check that. And the thing is,
[37:26] you can make this like much more complex
[37:29] and nuanced in terms of what quality
[37:31] means to you. You could even have this
[37:33] as an LLM score your posts in terms of
[37:36] verality. Like, let&#39;s say your quality
[37:38] check like scores for verality and if it
[37:40] scores above eight, it can be posted. If
[37:43] it scores below an eight, we&#39;re going to
[37:45] go back and rewrite it until it scores
[37:47] above an eight. That&#39;s like a little bit
[37:48] more complex, so I don&#39;t have time for
[37:50] this here, but these are like really
[37:52] cool things that you can do with cloud
[37:55] code hooks. And the nice thing is you
[37:56] don&#39;t have to remember to call them.
[37:58] They just run like based on how you set
[38:01] it up. In this case, they&#39;re going to
[38:02] run before any bash command that
[38:04] contains curl and this API, this
[38:07] address, meaning we&#39;re trying to publish
[38:09] a post. Okay. And then it is going to
[38:11] ask you for a bunch of permissions and
[38:13] stuff. And then what we&#39;re going to do
[38:15] is test it. So we&#39;re going to test a
[38:17] post that exceeds the character limit
[38:20] for example on Twitter and then it the
[38:22] quality gate should prevent it from
[38:24] being published and it will give you the
[38:26] reason as well like it will explain this
[38:28] post is forbidden because it&#39;s exceeded
[38:30] the character limit for that platform.
[38:32] Okay so allow write to validate post. So
[38:35] this is going to be the script. I know
[38:37] this is really small but on the left
[38:39] hand side there&#39;s a new directory that
[38:41] was created called hooks and then this
[38:43] file called validate-post.
[38:45] So this is going to run before the
[38:48] attempt to publish and then this is the
[38:50] code inside. You don&#39;t have to do
[38:52] anything with that. I&#39;m just like
[38:53] showing you to be aware like generally
[38:55] this is how things are structured. So if
[38:57] you have a project it&#39;s going to have
[38:59] one directory for all of your hooks, one
[39:01] directory for all of your skills and
[39:03] then it&#39;s going to edit your settings
[39:05] over here so that the hook can run
[39:08] automatically. And you don&#39;t have to do
[39:10] anything. Just explaining like what it&#39;s
[39:12] doing. Okay. So, it&#39;s making some more
[39:14] edits. Someone said, &quot;This looks much
[39:16] more complicated than NADN.&quot; It&#39;s it&#39;s
[39:18] really not is the thing. That&#39;s that&#39;s
[39:20] kind of the crazy part cuz like I use
[39:22] NADN a lot. Like I have production
[39:24] workflows running 24/7 self-hosted in
[39:27] NAND right now. I think they&#39;re very
[39:29] complimentary tools. Like I don&#39;t
[39:32] consider them for the same tasks. So,
[39:34] someone earlier was asking me that like
[39:36] is NADN dead? And I was replying that
[39:39] there&#39;s a lot in the orchestration layer
[39:41] that is really nice with NN. But cloud
[39:43] code is also amazing because it just can
[39:46] build like almost anything you want it
[39:48] to and it can debug itself if you give
[39:51] it a feedback loop. For example, if you
[39:53] use the Claude Chrome extension, similar
[39:55] to anti-gravity&#39;s Chrome extension, you
[39:57] can have it look at your app, look at
[39:59] your website, and keep improving it
[40:01] until it looks the right way, until it
[40:03] functions the right way. And so it&#39;s
[40:05] it&#39;s it&#39;s really really powerful. I
[40:07] maybe it looks scary because it&#39;s like
[40:08] black and pink. I don&#39;t know. But
[40:10] anyway, so we&#39;re going to try testing
[40:12] this. So So I&#39;m just going to say test
[40:14] the post hook on an excess excessive
[40:17] character tweet. Okay. But it did
[40:19] actually test it itself, which is nice.
[40:22] But let&#39;s try one more time. So here
[40:24] it&#39;s testing this hook with an oversized
[40:26] tweet. Like just to illustrate the power
[40:28] of cloud code, like let&#39;s say we just
[40:31] think of another quality check we want.
[40:34] Let&#39;s say the quality check is like you
[40:36] must mention our company name at least
[40:39] twice in the post. So you&#39;re more of a
[40:41] business brand or a marketing brand or
[40:43] you want the CTA to always include your
[40:46] website. We can literally add that in 2
[40:49] seconds and it would work like out of
[40:51] the box especially that one cuz that one
[40:52] is simpler. Um someone&#39;s asking how do
[40:54] you visualize your website that you
[40:56] create in cloud code. So this particular
[41:00] project from start to finish does not
[41:02] have a front end. It&#39;s not a web app,
[41:04] but you could actually create a
[41:06] front-end dashboard for all of this. I
[41:09] just like couldn&#39;t fit it in the time,
[41:12] but like by the end of this, if you want
[41:14] to just create a front end, an app
[41:16] visual on top of this, you can easily do
[41:18] that with cloud code. So, you can just
[41:20] like type into an input box like here&#39;s
[41:22] the topic I want. Do you ever let it
[41:24] self-compact? I do, but I try not to.
[41:28] Like for example, if I&#39;m working on a
[41:29] new feature or a bug and I&#39;ve actually
[41:32] hit the context window, I consider that
[41:34] like I don&#39;t want to say failure on my
[41:36] part, but like I must have been missing
[41:39] something for it to to take that many
[41:42] turns of conversation. Um, okay. So
[41:44] allow write to test results. Okay. Okay.
[41:47] So it&#39;s testing the hook with a valid
[41:49] post. By the way, if you&#39;re using the
[41:50] Cloud Code official extension, you can
[41:52] click on these things. You can click on
[41:54] input and see what the input was. is you
[41:57] can click on output and see what the
[41:59] output was. So that&#39;s a neat thing as
[42:01] well. Okay. Okay. So now we have our
[42:03] quality check. So it&#39;s going to check
[42:04] things like m dashes. It&#39;s going to
[42:06] check character limits. It&#39;s going to
[42:08] check band words. And all of that is
[42:10] customizable, right? So if you have like
[42:12] a bunch more band words, you can add
[42:14] them real quick. So the next part is to
[42:16] actually build our first sub agent,
[42:18] right? So we have our post skill, we
[42:20] have our brand voice, we have our
[42:22] quality gates, but right now it&#39;s just
[42:24] like we publish to one platform at a
[42:26] time instead of multiple platforms at a
[42:28] time. So what we&#39;re going to do is
[42:30] update. So just take a screenshot of
[42:32] this and drop it into cloud code. We&#39;re
[42:35] going to update our original skill so we
[42:38] can post to multiple platforms at the
[42:40] same time. So for example, if I type the
[42:42] word all, right? Instead, so instead of
[42:45] typing Twitter or LinkedIn, I&#39;m going to
[42:46] type all. So now it&#39;s going to create a
[42:49] visual that&#39;s related to this topic.
[42:52] It&#39;s going to spawn a sub aent for each
[42:54] platform. And then each sub aent is
[42:57] going to adapt the post for the
[42:59] platform. And then each sub aent is
[43:01] going to publish to the platform. And
[43:03] then we&#39;re going to log all of the
[43:05] results over here in our posts log MD.
[43:08] And so the reason this is nice and
[43:10] efficient is because publishing is
[43:12] asynchronous. Like imagine you&#39;re
[43:14] publishing a whole week&#39;s worth of
[43:16] content and you&#39;re doing like five posts
[43:18] a day. So that would be like 35 posts.
[43:21] So now we can just like parallelize that
[43:23] effort instead of like scheduling them
[43:25] one at a time. What I&#39;m going to do real
[43:27] quick is connect my LinkedIn account cuz
[43:29] so far I&#39;ve just been on my Twitter
[43:31] account. I&#39;m going to connect my
[43:32] LinkedIn and then if it&#39;s successfully
[43:34] connected, you should see your accounts
[43:36] on the list at the bottom. And then
[43:38] let&#39;s go back to Cloud Code. Remember to
[43:40] copy paste this into Cloud Code. So this
[43:42] will be the next thing and then we&#39;re
[43:44] going to test it by dropping in a
[43:45] YouTube video again and then asking it
[43:48] to use our brand voice and then create
[43:50] posts for all the platforms we have
[43:52] connected which right now are LinkedIn
[43:53] and Twitter and then automatically
[43:55] publish to both platforms with a visual.
[43:57] So make this edit. Yes. And then I&#39;m
[44:00] going to grab the YouTube video real
[44:01] quick and just prepare what we&#39;re going
[44:03] to post. Are you concerned that you&#39;re
[44:06] at nearly 90% context use? Not really. I
[44:09] mean this is a pretty simple project. I
[44:12] also generally like to clear the
[44:14] context. It&#39;s just a habit like but this
[44:16] is it&#39;s just such a simple project. So
[44:18] I&#39;m not that concerned about it. It&#39;s
[44:20] not like it&#39;s trying to debug like a
[44:22] really complex issue and we&#39;ve tried you
[44:25] know 20 different things and now the
[44:27] context window is almost used up. We&#39;re
[44:29] actually just building a lot of
[44:31] different things piling on top of each
[44:33] other. But like honestly I could have
[44:35] reset the context for each new feature
[44:37] we&#39;re adding and it would have worked
[44:39] perfectly fine.
[44:41] Okay, so it&#39;s going to write something.
[44:45] Okay, so the crossplatform publishing
[44:47] Postkill now supports publishing to all
[44:50] platforms simultaneously with a single
[44:53] command. Okay, and here it is. By the
[44:55] way, like most of the links within here
[44:57] are clickable. So you can just like
[44:59] click to navigate. So that&#39;s really
[45:01] handy. So let&#39;s do a different topic.
[45:03] Let&#39;s do like like super advanced Claude
[45:07] code tips. So, I&#39;m going to create a
[45:09] crossplatform post. Let me follow the
[45:12] crossplatform workflow. Number one, it&#39;s
[45:14] going to create a shared visual asset. I
[45:17] kind of hope it chooses an infographic.
[45:19] I was like really excited to show the
[45:20] infographic, but the first time I
[45:23] created a visual, I ran out of credits.
[45:25] So, I had to log into my production
[45:27] database and give my test user a bunch
[45:29] of credits. So, we didn&#39;t get to see the
[45:32] infographic yet. Okay. So, now it&#39;s
[45:34] fetching all my accounts. Oh, I don&#39;t
[45:36] have LinkedIn or Instagram account. So,
[45:38] that is going to get it confused. Okay,
[45:41] so here&#39;s one of the Facebook posts.
[45:44] Then that&#39;s the Twitter post. I will
[45:46] probably tell Claude code I don&#39;t have
[45:48] Facebook and Instagram accounts
[45:49] connected just so it stops trying.
[45:53] Um, but okay, here&#39;s the temporary
[45:55] LinkedIn post. And by the way, in the
[45:57] final step, we will have like a full
[45:59] content plan cuz obviously you want to
[46:02] read the post and like add any tweaks.
[46:05] Um, I&#39;m just going to say, oh yeah, this
[46:07] is actually something to point out. So,
[46:08] if you&#39;re new to Cloud Code, so you
[46:10] could choose options one, two, three.
[46:12] There&#39;s like always pre-built options,
[46:14] but let&#39;s say you want to tell it
[46:16] something or it&#39;s missing something, you
[46:18] can type here, tell Claude what to do
[46:20] instead and just type it. And I&#39;m just
[46:22] going to say, by the way, I don&#39;t have
[46:24] Instagram or Facebook accounts yet. Just
[46:29] do Twitter and LinkedIn. Otherwise, it&#39;s
[46:32] going to like try to do that forever.
[46:34] I&#39;m going to check if it created the
[46:36] visual. Ah, it didn&#39;t choose an
[46:38] infographic. It chose another carousel.
[46:41] Ah, okay. Next time I might tell it very
[46:43] explicitly to choose an infographic, but
[46:45] yeah, these are the cloud code advanced
[46:47] tips, right? So, okay. I mean, there I
[46:50] was making a bunch of these earlier when
[46:52] going through it and like there&#39;s a
[46:53] bunch of like really fun infographics
[46:56] you can make. Like this one was really
[46:58] funny. Trail markers for building solo.
[47:01] I put the topic like who is Sabrina
[47:03] Romanov?
[47:04] So, it made this like chalkboard
[47:07] infographic. That&#39;s pretty neat. Oh,
[47:09] hang on. It&#39;s asking for permission.
[47:11] Okay.
[47:13] Publish to Twitter and capture
[47:15] submission ID. Yes, publish link. Now,
[47:17] it&#39;s going to publish LinkedIn posts.
[47:20] Okay. Um, but yeah, I was hoping it
[47:22] would choose one of these whiteboard
[47:23] infographics, but it did not. So if you
[47:26] do wanted to use a certain set of
[47:28] templates like obviously you can also
[47:29] put that in your preferences. Right? In
[47:32] this particular flow we just have it
[47:33] completely decide what to do. So it just
[47:36] ended up choosing that other quote card
[47:37] carousel.
[47:45] Okay.
[47:47] Then let me check Twitter. Did it post
[47:50] already? Oh yeah it posts. Okay. So
[47:53] here&#39;s the cloud code. So this is 28
[47:55] seconds ago and then that one was also
[47:58] 33 minutes ago. So basically what&#39;s
[48:00] happened is we published on Twitter
[48:02] here. So I just deleted some of the
[48:04] posts that were on Twitter. But it
[48:06] basically created one visual that is
[48:07] going to post to multiple platform. The
[48:10] next step is the one I really want to
[48:11] get to, which is like actually planning
[48:14] the entire week and the draft because
[48:17] that one, it&#39;s nice that AI can generate
[48:19] all of these drafts, but like ultimately
[48:21] you do want quality control, right? You
[48:24] want to be able to see what the plan is
[48:25] and make a lot of tweaks to the plan to
[48:28] make sure that it&#39;s high quality. But we
[48:30] have all the pieces now. So we have the
[48:33] content creation skill right/post that
[48:35] will do the copywriting for each
[48:38] platform and generate a visual. We have
[48:40] the brand voice guideline with writing
[48:42] samples, banned words. Um we have a
[48:44] quality gate that runs automatically
[48:46] whenever you try to publish. So this can
[48:48] catch things like m dashes or too many
[48:51] characters. It can catch really anything
[48:54] you can imagine. So whatever you think
[48:56] of in terms of quality, like I mentioned
[48:58] earlier, one use case is you could have
[49:00] it score the verality of your post and
[49:03] if it scores below a certain number, it
[49:05] it could retry rewrite the post so that
[49:08] it scores a little bit higher. And then
[49:10] we have parallel posting with multiple
[49:12] sub aents. So now we&#39;re going to tie
[49:14] everything together into just like one
[49:16] command that plans and schedules one
[49:19] week of contents. And then for this, I
[49:21] actually do want to update this to say I
[49:24] really want a whiteboard infographic
[49:25] because that&#39;s what I was really excited
[49:27] to show that I&#39;m going to say update
[49:30] post skill
[49:32] so that it chooses an infographic visual
[49:37] template, not a carousel, just because
[49:39] we&#39;ve done two carousels already. So, I
[49:41] want to showcase something a little bit
[49:42] different. You can also create videos,
[49:44] by the way, like you can feed in your
[49:46] own assets, photos and videos to
[49:49] populate slideshows and videos, but
[49:51] that&#39;s a little bit more advanced, so we
[49:52] won&#39;t cover that today. Okay, so it&#39;s
[49:54] going to update that. And then here is
[49:55] the prompt. Again, it looks long, but
[49:57] it&#39;s it&#39;s really not crazy. So, we&#39;re
[50:00] going to create a second skill. This
[50:02] one&#39;s going to be called plan week. And
[50:04] it&#39;s different from the first one. So
[50:06] the first one is just like, hey, I have
[50:08] an idea and I want to post and I want to
[50:11] have all of these posts across the
[50:13] platform. So it&#39;s like posting one idea
[50:15] at a time to multiple platforms. This
[50:18] skill is like really planning your whole
[50:20] week. So given a topic or a set of
[50:23] topics, it&#39;s going to plan like multiple
[50:25] posts and across multiple platforms as
[50:28] well. It&#39;s similar as before, it&#39;s going
[50:30] to figure out what you want from
[50:32] whatever you provide. So you could
[50:34] provide a combination of topics and Tik
[50:37] Tok videos and YouTube videos and it&#39;s
[50:39] going to be able to extract them and
[50:40] it&#39;s going to research the topic, write
[50:43] the weekly content plan. It&#39;s going to
[50:44] output it in a separate file so that you
[50:47] can view the entire plan, make your
[50:49] edits and suggestions there before
[50:51] anything gets scheduled out. It&#39;s also
[50:53] going to ask if you want a visual for
[50:55] the posts. So I might just just for time
[50:59] purposes, I might just do visuals for
[51:00] like half the posts, right? instead of
[51:02] all of the posts for the week. And then
[51:04] it&#39;s going to draft the text post, show
[51:06] you what it looks like. Let&#39;s see. It&#39;s
[51:08] going to show you the plan, wait for
[51:09] your approval. This line again is just
[51:12] to, you know, make it clear to schedule
[51:14] in the next free slot. And then after
[51:16] you approve the post, it&#39;s going to use
[51:18] parallel sub agents to go ahead and
[51:19] schedule it in the next free slot. And
[51:22] then similarly, it&#39;s going to ask
[51:23] clarifying questions one at a time in
[51:25] case we missed anything really
[51:26] important. And this is the last like
[51:28] technical prompt though. So the only
[51:30] thing after this is just creating the
[51:31] claude MD file as a way to codify
[51:34] everything we&#39;ve learned in the
[51:36] interaction. Okay. So question is how
[51:38] many posts per day should the weekly
[51:41] plan include? So let&#39;s do B. So it&#39;s
[51:45] going to be one post per platform per
[51:47] day, but we&#39;re only going to focus on
[51:50] LinkedIn and Twitter. I don&#39;t have IG,
[51:55] Facebook connected. You can also
[51:57] customize it. So it could be like
[51:59] specify each time you run the command.
[52:01] Again, the beauty of cloud code is like
[52:03] this is all easily easily changeable. If
[52:06] you if we choose B and we decide like
[52:08] right now we&#39;re going to switch it to D,
[52:11] I mean it takes like 2 seconds and it&#39;s
[52:13] done. Whereas with a guey based tool
[52:15] like NAN or other types of drag and drop
[52:18] tools like it really would take a lot
[52:20] more work than this to rewire everything
[52:23] to change the conditions. So once you
[52:25] get into cloud code, it&#39;s it&#39;s pretty
[52:28] addictive and like very powerful what
[52:30] you can build. Okay. So question two,
[52:32] should the weekly plan cover all seven
[52:34] days or weekdays? Let&#39;s just say
[52:36] weekdays only for now. Let&#39;s let&#39;s
[52:38] pretend we take a break on weekends.
[52:40] Someone is asking how does the agent
[52:42] authenticate? So it&#39;s authenticating
[52:44] through Blot&#39;s official API connection
[52:47] to those platforms. It&#39;s not claude code
[52:50] like in authenticating directly with the
[52:52] social platforms. Okay. content
[52:54] approach. Do we want one main topic or
[52:57] URL and create 10 different angles or
[52:59] generate completely different topics
[53:01] each day or you can specify it each
[53:04] time, right? I&#39;m just going to say a for
[53:06] simplicity. So, we&#39;re just going to give
[53:08] it like one URL and create 10 different
[53:10] angles from it. Okay, let&#39;s do let&#39;s do
[53:13] a different Hormosi video. Okay, let&#39;s
[53:16] go back here. Okay, question four. for
[53:18] when publishing. Yeah, let&#39;s just do
[53:20] next free slot because we&#39;re actually
[53:22] like scheduling this in advance.
[53:25] And then actually that&#39;s a good
[53:26] opportunity to set up our slots. So
[53:28] slots are just like times when you can
[53:31] publish. So here when you go to
[53:33] calendar, go to your weekly schedule and
[53:35] you&#39;ll see this button add slot. So what
[53:38] this means is if I just want to publish
[53:39] let&#39;s say Monday, Tuesday, Wednesday,
[53:41] Thursday, Friday every day at 10:00 a.m.
[53:44] on Twitter and let&#39;s say LinkedIn. So
[53:47] those will be my slots. So all I have to
[53:48] do is like create content, drop it in
[53:51] the slot, and it&#39;s just going to be
[53:52] scheduled in the next open time. And
[53:55] this is really handy because different
[53:57] platforms, you know, punish too frequent
[54:01] posting differently. So like on Twitter,
[54:03] you can totally tweet 15 times a day and
[54:06] you don&#39;t get punished for that, right?
[54:07] But on LinkedIn, you generally don&#39;t
[54:09] want to post more than once per day
[54:11] because you would be annoying your
[54:12] network. on Instagram like three posts a
[54:15] day like I do is already pushing it,
[54:17] right? So just depending on the
[54:19] platform, your frequency might be
[54:20] different. The times you post might be a
[54:23] little different. So it&#39;s really nice to
[54:24] set up slots and then all you have to do
[54:26] is like add content to the slots like
[54:29] and so you don&#39;t have to worry about
[54:30] like what exact time the content is
[54:33] going out. So now it is compacting. You
[54:35] hit the context window. So but again
[54:38] it&#39;s really not that big of a deal. like
[54:40] this is a pretty simple thing that we&#39;re
[54:43] building. Um, so I&#39;m not like super
[54:46] concerned about it. But so occasionally
[54:48] though I do notice it kind of like times
[54:50] out and freezes and I have to like stop
[54:52] it. But this looks okay so far. So you
[54:55] can schedule it to post on nine social
[54:57] platforms. Instagram, Facebook, Tik Tok,
[55:01] LinkedIn, Pinterest, Blue Sky Threads,
[55:05] Twitter, YouTube. Yeah. So you can
[55:08] create these slots and schedule to all
[55:10] of these different platforms. So it&#39;s
[55:12] really neat. Does a post generate faster
[55:14] if your images and videos are locally on
[55:16] your machine? Yes. So one option here is
[55:19] to completely ignore AI image and video
[55:21] generation and just use your own photos
[55:24] and videos. And you can do that. You can
[55:26] just like tell Claude, hey, I want to
[55:28] pass this local set of photos or videos
[55:31] I have over to the API to schedule them.
[55:34] And so I probably should do that in
[55:36] another tutorial because that would be
[55:38] cool. Like, you know, I have folders as
[55:40] well just of like selfie photos that I
[55:42] actually would post on LinkedIn because
[55:44] selfie photos do really well on LinkedIn
[55:46] for some reason. So that would be cool
[55:48] if it just like grabbed one of the
[55:49] selfie photos, right? And just like put
[55:51] it with my LinkedIn post. If you&#39;re
[55:53] starting out on LinkedIn, I honestly
[55:54] recommend posting only three times a
[55:56] week and just like spend a little more
[55:59] time improving the hook of your post for
[56:02] LinkedIn or improving the visual of your
[56:03] post for LinkedIn. What if this stream
[56:05] is being done by an AI?
[56:08] How fast do you run out of your weekly
[56:10] allowance on Claude? I&#39;ve actually never
[56:12] hit my weekly limit on Claude, but I&#39;m
[56:14] also not one of those people that&#39;s like
[56:16] just like running multiple crazy stuff
[56:19] 24/7. like I just use it like a normal
[56:21] person like several hours a day. Okay,
[56:24] so it&#39;s done here. So weekly plan was
[56:27] created. So I&#39;ve created oh weekly plan.
[56:29] Okay, plan week. Just to be safe, I I
[56:32] have a habit of doing this. I always
[56:34] refresh or start a new cloud code
[56:36] session after building a new skill just
[56:38] to make sure it triggers. Um it probably
[56:40] will trigger anyway, but that&#39;s just my
[56:42] habit. Okay, then let&#39;s grab Alex
[56:44] Horoszy&#39;s YouTube video. Boom. I think
[56:46] it&#39;s slash plan week. And I&#39;m just going
[56:49] to pass in this URL. And because it&#39;s
[56:52] planning the whole week, we don&#39;t have
[56:53] to specify the platforms. Like it
[56:55] already is going to try to post it to
[56:57] all the platforms. Okay. So, let&#39;s just
[56:59] do that. Currently using Zapier, but I
[57:01] run out of activities. Is there a
[57:02] cheaper AI to use that&#39;s similar? Yeah,
[57:05] honestly, make.com is significantly
[57:07] cheaper than Zapier. I know it&#39;s
[57:10] increasing its prices as well, but
[57:13] comparatively, it&#39;s still significantly
[57:15] cheaper than Zapier. And I think it&#39;s
[57:17] the most similar to Zapier. So it&#39;s
[57:20] called Make like just like make
[57:22] something make.com. A lot of pe people
[57:24] do use Naden. It has a self-hosted
[57:27] option. So it can be like ultra cheap to
[57:29] run for really high volume workloads,
[57:32] but the learning curve is a bit steeper.
[57:34] So if you&#39;re coming from Zapier, I
[57:36] honestly would recommend just checking
[57:38] out make.com. It it already is much
[57:40] cheaper to use. Yes. When using cloud
[57:43] code, you think you close the session
[57:44] and open it again. Yeah, I think that&#39;s
[57:46] where I picked up the habit because I
[57:48] typically use Cloud Code with a terminal
[57:50] within Visual Studio Code. And I
[57:53] mentioned this earlier, but that&#39;s
[57:54] because you get access to some of the
[57:56] newer beta features such as cloud in
[57:58] Chrome, which is a beta feature not
[58:00] accessible through the official
[58:02] extension as far as I know yet. And you
[58:04] also get Vim mode that actually works.
[58:06] Super weird cuz the official extension
[58:09] used to have Vim mode. Like I was pretty
[58:11] sure I was using it before, but now it
[58:13] doesn&#39;t. So I I use cloud code within a
[58:16] terminal within Visual Studio Code. But
[58:18] the downside of it, it&#39;s just like not
[58:19] as pretty. It&#39;s just like really pretty
[58:22] here with the official extension.
[58:24] I think this was like a really long
[58:26] video. So it&#39;s it extracted the content
[58:29] from the YouTube video. I don&#39;t know how
[58:31] long it is. Oh wow. I should not have
[58:33] chosen this video. Oh my god, it&#39;s like
[58:36] two hours long. That&#39;s why it&#39;s like
[58:38] chunking up the YouTube transcript.
[58:41] Well, it was cool. It actually did it
[58:43] right. Like I was surprised that worked.
[58:45] And now it&#39;s in the process of
[58:46] generating 10 unique angles from the
[58:48] video and then writing 10 full
[58:51] postdrafts and then creating five
[58:53] infographics, one per day. And then it&#39;s
[58:55] going to output the plan and then
[58:57] present the plan and get approval. Okay.
[59:00] So it&#39;s creating Monday infographic,
[59:02] closer framework, Tuesday infographic,
[59:04] pricing and offers. I&#39;ll zoom in.
[59:06] Wednesday infographic volatility and
[59:08] risk. Thursday content to ads. Friday
[59:11] infographic focus and pick one. All five
[59:13] infographics are cued. So if we go back
[59:16] to blueot, if the infographics truly are
[59:18] cued, then yeah, you&#39;ll see the five
[59:20] drafts here. You can see that they were
[59:22] created like a few seconds ago. So that
[59:24] means they&#39;re in the queue. Okay. Pull
[59:26] all five infographic jobs. Yes. So what
[59:30] polling means is like the API is
[59:31] asynchronous. So it&#39;s like I start
[59:34] creating an infographic and then you
[59:36] have to check when it&#39;s done. And it
[59:38] depends like how long it takes depends
[59:40] on like what models you&#39;re using. So if
[59:42] you&#39;re generating video, that&#39;s going to
[59:45] take like five to 10 minutes. And like
[59:46] that&#39;s the main reason I&#39;m not demoing
[59:49] video generation right now cuz it&#39;s
[59:50] going to take a while. If you&#39;re using a
[59:52] template that does not involve any any
[59:55] AI image generation, for example, it&#39;s
[59:57] just like different graphics, pre-built
[59:59] graphics or your own images and videos.
[60:02] So you&#39;re just uploading them. You&#39;re
[60:03] not generating anything. That generates
[60:06] like a lot more quickly. That&#39;s done a
[60:08] lot more quickly. So, okay. So, now it&#39;s
[60:10] writing the complete content plan while
[60:12] infographics generate. There&#39;s the
[60:14] content plan. Oh, yay. The infographics
[60:16] appeared. So, nice thing with Blot. I
[60:19] was super lazy. So, it will just like
[60:21] refresh the page. Whatever the
[60:23] infographic is done, it&#39;ll like navigate
[60:25] directly to the infographic. So, this is
[60:28] from the 2hour long hormosi live stream,
[60:32] right? Turn your best organic content
[60:33] into paid ads that drive leads. Identify
[60:36] winners, blah blah blah. And it&#39;s it&#39;s a
[60:38] cool like slanted whiteboard
[60:40] infographic. But let&#39;s take a look at
[60:41] some of the other ones. So, I don&#39;t know
[60:44] which day this is, but like the power of
[60:45] focus and business. Pick one, go allin.
[60:48] This is another nice whiteboard
[60:50] infographic. Nice colors and stuff like
[60:52] that. Okay, let&#39;s choose another one.
[60:55] I&#39;m just curious like what it wrote is
[60:58] okay. Volatility versus risk. So, I
[61:01] haven&#39;t heard him actually talk much
[61:02] about this. So, this is pretty
[61:04] interesting. And by the way, these are
[61:06] all taken from a 2hour Hormosi live
[61:09] stream, right? Obviously, you want to
[61:11] put your own thoughts and perspective in
[61:13] here, but just showcasing what is
[61:16] possible. So, the offer stack that fixes
[61:18] your cash flow forever. And then this
[61:21] one is the closer deal. So, if you&#39;re
[61:23] familiar with Hormosi, this is like his
[61:25] sales closer framework step by step. So,
[61:28] this this one&#39;s actually really cute
[61:29] with this funnel that&#39;s colorful. So,
[61:32] that&#39;s cute. Okay. Does it animate? You
[61:35] actually can animate it. But again, that
[61:37] would take like five more minutes. So,
[61:40] that&#39;s the main reason I&#39;m not showing
[61:42] any video generation because it just
[61:44] takes a long time and then if something
[61:46] goes wrong, I have to retry it.
[61:48] Whiteboard infographics are a nice
[61:50] middle ground, right? Like it took maybe
[61:51] 2, 3 minutes, but it&#39;s not like an
[61:53] insanely long amount of time. So, now
[61:56] it&#39;s going to fetch the infographics,
[62:00] but most importantly, we can look at the
[62:02] content plan. Yeah. So on the left hand
[62:05] side there should be a content plan
[62:07] document. Boom. Here. Okay. So I&#39;m going
[62:10] to open it. I&#39;ll try to expand it. So
[62:12] this is the content plan. So Monday
[62:14] LinkedIn the this is the angle. So this
[62:17] is not the post. This is like the angle
[62:20] it extracted from the 2-hour long
[62:22] YouTube video. And then this is the
[62:23] draft post. So okay, Alex Hormosi fixed
[62:26] it in 10 minutes. It&#39;s called closer.
[62:29] Boom. Boom. Boom. If you&#39;re familiar
[62:30] with LinkedIn, like you know, like this
[62:32] is the format for LinkedIn, right? And
[62:36] then this is the visual and it has the
[62:37] ID so you can go check on it. And then
[62:40] this is post to Twitter for Monday. So
[62:43] this is the same day and it&#39;s going to
[62:45] use the same infographic, but it&#39;s going
[62:47] to have like a tweet. So it&#39;s limited to
[62:49] 280 characters. Okay. And then here&#39;s
[62:52] Tuesday for LinkedIn. So the angle is
[62:54] stop charging monthly. package your
[62:56] services into outcomebased offers that
[62:59] fix cash flow. And then here&#39;s the draft
[63:01] post for LinkedIn Hormosi style, right?
[63:04] And then here is Tuesday, the Twitter
[63:06] version. So it&#39;s significantly shorter.
[63:08] And then Wednesday, so I&#39;m not going to
[63:10] go through every single one, but like
[63:11] what&#39;s cool in Visual Studio Code is
[63:14] Claude Code is aware of which lines
[63:16] you&#39;ve selected. So, let&#39;s say I just
[63:19] want to edit Wednesday. You can actually
[63:21] just select like this area and be like
[63:24] just completely rewrite this area. So,
[63:26] it&#39;s hard to see, but there&#39;s a thing
[63:28] down here that says 24 lines selected.
[63:31] So, Claude Code is aware. So, if you
[63:33] select these two lines, it&#39;s aware of
[63:35] what you&#39;re selecting. So, it can apply
[63:37] the prompt just on your selection. So,
[63:40] you can just like select Wednesday and
[63:42] be like just rewrite Wednesday, you
[63:44] know. So, that&#39;s really cool. That&#39;s one
[63:45] of the benefits of like using cloud code
[63:47] within an editor like this. The other
[63:49] thing is you can also just tell cloud
[63:51] code you don&#39;t like this and to rewrite
[63:53] it, right? So like you have the option
[63:55] here to manually edit, revise, tweak the
[63:58] post so that it fits your brand voice.
[64:01] You also have the option to have Claude
[64:03] code help you. So, if you&#39;re noticing
[64:05] something kind of inconsistent across
[64:07] all of these posts, you can tell Cloud
[64:09] Code, hey, like there&#39;s something I
[64:11] don&#39;t like about these posts, like I&#39;m
[64:13] really not liking the theme or the
[64:14] writing style. And Cloud Code will work
[64:16] with you to like keep revising the
[64:18] drafts until you&#39;re happy. And that&#39;s
[64:21] really important because like most
[64:23] people should not start out with full
[64:26] automation of content. if you don&#39;t know
[64:28] how to make good content, like you&#39;re
[64:30] not going to learn by setting and
[64:32] forgetting it and like never looking and
[64:34] like it&#39;s there&#39;s still a ton of trial
[64:36] and error involved. But the beauty of
[64:39] once you set up this system is you can
[64:41] like focus all your time on just like
[64:43] tweaking the drafts and it&#39;s already
[64:45] pre-built with your brand voice. It can
[64:47] analyze apparently a 2hour long YouTube
[64:50] video which I didn&#39;t think would work
[64:52] but it worked like insanely well. It can
[64:54] generate images. is it can generate like
[64:56] the infographics like we showed about,
[64:58] right? Like this one is super cool, the
[65:00] closer framework and now you can spend
[65:02] like the majority of your time actually
[65:05] just improving the content instead of
[65:07] spending the majority of your time
[65:09] figuring out how to post the five social
[65:11] platforms, scheduling it on each one,
[65:14] generating the visuals for each one,
[65:16] etc. Okay, so here&#39;s the plan summary.
[65:18] Here&#39;s the themes. Edit any posts
[65:21] directly. Let&#39;s just say approve, but
[65:24] just schedule it in advance. Okay, so
[65:27] now it&#39;s going to try to publish the 10
[65:28] posts, but hopefully it listens to me
[65:31] when I say schedule next post. Um, this
[65:34] will save me at least 5 hours each week.
[65:37] Well, this is just the base version.
[65:38] Like you can extend this to publish to
[65:41] like four more social platforms, three
[65:43] different brands. Like you can have
[65:45] insane quality gates. I call I I think
[65:48] I&#39;m the only one who calls this a
[65:49] quality gate. I like maybe quality check
[65:51] is an easier term, but what I said
[65:54] before about like a quality check that
[65:56] scores your post based on comparing it
[65:58] to a database of like 200 viral posts
[66:01] and then if you score below a certain
[66:03] threshold, it like rewrites the hook,
[66:05] right? So like you can do all kinds of
[66:07] like really crazy things once you
[66:09] establish this as the base. Okay, so now
[66:11] it&#39;s going to like publish and publish
[66:14] publish. It would be nice if it just did
[66:16] that without asking me for permission.
[66:18] So, we&#39;ll do this in the next step. And
[66:20] then I&#39;m going to check my calendar to
[66:22] make sure it&#39;s posting. So,
[66:25] I feel like it&#39;s just posting and not
[66:28] actually respecting the post in the
[66:30] future. So, I&#39;m going to check Twitter.
[66:33] So, yes, it just posted all of our posts
[66:35] instead of scheduling in the future. So,
[66:37] I will need to fix that before I
[66:38] actually launch the prompts. But what&#39;s
[66:41] supposed to happen is it&#39;s supposed to
[66:43] schedule it here. So you can see all the
[66:45] upcoming posts here, but it decided to
[66:47] be very trigger happy and just schedule
[66:49] them all at this moment. So, but I will
[66:52] tweak the prompt so that that doesn&#39;t
[66:54] happen. I was just kind of on a time
[66:55] crunch for this one. The very last thing
[66:57] I definitely did want to talk about is
[66:59] the Claude MD file. Um, if you mean
[67:01] pricing tier for Cloud Code, I&#39;m
[67:03] personally on the 200 per month plan,
[67:06] but you can definitely do this as well
[67:08] on the lower tier plans, especially if
[67:10] you&#39;re just like batching content cuz
[67:12] like a lot of the people who hit the
[67:14] limits of the lower tier plans are using
[67:17] it like a lot. But in this type of
[67:19] workflow, you could just like sit down
[67:21] for a few hours, batch all your content
[67:22] for the next week or two, right? And you
[67:25] should be okay with the limits in that
[67:27] way. So, let&#39;s go to the very last
[67:29] thing. The last thing is to create your
[67:30] claude MD file. So now we have a working
[67:33] system. We have the two skills, the
[67:35] quality checks, the brand voice, and the
[67:37] published posts log. I forget if I
[67:40] showed that, but this is basically a log
[67:42] of all the published post including the
[67:44] links. So you could hook this up to
[67:46] another tool and get the analytics for
[67:49] your post and stuff if you want that.
[67:51] But most importantly, I wanted to talk
[67:52] about the claude MD file. You can think
[67:54] of this as a way to like codify
[67:56] everything that you&#39;ve built and
[67:58] learned. And so I like I&#39;m kind of
[68:02] religious with my cloud MD file. I&#39;m
[68:03] always like keeping it up to date and
[68:05] cleaning it up, especially for my super
[68:07] long cloud MD file for my codebase. And
[68:09] it&#39;s going to create a cloudm file that
[68:11] links to the docs. You know, tells
[68:13] Claude where the API key is, links to
[68:16] our brand voice file, links just it kind
[68:19] of just explains what&#39;s in this project,
[68:21] what is this project for, and any other
[68:24] patterns or conventions we establish.
[68:26] So, just go ahead and copy this. This
[68:28] one shouldn&#39;t take long. There&#39;s not
[68:30] many tool calls or anything. Okay. And
[68:33] while we&#39;re waiting for that, just to
[68:35] recap everything we&#39;ve built. Step one,
[68:38] we just did one social post to confirm
[68:40] that everything worked end to end. So
[68:42] you can type slashpost and then your
[68:44] topic and then the platform you want to
[68:46] post on and it&#39;s going to generate the
[68:48] post, generate a visual if you want one,
[68:51] and then post it to Twitter. And then
[68:53] the next step is incorporating the brand
[68:55] voice, remember, with a sample. So, for
[68:58] now, we just use kind of my humanized AI
[69:00] prompt to clean up the AI sounding
[69:03] content and then samples from Justin
[69:05] Welsh and Alex Hormosi, which you could
[69:07] replace with people in your niche, but
[69:09] ideally, I highly recommend putting your
[69:11] own writing samples and stuff. And then
[69:13] step three are like quality checks. So,
[69:15] for example, remove all M dashes or
[69:18] replace them with something else. You
[69:19] can also check character length. You you
[69:21] can do all kinds of things with quality
[69:23] checks. Like some people don&#39;t want to
[69:26] have hooks that are more than 10 words
[69:28] long. Like that&#39;s a very strict thing
[69:30] for their copyriting. So like that could
[69:32] be a quality check. If you don&#39;t want
[69:34] emojis in the post, that could be a
[69:35] quality check. If you want to make sure
[69:38] your website is always at the end of the
[69:40] post, that could be a quality check. So
[69:42] there are many many things you can
[69:44] incorporate in step three to to really
[69:47] save you a ton of time. And then step
[69:49] four is like posting to multiple
[69:52] platforms in parallel with sub aents
[69:54] that are working in parallel. So we
[69:57] created one visual and then we posted to
[69:59] both LinkedIn and Twitter. And then step
[70:02] five is planning the full week. So when
[70:05] you do plan week instead of post. This
[70:07] is a new skill. You put in the topic. In
[70:10] our case we put in a 2hour long hormosi
[70:12] live stream and then Blotato like
[70:15] extracted all the content from that
[70:16] 2-hour long live stream. sliced it up
[70:18] into different angles and created 10
[70:21] posts for the week for LinkedIn and
[70:23] Twitter. And it should have scheduled it
[70:25] for the future. It actually published
[70:27] all of them. So, I will be sure to tweak
[70:30] that before I roll out the prompts and
[70:31] tutorial. And then step six, what we&#39;re
[70:34] waiting for now is the Claude MD file.
[70:36] This helps Claude just instantly
[70:38] remember what is your project about,
[70:41] where are things located, how are things
[70:43] structured, best practices in running or
[70:46] working with your project. And so here
[70:48] it created the cloud MD file. And so
[70:50] that&#39;s great. So here&#39;s the cloud MD
[70:52] file. So it says what the app is, the
[70:56] APIs we&#39;re using, different conventions,
[70:59] the endpoints that we&#39;re going to be
[71:00] calling, scheduling, um, different
[71:03] visual templates. At some point I told
[71:05] it to prefer infographics because we
[71:08] kept getting car like carousels without
[71:10] an infographic. So I just wanted to
[71:12] showcase what the infographics look
[71:13] like. Quick rules, crossplatform
[71:16] publishing, quality gates skills. So
[71:18] just just summarizing what is already in
[71:20] the rest of the project like literally
[71:22] how it&#39;s structured so that every time
[71:24] you start a new cloud code session, it&#39;s
[71:26] not starting like completely fresh. It
[71:28] has all of this context about what is
[71:30] this project about? How does it work?
[71:33] What are the important things to know
[71:34] and important conventions? Okay, I think
[71:37] that&#39;s it. Yeah, just under two hours.
[71:40] Wow, that&#39;s a long one. But yeah, thank
[71:42] you so much for joining. You have my
[71:44] full permission to repurpose this
[71:45] tutorial. Build whatever you want from
[71:47] this. It&#39;s actually a very very very
[71:50] powerful base template and very
[71:52] incredibly powerful and so many ways to
[71:53] customize it from here. I&#39;ll do a future
[71:56] tutorial where I show using your own
[71:58] images in video so you don&#39;t have to pay
[72:00] for AI image generation, right? which
[72:02] can get expensive. But yeah, thank you
[72:04] guys for joining. I plan to do more
[72:06] series like this. I know it was like
[72:08] kind of fast in the beginning, so I will
[72:10] also make like some more beginner level
[72:13] tutorials that go a bit more slowly for
[72:15] folks who are like just starting out
[72:17] with this. So, thanks everybody. Take
[72:19] care.
