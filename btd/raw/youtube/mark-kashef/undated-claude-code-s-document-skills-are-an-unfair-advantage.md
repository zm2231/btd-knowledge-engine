---
title: "Claude Code's Document Skills Are an UNFAIR ADVANTAGE"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=F6JTJ9GeSOY"
video_id: "F6JTJ9GeSOY"
duration: "19:41"
transcript_method: "youtube-captions"
segment_count: 538
char_count: 20588
status: ingested
topics: []
meta_patterns: []
---

# Claude Code's Document Skills Are an UNFAIR ADVANTAGE

**Creator**: mark-kashef | **Duration**: 19:41
**URL**: https://www.youtube.com/watch?v=F6JTJ9GeSOY
**Transcript**: 538 segments, 20588 chars

## Transcript

There's a cheat code living inside Claude Code that lets you make it into a one-stop document factory. I'm talking about creating PowerPoint decks, Excel files, Word doc files, and even PDFs just from a single prompt. So, while everyone is going back and forth with Chat GBT or Claudi on the front end and having conversations collapse with minimal output, you could be generating entire finished products end to end in minutes. And it gets better. I'm also going to show you this trick where you can go on any website and extract all the branding, the design, and import it into those documents. So, if you're trying to create a polished PDF or a polished DOCX file just using natural language and nothing else, I'll show you exactly how to do that. This is the kind of work that used to need a team of analysts and designers and now you can just do it in Claude code. So, if I piqu your interest, let's dive in. All right. So, conceptually before we dive in, all we want to do is use Claude skills within Claude code to crank out these different types of files at scale because at the end of the day, anything like a word document, Excel file, PowerPoint or PDF is just composed of a series of code and a series of symbols. So, whenever you see Claude or Chatbt generate some form of file, whether that's a text file or a PDF, it needs to write a series of Python to execute that. But in this case, instead of abstracting this process away from you, you can own this process in cloud code. So you can use it not just for one file, but many or as many as you possibly want. And theoretically, you can create a whole command center where you can crank out each type of file that you want all in the same place. Now, there are two ways we can go about this. There's the easy way using the cloud skills repo in GitHub from anthropic themselves and cloning it in cloud code and using it pretty much right away. But plan B, in case you really want to try out Cloud Code, but the word GitHub makes you cringe inside or you're not ready for that leap just yet, I'll show you how you can take an output from the front end and then ask Claude Aai to summarize exactly how it built it, the code it used, and any file that might be helpful for an AI agent and feed that set of files to Claude Code to basically reverse engineer exactly how to rebuild that file from scratch. Both of these strategies work. So, I'll first show the easy, quick, and dirty way, and then I'll go into the slightly more laborious way. For the easy method, all you have to do is go on github.com/anthropic/skills, and you'll see a screen like this. And all we care about is the skills section. So, in Cloud Code, literally all you're going to do is open a brand new folder. Open the terminal and execute this request, which says clone this following repo. This is the repo that we look at right here. So, these are the exact same thing. And then we're going to copy the skills directories into a folder and a subfolder where Claude Cook can always refer to it moving forward. Once it has those skills in the TLDDR of how to execute an Excel file, we can start cranking out files right away. Like I promised, this is the repo. So if you go into skills, you'll be able to see that out of the box, Anthropic came with around 15 of them. Some of them are the ones we care about like doc x and powerpoint, but there are other ones like skills that can create other skills. So if you want to go into skill seion and crank out different personalized and tailored skills for you, your business, whatever you do day-to-day, all of this is possible on Claudi's front end. You have to bring the skills to it. In Cloud Code, you can bring the skills to cla code. And to prove I'm not full of it, I'll show you exactly how easy this could be. So I'm going to go back into Excel. I'm going to copy paste this command. Now I'm going to go into cursor where I'm hosting Claude Code and I'm opening a brand new folder. I called it easyclaw skills and I'm going to just open up a new terminal. Easy enough so far, right? All we're going to do is paste that command exactly as we saw before. We'll send this over and it will go and query the GitHub repo, retrieve all the skills. Now it's going to ask me for permission. I'll press two. It might go back and forth, but eventually we'll be able to get the full list of skills from that repo I just showed you. And then you could already see that the output right here, algorithmic art, brand guidelines. In that list will be the PowerPoint and DOCX file. And now it's creating the structure within Claude. And if you are curious what this folder does, this is where all the assets that drive how claude code functions live. So skills, anything that is fundamental like the settings in your actual terminal in terms of what has permission versus what doesn't have permission. All of those different components live in this.cloud folder that is generated automatically. And like you can see here, we now have copied all of these skills. So if you open up the skills folder, you'll see that each and every one like the PDF function has a series of scripts. This is all the Python that basically is involved in being able to convert PDF to images, validate images, extract fields from existing documents, and convert it to PDF. And then if you want to see exactly the playbyplay on how it does this, this skill.md file will show you and walk you through the different functions, why it's doing it, but odds are if you're watching this, you might not care as much for the Python or why it's doing what it's doing. You just want the outcome. So, if we just go into a brand new session, like I promised, I can just say, "Make me a PDF about what your expectations are in 2026 in the AI space." Okay. So, I'd love to create a beautiful PDF where you can outline your expectations for where the AI, specifically the generative AI industry, is about to flourish or not flourish in 2026. Make it around five pages and make it a very clean and polished PDF document. Tap into your skills in your skill set around creating PDFs. So if I send this over, even without tagging any specific files, it should be able to realize that it has to tap into this PDF skill set. There we go. And now it's recognized that that it has to go into its root folder. Cloud, go into subfolders and find the functions to execute. And now it will look at all the Python functions it has available and run them to execute this request. Now after a few minutes it finally created the file. It went through some back and forth on its own where it hit some errors. I didn't have to do anything myself. It just asked me for permission along the way to use different libraries or different functions. And the end result is a file like this. So if you rightclick and I reveal it within the folder and I open it up, you'll see this is the generative AI landscape for 2026. Here are the key predictions at a glance. Here are the areas poised to flourish. Continued. It's like having a mini AI consultant. So instead of you paying thousands of dollars for a deck, you can get it in seconds. And I've given no other advice, right? Or or no other directives on how to create this file. But we know now that it's possible. And I can do the same thing with an Excel file or a PowerPoint file. And the power is in cloud AI on the front end. If you use a cloud project, even with their new updates to make a conversation last longer, you'll notice a huge degradation in quality. As you have more and more commands or you're trying to edit the same PDF over and over again. In this case, I could literally just do slashcontext and see how much of my context window is remaining after doing this operation. So, I can see I still got a fair way to go. And if I want to create a brand new Excel file instead of this PDF and I want to keep editing this PDF, I can just open another session right here and tell it you know what go and create an Excel file. So now the conveyor belt for this document factory has been made. Now one thing I promised you was an Easter egg which is how can we step up the design and look and feel of these documents, these docs or these PDF files or even these PowerPoint files to look that much more decadent. So, an example I'll show you now is I'll take this exact PDF and we'll make it in the style of The Economist. And if you don't know what The Economist is, it's a very well- reggarded publication that has a distinct look and feel. It has the red white. They have a really great way of putting together the formatting of their documents. So, you can see that the font here, easy on the eyes. If I was logged in, you'd be able to see the subheadings and the subheaders. And one thing I can do is I can take this URL and I can go into firecrawl.dev dev and I don't care to scrape this website. I care to scrape the look and feel. So, if I scrape this, I'll be able to click and look at the format of the actual branding. So, I'm going to click on branding here and we'll just click on start scraping again. Then, as a result of that, I should be able to extract the JSON. I can feed to cloud code to coach it on how to step up our branding of our PDF. And you can see when we go on branding right here, you can see the extracted images, the components, the buttons, the colors, the fonts, the typography, everything you'd need. And all you have to do is copy this as JSON. And we can go back into cloud code. And I don't want to carbon copy the economist. They have their own rights to the look and feel, but I want to be inspired by the eloquent structure and the look and feel of the general text. So I can say the following. Okay. So the PDF you made is super ugly. We want to step it up. I want you to be inspired by the way the economist designs their articles. Now, we don't want to copy them in any way, shape, or form. We want to be original. We don't even want to be derivative, but I want you to be inspired by the look and feel to step up the structure of our document. So, don't use red and white. Use maybe blue and white. And then change the structure or the change the typography you might use. But here's a cheat sheet where I want you to make a plan on how you're going to step up our look and feel of our PDF. So, we'll take that right there and I will paste the JSON and I'll go into shift tab to go into plan mode and it will come back with a plan on how it will design and bring our PDF to an eloquent nature. So, this is the PDF redesign plan it came up with and here's the brand new color palette, the typography strategy, the layout improvements, the visual hierarchy and the structural changes in terms of a title page. Pages two to four will be predictions, conclusion, and it goes through everything that's going to basically emulate and structure in the document itself. And once we let it run, it re-executed all the Python of those skills. And now it's on its way to completing each step of the to-do list. And boom, look at this. Way nicer, way better put together. Obviously, the whole table floating from one page to the next we could fix. But look at the new structure, the new variation of the fonts. All of this is generated with cloud code. And the best thing is you could go back to cloud code and say, you know what, go and update your skill on documents to make sure every single document we create is using this exact same style and branding. And what happens from there is you can start cranking out many files at scale with a unified structure that's very predictable because usually when you build things on the front-end tools, you get one output that's incredible. Then you recreate it and it's less incredible or it's very different. and you try to basically create this structure where it's replicable and consistent. This lets you do this with all the types of files, whether it's a DCF model with Excel or a PowerPoint file for a consulting level 30page deck. Now, to prove to you that this can create every file structure that I mentioned before, I'll ask you to make an Excel file, a PowerPoint file, and a DOCEX file. And then while we're doing that, I'll show you the more laborious way if you don't want to use GitHub to recreate this process, especially if there's a document that you output on Claudia that you really like and all you want to do is reverse engineer and emulate it. Okay, great job on the PDF. I want you to create a hypothetical Excel file that goes through industry by industry using the look and feel and the branding we used for the PDF so it's consistent. and then create a series of tabs by quarter of what you expect and maybe financially what you expect to impact every main industry from generative AI's consequences and then create a PDF or no a PowerPoint not a PDF a PowerPoint presentation let's call it a 10page deck walking through and summarizing what you wrote in the PDF and then a small summarized executive summary in a DOCX file so I'm expecting three outputs in three different file typ types. So, we'll just let this ruminate and create those while we head over to option number two. So, on Claudia's front end, let's imagine you created this PowerPoint file right here. And you love the look and feel that comes with the new Opus. So, you like this, you like the structure, you like the flow, especially if we expand this a little bit. Everything's clear. It's something that a designer would put together at least 5 years ago. You want to be able to recreate this now. and you look at GitHub and you're like, I'm good for now. So, you could execute this on the front end. And what I would do is step one once you fix and you get it to a point where you're happy with it. So, I basically use this mega prompt right here that I'll make available to you in the second link in the description below along with a few other goodies. And it says, I just created an Excel PowerPoint doc PDF file that demonstrates impressively functionality and professional business output. And my goal is essentially to extract everything. So give me the structure and the architecture of how you built this. The content generation strategy, how did you decide on what will be on every slide, the formatting, the styling, the formulas and calculations if applicable, meaning an Excel file of some sort, data logic, any code or pseudo code that you used, etc. Because behind the scenes while it's running the skills, you'll notice if you're curious enough, if you click on one of these, let's say these internal steps, there's a series of HTML behind the scenes. That HTML is responsible for the PowerPoint files. So, if we were to reverse engineer them, you'll see that Claude can give you every single snippet and every single code associated with those snippets that it used to recreate those files. Now, if you're nontechnical, this is all gibberish to you. So how do you take this and do something useful with it? So what you can do is say package all this information neatly in markdown and in a zip file kind of like a care package and make it easy for me to copy paste this all so we can recreate it elsewhere. And now what it'll do is package everything in an easy to download structure. So you have the pitch deck package right here. You have a readme that you can feed to cloud code. You have a cheat sheet on exactly how I came up with the slide by slide content and then you have the P PowerPoint file itself. So if you download all of these, I'll show you how easy this could be. So I'll download the whole package and we'll load it right here. Let's just do download as is and I'll download all the other assets and we'll plug it into cloud code. So this is a brand new folder with zero knowledge of how to execute what even a skill is. Okay, what I'll do is I will just paste everything in here. And then we'll just use this all as a guide. So I'm going to open any file. We'll execute and crank out a brand new session. And then we'll say the following. We'll just do slashinitialize. What this will do is get Claude Code to become familiar with everything in here from the cheat sheet to the slides to the readme, everything it would need because technically this might take a few extra steps, but it should be able to abstract how to execute everything since all of the final files are here. So I'll do initialize. It'll come back with a cloudMD file with a summary of what it understood from this codebase. And then now we will be able to challenge it to go and understand how to recreate a similar type of PowerPoint. And after a few minutes, we get exactly the response we're looking for where it says, "Now I have a clear picture of this codebase. It's a pitch deck generator that converts HTML slides to PowerPoint using these two Python libraries or these JavaScript libraries in this case. So now that it has this CloudMD, we could take a peek at the CloudMD. It has a summary of the commands it needs to execute, the architecture, the HTML slide constraints to be able to recreate the look and feel. And now we did this without having to connect to something like skills through a GitHub repo. It basically reverse engineered and it's now really tailored on this specific style that we generated on the front end. So even if you could recreate this very easily on GitHub, you could also just create an asset once you're happy with it on the front end, go and reverse engineer it on the back end. So now it's just executing the to-do list and I'll check back to see what the final slide output looks like. And after letting Cloud Code do its thing for 10 to 15 minutes, it went and installed, uninstalled, did whatever it had to do, and we got this resulting file right here. And if we open it and we doubleclick on this deck, you will see hopefully that we've recreated that exact same look and feel and design with a different topic, different content, similar structure as what we created on the front end. So you could technically just give it whatever you want, whatever you like, have it reverse engineer it, understand the skill after you have cla sheets and all the code it used to create it itself. Now before we finish off, if you remember, I had a few things running in the background with the easy way. So if we pop back into our first session, it is completed. And now from this one, we have a personalized Excel file, we have a PowerPoint file, and we have a word document. So if we pop out any one of these right here, here are all of them. So this is the GenVAI landscape, the executive summary in the same structure as the PDF. Here is the Excel file. If I open up right here, let's do this one. There we go. And again, same look and feel. It has a few different tabs, one per quarter if you remember, with some tabulations done, summations, everything you can imagine. You can build actual calculations in these Excel files, which to me is mind-blowing to do it so easily. And the last one is the PowerPoint file. So, if we go on here, click on this, you can see the look and feel, the text, all of this is consistent. So, if you have a business, if you're doing this for a business, if you're trying to do, I don't know, cold outbound lead magnets, you can go and scrape the website's look and feel, you could tailor proposals, whatever it is, this becomes the ultimate document factory. Now again, if you needed the command, the super prompt I showed you on Claudi to extract exactly how it created that PowerPoint file so you can use it for whatever you want, I'll make that available in the second link in the description below. But let me tell you that this tutorial just scratches the surface of what you can do at scale. I was able to create a full AI strategy generator for my community members where you just input the first company name, a little description, and you let it run for 40, 45 minutes, and you have a flurry of different Python functions executing to run research, to do tabulations, to create reports, document files. You can do so much with this technology now, and the average person has no clue. So, I highly recommend that you take a look and actually try this out yourself. Even if you're non-technical and a terminal scares you, trust me, when you get results like this, it won't be as scary. And as always, if you like this content and you find it helpful, please let me know down in the comments below. And if you want even more of this on steroids, then check out the first link to join my exclusive community, early AI adopters. I'll see you in the next one.

## Timed Segments

[0:00] There&#39;s a cheat code living inside
[0:02] Claude Code that lets you make it into a
[0:04] one-stop document factory. I&#39;m talking
[0:07] about creating PowerPoint decks, Excel
[0:09] files, Word doc files, and even PDFs
[0:13] just from a single prompt. So, while
[0:15] everyone is going back and forth with
[0:16] Chat GBT or Claudi on the front end and
[0:19] having conversations collapse with
[0:21] minimal output, you could be generating
[0:24] entire finished products end to end in
[0:26] minutes. And it gets better. I&#39;m also
[0:28] going to show you this trick where you
[0:29] can go on any website and extract all
[0:31] the branding, the design, and import it
[0:34] into those documents. So, if you&#39;re
[0:36] trying to create a polished PDF or a
[0:38] polished DOCX file just using natural
[0:41] language and nothing else, I&#39;ll show you
[0:43] exactly how to do that. This is the kind
[0:44] of work that used to need a team of
[0:46] analysts and designers and now you can
[0:49] just do it in Claude code. So, if I piqu
[0:50] your interest, let&#39;s dive in. All right.
[0:52] So, conceptually before we dive in, all
[0:54] we want to do is use Claude skills
[0:56] within Claude code to crank out these
[0:59] different types of files at scale
[1:01] because at the end of the day, anything
[1:03] like a word document, Excel file,
[1:06] PowerPoint or PDF is just composed of a
[1:09] series of code and a series of symbols.
[1:11] So, whenever you see Claude or Chatbt
[1:13] generate some form of file, whether
[1:15] that&#39;s a text file or a PDF, it needs to
[1:18] write a series of Python to execute
[1:20] that. But in this case, instead of
[1:22] abstracting this process away from you,
[1:24] you can own this process in cloud code.
[1:26] So you can use it not just for one file,
[1:28] but many or as many as you possibly
[1:30] want. And theoretically, you can create
[1:32] a whole command center where you can
[1:33] crank out each type of file that you
[1:36] want all in the same place. Now, there
[1:38] are two ways we can go about this.
[1:39] There&#39;s the easy way using the cloud
[1:42] skills repo in GitHub from anthropic
[1:44] themselves and cloning it in cloud code
[1:47] and using it pretty much right away. But
[1:49] plan B, in case you really want to try
[1:51] out Cloud Code, but the word GitHub
[1:53] makes you cringe inside or you&#39;re not
[1:55] ready for that leap just yet, I&#39;ll show
[1:57] you how you can take an output from the
[1:59] front end and then ask Claude Aai to
[2:01] summarize exactly how it built it, the
[2:04] code it used, and any file that might be
[2:06] helpful for an AI agent and feed that
[2:08] set of files to Claude Code to basically
[2:11] reverse engineer exactly how to rebuild
[2:13] that file from scratch. Both of these
[2:15] strategies work. So, I&#39;ll first show the
[2:17] easy, quick, and dirty way, and then
[2:18] I&#39;ll go into the slightly more laborious
[2:20] way. For the easy method, all you have
[2:22] to do is go on
[2:23] github.com/anthropic/skills,
[2:26] and you&#39;ll see a screen like this. And
[2:28] all we care about is the skills section.
[2:31] So, in Cloud Code, literally all you&#39;re
[2:33] going to do is open a brand new folder.
[2:36] Open the terminal and execute this
[2:38] request, which says clone this following
[2:40] repo. This is the repo that we look at
[2:42] right here. So, these are the exact same
[2:44] thing. And then we&#39;re going to copy the
[2:46] skills directories into a folder and a
[2:49] subfolder where Claude Cook can always
[2:51] refer to it moving forward. Once it has
[2:53] those skills in the TLDDR of how to
[2:55] execute an Excel file, we can start
[2:57] cranking out files right away. Like I
[2:59] promised, this is the repo. So if you go
[3:01] into skills, you&#39;ll be able to see that
[3:03] out of the box, Anthropic came with
[3:05] around 15 of them. Some of them are the
[3:08] ones we care about like doc x and
[3:10] powerpoint, but there are other ones
[3:12] like skills that can create other
[3:13] skills. So if you want to go into skill
[3:15] seion and crank out different
[3:17] personalized and tailored skills for
[3:19] you, your business, whatever you do
[3:21] day-to-day, all of this is possible on
[3:23] Claudi&#39;s front end. You have to bring
[3:26] the skills to it. In Cloud Code, you can
[3:28] bring the skills to cla code. And to
[3:30] prove I&#39;m not full of it, I&#39;ll show you
[3:32] exactly how easy this could be. So I&#39;m
[3:34] going to go back into Excel. I&#39;m going
[3:36] to copy paste this command. Now I&#39;m
[3:39] going to go into cursor where I&#39;m
[3:41] hosting Claude Code and I&#39;m opening a
[3:43] brand new folder. I called it easyclaw
[3:45] skills and I&#39;m going to just open up a
[3:47] new terminal. Easy enough so far, right?
[3:50] All we&#39;re going to do is paste that
[3:51] command exactly as we saw before. We&#39;ll
[3:54] send this over and it will go and query
[3:57] the GitHub repo, retrieve all the
[4:00] skills. Now it&#39;s going to ask me for
[4:01] permission. I&#39;ll press two. It might go
[4:04] back and forth, but eventually we&#39;ll be
[4:05] able to get the full list of skills from
[4:07] that repo I just showed you. And then
[4:09] you could already see that the output
[4:11] right here, algorithmic art, brand
[4:13] guidelines. In that list will be the
[4:15] PowerPoint and DOCX file. And now it&#39;s
[4:17] creating the structure within Claude.
[4:20] And if you are curious what this folder
[4:23] does, this is where all the assets that
[4:25] drive how claude code functions live. So
[4:28] skills, anything that is fundamental
[4:31] like the settings in your actual
[4:33] terminal in terms of what has permission
[4:35] versus what doesn&#39;t have permission. All
[4:37] of those different components live in
[4:39] this.cloud folder that is generated
[4:41] automatically. And like you can see
[4:42] here, we now have copied all of these
[4:44] skills. So if you open up the skills
[4:46] folder, you&#39;ll see that each and every
[4:48] one like the PDF function has a series
[4:50] of scripts. This is all the Python that
[4:53] basically is involved in being able to
[4:55] convert PDF to images, validate images,
[4:59] extract fields from existing documents,
[5:01] and convert it to PDF. And then if you
[5:03] want to see exactly the playbyplay on
[5:06] how it does this, this skill.md file
[5:09] will show you and walk you through the
[5:11] different functions, why it&#39;s doing it,
[5:13] but odds are if you&#39;re watching this,
[5:15] you might not care as much for the
[5:16] Python or why it&#39;s doing what it&#39;s
[5:18] doing. You just want the outcome. So, if
[5:20] we just go into a brand new session,
[5:23] like I promised, I can just say, &quot;Make
[5:25] me a PDF about what your expectations
[5:28] are in 2026 in the AI space.&quot; Okay. So,
[5:31] I&#39;d love to create a beautiful PDF where
[5:35] you can outline your expectations for
[5:38] where the AI, specifically the
[5:39] generative AI industry, is about to
[5:42] flourish or not flourish in 2026. Make
[5:45] it around five pages and make it a very
[5:47] clean and polished PDF document. Tap
[5:50] into your skills in your skill set
[5:52] around creating PDFs. So if I send this
[5:54] over, even without tagging any specific
[5:56] files, it should be able to realize that
[5:58] it has to tap into this PDF skill set.
[6:02] There we go. And now it&#39;s recognized
[6:04] that that it has to go into its root
[6:05] folder. Cloud, go into subfolders and
[6:09] find the functions to execute. And now
[6:11] it will look at all the Python functions
[6:13] it has available and run them to execute
[6:16] this request. Now after a few minutes it
[6:18] finally created the file. It went
[6:19] through some back and forth on its own
[6:21] where it hit some errors. I didn&#39;t have
[6:22] to do anything myself. It just asked me
[6:25] for permission along the way to use
[6:27] different libraries or different
[6:28] functions. And the end result is a file
[6:30] like this. So if you rightclick and I
[6:32] reveal it within the folder and I open
[6:35] it up, you&#39;ll see this is the generative
[6:37] AI landscape for 2026. Here are the key
[6:40] predictions at a glance. Here are the
[6:42] areas poised to flourish. Continued.
[6:45] It&#39;s like having a mini AI consultant.
[6:47] So instead of you paying thousands of
[6:48] dollars for a deck, you can get it in
[6:50] seconds. And I&#39;ve given no other advice,
[6:53] right? Or or no other directives on how
[6:55] to create this file. But we know now
[6:57] that it&#39;s possible. And I can do the
[6:59] same thing with an Excel file or a
[7:01] PowerPoint file. And the power is in
[7:04] cloud AI on the front end. If you use a
[7:06] cloud project, even with their new
[7:08] updates to make a conversation last
[7:09] longer, you&#39;ll notice a huge degradation
[7:12] in quality. As you have more and more
[7:14] commands or you&#39;re trying to edit the
[7:15] same PDF over and over again. In this
[7:17] case, I could literally just do
[7:19] slashcontext and see how much of my
[7:21] context window is remaining after doing
[7:24] this operation. So, I can see I still
[7:26] got a fair way to go. And if I want to
[7:28] create a brand new Excel file instead of
[7:31] this PDF and I want to keep editing this
[7:33] PDF, I can just open another session
[7:35] right here and tell it you know what go
[7:36] and create an Excel file. So now the
[7:38] conveyor belt for this document factory
[7:40] has been made. Now one thing I promised
[7:43] you was an Easter egg which is how can
[7:45] we step up the design and look and feel
[7:47] of these documents, these docs or these
[7:50] PDF files or even these PowerPoint files
[7:52] to look that much more decadent. So, an
[7:54] example I&#39;ll show you now is I&#39;ll take
[7:55] this exact PDF and we&#39;ll make it in the
[7:58] style of The Economist. And if you don&#39;t
[7:59] know what The Economist is, it&#39;s a very
[8:01] well- reggarded publication that has a
[8:03] distinct look and feel. It has the red
[8:06] white. They have a really great way of
[8:08] putting together the formatting of their
[8:10] documents. So, you can see that the font
[8:11] here, easy on the eyes. If I was logged
[8:14] in, you&#39;d be able to see the subheadings
[8:16] and the subheaders. And one thing I can
[8:18] do is I can take this URL and I can go
[8:21] into firecrawl.dev dev and I don&#39;t care
[8:24] to scrape this website. I care to scrape
[8:26] the look and feel. So, if I scrape this,
[8:30] I&#39;ll be able to click and look at the
[8:32] format of the actual branding. So, I&#39;m
[8:34] going to click on branding here and
[8:37] we&#39;ll just click on start scraping
[8:38] again. Then, as a result of that, I
[8:40] should be able to extract the JSON. I
[8:42] can feed to cloud code to coach it on
[8:45] how to step up our branding of our PDF.
[8:47] And you can see when we go on branding
[8:49] right here, you can see the extracted
[8:52] images, the components, the buttons, the
[8:55] colors, the fonts, the typography,
[8:57] everything you&#39;d need. And all you have
[8:59] to do is copy this as JSON. And we can
[9:01] go back into cloud code. And I don&#39;t
[9:03] want to carbon copy the economist. They
[9:05] have their own rights to the look and
[9:06] feel, but I want to be inspired by the
[9:08] eloquent structure and the look and feel
[9:10] of the general text. So I can say the
[9:13] following. Okay. So the PDF you made is
[9:16] super ugly. We want to step it up. I
[9:18] want you to be inspired by the way the
[9:21] economist designs their articles. Now,
[9:22] we don&#39;t want to copy them in any way,
[9:24] shape, or form. We want to be original.
[9:26] We don&#39;t even want to be derivative, but
[9:28] I want you to be inspired by the look
[9:30] and feel to step up the structure of our
[9:33] document. So, don&#39;t use red and white.
[9:35] Use maybe blue and white. And then
[9:37] change the structure or the change the
[9:39] typography you might use. But here&#39;s a
[9:41] cheat sheet where I want you to make a
[9:42] plan on how you&#39;re going to step up our
[9:45] look and feel of our PDF. So, we&#39;ll take
[9:47] that right there and I will paste the
[9:49] JSON and I&#39;ll go into shift tab to go
[9:52] into plan mode and it will come back
[9:53] with a plan on how it will design and
[9:56] bring our PDF to an eloquent nature. So,
[9:59] this is the PDF redesign plan it came up
[10:02] with and here&#39;s the brand new color
[10:03] palette, the typography strategy, the
[10:06] layout improvements, the visual
[10:08] hierarchy and the structural changes in
[10:11] terms of a title page. Pages two to four
[10:13] will be predictions, conclusion, and it
[10:16] goes through everything that&#39;s going to
[10:17] basically emulate and structure in the
[10:19] document itself. And once we let it run,
[10:21] it re-executed all the Python of those
[10:23] skills. And now it&#39;s on its way to
[10:25] completing each step of the to-do list.
[10:27] And boom, look at this. Way nicer, way
[10:30] better put together. Obviously, the
[10:31] whole table floating from one page to
[10:33] the next we could fix. But look at the
[10:36] new structure, the new variation of the
[10:38] fonts. All of this is generated with
[10:40] cloud code. And the best thing is you
[10:43] could go back to cloud code and say, you
[10:44] know what, go and update your skill on
[10:47] documents to make sure every single
[10:48] document we create is using this exact
[10:51] same style and branding. And what
[10:53] happens from there is you can start
[10:54] cranking out many files at scale with a
[10:58] unified structure that&#39;s very
[10:59] predictable because usually when you
[11:00] build things on the front-end tools, you
[11:03] get one output that&#39;s incredible. Then
[11:05] you recreate it and it&#39;s less incredible
[11:07] or it&#39;s very different. and you try to
[11:09] basically create this structure where
[11:11] it&#39;s replicable and consistent. This
[11:13] lets you do this with all the types of
[11:15] files, whether it&#39;s a DCF model with
[11:17] Excel or a PowerPoint file for a
[11:20] consulting level 30page deck. Now, to
[11:22] prove to you that this can create every
[11:24] file structure that I mentioned before,
[11:26] I&#39;ll ask you to make an Excel file, a
[11:28] PowerPoint file, and a DOCEX file. And
[11:31] then while we&#39;re doing that, I&#39;ll show
[11:32] you the more laborious way if you don&#39;t
[11:34] want to use GitHub to recreate this
[11:36] process, especially if there&#39;s a
[11:37] document that you output on Claudia that
[11:39] you really like and all you want to do
[11:41] is reverse engineer and emulate it.
[11:43] Okay, great job on the PDF. I want you
[11:45] to create a hypothetical Excel file that
[11:48] goes through industry by industry using
[11:50] the look and feel and the branding we
[11:52] used for the PDF so it&#39;s consistent. and
[11:55] then create a series of tabs by quarter
[11:59] of what you expect and maybe financially
[12:01] what you expect to impact every main
[12:03] industry from generative AI&#39;s
[12:05] consequences and then create a PDF or no
[12:08] a PowerPoint not a PDF a PowerPoint
[12:11] presentation let&#39;s call it a 10page deck
[12:14] walking through and summarizing what you
[12:15] wrote in the PDF and then a small
[12:19] summarized executive summary in a DOCX
[12:21] file so I&#39;m expecting three outputs in
[12:24] three different file typ types. So,
[12:26] we&#39;ll just let this ruminate and create
[12:29] those while we head over to option
[12:32] number two. So, on Claudia&#39;s front end,
[12:34] let&#39;s imagine you created this
[12:36] PowerPoint file right here. And you love
[12:38] the look and feel that comes with the
[12:40] new Opus. So, you like this, you like
[12:42] the structure, you like the flow,
[12:44] especially if we expand this a little
[12:45] bit. Everything&#39;s clear. It&#39;s something
[12:47] that a designer would put together at
[12:49] least 5 years ago. You want to be able
[12:51] to recreate this now. and you look at
[12:53] GitHub and you&#39;re like, I&#39;m good for
[12:55] now. So, you could execute this on the
[12:56] front end. And what I would do is step
[12:59] one once you fix and you get it to a
[13:01] point where you&#39;re happy with it. So, I
[13:02] basically use this mega prompt right
[13:04] here that I&#39;ll make available to you in
[13:06] the second link in the description below
[13:08] along with a few other goodies. And it
[13:10] says, I just created an Excel PowerPoint
[13:12] doc PDF file that demonstrates
[13:15] impressively functionality and
[13:17] professional business output. And my
[13:18] goal is essentially to extract
[13:20] everything. So give me the structure and
[13:22] the architecture of how you built this.
[13:24] The content generation strategy, how did
[13:26] you decide on what will be on every
[13:28] slide, the formatting, the styling, the
[13:31] formulas and calculations if applicable,
[13:33] meaning an Excel file of some sort, data
[13:36] logic, any code or pseudo code that you
[13:38] used, etc. Because behind the scenes
[13:41] while it&#39;s running the skills, you&#39;ll
[13:43] notice if you&#39;re curious enough, if you
[13:45] click on one of these, let&#39;s say these
[13:48] internal steps, there&#39;s a series of HTML
[13:51] behind the scenes. That HTML is
[13:53] responsible for the PowerPoint files.
[13:55] So, if we were to reverse engineer them,
[13:58] you&#39;ll see that Claude can give you
[13:59] every single snippet and every single
[14:02] code associated with those snippets that
[14:04] it used to recreate those files. Now, if
[14:06] you&#39;re nontechnical, this is all
[14:08] gibberish to you. So how do you take
[14:10] this and do something useful with it? So
[14:12] what you can do is say package all this
[14:14] information neatly in markdown and in a
[14:17] zip file kind of like a care package and
[14:20] make it easy for me to copy paste this
[14:22] all so we can recreate it elsewhere. And
[14:24] now what it&#39;ll do is package everything
[14:26] in an easy to download structure. So you
[14:29] have the pitch deck package right here.
[14:32] You have a readme that you can feed to
[14:33] cloud code. You have a cheat sheet on
[14:35] exactly how I came up with the slide by
[14:38] slide content and then you have the P
[14:40] PowerPoint file itself. So if you
[14:42] download all of these, I&#39;ll show you how
[14:44] easy this could be. So I&#39;ll download the
[14:46] whole package and we&#39;ll load it right
[14:48] here. Let&#39;s just do download as is and
[14:52] I&#39;ll download all the other assets and
[14:53] we&#39;ll plug it into cloud code. So this
[14:56] is a brand new folder with zero
[14:58] knowledge of how to execute what even a
[15:00] skill is. Okay, what I&#39;ll do is I will
[15:02] just paste everything in here. And then
[15:06] we&#39;ll just use this all as a guide. So
[15:08] I&#39;m going to open any file. We&#39;ll
[15:10] execute and crank out a brand new
[15:12] session. And then we&#39;ll say the
[15:14] following. We&#39;ll just do
[15:16] slashinitialize.
[15:17] What this will do is get Claude Code to
[15:19] become familiar with everything in here
[15:22] from the cheat sheet to the slides to
[15:24] the readme, everything it would need
[15:26] because technically this might take a
[15:27] few extra steps, but it should be able
[15:30] to abstract how to execute everything
[15:32] since all of the final files are here.
[15:35] So I&#39;ll do initialize. It&#39;ll come back
[15:37] with a cloudMD file with a summary of
[15:39] what it understood from this codebase.
[15:41] And then now we will be able to
[15:43] challenge it to go and understand how to
[15:45] recreate a similar type of PowerPoint.
[15:46] And after a few minutes, we get exactly
[15:48] the response we&#39;re looking for where it
[15:50] says, &quot;Now I have a clear picture of
[15:52] this codebase. It&#39;s a pitch deck
[15:54] generator that converts HTML slides to
[15:57] PowerPoint using these two Python
[15:59] libraries or these JavaScript libraries
[16:00] in this case. So now that it has this
[16:03] CloudMD, we could take a peek at the
[16:04] CloudMD. It has a summary of the
[16:07] commands it needs to execute, the
[16:09] architecture, the HTML slide constraints
[16:12] to be able to recreate the look and
[16:14] feel. And now we did this without having
[16:15] to connect to something like skills
[16:17] through a GitHub repo. It basically
[16:19] reverse engineered and it&#39;s now really
[16:21] tailored on this specific style that we
[16:24] generated on the front end. So even if
[16:26] you could recreate this very easily on
[16:28] GitHub, you could also just create an
[16:30] asset once you&#39;re happy with it on the
[16:32] front end, go and reverse engineer it on
[16:34] the back end. So now it&#39;s just executing
[16:36] the to-do list and I&#39;ll check back to
[16:38] see what the final slide output looks
[16:40] like. And after letting Cloud Code do
[16:42] its thing for 10 to 15 minutes, it went
[16:44] and installed, uninstalled, did whatever
[16:46] it had to do, and we got this resulting
[16:49] file right here. And if we open it and
[16:52] we doubleclick on this deck, you will
[16:54] see hopefully that we&#39;ve recreated that
[16:57] exact same look and feel and design with
[17:01] a different topic, different content,
[17:05] similar structure as what we created on
[17:08] the front end. So you could technically
[17:11] just give it whatever you want, whatever
[17:12] you like, have it reverse engineer it,
[17:15] understand the skill after you have cla
[17:19] sheets and all the code it used to
[17:20] create it itself. Now before we finish
[17:22] off, if you remember, I had a few things
[17:24] running in the background with the easy
[17:26] way. So if we pop back into our first
[17:28] session, it is completed. And now from
[17:31] this one, we have a personalized Excel
[17:33] file, we have a PowerPoint file, and we
[17:36] have a word document. So if we pop out
[17:39] any one of these right here, here are
[17:41] all of them. So this is the GenVAI
[17:43] landscape, the executive summary in the
[17:46] same structure as the PDF. Here is the
[17:49] Excel file. If I open up right here,
[17:52] let&#39;s do this one. There we go. And
[17:55] again, same look and feel. It has a few
[17:58] different tabs, one per quarter if you
[18:01] remember, with some tabulations done,
[18:03] summations, everything you can imagine.
[18:05] You can build actual calculations in
[18:07] these Excel files, which to me is
[18:09] mind-blowing to do it so easily. And the
[18:11] last one is the PowerPoint file. So, if
[18:13] we go on here, click on this, you can
[18:16] see the look and feel, the text, all of
[18:19] this is consistent. So, if you have a
[18:21] business, if you&#39;re doing this for a
[18:22] business, if you&#39;re trying to do, I
[18:24] don&#39;t know, cold outbound lead magnets,
[18:26] you can go and scrape the website&#39;s look
[18:28] and feel, you could tailor proposals,
[18:31] whatever it is, this becomes the
[18:33] ultimate document factory. Now again, if
[18:35] you needed the command, the super prompt
[18:37] I showed you on Claudi to extract
[18:40] exactly how it created that PowerPoint
[18:42] file so you can use it for whatever you
[18:43] want, I&#39;ll make that available in the
[18:45] second link in the description below.
[18:47] But let me tell you that this tutorial
[18:48] just scratches the surface of what you
[18:51] can do at scale. I was able to create a
[18:53] full AI strategy generator for my
[18:56] community members where you just input
[18:58] the first company name, a little
[19:01] description, and you let it run for 40,
[19:03] 45 minutes, and you have a flurry of
[19:06] different Python functions executing to
[19:08] run research, to do tabulations, to
[19:11] create reports, document files. You can
[19:13] do so much with this technology now, and
[19:15] the average person has no clue. So, I
[19:18] highly recommend that you take a look
[19:20] and actually try this out yourself. Even
[19:22] if you&#39;re non-technical and a terminal
[19:24] scares you, trust me, when you get
[19:26] results like this, it won&#39;t be as scary.
[19:28] And as always, if you like this content
[19:30] and you find it helpful, please let me
[19:32] know down in the comments below. And if
[19:33] you want even more of this on steroids,
[19:35] then check out the first link to join my
[19:37] exclusive community, early AI adopters.
[19:39] I&#39;ll see you in the next one.
