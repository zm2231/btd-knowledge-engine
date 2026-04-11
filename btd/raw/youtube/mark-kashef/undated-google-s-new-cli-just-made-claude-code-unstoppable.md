---
title: "Google's New CLI Just Made Claude Code Unstoppable"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=1Z1aECGwJh0"
video_id: "1Z1aECGwJh0"
duration: "13:46"
transcript_method: "youtube-captions"
segment_count: 397
char_count: 15188
status: ingested
topics: []
meta_patterns: []
---

# Google's New CLI Just Made Claude Code Unstoppable

**Creator**: mark-kashef | **Duration**: 13:46
**URL**: https://www.youtube.com/watch?v=1Z1aECGwJh0
**Transcript**: 397 segments, 15188 chars

## Transcript

If you use things like Gmail, Google Calendar, Google Drive, or anything in the Google ecosystem, then I'm about to show you a free powerful tool that you can add to your stack that will take your productivity and your AI agents to the next level. Google just handed all of us a golden key, and it's called the Google Workspace CLI. It's now the easiest and most elegant way to provide your AI agents full access to your Google account. No need for Zapier, no need for make.com, and no need for any of them. So, in this video, I'm going to show you exactly what it is, how you can set it up in under 2 minutes, and most importantly, how you can leverage this with something like Cloud Code to build the Agentic Workflows that you wish no code tools could have done, but never quite could. Let's get into it. All right, so if you go on to github.com/googleworkspace/cli, you will see the following page. And this goes through all the functionality, how it works, and most importantly, how you can set it up. Now, the install path for someone that is technical is pretty straightforward, but I've created a mega prompt that will allow you to just run this one command, run this prompt, and let Cloud Code do all the dirty work for you. And just in case you're non-technical and don't even know what a CLI is, I'll walk through what it is conceptually, and then go through why this one is so special. Now, CLI stands for command line interface. And before we used to live in a world where you had to manually type and understand what a command line interface for a particular provider looked like in terms of the different commands, the different syntax, the different ways that you can access all of its functionality. But ever since getting the gift of agentic workflows through things like cloud code, you can now offload all the understanding of how to use the CLI and you and I can just use natural language to navigate throughout. So the workflow in a nutshell is you describe the task and claude code writes the command and then the command line interface executes it. Now the core difference between a terminal and a command line interface is a terminal is just a blank state that has access to your operating system. Whereas a CLI, this one is called GWS, Google Workspace, allows you to have a terminal with built-in commands. Lucky for you and I, we don't have to manually write this command. But this is an example of a command that you can execute with this command line interface that would allow you to go through your Gmail messages. So you can see the first part is GWS the name of the actual command line. Then you have the service you are targeting Gmail. Then you have the resource of that service messages. And then you have the action that you want to execute. In this case you want a list of your messages. Then you have some parameters that are optional. And then you go through and say how many pages worth of context do you want. In the world of old, you'd have to learn this, write it on some form of sticky note, and commit it to memory. And if you take a look at the repo, you'll see that it's composed of skills and what are called recipes. It has 101 of these. Skills are what you're now familiar with. The ability to have these very predictable workflows execute from things like cloud code. And then you have recipes which are basically SOPs of executing different skills, commands and workflows. So when you install the CLI, you can interact with it through those commands that cloud code will execute. You can also use their MCP, their skills or combination of all of them if needed. So now you can say something like get my last emails sorted by priority. I'm about to show you five different examples of this by the way. And then it will run all the commands and provide you the result. And because you don't have to go through an intermediary like a Zap year, like a make.com, you don't have to worry about running costs of executing these commands. Basically, one zap at a time or one credit at a time. The only thing you're concerned with is your token [music] usage. Now, some people find skills overwhelming enough on their own. So, this is a little bit of a TLDDR cheat sheet on when you can use the CLI, the MCP, or the skills. Now, the CLI is the most potent of the three because you can do whatever you want, but it's optimized for one-off tasks. If you do the exact same task in the exact same way two, three, four times, it makes sense to crystallize this process as a skill. And then MCP was all the rave this time last year. But now, since skills came out, especially with their context efficiency when it comes to token usage, I would use in order CLI number one, then skills once you crystallize. And then if you feel the need then you can go to MCP and that's it from a conceptual standpoint. So let's hop into the terminal and I'll walk you through how easily you can install this with my adjusted prompt that I'll give you in the second link in the description below. So step one is you want to run this command npm install-g at Google Workspace CLI. Once you do that, you should get a confirmation that it's installed and ready to go and it's installed globally. And then this is my mega prompt. And I'll walk through this prompt with you so you can see exactly all the nuts and bolts in case you want to change it up. So the task is to set up the Google workspace and then we say perform the complete setup on my behalf using bash for terminal steps clawed with chrome browser automation for web steps. Now the reason why I'm using cloud and chrome is typically if you've ever set up any or something similar where you have to go to your Google project log in somehow find the APIs and services then find the client section then create the clients. If you're not used to that interface it's very overwhelming. So since we have a language model that's so smart I just offload that work onto cloud code since it can use my existing browser go into my existing Google workspace and navigate as needed. Now, in this case, I said, "Do not pause for confirmations. Only stop if something truly blocks progress." This is my personal account. But if this is a Google Cloud account for your business, for a company, I would remove this part because you want to make sure that you're babysitting every single thing that it's configuring. And then I say what the objective is. I walk through what the steps are, which are to authenticate my Google Cloud, ensure we have fresh credentials that it grabs, initialize the GWS authentication, so it basically creates a brand new service. that I'll show you the manual way in just a second. Then it opens the cloud console. I already logged in, it knows that I'm logging in with this specific account. And if it doesn't see that to switch to set account, then it configures the OOTH, the authentication, creates a local file, downloads it onto my computer, then uses it for the setup. And once you execute this, within a few minutes, it will be able to go through, use cloud and chrome, navigate to your account, and come back with a fully installed CLI. And you can see right here, right after entering that prompt, it took the wheel. It took care of everything. Everything was authenticated and we are now able to use it. So now that you have it, the natural question that will pop up is what can you do with it? So one thing you could do is literally ask cloud code, what can I do with GWS? And you want to be careful in case you have different skills that are related to the Google ecosystem. Let's say you've maggyvered one like I have for Google calendar and Gmail, etc. You want to make sure that you call out GWS until you can decide which skills deserve to survive versus which ones can now be shelved. So in this case, it walks you through and it tells you everything that you can do. And the real firepower is that you can combine multiple actions to different services in one step. And if that seems amorphous, then just give me a second to show you a couple prompt examples. But it has a 101 capabilities. Like we've said, there are some example workflows. So in this case, I asked it. I run an AI consultancy and a custom development shop. What do you think are the most pertinent skills and recipes? And then it goes through and it breaks down which ones might make sense for me to use daily. So in this case, email triage, meeting [music] prep brief, client follow-up automation, etc. Tier two is high leverage, so email to task, standup reports. And then we have tier three, person explore, basically a pseudo executive assistant, and that is a version of a recipe. And then the real play walks through some more detail. I give it my example of my website to go through and really give me specific examples of where it might be helpful. And you can do the exact same thing whether you have a business or work in a business or you want to use this for your day-to-day life. Before walking through the five examples that I've prepped, I want to make sure that you know where to navigate if you want to do this manually. So all you have to do is go to your Google Cloud, pick or create a project, and then you want to go to API and services. You can enter that right here. It will take you there. So, if you write API and services, it should show up, especially now with their added AI features. So, if I can type, you'll see it right here. So, you want to click right here. You will navigate to the credential section and then you'll want to create brand new credentials. When you go and create them, again, you can have Cloud Code help you, but you want to create a desktop app. It'll give you this file JSON. You download this JSON and you provide it to Cloud Code. And beyond that, you'll be able to execute everything that I showed you in one shot. Now, on to the prompts. Now, the first example I'll show you is email prioritization. So, this prompt is very straightforward. Use the GWS CLI to read my last 20 Gmail messages. For each one, read the subject, sender, and first 200 characters of the body. Then I tell it how to categorize them and to create a Google sheet. And this is the power of combining all the ecosystem and all the services in one shot. You can go from Google Sheet to a Google Slide to a Google Meet in the course of one single prompt. Now, naturally here for all of my prompts, I have this privacy rules section just to make sure I don't disclose anyone's name or email in this video. So, I can show you the end result here, which is this Google sheet. And if we go to said Google sheet, all of these names, etc. are all completely fake. So, looking at this, it has autocategorized everything by priority. It's even colorcoded it using Google sheet rules. See, here's the level of depth you can use now formatting because everything is native to the Google ecosystem. We have the name, the sender email, which obviously are fake for the course of this demo. And we're pretty much done in one shot. The next example is going from meetings to slide decks about said meetings. So the exact prompt here is use the CLI, pull my calendar events from this week, Monday to today, count total number of meetings, total hours in meetings, and which three people or groups I met with the most. Then look at my last 30 emails. Here we're now chaining functionality and count how many came from each email domain. Create Google Slides with a presentation called weekly report with four different slides. I tell it exactly what those are. Now, I built this up. I didn't like the very last slide because I couldn't hide some privacy. So, if we take a look, it's gonna be missing one. But you can see right here, it memorizes the meetings for the week and it memorizes who I met with and the top email senders by domain. Now, are these the most beautiful? No. But you can create your own skills on top of these skills to really dial in what these Google Slides should look like. Now, the next one, if you're like me and have thousands of emails when you want to look for that needle in the haystack email from a year and a half ago, it's always tricky what you should enter into the search bar. This helps you with that. So, in this case, you could say, "Use a CLI. Search my Gmail for email threads where the subject contains proposal, quote, invoice, or contract from the last 30 days." And you can imagine if you're doing your taxes, this is super helpful for finding those flimsy receipts that just disappear. And then you can say for each thread check whether I sent the last email if I did and it was more than 5 days ago chaining instructions draft a follow-up email using this template. Then we provide it some template and it goes and executes it. Now pulling on that thread pun intended of specificity and needle in the haststack. You can also ask very detailed questions. So in this case we ask the CLI to find my next calendar event that has at least one other attendee. get the [music] names and email addresses of all the attendees, search my Gmail for any emails I've sent or received from those people in the last 14 days, which would be helpful for contextualization. So now we've chained calendar, Gmail, and we chain one more service, Google Docs. Create a Google Doc called meeting brief event name with these sections. Then we specify all of them. And then it creates a beautifully formatted inmarkdown Google doc with everything you're asking for and more along with a suggested agenda. So, in a way, you have an entire executive assistant AI agent team in a box. And I've saved the best use case for last because if your Google Drive looks anything like my companies or my personal, then this might be helpful. So, this prompt says, "Search my Google Drive for files that have draft, old, copy, backup, V1 or V2 or V3 or in my case, final one, final two, final infinity." And for each file get the file name, file type, last modified date, file size, sharable link, and then create a Google sheet called drive audit. And this will basically map out everything in our Google Drive. And then we get a comprehensive list of all the file names, all the file types, their last modified date, their size, and we can ask it for the sharable link if we need. So hopefully this gives you a glimpse of the sheer firepower that you could have just by adding the Google Workspace CLI to your stack. And if you run some form of remote personal assistant like I do on my Telegram, then this is one huge gift for your AI agents. And like I said, I'll make the starter prompt to set this all up available to you in the description below along with these additional prompts as well in case they inspire even more use cases for you. If you love tips and tricks just like this to take you to the next level in Cloud Code, then you'll want to check out the first link in the description below for more content, more tutorials, and more skills. And for the rest of you, if you found this video helpful, illuminating, and concise, I'd super appreciate if you leave a like and a comment on the video. Really helps the reach and helps the channel. I'll see you the next one.

## Timed Segments

[0:00] If you use things like Gmail, Google
[0:02] Calendar, Google Drive, or anything in
[0:04] the Google ecosystem, then I&#39;m about to
[0:06] show you a free powerful tool that you
[0:09] can add to your stack that will take
[0:11] your productivity and your AI agents to
[0:13] the next level. Google just handed all
[0:15] of us a golden key, and it&#39;s called the
[0:17] Google Workspace CLI. It&#39;s now the
[0:19] easiest and most elegant way to provide
[0:21] your AI agents full access to your
[0:24] Google account. No need for Zapier, no
[0:26] need for make.com, and no need for any
[0:28] of them. So, in this video, I&#39;m going to
[0:29] show you exactly what it is, how you can
[0:31] set it up in under 2 minutes, and most
[0:33] importantly, how you can leverage this
[0:35] with something like Cloud Code to build
[0:37] the Agentic Workflows that you wish no
[0:40] code tools could have done, but never
[0:41] quite could. Let&#39;s get into it. All
[0:43] right, so if you go on to
[0:44] github.com/googleworkspace/cli,
[0:48] you will see the following page. And
[0:50] this goes through all the functionality,
[0:52] how it works, and most importantly, how
[0:54] you can set it up. Now, the install path
[0:56] for someone that is technical is pretty
[0:58] straightforward, but I&#39;ve created a mega
[1:00] prompt that will allow you to just run
[1:01] this one command, run this prompt, and
[1:04] let Cloud Code do all the dirty work for
[1:06] you. And just in case you&#39;re
[1:07] non-technical and don&#39;t even know what a
[1:09] CLI is, I&#39;ll walk through what it is
[1:12] conceptually, and then go through why
[1:14] this one is so special. Now, CLI stands
[1:16] for command line interface. And before
[1:18] we used to live in a world where you had
[1:20] to manually type and understand what a
[1:23] command line interface for a particular
[1:25] provider looked like in terms of the
[1:27] different commands, the different
[1:28] syntax, the different ways that you can
[1:30] access all of its functionality. But
[1:32] ever since getting the gift of agentic
[1:34] workflows through things like cloud
[1:36] code, you can now offload all the
[1:38] understanding of how to use the CLI and
[1:40] you and I can just use natural language
[1:43] to navigate throughout. So the workflow
[1:44] in a nutshell is you describe the task
[1:46] and claude code writes the command and
[1:48] then the command line interface executes
[1:50] it. Now the core difference between a
[1:52] terminal and a command line interface is
[1:54] a terminal is just a blank state that
[1:56] has access to your operating system.
[1:59] Whereas a CLI, this one is called GWS,
[2:02] Google Workspace, allows you to have a
[2:05] terminal with built-in commands. Lucky
[2:07] for you and I, we don&#39;t have to manually
[2:09] write this command. But this is an
[2:10] example of a command that you can
[2:12] execute with this command line interface
[2:14] that would allow you to go through your
[2:16] Gmail messages. So you can see the first
[2:18] part is GWS the name of the actual
[2:20] command line. Then you have the service
[2:22] you are targeting Gmail. Then you have
[2:25] the resource of that service messages.
[2:27] And then you have the action that you
[2:29] want to execute. In this case you want a
[2:31] list of your messages. Then you have
[2:33] some parameters that are optional. And
[2:34] then you go through and say how many
[2:36] pages worth of context do you want. In
[2:39] the world of old, you&#39;d have to learn
[2:41] this, write it on some form of sticky
[2:43] note, and commit it to memory. And if
[2:45] you take a look at the repo, you&#39;ll see
[2:47] that it&#39;s composed of skills and what
[2:49] are called recipes. It has 101 of these.
[2:53] Skills are what you&#39;re now familiar
[2:54] with. The ability to have these very
[2:57] predictable workflows execute from
[2:58] things like cloud code. And then you
[3:00] have recipes which are basically SOPs of
[3:03] executing different skills, commands and
[3:05] workflows. So when you install the CLI,
[3:07] you can interact with it through those
[3:09] commands that cloud code will execute.
[3:11] You can also use their MCP, their skills
[3:14] or combination of all of them if needed.
[3:16] So now you can say something like get my
[3:18] last emails sorted by priority. I&#39;m
[3:20] about to show you five different
[3:22] examples of this by the way. And then it
[3:24] will run all the commands and provide
[3:25] you the result. And because you don&#39;t
[3:26] have to go through an intermediary like
[3:28] a Zap year, like a make.com, you don&#39;t
[3:31] have to worry about running costs of
[3:33] executing these commands. Basically, one
[3:35] zap at a time or one credit at a time.
[3:38] The only thing you&#39;re concerned with is
[3:39] your token [music] usage. Now, some
[3:40] people find skills overwhelming enough
[3:42] on their own. So, this is a little bit
[3:44] of a TLDDR cheat sheet on when you can
[3:46] use the CLI, the MCP, or the skills.
[3:50] Now, the CLI is the most potent of the
[3:52] three because you can do whatever you
[3:53] want, but it&#39;s optimized for one-off
[3:55] tasks. If you do the exact same task in
[3:58] the exact same way two, three, four
[4:00] times, it makes sense to crystallize
[4:02] this process as a skill. And then MCP
[4:05] was all the rave this time last year.
[4:07] But now, since skills came out,
[4:09] especially with their context efficiency
[4:11] when it comes to token usage, I would
[4:13] use in order CLI number one, then skills
[4:17] once you crystallize. And then if you
[4:18] feel the need then you can go to MCP and
[4:20] that&#39;s it from a conceptual standpoint.
[4:22] So let&#39;s hop into the terminal and I&#39;ll
[4:24] walk you through how easily you can
[4:26] install this with my adjusted prompt
[4:28] that I&#39;ll give you in the second link in
[4:30] the description below. So step one is
[4:32] you want to run this command npm
[4:34] install-g
[4:36] at Google Workspace CLI. Once you do
[4:38] that, you should get a confirmation that
[4:40] it&#39;s installed and ready to go and it&#39;s
[4:42] installed globally. And then this is my
[4:45] mega prompt. And I&#39;ll walk through this
[4:46] prompt with you so you can see exactly
[4:48] all the nuts and bolts in case you want
[4:50] to change it up. So the task is to set
[4:52] up the Google workspace and then we say
[4:54] perform the complete setup on my behalf
[4:57] using bash for terminal steps clawed
[4:59] with chrome browser automation for web
[5:01] steps. Now the reason why I&#39;m using
[5:03] cloud and chrome is typically if you&#39;ve
[5:05] ever set up any or something similar
[5:07] where you have to go to your Google
[5:09] project log in somehow find the APIs and
[5:12] services then find the client section
[5:14] then create the clients. If you&#39;re not
[5:16] used to that interface it&#39;s very
[5:18] overwhelming. So since we have a
[5:19] language model that&#39;s so smart I just
[5:21] offload that work onto cloud code since
[5:24] it can use my existing browser go into
[5:26] my existing Google workspace and
[5:28] navigate as needed. Now, in this case, I
[5:30] said, &quot;Do not pause for confirmations.
[5:32] Only stop if something truly blocks
[5:34] progress.&quot; This is my personal account.
[5:36] But if this is a Google Cloud account
[5:38] for your business, for a company, I
[5:40] would remove this part because you want
[5:41] to make sure that you&#39;re babysitting
[5:43] every single thing that it&#39;s
[5:44] configuring. And then I say what the
[5:45] objective is. I walk through what the
[5:47] steps are, which are to authenticate my
[5:50] Google Cloud, ensure we have fresh
[5:52] credentials that it grabs, initialize
[5:54] the GWS authentication, so it basically
[5:56] creates a brand new service. that I&#39;ll
[5:58] show you the manual way in just a
[6:00] second. Then it opens the cloud console.
[6:02] I already logged in, it knows that I&#39;m
[6:04] logging in with this specific account.
[6:06] And if it doesn&#39;t see that to switch to
[6:08] set account, then it configures the
[6:10] OOTH, the authentication, creates a
[6:13] local file, downloads it onto my
[6:15] computer, then uses it for the setup.
[6:17] And once you execute this, within a few
[6:19] minutes, it will be able to go through,
[6:21] use cloud and chrome, navigate to your
[6:23] account, and come back with a fully
[6:25] installed CLI. And you can see right
[6:27] here, right after entering that prompt,
[6:29] it took the wheel. It took care of
[6:31] everything. Everything was authenticated
[6:33] and we are now able to use it. So now
[6:35] that you have it, the natural question
[6:37] that will pop up is what can you do with
[6:38] it? So one thing you could do is
[6:40] literally ask cloud code, what can I do
[6:42] with GWS? And you want to be careful in
[6:45] case you have different skills that are
[6:46] related to the Google ecosystem. Let&#39;s
[6:48] say you&#39;ve maggyvered one like I have
[6:50] for Google calendar and Gmail, etc. You
[6:53] want to make sure that you call out GWS
[6:55] until you can decide which skills
[6:57] deserve to survive versus which ones can
[6:59] now be shelved. So in this case, it
[7:00] walks you through and it tells you
[7:02] everything that you can do. And the real
[7:04] firepower is that you can combine
[7:06] multiple actions to different services
[7:08] in one step. And if that seems
[7:10] amorphous, then just give me a second to
[7:12] show you a couple prompt examples. But
[7:14] it has a 101 capabilities. Like we&#39;ve
[7:17] said, there are some example workflows.
[7:19] So in this case, I asked it. I run an AI
[7:22] consultancy and a custom development
[7:24] shop. What do you think are the most
[7:26] pertinent skills and recipes? And then
[7:28] it goes through and it breaks down which
[7:30] ones might make sense for me to use
[7:32] daily. So in this case, email triage,
[7:35] meeting [music] prep brief, client
[7:36] follow-up automation, etc. Tier two is
[7:39] high leverage, so email to task, standup
[7:41] reports. And then we have tier three,
[7:43] person explore, basically a pseudo
[7:46] executive assistant, and that is a
[7:48] version of a recipe. And then the real
[7:50] play walks through some more detail. I
[7:53] give it my example of my website to go
[7:55] through and really give me specific
[7:57] examples of where it might be helpful.
[7:59] And you can do the exact same thing
[8:00] whether you have a business or work in a
[8:02] business or you want to use this for
[8:04] your day-to-day life. Before walking
[8:05] through the five examples that I&#39;ve
[8:06] prepped, I want to make sure that you
[8:08] know where to navigate if you want to do
[8:10] this manually. So all you have to do is
[8:11] go to your Google Cloud, pick or create
[8:14] a project, and then you want to go to
[8:16] API and services. You can enter that
[8:18] right here. It will take you there. So,
[8:20] if you write API and services, it should
[8:23] show up, especially now with their added
[8:25] AI features. So, if I can type, you&#39;ll
[8:28] see it right here. So, you want to click
[8:30] right here. You will navigate to the
[8:32] credential section and then you&#39;ll want
[8:34] to create brand new credentials. When
[8:36] you go and create them, again, you can
[8:38] have Cloud Code help you, but you want
[8:40] to create a desktop app. It&#39;ll give you
[8:42] this file JSON. You download this JSON
[8:44] and you provide it to Cloud Code. And
[8:46] beyond that, you&#39;ll be able to execute
[8:48] everything that I showed you in one
[8:49] shot. Now, on to the prompts. Now, the
[8:51] first example I&#39;ll show you is email
[8:52] prioritization. So, this prompt is very
[8:55] straightforward. Use the GWS CLI to read
[8:58] my last 20 Gmail messages. For each one,
[9:01] read the subject, sender, and first 200
[9:03] characters of the body. Then I tell it
[9:05] how to categorize them and to create a
[9:08] Google sheet. And this is the power of
[9:09] combining all the ecosystem and all the
[9:11] services in one shot. You can go from
[9:14] Google Sheet to a Google Slide to a
[9:16] Google Meet in the course of one single
[9:19] prompt. Now, naturally here for all of
[9:20] my prompts, I have this privacy rules
[9:22] section just to make sure I don&#39;t
[9:24] disclose anyone&#39;s name or email in this
[9:26] video. So, I can show you the end result
[9:28] here, which is this Google sheet. And if
[9:31] we go to said Google sheet, all of these
[9:32] names, etc. are all completely fake. So,
[9:35] looking at this, it has autocategorized
[9:37] everything by priority. It&#39;s even
[9:39] colorcoded it using Google sheet rules.
[9:42] See, here&#39;s the level of depth you can
[9:44] use now formatting because everything is
[9:46] native to the Google ecosystem. We have
[9:48] the name, the sender email, which
[9:51] obviously are fake for the course of
[9:52] this demo. And we&#39;re pretty much done in
[9:55] one shot. The next example is going from
[9:57] meetings to slide decks about said
[9:59] meetings. So the exact prompt here is
[10:02] use the CLI, pull my calendar events
[10:05] from this week, Monday to today, count
[10:07] total number of meetings, total hours in
[10:09] meetings, and which three people or
[10:11] groups I met with the most. Then look at
[10:13] my last 30 emails. Here we&#39;re now
[10:14] chaining functionality and count how
[10:17] many came from each email domain. Create
[10:19] Google Slides with a presentation called
[10:22] weekly report with four different
[10:24] slides. I tell it exactly what those
[10:25] are. Now, I built this up. I didn&#39;t like
[10:28] the very last slide because I couldn&#39;t
[10:30] hide some privacy. So, if we take a
[10:32] look, it&#39;s gonna be missing one. But you
[10:34] can see right here, it memorizes the
[10:36] meetings for the week and it memorizes
[10:38] who I met with and the top email senders
[10:40] by domain. Now, are these the most
[10:42] beautiful? No. But you can create your
[10:44] own skills on top of these skills to
[10:46] really dial in what these Google Slides
[10:48] should look like. Now, the next one, if
[10:50] you&#39;re like me and have thousands of
[10:52] emails when you want to look for that
[10:53] needle in the haystack email from a year
[10:56] and a half ago, it&#39;s always tricky what
[10:58] you should enter into the search bar.
[11:00] This helps you with that. So, in this
[11:01] case, you could say, &quot;Use a CLI. Search
[11:04] my Gmail for email threads where the
[11:06] subject contains proposal, quote,
[11:08] invoice, or contract from the last 30
[11:11] days.&quot; And you can imagine if you&#39;re
[11:12] doing your taxes, this is super helpful
[11:14] for finding those flimsy receipts that
[11:16] just disappear. And then you can say for
[11:18] each thread check whether I sent the
[11:20] last email if I did and it was more than
[11:22] 5 days ago chaining instructions draft a
[11:25] follow-up email using this template.
[11:27] Then we provide it some template and it
[11:29] goes and executes it. Now pulling on
[11:31] that thread pun intended of specificity
[11:34] and needle in the haststack. You can
[11:35] also ask very detailed questions. So in
[11:38] this case we ask the CLI to find my next
[11:41] calendar event that has at least one
[11:43] other attendee. get the [music] names
[11:45] and email addresses of all the
[11:47] attendees, search my Gmail for any
[11:49] emails I&#39;ve sent or received from those
[11:51] people in the last 14 days, which would
[11:53] be helpful for contextualization. So now
[11:55] we&#39;ve chained calendar, Gmail, and we
[11:57] chain one more service, Google Docs.
[11:59] Create a Google Doc called meeting brief
[12:02] event name with these sections. Then we
[12:04] specify all of them. And then it creates
[12:06] a beautifully formatted inmarkdown
[12:08] Google doc with everything you&#39;re asking
[12:10] for and more along with a suggested
[12:12] agenda. So, in a way, you have an entire
[12:15] executive assistant AI agent team in a
[12:18] box. And I&#39;ve saved the best use case
[12:21] for last because if your Google Drive
[12:23] looks anything like my companies or my
[12:25] personal, then this might be helpful.
[12:27] So, this prompt says, &quot;Search my Google
[12:30] Drive for files that have draft, old,
[12:32] copy, backup, V1 or V2 or V3 or in my
[12:36] case, final one, final two, final
[12:39] infinity.&quot; And for each file get the
[12:41] file name, file type, last modified
[12:44] date, file size, sharable link, and then
[12:46] create a Google sheet called drive
[12:48] audit. And this will basically map out
[12:50] everything in our Google Drive. And then
[12:52] we get a comprehensive list of all the
[12:54] file names, all the file types, their
[12:56] last modified date, their size, and we
[12:59] can ask it for the sharable link if we
[13:01] need. So hopefully this gives you a
[13:02] glimpse of the sheer firepower that you
[13:04] could have just by adding the Google
[13:06] Workspace CLI to your stack. And if you
[13:09] run some form of remote personal
[13:10] assistant like I do on my Telegram, then
[13:13] this is one huge gift for your AI
[13:15] agents. And like I said, I&#39;ll make the
[13:17] starter prompt to set this all up
[13:19] available to you in the description
[13:20] below along with these additional
[13:22] prompts as well in case they inspire
[13:24] even more use cases for you. If you love
[13:26] tips and tricks just like this to take
[13:28] you to the next level in Cloud Code,
[13:30] then you&#39;ll want to check out the first
[13:31] link in the description below for more
[13:33] content, more tutorials, and more
[13:35] skills. And for the rest of you, if you
[13:36] found this video helpful, illuminating,
[13:38] and concise, I&#39;d super appreciate if you
[13:41] leave a like and a comment on the video.
[13:43] Really helps the reach and helps the
[13:44] channel. I&#39;ll see you the next one.
