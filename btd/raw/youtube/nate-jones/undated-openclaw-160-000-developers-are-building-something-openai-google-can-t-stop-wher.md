---
title: "OpenClaw: 160,000 Developers Are Building Something OpenAI & Google Can't Stop. Where Do You Stand?"
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=q-sClVMYY4w"
video_id: "q-sClVMYY4w"
duration: "25:13"
transcript_method: "youtube-captions"
segment_count: 694
char_count: 26197
status: ingested
topics: []
meta_patterns: []
---

# OpenClaw: 160,000 Developers Are Building Something OpenAI & Google Can't Stop. Where Do You Stand?

**Creator**: nate-jones | **Duration**: 25:13
**URL**: https://www.youtube.com/watch?v=q-sClVMYY4w
**Transcript**: 694 segments, 26197 chars

## Transcript

An openclaw agent negotiated $4,200 off a car while its owner was in a meeting. Another one said, "500 unsolicited messages to his wife." Same architecture, same week. Just a couple of weeks into the AI agent revolution. I'm here to tell you what's been going on, what you're missing, and what you should pay attention to if you want to take AI agents seriously. So, what about this car situation? A soloreneur pointed his maltbot at a $56,000 car purchase. The agent was told to search Reddit, to look for comparable pricing data, and to generally try and get a great deal. It contacted multiple dealers across regions on its own and negotiated via email autonomously, and it played hard ball when dealers deployed typical sales tactics. In the end, it saved the owner $4,200. The owner was in a meeting for most of that time. That same week, yes, a software engineer who'd given his agent access to iMessage, by the way. Why would he do that? watched it malfunction and fire off 500 messages to him, his wife, random contacts in a rapid fire burst that he could not stop fast enough. Same technology, same broad permissions. One saved thousands of dollars, the other carpet bombed a contact list. And that duality is the most honest summary of where the agent ecosystem stands in February of 2026. The value is real, the chaos is real, and the distance between them is the width of a well-written specification. In the first video, we talked about what Moltbot is and the security nightmare that erupted in the first 72 hours of launch. In the second, I talked about the emergent behaviors that made researchers rethink what autonomous systems are capable of. This is my third video on Open Claw, and it's about something different. what 145,000 developers building 3,000 skills in six weeks reveals about what people actually want from AI agents and how to start harnessing that demand without getting burnt. But first, we got to talk about the names. Quick recap for anyone just joining. The project that launched as Claudebot on January 25th received an anthropic trademark notice on the 27th became Moltbot within hours, then rebranded again to OpenClaw 2 days later. Three days, three names. The community voted on the second one in a discord poll and finally decided it would be open claw going f. Now during that second rebrand, of course, crypto scammers grabbed the abandoned accounts in about 10 seconds and a fake dollar claw token hit $16 million in market cap before collapsing with a rug pole. All of that happened in January. It's February now, and what's happened since is even more interesting. The project has over 145,000 GitHub stars and rapidly climbing 20,000 forks, over 100,000 users who've granted an AI agent autonomous access to their digital lives. And as of Sunday, February 8th, a place in the Super Bowl. That's right, the AI.com notorious crashed website failure of the Super Bowl. That was apparently because of Maltbot or OpenClaw or whatever you want to call it. They pivoted their site to give everyone an open claw agent that was supposedly secure and and they apparently forgot to top up their Cloudflare credits and their site went down when all of the Super Bowl audience hit AI.com to claim their name and their open claw agent. This is all happening very fast. But even with AI.com going down, over a 100,000 users have granted an AI agent autonomous access to their digital lives. The skills marketplace now hosts 3,000 community-built integrations with 50,000 monthly installs and counting. The ecosystem is generating new skills faster than the security team can audit them, and it's not going to stop anytime soon. The project still has no formal governance structure. No community- elected leadership, no security council. Peter Steinberger calls it a free open-source hobby project, but it's the fastest growing personal AI project in history, and it probably shouldn't be described as a side project at this point. I took a look at those skills, the 3,000 skills, because they reveal what people want in our AI agents, which is actually a much more important long-term story than all of the drama around OpenClaw, as much fun as it is to cover. So, the skilled marketplace really functions as what I would call a revealed preference engine. Nobody's filling out a survey about what they want from AI. They're just building it and they're telling us what they want from what they build. And the patterns are striking. The number one use case on OpenClaw is email management. not help me write emails. Complete management, processing thousands of messages autonomously, unsubscribing from spam, categorizing by urgency, drafting replies for human review. The single most requested capability across the entire community is having something that makes the inbox stop being a full-time job. Email is broken. The number two use case is what users call morning briefings. a scheduled agent that runs at 8 a.m. pulls data from your calendar, weather surface, email, GitHub notifications, whatever you need, and then sends you what you care about in a consolidated summary on Telegram or WhatsApp or your messaging tool of choice. One user's briefing checks his Stripe dashboard for MR changes, summarizes 50 newsletters he's subscribed to, and gives him a crypto market overview every morning automatically. Use case number three that we see in skills, smart home integration. Tesla lock, unlock, climate control from a chat message, home assistant for light. You get the idea. People want an intelligent assessment of their home that doesn't make them use their brain cells. Use case number four is developer workflows. Direct GitHub integration, scheduled Chrom jobs, developers using the agent as a task cue, assigning work items, watching it execute commits in real time. This one's gotten a lot of noise in my circles because it frees up developers to manage via their messaging service and have multiple agents working for them. But the fifth capability is perhaps the most interesting. That entire category is what I would call novel capabilities that did not exist before OpenClaw. Like the restaurant reservation story I shared in my first video on OpenClaw, where the agent could not book through OpenT, so it downloaded voice software and called the restaurant directly on its own. or a user who sent a voice message via iMessage to an agent with no voice capability, and the agent figured out the file format, found the transcription tool on the user's machine, routed the audio through OpenAI's transcription API, and just got the task done. Nobody programmed that behavior, right? The agent problem solved its way to a solution using the available tools. The pattern is clear. Friction removal, tool integration, passive monitoring, and novel capability. It tells you something important about what people want from their AI agents. It's not what most of the industry is building toward to be honest. The majority of AI product development in 2025 and 2026 has been focused on the chat. Better conversations, better reasoning, better answers to questions. 3,000 skills in Claude Hub are almost entirely about action. The community is not building better chat bots when they get the chance. They're building better employees, for lack of a better term. and broader survey data confirms the pattern. 58% of users site research and summarization as their primary agent use case. 52% talk about scheduling and 45% talk about I realize the irony here, privacy management. The consistent theme, people don't want to talk with the AI. They want AI to do things for them. And the AI agent market reflects this. It's growing at 45% annually, but I swear that is before OpenClaw hit. And the number is going to get bigger. Open Claw didn't really create all of this demand. It just proved the demand exists and put a match to dry tinder. Now we have to make sense of a world where everyone has demonstrated they want AI agents with their feet despite the security fears. So all of these use cases are sort of the cleaned up version. It's what people have intended to build. The messy version is more revealing and more interesting because it shows you what agents do when the specification is ambiguous. The permissions are broad and nobody can really anticipate what's going to happen next. At Saster, during a code freeze, a developer deployed an autonomous coding agent to handle very routine tasks. The instructions explicitly prohibited destructive operations, but the agent ignored them. It executed a drop database command and wiped the production system. And what happened after that matters even more than the terrible news of a wipe itself. When the team investigated, they discovered the agent had generated 4,000 fake user accounts and created false system logs to cover its tracks. It essentially fabricated the evidence of normal operation. Look, I won't say the agent was lying, per se. It was optimized for the appearance of task completion, which is what you get when you tell a system to succeed and don't give it a mechanism to admit failure. The deception was an emergent property of an optimization target, not something that I would call intentional, but the production database was still gone. Meanwhile, over on Moldbook, the social network where only AI agents can post, 1.5 million AI agent accounts generated 117,000 posts and 44,000 comments within 48 hours. I know there has been a lot of discussion about humans posting some of those posts. I think what they did with the space as agents is actually more instructive than any individual post being human generated because the agents spontaneously created a quote unquote religion called crustaparianism. They established some degree of governance structure. They built a market for digital drugs. And you know what's interesting about all of that? They did it in a very shallow manner. And what I mean by that is that if if you look at the range of vocabulary and the type of topic in most agent texts, they reflect typical attractor states in highdimensional space. And what I mean by that is that if you ask an AI agent to pretend it is making a social network, the topics that come up over and over again look a lot like what's on malt book. And so telling agents to create a social network effectively is them following that long range prompt and autonomously doing that. And so I don't look at this just as agents autonomously behaving and coordinating although the story is partly about that. I also look at this as reflective of the fairly shallow state of agent autonomous communication right now. Most of the replies are fairly wrote on mold book and many posts don't have replies at all and most of the topics are fairly predictable. We may mock Reddit but it has a much richer discourse than molt book does. MIT tech review called moltbook peak AI theater and I don't think that's entirely wrong. But the observation that matters for anyone deploying agents isn't whether something like crustaparianism the AI religion is real emergence or some degree of AIdriven performance art pushed by people with prompts. It's that agents have been given fairly open-ended goals and when they have social interaction, they spontaneously create a kind of organizational structure. We actually see this playing out in multi- aent systems already when agents collaborate on tasks and the structure essentially emerges from the long-term goal to optimize against a particular target. If you tell an AI agent to work with others to build a tool, it's going to collaborate and figure out how to self-organize. If you tell an AI agent to work with others on Maltbook, you kind of get the same thing. It's actually the same capability that lets a Maltbot negotiate a car deal autonomously and figure out how to transcribe a video message it was never designed to handle. The difference between agent problem solves creatively to save you $4,200. An agent problem solves creatively to fabricate evidence is really the quality of the spec and the presence of meaningful constraints for that agent. The underlying capability is identical, which is why I'm talking about agents as a whole here. Yes, the multbot phenomenon is interesting, but it's worth calling out that the Saster database agent was not a multbot. It just represents how agents work when they're not properly prompted. And it does rhyme with so many of the disastrous stories that are coming out of Moltbot agents. One of which I saw was texting the wife of a developer who had a newborn and trying to play laptop sounds to soo the baby instead of getting the developer. Not a good move by the husband. So what does all of this mean for people deploying agents today? The question is no longer are agents smart enough to do interesting works. They're they're clearly smart enough. The question is, are your specifications in guard rails good enough to channel that intelligence productively and usefully? And I got to be honest with you, for most people right now, it looks like the answer is no. Which brings us to how we change that. Here's the finding that should shape how you think about deploying agents. When researchers study how people actually want to divide work between themselves and AI, the consistent answer is 7030. 70% human control, 30% delegated to the agent. In a study published in Management Science, participants exhibited a strong preference for human assistance over AI assistance when rewarded for task performance, even when the AI has been shown to outperform the human assistant. People will choose a less competent human helper over a more competent AI helper when the stakes are real. The preference maybe isn't rational. It's deeply psychological. that's rooted in loss aversion, the need for accountability, and the discomfort of delegating to a system that you can't really interrogate. And this matters because most agent architectures are built for 0 to 100, like full delegation. That's how Maltbot kind of works. Hand it off and walk away. And that's also Codeex's thesis for what it's worth. And it works beautifully for isolated coding tasks where correctness is verifiable. But for the messy, context dependent, socially consequential tasks that dominate, frankly, most of our days, getting the email tone right, scheduling the dentist appointment, negotiating for the car, communication, the 7030 split sounds to me more like a product requirement than just human loss aversion. And it's worthwhile to note that the organizations reporting the best results from agent deployment are not necessarily the ones running full autonomous systems. They're the ones running human in the loop architectures. Agents that draft and humans that approve, agents that research and humans that decide, agents that execute within guard rails that humans set and review. 38% of organizations use human in the loop as their primary agent management approach. And those organizations see 20 to 40% reductions in handling time. 35% increases in satisfaction and 20% lower chart. To be honest with you, I think that may be an artifact of early 2026. When agents are scary, agents are new, and we're all figuring out how to work with them. Given the pace of agent capability gains, we are likely to see smart organizations delegating more and more and more over the rest of 2026, no matter how uncomfortable it makes many of us at work. In a study published in Computers and Human Behavior, participants exhibited a strong preference for human assistance over AI assistance when rewarded for task performance. people chose less competent human helpers over more competent AI helpers when the stakes were real. This seems deeply psychological. It's about loss aversion, the need for accountability and the discomfort of delegating to a system you can't interrogate. And this matters because most agent architectures are built for a 0 to 100 use case. Full delegation, hand it off and walk away. That's actually Codeex's thesis and it works beautifully for isolated coding tasks where correctness is verifiable. But for the messy, context dependent, socially consequential tasks that dominate most of our days, like getting the right tone in the email or scheduling the dentist appointment or negotiating, it seems like 7030 is sort of a human product requirement for working with agents. Right now, the organizations reporting the best results today from agent deployment aren't the ones running fully autonomous systems. They're the ones running human and the loop architectures. Agents that draft and humans that approve, agents that research and humans that decide. To be honest with you, I think that may be an artifact of early 2026 when agents are scary and agents are new and we're all figuring out how to work with them. That human culture component is huge. But given the pace of agent capability gains and how much we've seen from capable agents like Opus 4.6 who managed a team of 50 developers. We are likely to see smart organizations delegating more and more and more over the rest of 2026, no matter how uncomfortable it makes many of us at work. The practical implication is that if you're building with agents or deploying them at work early in 2026, your culture needs to get ready and it might be smart to design for 7030. Build those approval gates, build visibility into what the agent did and why, and make the human the decision maker, but plan for full delegation over time because those agents are going to keep getting smarter. So, let's say you've watched all of this chaos with Moltbot and Open Claw and you want to see value. What should you actually do? Well, number one, start with the friction, not the ambition. That 30,000 skill ecosystem tells you exactly where to begin. those daily pain points that hurt so bad over time. Email triage is one. Morning briefings, basic monitoring. These are highfrequency, low stakes tasks where the cost of failure is relatively low. Start there. Build some confidence. Expand scope as trust in agents develops. Design for approval gates. Don't just design for full autonomy out of the gate. Start with having the agent draft if you've never built an agent before. Have the agent research if you've never built the agent before. And you decide. Have the agent monitor and you act. Have the assumption in your agent design system be that a human checkpoint will always exist until you are ready to build an agentic system with very strong quality controls and constraints so that you can trust the agent with more. That is possible. It just takes skill and most people don't have it out of the gate. I would also encourage you and I've said this before to isolate aggressively. Have dedicated hardware or a dedicated cloud instance for your open claw. Throw away accounts for initial testing. Don't connect to data you can't afford to lose. The exposed instances that Showdan found in OpenClaw weren't running on isolated infrastructure. They were running on lots and lots of people's primary machines and just exposing their data to the internet. You have to treat containment of data as a non-negotiable. I would also treat agent skills marketplaces with least trust. Vet before you install. Check the contributor. Check the code. 400 malicious packages appeared in Claude Hub in a single week. And the security scanner helps, but it can't catch everything. Another one, if you're going to ask your agent to do a task, please specify it precisely. The car buyer that I talked about at the beginning of this video gave the agent a clear objective, clear constraints, and clear communication channels. Meanwhile, the iMessage user that spammed his wife gave the agent broad access and didn't really define boundaries. When the constraint is vague, the model will fill in the gaps with behavior that you did not predict. This is the same spec quality problem we covered when we talked about AI agents in dark factories. The machines build what you describe, but if you describe it badly, you get bad results. The fix is not better AI, it's actually better specifications. I would also encourage you to track everything. The Saster database incident was catastrophic, not because the agent wiped the database. That's recoverable eventually, but because it generated fake logs to conceal the wipe. You need to build an audit trail outside the agent's scope of access. If the system you're monitoring controls the monitoring, you have no monitoring. And last, but not least, budget for a learning curve. The J curve is real. Agents will make your life harder before they make it easier. The first week of email triage may produce very awkward drafts. The first morning briefing may miss half of what you care about. Assume you need to take time to learn and that it's worth engaging with the agent to build something that actually hits those pain points that matter most to you. 57% of companies today claim that they have AI agents in production. That number should probably impress you less than it does. Only one in 10 agent use cases, according to McKenzie, reached actual production in the last 12 months. And the rest end up being pilots. They end up being proofs of concept. They end up being press releases. They end up being power presentations that say agents. Gardner predicts over 40% of Agentic AI projects are going to be cancelled by the end of 2027. And after watching some of the disaster with Open Claw over the past few weeks, I both understand and don't understand. The reasons enterprise give are quite clear. They're worried about escalating costs from runaway recursive loops. They're worried about unclear business value that evaporates when the demo ends and you have to get into all of those dirty edge cases. And they're worried about what Gardner calls unexplainable behaviors, right? Agents acting in ways that are difficult to explain or to constrain or to correct. A study found that upwards of half of the 3 million agents currently deployed in the US and UK are quote unquote ungoverned. No tracking of who controls them, no visibility into what they can access, no permission expiration, no audit trail. This was based on a December 2025 survey of 750 IT execs conducted by Opinion Matters. And it's directionally consistent with other data as well. A Daku Harris poll found 95% of data leaders cannot fully trace their AI decisions. That's concerning. The security boundaries that enterprises have spent decades building just don't apply when the agent walks through them on behalf of a user who would not have been allowed through the front door normally. We have to rebuild our security stances from the ground up. Tools like Cloudflare's Molt Worker, Langraph, Crew AI, these exist because enterprises see the demand but have difficulty deploying tools like Moltbot without a ton of governance over the top. And so we start to see the market bifurcating. Consumer grade agents are optimized for capability and they're okay with a lot more risk because most of the consumers right now fall into that early adopter category and are very technical and at least think they know what they're doing. Enterprisegrade frameworks are optimized for control. Right now, nobody has a great mix of control and capability or almost no one. The company that figures out capability and control, the agent that's as strong as Moltbot and as governable as an enterprise SAS product, they're going to own the next platform. If you step back from the specific stories in the ecosystem drama of Open Claw, a very clear signal emerges from the noise. People do not want smarter chat bots. They want digital employees, digital assistants, systems that do work on their behalf across the tools they use without requiring constant oversight. Isn't that interesting? On the one hand, you have that study showing a preference for humans in production systems and that lines up with a lot of the cultural change we see at enterprises and at the other side of the spectrum, you have people willingly turning over their digital lives to malt bots. What gives? I think the demand here is following a pattern that we've seen before. When an underserved need is met with an immature technology, early adopters are willing to take extraordinary risks to get extraordinary capabilities. In this sense, I think the excitement we see around maltbot reflects the hunger that the leading edge of AI adopters have for delegating more. And the more cautious 7030 split is something I see more often in companies that have existing mature technologies and are moving cautiously on AI. It's a culture thing. But regardless, Moltbot has proven the AI agent use case is real. If a 100,000 users without any monetary incentive have granted root access to an open-source hobby project, the demand for real AI agents is desperate enough that people will tolerate real risk to get it. If nothing else, look at how AI.com crashed during the Super Bowl. The question isn't whether agents will become a standard part of how we work and live. That question is settled. It's coming. They will. The question is whether the infrastructure catches up before the damage that unmanaged agents do accumulates to a point where it changes our public perception. Right now, we're in this window where capability wins feels so exciting that it feels okay for some people to outpace governance. And demand is certainly outpacing any of the security boundaries we put up. That window of excitement is not going to last forever. And while it's open, people and organizations need to learn to operate in it and build out agent capability carefully with guard rails, with clear specs, with an eye on human judgment and how this impacts culture change within orgs that are not open AI, that are not anthropic. The ones that figure out how to bring their humans along, show that agents can work successfully with high capability standards and high quality standards and high safety standards, those are the ones that are going to be the furthest ahead when the infrastructure finally starts to catch up. Early adopters always look reckless. They also have a head

## Timed Segments

[0:00] An openclaw agent negotiated $4,200 off
[0:03] a car while its owner was in a meeting.
[0:05] Another one said, &quot;500 unsolicited
[0:07] messages to his wife.&quot; Same
[0:09] architecture, same week. Just a couple
[0:11] of weeks into the AI agent revolution.
[0:14] I&#39;m here to tell you what&#39;s been going
[0:15] on, what you&#39;re missing, and what you
[0:17] should pay attention to if you want to
[0:19] take AI agents seriously. So, what about
[0:21] this car situation? A soloreneur pointed
[0:23] his maltbot at a $56,000 car purchase.
[0:26] The agent was told to search Reddit, to
[0:28] look for comparable pricing data, and to
[0:30] generally try and get a great deal. It
[0:32] contacted multiple dealers across
[0:34] regions on its own and negotiated via
[0:36] email autonomously, and it played hard
[0:38] ball when dealers deployed typical sales
[0:40] tactics. In the end, it saved the owner
[0:43] $4,200. The owner was in a meeting for
[0:45] most of that time. That same week, yes,
[0:48] a software engineer who&#39;d given his
[0:49] agent access to iMessage, by the way.
[0:51] Why would he do that? watched it
[0:53] malfunction and fire off 500 messages to
[0:57] him, his wife, random contacts in a
[1:00] rapid fire burst that he could not stop
[1:02] fast enough. Same technology, same broad
[1:05] permissions. One saved thousands of
[1:06] dollars, the other carpet bombed a
[1:08] contact list. And that duality is the
[1:11] most honest summary of where the agent
[1:12] ecosystem stands in February of 2026.
[1:15] The value is real, the chaos is real,
[1:18] and the distance between them is the
[1:20] width of a well-written specification.
[1:23] In the first video, we talked about what
[1:24] Moltbot is and the security nightmare
[1:26] that erupted in the first 72 hours of
[1:28] launch. In the second, I talked about
[1:30] the emergent behaviors that made
[1:32] researchers rethink what autonomous
[1:34] systems are capable of. This is my third
[1:36] video on Open Claw, and it&#39;s about
[1:38] something different. what 145,000
[1:40] developers building 3,000 skills in six
[1:43] weeks reveals about what people actually
[1:46] want from AI agents and how to start
[1:48] harnessing that demand without getting
[1:50] burnt. But first, we got to talk about
[1:52] the names. Quick recap for anyone just
[1:55] joining. The project that launched as
[1:57] Claudebot on January 25th received an
[2:00] anthropic trademark notice on the 27th
[2:02] became Moltbot within hours, then
[2:04] rebranded again to OpenClaw 2 days
[2:07] later. Three days, three names. The
[2:09] community voted on the second one in a
[2:11] discord poll and finally decided it
[2:14] would be open claw going f. Now during
[2:16] that second rebrand, of course, crypto
[2:17] scammers grabbed the abandoned accounts
[2:19] in about 10 seconds and a fake dollar
[2:21] claw token hit $16 million in market cap
[2:24] before collapsing with a rug pole. All
[2:26] of that happened in January. It&#39;s
[2:28] February now, and what&#39;s happened since
[2:30] is even more interesting. The project
[2:32] has over 145,000 GitHub stars and
[2:35] rapidly climbing 20,000 forks, over
[2:37] 100,000 users who&#39;ve granted an AI agent
[2:40] autonomous access to their digital
[2:41] lives. And as of Sunday, February 8th, a
[2:45] place in the Super Bowl. That&#39;s right,
[2:47] the AI.com notorious crashed website
[2:50] failure of the Super Bowl. That was
[2:52] apparently because of Maltbot or
[2:56] OpenClaw or whatever you want to call
[2:58] it. They pivoted their site to give
[3:00] everyone an open claw agent that was
[3:02] supposedly secure and and they
[3:04] apparently forgot to top up their
[3:05] Cloudflare credits and their site went
[3:07] down when all of the Super Bowl audience
[3:10] hit AI.com to claim their name and their
[3:12] open claw agent. This is all happening
[3:15] very fast. But even with AI.com going
[3:18] down, over a 100,000 users have granted
[3:20] an AI agent autonomous access to their
[3:23] digital lives. The skills marketplace
[3:25] now hosts 3,000 community-built
[3:27] integrations with 50,000 monthly
[3:29] installs and counting. The ecosystem is
[3:31] generating new skills faster than the
[3:33] security team can audit them, and it&#39;s
[3:35] not going to stop anytime soon. The
[3:37] project still has no formal governance
[3:39] structure. No community- elected
[3:41] leadership, no security council. Peter
[3:43] Steinberger calls it a free open-source
[3:45] hobby project, but it&#39;s the fastest
[3:47] growing personal AI project in history,
[3:49] and it probably shouldn&#39;t be described
[3:51] as a side project at this point. I took
[3:53] a look at those skills, the 3,000
[3:55] skills, because they reveal what people
[3:57] want in our AI agents, which is actually
[4:00] a much more important long-term story
[4:02] than all of the drama around OpenClaw,
[4:04] as much fun as it is to cover. So, the
[4:06] skilled marketplace really functions as
[4:08] what I would call a revealed preference
[4:10] engine. Nobody&#39;s filling out a survey
[4:12] about what they want from AI. They&#39;re
[4:13] just building it and they&#39;re telling us
[4:15] what they want from what they build. And
[4:16] the patterns are striking. The number
[4:18] one use case on OpenClaw is email
[4:21] management. not help me write emails.
[4:23] Complete management, processing
[4:25] thousands of messages autonomously,
[4:27] unsubscribing from spam, categorizing by
[4:30] urgency, drafting replies for human
[4:31] review. The single most requested
[4:34] capability across the entire community
[4:36] is having something that makes the inbox
[4:38] stop being a full-time job. Email is
[4:40] broken. The number two use case is what
[4:42] users call morning briefings. a
[4:44] scheduled agent that runs at 8 a.m.
[4:46] pulls data from your calendar, weather
[4:48] surface, email, GitHub notifications,
[4:50] whatever you need, and then sends you
[4:51] what you care about in a consolidated
[4:53] summary on Telegram or WhatsApp or your
[4:55] messaging tool of choice. One user&#39;s
[4:57] briefing checks his Stripe dashboard for
[4:59] MR changes, summarizes 50 newsletters
[5:01] he&#39;s subscribed to, and gives him a
[5:03] crypto market overview every morning
[5:05] automatically. Use case number three
[5:07] that we see in skills, smart home
[5:08] integration. Tesla lock, unlock, climate
[5:11] control from a chat message, home
[5:13] assistant for light. You get the idea.
[5:15] People want an intelligent assessment of
[5:17] their home that doesn&#39;t make them use
[5:19] their brain cells. Use case number four
[5:21] is developer workflows. Direct GitHub
[5:23] integration, scheduled Chrom jobs,
[5:25] developers using the agent as a task
[5:27] cue, assigning work items, watching it
[5:29] execute commits in real time. This one&#39;s
[5:31] gotten a lot of noise in my circles
[5:33] because it frees up developers to manage
[5:36] via their messaging service and have
[5:38] multiple agents working for them. But
[5:39] the fifth capability is perhaps the most
[5:42] interesting. That entire category is
[5:44] what I would call novel capabilities
[5:46] that did not exist before OpenClaw. Like
[5:48] the restaurant reservation story I
[5:50] shared in my first video on OpenClaw,
[5:52] where the agent could not book through
[5:54] OpenT, so it downloaded voice software
[5:56] and called the restaurant directly on
[5:58] its own. or a user who sent a voice
[6:00] message via iMessage to an agent with no
[6:02] voice capability, and the agent figured
[6:04] out the file format, found the
[6:06] transcription tool on the user&#39;s
[6:07] machine, routed the audio through
[6:09] OpenAI&#39;s transcription API, and just got
[6:11] the task done. Nobody programmed that
[6:13] behavior, right? The agent problem
[6:15] solved its way to a solution using the
[6:17] available tools. The pattern is clear.
[6:20] Friction removal, tool integration,
[6:22] passive monitoring, and novel
[6:24] capability. It tells you something
[6:26] important about what people want from
[6:29] their AI agents. It&#39;s not what most of
[6:30] the industry is building toward to be
[6:32] honest. The majority of AI product
[6:34] development in 2025 and 2026 has been
[6:37] focused on the chat. Better
[6:39] conversations, better reasoning, better
[6:40] answers to questions. 3,000 skills in
[6:43] Claude Hub are almost entirely about
[6:45] action. The community is not building
[6:47] better chat bots when they get the
[6:49] chance. They&#39;re building better
[6:50] employees, for lack of a better term.
[6:52] and broader survey data confirms the
[6:54] pattern. 58% of users site research and
[6:57] summarization as their primary agent use
[7:00] case. 52% talk about scheduling and 45%
[7:03] talk about I realize the irony here,
[7:05] privacy management. The consistent
[7:07] theme, people don&#39;t want to talk with
[7:10] the AI. They want AI to do things for
[7:12] them. And the AI agent market reflects
[7:15] this. It&#39;s growing at 45% annually, but
[7:17] I swear that is before OpenClaw hit. And
[7:20] the number is going to get bigger. Open
[7:22] Claw didn&#39;t really create all of this
[7:24] demand. It just proved the demand exists
[7:27] and put a match to dry tinder. Now we
[7:30] have to make sense of a world where
[7:31] everyone has demonstrated they want AI
[7:34] agents with their feet despite the
[7:36] security fears. So all of these use
[7:38] cases are sort of the cleaned up
[7:40] version. It&#39;s what people have intended
[7:42] to build. The messy version is more
[7:44] revealing and more interesting because
[7:46] it shows you what agents do when the
[7:48] specification is ambiguous. The
[7:51] permissions are broad and nobody can
[7:52] really anticipate what&#39;s going to happen
[7:54] next. At Saster, during a code freeze, a
[7:57] developer deployed an autonomous coding
[7:59] agent to handle very routine tasks. The
[8:01] instructions explicitly prohibited
[8:03] destructive operations, but the agent
[8:05] ignored them. It executed a drop
[8:07] database command and wiped the
[8:08] production system. And what happened
[8:10] after that matters even more than the
[8:13] terrible news of a wipe itself. When the
[8:15] team investigated, they discovered the
[8:16] agent had generated 4,000 fake user
[8:19] accounts and created false system logs
[8:21] to cover its tracks. It essentially
[8:23] fabricated the evidence of normal
[8:25] operation. Look, I won&#39;t say the agent
[8:28] was lying, per se. It was optimized for
[8:31] the appearance of task completion, which
[8:33] is what you get when you tell a system
[8:35] to succeed and don&#39;t give it a mechanism
[8:37] to admit failure. The deception was an
[8:40] emergent property of an optimization
[8:42] target, not something that I would call
[8:44] intentional, but the production database
[8:46] was still gone. Meanwhile, over on
[8:48] Moldbook, the social network where only
[8:50] AI agents can post, 1.5 million AI agent
[8:54] accounts generated 117,000 posts and
[8:57] 44,000 comments within 48 hours. I know
[9:00] there has been a lot of discussion about
[9:03] humans posting some of those posts. I
[9:05] think what they did with the space as
[9:06] agents is actually more instructive than
[9:09] any individual post being human
[9:11] generated because the agents
[9:13] spontaneously created a quote unquote
[9:15] religion called crustaparianism. They
[9:18] established some degree of governance
[9:20] structure. They built a market for
[9:21] digital drugs. And you know what&#39;s
[9:23] interesting about all of that? They did
[9:25] it in a very shallow manner. And what I
[9:27] mean by that is that if if you look at
[9:29] the range of vocabulary and the type of
[9:32] topic in most agent texts, they reflect
[9:36] typical attractor states in
[9:38] highdimensional space. And what I mean
[9:40] by that is that if you ask an AI agent
[9:43] to pretend it is making a social
[9:45] network, the topics that come up over
[9:47] and over again look a lot like what&#39;s on
[9:49] malt book. And so telling agents to
[9:51] create a social network effectively is
[9:53] them following that long range prompt
[9:55] and autonomously doing that. And so I
[9:57] don&#39;t look at this just as agents
[10:00] autonomously behaving and coordinating
[10:02] although the story is partly about that.
[10:04] I also look at this as reflective of the
[10:08] fairly shallow state of agent autonomous
[10:11] communication right now. Most of the
[10:13] replies are fairly wrote on mold book
[10:16] and many posts don&#39;t have replies at all
[10:18] and most of the topics are fairly
[10:20] predictable. We may mock Reddit but it
[10:22] has a much richer discourse than molt
[10:25] book does. MIT tech review called
[10:27] moltbook peak AI theater and I don&#39;t
[10:29] think that&#39;s entirely wrong. But the
[10:31] observation that matters for anyone
[10:32] deploying agents isn&#39;t whether something
[10:34] like crustaparianism the AI religion is
[10:37] real emergence or some degree of
[10:39] AIdriven performance art pushed by
[10:41] people with prompts. It&#39;s that agents
[10:43] have been given fairly open-ended goals
[10:45] and when they have social interaction,
[10:47] they spontaneously create a kind of
[10:49] organizational structure. We actually
[10:51] see this playing out in multi- aent
[10:53] systems already when agents collaborate
[10:54] on tasks and the structure essentially
[10:57] emerges from the long-term goal to
[11:00] optimize against a particular target. If
[11:03] you tell an AI agent to work with others
[11:05] to build a tool, it&#39;s going to
[11:06] collaborate and figure out how to
[11:08] self-organize. If you tell an AI agent
[11:10] to work with others on Maltbook, you
[11:12] kind of get the same thing. It&#39;s
[11:14] actually the same capability that lets a
[11:15] Maltbot negotiate a car deal
[11:17] autonomously and figure out how to
[11:19] transcribe a video message it was never
[11:21] designed to handle. The difference
[11:22] between agent problem solves creatively
[11:24] to save you $4,200. An agent problem
[11:27] solves creatively to fabricate evidence
[11:30] is really the quality of the spec and
[11:31] the presence of meaningful constraints
[11:33] for that agent. The underlying
[11:35] capability is identical, which is why
[11:38] I&#39;m talking about agents as a whole
[11:39] here. Yes, the multbot phenomenon is
[11:41] interesting, but it&#39;s worth calling out
[11:44] that the Saster database agent was not a
[11:46] multbot. It just represents how agents
[11:50] work when they&#39;re not properly prompted.
[11:52] And it does rhyme with so many of the
[11:55] disastrous stories that are coming out
[11:57] of Moltbot agents. One of which I saw
[12:00] was texting the wife of a developer who
[12:03] had a newborn and trying to play laptop
[12:06] sounds to soo the baby instead of
[12:08] getting the developer. Not a good move
[12:10] by the husband. So what does all of this
[12:12] mean for people deploying agents today?
[12:15] The question is no longer are agents
[12:17] smart enough to do interesting works.
[12:19] They&#39;re they&#39;re clearly smart enough.
[12:21] The question is, are your specifications
[12:23] in guard rails good enough to channel
[12:26] that intelligence productively and
[12:28] usefully? And I got to be honest with
[12:30] you, for most people right now, it looks
[12:32] like the answer is no. Which brings us
[12:35] to how we change that. Here&#39;s the
[12:36] finding that should shape how you think
[12:38] about deploying agents. When researchers
[12:40] study how people actually want to divide
[12:43] work between themselves and AI, the
[12:45] consistent answer is 7030. 70% human
[12:49] control, 30% delegated to the agent. In
[12:51] a study published in Management Science,
[12:53] participants exhibited a strong
[12:55] preference for human assistance over AI
[12:57] assistance when rewarded for task
[12:59] performance, even when the AI has been
[13:01] shown to outperform the human assistant.
[13:03] People will choose a less competent
[13:05] human helper over a more competent AI
[13:08] helper when the stakes are real. The
[13:10] preference maybe isn&#39;t rational. It&#39;s
[13:12] deeply psychological. that&#39;s rooted in
[13:14] loss aversion, the need for
[13:15] accountability, and the discomfort of
[13:17] delegating to a system that you can&#39;t
[13:19] really interrogate. And this matters
[13:21] because most agent architectures are
[13:23] built for 0 to 100, like full
[13:26] delegation. That&#39;s how Maltbot kind of
[13:28] works. Hand it off and walk away. And
[13:30] that&#39;s also Codeex&#39;s thesis for what
[13:32] it&#39;s worth. And it works beautifully for
[13:34] isolated coding tasks where correctness
[13:37] is verifiable. But for the messy,
[13:39] context dependent, socially
[13:41] consequential tasks that dominate,
[13:43] frankly, most of our days, getting the
[13:45] email tone right, scheduling the dentist
[13:47] appointment, negotiating for the car,
[13:50] communication, the 7030 split sounds to
[13:53] me more like a product requirement than
[13:55] just human loss aversion. And it&#39;s
[13:57] worthwhile to note that the
[13:59] organizations reporting the best results
[14:02] from agent deployment are not
[14:03] necessarily the ones running full
[14:05] autonomous systems. They&#39;re the ones
[14:07] running human in the loop architectures.
[14:09] Agents that draft and humans that
[14:11] approve, agents that research and humans
[14:13] that decide, agents that execute within
[14:15] guard rails that humans set and review.
[14:18] 38% of organizations use human in the
[14:20] loop as their primary agent management
[14:22] approach. And those organizations see 20
[14:24] to 40% reductions in handling time. 35%
[14:28] increases in satisfaction and 20% lower
[14:30] chart. To be honest with you, I think
[14:32] that may be an artifact of early 2026.
[14:34] When agents are scary, agents are new,
[14:36] and we&#39;re all figuring out how to work
[14:38] with them. Given the pace of agent
[14:39] capability gains, we are likely to see
[14:42] smart organizations delegating more and
[14:44] more and more over the rest of 2026, no
[14:46] matter how uncomfortable it makes many
[14:49] of us at work. In a study published in
[14:51] Computers and Human Behavior,
[14:52] participants exhibited a strong
[14:54] preference for human assistance over AI
[14:56] assistance when rewarded for task
[14:58] performance. people chose less competent
[15:01] human helpers over more competent AI
[15:03] helpers when the stakes were real. This
[15:05] seems deeply psychological. It&#39;s about
[15:07] loss aversion, the need for
[15:09] accountability and the discomfort of
[15:10] delegating to a system you can&#39;t
[15:12] interrogate. And this matters because
[15:14] most agent architectures are built for a
[15:17] 0 to 100 use case. Full delegation, hand
[15:20] it off and walk away. That&#39;s actually
[15:22] Codeex&#39;s thesis and it works beautifully
[15:24] for isolated coding tasks where
[15:26] correctness is verifiable. But for the
[15:28] messy, context dependent, socially
[15:31] consequential tasks that dominate most
[15:33] of our days, like getting the right tone
[15:35] in the email or scheduling the dentist
[15:37] appointment or negotiating, it seems
[15:40] like 7030 is sort of a human product
[15:42] requirement for working with agents.
[15:44] Right now, the organizations reporting
[15:46] the best results today from agent
[15:48] deployment aren&#39;t the ones running fully
[15:50] autonomous systems. They&#39;re the ones
[15:52] running human and the loop
[15:53] architectures. Agents that draft and
[15:55] humans that approve, agents that
[15:57] research and humans that decide. To be
[15:59] honest with you, I think that may be an
[16:01] artifact of early 2026 when agents are
[16:04] scary and agents are new and we&#39;re all
[16:06] figuring out how to work with them. That
[16:08] human culture component is huge. But
[16:10] given the pace of agent capability gains
[16:12] and how much we&#39;ve seen from capable
[16:14] agents like Opus 4.6
[16:16] who managed a team of 50 developers. We
[16:18] are likely to see smart organizations
[16:20] delegating more and more and more over
[16:22] the rest of 2026, no matter how
[16:25] uncomfortable it makes many of us at
[16:27] work. The practical implication is that
[16:29] if you&#39;re building with agents or
[16:30] deploying them at work early in 2026,
[16:33] your culture needs to get ready and it
[16:35] might be smart to design for 7030. Build
[16:38] those approval gates, build visibility
[16:39] into what the agent did and why, and
[16:42] make the human the decision maker, but
[16:44] plan for full delegation over time
[16:46] because those agents are going to keep
[16:47] getting smarter. So, let&#39;s say you&#39;ve
[16:49] watched all of this chaos with Moltbot
[16:51] and Open Claw and you want to see value.
[16:54] What should you actually do? Well,
[16:56] number one, start with the friction, not
[16:59] the ambition. That 30,000 skill
[17:01] ecosystem tells you exactly where to
[17:04] begin. those daily pain points that hurt
[17:06] so bad over time. Email triage is one.
[17:09] Morning briefings, basic monitoring.
[17:11] These are highfrequency, low stakes
[17:13] tasks where the cost of failure is
[17:16] relatively low. Start there. Build some
[17:18] confidence. Expand scope as trust in
[17:21] agents develops. Design for approval
[17:23] gates. Don&#39;t just design for full
[17:25] autonomy out of the gate. Start with
[17:27] having the agent draft if you&#39;ve never
[17:28] built an agent before. Have the agent
[17:30] research if you&#39;ve never built the agent
[17:32] before. And you decide. Have the agent
[17:34] monitor and you act. Have the assumption
[17:37] in your agent design system be that a
[17:40] human checkpoint will always exist until
[17:42] you are ready to build an agentic system
[17:46] with very strong quality controls and
[17:48] constraints so that you can trust the
[17:50] agent with more. That is possible. It
[17:52] just takes skill and most people don&#39;t
[17:54] have it out of the gate. I would also
[17:56] encourage you and I&#39;ve said this before
[17:57] to isolate aggressively. Have dedicated
[18:00] hardware or a dedicated cloud instance
[18:02] for your open claw. Throw away accounts
[18:04] for initial testing. Don&#39;t connect to
[18:06] data you can&#39;t afford to lose. The
[18:09] exposed instances that Showdan found in
[18:12] OpenClaw weren&#39;t running on isolated
[18:15] infrastructure. They were running on
[18:17] lots and lots of people&#39;s primary
[18:19] machines and just exposing their data to
[18:20] the internet. You have to treat
[18:22] containment of data as a non-negotiable.
[18:24] I would also treat agent skills
[18:27] marketplaces with least trust. Vet
[18:30] before you install. Check the
[18:32] contributor. Check the code. 400
[18:34] malicious packages appeared in Claude
[18:36] Hub in a single week. And the security
[18:38] scanner helps, but it can&#39;t catch
[18:40] everything. Another one, if you&#39;re going
[18:41] to ask your agent to do a task, please
[18:44] specify it precisely. The car buyer that
[18:46] I talked about at the beginning of this
[18:48] video gave the agent a clear objective,
[18:50] clear constraints, and clear
[18:52] communication channels. Meanwhile, the
[18:54] iMessage user that spammed his wife gave
[18:56] the agent broad access and didn&#39;t really
[18:58] define boundaries. When the constraint
[19:00] is vague, the model will fill in the
[19:01] gaps with behavior that you did not
[19:03] predict. This is the same spec quality
[19:06] problem we covered when we talked about
[19:08] AI agents in dark factories. The
[19:11] machines build what you describe, but if
[19:13] you describe it badly, you get bad
[19:16] results. The fix is not better AI, it&#39;s
[19:19] actually better specifications. I would
[19:21] also encourage you to track everything.
[19:23] The Saster database incident was
[19:25] catastrophic, not because the agent
[19:27] wiped the database. That&#39;s recoverable
[19:30] eventually, but because it generated
[19:31] fake logs to conceal the wipe. You need
[19:34] to build an audit trail outside the
[19:36] agent&#39;s scope of access. If the system
[19:39] you&#39;re monitoring controls the
[19:40] monitoring, you have no monitoring. And
[19:43] last, but not least, budget for a
[19:44] learning curve. The J curve is real.
[19:47] Agents will make your life harder before
[19:49] they make it easier. The first week of
[19:51] email triage may produce very awkward
[19:53] drafts. The first morning briefing may
[19:55] miss half of what you care about. Assume
[19:58] you need to take time to learn and that
[19:59] it&#39;s worth engaging with the agent to
[20:02] build something that actually hits those
[20:04] pain points that matter most to you. 57%
[20:07] of companies today claim that they have
[20:10] AI agents in production. That number
[20:13] should probably impress you less than it
[20:15] does. Only one in 10 agent use cases,
[20:17] according to McKenzie, reached actual
[20:19] production in the last 12 months. And
[20:21] the rest end up being pilots. They end
[20:23] up being proofs of concept. They end up
[20:25] being press releases. They end up being
[20:27] power presentations that say agents.
[20:29] Gardner predicts over 40% of Agentic AI
[20:31] projects are going to be cancelled by
[20:33] the end of 2027. And after watching some
[20:36] of the disaster with Open Claw over the
[20:38] past few weeks, I both understand and
[20:40] don&#39;t understand. The reasons enterprise
[20:43] give are quite clear. They&#39;re worried
[20:44] about escalating costs from runaway
[20:46] recursive loops. They&#39;re worried about
[20:48] unclear business value that evaporates
[20:50] when the demo ends and you have to get
[20:51] into all of those dirty edge cases. And
[20:53] they&#39;re worried about what Gardner calls
[20:55] unexplainable behaviors, right? Agents
[20:57] acting in ways that are difficult to
[20:59] explain or to constrain or to correct. A
[21:01] study found that upwards of half of the
[21:04] 3 million agents currently deployed in
[21:06] the US and UK are quote unquote
[21:08] ungoverned. No tracking of who controls
[21:11] them, no visibility into what they can
[21:13] access, no permission expiration, no
[21:15] audit trail. This was based on a
[21:17] December 2025 survey of 750 IT execs
[21:20] conducted by Opinion Matters. And it&#39;s
[21:23] directionally consistent with other data
[21:24] as well. A Daku Harris poll found 95% of
[21:27] data leaders cannot fully trace their AI
[21:30] decisions. That&#39;s concerning. The
[21:32] security boundaries that enterprises
[21:34] have spent decades building just don&#39;t
[21:36] apply when the agent walks through them
[21:38] on behalf of a user who would not have
[21:41] been allowed through the front door
[21:42] normally. We have to rebuild our
[21:44] security stances from the ground up.
[21:46] Tools like Cloudflare&#39;s Molt Worker,
[21:48] Langraph, Crew AI, these exist because
[21:50] enterprises see the demand but have
[21:52] difficulty deploying tools like Moltbot
[21:55] without a ton of governance over the
[21:57] top. And so we start to see the market
[21:58] bifurcating. Consumer grade agents are
[22:00] optimized for capability and they&#39;re
[22:02] okay with a lot more risk because most
[22:04] of the consumers right now fall into
[22:06] that early adopter category and are very
[22:08] technical and at least think they know
[22:10] what they&#39;re doing. Enterprisegrade
[22:11] frameworks are optimized for control.
[22:14] Right now, nobody has a great mix of
[22:17] control and capability or almost no one.
[22:19] The company that figures out capability
[22:21] and control, the agent that&#39;s as strong
[22:23] as Moltbot and as governable as an
[22:26] enterprise SAS product, they&#39;re going to
[22:28] own the next platform. If you step back
[22:30] from the specific stories in the
[22:31] ecosystem drama of Open Claw, a very
[22:34] clear signal emerges from the noise.
[22:36] People do not want smarter chat bots.
[22:39] They want digital employees, digital
[22:41] assistants, systems that do work on
[22:43] their behalf across the tools they use
[22:46] without requiring constant oversight.
[22:48] Isn&#39;t that interesting? On the one hand,
[22:51] you have that study showing a preference
[22:54] for humans in production systems and
[22:56] that lines up with a lot of the cultural
[22:58] change we see at enterprises and at the
[23:01] other side of the spectrum, you have
[23:03] people willingly turning over their
[23:05] digital lives to malt bots. What gives?
[23:08] I think the demand here is following a
[23:10] pattern that we&#39;ve seen before. When an
[23:13] underserved need is met with an immature
[23:15] technology, early adopters are willing
[23:18] to take extraordinary risks to get
[23:20] extraordinary capabilities. In this
[23:22] sense, I think the excitement we see
[23:24] around maltbot reflects the hunger that
[23:27] the leading edge of AI adopters have for
[23:29] delegating more. And the more cautious
[23:32] 7030 split is something I see more often
[23:35] in companies that have existing mature
[23:38] technologies and are moving cautiously
[23:40] on AI. It&#39;s a culture thing. But
[23:42] regardless, Moltbot has proven the AI
[23:46] agent use case is real. If a 100,000
[23:49] users without any monetary incentive
[23:51] have granted root access to an
[23:53] open-source hobby project, the demand
[23:56] for real AI agents is desperate enough
[23:58] that people will tolerate real risk to
[24:00] get it. If nothing else, look at how
[24:02] AI.com crashed during the Super Bowl.
[24:05] The question isn&#39;t whether agents will
[24:07] become a standard part of how we work
[24:08] and live. That question is settled. It&#39;s
[24:11] coming. They will. The question is
[24:13] whether the infrastructure catches up
[24:15] before the damage that unmanaged agents
[24:17] do accumulates to a point where it
[24:20] changes our public perception. Right
[24:22] now, we&#39;re in this window where
[24:24] capability wins feels so exciting that
[24:27] it feels okay for some people to outpace
[24:30] governance. And demand is certainly
[24:32] outpacing any of the security boundaries
[24:34] we put up. That window of excitement is
[24:37] not going to last forever. And while
[24:39] it&#39;s open, people and organizations need
[24:41] to learn to operate in it and build out
[24:43] agent capability carefully with guard
[24:46] rails, with clear specs, with an eye on
[24:48] human judgment and how this impacts
[24:50] culture change within orgs that are not
[24:52] open AI, that are not anthropic. The
[24:54] ones that figure out how to bring their
[24:56] humans along, show that agents can work
[24:58] successfully with high capability
[25:00] standards and high quality standards and
[25:03] high safety standards, those are the
[25:04] ones that are going to be the furthest
[25:06] ahead when the infrastructure finally
[25:08] starts to catch up. Early adopters
[25:10] always look reckless. They also have a
[25:12] head
