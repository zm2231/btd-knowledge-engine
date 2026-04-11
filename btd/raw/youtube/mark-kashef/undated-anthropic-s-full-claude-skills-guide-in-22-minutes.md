---
title: "Anthropic's Full Claude Skills Guide In 22 Minutes"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=TzJecWCbex0"
video_id: "TzJecWCbex0"
duration: "22:20"
transcript_method: "youtube-captions"
segment_count: 609
char_count: 23121
status: ingested
topics: []
meta_patterns: []
---

# Anthropic's Full Claude Skills Guide In 22 Minutes

**Creator**: mark-kashef | **Duration**: 22:20
**URL**: https://www.youtube.com/watch?v=TzJecWCbex0
**Transcript**: 609 segments, 23121 chars

## Transcript

A few weeks ago, the Enthropic team released a 33-page guide on the one feature that Cloud Code users either heavily underutilize or completely ignore with your skills. Now, I read the whole thing cover to cover, not just fed it to an LLM. And I'm going to walk you through every pattern, every nugget, every framework, and most importantly, every mistake that you can avoid, so you can get all the sauce from the six chapters without having to spend the time to read it yourself. But I didn't just summarize it. I diagrammed each and every concept across all six chapters. So by the end of this video, you'll never have a skill issue ever again. Let's dive in. So the six chapters that Anthropic goes through in this guide cover fundamentals, planning and design, testing and iteration, distribution and sharing, patterns and troubleshooting, and then they end off with resources and references. So a lot of our diagrams will follow the exact same flow. So if we pop into our beautiful Excel, this is the anatomy of what a skill looks like. So you have the skill.mmd file right here and it's supported by a series of scripts, references, and assets. But the most fundamental thing is having this markdown file. In this markdown file itself is a series of structures that inform Claude code if and when to use said skill. Now, if you're looking at this and you still don't really know what a skill is, the TLDDR is you can think of it as Claude's way of onboarding itself on your specific workflow. So, on its own, Claude code is already very smart. It can write, it can analyze, but it might not have your specific ways of doing things or approaching problems in its training data. So, these skills supplement its skill issues when it comes to your specific way of doing things. So you can think of a skill pretty much as an onboarding guide for cloud code for whatever it is you're trying to use. Whether it's a service, a process, a series of steps, you're going to be able to do everything you want. Now there's three different levels of magic behind the curtains of how a skill is used, observed, and executed. And most Claude Code users till this day don't know this. So at the very front, we have level one, which is called the YAML front matter. Now what the word YAML stands for doesn't really matter. just know that it denotes the first snippet of a skill file. And this really matters because it's always loaded in the system prompt whenever you have a brand new cloud code session. So just to show you more tangibly, if I show you an ongoing session that I have building something out, when I do /context right here, as of the recent updates, all the MCP tools are muted to preserve our context cuz you can see how many tools that I have and they're only invoked whenever they're needed. But when it comes to the skills, you'll see right here, all of them are actually included in context. But this is not the entire skill. This is a small tiny micro snippet of the skill. That's just enough to tell Claude Code, should I actually investigate to see what the skill is about and if we should invoke it. So level one basically just relies on the name and the description. Once we go to level two is where Cloud Code has more confidence that this skill might be a match for the particular task or project at hand. If so, we dive into level two. So, this is where it goes through all the procedural information and core instructions. And if it sees that in level two, yes, this is exactly what we need to do. That's where it goes down the tree to the linked files. So, all the Python scripts, everything associated with that skill that makes that skill tick. So, just in time means that they're only used in full when it feels like it's absolutely necessary to go down that full set of context. Now by using skills in many cases you can actually avoid having to even use MCP servers but there could be other scenarios where it makes sense to use both MCPs and skills together and that's where you can get some super power workflows where you can essentially think of MCP as providing claude code the tooling and then skills provide the recipe and procedure of executing said tooling. So, if I were to give you an analogous example to using MCPs and skills in a lot more of a tangible way, then if we were in a kitchen, you can think of MCPs being the hands that actually do the cooking, while the skills are the recipes that inform the hands exactly what ingredients to use, in what order, and in what amount. So, MCPs connect claw to different services and give the tools to have real time data access. And skills can be thought of teaching cloud code actual tangible workflows. So in many ways these Python files being invoked by the skills can be what used to be make or end workflows on their own which is why you would have seen so many YouTube videos saying is make.com dead is zap your dead is everything dead because a lot of these skills can pseudo function as these automated workflows from before now extending our kitchen analogy there are three core flavors of skills category one is document and asset creation and I use this quite a it for anything related to PDFs, PowerPoint presentations or Excel files. So this is meant to create consistent, predictable, highquality outputs. But the goal of a skill is that it evolves as your workflow evolves. And a good example of this is the skill creator skill, the meta skill. So giving Claude code the ability to know how to create a subsequent skill if you want to be able to crystallize a specific procedure or way of doing things. Category number three is heavily underutilized, which is getting the best out of MCP servers and leaving all the bloat by actually telling it how it should invoke the MCP server and which tools to use in what order. So instead of just yoloing the MCP server calls to let's say Superbase or Versel to create a database, edit a table and just have it figure it out along the way. Once you figure it out or it figures it out once you crystallize that process by doing basically a reverse metaprompt and saying you know what go through this whole process we went through crystallize exactly how you went from A to B. ignore all the noise and fix that all in a skill where you can always invoke that and know exactly what procedure you followed to get to that end point. So if we go back to our terminal example to these MCP servers instead of having it load the entire MCP server then iterate through each and every tool possible you can literally say when we invoke the superbase MCP server all I care about is for you to acquaint yourself with using create project list extension get logs etc. And this helps also scope down the usage of set MCP. So again, you can preserve that context window as much as possible. Now, a good example of this could be the sentry code review skill. And if you don't know what sentry is, it's basically a monitoring platform, especially for errors that happen in production with general applications. But you could create a sentry code review skill that always knows exactly when to go through Sentry to go through all the error logs and understand what happened and why. And you could apply this to all kinds of scenarios. The real goal here is not to just blindly call an MCP server. It's to add your expertise of exactly why you're using it and why it should focus on particular tools versus others. So this next section is probably the most important, which is where we double click on what we referred to before as the YAML front matter, which if you remember was level one of the three different levels of looking at a skill. And it's a section that Claude Code always looks at at all times. So the main two questions that this has to answer perfectly is one what does the skill do and number two when does it need to be invoked. So when we go into the details here if we zoom in you'll see this is written in what's called kebab case and kebab case is literally this lowercase dashepparated name and this should be a very descriptive one to fourword description. The core description though is where the magic lies. So this is where you explain what this is. In this case, it says manages linear project workflows including sprint planning, task creations, and status tracking. Then key extra gold nugget here is you should be able to give keywords or trigger words for the skill to be invoked. It's an added cheat sheet or hint for cloud code to really work off of. So in this case, you could say use when user mentions sprint, linear tasks, project planning, or asks to create tickets. And because cloud code is so smart, it can semantically also find something similar to create tickets. So if you said create tasks and log them, then most likely it will be the most semantically similar to this specific trigger word. But obviously if you use a trigger word, then you almost have a 100% chance of it invoking it. So beyond that, this is the part you really need to nail down because once you do that, as long as this is less than a thousand characters, everything else will be a matter of how you design the rest of the scripts and parts of the skill that matter. If you wrote helps with projects, well, pretty much every other skill could help with projects. If you say creates sophisticated multi-page documentation systems, there's no real triggers here as to exactly when this should be called. And the last one if you say implements the project entity model with hierarchal relationships. One very technical very buzzwordy and similar to a consultant from a very big end firm saying a bunch of words like a word salad but not actually saying anything. You want to make sure that your skill is very refined and to the point. So instead of helps with projects, you should say something like analyzes Figma design files and generates developer handoff documents. Use when user uploads fig files, ask for design specs or design to code handoffs. And here instead of saying create sophisticated systems, you could say manages linear project workflows including sprint planning. Use when user mentions the following. And last one implements the project identity model. We don't want that. You could say end toend customer onboarding for payflow. Use when user asks for this. So the more trigger words you have even for different parts of the skill process, the better. So the TLDDR of the TLDDR is what it does, when to use it, key trigger phrases equals perfect description. And obviously you don't have to write these yourself. You could just walk through in plain English, in slang, in whatever you speak, and ask it to create the skill itself because prompt engineering is now a fully solved problem. So if we take a look at some example files like I promised and we go to this comparison description right here. I already showed you pair one what that looks like. But if we take a look at pair two. So a bad description would say implements a sophisticated multi-paradigm data transformation pipe. And this would fail because it's not technical. No trigger words. And a good version would be cleans, validates, and transforms CSV files for analysis. use when a user says, "Clean the CSV, fix my data, or prepare the spreadsheet for analysis." Or a trigger could also be an event where if you upload a CSV, that could also be a trigger. So, that's an added nugget right there. It doesn't always have to be a textual trigger. It could be event-based as well. And I have a bunch of these in here that I'll make available to you in the second link in the description below. But this next one I want to touch on is this overt triggering. Now I have a bunch of other examples but I wanted to zero in on this one for a particular reason. You can also overt trigger based on events. So if you say processes documents and analyzes data for business use, this could be triggered for all kinds of different use cases. So you want to be as precise as possible. You would change this to say advanced statistical analysis for CSV data sets performs regression, clustering, hypothesis testing. It's a lot more specific on exactly what processing documents means because at some point your skill is useless. You're just basically relying on cloud code to interpret what is the best thing to do on that situation since you're not giving it any form of cheat sheet or guide or onboarding on how to do it itself. And if we take a look at an MCP-based example, a bad version of this would say works with Sentry to look at errors. Instead, you'd want to be way more specific. So, automatically analyzes and fixes detected bugs in GitHub pull requests using Sentry's error monitoring and then use when a user says the following. And now you have something even more useful. Now, you can even layer on which tools and subtools it should invoke from said MCP to keep it as focused as possible. Now, this next section is the most complex and intricate where anthropic walks through the five different design patterns where you can design a skill to execute in a certain way. So pattern one is the sequential workflow which is the most linear where you go from step one to step four in a very predictable manner. If we take a hypothetical use case of authentication, you would first go through and create an account, then set up payment, then create the subscription, then get some form of welcome email, and the dependency lies on actually getting the customer ID and information from step one. So this is pretty straightforward. If any step fails, then you roll back to prior steps. Number two though is where we get more complex where we get to multimcp coordination. So you can use this when you have workflows that span multiple services. So maybe in phase one you have the Figma MCP where you do the designing and then you upload it to the drive MCP. You create a project folder. Then you use the linear MCP to create tasks for your developers or yourself and then you hand it off to the Slack MCP for a full summary with a series of links. So this is a series of different MCPs orchestrated in a particular order and in this case you can't move from phase one to phase 2 until you have all the prerequisites. Now pattern three is iterative refinement and this is probably the most used one in my personal ecosystem and I use this even for thumbnail generation where I'll generate an initial thumbnail using an excellently what should be located on which part of the thumbnail. Then I'll go through and generate five 10 different versions using Nano Banana. Then I'll spin up a few agents to take a look at and audit it and roast the thumbnail. Then refine it and come back with the final five of the 10 15 generated through the whole process. So this part makes a lot of sense when you need to go through a couple different evolutions until you get to the final version of whatever it is you're trying to generate. So pattern 4 looks very similar to an NN workflow where you could have the same input which is an incoming file. Imagine you use the world of NADN and you have a form submission and you upload a file. If it's a PDF it's treated one way. If it's an Excel file, it's treated another way. You can design a skill in the exact same format where if you upload a file and then you check the file type and size and it realizes that it's a code file, maybe it it uses and invokes the GitHub MCP. Whereas if it's a collaborative doc like a docx or something similar, it uses the notion or docs MCP. So now you're orchestrating a couple different layers. You're orchestrating MCPs and you're orchestrating which different path the same skill goes down depending on the input. And the last pattern is really for enterprise where it's domain specific intelligence embedded into a skill. So imagine all the understanding of the code bases, the design of infrastructure, everything that makes a company tick on the IT side of things. So this is where you'd have embedded rules. You'd have a sanctions list. You'd have a jurisdiction verification. You'd have risk level assessments based on exactly what's happening. Then you'd have a series of decision logic. So all of this would be custom. If you're a business owner that runs on, let's say, AWS and you have a series of microservices and you have databases, then this skill would tell it specifically how you use those microservices, which ones are editable and how you can edit those services in a way that lines up to exactly what your normal procedure would be. So, whatever the SOP would be for a new hire would be the same SOP for this pattern. So, when it comes to good versus bad instructions, I have a few different examples. The one I'll show you right now is this bad one, which is very handwavy. That says, "Help the user with their data. Validate it and make sure everything looks good. That's awful. Process the data appropriately and handle any issues that come up. Make sure to check for errors and fix them if possible." Now, it's very clear that this is unbelievably vague. And the way you'd make this a lot more actionable is you literally structure it in steps. So many skills that I've seen and ones that I've designed for myself and my agency and our clients all have this markdown format where you have step one that says inspect the data. Then you break down exactly what does that look like to inspect the data. Step two is you identify the issues and then maybe you can get the help of AI to create some form of columnwise table that goes through a decision framework or some form of rubric. Then step three could be apply the fixes. And then step four could be export the clean data where you tell it exactly what your expectations are. So some name here, some dynamically made name or cleaned.csv. And this is where you have the balance of being explicit while leaving slight room for a dynamic nature of the task at hand. So now you've built your skill. How do you go about testing it? Well, this section covers the three different ways that you can do so. Number one is what's called a triggering test where you load a brand new terminal session keyword new terminal session. You don't want to use an existing one because it could be muddied by the context and accidentally invoke the skill just because it knows that it should. And just like Goldilocks would taste a very hot soup and a very cold soup and find the sweet spot for the perfectly testing room temperature soup, you could have the exact same scenario here where the skill could be undertriggering or overt triggering and ideally you have a sweet spot where you have a very high hit rate that invokes a skill when it makes sense to. Now the second test you can run is the functional test. So let's say it triggers it after it goes through everything. Do you actually get the output you're expecting in the format you're expecting deterministically every single time? And a good use case would be to try to battle test this one, four or five times, then try it with maybe an agent team or sub agents and see does the behavior change in different formats. If it doesn't, great. If it does, then you can tell cloud code to iterate and change the skill as needed until you get the behavior you're expecting. And this last test is likely the one that many will ignore where sometimes you get so committed to using a skill that you overlook the fact that based on this testing of one and two, what if by at the end of all of that, it would have been easier to not have the skill at all and the skill actually adds more error than it actually helps with. So it's important to have some form of benchmarking to know is this skill valuable? If so, it should exist. If not, maybe we created some form of automated workflow or a cron job or a Python file that does this entire process in a very linear way. But assuming that the skill is helpful, then you want to make sure that the skill is structured in the right format. So if we take a look at the bad example here, right here we have the name of the skill and then we have the skill.md directly. No references, no scripts, nothing. A good version is something like this where you have this CSV data pipeline. Then you have this references that has some form of markdown file that refers to the different column types in the CSV. Then you have the scripts folder that has the Python files that are invoked by the skill to execute whatever it is. And then in the main folder is this skillmd file. So these become the dependencies right here. And the skill MD is right there front and center. Once you've solidified skills, my advice to you is to not make a skill global until you fully battle tested it. And battle testing doesn't mean a couple of minutes. It means run it for a month maybe. And once it's good enough, depending on where you're deploying this, either personally or as an organization, that's where it makes sense to graduate to becoming a global skill, something that you maybe commit to a repo to be ingested and used elsewhere. something you can use not only in cloud but also claude co-work on the front end or the cloud API with the claude agent SDK. Now to bring everything together from this journey of creating a skill you have six different chapters that we covered in the course of this video. Number one is identifying the use cases. So having two to three concrete workflows that you create and synthesize and crystallize as a skill. Station two is planning and designing. So creating the success criteria, the PRDS, choosing which categories matter, which MCPS if applicable matter and planning the folder structure and then station three is the most important part which is the build section where you want to perfect that YAML front matter and crafting the perfect description with the right trigger words. Then station four to five are testing, iterating, then distributing to make sure it actually works well in production and then monitoring and evolving them over time. Usually a skill will have to evolve over time as your workflows or business or whatever it is changes as well. So you can think of skills as your ever living document where you don't want to overbloat too many skills. You want to be very selective on what skills matter and how well you can refine a single skill before you go out and build even more. And that pretty much synthesizes the entire 33page document in a series of diagrams. So hopefully this gives you the bite-sized learnings to execute everything and upskill your skill creation to the next level. Now I'll make all the examples of the good and the bad when it comes to instructions, descriptions, errors, everything available to you in the second link in the description below. And if you want to take your general Claude code skill set to brand new heights, then you want to check out the first link in the description below because we have a brand new Claude zero to hero course. And for the rest of you, if you found this video helpful, please leave a like and a comment on the video. It really helps the video and helps the channel.

## Timed Segments

[0:00] A few weeks ago, the Enthropic team
[0:01] released a 33-page guide on the one
[0:04] feature that Cloud Code users either
[0:06] heavily underutilize or completely
[0:08] ignore with your skills. Now, I read the
[0:11] whole thing cover to cover, not just fed
[0:12] it to an LLM. And I&#39;m going to walk you
[0:14] through every pattern, every nugget,
[0:17] every framework, and most importantly,
[0:18] every mistake that you can avoid, so you
[0:20] can get all the sauce from the six
[0:22] chapters without having to spend the
[0:24] time to read it yourself. But I didn&#39;t
[0:26] just summarize it. I diagrammed each and
[0:28] every concept across all six chapters.
[0:31] So by the end of this video, you&#39;ll
[0:33] never have a skill issue ever again.
[0:35] Let&#39;s dive in. So the six chapters that
[0:37] Anthropic goes through in this guide
[0:39] cover fundamentals, planning and design,
[0:42] testing and iteration, distribution and
[0:44] sharing, patterns and troubleshooting,
[0:47] and then they end off with resources and
[0:49] references. So a lot of our diagrams
[0:51] will follow the exact same flow. So if
[0:53] we pop into our beautiful Excel, this is
[0:57] the anatomy of what a skill looks like.
[1:00] So you have the skill.mmd file right
[1:02] here and it&#39;s supported by a series of
[1:04] scripts, references, and assets. But the
[1:07] most fundamental thing is having this
[1:09] markdown file. In this markdown file
[1:11] itself is a series of structures that
[1:13] inform Claude code if and when to use
[1:16] said skill. Now, if you&#39;re looking at
[1:18] this and you still don&#39;t really know
[1:19] what a skill is, the TLDDR is you can
[1:21] think of it as Claude&#39;s way of
[1:23] onboarding itself on your specific
[1:26] workflow. So, on its own, Claude code is
[1:28] already very smart. It can write, it can
[1:30] analyze, but it might not have your
[1:32] specific ways of doing things or
[1:34] approaching problems in its training
[1:36] data. So, these skills supplement its
[1:39] skill issues when it comes to your
[1:41] specific way of doing things. So you can
[1:43] think of a skill pretty much as an
[1:45] onboarding guide for cloud code for
[1:47] whatever it is you&#39;re trying to use.
[1:49] Whether it&#39;s a service, a process, a
[1:52] series of steps, you&#39;re going to be able
[1:53] to do everything you want. Now there&#39;s
[1:55] three different levels of magic behind
[1:57] the curtains of how a skill is used,
[2:00] observed, and executed. And most Claude
[2:02] Code users till this day don&#39;t know
[2:04] this. So at the very front, we have
[2:06] level one, which is called the YAML
[2:09] front matter. Now what the word YAML
[2:11] stands for doesn&#39;t really matter. just
[2:13] know that it denotes the first snippet
[2:15] of a skill file. And this really matters
[2:17] because it&#39;s always loaded in the system
[2:20] prompt whenever you have a brand new
[2:22] cloud code session. So just to show you
[2:24] more tangibly, if I show you an ongoing
[2:26] session that I have building something
[2:28] out, when I do /context right here, as
[2:31] of the recent updates, all the MCP tools
[2:34] are muted to preserve our context cuz
[2:36] you can see how many tools that I have
[2:39] and they&#39;re only invoked whenever
[2:40] they&#39;re needed. But when it comes to the
[2:42] skills, you&#39;ll see right here, all of
[2:43] them are actually included in context.
[2:46] But this is not the entire skill. This
[2:48] is a small tiny micro snippet of the
[2:51] skill. That&#39;s just enough to tell Claude
[2:53] Code, should I actually investigate to
[2:55] see what the skill is about and if we
[2:57] should invoke it. So level one basically
[2:59] just relies on the name and the
[3:01] description. Once we go to level two is
[3:03] where Cloud Code has more confidence
[3:05] that this skill might be a match for the
[3:08] particular task or project at hand. If
[3:10] so, we dive into level two. So, this is
[3:13] where it goes through all the procedural
[3:15] information and core instructions. And
[3:17] if it sees that in level two, yes, this
[3:19] is exactly what we need to do. That&#39;s
[3:21] where it goes down the tree to the
[3:23] linked files. So, all the Python
[3:26] scripts, everything associated with that
[3:28] skill that makes that skill tick. So,
[3:30] just in time means that they&#39;re only
[3:32] used in full when it feels like it&#39;s
[3:34] absolutely necessary to go down that
[3:36] full set of context. Now by using skills
[3:39] in many cases you can actually avoid
[3:41] having to even use MCP servers but there
[3:43] could be other scenarios where it makes
[3:45] sense to use both MCPs and skills
[3:48] together and that&#39;s where you can get
[3:49] some super power workflows where you can
[3:52] essentially think of MCP as providing
[3:54] claude code the tooling and then skills
[3:57] provide the recipe and procedure of
[3:59] executing said tooling. So, if I were to
[4:01] give you an analogous example to using
[4:04] MCPs and skills in a lot more of a
[4:06] tangible way, then if we were in a
[4:07] kitchen, you can think of MCPs being the
[4:10] hands that actually do the cooking,
[4:12] while the skills are the recipes that
[4:14] inform the hands exactly what
[4:16] ingredients to use, in what order, and
[4:18] in what amount. So, MCPs connect claw to
[4:21] different services and give the tools to
[4:23] have real time data access. And skills
[4:26] can be thought of teaching cloud code
[4:28] actual tangible workflows. So in many
[4:30] ways these Python files being invoked by
[4:33] the skills can be what used to be make
[4:36] or end workflows on their own which is
[4:38] why you would have seen so many YouTube
[4:40] videos saying is make.com dead is zap
[4:43] your dead is everything dead because a
[4:45] lot of these skills can pseudo function
[4:48] as these automated workflows from before
[4:50] now extending our kitchen analogy there
[4:53] are three core flavors of skills
[4:55] category one is document and asset
[4:57] creation and I use this quite a it for
[5:00] anything related to PDFs, PowerPoint
[5:02] presentations or Excel files. So this is
[5:04] meant to create consistent, predictable,
[5:07] highquality outputs. But the goal of a
[5:10] skill is that it evolves as your
[5:11] workflow evolves. And a good example of
[5:14] this is the skill creator skill, the
[5:16] meta skill. So giving Claude code the
[5:18] ability to know how to create a
[5:21] subsequent skill if you want to be able
[5:22] to crystallize a specific procedure or
[5:25] way of doing things. Category number
[5:27] three is heavily underutilized, which is
[5:30] getting the best out of MCP servers and
[5:32] leaving all the bloat by actually
[5:34] telling it how it should invoke the MCP
[5:37] server and which tools to use in what
[5:39] order. So instead of just yoloing the
[5:41] MCP server calls to let&#39;s say Superbase
[5:44] or Versel to create a database, edit a
[5:47] table and just have it figure it out
[5:49] along the way. Once you figure it out or
[5:51] it figures it out once you crystallize
[5:54] that process by doing basically a
[5:56] reverse metaprompt and saying you know
[5:58] what go through this whole process we
[6:00] went through crystallize exactly how you
[6:02] went from A to B. ignore all the noise
[6:05] and fix that all in a skill where you
[6:07] can always invoke that and know exactly
[6:09] what procedure you followed to get to
[6:11] that end point. So if we go back to our
[6:13] terminal example to these MCP servers
[6:16] instead of having it load the entire MCP
[6:18] server then iterate through each and
[6:20] every tool possible you can literally
[6:22] say when we invoke the superbase MCP
[6:25] server all I care about is for you to
[6:26] acquaint yourself with using create
[6:28] project list extension get logs etc. And
[6:33] this helps also scope down the usage of
[6:36] set MCP. So again, you can preserve that
[6:38] context window as much as possible. Now,
[6:40] a good example of this could be the
[6:42] sentry code review skill. And if you
[6:44] don&#39;t know what sentry is, it&#39;s
[6:45] basically a monitoring platform,
[6:47] especially for errors that happen in
[6:49] production with general applications.
[6:51] But you could create a sentry code
[6:52] review skill that always knows exactly
[6:55] when to go through Sentry to go through
[6:57] all the error logs and understand what
[6:59] happened and why. And you could apply
[7:01] this to all kinds of scenarios. The real
[7:03] goal here is not to just blindly call an
[7:05] MCP server. It&#39;s to add your expertise
[7:08] of exactly why you&#39;re using it and why
[7:10] it should focus on particular tools
[7:12] versus others. So this next section is
[7:14] probably the most important, which is
[7:16] where we double click on what we
[7:17] referred to before as the YAML front
[7:20] matter, which if you remember was level
[7:22] one of the three different levels of
[7:24] looking at a skill. And it&#39;s a section
[7:26] that Claude Code always looks at at all
[7:28] times. So the main two questions that
[7:31] this has to answer perfectly is one what
[7:34] does the skill do and number two when
[7:36] does it need to be invoked. So when we
[7:38] go into the details here if we zoom in
[7:41] you&#39;ll see this is written in what&#39;s
[7:42] called kebab case and kebab case is
[7:45] literally this lowercase dashepparated
[7:48] name and this should be a very
[7:49] descriptive one to fourword description.
[7:52] The core description though is where the
[7:54] magic lies. So this is where you explain
[7:56] what this is. In this case, it says
[7:58] manages linear project workflows
[8:00] including sprint planning, task
[8:02] creations, and status tracking. Then key
[8:04] extra gold nugget here is you should be
[8:07] able to give keywords or trigger words
[8:10] for the skill to be invoked. It&#39;s an
[8:12] added cheat sheet or hint for cloud code
[8:14] to really work off of. So in this case,
[8:16] you could say use when user mentions
[8:19] sprint, linear tasks, project planning,
[8:22] or asks to create tickets. And because
[8:24] cloud code is so smart, it can
[8:26] semantically also find something similar
[8:29] to create tickets. So if you said create
[8:32] tasks and log them, then most likely it
[8:34] will be the most semantically similar to
[8:36] this specific trigger word. But
[8:38] obviously if you use a trigger word,
[8:39] then you almost have a 100% chance of it
[8:42] invoking it. So beyond that, this is the
[8:44] part you really need to nail down
[8:46] because once you do that, as long as
[8:48] this is less than a thousand characters,
[8:50] everything else will be a matter of how
[8:52] you design the rest of the scripts and
[8:54] parts of the skill that matter. If you
[8:56] wrote helps with projects, well, pretty
[8:58] much every other skill could help with
[9:00] projects. If you say creates
[9:02] sophisticated multi-page documentation
[9:05] systems, there&#39;s no real triggers here
[9:07] as to exactly when this should be
[9:09] called. And the last one if you say
[9:11] implements the project entity model with
[9:14] hierarchal relationships. One very
[9:16] technical very buzzwordy and similar to
[9:19] a consultant from a very big end firm
[9:22] saying a bunch of words like a word
[9:24] salad but not actually saying anything.
[9:26] You want to make sure that your skill is
[9:27] very refined and to the point. So
[9:29] instead of helps with projects, you
[9:31] should say something like analyzes Figma
[9:34] design files and generates developer
[9:36] handoff documents. Use when user uploads
[9:40] fig files, ask for design specs or
[9:42] design to code handoffs. And here
[9:44] instead of saying create sophisticated
[9:46] systems, you could say manages linear
[9:49] project workflows including sprint
[9:51] planning. Use when user mentions the
[9:53] following. And last one implements the
[9:55] project identity model. We don&#39;t want
[9:57] that. You could say end toend customer
[9:59] onboarding for payflow. Use when user
[10:02] asks for this. So the more trigger words
[10:04] you have even for different parts of the
[10:07] skill process, the better. So the TLDDR
[10:10] of the TLDDR is what it does, when to
[10:13] use it, key trigger phrases equals
[10:15] perfect description. And obviously you
[10:17] don&#39;t have to write these yourself. You
[10:19] could just walk through in plain
[10:20] English, in slang, in whatever you
[10:22] speak, and ask it to create the skill
[10:24] itself because prompt engineering is now
[10:27] a fully solved problem. So if we take a
[10:29] look at some example files like I
[10:31] promised and we go to this comparison
[10:33] description right here. I already showed
[10:36] you pair one what that looks like. But
[10:38] if we take a look at pair two. So a bad
[10:40] description would say implements a
[10:42] sophisticated multi-paradigm data
[10:45] transformation pipe. And this would fail
[10:47] because it&#39;s not technical. No trigger
[10:49] words. And a good version would be
[10:51] cleans, validates, and transforms CSV
[10:54] files for analysis. use when a user
[10:56] says, &quot;Clean the CSV, fix my data, or
[10:59] prepare the spreadsheet for analysis.&quot;
[11:01] Or a trigger could also be an event
[11:04] where if you upload a CSV, that could
[11:07] also be a trigger. So, that&#39;s an added
[11:08] nugget right there. It doesn&#39;t always
[11:10] have to be a textual trigger. It could
[11:12] be event-based as well. And I have a
[11:14] bunch of these in here that I&#39;ll make
[11:16] available to you in the second link in
[11:17] the description below. But this next one
[11:19] I want to touch on is this overt
[11:20] triggering. Now I have a bunch of other
[11:22] examples but I wanted to zero in on this
[11:24] one for a particular reason. You can
[11:26] also overt trigger based on events. So
[11:29] if you say processes documents and
[11:31] analyzes data for business use, this
[11:33] could be triggered for all kinds of
[11:35] different use cases. So you want to be
[11:37] as precise as possible. You would change
[11:39] this to say advanced statistical
[11:40] analysis for CSV data sets performs
[11:43] regression, clustering, hypothesis
[11:45] testing. It&#39;s a lot more specific on
[11:47] exactly what processing documents means
[11:49] because at some point your skill is
[11:52] useless. You&#39;re just basically relying
[11:53] on cloud code to interpret what is the
[11:56] best thing to do on that situation since
[11:58] you&#39;re not giving it any form of cheat
[11:59] sheet or guide or onboarding on how to
[12:02] do it itself. And if we take a look at
[12:04] an MCP-based example, a bad version of
[12:07] this would say works with Sentry to look
[12:09] at errors. Instead, you&#39;d want to be way
[12:12] more specific. So, automatically
[12:14] analyzes and fixes detected bugs in
[12:16] GitHub pull requests using Sentry&#39;s
[12:19] error monitoring and then use when a
[12:21] user says the following. And now you
[12:23] have something even more useful. Now,
[12:25] you can even layer on which tools and
[12:27] subtools it should invoke from said MCP
[12:30] to keep it as focused as possible. Now,
[12:32] this next section is the most complex
[12:34] and intricate where anthropic walks
[12:36] through the five different design
[12:37] patterns where you can design a skill to
[12:40] execute in a certain way. So pattern one
[12:42] is the sequential workflow which is the
[12:44] most linear where you go from step one
[12:46] to step four in a very predictable
[12:48] manner. If we take a hypothetical use
[12:50] case of authentication, you would first
[12:52] go through and create an account, then
[12:55] set up payment, then create the
[12:56] subscription, then get some form of
[12:58] welcome email, and the dependency lies
[13:01] on actually getting the customer ID and
[13:03] information from step one. So this is
[13:05] pretty straightforward. If any step
[13:07] fails, then you roll back to prior
[13:09] steps. Number two though is where we get
[13:11] more complex where we get to multimcp
[13:14] coordination. So you can use this when
[13:16] you have workflows that span multiple
[13:19] services. So maybe in phase one you have
[13:22] the Figma MCP where you do the designing
[13:25] and then you upload it to the drive MCP.
[13:27] You create a project folder. Then you
[13:29] use the linear MCP to create tasks for
[13:31] your developers or yourself and then you
[13:33] hand it off to the Slack MCP for a full
[13:36] summary with a series of links. So this
[13:38] is a series of different MCPs
[13:40] orchestrated in a particular order and
[13:43] in this case you can&#39;t move from phase
[13:45] one to phase 2 until you have all the
[13:47] prerequisites. Now pattern three is
[13:49] iterative refinement and this is
[13:51] probably the most used one in my
[13:53] personal ecosystem and I use this even
[13:56] for thumbnail generation where I&#39;ll
[13:58] generate an initial thumbnail using an
[14:00] excellently
[14:02] what should be located on which part of
[14:04] the thumbnail. Then I&#39;ll go through and
[14:06] generate five 10 different versions
[14:08] using Nano Banana. Then I&#39;ll spin up a
[14:10] few agents to take a look at and audit
[14:12] it and roast the thumbnail. Then refine
[14:15] it and come back with the final five of
[14:17] the 10 15 generated through the whole
[14:19] process. So this part makes a lot of
[14:21] sense when you need to go through a
[14:23] couple different evolutions until you
[14:25] get to the final version of whatever it
[14:27] is you&#39;re trying to generate. So pattern
[14:29] 4 looks very similar to an NN workflow
[14:32] where you could have the same input
[14:34] which is an incoming file. Imagine you
[14:36] use the world of NADN and you have a
[14:38] form submission and you upload a file.
[14:40] If it&#39;s a PDF it&#39;s treated one way. If
[14:43] it&#39;s an Excel file, it&#39;s treated another
[14:45] way. You can design a skill in the exact
[14:47] same format where if you upload a file
[14:50] and then you check the file type and
[14:52] size and it realizes that it&#39;s a code
[14:54] file, maybe it it uses and invokes the
[14:56] GitHub MCP. Whereas if it&#39;s a
[14:59] collaborative doc like a docx or
[15:01] something similar, it uses the notion or
[15:04] docs MCP. So now you&#39;re orchestrating a
[15:06] couple different layers. You&#39;re
[15:08] orchestrating MCPs and you&#39;re
[15:09] orchestrating which different path the
[15:12] same skill goes down depending on the
[15:15] input. And the last pattern is really
[15:17] for enterprise where it&#39;s domain
[15:19] specific intelligence embedded into a
[15:22] skill. So imagine all the understanding
[15:24] of the code bases, the design of
[15:26] infrastructure, everything that makes a
[15:28] company tick on the IT side of things.
[15:31] So this is where you&#39;d have embedded
[15:33] rules. You&#39;d have a sanctions list.
[15:35] You&#39;d have a jurisdiction verification.
[15:37] You&#39;d have risk level assessments based
[15:39] on exactly what&#39;s happening. Then you&#39;d
[15:41] have a series of decision logic. So all
[15:44] of this would be custom. If you&#39;re a
[15:46] business owner that runs on, let&#39;s say,
[15:48] AWS and you have a series of
[15:50] microservices and you have databases,
[15:52] then this skill would tell it
[15:55] specifically how you use those
[15:56] microservices, which ones are editable
[15:59] and how you can edit those services in a
[16:01] way that lines up to exactly what your
[16:03] normal procedure would be. So, whatever
[16:05] the SOP would be for a new hire would be
[16:07] the same SOP for this pattern. So, when
[16:10] it comes to good versus bad
[16:12] instructions, I have a few different
[16:13] examples. The one I&#39;ll show you right
[16:15] now is this bad one, which is very
[16:17] handwavy. That says, &quot;Help the user with
[16:19] their data. Validate it and make sure
[16:22] everything looks good. That&#39;s awful.
[16:24] Process the data appropriately and
[16:25] handle any issues that come up. Make
[16:27] sure to check for errors and fix them if
[16:29] possible.&quot; Now, it&#39;s very clear that
[16:30] this is unbelievably vague. And the way
[16:32] you&#39;d make this a lot more actionable is
[16:34] you literally structure it in steps. So
[16:37] many skills that I&#39;ve seen and ones that
[16:38] I&#39;ve designed for myself and my agency
[16:41] and our clients all have this markdown
[16:43] format where you have step one that says
[16:46] inspect the data. Then you break down
[16:47] exactly what does that look like to
[16:49] inspect the data. Step two is you
[16:51] identify the issues and then maybe you
[16:53] can get the help of AI to create some
[16:55] form of columnwise table that goes
[16:58] through a decision framework or some
[17:00] form of rubric. Then step three could be
[17:02] apply the fixes. And then step four
[17:04] could be export the clean data where you
[17:06] tell it exactly what your expectations
[17:08] are. So some name here, some dynamically
[17:10] made name or cleaned.csv.
[17:13] And this is where you have the balance
[17:15] of being explicit while leaving slight
[17:18] room for a dynamic nature of the task at
[17:20] hand. So now you&#39;ve built your skill.
[17:22] How do you go about testing it? Well,
[17:25] this section covers the three different
[17:26] ways that you can do so. Number one is
[17:29] what&#39;s called a triggering test where
[17:31] you load a brand new terminal session
[17:33] keyword new terminal session. You don&#39;t
[17:36] want to use an existing one because it
[17:37] could be muddied by the context and
[17:39] accidentally invoke the skill just
[17:42] because it knows that it should. And
[17:44] just like Goldilocks would taste a very
[17:46] hot soup and a very cold soup and find
[17:48] the sweet spot for the perfectly testing
[17:51] room temperature soup, you could have
[17:53] the exact same scenario here where the
[17:55] skill could be undertriggering or overt
[17:57] triggering and ideally you have a sweet
[17:59] spot where you have a very high hit rate
[18:02] that invokes a skill when it makes sense
[18:04] to. Now the second test you can run is
[18:06] the functional test. So let&#39;s say it
[18:08] triggers it after it goes through
[18:10] everything. Do you actually get the
[18:12] output you&#39;re expecting in the format
[18:14] you&#39;re expecting deterministically every
[18:17] single time? And a good use case would
[18:19] be to try to battle test this one, four
[18:21] or five times, then try it with maybe an
[18:24] agent team or sub agents and see does
[18:26] the behavior change in different
[18:28] formats. If it doesn&#39;t, great. If it
[18:30] does, then you can tell cloud code to
[18:33] iterate and change the skill as needed
[18:35] until you get the behavior you&#39;re
[18:36] expecting. And this last test is likely
[18:39] the one that many will ignore where
[18:41] sometimes you get so committed to using
[18:43] a skill that you overlook the fact that
[18:45] based on this testing of one and two,
[18:48] what if by at the end of all of that, it
[18:50] would have been easier to not have the
[18:52] skill at all and the skill actually adds
[18:54] more error than it actually helps with.
[18:56] So it&#39;s important to have some form of
[18:58] benchmarking to know is this skill
[19:00] valuable? If so, it should exist. If
[19:03] not, maybe we created some form of
[19:05] automated workflow or a cron job or a
[19:08] Python file that does this entire
[19:10] process in a very linear way. But
[19:12] assuming that the skill is helpful, then
[19:14] you want to make sure that the skill is
[19:15] structured in the right format. So if we
[19:17] take a look at the bad example here,
[19:20] right here we have the name of the skill
[19:22] and then we have the skill.md directly.
[19:24] No references, no scripts, nothing. A
[19:28] good version is something like this
[19:30] where you have this CSV data pipeline.
[19:32] Then you have this references that has
[19:34] some form of markdown file that refers
[19:36] to the different column types in the
[19:38] CSV. Then you have the scripts folder
[19:40] that has the Python files that are
[19:42] invoked by the skill to execute whatever
[19:45] it is. And then in the main folder is
[19:48] this skillmd file. So these become the
[19:50] dependencies right here. And the skill
[19:53] MD is right there front and center. Once
[19:55] you&#39;ve solidified skills, my advice to
[19:57] you is to not make a skill global until
[20:00] you fully battle tested it. And battle
[20:02] testing doesn&#39;t mean a couple of
[20:04] minutes. It means run it for a month
[20:06] maybe. And once it&#39;s good enough,
[20:08] depending on where you&#39;re deploying
[20:09] this, either personally or as an
[20:11] organization, that&#39;s where it makes
[20:13] sense to graduate to becoming a global
[20:16] skill, something that you maybe commit
[20:17] to a repo to be ingested and used
[20:20] elsewhere. something you can use not
[20:22] only in cloud but also claude co-work on
[20:25] the front end or the cloud API with the
[20:28] claude agent SDK. Now to bring
[20:30] everything together from this journey of
[20:32] creating a skill you have six different
[20:34] chapters that we covered in the course
[20:36] of this video. Number one is identifying
[20:38] the use cases. So having two to three
[20:41] concrete workflows that you create and
[20:43] synthesize and crystallize as a skill.
[20:46] Station two is planning and designing.
[20:48] So creating the success criteria, the
[20:50] PRDS, choosing which categories matter,
[20:53] which MCPS if applicable matter and
[20:56] planning the folder structure and then
[20:58] station three is the most important part
[21:00] which is the build section where you
[21:01] want to perfect that YAML front matter
[21:04] and crafting the perfect description
[21:06] with the right trigger words. Then
[21:08] station four to five are testing,
[21:11] iterating, then distributing to make
[21:13] sure it actually works well in
[21:14] production and then monitoring and
[21:16] evolving them over time. Usually a skill
[21:19] will have to evolve over time as your
[21:21] workflows or business or whatever it is
[21:23] changes as well. So you can think of
[21:25] skills as your ever living document
[21:27] where you don&#39;t want to overbloat too
[21:29] many skills. You want to be very
[21:31] selective on what skills matter and how
[21:33] well you can refine a single skill
[21:35] before you go out and build even more.
[21:37] And that pretty much synthesizes the
[21:38] entire 33page document in a series of
[21:41] diagrams. So hopefully this gives you
[21:43] the bite-sized learnings to execute
[21:46] everything and upskill your skill
[21:49] creation to the next level. Now I&#39;ll
[21:51] make all the examples of the good and
[21:53] the bad when it comes to instructions,
[21:56] descriptions, errors, everything
[21:58] available to you in the second link in
[22:00] the description below. And if you want
[22:01] to take your general Claude code skill
[22:04] set to brand new heights, then you want
[22:06] to check out the first link in the
[22:07] description below because we have a
[22:09] brand new Claude zero to hero course.
[22:11] And for the rest of you, if you found
[22:12] this video helpful, please leave a like
[22:14] and a comment on the video. It really
[22:16] helps the video and helps the channel.
