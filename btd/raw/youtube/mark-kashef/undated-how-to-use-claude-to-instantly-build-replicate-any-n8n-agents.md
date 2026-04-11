---
title: "How to Use Claude to INSTANTLY Build & Replicate Any n8n Agents"
creator: "mark-kashef"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=JM0y9JKopc0"
video_id: "JM0y9JKopc0"
duration: "19:29"
transcript_method: "youtube-captions"
segment_count: 538
char_count: 20476
status: ingested
topics: []
meta_patterns: []
---

# How to Use Claude to INSTANTLY Build & Replicate Any n8n Agents

**Creator**: mark-kashef | **Duration**: 19:29
**URL**: https://www.youtube.com/watch?v=JM0y9JKopc0
**Transcript**: 538 segments, 20476 chars

## Transcript

A lot of creators are going to absolutely hate me for this. I just figured out how to use Cloud 3.7 to generate pretty much any kind of automation in N8N just using prompts. And even better, I can replicate existing ones just by taking a screenshot. Whether it's a YouTube video or a Google image, if you have a screenshot of what the workflow looks like and you have a transcript to go along with it, you can replicate pretty much anything. If you're still paying for templates, you might want to check this out before you spend yet another dime. Because with the right setup, Claude can pretty much reverse engineer all kinds of workflows. And again, it's not 100% perfect, but it can really get you 80% of the way just through one or two prompts. If I've piqued your interest, stick with me and I'll show you exactly how it works and how you can set it up in your own cloud project. Let's dive right in. All right. So, if you've watched one of my prior videos, you'll remember that I used a combination of chatbt with the new deep research function in chatbt to be able to research a bunch of N8N documentation and then come up with a JSON. Then all we had to do is copy that JSON, paste it in, and most of the time you'd have something. Now, whether or not it was broken or not, or you had sections that you had to fix, that was another story. But the one thing that was overall not as fun to work with that workflow is if you needed to iterate over and over again using deep research, it would take a lot of time and that time might not necessarily translate to a better result. So I asked myself the question, could we do this without deep research? Could we create some form of cheat sheet or cheat sheets as well as provide example workflows that an LLM could understand, especially if it has the power of a reasoning model like 3.7. So before I even break anything down, let me prove to you that it can work. So if we go into here into Claude, you'll see I have a Claude project called N8N templates. And in here I have a prompt. I have my two cheat sheets. One's called N8N cheat sheet guide and one is called N8N tips and tricks. Then the rest of them are literally example workflows from the free marketplace in N8N. And if I go to write a prompt, I'm just going to do this on lazy mode. I'm going to use something called Whisper Flow where all I have to do is just click on a little key and speak. I want you to create an edit end workflow for me that will go from a WhatsApp chatbot and then go and create a series of documents in Google Doc and then send me a notification back in WhatsApp that it's been completed and then throw some other stuff in the middle that you think is useful. So, I'm purposely giving a very vague and honestly poor prompt just to show you how this works. So once I click on send, what it's going to do is it's instructed to reference its knowledge base, go through its own knowledge of NN, and then come up with a JSON output, which is something I'll be able to copy, paste, and you'll see how that'll work shortly. All right, so we got this output eventually. Initially, what it did is actually ask me some clarifying questions because in the prompt, I said, if you're unsure about the direction of the workflow and I'm being too vague, try and push me back. So it asks me here, do you want me to create the workflow? So it receives messages from WhatsApp, uses an AI agent to interpret the request and then before providing the JSON, it wants to clarify a few things like for the Google doc, would I prefer to create a single document, a series of documents, etc. In this case, unfortunately, it dealt with the lazy and grumpy version of me. And I just said, take your best guess. And we got this very long output of JSON. And if I copy this and you scroll to the bottom, you'll see here it's denoting all the different modules you'd see in Nitn step by step. And all we do is go into edit n. We lazily click commandV. And then you'll notice that we get something here. Now we have an actual agent flow. And what's cool about this version is Claude is actually really good at creating the sticky notes that try to explain what's happening in the automation. All you have to do is really just move things around and reposition parts of the workflow. Let's move this here. And I'll just get this out of the way just so you can see. And then you just have to manipulate the order of everything. And you can see that you are pretty far along the way with a pretty horrific set of instructions from myself. So if we just clear this out, you'll see here obviously there's some areas here where it's not connected to each other. You have to resolve. Let's say the memor is good, but we have tools ready to go. It randomly decided to use a datetime tool, calculator tool. It used Google Docs as a tool. We might want to fix this portion. And then it created some document creator tool and tried to explain what's actually happening in the stickies itself. So, similar to a template that you would pay for, it comes with an explanation, the actual workflow that you can get started with and start using or at least start tweaking. And this is all out of the box with very minimal instruction. Now, obviously, it's not just Claude's knowledge or my cheat sheet guides. If you go back to Claude projects, what I did to increase the chances of actually getting good responses, if you go back here to the template, is you'll notice that I drag and dropped a series of existing workflows. So, in a previous video, I showed you that I had my team take 300 AI workflows from the N8N workplace and then put it into a Google Drive. and I just took a subset of them that had tools that seem to come up over and over again. You can mix and match whatever you want. And you'll even see in Claude here when it comes to the knowledge, there's almost 50% left. So you could probably even give more examples. So when you combine existing workflows showing how the connectivity works with cheat sheet guides and a solid prompt that I'll go through shortly, it gives you a pretty strong scenario. Now, what about my second promise, which is that you can replicate existing workflows? I'm going to prove that to you, too. I'm going to go on a random YouTube video, screenshot the workflow, import it here, and show you exactly how that could work. All right, so I'm on YouTube, and I entered N8N workflow here, and then we're just going to scroll down and then pick a random video. Let's take this one. And I'm just going to pause and kind of go through wherever we see a snapshot of a workflow. So, let's go to something like this. Okay. And then this is a pretty easy one. If I just screenshot this, I can copy this to my clipboard. Go to Claude, paste it, and then we'll lazily just make another command. I want you to output a JSON file that is just like this workflow verbatim end to end. And then we'll send something like that. And I'll show you the result. And it took around a minute and we got something like this. Again, pretty beefy. And I'll notice here that it does have sticky notes as well because in my prompt I'm always asking it to try to overexlain what's happening. But you'll see we went from this image here to copy pasting that JSON going into here and we now get an slightly improved version of that workflow that has that chat module the AI agent step the access to all the different tools along with an explanation of what's happening. And again, all you have to do is just take this sticky, put it where it makes sense to given your workflow and then make it look pretty. And then tada, you now have a workflow. And while admittedly that one was pretty easy, if we go back to YouTube, back to a random video here. Let's go to This looks a bit meteor. So, if we go to this one. All right. So, what I'll do here is a couple things that are a bit different. I'm going to take a screenshot of this first portion. Okay. And then I'm going to paste it here. And then I'm going to take the actual transcript of the video. So let's go to here and wait for this video to load. Okay. And there's another way you could pull this. It's called YouTube transcript uh.com or something that you can easily take those or you could build an actual NN or make automation to take it. But I'm just going to be super lazy and I'm going to paste this here. And what this is going to do is not only give Claude the screenshot of the actual workflow, but it'll give it all the context as to what's happening, so it can actually fill in the blanks, do the prompt engineering if needed. And if we go back here, if I wanted to go overkill, I could go to a part of the video where there's like a zoomed in parts, right? And kind of stitch it together. But overall, like let's say we could take this part here, the very beginning, it would know exactly how we're starting. And if we just say I want to fully recreate this workflow end to end and I gave you the entire transcript of the associated video so you know exactly what we're going for and what you should be configuring end to end. We do something like that our little friend here. We'll just send it over and we'll see what we get. All right. So, this one was so long that it created five different sets of partial JSON files that I had to put together and try to patch together and not destroy the actual syntax, which was taking a bit too long. So, take my word for it. This one's a bit too long. It can handle it, but you do have to manipulate the JSON at the very end. So, what I did is I chose another YouTube video that has a leaner automation. This one's pretty straightforward. I screenshotted this one. And if we go to the very bottom after the battlefield of the prior prompt, we get something like this. And if we copy this directly into any and paste, you see we get something very similar, if not exact, identical to what we see on screen here. So hopefully this proves the point that this is capable of creating and replicating. So let's go through how it works step by step. All right. Guys, if you're not familiar with what Claude projects is, if you go to Claude out of the box, you'll be able to go to the lefth hand side and go to this project section. It's basically its version of Chat GBT projects. And how you create one's pretty straightforward. You go to create project. You name the project something. So, I'll call it test. You can create. Then all you get is the ability to add instructions. So, a set of prompts for how the project should interact with every single session. and you can upload knowledge files and that's pretty much it outside of being able to configure which LM version you want to use for that particular chat as well as the style of speaking that you want to have which in our case is completely irrelevant since we're just outputting JSON files. So, if we go back to Claude and we go to our project here, this N8N templates project, we have this prompt right here. And it is a very beefy prompt, but I'll give you the long and short of it. And don't worry about the prompt or the knowledge files or any of the cheat sheet guides because I'll be making them available to you in the description below. So, just sit back and watch. Here we basically say, I want you to create a fully functional nit workflow JSON. No images, no screenshots, only valid JSON. Then follow these instructions. I basically tell it, hey, refer to all the files you have. In particular, the N8N tips and tricks, the N8N cheat sheet guide, and one in particular, the N8N workflow here called AI agent chatbot, and the AI agent chatbot and long-term memory example. And the reason why I'm telling it to look at this example is because this model's trained as of 2023 or early 2024, it doesn't have any knowledge of the AI agent module. So I just give it one directed example. So it knows the exact structure. So if you have an example or a command with an AI agent in there, it knows how to actually reference to replicate it. Now, if we go to the rest of it here, I just also say refer to any other sample workflow I've provided you. So if you want to switch it to your end and you're using different tools like Asana or Jira or insert tool here like Zoom, then you want to throw examples there that are relevant to you because that will increase the likelihood that it has reference material that it can use to emulate and create something new or an updated version of something old. To continue on, we have a workflow description here. And I say that in most cases, you'll have a chat trigger node that controls some of the workflows. We have some critical configuration requirements. Now, one thing that changed recently in N8N is instead of completion, if you want to use OpenAI, it's now called complete. So, otherwise, it wouldn't be broken, but you'd have to go and actually just switch the drop down to complete. So, things like that I've put out of the box. Also, if you're being vague and saying, you know what, use an LM to do XYZ, I'm just telling it, use this chat GBT40 latest as your default if the person's not specifying. So by default it'll go towards OpenAI Juby 4 and then if you want to change that completely up to you and beyond that I'm just saying don't put any placeholders or any partial JSON and this is one key thing here which is ask if details are missing. So if you remember with my first example it pushed back to clarify what I wanted from this WhatsApp chatbot. So in this case it tries to push you back to clarify any requirements again to increase the chance you get exactly what you're looking for. And the last thing here is I say what the output format should be that it should be in a JSON code block with no back ticks or random pieces of information. And then I tell it its goal again which is to provide a single self-contained JSON file that can be pasted directly into editen and ideally just replicate whatever you see. So that's the actual core prompt. In terms of the cheat sheet guides, if we go here, you'll see I have the cheat sheet guide and the N8N tips and tricks. This first one was pretty easy to make and the second one was definitely not as easy, but you can just take my hard work and avoid all the scars with the cheat sheet guide. It's basically a series of information that I asked chatbt deep research as well as perplexity deep research and then I combined both reports on how you would create a guide for using edit end structurally step by step from how you'd use the logic how you'd structure the nodes creating some actual code examples you can see here you can literally see that this is from a code block and basically this entire document is a combination of all the different research that I've and put into 03 mini and then created this thing end to end. And this is a good trick that you can steal from me for all kinds of applications where you just make the LMS do the deep research to put together the cheat sheet guide and then you use this cheat sheet guide to actually put it in the knowledge base and have it as core reference material. And it's a really good crutch in case you're dealing with something that's more nuanced, something that changes or you need a lot more firepower and context to provide the LM than you initially expected. So that's this one. If we go to the NITN tips and tricks, this is a text file and I think if we can zoom in here. Yep. So you can see this also emphasizes general NITN node structure and then I go through specific tools. I go through specific nodes that pop up. I also give it a breakdown on how to create sticky note nodes. It's a tricky one to say. The AI agent module again reinforcing how to call that and what tools it can connect to. I give it some snippet examples of JSON in that case and then I go through some very commonly used tools at least for myself and my agency when it comes to using something like pine cone air table. It has some tips and tricks to claude on how it should actually use these tools and when it should use these tools. So it has the most common tools here. This one wasn't as easy for me to put together. Basically what I did is of the 300 workflows I just ran this through a Python script. And this Python script did two things. The first part is I just parsed out all the unique different nodes from all the JSONs. So imagine you had like a running total of all the individual different options or automations I could put in. I basically created a dictionary of all possible automations in the 300 I gave it. So in this case, we parsed around 284 unique examples and unique definitions around 5,000. And then I ran this set of basically automations that are compiled into an LLM. And I basically said, can you make this into a cheat sheet? Because the original file of thousands and thousands of nodes was over 500 pages long. And Claude would never take a look at that. And we'd probably need the context window to not triple, probably 10x of the actual knowledge base to be able to take it all at once. So I basically had a prompt here that said summarize a subset of nodes and build a prompt uh that asks for a concise cheat sheet and then we have that here. So you are an expert in any and JSON definitions below is a subset of nodes. Please produce a short cheat sheet. In this case I start processing all the different parts of the document into chunks and I try to create this synthesized knowledge of some insights that pop out when you analyze different workflows. So this part you don't need to work for, but just for fun, if you do want access to this, I'll make it available as well in case you want to take it for a spin. Once I had that, all we had to do was just throw it in to the cloud project as knowledge. And again, I just went through and found different automations from the 300 that you saw here that I thought would be helpful or relevant and just pasted them here as additional reference material. And just to reinforce the point here, if I say something like, I want you to create an automation that goes from a Slack trigger and then does a bunch of things in the middle to take that trigger and then process it, summarize it, and build a report based of off off of it and then throw it back into a message in Slack at the very end. Okay, something vague again. Because I put a couple examples here that use Slack on the right hand side in this knowledge base, it'll have that much better of a chance to actually create something that in the middle will actually use some logic as to how it should structure the automation. So I'm not even giving it the step by step that you could and honestly you should in this case it can go the whole 59 and in this case it's telling me all these questions. I'm going to be vague again. Um, go with your best gut decision. I trust you. And we get this automation here that we can just copy paste. Put it in here. We got some stickies. We've got an AI agent node. If I quickly just move things around, move this to the very top. Okay. We have some Slack trigger. It's telling us what it's doing, which is it's listening for new messages. We have a filtering bot. This message data goes to the AI agent that then calls OpenAI. And what's cool is if you double click here, um you'll see it's already configured it to 40. Okay, in terms of the prompt, if we double click, it has taken the onus of creating a prompt because again that's part of my instructions. So the prompt engineering is also taken care of. And then the tools are set up. It ends up back in Slack with the Slack response. So, it's carried out pretty much the entire workflow from such an individually basic command. And that's pretty much it. So, you can take my prompt, all the knowledgebased stuff that you'll find in the description below, replicate my cloud project, and start being able to create and replicate existing workflows that you see wherever on the web just through a snapshot. And if you found that valuable, let me know down in the comments below and give a like to the video. It doesn't only help the video, but the channel as well. And if you are a business owner, CEO, or business leader, and you love tips and tricks just like this, we do things like this on the exclusive content side in our paid early AI adopters community pretty much every week. So check out the second link in the description below, apply, and maybe I'll see you inside. I'll see you next time.

## Timed Segments

[0:00] A lot of creators are going to
[0:01] absolutely hate me for this. I just
[0:03] figured out how to use Cloud 3.7 to
[0:05] generate pretty much any kind of
[0:06] automation in N8N just using prompts.
[0:09] And even better, I can replicate
[0:11] existing ones just by taking a
[0:12] screenshot. Whether it&#39;s a YouTube video
[0:14] or a Google image, if you have a
[0:16] screenshot of what the workflow looks
[0:17] like and you have a transcript to go
[0:19] along with it, you can replicate pretty
[0:21] much anything. If you&#39;re still paying
[0:22] for templates, you might want to check
[0:24] this out before you spend yet another
[0:25] dime. Because with the right setup,
[0:26] Claude can pretty much reverse engineer
[0:28] all kinds of workflows. And again, it&#39;s
[0:30] not 100% perfect, but it can really get
[0:32] you 80% of the way just through one or
[0:35] two prompts. If I&#39;ve piqued your
[0:36] interest, stick with me and I&#39;ll show
[0:37] you exactly how it works and how you can
[0:39] set it up in your own cloud project.
[0:41] Let&#39;s dive right in. All right. So, if
[0:43] you&#39;ve watched one of my prior videos,
[0:45] you&#39;ll remember that I used a
[0:46] combination of chatbt with the new deep
[0:48] research function in chatbt to be able
[0:51] to research a bunch of N8N documentation
[0:53] and then come up with a JSON. Then all
[0:56] we had to do is copy that JSON, paste it
[0:58] in, and most of the time you&#39;d have
[1:00] something. Now, whether or not it was
[1:02] broken or not, or you had sections that
[1:04] you had to fix, that was another story.
[1:06] But the one thing that was overall not
[1:09] as fun to work with that workflow is if
[1:11] you needed to iterate over and over
[1:13] again using deep research, it would take
[1:15] a lot of time and that time might not
[1:17] necessarily translate to a better
[1:18] result. So I asked myself the question,
[1:20] could we do this without deep research?
[1:22] Could we create some form of cheat sheet
[1:24] or cheat sheets as well as provide
[1:27] example workflows that an LLM could
[1:29] understand, especially if it has the
[1:32] power of a reasoning model like 3.7. So
[1:34] before I even break anything down, let
[1:36] me prove to you that it can work. So if
[1:39] we go into here into Claude, you&#39;ll see
[1:41] I have a Claude project called N8N
[1:44] templates. And in here I have a prompt.
[1:46] I have my two cheat sheets. One&#39;s called
[1:49] N8N cheat sheet guide and one is called
[1:51] N8N tips and tricks. Then the rest of
[1:54] them are literally example workflows
[1:56] from the free marketplace in N8N. And if
[1:59] I go to write a prompt, I&#39;m just going
[2:01] to do this on lazy mode. I&#39;m going to
[2:02] use something called Whisper Flow where
[2:04] all I have to do is just click on a
[2:05] little key and
[2:07] speak. I want you to create an edit end
[2:10] workflow for me that will go from a
[2:12] WhatsApp chatbot and then go and create
[2:15] a series of documents in Google Doc and
[2:17] then send me a notification back in
[2:19] WhatsApp that it&#39;s been completed and
[2:21] then throw some other stuff in the
[2:22] middle that you think is useful. So, I&#39;m
[2:25] purposely giving a very vague and
[2:26] honestly poor prompt just to show you
[2:29] how this works. So once I click on send,
[2:32] what it&#39;s going to do is it&#39;s instructed
[2:34] to reference its knowledge base, go
[2:36] through its own knowledge of NN, and
[2:38] then come up with a JSON output, which
[2:40] is something I&#39;ll be able to copy,
[2:42] paste, and you&#39;ll see how that&#39;ll work
[2:44] shortly. All right, so we got this
[2:45] output eventually. Initially, what it
[2:47] did is actually ask me some clarifying
[2:49] questions because in the prompt, I said,
[2:51] if you&#39;re unsure about the direction of
[2:53] the workflow and I&#39;m being too vague,
[2:55] try and push me back. So it asks me
[2:57] here, do you want me to create the
[2:59] workflow? So it receives messages from
[3:00] WhatsApp, uses an AI agent to interpret
[3:03] the request and then before providing
[3:05] the JSON, it wants to clarify a few
[3:07] things like for the Google doc, would I
[3:08] prefer to create a single document, a
[3:10] series of documents, etc. In this case,
[3:13] unfortunately, it dealt with the lazy
[3:15] and grumpy version of me. And I just
[3:16] said, take your best guess. And we got
[3:19] this very long output of JSON. And if I
[3:22] copy this and you scroll to the bottom,
[3:24] you&#39;ll see here it&#39;s denoting all the
[3:26] different modules you&#39;d see in Nitn step
[3:29] by step. And all we do is go into edit
[3:32] n. We lazily click
[3:34] commandV. And then you&#39;ll notice that we
[3:37] get something here. Now we have an
[3:40] actual agent flow. And what&#39;s cool about
[3:42] this version is Claude is actually
[3:44] really good at creating the sticky notes
[3:45] that try to explain what&#39;s happening in
[3:47] the automation. All you have to do is
[3:49] really just move things around and
[3:52] reposition parts of the workflow. Let&#39;s
[3:55] move this here. And I&#39;ll just get this
[3:57] out of the way just so you can see. And
[3:59] then you just have to manipulate the
[4:01] order of everything. And you can see
[4:03] that you are pretty far along the way
[4:06] with a pretty horrific set of
[4:07] instructions from myself. So if we just
[4:10] clear this out, you&#39;ll see here
[4:12] obviously there&#39;s some areas here where
[4:14] it&#39;s not connected to each other. You
[4:16] have to resolve. Let&#39;s say the memor is
[4:18] good, but we have tools ready to go. It
[4:21] randomly decided to use a datetime tool,
[4:23] calculator tool. It used Google Docs as
[4:25] a tool. We might want to fix this
[4:26] portion. And then it created some
[4:28] document creator tool and tried to
[4:31] explain what&#39;s actually happening in the
[4:33] stickies itself. So, similar to a
[4:35] template that you would pay for, it
[4:37] comes with an explanation, the actual
[4:39] workflow that you can get started with
[4:41] and start using or at least start
[4:43] tweaking. And this is all out of the box
[4:45] with very minimal instruction. Now,
[4:47] obviously, it&#39;s not just Claude&#39;s
[4:48] knowledge or my cheat sheet guides. If
[4:51] you go back to Claude projects, what I
[4:53] did to increase the chances of actually
[4:55] getting good responses, if you go back
[4:57] here to the template, is you&#39;ll notice
[4:59] that I drag and dropped a series of
[5:01] existing workflows. So, in a previous
[5:05] video, I showed you that I had my team
[5:07] take 300 AI workflows from the N8N
[5:11] workplace and then put it into a Google
[5:13] Drive. and I just took a subset of them
[5:15] that had tools that seem to come up over
[5:18] and over again. You can mix and match
[5:20] whatever you want. And you&#39;ll even see
[5:22] in Claude here when it comes to the
[5:24] knowledge, there&#39;s almost 50% left. So
[5:26] you could probably even give more
[5:28] examples. So when you combine existing
[5:30] workflows showing how the connectivity
[5:32] works with cheat sheet guides and a
[5:35] solid prompt that I&#39;ll go through
[5:37] shortly, it gives you a pretty strong
[5:39] scenario. Now, what about my second
[5:40] promise, which is that you can replicate
[5:42] existing workflows? I&#39;m going to prove
[5:44] that to you, too. I&#39;m going to go on a
[5:46] random YouTube video, screenshot the
[5:48] workflow, import it here, and show you
[5:50] exactly how that could work. All right,
[5:52] so I&#39;m on YouTube, and I entered N8N
[5:54] workflow here, and then we&#39;re just going
[5:56] to scroll down and then pick a random
[5:59] video. Let&#39;s take this one. And I&#39;m just
[6:02] going to pause and kind of go through
[6:05] wherever we see a snapshot of a
[6:07] workflow. So, let&#39;s go to something like
[6:10] this. Okay. And then this is a pretty
[6:12] easy one. If I just screenshot this, I
[6:15] can copy this to my clipboard. Go to
[6:18] Claude, paste it, and then we&#39;ll lazily
[6:21] just make another command. I want you to
[6:23] output a JSON file that is just like
[6:25] this workflow verbatim end to end. And
[6:28] then we&#39;ll send something like that. And
[6:29] I&#39;ll show you the result. And it took
[6:31] around a minute and we got something
[6:33] like this. Again, pretty beefy. And I&#39;ll
[6:36] notice here that it does have sticky
[6:37] notes as well because in my prompt I&#39;m
[6:39] always asking it to try to overexlain
[6:41] what&#39;s happening. But you&#39;ll see we went
[6:43] from this image here to copy pasting
[6:46] that JSON going into here and we now get
[6:50] an slightly improved version of that
[6:52] workflow that has that chat module the
[6:54] AI agent step the access to all the
[6:56] different tools along with an
[6:58] explanation of what&#39;s happening. And
[7:00] again, all you have to do is just take
[7:02] this sticky, put it where it makes sense
[7:04] to given your workflow and then make it
[7:06] look pretty. And then tada, you now have
[7:08] a workflow. And while admittedly that
[7:09] one was pretty easy, if we go back to
[7:12] YouTube, back to a random video here.
[7:15] Let&#39;s go to This looks a bit meteor. So,
[7:17] if we go to this one. All right. So,
[7:18] what I&#39;ll do here is a couple things
[7:20] that are a bit different. I&#39;m going to
[7:21] take a screenshot of this first portion.
[7:25] Okay. And then I&#39;m going to paste it
[7:27] here. And then I&#39;m going to take the
[7:28] actual transcript of the video. So let&#39;s
[7:30] go to here and wait for this video to
[7:33] load. Okay. And there&#39;s another way you
[7:35] could pull this. It&#39;s called YouTube
[7:37] transcript uh.com or something that you
[7:39] can easily take those or you could build
[7:42] an actual NN or make automation to take
[7:44] it. But I&#39;m just going to be super lazy
[7:46] and I&#39;m going to paste this here. And
[7:48] what this is going to do is not only
[7:50] give Claude the screenshot of the actual
[7:52] workflow, but it&#39;ll give it all the
[7:54] context as to what&#39;s happening, so it
[7:56] can actually fill in the blanks, do the
[7:58] prompt engineering if needed. And if we
[8:01] go back here, if I wanted to go
[8:02] overkill, I could go to a part of the
[8:04] video where there&#39;s like a zoomed in
[8:06] parts, right? And kind of stitch it
[8:08] together. But overall, like let&#39;s say we
[8:10] could take this part here, the very
[8:12] beginning, it would know exactly how
[8:14] we&#39;re starting. And if we just
[8:17] say I want to fully recreate this
[8:20] workflow end to end and I gave you the
[8:23] entire transcript of the associated
[8:25] video so you know exactly what we&#39;re
[8:27] going for and what you should be
[8:28] configuring end to end. We do something
[8:31] like that our little friend here. We&#39;ll
[8:34] just send it over and we&#39;ll see what we
[8:35] get. All right. So, this one was so long
[8:37] that it created five different sets of
[8:40] partial JSON files that I had to put
[8:42] together and try to patch together and
[8:44] not destroy the actual syntax, which was
[8:47] taking a bit too long. So, take my word
[8:49] for it. This one&#39;s a bit too long. It
[8:51] can handle it, but you do have to
[8:53] manipulate the JSON at the very end. So,
[8:56] what I did is I chose another YouTube
[8:58] video that has a leaner automation. This
[9:00] one&#39;s pretty straightforward. I
[9:02] screenshotted this one. And if we go to
[9:04] the very bottom after the battlefield of
[9:06] the prior prompt, we get something like
[9:08] this. And if we copy this directly into
[9:12] any and paste, you see we get something
[9:15] very similar, if not exact, identical to
[9:18] what we see on screen here. So hopefully
[9:21] this proves the point that this is
[9:22] capable of creating and replicating. So
[9:25] let&#39;s go through how it works step by
[9:26] step. All right. Guys, if you&#39;re not
[9:27] familiar with what Claude projects is,
[9:30] if you go to Claude out of the box,
[9:31] you&#39;ll be able to go to the lefth hand
[9:33] side and go to this project section.
[9:35] It&#39;s basically its version of Chat GBT
[9:38] projects. And how you create one&#39;s
[9:40] pretty straightforward. You go to create
[9:42] project. You name the project something.
[9:44] So, I&#39;ll call it test. You can create.
[9:47] Then all you get is the ability to add
[9:50] instructions. So, a set of prompts for
[9:52] how the project should interact with
[9:54] every single session. and you can upload
[9:57] knowledge files and that&#39;s pretty much
[9:58] it outside of being able to configure
[10:01] which LM version you want to use for
[10:03] that particular chat as well as the
[10:06] style of speaking that you want to have
[10:08] which in our case is completely
[10:09] irrelevant since we&#39;re just outputting
[10:11] JSON files. So, if we go back to Claude
[10:15] and we go to our project here, this N8N
[10:17] templates project, we have this prompt
[10:20] right here. And it is a very beefy
[10:23] prompt, but I&#39;ll give you the long and
[10:25] short of it. And don&#39;t worry about the
[10:27] prompt or the knowledge files or any of
[10:28] the cheat sheet guides because I&#39;ll be
[10:30] making them available to you in the
[10:31] description below. So, just sit back and
[10:34] watch. Here we basically say, I want you
[10:35] to create a fully functional nit
[10:37] workflow JSON. No images, no
[10:40] screenshots, only valid JSON. Then
[10:42] follow these instructions. I basically
[10:44] tell it, hey, refer to all the files you
[10:46] have. In particular, the N8N tips and
[10:49] tricks, the N8N cheat sheet guide, and
[10:52] one in particular, the N8N workflow here
[10:55] called AI agent chatbot, and the AI
[10:57] agent chatbot and long-term memory
[10:59] example. And the reason why I&#39;m telling
[11:00] it to look at this example is because
[11:03] this model&#39;s trained as of 2023 or early
[11:06] 2024, it doesn&#39;t have any knowledge of
[11:08] the AI agent module. So I just give it
[11:10] one directed example. So it knows the
[11:12] exact structure. So if you have an
[11:15] example or a command with an AI agent in
[11:17] there, it knows how to actually
[11:18] reference to replicate it. Now, if we go
[11:20] to the rest of it here, I just also say
[11:22] refer to any other sample workflow I&#39;ve
[11:24] provided you. So if you want to switch
[11:26] it to your end and you&#39;re using
[11:28] different tools like Asana or Jira or
[11:31] insert tool here like Zoom, then you
[11:33] want to throw examples there that are
[11:35] relevant to you because that will
[11:36] increase the likelihood that it has
[11:38] reference material that it can use to
[11:40] emulate and create something new or an
[11:42] updated version of something old. To
[11:44] continue on, we have a workflow
[11:45] description here. And I say that in most
[11:48] cases, you&#39;ll have a chat trigger node
[11:50] that controls some of the workflows. We
[11:52] have some critical configuration
[11:54] requirements. Now, one thing that
[11:56] changed recently in N8N is instead of
[11:58] completion, if you want to use OpenAI,
[12:00] it&#39;s now called complete. So, otherwise,
[12:02] it wouldn&#39;t be broken, but you&#39;d have to
[12:05] go and actually just switch the drop
[12:06] down to complete. So, things like that
[12:08] I&#39;ve put out of the box. Also, if you&#39;re
[12:11] being vague and saying, you know what,
[12:12] use an LM to do XYZ, I&#39;m just telling
[12:15] it, use this chat GBT40 latest as your
[12:18] default if the person&#39;s not specifying.
[12:20] So by default it&#39;ll go towards OpenAI
[12:23] Juby 4 and then if you want to change
[12:25] that completely up to you and beyond
[12:27] that I&#39;m just saying don&#39;t put any
[12:29] placeholders or any partial JSON and
[12:32] this is one key thing here which is ask
[12:34] if details are missing. So if you
[12:36] remember with my first example it pushed
[12:38] back to clarify what I wanted from this
[12:40] WhatsApp chatbot. So in this case it
[12:42] tries to push you back to clarify any
[12:44] requirements again to increase the
[12:46] chance you get exactly what you&#39;re
[12:48] looking for. And the last thing here is
[12:49] I say what the output format should be
[12:51] that it should be in a JSON code block
[12:54] with no back ticks or random pieces of
[12:57] information. And then I tell it its goal
[12:59] again which is to provide a single
[13:01] self-contained JSON file that can be
[13:03] pasted directly into editen and ideally
[13:06] just replicate whatever you see. So
[13:08] that&#39;s the actual core prompt. In terms
[13:11] of the cheat sheet guides, if we go
[13:12] here, you&#39;ll see I have the cheat sheet
[13:14] guide and the N8N tips and tricks. This
[13:17] first one was pretty easy to make and
[13:19] the second one was definitely not as
[13:20] easy, but you can just take my hard work
[13:22] and avoid all the scars with the cheat
[13:25] sheet guide. It&#39;s basically a series of
[13:27] information that I asked chatbt deep
[13:30] research as well as perplexity deep
[13:32] research and then I combined both
[13:34] reports on how you would create a guide
[13:37] for using edit end structurally step by
[13:40] step from how you&#39;d use the logic how
[13:42] you&#39;d structure the nodes creating some
[13:45] actual code examples you can see here
[13:47] you can literally see that this is from
[13:48] a code block and basically this entire
[13:52] document is a combination of all the
[13:54] different research that I&#39;ve and put
[13:56] into 03 mini and then created this thing
[13:58] end to end. And this is a good trick
[14:00] that you can steal from me for all kinds
[14:01] of applications where you just make the
[14:04] LMS do the deep research to put together
[14:06] the cheat sheet guide and then you use
[14:08] this cheat sheet guide to actually put
[14:10] it in the knowledge base and have it as
[14:12] core reference material. And it&#39;s a
[14:14] really good crutch in case you&#39;re
[14:16] dealing with something that&#39;s more
[14:17] nuanced, something that changes or you
[14:19] need a lot more firepower and context to
[14:22] provide the LM than you initially
[14:23] expected. So that&#39;s this one. If we go
[14:26] to the NITN tips and tricks, this is a
[14:29] text file and I think if we can zoom in
[14:32] here. Yep. So you can see this also
[14:34] emphasizes general NITN node structure
[14:37] and then I go through specific tools. I
[14:40] go through specific nodes that pop up. I
[14:43] also give it a breakdown on how to
[14:44] create sticky note nodes. It&#39;s a tricky
[14:47] one to say. The AI agent module again
[14:49] reinforcing how to call that and what
[14:51] tools it can connect to. I give it some
[14:54] snippet examples of JSON in that case
[14:56] and then I go through some very commonly
[14:58] used tools at least for myself and my
[15:00] agency when it comes to using something
[15:02] like pine cone air table. It has some
[15:04] tips and tricks to claude on how it
[15:07] should actually use these tools and when
[15:09] it should use these tools. So it has the
[15:11] most common tools here. This one wasn&#39;t
[15:13] as easy for me to put together.
[15:15] Basically what I did is of the 300
[15:19] workflows I just ran this through a
[15:21] Python script. And this Python script
[15:23] did two things. The first part is I just
[15:26] parsed out all the unique different
[15:29] nodes from all the JSONs. So imagine you
[15:32] had like a running total of all the
[15:33] individual different options or
[15:36] automations I could put in. I basically
[15:37] created a dictionary of all possible
[15:40] automations in the 300 I gave it. So in
[15:42] this case, we parsed around 284 unique
[15:46] examples and unique definitions around
[15:48] 5,000. And then I ran this set of
[15:52] basically automations that are compiled
[15:54] into an LLM. And I basically said, can
[15:57] you make this into a cheat sheet?
[15:58] Because the original file of thousands
[16:00] and thousands of nodes was over 500
[16:03] pages long. And Claude would never take
[16:05] a look at that. And we&#39;d probably need
[16:07] the context window to not triple,
[16:09] probably 10x of the actual knowledge
[16:11] base to be able to take it all at once.
[16:13] So I basically had a prompt here that
[16:15] said summarize a subset of nodes and
[16:17] build a prompt uh that asks for a
[16:20] concise cheat sheet and then we have
[16:21] that here. So you are an expert in any
[16:24] and JSON definitions below is a subset
[16:26] of nodes. Please produce a short cheat
[16:28] sheet. In this case I start processing
[16:32] all the different parts of the document
[16:34] into chunks and I try to create this
[16:36] synthesized knowledge of some insights
[16:39] that pop out when you analyze different
[16:41] workflows. So this part you don&#39;t need
[16:43] to work for, but just for fun, if you do
[16:45] want access to this, I&#39;ll make it
[16:46] available as well in case you want to
[16:48] take it for a spin. Once I had that, all
[16:49] we had to do was just throw it in to the
[16:51] cloud project as knowledge. And again, I
[16:54] just went through and found different
[16:55] automations from the 300 that you saw
[16:58] here that I thought would be helpful or
[17:00] relevant and just pasted them here as
[17:03] additional reference material. And just
[17:05] to reinforce the point here, if I say
[17:07] something like, I want you to create an
[17:09] automation that goes from a Slack
[17:11] trigger and then does a bunch of things
[17:13] in the middle to take that trigger and
[17:15] then process it, summarize it, and build
[17:18] a report based of off off of it and then
[17:21] throw it back into a message in Slack at
[17:23] the very end. Okay, something vague
[17:26] again. Because I put a couple examples
[17:28] here that use Slack on the right hand
[17:30] side in this knowledge base, it&#39;ll have
[17:32] that much better of a chance to actually
[17:34] create something that in the middle will
[17:37] actually use some logic as to how it
[17:39] should structure the automation. So I&#39;m
[17:41] not even giving it the step by step that
[17:43] you could and honestly you should in
[17:46] this case it can go the whole 59 and in
[17:48] this case it&#39;s telling me all these
[17:50] questions. I&#39;m going to be vague again.
[17:53] Um, go with your best gut decision. I
[17:58] trust you. And we get this automation
[18:00] here that we can just copy paste. Put it
[18:03] in here. We got some stickies. We&#39;ve got
[18:06] an AI agent node. If I quickly just move
[18:08] things around, move this to the very
[18:11] top. Okay. We have some Slack trigger.
[18:13] It&#39;s telling us what it&#39;s doing, which
[18:14] is it&#39;s listening for new messages. We
[18:17] have a filtering bot. This message data
[18:19] goes to the AI agent that then calls
[18:22] OpenAI. And what&#39;s cool is if you double
[18:24] click here, um you&#39;ll see it&#39;s already
[18:26] configured it to 40. Okay, in terms of
[18:29] the prompt, if we double click, it has
[18:32] taken the onus of creating a prompt
[18:34] because again that&#39;s part of my
[18:36] instructions. So the prompt engineering
[18:38] is also taken care
[18:39] of. And then the tools are set up. It
[18:42] ends up back in Slack with the Slack
[18:44] response. So, it&#39;s carried out pretty
[18:46] much the entire workflow from such an
[18:49] individually basic command. And that&#39;s
[18:51] pretty much it. So, you can take my
[18:53] prompt, all the knowledgebased stuff
[18:54] that you&#39;ll find in the description
[18:55] below, replicate my cloud project, and
[18:58] start being able to create and replicate
[19:01] existing workflows that you see wherever
[19:03] on the web just through a snapshot. And
[19:05] if you found that valuable, let me know
[19:07] down in the comments below and give a
[19:08] like to the video. It doesn&#39;t only help
[19:10] the video, but the channel as well. And
[19:12] if you are a business owner, CEO, or
[19:14] business leader, and you love tips and
[19:16] tricks just like this, we do things like
[19:18] this on the exclusive content side in
[19:20] our paid early AI adopters community
[19:22] pretty much every week. So check out the
[19:24] second link in the description below,
[19:26] apply, and maybe I&#39;ll see you inside.
[19:27] I&#39;ll see you next time.
