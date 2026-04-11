---
title: "Task Queues Are Replacing Chat Interfaces. Here's Why (plus a Claude Cowork Demo)"
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=h7dbkDcb3hA"
video_id: "h7dbkDcb3hA"
duration: "32:19"
transcript_method: "youtube-captions"
segment_count: 914
char_count: 34721
status: ingested
topics: []
meta_patterns: []
---

# Task Queues Are Replacing Chat Interfaces. Here's Why (plus a Claude Cowork Demo)

**Creator**: nate-jones | **Duration**: 32:19
**URL**: https://www.youtube.com/watch?v=h7dbkDcb3hA
**Transcript**: 914 segments, 34721 chars

## Transcript

10 days. That's how long it took Anthropic to build and ship Claude Co-work after they noticed something their product team was not expecting. Developers were using their own coding tool to organize expense receipts. And really that story of the timeline matters more than anything else about the launch of Claude Co-work this week. It's not the expense receipts that are interesting. It's that the timeline reveals how anthropic and AI native organizations operate and how that operational velocity is becoming as much a competitive advantage as the models themselves. Here's what happened. Claude Code launched as a terminalbased agent coding tool. Engineers used it to write software, debug production issues, refactor legacy code bases. The tool sat in the terminal because that's where developers live. And it worked because the underlying architecture, a sandbox agent that could read files, write files, execute plans, and loop humans in on progress, ad turned out to be a very genuinely reliable model for production work. And so, Enthropic's internal data shows that they saw a 67% increase in merge pull requests per engineer per day. Engineers don't inflate those numbers for fun, guys. If engineers were using it, it was because it was useful. But then the Claude Code product team noticed something in the usage patterns. People were not just writing code. They were pointing Claude code at folders full of receipts, full of other things, full of photos, and asking it to produce expense spreadsheets to categorize the photos from the family vacation. You get the idea. They were asking it to organize messy downloads directories. They were using a coding tool for research synthesis, for transcript analysis, for file management. anything that could be expressed as here are some files here's what I want make it happen now it's easy to think that a PM would treat this as scope creep right instead anthropic shipped the same underlying agent architecture you get with clawed code it's now wrapped in a UI that doesn't require anyone to be technical at all so 10 days from observation to launch but here's what makes this more interesting than pure speed people have been asking for exactly this capability for a while and the moment claude code demonstrated what Agentic AI could do in a terminal non-technical users started saying I'd love to get access to something similar I'm not a coder but demand alone doesn't tell you whether the capability is actually going to work and so what anthropic was looking for was validation and they got it both from their own product data from developers already using cloud code for those tasks but also from what they saw over the holidays with people using generalurpose clawed code agents to do everything from growing their tomato plants to building sensors for their homes to writing and shipping production software to writing and shipping their own to-do lists, right? Things that would help you brief and get ready for your day. And so when they saw all of those different use cases emerging, it became undeniable that what they were sitting on was perhaps the first truly general purpose agent. Now compare their speed of response to classic enterprise software timelines where I mean this is a big company right? Cloud code is running uh in billions of dollars in run rate. A feature request would typically go through months of reviews before anyone write a line of code and obvious market demand would have to be approved and docs would have to be written. It's just not like that. They turned around and said we're going to build it. They use clawed code to build it and then they built co-work in a matter of like a week and a half or so. This matters because the AI race is no longer just about models. It's about who can observe user behavior, recognize what's actually working, and rapidly ship responses before competitors jump in and grab the market. Now, if you were anywhere near tech Twitter over the 2025 holidays, code just was all over your timeline. Engineers were posting about their productivity gains. Founders were building entire products in a weekend. There was an entire Google principal engineer thread that hit five and a half million views because uh Jana said that she had prototyped the product that she spent an entire year on with her team at Google in one coding session with Claude Code. Helen Lee Cup, a mom who voice records ideas during morning walks, not a developer, was writing about how she figured out how to use Cloud Code anyway to build what she wanted. So, it's not that Cloud Code was a secret. It's that the story was getting out and people were figuring out how to use the terminal despite themselves. And that's that's exactly the problem. Non-technical users could see the capability. They could watch engineers accomplish in hours what used to take days. They could read the threads, but it takes a special kind of non-technical user to jump into the terminal, look at the blinking cursor, not get intimidated, and just go with the text. The capability was really visible in testimonials from all kinds of people, but the access was not. And so what gradually emerged over the last month or two is a conviction that what was special about Claude code wasn't the code part at all. The underlying capability, an AI that can read your files, understand your instructions, make a plan, and execute a multi-step workflow that works for almost anything expressable as a task with inputs and outputs. The code ended up being a constraint for branding and an insistence on something that isn't true for general purpose work. And so co-work keeps all the best of clawed code, same architecture and puts it in a friendlier package. You can point it at a folder using an interface, right? You just click and point. You can describe what you want in a chat and walk away. It makes a plan. It shows you the plan. It executes the plan autonomously. It loops you in on the progress just like Claude Code does, but you're not in the terminal. You can queue up multiple tasks and let Claude work through them in parallel, which feels less like a conversation and more like leaving multiple messages for a co-orker. I think this is a very 2026 experience. Instead of saying, I'm going to have a long running iterative chat. I'm going to try and prompt everything exactly right. It's going to look more like I have six different things I want to do. I'm going to type in six different messages and get six different threads going. And the agent is going to work on all of them at once. And here's where the strategic picture gets interesting. Microsoft Copilot, it's a coding agent. It lives in the browser in the cloud. Google Workspace AI lives in the browser and the cloud. There are other tools. Uh do anything is a great example of a new tool that came out in 2026. It lives in the browser. The interaction surface is web applications. The value proposition is we navigate websites on your behalf. Co-work is different because it operates at the file system level and can also use the browser. And so the interaction surface is the folders on your local machine plus anything it can touch on the web. And so the value proposition is that it processes the work artifacts that are already in your world and anything you can touch on the web. That's pretty powerful. In a sense, these aren't directly competing paradigms. They're complimementary. And I think anthropic knows that co-work integrates with claude and chrome precisely in order to bridge those modes. And the file system first design reflects a specific thesis about where your leverage leverage as a worker actually lives. So browser agents are really constrained by the adversarial nature of the web. The web is designed for humans, right? Sites can block them. Captures can stop them. Login flows break them all the time. Every interaction ends up being mediated by interfaces that are designed for us, for people, maintained by companies that are interested in selling to people, and that have really no particular interest at this time in making life easier for AI agents, although that may soon change. The error surface is enormous because you're navigating systems that you can't control. Now, I will say these web agents have made enormous progress in getting more accurate at navigating the web and in reliably asking you to intervene. I see that across not just cloud code in Chrome but across the Atlas browser system across comet across others as well. On the other hand, file system agents operate in territory that is entirely yours. Your files don't have bot detection. Your folders don't require authentication, do they? Most of them. The agent can read, it can write, it can execute with permissions that you explicitly grant. The environment is cooperative rather than adversarial. And that's a huge difference. The strategic implication is is simple, but it kind of pops out once you look at it. Browser agents will always be a little bit brittle for high stakes tasks because the web fights back. The web is adversarial because it needs to be from a security perspective. File system agents can be robust because your local machine is not adversarial. Your local machine is friendly. And so Anthropic's bet is that long-term most valuable knowledge work ends up living in your files. It lives in your docs, your spreadsheets, your notes, your receipts, your recordings, stuff that gets on your hard drive or in your Google Docs. And that processing these artifacts is where the real productivity leverage sits long term. Now, of course, they added in web and you can use web browsing in co-work. I tried it. It works real well. All you have to do is ask co-work to do a task. make sure that you provide it the appropriate login directly in Chrome. You'll see a handy little yellow tab group that belongs to Claude and you're off to the races. And so it's not like Claude is limiting web access. It's more that Claude is recognizing that the leverage that you see comes from owning a friendly place where work happens, which is your file system. It's a non-adversarial space and Claude can touch it really easy. This may force Microsoft's hand. Neuron Daily came out with a prediction that Microsoft will have to launch a desktop native general agent to compete. And I actually think they're underelling it. I think everybody is going to launch a desktop native general agent in 2026. This is the year of the desktop native general agent wars because everybody is going to get disintermediated by this handy little effectively inbox where you can do work. Wouldn't you rather be in one place and say, "Hey, get me my briefing for the day. Hey, get me these three metrics I care about from my dashboards. Hey, make sure my presentation is ready and give it a final polish." And it's all done in one place. You don't have to switch between PowerPoint and Tableau and whatever else you're doing. And Claude for the first time offers that kind of promise with co-work. That's why this is such a huge deal. This is a cruise missile aimed at the heart of knowledge work. Everything you do as a knowledge worker is about file ins and file outs. It's about modifying information. And for a long time in 2024 and 2025, you chatted with something and then you had to take those inputs and outputs and put them somewhere else. Well, not anymore. You can actually directly interact with them. Now, the immediate question that I have and I bet you have is how does that relate to the concerns about sloppy work? We've had a lot of concerns, especially in late 2025, about people just throwing AI work that they didn't check and didn't pay attention to kind of over the wall and saying, "Good luck, y'all." And that's not good citizenship. It's not good to build a community. It doesn't help you in your career. It's slop and it's bad. And so, the interesting thing about co-work is that it's designed to be anti-slop. It doesn't mean you can't misuse it. You can, but it's designed to be more thoughtful. And this deserves some unpacking because the anti-slop thesis is much more interesting than I first thought. And the more I dug into co-work, the more I saw like that thoughtfulness underneath. Ultimately, the work slop crisis isn't about AI being bad at writing. It's about AI making it frictionless to produce very passible looking output that shifts the cognitive burden, the the real thinking you need to do just down the street. And so the person receiving the AI generated memo now has to do the thinking the sender skipped. If you generate your PRD and don't look at it, the engineer has to think about it instead of the PM. And the result is communication that looks like work but functions as a tax on attention. In fact, a study by BetterUp quantified this at nearly 2 hours spent per piece of work slop received, which adds up to a lot of lost productivity. And so Coowworks Design makes several specific bets against this pattern. First, unlike a chat, the core output of this tool is an artifact, not a text blob. When you ask Coowork to process, say, your expense receipts into a spreadsheet, it produces an Excel file with working VLOOKUP formulas and conditional formatting, not a CSV that you then clean up, not markdown you have to copy paste. The output is the deliverable. This matters because work slop typically lives in the gap between the AI generated draft and the usable work product. Co-work tries to close that gap by producing files that don't require the human cleanup pass. Essentially, if you can define your intent well enough, Claude code now dressed up as Claude Co-work is able to do a good enough job that it will get it all the way done. And of course, that depends on your ability to define intent well, which is one of the key skills of 2026. The second thing to call out here is that the architecture is borrowed from a context where slop is immediately fatal. So cloud code users are typically writing software, often production software. If the output required constant cleanup, engineers just would drop it. Uh and yes, there's a lot of talk about how you ship more and more code, you ship more and more bugs. But at the end of the day, you can still use AI tooling to review large masses of AI produced code and get very high quality code results in late 2025, early 2026. Tropics thesis is the same architecture that produces trustworthy code can produce trustworthy knowledge work, anti-slop knowledge work. And so software engineers who already trust Claude code enough to ship what it produces are going to be okay using claude co-work for knowledge work and more importantly the rest of us will too because even if we haven't had the experience of shipping code with cloud code we can understand the idea that the difference between slop and not slop is about work quality and we can appreciate the finished and polished quality of the artifacts you tend to get out of co-work. The third anti-slop element is subtle but important. Claude code keeps you in the steering loop rather than the editing loop. So the interface is designed around task delegation with very visible progress visibility. You literally see check marks down the side, right? It's not about prompt response cycles. You don't just prompt it and see more text appear. It's very different. You describe an outcome and Claude makes a plan. You see the plan. You can redirect mid-execution. One of the nice things that Claude added here is that you can send a message to the agent in the middle of executing and just hit a button that's marked Q and the agent will pick up your piece of context and add it into the longunning work without interrupting itself. This fix fixes a major blind spot that I've seen in a lot of AI tooling where you have to either interrupt a valuable piece of work or wait for it to finish to add an important piece of context. Not with Claude co-work as long as you can describe an outcome, Claude can write the plan. You can see the plan. You can redirect it. And the cognitive work that we're describing here is on you, but it happens at the top. It's the steering work. It's articulating what you want. It's not downstream cleaning up what you got. As long as you can tell Claude co-work about what you want to build, whether that's expense reports or whether that's give me specific feedback on my day ahead or give me a productivity review based on looking at my calendar or please help me prepare a presentation for this upcoming meeting. Claude Claude Co-work can do it. I will also say that the file system sandbox forces specificity and this is a safety feature with co-work that I really like. You cannot vaguely ask co-work to help with your expenses. You must point it at real folders that contain real files. You manually touch the mouse and say, "Please add expenses folder." And this constraint means that AI must operate on real work artifacts rather than just generating content randomly in a vacuum. And so the input is really concrete and the output has something that it can attach to and be faithful to. This is going to reduce hallucination, right? And there's a fifth element that's easy to miss. The task Q model changes the social dynamics of AI assisted work. I'll get into that. In chatbased AI, you're constantly prompting. You're evaluating. You're prompting. You're evaluating. You go back and forth. The rhythm encourages fast and shallow interactions. It's like batting a tennis ball back and forth. You prompt. You get text. You prompt. Again, co-work's design encourages deeper thought fundamentally. And I love that. with deeper thought about what you want, deeper thought about what you're willing to step away from and let Claude co-work on for a while. The AI is not waiting for your next message anymore. It's executing a plan. And this shifts the cognitive load from, well, what do I prompt next? Do I remember the right prompt to what do I actually need done? Which is by far the more interesting question. And that requires thoughtfulness. And thoughtfulness is anti-slop. Now, will all of this actually solve work slop? Look, it's too early to tell. It just came out this week. But I will say this is the kind of anti-slop architecture we need to see more of. And I think the critical piece to call out is that we are seeing finally a jump into general purpose agents for non-technical mainstream users. We are going to see a lot more of these in 2026. Clearly Claude got out in front with their initial release here. I expect releases from chat GPT soon. I expect releases from Google soon. I expect releases from Microsoft. And that brings us to a safety piece. How safe are these? I get asked this a lot. I think Anthropic safety disclosure is worth looking at a little bit more closely because it's unusually direct and the implications cut in multiple directions. Anthropic warns about prompt injections right up front. And prompt injections are attempts by attackers to alter clawed co-works plans through content it might encounter on the internet. Right. And what they share is that they've built defenses against prompt injections, but that they cannot promise that it will always be safe. One of the things that's really interesting is it looks like they've built an intermediation summary zone or summary workflow stage between raw internet input received and what the agent gets to complete the task. And if that's the case, it gives us a sense of how the anthropic team is thinking about multi-layered defenses from prompt injection. You can imagine it as a series of walls and you're trying to keep hostile bots and hostile actors out. Now, in the short term, cautious enterprises may decide that having anything that has any kind of prompt injection warning is too risky. But to be honest with you, I kind of doubt it because the promise of accelerating tasks that used to take days into hours or less is so great that people are willing to trade that. And in practice, as someone who has used Claude Code a fair bit and now Claude Co-work, the instincts that that AI has are pretty solid. It asks you for permission when it wants to touch uh website pages and interact with them. It does not tend to take actions like login or payment unless you specifically authorize it. And even then on high consequence actions like payments, it usually says you got to do this. I can't do this. And so the constitutional AI principles that embody Claude or that the anthropic team built into Claude help Claude to make good common sense choices on the wild and woolly world of the internet. And the file system sandbox also helps. If you are mounting files locally, you are putting them into not the direct file access. So I want to be clear if you're not a technical person, a sandbox is a safe and secure container. You can put a file and copy it. Like let's say I have my receipts, the actual receipt file can be my receipts folder on my hard drive. If I copy that folder into my sandbox, I can manipulate it. I can do things on it and it's very low consequence because it's a copy in a secure container and I'm not touching the core folder. Now, this doesn't mean that cloud can't touch your folder. So, just because it mounts it in a sandbox and containerizes the folder doesn't mean that it doesn't touch your hard drives. It does. It can make changes in your files. That's part of the value. But the idea that you are securely containerizing the area of operation matters a lot when you are building with a tool that is even potentially vulnerable. Let me dive just a little bit more into a story I mentioned briefly earlier about Jana Dogen who is a Google principal engineer and who posted that post that got 5 and a half million views. Uh what she said is I'm not joking and this isn't funny. We've been trying to build distributed agent orchestrators at Google since last year. There are various options. Not everyone's aligned. I gave Claude code a description of the problem. It generated what we actually built last year in an hour. Now, it turned out that what Claude Code built was a prototype. It wasn't the full production code. So, I don't want to overstate the promise. But the idea that Claude Code could look at the problem set, independently derive the correct solution, and begin to prototype that quickly should not be underestimated. That is still a very meaningful step toward what we would typically describe as artificial general intelligence. This same power is now available in co-work. Co-work is just a nice user interface dressed up over claude code. And so if you've had friends that are telling you that you ought to use cloud code and you've been resisting, you've been like, I'm not in the terminal. I'm not a terminal person. Use claude co-work now. It's in it's in the max plan for now. And that's only available for individuals. It's an alpha. I get all of that. It's in the expensive plan. But Anthropic historically brings that down market. It brings it into enterprise. It brings it into teams quickly. I am trying to give you a sense of what you can actually do with it so that you can understand it. At the end of this video, I'll go ahead and share my screen and show you what Claude co-works like so that you can get a look for yourself. But before we do that, I want to get a little bit at where this tells us we're going in 2026. First, I think that this is showing us that the chatbot was a transitional form. It existed because LLMs could generate text before they could reliably execute plans. I don't think that's true anymore. Claude code has proved that agentic execution works for not just software engineering, but for everything else. And if that hypothesis holds, several things follow, each with implications that go much deeper than you might think at first. One, I think task cues are going to start to replace chat interfaces in 2026. And that's much more than a UX change. The co-work model where you queue up tasks, you let Claude work through them in parallel, you get notified on completion, is closer to like an email or a ticketing system than a conversation. But the deeper shift is in the relationship between the human and the AI. So chat interfaces position the AI as a respondent. You ask, it answers, you ask again. Task cues, you're positioning the AI as your worker. You're delegating, it executes, and you're reviewing. So this is not about asynchronous versus synchronous interaction. It's about whether you're having a conversation with the AI or whether you're managing it like an employee. And the management framing changes what kinds of tasks feel appropriate to delegate like how much context you provide up front, how you evaluate the output. People manage workers differently than they converse with their adviserss. And as AI interfaces shift toward the management model, I would expect behaviors the way we use AI to shift accordingly. I will also call out that verification is going to continue to be a scarce skill because the second order effects on organizational structure of everybody having cla co-work have not been at all thought through. When AI can execute multi-step workflows in parallel across multiple threads across the whole organization, the bottleneck shifts to knowing whether the output is correct and whether you formed the task correctly. And so what Jean Dogen was talking about applies more broadly. The tool amplifies people who already know what they're doing while potentially misleading people who don't. This is why I think AI fluency is such a critical piece in 2026. Consider what this means for how teams are structured. Junior roles have traditionally served as execution layers. You give them well-defined tasks. They complete them and senior people review them. If AI handles execution, we're going to continue to see pressure on junior roles where firms that are not creative are going to say they don't need juniors and firms that are more creative are going to say we need AI native juniors who can teach us new patterns of work. Organizations that figure out how to develop domain expertise and anti-slot mechanisms in an AI augmented environment are going to have a very significant competitive advantage over those that accidentally eliminate their career development pipeline by overindexing toward killing their junior roles. And that's going to be a temptation because the power of this system, it's it's addictive. It's hard to step away from. You can do so much with the co-work interface. I do think the file system and browser convergence is inevitable, but I think the way we get there matters. So co-work plus browser automation covers most knowledge work in principle. The next step is going to be seamless handoffs. How do you start with files, push to web services, pull results back to files, share with a colleague? And so the integration points between file system agents, browser agents, things are going to break there, right? I know that my uh Google calendar has trouble recognizing Claude even when I give it a login. It works sometimes, it doesn't work other times. I think that might be intentional on Google's part. Whoever is able to solve these integration problems is going to be able to get a unified execution layer in place that is going to unlock a ton of productivity. My guess is that this will probably take a little bit longer than people expect because the hard part isn't actually making any type of agent work in isolation. It's making them work together reliably enough that users don't have to think about what mode they're in. If I were looking to the future, I'd watch for two big signals coming up. The first is how quickly does Microsoft or OpenAI or Google respond? If any of them ships something quickly in the next 2 to 3 weeks, the next month, my sense is not only does the competitive picture remain open, but everyone is seeing signals on the ground that this is enough the future of work that we have to pay attention. The other thing I would look at is unit economics and pricing. We are in a world where we are blessed with so many models. Do we start to see clawed co-work come down into more economical price tiers? perhaps with a dumber model, perhaps with a limited number of max queries, whatever it takes. But ultimately, I think the incentive to give everyone these kinds of tools is very very high. As long as users read us, can show that we use those tools to produce useful products and as long as companies can be confident that the touches on the web and the integrations with the rest of corporate systems are secure enough that the work can be usefully done and usefully saved and secured. I fully expect those kinks to be worked out as Anthropic inevitably pulls this over into their teams and enterprise products. I'll close with a deeper question. What happens when a product team can observe a user behavior on Monday and ship a fullyfledged product on Thursday? That's the thing that keeps sticking with me. I started with that and that's what I keep thinking. This took 10 days and now I'm going to show you. It took 10 days to build. They built it with cloud code. What does it look like? This is cloud code work. All right. So you see that they're giving you affordances right away. And by affordances, I mean they're giving you suggestions. You can create a file, you can crunch data, you can make a prototype, you can send a message. Uh yes, it will really send a message. You can prep for the day or organize files. That's just a preview. This progress bar is where you'll see actual plans getting made. The artifacts are where you'll see uh artifacts getting made. Let me give you an example of what we could do here. Please produce uh a full PowerPoint describing the launch of Claude Co-work. Conduct all the necessary research you need to do so. And when it's complete, please place it in my downloads folder as a PPTX file. Then I go work in files. I'll choose a different folder. This is my downloads file. I'll just stick it in there. I'm going to allow claude code to change it. And that's it. I can just tell it to go. And you see how it's starting to get into this. And you're going to start to see a pro plan and progress bar being made here. Notice that it's using those Claude skills that we've talked about before. Now we have a plan. It's already researched Claude co-work details. Check. I can ask a question or recommend a change right here. If I want to change that, I can read the PPTX skill documentation. So, I can change that. I can change the way it makes a PowerPoint skill. Uh, and it's now designing a presentation structure and aesthetic. I can give it feedback on the aesthetic right here. You see how different this is from the chat. Like before in chat, I would have to say, wait, stop. I want it to be like a modern presentation or whatever. Not anymore. I can just adjust it. It's giving me a suggested slide structure. I'm going to say, please add a note on nonobvious insights and implications to the presentation. And it's right in the middle of the work. I'm just going to throw it in. You can see where it's working. It's got a shared CSS file it's working on here. You can see the context it's got. It's now starting to create the slides. It's using these skills. I love the transparency here. And if you want to do something else, you can immediately just slip over here, open up a new task and say, can you please look at my Google calendar and give me an assessment how busy I am and what would be the most useful shift to my daily ritual uh to prepare more effectively for work. And this is all happening in the background, right? Like the claude is still working on the other presentation. So, I can just start this one off. And I have my Google calendar open in my browser. And so, it's looking through. It's going to continue doing its analysis. We can go back. Now, we're going to check back in on all of the work that Claude is doing here. So, you see I have multiple agents running, right? Like Claude is doing research on the one hand for Claude Co-work to build me a slide presentation. The same Claude Co-work is also working to analyze my schedule. And you can do five, six, seven of these. Now, I asked it to be a little bit impersonal here, so I don't reveal people's private information, but it talks about how I'm busy, how I need to defend my breakfast block, how I need to defend my wake window, and having a time to work out every day is a good thing. Now, I will be honest with you, these are not absolutely groundbreaking assessments. The thing that's significant is I can do this in parallel looking at the calendar, come back, it'll give me assessments all at the same time that it's working on my PowerPoint deck. And that's the thing I want you to grab a hold of. And yes, it's still working on the PowerPoint deck. And you can actually see all of the different artifacts it's created along the way. Let's start a new task. Now I'm looking for duplicate files and downloads. Where have I got extra files and it has access to the downloads folder cuz I gave it access to that at the beginning of the task and it's just running. Still working on creating slides. I'll go back to the downloads. This is what the future of work looks like. It looks like jumping back and forth uh between these different tabs. You can see what it's running here now. It's copying the PowerPoint to the downloads folder. Look at that. It gives me my sources, all the things it looked at. And it's going to give me a handy little button to open in PowerPoint. And yes, it really did make the PowerPoint. It made it from scratch. You can go through and see the key fold features. You can see how it works, real world use cases, availability and pricing, non-obvious insights, which it added in the middle bigger picture. This was all done in the middle of doing three or four other things. This is what I mean by the future is here. So, if you're not using co-work, you are missing out on the future of work. I've got a whole guide on it up on Substack. This is by far the most exciting thing that I have seen come out of AI in the last few months. And I know that people will accuse me of being hypy, but the thing that makes this a breakthrough is that it's not for technical people. Everybody can use this. There was no code in what I described. It was just asking the the AI agent to do stuff for you, and it did it. And I know not everybody has the max plan, so I wanted to give you that hands-on look so you can see it for yourself. Good luck out there and get on Claude Co-work. It's totally worth it.

## Timed Segments

[0:00] 10 days. That&#39;s how long it took
[0:02] Anthropic to build and ship Claude
[0:04] Co-work after they noticed something
[0:06] their product team was not expecting.
[0:07] Developers were using their own coding
[0:09] tool to organize expense receipts. And
[0:12] really that story of the timeline
[0:13] matters more than anything else about
[0:15] the launch of Claude Co-work this week.
[0:17] It&#39;s not the expense receipts that are
[0:19] interesting. It&#39;s that the timeline
[0:20] reveals how anthropic and AI native
[0:23] organizations operate and how that
[0:25] operational velocity is becoming as much
[0:27] a competitive advantage as the models
[0:29] themselves. Here&#39;s what happened. Claude
[0:31] Code launched as a terminalbased agent
[0:34] coding tool. Engineers used it to write
[0:36] software, debug production issues,
[0:38] refactor legacy code bases. The tool sat
[0:40] in the terminal because that&#39;s where
[0:42] developers live. And it worked because
[0:44] the underlying architecture, a sandbox
[0:47] agent that could read files, write
[0:49] files, execute plans, and loop humans in
[0:51] on progress, ad turned out to be a very
[0:53] genuinely reliable model for production
[0:55] work. And so, Enthropic&#39;s internal data
[0:58] shows that they saw a 67% increase in
[1:02] merge pull requests per engineer per
[1:04] day. Engineers don&#39;t inflate those
[1:06] numbers for fun, guys. If engineers were
[1:08] using it, it was because it was useful.
[1:10] But then the Claude Code product team
[1:13] noticed something in the usage patterns.
[1:15] People were not just writing code. They
[1:18] were pointing Claude code at folders
[1:20] full of receipts, full of other things,
[1:22] full of photos, and asking it to produce
[1:24] expense spreadsheets to categorize the
[1:25] photos from the family vacation. You get
[1:27] the idea. They were asking it to
[1:29] organize messy downloads directories.
[1:31] They were using a coding tool for
[1:33] research synthesis, for transcript
[1:35] analysis, for file management. anything
[1:37] that could be expressed as here are some
[1:39] files here&#39;s what I want make it happen
[1:42] now it&#39;s easy to think that a PM would
[1:44] treat this as scope creep right instead
[1:47] anthropic shipped the same underlying
[1:50] agent architecture you get with clawed
[1:52] code it&#39;s now wrapped in a UI that
[1:54] doesn&#39;t require anyone to be technical
[1:56] at all so 10 days from observation to
[2:00] launch but here&#39;s what makes this more
[2:02] interesting than pure speed people have
[2:04] been asking for exactly this capability
[2:06] for a while and the moment claude code
[2:09] demonstrated what Agentic AI could do in
[2:11] a terminal non-technical users started
[2:13] saying I&#39;d love to get access to
[2:15] something similar I&#39;m not a coder but
[2:17] demand alone doesn&#39;t tell you whether
[2:19] the capability is actually going to work
[2:21] and so what anthropic was looking for
[2:24] was validation and they got it both from
[2:27] their own product data from developers
[2:28] already using cloud code for those tasks
[2:31] but also from what they saw over the
[2:34] holidays with people using generalurpose
[2:38] clawed code agents to do everything from
[2:40] growing their tomato plants to building
[2:42] sensors for their homes to writing and
[2:45] shipping production software to writing
[2:48] and shipping their own to-do lists,
[2:50] right? Things that would help you brief
[2:52] and get ready for your day. And so when
[2:54] they saw all of those different use
[2:56] cases emerging, it became undeniable
[2:58] that what they were sitting on was
[3:01] perhaps the first truly general purpose
[3:03] agent. Now compare their speed of
[3:05] response to classic enterprise software
[3:08] timelines where I mean this is a big
[3:09] company right? Cloud code is running uh
[3:11] in billions of dollars in run rate. A
[3:13] feature request would typically go
[3:14] through months of reviews before anyone
[3:17] write a line of code and obvious market
[3:19] demand would have to be approved and
[3:21] docs would have to be written. It&#39;s just
[3:23] not like that. They turned around and
[3:24] said we&#39;re going to build it. They use
[3:26] clawed code to build it and then they
[3:27] built co-work in a matter of like a week
[3:29] and a half or so. This matters because
[3:31] the AI race is no longer just about
[3:34] models. It&#39;s about who can observe user
[3:36] behavior, recognize what&#39;s actually
[3:38] working, and rapidly ship responses
[3:41] before competitors jump in and grab the
[3:43] market. Now, if you were anywhere near
[3:45] tech Twitter over the 2025 holidays,
[3:48] code just was all over your timeline.
[3:49] Engineers were posting about their
[3:51] productivity gains. Founders were
[3:52] building entire products in a weekend.
[3:54] There was an entire Google principal
[3:56] engineer thread that hit five and a half
[3:57] million views because uh Jana said that
[4:00] she had prototyped the product that she
[4:03] spent an entire year on with her team at
[4:06] Google in one coding session with Claude
[4:08] Code. Helen Lee Cup, a mom who voice
[4:10] records ideas during morning walks, not
[4:13] a developer, was writing about how she
[4:14] figured out how to use Cloud Code anyway
[4:16] to build what she wanted. So, it&#39;s not
[4:18] that Cloud Code was a secret. It&#39;s that
[4:20] the story was getting out and people
[4:23] were figuring out how to use the
[4:24] terminal despite themselves. And that&#39;s
[4:27] that&#39;s exactly the problem.
[4:29] Non-technical users could see the
[4:31] capability. They could watch engineers
[4:32] accomplish in hours what used to take
[4:34] days. They could read the threads, but
[4:36] it takes a special kind of non-technical
[4:39] user to jump into the terminal, look at
[4:41] the blinking cursor, not get
[4:42] intimidated, and just go with the text.
[4:45] The capability was really visible in
[4:47] testimonials from all kinds of people,
[4:49] but the access was not. And so what
[4:51] gradually emerged over the last month or
[4:53] two is a conviction that what was
[4:56] special about Claude code wasn&#39;t the
[4:57] code part at all. The underlying
[4:59] capability, an AI that can read your
[5:01] files, understand your instructions,
[5:03] make a plan, and execute a multi-step
[5:05] workflow that works for almost anything
[5:08] expressable as a task with inputs and
[5:10] outputs. The code ended up being a
[5:12] constraint for branding and an
[5:14] insistence on something that isn&#39;t true
[5:16] for general purpose work. And so co-work
[5:19] keeps all the best of clawed code, same
[5:21] architecture and puts it in a friendlier
[5:23] package. You can point it at a folder
[5:25] using an interface, right? You just
[5:27] click and point. You can describe what
[5:29] you want in a chat and walk away. It
[5:31] makes a plan. It shows you the plan. It
[5:34] executes the plan autonomously. It loops
[5:35] you in on the progress just like Claude
[5:38] Code does, but you&#39;re not in the
[5:39] terminal. You can queue up multiple
[5:41] tasks and let Claude work through them
[5:43] in parallel, which feels less like a
[5:45] conversation and more like leaving
[5:46] multiple messages for a co-orker. I
[5:48] think this is a very 2026 experience.
[5:50] Instead of saying, I&#39;m going to have a
[5:52] long running iterative chat. I&#39;m going
[5:54] to try and prompt everything exactly
[5:55] right. It&#39;s going to look more like I
[5:57] have six different things I want to do.
[5:59] I&#39;m going to type in six different
[6:00] messages and get six different threads
[6:02] going. And the agent is going to work on
[6:04] all of them at once. And here&#39;s where
[6:06] the strategic picture gets interesting.
[6:08] Microsoft Copilot, it&#39;s a coding agent.
[6:10] It lives in the browser in the cloud.
[6:12] Google Workspace AI lives in the browser
[6:14] and the cloud. There are other tools. Uh
[6:16] do anything is a great example of a new
[6:18] tool that came out in 2026. It lives in
[6:21] the browser. The interaction surface is
[6:23] web applications. The value proposition
[6:25] is we navigate websites on your behalf.
[6:28] Co-work is different because it operates
[6:30] at the file system level and can also
[6:33] use the browser. And so the interaction
[6:35] surface is the folders on your local
[6:37] machine plus anything it can touch on
[6:39] the web. And so the value proposition is
[6:41] that it processes the work artifacts
[6:43] that are already in your world and
[6:45] anything you can touch on the web.
[6:47] That&#39;s pretty powerful. In a sense,
[6:49] these aren&#39;t directly competing
[6:51] paradigms. They&#39;re complimementary. And
[6:54] I think anthropic knows that co-work
[6:56] integrates with claude and chrome
[6:58] precisely in order to bridge those
[7:00] modes. And the file system first design
[7:02] reflects a specific thesis about where
[7:04] your leverage leverage as a worker
[7:06] actually lives. So browser agents are
[7:09] really constrained by the adversarial
[7:11] nature of the web. The web is designed
[7:13] for humans, right? Sites can block them.
[7:15] Captures can stop them. Login flows
[7:17] break them all the time. Every
[7:19] interaction ends up being mediated by
[7:21] interfaces that are designed for us, for
[7:23] people, maintained by companies that are
[7:25] interested in selling to people, and
[7:27] that have really no particular interest
[7:29] at this time in making life easier for
[7:31] AI agents, although that may soon
[7:32] change. The error surface is enormous
[7:35] because you&#39;re navigating systems that
[7:36] you can&#39;t control. Now, I will say these
[7:39] web agents have made enormous progress
[7:41] in getting more accurate at navigating
[7:43] the web and in reliably asking you to
[7:45] intervene. I see that across not just
[7:46] cloud code in Chrome but across the
[7:49] Atlas browser system across comet across
[7:51] others as well. On the other hand, file
[7:53] system agents operate in territory that
[7:55] is entirely yours. Your files don&#39;t have
[7:58] bot detection. Your folders don&#39;t
[8:00] require authentication, do they? Most of
[8:01] them. The agent can read, it can write,
[8:03] it can execute with permissions that you
[8:05] explicitly grant. The environment is
[8:08] cooperative rather than adversarial. And
[8:11] that&#39;s a huge difference. The strategic
[8:13] implication is is simple, but it kind of
[8:16] pops out once you look at it. Browser
[8:18] agents will always be a little bit
[8:21] brittle for high stakes tasks because
[8:23] the web fights back. The web is
[8:26] adversarial because it needs to be from
[8:28] a security perspective. File system
[8:30] agents can be robust because your local
[8:33] machine is not adversarial. Your local
[8:35] machine is friendly. And so Anthropic&#39;s
[8:38] bet is that long-term most valuable
[8:41] knowledge work ends up living in your
[8:42] files. It lives in your docs, your
[8:44] spreadsheets, your notes, your receipts,
[8:46] your recordings, stuff that gets on your
[8:48] hard drive or in your Google Docs. And
[8:50] that processing these artifacts is where
[8:51] the real productivity leverage sits long
[8:54] term. Now, of course, they added in web
[8:57] and you can use web browsing in co-work.
[9:00] I tried it. It works real well. All you
[9:03] have to do is ask co-work to do a task.
[9:06] make sure that you provide it the
[9:07] appropriate login directly in Chrome.
[9:10] You&#39;ll see a handy little yellow tab
[9:12] group that belongs to Claude and you&#39;re
[9:14] off to the races. And so it&#39;s not like
[9:17] Claude is limiting web access. It&#39;s more
[9:19] that Claude is recognizing that the
[9:23] leverage that you see comes from owning
[9:25] a friendly place where work happens,
[9:29] which is your file system. It&#39;s a
[9:31] non-adversarial space and Claude can
[9:33] touch it really easy. This may force
[9:35] Microsoft&#39;s hand. Neuron Daily came out
[9:37] with a prediction that Microsoft will
[9:39] have to launch a desktop native general
[9:41] agent to compete. And I actually think
[9:44] they&#39;re underelling it. I think
[9:45] everybody is going to launch a desktop
[9:47] native general agent in 2026. This is
[9:50] the year of the desktop native general
[9:52] agent wars because everybody is going to
[9:55] get disintermediated
[9:58] by this handy little effectively inbox
[10:02] where you can do work. Wouldn&#39;t you
[10:04] rather be in one place and say, &quot;Hey,
[10:06] get me my briefing for the day. Hey, get
[10:09] me these three metrics I care about from
[10:11] my dashboards. Hey, make sure my
[10:13] presentation is ready and give it a
[10:15] final polish.&quot; And it&#39;s all done in one
[10:17] place. You don&#39;t have to switch between
[10:18] PowerPoint and Tableau and whatever else
[10:20] you&#39;re doing. And Claude for the first
[10:23] time offers that kind of promise with
[10:25] co-work. That&#39;s why this is such a huge
[10:27] deal. This is a cruise missile aimed at
[10:31] the heart of knowledge work. Everything
[10:33] you do as a knowledge worker is about
[10:35] file ins and file outs. It&#39;s about
[10:38] modifying information. And for a long
[10:40] time in 2024 and 2025, you chatted with
[10:44] something and then you had to take those
[10:46] inputs and outputs and put them
[10:47] somewhere else. Well, not anymore. You
[10:50] can actually directly interact with
[10:51] them. Now, the immediate question that I
[10:54] have and I bet you have is how does that
[10:57] relate to the concerns about sloppy
[10:59] work? We&#39;ve had a lot of concerns,
[11:00] especially in late 2025, about people
[11:02] just throwing AI work that they didn&#39;t
[11:05] check and didn&#39;t pay attention to kind
[11:07] of over the wall and saying, &quot;Good luck,
[11:09] y&#39;all.&quot; And that&#39;s not good citizenship.
[11:12] It&#39;s not good to
[11:14] build a community. It doesn&#39;t help you
[11:16] in your career. It&#39;s slop and it&#39;s bad.
[11:19] And so, the interesting thing about
[11:21] co-work is that it&#39;s designed to be
[11:24] anti-slop. It doesn&#39;t mean you can&#39;t
[11:26] misuse it. You can, but it&#39;s designed to
[11:29] be more thoughtful. And this deserves
[11:30] some unpacking because the anti-slop
[11:32] thesis is much more interesting than I
[11:34] first thought. And the more I dug into
[11:36] co-work, the more I saw like that
[11:38] thoughtfulness underneath. Ultimately,
[11:39] the work slop crisis isn&#39;t about AI
[11:41] being bad at writing. It&#39;s about AI
[11:43] making it frictionless to produce very
[11:46] passible looking output that shifts the
[11:48] cognitive burden, the the real thinking
[11:51] you need to do just down the street. And
[11:53] so the person receiving the AI generated
[11:55] memo now has to do the thinking the
[11:58] sender skipped. If you generate your PRD
[12:00] and don&#39;t look at it, the engineer has
[12:02] to think about it instead of the PM. And
[12:03] the result is communication that looks
[12:06] like work but functions as a tax on
[12:09] attention. In fact, a study by BetterUp
[12:12] quantified this at nearly 2 hours spent
[12:14] per piece of work slop received, which
[12:16] adds up to a lot of lost productivity.
[12:19] And so Coowworks Design makes several
[12:20] specific bets against this pattern.
[12:22] First, unlike a chat, the core output of
[12:26] this tool is an artifact, not a text
[12:29] blob. When you ask Coowork to process,
[12:32] say, your expense receipts into a
[12:33] spreadsheet, it produces an Excel file
[12:36] with working VLOOKUP formulas and
[12:38] conditional formatting, not a CSV that
[12:41] you then clean up, not markdown you have
[12:43] to copy paste. The output is the
[12:44] deliverable. This matters because work
[12:47] slop typically lives in the gap between
[12:49] the AI generated draft and the usable
[12:51] work product. Co-work tries to close
[12:53] that gap by producing files that don&#39;t
[12:55] require the human cleanup pass.
[12:57] Essentially, if you can define your
[12:59] intent well enough, Claude code now
[13:02] dressed up as Claude Co-work is able to
[13:04] do a good enough job that it will get it
[13:07] all the way done. And of course, that
[13:08] depends on your ability to define intent
[13:10] well, which is one of the key skills of
[13:12] 2026. The second thing to call out here
[13:14] is that the architecture is borrowed
[13:16] from a context where slop is immediately
[13:18] fatal. So cloud code users are typically
[13:21] writing software, often production
[13:23] software. If the output required
[13:25] constant cleanup, engineers just would
[13:27] drop it. Uh and yes, there&#39;s a lot of
[13:29] talk about how you ship more and more
[13:31] code, you ship more and more bugs. But
[13:33] at the end of the day, you can still use
[13:37] AI tooling to review large masses of AI
[13:40] produced code and get very high quality
[13:42] code results in late 2025, early 2026.
[13:45] Tropics thesis is the same architecture
[13:47] that produces trustworthy code can
[13:50] produce trustworthy knowledge work,
[13:52] anti-slop knowledge work. And so
[13:53] software engineers who already trust
[13:55] Claude code enough to ship what it
[13:57] produces are going to be okay using
[14:02] claude co-work for knowledge work and
[14:04] more importantly the rest of us will too
[14:07] because even if we haven&#39;t had the
[14:08] experience of shipping code with cloud
[14:10] code we can understand the idea that the
[14:13] difference between slop and not slop is
[14:15] about work quality and we can appreciate
[14:18] the finished and polished quality of the
[14:19] artifacts you tend to get out of
[14:21] co-work. The third anti-slop element is
[14:23] subtle but important. Claude code keeps
[14:25] you in the steering loop rather than the
[14:27] editing loop. So the interface is
[14:29] designed around task delegation with
[14:32] very visible progress visibility. You
[14:34] literally see check marks down the side,
[14:35] right? It&#39;s not about prompt response
[14:38] cycles. You don&#39;t just prompt it and see
[14:39] more text appear. It&#39;s very different.
[14:41] You describe an outcome and Claude makes
[14:44] a plan. You see the plan. You can
[14:46] redirect mid-execution. One of the nice
[14:48] things that Claude added here is that
[14:50] you can send a message to the agent in
[14:52] the middle of executing and just hit a
[14:54] button that&#39;s marked Q and the agent
[14:56] will pick up your piece of context and
[14:58] add it into the longunning work without
[15:00] interrupting itself. This fix fixes a
[15:03] major blind spot that I&#39;ve seen in a lot
[15:04] of AI tooling where you have to either
[15:06] interrupt a valuable piece of work or
[15:08] wait for it to finish to add an
[15:10] important piece of context. Not with
[15:12] Claude co-work as long as you can
[15:13] describe an outcome, Claude can write
[15:16] the plan. You can see the plan. You can
[15:18] redirect it. And the cognitive work that
[15:20] we&#39;re describing here is on you, but it
[15:22] happens at the top. It&#39;s the steering
[15:23] work. It&#39;s articulating what you want.
[15:25] It&#39;s not downstream cleaning up what you
[15:28] got. As long as you can tell Claude
[15:30] co-work about what you want to build,
[15:33] whether that&#39;s expense reports or
[15:34] whether that&#39;s give me specific feedback
[15:37] on my day ahead or give me a
[15:39] productivity review based on looking at
[15:41] my calendar or please help me prepare a
[15:44] presentation for this upcoming meeting.
[15:46] Claude Claude Co-work can do it. I will
[15:48] also say that the file system sandbox
[15:51] forces specificity and this is a safety
[15:53] feature with co-work that I really like.
[15:54] You cannot vaguely ask co-work to help
[15:57] with your expenses. You must point it at
[15:59] real folders that contain real files.
[16:01] You manually touch the mouse and say,
[16:03] &quot;Please add expenses folder.&quot; And this
[16:05] constraint means that AI must operate on
[16:08] real work artifacts rather than just
[16:10] generating content randomly in a vacuum.
[16:12] And so the input is really concrete and
[16:14] the output has something that it can
[16:16] attach to and be faithful to. This is
[16:17] going to reduce hallucination, right?
[16:19] And there&#39;s a fifth element that&#39;s easy
[16:20] to miss. The task Q model changes the
[16:24] social dynamics of AI assisted work.
[16:26] I&#39;ll get into that. In chatbased AI,
[16:29] you&#39;re constantly prompting. You&#39;re
[16:31] evaluating. You&#39;re prompting. You&#39;re
[16:32] evaluating. You go back and forth. The
[16:34] rhythm encourages fast and shallow
[16:35] interactions. It&#39;s like batting a tennis
[16:37] ball back and forth. You prompt. You get
[16:39] text. You prompt. Again, co-work&#39;s
[16:41] design encourages deeper thought
[16:43] fundamentally. And I love that. with
[16:45] deeper thought about what you want,
[16:47] deeper thought about what you&#39;re willing
[16:49] to step away from and let Claude co-work
[16:51] on for a while. The AI is not waiting
[16:54] for your next message anymore. It&#39;s
[16:57] executing a plan. And this shifts the
[16:59] cognitive load from, well, what do I
[17:02] prompt next? Do I remember the right
[17:04] prompt to what do I actually need done?
[17:06] Which is by far the more interesting
[17:08] question. And that requires
[17:09] thoughtfulness. And thoughtfulness is
[17:11] anti-slop. Now, will all of this
[17:12] actually solve work slop? Look, it&#39;s too
[17:15] early to tell. It just came out this
[17:16] week. But I will say this is the kind of
[17:19] anti-slop architecture we need to see
[17:21] more of. And I think the critical piece
[17:23] to call out is that we are seeing
[17:26] finally a jump into general purpose
[17:29] agents for non-technical mainstream
[17:32] users. We are going to see a lot more of
[17:34] these in 2026. Clearly Claude got out in
[17:37] front with their initial release here. I
[17:39] expect releases from chat GPT soon. I
[17:42] expect releases from Google soon. I
[17:43] expect releases from Microsoft. And that
[17:45] brings us to a safety piece. How safe
[17:47] are these? I get asked this a lot. I
[17:49] think Anthropic safety disclosure is
[17:51] worth looking at a little bit more
[17:52] closely because it&#39;s unusually direct
[17:54] and the implications cut in multiple
[17:56] directions. Anthropic warns about prompt
[17:59] injections right up front. And prompt
[18:01] injections are attempts by attackers to
[18:03] alter clawed co-works plans through
[18:05] content it might encounter on the
[18:07] internet. Right. And what they share is
[18:09] that they&#39;ve built defenses against
[18:10] prompt injections, but that they cannot
[18:13] promise that it will always be safe. One
[18:15] of the things that&#39;s really interesting
[18:16] is it looks like they&#39;ve built an
[18:19] intermediation
[18:20] summary zone or summary workflow stage
[18:24] between raw internet input received and
[18:28] what the agent gets to complete the
[18:29] task. And if that&#39;s the case, it gives
[18:32] us a sense of how the anthropic team is
[18:35] thinking about multi-layered defenses
[18:36] from prompt injection. You can imagine
[18:38] it as a series of walls and you&#39;re
[18:39] trying to keep hostile bots and hostile
[18:41] actors out. Now, in the short term,
[18:44] cautious enterprises may decide that
[18:46] having anything that has any kind of
[18:48] prompt injection warning is too risky.
[18:50] But to be honest with you, I kind of
[18:52] doubt it because the promise of
[18:55] accelerating tasks that used to take
[18:58] days into hours or less is so great that
[19:02] people are willing to trade that. And in
[19:05] practice, as someone who has used Claude
[19:07] Code a fair bit and now Claude Co-work,
[19:09] the instincts that that AI has are
[19:12] pretty solid. It asks you for permission
[19:14] when it wants to touch uh website pages
[19:17] and interact with them. It does not tend
[19:19] to take actions like login or payment
[19:21] unless you specifically authorize it.
[19:24] And even then on high consequence
[19:26] actions like payments, it usually says
[19:27] you got to do this. I can&#39;t do this. And
[19:29] so the constitutional AI principles that
[19:32] embody Claude or that the anthropic team
[19:35] built into Claude help Claude to make
[19:38] good common sense choices on the wild
[19:40] and woolly world of the internet. And
[19:42] the file system sandbox also helps. If
[19:44] you are mounting files locally, you are
[19:48] putting them into not the direct file
[19:51] access. So I want to be clear if you&#39;re
[19:52] not a technical person, a sandbox is a
[19:54] safe and secure container. You can put a
[19:57] file and copy it. Like let&#39;s say I have
[19:59] my receipts, the actual receipt file can
[20:01] be my receipts folder on my hard drive.
[20:03] If I copy that folder into my sandbox, I
[20:06] can manipulate it. I can do things on it
[20:08] and it&#39;s very low consequence because
[20:10] it&#39;s a copy in a secure container and
[20:12] I&#39;m not touching the core folder. Now,
[20:14] this doesn&#39;t mean that cloud can&#39;t touch
[20:16] your folder. So, just because it mounts
[20:17] it in a sandbox and containerizes the
[20:19] folder doesn&#39;t mean that it doesn&#39;t
[20:22] touch your hard drives. It does. It can
[20:24] make changes in your files. That&#39;s part
[20:25] of the value. But the idea that you are
[20:28] securely containerizing the area of
[20:30] operation matters a lot when you are
[20:33] building with a tool that is even
[20:36] potentially vulnerable. Let me dive just
[20:38] a little bit more into a story I
[20:40] mentioned briefly earlier about Jana
[20:42] Dogen who is a Google principal engineer
[20:44] and who posted that post that got 5 and
[20:46] a half million views. Uh what she said
[20:47] is I&#39;m not joking and this isn&#39;t funny.
[20:49] We&#39;ve been trying to build distributed
[20:51] agent orchestrators at Google since last
[20:53] year. There are various options. Not
[20:55] everyone&#39;s aligned. I gave Claude code a
[20:57] description of the problem. It generated
[20:59] what we actually built last year in an
[21:01] hour. Now, it turned out that what
[21:04] Claude Code built was a prototype. It
[21:06] wasn&#39;t the full production code. So, I
[21:07] don&#39;t want to overstate the promise. But
[21:09] the idea that Claude Code could look at
[21:11] the problem set, independently derive
[21:13] the correct solution, and begin to
[21:15] prototype that quickly should not be
[21:17] underestimated. That is still a very
[21:19] meaningful step toward what we would
[21:21] typically describe as artificial general
[21:23] intelligence. This same power is now
[21:26] available in co-work. Co-work is just a
[21:29] nice user interface dressed up over
[21:31] claude code. And so if you&#39;ve had
[21:33] friends that are telling you that you
[21:35] ought to use cloud code and you&#39;ve been
[21:37] resisting, you&#39;ve been like, I&#39;m not in
[21:38] the terminal. I&#39;m not a terminal person.
[21:40] Use claude co-work now. It&#39;s in it&#39;s in
[21:42] the max plan for now. And that&#39;s only
[21:44] available for individuals. It&#39;s an
[21:45] alpha. I get all of that. It&#39;s in the
[21:47] expensive plan. But Anthropic
[21:49] historically brings that down market. It
[21:51] brings it into enterprise. It brings it
[21:53] into teams quickly. I am trying to give
[21:55] you a sense of what you can actually do
[21:56] with it so that you can understand it.
[21:58] At the end of this video, I&#39;ll go ahead
[22:00] and share my screen and show you what
[22:03] Claude co-works like so that you can get
[22:05] a look for yourself. But before we do
[22:07] that, I want to get a little bit at
[22:09] where this tells us we&#39;re going in 2026.
[22:13] First, I think that this is showing us
[22:15] that the chatbot was a transitional
[22:17] form. It existed because LLMs could
[22:19] generate text before they could reliably
[22:22] execute plans. I don&#39;t think that&#39;s true
[22:24] anymore. Claude code has proved that
[22:26] agentic execution works for not just
[22:28] software engineering, but for everything
[22:30] else. And if that hypothesis holds,
[22:32] several things follow, each with
[22:33] implications that go much deeper than
[22:35] you might think at first. One, I think
[22:37] task cues are going to start to replace
[22:39] chat interfaces in 2026. And that&#39;s much
[22:42] more than a UX change. The co-work model
[22:44] where you queue up tasks, you let Claude
[22:46] work through them in parallel, you get
[22:48] notified on completion, is closer to
[22:50] like an email or a ticketing system than
[22:52] a conversation. But the deeper shift is
[22:55] in the relationship between the human
[22:56] and the AI. So chat interfaces position
[22:59] the AI as a respondent. You ask, it
[23:01] answers, you ask again. Task cues,
[23:04] you&#39;re positioning the AI as your
[23:05] worker. You&#39;re delegating, it executes,
[23:07] and you&#39;re reviewing. So this is not
[23:10] about asynchronous versus synchronous
[23:12] interaction. It&#39;s about whether you&#39;re
[23:14] having a conversation with the AI or
[23:15] whether you&#39;re managing it like an
[23:17] employee. And the management framing
[23:19] changes what kinds of tasks feel
[23:21] appropriate to delegate like how much
[23:23] context you provide up front, how you
[23:25] evaluate the output. People manage
[23:27] workers differently than they converse
[23:29] with their adviserss. And as AI
[23:30] interfaces shift toward the management
[23:32] model, I would expect behaviors the way
[23:34] we use AI to shift accordingly. I will
[23:36] also call out that verification is going
[23:38] to continue to be a scarce skill because
[23:41] the second order effects on
[23:43] organizational structure of everybody
[23:45] having cla co-work have not been at all
[23:47] thought through. When AI can execute
[23:50] multi-step workflows in parallel across
[23:52] multiple threads across the whole
[23:54] organization, the bottleneck shifts to
[23:56] knowing whether the output is correct
[23:58] and whether you formed the task
[24:00] correctly. And so what Jean Dogen was
[24:02] talking about applies more broadly. The
[24:04] tool amplifies people who already know
[24:06] what they&#39;re doing while potentially
[24:08] misleading people who don&#39;t. This is why
[24:10] I think AI fluency is such a critical
[24:12] piece in 2026. Consider what this means
[24:14] for how teams are structured. Junior
[24:16] roles have traditionally served as
[24:17] execution layers. You give them
[24:19] well-defined tasks. They complete them
[24:21] and senior people review them. If AI
[24:23] handles execution, we&#39;re going to
[24:25] continue to see pressure on junior roles
[24:27] where firms that are not creative are
[24:29] going to say they don&#39;t need juniors and
[24:31] firms that are more creative are going
[24:32] to say we need AI native juniors who can
[24:34] teach us new patterns of work.
[24:36] Organizations that figure out how to
[24:37] develop domain expertise and anti-slot
[24:40] mechanisms in an AI augmented
[24:42] environment are going to have a very
[24:43] significant competitive advantage over
[24:45] those that accidentally eliminate their
[24:47] career development pipeline by
[24:49] overindexing toward killing their junior
[24:51] roles. And that&#39;s going to be a
[24:53] temptation because the power of this
[24:55] system, it&#39;s it&#39;s addictive. It&#39;s hard
[24:57] to step away from. You can do so much
[24:59] with the co-work interface. I do think
[25:01] the file system and browser convergence
[25:03] is inevitable, but I think the way we
[25:05] get there matters. So co-work plus
[25:07] browser automation covers most knowledge
[25:09] work in principle. The next step is
[25:11] going to be seamless handoffs. How do
[25:13] you start with files, push to web
[25:15] services, pull results back to files,
[25:17] share with a colleague? And so the
[25:19] integration points between file system
[25:21] agents, browser agents, things are going
[25:23] to break there, right? I know that my uh
[25:25] Google calendar has trouble recognizing
[25:28] Claude even when I give it a login. It
[25:30] works sometimes, it doesn&#39;t work other
[25:31] times. I think that might be intentional
[25:33] on Google&#39;s part. Whoever is able to
[25:35] solve these integration problems is
[25:36] going to be able to get a unified
[25:38] execution layer in place that is going
[25:40] to unlock a ton of productivity. My
[25:42] guess is that this will probably take a
[25:44] little bit longer than people expect
[25:45] because the hard part isn&#39;t actually
[25:47] making any type of agent work in
[25:49] isolation. It&#39;s making them work
[25:50] together reliably enough that users
[25:53] don&#39;t have to think about what mode
[25:55] they&#39;re in. If I were looking to the
[25:56] future, I&#39;d watch for two big signals
[25:58] coming up. The first is how quickly does
[26:00] Microsoft or OpenAI or Google respond?
[26:03] If any of them ships something quickly
[26:06] in the next 2 to 3 weeks, the next
[26:08] month, my sense is not only does the
[26:10] competitive picture remain open, but
[26:12] everyone is seeing signals on the ground
[26:14] that this is enough the future of work
[26:15] that we have to pay attention. The other
[26:17] thing I would look at is unit economics
[26:19] and pricing. We are in a world where we
[26:21] are blessed with so many models. Do we
[26:23] start to see clawed co-work come down
[26:26] into more economical price tiers?
[26:28] perhaps with a dumber model, perhaps
[26:30] with a limited number of max queries,
[26:31] whatever it takes. But ultimately, I
[26:33] think the incentive to give everyone
[26:35] these kinds of tools is very very high.
[26:38] As long as users read us, can show that
[26:42] we use those tools to produce useful
[26:44] products and as long as companies can be
[26:46] confident that the touches on the web
[26:48] and the integrations with the rest of
[26:50] corporate systems are secure enough that
[26:52] the work can be usefully done and
[26:55] usefully saved and secured. I fully
[26:58] expect those kinks to be worked out as
[27:00] Anthropic inevitably pulls this over
[27:02] into their teams and enterprise
[27:03] products. I&#39;ll close with a deeper
[27:05] question. What happens when a product
[27:08] team can observe a user behavior on
[27:10] Monday and ship a fullyfledged product
[27:12] on Thursday? That&#39;s the thing that keeps
[27:14] sticking with me. I started with that
[27:16] and that&#39;s what I keep thinking. This
[27:18] took 10 days and now I&#39;m going to show
[27:20] you. It took 10 days to build. They
[27:21] built it with cloud code. What does it
[27:23] look like? This is cloud code work. All
[27:26] right. So you see that they&#39;re giving
[27:27] you affordances right away. And by
[27:28] affordances, I mean they&#39;re giving you
[27:30] suggestions. You can create a file, you
[27:32] can crunch data, you can make a
[27:34] prototype, you can send a message. Uh
[27:36] yes, it will really send a message. You
[27:38] can prep for the day or organize files.
[27:40] That&#39;s just a preview. This progress bar
[27:42] is where you&#39;ll see actual plans getting
[27:44] made. The artifacts are where you&#39;ll see
[27:46] uh artifacts getting made. Let me give
[27:48] you an example of what we could do here.
[27:50] Please produce uh a full PowerPoint
[27:53] describing the launch of Claude Co-work.
[27:58] Conduct all the necessary research you
[28:01] need
[28:03] to do so.
[28:05] And when it&#39;s complete, please place it
[28:09] in my downloads folder as a PPTX file.
[28:12] Then I go work in files. I&#39;ll choose a
[28:14] different folder. This is my downloads
[28:16] file. I&#39;ll just stick it in there. I&#39;m
[28:18] going to allow claude code to change it.
[28:20] And that&#39;s it. I can just tell it to go.
[28:22] And you see how it&#39;s starting to get
[28:23] into this. And you&#39;re going to start to
[28:24] see a pro plan and progress bar being
[28:27] made here. Notice that it&#39;s using those
[28:29] Claude skills that we&#39;ve talked about
[28:30] before. Now we have a plan. It&#39;s already
[28:33] researched Claude co-work details.
[28:35] Check. I can ask a question or recommend
[28:38] a change right here. If I want to change
[28:39] that, I can read the PPTX skill
[28:42] documentation. So, I can change that. I
[28:44] can change the way it makes a PowerPoint
[28:46] skill. Uh, and it&#39;s now designing a
[28:48] presentation structure and aesthetic. I
[28:49] can give it feedback on the aesthetic
[28:50] right here. You see how different this
[28:52] is from the chat. Like before in chat, I
[28:55] would have to say, wait, stop. I want it
[28:57] to be like a modern presentation or
[28:59] whatever. Not anymore. I can just adjust
[29:01] it. It&#39;s giving me a suggested slide
[29:03] structure. I&#39;m going to say, please add
[29:06] a note on nonobvious
[29:08] insights and implications to the
[29:11] presentation. And it&#39;s right in the
[29:12] middle of the work. I&#39;m just going to
[29:13] throw it in. You can see where it&#39;s
[29:15] working. It&#39;s got a shared CSS file it&#39;s
[29:17] working on here. You can see the context
[29:19] it&#39;s got. It&#39;s now starting to create
[29:20] the slides. It&#39;s using these skills. I
[29:23] love the transparency here. And if you
[29:25] want to do something else, you can
[29:27] immediately just slip over here, open up
[29:29] a new task and say, can you please look
[29:32] at my Google calendar and give me an
[29:36] assessment how busy I am and what would
[29:40] be the most useful shift to my daily
[29:43] ritual
[29:45] uh to prepare more effectively for work.
[29:47] And this is all happening in the
[29:48] background, right? Like the claude is
[29:50] still working on the other presentation.
[29:51] So, I can just start this one off. And I
[29:53] have my Google calendar open in my
[29:54] browser. And so, it&#39;s looking through.
[29:56] It&#39;s going to continue doing its
[29:58] analysis. We can go back. Now, we&#39;re
[30:00] going to check back in on all of the
[30:03] work that Claude is doing here. So, you
[30:05] see I have multiple agents running,
[30:07] right? Like Claude is doing research on
[30:08] the one hand for Claude Co-work to build
[30:10] me a slide presentation. The same Claude
[30:12] Co-work is also working to analyze my
[30:15] schedule. And you can do five, six,
[30:17] seven of these. Now, I asked it to be a
[30:18] little bit impersonal here, so I don&#39;t
[30:20] reveal people&#39;s private information, but
[30:22] it talks about how I&#39;m busy, how I need
[30:23] to defend my breakfast block, how I need
[30:26] to defend my wake window, and having a
[30:29] time to work out every day is a good
[30:31] thing. Now, I will be honest with you,
[30:33] these are not absolutely groundbreaking
[30:34] assessments. The thing that&#39;s
[30:35] significant is I can do this in parallel
[30:37] looking at the calendar, come back,
[30:39] it&#39;ll give me assessments all at the
[30:40] same time that it&#39;s working on my
[30:42] PowerPoint deck. And that&#39;s the thing I
[30:44] want you to grab a hold of. And yes,
[30:45] it&#39;s still working on the PowerPoint
[30:46] deck. And you can actually see all of
[30:48] the different artifacts it&#39;s created
[30:50] along the way. Let&#39;s start a new task.
[30:52] Now I&#39;m looking for duplicate files and
[30:53] downloads. Where have I got extra files
[30:55] and it has access to the downloads
[30:57] folder cuz I gave it access to that at
[30:58] the beginning of the task and it&#39;s just
[31:00] running. Still working on creating
[31:01] slides. I&#39;ll go back to the downloads.
[31:03] This is what the future of work looks
[31:05] like. It looks like jumping back and
[31:07] forth uh between these different tabs.
[31:09] You can see what it&#39;s running here now.
[31:11] It&#39;s copying the PowerPoint to the
[31:13] downloads folder. Look at that. It gives
[31:15] me my sources, all the things it looked
[31:17] at. And it&#39;s going to give me a handy
[31:19] little button to open in PowerPoint. And
[31:20] yes, it really did make the PowerPoint.
[31:22] It made it from scratch. You can go
[31:24] through and see the key fold features.
[31:26] You can see how it works, real world use
[31:29] cases,
[31:30] availability and pricing, non-obvious
[31:33] insights, which it added in the middle
[31:35] bigger picture. This was all done in the
[31:37] middle of doing three or four other
[31:38] things. This is what I mean by the
[31:40] future is here. So, if you&#39;re not using
[31:43] co-work, you are missing out on the
[31:45] future of work. I&#39;ve got a whole guide
[31:46] on it up on Substack. This is by far the
[31:50] most exciting thing that I have seen
[31:52] come out of AI in the last few months.
[31:54] And I know that people will accuse me of
[31:56] being hypy, but the thing that makes
[31:58] this a breakthrough is that it&#39;s not for
[32:00] technical people. Everybody can use
[32:02] this. There was no code in what I
[32:04] described. It was just asking the the AI
[32:07] agent to do stuff for you, and it did
[32:09] it. And I know not everybody has the max
[32:11] plan, so I wanted to give you that
[32:12] hands-on look so you can see it for
[32:13] yourself. Good luck out there and get on
[32:15] Claude Co-work. It&#39;s totally worth it.
