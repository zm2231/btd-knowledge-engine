---
title: "Google's New AI Is Smarter Than Everyone's But It Costs HALF as Much. Here's Why They Don't Care."
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=8jKAT8GNDE0"
video_id: "8jKAT8GNDE0"
duration: "36:37"
transcript_method: "youtube-captions"
segment_count: 1014
char_count: 38355
status: ingested
topics: []
meta_patterns: []
---

# Google's New AI Is Smarter Than Everyone's But It Costs HALF as Much. Here's Why They Don't Care.

**Creator**: nate-jones | **Duration**: 36:37
**URL**: https://www.youtube.com/watch?v=8jKAT8GNDE0
**Transcript**: 1014 segments, 38355 chars

## Transcript

Google just shipped the smartest AI model on the planet. It's Gemini 3.1 Pro. It costs a seventh of the competition and they don't even need you to use it. That's right. They shipped a model that leads on 13 of 16 benchmarks. It costs roughly a seventh of what Opus 4.6 charges. And Google really doesn't care. That's not a weird flex on their part. It might be the most important strategic signal in AI right now. And almost nobody is talking about it. The coverage of Gemini 3.1 Pro has been all about those benchmarks. And what's been missing is the question that is underneath. Why does the richest company in tech, a company generating over a hundred billion in annual free cash flow, build the most powerful reasoning engine on the market, price it at the floor, and be perfectly comfortable if you keep using Claude or Chad GPT for your daily work? The answer reshapes how you should think about every model release from here on out. It changes how you evaluate your own skills and it explains why most of the conversation about which AI I should use is really asking the wrong question at this point. So a couple weeks ago I wrote about Opus 4.6 and the way they use 16 AI agents to build a C compiler. That piece was about a new kind of labor. Agents coordinating in teams, managing engineering orgs, doing weeks of sustained autonomous work. This video is about something different. This video is about why the company with the deepest pockets and the widest distribution in the history of computing in the history of the planet is playing a fundamentally different game from anybody else. And what that means for how you evaluate AI models, choose your tools, and understand which of your problems are about to get dramatically easier to solve versus which ones are not. So, we're going to talk about one benchmark out of those 16 because I don't usually talk about benchmarks. That number is 77.1% and it's on the ARC AGI2 benchmark. Why do we care? It's not about pattern matching from training data. ARC AGI2 tests whether a model can solve logic problems it has never ever seen before. So it's not about retrieval from memorized examples, but about genuinely novel reasoning. Can the model look at a problem it's never encountered and figure it out from first principles? I want you to look at the acceleration on that benchmark. Gemini 3 Pro, which shipped just in November, scored 31.1%. Just 90 days later, 3.1 Pro ships and it more than doubles that score. That 46 percentage point jump is the largest single generation reasoning gain any Frontier model family has ever produced. Opus 4.6 scored 68.8% on the same benchmark, which is very close. GPT 5.2 scored a little bit lower. The rest of the score card tells a very similar story, right? A very high score on GPQA Diamond, which is essentially a science benchmark that's saturated at this point. A very strong benchmark score on Live Codebench Pro, which measures coding abilities. You get the idea. These numbers are real, but the benchmark isn't the point. The point is that Google chose to optimize for pure reasoning. Enthropic built opus 4.6 Six for agentic work. Stained autonomous coding pool calling in loops. Agent teams coordinating across code bases sometimes for weeks at a time. Open AI built codeex 5.3 for specialized coding pipelines with self- bootstrapping sandboxes and thousand token per second throughput at max. Google built Gemini 3.1 Pro for none of those things. They built it to think harder, not to code longer, not to manage more agents, to reason more deeply about problems it has never seen. That design choice tells you everything about who Google thinks it is and where they think they're going with AI. Demuse Hosabus has been saying the same sentence for 15 years. Step one, solve intelligence. Step two, use it to solve everything else. And so Google is focused on solving intelligence. He said it when Deep Mind was a London startup nobody had heard of. He said it after Alph Go beat a Go Grandmaster. He said it at Davos last month. He said it on the Fortune podcast last week where he predicted artificial general intelligence would come very very soon. He's actually updated his prediction and he is a conservative guy. He's seeing it coming within 5 years at this point. And he said it on 60 Minutes when he talked about curing most diseases within a decade. The sentence hasn't changed because his mission hasn't changed. This is not how anyone else in the AI industry talks. Sam Alman talks about products, partnerships, distribution, the race to a billion users. And yeah, he talks about intelligence, but in the context of how it's applied so frequently. When OpenAI put ads in Chad GPT, they did so because they needed to monetize a billion person user base. And Huss, when asked about the Chad GPT ads at Davos, said he was surprised OpenAI moved so fast on advertising. Of course, he said that Google is able to monetize search and they don't need to monetize ads in Gemini. As a result, Open AAI does not have the world's largest search engine and its profit streams funding them. And OpenAI is in a different funding position. The subtext from Hosabuse was unmistakable. We're not thinking about monetizing our Google AI chatbot. We're just thinking about intelligence. Now, I want to be clear here. This is not because Google is somehow above commercial concerns. Google runs the most profitable advertising business in human history. They generated over a hundred billion dollars in annual free cash flow from search, YouTube, and cloud. They're spending $93 billion on capital expenditure this year, and most of it is AI. They can afford to let Gemini be a research vehicle because their economic engine has nothing to do with whether you personally prefer Claude or Chat GPT for your daily workflow. Everyone else in AI is trying to figure out how to monetize models. Google is trying to figure out how to build intelligence. The money handles itself. Must be nice. And how does Google get that advantage? It's not just the profit streams. It's also that Google has deliberately built over the last decade a vertical stack in AI that nobody else has. They design their own silica. The Ironwood TPU, 7th generation announced earlier this year, delivers 10 times the compute power of the last generation at roughly half the energy cost per operation. It can link up 9,216 chips in a single pod. Anthropic just signed a deal to use a million TPUs under a multi-year arrangement valued in the tens of billions of dollars. Meta is reportedly negotiating a similar commitment. When your competitors train their frontier models on your hardware, you have built something beyond a moat. You've built an impregnable fortress. Google trains their own models on that silicon. They deploy those models through their own cloud infrastructure. Google Cloud, which nine out of 10 AI research labs use in some capacity. They distribute them to 650 million monthly active Gemini users, although again that's not the primary point. And it's up 44% in a single quarter. plus billions more through search, Android, YouTube, and Chrome. They have easily the largest human reach in history of any company. And they fund the fundamental research through Deep Mind, which won a Nobel Prize in chemistry 18 months ago for Alphafold, a system that predicted the structure of virtually every known protein, a problem biologists have been working on for 50 years. This vertical integration from transistor design to protein folding is not an accident. It's the architecture of a company that believes intelligence is a problem in computer science, that the problem is solvable, and that solving it requires controlling the entire stack from physics up to software. Google's Jeff Dean said they're working to shrink TPU design cycles from 2 years down to 6 to9 months by using AI in the chip design process itself. They're using intelligence to build the hardware that runs intelligence. The flywheel is self-reinforcing and it's accelerating dramatically. Nobody else has this. Microsoft has Azure and a partnership with OpenAI, but they don't make chips and their consumer distribution in AI is very fragmented. Copilot has been rightly criticized for feeling disjointed across office products. Amazon has AWS and Tranium chips, but their models trail the frontier dramatically. Meta has research talent and social distribution, but no cloud business and no chip stack. Anthropic has arguably the best product for agentic work today, but they run on other people's hardware, including Google's TPUs and Amazon's infrastructure, and they need every single customer they can get to justify their valuation. They cannot afford to just build pure intelligence. Google is the only company that could lose the model race quote unquote entirely. Every developer and every enterprise customer choosing Claude or Chat GPT for each task, and they would still be fine because the models are not their business. The models are experiments in intelligence that they choose to release, funded by the largest cash generating machine in technology running on proprietary silicon and feeding results back into products used by half the planet. That changes how you should interpret what Google ships. So what is Gemini 3.1 Pro and what isn't it? Gemini 3.1 Pro is not a coding agent per se, though of course it can write code very well. It's also not an agent manager, although it can manage agents. It's not trying to autonomously close issues across a 50 person engineering org the way opus 4.6 did at Raku 10en if that's what you need. Opus is probably better at it right now and Google knows that. What 3.1 Pro actually is is the strongest pure reasoner available at scale at a price point that makes it viable for any problem where reasoning depth matters more than tool orchestration. at $2 per million input tokens and just 12 per million output tokens. It's roughly seven and a half times cheaper than Opus 4.6 on input and more than six times cheaper on output. For a workload processing a billion tokens a month, that is the difference between a $15,000 bill and a $2,000 bill. With context caching, Gemini's costs can drop another 75% from there. JetBrain's director of AI called it stronger, faster, and more efficient. Artificial Analysis currently ranks it as the top model on their intelligence index at roughly half the cost of its nearest frontier peers. The model also ships with configurable thinking levels, low, medium, high, and max. So you can dial reasoning depth and cost up or down upon request. Simple classification or summarization? Low thinking, fast and cheap. Novel scientific problem requiring multi-step deduction? Well, let's turn it up to max. Let it work. This is cost engineering for reasoning at a granularity nobody else really offers. And it matters because it means you don't pay frontier prices for routine tasks. But here's the real comparison. And it matters. When you give these models tools, web search, code execution, database access, file systems, and you measure their performance on complicated real world tasks that require using those tools together to get work done, 4.6 catches up and often pulls ahead. On humanity's last exam with search and code tools, opus scores 53.1% versus Gemini's 51.4%. On GDP val, which measures expert level office and financial tasks, Opus leads by 289 ELO points, which is a massive gap. Remember that is the realworld work one guys. On the arena coding leaderboard and expert human preference rankings, clawed models consistently win. The pattern here is unambiguous. Gemini 3.1 Pro is the strongest naked reasoner. Opus 4.6 is the strongest equipped reasoner, the model that's best at combining intelligence with the ability to use tools, call APIs, read files, write code, and sustain that work over hours and days. GPT 5.3 CEX is the strongest specialist coder. If intelligence is the engine, tools are the drivetrain. Google built a better engine and Anthropic built a better car. OpenAI built better racing transmission for any individual task. The question isn't which model is smartest. The question is whether the task got bottlenecked by raw thinking or whether the ability to act on that thinking across tools in time is the real bottleneck. And that question turns out to be way more interesting than any benchmark and we are not talking about it enough. So we're talking about it now. First let's understand what Gemini 3.1 Pro is meant to solve in terms of problems. I think a good example is Gemini 3's Deep Think, which was released February 12th and is a specialized reasoning mode that sits above 3.1 Pro on the intelligence curve. Deepthink collaborated with human researchers to solve 18 previously unsolved problems across mathematics, physics, computer science, and economics. These are not incremental improvements. They're not benchmark tricks. It's making original research contributions. A conjecture in online submodular optimization had stood unproven since 2015. And if like me you were wondering what is online submodular optimization, it is a way of talking about data that moves around the world on the internet and mathematicians get involved. In this case, mathematicians proposed a seemingly obvious rule. In a data stream, if you copy an arriving item, it is always less valuable to do that than to move the original, presumably because of the risks of defects. Now, mathematicians had spent more than a decade trying to prove this was true. Gemini Deepth think engineered a precise three item combinatorial counter example and proved the conjecture false in a single run. That wasn't even the most interesting result on the max cut problem, which is a classic network optimization challenge, which again I'm getting way out of my depth here and that's kind of the point. That is why I am sharing this. If you feel out of your depth, this is part of what I'm trying to communicate. Gemini 3.1 Pro is about this kind of pure reasoning. Anyway, Jee and I solved this problem by pulling in I had to look this up. The curb bra theorem and measuring theory from continuous mathematics to solve a discrete algorithmic puzzle. Wow, that was a mouthful. Human algorithm researchers would not typically reach into geometric functional analysis to solve a graph theory problem because as much as they may sound like gobbledegood to you, they're actually really different domains of mathematics. The model crossed disciplinary boundaries that human specialists very rarely cross because the model doesn't see disciplinary boundaries and that is one of the strengths of an AI model. It's tackling problems in physics too where it tackled a gravitational radian. Look, the list goes on. It tackled problems in physics. It caught a critical error in a cryptography paper. And just two days before 3.1 Pro shipped, Isomorphic Labs, which is DeepMind's drug discovery spin-off, published results from their AI drug design engine. And the system had more than doubled AlphaFold 3's accuracy on the hardest protein prediction tasks and outperformed gold standard physics-based methods at a fraction of the cost and time. So here we have what? Protein folding. We have complicated mathematics, conjecture breaking. We have gravitational radiation involved, cryptographic error detection. It's messing around with crystal growth optimization. These are very much pure reasoning problems at the extreme end of the difficulty spectrum. My head is spinning just trying to communicate them. And I am a long way from anywhere close to even understanding the research. And they share specific characteristics. The inputs are well- definfined like a protein sequence. The problem can be stated extremely precisely. And the solution requires a long and sustained chain of logical deduction that a human mind can verify but often cannot generate without years of specialized training. This is the domain where Google's investment in intelligence as a problem really pays off. This is what means when he says let's solve intelligence and then use that to solve everything else. The everything else starts with science. It starts with the problems that have the highest ratio of reasoning difficulty to ambiguity where the question is very clear but the answer requires genuine intellectual horsepower to reach. And it's why I think the most important question for anyone reading about Gemini 3.1 Pro is not is it better than Opus, but rather what percentage of your actual work is bottlenecked by that kind of thinking? And here's where my analysis starts to get much more personal than most of the 3.1 Pro analyses out there. Because hard is not one thing. We've been treating hard work like one thing for too long. The benchmarks tend to treat it as a single thing. The model marketing certainly treats it like a single thing. The LinkedIn discourse treats it like a single thing. And the model landscape is now very differentiated. And it's going to force us to decompose what hard feels like. Think about the problems you face at work. Some of them are hard because they require deep reasoning. Analyzing a complicated contract for the clause that creates downstream liability across three jurisdictions or working through a multi-step financial model to find the sensitivity that changes the investment decision or diagnosing why a distributed system fails under a specific load pattern that only appears at scale. These are problems where you need to hold multiple variables up in your head, follow a chain of logic through branches and dependencies, and arrive at a conclusion that isn't very obvious from the surface. But most problems in business are not actually hard on a reasoning axis. They're hard on other axes entirely. Let me give you a few categories that I think we don't talk about enough, and we need to understand these problem types to actually figure out how we're going to thrive in the AI era. First, effort problems. They're not intellectually difficult. They're just large. Auditing 3,000 vendor contracts for compliance changes. Migrating a legacy codebase with 2 million lines of cobalt. Reviewing every customer interaction from last quarter to identify churn signals. The thinking at each step is super straightforward. Any competent person could do any individual piece. The challenge is sustained attention and thoroughess across a massive surface area without dropping detail. These are the problems Agentic AI was built for. Opus 4.6 running for hours on Rockuten's codebase is solving an effort problem. The 16 agents building a C compiler over weeks solving an effort problem. The thinking per step is not extraordinary. The endurance is and that's not what Gemini 3.1 Pro is optimized for. Here's another problem type. Coordination problems. Getting six teams aligned on a shared architecture decision when each team has different priorities in different technical contexts. Routing work across dependencies so that the back-end team doesn't block, the front-end team doesn't block the QA team. Managing information flow so the right people know the right things at the right time and nobody wastes 3 days building something that was already decided against in a meeting they weren't even invited to. Rakuten's deployment of Opus 4.6 six where the model autonomously closed issues and routed them across a 50 person org and six different repos that is solving a coordination problem. That's a model solving a human coordination problem. It understood not just the code but which team owned the repo, who has context on what, where to assign the issues and critically when to escalate. In other words, the model developed a kind of relevant engineering organizational awareness. Those are capabilities where Opus 4.6 six leads in a way that Gemini 3.1 Pro does not. Emotional intelligence problems. Delivering feedback to a direct report who's been underperforming, but is going through a divorce. Navigating a negotiation where the other party's stated concern, their price, is not their real concern, which is control. Reading a boardroom and knowing that the CFO's silence means opposition, not agreement. managing a team through a reorg where half the people are afraid of their jobs and the other half are angling for promotions which sounds a lot like AI or change management. Calibrating tone, timing, and transparency in situations where the right thing to say depends on dynamics no model can observe. We actually don't have models that solve this part well. Models don't even attempt this with reliability. And this is a massive percentage of what makes management and leadership genuinely hard. It frankly makes being a solid senior individual contributor hard because there is no escaping this kind of emotional intelligence problem the farther you get into business. Judgment and willpower problems. Deciding to kill a project your team spent six months building because the market signals shifted. Saying no to a lucrative client whose values don't align with your companies. Choosing the strategically correct but politically dangerous path when the data supports it but the executive team does not want to hear it. making the unpopular call, accepting the career risk. Those aren't really reasoning problems. Any competent analyst would lay out the logic. Those are courage problems. They're identity problems and they're almost entirely unsolvable by AI because the bottleneck is not computing the correct answer. It's having the nerve to act on it. That is a human challenge. Domain expertise problems. A senior engineer doesn't debug faster because they reason better than a junior. They debug faster because they've seen that exact stack trace before. They know the library's undocumented quirks and they remember the production incident from 2019 that had the exact same root cause. A veteran M&A attorney doesn't evaluate a deal better because they're smarter. They evaluate it better because they've closed 300 deals and they've internalized which representations and warranties actually get litigated and which ones are boilerplate that nobody ever enforces. This is experience and pattern recognition. knowledge accumulated through years of repetition. It's not really novel reasoning. Models are getting better at simulating domain expertise through training data, but the gap between has read about it and has lived it in the courtroom is still very real, particularly in domains with thin published literature. And here's a last one. Ambiguity problems. Deciding what to build when the market signal is contradictory. Defining strategy when three plausible interpretations of customer data exist and each one leads to a different product roadmap. Figuring out what the customer actually wants when they can't articulate it themselves. They say they want better reporting, but they actually want their boss to stop questioning their numbers. The hard part is not computing an answer here. The hard part is figuring out what the question actually is. This is the domain of product sense, strategic intuition, and the ability to hold multiple incomplete mental models in tension until one of them resolves. Models can help explore options here, but they cannot resolve the ambiguity because it's not computable ambiguity. Now, and this is the critical piece, look at those six different problem types I just described and ask yourself, which ones does a dramatic improvement in pure reasoning actually help? Be honest. Reasoning helps reasoning problems. That's obvious. The Gemini Deep Think results are pure wins for the reasoning axis. They're enormously valuable problems because a single insight in drug discovery can be worth billions of dollars. A breakthrough in material science can reshape an entire industry. A novel proof can unlock an entire new branch of mathematics. The problems are some of the highest value problems we humans work on. So, it's not that Google isn't tackling things that are valuable, but we should ask whether they're tackling things that are used in daily work. Now, to be fair, pure reasoning problems do exist in mainstream business. They're just rarer and much more specialized than people tend to assume. I think we sometimes think a lot of business is reasoning because we like to flatter ourselves. It's not. Here's an example of a few reasoning problems that are real in business. Multi-jurisdiction tax optimization is an example of a genuine reasoning problem. The tax codes across say 12 countries are all known inputs. The question is very well defined but the interaction effects between them create a combinatorial space mathematically that is genuinely hard to reason through. Complex derivative pricing that's another one. So is novel regulatory compliance. Not read these 3,000 contracts. That's an effort problem. But does this new financial instrument trigger reporting obligations simultaneously under say DoddFrank, Basil 3, and the Hong Kong SFC's updated guidelines? That's multi-step logical deduction across interacting rule systems. And it's the kind of thing Gemini 3.1 Pro on high would handle really well. Structural fraud detection, not machine learning pattern classification, but tracing a chain of seven transactions across four entities and reasoning about whether the structure implies layered money movement. That is a reasoning problem. But I want you to notice the pattern in these ones I described. These business reasoning problems cluster in specialized quantitative domains that look a lot more like applied science than most of the knowledge work that you and I do. Did you notice none of them is coding? And critically, the people who do this work spend most of their time on everything except the reasoning. The tax attorney spends maybe 10% of her week on the genuine multi-jurisdiction interaction puzzle and 90% on client management, document gathering, coordination with local council, navigating ambiguity about what the client actually wants to achieve, etc. The supply chain director's hardest problem is not the multiconstrain optimization path. It's actually getting three different vice presidents to agree on demand forecasts before the math can even get started. In each of these cases, the reasoning slice is real and it's high value, but it's embedded inside a much larger mass of effort, of coordination, of ambiguity type work, which means that a model optimized for pure reasoning is a tool that helps with the most intellectually demanding 10% of these roles. But a model optimized for tools in sustained work ends up helping with the other 90%. For most knowledge workers on most days, for most of us, the problems we face are hard on effort. They're hard on coordination. They're hard on emotional intelligence. They're hard on ambiguity. They're tough on domain expertise. But the pure reasoning component, that's a really narrow slice. I don't have a precise number and I'm very skeptical of anyone who claims to, but I do know this. When I look at my own work, the moments when someone says, "I need to think harder about this." are vastly outnumbered by the moments when someone says, "I need to coordinate with 20 people on this," or, "I need to get through all of this," or, "I need to figure out what we're actually trying to do here," or, "We need to get aligned." That's why I think Opus 4.6 is going to end up getting more daily usage in the office. And I think Google can live with that. Google would rather you use Gemini, of course, they're not indifferent. They have a cloud business to grow and an ecosystem they want to feed. But their AI research program doesn't depend on winning your daily workflow like it does for Anthropic. Google is competing for the periodic moment when a problem shows up that requires deep novel reasoning. And in that moment, they want to be the best and they want to be the cheapest. They're also positioning for the scientific frontier, where pure reasoning problems are dense, where the payoffs are measured in Nobel prizes and trillion dollar industries, and where Google's vertical stack from TPU silicon to deep mind research gives them a pipeline nobody else can match. The rest of the time, you'll probably use Claude or Chat GPT and Google will sell the TPUs that some of those models run on. So, what does this mean for you and me tomorrow? Here's where it gets really applicable to work. Three things I want to call out. First, stop looking at benchmarks and start mapping traction in your domain. I've said stop looking at benchmarks before. Here's what I mean by traction. What matters to you should be which model handles the specific tasks in your specific workflow most reliably and that's all that should matter and you should be the expert on that. Are you the smartest person in your field about which AI model handles which test type for you? Because you should be because the gap between I use chat GPT for everything and hey I route financial modeling to Gemini on high thinking. I route coding to claude code. I route quick research to Gemini flash and I do deep document analysis with Opus. That gap is the difference between commodity usage and actual leverage. The models have differentiated enough at this point that model routing is its own skill set and nobody's going to build that routing mile for your domain and your business except you. A cardiovascular surgeon is going to route differently and yes, they will use AI from a supply chain analyst routing differently from a creative director. The task to model mapping is very domain specific. And it's the kind of practical knowledge that compounds every single week as the models get better. You should be the expert. And yes, I'm going to put together guides for this that I'll put on the Substack to help you get there. Second, start disentangling the dimensions of difficulty in your work. What in your world is genuinely bottlenecked by reasoning? What's bottlenecked by effort or coordination or emotional intelligence? By domain expertise, by ambiguity, by something I haven't even named yet. Maybe it's political risk or regulatory uncertainty or talent scarcity. This problem decomposition matters because each dimension is getting automated on a very different timeline at a different rate by different tools. Pure reasoning problems are getting dramatically easier to solve right now. That's what the ARC AGI2 score doubling in 3 months means. But effort problems are getting automated in a different way. They're getting automated by agentic models that sustain work for hours or days. Think Opus 4.6 or Codex 5.3 encoding problems. Coordination problems are starting to yield to agent teams and tool augmented orchestration. Domain expertise is slowly being absorbed into the training data. Although the gap between I've actually done it and I've just thought about it, that's still a real thing. And we find that that's why we need some very good engineers and very good staffers who have real lived experience on the ground at a senior level. Emotional intelligence, judgment, ambiguity, courage, those are not problems touched by AI today. Those will be the last dimensions to yield if at all. And this is where your map of work matters. If you know that most of your value comes from axes that AI isn't automating, frankly, you can sleep a little better, but you should also be smarter about where you allocate AI on the pieces that are tractable with AI. If you discover that most of your value comes from the reasoning axis or the effort axis, you need to move deliberately toward dimensions where human judgment dominates and you need to get really good at routing your work to tools that are good at reasoning or good at sustained work for hours or days. If you're like, I don't know, how do I do this? I will put together a promptable guide for you. But you can't predict which parts of your value are durable and which are dissolving if you don't think about it. If you don't engage with it, if you don't decompose your work into this type of difficulty, and I wish the model makers would make this easier by talking honestly about what their models are good at and what they're not, but right now we mostly have them bragging about benchmark scores. and you get the impression they're getting generally smarter and you get confused and you wonder, well, if Gemini 3.1 Pro is the best in the world, why is it not good at managing teams of agents? Because that's a different kind of intelligence and frankly, they're not optimizing for it. Third task, build the taste, and yes, it's a buildable skill to evaluate AI output in your domain. Every model improvement is making this question more urgent for you, not less. When Opus can sustain autonomous coding for weeks and Gemini can reason through novel logic problems, the question is not can AI do it. Increasingly the question is can you tell whether what AI produced is actually good. Lisa Carbone is a mathematician at Ruters and she used Gemini deep think to review a highly technical mathematics paper and it caught a subtle logical flaw that had passed human peer review. Look, that's very impressive for the model. But notice what it required from Carbone. The judgment to know which paper to review, the expertise to evaluate whether the model's finding was correct, and the domain authority to act on the result. The model did find the flaw. The human had to validate that and give the model the task. Both steps were necessary. Neither was sufficient by itself. that judgment, the ability to look at a financial model and know the assumptions are wrong, to read a legal analysis and spot the missing precedent, that is a skill that continues to compound. Every other skill is getting cheaper. But that one, that one's getting more valuable because the models are getting better at generating very plausible looking output that requires genuine expertise to dig into and check and verify. And so, yes, while I'm putting together some guides that will help you dig in, I want to emphasize you don't necessarily need my guides. The point is your work and your thinking. You need the work. You need to do the work of applying whatever materials you get, my guide, something else, YouTube, to figure out what in your world is actually good AI output. So yes, I'm building guides that go deeper on model routing by domain, that go deeper on problem access mapping because I want this to be easier and I haven't seen them anywhere else. But the work of applying them to your world, that's your work. that's always been your work and there's no substitute for it and it's incredibly valuable right now. I want to step back and I want to look at Google's quiet game here. There's a version of the AI story that's all about speed, that's all about market share, who ships the fastest, who wins the enterprise, who reaches a billion users. That's the story that OpenAI and Anthropic are living. It's an important story. The products they're building are changing how we work and how we live all the time. But there's another version of the AI story, and that's the version where a company backed by a hundred billion dollars in annual cash flow is running on proprietary silicon that it designs and manufactures, employing a team that won a Nobel Prize, and operating under a CEO who has been saying, "Solve intelligence since long before other people took AI seriously." That company isn't trying to win the product race. That company is Google and they think the product race is a little bit of a sideshow. The main event is intelligence itself. And if you solve intelligence, the products take care of themselves. Gemini 3.1 Pro is ultimately a marker on that road. It is the purest reasoning model available at scale at the lowest price from the only company with the infrastructure to keep pushing the reasoning frontier indefinitely. It will not be the most used model this month. Claude will handle more daily tasks. I think chat GPT may well have more daily active users for a long time to come. Google would prefer that to be otherwise, but they can afford to be very patient because they're building the thing underneath the thing. The engine that disproves conjectures, the engine that discovers drugbinding sites, the engine that catches errors in peer-reviewed papers, and that pushes the boundary of what thinking means when a machine does it for you. The practical takeaway is not which model to use. Lots of other YouTube videos will tell you that. I'm not here to tell you that. It's that the model landscape has differentiated clearly enough about which AI I should use that that is actually becoming the wrong question to ask. The right question is which AI should I use for which problem? And how do I even know what kind of problem I'm solving? Is it a reasoning problem? Is it an effort problem? Is it a coordination problem? Is it an ambiguity problem? Each one has a different best tool, a different automation timeline, and a different implication for your career. Get specific. Build a map to your domain and what problems are AI tractable with which models because the tools are now specific enough to reward that. And the people who route them well are going to way outperform the people who use one model for everything. And that margin is going to widen every single month. Look, the fog around the AI race remains thick. It is hard to get signal but we can see enough to see this. We know that routing the model for the work makes a difference. So let's not make it complicated. Let's not sit there and stress about whether Gemini 3.1 Pro is the best and I have to switch everything to that. That is the wrong question to ask. Just ask what is the kind of problem I'm facing? What is the model at the frontier that I need to use for that kind of problem? And by the way, some models, especially effort problems, they don't even need a model at the frontier. You can use a dumb model for that, and that's totally fine. One of the big skills going forward is going to be learning when you need a smart model or not. So, that is Gemini 3.1 Pro. It is indeed the smartest model on the planet, and I don't think Google cares all that much whether you use it at work tomorrow or not. Tears.

## Timed Segments

[0:00] Google just shipped the smartest AI
[0:01] model on the planet. It&#39;s Gemini 3.1
[0:04] Pro. It costs a seventh of the
[0:05] competition and they don&#39;t even need you
[0:07] to use it. That&#39;s right. They shipped a
[0:10] model that leads on 13 of 16 benchmarks.
[0:13] It costs roughly a seventh of what Opus
[0:15] 4.6 charges. And Google really doesn&#39;t
[0:18] care. That&#39;s not a weird flex on their
[0:20] part. It might be the most important
[0:22] strategic signal in AI right now. And
[0:25] almost nobody is talking about it. The
[0:27] coverage of Gemini 3.1 Pro has been all
[0:29] about those benchmarks. And what&#39;s been
[0:31] missing is the question that is
[0:33] underneath. Why does the richest company
[0:36] in tech, a company generating over a
[0:38] hundred billion in annual free cash
[0:40] flow, build the most powerful reasoning
[0:43] engine on the market, price it at the
[0:45] floor, and be perfectly comfortable if
[0:48] you keep using Claude or Chad GPT for
[0:50] your daily work? The answer reshapes how
[0:53] you should think about every model
[0:54] release from here on out. It changes how
[0:57] you evaluate your own skills and it
[0:58] explains why most of the conversation
[1:00] about which AI I should use is really
[1:03] asking the wrong question at this point.
[1:05] So a couple weeks ago I wrote about Opus
[1:07] 4.6 and the way they use 16 AI agents to
[1:10] build a C compiler. That piece was about
[1:13] a new kind of labor. Agents coordinating
[1:15] in teams, managing engineering orgs,
[1:17] doing weeks of sustained autonomous
[1:19] work. This video is about something
[1:21] different. This video is about why the
[1:24] company with the deepest pockets and the
[1:26] widest distribution in the history of
[1:29] computing in the history of the planet
[1:31] is playing a fundamentally different
[1:33] game from anybody else. And what that
[1:35] means for how you evaluate AI models,
[1:37] choose your tools, and understand which
[1:40] of your problems are about to get
[1:42] dramatically easier to solve versus
[1:44] which ones are not. So, we&#39;re going to
[1:46] talk about one benchmark out of those 16
[1:48] because I don&#39;t usually talk about
[1:49] benchmarks. That number is 77.1%
[1:52] and it&#39;s on the ARC AGI2 benchmark. Why
[1:55] do we care? It&#39;s not about pattern
[1:58] matching from training data. ARC AGI2
[2:00] tests whether a model can solve logic
[2:03] problems it has never ever seen before.
[2:05] So it&#39;s not about retrieval from
[2:06] memorized examples, but about genuinely
[2:08] novel reasoning. Can the model look at a
[2:11] problem it&#39;s never encountered and
[2:13] figure it out from first principles? I
[2:15] want you to look at the acceleration on
[2:17] that benchmark. Gemini 3 Pro, which
[2:19] shipped just in November, scored 31.1%.
[2:23] Just 90 days later, 3.1 Pro ships and it
[2:26] more than doubles that score. That 46
[2:28] percentage point jump is the largest
[2:30] single generation reasoning gain any
[2:32] Frontier model family has ever produced.
[2:35] Opus 4.6 scored 68.8% on the same
[2:38] benchmark, which is very close. GPT 5.2
[2:41] scored a little bit lower. The rest of
[2:42] the score card tells a very similar
[2:44] story, right? A very high score on GPQA
[2:46] Diamond, which is essentially a science
[2:48] benchmark that&#39;s saturated at this
[2:50] point. A very strong benchmark score on
[2:52] Live Codebench Pro, which measures
[2:55] coding abilities. You get the idea.
[2:57] These numbers are real, but the
[2:59] benchmark isn&#39;t the point. The point is
[3:01] that Google chose to optimize for pure
[3:04] reasoning. Enthropic built opus 4.6 Six
[3:06] for agentic work. Stained autonomous
[3:08] coding pool calling in loops. Agent
[3:11] teams coordinating across code bases
[3:13] sometimes for weeks at a time. Open AI
[3:16] built codeex 5.3 for specialized coding
[3:19] pipelines with self- bootstrapping
[3:20] sandboxes and thousand token per second
[3:22] throughput at max. Google built Gemini
[3:24] 3.1 Pro for none of those things. They
[3:27] built it to think harder, not to code
[3:30] longer, not to manage more agents, to
[3:32] reason more deeply about problems it has
[3:35] never seen. That design choice tells you
[3:38] everything about who Google thinks it is
[3:40] and where they think they&#39;re going with
[3:42] AI. Demuse Hosabus has been saying the
[3:44] same sentence for 15 years. Step one,
[3:47] solve intelligence. Step two, use it to
[3:49] solve everything else. And so Google is
[3:52] focused on solving intelligence. He said
[3:55] it when Deep Mind was a London startup
[3:57] nobody had heard of. He said it after
[3:59] Alph Go beat a Go Grandmaster. He said
[4:01] it at Davos last month. He said it on
[4:03] the Fortune podcast last week where he
[4:06] predicted artificial general
[4:07] intelligence would come very very soon.
[4:10] He&#39;s actually updated his prediction and
[4:11] he is a conservative guy. He&#39;s seeing it
[4:13] coming within 5 years at this point. And
[4:15] he said it on 60 Minutes when he talked
[4:17] about curing most diseases within a
[4:18] decade. The sentence hasn&#39;t changed
[4:21] because his mission hasn&#39;t changed. This
[4:24] is not how anyone else in the AI
[4:26] industry talks. Sam Alman talks about
[4:28] products, partnerships, distribution,
[4:31] the race to a billion users. And yeah,
[4:33] he talks about intelligence, but in the
[4:35] context of how it&#39;s applied so
[4:37] frequently. When OpenAI put ads in Chad
[4:39] GPT, they did so because they needed to
[4:42] monetize a billion person user base. And
[4:45] Huss, when asked about the Chad GPT ads
[4:47] at Davos, said he was surprised OpenAI
[4:49] moved so fast on advertising. Of course,
[4:51] he said that Google is able to monetize
[4:54] search and they don&#39;t need to monetize
[4:56] ads in Gemini. As a result, Open AAI
[4:59] does not have the world&#39;s largest search
[5:00] engine and its profit streams funding
[5:02] them. And OpenAI is in a different
[5:04] funding position. The subtext from
[5:06] Hosabuse was unmistakable. We&#39;re not
[5:08] thinking about monetizing our Google AI
[5:11] chatbot. We&#39;re just thinking about
[5:13] intelligence. Now, I want to be clear
[5:15] here. This is not because Google is
[5:16] somehow above commercial concerns.
[5:18] Google runs the most profitable
[5:20] advertising business in human history.
[5:22] They generated over a hundred billion
[5:25] dollars in annual free cash flow from
[5:27] search, YouTube, and cloud. They&#39;re
[5:29] spending $93 billion on capital
[5:31] expenditure this year, and most of it is
[5:33] AI. They can afford to let Gemini be a
[5:36] research vehicle because their economic
[5:38] engine has nothing to do with whether
[5:40] you personally prefer Claude or Chat GPT
[5:43] for your daily workflow. Everyone else
[5:45] in AI is trying to figure out how to
[5:48] monetize models. Google is trying to
[5:50] figure out how to build intelligence.
[5:52] The money handles itself. Must be nice.
[5:55] And how does Google get that advantage?
[5:57] It&#39;s not just the profit streams. It&#39;s
[5:59] also that Google has deliberately built
[6:01] over the last decade a vertical stack in
[6:04] AI that nobody else has. They design
[6:06] their own silica. The Ironwood TPU, 7th
[6:09] generation announced earlier this year,
[6:11] delivers 10 times the compute power of
[6:13] the last generation at roughly half the
[6:15] energy cost per operation. It can link
[6:17] up 9,216
[6:20] chips in a single pod. Anthropic just
[6:22] signed a deal to use a million TPUs
[6:24] under a multi-year arrangement valued in
[6:26] the tens of billions of dollars. Meta is
[6:28] reportedly negotiating a similar
[6:30] commitment. When your competitors train
[6:33] their frontier models on your hardware,
[6:36] you have built something beyond a moat.
[6:38] You&#39;ve built an impregnable fortress.
[6:41] Google trains their own models on that
[6:43] silicon. They deploy those models
[6:45] through their own cloud infrastructure.
[6:47] Google Cloud, which nine out of 10 AI
[6:48] research labs use in some capacity. They
[6:51] distribute them to 650
[6:54] million monthly active Gemini users,
[6:56] although again that&#39;s not the primary
[6:57] point. And it&#39;s up 44% in a single
[7:00] quarter. plus billions more through
[7:02] search, Android, YouTube, and Chrome.
[7:04] They have easily the largest human reach
[7:06] in history of any company. And they fund
[7:09] the fundamental research through Deep
[7:10] Mind, which won a Nobel Prize in
[7:12] chemistry 18 months ago for Alphafold, a
[7:14] system that predicted the structure of
[7:16] virtually every known protein, a problem
[7:18] biologists have been working on for 50
[7:20] years. This vertical integration from
[7:22] transistor design to protein folding is
[7:24] not an accident. It&#39;s the architecture
[7:27] of a company that believes intelligence
[7:29] is a problem in computer science, that
[7:31] the problem is solvable, and that
[7:33] solving it requires controlling the
[7:35] entire stack from physics up to
[7:37] software. Google&#39;s Jeff Dean said
[7:38] they&#39;re working to shrink TPU design
[7:40] cycles from 2 years down to 6 to9 months
[7:43] by using AI in the chip design process
[7:46] itself. They&#39;re using intelligence to
[7:49] build the hardware that runs
[7:50] intelligence. The flywheel is
[7:52] self-reinforcing and it&#39;s accelerating
[7:54] dramatically. Nobody else has this.
[7:57] Microsoft has Azure and a partnership
[7:59] with OpenAI, but they don&#39;t make chips
[8:01] and their consumer distribution in AI is
[8:03] very fragmented. Copilot has been
[8:05] rightly criticized for feeling
[8:07] disjointed across office products.
[8:09] Amazon has AWS and Tranium chips, but
[8:11] their models trail the frontier
[8:13] dramatically. Meta has research talent
[8:15] and social distribution, but no cloud
[8:17] business and no chip stack. Anthropic
[8:20] has arguably the best product for
[8:22] agentic work today, but they run on
[8:24] other people&#39;s hardware, including
[8:25] Google&#39;s TPUs and Amazon&#39;s
[8:27] infrastructure, and they need every
[8:28] single customer they can get to justify
[8:31] their valuation. They cannot afford to
[8:33] just build pure intelligence. Google is
[8:35] the only company that could lose the
[8:37] model race quote unquote entirely. Every
[8:39] developer and every enterprise customer
[8:41] choosing Claude or Chat GPT for each
[8:43] task, and they would still be fine
[8:45] because the models are not their
[8:47] business. The models are experiments in
[8:49] intelligence that they choose to
[8:51] release, funded by the largest cash
[8:53] generating machine in technology running
[8:55] on proprietary silicon and feeding
[8:57] results back into products used by half
[8:59] the planet. That changes how you should
[9:02] interpret what Google ships. So what is
[9:04] Gemini 3.1 Pro and what isn&#39;t it? Gemini
[9:08] 3.1 Pro is not a coding agent per se,
[9:11] though of course it can write code very
[9:12] well. It&#39;s also not an agent manager,
[9:14] although it can manage agents. It&#39;s not
[9:16] trying to autonomously close issues
[9:18] across a 50 person engineering org the
[9:20] way opus 4.6 did at Raku 10en if that&#39;s
[9:23] what you need. Opus is probably better
[9:25] at it right now and Google knows that.
[9:27] What 3.1 Pro actually is is the
[9:30] strongest pure reasoner available at
[9:32] scale at a price point that makes it
[9:34] viable for any problem where reasoning
[9:37] depth matters more than tool
[9:38] orchestration. at $2 per million input
[9:41] tokens and just 12 per million output
[9:43] tokens. It&#39;s roughly seven and a half
[9:45] times cheaper than Opus 4.6 on input and
[9:48] more than six times cheaper on output.
[9:50] For a workload processing a billion
[9:52] tokens a month, that is the difference
[9:54] between a $15,000 bill and a $2,000
[9:57] bill. With context caching, Gemini&#39;s
[10:00] costs can drop another 75% from there.
[10:02] JetBrain&#39;s director of AI called it
[10:04] stronger, faster, and more efficient.
[10:06] Artificial Analysis currently ranks it
[10:08] as the top model on their intelligence
[10:10] index at roughly half the cost of its
[10:12] nearest frontier peers. The model also
[10:14] ships with configurable thinking levels,
[10:16] low, medium, high, and max. So you can
[10:18] dial reasoning depth and cost up or down
[10:20] upon request. Simple classification or
[10:23] summarization? Low thinking, fast and
[10:25] cheap. Novel scientific problem
[10:27] requiring multi-step deduction? Well,
[10:29] let&#39;s turn it up to max. Let it work.
[10:31] This is cost engineering for reasoning
[10:33] at a granularity nobody else really
[10:35] offers. And it matters because it means
[10:37] you don&#39;t pay frontier prices for
[10:39] routine tasks. But here&#39;s the real
[10:41] comparison. And it matters. When you
[10:44] give these models tools, web search,
[10:46] code execution, database access, file
[10:48] systems, and you measure their
[10:50] performance on complicated real world
[10:51] tasks that require using those tools
[10:53] together to get work done, 4.6 catches
[10:56] up and often pulls ahead. On humanity&#39;s
[10:58] last exam with search and code tools,
[11:00] opus scores 53.1%
[11:03] versus Gemini&#39;s 51.4%. On GDP val, which
[11:07] measures expert level office and
[11:09] financial tasks, Opus leads by 289 ELO
[11:12] points, which is a massive gap. Remember
[11:14] that is the realworld work one guys. On
[11:17] the arena coding leaderboard and expert
[11:20] human preference rankings, clawed models
[11:22] consistently win. The pattern here is
[11:24] unambiguous. Gemini 3.1 Pro is the
[11:27] strongest naked reasoner. Opus 4.6 is
[11:30] the strongest equipped reasoner, the
[11:32] model that&#39;s best at combining
[11:34] intelligence with the ability to use
[11:35] tools, call APIs, read files, write
[11:38] code, and sustain that work over hours
[11:40] and days. GPT 5.3 CEX is the strongest
[11:43] specialist coder. If intelligence is the
[11:46] engine, tools are the drivetrain. Google
[11:48] built a better engine and Anthropic
[11:50] built a better car. OpenAI built better
[11:53] racing transmission for any individual
[11:55] task. The question isn&#39;t which model is
[11:58] smartest. The question is whether the
[12:00] task got bottlenecked by raw thinking or
[12:03] whether the ability to act on that
[12:04] thinking across tools in time is the
[12:06] real bottleneck. And that question turns
[12:08] out to be way more interesting than any
[12:10] benchmark and we are not talking about
[12:12] it enough. So we&#39;re talking about it
[12:13] now. First let&#39;s understand what Gemini
[12:16] 3.1 Pro is meant to solve in terms of
[12:18] problems. I think a good example is
[12:20] Gemini 3&#39;s Deep Think, which was
[12:22] released February 12th and is a
[12:24] specialized reasoning mode that sits
[12:26] above 3.1 Pro on the intelligence curve.
[12:29] Deepthink collaborated with human
[12:31] researchers to solve 18 previously
[12:33] unsolved problems across mathematics,
[12:36] physics, computer science, and
[12:37] economics. These are not incremental
[12:39] improvements. They&#39;re not benchmark
[12:41] tricks. It&#39;s making original research
[12:43] contributions. A conjecture in online
[12:45] submodular optimization had stood
[12:48] unproven since 2015. And if like me you
[12:51] were wondering what is online submodular
[12:53] optimization, it is a way of talking
[12:54] about data that moves around the world
[12:56] on the internet and mathematicians get
[12:58] involved. In this case, mathematicians
[13:00] proposed a seemingly obvious rule. In a
[13:03] data stream, if you copy an arriving
[13:05] item, it is always less valuable to do
[13:07] that than to move the original,
[13:08] presumably because of the risks of
[13:10] defects. Now, mathematicians had spent
[13:13] more than a decade trying to prove this
[13:14] was true. Gemini Deepth think engineered
[13:17] a precise three item combinatorial
[13:20] counter example and proved the
[13:22] conjecture false in a single run. That
[13:25] wasn&#39;t even the most interesting result
[13:26] on the max cut problem, which is a
[13:29] classic network optimization challenge,
[13:31] which again I&#39;m getting way out of my
[13:33] depth here and that&#39;s kind of the point.
[13:35] That is why I am sharing this. If you
[13:37] feel out of your depth, this is part of
[13:39] what I&#39;m trying to communicate. Gemini
[13:41] 3.1 Pro is about this kind of pure
[13:44] reasoning. Anyway, Jee and I solved this
[13:46] problem by pulling in I had to look this
[13:48] up. The curb bra theorem and measuring
[13:52] theory from continuous mathematics to
[13:54] solve a discrete algorithmic puzzle.
[13:56] Wow, that was a mouthful. Human
[13:58] algorithm researchers would not
[14:00] typically reach into geometric
[14:01] functional analysis to solve a graph
[14:03] theory problem because as much as they
[14:05] may sound like gobbledegood to you,
[14:06] they&#39;re actually really different
[14:07] domains of mathematics. The model
[14:09] crossed disciplinary boundaries that
[14:12] human specialists very rarely cross
[14:14] because the model doesn&#39;t see
[14:16] disciplinary boundaries and that is one
[14:17] of the strengths of an AI model. It&#39;s
[14:19] tackling problems in physics too where
[14:21] it tackled a gravitational radian. Look,
[14:23] the list goes on. It tackled problems in
[14:25] physics. It caught a critical error in a
[14:27] cryptography paper. And just two days
[14:30] before 3.1 Pro shipped, Isomorphic Labs,
[14:33] which is DeepMind&#39;s drug discovery
[14:35] spin-off, published results from their
[14:37] AI drug design engine. And the system
[14:39] had more than doubled AlphaFold 3&#39;s
[14:41] accuracy on the hardest protein
[14:43] prediction tasks and outperformed gold
[14:46] standard physics-based methods at a
[14:48] fraction of the cost and time. So here
[14:50] we have what? Protein folding. We have
[14:52] complicated mathematics, conjecture
[14:54] breaking. We have gravitational
[14:56] radiation involved, cryptographic error
[14:58] detection. It&#39;s messing around with
[15:00] crystal growth optimization. These are
[15:02] very much pure reasoning problems at the
[15:05] extreme end of the difficulty spectrum.
[15:07] My head is spinning just trying to
[15:08] communicate them. And I am a long way
[15:10] from anywhere close to even
[15:12] understanding the research. And they
[15:13] share specific characteristics. The
[15:15] inputs are well- definfined like a
[15:17] protein sequence. The problem can be
[15:19] stated extremely precisely. And the
[15:22] solution requires a long and sustained
[15:24] chain of logical deduction that a human
[15:27] mind can verify but often cannot
[15:30] generate without years of specialized
[15:32] training. This is the domain where
[15:34] Google&#39;s investment in intelligence as a
[15:37] problem really pays off. This is what
[15:40] means when he says let&#39;s solve
[15:42] intelligence and then use that to solve
[15:44] everything else. The everything else
[15:46] starts with science. It starts with the
[15:48] problems that have the highest ratio of
[15:50] reasoning difficulty to ambiguity where
[15:52] the question is very clear but the
[15:54] answer requires genuine intellectual
[15:56] horsepower to reach. And it&#39;s why I
[15:58] think the most important question for
[16:00] anyone reading about Gemini 3.1 Pro is
[16:03] not is it better than Opus, but rather
[16:06] what percentage of your actual work is
[16:08] bottlenecked by that kind of thinking?
[16:11] And here&#39;s where my analysis starts to
[16:13] get much more personal than most of the
[16:15] 3.1 Pro analyses out there. Because hard
[16:18] is not one thing. We&#39;ve been treating
[16:21] hard work like one thing for too long.
[16:24] The benchmarks tend to treat it as a
[16:26] single thing. The model marketing
[16:28] certainly treats it like a single thing.
[16:30] The LinkedIn discourse treats it like a
[16:32] single thing. And the model landscape is
[16:34] now very differentiated. And it&#39;s going
[16:36] to force us to decompose what hard feels
[16:38] like. Think about the problems you face
[16:40] at work. Some of them are hard because
[16:43] they require deep reasoning. Analyzing a
[16:46] complicated contract for the clause that
[16:48] creates downstream liability across
[16:50] three jurisdictions or working through a
[16:52] multi-step financial model to find the
[16:54] sensitivity that changes the investment
[16:56] decision or diagnosing why a distributed
[16:59] system fails under a specific load
[17:01] pattern that only appears at scale.
[17:02] These are problems where you need to
[17:04] hold multiple variables up in your head,
[17:07] follow a chain of logic through branches
[17:08] and dependencies, and arrive at a
[17:11] conclusion that isn&#39;t very obvious from
[17:12] the surface. But most problems in
[17:15] business are not actually hard on a
[17:17] reasoning axis. They&#39;re hard on other
[17:20] axes entirely. Let me give you a few
[17:22] categories that I think we don&#39;t talk
[17:24] about enough, and we need to understand
[17:26] these problem types to actually figure
[17:28] out how we&#39;re going to thrive in the AI
[17:30] era. First, effort problems. They&#39;re not
[17:33] intellectually difficult. They&#39;re just
[17:35] large. Auditing 3,000 vendor contracts
[17:38] for compliance changes. Migrating a
[17:40] legacy codebase with 2 million lines of
[17:42] cobalt. Reviewing every customer
[17:44] interaction from last quarter to
[17:46] identify churn signals. The thinking at
[17:48] each step is super straightforward. Any
[17:50] competent person could do any individual
[17:52] piece. The challenge is sustained
[17:55] attention and thoroughess across a
[17:57] massive surface area without dropping
[17:59] detail. These are the problems Agentic
[18:02] AI was built for. Opus 4.6 running for
[18:04] hours on Rockuten&#39;s codebase is solving
[18:07] an effort problem. The 16 agents
[18:09] building a C compiler over weeks solving
[18:11] an effort problem. The thinking per step
[18:14] is not extraordinary. The endurance is
[18:16] and that&#39;s not what Gemini 3.1 Pro is
[18:20] optimized for. Here&#39;s another problem
[18:21] type. Coordination problems. Getting six
[18:24] teams aligned on a shared architecture
[18:26] decision when each team has different
[18:28] priorities in different technical
[18:30] contexts. Routing work across
[18:32] dependencies so that the back-end team
[18:34] doesn&#39;t block, the front-end team
[18:35] doesn&#39;t block the QA team. Managing
[18:38] information flow so the right people
[18:39] know the right things at the right time
[18:41] and nobody wastes 3 days building
[18:43] something that was already decided
[18:44] against in a meeting they weren&#39;t even
[18:46] invited to. Rakuten&#39;s deployment of Opus
[18:48] 4.6 six where the model autonomously
[18:50] closed issues and routed them across a
[18:53] 50 person org and six different repos
[18:55] that is solving a coordination problem.
[18:57] That&#39;s a model solving a human
[18:59] coordination problem. It understood not
[19:01] just the code but which team owned the
[19:03] repo, who has context on what, where to
[19:05] assign the issues and critically when to
[19:07] escalate. In other words, the model
[19:10] developed a kind of relevant engineering
[19:12] organizational awareness. Those are
[19:14] capabilities where Opus 4.6 six leads in
[19:17] a way that Gemini 3.1 Pro does not.
[19:20] Emotional intelligence problems.
[19:22] Delivering feedback to a direct report
[19:24] who&#39;s been underperforming, but is going
[19:26] through a divorce. Navigating a
[19:28] negotiation where the other party&#39;s
[19:30] stated concern, their price, is not
[19:32] their real concern, which is control.
[19:34] Reading a boardroom and knowing that the
[19:36] CFO&#39;s silence means opposition, not
[19:39] agreement. managing a team through a
[19:41] reorg where half the people are afraid
[19:43] of their jobs and the other half are
[19:44] angling for promotions which sounds a
[19:46] lot like AI or change management.
[19:48] Calibrating tone, timing, and
[19:50] transparency in situations where the
[19:52] right thing to say depends on dynamics
[19:54] no model can observe. We actually don&#39;t
[19:56] have models that solve this part well.
[19:58] Models don&#39;t even attempt this with
[19:59] reliability. And this is a massive
[20:02] percentage of what makes management and
[20:04] leadership genuinely hard. It frankly
[20:06] makes being a solid senior individual
[20:08] contributor hard because there is no
[20:10] escaping this kind of emotional
[20:12] intelligence problem the farther you get
[20:15] into business. Judgment and willpower
[20:17] problems. Deciding to kill a project
[20:19] your team spent six months building
[20:21] because the market signals shifted.
[20:23] Saying no to a lucrative client whose
[20:25] values don&#39;t align with your companies.
[20:27] Choosing the strategically correct but
[20:29] politically dangerous path when the data
[20:31] supports it but the executive team does
[20:33] not want to hear it. making the
[20:35] unpopular call, accepting the career
[20:37] risk. Those aren&#39;t really reasoning
[20:39] problems. Any competent analyst would
[20:41] lay out the logic. Those are courage
[20:43] problems. They&#39;re identity problems and
[20:46] they&#39;re almost entirely unsolvable by AI
[20:48] because the bottleneck is not computing
[20:50] the correct answer. It&#39;s having the
[20:52] nerve to act on it. That is a human
[20:54] challenge. Domain expertise problems. A
[20:57] senior engineer doesn&#39;t debug faster
[20:59] because they reason better than a
[21:00] junior. They debug faster because
[21:02] they&#39;ve seen that exact stack trace
[21:04] before. They know the library&#39;s
[21:05] undocumented quirks and they remember
[21:07] the production incident from 2019 that
[21:10] had the exact same root cause. A veteran
[21:11] M&amp;A attorney doesn&#39;t evaluate a deal
[21:14] better because they&#39;re smarter. They
[21:15] evaluate it better because they&#39;ve
[21:17] closed 300 deals and they&#39;ve
[21:19] internalized which representations and
[21:21] warranties actually get litigated and
[21:23] which ones are boilerplate that nobody
[21:24] ever enforces. This is experience and
[21:27] pattern recognition. knowledge
[21:29] accumulated through years of repetition.
[21:31] It&#39;s not really novel reasoning. Models
[21:34] are getting better at simulating domain
[21:36] expertise through training data, but the
[21:38] gap between has read about it and has
[21:40] lived it in the courtroom is still very
[21:42] real, particularly in domains with thin
[21:44] published literature. And here&#39;s a last
[21:46] one. Ambiguity problems. Deciding what
[21:49] to build when the market signal is
[21:51] contradictory. Defining strategy when
[21:53] three plausible interpretations of
[21:55] customer data exist and each one leads
[21:58] to a different product roadmap. Figuring
[22:00] out what the customer actually wants
[22:02] when they can&#39;t articulate it
[22:03] themselves. They say they want better
[22:05] reporting, but they actually want their
[22:07] boss to stop questioning their numbers.
[22:09] The hard part is not computing an answer
[22:11] here. The hard part is figuring out what
[22:13] the question actually is. This is the
[22:15] domain of product sense, strategic
[22:17] intuition, and the ability to hold
[22:19] multiple incomplete mental models in
[22:21] tension until one of them resolves.
[22:24] Models can help explore options here,
[22:26] but they cannot resolve the ambiguity
[22:28] because it&#39;s not computable ambiguity.
[22:30] Now, and this is the critical piece,
[22:32] look at those six different problem
[22:34] types I just described and ask yourself,
[22:37] which ones does a dramatic improvement
[22:40] in pure reasoning actually help? Be
[22:43] honest. Reasoning helps reasoning
[22:45] problems. That&#39;s obvious. The Gemini
[22:47] Deep Think results are pure wins for the
[22:50] reasoning axis. They&#39;re enormously
[22:52] valuable problems because a single
[22:54] insight in drug discovery can be worth
[22:56] billions of dollars. A breakthrough in
[22:57] material science can reshape an entire
[22:59] industry. A novel proof can unlock an
[23:02] entire new branch of mathematics. The
[23:04] problems are some of the highest value
[23:06] problems we humans work on. So, it&#39;s not
[23:08] that Google isn&#39;t tackling things that
[23:09] are valuable, but we should ask whether
[23:12] they&#39;re tackling things that are used in
[23:13] daily work. Now, to be fair, pure
[23:15] reasoning problems do exist in
[23:17] mainstream business. They&#39;re just rarer
[23:20] and much more specialized than people
[23:21] tend to assume. I think we sometimes
[23:23] think a lot of business is reasoning
[23:25] because we like to flatter ourselves.
[23:27] It&#39;s not. Here&#39;s an example of a few
[23:29] reasoning problems that are real in
[23:30] business. Multi-jurisdiction tax
[23:32] optimization is an example of a genuine
[23:34] reasoning problem. The tax codes across
[23:36] say 12 countries are all known inputs.
[23:39] The question is very well defined but
[23:41] the interaction effects between them
[23:43] create a combinatorial space
[23:44] mathematically that is genuinely hard to
[23:47] reason through. Complex derivative
[23:50] pricing that&#39;s another one. So is novel
[23:52] regulatory compliance. Not read these
[23:55] 3,000 contracts. That&#39;s an effort
[23:56] problem. But does this new financial
[23:59] instrument trigger reporting obligations
[24:02] simultaneously under say DoddFrank,
[24:04] Basil 3, and the Hong Kong SFC&#39;s updated
[24:07] guidelines? That&#39;s multi-step logical
[24:10] deduction across interacting rule
[24:12] systems. And it&#39;s the kind of thing
[24:13] Gemini 3.1 Pro on high would handle
[24:16] really well. Structural fraud detection,
[24:19] not machine learning pattern
[24:20] classification, but tracing a chain of
[24:22] seven transactions across four entities
[24:25] and reasoning about whether the
[24:26] structure implies layered money
[24:28] movement. That is a reasoning problem.
[24:30] But I want you to notice the pattern in
[24:32] these ones I described. These business
[24:34] reasoning problems cluster in
[24:36] specialized quantitative domains that
[24:39] look a lot more like applied science
[24:41] than most of the knowledge work that you
[24:43] and I do. Did you notice none of them is
[24:45] coding? And critically, the people who
[24:46] do this work spend most of their time on
[24:48] everything except the reasoning. The tax
[24:51] attorney spends maybe 10% of her week on
[24:53] the genuine multi-jurisdiction
[24:55] interaction puzzle and 90% on client
[24:58] management, document gathering,
[24:59] coordination with local council,
[25:01] navigating ambiguity about what the
[25:03] client actually wants to achieve, etc.
[25:05] The supply chain director&#39;s hardest
[25:07] problem is not the multiconstrain
[25:09] optimization path. It&#39;s actually getting
[25:10] three different vice presidents to agree
[25:12] on demand forecasts before the math can
[25:14] even get started. In each of these
[25:15] cases, the reasoning slice is real and
[25:17] it&#39;s high value, but it&#39;s embedded
[25:19] inside a much larger mass of effort, of
[25:22] coordination, of ambiguity type work,
[25:25] which means that a model optimized for
[25:26] pure reasoning is a tool that helps with
[25:30] the most intellectually demanding 10% of
[25:32] these roles. But a model optimized for
[25:34] tools in sustained work ends up helping
[25:37] with the other 90%. For most knowledge
[25:40] workers on most days, for most of us,
[25:42] the problems we face are hard on effort.
[25:46] They&#39;re hard on coordination. They&#39;re
[25:47] hard on emotional intelligence. They&#39;re
[25:49] hard on ambiguity. They&#39;re tough on
[25:51] domain expertise. But the pure reasoning
[25:53] component, that&#39;s a really narrow slice.
[25:56] I don&#39;t have a precise number and I&#39;m
[25:58] very skeptical of anyone who claims to,
[26:00] but I do know this. When I look at my
[26:03] own work, the moments when someone says,
[26:05] &quot;I need to think harder about this.&quot; are
[26:08] vastly outnumbered by the moments when
[26:10] someone says, &quot;I need to coordinate with
[26:12] 20 people on this,&quot; or, &quot;I need to get
[26:14] through all of this,&quot; or, &quot;I need to
[26:16] figure out what we&#39;re actually trying to
[26:17] do here,&quot; or, &quot;We need to get aligned.&quot;
[26:20] That&#39;s why I think Opus 4.6 is going to
[26:22] end up getting more daily usage in the
[26:24] office. And I think Google can live with
[26:26] that. Google would rather you use
[26:28] Gemini, of course, they&#39;re not
[26:29] indifferent. They have a cloud business
[26:31] to grow and an ecosystem they want to
[26:32] feed. But their AI research program
[26:34] doesn&#39;t depend on winning your daily
[26:36] workflow like it does for Anthropic.
[26:39] Google is competing for the periodic
[26:41] moment when a problem shows up that
[26:42] requires deep novel reasoning. And in
[26:45] that moment, they want to be the best
[26:46] and they want to be the cheapest.
[26:48] They&#39;re also positioning for the
[26:50] scientific frontier, where pure
[26:51] reasoning problems are dense, where the
[26:53] payoffs are measured in Nobel prizes and
[26:55] trillion dollar industries, and where
[26:57] Google&#39;s vertical stack from TPU silicon
[26:59] to deep mind research gives them a
[27:01] pipeline nobody else can match. The rest
[27:03] of the time, you&#39;ll probably use Claude
[27:05] or Chat GPT and Google will sell the
[27:07] TPUs that some of those models run on.
[27:09] So, what does this mean for you and me
[27:11] tomorrow? Here&#39;s where it gets really
[27:13] applicable to work. Three things I want
[27:15] to call out. First, stop looking at
[27:18] benchmarks and start mapping traction in
[27:20] your domain. I&#39;ve said stop looking at
[27:21] benchmarks before. Here&#39;s what I mean by
[27:24] traction. What matters to you should be
[27:26] which model handles the specific tasks
[27:29] in your specific workflow most reliably
[27:32] and that&#39;s all that should matter and
[27:34] you should be the expert on that. Are
[27:36] you the smartest person in your field
[27:37] about which AI model handles which test
[27:39] type for you? Because you should be
[27:42] because the gap between I use chat GPT
[27:44] for everything and hey I route financial
[27:46] modeling to Gemini on high thinking. I
[27:49] route coding to claude code. I route
[27:50] quick research to Gemini flash and I do
[27:53] deep document analysis with Opus. That
[27:55] gap is the difference between commodity
[27:58] usage and actual leverage. The models
[28:00] have differentiated enough at this point
[28:02] that model routing is its own skill set
[28:05] and nobody&#39;s going to build that routing
[28:06] mile for your domain and your business
[28:09] except you. A cardiovascular surgeon is
[28:12] going to route differently and yes, they
[28:13] will use AI from a supply chain analyst
[28:16] routing differently from a creative
[28:17] director. The task to model mapping is
[28:20] very domain specific. And it&#39;s the kind
[28:22] of practical knowledge that compounds
[28:24] every single week as the models get
[28:26] better. You should be the expert. And
[28:28] yes, I&#39;m going to put together guides
[28:29] for this that I&#39;ll put on the Substack
[28:31] to help you get there. Second, start
[28:33] disentangling the dimensions of
[28:36] difficulty in your work. What in your
[28:38] world is genuinely bottlenecked by
[28:41] reasoning? What&#39;s bottlenecked by effort
[28:43] or coordination or emotional
[28:44] intelligence? By domain expertise, by
[28:47] ambiguity, by something I haven&#39;t even
[28:49] named yet. Maybe it&#39;s political risk or
[28:51] regulatory uncertainty or talent
[28:52] scarcity. This problem decomposition
[28:55] matters because each dimension is
[28:57] getting automated on a very different
[28:59] timeline at a different rate by
[29:01] different tools. Pure reasoning problems
[29:03] are getting dramatically easier to solve
[29:05] right now. That&#39;s what the ARC AGI2
[29:07] score doubling in 3 months means. But
[29:09] effort problems are getting automated in
[29:11] a different way. They&#39;re getting
[29:13] automated by agentic models that sustain
[29:15] work for hours or days. Think Opus 4.6
[29:18] or Codex 5.3 encoding problems.
[29:20] Coordination problems are starting to
[29:22] yield to agent teams and tool augmented
[29:25] orchestration. Domain expertise is
[29:27] slowly being absorbed into the training
[29:29] data. Although the gap between I&#39;ve
[29:31] actually done it and I&#39;ve just thought
[29:33] about it, that&#39;s still a real thing. And
[29:35] we find that that&#39;s why we need some
[29:36] very good engineers and very good
[29:38] staffers who have real lived experience
[29:40] on the ground at a senior level.
[29:42] Emotional intelligence, judgment,
[29:44] ambiguity, courage, those are not
[29:46] problems touched by AI today. Those will
[29:49] be the last dimensions to yield if at
[29:51] all. And this is where your map of work
[29:53] matters. If you know that most of your
[29:55] value comes from axes that AI isn&#39;t
[29:58] automating, frankly, you can sleep a
[30:00] little better, but you should also be
[30:02] smarter about where you allocate AI on
[30:05] the pieces that are tractable with AI.
[30:08] If you discover that most of your value
[30:10] comes from the reasoning axis or the
[30:11] effort axis, you need to move
[30:13] deliberately toward dimensions where
[30:15] human judgment dominates and you need to
[30:17] get really good at routing your work to
[30:19] tools that are good at reasoning or good
[30:21] at sustained work for hours or days. If
[30:23] you&#39;re like, I don&#39;t know, how do I do
[30:25] this? I will put together a promptable
[30:27] guide for you. But you can&#39;t predict
[30:29] which parts of your value are durable
[30:31] and which are dissolving if you don&#39;t
[30:33] think about it. If you don&#39;t engage with
[30:35] it, if you don&#39;t decompose your work
[30:37] into this type of difficulty, and I wish
[30:39] the model makers would make this easier
[30:41] by talking honestly about what their
[30:44] models are good at and what they&#39;re not,
[30:46] but right now we mostly have them
[30:48] bragging about benchmark scores. and you
[30:50] get the impression they&#39;re getting
[30:51] generally smarter and you get confused
[30:54] and you wonder, well, if Gemini 3.1 Pro
[30:56] is the best in the world, why is it not
[30:58] good at managing teams of agents?
[31:00] Because that&#39;s a different kind of
[31:01] intelligence and frankly, they&#39;re not
[31:03] optimizing for it. Third task, build the
[31:06] taste, and yes, it&#39;s a buildable skill
[31:08] to evaluate AI output in your domain.
[31:11] Every model improvement is making this
[31:14] question more urgent for you, not less.
[31:17] When Opus can sustain autonomous coding
[31:19] for weeks and Gemini can reason through
[31:21] novel logic problems, the question is
[31:23] not can AI do it. Increasingly the
[31:26] question is can you tell whether what AI
[31:29] produced is actually good. Lisa Carbone
[31:32] is a mathematician at Ruters and she
[31:34] used Gemini deep think to review a
[31:36] highly technical mathematics paper and
[31:38] it caught a subtle logical flaw that had
[31:41] passed human peer review. Look, that&#39;s
[31:43] very impressive for the model. But
[31:45] notice what it required from Carbone.
[31:47] The judgment to know which paper to
[31:50] review, the expertise to evaluate
[31:52] whether the model&#39;s finding was correct,
[31:54] and the domain authority to act on the
[31:56] result. The model did find the flaw. The
[31:59] human had to validate that and give the
[32:01] model the task. Both steps were
[32:04] necessary. Neither was sufficient by
[32:06] itself. that judgment, the ability to
[32:08] look at a financial model and know the
[32:09] assumptions are wrong, to read a legal
[32:11] analysis and spot the missing precedent,
[32:14] that is a skill that continues to
[32:15] compound. Every other skill is getting
[32:17] cheaper. But that one, that one&#39;s
[32:19] getting more valuable because the models
[32:21] are getting better at generating very
[32:23] plausible looking output that requires
[32:25] genuine expertise to dig into and check
[32:28] and verify. And so, yes, while I&#39;m
[32:30] putting together some guides that will
[32:31] help you dig in, I want to emphasize you
[32:34] don&#39;t necessarily need my guides. The
[32:36] point is your work and your thinking.
[32:38] You need the work. You need to do the
[32:41] work of applying whatever materials you
[32:43] get, my guide, something else, YouTube,
[32:45] to figure out what in your world is
[32:49] actually good AI output. So yes, I&#39;m
[32:53] building guides that go deeper on model
[32:54] routing by domain, that go deeper on
[32:56] problem access mapping because I want
[32:58] this to be easier and I haven&#39;t seen
[32:59] them anywhere else. But the work of
[33:01] applying them to your world, that&#39;s your
[33:04] work. that&#39;s always been your work and
[33:06] there&#39;s no substitute for it and it&#39;s
[33:08] incredibly valuable right now. I want to
[33:10] step back and I want to look at Google&#39;s
[33:12] quiet game here. There&#39;s a version of
[33:14] the AI story that&#39;s all about speed,
[33:17] that&#39;s all about market share, who ships
[33:19] the fastest, who wins the enterprise,
[33:21] who reaches a billion users. That&#39;s the
[33:23] story that OpenAI and Anthropic are
[33:25] living. It&#39;s an important story. The
[33:27] products they&#39;re building are changing
[33:28] how we work and how we live all the
[33:30] time. But there&#39;s another version of the
[33:32] AI story, and that&#39;s the version where a
[33:34] company backed by a hundred billion
[33:36] dollars in annual cash flow is running
[33:38] on proprietary silicon that it designs
[33:41] and manufactures, employing a team that
[33:43] won a Nobel Prize, and operating under a
[33:45] CEO who has been saying, &quot;Solve
[33:47] intelligence since long before other
[33:49] people took AI seriously.&quot; That company
[33:52] isn&#39;t trying to win the product race.
[33:54] That company is Google and they think
[33:56] the product race is a little bit of a
[33:58] sideshow. The main event is intelligence
[34:00] itself. And if you solve intelligence,
[34:02] the products take care of themselves.
[34:04] Gemini 3.1 Pro is ultimately a marker on
[34:07] that road. It is the purest reasoning
[34:10] model available at scale at the lowest
[34:12] price from the only company with the
[34:14] infrastructure to keep pushing the
[34:16] reasoning frontier indefinitely. It will
[34:19] not be the most used model this month.
[34:21] Claude will handle more daily tasks. I
[34:23] think chat GPT may well have more daily
[34:26] active users for a long time to come.
[34:28] Google would prefer that to be
[34:30] otherwise, but they can afford to be
[34:32] very patient because they&#39;re building
[34:34] the thing underneath the thing. The
[34:37] engine that disproves conjectures, the
[34:39] engine that discovers drugbinding sites,
[34:41] the engine that catches errors in
[34:43] peer-reviewed papers, and that pushes
[34:45] the boundary of what thinking means when
[34:47] a machine does it for you. The practical
[34:49] takeaway is not which model to use. Lots
[34:52] of other YouTube videos will tell you
[34:54] that. I&#39;m not here to tell you that.
[34:55] It&#39;s that the model landscape has
[34:58] differentiated clearly enough about
[35:00] which AI I should use that that is
[35:03] actually becoming the wrong question to
[35:05] ask. The right question is which AI
[35:09] should I use for which problem? And how
[35:12] do I even know what kind of problem I&#39;m
[35:14] solving? Is it a reasoning problem? Is
[35:16] it an effort problem? Is it a
[35:17] coordination problem? Is it an ambiguity
[35:19] problem? Each one has a different best
[35:22] tool, a different automation timeline,
[35:24] and a different implication for your
[35:26] career. Get specific. Build a map to
[35:29] your domain and what problems are AI
[35:31] tractable with which models because the
[35:34] tools are now specific enough to reward
[35:36] that. And the people who route them well
[35:38] are going to way outperform the people
[35:41] who use one model for everything. And
[35:43] that margin is going to widen every
[35:44] single month. Look, the fog around the
[35:47] AI race remains thick. It is hard to get
[35:50] signal but we can see enough to see
[35:53] this. We know that routing the model for
[35:56] the work makes a difference. So let&#39;s
[35:58] not make it complicated. Let&#39;s not sit
[36:00] there and stress about whether Gemini
[36:02] 3.1 Pro is the best and I have to switch
[36:04] everything to that. That is the wrong
[36:06] question to ask. Just ask what is the
[36:08] kind of problem I&#39;m facing? What is the
[36:11] model at the frontier that I need to use
[36:13] for that kind of problem? And by the
[36:15] way, some models, especially effort
[36:17] problems, they don&#39;t even need a model
[36:19] at the frontier. You can use a dumb
[36:21] model for that, and that&#39;s totally fine.
[36:23] One of the big skills going forward is
[36:25] going to be learning when you need a
[36:26] smart model or not. So, that is Gemini
[36:29] 3.1 Pro. It is indeed the smartest model
[36:31] on the planet, and I don&#39;t think Google
[36:33] cares all that much whether you use it
[36:35] at work tomorrow or not. Tears.
