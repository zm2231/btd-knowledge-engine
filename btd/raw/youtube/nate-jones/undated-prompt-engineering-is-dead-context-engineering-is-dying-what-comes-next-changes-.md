---
title: "Prompt Engineering Is Dead. Context Engineering Is Dying. What Comes Next Changes Everything."
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=QWzLPn164w0"
video_id: "QWzLPn164w0"
duration: "29:41"
transcript_method: "youtube-captions"
segment_count: 764
char_count: 28921
status: ingested
topics: []
meta_patterns: []
---

# Prompt Engineering Is Dead. Context Engineering Is Dying. What Comes Next Changes Everything.

**Creator**: nate-jones | **Duration**: 29:41
**URL**: https://www.youtube.com/watch?v=QWzLPn164w0
**Transcript**: 764 segments, 28921 chars

## Transcript

In January, CLA reported its AI agent now does the work of 853 full-time employees and has saved the company $60 million. In the same earnings cycle, its CEO admitted publicly that the AI strategy had cost something far more valuable than $60 million, and he's still trying to buy it back. This is not another AI is overhyped story. It is actually the opposite. The AI work too well. And the distinction between AI that fails and AI that succeeds at the wrong thing is the most important unsolved problem in enterprise AI right now. This is a bigger problem than context engineering per se, although that's a piece of it. It's bigger than prompt engineering, which now frankly looks like a warm-up act. I'm going to call what we're talking about here intent engineering. It is the discipline of making organizational purpose like goals, values, tradeoffs, decision boundaries. These need to become machine readable and machine actionable so that when you deploy an autonomous system, it optimizes for what your company actually needs, not just what it can measure. Here's the CLA backstory. In early 2024, Ara rolled out an AI powered customer service agent. It handled 2.3 million conversations in the first month across 23 markets in 35 languages. Resolution times dropped from 11 minutes to two. The CEO projected $40 million in savings. And then customers started complaining. Generic answers, robotic tone, no ability to handle anything requiring judgment. By mid 2025, CEO Sebastian Seycowski told Bloomberg that while cost was a predominant evaluation factor, the result was lower quality. End quote. Clarin began frantically rehiring the human agents it had gutted. Most people tell this story as proof that AI can't handle nuance, and that was a comforting reading in early 2025. A more interesting reading in 2026 is that the AI agent was extraordinarily good at resolving tickets fast and that that was the wrong goal to give the agent. Clara's organizational intent wasn't resolve tickets fast. It was actually build lasting customer relationships that drive lifetime value in a very competitive fintech market. Those are profoundly different goals and they require profoundly different decision-making at the point of interaction. A human agent with five years at the company knows this difference intuitively. She knows when to bend a policy, when to spend three extra minutes because the customer's tone says they're about to churn, when efficiency is the right move versus when generosity is the right move. She knows this because she absorbed Clara's real values. Not the ones on the website, but the ones encoded in the decisions managers make every day in the stories veterans tell new hires. In the unwritten rules about which metrics leadership actually cares about when Bush comes to shove, the AI agent knew none of it. It had a prompt. It had context. It did not have intent. I am concerned that the AI agent inadvertently reflected the real values of CLA when it behaved the way it did because the real values of CLA may have been to save the money first. Nevertheless, customers pushed back and called CLA back toward its own stated values. And that's been a good thing because the $60 million in savings since the program rolled out have been not nearly enough to cover the reputational damage to CLA from becoming a public laughingtock over AI and from aggressively pushing customer service resolutions that did not meet customer needs. Ironically, rolling out an AI without much thought, but perhaps in line with organizational directives, did more to push CLA toward its own stated values than perhaps anything else would have done. I want to be precise about this story. The point here is not to talk about CLA per se. The point is to talk about what our organizational intent is with AI agents, what our goals are, and how agents need to reflect the larger perspective and longer term challenge of our organizations as they become more sophisticated and operate for longer time scales themselves. We have agents now that run for multiple weeks. We have agents soon that will run for multiple months. We are at a level where it is time to think about how agents interact with organizational goals very seriously and CLA is just kind of an example of why that's important. I want to be precise about how we got here because naming things matters. Naming is how we create a shared understanding and I think we are short on naming things correctly when it comes to intent and context. Prompt engineering was the first discipline in the age of AI. It was individual, synchronous, and sessionbased. You sit in front of the chat window, you craft an instruction, you iterate the output. It's a personal skill, and the value is personal. This is the era that produced a thousand how to write the perfect prompt blog post. Most of them are terrible. Context engineering followed prompt engineering. It's the one the industry is currently grappling with. Anthropic published a foundational piece in September of 2025 that defined context engineering is the shift from crafting isolated instructions to crafting the entire information state that an AI system operates within. Chains Harrison Chase put it more bluntly in a Sequoia Capital interview when he described it as everything's context engineering. Context engineering is such a good term. I wish I came up with that term because it describes everything we've done at Langchain without knowing the term existed. End quote. That's pretty good. Context engineering is where the action is right now. Building rag pipelines, wiring up MCP servers, structuring organizational knowledge so agents can access it. It's necessary, but it's not sufficient. And I think the industry is about to discover that in a very expensive way. Intent engineering. Intent engineering is the third discipline and it's the one that almost nobody's building for yet. Context engineering tells the agents what to know. Intent engineering tells agents what to want. It's the practice of encoding organizational purpose into infrastructure, not as pros in a system prompt, but as structured, actionable parameters that shape how agents make decisions autonomously. It's the layer that would have told Clara's AI agent, "Yes, you can resolve this ticket in 90 seconds, but the customer has been with us for years, and their tone indicates frustration. Spend the extra time. Offer them a specialist." The goal is retention. Without intent engineering, you get what Claragot, a technically brilliant agent optimizing for exactly the wrong objective. You get what Deoid's 2026 state of AI in the enterprise report found across 3,000 some leaders in 24 countries. 84% of companies have not redesigned jobs around AI capabilities and only 21% have a mature model for agent governance. These numbers aren't a technology story. They're an intent failure. The models work. The context pipelines are getting better. What's missing is the organizational infrastructure that connects AI capability to organizational purpose. I cited the failure stats from deote above. I want to show you the other side of the ledger because the juxtaposition makes this all very disorienting. Investment in AI continues to be massive and accelerating. Deoid's tech value survey found that 57% of respondents were putting between 21 and 50% of their digital transformation budgets into AI automation. and 20% of companies were investing over half on average $700 million for a company with 13 billion in revenue. KPMG's Q4 AI pulse survey showed capital flowing ROI confidence rising in agents moving from pilots to professionalized platforms. Gartner is predicting that by 2028 15% of dayto-day work decisions will be made autonomously by agents. I think that might be low. So the money is real, the deployments are real, and the results are very much in between. 74% of companies globally report they have yet to see tangible value from AI. McKenzie found 30% of AI pilots failed to achieve scaled impact. These numbers all coexist together with the investment numbers. There's not really a contradiction here if you start to peel the onion and understand things more carefully. What we're describing when we talk about a pattern of scaled investment and somewhat mixed results on deployment is that organizations have solved can AI do this task at an individual task level and they have completely failed to solve can AI do this task in a way that serves our organizational goals at scale with appropriate judgment. That second question that's an intent engineering question. Look at what happened with Microsoft Copilot. One of the most heavily invested enterprise AI products in history. Microsoft poured billions into infrastructure, embedded AI into every office application, and launched an aggressive enterprise sales campaign. 85% of Fortune 500 companies adopted it, and the adoption stalled hard. Gartner found that only 5% of organizations moved from a co-pilot pilot to a larger scale deployment. Only about 3% of the total Microsoft 365 user base actually adopted Copilot as paid users. Bloomberg reported Microsoft slashing internal sales targets after the majority of salespeople missed their goals. Even inside companies that signed six figure co-pilot deals, employees resisted. Reddit threads are full of engineers at multi-billion dollar companies describing their organizations downgrading licenses because employees preferred another AI. maybe chat GPT, maybe Claude. The standard explanation for co-pilot struggles centers on UX problems and model quality. And those are definitely real issues, but they're not the fundamental issue. The fundamental issue is that deploying an AI tool across an organization without organizational intent alignment is like hiring 40,000 new employees and never telling them what the company does, what it values, or how to make decisions. You get lots of activity and not much productivity. You get AI usage metrics in a dashboard and almost no measurable impact on what the organization is trying to accomplish. That's not a tools problem. That's an intent gap. I want to get structural because vague handwaving about AI transformation is exactly what we're trying to avoid here and what so many organizations get into trouble doing. There is an intent gap today and it operates across three distinct layers, each one at a different altitude. Getting any one of them right is helpful. Getting all three right is the difference between having AI tools and having an AI native organization. Layer one is what I'm going to call a unified context infrastructure. This is the layer the industry is most aware of and it's still not really built yet. Right now, every team building agents rolls their own context stack. One team pipes Slack data through a custom rag pipeline. Another manually exports Google Docs into a vector store. A third built an MCP server that connects to Salesforce but not to Jira. A fourth team doesn't know the other three exist yet. This is what one analyst called the shadow agents problem and it mirrors the shadow IT crisis of the early cloud era except the stakes are much higher because agents don't just access data, they act upon it. Security and compliance teams can't allow arbitrary unvetted agents running on developer laptops to access critical systems like customer PII, financial data or healthcare records. But without sanctioned infrastructure, that is exactly what is happening. The model context protocol which Anthropic introduced late in 2024 and donated to the Linux Foundation in December of 2025 is the most promising attempt at standardization at this point. UCP has seen a ton of adoption. OpenAI, Google, Microsoft, and more than 50 enterprise partners have committed to it. It's become the de facto standard. Monthly SDK downloads are close to 100 million now, I think. But protocol adoption and organizational implementation are very different things. Having a USBC standard does not help if your company hasn't decided which ports to install, who maintains them, or what gets plugged in. The context infrastructure question is not really a technical question. You can configure MCP servers. It is architectural and political. Which systems become agent accessible? Who decides what context an agent can see across departments? How do you version organizational knowledge so agents aren't operating on stale information? How do you handle the fact that the sales team Slack context and the engineering team Slack context encode completely different institutional assumptions? Deoid's 2025 survey found that nearly half of organizations cited data searchability and data reusability as top challenges blocking AI automation. I'm surprised that number isn't higher. As their analyst put it, the shift required is from traditional ETL data pipelines to enterprise search and indexing, similar to how Google made the worldwide web discover. The data does exist inside corporations. The agents also exist increasingly, but the connective tissue between them, the organizational context layer and the structures and safeguards to ensure that's accessed correctly, that mostly doesn't exist. Now, we're going to move on to layer two, the coherent AI worker toolkit. So, everyone's rolling out their own AI workflow. One person uses Claude for research and chat GPT for drafting. Another uses cursor for code and perplexity for factchecking. A third has built a custom agent chain using langraph. A fourth is copy pasting into a chat window. None of these employees can articulate their workflow in a way that's transferable, measurable, or improvable by anybody else. And this matters because the difference between individual AI use and organizational AI leverage is enormous. It's the difference between having one good hire and having a system that makes everybody better. It's the difference I've been writing about for a year between AI activity and AI fluency. The former has 30% gains that you get from bolting AI onto existing workflows. And the latter has the 300% gains you get from rethinking the workflow itself around AI capabilities. But here's what we need to realize. Fluency doesn't scale through training alone. It scales through shared infrastructure. Whether any individual person has Slack doesn't matter. Whether an agent can search 50 people's Slack context plus their docs plus their project plan plus the customer data, that's what determines whether the agent can do organizational scale work rather than individual scale tasks. Lloyd's 2026 report found that workforce access to sanctioned AI tools expanded by 50% in a year. But that doesn't mean that access is sufficient. Organizations are often giving people tools without giving them or their agents the organizational context and data that allow those tools to deliver real value. And that's where Clara's story intersects with co-pilot story. Tools deployed without organizational infrastructure become very expensive toys. The 74% of companies reporting no tangible value from AI are probably not failing because of models. They're failing because there's no shared understanding of how AI tools connect to organizational workflows, of where AI automation should replace human effort, of where it should augment it, of where human judgment should be non-negotiable, all the things that CLA should have done. All the things that the co-pilot salespeople didn't tell you about. This is the issue today with AI in the enterprise. We are not taking that data and context layer seriously. And that doesn't allow us to even approach layer three, which we're going to talk about next. Intent engineering proper. This is the layer that almost certainly doesn't exist in your business. It's the one I think matters the most, and it requires something genuinely new. OKRs were designed for people. They encode human readable goals. They assume human judgment about prioritization, trade-offs, values, and exceptions. They assume a manager can look a direct report in the eye and say, "Here's what matters this quarter." and trust that the report will interpret that guidance through a mesh of institutional context, professional norms, and personal judgment developed over months and years. Agents don't have any of that. An agent does not know your company's OKRs unless you put them in the context window. It doesn't know which trade-offs your leadership team would prefer unless you encode those preferences in a way it can act on. It doesn't know the difference between a decision that should be escalated and one it should make autonomously unless you define the boundary. And unlike a human employee, an agent will not absorb your company culture through osmosis for 6 months, through all hands meetings, through hallway conversations, and through watching senior people handle ambiguous situations. When a human employee joins a company, alignment happens through a 100 informal mechanisms. You read the wiki, you have a slack chat, you develop judgment, you have a happy hour with someone. None of that works for agents. Agents need explicit alignment, and they need it before they start working, not 6 months after. This means organizations need to develop something that mostly doesn't exist. Machine readable expressions of organizational intent. Think about what that requires. It is not just put the OKRs in the prompt. It is a cascade of specificity that most organizations have never had to produce because humans could fill in the gap. It is a cascade of specificity that organizations have never had to produce because humans could fill in the gaps. At the top, you need goal structures that agents can interpret and act on, not increase customer satisfaction. That's a human readable aspiration. You need an agent actionable objective. An agent needs to know what signals indicate customer satisfaction in our context. What data sources contain those signals? What actions am I authorized to take to improve them? What trade-offs am I empowered to make? speed versus thoroughess, cost versus quality, and where are the hard boundaries I may not cross. Below that, you need what I would call delegation frameworks, tenants translated into decision boundaries. Amazon's leadership principles work for humans because humans can interpret customer obsession through contextual judgment. An agent needs that principle to be decomposed. When customer request X conflicts with policy Y, here is the resolution hierarchy. When data suggests action A, but the customer expressed preference B, here's the decision logic. These are not rules in the traditional sense. They're encoded judgment. The kind of organizational knowledge that a senior employee carries in her head after 5 years and a new hire will absorb gradually. Agents need it now. And at the base, you need feedback mechanisms that actually close the loop. When an agent makes a decision, was it aligned with organizational intent? How do we know? This is exactly what happened at CLA. The agent optimized for resolution speed because that was the objective it could measure. Nobody had encoded the objectives that mattered most. Relationship quality, brand trust, customer lifetime value, the contextual judgment about when to be efficient and when to be generous. Those objectives lived in the heads of the human agents who had to walk out the door because they were fired. The age of humans just know is ending. Intent engineering is the discipline of making what humans know explicit, structured, and machine actionable. Not because the humans are leaving, although some of them will, but because the agents arriving to work alongside the people cannot function without it. If there is anything I want you to take away from this video, it is not if I can do this intent engineering, I can get rid of the people. You should be regarding agents as rather undependable actors and recognizing that you need humans to both encode intent engineering and maintain successful agentic systems that scale. That's how you actually start to drive agents in production. So why hasn't this been built yet? First, it's genuinely new. Before agents could run autonomously over long time horizons, we did not need this. The human was the intent layer. The agent never needed to understand organizational intent because you were standing right there. Longrunning agents break the model and demand a new way of thinking. And that's what this video is about. Second, the people who understand organizational strategy like executives are not the people who build agents. And the people building agents like engineers are not the people who understand organizational strategy very frequently. This is a classic two cultures problem. And it's acute in AI because the technology is moving so fast that the organizational thinkers cannot keep up and the technologists, they don't think it's their job. MIT found that AI investment is still viewed primarily as a tech challenge for the CIO rather than a business issue that requires leadership across the organization. That framing that's going to guarantee an intent gap that has real implications for your AI agents. CIOS can build infrastructure, but intent comes from the entire leadership team working together. The people who actually decide what the organization values and how it makes trade-offs need to be talking with engineering more. Third, just really hard. Making organizational intent explicit and structured is extremely difficult. Most organizations have never had to do this. Their goals live in slide decks, in OKR documents that get half read and referenced at personal reviews once a year, in leadership principles that get cited in performance reviews, but really they don't get operationalized in the tacet knowledge of experienced employees who know what to do in ambiguous situations even though they've never been told. Nobody has strong muscles here because most organizations have never exercised them. So what does a solution look like? I don't want to just leave you with a gap. First, at the infrastructure level, you need to develop a composable vendor agnostic architecture that enables agents to operate across systems, tools, and models securely and at scale. MCP is a sample protocol layer for this. But the organizational implementation requires decisions about data governance, access controls, freshness guarantees, and semantic consistency that no one protocol is going to make for you. The companies that build this well will treat it like they treated their data warehouse strategy in the as a core strategic investment not just an IT project. At the workflow level you need what I would call an organizational capability map for AI. A shared living understanding of which workflows are agent ready which are agent augmented with human in the loop and which remain human only. This is not a static document that gets filed in confluence and dumped. It's an operating system that evolves as agent capabilities keep improving and as organizational context infrastructure matures. The companies that do this well are likely going to be creating a new role. It will be called something like an AI workflow architect and it will sit between engineering operations and strategy and that person is going to be very busy at the alignment level. You need the genuinely new thing. Goal translation infrastructure that converts human readable organizational objectives into agent actionable parameters. This includes decision boundaries, escalation, value hierarchies like how the agent resolves trade-offs and feedback loops. How you measure and correct alignment drift over time. Google's agent development kit is one of the earliest attempts to formalize this at a technical level. It separates agent context into distinct layers. working context, session memory, long-term memory, and artifacts. Each of these has specific governance. There's also emerging academic work. A recent paper from researchers at Google DeepMind proposed five levels of AI agent autonomy. Operator, collaborator, consultant, approver, and observer, each with different intent alignment requirements and different human oversight models. These are just the early sketches. The integrated system is really whites space. Building context infrastructure plus workflow mapping plus intent alignment is new and it's an enormous challenge. If OKRs were the management innovation that let Intel align thousands of humans to shared objectives in the 70s, intent engineering is the management innovation that lets organizations align hundreds or thousands or tens of thousands of agents to those same objectives in 2026. While those agents operate at speeds and scales, no human manager can supervise. The parallel is direct. The urgency has never been greater. OKRs have taken decades to become standard management practice. We do not have 20 years to wait. For the past 3 years, the AI race has been framed as an intelligence race. Who has the best model? Who tops the best benchmarks? Who has the biggest context window? That framing made sense when models were a bottleneck. But models are not the bottleneck today. Not for most organizational use cases. The frontier models like Opus 4.6 or Gemini 3 or GPT 5.2. These are all extraordinarily capable models. The differences between them matter far less than the differences between organizations that give them clear, structured, goal-igned intent and organizations that don't. The race is an intent race. Not who has the smartest AI in their systems, but who has built the organizational infrastructure that lets AI operate with the fullest, most accurate, most strategically correct understanding of what the organization is trying to accomplish. The company with a mediocre model and extraordinary organizational intent infrastructure will outperform the company with a frontier model and fragmented, inaccessible, unaligned organizational knowledge every single time. This means that the most important AI investment in 2026 isn't really a model subscription. It's not another co-pilot license. It's organizational intent architecture. Making your company's goals, values, decision frameworks, and trade-off hierarchies discoverable, structured, and agent actionable. It's building the alignment infrastructure that lets agents make decisions that aren't just technically correct, but that are strategically coherent. It's developing the shared language and shared systems that let AI capabilities scale from one heroic engineer to 40,000 knowledge workers operating in concert. Clara's story was not AI doesn't work. The AI worked brilliantly. That was the problem. It was so good at optimizing for the measurable objective that nobody noticed it was destroying the ones that really mattered. Trust. The 700 human agents that got laid off took with them the institutional knowledge that really mattered. The knowledge that had never been documented. Humans just knew. The lesson is to build the intent layer so that agents don't need to absorb organizational values through osmosis because they can't. The lesson is to recognize that agents need humans working alongside them. Maybe Clara has finally learned that the prompt engineering era asked, "How do I talk to AI?" The context engineering era is asking us now, "What does AI need to know?" And the intent engineering era is beginning to ask us the question that really matters. What does the organization need AI to want to be productive? Context without intent is like a loaded weapon with no target. We've spent years building AI systems. 2026 is a year when we learn to aim them toward an organizational intent that really matters. If you're listening to this, you are involved at one or more of these layers. Everybody is from the individual contributors who are working against these systems and practicing prompting and trying to use them to gather context all the way up to the systems designers and all the way up to the seauite. It is up to all of us to build layers that enable agents to act productively in line with organizational values. If we are not careful, failure to do so is going to lead to AI agents that cause active harm to the business. That's what Clarno learned. Don't do that. Build systems that encode both context and intent at the organizational scale. The clock is running. And the teams that do this are going to be able to unleash the power of the agents that are running for weeks and soon for months with a whole lot more confidence than the people who are building systems where they don't encode intent, where they don't encode values, where they don't encode tradeoffs, where you cannot trust an agent not to hang up on a customer just because you told them to make the call shorter. Don't do that. Build for long-term intent because agents with long-term intent are

## Timed Segments

[0:00] In January, CLA reported its AI agent
[0:02] now does the work of 853 full-time
[0:06] employees and has saved the company $60
[0:08] million. In the same earnings cycle, its
[0:10] CEO admitted publicly that the AI
[0:13] strategy had cost something far more
[0:16] valuable than $60 million, and he&#39;s
[0:19] still trying to buy it back. This is not
[0:21] another AI is overhyped story. It is
[0:24] actually the opposite. The AI work too
[0:27] well. And the distinction between AI
[0:29] that fails and AI that succeeds at the
[0:32] wrong thing is the most important
[0:34] unsolved problem in enterprise AI right
[0:37] now. This is a bigger problem than
[0:39] context engineering per se, although
[0:41] that&#39;s a piece of it. It&#39;s bigger than
[0:43] prompt engineering, which now frankly
[0:45] looks like a warm-up act. I&#39;m going to
[0:47] call what we&#39;re talking about here
[0:49] intent engineering. It is the discipline
[0:51] of making organizational purpose like
[0:54] goals, values, tradeoffs, decision
[0:57] boundaries. These need to become machine
[1:00] readable and machine actionable so that
[1:02] when you deploy an autonomous system, it
[1:05] optimizes for what your company actually
[1:08] needs, not just what it can measure.
[1:10] Here&#39;s the CLA backstory. In early 2024,
[1:13] Ara rolled out an AI powered customer
[1:16] service agent. It handled 2.3 million
[1:19] conversations in the first month across
[1:21] 23 markets in 35 languages. Resolution
[1:24] times dropped from 11 minutes to two.
[1:26] The CEO projected $40 million in
[1:29] savings. And then customers started
[1:31] complaining. Generic answers, robotic
[1:33] tone, no ability to handle anything
[1:35] requiring judgment. By mid 2025, CEO
[1:38] Sebastian Seycowski told Bloomberg that
[1:42] while cost was a predominant evaluation
[1:44] factor, the result was lower quality.
[1:47] End quote. Clarin began frantically
[1:50] rehiring the human agents it had gutted.
[1:53] Most people tell this story as proof
[1:55] that AI can&#39;t handle nuance, and that
[1:58] was a comforting reading in early 2025.
[2:02] A more interesting reading in 2026 is
[2:04] that the AI agent was extraordinarily
[2:07] good at resolving tickets fast and that
[2:10] that was the wrong goal to give the
[2:13] agent. Clara&#39;s organizational intent
[2:16] wasn&#39;t resolve tickets fast. It was
[2:19] actually build lasting customer
[2:21] relationships that drive lifetime value
[2:23] in a very competitive fintech market.
[2:26] Those are profoundly different goals and
[2:28] they require profoundly different
[2:30] decision-making at the point of
[2:31] interaction. A human agent with five
[2:34] years at the company knows this
[2:36] difference intuitively. She knows when
[2:38] to bend a policy, when to spend three
[2:40] extra minutes because the customer&#39;s
[2:42] tone says they&#39;re about to churn, when
[2:44] efficiency is the right move versus when
[2:46] generosity is the right move. She knows
[2:48] this because she absorbed Clara&#39;s real
[2:51] values. Not the ones on the website, but
[2:53] the ones encoded in the decisions
[2:55] managers make every day in the stories
[2:58] veterans tell new hires. In the
[2:59] unwritten rules about which metrics
[3:02] leadership actually cares about when
[3:03] Bush comes to shove, the AI agent knew
[3:06] none of it. It had a prompt. It had
[3:08] context. It did not have intent. I am
[3:11] concerned that the AI agent
[3:14] inadvertently
[3:15] reflected the real values of CLA when it
[3:18] behaved the way it did because the real
[3:21] values of CLA may have been to save the
[3:25] money first. Nevertheless, customers
[3:28] pushed back and called CLA back toward
[3:32] its own stated values. And that&#39;s been a
[3:34] good thing because the $60 million in
[3:37] savings since the program rolled out
[3:39] have been not nearly enough to cover the
[3:43] reputational damage to CLA from becoming
[3:46] a public laughingtock over AI and from
[3:50] aggressively pushing customer service
[3:53] resolutions that did not meet customer
[3:55] needs. Ironically, rolling out an AI
[3:58] without much thought, but perhaps in
[4:00] line with organizational directives, did
[4:02] more to push CLA toward its own stated
[4:06] values than perhaps anything else would
[4:09] have done. I want to be precise about
[4:11] this story. The point here is not to
[4:14] talk about CLA per se. The point is to
[4:17] talk about what our organizational
[4:19] intent is with AI agents, what our goals
[4:22] are, and how agents need to reflect the
[4:25] larger perspective and longer term
[4:28] challenge of our organizations as they
[4:30] become more sophisticated and operate
[4:32] for longer time scales themselves. We
[4:35] have agents now that run for multiple
[4:37] weeks. We have agents soon that will run
[4:39] for multiple months. We are at a level
[4:41] where it is time to think about how
[4:43] agents interact with organizational
[4:45] goals very seriously and CLA is just
[4:48] kind of an example of why that&#39;s
[4:50] important. I want to be precise about
[4:52] how we got here because naming things
[4:55] matters. Naming is how we create a
[4:57] shared understanding and I think we are
[4:59] short on naming things correctly when it
[5:02] comes to intent and context. Prompt
[5:04] engineering was the first discipline in
[5:06] the age of AI. It was individual,
[5:08] synchronous, and sessionbased. You sit
[5:10] in front of the chat window, you craft
[5:12] an instruction, you iterate the output.
[5:14] It&#39;s a personal skill, and the value is
[5:16] personal. This is the era that produced
[5:18] a thousand how to write the perfect
[5:20] prompt blog post. Most of them are
[5:21] terrible. Context engineering followed
[5:23] prompt engineering. It&#39;s the one the
[5:25] industry is currently grappling with.
[5:27] Anthropic published a foundational piece
[5:29] in September of 2025 that defined
[5:32] context engineering is the shift from
[5:34] crafting isolated instructions to
[5:37] crafting the entire information state
[5:40] that an AI system operates within.
[5:42] Chains Harrison Chase put it more
[5:44] bluntly in a Sequoia Capital interview
[5:46] when he described it as everything&#39;s
[5:48] context engineering. Context engineering
[5:51] is such a good term. I wish I came up
[5:53] with that term because it describes
[5:54] everything we&#39;ve done at Langchain
[5:56] without knowing the term existed. End
[5:58] quote. That&#39;s pretty good. Context
[6:01] engineering is where the action is right
[6:03] now. Building rag pipelines, wiring up
[6:05] MCP servers, structuring organizational
[6:08] knowledge so agents can access it. It&#39;s
[6:10] necessary, but it&#39;s not sufficient. And
[6:13] I think the industry is about to
[6:14] discover that in a very expensive way.
[6:17] Intent engineering. Intent engineering
[6:19] is the third discipline and it&#39;s the one
[6:21] that almost nobody&#39;s building for yet.
[6:23] Context engineering tells the agents
[6:25] what to know. Intent engineering tells
[6:28] agents what to want. It&#39;s the practice
[6:30] of encoding organizational purpose into
[6:33] infrastructure, not as pros in a system
[6:35] prompt, but as structured, actionable
[6:38] parameters that shape how agents make
[6:40] decisions autonomously. It&#39;s the layer
[6:42] that would have told Clara&#39;s AI agent,
[6:45] &quot;Yes, you can resolve this ticket in 90
[6:47] seconds, but the customer has been with
[6:49] us for years, and their tone indicates
[6:51] frustration. Spend the extra time. Offer
[6:54] them a specialist.&quot; The goal is
[6:56] retention. Without intent engineering,
[6:58] you get what Claragot, a technically
[7:01] brilliant agent optimizing for exactly
[7:03] the wrong objective. You get what
[7:05] Deoid&#39;s 2026 state of AI in the
[7:07] enterprise report found across 3,000
[7:10] some leaders in 24 countries. 84% of
[7:13] companies have not redesigned jobs
[7:15] around AI capabilities and only 21% have
[7:18] a mature model for agent governance.
[7:20] These numbers aren&#39;t a technology story.
[7:22] They&#39;re an intent failure. The models
[7:24] work. The context pipelines are getting
[7:27] better. What&#39;s missing is the
[7:29] organizational infrastructure that
[7:31] connects AI capability to organizational
[7:33] purpose. I cited the failure stats from
[7:36] deote above. I want to show you the
[7:38] other side of the ledger because the
[7:40] juxtaposition makes this all very
[7:42] disorienting. Investment in AI continues
[7:44] to be massive and accelerating. Deoid&#39;s
[7:47] tech value survey found that 57% of
[7:50] respondents were putting between 21 and
[7:52] 50% of their digital transformation
[7:54] budgets into AI automation. and 20% of
[7:58] companies were investing over half on
[8:00] average $700 million for a company with
[8:03] 13 billion in revenue. KPMG&#39;s Q4 AI
[8:07] pulse survey showed capital flowing ROI
[8:10] confidence rising in agents moving from
[8:12] pilots to professionalized platforms.
[8:14] Gartner is predicting that by 2028 15%
[8:17] of dayto-day work decisions will be made
[8:20] autonomously by agents. I think that
[8:22] might be low. So the money is real, the
[8:25] deployments are real, and the results
[8:26] are very much in between. 74% of
[8:30] companies globally report they have yet
[8:32] to see tangible value from AI. McKenzie
[8:35] found 30% of AI pilots failed to achieve
[8:38] scaled impact. These numbers all coexist
[8:42] together with the investment numbers.
[8:44] There&#39;s not really a contradiction here
[8:46] if you start to peel the onion and
[8:48] understand things more carefully. What
[8:50] we&#39;re describing when we talk about a
[8:52] pattern of scaled investment and
[8:54] somewhat mixed results on deployment is
[8:56] that organizations have solved can AI do
[8:59] this task at an individual task level
[9:02] and they have completely failed to solve
[9:05] can AI do this task in a way that serves
[9:08] our organizational goals at scale with
[9:11] appropriate judgment. That second
[9:13] question that&#39;s an intent engineering
[9:15] question. Look at what happened with
[9:17] Microsoft Copilot. One of the most
[9:19] heavily invested enterprise AI products
[9:22] in history. Microsoft poured billions
[9:24] into infrastructure, embedded AI into
[9:26] every office application, and launched
[9:29] an aggressive enterprise sales campaign.
[9:31] 85% of Fortune 500 companies adopted it,
[9:34] and the adoption stalled hard. Gartner
[9:37] found that only 5% of organizations
[9:40] moved from a co-pilot pilot to a larger
[9:42] scale deployment. Only about 3% of the
[9:46] total Microsoft 365 user base actually
[9:49] adopted Copilot as paid users. Bloomberg
[9:52] reported Microsoft slashing internal
[9:54] sales targets after the majority of
[9:56] salespeople missed their goals. Even
[9:58] inside companies that signed six figure
[10:00] co-pilot deals, employees resisted.
[10:03] Reddit threads are full of engineers at
[10:05] multi-billion dollar companies
[10:06] describing their organizations
[10:08] downgrading licenses because employees
[10:10] preferred another AI. maybe chat GPT,
[10:13] maybe Claude. The standard explanation
[10:15] for co-pilot struggles centers on UX
[10:17] problems and model quality. And those
[10:19] are definitely real issues, but they&#39;re
[10:22] not the fundamental issue. The
[10:24] fundamental issue is that deploying an
[10:26] AI tool across an organization without
[10:29] organizational intent alignment is like
[10:31] hiring 40,000 new employees and never
[10:34] telling them what the company does, what
[10:36] it values, or how to make decisions. You
[10:39] get lots of activity and not much
[10:40] productivity. You get AI usage metrics
[10:43] in a dashboard and almost no measurable
[10:46] impact on what the organization is
[10:48] trying to accomplish. That&#39;s not a tools
[10:50] problem. That&#39;s an intent gap. I want to
[10:52] get structural because vague handwaving
[10:54] about AI transformation is exactly what
[10:57] we&#39;re trying to avoid here and what so
[10:58] many organizations get into trouble
[11:00] doing. There is an intent gap today and
[11:03] it operates across three distinct
[11:06] layers, each one at a different
[11:07] altitude. Getting any one of them right
[11:10] is helpful. Getting all three right is
[11:12] the difference between having AI tools
[11:14] and having an AI native organization.
[11:16] Layer one is what I&#39;m going to call a
[11:18] unified context infrastructure. This is
[11:21] the layer the industry is most aware of
[11:23] and it&#39;s still not really built yet.
[11:26] Right now, every team building agents
[11:28] rolls their own context stack. One team
[11:31] pipes Slack data through a custom rag
[11:34] pipeline. Another manually exports
[11:36] Google Docs into a vector store. A third
[11:38] built an MCP server that connects to
[11:40] Salesforce but not to Jira. A fourth
[11:43] team doesn&#39;t know the other three exist
[11:44] yet. This is what one analyst called the
[11:46] shadow agents problem and it mirrors the
[11:48] shadow IT crisis of the early cloud era
[11:51] except the stakes are much higher
[11:53] because agents don&#39;t just access data,
[11:55] they act upon it. Security and
[11:57] compliance teams can&#39;t allow arbitrary
[12:00] unvetted agents running on developer
[12:02] laptops to access critical systems like
[12:04] customer PII, financial data or
[12:07] healthcare records. But without
[12:09] sanctioned infrastructure, that is
[12:10] exactly what is happening. The model
[12:13] context protocol which Anthropic
[12:14] introduced late in 2024 and donated to
[12:17] the Linux Foundation in December of 2025
[12:20] is the most promising attempt at
[12:21] standardization at this point. UCP has
[12:24] seen a ton of adoption. OpenAI, Google,
[12:26] Microsoft, and more than 50 enterprise
[12:28] partners have committed to it. It&#39;s
[12:30] become the de facto standard. Monthly
[12:32] SDK downloads are close to 100 million
[12:34] now, I think. But protocol adoption and
[12:37] organizational implementation are very
[12:39] different things. Having a USBC standard
[12:42] does not help if your company hasn&#39;t
[12:44] decided which ports to install, who
[12:46] maintains them, or what gets plugged in.
[12:48] The context infrastructure question is
[12:50] not really a technical question. You can
[12:52] configure MCP servers. It is
[12:54] architectural and political. Which
[12:57] systems become agent accessible? Who
[13:00] decides what context an agent can see
[13:02] across departments? How do you version
[13:04] organizational knowledge so agents
[13:06] aren&#39;t operating on stale information?
[13:09] How do you handle the fact that the
[13:10] sales team Slack context and the
[13:12] engineering team Slack context encode
[13:15] completely different institutional
[13:17] assumptions? Deoid&#39;s 2025 survey found
[13:19] that nearly half of organizations cited
[13:21] data searchability and data reusability
[13:24] as top challenges blocking AI
[13:26] automation. I&#39;m surprised that number
[13:28] isn&#39;t higher. As their analyst put it,
[13:30] the shift required is from traditional
[13:33] ETL data pipelines to enterprise search
[13:35] and indexing, similar to how Google made
[13:37] the worldwide web discover. The data
[13:40] does exist inside corporations. The
[13:42] agents also exist increasingly, but the
[13:44] connective tissue between them, the
[13:46] organizational context layer and the
[13:48] structures and safeguards to ensure
[13:50] that&#39;s accessed correctly, that mostly
[13:52] doesn&#39;t exist. Now, we&#39;re going to move
[13:54] on to layer two, the coherent AI worker
[13:57] toolkit. So, everyone&#39;s rolling out
[13:59] their own AI workflow. One person uses
[14:01] Claude for research and chat GPT for
[14:03] drafting. Another uses cursor for code
[14:05] and perplexity for factchecking. A third
[14:08] has built a custom agent chain using
[14:09] langraph. A fourth is copy pasting into
[14:12] a chat window. None of these employees
[14:14] can articulate their workflow in a way
[14:15] that&#39;s transferable, measurable, or
[14:17] improvable by anybody else. And this
[14:20] matters because the difference between
[14:22] individual AI use and organizational AI
[14:24] leverage is enormous. It&#39;s the
[14:27] difference between having one good hire
[14:29] and having a system that makes everybody
[14:31] better. It&#39;s the difference I&#39;ve been
[14:33] writing about for a year between AI
[14:35] activity and AI fluency. The former has
[14:38] 30% gains that you get from bolting AI
[14:41] onto existing workflows. And the latter
[14:43] has the 300% gains you get from
[14:45] rethinking the workflow itself around AI
[14:47] capabilities. But here&#39;s what we need to
[14:50] realize. Fluency doesn&#39;t scale through
[14:53] training alone. It scales through shared
[14:55] infrastructure. Whether any individual
[14:57] person has Slack doesn&#39;t matter. Whether
[15:00] an agent can search 50 people&#39;s Slack
[15:02] context plus their docs plus their
[15:04] project plan plus the customer data,
[15:06] that&#39;s what determines whether the agent
[15:08] can do organizational scale work rather
[15:11] than individual scale tasks. Lloyd&#39;s
[15:13] 2026 report found that workforce access
[15:16] to sanctioned AI tools expanded by 50%
[15:19] in a year. But that doesn&#39;t mean that
[15:21] access is sufficient. Organizations are
[15:24] often giving people tools without giving
[15:26] them or their agents the organizational
[15:29] context and data that allow those tools
[15:31] to deliver real value. And that&#39;s where
[15:33] Clara&#39;s story intersects with co-pilot
[15:36] story. Tools deployed without
[15:38] organizational infrastructure become
[15:40] very expensive toys. The 74% of
[15:43] companies reporting no tangible value
[15:45] from AI are probably not failing because
[15:47] of models. They&#39;re failing because
[15:49] there&#39;s no shared understanding of how
[15:51] AI tools connect to organizational
[15:53] workflows, of where AI automation should
[15:56] replace human effort, of where it should
[15:57] augment it, of where human judgment
[15:59] should be non-negotiable, all the things
[16:01] that CLA should have done. All the
[16:04] things that the co-pilot salespeople
[16:06] didn&#39;t tell you about. This is the issue
[16:09] today with AI in the enterprise. We are
[16:11] not taking that data and context layer
[16:13] seriously. And that doesn&#39;t allow us to
[16:15] even approach layer three, which we&#39;re
[16:17] going to talk about next. Intent
[16:19] engineering proper. This is the layer
[16:21] that almost certainly doesn&#39;t exist in
[16:23] your business. It&#39;s the one I think
[16:24] matters the most, and it requires
[16:26] something genuinely new. OKRs were
[16:29] designed for people. They encode human
[16:30] readable goals. They assume human
[16:33] judgment about prioritization,
[16:35] trade-offs, values, and exceptions. They
[16:38] assume a manager can look a direct
[16:39] report in the eye and say, &quot;Here&#39;s what
[16:41] matters this quarter.&quot; and trust that
[16:43] the report will interpret that guidance
[16:45] through a mesh of institutional context,
[16:48] professional norms, and personal
[16:50] judgment developed over months and
[16:51] years. Agents don&#39;t have any of that. An
[16:54] agent does not know your company&#39;s OKRs
[16:56] unless you put them in the context
[16:58] window. It doesn&#39;t know which trade-offs
[17:00] your leadership team would prefer unless
[17:02] you encode those preferences in a way it
[17:04] can act on. It doesn&#39;t know the
[17:06] difference between a decision that
[17:07] should be escalated and one it should
[17:09] make autonomously unless you define the
[17:11] boundary. And unlike a human employee,
[17:13] an agent will not absorb your company
[17:15] culture through osmosis for 6 months,
[17:18] through all hands meetings, through
[17:19] hallway conversations, and through
[17:21] watching senior people handle ambiguous
[17:23] situations. When a human employee joins
[17:25] a company, alignment happens through a
[17:27] 100 informal mechanisms. You read the
[17:29] wiki, you have a slack chat, you develop
[17:31] judgment, you have a happy hour with
[17:33] someone. None of that works for agents.
[17:35] Agents need explicit alignment, and they
[17:38] need it before they start working, not 6
[17:40] months after. This means organizations
[17:42] need to develop something that mostly
[17:44] doesn&#39;t exist. Machine readable
[17:47] expressions of organizational intent.
[17:50] Think about what that requires. It is
[17:52] not just put the OKRs in the prompt. It
[17:55] is a cascade of specificity that most
[17:57] organizations have never had to produce
[18:00] because humans could fill in the gap. It
[18:02] is a cascade of specificity that
[18:04] organizations have never had to produce
[18:06] because humans could fill in the gaps.
[18:08] At the top, you need goal structures
[18:10] that agents can interpret and act on,
[18:12] not increase customer satisfaction.
[18:15] That&#39;s a human readable aspiration. You
[18:17] need an agent actionable objective. An
[18:19] agent needs to know what signals
[18:21] indicate customer satisfaction in our
[18:24] context. What data sources contain those
[18:26] signals? What actions am I authorized to
[18:29] take to improve them? What trade-offs am
[18:31] I empowered to make? speed versus
[18:33] thoroughess, cost versus quality, and
[18:36] where are the hard boundaries I may not
[18:38] cross. Below that, you need what I would
[18:40] call delegation frameworks, tenants
[18:42] translated into decision boundaries.
[18:44] Amazon&#39;s leadership principles work for
[18:46] humans because humans can interpret
[18:48] customer obsession through contextual
[18:50] judgment. An agent needs that principle
[18:52] to be decomposed. When customer request
[18:55] X conflicts with policy Y, here is the
[18:58] resolution hierarchy. When data suggests
[19:00] action A, but the customer expressed
[19:02] preference B, here&#39;s the decision logic.
[19:05] These are not rules in the traditional
[19:07] sense. They&#39;re encoded judgment. The
[19:09] kind of organizational knowledge that a
[19:11] senior employee carries in her head
[19:13] after 5 years and a new hire will absorb
[19:16] gradually. Agents need it now. And at
[19:18] the base, you need feedback mechanisms
[19:20] that actually close the loop. When an
[19:22] agent makes a decision, was it aligned
[19:23] with organizational intent? How do we
[19:26] know? This is exactly what happened at
[19:29] CLA. The agent optimized for resolution
[19:31] speed because that was the objective it
[19:33] could measure. Nobody had encoded the
[19:35] objectives that mattered most.
[19:37] Relationship quality, brand trust,
[19:40] customer lifetime value, the contextual
[19:42] judgment about when to be efficient and
[19:44] when to be generous. Those objectives
[19:47] lived in the heads of the human agents
[19:49] who had to walk out the door because
[19:51] they were fired. The age of humans just
[19:54] know is ending. Intent engineering is
[19:57] the discipline of making what humans
[19:59] know explicit, structured, and machine
[20:03] actionable. Not because the humans are
[20:05] leaving, although some of them will, but
[20:07] because the agents arriving to work
[20:09] alongside the people cannot function
[20:12] without it. If there is anything I want
[20:14] you to take away from this video, it is
[20:17] not if I can do this intent engineering,
[20:19] I can get rid of the people. You should
[20:21] be regarding agents as rather
[20:23] undependable actors and recognizing that
[20:26] you need humans to both encode intent
[20:29] engineering and maintain successful
[20:32] agentic systems that scale. That&#39;s how
[20:34] you actually start to drive agents in
[20:36] production. So why hasn&#39;t this been
[20:38] built yet? First, it&#39;s genuinely new.
[20:41] Before agents could run autonomously
[20:43] over long time horizons, we did not need
[20:45] this. The human was the intent layer.
[20:48] The agent never needed to understand
[20:50] organizational intent because you were
[20:52] standing right there. Longrunning agents
[20:55] break the model and demand a new way of
[20:57] thinking. And that&#39;s what this video is
[20:59] about. Second, the people who understand
[21:01] organizational strategy like executives
[21:04] are not the people who build agents. And
[21:06] the people building agents like
[21:08] engineers are not the people who
[21:10] understand organizational strategy very
[21:12] frequently. This is a classic two
[21:14] cultures problem. And it&#39;s acute in AI
[21:17] because the technology is moving so fast
[21:19] that the organizational thinkers cannot
[21:21] keep up and the technologists, they
[21:23] don&#39;t think it&#39;s their job. MIT found
[21:25] that AI investment is still viewed
[21:27] primarily as a tech challenge for the
[21:29] CIO rather than a business issue that
[21:31] requires leadership across the
[21:33] organization. That framing that&#39;s going
[21:35] to guarantee an intent gap that has real
[21:38] implications for your AI agents. CIOS
[21:40] can build infrastructure, but intent
[21:43] comes from the entire leadership team
[21:45] working together. The people who
[21:47] actually decide what the organization
[21:49] values and how it makes trade-offs need
[21:51] to be talking with engineering more.
[21:53] Third, just really hard. Making
[21:55] organizational intent explicit and
[21:58] structured is extremely difficult. Most
[22:00] organizations have never had to do this.
[22:02] Their goals live in slide decks, in OKR
[22:05] documents that get half read and
[22:07] referenced at personal reviews once a
[22:09] year, in leadership principles that get
[22:11] cited in performance reviews, but really
[22:14] they don&#39;t get operationalized in the
[22:16] tacet knowledge of experienced employees
[22:18] who know what to do in ambiguous
[22:20] situations even though they&#39;ve never
[22:22] been told. Nobody has strong muscles
[22:24] here because most organizations have
[22:26] never exercised them. So what does a
[22:28] solution look like? I don&#39;t want to just
[22:30] leave you with a gap. First, at the
[22:32] infrastructure level, you need to
[22:34] develop a composable vendor agnostic
[22:38] architecture that enables agents to
[22:39] operate across systems, tools, and
[22:42] models securely and at scale. MCP is a
[22:45] sample protocol layer for this. But the
[22:47] organizational implementation requires
[22:49] decisions about data governance, access
[22:51] controls, freshness guarantees, and
[22:54] semantic consistency that no one
[22:56] protocol is going to make for you. The
[22:58] companies that build this well will
[23:00] treat it like they treated their data
[23:02] warehouse strategy in the as a core
[23:05] strategic investment not just an IT
[23:07] project. At the workflow level you need
[23:09] what I would call an organizational
[23:12] capability map for AI. A shared living
[23:15] understanding of which workflows are
[23:17] agent ready which are agent augmented
[23:19] with human in the loop and which remain
[23:21] human only. This is not a static
[23:23] document that gets filed in confluence
[23:25] and dumped. It&#39;s an operating system
[23:27] that evolves as agent capabilities keep
[23:29] improving and as organizational context
[23:32] infrastructure matures. The companies
[23:35] that do this well are likely going to be
[23:38] creating a new role. It will be called
[23:40] something like an AI workflow architect
[23:42] and it will sit between engineering
[23:44] operations and strategy and that person
[23:47] is going to be very busy at the
[23:49] alignment level. You need the genuinely
[23:51] new thing. Goal translation
[23:53] infrastructure that converts human
[23:54] readable organizational objectives into
[23:57] agent actionable parameters. This
[23:59] includes decision boundaries,
[24:01] escalation, value hierarchies like how
[24:03] the agent resolves trade-offs and
[24:05] feedback loops. How you measure and
[24:07] correct alignment drift over time.
[24:09] Google&#39;s agent development kit is one of
[24:11] the earliest attempts to formalize this
[24:13] at a technical level. It separates agent
[24:16] context into distinct layers. working
[24:18] context, session memory, long-term
[24:21] memory, and artifacts. Each of these has
[24:23] specific governance. There&#39;s also
[24:25] emerging academic work. A recent paper
[24:27] from researchers at Google DeepMind
[24:29] proposed five levels of AI agent
[24:31] autonomy. Operator, collaborator,
[24:34] consultant, approver, and observer, each
[24:36] with different intent alignment
[24:38] requirements and different human
[24:40] oversight models. These are just the
[24:42] early sketches. The integrated system is
[24:45] really whites space. Building context
[24:47] infrastructure plus workflow mapping
[24:50] plus intent alignment is new and it&#39;s an
[24:52] enormous challenge. If OKRs were the
[24:54] management innovation that let Intel
[24:56] align thousands of humans to shared
[24:59] objectives in the 70s, intent
[25:01] engineering is the management innovation
[25:03] that lets organizations align hundreds
[25:05] or thousands or tens of thousands of
[25:07] agents to those same objectives in 2026.
[25:11] While those agents operate at speeds and
[25:13] scales, no human manager can supervise.
[25:16] The parallel is direct. The urgency has
[25:20] never been greater. OKRs have taken
[25:22] decades to become standard management
[25:24] practice. We do not have 20 years to
[25:27] wait. For the past 3 years, the AI race
[25:30] has been framed as an intelligence race.
[25:32] Who has the best model? Who tops the
[25:34] best benchmarks? Who has the biggest
[25:36] context window? That framing made sense
[25:38] when models were a bottleneck. But
[25:40] models are not the bottleneck today. Not
[25:43] for most organizational use cases. The
[25:45] frontier models like Opus 4.6 or Gemini
[25:48] 3 or GPT 5.2. These are all
[25:50] extraordinarily capable models. The
[25:53] differences between them matter far less
[25:55] than the differences between
[25:57] organizations that give them clear,
[25:59] structured, goal-igned intent and
[26:02] organizations that don&#39;t. The race is an
[26:05] intent race. Not who has the smartest AI
[26:08] in their systems, but who has built the
[26:10] organizational infrastructure that lets
[26:13] AI operate with the fullest, most
[26:15] accurate, most strategically correct
[26:17] understanding of what the organization
[26:19] is trying to accomplish. The company
[26:21] with a mediocre model and extraordinary
[26:24] organizational intent infrastructure
[26:26] will outperform the company with a
[26:28] frontier model and fragmented,
[26:30] inaccessible, unaligned organizational
[26:32] knowledge every single time. This means
[26:34] that the most important AI investment in
[26:37] 2026 isn&#39;t really a model subscription.
[26:40] It&#39;s not another co-pilot license. It&#39;s
[26:42] organizational intent architecture.
[26:45] Making your company&#39;s goals, values,
[26:47] decision frameworks, and trade-off
[26:49] hierarchies discoverable, structured,
[26:52] and agent actionable. It&#39;s building the
[26:54] alignment infrastructure that lets
[26:56] agents make decisions that aren&#39;t just
[26:58] technically correct, but that are
[26:59] strategically coherent. It&#39;s developing
[27:02] the shared language and shared systems
[27:05] that let AI capabilities scale from one
[27:08] heroic engineer to 40,000 knowledge
[27:10] workers operating in concert. Clara&#39;s
[27:13] story was not AI doesn&#39;t work. The AI
[27:17] worked brilliantly. That was the
[27:18] problem. It was so good at optimizing
[27:20] for the measurable objective that nobody
[27:23] noticed it was destroying the ones that
[27:24] really mattered. Trust. The 700 human
[27:28] agents that got laid off took with them
[27:30] the institutional knowledge that really
[27:32] mattered. The knowledge that had never
[27:34] been documented. Humans just knew. The
[27:38] lesson is to build the intent layer so
[27:41] that agents don&#39;t need to absorb
[27:43] organizational values through osmosis
[27:46] because they can&#39;t. The lesson is to
[27:49] recognize that agents need humans
[27:51] working alongside them. Maybe Clara has
[27:54] finally learned that the prompt
[27:55] engineering era asked, &quot;How do I talk to
[27:57] AI?&quot; The context engineering era is
[28:01] asking us now, &quot;What does AI need to
[28:03] know?&quot; And the intent engineering era is
[28:06] beginning to ask us the question that
[28:08] really matters. What does the
[28:10] organization need AI to want to be
[28:13] productive? Context without intent is
[28:16] like a loaded weapon with no target.
[28:18] We&#39;ve spent years building AI systems.
[28:21] 2026 is a year when we learn to aim them
[28:24] toward an organizational intent that
[28:26] really matters. If you&#39;re listening to
[28:28] this, you are involved at one or more of
[28:31] these layers. Everybody is from the
[28:33] individual contributors who are working
[28:35] against these systems and practicing
[28:37] prompting and trying to use them to
[28:39] gather context all the way up to the
[28:41] systems designers and all the way up to
[28:42] the seauite. It is up to all of us to
[28:45] build layers that enable agents to act
[28:48] productively in line with organizational
[28:50] values. If we are not careful, failure
[28:53] to do so is going to lead to AI agents
[28:56] that cause active harm to the business.
[28:59] That&#39;s what Clarno learned. Don&#39;t do
[29:01] that. Build systems that encode both
[29:05] context and intent at the organizational
[29:08] scale. The clock is running. And the
[29:11] teams that do this are going to be able
[29:13] to unleash the power of the agents that
[29:16] are running for weeks and soon for
[29:18] months with a whole lot more confidence
[29:20] than the people who are building systems
[29:23] where they don&#39;t encode intent, where
[29:25] they don&#39;t encode values, where they
[29:27] don&#39;t encode tradeoffs, where you cannot
[29:30] trust an agent not to hang up on a
[29:32] customer just because you told them to
[29:33] make the call shorter. Don&#39;t do that.
[29:36] Build for long-term intent because
[29:38] agents with long-term intent are
