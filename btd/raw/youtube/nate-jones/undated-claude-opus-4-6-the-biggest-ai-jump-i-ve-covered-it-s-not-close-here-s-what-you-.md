---
title: "Claude Opus 4.6: The Biggest AI Jump I've Covered--It's Not Close. (Here's What You Need to Know)"
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=JKk77rzOL34"
video_id: "JKk77rzOL34"
duration: "30:39"
transcript_method: "youtube-captions"
segment_count: 839
char_count: 31839
status: ingested
topics: []
meta_patterns: []
---

# Claude Opus 4.6: The Biggest AI Jump I've Covered--It's Not Close. (Here's What You Need to Know)

**Creator**: nate-jones | **Duration**: 30:39
**URL**: https://www.youtube.com/watch?v=JKk77rzOL34
**Transcript**: 839 segments, 31839 chars

## Transcript

Claude Opus 4.6 just dropped and it changed the AI agent game again because 16 Claude Opus 4.6 agents just coded and set the record for [snorts] the length of time that an AI agent has coded autonomously. They coded for two weeks straight. No human writing the code and they delivered a fully functional C compiler. For for reference, that is over a 100,000 lines of code in Rust. It can build the Linux kernel on three different architectures. It passes 99% of a special quote torture test suite developed for compilers. It compiles Postgress. It compiles a bunch of other things. And it cost only $20,000 to build, which sounds like a lot for you and me, but it's not a lot if you're thinking about how much human equivalent work it would cost to write a new compiler. I keep saying we're moving fast, and it's even hard for me to keep up. A year ago, autonomous AI coding could top out at barely 30 minutes before the model lost the thread. Barely 30 minutes. And now we're at 2 weeks. Just last summer, Rock 10 got 7 hours out of Claude and everybody thought it was incredible. 30 minutes to 2 weeks in 12 months. That is not a trend line. That is a phase change. The entire world is shifting. Even one of the anthropic researchers involved in the project admitted what we're all thinking. I did not expect this to be anywhere near possible so early in 2026. Opus 4.6 shipped on February 5th. It has been just over a week. And the version of cutting edge that existed in January, just a few weeks ago, that already feels like a lifetime ago. Here's how fast things are changing. Just in Anthropic's own road map, Opus 4.5, shipped in November of 2025, just a couple of months ago. It was Anthropic's most capable model at the time. It was good on reasoning, good at code, reliable against long documents. It was roughly the state-of-the-art. Just a few months later, Opus 4.6 6 shipped with a 5x expansion in the context window versus Opus 4.5. That means it went from 200,000 tokens to a million. Opus 4.6 shipped with the ability to hold roughly 50,000 lines of code in a single context session in in its head, so to speak, up from 10,000 previously with Opus 4.5. That is a 4x improvement in coder document retrieval over just a couple of months. The benchmarks measures are off the charts. And you guys know I don't pay a lot of attention to benchmarks, but when you see something like nearly doubled reasoning capacity on the ARC AGI2 measure, you got to pay attention. It shows you how fast things are moving, even if you don't entirely buy the benchmark itself. And Opus 4.6 adds a new capability that did not exist at all in January. Agent teams. Multiple instances of cloud code autonomously working together as one with a lead agent coordinating the work. specialist handling subsystems and direct peer-to-peer messaging between agents. That's not a metaphor for collaboration. That is automatic actual collaboration between autonomous software agents in an enterprise system. All of this in just a couple of months. The pace of change in AI is a phrase that people keep repeating and they don't really internalize what it means. This is what it means. The tools that you mastered in January are a different generation from the tools that shipped this week. It's not a minor update, people. It is an entirely different generation. Your January mental model of what AI can and cannot do is already wrong. I was texting with a friend just this past week, and he was telling me about the Rockin results in 7 hours. And I had to tell him, I know you think you're up to date, but the record is now 2 weeks. And by the way, Rockuten using Opus 4.6 was able to have the AI manage 50 developers. That is how fast we're moving. that AI can boss 50 engineers around. Now, the 5x context window is the number anthropic put in the press release. It's the wrong number to focus on. The right number is a benchmark originally developed by OpenAI called the MRCV2 score. That sounds like a mouthful and it's used to measure something that matters enormously that nobody was testing properly. Can a model retrieve and use the information inside a long context window? In other words, can you find a needle in the haststack? It's not about whether you can quote unquote put a million tokens into the context window. Every major model can accept big context windows in January 2026. The question is whether the model can find, retrieve, and use what you put in there. That is what matters. Sonnet 4.5, which was a great model from Claude just a few months ago, does have a million token window, but the ability to find that needle in the haststack was very low. About one chance in five or 18.5%. Gemini 3 Pro a little bit better at finding that needle in the haststack across its context window about one chance in four 26.3%. These were the best available in January. They could hold your codebase. They couldn't reliably read it. The context window was like a filing cabinet with no index. Documents went in, but retrieving them was kind of a random guess past the first quarter of the content. Guess what? Guess what? Opus 4.6 six at a million tokens has a 76% chance of finding that needle in the hay stack. At 256,000 tokens or a quarter of the context window, that rises to 93%. That is the number that matters. That is why 4.6 feels like such a giant leap. It's not because of the benchmark score. It's because there's a massive difference between a model that can hold 50,000 lines of code and a model that can hold them 50,000 lines of code and know what's on every line all at the same time. This is the difference between a model that sees one file at a time and a model that holds the entire system in its head simultaneously. Every import, every dependency, every interaction between modules, all visible at once. A senior engineer working on a large codebase carries a mental model of the whole system and they know that changing the O module can break the session handler. They know the rate limiter shares state with the load balancer. It's not because they looked it up. It's because they've lived in the code long enough that the architecture becomes a matter of intuition, not a matter of documentation. That holistic awareness is often what separates a senior engineer from a contractor reading the codebase for the first time. Opus 4.6 can do this for 50,000 lines of code simultaneously. Not by summarizing, not by searching and not with years of experience. It just holds the entire context and reasons across it the way a human mind does with a system it knows very very deeply. And because working memory has improved this dramatically in the span of just a couple of months, it's actually not hard to see where the trajectory is going to go from here. The C compiler project 100,000 lines in Rust did require 16 parallel agents precisely because even a million token context window can't hold that whole project at once in its head. But at the current rate of improvement, it won't require 16 agents for long. Let me tell you more about the Rockuten story with the 50 developers. Now, Rocket is a Japanese ecom and fintech conglomerate, and they deployed clawed code across their engineering org, not as a pilot, but in production, handling real work and touching real code that ships to real users. Use Kaji, Rakuten's general manager for AI, reported what happened when they put Opus 4.6 on their issue tracker. Clawed Opus 4.6 closed 13 issues itself. It assigned 12 issues to the right team members across a team of 50 in a single day. It effectively managed a 50 person org across six separate code repositories and also knew when to escalate to a human. It wasn't that the AI helped the engineer close the tickets. I want to be clear about that. It closed issues autonomously. It did the work of an individual contributor engineer. It also routed work correctly across a 50 person org. The model understood not just the code but the org chart. Which team owns which repo? which engineer has context on which subsystem, what closes versus what needs to escalate. That's not just code intelligence, that is management intelligence. And a system that can route engineering work correctly is a system that understands organizational dependencies the way a human lead understands them. Which means the coordination function that engineering managers spend half their time on just became automatable in a couple of months. Think about the cost structure that implies. A senior engineering manager at a company like Rakuten might cost a quarter million dollars a year fully loaded, maybe more. A meaningful part of their job, ticket triage, work routing, dependency tracking, cross team coordination. That is exactly what Opus 4.6 demonstrated it could handle. Not the judgment calls about what to build next, not the career development conversation, and it wasn't done over weeks and weeks and weeks, but the fact that it can do operational coordination that typically takes 15 to 20 hours a week and demonstrated it could do it for a full day, it shows you where things are going. And the broader numbers tell the same story. It is common now to see hours and hours and hours of sustained autonomous coding for individuals who are playing with this. not in the controlled enterprise environment even people can kick off multi-hour long coding sessions and just walk away and do other things and come back and see fully working software. That is no longer an unusual thing in February 2026. And Rockwood isn't stopping here. They're building an ambient agent that breaks down complicated tasks into 24 parallel clawed code sessions. Each single one handling a different slice of their massive mono repo. A month of human engineering is generating a simultaneously running 24 agent stream that helps them to build and catch issues and that's in production. Now the detail that gets buried under these big numbers might be more interesting than all of the numbers themselves because non-technical employees at Rockoten are able to use that system to contribute to development through the cloud code terminal interface. That is right. The terminal is not just for engineers anymore. People who have never written code are able to ship features because of the work Rockin has done to integrate cloud code. So the boundary between technical and non-technical, it keeps breaking that down. The distinction that has organized knowledge worker hiring and compensation for 30 years is dissolving in a matter of months. It's not dissolving at the speed of your ability to deploy a multi-month project and is not dissolving at the speed it takes to retrain humans. That is why this is shocking. This is all happening faster than we can adjust to it. One of the features that is most hard for us to wrap our minds around is the agent teams feature that Opus 4.6 shipped. Tropic calls them team swarms internally, which is a little scary and I can see why the marketing team changed that. But the name is accurate. It's not a marketing term. It's an architecture. Multiple instances of clawed code are architected to run simultaneously. Every single one in its own context window. And they coordinate through a shared task system that has three simple states, right? Pending, in progress, and incompleted. Pending, in progress, and completed. One instance of Cloud Code is going to act as your lead developer. It will decompose the project into work items and assign them to specialists, track dependencies, and unlock bottlenecks. This is just like what Opus 4.6 did for those 50 developers. The specialist agents work independently, and when they need something, they don't just go through the lead, by the way. They can message each other directly. peer-to-peer coordination. It's not hub and spoke. There's a front-end agent, there's a back-end agent, there's a testing agent. Effectively, they are recreating the entire software engineering org inside claude code team swarms. And this is how that C compiler got built. It's not one model doing everything sequentially, right? It's 16 agents that worked in parallel. Some building the parser, some building the code generator, some building the optimizer. And they all coordinated through the same kinds of structures that existing human engineering teams use, except they work 24 hours a day. They don't have standups, and they resolve coordinations through direct messaging rather than waiting for the next sprint planning session. One of the running questions in AI has been whether agents will reinvent management. I think this argues strongly that they did. Curser's autonomous agent swarm independently organized itself into hierarchical structures and strong DM published a production framework called software factory that's built around exactly the same hierarchical pattern. And now anthropic has shipped a feature with 13 distinct operations from spawning managing to coordinating agents. This is not really coincidence. It's essentially convergent evolution in AI. Hierarchy isn't a human organizational choice imposed on systems to ma imposed on systems to maintain control. It's an emergent property of coordinating multiple intelligent agents on complicated tasks. Humans invented management because management is what intelligence does when it needs to coordinate at scale. AI agents effectively discovered the same thing because the constraints are structural. They're not cultural. You need someone to track dependencies, right? You need specialists. You need communication channels. You need a shared understanding of what has been done and what hasn't yet been done. We did not impose management on AI. AI effectively discovered management and we helped to build the structure and Opus 4.6 is the first model that ships with the infrastructure to run all of this as just another feature. On the same day Opus 4.6 launched, Enthropic published a result that got much less attention than that C compiler story, but it might matter more in the long run. They gave Opus 4.6 six basic tools, Python, debuggers, fuzzers, and they pointed it at an open-source codebase. There were no specific vulnerability hunting instructions. There were no curated targets. This wasn't a fake test. They just said, "Here's some tools. Here's some code. Can you find the problems?" It found over 500 previously unknown high severity, what's called zeroday vulnerabilities, which means fix it right now. 500 in code that had been reviewed by human security researchers scanned by existing automated tools deployed in production systems used by millions of us. Code that the security community had considered audited with when traditional fuzzing by the way fuzzing is the fancy technical word for finding bugs and making sure you check all the code. It's like fuzzing your hand through the carpet and finding a pin or something. And when manual analysis failed, using a tool called ghost script, which is what you use to check these things, the model independently decided to analyze it a different way, going directly to the project's git history. That's right. It worked around obstacles and it read through years of commit logs to understand the codebase's evolution. Nobody told it to do this. It just decided to do it. And it identified areas where security relevant changes had been made hastily or incompletely all on its own. It invented a detection methodology that no one had told it to use. It reasoned about the code's history, not just about its current state. And it used that understanding of time to find vulnerabilities that static analysis could not reach. Humans didn't do this. This is why it found the bugs it found. This is what happens when reasoning meets working memory. The model doesn't scan for known patterns the way existing tools do. It builds a mental model and I think that's the only metaphor that works at this point of how the code works, how data flows, where trust boundaries exist, where assumptions get made and where they might break down. And then it probes the weak spots with the creativity of a researcher and the patience of a machine that never gets tired of reading commit logs. And I guarantee you, human engineers get tired of that. The security implications alone would justify calling Opus 4.6 a generational release. And yet again, I remind you, it's only been a couple of months. There'll be another one in a couple of months. But this was not the headline feature of Opus 4.6. As exciting as it is, it wasn't even the second headline feature. 500 zero days was the side demonstration. That is the density of capability improvement that has been packed into a single model update shipped on a Wednesday, February. Look, there are skeptics for every release and there were skeptics for 4.6 as well. And the skepticism tracks historically. AI benchmark improvements have underdelivered before and repeatedly for years. And that is why I don't depend a lot on benchmarks. Sure enough, within hours of launch, thread started to appear on the cloud subreddit. Is Opus 4.6 labbotomized? Is it nerfed? The pattern seems to repeat with every major model release. Power users who have fine-tuned their workflows for the previous version discover the new version handle certain tasks differently. The Reddit consensus, for what it's worth, has decided that 4.6 six is better at coding and worse at writing. I haven't found that personally, but dismissing it would also probably be dishonest. Model releases involve trade-offs. Model releases often involve changes to the agent harness, which is all of the system prompting that the model makers put in that goes around the deployment that they don't talk about and they don't release. We don't know how it changed. We feel the change when we work with the system. So, I'm sure it's possible that if you were a Reddit user who was used to a special prompt pattern that worked on Opus 4.5, you might indeed be frustrated that that pattern did not work on a much more capable model overall. So, I get the skepticism. I also get that people are tired of hearing the world changing every couple of months. It is exhausting to keep up with. But that doesn't mean it's not real. And that is part of why I'm telling so many specific stories. It's important not to just look at the headlines. It's important not to look at some number changing on some stupid benchmark. It's important to hear the stories of how AI is actually changing in production now. So what does this feel like if you are not an engineer? What does this feel like if you don't write code? Cuz the C compiler, let's be honest, it's a developer story. The benchmarks are developer metrics. But the change underneath, what makes 4.6 special isn't about developers per se. It's about what happens when AI can sustain complicated work for hours and days instead of minutes. Two CNBC reporters, Dear Drabosa and Jasmine Woo, they're not engineers, right? They're reporters. They sat down with Claude Co-work and they asked it to build them a Monday.com replacement. That's the project management tool, right? A project management dashboard that had calendar views. It had email integration, task boards, team coordination features. This is the product that monday.com has spent years and hundreds of millions of dollars building. It s currently supports a $5 billion market cap for monday.com. It took these reporters under an hour. Total compute cost somewhere between $5 and $15. I hasten to add that is not the same thing as rebuilding monday.com. This was personal software. It's not deployed. It's not for sale. It was just for them. So yes, it is a big deal. Yes, it is a generational change in our ability for nontechnical people to make software. No, I am not saying that dear Drebosa and Jasmine Woo can refound monday.com for $10. The real story is that AI can build the tools you use, the software you pay per seats for, the dashboards your company spent 6 months specking out with a vendor, an AI agent can build a working version of that in an afternoon, and you don't need to write a line of code to make it happen. Yes, it might just be for you. It's a whole new category, people. It's called personal software. It didn't exist just a few months ago. It is now increasingly easy to make that happen. Our daily experience with AI is changing in ways that are really difficult to benchmark, but that doesn't mean that they're not structural. A marketing ops team using Claude Co-work can do content audits in just a few minutes instead of hours and hours. A finance analyst running due diligence doesn't take a day to do it because the model can read the document set, identify the risks, and produce lawyer ready redlines in just a few minutes. Our rhythm of work is different now. We can dispatch five different tasks in a few minutes on Claude Co-work. We can dispatch a PowerPoint deck, a financial model, a research synthesis, two data analyses, right? walk away, you can grab a cup of coffee, and you can come back and the deliverables are just done. They're not drafts anymore. It's just finished work. It's mostly formatted, right? The pattern that's emerging for non-technical users is what anthropic Scott White calls quote vibe working. You describe the outcomes, not the process. You don't you don't tell the AI how to build the spreadsheet. You tell it what the spreadsheet needs to show. It figures out the formulas. It figures out the formatting. It figures out the data connections. The shift is coming for all of us and it's going from operating tools to directing agents. And the skill that matters now is not technical proficiency. It's clarity of our intent. Knowing what you want, being able to articulate the real requirement, not just your surface request. That is becoming the bottleneck. Ironically, it's the same bottleneck the developers are hitting, but from a different direction. The C compiler agents didn't need anyone to write code for them. They needed someone to specify what a C compiler means precisely enough that 16 agents could coordinate on building one. The marketing team doesn't need someone to operate their analytics platform anymore. They need someone who knows which metrics matter and can explain why. The leverage across the board has shifted from execution to judgment across every function. Whether you write code or not, if you lead an organization, the number that should restructure your planning isn't measured in weeks or days. It's actually measured in revenue per employee. Purser, the AI coding tool hit $und00 million in annual recurring revenue with about 20 people. That's $5 million per employee. Midjourney generated 200 million people. Midjourney generated $200 million with about 40 people. Lovable, the AI app builder, they reached $200 million in 8 months with 15 people. For traditional SAS companies, $300,000 in revenue per employee is considered excellent and $600,000 is considered elite. That would be notion. AI native companies are running at five to seven times that number. Not because they found better people necessarily, but because their people orchestrate agents instead of doing the execution themselves. McKenzie published a framework not for others, but for themselves last month. They're targeting parody, matching the number of AI agents at McKenzie to human workers across the firm by the end of 2026. This is the company that sells organizational design to every Fortune 500 on Earth. And they're saying the org chart is about to flip. The pattern is visible at startups, too. Jacob Bank. The pattern is visible at startups, too. Jacob Bank runs a million-doll marketing operation with zero employees and roughly 40 AI agents. Micro One conducts 3,000 AI powered interviews every single day, handled at a tiny fraction of the headcount that enterprise recruiting firms need floors of people to do. Three developers in London built a complete business banking platform in 6 months. A project that would have required 20 engineers in 18 months before AI. Amazon's famous two pizza team formula, the idea that no team should be larger than what two pizzas can feed, is evolving into something even smaller. The emerging model at startups is now two to three humans plus a fleet of specialized agents all organized not by function but by outcome. The humans regardless of what their job title says and it increasingly doesn't matter set direction, evaluate quality and make judgment calls. The agents execute, coordinate, and scale. The org chart stops being a hierarchy of people and it becomes a map of human agent teams each owning a complete workflow end to end. For leaders, this changes the fundamental equation we've been working with for a long time. It's not about how many people do we need to hire now. It's about how many agents per person is the right ratio and what does each person need to be really excellent at to make that ratio work. The answer to the second question is really the same thing that's distinguished really excellent people for a long time in software. It's great judgment. It's what we call taste, which is vague, but typically means deeply understanding what the customer wants and being able to build it. It's about domain expertise. It's the about the ability to know whether the output is actually really, really good. And those skills now have 100 orex leverage because they are multiplied by the number of agents that person can direct and drive against. out. Daario Amade, anthropic CEO, has set the odds on a billion dollar solo founded company emerging by the end of 2026 at between 70 and 80%. Think about it. He thinks there's a 75% chance that there will be a billion dollar solo founded company by the end of this year. Sam Alman apparently has a betting pool among tech CEOs on the exact same question. Now, whether or not you believe that version, the direction is undeniable. The relationship between headcount and output is broken. And the organizations that figure out the new ratio first are going to outrun everybody who is still assuming they need dozens of developers to do one major software project. If you follow the trajectory that Opus 4.6 set, by 2026, June, July, August, somewhere in there, I would expect agents working autonomously for weeks to become routine rather than remarkable. By the end of the year, we are likely to see agents building full applications over potentially a month or more at a time. Not toy applications, real production systems with real architecture decisions complete with security reviews, with test suites, with documentation, all handled by agent teams. The trajectory from hours to two weeks took just 3 months. The trajectory from two weeks to months, that's coming soon. And the inference demand that this generates agents consuming tokens continuously around the clock across thousands of parallel sessions. Companies are not ready for this. This is what makes the $650 billion in hypers scale infrastructure look conservative rather than insane. Those data centers are not being built for chatbots people. They're being built for agent swarms running at a scale that people have had difficulty modeling or wrapping their heads around. Opus 4.6 gives us a sense of that future. So, what can you do about it? If you're sitting here thinking, "Oh my gosh, this is too much. It is coming too fast." You're not alone. You're not alone. You can do this. If you write code, try running a multi- aent session on real work, not a toy problem, a piece of your codebase with real technical depth. Watch how the agents coordinate. That experience is going to change your mental model of what agents can do in a way that matters much more than anything else. Because increasingly the way we work is the bottleneck for AI. If we want to go faster and build more, if we want to feel like we have the ability to do production work at the speed that AI demands because increasingly that's what they're going to expect from humans. I got to say, if we want to be ready for the future, best way we can do it is to change our mental models. If you don't write code, open up Claude Co-work. handed a task you've been procrastinating on that's that's felt really hard, right? A competitive analysis task, maybe a financial model task, a content audit across last quarter's output. Just describe the outcome you want, not the steps to get there. See what comes back. The gap between what you expect and what you get is the gap between your current mental model and where the tools are today. And for managers, look honestly at the 20 hours a week your team spends on operational coordination, ticket routing, dependency tracking. ask how many of those hours really require excellent human judgment and which are just pattern matching because I got to say your AI can probably take over a lot of the coordination work already and if you run an organization if you're on the senior leadership team you got to understand the question for your org has changed it's not about should we adopt AI or even which teams adopt it first it's really what is our agentto human ratio and what does each human need to be excellent at to make that ratio work and how do We support our humans to get there. The people working in knowledge work desperately need their leaders to understand that humans need a ton of support to get through this change management and become a new kind of worker that partners with AI. That is not an easy thing and most orgs are underinvesting in their people. I tell people in AI that if you are on the cutting edge of AI, it feels like you're time traveling always because you look at what's happening around you and then you go and you talk to people who haven't heard about it and they look at you like you're crazy. They say, "No, you can't do that. You can't run 16 agents at a time and run a Rust compiler. What do you mean?" And AI can manage 50 people. And when you tell them that's just a Wednesday in February and more is coming soon, then they really roll their eyes. But welcome to February. This is where we are. AI agents can build production grade compilers in just two weeks. They manage engineering orgs autonomously. They can discover hundreds of security vulnerabilities that human researchers missed. They can build your competitor's product in an hour for the cost of your lunch. They can coordinate in teams, resolve conflicts, and deliver at a level that did not exist 8 weeks ago. None of this was possible in January. And we don't know where this stops. We just know it's going faster. That's the tension underneath all of the benchmark scores, all the deployment numbers. The fact is the agents are here, they work, and it's just getting faster from here. And we're not sure what happens next. The question I have for all of us is how do we do a better job supporting each other in adjusting to what feels like a race out of MadMax some days? Welcome to February. It's moving fast. If you're a people leader, you need to take time to think about how to support your people to make it through this transition. If you are an individual contributor or a manager, I am putting as many tools as I can up on the Substack to help you get through this. But the best thing you can do, it's not about the Substack. I don't care. It's about you touching the AI and getting hands-on and actually building or trying to build with an AI agent system that launched not in January, not in December, but in February. And you need to take that mindset forward every single month. In March, you should be touching an AI system that was built in March. Every month now matters. Make sure that you don't miss it because our future as knowledge workers increasingly depends on our ability to keep the pace and work with AI agents.

## Timed Segments

[0:00] Claude Opus 4.6 just dropped and it
[0:02] changed the AI agent game again because
[0:05] 16 Claude Opus 4.6 agents just coded and
[0:09] set the record for [snorts] the length
[0:11] of time that an AI agent has coded
[0:13] autonomously. They coded for two weeks
[0:16] straight. No human writing the code and
[0:18] they delivered a fully functional C
[0:19] compiler. For for reference, that is
[0:21] over a 100,000 lines of code in Rust. It
[0:25] can build the Linux kernel on three
[0:27] different architectures. It passes 99%
[0:30] of a special quote torture test suite
[0:32] developed for compilers. It compiles
[0:34] Postgress. It compiles a bunch of other
[0:36] things. And it cost only $20,000 to
[0:38] build, which sounds like a lot for you
[0:40] and me, but it&#39;s not a lot if you&#39;re
[0:42] thinking about how much human equivalent
[0:43] work it would cost to write a new
[0:46] compiler. I keep saying we&#39;re moving
[0:48] fast, and it&#39;s even hard for me to keep
[0:50] up. A year ago, autonomous AI coding
[0:52] could top out at barely 30 minutes
[0:54] before the model lost the thread. Barely
[0:56] 30 minutes. And now we&#39;re at 2 weeks.
[0:58] Just last summer, Rock 10 got 7 hours
[1:01] out of Claude and everybody thought it
[1:03] was incredible. 30 minutes to 2 weeks in
[1:05] 12 months. That is not a trend line.
[1:08] That is a phase change. The entire world
[1:10] is shifting. Even one of the anthropic
[1:12] researchers involved in the project
[1:15] admitted what we&#39;re all thinking. I did
[1:17] not expect this to be anywhere near
[1:20] possible so early in 2026. Opus 4.6
[1:24] shipped on February 5th. It has been
[1:26] just over a week. And the version of
[1:28] cutting edge that existed in January,
[1:30] just a few weeks ago, that already feels
[1:33] like a lifetime ago. Here&#39;s how fast
[1:35] things are changing. Just in Anthropic&#39;s
[1:38] own road map, Opus 4.5, shipped in
[1:41] November of 2025, just a couple of
[1:42] months ago. It was Anthropic&#39;s most
[1:44] capable model at the time. It was good
[1:46] on reasoning, good at code, reliable
[1:48] against long documents. It was roughly
[1:50] the state-of-the-art. Just a few months
[1:52] later, Opus 4.6 6 shipped with a 5x
[1:55] expansion in the context window versus
[1:57] Opus 4.5. That means it went from
[2:00] 200,000 tokens to a million. Opus 4.6
[2:03] shipped with the ability to hold roughly
[2:05] 50,000 lines of code in a single context
[2:09] session in in its head, so to speak, up
[2:11] from 10,000 previously with Opus 4.5.
[2:15] That is a 4x improvement in coder
[2:18] document retrieval over just a couple of
[2:20] months. The benchmarks measures are off
[2:22] the charts. And you guys know I don&#39;t
[2:24] pay a lot of attention to benchmarks,
[2:26] but when you see something like nearly
[2:28] doubled reasoning capacity on the ARC
[2:30] AGI2 measure, you got to pay attention.
[2:32] It shows you how fast things are moving,
[2:34] even if you don&#39;t entirely buy the
[2:36] benchmark itself. And Opus 4.6 adds a
[2:39] new capability that did not exist at all
[2:42] in January. Agent teams. Multiple
[2:45] instances of cloud code autonomously
[2:48] working together as one with a lead
[2:50] agent coordinating the work. specialist
[2:52] handling subsystems and direct
[2:53] peer-to-peer messaging between agents.
[2:56] That&#39;s not a metaphor for collaboration.
[2:58] That is automatic actual collaboration
[3:01] between autonomous software agents in an
[3:03] enterprise system. All of this in just a
[3:05] couple of months. The pace of change in
[3:07] AI is a phrase that people keep
[3:09] repeating and they don&#39;t really
[3:11] internalize what it means. This is what
[3:13] it means. The tools that you mastered in
[3:15] January are a different generation from
[3:18] the tools that shipped this week. It&#39;s
[3:20] not a minor update, people. It is an
[3:22] entirely different generation. Your
[3:24] January mental model of what AI can and
[3:26] cannot do is already wrong. I was
[3:28] texting with a friend just this past
[3:30] week, and he was telling me about the
[3:32] Rockin results in 7 hours. And I had to
[3:35] tell him, I know you think you&#39;re up to
[3:37] date, but the record is now 2 weeks. And
[3:40] by the way, Rockuten using Opus 4.6 was
[3:43] able to have the AI manage 50
[3:45] developers. That is how fast we&#39;re
[3:47] moving. that AI can boss 50 engineers
[3:49] around. Now, the 5x context window is
[3:52] the number anthropic put in the press
[3:53] release. It&#39;s the wrong number to focus
[3:55] on. The right number is a benchmark
[3:58] originally developed by OpenAI called
[4:00] the MRCV2
[4:02] score. That sounds like a mouthful and
[4:04] it&#39;s used to measure something that
[4:05] matters enormously that nobody was
[4:07] testing properly. Can a model retrieve
[4:10] and use the information inside a long
[4:12] context window? In other words, can you
[4:14] find a needle in the haststack? It&#39;s not
[4:16] about whether you can quote unquote put
[4:17] a million tokens into the context
[4:19] window. Every major model can accept big
[4:22] context windows in January 2026. The
[4:25] question is whether the model can find,
[4:27] retrieve, and use what you put in there.
[4:28] That is what matters. Sonnet 4.5, which
[4:31] was a great model from Claude just a few
[4:34] months ago, does have a million token
[4:36] window, but the ability to find that
[4:38] needle in the haststack was very low.
[4:40] About one chance in five or 18.5%.
[4:43] Gemini 3 Pro a little bit better at
[4:45] finding that needle in the haststack
[4:46] across its context window about one
[4:49] chance in four 26.3%.
[4:51] These were the best available in
[4:53] January. They could hold your codebase.
[4:56] They couldn&#39;t reliably read it. The
[4:57] context window was like a filing cabinet
[4:59] with no index. Documents went in, but
[5:02] retrieving them was kind of a random
[5:04] guess past the first quarter of the
[5:05] content. Guess what? Guess what? Opus
[5:08] 4.6 six at a million tokens has a 76%
[5:12] chance of finding that needle in the hay
[5:14] stack. At 256,000 tokens or a quarter of
[5:17] the context window, that rises to 93%.
[5:20] That is the number that matters. That is
[5:22] why 4.6 feels like such a giant leap.
[5:25] It&#39;s not because of the benchmark score.
[5:27] It&#39;s because there&#39;s a massive
[5:29] difference between a model that can hold
[5:31] 50,000 lines of code and a model that
[5:33] can hold them 50,000 lines of code and
[5:36] know what&#39;s on every line all at the
[5:38] same time. This is the difference
[5:40] between a model that sees one file at a
[5:42] time and a model that holds the entire
[5:44] system in its head simultaneously. Every
[5:47] import, every dependency, every
[5:49] interaction between modules, all visible
[5:51] at once. A senior engineer working on a
[5:54] large codebase carries a mental model of
[5:55] the whole system and they know that
[5:57] changing the O module can break the
[5:59] session handler. They know the rate
[6:01] limiter shares state with the load
[6:02] balancer. It&#39;s not because they looked
[6:03] it up. It&#39;s because they&#39;ve lived in the
[6:05] code long enough that the architecture
[6:07] becomes a matter of intuition, not a
[6:09] matter of documentation. That holistic
[6:11] awareness is often what separates a
[6:13] senior engineer from a contractor
[6:15] reading the codebase for the first time.
[6:16] Opus 4.6 can do this for 50,000 lines of
[6:20] code simultaneously. Not by summarizing,
[6:23] not by searching and not with years of
[6:24] experience. It just holds the entire
[6:27] context and reasons across it the way a
[6:29] human mind does with a system it knows
[6:31] very very deeply. And because working
[6:33] memory has improved this dramatically in
[6:35] the span of just a couple of months,
[6:36] it&#39;s actually not hard to see where the
[6:39] trajectory is going to go from here. The
[6:40] C compiler project 100,000 lines in Rust
[6:43] did require 16 parallel agents precisely
[6:46] because even a million token context
[6:48] window can&#39;t hold that whole project at
[6:51] once in its head. But at the current
[6:52] rate of improvement, it won&#39;t require 16
[6:55] agents for long. Let me tell you more
[6:56] about the Rockuten story with the 50
[6:58] developers. Now, Rocket is a Japanese
[7:00] ecom and fintech conglomerate, and they
[7:02] deployed clawed code across their
[7:04] engineering org, not as a pilot, but in
[7:06] production, handling real work and
[7:08] touching real code that ships to real
[7:11] users. Use Kaji, Rakuten&#39;s general
[7:13] manager for AI, reported what happened
[7:15] when they put Opus 4.6 on their issue
[7:18] tracker. Clawed Opus 4.6 closed 13
[7:22] issues itself. It assigned 12 issues to
[7:24] the right team members across a team of
[7:25] 50 in a single day. It effectively
[7:27] managed a 50 person org across six
[7:30] separate code repositories and also knew
[7:33] when to escalate to a human. It wasn&#39;t
[7:36] that the AI helped the engineer close
[7:38] the tickets. I want to be clear about
[7:39] that. It closed issues autonomously. It
[7:41] did the work of an individual
[7:43] contributor engineer. It also routed
[7:45] work correctly across a 50 person org.
[7:48] The model understood not just the code
[7:50] but the org chart. Which team owns which
[7:53] repo? which engineer has context on
[7:55] which subsystem, what closes versus what
[7:58] needs to escalate. That&#39;s not just code
[8:00] intelligence, that is management
[8:02] intelligence. And a system that can
[8:04] route engineering work correctly is a
[8:06] system that understands organizational
[8:08] dependencies the way a human lead
[8:10] understands them. Which means the
[8:12] coordination function that engineering
[8:14] managers spend half their time on just
[8:17] became automatable in a couple of
[8:18] months. Think about the cost structure
[8:20] that implies. A senior engineering
[8:22] manager at a company like Rakuten might
[8:25] cost a quarter million dollars a year
[8:27] fully loaded, maybe more. A meaningful
[8:29] part of their job, ticket triage, work
[8:32] routing, dependency tracking, cross team
[8:34] coordination. That is exactly what Opus
[8:37] 4.6 demonstrated it could handle. Not
[8:39] the judgment calls about what to build
[8:41] next, not the career development
[8:42] conversation, and it wasn&#39;t done over
[8:45] weeks and weeks and weeks, but the fact
[8:47] that it can do operational coordination
[8:49] that typically takes 15 to 20 hours a
[8:52] week and demonstrated it could do it for
[8:54] a full day, it shows you where things
[8:56] are going. And the broader numbers tell
[8:57] the same story. It is common now to see
[9:00] hours and hours and hours of sustained
[9:02] autonomous coding for individuals who
[9:04] are playing with this. not in the
[9:05] controlled enterprise environment even
[9:07] people can kick off multi-hour long
[9:10] coding sessions and just walk away and
[9:12] do other things and come back and see
[9:14] fully working software. That is no
[9:15] longer an unusual thing in February
[9:18] 2026. And Rockwood isn&#39;t stopping here.
[9:21] They&#39;re building an ambient agent that
[9:23] breaks down complicated tasks into 24
[9:26] parallel clawed code sessions. Each
[9:28] single one handling a different slice of
[9:30] their massive mono repo. A month of
[9:32] human engineering is generating a
[9:35] simultaneously running 24 agent stream
[9:38] that helps them to build and catch
[9:40] issues and that&#39;s in production. Now the
[9:42] detail that gets buried under these big
[9:44] numbers might be more interesting than
[9:46] all of the numbers themselves because
[9:48] non-technical employees at Rockoten are
[9:50] able to use that system to contribute to
[9:53] development through the cloud code
[9:55] terminal interface. That is right. The
[9:57] terminal is not just for engineers
[10:00] anymore. People who have never written
[10:02] code are able to ship features because
[10:04] of the work Rockin has done to integrate
[10:06] cloud code. So the boundary between
[10:07] technical and non-technical, it keeps
[10:09] breaking that down. The distinction that
[10:11] has organized knowledge worker hiring
[10:13] and compensation for 30 years is
[10:15] dissolving in a matter of months. It&#39;s
[10:18] not dissolving at the speed of your
[10:20] ability to deploy a multi-month project
[10:22] and is not dissolving at the speed it
[10:25] takes to retrain humans. That is why
[10:27] this is shocking. This is all happening
[10:29] faster than we can adjust to it. One of
[10:31] the features that is most hard for us to
[10:33] wrap our minds around is the agent teams
[10:36] feature that Opus 4.6 shipped. Tropic
[10:38] calls them team swarms internally, which
[10:40] is a little scary and I can see why the
[10:41] marketing team changed that. But the
[10:43] name is accurate. It&#39;s not a marketing
[10:45] term. It&#39;s an architecture. Multiple
[10:47] instances of clawed code are architected
[10:50] to run simultaneously. Every single one
[10:52] in its own context window. And they
[10:54] coordinate through a shared task system
[10:56] that has three simple states, right?
[10:58] Pending, in progress, and incompleted.
[11:00] Pending, in progress, and completed. One
[11:02] instance of Cloud Code is going to act
[11:04] as your lead developer. It will
[11:05] decompose the project into work items
[11:07] and assign them to specialists, track
[11:09] dependencies, and unlock bottlenecks.
[11:11] This is just like what Opus 4.6 did for
[11:14] those 50 developers. The specialist
[11:16] agents work independently, and when they
[11:18] need something, they don&#39;t just go
[11:20] through the lead, by the way. They can
[11:22] message each other directly.
[11:23] peer-to-peer coordination. It&#39;s not hub
[11:25] and spoke. There&#39;s a front-end agent,
[11:27] there&#39;s a back-end agent, there&#39;s a
[11:28] testing agent. Effectively, they are
[11:30] recreating the entire software
[11:32] engineering org inside claude code team
[11:35] swarms. And this is how that C compiler
[11:37] got built. It&#39;s not one model doing
[11:39] everything sequentially, right? It&#39;s 16
[11:41] agents that worked in parallel. Some
[11:43] building the parser, some building the
[11:45] code generator, some building the
[11:47] optimizer. And they all coordinated
[11:48] through the same kinds of structures
[11:50] that existing human engineering teams
[11:52] use, except they work 24 hours a day.
[11:56] They don&#39;t have standups, and they
[11:58] resolve coordinations through direct
[11:59] messaging rather than waiting for the
[12:01] next sprint planning session. One of the
[12:03] running questions in AI has been whether
[12:05] agents will reinvent management. I think
[12:07] this argues strongly that they did.
[12:09] Curser&#39;s autonomous agent swarm
[12:11] independently organized itself into
[12:13] hierarchical structures and strong DM
[12:15] published a production framework called
[12:16] software factory that&#39;s built around
[12:18] exactly the same hierarchical pattern.
[12:20] And now anthropic has shipped a feature
[12:22] with 13 distinct operations from
[12:24] spawning managing to coordinating
[12:26] agents. This is not really coincidence.
[12:28] It&#39;s essentially convergent evolution in
[12:30] AI. Hierarchy isn&#39;t a human
[12:33] organizational choice imposed on systems
[12:36] to ma imposed on systems to maintain
[12:39] control. It&#39;s an emergent property of
[12:41] coordinating multiple intelligent agents
[12:44] on complicated tasks. Humans invented
[12:46] management because management is what
[12:47] intelligence does when it needs to
[12:49] coordinate at scale. AI agents
[12:51] effectively discovered the same thing
[12:52] because the constraints are structural.
[12:54] They&#39;re not cultural. You need someone
[12:56] to track dependencies, right? You need
[12:58] specialists. You need communication
[12:59] channels. You need a shared
[13:01] understanding of what has been done and
[13:02] what hasn&#39;t yet been done. We did not
[13:04] impose management on AI. AI effectively
[13:08] discovered management and we helped to
[13:10] build the structure and Opus 4.6 is the
[13:13] first model that ships with the
[13:14] infrastructure to run all of this as
[13:16] just another feature. On the same day
[13:18] Opus 4.6 launched, Enthropic published a
[13:21] result that got much less attention than
[13:23] that C compiler story, but it might
[13:25] matter more in the long run. They gave
[13:26] Opus 4.6 six basic tools, Python,
[13:29] debuggers, fuzzers, and they pointed it
[13:32] at an open-source codebase. There were
[13:34] no specific vulnerability hunting
[13:36] instructions. There were no curated
[13:38] targets. This wasn&#39;t a fake test. They
[13:40] just said, &quot;Here&#39;s some tools. Here&#39;s
[13:42] some code. Can you find the problems?&quot;
[13:44] It found over 500 previously unknown
[13:48] high severity, what&#39;s called zeroday
[13:50] vulnerabilities, which means fix it
[13:52] right now. 500 in code that had been
[13:55] reviewed by human security researchers
[13:58] scanned by existing automated tools
[14:00] deployed in production systems used by
[14:03] millions of us. Code that the security
[14:06] community had considered audited with
[14:09] when traditional fuzzing by the way
[14:11] fuzzing is the fancy technical word for
[14:13] finding bugs and making sure you check
[14:15] all the code. It&#39;s like fuzzing your
[14:16] hand through the carpet and finding a
[14:18] pin or something. And when manual
[14:19] analysis failed, using a tool called
[14:22] ghost script, which is what you use to
[14:25] check these things, the model
[14:26] independently decided to analyze it a
[14:28] different way, going directly to the
[14:30] project&#39;s git history. That&#39;s right. It
[14:32] worked around obstacles and it read
[14:34] through years of commit logs to
[14:36] understand the codebase&#39;s evolution.
[14:38] Nobody told it to do this. It just
[14:40] decided to do it. And it identified
[14:42] areas where security relevant changes
[14:44] had been made hastily or incompletely
[14:47] all on its own. It invented a detection
[14:49] methodology that no one had told it to
[14:52] use. It reasoned about the code&#39;s
[14:54] history, not just about its current
[14:56] state. And it used that understanding of
[14:58] time to find vulnerabilities that static
[15:01] analysis could not reach. Humans didn&#39;t
[15:04] do this. This is why it found the bugs
[15:05] it found. This is what happens when
[15:08] reasoning meets working memory. The
[15:09] model doesn&#39;t scan for known patterns
[15:11] the way existing tools do. It builds a
[15:13] mental model and I think that&#39;s the only
[15:15] metaphor that works at this point of how
[15:17] the code works, how data flows, where
[15:20] trust boundaries exist, where
[15:22] assumptions get made and where they
[15:24] might break down. And then it probes the
[15:26] weak spots with the creativity of a
[15:28] researcher and the patience of a machine
[15:30] that never gets tired of reading commit
[15:32] logs. And I guarantee you, human
[15:34] engineers get tired of that. The
[15:36] security implications alone would
[15:38] justify calling Opus 4.6 a generational
[15:41] release. And yet again, I remind you,
[15:43] it&#39;s only been a couple of months.
[15:44] There&#39;ll be another one in a couple of
[15:45] months. But this was not the headline
[15:47] feature of Opus 4.6. As exciting as it
[15:49] is, it wasn&#39;t even the second headline
[15:52] feature. 500 zero days was the side
[15:54] demonstration. That is the density of
[15:57] capability improvement that has been
[15:59] packed into a single model update
[16:01] shipped on a Wednesday, February. Look,
[16:04] there are skeptics for every release and
[16:06] there were skeptics for 4.6 as well. And
[16:08] the skepticism tracks historically. AI
[16:11] benchmark improvements have
[16:12] underdelivered before and repeatedly for
[16:14] years. And that is why I don&#39;t depend a
[16:17] lot on benchmarks. Sure enough, within
[16:19] hours of launch, thread started to
[16:20] appear on the cloud subreddit. Is Opus
[16:23] 4.6 labbotomized? Is it nerfed? The
[16:26] pattern seems to repeat with every major
[16:28] model release. Power users who have
[16:30] fine-tuned their workflows for the
[16:32] previous version discover the new
[16:33] version handle certain tasks
[16:35] differently. The Reddit consensus, for
[16:37] what it&#39;s worth, has decided that 4.6
[16:38] six is better at coding and worse at
[16:40] writing. I haven&#39;t found that
[16:42] personally, but dismissing it would also
[16:44] probably be dishonest. Model releases
[16:46] involve trade-offs. Model releases often
[16:49] involve changes to the agent harness,
[16:51] which is all of the system prompting
[16:53] that the model makers put in that goes
[16:55] around the deployment that they don&#39;t
[16:57] talk about and they don&#39;t release. We
[16:59] don&#39;t know how it changed. We feel the
[17:01] change when we work with the system. So,
[17:02] I&#39;m sure it&#39;s possible that if you were
[17:04] a Reddit user who was used to a special
[17:07] prompt pattern that worked on Opus 4.5,
[17:10] you might indeed be frustrated that that
[17:12] pattern did not work on a much more
[17:13] capable model overall. So, I get the
[17:16] skepticism. I also get that people are
[17:18] tired of hearing the world changing
[17:20] every couple of months. It is exhausting
[17:22] to keep up with. But that doesn&#39;t mean
[17:24] it&#39;s not real. And that is part of why
[17:26] I&#39;m telling so many specific stories.
[17:28] It&#39;s important not to just look at the
[17:30] headlines. It&#39;s important not to look at
[17:32] some number changing on some stupid
[17:33] benchmark. It&#39;s important to hear the
[17:35] stories of how AI is actually changing
[17:38] in production now. So what does this
[17:40] feel like if you are not an engineer?
[17:42] What does this feel like if you don&#39;t
[17:44] write code? Cuz the C compiler, let&#39;s be
[17:46] honest, it&#39;s a developer story. The
[17:48] benchmarks are developer metrics. But
[17:51] the change underneath, what makes 4.6
[17:54] special isn&#39;t about developers per se.
[17:56] It&#39;s about what happens when AI can
[17:58] sustain complicated work for hours and
[18:00] days instead of minutes. Two CNBC
[18:03] reporters, Dear Drabosa and Jasmine Woo,
[18:05] they&#39;re not engineers, right? They&#39;re
[18:06] reporters. They sat down with Claude
[18:08] Co-work and they asked it to build them
[18:10] a Monday.com replacement. That&#39;s the
[18:12] project management tool, right? A
[18:14] project management dashboard that had
[18:16] calendar views. It had email
[18:17] integration, task boards, team
[18:19] coordination features. This is the
[18:21] product that monday.com has spent years
[18:24] and hundreds of millions of dollars
[18:25] building. It s currently supports a $5
[18:28] billion market cap for monday.com. It
[18:31] took these reporters under an hour.
[18:34] Total compute cost somewhere between $5
[18:36] and $15. I hasten to add that is not the
[18:39] same thing as rebuilding monday.com.
[18:42] This was personal software. It&#39;s not
[18:44] deployed. It&#39;s not for sale. It was just
[18:46] for them. So yes, it is a big deal. Yes,
[18:49] it is a generational change in our
[18:51] ability for nontechnical people to make
[18:53] software. No, I am not saying that dear
[18:57] Drebosa and Jasmine Woo can refound
[18:59] monday.com for $10. The real story is
[19:02] that AI can build the tools you use, the
[19:05] software you pay per seats for, the
[19:07] dashboards your company spent 6 months
[19:09] specking out with a vendor, an AI agent
[19:12] can build a working version of that in
[19:13] an afternoon, and you don&#39;t need to
[19:15] write a line of code to make it happen.
[19:17] Yes, it might just be for you. It&#39;s a
[19:19] whole new category, people. It&#39;s called
[19:21] personal software. It didn&#39;t exist just
[19:23] a few months ago. It is now increasingly
[19:26] easy to make that happen. Our daily
[19:28] experience with AI is changing in ways
[19:30] that are really difficult to benchmark,
[19:33] but that doesn&#39;t mean that they&#39;re not
[19:34] structural. A marketing ops team using
[19:36] Claude Co-work can do content audits in
[19:39] just a few minutes instead of hours and
[19:41] hours. A finance analyst running due
[19:43] diligence doesn&#39;t take a day to do it
[19:46] because the model can read the document
[19:48] set, identify the risks, and produce
[19:50] lawyer ready redlines in just a few
[19:52] minutes. Our rhythm of work is different
[19:55] now. We can dispatch five different
[19:57] tasks in a few minutes on Claude
[19:59] Co-work. We can dispatch a PowerPoint
[20:01] deck, a financial model, a research
[20:03] synthesis, two data analyses, right?
[20:06] walk away, you can grab a cup of coffee,
[20:08] and you can come back and the
[20:09] deliverables are just done. They&#39;re not
[20:12] drafts anymore. It&#39;s just finished work.
[20:15] It&#39;s mostly formatted, right? The
[20:16] pattern that&#39;s emerging for
[20:17] non-technical users is what anthropic
[20:20] Scott White calls quote vibe working.
[20:22] You describe the outcomes, not the
[20:24] process. You don&#39;t you don&#39;t tell the AI
[20:26] how to build the spreadsheet. You tell
[20:28] it what the spreadsheet needs to show.
[20:31] It figures out the formulas. It figures
[20:33] out the formatting. It figures out the
[20:35] data connections. The shift is coming
[20:37] for all of us and it&#39;s going from
[20:39] operating tools to directing agents. And
[20:41] the skill that matters now is not
[20:43] technical proficiency. It&#39;s clarity of
[20:46] our intent. Knowing what you want, being
[20:50] able to articulate the real requirement,
[20:52] not just your surface request. That is
[20:54] becoming the bottleneck. Ironically,
[20:56] it&#39;s the same bottleneck the developers
[20:58] are hitting, but from a different
[20:59] direction. The C compiler agents didn&#39;t
[21:02] need anyone to write code for them. They
[21:04] needed someone to specify what a C
[21:06] compiler means precisely enough that 16
[21:09] agents could coordinate on building one.
[21:11] The marketing team doesn&#39;t need someone
[21:12] to operate their analytics platform
[21:14] anymore. They need someone who knows
[21:16] which metrics matter and can explain
[21:17] why. The leverage across the board has
[21:20] shifted from execution to judgment
[21:23] across every function. Whether you write
[21:25] code or not, if you lead an
[21:26] organization, the number that should
[21:28] restructure your planning isn&#39;t measured
[21:30] in weeks or days. It&#39;s actually measured
[21:32] in revenue per employee. Purser, the AI
[21:35] coding tool hit $und00 million in annual
[21:37] recurring revenue with about 20 people.
[21:40] That&#39;s $5 million per employee.
[21:42] Midjourney generated 200 million people.
[21:45] Midjourney generated $200 million with
[21:48] about 40 people. Lovable, the AI app
[21:50] builder, they reached $200 million in 8
[21:52] months with 15 people. For traditional
[21:55] SAS companies, $300,000 in revenue per
[21:58] employee is considered excellent and
[22:00] $600,000 is considered elite. That would
[22:03] be notion. AI native companies are
[22:05] running at five to seven times that
[22:07] number. Not because they found better
[22:09] people necessarily, but because their
[22:11] people orchestrate agents instead of
[22:13] doing the execution themselves. McKenzie
[22:15] published a framework not for others,
[22:17] but for themselves last month. They&#39;re
[22:20] targeting parody, matching the number of
[22:22] AI agents at McKenzie to human workers
[22:25] across the firm by the end of 2026. This
[22:28] is the company that sells organizational
[22:30] design to every Fortune 500 on Earth.
[22:33] And they&#39;re saying the org chart is
[22:35] about to flip. The pattern is visible at
[22:37] startups, too. Jacob Bank.
[22:40] The pattern is visible at startups, too.
[22:42] Jacob Bank runs a million-doll marketing
[22:44] operation with zero employees and
[22:47] roughly 40 AI agents. Micro One conducts
[22:50] 3,000 AI powered interviews every single
[22:52] day, handled at a tiny fraction of the
[22:55] headcount that enterprise recruiting
[22:57] firms need floors of people to do. Three
[22:59] developers in London built a complete
[23:01] business banking platform in 6 months. A
[23:04] project that would have required 20
[23:06] engineers in 18 months before AI.
[23:08] Amazon&#39;s famous two pizza team formula,
[23:11] the idea that no team should be larger
[23:13] than what two pizzas can feed, is
[23:15] evolving into something even smaller.
[23:17] The emerging model at startups is now
[23:19] two to three humans plus a fleet of
[23:21] specialized agents all organized not by
[23:24] function but by outcome. The humans
[23:26] regardless of what their job title says
[23:28] and it increasingly doesn&#39;t matter set
[23:30] direction, evaluate quality and make
[23:32] judgment calls. The agents execute,
[23:35] coordinate, and scale. The org chart
[23:37] stops being a hierarchy of people and it
[23:39] becomes a map of human agent teams each
[23:42] owning a complete workflow end to end.
[23:45] For leaders, this changes the
[23:46] fundamental equation we&#39;ve been working
[23:48] with for a long time. It&#39;s not about how
[23:50] many people do we need to hire now. It&#39;s
[23:52] about how many agents per person is the
[23:54] right ratio and what does each person
[23:57] need to be really excellent at to make
[23:59] that ratio work. The answer to the
[24:01] second question is really the same thing
[24:03] that&#39;s distinguished really excellent
[24:05] people for a long time in software. It&#39;s
[24:07] great judgment. It&#39;s what we call taste,
[24:09] which is vague, but typically means
[24:11] deeply understanding what the customer
[24:13] wants and being able to build it. It&#39;s
[24:15] about domain expertise. It&#39;s the about
[24:17] the ability to know whether the output
[24:19] is actually really, really good. And
[24:21] those skills now have 100 orex leverage
[24:24] because they are multiplied by the
[24:26] number of agents that person can direct
[24:28] and drive against. out. Daario Amade,
[24:30] anthropic CEO, has set the odds on a
[24:32] billion dollar solo founded company
[24:35] emerging by the end of 2026 at between
[24:37] 70 and 80%. Think about it. He thinks
[24:41] there&#39;s a 75% chance that there will be
[24:44] a billion dollar solo founded company by
[24:46] the end of this year. Sam Alman
[24:48] apparently has a betting pool among tech
[24:50] CEOs on the exact same question. Now,
[24:53] whether or not you believe that version,
[24:54] the direction is undeniable. The
[24:57] relationship between headcount and
[24:59] output is broken. And the organizations
[25:01] that figure out the new ratio first are
[25:03] going to outrun everybody who is still
[25:06] assuming they need dozens of developers
[25:08] to do one major software project. If you
[25:11] follow the trajectory that Opus 4.6 set,
[25:14] by 2026, June, July, August, somewhere
[25:17] in there, I would expect agents working
[25:19] autonomously for weeks to become routine
[25:22] rather than remarkable. By the end of
[25:24] the year, we are likely to see agents
[25:27] building full applications over
[25:29] potentially a month or more at a time.
[25:31] Not toy applications, real production
[25:33] systems with real architecture decisions
[25:36] complete with security reviews, with
[25:38] test suites, with documentation, all
[25:40] handled by agent teams. The trajectory
[25:42] from hours to two weeks took just 3
[25:45] months. The trajectory from two weeks to
[25:47] months, that&#39;s coming soon. And the
[25:49] inference demand that this generates
[25:51] agents consuming tokens continuously
[25:53] around the clock across thousands of
[25:55] parallel sessions. Companies are not
[25:57] ready for this. This is what makes the
[25:59] $650 billion in hypers scale
[26:01] infrastructure look conservative rather
[26:04] than insane. Those data centers are not
[26:06] being built for chatbots people. They&#39;re
[26:08] being built for agent swarms running at
[26:10] a scale that people have had difficulty
[26:13] modeling or wrapping their heads around.
[26:15] Opus 4.6 gives us a sense of that
[26:17] future. So, what can you do about it? If
[26:19] you&#39;re sitting here thinking, &quot;Oh my
[26:21] gosh, this is too much. It is coming too
[26:23] fast.&quot; You&#39;re not alone. You&#39;re not
[26:25] alone. You can do this. If you write
[26:28] code, try running a multi- aent session
[26:30] on real work, not a toy problem, a piece
[26:32] of your codebase with real technical
[26:34] depth. Watch how the agents coordinate.
[26:37] That experience is going to change your
[26:38] mental model of what agents can do in a
[26:41] way that matters much more than anything
[26:43] else. Because increasingly the way we
[26:45] work is the bottleneck for AI. If we
[26:48] want to go faster and build more, if we
[26:51] want to feel like we have the ability to
[26:54] do production work at the speed that AI
[26:57] demands because increasingly that&#39;s what
[26:59] they&#39;re going to expect from humans. I
[27:00] got to say, if we want to be ready for
[27:03] the future, best way we can do it is to
[27:05] change our mental models. If you don&#39;t
[27:07] write code, open up Claude Co-work.
[27:09] handed a task you&#39;ve been
[27:11] procrastinating on that&#39;s that&#39;s felt
[27:12] really hard, right? A competitive
[27:14] analysis task, maybe a financial model
[27:16] task, a content audit across last
[27:18] quarter&#39;s output. Just describe the
[27:20] outcome you want, not the steps to get
[27:22] there. See what comes back. The gap
[27:24] between what you expect and what you get
[27:27] is the gap between your current mental
[27:29] model and where the tools are today. And
[27:31] for managers, look honestly at the 20
[27:33] hours a week your team spends on
[27:35] operational coordination, ticket
[27:37] routing, dependency tracking. ask how
[27:39] many of those hours really require
[27:41] excellent human judgment and which are
[27:43] just pattern matching because I got to
[27:46] say your AI can probably take over a lot
[27:48] of the coordination work already and if
[27:51] you run an organization if you&#39;re on the
[27:52] senior leadership team you got to
[27:54] understand the question for your org has
[27:56] changed it&#39;s not about should we adopt
[27:58] AI or even which teams adopt it first
[28:01] it&#39;s really what is our agentto human
[28:03] ratio and what does each human need to
[28:05] be excellent at to make that ratio work
[28:07] and how do We support our humans to get
[28:09] there. The people working in knowledge
[28:12] work desperately need their leaders to
[28:14] understand that humans need a ton of
[28:18] support to get through this change
[28:19] management and become a new kind of
[28:21] worker that partners with AI. That is
[28:23] not an easy thing and most orgs are
[28:25] underinvesting in their people. I tell
[28:27] people in AI that if you are on the
[28:29] cutting edge of AI, it feels like you&#39;re
[28:32] time traveling always because you look
[28:34] at what&#39;s happening around you and then
[28:36] you go and you talk to people who
[28:38] haven&#39;t heard about it and they look at
[28:39] you like you&#39;re crazy. They say, &quot;No,
[28:41] you can&#39;t do that. You can&#39;t run 16
[28:43] agents at a time and run a Rust
[28:45] compiler. What do you mean?&quot; And AI can
[28:48] manage 50 people. And when you tell them
[28:50] that&#39;s just a Wednesday in February and
[28:52] more is coming soon, then they really
[28:54] roll their eyes. But welcome to
[28:56] February. This is where we are. AI
[28:58] agents can build production grade
[28:59] compilers in just two weeks. They manage
[29:02] engineering orgs autonomously. They can
[29:04] discover hundreds of security
[29:06] vulnerabilities that human researchers
[29:07] missed. They can build your competitor&#39;s
[29:09] product in an hour for the cost of your
[29:11] lunch. They can coordinate in teams,
[29:13] resolve conflicts, and deliver at a
[29:15] level that did not exist 8 weeks ago.
[29:17] None of this was possible in January.
[29:20] And we don&#39;t know where this stops. We
[29:22] just know it&#39;s going faster. That&#39;s the
[29:24] tension underneath all of the benchmark
[29:26] scores, all the deployment numbers. The
[29:28] fact is the agents are here, they work,
[29:30] and it&#39;s just getting faster from here.
[29:32] And we&#39;re not sure what happens next.
[29:35] The question I have for all of us is how
[29:39] do we do a better job supporting each
[29:41] other in adjusting to what feels like a
[29:43] race out of MadMax some days? Welcome to
[29:46] February. It&#39;s moving fast. If you&#39;re a
[29:49] people leader, you need to take time to
[29:51] think about how to support your people
[29:52] to make it through this transition. If
[29:54] you are an individual contributor or a
[29:56] manager, I am putting as many tools as I
[29:59] can up on the Substack to help you get
[30:01] through this. But the best thing you can
[30:03] do, it&#39;s not about the Substack. I don&#39;t
[30:05] care. It&#39;s about you touching the AI and
[30:09] getting hands-on and actually building
[30:12] or trying to build with an AI agent
[30:15] system that launched not in January, not
[30:18] in December, but in February. And you
[30:20] need to take that mindset forward every
[30:23] single month. In March, you should be
[30:25] touching an AI system that was built in
[30:27] March. Every month now matters. Make
[30:29] sure that you don&#39;t miss it because our
[30:32] future as knowledge workers increasingly
[30:34] depends on our ability to keep the pace
[30:37] and work with AI agents.
