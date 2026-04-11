---
title: "How to INSTANTLY Build An AI Agent Army in n8n with Claude"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=u2NluvotA80"
video_id: "u2NluvotA80"
duration: "24:08"
transcript_method: "youtube-captions"
segment_count: 664
char_count: 25285
status: ingested
topics: []
meta_patterns: []
---

# How to INSTANTLY Build An AI Agent Army in n8n with Claude

**Creator**: mark-kashef | **Duration**: 24:08
**URL**: https://www.youtube.com/watch?v=u2NluvotA80
**Transcript**: 664 segments, 25285 chars

## Transcript

Imagine building an entire army of agents from just one prompt. In this video, I'm going to show you exactly how to use the new Cloud 4 Opus to instantly generate an entire set of workflows. You'll see firsthand how easy it is to spin up a master orchestrating agent, create specialized subworkflows that report to that agent, and lastly, adding tools dynamically to those sub agents without you writing a line of code yourself. And here's the craziest part. This entire process will only take minutes from start to finish. I'm going to walk you through step by step on the fastest way to build sophisticated agent systems, even if you're completely new to automation. Let's dive in. All right, so we're going to tackle two different ways to assemble your agent army. Both involve only one prompt each, but one of them is going to use a cloud project, and one of them we're going to just send a straight chat message. And before I show you how this prompt works and how this entire system works, let's just prove that it does work. Now if you send this entire prompt we have here along with a series of files these are all JSON files with one master agent right here called retrofure master assistant then you have all these subworkflows that report to this orchestrating agent. So pretty much we're using Cloud4 opus and the power of extended thinking and web search to be able to look at these files, get a handle for how to create the AI agent module, how they connect together, what kind of tools can be attached, and if we need to supplement this information with additional information not in Claude's training, we can use web search, which is a newer feature in the past couple months. And if we're using Opus, all we have to do is wait around five to 10 minutes for it to run through this entire workflow. And you'll see it first drafts multiple sets of agents that it could put together. And then if I ask it for just a sample of three of these agents and after 5 to 10 minutes, Claude 4 Opus uses all its tools at its disposal to come up with not just a draft of different agents, but it will create a draft of the first three agents. And if you want, you can keep going and say create the rest. And the result is you get a series of JSON files like this one. And you can click on the little drop down here. You'll see we've put together all of these different agents with one single prompt. And then we can just go here, copy, and seamlessly go into NANE, paste this, and now you have an agent that isn't just an empty agent. You can double click and you'll see that an entire prompt on how the agent works and how it should use all of its sub tools is set up for you literally in minutes and ready to go. And if you click out, you'll see all the different sub workflows that it's come up with that it thinks would be suitable for this kind of business or this kind of task they're trying to accomplish. But wait, there's more. We don't just create these subworkflow drafts. It actually can create the subworkflows themselves. So if we click from tab to tab here, this is the first workflow put together which is called the sustainability impact agent where it has access to different tools that it has decided make the most sense given this agents ambitions. And once again all of these sub agents have instructions of their own with a reference material on how to call their subtools as well. So now we basically are creating agent section where each agent has another agent and both of them have instructions on how they should operate. If we keep going, you'll see all the different agents here from the lodge coordination agent to the real-time conditions agent, each with not only its own set of tools, but it's smart enough to decide whether or not it should use maybe chat GBT OpenAI or anthropics model for the given task as well. So, we have that dynamic nature there. And then you have your entire set of agents with different tools with different functionalities and ambitions all reporting to the central agent itself. Now, before we get into the nitty-gritty of the prompt itself, I want to walk you through the logic of how this works and why this works. So, not too long ago, we were all blessed with yet another model. In this case, we got the Cloud 4 model where we have Claude 4 sonnet and Cloud4 opus. Not only that, when you combine Claude 4 with extended thinking, a feature available to all, as well as web search, something also newly available in the past month or so, it becomes a trifecta. this perfect marriage of intelligence with the ability to search as well as an extension of reflection over time. If you've watched my past video, you already know that it's possible to create out of the box and end workflows just using claude. And previously, I had to supplement it with a cheat sheet, a series of nodes for it to understand. But now that we have web search at our disposal and extended thinking together, we can not only use the power of claude that natively is decent at any workflows, but now we can really supercharge it with examples of these agents and just allow it to do a monkey see monkey do understand the structure, understand how these tools are attached and understand the relationship of subworkflows to different types of agents. Now the most central concept here is the AI agent module in NAIDEN. And this module is based on something called Langchain which is a framework that really changed the entire course of the NAN community where now you have some central agent that takes in a prompt that can speak to different tools, can use a language model and can use an internal memory. And overall, NADN, like every other automation tool, uses JSON, which stands for JavaScript object notation to denote and be able to bring these workflows to life the way you see them visually. The fact that they're all based on JSON, allows us to manipulate and generate these JSONs using a language model like Cloudfar Opus to be able to basically be able to create the JSON itself, the entire schema, and import it into any. But unlike typical workflows they would have seen my tutorial and probably tons of other tutorials coming out on this AI agent tool is special not just in the sense of what it can do but how it operates. So if we take a look at the tools here you can't just use any tool from a specific provider. There are different functionalities or methods available to the AI agent that aren't necessarily the only functionalities you can have. For example, you might have a node that allows you to watch new rows being added to a Google sheet, right? And every time you watch a new row come in, that triggers an entire workflow. Technically, with an AI agent, they wouldn't really play very well. An AI agent would want some form of very specific action to occur that's triggered externally from the agent itself. So taking the Google Sheets example, it would be able to add a new row, receive new rows, search new rows, something that's very functional and isn't necessarily triggerbased. So, keeping that in mind, if you were just to ask Claude out of the box, build me an AI agent workflow, you could get some results that are decent, but it will basically struggle with understanding what tools it can use, but most likely it will struggle to delineate between what tools can it use, what are the nodes that I can write JSON for to visualize those tools, and most importantly, what are the different tiers of methods that I can have access to as an AI agent, which is different from a standard workflow you put together and edit it in. And I'm not spoiling the rest of the video by telling you that the crux of being able to do this entire process relies on the ability to create these tools reliably in the exact way that the AI agent node expects. So the overall goal is that we're able to create a series of JSONs. One that acts as our orchestrator and the others that act as our sub aents. All of which ideally don't have their own subworkflows because then you'll have agents with subworkflows with subworkflows and this entire chain can keep going on. Now you can totally do that if you wish but for simplicity sake I ideally wanted to just go from orchestrating agent to sub workflows that all have tools. So that's the general structure that we're going for at least with our approach. So now that we have that background, we're safe to dive straight into this prompt. And just for the pure comprehension of every part, I will read through it and basically give a voice over for the parts you should really care about. Okay, so let's give it a read. You are an expert NAND workflow architect and systems designer. Your primary mission is to generate a comprehensive, functional and importable NAN AI agent system based on the provided business description strictly emulating the structural patterns, node types and connection methods. So in this case, I'm just giving it a series of examples here. So especially for the AI agent nodes and their tools via AI tool. So this here is a part of the underlying JSON that basically denotes to the agent what is attached to that agent and that's where the attachment of the tools comes into play. We then say your paramount goals are to ensure all generated N&N workflow JSON is 100% valid meaning it's not corrupt, importable and entirely free of property value errors. Now what are property value errors? These errors pop up quite a bit when the JSON is generated by some form of language model, but it's missing key parameters or key components that any is expecting because it's expecting those and it needs those to be able to visualize it the way you see it on a screen. It's not able to actually import it. So, I'm trying to have it reflect using that extended thinking function and make sure that before we import it into NADN, there's a very high likelihood that it's going to actually work. Next, I instructed that there's going to be two distinct stages. First, after analyzing the business description provided at the end of this message, you must conceptualize and list directly in the chat six to eight potential specialized AI agent names. So, in this case, I'm saying I want you to come up with six to eight ideas. Brainstorm on the types of agents we want to create. This gives us a baseline to actually work from. Now the next part is for each of the conceptual agents provide a concise one-sensit nodes or verifiable public APIs that your web search for tools not covered in provided examples indicates would be the most appropriate for these tasks. Do not proceed with any unverified or hallucinated tools or APIs. Now what is this last part about here? Hallucinated tools or APIs. Once in a while, even using Opus, it will create a tool that is a fictional non-existent API specific to company X. So imagine you said company X has these services, they have this stack. It might accidentally create an HTTP request, which is a request to an API and call it company.x.api and basically make it out of thin air, which is not what we want. We want our tools to have a high likelihood of being grounded and being actually functional. And from these six to eight ideas we come up with, we actually just want to start with creating three of the most impactful of these workflows. Now, there's two different reasons why I'm saying three here. First of all, if you let it create six to eight workflows in one shot and you're just on the Claude Pro plan using Cloud Opus and extended thinking, you might completely use all your credits in one shot. So when I say three, it just gives you the ability to quickly audit whether or not it's working, whether or not it's adding the tools you'd expect before you commit and donate all your credits for the next 6 to 7 hours to Anthropic. And the second reason is obviously time because this will take at least 5 to 10 minutes to put together and you don't want to wait half an hour all to find out that seven of your workflows are completely not usable. Now, this second stage is completely optional. And if you want to move ahead and complete the remaining of the initial draft of agents they came up with, then you can just say, "Cool, you did a great job. Let's finish off with the rest of the agents." And then with this instruction, it should know exactly what it next step should be. Now, if we scroll down, I want to focus on this specific instruction here that says, "These specialized agents should utilize two to three with an absolute maximum of five, if genuinely distinct, critical, and verifiable, real tools, and must have correctly connected response and try again set nodes wired to the respective AI agent node success and error outputs." And what does that mean in plain English? If we pop over to the second tab here, all we're asking is that whatever tools you choose, make sure they're legit tools. They're not made up. And number two, connect a set response and a try again step for the AI agent in case something goes wrong, it can try again in case there's some form of temporary error. And with that, if we go back, we just finish off by adding the business description of the underlying business. And this is what makes this so powerful that you can use this entire prompt and you just change the very bottom. And the reason why I added this business at the very bottom is when it comes to prompt engineering, at least for now, a prompt will typically be paid attention to at the very beginning and the very end of the prompt. So we want to make sure that the business and the underlying mechanisms of that business are really paid attention to by the language model. In this case, I won't read all of this, but pretty much it goes through this fake business that I came up with that has a series of different operations, and we're just trying to find ways to optimize for those operations. Now, where this becomes super exciting is when we add specifications for what kind of tools are using, and we find a way to create a cloud project to make a much more sophisticated version of this prompt. But just in case you missed something on this prompt, I'll be making this available in the description below so you can go through it, change it, and do whatever you want to your heart's content to optimize it for your oneshot workflow. Now, for our next three samples we're going to take a look at, we're going to analyze three completely hypothetical businesses. One is called Flexiflow Studios. That's a Tik Tok agency. We're going to look at a dessert place called Unicorn Milkshake. And then we're going to look at Chaos Coffee. Each of them uses different tools but they have some similarities. So Flexiflow uses things like ClickUp, Air Table and Slack and Google. And then Unicorn Milkshake uses Zoom as well as those tools as well and monday.com. And then Chaos Coffee uses a mixture of what both of these use. Now this is a purposeful example because of the big trick and the big nugget I'm about to show you next. If we pop into our Cloud project, we have quite a few different things going on here. We have a cheat sheet guide that we put together. We also have a special file here called agents_tools.json. And this is going to be the golden nugget you're going to learn from this video. And then we have just another set of workflows that have some form of master orchestrating agent and sub aents. And what I'll do is along with that prompt I provided you initially, I'll also provide you with a series of files that you can use as well to add to a project or use in a prompt. So you can use this as well without having to build that initial workflow yourself. Now for this prompt, it took so much time that I refused for it to be copycatted all over YouTube. So this prompt will be available to my early AI adopters community members exclusively in the community. But for the rest, I will walk you through how this agent tools file works because this will open so many doors for you. If we go into this agent tools aen, you'll think that I'm a madman for putting one AI agent with multiple many tools. Now, do I intend on ever running this workflow? No. What I'm doing is a bit of a cheat code. If you remember before, if you go to something like, let's say, Asana, which is a project management tool, and you go under options, while you can use all of these in any, the AI agent module, like I said before, can't necessarily use all of these tools. It can use a subset of these different methods. So, if I had some form of trigger action, let's go here on a new asana event. Let's just bring this to the board because this is the easiest way for you to understand what's happening. I physically can't connect this as a tool. It will not accept it because this is a trigger. It's not something that the agent module can actually play nice with. Which is why you'll see that when you add a tool to the agent module and you click on asauna, we won't have as many options as we saw before. I think we had 22 options before, but now we can only do these operations using the agent module, which is where this complexity comes in. that's made me spend hours trying to figure this out. And knowing that a lot of these different services like Zoho, like Monday, like ClickUp, which are actual services that most businesses use, not all businesses use Air Table and not all businesses use Google Sheets. So what happens if you have these kinds of tools in your toolbox? Well, if we can't use web search reliably to understand how to attach these to the agent, and if we don't have a knowledge base we want to constantly feed of examples of workflows with these exact tools, what we could do is just put all of the tools that we care about, attach it to one agent, and then download that as a JSON, and technically we can use that as our mini knowledge base now to pseudo fine-tune our agent in Claude to understand how to put together a Slack connection to an agent. How to put together an ASA connection to an agent. Same with Monday, same with Zoho. So, this becomes your cheat code where you can use whatever you want depending on your particular business or service you're offering. You can add whatever node you wish. Let's say a quadrant node or let's say an airtop tool node. And then you can just hook up all the different functionalities you think you'd want to use and then use that JSON as a part of your knowledge base to allow Claw to have a better understanding of how to put everything together when it comes to the AI agent module. Once you have that put together along with the cheat sheet, you now have something super potent that you only have to just provide a description of a business as well as the tools used in that business and you can crank out these workflows fairly reliably over and over again. And for our first example, we have Flexiflow Studios, which is a beautiful name. Now, all we have as an instruction is build an agent army for this business. We describe the business itself and all we do is we just drop in the names of the tools. So, we're using Zoom, ClickUp, we're using Slack, some Google Sheets, some Air Table, and then we basically contextualize it in one big paragraph. And with our supercharged prompt I put together specifically for this claude project, this just takes this specific snippet and then creates a list of hypothetical agents that it could put together. And then it creates a short list of three agents, a client request handler agent, a project setup agent, and a team coordination agent. And then after some contemplation, it puts together the JSON for the master coordinator, the request handler and the rest. And all you have to do is either download the actual text file or you can copy it and import it directly into any. And what you get is the following where you have the Flexiflow master AI coordinator with all the subworkflows. it's drafted and then you have a draft of those subworkflows where you have things like Air Table, you have Slack, and notice how they're not invalid. They're all valid. We now have monday.com, we have Slack again, and they're not broken because it had that additional training data, that cheat sheet of the different nodes that it could use and repurpose from. And then if we take a look at the final one here, we now have, you can see here, ClickUp as well as Zoom. And all of these are logical. So this one, a team coordination AI agent has something for scheduling Zoom meetings, team availability checks by sending messages and then creating tasks for that team. And if you so wanted to add more tools, you could just change the underlying prompt and tell it, you know what, draft five tools for each thing. Now, as you add more tools, you might add some more bloat, some unnecessary tooling, but the whole point of this exercise is to get you started, getting you from zero to 80%. Is this going to be perfect out of the box? Is this going to run on its first try? No. But being able to set the foundation with this head start will help you speed things up and also help you brainstorm in a short amount of time what could be possible. For the second business, we have Pet Pal concurge which is the Uber for pet care connecting busy pet parents with trusted local sitters. In this case, we seem to also be using Air Table, Slack, Zoom, um, and in this time ASA right here. And then we get the following workflows where we have the master agent with a series of different nodes. We have the emergency care coordinator, the provider management agent, the booking and scheduling agent, and then something like the photo update agent. I would imagine the photos of the pets themselves, maybe their profiles on some form of portal or website. And in terms of the subworkflows, we have the emergency care AI agent that has access to air table to search available providers for a given dog's doctors. And then we have Slack to alert nearby providers. And then for ASA, now we have create urgent task if needed. So it's trying to come up and rationalize through different workflows. And like I said before, each one has a starter prompt that you can use that's already pretty sophisticated out of the box. And all you can do is kind of just fine-tune it for your specific use case. We also have a provider management AI agent that uses in this case money.com, airtable and Gmail. And then we have one more which is the booking scheduling that uses a combination of Google Sheets, ASA and scheduling a consultation using Zoom. So now that we have all the puzzle pieces set up, so it can just pick and choose these different nodes and we don't have to obsess over the functionality, the fact that these nodes are connecting properly to the agent. It can now also focus on the higher level business decisions on what is practical. What kind of agents make the most sense for this kind of business given the profile. And last but not least, we have Chaos Coffee Co. that runs 15 quirky coffee shops known for their organized chaos. And in this case, we mention once again Google Sheets, Air Table, and ClickUp. Obviously, I could have added more. I just wanted to be able to use that one file for all of these use cases. So, just bear with me. And in this case, yet again, we're able to crank out this operator agent here that has its set of instructions. And then we have subworkflows like inventory ingredient discovery, a recipe innovation agent, and a quality control agent as well as a financial analytics agent as well. So, it's very dynamic to the specific business we have. And if we pop into the subworkflows, we have an interlocation coordinator AI that has access to track deliveries via monday.com, send coordination alerts in Slack, and then create a coordination task in ClickUp. We have an inventory discovery agent that also has the ability to, in this case, also update ingredients in the database in Air Table, update inventory board in money.com, and yet again create a task. And last but not least, we have my favorite, which is the recipe innovation agent that has access to schedule tasting sessions with Zoom. Document recipes in Google Sheets and announce any big recipes to the whole crew. I think there's 15 locations in this hypothetical company. So, this would be the final result here. And then you have once again yet another prompt orchestrating these agents. You can see it's pretty consistent from workflow to workflow. And that's pretty much it. So hopefully you found this as cool as I did building it and this will be something useful to you to create your own drafts of AI agent networks to get you off the ground and get you from 0 to 80 as quickly as possible. Once again, if you want access to the very first prompt along with a sample agent network that you can use to try to repurpose this, then I'll make that available in the first link in the description below. But if you want access to the supercharged prompt along with the underlying cheat sheet guide for the Claude project, then that will be in my community in the second link in the description below where you'll have access to more mad scientist experiments than you can imagine and exclusive content that you'll never see on YouTube. Enjoy building and I'll see you in the next

## Timed Segments

[0:00] Imagine building an entire army of
[0:02] agents from just one prompt. In this
[0:04] video, I&#39;m going to show you exactly how
[0:06] to use the new Cloud 4 Opus to instantly
[0:09] generate an entire set of workflows.
[0:11] You&#39;ll see firsthand how easy it is to
[0:13] spin up a master orchestrating agent,
[0:16] create specialized subworkflows that
[0:18] report to that agent, and lastly, adding
[0:21] tools dynamically to those sub agents
[0:24] without you writing a line of code
[0:25] yourself. And here&#39;s the craziest part.
[0:27] This entire process will only take
[0:30] minutes from start to finish. I&#39;m going
[0:32] to walk you through step by step on the
[0:34] fastest way to build sophisticated agent
[0:36] systems, even if you&#39;re completely new
[0:38] to automation. Let&#39;s dive in. All right,
[0:40] so we&#39;re going to tackle two different
[0:41] ways to assemble your agent army. Both
[0:44] involve only one prompt each, but one of
[0:47] them is going to use a cloud project,
[0:48] and one of them we&#39;re going to just send
[0:49] a straight chat message. And before I
[0:52] show you how this prompt works and how
[0:53] this entire system works, let&#39;s just
[0:55] prove that it does work. Now if you send
[0:58] this entire prompt we have here along
[1:00] with a series of files these are all
[1:03] JSON files with one master agent right
[1:06] here called retrofure master assistant
[1:09] then you have all these subworkflows
[1:11] that report to this orchestrating agent.
[1:14] So pretty much we&#39;re using Cloud4 opus
[1:16] and the power of extended thinking and
[1:19] web search to be able to look at these
[1:22] files, get a handle for how to create
[1:24] the AI agent module, how they connect
[1:26] together, what kind of tools can be
[1:28] attached, and if we need to supplement
[1:31] this information with additional
[1:33] information not in Claude&#39;s training, we
[1:35] can use web search, which is a newer
[1:37] feature in the past couple months. And
[1:38] if we&#39;re using Opus, all we have to do
[1:40] is wait around five to 10 minutes for it
[1:43] to run through this entire workflow. And
[1:45] you&#39;ll see it first drafts multiple sets
[1:48] of agents that it could put together.
[1:50] And then if I ask it for just a sample
[1:52] of three of these agents and after 5 to
[1:54] 10 minutes, Claude 4 Opus uses all its
[1:57] tools at its disposal to come up with
[1:59] not just a draft of different agents,
[2:02] but it will create a draft of the first
[2:05] three agents. And if you want, you can
[2:06] keep going and say create the rest. And
[2:09] the result is you get a series of JSON
[2:11] files like this one. And you can click
[2:13] on the little drop down here. You&#39;ll see
[2:15] we&#39;ve put together all of these
[2:17] different agents with one single prompt.
[2:19] And then we can just go here, copy, and
[2:23] seamlessly go into NANE, paste this, and
[2:26] now you have an agent that isn&#39;t just an
[2:29] empty agent. You can double click and
[2:31] you&#39;ll see that an entire prompt on how
[2:34] the agent works and how it should use
[2:36] all of its sub tools is set up for you
[2:38] literally in minutes and ready to go.
[2:41] And if you click out, you&#39;ll see all the
[2:43] different sub workflows that it&#39;s come
[2:44] up with that it thinks would be suitable
[2:46] for this kind of business or this kind
[2:49] of task they&#39;re trying to accomplish.
[2:51] But wait, there&#39;s more. We don&#39;t just
[2:53] create these subworkflow drafts. It
[2:55] actually can create the subworkflows
[2:57] themselves. So if we click from tab to
[2:59] tab here, this is the first workflow put
[3:02] together which is called the
[3:04] sustainability impact agent where it has
[3:06] access to different tools that it has
[3:08] decided make the most sense given this
[3:11] agents ambitions. And once again all of
[3:14] these sub agents have instructions of
[3:16] their own with a reference material on
[3:18] how to call their subtools as well. So
[3:21] now we basically are creating agent
[3:22] section where each agent has another
[3:25] agent and both of them have instructions
[3:27] on how they should operate. If we keep
[3:28] going, you&#39;ll see all the different
[3:30] agents here from the lodge coordination
[3:32] agent to the real-time conditions agent,
[3:35] each with not only its own set of tools,
[3:37] but it&#39;s smart enough to decide whether
[3:39] or not it should use maybe chat GBT
[3:41] OpenAI or anthropics model for the given
[3:44] task as well. So, we have that dynamic
[3:46] nature there. And then you have your
[3:49] entire set of agents with different
[3:51] tools with different functionalities and
[3:53] ambitions all reporting to the central
[3:55] agent itself. Now, before we get into
[3:57] the nitty-gritty of the prompt itself, I
[3:59] want to walk you through the logic of
[4:01] how this works and why this works. So,
[4:03] not too long ago, we were all blessed
[4:05] with yet another model. In this case, we
[4:07] got the Cloud 4 model where we have
[4:09] Claude 4 sonnet and Cloud4 opus. Not
[4:12] only that, when you combine Claude 4
[4:15] with extended thinking, a feature
[4:17] available to all, as well as web search,
[4:19] something also newly available in the
[4:21] past month or so, it becomes a trifecta.
[4:24] this perfect marriage of intelligence
[4:27] with the ability to search as well as an
[4:30] extension of reflection over time. If
[4:31] you&#39;ve watched my past video, you
[4:33] already know that it&#39;s possible to
[4:35] create out of the box and end workflows
[4:37] just using claude. And previously, I had
[4:40] to supplement it with a cheat sheet, a
[4:42] series of nodes for it to understand.
[4:43] But now that we have web search at our
[4:45] disposal and extended thinking together,
[4:48] we can not only use the power of claude
[4:50] that natively is decent at any
[4:52] workflows, but now we can really
[4:54] supercharge it with examples of these
[4:56] agents and just allow it to do a monkey
[4:58] see monkey do understand the structure,
[5:02] understand how these tools are attached
[5:04] and understand the relationship of
[5:06] subworkflows to different types of
[5:08] agents. Now the most central concept
[5:10] here is the AI agent module in NAIDEN.
[5:13] And this module is based on something
[5:15] called Langchain which is a framework
[5:17] that really changed the entire course of
[5:19] the NAN community where now you have
[5:22] some central agent that takes in a
[5:23] prompt that can speak to different
[5:25] tools, can use a language model and can
[5:28] use an internal memory. And overall,
[5:30] NADN, like every other automation tool,
[5:32] uses JSON, which stands for JavaScript
[5:35] object notation to denote and be able to
[5:38] bring these workflows to life the way
[5:40] you see them visually. The fact that
[5:41] they&#39;re all based on JSON, allows us to
[5:44] manipulate and generate these JSONs
[5:47] using a language model like Cloudfar
[5:48] Opus to be able to basically be able to
[5:50] create the JSON itself, the entire
[5:52] schema, and import it into any. But
[5:55] unlike typical workflows they would have
[5:57] seen my tutorial and probably tons of
[5:59] other tutorials coming out on this AI
[6:02] agent tool is special not just in the
[6:04] sense of what it can do but how it
[6:06] operates. So if we take a look at the
[6:08] tools here you can&#39;t just use any tool
[6:11] from a specific provider. There are
[6:13] different functionalities or methods
[6:15] available to the AI agent that aren&#39;t
[6:18] necessarily the only functionalities you
[6:20] can have. For example, you might have a
[6:21] node that allows you to watch new rows
[6:24] being added to a Google sheet, right?
[6:26] And every time you watch a new row come
[6:28] in, that triggers an entire workflow.
[6:31] Technically, with an AI agent, they
[6:32] wouldn&#39;t really play very well. An AI
[6:34] agent would want some form of very
[6:37] specific action to occur that&#39;s
[6:39] triggered externally from the agent
[6:40] itself. So taking the Google Sheets
[6:42] example, it would be able to add a new
[6:44] row, receive new rows, search new rows,
[6:47] something that&#39;s very functional and
[6:48] isn&#39;t necessarily triggerbased.
[6:52] So, keeping that in mind, if you were
[6:53] just to ask Claude out of the box, build
[6:56] me an AI agent workflow, you could get
[6:58] some results that are decent, but it
[7:00] will basically struggle with
[7:02] understanding what tools it can use, but
[7:05] most likely it will struggle to
[7:06] delineate between what tools can it use,
[7:09] what are the nodes that I can write JSON
[7:11] for to visualize those tools, and most
[7:14] importantly, what are the different
[7:15] tiers of methods that I can have access
[7:17] to as an AI agent, which is different
[7:20] from a standard workflow you put
[7:21] together and edit it in. And I&#39;m not
[7:23] spoiling the rest of the video by
[7:24] telling you that the crux of being able
[7:26] to do this entire process relies on the
[7:29] ability to create these tools reliably
[7:31] in the exact way that the AI agent node
[7:34] expects. So the overall goal is that
[7:36] we&#39;re able to create a series of JSONs.
[7:39] One that acts as our orchestrator and
[7:42] the others that act as our sub aents.
[7:44] All of which ideally don&#39;t have their
[7:46] own subworkflows because then you&#39;ll
[7:48] have agents with subworkflows with
[7:50] subworkflows and this entire chain can
[7:52] keep going on. Now you can totally do
[7:54] that if you wish but for simplicity sake
[7:57] I ideally wanted to just go from
[7:59] orchestrating agent to sub workflows
[8:01] that all have tools. So that&#39;s the
[8:03] general structure that we&#39;re going for
[8:04] at least with our approach. So now that
[8:06] we have that background, we&#39;re safe to
[8:08] dive straight into this prompt. And just
[8:10] for the pure comprehension of every
[8:12] part, I will read through it and
[8:14] basically give a voice over for the
[8:16] parts you should really care about.
[8:17] Okay, so let&#39;s give it a read. You are
[8:19] an expert NAND workflow architect and
[8:22] systems designer. Your primary mission
[8:25] is to generate a comprehensive,
[8:27] functional and importable NAN AI agent
[8:30] system based on the provided business
[8:32] description strictly emulating the
[8:35] structural patterns, node types and
[8:36] connection methods. So in this case, I&#39;m
[8:38] just giving it a series of examples
[8:40] here. So especially for the AI agent
[8:42] nodes and their tools via AI tool. So
[8:45] this here is a part of the underlying
[8:47] JSON that basically denotes to the agent
[8:50] what is attached to that agent and
[8:52] that&#39;s where the attachment of the tools
[8:54] comes into play. We then say your
[8:55] paramount goals are to ensure all
[8:57] generated N&amp;N workflow JSON is 100%
[9:00] valid meaning it&#39;s not corrupt,
[9:01] importable and entirely free of property
[9:04] value errors. Now what are property
[9:06] value errors? These errors pop up quite
[9:08] a bit when the JSON is generated by some
[9:10] form of language model, but it&#39;s missing
[9:12] key parameters or key components that
[9:14] any is expecting because it&#39;s expecting
[9:17] those and it needs those to be able to
[9:18] visualize it the way you see it on a
[9:20] screen. It&#39;s not able to actually import
[9:22] it. So, I&#39;m trying to have it reflect
[9:24] using that extended thinking function
[9:26] and make sure that before we import it
[9:28] into NADN, there&#39;s a very high
[9:30] likelihood that it&#39;s going to actually
[9:32] work. Next, I instructed that there&#39;s
[9:33] going to be two distinct stages. First,
[9:36] after analyzing the business description
[9:38] provided at the end of this message, you
[9:40] must conceptualize and list directly in
[9:42] the chat six to eight potential
[9:44] specialized AI agent names. So, in this
[9:46] case, I&#39;m saying I want you to come up
[9:48] with six to eight ideas. Brainstorm on
[9:51] the types of agents we want to create.
[9:53] This gives us a baseline to actually
[9:54] work from. Now the next part is for each
[9:57] of the conceptual agents provide a
[9:58] concise
[10:03] one-sensit nodes or verifiable public
[10:06] APIs that your web search for tools not
[10:09] covered in provided examples indicates
[10:11] would be the most appropriate for these
[10:12] tasks. Do not proceed with any
[10:14] unverified or hallucinated tools or
[10:17] APIs. Now what is this last part about
[10:19] here? Hallucinated tools or APIs. Once
[10:22] in a while, even using Opus, it will
[10:24] create a tool that is a fictional
[10:27] non-existent API specific to company X.
[10:31] So imagine you said company X has these
[10:33] services, they have this stack. It might
[10:35] accidentally create an HTTP request,
[10:37] which is a request to an API and call it
[10:41] company.x.api and basically make it out
[10:43] of thin air, which is not what we want.
[10:45] We want our tools to have a high
[10:47] likelihood of being grounded and being
[10:49] actually functional. And from these six
[10:51] to eight ideas we come up with, we
[10:53] actually just want to start with
[10:54] creating three of the most impactful of
[10:57] these workflows. Now, there&#39;s two
[10:58] different reasons why I&#39;m saying three
[10:59] here. First of all, if you let it create
[11:02] six to eight workflows in one shot and
[11:04] you&#39;re just on the Claude Pro plan using
[11:07] Cloud Opus and extended thinking, you
[11:09] might completely use all your credits in
[11:12] one shot. So when I say three, it just
[11:14] gives you the ability to quickly audit
[11:16] whether or not it&#39;s working, whether or
[11:18] not it&#39;s adding the tools you&#39;d expect
[11:20] before you commit and donate all your
[11:23] credits for the next 6 to 7 hours to
[11:25] Anthropic. And the second reason is
[11:27] obviously time because this will take at
[11:28] least 5 to 10 minutes to put together
[11:30] and you don&#39;t want to wait half an hour
[11:32] all to find out that seven of your
[11:34] workflows are completely not usable.
[11:36] Now, this second stage is completely
[11:38] optional. And if you want to move ahead
[11:40] and complete the remaining of the
[11:42] initial draft of agents they came up
[11:43] with, then you can just say, &quot;Cool, you
[11:45] did a great job. Let&#39;s finish off with
[11:47] the rest of the agents.&quot; And then with
[11:48] this instruction, it should know exactly
[11:50] what it next step should be. Now, if we
[11:52] scroll down, I want to focus on this
[11:54] specific instruction here that says,
[11:56] &quot;These specialized agents should utilize
[11:58] two to three with an absolute maximum of
[12:01] five, if genuinely distinct, critical,
[12:04] and verifiable, real tools, and must
[12:07] have correctly connected response and
[12:09] try again set nodes wired to the
[12:11] respective AI agent node success and
[12:13] error outputs.&quot; And what does that mean
[12:14] in plain English? If we pop over to the
[12:17] second tab here, all we&#39;re asking is
[12:19] that whatever tools you choose, make
[12:21] sure they&#39;re legit tools. They&#39;re not
[12:22] made up. And number two, connect a set
[12:26] response and a try again step for the AI
[12:29] agent in case something goes wrong, it
[12:31] can try again in case there&#39;s some form
[12:32] of temporary error. And with that, if we
[12:35] go back, we just finish off by adding
[12:38] the business description of the
[12:40] underlying business. And this is what
[12:41] makes this so powerful that you can use
[12:44] this entire prompt and you just change
[12:45] the very bottom. And the reason why I
[12:47] added this business at the very bottom
[12:49] is when it comes to prompt engineering,
[12:51] at least for now, a prompt will
[12:53] typically be paid attention to at the
[12:55] very beginning and the very end of the
[12:57] prompt. So we want to make sure that the
[12:59] business and the underlying mechanisms
[13:01] of that business are really paid
[13:02] attention to by the language model. In
[13:04] this case, I won&#39;t read all of this, but
[13:06] pretty much it goes through this fake
[13:08] business that I came up with that has a
[13:10] series of different operations, and
[13:12] we&#39;re just trying to find ways to
[13:14] optimize for those operations. Now,
[13:15] where this becomes super exciting is
[13:17] when we add specifications for what kind
[13:19] of tools are using, and we find a way to
[13:22] create a cloud project to make a much
[13:24] more sophisticated version of this
[13:26] prompt. But just in case you missed
[13:27] something on this prompt, I&#39;ll be making
[13:29] this available in the description below
[13:31] so you can go through it, change it, and
[13:33] do whatever you want to your heart&#39;s
[13:34] content to optimize it for your oneshot
[13:37] workflow. Now, for our next three
[13:38] samples we&#39;re going to take a look at,
[13:40] we&#39;re going to analyze three completely
[13:42] hypothetical businesses. One is called
[13:45] Flexiflow Studios. That&#39;s a Tik Tok
[13:47] agency. We&#39;re going to look at a dessert
[13:49] place called Unicorn Milkshake. And then
[13:52] we&#39;re going to look at Chaos Coffee.
[13:54] Each of them uses different tools but
[13:57] they have some similarities. So
[13:59] Flexiflow uses things like ClickUp, Air
[14:01] Table and Slack and Google. And then
[14:04] Unicorn Milkshake uses Zoom as well as
[14:07] those tools as well and monday.com. And
[14:10] then Chaos Coffee uses a mixture of what
[14:12] both of these use. Now this is a
[14:14] purposeful example because of the big
[14:16] trick and the big nugget I&#39;m about to
[14:18] show you next. If we pop into our Cloud
[14:20] project, we have quite a few different
[14:22] things going on here. We have a cheat
[14:24] sheet guide that we put together. We
[14:26] also have a special file here called
[14:30] agents_tools.json. And this is going to
[14:32] be the golden nugget you&#39;re going to
[14:33] learn from this video. And then we have
[14:35] just another set of workflows that have
[14:37] some form of master orchestrating agent
[14:39] and sub aents. And what I&#39;ll do is along
[14:42] with that prompt I provided you
[14:43] initially, I&#39;ll also provide you with a
[14:45] series of files that you can use as well
[14:47] to add to a project or use in a prompt.
[14:50] So you can use this as well without
[14:51] having to build that initial workflow
[14:53] yourself. Now for this prompt, it took
[14:54] so much time that I refused for it to be
[14:56] copycatted all over YouTube. So this
[14:59] prompt will be available to my early AI
[15:01] adopters community members exclusively
[15:03] in the community. But for the rest, I
[15:05] will walk you through how this agent
[15:07] tools file works because this will open
[15:10] so many doors for you. If we go into
[15:12] this agent tools aen, you&#39;ll think that
[15:14] I&#39;m a madman for putting one AI agent
[15:18] with multiple many tools. Now, do I
[15:22] intend on ever running this workflow?
[15:25] No. What I&#39;m doing is a bit of a cheat
[15:27] code. If you remember before, if you go
[15:30] to something like, let&#39;s say, Asana,
[15:32] which is a project management tool, and
[15:34] you go under
[15:35] options, while you can use all of these
[15:37] in any, the AI agent module, like I said
[15:41] before, can&#39;t necessarily use all of
[15:42] these tools. It can use a subset of
[15:45] these different methods. So, if I had
[15:47] some form of trigger action, let&#39;s go
[15:49] here on a new asana event. Let&#39;s just
[15:51] bring this to the board because this is
[15:53] the easiest way for you to understand
[15:55] what&#39;s happening. I physically can&#39;t
[15:57] connect this as a tool. It will not
[15:59] accept it because this is a trigger.
[16:01] It&#39;s not something that the agent module
[16:03] can actually play nice with. Which is
[16:05] why you&#39;ll see that when you add a tool
[16:08] to the agent module and you click on
[16:10] asauna, we won&#39;t have as many options as
[16:14] we saw before. I think we had 22 options
[16:16] before, but now we can only do these
[16:19] operations using the agent module, which
[16:22] is where this complexity comes in.
[16:23] that&#39;s made me spend hours trying to
[16:26] figure this out. And knowing that a lot
[16:28] of these different services like Zoho,
[16:30] like Monday, like ClickUp, which are
[16:32] actual services that most businesses
[16:34] use, not all businesses use Air Table
[16:36] and not all businesses use Google
[16:38] Sheets. So what happens if you have
[16:39] these kinds of tools in your toolbox?
[16:42] Well, if we can&#39;t use web search
[16:46] reliably to understand how to attach
[16:48] these to the agent, and if we don&#39;t have
[16:50] a knowledge base we want to constantly
[16:52] feed of examples of workflows with these
[16:54] exact tools, what we could do is just
[16:57] put all of the tools that we care about,
[16:59] attach it to one agent, and then
[17:01] download that as a JSON, and technically
[17:05] we can use that as our mini knowledge
[17:06] base now to pseudo fine-tune our agent
[17:10] in Claude to understand how to put
[17:12] together a Slack connection to an agent.
[17:15] How to put together an ASA connection to
[17:17] an agent. Same with Monday, same with
[17:19] Zoho. So, this becomes your cheat code
[17:21] where you can use whatever you want
[17:22] depending on your particular business or
[17:25] service you&#39;re offering. You can add
[17:27] whatever node you wish. Let&#39;s say a
[17:29] quadrant node or let&#39;s say an airtop
[17:32] tool node. And then you can just hook up
[17:34] all the different functionalities you
[17:36] think you&#39;d want to use and then use
[17:37] that JSON as a part of your knowledge
[17:40] base to allow Claw to have a better
[17:42] understanding of how to put everything
[17:44] together when it comes to the AI agent
[17:46] module. Once you have that put together
[17:48] along with the cheat sheet, you now have
[17:49] something super potent that you only
[17:52] have to just provide a description of a
[17:53] business as well as the tools used in
[17:55] that business and you can crank out
[17:57] these workflows fairly reliably over and
[18:00] over again. And for our first example,
[18:01] we have Flexiflow Studios, which is a
[18:04] beautiful name. Now, all we have as an
[18:06] instruction is build an agent army for
[18:08] this business. We describe the business
[18:11] itself and all we do is we just drop in
[18:14] the names of the tools. So, we&#39;re using
[18:16] Zoom, ClickUp, we&#39;re using Slack, some
[18:19] Google Sheets, some Air Table, and then
[18:21] we basically contextualize it in one big
[18:23] paragraph. And with our supercharged
[18:25] prompt I put together specifically for
[18:27] this claude project, this just takes
[18:30] this specific snippet and then creates a
[18:33] list of hypothetical agents that it
[18:35] could put together. And then it creates
[18:37] a short list of three agents, a client
[18:40] request handler agent, a project setup
[18:43] agent, and a team coordination agent.
[18:45] And then after some contemplation, it
[18:48] puts together the JSON for the master
[18:50] coordinator, the request handler and the
[18:53] rest. And all you have to do is either
[18:55] download the actual text file or you can
[18:59] copy it and import it directly into any.
[19:01] And what you get is the following where
[19:04] you have the Flexiflow master AI
[19:06] coordinator with all the subworkflows.
[19:08] it&#39;s drafted and then you have a draft
[19:11] of those subworkflows where you have
[19:12] things like Air Table, you have Slack,
[19:16] and notice how they&#39;re not invalid.
[19:18] They&#39;re all valid. We now have
[19:19] monday.com, we have Slack again, and
[19:22] they&#39;re not broken because it had that
[19:24] additional training data, that cheat
[19:26] sheet of the different nodes that it
[19:27] could use and repurpose from. And then
[19:30] if we take a look at the final one here,
[19:32] we now have, you can see here, ClickUp
[19:34] as well as Zoom. And all of these are
[19:37] logical. So this one, a team
[19:39] coordination AI agent has something for
[19:42] scheduling Zoom meetings, team
[19:43] availability checks by sending messages
[19:46] and then creating tasks for that team.
[19:48] And if you so wanted to add more tools,
[19:50] you could just change the underlying
[19:52] prompt and tell it, you know what, draft
[19:54] five tools for each thing. Now, as you
[19:56] add more tools, you might add some more
[19:58] bloat, some unnecessary tooling, but the
[20:01] whole point of this exercise is to get
[20:03] you started, getting you from zero to
[20:05] 80%. Is this going to be perfect out of
[20:08] the box? Is this going to run on its
[20:09] first try? No. But being able to set the
[20:11] foundation with this head start will
[20:14] help you speed things up and also help
[20:16] you brainstorm in a short amount of time
[20:18] what could be possible. For the second
[20:20] business, we have Pet Pal concurge which
[20:22] is the Uber for pet care connecting busy
[20:24] pet parents with trusted local sitters.
[20:27] In this case, we seem to also be using
[20:28] Air Table, Slack, Zoom, um, and in this
[20:32] time ASA right here. And then we get the
[20:35] following workflows where we have the
[20:37] master agent with a series of different
[20:40] nodes. We have the emergency care
[20:42] coordinator, the provider management
[20:44] agent, the booking and scheduling agent,
[20:46] and then something like the photo update
[20:48] agent. I would imagine the photos of the
[20:50] pets themselves, maybe their profiles on
[20:52] some form of portal or website. And in
[20:54] terms of the subworkflows, we have the
[20:57] emergency care AI agent that has access
[20:59] to air table to search available
[21:01] providers for a given dog&#39;s doctors. And
[21:04] then we have Slack to alert nearby
[21:06] providers. And then for ASA, now we have
[21:09] create urgent task if needed. So it&#39;s
[21:11] trying to come up and rationalize
[21:13] through different workflows. And like I
[21:15] said before, each one has a starter
[21:18] prompt that you can use that&#39;s already
[21:19] pretty sophisticated out of the box. And
[21:21] all you can do is kind of just fine-tune
[21:23] it for your specific use case. We also
[21:26] have a provider management AI agent that
[21:28] uses in this case money.com, airtable
[21:31] and Gmail. And then we have one more
[21:33] which is the booking scheduling that
[21:34] uses a combination of Google Sheets, ASA
[21:37] and scheduling a consultation using
[21:39] Zoom. So now that we have all the puzzle
[21:41] pieces set up, so it can just pick and
[21:43] choose these different nodes and we
[21:45] don&#39;t have to obsess over the
[21:46] functionality, the fact that these nodes
[21:48] are connecting properly to the agent. It
[21:50] can now also focus on the higher level
[21:53] business decisions on what is practical.
[21:55] What kind of agents make the most sense
[21:57] for this kind of business given the
[21:59] profile. And last but not least, we have
[22:01] Chaos Coffee Co. that runs 15 quirky
[22:04] coffee shops known for their organized
[22:06] chaos. And in this case, we mention once
[22:09] again Google Sheets, Air Table, and
[22:11] ClickUp. Obviously, I could have added
[22:12] more. I just wanted to be able to use
[22:14] that one file for all of these use
[22:15] cases. So, just bear with me. And in
[22:18] this case, yet again, we&#39;re able to
[22:19] crank out this operator agent here that
[22:22] has its set of instructions. And then we
[22:25] have subworkflows like inventory
[22:27] ingredient discovery, a recipe
[22:29] innovation agent, and a quality control
[22:32] agent as well as a financial analytics
[22:34] agent as well. So, it&#39;s very dynamic to
[22:36] the specific business we have. And if we
[22:38] pop into the subworkflows, we have an
[22:41] interlocation coordinator AI that has
[22:43] access to track deliveries via
[22:45] monday.com, send coordination alerts in
[22:48] Slack, and then create a coordination
[22:49] task in ClickUp. We have an inventory
[22:53] discovery agent that also has the
[22:55] ability to, in this case, also update
[22:57] ingredients in the database in Air
[22:59] Table, update inventory board in
[23:01] money.com, and yet again create a task.
[23:04] And last but not least, we have my
[23:05] favorite, which is the recipe innovation
[23:07] agent that has access to schedule
[23:10] tasting sessions with Zoom. Document
[23:12] recipes in Google Sheets and announce
[23:14] any big recipes to the whole crew. I
[23:17] think there&#39;s 15 locations in this
[23:18] hypothetical company. So, this would be
[23:20] the final result here. And then you have
[23:22] once again yet another prompt
[23:24] orchestrating these agents. You can see
[23:26] it&#39;s pretty consistent from workflow to
[23:28] workflow. And that&#39;s pretty much it. So
[23:29] hopefully you found this as cool as I
[23:31] did building it and this will be
[23:33] something useful to you to create your
[23:35] own drafts of AI agent networks to get
[23:38] you off the ground and get you from 0 to
[23:39] 80 as quickly as possible. Once again,
[23:42] if you want access to the very first
[23:43] prompt along with a sample agent network
[23:45] that you can use to try to repurpose
[23:47] this, then I&#39;ll make that available in
[23:49] the first link in the description below.
[23:50] But if you want access to the
[23:51] supercharged prompt along with the
[23:53] underlying cheat sheet guide for the
[23:55] Claude project, then that will be in my
[23:57] community in the second link in the
[23:58] description below where you&#39;ll have
[24:00] access to more mad scientist experiments
[24:02] than you can imagine and exclusive
[24:04] content that you&#39;ll never see on
[24:05] YouTube. Enjoy building and I&#39;ll see you
[24:07] in the next
