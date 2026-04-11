---
title: "Anthropic Just Gave Claude 11 New Superpowers"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=eT_6uaHNlk8"
video_id: "eT_6uaHNlk8"
duration: "14:47"
transcript_method: "youtube-captions"
segment_count: 431
char_count: 16424
status: ingested
topics: []
meta_patterns: []
---

# Anthropic Just Gave Claude 11 New Superpowers

**Creator**: mark-kashef | **Duration**: 14:47
**URL**: https://www.youtube.com/watch?v=eT_6uaHNlk8
**Transcript**: 431 segments, 16424 chars

## Transcript

So, a few days ago, the Cloud Code team released a list of brand new plugins for Claude Co-Work. So, in this video, I'm going to walk you through what plugins are in plain English, how you can use them, and how you can even use them in things like Cloud Code. Now, when you log into Claude Co-work on your desktop, you'll see that there's a brand new section right here called plugins. And when you click on plugins, you'll be able to add your own plugins or browse existing ones. So this is an example of one that comes out of the box from the anthropic team called the product management plugin. In the TLDDR is you can think of plugins as a care package. A care package of skills, commands, MCPs, everything that you would need for a specific domain to Excel without having to write your own system prompts from the get- go. So specifically, you can see here this comes with some slash commands like competitive brief, metrics review, competitive analysis for skills, and you can click on plus right here. Click on browse plugins. Then you can add whatever you want. One very interesting thing is they've aligned themselves even more with the corporate world by making essentially one plug-in per function of a standard company. So whether it's bio research for life sciences customer support for CRM systems for anything related to customers data for data analysts enterprise search to essentially create a hybridized search where when you ask one question it will search things like slack email notes all through the enterprise network you have finance for things like accounting you have legal so lawyers should probably keep sweating if they're already sweating the geni revolution and then you have marketing and productivity activity as well and sales to boot. And the best thing is you can add your own skills. And when it comes to actually invoking them, once you have one installed, you could just use a slash in co-work and then you can go down to your plugins right here and you'll be able to see exactly which slash command you want to invoke. So if we wanted to do the competitive brief, as soon as we type that, this will execute that specific function. So now that you have a little preview of how that works, let me break down what plugins are and a quick TLDDR of each and every plug-in, where you can use it and where it works best. So plugins, like I said, you can think of them as a command center. So you have skills, which are domain knowledge that Claude can conveniently draw on when the context basically comes up naturally. So if you say something where claw detects, you know what, I should tap into XYZ skill, it will use that skill and any associated functions just [music] in time, meaning you're not bloating the context of your conversation without having to do so like you would with many MCP servers. It only uses it when it has to. Commands are very different. So if you saw right before I showed you a slash command, a slash command invokes a specific function. So it's like forcing Claude to use a pseudo skill exactly when you want it. So that's where commands are helpful. And then when it comes to connectors, you would have seen those before. Those are natural integrations. You can ask [music] it to connect to MCP servers to anything you want. And the idea is instead of just importing a singular skill, you can import a plugin where it brings everything at the same time. And to give this some more color, this is the structure of a plugin. And even if you're nontechnical, you should be able to follow along or at least I'll do my best to help you do so. So you have something a with a plug-in name. Then you have the actual plugin that comes with a JSON file. This JSON file has things like the manifest, the name, the version, the author, and then if you have MCP servers, they'll be specified right here in the MCP JSON. When it comes to those commands, like I showed you, like the competitive brief, all of those slash commands exist here where each slash command has its own markdown file that walks through what happens when you specify that particular function. And then skills. You would have seen those all kinds of places before where it's also a series of markdown files with mostly metadata about when to use said skill and then a series of functions that are typically Pythonic in nature where when it invokes it, it knows how to invoke it in a very deterministic way every single time. And when it gets the output of these functions, this is the most important part is it's a lot more predictable. It's like an automation workflow. You can think of it as a mini nen workflow that you can invoke within cloud code, but it's all written Pythonic. So everything's file-based. There's no technical real code outside of the functions embedded in these different resources. And then skills, like I said, automatically fire while commands are explicit. So you can integrate it with whatever you want. And in terms of key use cases, a good example is let's say you wanted to do slashupdate so that it scans a particular email, a particular calendar or a series of chats to go through and check off anything in your tasks or your to-dos that has been completed or anything that needs to be added. So that would be an example of the productivity application in terms of sales. Now sales is tailored and special snowflake to every company, but the sales process is usually pretty consistent where you have prospecting and research, then call prep, engagement, deal management and closing, and then follow up and growth. So the goal of this plug-in is to take you from A to B where you first draft outreach that's specialized to a particular target or prospect or company, and then it does competitive intelligence. Again, you can customize the way it does so, but it has some factory default settings that you can start out with. And if you get to the stage of deal management and closing, then it has its own pipeline review and forecasting. It can log summaries of your pipeline. And then you can go to the follow-up world or the nurture world. So, this is a beautiful example of summarizing an entire domain, basically the 8020 of domain. 99% that last 20% is going to have to be hyper tailored by actual sales experts in an organization or a company. But this will give you the foundation that you need to build on. It's essentially like being able to import prompts back in 2023 where it would be the 8020 of a particular task. In this case, we went from task to project to now an entire domain in one shot. Now, the customer support plug-in, its main goals are for triaging and personalizing. So basically when a ticket arrives and this is a very wide use case especially last year with things like nitn and make.com as well as zap year is how do you deal with ticket management. So in this case when a ticket arrives it is automatically updated as either critical high medium low and then it chooses a response path. The response path could be escalation where things need to be bumped up to different engineering departments, different CS departments really depends on the company. And then otherwise it would go research the answer assuming there's some form of knowledge base that you can feed it and then it drafts a response documents it into a knowledge file and then it makes it searchable later assuming that that's the right answer. So this is an example of where you can come in and build on top of it and then connect it to whatever tools like intercom, HubSpot, Jira, wherever the knowledge lives and build on it. Now, this one is probably one of the more popular ones, which is the product management plug-in. And the point of this one is to create things like PRDs, which stands for product requirement documents, specs, [music] anything that comes with prioritization or road mapping, all coming out of the box. So, especially for product managers and AI product managers, you can take this and run with it and integrate with any of the tools to make it that much easier to take a project from A to Z. For the marketing plug-in, the goal is that you have some form of input, typically in the form of a brief, that then drafts content, and then goes through a brand review. And it's your job to supplement what that brand looks like. So, in terms of optimizing for SEO or AI SEO, content drafting, performance reporting, or campaign planning, all of these could be examples of different branding frameworks that you feed it. So you can use that information, create some form of campaign calendar, performance tracking structure, anything that you'd need to create social media campaigns, email outbound campaigns, and anything that makes sense for you and your particular use case. And out of every plug-in I've showed you so far, the legal plugin is the one that really stood out to me because I used it literally yesterday and it was unbelievably helpful looking at a vendor contract. So the main idea is you can upload a PDF and do slash review contract and it would go through and basically highlight any areas that were good like okay anywhere where there's a risk and anywhere where there's a core risk that you need to review. So that would be helpful. And when it comes to NDAs, it can go through and see, okay, this is where this would be easy to improve. This is where we might need some more eyes on this particular clause or set of clauses, and this is exactly where we need to escalate. And you can keep adding on to this, especially if you train on a particular domain. I've worked with a lot of lawyers in the past through my agency, Prop Advisors, and most of the time, a real estate lawyer will have a very different way of reviewing a contract than someone for estate planning. So, you can make it your own. You can structure it the way that makes the most sense, but this is a huge jump in the right direction, especially given the fact that Claude is the best, no contest, at dealing and manipulating DOCX files, PDF files, because should it need to do that, all it has to do is invoke that right skill. The goal of the finance and accounting plug-in is to help you with things like reconciliations, financial statements, beance analysis, and it can help you do things like journal entry preparation, account reconciliation, and pretty much generate any financial document that makes sense. So, all you have to do is just feed it your accounting principles, maybe where you're located, maybe have it do some research on your legal jurisdiction, tax laws, etc., and then you can really hyper tailor this to help your finance and accounting team. One use case that I use this for as a demo is taking a look at my cash flow for my business and helping create a waterfall chart of cash flow analysis over the quarter, over the year. And it's really good at creating those visuals since it can render things like HTML and all of a sudden you can go from a statement in a CSV to a web page that you can spin up wherever. Now, this plugin really hits close to home because I used to be a data scientist for more than five years. And I used to go down into the trenches to understand things like PowerBI, Tableau, Snowflake, BigQuery. And this essentially is meant to be a data analyst stream where you ask a question and it can go and query the data warehouse assuming you can connect it to it. And then you can analyze the results, visualize them, validate them, share some analysis, and you can probably layer on things like creating PowerPoint decks or presentations based on the analysis. So, this is essentially one of my entire rules I spent days figuring out that you can do in a matter of minutes. But this plug-in out of all of them is probably the most helpful. It's called the Enterprise Search Plugin. And the way it works is when you ask a natural language question instead of just searching one knowledge base or one document, it will go and search chat, email, documents, search across maybe wikis internally if you hook it up to that and then query all of them, dduplicate all the responses that seem to be the same. Synthesize the answer and then with citations, then add that to a document. Then once it's searched across all of them, you can have this do it on a scheduled basis if it's a recurring question like what are customers complaining about. This could be in a series of Slack channels, let's say support or from your support team. There's so many ways that you could use this to basically do your own version of hybrid rag, but more so at the enterprise grade level. Now for this one, obviously I'm not a bio research expert myself, but I have worked in the pharmaceutical industry for more than 3 years. So, some of these words made sense to me, although I'm not a scientist myself. One interesting thing is that this particular plug-in has a series of instructions to only query certain very trusted peer-reviewed domains. And one example would be PubMed that I'm familiar with. There are other ones as well. And let's say you work in this field. You could swap out the ones that don't really matter to you or don't resonate. Swap in the sources or the source of truth that makes the most sense. And you can use this for probably tons of great stuff that I'm not smart enough to actually invoke myself. And the last plugin is the meta plugin. So the same way we had meta prompting for getting AI to write prompts for us, this is the plugin that creates other plugins. So if you're using co-work specifically, not cloud code, you can define the workflow that you want to execute. Let's say it's investment banking or it's creating some form of PowerPoint decks for different government contracts. You would walk through ideally in plain English, dictate the whole process. It would take that and then identify what capabilities it would need to create from scratch to emulate said workflow. Once it pieces everything together, that makes sense. It will create on its own the skills needed as well as these flash commands that seem to be the most related to all the core instructions that you need to invoke day-to-day. Then it goes through key use cases, creates everything, and then you can basically deploy it to your team or just use it in your co-work account. And the best part of this is it allows you to have a vanilla playground where you can connect whatever MCP you want to this plugin to make it work with your entire ecosystem. And one FYI I would give you is you can essentially take this whole repo and import it in something like Claude Code if you are claoriented and then allow it to understand the structure of a plug-in. You can even fork the repo itself and have it recreate its own plugins. And that's actually something that I went through today in my exclusive community early adopters. if you're interested in coming in and checking it out. But one thing you could do is feed this entire repo via URL to something like cloud co-work and say, "Hey, this is what I do. Here are all the functions of my business or what I do in my soloreneur business. Help me create a series of ideas we can brainstorm on viable plugins and then you can keep going down the path from there. Now, obviously, if you do this in cloud code, it's infinitely more potent because in terms of even contacts, window management, it's going to be a lot more efficient. And all you'd have to do in cloud code is tell it to do that particular activity, create zip files. So, you can actually import them into your Cloud Code instance. And if you want to be able to import your created plugin on your desktop, all you'd have to do is go to plugins, and then click on the plus, then go to upload, then upload it as a zip file. It's going to be infinitely easier than it used to be to upload a skill file. They made it a lot more friendly. And this is an example of one I put together is the investment banking repo where you can see we have commands for deal memos, model reviews, pitch books, valuations, we have different skills, and all this was created without me having to lift my finger. If you want a summary and TLDDR of all the diagrams I walk through today, I'll make all that available to you in the second link in the description below. And for the rest of you, if you enjoyed this video, if you found it helpful, please leave me a comment. It helps the video, helps the channel, and I'll see you all in the

## Timed Segments

[0:00] So, a few days ago, the Cloud Code team
[0:02] released a list of brand new plugins for
[0:04] Claude Co-Work. So, in this video, I&#39;m
[0:06] going to walk you through what plugins
[0:08] are in plain English, how you can use
[0:10] them, and how you can even use them in
[0:12] things like Cloud Code. Now, when you
[0:13] log into Claude Co-work on your desktop,
[0:15] you&#39;ll see that there&#39;s a brand new
[0:17] section right here called plugins. And
[0:20] when you click on plugins, you&#39;ll be
[0:21] able to add your own plugins or browse
[0:23] existing ones. So this is an example of
[0:25] one that comes out of the box from the
[0:27] anthropic team called the product
[0:29] management plugin. In the TLDDR is you
[0:32] can think of plugins as a care package.
[0:34] A care package of skills, commands,
[0:36] MCPs, everything that you would need for
[0:38] a specific domain to Excel without
[0:41] having to write your own system prompts
[0:43] from the get- go. So specifically, you
[0:44] can see here this comes with some slash
[0:46] commands like competitive brief, metrics
[0:48] review, competitive analysis for skills,
[0:50] and you can click on plus right here.
[0:53] Click on browse plugins. Then you can
[0:55] add whatever you want. One very
[0:57] interesting thing is they&#39;ve aligned
[0:59] themselves even more with the corporate
[1:01] world by making essentially one plug-in
[1:04] per function of a standard company. So
[1:07] whether it&#39;s bio research for life
[1:09] sciences customer support for CRM
[1:11] systems for anything related to
[1:14] customers data for data analysts
[1:16] enterprise search to essentially create
[1:18] a hybridized search where when you ask
[1:20] one question it will search things like
[1:22] slack email notes all through the
[1:25] enterprise network you have finance for
[1:27] things like accounting you have legal so
[1:30] lawyers should probably keep sweating if
[1:32] they&#39;re already sweating the geni
[1:33] revolution and then you have marketing
[1:35] and productivity activity as well and
[1:37] sales to boot. And the best thing is you
[1:40] can add your own skills. And when it
[1:42] comes to actually invoking them, once
[1:44] you have one installed, you could just
[1:45] use a slash in co-work and then you can
[1:48] go down to your plugins right here and
[1:50] you&#39;ll be able to see exactly which
[1:52] slash command you want to invoke. So if
[1:54] we wanted to do the competitive brief,
[1:56] as soon as we type that, this will
[1:57] execute that specific function. So now
[1:59] that you have a little preview of how
[2:01] that works, let me break down what
[2:03] plugins are and a quick TLDDR of each
[2:05] and every plug-in, where you can use it
[2:07] and where it works best. So plugins,
[2:09] like I said, you can think of them as a
[2:11] command center. So you have skills,
[2:13] which are domain knowledge that Claude
[2:16] can conveniently draw on when the
[2:18] context basically comes up naturally. So
[2:20] if you say something where claw detects,
[2:22] you know what, I should tap into XYZ
[2:24] skill, it will use that skill and any
[2:27] associated functions just [music] in
[2:29] time, meaning you&#39;re not bloating the
[2:31] context of your conversation without
[2:32] having to do so like you would with many
[2:35] MCP servers. It only uses it when it has
[2:37] to. Commands are very different. So if
[2:39] you saw right before I showed you a
[2:40] slash command, a slash command invokes a
[2:43] specific function. So it&#39;s like forcing
[2:46] Claude to use a pseudo skill exactly
[2:49] when you want it. So that&#39;s where
[2:50] commands are helpful. And then when it
[2:51] comes to connectors, you would have seen
[2:53] those before. Those are natural
[2:54] integrations. You can ask [music] it to
[2:57] connect to MCP servers to anything you
[2:59] want. And the idea is instead of just
[3:02] importing a singular skill, you can
[3:04] import a plugin where it brings
[3:07] everything at the same time. And to give
[3:09] this some more color, this is the
[3:11] structure of a plugin. And even if
[3:12] you&#39;re nontechnical, you should be able
[3:14] to follow along or at least I&#39;ll do my
[3:15] best to help you do so. So you have
[3:18] something a with a plug-in name. Then
[3:20] you have the actual plugin that comes
[3:22] with a JSON file. This JSON file has
[3:25] things like the manifest, the name, the
[3:27] version, the author, and then if you
[3:28] have MCP servers, they&#39;ll be specified
[3:31] right here in the MCP JSON. When it
[3:33] comes to those commands, like I showed
[3:35] you, like the competitive brief, all of
[3:37] those slash commands exist here where
[3:39] each slash command has its own markdown
[3:42] file that walks through what happens
[3:44] when you specify that particular
[3:46] function. And then skills. You would
[3:47] have seen those all kinds of places
[3:49] before where it&#39;s also a series of
[3:51] markdown files with mostly metadata
[3:54] about when to use said skill and then a
[3:57] series of functions that are typically
[3:59] Pythonic in nature where when it invokes
[4:01] it, it knows how to invoke it in a very
[4:03] deterministic way every single time. And
[4:05] when it gets the output of these
[4:07] functions, this is the most important
[4:08] part is it&#39;s a lot more predictable.
[4:11] It&#39;s like an automation workflow. You
[4:12] can think of it as a mini nen workflow
[4:15] that you can invoke within cloud code,
[4:17] but it&#39;s all written Pythonic. So
[4:19] everything&#39;s file-based. There&#39;s no
[4:20] technical real code outside of the
[4:22] functions embedded in these different
[4:24] resources. And then skills, like I said,
[4:26] automatically fire while commands are
[4:28] explicit. So you can integrate it with
[4:30] whatever you want. And in terms of key
[4:31] use cases, a good example is let&#39;s say
[4:34] you wanted to do slashupdate so that it
[4:36] scans a particular email, a particular
[4:39] calendar or a series of chats to go
[4:41] through and check off anything in your
[4:44] tasks or your to-dos that has been
[4:45] completed or anything that needs to be
[4:47] added. So that would be an example of
[4:49] the productivity application in terms of
[4:51] sales. Now sales is tailored and special
[4:54] snowflake to every company, but the
[4:56] sales process is usually pretty
[4:58] consistent where you have prospecting
[5:00] and research, then call prep,
[5:01] engagement, deal management and closing,
[5:04] and then follow up and growth. So the
[5:05] goal of this plug-in is to take you from
[5:07] A to B where you first draft outreach
[5:10] that&#39;s specialized to a particular
[5:11] target or prospect or company, and then
[5:14] it does competitive intelligence. Again,
[5:16] you can customize the way it does so,
[5:18] but it has some factory default settings
[5:20] that you can start out with. And if you
[5:21] get to the stage of deal management and
[5:23] closing, then it has its own pipeline
[5:26] review and forecasting. It can log
[5:28] summaries of your pipeline. And then you
[5:30] can go to the follow-up world or the
[5:32] nurture world. So, this is a beautiful
[5:34] example of summarizing an entire domain,
[5:37] basically the 8020 of domain. 99% that
[5:41] last 20% is going to have to be hyper
[5:42] tailored by actual sales experts in an
[5:45] organization or a company. But this will
[5:47] give you the foundation that you need to
[5:49] build on. It&#39;s essentially like being
[5:52] able to import prompts back in 2023
[5:54] where it would be the 8020 of a
[5:56] particular task. In this case, we went
[5:58] from task to project to now an entire
[6:01] domain in one shot. Now, the customer
[6:03] support plug-in, its main goals are for
[6:05] triaging and personalizing. So basically
[6:08] when a ticket arrives and this is a very
[6:10] wide use case especially last year with
[6:11] things like nitn and make.com as well as
[6:14] zap year is how do you deal with ticket
[6:16] management. So in this case when a
[6:18] ticket arrives it is automatically
[6:20] updated as either critical high medium
[6:23] low and then it chooses a response path.
[6:26] The response path could be escalation
[6:29] where things need to be bumped up to
[6:31] different engineering departments,
[6:33] different CS departments really depends
[6:35] on the company. And then otherwise it
[6:37] would go research the answer assuming
[6:38] there&#39;s some form of knowledge base that
[6:40] you can feed it and then it drafts a
[6:41] response documents it into a knowledge
[6:44] file and then it makes it searchable
[6:46] later assuming that that&#39;s the right
[6:47] answer. So this is an example of where
[6:50] you can come in and build on top of it
[6:52] and then connect it to whatever tools
[6:54] like intercom, HubSpot, Jira, wherever
[6:56] the knowledge lives and build on it.
[6:59] Now, this one is probably one of the
[7:00] more popular ones, which is the product
[7:02] management plug-in. And the point of
[7:04] this one is to create things like PRDs,
[7:06] which stands for product requirement
[7:07] documents, specs, [music]
[7:09] anything that comes with prioritization
[7:11] or road mapping, all coming out of the
[7:14] box. So, especially for product managers
[7:16] and AI product managers, you can take
[7:19] this and run with it and integrate with
[7:20] any of the tools to make it that much
[7:22] easier to take a project from A to Z.
[7:24] For the marketing plug-in, the goal is
[7:26] that you have some form of input,
[7:28] typically in the form of a brief, that
[7:29] then drafts content, and then goes
[7:32] through a brand review. And it&#39;s your
[7:34] job to supplement what that brand looks
[7:36] like. So, in terms of optimizing for SEO
[7:38] or AI SEO, content drafting, performance
[7:42] reporting, or campaign planning, all of
[7:44] these could be examples of different
[7:46] branding frameworks that you feed it. So
[7:48] you can use that information, create
[7:49] some form of campaign calendar,
[7:51] performance tracking structure, anything
[7:54] that you&#39;d need to create social media
[7:55] campaigns, email outbound campaigns, and
[7:58] anything that makes sense for you and
[7:59] your particular use case. And out of
[8:01] every plug-in I&#39;ve showed you so far,
[8:02] the legal plugin is the one that really
[8:04] stood out to me because I used it
[8:06] literally yesterday and it was
[8:07] unbelievably helpful looking at a vendor
[8:09] contract. So the main idea is you can
[8:11] upload a PDF and do slash review
[8:14] contract and it would go through and
[8:17] basically highlight any areas that were
[8:19] good like okay anywhere where there&#39;s a
[8:21] risk and anywhere where there&#39;s a core
[8:23] risk that you need to review. So that
[8:25] would be helpful. And when it comes to
[8:27] NDAs, it can go through and see, okay,
[8:29] this is where this would be easy to
[8:31] improve. This is where we might need
[8:32] some more eyes on this particular clause
[8:35] or set of clauses, and this is exactly
[8:37] where we need to escalate. And you can
[8:38] keep adding on to this, especially if
[8:40] you train on a particular domain. I&#39;ve
[8:42] worked with a lot of lawyers in the past
[8:43] through my agency, Prop Advisors, and
[8:46] most of the time, a real estate lawyer
[8:48] will have a very different way of
[8:49] reviewing a contract than someone for
[8:51] estate planning. So, you can make it
[8:53] your own. You can structure it the way
[8:55] that makes the most sense, but this is a
[8:57] huge jump in the right direction,
[8:59] especially given the fact that Claude is
[9:01] the best, no contest, at dealing and
[9:04] manipulating DOCX files, PDF files,
[9:06] because should it need to do that, all
[9:08] it has to do is invoke that right skill.
[9:10] The goal of the finance and accounting
[9:12] plug-in is to help you with things like
[9:14] reconciliations, financial statements,
[9:16] beance analysis, and it can help you do
[9:18] things like journal entry preparation,
[9:21] account reconciliation, and pretty much
[9:23] generate any financial document that
[9:25] makes sense. So, all you have to do is
[9:26] just feed it your accounting principles,
[9:28] maybe where you&#39;re located, maybe have
[9:30] it do some research on your legal
[9:33] jurisdiction, tax laws, etc., and then
[9:36] you can really hyper tailor this to help
[9:38] your finance and accounting team. One
[9:40] use case that I use this for as a demo
[9:42] is taking a look at my cash flow for my
[9:44] business and helping create a waterfall
[9:46] chart of cash flow analysis over the
[9:48] quarter, over the year. And it&#39;s really
[9:50] good at creating those visuals since it
[9:52] can render things like HTML and all of a
[9:54] sudden you can go from a statement in a
[9:56] CSV to a web page that you can spin up
[9:59] wherever. Now, this plugin really hits
[10:00] close to home because I used to be a
[10:02] data scientist for more than five years.
[10:03] And I used to go down into the trenches
[10:06] to understand things like PowerBI,
[10:08] Tableau, Snowflake, BigQuery. And this
[10:12] essentially is meant to be a data
[10:14] analyst stream where you ask a question
[10:16] and it can go and query the data
[10:18] warehouse assuming you can connect it to
[10:20] it. And then you can analyze the
[10:22] results, visualize them, validate them,
[10:25] share some analysis, and you can
[10:26] probably layer on things like creating
[10:28] PowerPoint decks or presentations based
[10:31] on the analysis. So, this is essentially
[10:33] one of my entire rules I spent days
[10:35] figuring out that you can do in a matter
[10:37] of minutes. But this plug-in out of all
[10:38] of them is probably the most helpful.
[10:41] It&#39;s called the Enterprise Search
[10:42] Plugin. And the way it works is when you
[10:45] ask a natural language question instead
[10:48] of just searching one knowledge base or
[10:50] one document, it will go and search
[10:53] chat, email, documents, search across
[10:56] maybe wikis internally if you hook it up
[10:58] to that and then query all of them,
[11:00] dduplicate all the responses that seem
[11:02] to be the same. Synthesize the answer
[11:04] and then with citations, then add that
[11:07] to a document. Then once it&#39;s searched
[11:09] across all of them, you can have this do
[11:11] it on a scheduled basis if it&#39;s a
[11:13] recurring question like what are
[11:15] customers complaining about. This could
[11:17] be in a series of Slack channels, let&#39;s
[11:19] say support or from your support team.
[11:21] There&#39;s so many ways that you could use
[11:23] this to basically do your own version of
[11:26] hybrid rag, but more so at the
[11:27] enterprise grade level. Now for this
[11:28] one, obviously I&#39;m not a bio research
[11:31] expert myself, but I have worked in the
[11:32] pharmaceutical industry for more than 3
[11:34] years. So, some of these words made
[11:36] sense to me, although I&#39;m not a
[11:37] scientist myself. One interesting thing
[11:39] is that this particular plug-in has a
[11:41] series of instructions to only query
[11:44] certain very trusted peer-reviewed
[11:46] domains. And one example would be PubMed
[11:48] that I&#39;m familiar with. There are other
[11:50] ones as well. And let&#39;s say you work in
[11:52] this field. You could swap out the ones
[11:54] that don&#39;t really matter to you or don&#39;t
[11:55] resonate. Swap in the sources or the
[11:58] source of truth that makes the most
[11:59] sense. And you can use this for probably
[12:01] tons of great stuff that I&#39;m not smart
[12:03] enough to actually invoke myself. And
[12:04] the last plugin is the meta plugin. So
[12:07] the same way we had meta prompting for
[12:09] getting AI to write prompts for us, this
[12:12] is the plugin that creates other
[12:14] plugins. So if you&#39;re using co-work
[12:16] specifically, not cloud code, you can
[12:18] define the workflow that you want to
[12:20] execute. Let&#39;s say it&#39;s investment
[12:21] banking or it&#39;s creating some form of
[12:23] PowerPoint decks for different
[12:25] government contracts. You would walk
[12:27] through ideally in plain English,
[12:29] dictate the whole process. It would take
[12:31] that and then identify what capabilities
[12:33] it would need to create from scratch to
[12:35] emulate said workflow. Once it pieces
[12:38] everything together, that makes sense.
[12:39] It will create on its own the skills
[12:41] needed as well as these flash commands
[12:43] that seem to be the most related to all
[12:46] the core instructions that you need to
[12:47] invoke day-to-day. Then it goes through
[12:49] key use cases, creates everything, and
[12:52] then you can basically deploy it to your
[12:54] team or just use it in your co-work
[12:56] account. And the best part of this is it
[12:57] allows you to have a vanilla playground
[12:59] where you can connect whatever MCP you
[13:01] want to this plugin to make it work with
[13:04] your entire ecosystem. And one FYI I
[13:06] would give you is you can essentially
[13:07] take this whole repo and import it in
[13:10] something like Claude Code if you are
[13:12] claoriented
[13:13] and then allow it to understand the
[13:15] structure of a plug-in. You can even
[13:16] fork the repo itself and have it
[13:18] recreate its own plugins. And that&#39;s
[13:20] actually something that I went through
[13:21] today in my exclusive community early
[13:24] adopters. if you&#39;re interested in coming
[13:25] in and checking it out. But one thing
[13:27] you could do is feed this entire repo
[13:30] via URL to something like cloud co-work
[13:32] and say, &quot;Hey, this is what I do. Here
[13:35] are all the functions of my business or
[13:37] what I do in my soloreneur business.
[13:39] Help me create a series of ideas we can
[13:41] brainstorm on viable plugins and then
[13:44] you can keep going down the path from
[13:45] there. Now, obviously, if you do this in
[13:47] cloud code, it&#39;s infinitely more potent
[13:49] because in terms of even contacts,
[13:51] window management, it&#39;s going to be a
[13:52] lot more efficient. And all you&#39;d have
[13:54] to do in cloud code is tell it to do
[13:56] that particular activity, create zip
[13:57] files. So, you can actually import them
[13:59] into your Cloud Code instance. And if
[14:01] you want to be able to import your
[14:03] created plugin on your desktop, all
[14:05] you&#39;d have to do is go to plugins, and
[14:07] then click on the plus, then go to
[14:09] upload, then upload it as a zip file.
[14:11] It&#39;s going to be infinitely easier than
[14:13] it used to be to upload a skill file.
[14:15] They made it a lot more friendly. And
[14:17] this is an example of one I put together
[14:19] is the investment banking repo where you
[14:22] can see we have commands for deal memos,
[14:24] model reviews, pitch books, valuations,
[14:27] we have different skills, and all this
[14:29] was created without me having to lift my
[14:31] finger. If you want a summary and TLDDR
[14:33] of all the diagrams I walk through
[14:35] today, I&#39;ll make all that available to
[14:37] you in the second link in the
[14:38] description below. And for the rest of
[14:40] you, if you enjoyed this video, if you
[14:41] found it helpful, please leave me a
[14:43] comment. It helps the video, helps the
[14:45] channel, and I&#39;ll see you all in the
