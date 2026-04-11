---
title: "The $285B Sell-Off Was Just the Beginning — The Infrastructure Story Is Bigger."
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=O-0poNv2jD4"
video_id: "O-0poNv2jD4"
duration: "29:14"
transcript_method: "youtube-captions"
segment_count: 771
char_count: 29111
status: ingested
topics: []
meta_patterns: []
---

# The $285B Sell-Off Was Just the Beginning — The Infrastructure Story Is Bigger.

**Creator**: nate-jones | **Duration**: 29:14
**URL**: https://www.youtube.com/watch?v=O-0poNv2jD4
**Transcript**: 771 segments, 29111 chars

## Transcript

The most interesting thing about OpenClaw is not the agent, it's the web. The web is forking in the age of agents, and nobody's talking about it enough. Last Tuesday, three things happened within hours of each other. Coinbase launched Agentic Wallets, which are crypto wallets designed not for people, but for agents. Cloudflare shipped Markdown for agents, a feature that automatically converts any website into agent readable markdown when an AI system requests it. And then OpenAI published a developer blog post about skills and shell tools that let agents install software dependencies, run scripts, and write files inside hosted containers. None of these companies coordinated their announcements. They didn't need to. They're all building toward the same future. They all see the open claw phenomenon, and that future is arriving faster than any of them or most of us expected. In the last few videos, I've covered Open Claw's chaotic launch, the emergent behaviors that made researchers rethink agent capability and what thousands of community-built skills reveal about what people actually want from their AI agents. This video is about something bigger than Open Claw. It's about the infrastructure layer that's forming under it and underneath every agent that comes after it. It's about a new kind of web. Every major infrastructure company on the internet is now simultaneously building a different piece of what amounts to an entirely new way for commerce and interaction to get done across the internet. And those pieces are snapping together faster than most of our mental models can track. Let's start with the money. Agents can't do much on the web if they can't pay for things. Coinbase's Agentic Wallet solved this on the crypto side using a protocol called X42 that's already processed over 50 million machineto-achine transactions. Yes, you heard that right, 50 million. The wallets come with programmable spending limits, session caps, and gasless trading on Coinbase's base network. developers can spin one up in under 2 minutes with a command line tool. And the wallets use non-custodial architecture, which means that even if the agent is compromised, the keys themselves sit in secure hardware that the agent cannot access. So the agent can't leak those keys. Within 24 hours of this launch, new AI agents registered wallets on Ethereum. That's not developer experimentation. That's an ecosystem of agents with wallets forming in real time. The use cases that Coinbase highlighted tell you where Coinbase thinks this is going. Agents that autonomously rebalance DeFi portfolios, agents that pay for API calls as they make them. Agents that purchase compute on demand and participate in creator economies. Brian Armstrong's pitch is quote, "The next generation of agents won't just advise, they'll act." Which, like, duh, that's what Open Claw is all about. But this is clearly where he's going. What he did not say is that the architecture implies that agents with wallets will become real economic entities, that can earn, that can spend, and that accumulate capital independently of the humans who created them. That's a category of software that has never existed before. And that is a whole mess of legal problems that we have not encountered yet. Stripe is solving the same problem on the traditional payment side. Their Aenta Commerce suite, which was launched in December, allows businesses to connect a product catalog and start selling through AI agents with a single integration. They built a new payment primitive called shared payment tokens, scoped, time constrained credentials that let an agent initiate a purchase using a buyer saved payment method without ever seeing the card number. Stripe's fraud detection system, radar, had to be retrained from scratch because the old signals were all calibrated for human shopping behavior. Think about what that means. Decades of fraud detection machine learning built on patterns like mouse movement variability, browsing time, session behavior, device fingerprinting, all of it became useless when the buyer is software. Agent traffic doesn't move a mouse. It doesn't browse. It doesn't exhibit the behavioral variability that distinguishes a legitimate shopper from a bot. Stripe had to build an entirely new fraud model for a client that is by any prior definition a bot. And yet now bots are purchasers. Brands including Urban, Etsy, Coach, Kate Spade, and Revolve are all already onboarding. Google is getting in on the action, too. They launched their agent payments protocol back in September. PayPal and OpenAI partnered on instant checkout in chat GPT. Visa built a trusted agent protocol at NRF 2026 which is a conference for this in January. Google announced the universal commerce protocol which is an open standard for agent to commerce interaction and Stripe's ACS immediately auto supports it meaning merchants who integrated Stripe's agent tools are already compatible with Google's agent shopping infrastructure without writing one more line of code. The industry consensus, as a decrypt analyst put it, is quote, "Agents that can't spend money are fundamentally limited," which is true, but there's a whole lot down the road once you do that. Nevertheless, every major payment company reached this conclusion independently within the same couple of month window. But we're not done when we're talking about payments. Let's go over to content access. The web is made of HTML, and HTML is designed for human browsers, not language models. pages are bloated with scripts, tracking pixels, navigation menus, and ads. When an agent needs to read a web page, it has to strip all of that stuff that we humans like out of the way and convert it into something useful. Usually, that's markdown. This is such a common step that an entire category of companies like Firecrawl or Exa exists just to do that conversion. Now, Cloudflare's Markdown for agents cuts out that middleman. When an AI agent requests a page for any Cloudflare enabled site, it sends an accept header and Cloudflare intercepts the request, fetches the HTML from the origin server, converts it to markdown on the fly, and serves it back. The response even includes an X markdown tokens header with the estimated token count, so the agent can manage its own context window. No scraping anymore, no conversion libraries, no wasted compute. The agent just asks for markdown and gets markdown. This matters a lot more than it might sound. Cloudflare serves roughly 20% of the web. when they decide agents are first class citizens of the web, which is what they just did. When they decide agents are not to be blocked, but rather clients who should be served in their preferred format, markdown, Cloudflare is making an infrastructure level commitment to a world where software reads websites as routinely as humans do. And Cloudflare isn't stopping at markdown conversion. They launched three companion features in the same release. First, LLM.ext text and LLM's full.ext, which are standardized machine readable site maps that tell agents what's on a site and how to navigate it. Just like robots.ext told search engine crawlers the exact same thing two decades ago. Second, Cloudflare launched AI index. It's an opt-in search index where sites can make their content discoverable to agents directly through Cloudflare's MCP server and search API. And that means they can bypass Google entirely. Third and most telling, Cloudflare is including builtin X42 monetization support. So site owners can charge agents for content access using the exact same protocol as Coinbase's wallets. Cloudflare isn't just making the web readable for agents. They're building an economic layer for a web where agents pay to access content. Then there's search. Google search is optimized for humans, obviously. 10 blue links, ads, featured snippets, knowledge panels. Recently, they added AI summaries. None of that is useful to an agent that needs to programmatically find specific information and then come back with structured data. Exa.ai built a search engine from scratch specifically for agents, their own index, their own neural retrieval models, their own embedding infrastructure. Their API returns raw URLs and content, not search engine result pages. Their research endpoint chains multiple searches together. agentically parallelizing across output fields to minimize latency. It scores 95% on simple QA, a benchmark for factual accuracy. For comparison, perplexity scores lower. So, if you're thinking, is this going to be a new bar for accurate agentic search? You would be right. But the benchmark results are much less interesting than what this is all implying about the future of internet market structures. Google built a search engine for humans and spent decades perfecting it. Now there's a parallel need search for machines and Google's architecture is the wrong shape for that. The companies that build agent native search from first principles have an actual structural advantage, not just a marketing one. An independent benchmark from AI multiple tested the major agent search providers head-to-head. If search led on a composite agent score, Firecrawl, Exa, and Parallel Pro were statistically tied behind it. But the latency spread tells you where the real differentiation is starting to live. In an agent workflow, Brave returned results in 669 milliseconds, which is about 2/3 of a second. Parallel Pro took 13.6 whole seconds. In an agent workflow where each search is one step in a long chain, that latency difference compounds into minutes really, really fast. The providers that own their own infrastructure and their own agentic index rather than wrapping Google's API have a structural speed advantage that grows much more valuable as agent workflows get more complex. And guess what? They're going to in 2026. And then there's execution. Openai's blog post on skills, shell, and compaction reads like a road map for turning agents into advisors and workers. Skills are reusable version instruction bundles. We've heard about them from Claude before. I've talked about them a fair bit. Think of them as standard operating procedures for AI for a particular task. An agent can load them on demand, immediately learn the skill, and get going. The shell tool gives agents a real terminal environment where they can install dependencies, run scripts, and write output files. Compaction manages the context window automatically so that longunning agent workflows don't crash when they hit token limits. The details matter here because they reveal OpenAI's bet about what agent architecture actually is going to look like in production. Skills aren't prompts. They're versioned. They're mountable instruction packages. They look more like Docker images than chat templates. An organization can build a Salesforce skill, test it, lock down the version, and deploy it across every agent in the company with a guarantee that every agent follows the same procedure. When the procedure changes, you just update that skill version and every single agent will follow. You don't have to mess with CIS prompts or anything else. That's the difference between arteasonal prompt engineering and actual software engineering applied to AI operations. The shell tool is equally telling. It gives agents a real Linux environment, not a sandbox playground, but a terminal where they can write files to disk and type commands like install, curl, and grap. The pattern OpenAI describes installing dependencies, fetching external data, producing a real deliverable that is functionally identical to how a human freelancer works today. Human freelancers read the brief, set up the tools, do the research, and deliver the artifact. So do agents. The difference is the agent can now do it inside a container in just a few seconds. And skills ensure that it follows the same procedure every single time. Glean is an enterprise search company and it was an early skills customer and they saw accuracy on Salesforce related tasks jump from 73 to 85% with a single well ststructured skill. At the same time it got faster because the agent wasn't thinking about what to do and they saw about an 18% decrease in time to first token which matters when every single query counts. The gains come from moving stable procedures out of system prompt and into versioned modular instruction bundles which is frankly again just software engineering applied to AI workflows. We're not reinventing the wheel here. Nothing revolutionary. Everything that is revolutionary comes from second order effects. All we're doing is a classic enterprise deployment except we're doing it with AI. We now have version control, testing, roll back. That part isn't new. The part that's new is that we're doing all of this for autonomous AI agents. Last but not least, they launched compaction, which is not a particularly flashy feature, but which is super important to support longunning workflows. Any agent running for a while accumulates pages of search results, API responses, calculations, conversation history, and the context window gets dirty. It fills up. The agent starts to forget earlier steps or drift. The agent may crash. Compaction handles all of this server side and automatically summarizes and compresses the context to keep the agent operational across workflows that would otherwise be impossible. It's the kind of feature that makes agents viable for tasks that take longer, like hours instead of just a few minutes. And that kind of sustained multi-step work at scale redefineses how easily you can roll out agents across an enterprise environment. So let's step back. What happens when you combine all of the different primitives I have been talking about here? An agent that has a wallet, search capabilities, content access, payment rails, and an execution environment is more than an assistant. It is an economic actor. Consider what a developer calling himself chat app demonstrated on X this week. He connected OpenClaw to Cance 2.0, which is a video generation model inside an app called Chatcut. Then he sent the agent an Amazon product link. The agent crawled the Amazon page, extracted product info and photos, identified which assets were suitable for video generation, fed them into seed dance, which is an incredible video model, and produced a userenerated content style product video. The kind of content that brands pay creators a,000 bucks to produce. No human touched any step between paste this link and here's your video. I watched it. It looks pretty good. That is the emergent web. Not agent doing a task, but agents chaining capabilities together across services to produce outputs that previously required multiple humans and multiple tools. The Amazon page wasn't designed for agents. Cance 2.0 actually wasn't designed to receive input from web crawlers. Chatcut wasn't designed as an orchestration layer, but because each piece exposes its capabilities through APIs and structured data, the agent can [clears throat] stitch them together into a workflow that no individual company planned. This is the pattern that the infrastructure convergence makes inevitable. When content is available as markdown, search returns structured data, execution happens in containers, and payment flows through tokenized protocols. So the agent doesn't need anybody to build an integration between A and B. It can read both services, understand both, and chain them together on the fly. The emergent web is therefore not a platform that any one person is going to build. It's what happens automatically when the primitives exist and the agent is smart enough to combine them together. And the agents increasingly are. The implications for the creator economy alone are staggering. The UGC product video would have cost, you know, a thousand bucks and the agent can replicate that workflow from one link, not maybe with human creative judgment, but at a cost that approaches zero and a turnaround time measured in a couple of minutes. If you multiply that by every content type that follows a repeatable pattern, like product descriptions, social media posts, email campaigns, comparison articles, you start to see why the infrastructure companies are building for a scale that isn't there yet. They are seeing a world where this kind of emergent agent behavior is the norm, the default, not just a weird demo from a guy on X. Poly Market provides the most provocative case study of where this goes. The prediction market platform processed $12 billion in volume in January 2026 alone. Researchers from IMDIA Networks Institute analyzed 86 million bets and found that algorithmic traders extracted roughly $40 million in arbitrage profits over a 12-month period. The top three wallets placed over $10,000 bets combined. Only half a% of all Poly Market users earned more than $1,000. The rest were effectively just providing liquidity for bots to extract value. And here's where it gets even more interesting. Poly Market itself tweeted in early February of this year that quote autonomous AI agents are now trading on Poly Market in an attempt to subsidize their token costs. Agents are trying to earn money to pay for their own compute. The loop is closing. Meanwhile, the data on how well agents are doing is mixed but illuminating. OLAS protocols Poly Strat agents among the most sophisticated autonomous prediction market systems that are being publicly tracked achieve maybe 55 to 65% win rates over time with performance varying really dramatically by domain. Agents tend to be better at predicting things that follow from data rather than things that follow from culture, which is not surprising. It tells you the kind of economic activity that agents are really well suited for versus the kind that maybe humans are well suited for. I'm not sure we'll see an agent doing the Met Gala anytime soon. The cumulative volume of AI trades on Poly Market is continuing to grow. It's just going to when you have AI agents by the thousand registering for wallets and trying to start getting into currency. This is where the scam also lives. The talk right now is flooded with videos of people claiming to turn, I don't know, 50 bucks into 3,000 bucks in a couple of days. These videos get thousands of likes. These videos get thousands of bookmarks. People are clearly hungry for the words AI and make money in the same video. The reality is considerably less glamorous. The bot that famously turned $313 into $438,000 in a month was running latency arbitrage, exploiting a millisecond gap between when Bitcoin moved on Binance and when Polyarket odds adjusted. That kind of algorithmic trading is not what your open claw bot is going to be able to do. That is highfrequency trading which has been known in finance circles for a long time and is just being applied to poly market as the market matures. It requires really fancy setups like colllocated infrastructure with sub 10 millisecond latency. It requires capital that is a whole lot larger than any Tik Tok video would suggest. And if you try and do it with something like an openclaw agent, you're going to run into real costs. One developer who actually built and tested an autonomous polymarket agent reported that Cloudflare blocks API requests from data center IPs and requires custom bypass infrastructure just to place orders. Another one found that running the bot for just a couple of days racked up 200 bucks in API fees alone. So yes, sophisticated autonomous trading agents can generate returns on Poly Market. No, you cannot replicate this with your open claw by feeding it a Tik Tok tutorial. The infrastructure requirements, the API costs, and the competitive dynamics make this a game for well- capitalized tech operators, not retail experimenters. But the underlying premise, the thing we've been talking about all video, the idea that agents can participate in economic activity and generate revenue, that is not a scam. That is the direction that Coinbase, Stripe, Google, PayPal, Visa, and OpenAI are all aggressively building toward simultaneously with billions of dollars in infrastructure investment. The question isn't whether agents will be able to transact autonomously. The question is whether guardrails will be built fast enough to prevent very predictable disasters. I covered openclaw security nightmare in detail in my first video. The one-click remote code execution, malicious skills disguised as crypto tools, Cisco's research team finding data xfiltration in a third party skill. I'm not going to rehash all of that. What I want to focus on instead is the structural problem that those incidents illustrate because it scales with the infrastructure for agent commerce. Every primitive that makes agents more capable also makes them more dangerous. An agent with a wallet can pay for APIs or get drained by a malicious skill. An agent with shell access can install dependencies or execute arbitrary code injected through a prompt. An agent with search can find information or be redirected to adversarial content designed to manipulate his behavior. And last but not least, an agent with Cloudflare served Markdown can read websites or consume poison content at machine speed. It's kind of your choice. The security community is already responding to the threats that come with these new primitives. And the responses are instructive because they reveal what serious people think the real attack surface is going to look like for agents. Ironclaw is a rustbased re-implementation of OpenClaw by near.ai co-founder Ilia Polosukin and it sandboxes every single tool that OpenClaw uses into isolated web assembly environments. Assumption being that any tool an agent touches is a potential compromise vector. OpenAI's shell tool meanwhile includes org level and request level network allow lists, domain secrets that prevent credential leakage and container isolation. The assumption being that agents will run untrusted code and the environment must contain the blast radius. Coinbase's agentic wallets use enclave isolation for private keys and programmable spending guardrails. The assumption there being that the agent itself cannot be fully trusted with the assets it manages. Notice the pattern across all of these. Every serious security approach treats the agent as a potential adversary. That is the correct approach. It does not treat the agent like a trusted employee. That is the right mental model for where we're at at this point in 2026. And it's one that most of the Tik Tok buzz tutorial crowd has not internalized. Look, agents have existed for a while now. APIs have existed for decades. The concept of software transacting with software predates the web itself. What's new is all of these factors converging to make the agentic web. In the span of just a few months, every layer of the stack went from concept to production to infrastructure. Money, content, search, execution, identity is all in production now simultaneously. The web is starting to fork. There's the human web, the one you're reading right now or listening to a video on right now with fonts and layouts and images and scroll animations. And at the same time, in parallel, on another fork, there's the agent web, a parallel layer of APIs, structured data, markdown content, payment protocols, and execution environments designed for software that will never open a browser. These two webs run on the same physical infrastructure, the same servers, the same CDNs, the same payment rails, but they serve fundamentally different clients with different needs. A human, we want a beautiful product page. An agent, they want a JSON payload with the price, the availability, and the payment endpoint. A human might want search results they can browse. An agent just wants structured data to act on. You get the idea. A human wants a checkout flow with trust signals. the agent just wants tokenized payment primitives and will be getting on with its day. The analogy that keeps coming to mind for me as I look at this is the early mobile web. In 2007 when the iPhone launched, the web already existed. It worked on phones technically, but it was designed for desktops and the experience I can testify was terrible. What followed was a decade long rebuild for the mobile web. responsive design, mobile first frameworks, app stores, push notifications, GPSware services, tap to pay. The underlying infrastructure was the same, but the interface layer forked completely. The companies that recognized the fork early, that built for the new client instead of trying to make the old interface work on the new device, those were the ones that built the dominant platforms of the next era. We are at the same inflection point today except the new client isn't a smaller screen. It's not a screen at all. It's software that reads, decides, pays, and acts. The interface it needs isn't visual. It's structured. It's programmable. It's transactional. And the companies building that interface right now, they're not the startups that are hoping to get lucky. They're the big boys. They're Coinbase, Stripe, Cloudflare, Google, OpenAI, Visa, PayPal. companies with the infrastructure, scale, and distribution to make their design decisions into de facto web standards. The mobile fork created trillion-dollar companies, right? It created Uber, Instagram, WhatsApp, Snap. They would not have existed on the desktop web. Not because the desktop web lacked capabilities, but because it lacked the interface primitives that mobile clients really needed. It lacked real-time location, always on connectivity, camera first interaction, push notifications, tap to pay at physical registers. The agent fork is going to do the same thing again in the 2020s. The businesses that emerge from it will be the ones that could not have existed on the human web, not because the human web lacks information, but because it lacks the interface primitives that agent clients really need. structured data, tokenized payments, machine readable content, programmatic search, execution environments. In my last video on Open Claw, I talked about the 7030 rule. The idea that people consistently want to maintain maybe roughly 70% human control of agent delegated tasks. That's the demand side. That's the human side of the story, right? This video has really been about the supply side of the story, the agent side of the story. And that side doesn't care about our 7030 split or what kind of control we want to maintain. The infrastructure that is being built right now that I have spent this video talking about assumes a 0 world. Fully autonomous agents with their own wallets, their own search capabilities, their own execution environments, and their own economic relationships with the services they use. The gap between the infrastructure being built and the trust people are willing to extend to agents is the central tension of the next few years in AI. Every company in the agent stack is betting that trust will catch up to the capabilities that are being built today. And every security incident that we see, especially with the open claw story, things like claw havoc, like the 500 message iMessage disaster, reduction databases being wiped by unsupervised agents, those kinds of stories push the timeline of trust back even though they don't stop people trying agents. For now, the agent web is really small. Developers running OpenClaw on Mac minis and VPS instances, AI shopping assistants placing orders through Stripes ACPs. But I want to call out that small now does not mean small later. Because of how quickly Open Claw is growing because of how much venture funding is going into agents in 2026, we are likely to see explosive growth in this new branch of the web in 2026. I don't know if a fully realized agentic web arrives in 3 months, 3 weeks, or 2 years. That's an open question. that it's being built is not a question and I increasingly have no doubt we are headed toward a world where agents are as ubiquitous on the web as people. It is up to us to shape those web standards so they work well for both agents and people. And it's up to us to make sure the primitives that we build like payments, like security, are robust enough that we actually can trust agent operations and agent economics, the way we've learned to trust other humans for commerce over the web. Without that base layer of trust, the future of the agentic web may be still born. And that is the thing I want to leave you with. What is going to build trust in the agentic web? And as much as these companies are investing in primitives, the primitive of trust is something that we are going to have to see realized over time by good faith actors who are building for a future where both humans and agents work on the web together. If you know of someone building in that space, pop them in the comments. I'd love to see them. Best of luck out there and uh enjoy the wild agentic web. It's going to be a crazy decade. Cheers.

## Timed Segments

[0:00] The most interesting thing about
[0:01] OpenClaw is not the agent, it&#39;s the web.
[0:04] The web is forking in the age of agents,
[0:07] and nobody&#39;s talking about it enough.
[0:09] Last Tuesday, three things happened
[0:11] within hours of each other. Coinbase
[0:12] launched Agentic Wallets, which are
[0:14] crypto wallets designed not for people,
[0:16] but for agents. Cloudflare shipped
[0:18] Markdown for agents, a feature that
[0:20] automatically converts any website into
[0:22] agent readable markdown when an AI
[0:24] system requests it. And then OpenAI
[0:26] published a developer blog post about
[0:28] skills and shell tools that let agents
[0:30] install software dependencies, run
[0:31] scripts, and write files inside hosted
[0:34] containers. None of these companies
[0:36] coordinated their announcements. They
[0:38] didn&#39;t need to. They&#39;re all building
[0:40] toward the same future. They all see the
[0:43] open claw phenomenon, and that future is
[0:45] arriving faster than any of them or most
[0:47] of us expected. In the last few videos,
[0:50] I&#39;ve covered Open Claw&#39;s chaotic launch,
[0:52] the emergent behaviors that made
[0:54] researchers rethink agent capability and
[0:57] what thousands of community-built skills
[0:59] reveal about what people actually want
[1:01] from their AI agents. This video is
[1:04] about something bigger than Open Claw.
[1:06] It&#39;s about the infrastructure layer
[1:08] that&#39;s forming under it and underneath
[1:10] every agent that comes after it. It&#39;s
[1:12] about a new kind of web. Every major
[1:15] infrastructure company on the internet
[1:16] is now simultaneously building a
[1:19] different piece of what amounts to an
[1:21] entirely new way for commerce and
[1:24] interaction to get done across the
[1:26] internet. And those pieces are snapping
[1:28] together faster than most of our mental
[1:30] models can track. Let&#39;s start with the
[1:32] money. Agents can&#39;t do much on the web
[1:33] if they can&#39;t pay for things. Coinbase&#39;s
[1:35] Agentic Wallet solved this on the crypto
[1:38] side using a protocol called X42 that&#39;s
[1:41] already processed over 50 million
[1:43] machineto-achine transactions. Yes, you
[1:45] heard that right, 50 million. The
[1:47] wallets come with programmable spending
[1:49] limits, session caps, and gasless
[1:51] trading on Coinbase&#39;s base network.
[1:53] developers can spin one up in under 2
[1:55] minutes with a command line tool. And
[1:56] the wallets use non-custodial
[1:58] architecture, which means that even if
[1:59] the agent is compromised, the keys
[2:02] themselves sit in secure hardware that
[2:05] the agent cannot access. So the agent
[2:07] can&#39;t leak those keys. Within 24 hours
[2:10] of this launch,
[2:12] new AI agents registered wallets on
[2:14] Ethereum. That&#39;s not developer
[2:16] experimentation. That&#39;s an ecosystem of
[2:19] agents with wallets forming in real
[2:21] time. The use cases that Coinbase
[2:23] highlighted tell you where Coinbase
[2:25] thinks this is going. Agents that
[2:27] autonomously rebalance DeFi portfolios,
[2:30] agents that pay for API calls as they
[2:32] make them. Agents that purchase compute
[2:35] on demand and participate in creator
[2:37] economies. Brian Armstrong&#39;s pitch is
[2:39] quote, &quot;The next generation of agents
[2:41] won&#39;t just advise, they&#39;ll act.&quot; Which,
[2:43] like, duh, that&#39;s what Open Claw is all
[2:45] about. But this is clearly where he&#39;s
[2:47] going. What he did not say is that the
[2:49] architecture implies that agents with
[2:51] wallets will become real economic
[2:53] entities, that can earn, that can spend,
[2:56] and that accumulate capital
[2:58] independently of the humans who created
[3:00] them. That&#39;s a category of software that
[3:03] has never existed before. And that is a
[3:05] whole mess of legal problems that we
[3:07] have not encountered yet. Stripe is
[3:08] solving the same problem on the
[3:10] traditional payment side. Their Aenta
[3:12] Commerce suite, which was launched in
[3:14] December, allows businesses to connect a
[3:16] product catalog and start selling
[3:18] through AI agents with a single
[3:20] integration. They built a new payment
[3:22] primitive called shared payment tokens,
[3:25] scoped, time constrained credentials
[3:28] that let an agent initiate a purchase
[3:30] using a buyer saved payment method
[3:32] without ever seeing the card number.
[3:34] Stripe&#39;s fraud detection system, radar,
[3:36] had to be retrained from scratch because
[3:39] the old signals were all calibrated for
[3:42] human shopping behavior. Think about
[3:44] what that means. Decades of fraud
[3:46] detection machine learning built on
[3:48] patterns like mouse movement
[3:50] variability, browsing time, session
[3:53] behavior, device fingerprinting, all of
[3:56] it became useless when the buyer is
[3:59] software. Agent traffic doesn&#39;t move a
[4:02] mouse. It doesn&#39;t browse. It doesn&#39;t
[4:04] exhibit the behavioral variability that
[4:06] distinguishes a legitimate shopper from
[4:08] a bot. Stripe had to build an entirely
[4:10] new fraud model for a client that is by
[4:13] any prior definition a bot. And yet now
[4:16] bots are purchasers. Brands including
[4:18] Urban, Etsy, Coach, Kate Spade, and
[4:20] Revolve are all already onboarding.
[4:23] Google is getting in on the action, too.
[4:25] They launched their agent payments
[4:26] protocol back in September. PayPal and
[4:28] OpenAI partnered on instant checkout in
[4:31] chat GPT. Visa built a trusted agent
[4:33] protocol at NRF 2026 which is a
[4:36] conference for this in January. Google
[4:38] announced the universal commerce
[4:39] protocol which is an open standard for
[4:41] agent to commerce interaction and
[4:43] Stripe&#39;s ACS immediately auto supports
[4:46] it meaning merchants who integrated
[4:47] Stripe&#39;s agent tools are already
[4:49] compatible with Google&#39;s agent shopping
[4:51] infrastructure without writing one more
[4:53] line of code. The industry consensus, as
[4:55] a decrypt analyst put it, is quote,
[4:57] &quot;Agents that can&#39;t spend money are
[4:59] fundamentally limited,&quot; which is true,
[5:02] but there&#39;s a whole lot down the road
[5:03] once you do that. Nevertheless, every
[5:06] major payment company reached this
[5:08] conclusion independently within the same
[5:10] couple of month window. But we&#39;re not
[5:12] done when we&#39;re talking about payments.
[5:13] Let&#39;s go over to content access. The web
[5:15] is made of HTML, and HTML is designed
[5:18] for human browsers, not language models.
[5:21] pages are bloated with scripts, tracking
[5:23] pixels, navigation menus, and ads. When
[5:26] an agent needs to read a web page, it
[5:29] has to strip all of that stuff that we
[5:30] humans like out of the way and convert
[5:32] it into something useful. Usually,
[5:34] that&#39;s markdown. This is such a common
[5:36] step that an entire category of
[5:38] companies like Firecrawl or Exa exists
[5:41] just to do that conversion. Now,
[5:43] Cloudflare&#39;s Markdown for agents cuts
[5:46] out that middleman. When an AI agent
[5:47] requests a page for any Cloudflare
[5:50] enabled site, it sends an accept header
[5:53] and Cloudflare intercepts the request,
[5:55] fetches the HTML from the origin server,
[5:57] converts it to markdown on the fly, and
[6:00] serves it back. The response even
[6:02] includes an X markdown tokens header
[6:04] with the estimated token count, so the
[6:07] agent can manage its own context window.
[6:10] No scraping anymore, no conversion
[6:12] libraries, no wasted compute. The agent
[6:15] just asks for markdown and gets
[6:17] markdown. This matters a lot more than
[6:19] it might sound. Cloudflare serves
[6:21] roughly 20% of the web. when they decide
[6:24] agents are first class citizens of the
[6:27] web, which is what they just did. When
[6:29] they decide agents are not to be
[6:31] blocked, but rather clients who should
[6:33] be served in their preferred format,
[6:35] markdown, Cloudflare is making an
[6:38] infrastructure level commitment to a
[6:40] world where software reads websites as
[6:43] routinely as humans do. And Cloudflare
[6:46] isn&#39;t stopping at markdown conversion.
[6:48] They launched three companion features
[6:50] in the same release. First, LLM.ext text
[6:53] and LLM&#39;s full.ext, which are
[6:55] standardized machine readable site maps
[6:57] that tell agents what&#39;s on a site and
[6:59] how to navigate it. Just like robots.ext
[7:02] told search engine crawlers the exact
[7:04] same thing two decades ago. Second,
[7:07] Cloudflare launched AI index. It&#39;s an
[7:10] opt-in search index where sites can make
[7:12] their content discoverable to agents
[7:14] directly through Cloudflare&#39;s MCP server
[7:16] and search API. And that means they can
[7:19] bypass Google entirely. Third and most
[7:22] telling, Cloudflare is including builtin
[7:25] X42 monetization support. So site owners
[7:28] can charge agents for content access
[7:31] using the exact same protocol as
[7:34] Coinbase&#39;s wallets. Cloudflare isn&#39;t
[7:37] just making the web readable for agents.
[7:39] They&#39;re building an economic layer for a
[7:42] web where agents pay to access content.
[7:45] Then there&#39;s search. Google search is
[7:47] optimized for humans, obviously. 10 blue
[7:49] links, ads, featured snippets, knowledge
[7:52] panels. Recently, they added AI
[7:53] summaries. None of that is useful to an
[7:56] agent that needs to programmatically
[7:58] find specific information and then come
[8:00] back with structured data. Exa.ai built
[8:03] a search engine from scratch
[8:04] specifically for agents, their own
[8:06] index, their own neural retrieval
[8:08] models, their own embedding
[8:09] infrastructure. Their API returns raw
[8:12] URLs and content, not search engine
[8:14] result pages. Their research endpoint
[8:16] chains multiple searches together.
[8:18] agentically parallelizing across output
[8:20] fields to minimize latency. It scores
[8:23] 95% on simple QA, a benchmark for
[8:26] factual accuracy. For comparison,
[8:29] perplexity scores lower. So, if you&#39;re
[8:31] thinking, is this going to be a new bar
[8:33] for accurate agentic search? You would
[8:35] be right. But the benchmark results are
[8:37] much less interesting than what this is
[8:39] all implying about the future of
[8:41] internet market structures. Google built
[8:43] a search engine for humans and spent
[8:45] decades perfecting it. Now there&#39;s a
[8:48] parallel need search for machines and
[8:50] Google&#39;s architecture is the wrong shape
[8:53] for that. The companies that build agent
[8:56] native search from first principles have
[8:58] an actual structural advantage, not just
[9:01] a marketing one. An independent
[9:03] benchmark from AI multiple tested the
[9:05] major agent search providers
[9:07] head-to-head. If search led on a
[9:09] composite agent score, Firecrawl, Exa,
[9:11] and Parallel Pro were statistically tied
[9:13] behind it. But the latency spread tells
[9:16] you where the real differentiation is
[9:17] starting to live. In an agent workflow,
[9:20] Brave returned results in 669
[9:22] milliseconds, which is about 2/3 of a
[9:24] second. Parallel Pro took 13.6
[9:29] whole seconds. In an agent workflow
[9:31] where each search is one step in a long
[9:34] chain, that latency difference compounds
[9:37] into minutes really, really fast. The
[9:39] providers that own their own
[9:41] infrastructure and their own agentic
[9:43] index rather than wrapping Google&#39;s API
[9:45] have a structural speed advantage that
[9:48] grows much more valuable as agent
[9:50] workflows get more complex. And guess
[9:52] what? They&#39;re going to in 2026. And then
[9:54] there&#39;s execution. Openai&#39;s blog post on
[9:57] skills, shell, and compaction reads like
[9:59] a road map for turning agents into
[10:01] advisors and workers. Skills are
[10:04] reusable version instruction bundles.
[10:06] We&#39;ve heard about them from Claude
[10:07] before. I&#39;ve talked about them a fair
[10:09] bit. Think of them as standard operating
[10:11] procedures for AI for a particular task.
[10:13] An agent can load them on demand,
[10:15] immediately learn the skill, and get
[10:16] going. The shell tool gives agents a
[10:19] real terminal environment where they can
[10:20] install dependencies, run scripts, and
[10:23] write output files. Compaction manages
[10:25] the context window automatically so that
[10:27] longunning agent workflows don&#39;t crash
[10:30] when they hit token limits. The details
[10:32] matter here because they reveal OpenAI&#39;s
[10:34] bet about what agent architecture
[10:36] actually is going to look like in
[10:38] production. Skills aren&#39;t prompts.
[10:41] They&#39;re versioned. They&#39;re mountable
[10:43] instruction packages. They look more
[10:45] like Docker images than chat templates.
[10:47] An organization can build a Salesforce
[10:49] skill, test it, lock down the version,
[10:51] and deploy it across every agent in the
[10:53] company with a guarantee that every
[10:55] agent follows the same procedure. When
[10:58] the procedure changes, you just update
[11:00] that skill version and every single
[11:02] agent will follow. You don&#39;t have to
[11:03] mess with CIS prompts or anything else.
[11:05] That&#39;s the difference between arteasonal
[11:07] prompt engineering and actual software
[11:10] engineering applied to AI operations.
[11:12] The shell tool is equally telling. It
[11:14] gives agents a real Linux environment,
[11:16] not a sandbox playground, but a terminal
[11:19] where they can write files to disk and
[11:21] type commands like install, curl, and
[11:24] grap. The pattern OpenAI describes
[11:26] installing dependencies, fetching
[11:28] external data, producing a real
[11:30] deliverable that is functionally
[11:32] identical to how a human freelancer
[11:35] works today. Human freelancers read the
[11:37] brief, set up the tools, do the
[11:39] research, and deliver the artifact. So
[11:41] do agents. The difference is the agent
[11:44] can now do it inside a container in just
[11:46] a few seconds. And skills ensure that it
[11:49] follows the same procedure every single
[11:52] time. Glean is an enterprise search
[11:54] company and it was an early skills
[11:55] customer and they saw accuracy on
[11:58] Salesforce related tasks jump from 73 to
[12:01] 85% with a single well ststructured
[12:03] skill. At the same time it got faster
[12:05] because the agent wasn&#39;t thinking about
[12:07] what to do and they saw about an 18%
[12:09] decrease in time to first token which
[12:12] matters when every single query counts.
[12:15] The gains come from moving stable
[12:17] procedures out of system prompt and into
[12:19] versioned modular instruction bundles
[12:22] which is frankly again just software
[12:24] engineering applied to AI workflows.
[12:26] We&#39;re not reinventing the wheel here.
[12:28] Nothing revolutionary. Everything that
[12:30] is revolutionary comes from second order
[12:32] effects. All we&#39;re doing is a classic
[12:35] enterprise deployment except we&#39;re doing
[12:37] it with AI. We now have version control,
[12:40] testing, roll back. That part isn&#39;t new.
[12:42] The part that&#39;s new is that we&#39;re doing
[12:44] all of this for autonomous AI agents.
[12:47] Last but not least, they launched
[12:48] compaction, which is not a particularly
[12:50] flashy feature, but which is super
[12:52] important to support longunning
[12:54] workflows. Any agent running for a while
[12:56] accumulates pages of search results, API
[12:59] responses, calculations, conversation
[13:01] history, and the context window gets
[13:03] dirty. It fills up. The agent starts to
[13:06] forget earlier steps or drift. The agent
[13:08] may crash. Compaction handles all of
[13:10] this server side and automatically
[13:13] summarizes and compresses the context to
[13:15] keep the agent operational across
[13:17] workflows that would otherwise be
[13:18] impossible. It&#39;s the kind of feature
[13:20] that makes agents viable for tasks that
[13:23] take longer, like hours instead of just
[13:25] a few minutes. And that kind of
[13:27] sustained multi-step work at scale
[13:29] redefineses how easily you can roll out
[13:32] agents across an enterprise environment.
[13:34] So let&#39;s step back. What happens when
[13:36] you combine all of the different
[13:38] primitives I have been talking about
[13:40] here? An agent that has a wallet, search
[13:42] capabilities, content access, payment
[13:45] rails, and an execution environment is
[13:47] more than an assistant. It is an
[13:50] economic actor. Consider what a
[13:52] developer calling himself chat app
[13:54] demonstrated on X this week. He
[13:56] connected OpenClaw to Cance 2.0, which
[13:59] is a video generation model inside an
[14:01] app called Chatcut. Then he sent the
[14:03] agent an Amazon product link. The agent
[14:06] crawled the Amazon page, extracted
[14:08] product info and photos, identified
[14:11] which assets were suitable for video
[14:13] generation, fed them into seed dance,
[14:15] which is an incredible video model, and
[14:17] produced a userenerated content style
[14:20] product video. The kind of content that
[14:22] brands pay creators a,000 bucks to
[14:25] produce. No human touched any step
[14:28] between paste this link and here&#39;s your
[14:30] video. I watched it. It looks pretty
[14:33] good. That is the emergent web. Not
[14:35] agent doing a task, but agents chaining
[14:38] capabilities together across services to
[14:41] produce outputs that previously required
[14:44] multiple humans and multiple tools. The
[14:46] Amazon page wasn&#39;t designed for agents.
[14:49] Cance 2.0 actually wasn&#39;t designed to
[14:52] receive input from web crawlers. Chatcut
[14:55] wasn&#39;t designed as an orchestration
[14:57] layer, but because each piece exposes
[15:00] its capabilities through APIs and
[15:02] structured data, the agent can
[15:03] [clears throat] stitch them together
[15:04] into a workflow that no individual
[15:07] company planned. This is the pattern
[15:09] that the infrastructure convergence
[15:11] makes inevitable. When content is
[15:14] available as markdown, search returns
[15:16] structured data, execution happens in
[15:18] containers, and payment flows through
[15:20] tokenized protocols. So the agent
[15:22] doesn&#39;t need anybody to build an
[15:24] integration between A and B. It can read
[15:26] both services, understand both, and
[15:29] chain them together on the fly. The
[15:31] emergent web is therefore not a platform
[15:33] that any one person is going to build.
[15:35] It&#39;s what happens automatically when the
[15:38] primitives exist and the agent is smart
[15:40] enough to combine them together. And the
[15:42] agents increasingly are. The
[15:44] implications for the creator economy
[15:46] alone are staggering. The UGC product
[15:49] video would have cost, you know, a
[15:50] thousand bucks and the agent can
[15:52] replicate that workflow from one link,
[15:54] not maybe with human creative judgment,
[15:56] but at a cost that approaches zero and a
[15:59] turnaround time measured in a couple of
[16:00] minutes. If you multiply that by every
[16:03] content type that follows a repeatable
[16:05] pattern, like product descriptions,
[16:06] social media posts, email campaigns,
[16:09] comparison articles, you start to see
[16:12] why the infrastructure companies are
[16:14] building for a scale that isn&#39;t there
[16:15] yet. They are seeing a world where this
[16:18] kind of emergent agent behavior is the
[16:21] norm, the default, not just a weird demo
[16:24] from a guy on X. Poly Market provides
[16:26] the most provocative case study of where
[16:28] this goes. The prediction market
[16:30] platform processed $12 billion in volume
[16:34] in January 2026 alone. Researchers from
[16:37] IMDIA Networks Institute analyzed 86
[16:40] million bets and found that algorithmic
[16:42] traders extracted roughly $40 million in
[16:45] arbitrage profits over a 12-month
[16:47] period. The top three wallets placed
[16:49] over $10,000 bets combined. Only half a%
[16:53] of all Poly Market users earned more
[16:56] than $1,000. The rest were effectively
[16:59] just providing liquidity for bots to
[17:01] extract value. And here&#39;s where it gets
[17:03] even more interesting. Poly Market
[17:05] itself tweeted in early February of this
[17:08] year that quote autonomous AI agents are
[17:11] now trading on Poly Market in an attempt
[17:14] to subsidize their token costs. Agents
[17:16] are trying to earn money to pay for
[17:18] their own compute. The loop is closing.
[17:21] Meanwhile, the data on how well agents
[17:23] are doing is mixed but illuminating.
[17:25] OLAS protocols Poly Strat agents among
[17:28] the most sophisticated autonomous
[17:30] prediction market systems that are being
[17:32] publicly tracked achieve maybe 55 to 65%
[17:35] win rates over time with performance
[17:37] varying really dramatically by domain.
[17:39] Agents tend to be better at predicting
[17:41] things that follow from data rather than
[17:43] things that follow from culture, which
[17:44] is not surprising. It tells you the kind
[17:46] of economic activity that agents are
[17:48] really well suited for versus the kind
[17:49] that maybe humans are well suited for.
[17:51] I&#39;m not sure we&#39;ll see an agent doing
[17:53] the Met Gala anytime soon. The
[17:55] cumulative volume of AI trades on Poly
[17:58] Market is continuing to grow. It&#39;s just
[18:01] going to when you have AI agents by the
[18:03] thousand registering for wallets and
[18:05] trying to start getting into currency.
[18:07] This is where the scam also lives. The
[18:09] talk right now is flooded with videos of
[18:11] people claiming to turn, I don&#39;t know,
[18:13] 50 bucks into 3,000 bucks in a couple of
[18:15] days. These videos get thousands of
[18:17] likes. These videos get thousands of
[18:19] bookmarks. People are clearly hungry for
[18:22] the words AI and make money in the same
[18:24] video. The reality is considerably less
[18:27] glamorous. The bot that famously turned
[18:30] $313 into $438,000
[18:33] in a month was running latency
[18:36] arbitrage, exploiting a millisecond gap
[18:38] between when Bitcoin moved on Binance
[18:40] and when Polyarket odds adjusted. That
[18:43] kind of algorithmic trading is not what
[18:45] your open claw bot is going to be able
[18:47] to do. That is highfrequency trading
[18:49] which has been known in finance circles
[18:51] for a long time and is just being
[18:53] applied to poly market as the market
[18:55] matures. It requires really fancy setups
[18:58] like colllocated infrastructure with sub
[19:00] 10 millisecond latency. It requires
[19:03] capital that is a whole lot larger than
[19:05] any Tik Tok video would suggest. And if
[19:07] you try and do it with something like an
[19:09] openclaw agent, you&#39;re going to run into
[19:12] real costs. One developer who actually
[19:14] built and tested an autonomous
[19:16] polymarket agent reported that
[19:17] Cloudflare blocks API requests from data
[19:20] center IPs and requires custom bypass
[19:23] infrastructure just to place orders.
[19:25] Another one found that running the bot
[19:26] for just a couple of days racked up 200
[19:29] bucks in API fees alone. So yes,
[19:32] sophisticated autonomous trading agents
[19:34] can generate returns on Poly Market. No,
[19:38] you cannot replicate this with your open
[19:40] claw by feeding it a Tik Tok tutorial.
[19:43] The infrastructure requirements, the API
[19:45] costs, and the competitive dynamics make
[19:47] this a game for well- capitalized tech
[19:49] operators, not retail experimenters. But
[19:52] the underlying premise, the thing we&#39;ve
[19:54] been talking about all video, the idea
[19:56] that agents can participate in economic
[19:58] activity and generate revenue, that is
[20:00] not a scam. That is the direction that
[20:02] Coinbase, Stripe, Google, PayPal, Visa,
[20:05] and OpenAI are all aggressively building
[20:07] toward simultaneously with billions of
[20:10] dollars in infrastructure investment.
[20:12] The question isn&#39;t whether agents will
[20:14] be able to transact autonomously. The
[20:17] question is whether guardrails will be
[20:18] built fast enough to prevent very
[20:21] predictable disasters. I covered
[20:23] openclaw security nightmare in detail in
[20:26] my first video. The one-click remote
[20:28] code execution, malicious skills
[20:30] disguised as crypto tools, Cisco&#39;s
[20:32] research team finding data xfiltration
[20:34] in a third party skill. I&#39;m not going to
[20:36] rehash all of that. What I want to focus
[20:39] on instead is the structural problem
[20:41] that those incidents illustrate because
[20:43] it scales with the infrastructure for
[20:45] agent commerce. Every primitive that
[20:47] makes agents more capable also makes
[20:50] them more dangerous. An agent with a
[20:52] wallet can pay for APIs or get drained
[20:54] by a malicious skill. An agent with
[20:56] shell access can install dependencies or
[20:58] execute arbitrary code injected through
[21:00] a prompt. An agent with search can find
[21:03] information or be redirected to
[21:06] adversarial content designed to
[21:08] manipulate his behavior. And last but
[21:10] not least, an agent with Cloudflare
[21:11] served Markdown can read websites or
[21:14] consume poison content at machine speed.
[21:16] It&#39;s kind of your choice. The security
[21:19] community is already responding to the
[21:21] threats that come with these new
[21:23] primitives. And the responses are
[21:24] instructive because they reveal what
[21:26] serious people think the real attack
[21:28] surface is going to look like for
[21:29] agents. Ironclaw is a rustbased
[21:32] re-implementation of OpenClaw by near.ai
[21:35] co-founder Ilia Polosukin and it
[21:38] sandboxes every single tool that
[21:40] OpenClaw uses into isolated web assembly
[21:43] environments. Assumption being that any
[21:45] tool an agent touches is a potential
[21:47] compromise vector. OpenAI&#39;s shell tool
[21:50] meanwhile includes org level and request
[21:52] level network allow lists, domain
[21:54] secrets that prevent credential leakage
[21:56] and container isolation. The assumption
[21:58] being that agents will run untrusted
[22:00] code and the environment must contain
[22:02] the blast radius. Coinbase&#39;s agentic
[22:05] wallets use enclave isolation for
[22:07] private keys and programmable spending
[22:09] guardrails. The assumption there being
[22:11] that the agent itself cannot be fully
[22:13] trusted with the assets it manages.
[22:15] Notice the pattern across all of these.
[22:18] Every serious security approach treats
[22:20] the agent as a potential adversary. That
[22:23] is the correct approach. It does not
[22:25] treat the agent like a trusted employee.
[22:28] That is the right mental model for where
[22:29] we&#39;re at at this point in 2026. And it&#39;s
[22:32] one that most of the Tik Tok buzz
[22:34] tutorial crowd has not internalized.
[22:37] Look, agents have existed for a while
[22:39] now. APIs have existed for decades. The
[22:42] concept of software transacting with
[22:43] software predates the web itself. What&#39;s
[22:46] new is all of these factors converging
[22:49] to make the agentic web. In the span of
[22:51] just a few months, every layer of the
[22:53] stack went from concept to production to
[22:56] infrastructure. Money, content, search,
[22:59] execution, identity is all in production
[23:03] now simultaneously. The web is starting
[23:05] to fork. There&#39;s the human web, the one
[23:08] you&#39;re reading right now or listening to
[23:09] a video on right now with fonts and
[23:12] layouts and images and scroll
[23:14] animations. And at the same time, in
[23:16] parallel, on another fork, there&#39;s the
[23:18] agent web, a parallel layer of APIs,
[23:21] structured data, markdown content,
[23:23] payment protocols, and execution
[23:25] environments designed for software that
[23:27] will never open a browser. These two
[23:29] webs run on the same physical
[23:31] infrastructure, the same servers, the
[23:33] same CDNs, the same payment rails, but
[23:35] they serve fundamentally different
[23:37] clients with different needs. A human,
[23:39] we want a beautiful product page. An
[23:41] agent, they want a JSON payload with the
[23:43] price, the availability, and the payment
[23:45] endpoint. A human might want search
[23:47] results they can browse. An agent just
[23:49] wants structured data to act on. You get
[23:51] the idea. A human wants a checkout flow
[23:53] with trust signals. the agent just wants
[23:55] tokenized payment primitives and will be
[23:57] getting on with its day. The analogy
[23:59] that keeps coming to mind for me as I
[24:01] look at this is the early mobile web. In
[24:04] 2007 when the iPhone launched, the web
[24:06] already existed. It worked on phones
[24:09] technically, but it was designed for
[24:11] desktops and the experience I can
[24:13] testify was terrible. What followed was
[24:16] a decade long rebuild for the mobile
[24:18] web. responsive design, mobile first
[24:21] frameworks, app stores, push
[24:23] notifications, GPSware services, tap to
[24:26] pay. The underlying infrastructure was
[24:28] the same, but the interface layer forked
[24:31] completely. The companies that
[24:33] recognized the fork early, that built
[24:35] for the new client instead of trying to
[24:37] make the old interface work on the new
[24:39] device, those were the ones that built
[24:41] the dominant platforms of the next era.
[24:43] We are at the same inflection point
[24:45] today except the new client isn&#39;t a
[24:48] smaller screen. It&#39;s not a screen at
[24:50] all. It&#39;s software that reads, decides,
[24:53] pays, and acts. The interface it needs
[24:56] isn&#39;t visual. It&#39;s structured. It&#39;s
[24:58] programmable. It&#39;s transactional. And
[25:00] the companies building that interface
[25:02] right now, they&#39;re not the startups that
[25:04] are hoping to get lucky. They&#39;re the big
[25:06] boys. They&#39;re Coinbase, Stripe,
[25:08] Cloudflare, Google, OpenAI, Visa,
[25:10] PayPal. companies with the
[25:11] infrastructure, scale, and distribution
[25:14] to make their design decisions into de
[25:17] facto web standards. The mobile fork
[25:19] created trillion-dollar companies,
[25:21] right? It created Uber, Instagram,
[25:22] WhatsApp, Snap. They would not have
[25:24] existed on the desktop web. Not because
[25:26] the desktop web lacked capabilities, but
[25:29] because it lacked the interface
[25:31] primitives that mobile clients really
[25:32] needed. It lacked real-time location,
[25:35] always on connectivity, camera first
[25:37] interaction, push notifications, tap to
[25:40] pay at physical registers. The agent
[25:42] fork is going to do the same thing again
[25:46] in the 2020s. The businesses that emerge
[25:48] from it will be the ones that could not
[25:50] have existed on the human web, not
[25:52] because the human web lacks information,
[25:54] but because it lacks the interface
[25:56] primitives that agent clients really
[25:59] need. structured data, tokenized
[26:01] payments, machine readable content,
[26:03] programmatic search, execution
[26:04] environments. In my last video on Open
[26:07] Claw, I talked about the 7030 rule. The
[26:10] idea that people consistently want to
[26:12] maintain maybe roughly 70% human control
[26:15] of agent delegated tasks. That&#39;s the
[26:17] demand side. That&#39;s the human side of
[26:19] the story, right? This video has really
[26:21] been about the supply side of the story,
[26:24] the agent side of the story. And that
[26:26] side doesn&#39;t care about our 7030 split
[26:30] or what kind of control we want to
[26:31] maintain. The infrastructure that is
[26:33] being built right now that I have spent
[26:35] this video talking about assumes a 0
[26:39] world. Fully autonomous agents with
[26:41] their own wallets, their own search
[26:43] capabilities, their own execution
[26:45] environments, and their own economic
[26:47] relationships with the services they
[26:49] use. The gap between the infrastructure
[26:52] being built and the trust people are
[26:54] willing to extend to agents is the
[26:57] central tension of the next few years in
[26:59] AI. Every company in the agent stack is
[27:02] betting that trust will catch up to the
[27:05] capabilities that are being built today.
[27:07] And every security incident that we see,
[27:10] especially with the open claw story,
[27:12] things like claw havoc, like the 500
[27:14] message iMessage disaster, reduction
[27:17] databases being wiped by unsupervised
[27:19] agents, those kinds of stories push the
[27:22] timeline of trust back even though they
[27:25] don&#39;t stop people trying agents. For
[27:27] now, the agent web is really small.
[27:29] Developers running OpenClaw on Mac minis
[27:31] and VPS instances, AI shopping
[27:33] assistants placing orders through
[27:35] Stripes ACPs. But I want to call out
[27:37] that small now does not mean small
[27:40] later. Because of how quickly Open Claw
[27:43] is growing because of how much venture
[27:45] funding is going into agents in 2026, we
[27:48] are likely to see explosive growth in
[27:51] this new branch of the web in 2026. I
[27:55] don&#39;t know if a fully realized agentic
[27:58] web arrives in 3 months, 3 weeks, or 2
[28:01] years. That&#39;s an open question. that
[28:04] it&#39;s being built is not a question and I
[28:07] increasingly have no doubt we are headed
[28:09] toward a world where agents are as
[28:11] ubiquitous on the web as people. It is
[28:14] up to us to shape those web standards so
[28:17] they work well for both agents and
[28:19] people. And it&#39;s up to us to make sure
[28:21] the primitives that we build like
[28:23] payments, like security, are robust
[28:25] enough that we actually can trust agent
[28:28] operations and agent economics, the way
[28:30] we&#39;ve learned to trust other humans for
[28:32] commerce over the web. Without that base
[28:35] layer of trust, the future of the
[28:37] agentic web may be still born. And that
[28:40] is the thing I want to leave you with.
[28:41] What is going to build trust in the
[28:45] agentic web? And as much as these
[28:47] companies are investing in primitives,
[28:49] the primitive of trust is something that
[28:52] we are going to have to see realized
[28:54] over time by good faith actors who are
[28:58] building for a future where both humans
[29:00] and agents work on the web together. If
[29:03] you know of someone building in that
[29:05] space, pop them in the comments. I&#39;d
[29:07] love to see them. Best of luck out there
[29:09] and uh enjoy the wild agentic web. It&#39;s
[29:11] going to be a crazy decade. Cheers.
