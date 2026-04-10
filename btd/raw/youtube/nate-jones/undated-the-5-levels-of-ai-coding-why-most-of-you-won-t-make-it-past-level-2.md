---
title: "The 5 Levels of AI Coding (Why Most of You Won't Make It Past Level 2)"
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=bDcgHzCBgmQ"
video_id: "bDcgHzCBgmQ"
duration: "42:15"
transcript_method: "youtube-captions"
segment_count: 1123
char_count: 42451
status: ingested
topics: []
meta_patterns: []
---

# The 5 Levels of AI Coding (Why Most of You Won't Make It Past Level 2)

**Creator**: nate-jones | **Duration**: 42:15
**URL**: https://www.youtube.com/watch?v=bDcgHzCBgmQ
**Transcript**: 1123 segments, 42451 chars

## Transcript

90% of cloud code was written by claude code. Codeex is releasing features entirely written by codecs. And yet most developers using AI empirically get slower, at least at first. The gap between these two facts is where the future of software lives. Imagine hearing this at work. Code must not be written by humans. Code must not be even reviewed by humans. Those are the first two principles of a real production software team called Strong DM and their software factory. They're just three engineers. No one writes code. No one reviews code. The system is a set of AI agents orchestrated by markdown specification files. The system is designed to take a specification, build the software, test the software against real behavior scenarios, and independently ship it. All the humans do is write the specs and evaluate the outcomes. The machines do absolutely everything in between. As I was saying, meanwhile, 90% and yes, it's true. Over at Anthropic, 90% of Claude Code's codebase was written by Claude Code itself. Boris Triny, who leads the Claude Code project at Anthropic, hasn't personally written code in months. And Anthropic's leadership is now estimating that functionally 100% the entirety of code produced at the company is AI generated. And yet at the same time, in the same industry, with us here on the same planet, a rigorous 2025 randomized control trial by METR found that experienced open-source developers using AI tools took 19% longer to complete tasks than developers working without them. There is a mystery here. They're not going faster, they're going slower. And here's the part that should really unsettle you. Those developers are bad at estimation. They believed AI had made them 24% faster. They were wrong not just about the direction but about the magnitude of the change. Three teams are running lights out software factories. The rest of the industry is getting measurably slower. Just a few teams around tech are running truly lights out software factories. The rest of the industry tends to get measurably slower while convincing themselves and everyone around them with press releases that they're speeding up. The distance between these two realities is the most important gap in tech right now and almost nobody is talking honestly about it and what it takes to cross it. That is what this video is about. Dan Shapiro, the CEO over at Glow Forge and the veteran of multiple companies built on the boundary between software and physical products, just published a framework earlier this year in 2026 that maps where the industry stands. He calls it the five levels of vibe coding. And the name is deliberately informal because the underlying reality is what matters. Level zero is what he calls spicy autocomplete. You type the code, the AI suggests the next line. You accept or reject. This is GitHub copilot in its original format. Just a faster tab key. The human is really writing the software here. And the AI is just reducing the keystrokes and the effort your fingers have. Level one is coding intern. You hand the AI a discrete well scoped task. You write the function. You build the component. You refactor the module. That's the task you give the AI. You hand the AI a discrete and well scoped task like write this function or build this component or refactor this module. You then review as the human everything that comes back. The AI handles the tasks. The human handles the architecture, the judgment and the integration. Do you see the pattern here? Do you see how the human is stepping back more and more through these levels? Let's keep going. Level two is the junior developer. The AI handles multifile changes. It can navigate a codebase. It can understand dependencies. It can build features that span modules. You're reviewing more complicated output, but you as a human are still reading all of the code. Shapiro estimates that 90% of developers who say they are AI native are operating at this level. And I think from what I've seen, he's right. Software developers who operate here think they're farther along than they are. Let's move on. Level three, the developer is now the manager. This is where the relationship starts to flip. This is where it gets interesting. You're now not writing code and having the AI help. You're simply directing the AI and you're reviewing what it produces. Your day is whether you want to read, whether you want to approve, whether you want to reject, but at the feature level, at the PR level. The model is doing the implementation. The model is submitting PRs for your review. You have to have the judgment. Almost everybody tops out here right now. Most developers, Shapiro says, hit that ceiling at level three because they are struggling with the psychological difficulty of letting go of the code. But there are more levels. And this is where it gets spicy and exciting. Level four is the developer as the product manager. You write a specification, you leave, you come back hours later and check whether the tests pass. You're not really reading the code anymore. You're just evaluating the outcomes. The code is a black box. you care whether it works, but because you have written your eval so completely, you don't have to worry too much about how it's written if it passes. This requires a level of trust both in the system and in your ability to write spec. And that quality of spec writing almost nobody has developed well yet. Level five, the dark factory. This is effectively a black box that turns specs into software. It is where the industry is going. No human writes the code. No human even reviews the code. The factory runs autonomously with the lights off. Specification goes in, working software comes out. And you know, Shapiro is correct. Almost nobody on the planet operates at this level. The rest of the industry is mostly between level one and level three, and most of them are treating AI kind of like a junior developer. I like this framework because it gives us really honest language for a conversation that's been drowning in hype. When a vendor tells you their tool writes code for you, they often mean level one. When a startup says they're doing agentic software development, they often mean level two or three. But when strong DM says their code must not be written by humans, they really do mean level five, the dark factory, and they actually operate there. The gap between marketing language and operating reality is enormous. and collapsing that gap into what is actually going on on the ground requires changes that go way beyond picking a better AI tool. So many people look at this problem and think this is a tool problem. It's not a tool problem. It's a people problem. So what does level five software development actually look like? I think strong DM software factory is the most thoroughly documented example of level five in production. Simon Willis, one of the most careful and credible observers in the developer tooling space, calls StrongDm Software Factory, quote, "The most ambitious form of AI assisted software development that I've seen yet." The details are really worth digging into here because they reveal what it looks like to run a dark factory for software on today's agents. And as we have this discussion, I want you to keep in mind that for most of us listening, we are getting to time travel. We are seeing how a bold vision for the future can be translated into reality with today's agents and today's agent harnesses. It is only going to get easier as we go into 2026 which is one of the reasons I think this is going to be a massive center of gravity for future agentic software development practices. We are all going to level five. So what does strong DM do? The team is three people. Justin McCarthy, CTO, Jay Taylor, and Nan Chowan. They've been running the factory since July of last year, actually. And the inflection point they identify is Claude 3.5 Sonnet, which shipped actually in the fall of 2024. That's when long horizon agentic coding started compounding correctness more than compounding errors. Give them credit for thinking ahead. Almost no one was thinking in terms of dark factories that far back. But they found that 3.5 sonnet could sustain coherent work across sessions long enough that the output was reliable and it wasn't just a flash in the pan. It wasn't just demo worthy and so they built around it. The factory runs on an open-source coding agent called attractor. The repo is just three markdown specification files and that's it. That's the agent. The specifications describe what the software should do. The agent reads them. It writes the code and it tests it. And here's where it gets really interesting and where most people's mental model really starts to break down. Strong DM doesn't actually use traditional software tests. They use what they call scenarios. And the distinction is important. Tests typically live inside the codebase. The AI agent can read them, which means the AI agent can intentionally or not optimize for passing the tests rather than building correct software. It's the same problem as teaching to the test in education. You can get perfect scores and shallow understanding. Scenarios are different. Scenarios live outside the codebase. They're behavioral specifications that describe what the software should do from an external perspective, stored separately so the agent cannot see them during development. They function as a holdout set. The same concept that machine learning users use to prevent overfitting. The agent builds the software and the scenarios evaluate whether the software actually works. The agent never sees the evaluation criteria. It can't game the system. This is really a new idea in software development and I don't see it implemented very frequently yet. But it solves a problem that nobody was thinking about when all the code was written by humans. When humans write code, we don't tend to worry about the developer gaming their own test suite unless incentives are really, really skewed at that organization and then you have bigger problems. When AI writes the code, optimizing for test passage is the default behavior unless you deliberately architect around it. And it's one of the most important differences to really understand as you start to think about AI as a code builder. Strongdm architected around that with external scenarios. The other major piece of the architecture is what StrongDM calls their digital twin universe. Behavioral clones of every external service the software interacts with. a simulated octa, a simulated Jira, a simulated Slack, Google Docs, Google Drive, Google Sheets. The AI agents develop against these digital twins, which means they can run full integration testing scenarios without ever touching real production systems, real APIs, or real data. It's a complete simulated environment purpose-built for autonomous software development. And the output is real. CXDB, their AI context store, has 16,000 lines of Rust, nine and a half thousand lines of Go, and 700 lines of TypeScript. It's shipped, it's in production, it works, it's real software, and it's built by agents end to end. And then the metric that tells you how seriously they take it. They say if you haven't spent $1,000 per human engineer, your software factory has room for improvement. I think they're right. That's not a joke. $1,000 per engineer per day enables AI agents to run at a volume that makes the cost of compute meaningful if you are giving them a mission to build software that has real scale and real utility in production use cases and it's often still cheaper than the humans they're replacing. Let's hop over and look at what the hyperscalers are doing. The self-referential loop has taken hold at both anthropic and open AAI and it's stranger than the hype might make it sound. Codex 5.3 is the first frontier AI model that was instrumental in creating itself. And that's not a metaphor. Earlier builds of Codeex would analyze training logs, would flag failing tests, and might suggest fixes to training scripts. But this model shipped as a direct product of its own predecessors coding labor. OpenAI reported a 25% speed improvement and 93% fewer wasted tokens in the effort to build Codeex 5.3. And those improvements came in part from the model identifying its own inefficiencies during the build process. Isn't that wild? Cloud code is doing something similar. 90% of the code in Claude Code, including the tool itself, was built by Claude Code, and that number is rapidly converging toward 100%. Boris Churny isn't joking when he talks about not writing code in the last few months. He's simply saying his role has shifted to specification, to direction, to judgment. Anthropic is estimating all of their company moving to entirely AI generated code about now. Everyone at Anthropic is architecting and the machines are implementing. And the downstream numbers tell the same story. When I made a video on co-work and talked about how it was written in 10 days by four engineers, what I want you to remember is it wasn't just four engineers hyperting so that they could get that out super fast and write every line by hand. No, no, no. They were directing machines to build the code for co-work. And that's why it was so fast. 4% of public commits on GitHub are now directly authored by Claude Code, a number that Anthropic thinks will exceed 20% by the end of this year. I think they're probably right. Claude Code by itself has hit a billion dollar run rate just 6 months since launch. This is all real today in February of 2026. The tools are building themselves. They're improving themselves. is they're enabling us to go faster at improving themselves and that means the next generation is going to be faster and better than it would have been otherwise and we're going to keep compounding. The feedback loop on AI has closed and the question is not whether we're going to start using AI to improve AI. The question is how fast that loop is going to accelerate and what it means for the 40 or 50 million of us around the world who currently build software for a living. This is true for vendors as much as it's true for software developers. And I don't think we talk about that enough because the gap between what's possible at the frontier in February of 2026 and what tends to happen in practice and what vendors want to sell has never been wider. That MER study, a randomized control trial, by the way, not a survey, found that open source developers using AI coding tools completed their task 19% slower. We talked about that, right? The researchers controlled for task difficulty. They controlled for developer experience. They controlled even for tool familiarity and none of it mattered. AI made even experienced developers slower. Why? In a world where co-work can ship that fast. Why? Because the workflow disruption outweighed the generation speed. Developers spent time evaluating AI suggestions, correcting almost right code, context switching between their own mental model and the model's output, and debugging really subtle errors introduced by generated code that looked correct but weren't. 46% of developers in broader surveys say they don't fully trust AI generated code. These guys aren't lites, right? This is experienced engineers running into a consistent problem. The AI is fast, but it struggles with the reliability to trust without what they view as vital human review. And this irony is the J curve that adoption researchers keep identifying. When you bolt an AI coding assistant onto an existing workflow, productivity dips before it gets better. It goes down like the bottom of a J. Sometimes for a while, sometimes for months. And the dip happens because the tool changes the workflow, but the workflow has not been redesigned around the tool explicitly. And so you're kind of running a new engine on old transmission. The gears are going to grind. Most organizations are sitting in the bottom of that J curve right now. And many of them are interpreting the dip as evidence that AI tools don't work, that the vendors did not tell them the truth, and that the evidence that their workflows haven't adapted is really evidence that AI is hype and not real. I think GitHub Copilot might be the clearest illustration of this. It has 20 million users, 42% market share among AI coding tools, apparently. Uh, and lab studies show 55% faster code completion on isolated tasks. I'm sure that makes the people driving GitHub Copilot happy in their slide decks. But in production, the story is much more complicated. There are larger poll requests. There are higher review costs. There's more security vulnerabilities introduced by generated code. And developers are wrestling with how to do it well. One senior engineer put it really sharply. C-Ilot makes writing code cheaper but owning it more expensive. And that is actually a very common sentiment I've heard across a lot of engineers in the industry. not just for co-pilot but for AI generated code in general. The organizations that are seeing significant call it 25 30% or more productivity gains with AI are not the ones that just installed co-pilot had a one-day seminar and called it done. They're the ones that thought carefully went back to the whiteboard and redesigned their entire development workflow around AI capabilities. changing how they write their specs, changing how they review their code, changing what they expect from junior versus senior engineers, changing their CI/CD pipelines to catch the new category of errors that AI generated code introduces. End to end process transformation. It's not about tool adoption. And end toend transformation is hard. It's sometimes it's politically contentious. It's expensive. It's slow and most companies don't have the stomach for it. Which is why most companies are stuck at the bottom of the J curve. Which is why the gap between frontier teams and everyone else is not just widening, it's accelerating rapidly. Because those teams on the edge that are running dark factories, they are positioned to gain the most. As tools like Opus 4.6 and Codeex 5.3 enable widespread agentic powers for every software engineer on the planet. 95% of those software engineers don't know what to do with that. It's the ones that are actually operating at level four, level five that truly get the multiplicative value of these tools. So if this is a politically contentious problem, if this is not just a tool problem but a people problem, we need to look at the nature of our software organizations. Most software organizations were designed to facilitate people building software. every process, every ceremony, every role. They exist because humans building software in teams need coordination structures. Stand-up meetings exist because developers working on the same codebase, they got to synchronize every single day. Sprint planning exists because humans can only hold a certain number of tasks in working memory and then they need a regular cadence to rep prioritize. Code review exists because humans make mistakes that other humans can catch. QA teams exist because the people who build software, they can't evaluate it objectively. You get the idea. Every one of these structures is a response to a human limitation. And when the human is no longer the one writing the code, the structures, they're not optional, they're friction. So what does sprint planning look like when the implementation happens in hours, not weeks? What does code review look like when no human wrote the code and no human can really review the diff that AI produced in 20 minutes because it's going to produce another one in 20 more minutes. So what does a QA team do when the AI already tested against scenarios it was never shown? Strong BM's threeperson team doesn't have sprints. They don't have standups. They don't have a Jiraa board. They write specs and they evaluate outcomes. That is it. The entire coordination layer that constitutes the operating system of a modern software organization. The layer that most managers spend 60% of their time maintaining is just deleted. It does not exist. Not because it was eliminated as a cost-saving measure, but because it no longer serves a purpose. This is the structural shift that's harder to see than the tech shift, and it might matter more. The question is becoming what happens to the organizational structures that were built for a world where humans write code? What happens to the engineering manager whose primary value is coordination? What happens to the scrum master, the release manager, the technical program manager whose job is to make sure a dozen teams ship on time? Look, those roles don't disappear overnight, but the center of gravity is shifting. The engineering manager's value is moving from coordinate the team building the feature to define the specification clearly enough that agents build the feature. The program manager's value is moving from track dependencies between human teams to architect the pipeline of specs that flow through the factory. The skills that matter are shifting very rapidly from coordination to articulation. From making sure people are rowing in the same direction to making sure the direction is described precisely enough that machines can go do it. And oh, by the way, for engineering managers, there's an extra challenge. How do you coach your engineers to do the same thing? It's a people challenge. If you think this is a trivial shift, you have never tried to write a specification detailed enough for an AI agent to implement it correctly without human intervention. And you've certainly never sat down and tried to coach an engineer to do the same. It is a different skill. It requires the kind of rigorous systems thinking that most organizations have never needed from most of their people because the humans on the other end of the spec could fill in the gaps with judgment, with context, with a slack message that says, "Did you mean X or Y?" The machines don't have that layer of human context. They build what you described. If what you described was ambiguous, you're going to get software that fills in the gaps with software guesses, not customer- ccentric guesses. The bottleneck has moved from implementation speed to spec quality. And spec quality is a function of how deeply you understand the system, your customer, and your problem. That kind of understanding has always been the scarcest resource in software engineering. The dark factory doesn't reduce the demand for that. It just makes the demand an absolute law. It becomes the only thing that matters. Now, let's be honest. Everything that I have just talked about assumes you're building from scratch. Most of the software economy is not built from scratch. The vast majority of enterprise software is brownfield. It's existing systems. It's accumulated over years, over decades. It's running in production, serving real users, carrying real revenue. CRUD applications that process business transactions. Monoliths that have grown organically through 15 years of feature additions. CI/CD pipelines tuned to the quirks of a specific codebase and a specific team's workflow. Config management that exists in the heads of the three people who've been at the company long enough to remember why that one environment variable is set to that one value. You know who you are. You cannot dark factory your way through a legacy system. You cannot just pretend that you can bolt that on. It doesn't work that way. The specification for that does not exist. The tests, if they're any, cover 30% of your existing codebase, and the other 70% runs on institutional knowledge and tribal lore and someone who shows up once a week in a polo shirt and knows where all the skeletons are buried in the code. The system is the specification. It's the only complete description of what the software does because no one ever wrote down the thousand implicit decisions that accumulated over a decade or more of patches of hot fixes of temporary workarounds that of course became permanent. This is the truth about the interstitial states that lie along this continuum toward more autonomous software development. For most organizations, the path is not to start with deploy an agent that writes code. It starts with let's develop a specification for what your real existing software really actually does. And that specification work that reverse engineering of the implicit knowledge embedded in a running system is very difficult and it's deeply human work. It requires the engineer who knows why the billing module has the one edge case for Canadian customers. It requires the architect who remembers which micros service it was that carved out of the monolith under duress during the 2021 outage and we've always maintained it ever since. It requires the product person who can explain what the software actually does for real users versus what the PRD says it does. Domain expertise, ruthless honesty, customer understanding, systems thinking. exactly the human capabilities that matter even more in the dark factory era, not less. Look, the migration path is different for every business, but it starts to look something like this. First, you use your AI as much as you can at say level two or level three to accelerate the work your developers are already doing, writing new features, fixing bugs, refactoring modules. This is where most organizations are at now and it's where the J-Curve productivity dip and it's where the J-Curve productivity dip happened. You should expect that. Second, you start using AI to document what your system really does, generating specs directly from the code, building scenario suites that capture real existing behavior, creating the holdout sets that a future dark factory will need. Then you redesign your CI/CD pipeline to handle AI generated code at volume. different testing strategies, different review processes, different deployment gates. Fourth, you start to begin to shift new development to level four or five autonomous agent patterns while maintaining the legacy system in parallel. That path takes time. Anyone telling you otherwise is selling you something. The organizations that will get there the fastest aren't necessarily the ones that bought the fanciest vendor tools. They're the ones who can write the best and most honest specs about their code, who have the deepest domain understanding, who have the discipline to invest in the boring, unglamorous work of documenting what their systems really do and of how they can support their people to scale up in the ways that will support this new dark factory era. I cannot give you a clear timeline here. For some organizations, this is looking like a multi-year transition, and I don't want to hide the ball on that. Some are going faster and it's looking like multimonth. It will depend, frankly, on the stomach you have for organizational pain. And that brings me to the talent reckoning. Junior developer employment is dropping 9 to 10% within six quarters of widespread AI coding tool adoption, according to a 2025 Harvard study. Anyone out there at the start of their career is nodding along and saying it's actually worse than that. In the UK, graduate tech roles fell 46% in 2024 with a further 53% drop projected by 2026. In the US, junior developer job postings have declined by 67%. Simply put, the junior developer pipeline is starting to collapse, and the implications go far beyond the people who cannot find entry-level jobs, although that is bad enough and it's a real issue. The career ladder in software engineering has always worked like this. Juniors learn by doing. They write simple features. They fix small bugs. They absorb the codebase through immersion. Seniors review the work and mentor them and catch their mistakes. Over 5 to seven years, a junior becomes a senior through accumulated experience. The system is frankly an apprenticeship model wearing enterprise clothing. AI breaks that model at the bottom. If AI handles the simple features and the small bug fixes, the work that juniors lean on, where do the juniors learn? If AI reviews code faster and more thoroughly than a senior engineer doing a PR review, where does the mentorship start to happen? The career ladder is getting hollowed out from underneath. Seniors at the top, AI at the bottom, and a thinning middle where learning used to happen. So, the pipeline is starting to break. And yet, we need more excellent engineers than we have ever needed before, not fewer engineers. I've said this before. I do not believe in the death of software engineering. We need better engineers. The bar is rising and it's rising toward exactly the skills that have always been the hardest to develop and the hardest to hire for. The junior of 2026 needs the systems design understanding that was expected of a mid-level engineer in 2020. Not because the entry-level work necessarily got harder, but because the entry-level work got automated and the remaining work requires deeper judgment. And you don't need someone who can write a CRUD endpoint anymore. Right? The AI will handle that in a few minutes. You need someone who can look at a system architecture and identify where it will break under load, where the security model has gaps, where the user experience falls apart at the edge cases, and where the business logic encodes assumptions that are about to become wrong. And if you think as a junior that you can use AI to patch those gaps, I've got news for you. The seniors are using AI to do that and they have the intuition over the top. So you need systems thinking, you need customer intuition. You need the ability to hold a whole product in your head and reason about how those pieces interact. You need the ability to write a specification clearly enough that an autonomous agent can implement it correctly, which requires understanding the problem deeply enough to anticipate the questions the agent does not know to ask. Those skills have always separated really great engineers from merely adequate ones. The difference now is that adequate is no longer a viable career position regardless of seniority because adequate is what the models do. Enthropics hiring has already shifted. Open AAI's hiring has already shifted. Hiring is shifting across the industry and it's shifting toward generalists over specialists. People who can think across domains rather than people who are expert in one really narrow tech stack. The logic is super straightforward, right? When the AI handles the implementation, the human's value is in understanding the problem space broadly enough to direct implementation correctly. A specialist who knows everything about Kubernetes but can't reason about the product implications of an architectural decision is way way less valuable than a generalist who understands the systems, the users, and the business constraints even if they can't handconfigure a pot. Some orgs are moving toward what amounts to a medical residency model for their junior engineers. Simulated environments where early career developers learn by working alongside AI systems, reviewing AI output, and developing judgment about what's correct and what's subtly wrong by working with AI. It is not the same thing as learning by writing code from scratch. I don't want to pretend it is, but it might be better training for a world where the job is directing and evaluating AI output rather than producing code from a blank editor. I will also call out, as I've called out before, there are organizations preferentially hiring juniors right now, despite the pipeline collapsing precisely because the juniors they are looking for provide an AI native injection of fresh blood into an engineering org where most of the developers started their careers long before chat GPT launched in 2022. In that world, having people who are AI native from the get-go can be a huge accelerating factor. And that points to one of the things that is a plus for juniors coming in. Lean into the AI if you're a junior. Lean into your generalist capabilities. Lean into how quickly you can learn. Show that you can pick up a problem set and solve it in a few minutes with AI across a really wide range of use cases. Gartner is projecting that 80% of software engineers will need to upskill in AI assisted dev tools by 2027. Estimating wrong. it's going to be 100%. The number is not the point. The question isn't whether the skills need to change. We all know they will. It's whether we in the industry can develop the training infrastructure quickly enough to keep pace with the capability change. Because I've got to be honest with you, if you're a software engineer and the last model you touched was released in January of 2026, you are out of date. You need a February model. And that is going to keep being true all the way through this year and into next year. And whether the organizations that depend on software can tolerate a period where the talent pipeline is being built and rebuilt like this on a monthly basis is a big question because you have to invest in your people more to get them through this period of transition. So what does the shape of a new org look like when we look at AI native startups? How are they different from these traditional orgs? cursor. The AI native code editor is past half a billion dollars in annual recurring revenue and it has at last count a couple of dozen few dozen employees. It's operating at roughly three and a half million in revenue per employee in a world where the average SAS company is generating $600,000 per employee. Midjourney is similar. They have the story of generating half a billion in revenue with a few dozen people around a hundred a little bit more depending on who's counting. Lovable is well into the multiundred million dollars in ARR in just a few months and their team is scaling but it's way way behind the amount of revenue gain they're experiencing. They are also seeing that multi-million dollar revenue per employee world. The top 10 AI native startups are averaging three and change million in revenue per employee which is between five and six times the SAS average. This is happening enough that it is not an outlier. This is the template for an AI native org. So what does that org look like? If you have 15 million people generating a hund00 million a year, which we've seen in multiple cases in 2025, what does that look like? It does not look like a traditional software company. It does not have a traditional engineering team, a traditional product team, a QA team, a DevOps team. It looks like a small group of people who are exceptionally good at understanding what users need, who are exceptional at translating that into clear spec, and who are directing AI systems that handle that implementation. The org chart is flattening radically. The layers of coordination that exist to manage hundreds of engineers building a product can be deleted when the engineering is done by agents. The middle management layer is going to either evolve into something fundamentally different at these big companies or it's going to cease to exist entirely. The only people who remain are the ones whose judgment cannot be automated. The ones who know what to build for whom and why, and who have excellent AI sense. Sort of like horse sense where you have a sense of the horse if you're a rider and you can direct the horse where you want to go. You'll need people who have that sense with artificial intelligence. And yes, it is a learned skill. The restructuring that is going to happen as more and more companies move toward that cursor model of operating, even if they never completely get there, that restructuring is real. It's going to happen. It's going to be very painful for specific people in specific roles. the middle management layer, the junior developer whose entry-level work is getting automated first, the QA engineers who just run manual test passes, the release manager whose entire value is just coordination. Those kinds of roles are going to have to transform or they're just going to disappear. And for people in those roles, you need to find ways to move toward developing with AI and rewriting your entire workflow around agents as central to your development. That is going to look different depending on your stack, your manager's budget for token spend, and your appetite to learn. But you need to lean that way as quickly as you can for your own career's sake. I want to leave you with one thing that gets lost in every conversation about AI and jobs. We have never found a ceiling on the demand for software and we have never found a ceiling on the demand for intelligence. Every time the cost of computing has dropped from mainframes to PCs, from PCs to cloud, from cloud to serverless, the total amount of software the world produced did not stay flat. It exploded. New categories of software that were economically impossible at the old cost structure became viable and then ubiquitous and then essential. The cloud didn't just make existing software cheaper to run. It created SAS, mobile apps, streaming, real-time analytics, and a hundred other categories that could not exist when you had to buy a rack of servers to ship something. I think the same dynamic applies now and it applies at a scale that dwarfs every previous transition. Every company in every industry needs software. Most of them, like a regional hospital or a mid-market manufacturer or a family logistics company. They can't afford to build what they need at current labor costs. A custom inventory system traditionally could cost a half a million or more and take over a year. A patient portal integration might cost a third of a million. You get the idea. These companies tend to make do with spreadsheets today. But we are dropping the cost of software production by an order of magnitude or more. And now that unmet need is becoming addressable. Not theoretically now. You can serve markets that traditional software companies could never afford to enter. The total addressable market for software is exploding. Now this can sound like a very comfortable rebuttal to people struggling with the pain of jobs disappearing. It is not the same thing. Just saying the market is getting bigger doesn't fix it. But it is a structural observation about what happens as intelligence gets cheaper. The demand is going to go up, not down. We watched this happen with compute, with storage, with bandwidth, with every resource that's ever gotten dramatically cheaper. Demand has never saturated. The constraint has always moved to the next bottleneck. And in this case, the judgment is to know what to build and for whom. The people who thrive in this world are going to be the ones who were always the hardest to replace. The ones who understand customers deeply, who think in systems, who can hold ambiguity and make decisions under uncertainty, who can articulate what needs to exist before it exists at all. The dark factory does not replace those people and it won't. It amplifies them. It turns a great product thinker with five engineers into a great product thinker with unlimited engineering capacity. The constraint moves from can we build it to should we build it and should we build it has always been the harder and more interesting question. I don't have a silver bullet to magically resolve this but I have to tell you that we must confront the tension or we are being dishonest. The dark factory is real. It is not hype. It actually works. A small number of teams around the world are producing software without any humans writing or reviewing code. They are shipping shippable production code that improves with every single model generation. The tools are building themselves. The feedback loop is closed. And those teams are going faster and faster and faster and faster. And yet most companies aren't there. They're stuck at level two. They're getting measurably slower with AI tools they believe are making them faster. They're wrong. running organizational structures designed for a world where humans do all of the implementation work. Both of these things are true at the same time. The frontier is farther ahead than almost anyone wants to admit and the middle is farther behind than the frontier teams like to talk about. The distance between them isn't a technology gap. It's a people gap. It's a culture gap. It's an organizational gap. It's a willingness to change gap that no tool and no vendor can close. The enterprises that get across this distance are not the ones that buy the best coding tool. They're the ones that do the very hard, very slow, very unglamorous work of documenting what their systems do, of rebuilding their org charts and their people around the skill of judgment instead of the skill of coordination. And they are organizations who invest in the kind of talent that understands systems and customers deeply enough to direct machines to build anything that should be built. And those orgs need to be honest enough with themselves to admit that this change will not happen as fast as they want it to because people change slowly. The dark factory does not need more engineers, but it desperately needs better ones. And better means something different than it did a few years ago. It means people who can think clearly about what should exist, describe it precisely enough that machines can build it and who can evaluate whether what got built actually serves the real humans it was built for. This has always been the hard part of software engineering. We just used to let the implementation complexity hide how few people were actually good at it. The machines have now stripped away that camouflage, and we're all about to find out how good we are at building software. I hope this video has helped you make sense of the enormous gap between the dark factories in automated software production and the way most of us are building software today. Best of luck navigating that transition. I wrote up a ton of exercises and a ton of resources over on the Substack if you'd like to dig in further. This tends to be something where people want to learn more, so I wanted to give you as much as I could. Have fun, enjoy, and I'll see you in the comments.

## Timed Segments

[0:00] 90% of cloud code was written by claude
[0:02] code. Codeex is releasing features
[0:04] entirely written by codecs. And yet most
[0:07] developers using AI empirically get
[0:10] slower, at least at first. The gap
[0:12] between these two facts is where the
[0:13] future of software lives. Imagine
[0:15] hearing this at work. Code must not be
[0:18] written by humans. Code must not be even
[0:20] reviewed by humans. Those are the first
[0:23] two principles of a real production
[0:24] software team called Strong DM and their
[0:27] software factory. They&#39;re just three
[0:30] engineers. No one writes code. No one
[0:32] reviews code. The system is a set of AI
[0:35] agents orchestrated by markdown
[0:37] specification files. The system is
[0:39] designed to take a specification, build
[0:41] the software, test the software against
[0:43] real behavior scenarios, and
[0:45] independently ship it. All the humans do
[0:48] is write the specs and evaluate the
[0:50] outcomes. The machines do absolutely
[0:53] everything in between. As I was saying,
[0:55] meanwhile, 90% and yes, it&#39;s true. Over
[0:58] at Anthropic, 90% of Claude Code&#39;s
[1:00] codebase was written by Claude Code
[1:02] itself. Boris Triny, who leads the
[1:04] Claude Code project at Anthropic, hasn&#39;t
[1:06] personally written code in months. And
[1:08] Anthropic&#39;s leadership is now estimating
[1:10] that functionally 100% the entirety of
[1:12] code produced at the company is AI
[1:14] generated. And yet at the same time, in
[1:17] the same industry, with us here on the
[1:19] same planet, a rigorous 2025 randomized
[1:22] control trial by METR found that
[1:24] experienced open-source developers using
[1:27] AI tools took 19% longer to complete
[1:32] tasks than developers working without
[1:34] them. There is a mystery here. They&#39;re
[1:36] not going faster, they&#39;re going slower.
[1:38] And here&#39;s the part that should really
[1:40] unsettle you. Those developers are bad
[1:42] at estimation. They believed AI had made
[1:45] them 24% faster. They were wrong not
[1:48] just about the direction but about the
[1:50] magnitude of the change. Three teams are
[1:53] running lights out software factories.
[1:56] The rest of the industry is getting
[1:57] measurably slower. Just a few teams
[1:59] around tech are running truly lights out
[2:02] software factories. The rest of the
[2:04] industry tends to get measurably slower
[2:06] while convincing themselves and everyone
[2:08] around them with press releases that
[2:09] they&#39;re speeding up. The distance
[2:11] between these two realities is the most
[2:14] important gap in tech right now and
[2:16] almost nobody is talking honestly about
[2:19] it and what it takes to cross it. That
[2:21] is what this video is about. Dan
[2:22] Shapiro, the CEO over at Glow Forge and
[2:25] the veteran of multiple companies built
[2:26] on the boundary between software and
[2:28] physical products, just published a
[2:30] framework earlier this year in 2026 that
[2:32] maps where the industry stands. He calls
[2:35] it the five levels of vibe coding. And
[2:37] the name is deliberately informal
[2:38] because the underlying reality is what
[2:40] matters. Level zero is what he calls
[2:43] spicy autocomplete. You type the code,
[2:45] the AI suggests the next line. You
[2:48] accept or reject. This is GitHub copilot
[2:50] in its original format. Just a faster
[2:52] tab key. The human is really writing the
[2:54] software here. And the AI is just
[2:56] reducing the keystrokes and the effort
[2:57] your fingers have. Level one is coding
[3:00] intern. You hand the AI a discrete well
[3:02] scoped task. You write the function. You
[3:05] build the component. You refactor the
[3:06] module. That&#39;s the task you give the AI.
[3:08] You hand the AI a discrete and well
[3:10] scoped task like write this function or
[3:13] build this component or refactor this
[3:15] module. You then review as the human
[3:17] everything that comes back. The AI
[3:19] handles the tasks. The human handles the
[3:21] architecture, the judgment and the
[3:22] integration. Do you see the pattern
[3:24] here? Do you see how the human is
[3:25] stepping back more and more through
[3:27] these levels? Let&#39;s keep going. Level
[3:29] two is the junior developer. The AI
[3:31] handles multifile changes. It can
[3:33] navigate a codebase. It can understand
[3:35] dependencies. It can build features that
[3:36] span modules. You&#39;re reviewing more
[3:39] complicated output, but you as a human
[3:41] are still reading all of the code.
[3:42] Shapiro estimates that 90% of developers
[3:45] who say they are AI native are operating
[3:48] at this level. And I think from what
[3:49] I&#39;ve seen, he&#39;s right. Software
[3:51] developers who operate here think
[3:53] they&#39;re farther along than they are.
[3:55] Let&#39;s move on. Level three, the
[3:57] developer is now the manager. This is
[3:59] where the relationship starts to flip.
[4:01] This is where it gets interesting.
[4:02] You&#39;re now not writing code and having
[4:04] the AI help. You&#39;re simply directing the
[4:06] AI and you&#39;re reviewing what it
[4:08] produces. Your day is whether you want
[4:11] to read, whether you want to approve,
[4:12] whether you want to reject, but at the
[4:14] feature level, at the PR level. The
[4:17] model is doing the implementation. The
[4:18] model is submitting PRs for your review.
[4:21] You have to have the judgment. Almost
[4:23] everybody tops out here right now. Most
[4:26] developers, Shapiro says, hit that
[4:27] ceiling at level three because they are
[4:30] struggling with the psychological
[4:33] difficulty of letting go of the code.
[4:35] But there are more levels. And this is
[4:37] where it gets spicy and exciting. Level
[4:39] four is the developer as the product
[4:41] manager. You write a specification, you
[4:44] leave, you come back hours later and
[4:46] check whether the tests pass. You&#39;re not
[4:48] really reading the code anymore. You&#39;re
[4:50] just evaluating the outcomes. The code
[4:52] is a black box. you care whether it
[4:54] works, but because you have written your
[4:56] eval so completely, you don&#39;t have to
[4:59] worry too much about how it&#39;s written if
[5:01] it passes. This requires a level of
[5:03] trust both in the system and in your
[5:06] ability to write spec. And that quality
[5:08] of spec writing almost nobody has
[5:10] developed well yet. Level five, the dark
[5:13] factory. This is effectively a black box
[5:16] that turns specs into software. It is
[5:18] where the industry is going. No human
[5:20] writes the code. No human even reviews
[5:23] the code. The factory runs autonomously
[5:26] with the lights off. Specification goes
[5:29] in, working software comes out. And you
[5:32] know, Shapiro is correct. Almost nobody
[5:34] on the planet operates at this level.
[5:36] The rest of the industry is mostly
[5:38] between level one and level three, and
[5:40] most of them are treating AI kind of
[5:42] like a junior developer. I like this
[5:44] framework because it gives us really
[5:46] honest language for a conversation
[5:48] that&#39;s been drowning in hype. When a
[5:50] vendor tells you their tool writes code
[5:52] for you, they often mean level one. When
[5:55] a startup says they&#39;re doing agentic
[5:57] software development, they often mean
[5:59] level two or three. But when strong DM
[6:01] says their code must not be written by
[6:03] humans, they really do mean level five,
[6:06] the dark factory, and they actually
[6:08] operate there. The gap between marketing
[6:11] language and operating reality is
[6:13] enormous. and collapsing that gap into
[6:16] what is actually going on on the ground
[6:18] requires changes that go way beyond
[6:21] picking a better AI tool. So many people
[6:24] look at this problem and think this is a
[6:26] tool problem. It&#39;s not a tool problem.
[6:28] It&#39;s a people problem. So what does
[6:31] level five software development actually
[6:34] look like? I think strong DM software
[6:37] factory is the most thoroughly
[6:38] documented example of level five in
[6:40] production. Simon Willis, one of the
[6:42] most careful and credible observers in
[6:44] the developer tooling space, calls
[6:46] StrongDm Software Factory, quote, &quot;The
[6:49] most ambitious form of AI assisted
[6:51] software development that I&#39;ve seen
[6:53] yet.&quot; The details are really worth
[6:55] digging into here because they reveal
[6:57] what it looks like to run a dark factory
[6:59] for software on today&#39;s agents. And as
[7:02] we have this discussion, I want you to
[7:05] keep in mind that for most of us
[7:07] listening, we are getting to time
[7:09] travel. We are seeing how a bold vision
[7:12] for the future can be translated into
[7:14] reality with today&#39;s agents and today&#39;s
[7:16] agent harnesses. It is only going to get
[7:19] easier as we go into 2026 which is one
[7:22] of the reasons I think this is going to
[7:25] be a massive center of gravity for
[7:27] future agentic software development
[7:29] practices. We are all going to level
[7:31] five. So what does strong DM do? The
[7:34] team is three people. Justin McCarthy,
[7:36] CTO, Jay Taylor, and Nan Chowan. They&#39;ve
[7:39] been running the factory since July of
[7:41] last year, actually. And the inflection
[7:44] point they identify is Claude 3.5
[7:46] Sonnet, which shipped actually in the
[7:49] fall of 2024. That&#39;s when long horizon
[7:52] agentic coding started compounding
[7:54] correctness more than compounding
[7:56] errors. Give them credit for thinking
[7:58] ahead. Almost no one was thinking in
[8:00] terms of dark factories that far back.
[8:03] But they found that 3.5 sonnet could
[8:06] sustain coherent work across sessions
[8:09] long enough that the output was reliable
[8:11] and it wasn&#39;t just a flash in the pan.
[8:14] It wasn&#39;t just demo worthy and so they
[8:16] built around it. The factory runs on an
[8:18] open-source coding agent called
[8:19] attractor. The repo is just three
[8:22] markdown specification files and that&#39;s
[8:24] it. That&#39;s the agent. The specifications
[8:27] describe what the software should do.
[8:29] The agent reads them. It writes the code
[8:31] and it tests it. And here&#39;s where it
[8:33] gets really interesting and where most
[8:35] people&#39;s mental model really starts to
[8:37] break down. Strong DM doesn&#39;t actually
[8:40] use traditional software tests. They use
[8:42] what they call scenarios. And the
[8:44] distinction is important. Tests
[8:46] typically live inside the codebase. The
[8:48] AI agent can read them, which means the
[8:50] AI agent can intentionally or not
[8:53] optimize for passing the tests rather
[8:55] than building correct software. It&#39;s the
[8:58] same problem as teaching to the test in
[9:00] education. You can get perfect scores
[9:02] and shallow understanding. Scenarios are
[9:04] different. Scenarios live outside the
[9:06] codebase. They&#39;re behavioral
[9:08] specifications that describe what the
[9:10] software should do from an external
[9:12] perspective, stored separately so the
[9:15] agent cannot see them during
[9:16] development. They function as a holdout
[9:19] set. The same concept that machine
[9:21] learning users use to prevent
[9:23] overfitting. The agent builds the
[9:25] software and the scenarios evaluate
[9:27] whether the software actually works. The
[9:30] agent never sees the evaluation
[9:32] criteria. It can&#39;t game the system. This
[9:34] is really a new idea in software
[9:36] development and I don&#39;t see it
[9:38] implemented very frequently yet. But it
[9:40] solves a problem that nobody was
[9:42] thinking about when all the code was
[9:44] written by humans. When humans write
[9:46] code, we don&#39;t tend to worry about the
[9:48] developer gaming their own test suite
[9:50] unless incentives are really, really
[9:52] skewed at that organization and then you
[9:54] have bigger problems. When AI writes the
[9:57] code, optimizing for test passage is the
[10:00] default behavior unless you deliberately
[10:02] architect around it. And it&#39;s one of the
[10:04] most important differences to really
[10:07] understand as you start to think about
[10:09] AI as a code builder. Strongdm
[10:11] architected around that with external
[10:14] scenarios. The other major piece of the
[10:16] architecture is what StrongDM calls
[10:18] their digital twin universe. Behavioral
[10:21] clones of every external service the
[10:24] software interacts with. a simulated
[10:26] octa, a simulated Jira, a simulated
[10:29] Slack, Google Docs, Google Drive, Google
[10:31] Sheets. The AI agents develop against
[10:34] these digital twins, which means they
[10:36] can run full integration testing
[10:38] scenarios without ever touching real
[10:41] production systems, real APIs, or real
[10:44] data. It&#39;s a complete simulated
[10:46] environment purpose-built for autonomous
[10:48] software development. And the output is
[10:50] real. CXDB, their AI context store, has
[10:53] 16,000 lines of Rust, nine and a half
[10:55] thousand lines of Go, and 700 lines of
[10:58] TypeScript. It&#39;s shipped, it&#39;s in
[11:00] production, it works, it&#39;s real
[11:01] software, and it&#39;s built by agents end
[11:03] to end. And then the metric that tells
[11:04] you how seriously they take it. They say
[11:07] if you haven&#39;t spent $1,000 per human
[11:10] engineer, your software factory has room
[11:12] for improvement. I think they&#39;re right.
[11:15] That&#39;s not a joke. $1,000 per engineer
[11:17] per day enables AI agents to run at a
[11:20] volume that makes the cost of compute
[11:23] meaningful if you are giving them a
[11:25] mission to build software that has real
[11:27] scale and real utility in production use
[11:30] cases and it&#39;s often still cheaper than
[11:32] the humans they&#39;re replacing. Let&#39;s hop
[11:34] over and look at what the hyperscalers
[11:36] are doing. The self-referential loop has
[11:39] taken hold at both anthropic and open
[11:41] AAI and it&#39;s stranger than the hype
[11:43] might make it sound. Codex 5.3 is the
[11:46] first frontier AI model that was
[11:47] instrumental in creating itself. And
[11:50] that&#39;s not a metaphor. Earlier builds of
[11:51] Codeex would analyze training logs,
[11:53] would flag failing tests, and might
[11:55] suggest fixes to training scripts. But
[11:58] this model shipped as a direct product
[12:01] of its own predecessors coding labor.
[12:04] OpenAI reported a 25% speed improvement
[12:07] and 93% fewer wasted tokens in the
[12:11] effort to build Codeex 5.3. And those
[12:14] improvements came in part from the model
[12:16] identifying its own inefficiencies
[12:19] during the build process. Isn&#39;t that
[12:21] wild? Cloud code is doing something
[12:22] similar. 90% of the code in Claude Code,
[12:25] including the tool itself, was built by
[12:27] Claude Code, and that number is rapidly
[12:29] converging toward 100%.
[12:31] Boris Churny isn&#39;t joking when he talks
[12:34] about not writing code in the last few
[12:35] months. He&#39;s simply saying his role has
[12:37] shifted to specification, to direction,
[12:40] to judgment. Anthropic is estimating all
[12:43] of their company moving to entirely AI
[12:45] generated code about now. Everyone at
[12:48] Anthropic is architecting and the
[12:51] machines are implementing. And the
[12:52] downstream numbers tell the same story.
[12:55] When I made a video on co-work and
[12:57] talked about how it was written in 10
[12:59] days by four engineers, what I want you
[13:02] to remember is it wasn&#39;t just four
[13:04] engineers hyperting so that they could
[13:06] get that out super fast and write every
[13:08] line by hand. No, no, no. They were
[13:11] directing machines to build the code for
[13:14] co-work. And that&#39;s why it was so fast.
[13:16] 4% of public commits on GitHub are now
[13:19] directly authored by Claude Code, a
[13:21] number that Anthropic thinks will exceed
[13:23] 20% by the end of this year. I think
[13:25] they&#39;re probably right. Claude Code by
[13:27] itself has hit a billion dollar run rate
[13:30] just 6 months since launch. This is all
[13:33] real today in February of 2026. The
[13:36] tools are building themselves. They&#39;re
[13:38] improving themselves. is they&#39;re
[13:40] enabling us to go faster at improving
[13:42] themselves and that means the next
[13:44] generation is going to be faster and
[13:46] better than it would have been otherwise
[13:47] and we&#39;re going to keep compounding. The
[13:49] feedback loop on AI has closed and the
[13:53] question is not whether we&#39;re going to
[13:55] start using AI to improve AI. The
[13:57] question is how fast that loop is going
[13:59] to accelerate and what it means for the
[14:02] 40 or 50 million of us around the world
[14:04] who currently build software for a
[14:05] living. This is true for vendors as much
[14:08] as it&#39;s true for software developers.
[14:10] And I don&#39;t think we talk about that
[14:11] enough because the gap between what&#39;s
[14:13] possible at the frontier in February of
[14:15] 2026 and what tends to happen in
[14:18] practice and what vendors want to sell
[14:20] has never been wider. That MER study, a
[14:23] randomized control trial, by the way,
[14:24] not a survey, found that open source
[14:27] developers using AI coding tools
[14:29] completed their task 19% slower. We
[14:32] talked about that, right? The
[14:33] researchers controlled for task
[14:34] difficulty. They controlled for
[14:36] developer experience. They controlled
[14:38] even for tool familiarity and none of it
[14:40] mattered. AI made even experienced
[14:42] developers slower. Why? In a world where
[14:45] co-work can ship that fast. Why? Because
[14:48] the workflow disruption outweighed the
[14:50] generation speed. Developers spent time
[14:53] evaluating AI suggestions, correcting
[14:56] almost right code, context switching
[14:58] between their own mental model and the
[15:00] model&#39;s output, and debugging really
[15:02] subtle errors introduced by generated
[15:04] code that looked correct but weren&#39;t.
[15:06] 46% of developers in broader surveys say
[15:09] they don&#39;t fully trust AI generated
[15:11] code. These guys aren&#39;t lites, right?
[15:13] This is experienced engineers running
[15:15] into a consistent problem. The AI is
[15:18] fast, but it struggles with the
[15:19] reliability to trust without what they
[15:22] view as vital human review. And this
[15:25] irony is the J curve that adoption
[15:28] researchers keep identifying. When you
[15:30] bolt an AI coding assistant onto an
[15:33] existing workflow, productivity dips
[15:36] before it gets better. It goes down like
[15:38] the bottom of a J. Sometimes for a
[15:40] while, sometimes for months. And the dip
[15:42] happens because the tool changes the
[15:44] workflow, but the workflow has not been
[15:46] redesigned around the tool explicitly.
[15:49] And so you&#39;re kind of running a new
[15:51] engine on old transmission. The gears
[15:54] are going to grind. Most organizations
[15:55] are sitting in the bottom of that J
[15:57] curve right now. And many of them are
[15:59] interpreting the dip as evidence that AI
[16:02] tools don&#39;t work, that the vendors did
[16:04] not tell them the truth, and that the
[16:06] evidence that their workflows haven&#39;t
[16:08] adapted is really evidence that AI is
[16:11] hype and not real. I think GitHub
[16:13] Copilot might be the clearest
[16:15] illustration of this. It has 20 million
[16:17] users, 42% market share among AI coding
[16:20] tools, apparently. Uh, and lab studies
[16:22] show 55% faster code completion on
[16:25] isolated tasks. I&#39;m sure that makes the
[16:28] people driving GitHub Copilot happy in
[16:30] their slide decks. But in production,
[16:32] the story is much more complicated.
[16:35] There are larger poll requests. There
[16:36] are higher review costs. There&#39;s more
[16:38] security vulnerabilities introduced by
[16:40] generated code. And developers are
[16:43] wrestling with how to do it well. One
[16:44] senior engineer put it really sharply.
[16:46] C-Ilot makes writing code cheaper but
[16:49] owning it more expensive. And that is
[16:51] actually a very common sentiment I&#39;ve
[16:52] heard across a lot of engineers in the
[16:54] industry. not just for co-pilot but for
[16:56] AI generated code in general. The
[16:58] organizations that are seeing
[17:00] significant call it 25 30% or more
[17:02] productivity gains with AI are not the
[17:05] ones that just installed co-pilot had a
[17:08] one-day seminar and called it done.
[17:10] They&#39;re the ones that thought carefully
[17:12] went back to the whiteboard and
[17:14] redesigned their entire development
[17:16] workflow around AI capabilities.
[17:19] changing how they write their specs,
[17:20] changing how they review their code,
[17:22] changing what they expect from junior
[17:24] versus senior engineers, changing their
[17:26] CI/CD pipelines to catch the new
[17:28] category of errors that AI generated
[17:30] code introduces. End to end process
[17:33] transformation. It&#39;s not about tool
[17:35] adoption. And end toend transformation
[17:37] is hard. It&#39;s sometimes it&#39;s politically
[17:40] contentious. It&#39;s expensive. It&#39;s slow
[17:42] and most companies don&#39;t have the
[17:44] stomach for it. Which is why most
[17:46] companies are stuck at the bottom of the
[17:48] J curve. Which is why the gap between
[17:50] frontier teams and everyone else is not
[17:53] just widening, it&#39;s accelerating
[17:55] rapidly. Because those teams on the edge
[17:57] that are running dark factories, they
[17:59] are positioned to gain the most. As
[18:01] tools like Opus 4.6 and Codeex 5.3
[18:05] enable widespread agentic powers for
[18:08] every software engineer on the planet.
[18:10] 95% of those software engineers don&#39;t
[18:12] know what to do with that. It&#39;s the ones
[18:14] that are actually operating at level
[18:15] four, level five that truly get the
[18:18] multiplicative value of these tools. So
[18:20] if this is a politically contentious
[18:22] problem, if this is not just a tool
[18:24] problem but a people problem, we need to
[18:26] look at the nature of our software
[18:29] organizations. Most software
[18:31] organizations were designed to
[18:33] facilitate people building software.
[18:36] every process, every ceremony, every
[18:38] role. They exist because humans building
[18:41] software in teams need coordination
[18:44] structures. Stand-up meetings exist
[18:46] because developers working on the same
[18:47] codebase, they got to synchronize every
[18:50] single day. Sprint planning exists
[18:52] because humans can only hold a certain
[18:54] number of tasks in working memory and
[18:56] then they need a regular cadence to rep
[18:58] prioritize. Code review exists because
[19:00] humans make mistakes that other humans
[19:02] can catch. QA teams exist because the
[19:05] people who build software, they can&#39;t
[19:07] evaluate it objectively. You get the
[19:09] idea. Every one of these structures is a
[19:12] response to a human limitation. And when
[19:14] the human is no longer the one writing
[19:16] the code, the structures, they&#39;re not
[19:19] optional, they&#39;re friction. So what does
[19:22] sprint planning look like when the
[19:24] implementation happens in hours, not
[19:26] weeks? What does code review look like
[19:28] when no human wrote the code and no
[19:31] human can really review the diff that AI
[19:34] produced in 20 minutes because it&#39;s
[19:35] going to produce another one in 20 more
[19:37] minutes. So what does a QA team do when
[19:39] the AI already tested against scenarios
[19:42] it was never shown? Strong BM&#39;s
[19:43] threeperson team doesn&#39;t have sprints.
[19:46] They don&#39;t have standups. They don&#39;t
[19:48] have a Jiraa board. They write specs and
[19:50] they evaluate outcomes. That is it.
[19:53] The entire coordination layer that
[19:55] constitutes the operating system of a
[19:57] modern software organization. The layer
[19:59] that most managers spend 60% of their
[20:02] time maintaining is just deleted. It
[20:05] does not exist. Not because it was
[20:07] eliminated as a cost-saving measure, but
[20:09] because it no longer serves a purpose.
[20:12] This is the structural shift that&#39;s
[20:13] harder to see than the tech shift, and
[20:16] it might matter more. The question is
[20:18] becoming what happens to the
[20:19] organizational structures that were
[20:21] built for a world where humans write
[20:24] code? What happens to the engineering
[20:26] manager whose primary value is
[20:28] coordination? What happens to the scrum
[20:31] master, the release manager, the
[20:32] technical program manager whose job is
[20:34] to make sure a dozen teams ship on time?
[20:38] Look, those roles don&#39;t disappear
[20:39] overnight, but the center of gravity is
[20:42] shifting. The engineering manager&#39;s
[20:44] value is moving from coordinate the team
[20:48] building the feature to define the
[20:50] specification clearly enough that agents
[20:52] build the feature. The program manager&#39;s
[20:54] value is moving from track dependencies
[20:57] between human teams to architect the
[20:59] pipeline of specs that flow through the
[21:01] factory. The skills that matter are
[21:03] shifting very rapidly from coordination
[21:06] to articulation. From making sure people
[21:08] are rowing in the same direction to
[21:10] making sure the direction is described
[21:12] precisely enough that machines can go do
[21:14] it. And oh, by the way, for engineering
[21:16] managers, there&#39;s an extra challenge.
[21:18] How do you coach your engineers to do
[21:20] the same thing? It&#39;s a people challenge.
[21:22] If you think this is a trivial shift,
[21:24] you have never tried to write a
[21:26] specification detailed enough for an AI
[21:28] agent to implement it correctly without
[21:30] human intervention. And you&#39;ve certainly
[21:32] never sat down and tried to coach an
[21:34] engineer to do the same. It is a
[21:35] different skill. It requires the kind of
[21:38] rigorous systems thinking that most
[21:40] organizations have never needed from
[21:42] most of their people because the humans
[21:44] on the other end of the spec could fill
[21:45] in the gaps with judgment, with context,
[21:48] with a slack message that says, &quot;Did you
[21:49] mean X or Y?&quot; The machines don&#39;t have
[21:52] that layer of human context. They build
[21:54] what you described. If what you
[21:56] described was ambiguous, you&#39;re going to
[21:58] get software that fills in the gaps with
[22:00] software guesses, not customer- ccentric
[22:02] guesses. The bottleneck has moved from
[22:04] implementation speed to spec quality.
[22:07] And spec quality is a function of how
[22:10] deeply you understand the system, your
[22:12] customer, and your problem. That kind of
[22:15] understanding has always been the
[22:17] scarcest resource in software
[22:19] engineering. The dark factory doesn&#39;t
[22:20] reduce the demand for that. It just
[22:22] makes the demand an absolute law. It
[22:25] becomes the only thing that matters.
[22:28] Now, let&#39;s be honest. Everything that I
[22:30] have just talked about assumes you&#39;re
[22:32] building from scratch. Most of the
[22:34] software economy is not built from
[22:36] scratch. The vast majority of enterprise
[22:39] software is brownfield. It&#39;s existing
[22:41] systems. It&#39;s accumulated over years,
[22:43] over decades. It&#39;s running in
[22:45] production, serving real users, carrying
[22:47] real revenue. CRUD applications that
[22:50] process business transactions. Monoliths
[22:52] that have grown organically through 15
[22:54] years of feature additions. CI/CD
[22:56] pipelines tuned to the quirks of a
[22:58] specific codebase and a specific team&#39;s
[23:00] workflow. Config management that exists
[23:02] in the heads of the three people who&#39;ve
[23:04] been at the company long enough to
[23:05] remember why that one environment
[23:07] variable is set to that one value. You
[23:09] know who you are. You cannot dark
[23:11] factory your way through a legacy
[23:13] system. You cannot just pretend that you
[23:15] can bolt that on. It doesn&#39;t work that
[23:17] way. The specification for that does not
[23:19] exist. The tests, if they&#39;re any, cover
[23:22] 30% of your existing codebase, and the
[23:24] other 70% runs on institutional
[23:26] knowledge and tribal lore and someone
[23:29] who shows up once a week in a polo shirt
[23:31] and knows where all the skeletons are
[23:33] buried in the code. The system is the
[23:35] specification. It&#39;s the only complete
[23:38] description of what the software does
[23:40] because no one ever wrote down the
[23:42] thousand implicit decisions that
[23:44] accumulated over a decade or more of
[23:47] patches of hot fixes of temporary
[23:49] workarounds that of course became
[23:51] permanent. This is the truth about the
[23:54] interstitial states that lie along this
[23:57] continuum toward more autonomous
[23:59] software development. For most
[24:01] organizations, the path is not to start
[24:04] with deploy an agent that writes code.
[24:06] It starts with let&#39;s develop a
[24:08] specification for what your real
[24:11] existing software really actually does.
[24:14] And that specification work that reverse
[24:17] engineering of the implicit knowledge
[24:19] embedded in a running system is very
[24:22] difficult and it&#39;s deeply human work. It
[24:25] requires the engineer who knows why the
[24:27] billing module has the one edge case for
[24:29] Canadian customers. It requires the
[24:31] architect who remembers which micros
[24:34] service it was that carved out of the
[24:36] monolith under duress during the 2021
[24:38] outage and we&#39;ve always maintained it
[24:39] ever since. It requires the product
[24:41] person who can explain what the software
[24:44] actually does for real users versus what
[24:46] the PRD says it does. Domain expertise,
[24:49] ruthless honesty, customer
[24:51] understanding, systems thinking. exactly
[24:54] the human capabilities that matter even
[24:57] more in the dark factory era, not less.
[25:00] Look, the migration path is different
[25:02] for every business, but it starts to
[25:04] look something like this. First, you use
[25:07] your AI as much as you can at say level
[25:09] two or level three to accelerate the
[25:11] work your developers are already doing,
[25:14] writing new features, fixing bugs,
[25:16] refactoring modules. This is where most
[25:18] organizations are at now and it&#39;s where
[25:20] the J-Curve productivity dip and it&#39;s
[25:23] where the J-Curve productivity dip
[25:25] happened. You should expect that.
[25:26] Second, you start using AI to document
[25:29] what your system really does, generating
[25:32] specs directly from the code, building
[25:34] scenario suites that capture real
[25:36] existing behavior, creating the holdout
[25:38] sets that a future dark factory will
[25:40] need. Then you redesign your CI/CD
[25:43] pipeline to handle AI generated code at
[25:45] volume. different testing strategies,
[25:47] different review processes, different
[25:49] deployment gates. Fourth, you start to
[25:53] begin to shift new development to level
[25:55] four or five autonomous agent patterns
[25:57] while maintaining the legacy system in
[26:00] parallel. That path takes time. Anyone
[26:02] telling you otherwise is selling you
[26:04] something. The organizations that will
[26:06] get there the fastest aren&#39;t necessarily
[26:08] the ones that bought the fanciest vendor
[26:10] tools. They&#39;re the ones who can write
[26:13] the best and most honest specs about
[26:15] their code, who have the deepest domain
[26:17] understanding, who have the discipline
[26:19] to invest in the boring, unglamorous
[26:21] work of documenting what their systems
[26:24] really do and of how they can support
[26:26] their people to scale up in the ways
[26:29] that will support this new dark factory
[26:31] era. I cannot give you a clear timeline
[26:33] here. For some organizations, this is
[26:36] looking like a multi-year transition,
[26:38] and I don&#39;t want to hide the ball on
[26:39] that. Some are going faster and it&#39;s
[26:41] looking like multimonth. It will depend,
[26:43] frankly, on the stomach you have for
[26:45] organizational pain. And that brings me
[26:47] to the talent reckoning. Junior
[26:49] developer employment is dropping 9 to
[26:52] 10% within six quarters of widespread AI
[26:55] coding tool adoption, according to a
[26:56] 2025 Harvard study. Anyone out there at
[26:59] the start of their career is nodding
[27:00] along and saying it&#39;s actually worse
[27:01] than that. In the UK, graduate tech
[27:04] roles fell 46% in 2024 with a further
[27:08] 53% drop projected by 2026. In the US,
[27:11] junior developer job postings have
[27:13] declined by 67%.
[27:16] Simply put, the junior developer
[27:18] pipeline is starting to collapse, and
[27:20] the implications go far beyond the
[27:22] people who cannot find entry-level jobs,
[27:24] although that is bad enough and it&#39;s a
[27:26] real issue. The career ladder in
[27:28] software engineering has always worked
[27:30] like this. Juniors learn by doing. They
[27:34] write simple features. They fix small
[27:35] bugs. They absorb the codebase through
[27:38] immersion. Seniors review the work and
[27:40] mentor them and catch their mistakes.
[27:42] Over 5 to seven years, a junior becomes
[27:44] a senior through accumulated experience.
[27:47] The system is frankly an apprenticeship
[27:50] model wearing enterprise clothing. AI
[27:52] breaks that model at the bottom. If AI
[27:54] handles the simple features and the
[27:56] small bug fixes, the work that juniors
[27:58] lean on, where do the juniors learn? If
[28:01] AI reviews code faster and more
[28:03] thoroughly than a senior engineer doing
[28:05] a PR review, where does the mentorship
[28:07] start to happen? The career ladder is
[28:09] getting hollowed out from underneath.
[28:11] Seniors at the top, AI at the bottom,
[28:13] and a thinning middle where learning
[28:14] used to happen. So, the pipeline is
[28:16] starting to break. And yet, we need more
[28:19] excellent engineers than we have ever
[28:21] needed before, not fewer engineers. I&#39;ve
[28:24] said this before. I do not believe in
[28:26] the death of software engineering. We
[28:28] need better engineers. The bar is rising
[28:31] and it&#39;s rising toward exactly the
[28:34] skills that have always been the hardest
[28:36] to develop and the hardest to hire for.
[28:38] The junior of 2026 needs the systems
[28:41] design understanding that was expected
[28:43] of a mid-level engineer in 2020. Not
[28:46] because the entry-level work necessarily
[28:48] got harder, but because the entry-level
[28:50] work got automated and the remaining
[28:53] work requires deeper judgment. And you
[28:55] don&#39;t need someone who can write a CRUD
[28:57] endpoint anymore. Right? The AI will
[28:58] handle that in a few minutes. You need
[29:00] someone who can look at a system
[29:01] architecture and identify where it will
[29:04] break under load, where the security
[29:06] model has gaps, where the user
[29:08] experience falls apart at the edge
[29:09] cases, and where the business logic
[29:11] encodes assumptions that are about to
[29:13] become wrong. And if you think as a
[29:15] junior that you can use AI to patch
[29:17] those gaps, I&#39;ve got news for you. The
[29:19] seniors are using AI to do that and they
[29:22] have the intuition over the top. So you
[29:24] need systems thinking, you need customer
[29:26] intuition. You need the ability to hold
[29:28] a whole product in your head and reason
[29:31] about how those pieces interact. You
[29:33] need the ability to write a
[29:34] specification clearly enough that an
[29:36] autonomous agent can implement it
[29:38] correctly, which requires understanding
[29:40] the problem deeply enough to anticipate
[29:42] the questions the agent does not know to
[29:45] ask. Those skills have always separated
[29:47] really great engineers from merely
[29:49] adequate ones. The difference now is
[29:51] that adequate is no longer a viable
[29:53] career position regardless of seniority
[29:56] because adequate is what the models do.
[29:58] Enthropics hiring has already shifted.
[30:00] Open AAI&#39;s hiring has already shifted.
[30:02] Hiring is shifting across the industry
[30:04] and it&#39;s shifting toward generalists
[30:06] over specialists. People who can think
[30:08] across domains rather than people who
[30:11] are expert in one really narrow tech
[30:13] stack. The logic is super
[30:14] straightforward, right? When the AI
[30:16] handles the implementation, the human&#39;s
[30:19] value is in understanding the problem
[30:21] space broadly enough to direct
[30:22] implementation correctly. A specialist
[30:25] who knows everything about Kubernetes
[30:26] but can&#39;t reason about the product
[30:28] implications of an architectural
[30:30] decision is way way less valuable than a
[30:33] generalist who understands the systems,
[30:35] the users, and the business constraints
[30:36] even if they can&#39;t handconfigure a pot.
[30:39] Some orgs are moving toward what amounts
[30:41] to a medical residency model for their
[30:43] junior engineers. Simulated environments
[30:45] where early career developers learn by
[30:47] working alongside AI systems, reviewing
[30:49] AI output, and developing judgment about
[30:51] what&#39;s correct and what&#39;s subtly wrong
[30:53] by working with AI. It is not the same
[30:56] thing as learning by writing code from
[30:58] scratch. I don&#39;t want to pretend it is,
[31:00] but it might be better training for a
[31:02] world where the job is directing and
[31:04] evaluating AI output rather than
[31:06] producing code from a blank editor. I
[31:08] will also call out, as I&#39;ve called out
[31:10] before, there are organizations
[31:12] preferentially hiring juniors right now,
[31:15] despite the pipeline collapsing
[31:17] precisely because the juniors they are
[31:20] looking for provide an AI native
[31:22] injection of fresh blood into an
[31:24] engineering org where most of the
[31:27] developers started their careers long
[31:29] before chat GPT launched in 2022. In
[31:32] that world, having people who are AI
[31:34] native from the get-go can be a huge
[31:36] accelerating factor. And that points to
[31:38] one of the things that is a plus for
[31:40] juniors coming in. Lean into the AI if
[31:43] you&#39;re a junior. Lean into your
[31:45] generalist capabilities. Lean into how
[31:48] quickly you can learn. Show that you can
[31:50] pick up a problem set and solve it in a
[31:53] few minutes with AI across a really wide
[31:56] range of use cases. Gartner is
[31:58] projecting that 80% of software
[32:00] engineers will need to upskill in AI
[32:02] assisted dev tools by 2027. Estimating
[32:05] wrong. it&#39;s going to be 100%. The number
[32:09] is not the point. The question isn&#39;t
[32:11] whether the skills need to change. We
[32:13] all know they will. It&#39;s whether we in
[32:15] the industry can develop the training
[32:18] infrastructure quickly enough to keep
[32:20] pace with the capability change. Because
[32:22] I&#39;ve got to be honest with you, if
[32:24] you&#39;re a software engineer and the last
[32:27] model you touched was released in
[32:30] January of 2026, you are out of date.
[32:33] You need a February model. And that is
[32:35] going to keep being true all the way
[32:36] through this year and into next year.
[32:38] And whether the organizations that
[32:40] depend on software can tolerate a period
[32:43] where the talent pipeline is being built
[32:45] and rebuilt like this on a monthly basis
[32:48] is a big question because you have to
[32:51] invest in your people more to get them
[32:54] through this period of transition. So
[32:56] what does the shape of a new org look
[32:58] like when we look at AI native startups?
[33:01] How are they different from these
[33:02] traditional orgs? cursor. The AI native
[33:05] code editor is past half a billion
[33:07] dollars in annual recurring revenue and
[33:09] it has at last count a couple of dozen
[33:12] few dozen employees. It&#39;s operating at
[33:14] roughly three and a half million in
[33:16] revenue per employee in a world where
[33:18] the average SAS company is generating
[33:22] $600,000 per employee. Midjourney is
[33:25] similar. They have the story of
[33:26] generating half a billion in revenue
[33:28] with a few dozen people around a hundred
[33:31] a little bit more depending on who&#39;s
[33:32] counting. Lovable is well into the
[33:34] multiundred million dollars in ARR in
[33:37] just a few months and their team is
[33:39] scaling but it&#39;s way way behind the
[33:42] amount of revenue gain they&#39;re
[33:43] experiencing. They are also seeing that
[33:45] multi-million dollar revenue per
[33:47] employee world. The top 10 AI native
[33:50] startups are averaging three and change
[33:52] million in revenue per employee which is
[33:55] between five and six times the SAS
[33:57] average. This is happening enough that
[34:00] it is not an outlier. This is the
[34:02] template for an AI native org. So what
[34:05] does that org look like? If you have 15
[34:07] million people generating a hund00
[34:08] million a year, which we&#39;ve seen in
[34:10] multiple cases in 2025, what does that
[34:12] look like? It does not look like a
[34:14] traditional software company. It does
[34:16] not have a traditional engineering team,
[34:18] a traditional product team, a QA team, a
[34:20] DevOps team. It looks like a small group
[34:23] of people who are exceptionally good at
[34:26] understanding what users need, who are
[34:28] exceptional at translating that into
[34:30] clear spec, and who are directing AI
[34:32] systems that handle that implementation.
[34:34] The org chart is flattening radically.
[34:37] The layers of coordination that exist to
[34:39] manage hundreds of engineers building a
[34:41] product can be deleted when the
[34:43] engineering is done by agents. The
[34:45] middle management layer is going to
[34:47] either evolve into something
[34:48] fundamentally different at these big
[34:50] companies or it&#39;s going to cease to
[34:52] exist entirely. The only people who
[34:55] remain are the ones whose judgment
[34:58] cannot be automated. The ones who know
[35:00] what to build for whom and why, and who
[35:02] have excellent AI sense. Sort of like
[35:06] horse sense where you have a sense of
[35:08] the horse if you&#39;re a rider and you can
[35:10] direct the horse where you want to go.
[35:11] You&#39;ll need people who have that sense
[35:13] with artificial intelligence. And yes,
[35:15] it is a learned skill. The restructuring
[35:18] that is going to happen as more and more
[35:20] companies move toward that cursor model
[35:23] of operating, even if they never
[35:25] completely get there, that restructuring
[35:27] is real. It&#39;s going to happen. It&#39;s
[35:30] going to be very painful for specific
[35:32] people in specific roles. the middle
[35:34] management layer, the junior developer
[35:36] whose entry-level work is getting
[35:38] automated first, the QA engineers who
[35:40] just run manual test passes, the release
[35:43] manager whose entire value is just
[35:46] coordination. Those kinds of roles are
[35:49] going to have to transform or they&#39;re
[35:51] just going to disappear. And for people
[35:53] in those roles, you need to find ways to
[35:57] move toward developing with AI and
[36:02] rewriting your entire workflow around
[36:04] agents as central to your development.
[36:07] That is going to look different
[36:08] depending on your stack, your manager&#39;s
[36:10] budget for token spend, and your
[36:13] appetite to learn. But you need to lean
[36:16] that way as quickly as you can for your
[36:18] own career&#39;s sake. I want to leave you
[36:21] with one thing that gets lost in every
[36:24] conversation about AI and jobs. We have
[36:27] never found a ceiling on the demand for
[36:30] software and we have never found a
[36:32] ceiling on the demand for intelligence.
[36:34] Every time the cost of computing has
[36:36] dropped from mainframes to PCs, from PCs
[36:40] to cloud, from cloud to serverless, the
[36:43] total amount of software the world
[36:44] produced did not stay flat. It exploded.
[36:48] New categories of software that were
[36:50] economically impossible at the old cost
[36:52] structure became viable and then
[36:54] ubiquitous and then essential. The cloud
[36:56] didn&#39;t just make existing software
[36:58] cheaper to run. It created SAS, mobile
[37:01] apps, streaming, real-time analytics,
[37:03] and a hundred other categories that
[37:05] could not exist when you had to buy a
[37:07] rack of servers to ship something. I
[37:09] think the same dynamic applies now and
[37:12] it applies at a scale that dwarfs every
[37:15] previous transition. Every company in
[37:17] every industry needs software. Most of
[37:20] them, like a regional hospital or a
[37:22] mid-market manufacturer or a family
[37:24] logistics company. They can&#39;t afford to
[37:26] build what they need at current labor
[37:28] costs. A custom inventory system
[37:30] traditionally could cost a half a
[37:32] million or more and take over a year. A
[37:34] patient portal integration might cost a
[37:36] third of a million. You get the idea.
[37:38] These companies tend to make do with
[37:40] spreadsheets today. But we are dropping
[37:43] the cost of software production by an
[37:46] order of magnitude or more. And now that
[37:48] unmet need is becoming addressable. Not
[37:52] theoretically now. You can serve markets
[37:55] that traditional software companies
[37:57] could never afford to enter. The total
[38:00] addressable market for software is
[38:02] exploding. Now this can sound like a
[38:05] very comfortable rebuttal to people
[38:06] struggling with the pain of jobs
[38:08] disappearing. It is not the same thing.
[38:10] Just saying the market is getting bigger
[38:12] doesn&#39;t fix it. But it is a structural
[38:15] observation about what happens as
[38:17] intelligence gets cheaper. The demand is
[38:20] going to go up, not down. We watched
[38:23] this happen with compute, with storage,
[38:25] with bandwidth, with every resource
[38:27] that&#39;s ever gotten dramatically cheaper.
[38:29] Demand has never saturated. The
[38:32] constraint has always moved to the next
[38:34] bottleneck. And in this case, the
[38:35] judgment is to know what to build and
[38:37] for whom. The people who thrive in this
[38:40] world are going to be the ones who were
[38:42] always the hardest to replace. The ones
[38:44] who understand customers deeply, who
[38:47] think in systems, who can hold ambiguity
[38:49] and make decisions under uncertainty,
[38:52] who can articulate what needs to exist
[38:54] before it exists at all. The dark
[38:56] factory does not replace those people
[38:58] and it won&#39;t. It amplifies them. It
[39:00] turns a great product thinker with five
[39:02] engineers into a great product thinker
[39:05] with unlimited engineering capacity. The
[39:07] constraint moves from can we build it to
[39:10] should we build it and should we build
[39:12] it has always been the harder and more
[39:14] interesting question. I don&#39;t have a
[39:16] silver bullet to magically resolve this
[39:18] but I have to tell you that we must
[39:20] confront the tension or we are being
[39:22] dishonest. The dark factory is real. It
[39:26] is not hype. It actually works. A small
[39:29] number of teams around the world are
[39:30] producing software without any humans
[39:33] writing or reviewing code. They are
[39:35] shipping shippable production code that
[39:39] improves with every single model
[39:41] generation. The tools are building
[39:43] themselves. The feedback loop is closed.
[39:46] And those teams are going faster and
[39:48] faster and faster and faster. And yet
[39:51] most companies aren&#39;t there. They&#39;re
[39:52] stuck at level two. They&#39;re getting
[39:54] measurably slower with AI tools they
[39:56] believe are making them faster. They&#39;re
[39:58] wrong. running organizational structures
[40:01] designed for a world where humans do all
[40:03] of the implementation work. Both of
[40:06] these things are true at the same time.
[40:08] The frontier is farther ahead than
[40:10] almost anyone wants to admit and the
[40:13] middle is farther behind than the
[40:15] frontier teams like to talk about. The
[40:17] distance between them isn&#39;t a technology
[40:20] gap. It&#39;s a people gap. It&#39;s a culture
[40:23] gap. It&#39;s an organizational gap. It&#39;s a
[40:25] willingness to change gap that no tool
[40:29] and no vendor can close. The enterprises
[40:31] that get across this distance are not
[40:34] the ones that buy the best coding tool.
[40:37] They&#39;re the ones that do the very hard,
[40:39] very slow, very unglamorous work of
[40:41] documenting what their systems do, of
[40:44] rebuilding their org charts and their
[40:45] people around the skill of judgment
[40:48] instead of the skill of coordination.
[40:50] And they are organizations who invest in
[40:52] the kind of talent that understands
[40:55] systems and customers deeply enough to
[40:58] direct machines to build anything that
[41:00] should be built. And those orgs need to
[41:02] be honest enough with themselves to
[41:04] admit that this change will not happen
[41:06] as fast as they want it to because
[41:08] people change slowly. The dark factory
[41:11] does not need more engineers, but it
[41:14] desperately needs better ones. And
[41:16] better means something different than it
[41:18] did a few years ago. It means people who
[41:20] can think clearly about what should
[41:22] exist, describe it precisely enough that
[41:24] machines can build it and who can
[41:26] evaluate whether what got built actually
[41:29] serves the real humans it was built for.
[41:32] This has always been the hard part of
[41:34] software engineering. We just used to
[41:36] let the implementation complexity hide
[41:39] how few people were actually good at it.
[41:41] The machines have now stripped away that
[41:43] camouflage, and we&#39;re all about to find
[41:45] out how good we are at building
[41:48] software. I hope this video has helped
[41:50] you make sense of the enormous gap
[41:52] between the dark factories in automated
[41:54] software production and the way most of
[41:57] us are building software today. Best of
[41:59] luck navigating that transition. I wrote
[42:01] up a ton of exercises and a ton of
[42:04] resources over on the Substack if you&#39;d
[42:06] like to dig in further. This tends to be
[42:07] something where people want to learn
[42:09] more, so I wanted to give you as much as
[42:10] I could. Have fun, enjoy, and I&#39;ll see
[42:13] you in the comments.
