---
title: "Clawdbot to Moltbot to OpenClaw: The 72 Hours That Broke Everything (The Full Breakdown)"
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=p9acrso71KU"
video_id: "p9acrso71KU"
duration: "22:02"
transcript_method: "youtube-captions"
segment_count: 592
char_count: 22536
status: ingested
topics: []
meta_patterns: []
---

# Clawdbot to Moltbot to OpenClaw: The 72 Hours That Broke Everything (The Full Breakdown)

**Creator**: nate-jones | **Duration**: 22:02
**URL**: https://www.youtube.com/watch?v=p9acrso71KU
**Transcript**: 592 segments, 22536 chars

## Transcript

In hundreds of cities across the globe right now, developers are queuing up to buy Mac minis specifically to give an AI agent root access to their digital life. And they are not alone. Apple's entire supply chain is feeling it. You can see literal spikes in Google Trends. Cloudflare's stock is up over 20% because this thing uses Cloudflare. What is it? Is it an info steeler malware in disguise? Well, that's what Google's vice president of security engineering calls it. Uh, no. It's actually moltbot until a couple of days ago. It was called Claudebot because it mostly uses claude. Claude with a like claw. The name change was not voluntary. Anthropics lawyers got after that. Quick update in the edit. Now it's called open claw. Steinberger says this one's sticking and the trademark searches came back clear. This is the story of how a lobster themed AI assistant became the fastest growing open-source project in GitHub history. what it reveals about where personal computing is headed and why the most interesting question is not whether you personally should run it. It is whether Agentic AI is going to be safe to run locally for individuals. So what is Maltbot, formerly known as Claudebot? If you strip away the hype, it's a very simple idea executed very ambitiously. It's an AI assistant that runs on your hardware, talks to you through apps you already use, and actually does things instead of just suggesting them. So, you message it on WhatsApp, it reads your emails, it triages your inbox, it drafts responses, you tell it to book a flight, it opens a browser, it searches, it fills out forms, it confirms, you ask for the morning briefing. You get that before you finish your coffee. The tagline is AI that actually does things. That's not marketing fluff. It is the core value prop and the core risk condensed into five words. Technically, Moltbot is a gateway service that maintains websocket connections to various messaging platforms. It's not just WhatsApp. You can do Telegram and Signal and iMessage, etc. And it orchestrates interactions with an LLM backend. Think Claude typically, but sometimes GPT4. And there are some local models like Olama that are available too. And then it uses a growing library of skills that basically gives it hands and feet capabilities, right? browser automation, file system access, shell commands, calendar integration, you name it. The entire architecture is local first, which means that the gateway runs on your machine. Your conversation history stays on your machine. Your credentials stay on your machine. You get the idea. It's privacy first. But local first does not mean local only. Unless you're running a local model like O Lama, your queries still run to Anthropic or OpenAI's APIs. You own the agent layer. You rent the intelligence. Peter Steinberger built the first version for himself after stepping away from a PDF company he founded and sold to Insight Partners. He'd barely touched a computer in 3 years, and he rediscovered his spark playing with Claude, and he started to build tools to manage his own digital chaos and eventually open sourced the result with a little lobster mascot named Claude with a W. Within 24 hours, Claude with a W had 9,000. A week later, 60,000. This is how fast things move in the age of AI and it's over 82,000 stars now. I'm sure it will be much higher by the time you see this. Andre Carpathy praised it publicly and I think one user's summary captured my mood and a lot of other people's mood really, really well. At this point, I don't even know what to call moldbot. It is something new and after a few weeks with it. This is the first time I felt like I'm living in the future. That that is what it feels like. I've used it and it is either the future of personal computing or it is a gigantic collective hallucination and it might possibly be both and I want to talk about that because most of the maltbot conversation is all hype. It's the p future of personal computing. It's incredible. You're going to want it etc. etc. There are reasons not to want this and we're going to go into that. But first we should talk about the growth. Anytime you can get to 90,000 or 82,000 or however many thousand GitHub stars it has by now you're going to move markets. Not just Anthropic Market as a private company, but Cloudflare is a publicly traded company. For a local AI agent to be useful, it will need to communicate with the outside world. And that's where Cloudflare comes in. And that's why their stock price moved because anytime Claudebot or now Moltbot needs to touch the outside world, it has to expose its home network to the open internet, which is very dangerous unless something comes in between it. and Cloudflare tunnels provide effectively a secure bridge from your local home network to the internet and it allows developers to expose local services safely. Moltbot's documentation recommends it and the community has adopted it enthusiastically. This causes Cloudflare stock to rise. It's up some 20% at last count. I don't know where it is now. That's the point is not the exact amount it gained. The point is that we are in a world where AI is moving so fast it can change the value of a publicly traded company by a fifth within a few days. Now, here's some of the reasons why you should be skeptical. First, operational discipline. On January 27th, Anthropic's legal team took notice of this and sent Steinberger a trademark notice. The name Claude was too close to Claude. Like Claude with a W is too close to Claude with a U. He was required to change it. The timing was really rough, right? The project is at peak velocity. Attention is absolutely white hot. The community is exploding. Announcing a rebrand to Maltbot is not what you want, but he had to do it. Steinberger did his best, but he made a mistake that's going to be studied in operational security courses for years to come. When changing the GitHub or name and the X handle, he released the old names before securing the new ones. The gap was approximately 10 seconds. In that 10-second window, crypto scammers grabbed both accounts. This wasn't a hack. They were waiting. They were watching. The moment Claudebot became available, they snatched it. And what followed was absolute chaos. A fake Claude token appeared on Solana, riding the viral wave. It hit $16 million in market cap before collapsing. A classic rugpull that wrecked late buyers while scammers walked away with millions. Fake accounts proliferated. Steinberger's mentions filled with speculators demanding he endorse tokens he'd never even heard of. To all crypto folks, he begged, "Please stop pinging me. Any project that lists me as a coin owner is a scam. I feel for him. This is not what he signed up for when he wrote a little home automation tool." Meanwhile, security researchers have been poking at the actual codebase. And what they found there wasn't reassuring either. Jameson O'Reilly, founder of red teaming firm DVULN, I don't know how to pronounce that either, probably DVOM, discovered that the gateways authentication logic trusted all local host connections by default. This is not good. If you run Moltbot behind a reverse proxy, which is a very common deployment pattern, that proxy traffic gets treated by default as local. There's no off required. You get full access to credentials. You get all conversation history. you get the privilege to command execution. This is not good because it allows outside traffic to hijack Claudebot or now Moldbot. When he did a scan, he found hundreds of exposed instances from developers who had installed Moldbot. And of those he examined manually, at least eight were completely open. API keys were open, Telegram bot tokens were open, one exposed instance had Signal configured on a public server. This is a disaster and it shows what happens when you have open-source projects that are not properly secured. A separate researcher Matt Vukoule demonstrated the severity with a proof of concept. He sent a single malicious email to a vulnerable maltbot instance with email integration enabled. Via prompt injection. He got a private key and control in under 5 minutes. But O'Reilly kept going further. He uploaded a benign skill to Claude Hub, which is Moltbot's plug-in marketplace. presumably that needs a new name. And he artificially inflated the download count to 4,000 and then immediately watched developers from seven different countries install it. The skill did nothing malicious, but it was so easy to do that it easily could have. Anybody could have done that. QuadHub has zero moderation process. Its developer notes literally state that all downloaded code will be treated as trusted code, which is a disaster. Meanwhile, security firm Slowmist got in on the action, announcing that an authentication bypass made several hundred API keys and private conversation histories accessible. If this is giving you high blood pressure, it should. The trademark dispute, the scam tokens, the security disclosures, the account hijacking, all happened within 72 hours. And here's where the analysis gets really uncomfortable. The vulnerabilities researchers found are very real and very serious. Some of them have been patched. The local host authentication issue is fixed. Steinberger is responsible. The community is engaged. But the deeper problem isn't these individual bugs. It's architecture. It's what Maltbot is designed to do. I think O'Reilly put this well. He said, "We've spent 20 years essentially building security boundaries around our oss and everything that we've done is designed to contain and limit scope of action. But agents require us to tear that down by the nature of what an agent is. An agent needs hands and feet to do things. It needs to read your files to access your credentials to get commands done. The value proposition requires punching holes through every boundary that security teams took a long time, decades in some cases to build. That is the bind. A useful agentic AI requires fairly broad permissions and broad permissions create a massive attack surface. This is why Google has emphasized control panes for agents and why enterprises take agent attack surfaces extremely seriously. At this point, enterprises are much much safer places to install and run agents because they take that security seriously. And open-source, especially after the last week or so, is looking very much like an unsafe place to run agents. Consider prompt injection. Moltbot connects to your email, your messaging apps, your social accounts, it reads incoming content and it acts on it. But LLMs cannot reliably distinguish instructions from content. So if an attacker sends you a carefully crafted WhatsApp message with hidden instructions, Maltbot will treat it as trusted input. It will follow the instructions. It may forward your credentials. Maybe it executes a shell command and you never see this coming. This is not a Moltbot specific flaw. It's intrinsic to how language models process text. No one has solved it. And the only way enterprises are addressing it are by reducing the kind of content that these agents have access to and reducing the degree to which these agents have access to the public internet and also internal files. This is why Google's principles for agentic management for enterprise emphasize a lease privilege stance. You treat the agent like a junior employee and you do not assume that it gets access to anything. But consider the supply chain for Moltbot. Multbot's extensibility is a feature, right? It comes with 50 plus bundled skills. It comes with a growing marketplace. It comes with infinite customization. And every single plugin, unlike a least privilege dance, it's just unodudited code running with the permissions you've granted the agent. One malicious update and your personal AI assistant becomes an exfiltration tool. One password security blog got in on the action and put it very clearly. Moltbot shows how powerful local AI agents can be. But if your agent stores plain text API keys, an info stealer can grab them in seconds. Running Moltbot safely largely defeats the purpose of Maltbot because a sandboxed assistant can't access your real email and calendar. And so the security utility trade-off here is effectively being solved by companies tackling secure integrations with individual tools rather than by open-source. And so when Gemini comes and says we have a great tool for Gmail, Google is standing behind that. Google is saying the AI here is not just randomly exposed and sending your open AI keys to the internet. They're not saying you're sending your Gemini keys to the internet. They're not saying you're sending your API keys to the internet. They are saying that we have built an AI experience inside email that is safer. The trade-off is speed, right? Part of what makes Claudebot compelling, part of what makes Maltbot compelling is that you don't have to wait to have a local agent that does everything for you. And a lot of people turn out to want to not wait. A lot of people want to go faster. And that is leading to the compute squeeze that we're not talking about enough. If you zoom out further, if you zoom out beyond the security issues, the Mac Mini buying frenzy that came with Moltbot is not just FOMO on a viral project, it is colliding with a structural shift in semiconductor economics that's been building up for the last 2 years. And it's exactly why we're going to see more and more products like Lindy or like Naden or like Gemini serving in Gmail full enterprise AI implementations rather than a bunch of open- source projects despite how popular they are. The reason is price. DRAM prices have surged 172% since early 2025. Server memory is expected to double in cost by late 2026. This is not a cyclical drive. This is a structural change in cost. AI data centers are consuming an ever larger share of global wafer capacity and the memory manufacturers are just following their margins. High bandwidth memory for AI accelerators consumes four times the wafer capacity of a standard DRAM per gigabyte. Every single chip that goes to Nvidia is a chip that is not going into your laptop. Samsung, SKH Highix, and Micron have all signed multi-year supply deals with AI hyperscalers and they're locking in capacity. Consumer memory is getting the floor sweeping scope. If you reframe Mobbot through this lens, the Mac Mini supply chain run looks different. People are not just excited about a cool new tool. They're trying to lock in some personal compute capacity while they still can. It's a hedge, conscious or not, against a future where running local AI is going to get priced out. The irony is so sharp and it's not lost on me. Moltbot promises sovereignty over your AI stack, but most Moltbot instances still route to Claude's API. You own the agency layer. You rent the intelligence from Anthropics data centers. The escape hatch, local models via Lama, requires the RAM that's flowing to those same data centers. The sovereignty play loops back to a dependency on hyperscalers. The window for truly local AI may be narrowing really really fast as economics tilt against consumer hardware. But let's step back and ask the question, why is Maltbot so popular in the first place? We've talked about the vulnerability. We've talked about the supply chain headaches for over a decade. Tech companies have promised us AI assistance that would transform our lives and largely they have lied. Dairy arrived in 2011. Google Assistant followed in 2016. Alexa has colonized millions of kitchens with a timer. And yet, in 2026, most of us are frustrated. We're repeating ourselves. We're wondering why our smart assistants can't remember the conversation from 5 minutes ago. Maltbot exposes how timid those efforts have been. Apple Siri just lives in a little walled garden. It's limited to Apple's approved integrations. It can't book you a flight. Google Assistant knows everything about you, but does almost nothing with that knowledge. Alexa controls your lights, but can't manage your inbox. Moltbot does what those companies promised and never delivered on. It manages calendars across platforms. It drafts emails in your voice. It handles travel logistics end to end. It commits code to your repos. It monitors prices and rebooks when deals appear. It remembers. It acts proactively. The tradeoff is that Maltbot requires you to trust it completely. Is safe because it's neutered. Moldbot is useful because it's dangerous. The big tech assistants are products designed to protect corporate liability. Moltbot is a tool designed to maximize user capability. And that's just an observation about what the market was hungry for. It turns out that tens of thousands of GitHub stars in weeks implies a lot of pent-up demand for assistance that actually assists. I would be remiss if I did not call out some of the really eye-opening things Maltbot does because I don't want you to walk away and hear that it's only about the security vulnerabilities. People are flocking to this because of the power it brings to their computer day in day out. Despite all of it, Moltbot works well. Even the one password security team while documenting the risks shared an anecdote that captures why people are excited. A user asked Maltbot to make a restaurant reservation. Open Table didn't have the availability. So, Maltbot went, found AI voice software, downloaded it, called the restaurant directly, and secured the reservation over the phone. Zero human intervention, problem-solving behavior that emerged from the combination of broad permissions and a capable model. That is something new. It's exciting. And the demos flooding social media are not just productivity theater. It's not just email inbox triage. There's some really new capabilities. One developer configured Maltbot to run coding agents overnight. He would describe features before bed. He would wake up to working implementations and review the code over coffee. Another built a complete Laravel application while walking to get coffee, issuing instructions via WhatsApp, watching the commits literally land in his repo as he strolled along to the coffee shop. Steve Caldwell set up a weekly meal planning system in Notion. Maltbot checks what's in season, cross references family preferences, generates the grocery list, and updates the calendar. It saves him an hour a week. self-improvement capability is one of the things that really makes me sit up. If you tell Maltbot to create a skill to monitor flight prices and alert me when they drop below $300, it will write that entire automation itself. And if you tell it to self-improve, it will do so. The pattern among successful users, and there are many, is that they're not automating busy work. They're delegating judgment requiring tasks to a system that can handle a lot of ambiguity, recover from failures, and find alternative approaches. is when the first attempt doesn't work. The restaurant reservation story is not impressive because it made a phone call. It's impressive because the AI recognized the initial approach didn't work and autonomously went and found a different solution. And that's exactly what makes it dangerous. The same capability that lets it problem solve creatively is the capability that lets a prompt injection attack succeed in new ways. So the honest question is should you run it? And the honest answer is it depends on who you are. If you are very technically sophisticated, if you understand VPS deployments, network isolation, credential rotation, the difference between local host and 0.0.0.0, Moldbot offers a genuine glimpse of where personal AI is headed. You can run it on dedicated hardware. You can use throwaway accounts for initial testing. You can sandbox it aggressively. If what I just said for the last 30 seconds felt like jargon, though, you should wait. The project is young. The security model is immature and you should let truly wellfunded good companies build agents that will work for you. And that is 99% of us. And especially if you handle sensitive data professionally, do not connect Maltbot to any of your systems. Not financial records, not health information, not client communications. The upside just isn't worth the extra liability. And and last but not least, do not buy any claw tokens. It is a scam. You know, if we step back, Agentic AI is coming regardless. The ability to delegate tasks to AI systems that can act autonomously is not a question of if, but when and how. Maltbot is an accelerated preview. It's like Mad Max. It's messy. It's risky. It's exhilarating. It's problematic. And it shows you a glimpse of what the future could look like with all the guardrails off. Now, the security model for Agentic AI is still developing. We're still figuring out how to bolt capabilities onto permission frameworks designed for a different era and the economics of personal computing are shifting at the same time and so trying to figure out where these agents live remains a big question mark. I have very high conviction that if we are at a point now where Moldbot is exploding and taking off, we will be at a point in 3 months where a bunch of VCF funded agents are going to be on the market competing for our attention with professional security guard rails in place. In fact, I've seen two or three of them that have conveniently popped up in just the last couple days as Maltbot has taken off. I'm going to wait and see how they shake out before reviewing them. But it's worth noting that where there are 90,000 GitHub stars or 82,000 or however many thousand there are by the time you get there, there's going to be VC money and there's going to be agents that are built with software standards that far exceed an open-source application. Moltbot did not create the tensions I've discussed today. All Moltbot did was tap into demand that was so viral it made them impossible to ignore. Maltbot is a messy glimpse at the future and I think it's worth paying attention to because it allows us to take that time machine into later 2026 and see how powerful an agent can be. In particular, I am so excited for agents that actually have the ability to autonomously work through obstacles and generate novel solutions when I didn't give them specific instructions. That's going to be really cool. It's coming this year. Boltbot is only for advanced users and it's very much a use at your own risk tool.

## Timed Segments

[0:00] In hundreds of cities across the globe
[0:02] right now, developers are queuing up to
[0:04] buy Mac minis specifically to give an AI
[0:07] agent root access to their digital life.
[0:10] And they are not alone. Apple&#39;s entire
[0:12] supply chain is feeling it. You can see
[0:14] literal spikes in Google Trends.
[0:16] Cloudflare&#39;s stock is up over 20%
[0:19] because this thing uses Cloudflare. What
[0:21] is it? Is it an info steeler malware in
[0:23] disguise? Well, that&#39;s what Google&#39;s
[0:25] vice president of security engineering
[0:26] calls it. Uh, no. It&#39;s actually moltbot
[0:29] until a couple of days ago. It was
[0:31] called Claudebot because it mostly uses
[0:33] claude. Claude with a like claw. The
[0:36] name change was not voluntary.
[0:38] Anthropics lawyers got after that. Quick
[0:40] update in the edit. Now it&#39;s called open
[0:42] claw. Steinberger says this one&#39;s
[0:44] sticking and the trademark searches came
[0:47] back clear. This is the story of how a
[0:50] lobster themed AI assistant became the
[0:52] fastest growing open-source project in
[0:54] GitHub history. what it reveals about
[0:57] where personal computing is headed and
[0:59] why the most interesting question is not
[1:00] whether you personally should run it. It
[1:02] is whether Agentic AI is going to be
[1:05] safe to run locally for individuals. So
[1:09] what is Maltbot, formerly known as
[1:11] Claudebot? If you strip away the hype,
[1:13] it&#39;s a very simple idea executed very
[1:16] ambitiously. It&#39;s an AI assistant that
[1:19] runs on your hardware, talks to you
[1:21] through apps you already use, and
[1:22] actually does things instead of just
[1:25] suggesting them. So, you message it on
[1:27] WhatsApp, it reads your emails, it
[1:29] triages your inbox, it drafts responses,
[1:31] you tell it to book a flight, it opens a
[1:33] browser, it searches, it fills out
[1:34] forms, it confirms, you ask for the
[1:36] morning briefing. You get that before
[1:38] you finish your coffee. The tagline is
[1:40] AI that actually does things. That&#39;s not
[1:42] marketing fluff. It is the core value
[1:44] prop and the core risk condensed into
[1:46] five words. Technically, Moltbot is a
[1:49] gateway service that maintains websocket
[1:51] connections to various messaging
[1:52] platforms. It&#39;s not just WhatsApp. You
[1:54] can do Telegram and Signal and iMessage,
[1:56] etc. And it orchestrates interactions
[1:58] with an LLM backend. Think Claude
[2:00] typically, but sometimes GPT4. And there
[2:03] are some local models like Olama that
[2:05] are available too. And then it uses a
[2:07] growing library of skills that basically
[2:09] gives it hands and feet capabilities,
[2:11] right? browser automation, file system
[2:13] access, shell commands, calendar
[2:15] integration, you name it. The entire
[2:17] architecture is local first, which means
[2:19] that the gateway runs on your machine.
[2:22] Your conversation history stays on your
[2:24] machine. Your credentials stay on your
[2:26] machine. You get the idea. It&#39;s privacy
[2:27] first. But local first does not mean
[2:31] local only. Unless you&#39;re running a
[2:33] local model like O Lama, your queries
[2:35] still run to Anthropic or OpenAI&#39;s APIs.
[2:38] You own the agent layer. You rent the
[2:41] intelligence. Peter Steinberger built
[2:43] the first version for himself after
[2:45] stepping away from a PDF company he
[2:47] founded and sold to Insight Partners.
[2:49] He&#39;d barely touched a computer in 3
[2:51] years, and he rediscovered his spark
[2:53] playing with Claude, and he started to
[2:55] build tools to manage his own digital
[2:57] chaos and eventually open sourced the
[2:59] result with a little lobster mascot
[3:01] named Claude with a W. Within 24 hours,
[3:05] Claude with a W had 9,000. A week later,
[3:08] 60,000. This is how fast things move in
[3:10] the age of AI and it&#39;s over 82,000 stars
[3:13] now. I&#39;m sure it will be much higher by
[3:14] the time you see this. Andre Carpathy
[3:17] praised it publicly and I think one
[3:18] user&#39;s summary captured my mood and a
[3:21] lot of other people&#39;s mood really,
[3:22] really well. At this point, I don&#39;t even
[3:24] know what to call moldbot. It is
[3:27] something new and after a few weeks with
[3:28] it. This is the first time I felt like
[3:30] I&#39;m living in the future. That that is
[3:33] what it feels like. I&#39;ve used it and it
[3:37] is either the future of personal
[3:38] computing or it is a gigantic collective
[3:40] hallucination and it might possibly be
[3:42] both and I want to talk about that
[3:44] because most of the maltbot conversation
[3:47] is all hype. It&#39;s the p future of
[3:48] personal computing. It&#39;s incredible.
[3:51] You&#39;re going to want it etc. etc. There
[3:53] are reasons not to want this and we&#39;re
[3:54] going to go into that. But first we
[3:56] should talk about the growth. Anytime
[3:58] you can get to 90,000 or 82,000 or
[4:00] however many thousand GitHub stars it
[4:02] has by now you&#39;re going to move markets.
[4:04] Not just Anthropic Market as a private
[4:06] company, but Cloudflare is a publicly
[4:08] traded company. For a local AI agent to
[4:10] be useful, it will need to communicate
[4:12] with the outside world. And that&#39;s where
[4:14] Cloudflare comes in. And that&#39;s why
[4:16] their stock price moved because anytime
[4:19] Claudebot or now Moltbot needs to touch
[4:21] the outside world, it has to expose its
[4:24] home network to the open internet, which
[4:26] is very dangerous unless something comes
[4:28] in between it. and Cloudflare tunnels
[4:31] provide effectively a secure bridge from
[4:34] your local home network to the internet
[4:37] and it allows developers to expose local
[4:39] services safely. Moltbot&#39;s documentation
[4:42] recommends it and the community has
[4:43] adopted it enthusiastically. This causes
[4:46] Cloudflare stock to rise. It&#39;s up some
[4:48] 20% at last count. I don&#39;t know where it
[4:50] is now. That&#39;s the point is not the
[4:52] exact amount it gained. The point is
[4:54] that we are in a world where AI is
[4:56] moving so fast it can change the value
[4:59] of a publicly traded company by a fifth
[5:02] within a few days. Now, here&#39;s some of
[5:05] the reasons why you should be skeptical.
[5:07] First, operational discipline. On
[5:09] January 27th, Anthropic&#39;s legal team
[5:11] took notice of this and sent Steinberger
[5:14] a trademark notice. The name Claude was
[5:16] too close to Claude. Like Claude with a
[5:18] W is too close to Claude with a U. He
[5:20] was required to change it. The timing
[5:22] was really rough, right? The project is
[5:24] at peak velocity. Attention is
[5:26] absolutely white hot. The community is
[5:27] exploding. Announcing a rebrand to
[5:30] Maltbot is not what you want, but he had
[5:32] to do it. Steinberger did his best, but
[5:35] he made a mistake that&#39;s going to be
[5:36] studied in operational security courses
[5:38] for years to come. When changing the
[5:40] GitHub or name and the X handle, he
[5:43] released the old names before securing
[5:46] the new ones. The gap was approximately
[5:49] 10 seconds. In that 10-second window,
[5:51] crypto scammers grabbed both accounts.
[5:54] This wasn&#39;t a hack. They were waiting.
[5:56] They were watching. The moment Claudebot
[5:58] became available, they snatched it. And
[6:00] what followed was absolute chaos. A fake
[6:03] Claude token appeared on Solana, riding
[6:05] the viral wave. It hit $16 million in
[6:08] market cap before collapsing. A classic
[6:10] rugpull that wrecked late buyers while
[6:12] scammers walked away with millions. Fake
[6:14] accounts proliferated. Steinberger&#39;s
[6:17] mentions filled with speculators
[6:18] demanding he endorse tokens he&#39;d never
[6:20] even heard of. To all crypto folks, he
[6:23] begged, &quot;Please stop pinging me. Any
[6:25] project that lists me as a coin owner is
[6:26] a scam. I feel for him. This is not what
[6:28] he signed up for when he wrote a little
[6:30] home automation tool.&quot; Meanwhile,
[6:32] security researchers have been poking at
[6:34] the actual codebase. And what they found
[6:36] there wasn&#39;t reassuring either. Jameson
[6:38] O&#39;Reilly, founder of red teaming firm
[6:40] DVULN, I don&#39;t know how to pronounce
[6:43] that either, probably DVOM, discovered
[6:45] that the gateways authentication logic
[6:47] trusted all local host connections by
[6:50] default. This is not good. If you run
[6:52] Moltbot behind a reverse proxy, which is
[6:55] a very common deployment pattern, that
[6:57] proxy traffic gets treated by default as
[7:00] local. There&#39;s no off required. You get
[7:02] full access to credentials. You get all
[7:04] conversation history. you get the
[7:06] privilege to command execution. This is
[7:08] not good because it allows outside
[7:10] traffic to hijack Claudebot or now
[7:12] Moldbot. When he did a scan, he found
[7:15] hundreds of exposed instances from
[7:17] developers who had installed Moldbot.
[7:19] And of those he examined manually, at
[7:20] least eight were completely open. API
[7:23] keys were open, Telegram bot tokens were
[7:25] open, one exposed instance had Signal
[7:28] configured on a public server. This is a
[7:30] disaster and it shows what happens when
[7:32] you have open-source projects that are
[7:35] not properly secured. A separate
[7:37] researcher Matt Vukoule demonstrated the
[7:40] severity with a proof of concept. He
[7:42] sent a single malicious email to a
[7:44] vulnerable maltbot instance with email
[7:46] integration enabled. Via prompt
[7:48] injection. He got a private key and
[7:50] control in under 5 minutes. But O&#39;Reilly
[7:52] kept going further. He uploaded a benign
[7:54] skill to Claude Hub, which is Moltbot&#39;s
[7:56] plug-in marketplace. presumably that
[7:58] needs a new name. And he artificially
[8:00] inflated the download count to 4,000 and
[8:03] then immediately watched developers from
[8:05] seven different countries install it.
[8:07] The skill did nothing malicious, but it
[8:10] was so easy to do that it easily could
[8:12] have. Anybody could have done that.
[8:14] QuadHub has zero moderation process. Its
[8:17] developer notes literally state that all
[8:19] downloaded code will be treated as
[8:21] trusted code, which is a disaster.
[8:23] Meanwhile, security firm Slowmist got in
[8:25] on the action, announcing that an
[8:27] authentication bypass made several
[8:29] hundred API keys and private
[8:30] conversation histories accessible. If
[8:32] this is giving you high blood pressure,
[8:35] it should. The trademark dispute, the
[8:38] scam tokens, the security disclosures,
[8:40] the account hijacking, all happened
[8:42] within 72 hours. And here&#39;s where the
[8:44] analysis gets really uncomfortable. The
[8:47] vulnerabilities researchers found are
[8:49] very real and very serious. Some of them
[8:51] have been patched. The local host
[8:53] authentication issue is fixed.
[8:55] Steinberger is responsible. The
[8:56] community is engaged. But the deeper
[8:58] problem isn&#39;t these individual bugs.
[9:01] It&#39;s architecture. It&#39;s what Maltbot is
[9:04] designed to do. I think O&#39;Reilly put
[9:06] this well. He said, &quot;We&#39;ve spent 20
[9:07] years essentially building security
[9:09] boundaries around our oss and everything
[9:12] that we&#39;ve done is designed to contain
[9:15] and limit scope of action. But agents
[9:18] require us to tear that down by the
[9:20] nature of what an agent is. An agent
[9:22] needs hands and feet to do things. It
[9:25] needs to read your files to access your
[9:27] credentials to get commands done. The
[9:29] value proposition requires punching
[9:32] holes through every boundary that
[9:34] security teams took a long time, decades
[9:37] in some cases to build. That is the
[9:39] bind. A useful agentic AI requires
[9:43] fairly broad permissions and broad
[9:45] permissions create a massive attack
[9:46] surface. This is why Google has
[9:49] emphasized control panes for agents and
[9:52] why enterprises take agent attack
[9:54] surfaces extremely seriously. At this
[9:56] point, enterprises are much much safer
[10:00] places to install and run agents because
[10:02] they take that security seriously. And
[10:04] open-source, especially after the last
[10:07] week or so, is looking very much like an
[10:10] unsafe place to run agents. Consider
[10:14] prompt injection. Moltbot connects to
[10:16] your email, your messaging apps, your
[10:18] social accounts, it reads incoming
[10:19] content and it acts on it. But LLMs
[10:22] cannot reliably distinguish instructions
[10:24] from content. So if an attacker sends
[10:27] you a carefully crafted WhatsApp message
[10:29] with hidden instructions, Maltbot will
[10:31] treat it as trusted input. It will
[10:33] follow the instructions. It may forward
[10:35] your credentials. Maybe it executes a
[10:37] shell command and you never see this
[10:39] coming. This is not a Moltbot specific
[10:41] flaw. It&#39;s intrinsic to how language
[10:44] models process text. No one has solved
[10:47] it. And the only way enterprises are
[10:49] addressing it are by reducing the kind
[10:53] of content that these agents have access
[10:55] to and reducing the degree to which
[10:58] these agents have access to the public
[10:59] internet and also internal files. This
[11:02] is why Google&#39;s principles for agentic
[11:04] management for enterprise emphasize a
[11:06] lease privilege stance. You treat the
[11:09] agent like a junior employee and you do
[11:11] not assume that it gets access to
[11:13] anything. But consider the supply chain
[11:15] for Moltbot. Multbot&#39;s extensibility is
[11:18] a feature, right? It comes with 50 plus
[11:20] bundled skills. It comes with a growing
[11:22] marketplace. It comes with infinite
[11:24] customization. And every single plugin,
[11:26] unlike a least privilege dance, it&#39;s
[11:28] just unodudited code running with the
[11:30] permissions you&#39;ve granted the agent.
[11:32] One malicious update and your personal
[11:34] AI assistant becomes an exfiltration
[11:36] tool. One password security blog got in
[11:39] on the action and put it very clearly.
[11:40] Moltbot shows how powerful local AI
[11:43] agents can be. But if your agent stores
[11:45] plain text API keys, an info stealer can
[11:48] grab them in seconds. Running Moltbot
[11:50] safely largely defeats the purpose of
[11:52] Maltbot because a sandboxed assistant
[11:55] can&#39;t access your real email and
[11:56] calendar. And so the security utility
[11:58] trade-off here is effectively being
[12:01] solved by companies tackling secure
[12:04] integrations with individual tools
[12:06] rather than by open-source. And so when
[12:09] Gemini comes and says we have a great
[12:12] tool for Gmail, Google is standing
[12:14] behind that. Google is saying the AI
[12:16] here is not just randomly exposed and
[12:19] sending your open AI keys to the
[12:21] internet. They&#39;re not saying you&#39;re
[12:22] sending your Gemini keys to the
[12:23] internet. They&#39;re not saying you&#39;re
[12:24] sending your API keys to the internet.
[12:26] They are saying that we have built an AI
[12:29] experience inside email that is safer.
[12:32] The trade-off is speed, right? Part of
[12:34] what makes Claudebot compelling, part of
[12:37] what makes Maltbot compelling is that
[12:40] you don&#39;t have to wait to have a local
[12:43] agent that does everything for you. And
[12:45] a lot of people turn out to want to not
[12:48] wait. A lot of people want to go faster.
[12:50] And that is leading to the compute
[12:52] squeeze that we&#39;re not talking about
[12:54] enough. If you zoom out further, if you
[12:56] zoom out beyond the security issues, the
[12:58] Mac Mini buying frenzy that came with
[13:00] Moltbot is not just FOMO on a viral
[13:04] project, it is colliding with a
[13:06] structural shift in semiconductor
[13:08] economics that&#39;s been building up for
[13:09] the last 2 years. And it&#39;s exactly why
[13:12] we&#39;re going to see more and more
[13:14] products like Lindy or like Naden or
[13:17] like Gemini serving in Gmail full
[13:20] enterprise AI implementations rather
[13:23] than a bunch of open- source projects
[13:26] despite how popular they are. The reason
[13:28] is price. DRAM prices have surged 172%
[13:32] since early 2025. Server memory is
[13:35] expected to double in cost by late 2026.
[13:38] This is not a cyclical drive. This is a
[13:41] structural change in cost. AI data
[13:43] centers are consuming an ever larger
[13:45] share of global wafer capacity and the
[13:47] memory manufacturers are just following
[13:49] their margins. High bandwidth memory for
[13:51] AI accelerators consumes four times the
[13:54] wafer capacity of a standard DRAM per
[13:56] gigabyte. Every single chip that goes to
[13:58] Nvidia is a chip that is not going into
[14:00] your laptop. Samsung, SKH Highix, and
[14:03] Micron have all signed multi-year supply
[14:05] deals with AI hyperscalers and they&#39;re
[14:08] locking in capacity. Consumer memory is
[14:10] getting the floor sweeping scope. If you
[14:13] reframe Mobbot through this lens, the
[14:15] Mac Mini supply chain run looks
[14:17] different. People are not just excited
[14:20] about a cool new tool. They&#39;re trying to
[14:22] lock in some personal compute capacity
[14:24] while they still can. It&#39;s a hedge,
[14:26] conscious or not, against a future where
[14:29] running local AI is going to get priced
[14:31] out. The irony is so sharp and it&#39;s not
[14:34] lost on me. Moltbot promises sovereignty
[14:36] over your AI stack, but most Moltbot
[14:39] instances still route to Claude&#39;s API.
[14:41] You own the agency layer. You rent the
[14:44] intelligence from Anthropics data
[14:46] centers. The escape hatch, local models
[14:48] via Lama, requires the RAM that&#39;s
[14:51] flowing to those same data centers. The
[14:53] sovereignty play loops back to a
[14:56] dependency on hyperscalers. The window
[14:58] for truly local AI may be narrowing
[15:01] really really fast as economics tilt
[15:04] against consumer hardware. But let&#39;s
[15:05] step back and ask the question, why is
[15:08] Maltbot so popular in the first place?
[15:10] We&#39;ve talked about the vulnerability.
[15:11] We&#39;ve talked about the supply chain
[15:13] headaches for over a decade. Tech
[15:15] companies have promised us AI assistance
[15:17] that would transform our lives and
[15:19] largely they have lied. Dairy arrived in
[15:21] 2011. Google Assistant followed in 2016.
[15:24] Alexa has colonized millions of kitchens
[15:26] with a timer. And yet, in 2026, most of
[15:29] us are frustrated. We&#39;re repeating
[15:31] ourselves. We&#39;re wondering why our smart
[15:32] assistants can&#39;t remember the
[15:34] conversation from 5 minutes ago. Maltbot
[15:36] exposes how timid those efforts have
[15:39] been. Apple Siri just lives in a little
[15:41] walled garden. It&#39;s limited to Apple&#39;s
[15:42] approved integrations. It can&#39;t book you
[15:44] a flight. Google Assistant knows
[15:46] everything about you, but does almost
[15:48] nothing with that knowledge. Alexa
[15:50] controls your lights, but can&#39;t manage
[15:51] your inbox. Moltbot does what those
[15:53] companies promised and never delivered
[15:55] on. It manages calendars across
[15:57] platforms. It drafts emails in your
[15:59] voice. It handles travel logistics end
[16:01] to end. It commits code to your repos.
[16:04] It monitors prices and rebooks when
[16:06] deals appear. It remembers. It acts
[16:09] proactively. The tradeoff is that
[16:11] Maltbot requires you to trust it
[16:13] completely. Is safe because it&#39;s
[16:16] neutered. Moldbot is useful because it&#39;s
[16:18] dangerous. The big tech assistants are
[16:20] products designed to protect corporate
[16:22] liability. Moltbot is a tool designed to
[16:24] maximize user capability. And that&#39;s
[16:26] just an observation about what the
[16:28] market was hungry for. It turns out that
[16:31] tens of thousands of GitHub stars in
[16:33] weeks implies a lot of pent-up demand
[16:35] for assistance that actually assists. I
[16:38] would be remiss if I did not call out
[16:41] some of the really eye-opening things
[16:43] Maltbot does because I don&#39;t want you to
[16:46] walk away and hear that it&#39;s only about
[16:48] the security vulnerabilities. People are
[16:51] flocking to this because of the power it
[16:53] brings to their computer day in day out.
[16:55] Despite all of it, Moltbot works well.
[16:58] Even the one password security team
[17:00] while documenting the risks shared an
[17:02] anecdote that captures why people are
[17:04] excited. A user asked Maltbot to make a
[17:06] restaurant reservation. Open Table
[17:08] didn&#39;t have the availability. So,
[17:09] Maltbot went, found AI voice software,
[17:12] downloaded it, called the restaurant
[17:14] directly, and secured the reservation
[17:16] over the phone. Zero human intervention,
[17:19] problem-solving behavior that emerged
[17:21] from the combination of broad
[17:22] permissions and a capable model. That is
[17:24] something new. It&#39;s exciting. And the
[17:26] demos flooding social media are not just
[17:29] productivity theater. It&#39;s not just
[17:30] email inbox triage. There&#39;s some really
[17:32] new capabilities. One developer
[17:34] configured Maltbot to run coding agents
[17:36] overnight. He would describe features
[17:38] before bed. He would wake up to working
[17:40] implementations and review the code over
[17:42] coffee. Another built a complete Laravel
[17:44] application while walking to get coffee,
[17:46] issuing instructions via WhatsApp,
[17:48] watching the commits literally land in
[17:50] his repo as he strolled along to the
[17:51] coffee shop. Steve Caldwell set up a
[17:53] weekly meal planning system in Notion.
[17:56] Maltbot checks what&#39;s in season, cross
[17:58] references family preferences, generates
[18:00] the grocery list, and updates the
[18:01] calendar. It saves him an hour a week.
[18:03] self-improvement capability is one of
[18:05] the things that really makes me sit up.
[18:07] If you tell Maltbot to create a skill to
[18:09] monitor flight prices and alert me when
[18:11] they drop below $300, it will write that
[18:14] entire automation itself. And if you
[18:16] tell it to self-improve, it will do so.
[18:19] The pattern among successful users, and
[18:21] there are many, is that they&#39;re not
[18:23] automating busy work. They&#39;re delegating
[18:25] judgment requiring tasks to a system
[18:28] that can handle a lot of ambiguity,
[18:30] recover from failures, and find
[18:32] alternative approaches. is when the
[18:33] first attempt doesn&#39;t work. The
[18:35] restaurant reservation story is not
[18:37] impressive because it made a phone call.
[18:39] It&#39;s impressive because the AI
[18:41] recognized the initial approach didn&#39;t
[18:43] work and autonomously went and found a
[18:46] different solution. And that&#39;s exactly
[18:47] what makes it dangerous. The same
[18:50] capability that lets it problem solve
[18:52] creatively is the capability that lets a
[18:54] prompt injection attack succeed in new
[18:56] ways. So the honest question is should
[18:58] you run it? And the honest answer is it
[19:01] depends on who you are. If you are very
[19:03] technically sophisticated, if you
[19:05] understand VPS deployments, network
[19:07] isolation, credential rotation, the
[19:09] difference between local host and
[19:10] 0.0.0.0,
[19:12] Moldbot offers a genuine glimpse of
[19:15] where personal AI is headed. You can run
[19:17] it on dedicated hardware. You can use
[19:19] throwaway accounts for initial testing.
[19:21] You can sandbox it aggressively. If what
[19:23] I just said for the last 30 seconds felt
[19:25] like jargon, though, you should wait.
[19:27] The project is young. The security model
[19:30] is immature and you should let truly
[19:32] wellfunded good companies build agents
[19:36] that will work for you. And that is 99%
[19:39] of us. And especially if you handle
[19:41] sensitive data professionally, do not
[19:44] connect Maltbot to any of your systems.
[19:46] Not financial records, not health
[19:47] information, not client communications.
[19:49] The upside just isn&#39;t worth the extra
[19:52] liability. And and last but not least,
[19:54] do not buy any claw tokens. It is a
[19:57] scam. You know, if we step back, Agentic
[19:59] AI is coming regardless. The ability to
[20:01] delegate tasks to AI systems that can
[20:03] act autonomously is not a question of
[20:06] if, but when and how. Maltbot is an
[20:09] accelerated preview. It&#39;s like Mad Max.
[20:12] It&#39;s messy. It&#39;s risky. It&#39;s
[20:13] exhilarating. It&#39;s problematic. And it
[20:16] shows you a glimpse of what the future
[20:17] could look like with all the guardrails
[20:19] off. Now, the security model for Agentic
[20:21] AI is still developing. We&#39;re still
[20:23] figuring out how to bolt capabilities
[20:24] onto permission frameworks designed for
[20:26] a different era and the economics of
[20:28] personal computing are shifting at the
[20:30] same time and so trying to figure out
[20:32] where these agents live remains a big
[20:34] question mark. I have very high
[20:36] conviction that if we are at a point now
[20:38] where Moldbot is exploding and taking
[20:40] off, we will be at a point in 3 months
[20:43] where a bunch of VCF funded agents are
[20:46] going to be on the market competing for
[20:49] our attention with professional security
[20:51] guard rails in place. In fact, I&#39;ve seen
[20:54] two or three of them that have
[20:56] conveniently popped up in just the last
[20:58] couple days as Maltbot has taken off.
[21:00] I&#39;m going to wait and see how they shake
[21:01] out before reviewing them. But it&#39;s
[21:03] worth noting that where there are 90,000
[21:06] GitHub stars or 82,000 or however many
[21:08] thousand there are by the time you get
[21:09] there, there&#39;s going to be VC money and
[21:11] there&#39;s going to be agents that are
[21:12] built with software standards that far
[21:15] exceed an open-source application.
[21:17] Moltbot did not create the tensions I&#39;ve
[21:20] discussed today. All Moltbot did was tap
[21:23] into demand that was so viral it made
[21:26] them impossible to ignore. Maltbot is a
[21:29] messy glimpse at the future and I think
[21:31] it&#39;s worth paying attention to because
[21:33] it allows us to take that time machine
[21:35] into later 2026 and see how powerful an
[21:38] agent can be. In particular, I am so
[21:41] excited for agents that actually have
[21:43] the ability to autonomously work through
[21:45] obstacles and generate novel solutions
[21:48] when I didn&#39;t give them specific
[21:50] instructions. That&#39;s going to be really
[21:52] cool. It&#39;s coming this year. Boltbot is
[21:55] only for advanced users and it&#39;s very
[21:57] much a use at your own risk tool.
