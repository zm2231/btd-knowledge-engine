---
title: "Claude Mythos Changes Everything. Your AI Stack Isn't Ready."
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=hV5_XSEBZNg"
video_id: "hV5_XSEBZNg"
duration: "31:21"
transcript_method: "youtube-captions"
segment_count: 907
char_count: 34732
status: ingested
topics: []
meta_patterns: []
---

# Claude Mythos Changes Everything. Your AI Stack Isn't Ready.

**Creator**: nate-jones | **Duration**: 31:21
**URL**: https://www.youtube.com/watch?v=hV5_XSEBZNg
**Transcript**: 907 segments, 34732 chars

## Transcript

There are moments in AI when everything changes and we just had one of those the last few days. Claude Mythos leaked. Now Claude Mythos is the first model as far as we know that has been trained on Nvidia's new GB chips. It is a massive model. It is a step forward. Anthropic has confirmed its existence and they've given it a new lineage name. So it won't be called Sonnet. It won't be called Opus. It appears to be called Capy Bara. I don't know why we've switched to furry animals, but here we are. This is the biggest model in the world. It is by most measures according to Claude and it is going to be the most powerful model in the world. But don't just take my word for it. Don't just take anthropics word for how powerful it is. Look at what security researchers themselves are saying. Security researchers themselves are saying that cloud mythos is terrifyingly good at finding vulnerabilities in your own infrastructure better than a human. In fact, one of the most experienced security researchers in the world stood up at a conference in San Francisco in the past few days and said that Claude Mythos immediately found zeroday vulnerabilities in Ghost, which is a 50,000 star GitHub repo that has never had major issues before. And as soon as Mythos was let loose on it, it found a bunch of issues that even the world's best security researchers haven't found. And this is why Anthropic is taking the unusual step of allowing security researchers to dig into Mythos to battle test Mythos against some of the most popular utilities on the internet and to harden up their defenses ahead of time because as soon as Mythos is released, Mythos is going to be able to act as a threat to any IT repo out there and identify vulnerabilities that even good security researchers haven't been able to find, which immediately suggests that the first thing you should do if you are in IT or security as soon as mythos comes out is to say let's battle test it against our own systems and let's see what vulnerabilities it finds. That is that is job number one day zero you got to do that. But let's go beyond that. Let's look at what Claude mythos means. I want to be really honest with you. This model is one of the inflection points in 2026 that we all need to pay attention to. This is a chance to catch up before the train leaves the station. And I know that you may hear from me, things are getting faster. Things are getting faster a lot. But guess what? That's what it's like when you're on an exponential curve. Things keep getting faster. And I'm here to tell you, this moment before Mythos release, and it may release as soon as next month or the month after, this moment is your chance to get things figured out before it arrives and upends everything. And I don't just mean about security. I mean how you build stuff, how you prepare etc. Why is that? Well, when models get bigger, they force you to simplify. They force you to think what can I delete about my systems and my practices because the model can do so much more now that that it couldn't do before. And that is what we have to understand. That is what we would call the bitter lesson of building with LLMs. We as humans think we have a lot of value to add to these models. We can add our judgment. we can complexify. We can add a lot of scaffolding and systems around these models and it will make them better. And as they get more powerful, the bitter lesson is that simpler works best. And so I'm going to go through and in this video I'm going to lay out some of the things you should be checking ahead of time. But there's a larger thing that you should take away, which is simply be sure that you are taking the idea that the LLM can do a lot more seriously. And we'll get into what that is. We'll cover mythos when it comes out. We'll talk about all of that. But for now, as we go through the next few questions, as you audit yourself, as you think about whether you're ready for mythos, that's the larger lesson. But anyone can tell you that. What are the what are the specific questions that help you know if you're ready for a big model change? If you're ready for effectively a step change. And by the way, I know that models come out all the time, but step changes are more rare. And what we get when we do a pre-training run on GB300s and it's much larger and more powerful underneath is we get the scaling law in effect. Right? So what I'm trying to tell you is yes there'll be another model along from somebody in the next week or so but until mythos comes out and there will be other models that are in that lineage that come out from other model makers that are also big that are also trained on GB300 those are the step change that we're going to see in the first half of the year. And so you need to learn to differentiate between the models that are 5 10 15% better and the models that are significantly better, a step change better. And that's why this is a big deal because we are going to have another lurch up where the models are going to get significantly stronger in the next few months. And and you need to get ready for that now. Okay, here's your questions. I'm going to give you four specific things to look at that are going to likely break when Claude Mythos comes out and you need to take them seriously. If you are building in AI at all, this is going to come up. Number one is your prompt scaffolding. How you think about prompting to drive results. Ask yourself, and this is not a per prompt document question. This is a per line question. Really dig in. Is this instruction here because the model needs it or is it here because I needed the model to need it? This is the question that I want to really dig into. Anthropic's recommendation is very unambiguous here. Consider adding complexity only when it demonstrabably improves outcomes. And this is true not just for anthropic models. Open AI's codeex guide tells us something similar when it says just tell it what you need without writing long instructions. This is going to be more and more the case, right? We are going to more and more be asked to communicate with the model what and why we need something in the end and less and less about how. So for example, let's say you have a customer support agent with a 3000 token system prompt and half of it is procedural, right? Like first classify the intent, then check your response for hallucinated URLs, then do X, then do Y. That sequence was written down because the model would skip knowledge checks enough of the time that it was needed. Think about whether you're really going to need that. When a model gets two or three times smarter, you may be able to delete that like 30 40 50% of that 3,000 token prompt because so much of the procedural is just not needed when the model is more intelligent. Let's say you're not building agents. What's the implication for you if you're just chatting? If you're using co-work and you're wanting to get work done and you're less technical, it's pretty simple. Ask for what you want in the end and explain why in plain language. And you don't need to elaborate on how to get there. As long as the model has access to the inputs it needs, the data it needs, it's going to get there on its own. Increasingly across 2026, this is the bitter lesson we have to learn. All of the way we have described process, the things that are precious to us are things that are associated with our ability to execute work in a certain series of steps and somehow we've decided that's an important reflection of our work identity. What cloud mythos and similar models are going to teach us is that that doesn't matter anymore and what matters is the outcome and our ability to name the outcome and let go of the process. You got to let go of the process with these models. And that, by the way, also goes for when you're auditing. Let's say you have a business process that you thought you couldn't make better. I would bet you if you give it to Mythos or maybe you give it to Andre Carpathy's Auto Research, you're going to find ways to make that better that a human can't figure out. The LLMs are now better than us at finding efficient ways through process and we should stop specifying. So that's point number one. Check your prompts. Stop oversp specifying. Lesson number two is about retrieval architecture and memory. You're basically asking how is the model changing the way it relates to memory based on the model's gain and capabilities. And so another way of looking at it is to say in the past we had to carry a lot of the logic for retrieval on our side so the model would retrieve correctly. But really how much of my retrieval logic should belong to the model if the model's smarter. This is a much more nuanced take than takes like that say sort of rag is dead. I've heard I've heard people like beating on retrieval augmented generation a lot. Think more broadly. If you're in a large context window situation, if you have like a million tokens, 10 million tokens, 100 million tokens, increasingly you should start to think about how the model wants to handle retrieval for that situation and how the model thinks it can handle it efficiently. And you should think less about predetermining how all of that works. Now, there are going to be pieces you're going to have to decide from the get-go. You'll have to decide what goes into the initial context window. you're going to have to decide whether the model is going to be invited to look at particular repos etc. But once you've made those initial decisions, a lot of the rest of it with these very powerful models essentially relies on you being able to present a really well organized searchable repo of some sort. Maybe it's documents, maybe it's code, etc. Maybe it's the file system on your computer if you're non-technical. And then you need to say you go ahead and have a look. You look for what you want. And you need to trust the model to find what it needs to find. And there again, you see the theme. The theme is we have to let go so the model can do more. If we want to take advantage of the power and that is going to be one of the one of the job skills that is hard to measure in 2026 is the ability of someone to see a new model coming like mythos and to say I can see in advance. I understand how to model the improvements that an new intelligence is going to bring to the table and I'm going to change my workflow. I'm going to be ready so that I cut down the prompt where I need to. I'm going to be ready so I adjust my retrieval strategy and I'm not oversp specifying retrieval. I'm going to let the model pick what it wants to pick out of this file system, out of this repo, etc. Because that is where we need to go. We need to assume that the model is increasingly going to be better than we are at deciding what to put in its context window if we can specify where it should go and we can have a directed prompt and we can understand with the model what we want to accomplish. And so our goal increasingly is to say here is the goal, go get it done and then to measure success. And that's it. That is the goal. And the smarter the model gets the more our work resolves down to that. and we need to get out of the way. And that in my observation is really hard. That's why it's called the bitter lesson because we humans like to think that our contributions here are special. That we have a way of doing scaffolding. That we have a way of doing rag. That our special system prompt. No, let it go. That was for that moment. That was for that model. And we need to start to think increasingly about how we put these models in the heart of our workflows in ways that allow them to do their most powerful work in a direction we set in alignment with where we want to go. And our job is to point them in that direction very very clear. So retrieval architecture is another example of that. You just have to be very clear. Here are the resources you can access. Here is the goal and increasingly the model is going to figure that out. Now, do I have specific advice for you because Mythos is already out in the world and I've tested against 20 different things. I do not. We will get to that when it comes out. But I do have very very high confidence that Mythos is going to be much better at this, much better at intelligently filling its context window than previous models because that is exactly what you get with the scaling law. When you get more intelligence, we we have seen over and over again, you get better at using your context window. This is going to be another jump in that direction. And it is a good chance to remember one of the big lessons that we've should have learned over and over again over the last two years. As models improve, this stuff gets simpler. Okay. On the simplification train, number three, look at how much you have to hardcode domain knowledge versus how much the model can infer. In other words, when you're thinking about these things that you want to emphasize over and over again to a model, ask yourself, which of these business rules did I write down? Because the model could not infer this from context, and which of these can I actually let go of? And this is true for us non-technical folks when we look at how we work with co-work as well, because how often are you writing down this is what I do, this is my role, and maybe you have a saved prompt for that, or maybe you have it in memory somewhere. you're increasingly not going to need to do that because the model is going to infer it from the context you give so reliably that you'll be fine. Another example is uh let's say you have a house style for writing your client reports. The model can just infer that at a very high fidelity from a given example report. That's the whole point of the scaling law is that intelligence gets better at reliably answering your query. In this case, a query about constructing a report will be more reliably answered in the voice of that. And so you should count your rules. You should count the things you have to remind the model of. Ask yourself, do you really need to fill the token window for better models with this? Be prepared to let go of some of that. And look, this is also hard for me. This is not something that I'm saying isn't hard for all of us. I had an example recently where there was a a prompt that I was using around how I do research. And I'd been using it for a couple of model generations. And one day I forgot to put the full 10-line prompt in and I just put a oneliner and said go research and I got a better result back because the 10line prompt and this is a micro example, right? The 10line prompt was more detailed about methodology than it needed to be and was over constraining my model. It had hard-coded my domain knowledge about what resources to look up, etc. And that had been really good two model generations ago. And now I needed to let it go. Now I needed to let it go. I needed to just let the model go find the right resources and come back with a research report. And so as much as the art of prompting for the first couple years of LLM was about what you put in, increasingly the art of prompting is about what you leave out. And it's still an art. It's still hard. You still have to prompt. And the skill is valuable. It's just that the skill is evolving because the models are getting better. Okay. Question number four, this one's all about, did the model do what we asked it to do? Can we sniff check it and show that it worked? Now, if you're doing non-technical work, the answer is going to be increasingly clear. You're going to look at it, say, "Wow, that looks really good." And move on. And a lot of people are going to do that. And the art of checking non-technical work is increasingly going to involve you having a very high standard. One of the challenges of working with good models is learning to make sure our bar is really high. Don't be afraid just because this model is really good to look at something it produces like a PowerPoint deck or an Excel and say this isn't quite right. You got 99% of this right, but this is the 1% I want fixed. Apply your high standard. That's how we get good work. That's how we don't pass slop on. But if you're building software, this is one of those things you have to apply a lot of judgment to because 99% and verification checks in software is a very different game from 85% in verification checks. And we are in a world now where we are closer to 99% right more of the time than we are to 85%. And mythos is just going to push us more in that direction. Which suggests to me that we need to be really smart about writing our emails. I would say we are moving toward a point where we want one eval gate at the end of the software process and it needs to check absolutely everything and send things back when it doesn't work because if we do intermediate evals along the way net there's enough right about what these systems build it's just not worth it. You don't want to mess around with a more complicated pipeline. Simplify, simplify. Just write the eval at the end. And when you write the eval at the end, make sure that it tests absolutely everything. Your functional requirements, your non-functional requirements. And then make sure when it comes back that you are sure if you read that eval script and all the tests pass that you're confident it's good. Because increasingly we need to be at a point where we're not the ones who are the bottleneck for telling whether a particular piece of software reliably calls dependencies and whether the code is clean and has appropriate exception handling, whether edge cases are handled. Like that all needs to go into automated evals or else we're going to be overwhelmed by the number of pieces of software we can produce and the amount of checks we have to do. Like there are already conversations being had in San Francisco around the fact that humans cannot review all the code and we have to find ways to start to scale out of ourselves. We are the bottleneck. Mythos is going to make that worse. If you are depending on humans and human handoffs as a key part of your agentic software development pipeline, you're in trouble. And there is sort of an analogy there for non- tech folks. If you are depending on humans as a handoff between PowerPoint and Excel and you're doing AI for both of those pieces, you should be looking seriously at whether you can automate those non- tech artifact handoffs because Mythos can help you do that. And I'm not talking about Mythos as if this is the only model that will ever be able to help you with this. I'm saying it is the first leaked model of a new class. And we're going to see similar models come out from other hyperscalers. Google will have one. Open AAI will have one. They will also probably drop them in the next couple of months. We will all together regardless of the underlying model we use be in this new world and we need to think about that. Do you know another reason why we need to think about simplicity? It's very it's very obvious these are not cheap models. Enthropic basically confirmed that these are going to be very expensive models to run. You want to be very efficient with them. You want to make sure they're using the tokens as efficiently as possible. You don't want to clutter them up with a bunch of human described process. You want to use them as effectively as you can. I am willing to bet you that Mythos when it launches is only going to initially be available for max plan users for CLA because it's so expensive to serve. And we are headed toward a world where increasingly the first and best models are only going to be available on those premium plans because of how expensive they are to build and train and run and serve. And so we need to think to ourselves like if you're thinking about your future, about your career, you need to ask yourself basically, am I in a position where I can invest in intelligence in one of these plans in order to get access to this and then I will leverage it to the hilt and I will make it worth it. I will tell Claude Mythos, save me my 200 bucks. And you can do this now. You don't have to wait for Mythos. Just tell your AI, look at my recurring subscriptions for my household and find me $200 in savings. Most households in America can find $200 a month in savings somewhere from some of their subscriptions just because the subscription economy latches onto our credit cards like baracles and we just need to find some space and LLM's right now without waiting for claude mythos are already very good at that. And so this is one of those things where think about the kind of intelligence you want to purchase and the timeline you want to buy it on because the people who are able to get Claude mythos now if you have a plan to leverage it effectively are going to be ahead. There's just no other way to put it. they have access to a better brain. Now, that doesn't mean that Mythos will always be expensive. We have the Vera Rubin chipset coming up behind the GB300. It's a whole new generation of chip from Nvidia. And as that starts to come online and even better models start to come out and it becomes cheaper and cheaper to serve Mythos. We are going to be in a position in a few months, 6 months maybe less, where you start to see the cost come down and you start to instead see more expensive models come out that are even better than Mythos. And so really when you start to think about what you're investing in, if you think about the plans you're purchasing and what you want to invest in, this goes for corporations buying for for their employees, it goes for individuals, think about it as what trajectory, what curve do I want to be on? Do I want to pay to be on the cutting edge curve and I'm going to use it to the hilt and I'm going to build really cool things and I'm going to learn and I'm going to leverage it to 10x myself, etc. or do I want to be a step behind on like a pro plan or whatever the 20 buck a month plan is? And then in that case, I'm willing to wait and I'm not going to be the first. I'm willing to take the hit on my career for that. I'm willing to take the hit for my employees if I'm a company. And in that situation, I should not expect productivity that will resemble what people who are on those cutting edge plans get. And that's a very serious thing. You might think, oh, but talent will make up for it. No, human talent will not. Like increasingly the whole point of human talent is to simplify and get out of the way so that AI can do its thing. And the bigger the models get, the more that becomes obvious. And Mythos is one of those moments when I think it's going to be very very obvious that we are in a different world and that the people who have that $200 a month plan are going to effectively have superpowers. And so think about whether you want those superpowers or not. I'm not saying there's an easy answer. I know $200 a month is a lot for a lot of us. And I know it's a lot for companies like if you're paying for it by token, it's also not going to be cheap. Think about whether it's worth it. Think about whether you can leverage it. Think about your multimodel strategy if you're a company. What are you using for mythosshaped problems? Do you have a reliable way to see what is a complicated problem that is worth putting a cutting edge model on versus not? And by the way, if you're thinking I'm kidding about the gain in capability, we had another one of those stock market spook events where like security stocks for cyber security firms dropped between five and 9% as soon as Claude Mythos was even leaked. The entire world is starting to take AI models seriously because they have seen enough evidence to show what these models are capable of doing. And so yes, I fully expect that the leaked blog post that came out on the anthropic servers is broadly correct. It is going to be a big jump in coding. It is going to be a big jump in the ability to produce excellent artifacts like Excel and PowerPoint. Is going to be a big jump in the ability to reason. It is going to be a massive jump in cyber security and more. We should take that seriously. When you look at what mythos is going to mean, you should assume it means a step change that's coming in the next month or two. I've been telling you 2026 isn't slowing down. This is an inflection point. Pay attention. So, what does a simpler system look like? What does a mythos ready system look like? I think a lot of the time like the larger public conversation has been around the security thing. It's been around, oh, this is a big model and those are fair to call out, but I want to go past that. I want to look at what it means to have a well architected system that lets you sleep at night before mythos comes. Number one, make sure you have very clear outcome specifications. Specify your intent in a way that makes sense for a smarter model. Let me give you an example. Back in the customer service world, let's say what you want to specify is resolve this customer's issue using our knowledge base, our policies, and our account history. And you make sure the model has access to that. The customer should leave satisfied, and the resolution should comply with our return policy. That is actually a decent outcome specification. Compare that to what most production systems I see look like. It's essentially a process, right? Well, first classify the intent into one of 14 categories. Then route to the appropriate handler. Then retrieve the top five knowledgebased articles using hybrid search with alpha equals.7. Then generate a response using only the retrieved context. That is what most of the prompts that I look at today look like. You see the difference between that and the outcome one. The outcome one just says I need to resolve the issue. It needs to be in line with this policy. Here's where the policies are. You may not be able to do that today with today's models. But be ready to do that. Get ready now because it's going to take time to rearchitect your systems. Start to think about how you need to prioritize your work to get set. Number two, think about your constraints and guard rails. These are things that must be true regardless of how the model achieves the outcome. Because when you give the model more flexibility, you need to be more clear about your constraints and guardrails. For example, never disclose customer financial data. That's a pretty good customer guard rail. Always verify refund eligibility against our policy. There's another one. These should survive model upgrades because they represent ongoing business rules that you want any model to follow regardless of how smart it gets. Get good at those. Number three, think about the tools your model can use. You want to make sure you have an excellent set of tools that have the right capabilities where a model can look at the tool set and say, I know what this does. I can use it and it's going to be effective at what it does. So, right, maybe it's search your knowledge base. Maybe it's look up an account. Maybe it's process a refund. The model is going to decide increasingly what to call and in what order and it's going to be up to you to define what the tools do and to be effective about that and present those tools effectively. So put some work into your tool definitions. And then number four, and then last but not least, if you're thinking about larger aentic software, we're going to go back to multi-agent coordination patterns, which I've talked about before. I've talked about cursor's idea that you have like a two agent hierarchy and that's much more effective than an agent swarm. You now need to be thinking about long-term planning with agents and what it means to let an agent like Mythos spin up agents from a variety of capability sets to get a task done. Like you should be in a position where you understand how to present an outcome spec that mythos can take. How you then present a overall set of evals Mythos has to work against and how you give Mythos a tool suite that allows it to spin up a lot of instantiated agents to execute against that plan. How it has places to track progress and how it can measure itself with eval. You need to take the idea that Mythos is the planner of your software more seriously. And again, I don't just mean Mythos. Any of these next generation models is going to do this. Codeex is going to drop a new model not too long from now. And it's also going to be more and more able to do this. And all we're doing is extending the current pattern we see at factory.ai, at Cursor, etc. And we're saying these models are more capable. You're going to give them more to work with. You're going to be more confident that they will get it done well. And you're going to make sure the eval allow them to assess themselves in a way that is reliable so you can trust the results. And by the way, you can also have a different instantiated Mythos model assess the work of that other model so that you have a second pair of eyes, right? You don't need to trust the model that did the work to do the eval as well. But really increasingly once you can specify the outputs and the guardrails and the tools and you just give the model a sense of the harness and architecture to get to the outcome, you're going to step out of the way. And that's increasingly going to be the case not just for technical work but also for knowledge work. Like we're going to start to architect in a sense technical flows for non-technical work. And we're just at the beginning of this, but I think Mythos is going to invite us to start thinking about that. like our under the desk software, our software we build as nontechnical people is going to get increasingly sophisticated because we're going to have access to models that can do increasingly sophisticated things just by communicating an intent in plain chat. And so we should be looking as IT administrators, we should be looking as leaders at the idea that this under the desk software category that was just for personal use may increasingly be developing really useful team applications that never end up touching the engineering team. How do you maintain that? How do you think about that? How do you teach the idea that you want these concepts, guardrails, outcomes, specifications for non- tech folks, for folks who are like, "What is a spec?" Well, a spec is just defining what you want the model to do, right? There's ways we can teach this that is really not going to be intimidating and that doesn't require using the terminal or the command line. And it will allow you to build useful working software to solve non-technical problems. And this goes for families, too. Let's say you want to build a family calendar. like it's increasingly going to be possible to not just build one for your personal use that you start up personally on your laptop but like that you just build and you can deploy and maintain for the family and it's not even going to be something you think about as a piece of software because you never touched the code it just got built for you because you specified it and you said please hook into my Google now do we need better agentic primitives do we need better ways to hook into things like a Google calendar so it's easier absolutely that is one of the big pain points right now but that is the direction we're headed And so if you're looking at this from a role perspective, from a team perspective, you should be stepping back and asking yourself, how much of my role is compensating for a model's limitations today versus how much of my role is really thinking about how to architect and correctly aim artificial intelligence so it accomplishes a lot of work. That's the part you want to be on, right? That's where you want to lean your role. And everybody has to some degree a chance to lean there, right? who can lean more into I want to guide the model toward work that it needs to do and less into my job is to compensate for model limitations because model limitations are going to keep shrinking. We're about to have another big step change there with mythos. All right. So what does this mean for you? I want to step back and simplify this in the spirit of mythos. You need to take the idea that we are going to keep seeing model generations getting better very very seriously. We are not hitting a wall. That means you need to think across your role and across your technical systems about how you can dramatically simplify. How can you simplify so that the model has room to be intelligent? If you take one thing away, that is what I want you to take away. And yes, you absolutely will need to look in detail to get there because most of us have added a lot of guardrails and a lot of croft around our work so that we feel like we add value and or so that the weaker models can do their jobs. That's fine. The challenge is to grow by being able to simplify what you ask the model to do against a larger outcome set so that we get out of the way and let the model do its job. And we focus on making sure that we are aiming the model in the direction of a big cool goal. And we focus on making sure we're building the pipeline and the support and the and the tool availability and the availability of data so the model can do its job. And we also have a good sense of what good looks like. I've I've talked about that a lot. That's going to matter for technical and nontechnical work. Is the code clean? Is the Excel absolutely right? That's not going to stop being important. We just need to make sure that we give the model what it needs so that it can accomplish those goals successfully and when we measure it and check it, we have confidence that the model got it done. So, Claude Mythos is coming. The inflection point is here. This is another one of those moments when you need to be able to catch the train before it leaves the station. I hope this gives you a set of actionable recommendations to go with today to actually get ready for this because this is one of those things. If you look at the checklist I gave you here in this video, you're going to need to do some work to get ready for this. If you want to be ready day one, your systems need to be ready to simplify. So take the time, whether it's your own personal checklist and you're saying how what what canned prompts do I use? Can I simplify those? Or whether it's a work checklist and you're looking at like aic systems and how you prepare for them and guardrails. Get ready. It's coming. It's not going to be that long. It's a matter of weeks now.

## Timed Segments

[0:00] There are moments in AI when everything
[0:01] changes and we just had one of those the
[0:03] last few days. Claude Mythos leaked. Now
[0:07] Claude Mythos is the first model as far
[0:10] as we know that has been trained on
[0:12] Nvidia&#39;s new GB chips. It is a massive
[0:15] model. It is a step forward. Anthropic
[0:17] has confirmed its existence and they&#39;ve
[0:20] given it a new lineage name. So it won&#39;t
[0:22] be called Sonnet. It won&#39;t be called
[0:23] Opus. It appears to be called Capy Bara.
[0:25] I don&#39;t know why we&#39;ve switched to furry
[0:27] animals, but here we are. This is the
[0:30] biggest model in the world. It is by
[0:32] most measures according to Claude and it
[0:35] is going to be the most powerful model
[0:36] in the world. But don&#39;t just take my
[0:38] word for it. Don&#39;t just take anthropics
[0:40] word for how powerful it is. Look at
[0:42] what security researchers themselves are
[0:44] saying. Security researchers themselves
[0:45] are saying that cloud mythos is
[0:47] terrifyingly good at finding
[0:49] vulnerabilities in your own
[0:51] infrastructure better than a human. In
[0:52] fact, one of the most experienced
[0:54] security researchers in the world stood
[0:56] up at a conference in San Francisco in
[0:58] the past few days and said that Claude
[1:00] Mythos immediately found zeroday
[1:04] vulnerabilities in Ghost, which is a
[1:06] 50,000 star GitHub repo that has never
[1:08] had major issues before. And as soon as
[1:11] Mythos was let loose on it, it found a
[1:13] bunch of issues that even the world&#39;s
[1:14] best security researchers haven&#39;t found.
[1:17] And this is why Anthropic is taking the
[1:19] unusual step of allowing security
[1:22] researchers to dig into Mythos to battle
[1:25] test Mythos against some of the most
[1:27] popular utilities on the internet and to
[1:29] harden up their defenses ahead of time
[1:31] because as soon as Mythos is released,
[1:33] Mythos is going to be able to act as a
[1:37] threat to any IT repo out there and
[1:41] identify vulnerabilities that even good
[1:43] security researchers haven&#39;t been able
[1:44] to find, which immediately suggests that
[1:47] the first thing you should do if you are
[1:49] in IT or security as soon as mythos
[1:51] comes out is to say let&#39;s battle test it
[1:53] against our own systems and let&#39;s see
[1:55] what vulnerabilities it finds. That is
[1:57] that is job number one day zero you got
[1:59] to do that. But let&#39;s go beyond that.
[2:02] Let&#39;s look at what Claude mythos means.
[2:04] I want to be really honest with you.
[2:06] This model is one of the inflection
[2:09] points in 2026 that we all need to pay
[2:11] attention to. This is a chance to catch
[2:15] up before the train leaves the station.
[2:18] And I know that you may hear from me,
[2:20] things are getting faster. Things are
[2:21] getting faster a lot. But guess what?
[2:23] That&#39;s what it&#39;s like when you&#39;re on an
[2:25] exponential curve. Things keep getting
[2:27] faster. And I&#39;m here to tell you, this
[2:29] moment before Mythos release, and it may
[2:31] release as soon as next month or the
[2:33] month after, this moment is your chance
[2:35] to get things figured out before it
[2:38] arrives and upends everything. And I
[2:40] don&#39;t just mean about security. I mean
[2:42] how you build stuff, how you prepare
[2:44] etc. Why is that? Well, when models get
[2:47] bigger, they force you to simplify.
[2:51] They force you to think what can I
[2:53] delete about my systems and my practices
[2:56] because the model can do so much more
[2:58] now that that it couldn&#39;t do before. And
[3:01] that is what we have to understand. That
[3:03] is what we would call the bitter lesson
[3:05] of building with LLMs. We as humans
[3:07] think we have a lot of value to add to
[3:09] these models. We can add our judgment.
[3:10] we can complexify. We can add a lot of
[3:12] scaffolding and systems around these
[3:14] models and it will make them better. And
[3:16] as they get more powerful, the bitter
[3:18] lesson is that simpler works best. And
[3:21] so I&#39;m going to go through and in this
[3:23] video I&#39;m going to lay out some of the
[3:25] things you should be checking ahead of
[3:27] time. But there&#39;s a larger thing that
[3:29] you should take away, which is simply be
[3:32] sure that you are taking the idea that
[3:36] the LLM can do a lot more seriously. And
[3:40] we&#39;ll get into what that is. We&#39;ll cover
[3:41] mythos when it comes out. We&#39;ll talk
[3:43] about all of that. But for now, as we go
[3:45] through the next few questions, as you
[3:46] audit yourself, as you think about
[3:48] whether you&#39;re ready for mythos, that&#39;s
[3:50] the larger lesson. But anyone can tell
[3:52] you that. What are the what are the
[3:53] specific questions that help you know if
[3:56] you&#39;re ready for a big model change? If
[3:58] you&#39;re ready for effectively a step
[4:00] change. And by the way, I know that
[4:02] models come out all the time, but step
[4:04] changes are more rare. And what we get
[4:06] when we do a pre-training run on GB300s
[4:09] and it&#39;s much larger and more powerful
[4:10] underneath is we get the scaling law in
[4:12] effect. Right? So what I&#39;m trying to
[4:14] tell you is yes there&#39;ll be another
[4:16] model along from somebody in the next
[4:17] week or so but until mythos comes out
[4:19] and there will be other models that are
[4:21] in that lineage that come out from other
[4:22] model makers that are also big that are
[4:24] also trained on GB300 those are the step
[4:27] change that we&#39;re going to see in the
[4:28] first half of the year. And so you need
[4:30] to learn to differentiate between the
[4:32] models that are 5 10 15% better and the
[4:35] models that are significantly better, a
[4:37] step change better. And that&#39;s why this
[4:39] is a big deal because we are going to
[4:40] have another lurch up where the models
[4:42] are going to get significantly stronger
[4:44] in the next few months. And and you need
[4:46] to get ready for that now. Okay, here&#39;s
[4:48] your questions. I&#39;m going to give you
[4:49] four specific things to look at that are
[4:52] going to likely break when Claude Mythos
[4:54] comes out and you need to take them
[4:56] seriously. If you are building in AI at
[4:58] all, this is going to come up. Number
[5:00] one is your prompt scaffolding. How you
[5:02] think about prompting to drive results.
[5:04] Ask yourself, and this is not a per
[5:07] prompt document question. This is a per
[5:09] line question. Really dig in. Is this
[5:11] instruction here because the model needs
[5:14] it or is it here because I needed the
[5:17] model to need it? This is the question
[5:19] that I want to really dig into.
[5:21] Anthropic&#39;s recommendation is very
[5:22] unambiguous here. Consider adding
[5:25] complexity only when it demonstrabably
[5:27] improves outcomes. And this is true not
[5:30] just for anthropic models. Open AI&#39;s
[5:31] codeex guide tells us something similar
[5:33] when it says just tell it what you need
[5:35] without writing long instructions. This
[5:37] is going to be more and more the case,
[5:39] right? We are going to more and more be
[5:40] asked to communicate with the model what
[5:43] and why we need something in the end and
[5:47] less and less about how. So for example,
[5:49] let&#39;s say you have a customer support
[5:50] agent with a 3000 token system prompt
[5:53] and half of it is procedural, right?
[5:55] Like first classify the intent, then
[5:56] check your response for hallucinated
[5:58] URLs, then do X, then do Y. That
[6:01] sequence was written down because the
[6:03] model would skip knowledge checks enough
[6:05] of the time that it was needed. Think
[6:08] about whether you&#39;re really going to
[6:10] need that. When a model gets two or
[6:11] three times smarter, you may be able to
[6:13] delete that like 30 40 50% of that 3,000
[6:17] token prompt because so much of the
[6:20] procedural is just not needed when the
[6:22] model is more intelligent. Let&#39;s say
[6:23] you&#39;re not building agents. What&#39;s the
[6:25] implication for you if you&#39;re just
[6:26] chatting? If you&#39;re using co-work and
[6:28] you&#39;re wanting to get work done and
[6:29] you&#39;re less technical, it&#39;s pretty
[6:30] simple. Ask for what you want in the end
[6:34] and explain why in plain language. And
[6:38] you don&#39;t need to elaborate on how to
[6:39] get there. As long as the model has
[6:41] access to the inputs it needs, the data
[6:43] it needs, it&#39;s going to get there on its
[6:45] own. Increasingly across 2026, this is
[6:50] the bitter lesson we have to learn. All
[6:52] of the way we have described process,
[6:54] the things that are precious to us are
[6:56] things that are associated with our
[6:59] ability to execute work in a certain
[7:01] series of steps and somehow we&#39;ve
[7:03] decided that&#39;s an important reflection
[7:05] of our work identity. What cloud mythos
[7:07] and similar models are going to teach us
[7:09] is that that doesn&#39;t matter anymore and
[7:11] what matters is the outcome and our
[7:13] ability to name the outcome and let go
[7:15] of the process. You got to let go of the
[7:17] process with these models. And that, by
[7:19] the way, also goes for when you&#39;re
[7:21] auditing. Let&#39;s say you have a business
[7:23] process that you thought you couldn&#39;t
[7:24] make better. I would bet you if you give
[7:26] it to Mythos or maybe you give it to
[7:28] Andre Carpathy&#39;s Auto Research, you&#39;re
[7:30] going to find ways to make that better
[7:33] that a human can&#39;t figure out. The LLMs
[7:35] are now better than us at finding
[7:38] efficient ways through process and we
[7:39] should stop specifying. So that&#39;s point
[7:41] number one. Check your prompts. Stop
[7:43] oversp specifying. Lesson number two is
[7:45] about retrieval architecture and memory.
[7:47] You&#39;re basically asking how is the model
[7:49] changing the way it relates to memory
[7:51] based on the model&#39;s gain and
[7:53] capabilities. And so another way of
[7:56] looking at it is to say in the past we
[7:58] had to carry a lot of the logic for
[8:00] retrieval on our side so the model would
[8:02] retrieve correctly. But really how much
[8:04] of my retrieval logic should belong to
[8:06] the model if the model&#39;s smarter. This
[8:08] is a much more nuanced take than takes
[8:10] like that say sort of rag is dead. I&#39;ve
[8:12] heard I&#39;ve heard people like beating on
[8:13] retrieval augmented generation a lot.
[8:15] Think more broadly. If you&#39;re in a large
[8:18] context window situation, if you have
[8:20] like a million tokens, 10 million
[8:22] tokens, 100 million tokens, increasingly
[8:24] you should start to think about how the
[8:26] model wants to handle retrieval for that
[8:28] situation and how the model thinks it
[8:30] can handle it efficiently. And you
[8:31] should think less about predetermining
[8:34] how all of that works. Now, there are
[8:37] going to be pieces you&#39;re going to have
[8:38] to decide from the get-go. You&#39;ll have
[8:40] to decide what goes into the initial
[8:41] context window. you&#39;re going to have to
[8:43] decide whether the model is going to be
[8:46] invited to look at particular repos etc.
[8:50] But once you&#39;ve made those initial
[8:52] decisions, a lot of the rest of it with
[8:54] these very powerful models essentially
[8:57] relies on you being able to present a
[8:59] really well organized searchable repo of
[9:03] some sort. Maybe it&#39;s documents, maybe
[9:05] it&#39;s code, etc. Maybe it&#39;s the file
[9:07] system on your computer if you&#39;re
[9:08] non-technical. And then you need to say
[9:11] you go ahead and have a look. You look
[9:13] for what you want. And you need to trust
[9:15] the model to find what it needs to find.
[9:17] And there again, you see the theme. The
[9:19] theme is we have to let go so the model
[9:21] can do more. If we want to take
[9:24] advantage of the power and that is going
[9:25] to be one of the one of the job skills
[9:27] that is hard to measure in 2026 is the
[9:30] ability of someone to see a new model
[9:32] coming like mythos and to say I can see
[9:35] in advance. I understand how to model
[9:37] the improvements that an new
[9:39] intelligence is going to bring to the
[9:40] table and I&#39;m going to change my
[9:42] workflow. I&#39;m going to be ready so that
[9:44] I cut down the prompt where I need to.
[9:45] I&#39;m going to be ready so I adjust my
[9:47] retrieval strategy and I&#39;m not oversp
[9:49] specifying retrieval. I&#39;m going to let
[9:50] the model pick what it wants to pick out
[9:52] of this file system, out of this repo,
[9:54] etc. Because that is where we need to
[9:57] go. We need to assume that the model is
[10:00] increasingly going to be better than we
[10:02] are at deciding what to put in its
[10:04] context window if we can specify where
[10:06] it should go and we can have a directed
[10:09] prompt and we can understand with the
[10:11] model what we want to accomplish. And so
[10:13] our goal increasingly is to say here is
[10:15] the goal, go get it done and then to
[10:18] measure success. And that&#39;s it. That is
[10:20] the goal. And the smarter the model gets
[10:23] the more our work resolves down to that.
[10:25] and we need to get out of the way. And
[10:27] that in my observation is really hard.
[10:29] That&#39;s why it&#39;s called the bitter lesson
[10:31] because we humans like to think that our
[10:34] contributions here are special. That we
[10:37] have a way of doing scaffolding. That we
[10:39] have a way of doing rag. That our
[10:41] special system prompt. No, let it go.
[10:44] That was for that moment. That was for
[10:46] that model. And we need to start to
[10:48] think increasingly about how we put
[10:50] these models in the heart of our
[10:52] workflows in ways that allow them to do
[10:55] their most powerful work in a direction
[10:58] we set in alignment with where we want
[11:00] to go. And our job is to point them in
[11:02] that direction very very clear. So
[11:04] retrieval architecture is another
[11:05] example of that. You just have to be
[11:06] very clear. Here are the resources you
[11:08] can access. Here is the goal and
[11:10] increasingly the model is going to
[11:13] figure that out. Now, do I have specific
[11:16] advice for you because Mythos is already
[11:17] out in the world and I&#39;ve tested against
[11:19] 20 different things. I do not. We will
[11:21] get to that when it comes out. But I do
[11:24] have very very high confidence that
[11:26] Mythos is going to be much better at
[11:29] this, much better at intelligently
[11:31] filling its context window than previous
[11:33] models because that is exactly what you
[11:35] get with the scaling law. When you get
[11:37] more intelligence, we we have seen over
[11:39] and over again, you get better at using
[11:41] your context window. This is going to be
[11:43] another jump in that direction. And it
[11:45] is a good chance to remember one of the
[11:48] big lessons that we&#39;ve should have
[11:50] learned over and over again over the
[11:52] last two years. As models improve, this
[11:55] stuff gets simpler. Okay. On the
[11:57] simplification train, number three, look
[12:00] at how much you have to hardcode domain
[12:02] knowledge versus how much the model can
[12:03] infer. In other words, when you&#39;re
[12:05] thinking about these things that you
[12:07] want to emphasize over and over again to
[12:08] a model, ask yourself, which of these
[12:10] business rules did I write down? Because
[12:13] the model could not infer this from
[12:14] context, and which of these can I
[12:17] actually let go of? And this is true for
[12:19] us non-technical folks when we look at
[12:21] how we work with co-work as well,
[12:23] because how often are you writing down
[12:25] this is what I do, this is my role, and
[12:27] maybe you have a saved prompt for that,
[12:28] or maybe you have it in memory
[12:29] somewhere. you&#39;re increasingly not going
[12:31] to need to do that because the model is
[12:33] going to infer it from the context you
[12:35] give so reliably that you&#39;ll be fine.
[12:38] Another example is uh let&#39;s say you have
[12:40] a house style for writing your client
[12:42] reports. The model can just infer that
[12:44] at a very high fidelity from a given
[12:47] example report. That&#39;s the whole point
[12:48] of the scaling law is that intelligence
[12:50] gets better at reliably answering your
[12:53] query. In this case, a query about
[12:55] constructing a report will be more
[12:57] reliably answered in the voice of that.
[12:59] And so you should count your rules. You
[13:00] should count the things you have to
[13:02] remind the model of. Ask yourself, do
[13:05] you really need to fill the token window
[13:07] for better models with this? Be prepared
[13:10] to let go of some of that. And look,
[13:12] this is also hard for me. This is not
[13:14] something that I&#39;m saying isn&#39;t hard for
[13:16] all of us. I had an example recently
[13:18] where there was a a prompt that I was
[13:20] using around how I do research. And I&#39;d
[13:24] been using it for a couple of model
[13:25] generations. And one day I forgot to put
[13:28] the full 10-line prompt in and I just
[13:31] put a oneliner and said go research and
[13:33] I got a better result back because the
[13:36] 10line prompt and this is a micro
[13:39] example, right? The 10line prompt was
[13:42] more detailed about methodology than it
[13:44] needed to be and was over constraining
[13:45] my model. It had hard-coded my domain
[13:48] knowledge about what resources to look
[13:50] up, etc. And that had been really good
[13:54] two model generations ago. And now I
[13:56] needed to let it go. Now I needed to let
[13:58] it go. I needed to just let the model go
[14:01] find the right resources and come back
[14:03] with a research report. And so as much
[14:06] as the art of prompting for the first
[14:08] couple years of LLM was about what you
[14:10] put in, increasingly the art of
[14:12] prompting is about what you leave out.
[14:14] And it&#39;s still an art. It&#39;s still hard.
[14:16] You still have to prompt. And the skill
[14:19] is valuable. It&#39;s just that the skill is
[14:21] evolving because the models are getting
[14:24] better. Okay. Question number four, this
[14:26] one&#39;s all about, did the model do what
[14:28] we asked it to do? Can we sniff check it
[14:31] and show that it worked? Now, if you&#39;re
[14:33] doing non-technical work, the answer is
[14:35] going to be increasingly clear. You&#39;re
[14:36] going to look at it, say, &quot;Wow, that
[14:38] looks really good.&quot; And move on. And a
[14:39] lot of people are going to do that. And
[14:41] the art of checking non-technical work
[14:43] is increasingly going to involve you
[14:46] having a very high standard. One of the
[14:48] challenges of working with good models
[14:50] is learning to make sure our bar is
[14:53] really high. Don&#39;t be afraid just
[14:55] because this model is really good to
[14:57] look at something it produces like a
[14:59] PowerPoint deck or an Excel and say this
[15:00] isn&#39;t quite right. You got 99% of this
[15:03] right, but this is the 1% I want fixed.
[15:05] Apply your high standard. That&#39;s how we
[15:07] get good work. That&#39;s how we don&#39;t pass
[15:08] slop on. But if you&#39;re building
[15:10] software, this is one of those things
[15:12] you have to apply a lot of judgment to
[15:14] because 99% and verification checks in
[15:17] software is a very different game from
[15:19] 85% in verification checks. And we are
[15:22] in a world now where we are closer to
[15:24] 99% right more of the time than we are
[15:27] to 85%. And mythos is just going to push
[15:29] us more in that direction. Which
[15:31] suggests to me that we need to be really
[15:34] smart about writing our emails. I would
[15:36] say we are moving toward a point where
[15:38] we want one eval gate at the end of the
[15:40] software process and it needs to check
[15:42] absolutely everything and send things
[15:44] back when it doesn&#39;t work because if we
[15:46] do intermediate evals along the way net
[15:49] there&#39;s enough right about what these
[15:51] systems build it&#39;s just not worth it.
[15:54] You don&#39;t want to mess around with a
[15:56] more complicated pipeline. Simplify,
[15:58] simplify. Just write the eval at the
[16:01] end. And when you write the eval at the
[16:03] end, make sure that it tests absolutely
[16:06] everything. Your functional
[16:07] requirements, your non-functional
[16:08] requirements. And then make sure when it
[16:11] comes back that you are sure if you read
[16:13] that eval script and all the tests pass
[16:15] that you&#39;re confident it&#39;s good. Because
[16:17] increasingly we need to be at a point
[16:19] where we&#39;re not the ones who are the
[16:21] bottleneck for telling whether a
[16:23] particular piece of software reliably
[16:25] calls dependencies and whether the code
[16:27] is clean and has appropriate exception
[16:29] handling, whether edge cases are
[16:31] handled. Like that all needs to go into
[16:32] automated evals or else we&#39;re going to
[16:34] be overwhelmed by the number of pieces
[16:37] of software we can produce and the
[16:38] amount of checks we have to do. Like
[16:39] there are already conversations being
[16:42] had in San Francisco around the fact
[16:45] that humans cannot review all the code
[16:47] and we have to find ways to start to
[16:49] scale out of ourselves. We are the
[16:50] bottleneck. Mythos is going to make that
[16:53] worse. If you are depending on humans
[16:56] and human handoffs as a key part of your
[16:59] agentic software development pipeline,
[17:01] you&#39;re in trouble. And there is sort of
[17:03] an analogy there for non- tech folks. If
[17:05] you are depending on humans as a handoff
[17:07] between PowerPoint and Excel and you&#39;re
[17:10] doing AI for both of those pieces, you
[17:12] should be looking seriously at whether
[17:13] you can automate those non- tech
[17:15] artifact handoffs because Mythos can
[17:17] help you do that. And I&#39;m not talking
[17:19] about Mythos as if this is the only
[17:21] model that will ever be able to help you
[17:23] with this. I&#39;m saying it is the first
[17:25] leaked model of a new class. And we&#39;re
[17:28] going to see similar models come out
[17:30] from other hyperscalers. Google will
[17:31] have one. Open AAI will have one. They
[17:33] will also probably drop them in the next
[17:35] couple of months. We will all together
[17:38] regardless of the underlying model we
[17:40] use be in this new world and we need to
[17:42] think about that. Do you know another
[17:43] reason why we need to think about
[17:44] simplicity? It&#39;s very it&#39;s very obvious
[17:47] these are not cheap models. Enthropic
[17:50] basically confirmed that these are going
[17:51] to be very expensive models to run. You
[17:54] want to be very efficient with them. You
[17:56] want to make sure they&#39;re using the
[17:57] tokens as efficiently as possible. You
[17:59] don&#39;t want to clutter them up with a
[18:01] bunch of human described process. You
[18:03] want to use them as effectively as you
[18:05] can. I am willing to bet you that Mythos
[18:08] when it launches is only going to
[18:10] initially be available for max plan
[18:12] users for CLA because it&#39;s so expensive
[18:15] to serve. And we are headed toward a
[18:17] world where increasingly the first and
[18:19] best models are only going to be
[18:22] available on those premium plans because
[18:25] of how expensive they are to build and
[18:28] train and run and serve. And so we need
[18:30] to think to ourselves like if you&#39;re
[18:31] thinking about your future, about your
[18:33] career, you need to ask yourself
[18:34] basically, am I in a position where I
[18:38] can invest in intelligence in one of
[18:42] these plans in order to get access to
[18:44] this and then I will leverage it to the
[18:46] hilt and I will make it worth it. I will
[18:47] tell Claude Mythos, save me my 200
[18:49] bucks. And you can do this now. You
[18:50] don&#39;t have to wait for Mythos. Just tell
[18:52] your AI, look at my recurring
[18:54] subscriptions for my household and find
[18:56] me $200 in savings. Most households in
[18:58] America can find $200 a month in savings
[19:01] somewhere from some of their
[19:02] subscriptions just because the
[19:04] subscription economy latches onto our
[19:07] credit cards like baracles and we just
[19:08] need to find some space and LLM&#39;s right
[19:10] now without waiting for claude mythos
[19:12] are already very good at that. And so
[19:14] this is one of those things where think
[19:16] about the kind of intelligence you want
[19:18] to purchase and the timeline you want to
[19:19] buy it on because the people who are
[19:21] able to get Claude mythos now if you
[19:23] have a plan to leverage it effectively
[19:24] are going to be ahead. There&#39;s just no
[19:26] other way to put it. they have access to
[19:28] a better brain. Now, that doesn&#39;t mean
[19:30] that Mythos will always be expensive. We
[19:32] have the Vera Rubin chipset coming up
[19:34] behind the GB300. It&#39;s a whole new
[19:36] generation of chip from Nvidia. And as
[19:38] that starts to come online and even
[19:40] better models start to come out and it
[19:41] becomes cheaper and cheaper to serve
[19:42] Mythos. We are going to be in a position
[19:45] in a few months, 6 months maybe less,
[19:48] where you start to see the cost come
[19:49] down and you start to instead see more
[19:52] expensive models come out that are even
[19:53] better than Mythos. And so really when
[19:56] you start to think about what you&#39;re
[19:58] investing in, if you think about the
[19:59] plans you&#39;re purchasing and what you
[20:01] want to invest in, this goes for
[20:02] corporations buying for for their
[20:04] employees, it goes for individuals,
[20:06] think about it as what trajectory, what
[20:09] curve do I want to be on? Do I want to
[20:11] pay to be on the cutting edge curve and
[20:13] I&#39;m going to use it to the hilt and I&#39;m
[20:14] going to build really cool things and
[20:16] I&#39;m going to learn and I&#39;m going to
[20:17] leverage it to 10x myself, etc. or do I
[20:20] want to be a step behind on like a pro
[20:22] plan or whatever the 20 buck a month
[20:24] plan is? And then in that case, I&#39;m
[20:25] willing to wait and I&#39;m not going to be
[20:28] the first. I&#39;m willing to take the hit
[20:30] on my career for that. I&#39;m willing to
[20:31] take the hit for my employees if I&#39;m a
[20:33] company. And in that situation, I should
[20:35] not expect productivity that will
[20:38] resemble what people who are on those
[20:39] cutting edge plans get. And that&#39;s a
[20:42] very serious thing. You might think, oh,
[20:43] but talent will make up for it. No,
[20:45] human talent will not. Like increasingly
[20:47] the whole point of human talent is to
[20:49] simplify and get out of the way so that
[20:51] AI can do its thing. And the bigger the
[20:54] models get, the more that becomes
[20:57] obvious. And Mythos is one of those
[20:58] moments when I think it&#39;s going to be
[20:59] very very obvious that we are in a
[21:02] different world and that the people who
[21:04] have that $200 a month plan are going to
[21:06] effectively have superpowers. And so
[21:09] think about whether you want those
[21:10] superpowers or not. I&#39;m not saying
[21:11] there&#39;s an easy answer. I know $200 a
[21:13] month is a lot for a lot of us.
[21:16] And I know it&#39;s a lot for companies like
[21:17] if you&#39;re paying for it by token, it&#39;s
[21:19] also not going to be cheap. Think about
[21:21] whether it&#39;s worth it. Think about
[21:23] whether you can leverage it. Think about
[21:25] your multimodel strategy if you&#39;re a
[21:27] company. What are you using for
[21:29] mythosshaped problems? Do you have a
[21:31] reliable way to see what is a
[21:33] complicated problem that is worth
[21:34] putting a cutting edge model on versus
[21:36] not? And by the way, if you&#39;re thinking
[21:38] I&#39;m kidding about the gain in
[21:39] capability, we had another one of those
[21:41] stock market spook events where like
[21:43] security stocks for cyber security firms
[21:45] dropped between five and 9% as soon as
[21:47] Claude Mythos was even leaked. The
[21:50] entire world is starting to take AI
[21:52] models seriously because they have seen
[21:54] enough evidence to show what these
[21:56] models are capable of doing. And so yes,
[21:59] I fully expect that the leaked blog post
[22:02] that came out on the anthropic servers
[22:04] is broadly correct. It is going to be a
[22:06] big jump in coding. It is going to be a
[22:08] big jump in the ability to produce
[22:09] excellent artifacts like Excel and
[22:10] PowerPoint. Is going to be a big jump in
[22:13] the ability to reason. It is going to be
[22:14] a massive jump in cyber security and
[22:16] more. We should take that seriously.
[22:19] When you look at what mythos is going to
[22:21] mean, you should assume it means a step
[22:24] change that&#39;s coming in the next month
[22:26] or two. I&#39;ve been telling you 2026 isn&#39;t
[22:28] slowing down. This is an inflection
[22:30] point. Pay attention. So, what does a
[22:32] simpler system look like? What does a
[22:34] mythos ready system look like? I think a
[22:37] lot of the time like the larger public
[22:38] conversation has been around the
[22:40] security thing. It&#39;s been around, oh,
[22:41] this is a big model and those are fair
[22:43] to call out, but I want to go past that.
[22:46] I want to look at what it means to have
[22:48] a well architected system that lets you
[22:50] sleep at night before mythos comes.
[22:51] Number one, make sure you have very
[22:53] clear outcome specifications. Specify
[22:56] your intent in a way that makes sense
[22:59] for a smarter model. Let me give you an
[23:00] example. Back in the customer service
[23:02] world, let&#39;s say what you want to
[23:04] specify is resolve this customer&#39;s issue
[23:07] using our knowledge base, our policies,
[23:08] and our account history. And you make
[23:10] sure the model has access to that. The
[23:12] customer should leave satisfied, and the
[23:14] resolution should comply with our return
[23:16] policy. That is actually a decent
[23:18] outcome specification. Compare that to
[23:20] what most production systems I see look
[23:22] like. It&#39;s essentially a process, right?
[23:25] Well, first classify the intent into one
[23:27] of 14 categories. Then route to the
[23:28] appropriate handler. Then retrieve the
[23:30] top five knowledgebased articles using
[23:32] hybrid search with alpha equals.7. Then
[23:34] generate a response using only the
[23:35] retrieved context. That is what most of
[23:37] the prompts that I look at today look
[23:38] like. You see the difference between
[23:40] that and the outcome one. The outcome
[23:42] one just says I need to resolve the
[23:44] issue. It needs to be in line with this
[23:45] policy. Here&#39;s where the policies are.
[23:47] You may not be able to do that today
[23:49] with today&#39;s models. But be ready to do
[23:52] that.
[23:53] Get ready now because it&#39;s going to take
[23:55] time to rearchitect your systems. Start
[23:57] to think about how you need to
[23:59] prioritize your work to get set. Number
[24:01] two, think about your constraints and
[24:03] guard rails. These are things that must
[24:05] be true regardless of how the model
[24:06] achieves the outcome. Because when you
[24:08] give the model more flexibility, you
[24:09] need to be more clear about your
[24:10] constraints and guardrails. For example,
[24:12] never disclose customer financial data.
[24:14] That&#39;s a pretty good customer guard
[24:16] rail. Always verify refund eligibility
[24:18] against our policy. There&#39;s another one.
[24:20] These should survive model upgrades
[24:22] because they represent ongoing business
[24:24] rules that you want any model to follow
[24:26] regardless of how smart it gets. Get
[24:28] good at those. Number three, think about
[24:29] the tools your model can use. You want
[24:31] to make sure you have an excellent set
[24:33] of tools that have the right
[24:34] capabilities where a model can look at
[24:36] the tool set and say, I know what this
[24:38] does. I can use it and it&#39;s going to be
[24:41] effective at what it does. So, right,
[24:42] maybe it&#39;s search your knowledge base.
[24:44] Maybe it&#39;s look up an account. Maybe
[24:45] it&#39;s process a refund. The model is
[24:48] going to decide increasingly what to
[24:49] call and in what order and it&#39;s going to
[24:51] be up to you to define what the tools do
[24:54] and to be effective about that and
[24:55] present those tools effectively. So put
[24:57] some work into your tool definitions.
[25:00] And then number four, and then last but
[25:02] not least, if you&#39;re thinking about
[25:03] larger aentic software, we&#39;re going to
[25:05] go back to multi-agent coordination
[25:07] patterns, which I&#39;ve talked about
[25:08] before. I&#39;ve talked about cursor&#39;s idea
[25:10] that you have like a two agent hierarchy
[25:12] and that&#39;s much more effective than an
[25:14] agent swarm. You now need to be thinking
[25:17] about long-term planning with agents and
[25:20] what it means to let an agent like
[25:22] Mythos spin up agents from a variety of
[25:24] capability sets to get a task done. Like
[25:26] you should be in a position where you
[25:28] understand how to present an outcome
[25:31] spec that mythos can take. How you then
[25:33] present a overall set of evals Mythos
[25:37] has to work against and how you give
[25:39] Mythos a tool suite that allows it to
[25:41] spin up a lot of instantiated agents to
[25:44] execute against that plan. How it has
[25:47] places to track progress and how it can
[25:49] measure itself with eval. You need to
[25:52] take the idea that Mythos is the planner
[25:54] of your software more seriously. And
[25:56] again, I don&#39;t just mean Mythos. Any of
[25:58] these next generation models is going to
[26:00] do this. Codeex is going to drop a new
[26:01] model not too long from now. And it&#39;s
[26:03] also going to be more and more able to
[26:05] do this. And all we&#39;re doing is
[26:07] extending the current pattern we see at
[26:09] factory.ai, at Cursor, etc. And we&#39;re
[26:11] saying these models are more capable.
[26:13] You&#39;re going to give them more to work
[26:14] with. You&#39;re going to be more confident
[26:16] that they will get it done well. And
[26:18] you&#39;re going to make sure the eval allow
[26:20] them to assess themselves in a way that
[26:22] is reliable so you can trust the
[26:24] results. And by the way, you can also
[26:26] have a different instantiated Mythos
[26:28] model assess the work of that other
[26:30] model so that you have a second pair of
[26:32] eyes, right? You don&#39;t need to trust the
[26:34] model that did the work to do the eval
[26:37] as well. But really increasingly once
[26:39] you can specify the outputs and the
[26:40] guardrails and the tools and you just
[26:43] give the model a sense of the harness
[26:45] and architecture to get to the outcome,
[26:47] you&#39;re going to step out of the way. And
[26:48] that&#39;s increasingly going to be the case
[26:50] not just for technical work but also for
[26:52] knowledge work. Like we&#39;re going to
[26:53] start to architect in a sense technical
[26:56] flows for non-technical work. And we&#39;re
[26:57] just at the beginning of this, but I
[26:59] think Mythos is going to invite us to
[27:01] start thinking about that. like our
[27:03] under the desk software, our software we
[27:05] build as nontechnical people is going to
[27:06] get increasingly sophisticated because
[27:09] we&#39;re going to have access to models
[27:11] that can do increasingly sophisticated
[27:13] things just by communicating an intent
[27:15] in plain chat. And so we should be
[27:17] looking as IT administrators, we should
[27:19] be looking as leaders at the idea that
[27:21] this under the desk software category
[27:23] that was just for personal use may
[27:24] increasingly be developing really useful
[27:26] team applications that never end up
[27:29] touching the engineering team. How do
[27:30] you maintain that? How do you think
[27:32] about that? How do you teach the idea
[27:33] that you want these concepts,
[27:34] guardrails, outcomes, specifications for
[27:37] non- tech folks, for folks who are like,
[27:39] &quot;What is a spec?&quot; Well, a spec is just
[27:41] defining what you want the model to do,
[27:43] right? There&#39;s ways we can teach this
[27:44] that is really not going to be
[27:45] intimidating and that doesn&#39;t require
[27:47] using the terminal or the command line.
[27:48] And it will allow you to build useful
[27:50] working software to solve non-technical
[27:52] problems. And this goes for families,
[27:54] too. Let&#39;s say you want to build a
[27:55] family calendar. like it&#39;s increasingly
[27:57] going to be possible to not just build
[27:58] one for your personal use that you start
[28:00] up personally on your laptop but like
[28:02] that you just build and you can deploy
[28:04] and maintain for the family and it&#39;s not
[28:05] even going to be something you think
[28:06] about as a piece of software because you
[28:09] never touched the code it just got built
[28:11] for you because you specified it and you
[28:12] said please hook into my Google now do
[28:14] we need better agentic primitives do we
[28:17] need better ways to hook into things
[28:19] like a Google calendar so it&#39;s easier
[28:21] absolutely that is one of the big pain
[28:23] points right now but that is the
[28:24] direction we&#39;re headed And so if you&#39;re
[28:26] looking at this from a role perspective,
[28:28] from a team perspective, you should be
[28:29] stepping back and asking yourself, how
[28:31] much of my role is compensating for a
[28:34] model&#39;s limitations today versus how
[28:36] much of my role is really thinking about
[28:39] how to architect and correctly aim
[28:42] artificial intelligence so it
[28:44] accomplishes a lot of work. That&#39;s the
[28:46] part you want to be on, right? That&#39;s
[28:47] where you want to lean your role. And
[28:49] everybody has to some degree a chance to
[28:51] lean there, right? who can lean more
[28:53] into I want to guide the model toward
[28:56] work that it needs to do and less into
[28:58] my job is to compensate for model
[29:00] limitations because model limitations
[29:02] are going to keep shrinking. We&#39;re about
[29:04] to have another big step change there
[29:06] with mythos. All right. So what does
[29:07] this mean for you? I want to step back
[29:09] and simplify this in the spirit of
[29:11] mythos. You need to take the idea that
[29:13] we are going to keep seeing model
[29:15] generations getting better very very
[29:17] seriously. We are not hitting a wall.
[29:20] That means you need to think across your
[29:22] role and across your technical systems
[29:24] about how you can dramatically simplify.
[29:28] How can you simplify so that the model
[29:31] has room to be intelligent? If you take
[29:33] one thing away, that is what I want you
[29:35] to take away. And yes, you absolutely
[29:38] will need to look in detail to get there
[29:39] because most of us have added a lot of
[29:41] guardrails and a lot of croft around our
[29:44] work so that we feel like we add value
[29:48] and or so that the weaker models can do
[29:50] their jobs. That&#39;s fine. The challenge
[29:53] is to grow by being able to simplify
[29:56] what you ask the model to do against a
[29:58] larger outcome set so that we get out of
[30:01] the way and let the model do its job.
[30:02] And we focus on making sure that we are
[30:04] aiming the model in the direction of a
[30:06] big cool goal. And we focus on making
[30:09] sure we&#39;re building the pipeline and the
[30:10] support and the and the tool
[30:11] availability and the availability of
[30:14] data so the model can do its job. And we
[30:17] also have a good sense of what good
[30:19] looks like. I&#39;ve I&#39;ve talked about that
[30:20] a lot. That&#39;s going to matter for
[30:21] technical and nontechnical work. Is the
[30:23] code clean? Is the Excel absolutely
[30:25] right? That&#39;s not going to stop being
[30:27] important. We just need to make sure
[30:29] that we give the model what it needs so
[30:31] that it can accomplish those goals
[30:33] successfully and when we measure it and
[30:35] check it, we have confidence that the
[30:37] model got it done. So, Claude Mythos is
[30:39] coming. The inflection point is here.
[30:41] This is another one of those moments
[30:43] when you need to be able to catch the
[30:45] train before it leaves the station. I
[30:47] hope this gives you a set of actionable
[30:49] recommendations to go with today to
[30:52] actually get ready for this because this
[30:54] is one of those things. If you look at
[30:55] the checklist I gave you here in this
[30:56] video, you&#39;re going to need to do some
[30:58] work to get ready for this. If you want
[30:59] to be ready day one, your systems need
[31:01] to be ready to simplify. So take the
[31:04] time, whether it&#39;s your own personal
[31:05] checklist and you&#39;re saying how what
[31:06] what canned prompts do I use? Can I
[31:08] simplify those? Or whether it&#39;s a work
[31:10] checklist and you&#39;re looking at like aic
[31:13] systems and how you prepare for them and
[31:14] guardrails. Get ready. It&#39;s coming. It&#39;s
[31:17] not going to be that long. It&#39;s a matter
[31:18] of weeks now.
