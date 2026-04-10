---
title: "I Built an 11-Tab Financial Model in 10 Minutes. The $20/Month Tool That's About Change How We Work."
creator: "nate-jones"
source_type: youtube
date: undated
ingested: 2026-04-10
url: "https://www.youtube.com/watch?v=f-v0fJgBqhk"
video_id: "f-v0fJgBqhk"
duration: "21:08"
transcript_method: "youtube-captions"
segment_count: 597
char_count: 22499
status: ingested
topics: []
meta_patterns: []
---

# I Built an 11-Tab Financial Model in 10 Minutes. The $20/Month Tool That's About Change How We Work.

**Creator**: nate-jones | **Duration**: 21:08
**URL**: https://www.youtube.com/watch?v=f-v0fJgBqhk
**Transcript**: 597 segments, 22499 chars

## Transcript

Claude is invading Excel and they are taking no prisoners. I built an 11 tab financial model of building versus renting a home across every zip code in the country in just 10 minutes. The time it takes to make a good cup of coffee. And if you're wondering, yes, it was that detailed. It had a sensitivity analysis. It had an opportunity cost comparison versus S&P 500 returns. I could go on and on. The point is actually not the detail of that particular spreadsheet, which I will be showing you a little bit later in this video. The point is that I truly partnered with Claude to get that done in a way that I have not been able to partner with any AI before. Claude itself suggested some of these tabs and was then able to go get the data and able to build them out. This is not incremental improvement. This is a phase change in what knowledge work really means and I'm here to introduce it to you. But first, we should understand how strange it is to have claude in Excel. Excel is the most popular business tool in the world. Microsoft is already doing deals to power C-pilot with Claude, but that's still not enough for the Anthropic team because they know they can deliver more through proprietary data partnerships and their proprietary harness, which is the scaffolding that goes around a model as you deploy it. And so Claude can now be directly embedded as a sidebar you can open inside Microsoft Excel. And it has access to proprietary data feeds. We'll get to some of those in a minute that Microsoft doesn't have access to, which allows Claude to fetch data for a lot of really interesting problem sets directly. And this really is for everyone. On Friday, Anthropic opened up Claude and Excel from a very tight beta with a set of enterprise customers to absolutely anybody on their pro tier, which is $20 a month or more. And I think they did this because they'd seen such jaw-dropping results from the enterprise rollout. Orway's sovereign wealth fund has been using Claude in Excel for a bit now. They estimate they've saved 213,000 hours already. That's not a small number. And it reminds me that the race to build foundation models is a bit of a distraction at this point when the real race is to embed intelligence into workflows. How can we embed intelligence in workflows that help all of us do our daily work better? and how can we make sure that we back those with data partnerships that allow the models to make the most of the data in the world around us. That's exactly what Claude did with the most powerful business application in the world, Excel. So, here are the mechanics of the launch and then we'll get into the strategy and then I'm going to show you the spreadsheet. First, Claude in Excel is a native sidebar addin that lives inside Microsoft Excel with complete awareness of your workbook. It's not paste cells into a chat window awareness. It's actual structural awareness. It knows every tab. It knows every formula. It knows every cell reference. You get the idea. If you ask it to explain how a model works in the spreadsheet, it can trace the actual formula of relationships in the spreadsheet at the cell level. If you ask it to update an assumption, it will modify the cells while preserving the formula dependencies. You get the idea. Every action gets logged in a transparent change trail, which might sound boring until you recognize that because it's Excel, finance models are going to get audited. They're going to get reviewed by skeptical colleagues. They're going to get handed to successors who need to understand logic. The ability to demonstrate how AI assisted changes were made. Is the difference between a tool you can deploy and a liability that compliance is ever not ever going to approve. What makes all this possible? The underlying engine is Opus 4.5. It's anthropic's most powerful model to date. And on complex multi-tab workbooks, you need a model that can hold the entire structure in the context window and reason about it across multiple tab dependencies. Opus 4.5 does that very well. When I built the 11 tab workbook that I talked about, it actually did max out the chat windows context. But what's interesting is the gracefulness with which the model recovered at that point because I had to clear the chat and I didn't know what would happen because six of the tabs were done and five of them were not done. Well, Opus 4.5 was able to look at the existing structure, look at the tabs, and without me saying anything other than pick up where you left off, it was able to reason and infer what the tabs should be about and build in the rest of the tabs. And so I found that even though there were context window limitations, Opus 4.5 was a intelligent enough model that it was able to just pick up where it left off and continue to finish the the workbook. That is a very powerful signal for how strong this model is, especially when embedded inside Excel. Now, let me be honest about where it works and where it doesn't because I don't want to sell the speed of transformation and not be clear about where I see some bumps along the way. First, what's transformative? The core capability is genuinely weeks to minutes fast. You can go to building, explaining, debugging, and iterating in just a few minutes on a spreadsheet that previously might have taken you into the weeks, especially fetching the data. Claude can handle multi-tab architectures well. Anecdotally, I've built three to four tab models very, very easily in single prompts and eight plus tab models happen either between easy handoffs in the chat or with two prompts. It searches for and populates certain data itself, including housing prices by zip code, historical S&P returns, standard benchmarks. It suggests analyses that I didn't ask for, which is critical. And you're not just getting faster execution. Ultimately, because Claude thinks with the data, you're getting an AI that thinks through the problem at the level of the cell, the formula, and the structure of the sheet as a whole. And so, it will surface considerations that you might have missed that are actually really intelligent. Now, some human input is still required. I found that I couldn't find certain specialized data that wasn't easily publicly available. For example, I had to fetch the METR benchmark data for AI autonomous task benchmarking manually and paste that in. I found I had to fetch the full data set for compute training scale and I only got five or six or seven rows when Claude went and searched for it from Excel. So there are definitely raw materials that Claude will sometimes need you to go get. To my mind, getting the whole task done in 5 or 10 minutes made that very much worth it. Charting is another interesting area. Claude absolutely structures data for visualization well. It has the right columns, proper ranges, correct references. It does not necessarily make pretty charts, but it makes very functional charts. If you want to make truly beautiful Excel charts, you will be doing the last mile yourself right now. And that's, you know, it's taking the existing chart and it's about five minutes of formatting work. Given that you might have saved a couple of weeks on constructing an 11 tab spreadsheet model, I think it's a trade-off I'll take. As I mentioned earlier, memory limits are a factor. So complex builds will max out chat windows. And when that happens, it's easiest just to start fresh and tell Claude to examine the existing work and infer a build plan from there that you can check. And I find that that's very effective. At the scale of transformation we're talking about, most of the limitations I'm discussing here, to be very honest with you, feel like rounding errors. If someone offered to compress your workload in Excel by a,000x, but you'd occasionally need to paste in some data, you'd take that trade all day. And that is the world we're living in. I want to talk a little bit more broadly though. What is the shift that no one's talking about when it comes to this launch? Because I feel like these launches often get portrayed as an individual launch instead of as part of a larger pattern. So for the past 3 years, AI competition has been very legible. You train bigger models, you score higher on benchmarks, you ship faster inference, and you rinse and you repeat. Open AI and Anthropic and Google all race to build better reasoning engines while everybody else watched the leaderboards. The competition was real and it mattered and the capability gains were definitely eyeopening, but it was always going to hit diminishing returns if you stayed just inside the model world and never touched workflows. And so the ultimate question was never whether foundation models would get good enough for the tasks that we do every day. It was what would happen when they did and how we would make the jump from model to workflow. We're now living in that moment. Frontier models can all write competent code. They can analyze documents. They can reason through multi-step problems. They can maintain coherent context over long conversations. The differences between GPT 5.2 2 and Claude Opus 4.5 and Gemini 3 on most practical tasks ends up being marginal unless you find areas where a particular model was trained in ways that give it exceptional strengths that are often noticeable to researchers and invisible to users trying to get work done. So when the models are starting to converge in this way, the competitive moat has to come from somewhere else. Enthropic's answer is the competitive mode is workflow integration backed by data partnerships. So don't just build a better model, embed it where work happens and connect it to information that competitors have trouble accessing. Excel was a very obvious first target. Not because spreadsheets are particularly sexy, but because Excel is the operational nervous system of business worldwide. Every investment bank, every asset manager, every FPNA team, every SAS business, every consultant, every entrepreneur, they all touch Excel at some point. Trillions of dollars in decisions flow through cells and formulas maintained by analysts in Microsoft's 40-year-old software. If you can become the default intelligence layer for that workflow, you've captured something far more durable than a benchmark score. And what makes Claude and Excel especially interesting is how Claude connects to data sources. Since last summer, and most people haven't been paying attention to this, Anthropic has been assembling licensed partnerships with institutional data providers that professional finance actually runs on. So through the model context protocol, the open standard for AI to system connections, Claude can now pull from LSCG for live market data, Moody's for credit ratings, and company information across 600 million entities. It can grab the S&P Capital IQ for financials. that can grab fact set and Morning Star for research pitchbook for private company intelligence. The list goes on. These are not API integrations cobbled together by a team of PMs. They're actual formal partnerships where major financial data pro providers have enabled information flow into Claude's reasoning. And this matters because any language model can help you write a sumf formula table stakes these days. What a generic model cannot do is pull this morning's pricing from the London Stock Exchange, cross reference it against current Moody's credit ratings, check it against the fundamentals of the S&P, and update your comparable company analysis, all in one fluid workflow inside the application you're already used to working in. That requires access to data that doesn't exist on the public internet. And frankly, it requires the intelligence to use that well in a spreadsheet format. The strategic logic is really simple here. The quality of AI outputs depends entirely on the quality of inputs. Enthropic may not be able to outtrain OpenAI on base model capabilities, but they can outconnect them. They can outworkflow them. By securing these data partnerships, Enthropic has built capabilities that competitors will take time to replicate at best. Not because Microsoft or Google or OpenAI lack the technical ability, but because replicating requires negotiating these licenses with institutional providers who have already committed to someone else. Relationships compound, and that allows Anthropic Smoke to deepen over time. On top of the connectors, Anthropic also packaged six pre-built agent skills that productize the workflows junior analysts spend their days performing. Stuff like a discounted cash flow model or comparable company analysis. These were chosen deliberately because each represents hours of analyst drudgery compressed into a prompt. The models need human review. Claude is good at first drafts here. But the productivity multiplier is real and that's how we get to the big number of 213,000 hours saved by Norway's sovereign wealth fund. And now for the part that really breaks conventional competitive analysis. Microsoft and Anthropic are currently in a $30 billion partnership where Anthropic has committed to purchasing massive Azure compute capacity. Microsoft gets to host Anthropic's models and collect infrastructure revenue. Cloud is now available inside Copilot Studio, meaning enterprises can build agents powered by Claude on Microsoft's platform. And Claude Opus powers Microsoft's researcher agent in Microsoft 365 C-pilot as an alternative to OpenAI. So Microsoft is simultaneously hosting Claude as an alternative model in its flagship productivity suite, competing against Claude with its own co-pilot for Excel and collecting billions from anthropic for Azure infrastructure. This is coopetition at a scale that has no historical precedent. The companies are partners at the infrastructure layer, competitors at the product layer, and intertwined in ways that make winning and losing almost meaningless categories. The dynamics get even weirder when you examine the product overlap. Copilot for Excel requires files saved to one drive with autosave enabled, so every change commits immediately to the cloud. Many finance teams really hate this because they want control over when work gets saved and the ability to experiment without making permanent changes. Claude and Excel works with local files. This is not a technical limitation. It's a product decision that reflects Microsoft's cloud first strategy versus Anthropic's willingness to meet users where they are. Micros Microsoft's own strategic choices created a gap that a competitor could exploit from inside Microsoft's own application. So what does this tell us about where AI is heading? First, the model providers and platforms are separating. Microsoft doesn't need to win the model war anymore. They can offer multiple models and let the market decide. Open AAI, Anthropic, whoever's next. Microsoft wins if any of them win because Microsoft controls the distribution surface. This is the same strategy that made Windows dominant because the platform everyone builds on is the one that gets to profit. Microsoft is betting that the model layer is becoming a commodity even as Anthropic is betting that the application layer is becoming a commodity. Second, that vertical integration is now where the competition is happening. So, Anthropic is not trying to beat Copilot by building a better general purpose assistant. They're building a specialized tool that's better for finance than anything Microsoft can offer by combining model capability with domain specific data and workflows. Microsoft has native integration with the rest of the Microsoft ecosystem. But Anthropic has the proprietary data feeds. They have the intelligence that Opus 4.5 and harness brings to the table. Different advantages, different modes. Both can win because they're competing on different dimensions. Third, the one AI to rule them all thesis just keeps on dying the death of a thousand cuts. The future looks like multiple specialized AI systems optimized for different domains and workflows. Cloud for finance, maybe copilot for quick edits, something else for legal work. The question is not necessarily which AI is best, but which AI is best for this specific job with this data in this context. This is good news for enterprises who get choice and specialization. It's very complicated news for AI companies who have to decide when and where to compete horizontally versus vertically with specific industries. Fourth and finally, the infrastructure providers win regardless of which AI models succeed. Microsoft collects Azure revenue from Anthropic. Amazon hosts Anthropic on AWS. Google has its own models but also partners with others. The hyperscalers have positioned themselves to profit from AI regardless of which model provider dominates because all the model providers need massive compute. And this is perhaps the most important structural insight. The AI wars may matter less for infrastructure returns than most investors probably assume. Let me make this concrete by showing you what I built using Claude. Here's the rent versus buy calculator. It's an 11 tab model that actually thinks through the home ownership decision properly. You get a summary dashboard with a recommendation. You get an opportunity cost analysis comparing your down payment against S&P 500 returns. Here's the sensitivity analysis tab. I don't want to dwell too long on the numbers. I will call out that I did nothing to format this and so you do have these tiny structural column issues to adjust as you get there. And I will also call out much more importantly, the sensitivity analysis itself was an idea developed by Claude that I think makes this overall perspective strong. Here's the summary tab I was referring to. This is cued to New York and Manhattan, but obviously you can adjust it with your input tab into whatever you would like. One of the things I especially appreciate is that all of these pieces are pre-built to adjust based on your inputs. And so, for example, the tax analysis tab bases itself on your input in cell B72 so that you actually can describe your other itemized expenses and deductions in ways that help the model estimate the tax implication of renting versus buying. This is such a detailed analysis that you could build an entire personal rent versus buy app using another tool like Lovable right off of this spreadsheet. That's how detailed Opus was able to get. And if you're wondering how complicated it was, yes, it's a lengthy chat, but Claude made it easy. This is not me producing lengthy prompts. This is Claude talking to itself and building out these pieces. And you can actually see the parameters it's using to adjust. It makes it easy to audit and understand what's going on. But Claude will collapse those by default. So it's easy to scan the chat. This is really thoughtful product design because you can look at the overall arc of what Claude is working on as it builds these out. And this is fast. As I was sharing, Claude built this entire 11 tab spreadsheet in just 10 minutes. I just love how each of these is dynamic. Again, it's pulling from appropriate spots so that if I change something in the input tab, I actually see this cascade through. If you're wondering how to build it or how to grab this spreadsheet, I will have a full guide on building spreadsheets and also of course this spreadsheet and the other ones I've referenced in the Substack that goes with this video. So that's what you can build in 10 minutes in clot with Excel. And on Friday, that capability opened up to everyone willing to pay $20 a month. And I think almost nobody noticed that. If you understand what Anthropic actually built, you're going to see how transformative this is. The question is not are the models good enough. The question now is who controls the workflows, who owns the data relationships, who gets embedded in places like Excel where real work happens. This is a bigger launch to me as an AI watcher than Claude MCP was, than Claude Skills was. It's bigger than many of the major model launches because the number of people who use Excel on a daily basis, the install base is vastly higher than we have for anything in the AI world. There are more than a billion people on Excel because Windows has a phenomenal distribution. And for all of those billions of people, the tools to do weeks of analytical work in minutes are now accessible at a cost of just 20 bucks a month. And it's frankly something that any corporation in their right mind is going to be racing to anthropic with a wallet to if you were an organization building the strategic implications I think are very clear. Do not wait any longer for model developments to make plans. Instead, think about where AI is embedded in core tools and connect it to proprietary data that gives you compounding advantages. If you are building a product with AI, that is a proven path forward. And if you are building a product with AI and you don't have that workflow native integration, you don't have the data partnerships, you may well find yourself locked out of the workflow positions that really matter. If you're in the AI industry, keep in mind that the model race was just act one. And even if it's still ongoing, it is not the whole play. The capabilities are now converging around workflow leverage and how data modes compound. So the winners of the next phase in the race won't be who trains the best model. It will be whoever builds the most durable relationships with the industries they seek to serve. The spreadsheet is where numbers become decisions. It's an incredibly powerful leverage point. any AI that lives there and understands the dependencies and connects to institutional data, that's not a chatbot. That has just become infrastructure. And as of Friday, that infrastructure is now available to all of us, to anyone who wants it. And so my question to you is, where are you saving weeks of work with Excel right now? Because all of us should be asking that question. Have fun. I have a complete write up on this on the Substack. got multiple example spreadsheets that all got built with Claude. Lots of tips and tricks, including the stuff that's challenging to work with right now. I know that the speed up is real, but we need to be honest about where the bumps in the road are as well. Have fun and uh congrats to the Anthrop team. This one really shipped.

## Timed Segments

[0:00] Claude is invading Excel and they are
[0:01] taking no prisoners. I built an 11 tab
[0:04] financial model of building versus
[0:06] renting a home across every zip code in
[0:08] the country in just 10 minutes. The time
[0:10] it takes to make a good cup of coffee.
[0:11] And if you&#39;re wondering, yes, it was
[0:13] that detailed. It had a sensitivity
[0:15] analysis. It had an opportunity cost
[0:16] comparison versus S&amp;P 500 returns. I
[0:19] could go on and on. The point is
[0:21] actually not the detail of that
[0:22] particular spreadsheet, which I will be
[0:24] showing you a little bit later in this
[0:25] video. The point is that I truly
[0:28] partnered with Claude to get that done
[0:30] in a way that I have not been able to
[0:31] partner with any AI before. Claude
[0:33] itself suggested some of these tabs and
[0:36] was then able to go get the data and
[0:38] able to build them out. This is not
[0:40] incremental improvement. This is a phase
[0:42] change in what knowledge work really
[0:44] means and I&#39;m here to introduce it to
[0:45] you. But first, we should understand how
[0:48] strange it is to have claude in Excel.
[0:51] Excel is the most popular business tool
[0:53] in the world. Microsoft is already doing
[0:56] deals to power C-pilot with Claude, but
[1:00] that&#39;s still not enough for the
[1:02] Anthropic team because they know they
[1:04] can deliver more through proprietary
[1:06] data partnerships and their proprietary
[1:08] harness, which is the scaffolding that
[1:10] goes around a model as you deploy it.
[1:12] And so Claude can now be directly
[1:14] embedded as a sidebar you can open
[1:17] inside Microsoft Excel. And it has
[1:19] access to proprietary data feeds. We&#39;ll
[1:21] get to some of those in a minute that
[1:23] Microsoft doesn&#39;t have access to, which
[1:25] allows Claude to fetch data for a lot of
[1:27] really interesting problem sets
[1:29] directly. And this really is for
[1:31] everyone. On Friday, Anthropic opened up
[1:33] Claude and Excel from a very tight beta
[1:35] with a set of enterprise customers to
[1:37] absolutely anybody on their pro tier,
[1:39] which is $20 a month or more. And I
[1:42] think they did this because they&#39;d seen
[1:43] such jaw-dropping results from the
[1:45] enterprise rollout. Orway&#39;s sovereign
[1:47] wealth fund has been using Claude in
[1:49] Excel for a bit now. They estimate
[1:51] they&#39;ve saved 213,000
[1:54] hours already. That&#39;s not a small
[1:56] number. And it reminds me that the race
[1:58] to build foundation models is a bit of a
[2:01] distraction at this point when the real
[2:03] race is to embed intelligence into
[2:05] workflows. How can we embed intelligence
[2:07] in workflows that help all of us do our
[2:10] daily work better? and how can we make
[2:12] sure that we back those with data
[2:14] partnerships that allow the models to
[2:15] make the most of the data in the world
[2:17] around us. That&#39;s exactly what Claude
[2:19] did with the most powerful business
[2:21] application in the world, Excel. So,
[2:23] here are the mechanics of the launch and
[2:25] then we&#39;ll get into the strategy and
[2:26] then I&#39;m going to show you the
[2:27] spreadsheet. First, Claude in Excel is a
[2:30] native sidebar addin that lives inside
[2:32] Microsoft Excel with complete awareness
[2:34] of your workbook. It&#39;s not paste cells
[2:36] into a chat window awareness. It&#39;s
[2:38] actual structural awareness. It knows
[2:41] every tab. It knows every formula. It
[2:43] knows every cell reference. You get the
[2:44] idea. If you ask it to explain how a
[2:47] model works in the spreadsheet, it can
[2:49] trace the actual formula of
[2:50] relationships in the spreadsheet at the
[2:53] cell level. If you ask it to update an
[2:55] assumption, it will modify the cells
[2:56] while preserving the formula
[2:58] dependencies. You get the idea. Every
[3:00] action gets logged in a transparent
[3:02] change trail, which might sound boring
[3:04] until you recognize that because it&#39;s
[3:07] Excel, finance models are going to get
[3:09] audited. They&#39;re going to get reviewed
[3:10] by skeptical colleagues. They&#39;re going
[3:12] to get handed to successors who need to
[3:14] understand logic. The ability to
[3:15] demonstrate how AI assisted changes were
[3:18] made. Is the difference between a tool
[3:20] you can deploy and a liability that
[3:23] compliance is ever not ever going to
[3:25] approve. What makes all this possible?
[3:27] The underlying engine is Opus 4.5. It&#39;s
[3:31] anthropic&#39;s most powerful model to date.
[3:33] And on complex multi-tab workbooks, you
[3:35] need a model that can hold the entire
[3:38] structure in the context window and
[3:40] reason about it across multiple tab
[3:42] dependencies. Opus 4.5 does that very
[3:45] well. When I built the 11 tab workbook
[3:48] that I talked about, it actually did max
[3:51] out the chat windows context. But what&#39;s
[3:53] interesting is the gracefulness with
[3:55] which the model recovered at that point
[3:57] because I had to clear the chat and I
[3:59] didn&#39;t know what would happen because
[4:01] six of the tabs were done and five of
[4:03] them were not done. Well, Opus 4.5 was
[4:06] able to look at the existing structure,
[4:08] look at the tabs, and without me saying
[4:11] anything other than pick up where you
[4:12] left off, it was able to reason and
[4:15] infer what the tabs should be about and
[4:17] build in the rest of the tabs. And so I
[4:19] found that even though there were
[4:21] context window limitations, Opus 4.5 was
[4:24] a intelligent enough model that it was
[4:26] able to just pick up where it left off
[4:28] and continue to finish the the workbook.
[4:31] That is a very powerful signal for how
[4:33] strong this model is, especially when
[4:35] embedded inside Excel. Now, let me be
[4:37] honest about where it works and where it
[4:38] doesn&#39;t because I don&#39;t want to sell the
[4:41] speed of transformation and not be clear
[4:43] about where I see some bumps along the
[4:45] way. First, what&#39;s transformative? The
[4:48] core capability is genuinely weeks to
[4:50] minutes fast. You can go to building,
[4:53] explaining, debugging, and iterating in
[4:55] just a few minutes on a spreadsheet that
[4:57] previously might have taken you into the
[4:59] weeks, especially fetching the data.
[5:01] Claude can handle multi-tab
[5:03] architectures well. Anecdotally, I&#39;ve
[5:04] built three to four tab models very,
[5:06] very easily in single prompts and eight
[5:09] plus tab models happen either between
[5:11] easy handoffs in the chat or with two
[5:13] prompts. It searches for and populates
[5:15] certain data itself, including housing
[5:17] prices by zip code, historical S&amp;P
[5:19] returns, standard benchmarks. It
[5:22] suggests analyses that I didn&#39;t ask for,
[5:24] which is critical. And you&#39;re not just
[5:26] getting faster execution. Ultimately,
[5:28] because Claude thinks with the data,
[5:30] you&#39;re getting an AI that thinks through
[5:32] the problem at the level of the cell,
[5:34] the formula, and the structure of the
[5:36] sheet as a whole. And so, it will
[5:37] surface considerations that you might
[5:39] have missed that are actually really
[5:40] intelligent. Now, some human input is
[5:42] still required. I found that I couldn&#39;t
[5:44] find certain specialized data that
[5:47] wasn&#39;t easily publicly available. For
[5:49] example, I had to fetch the METR
[5:51] benchmark data for AI autonomous task
[5:54] benchmarking manually and paste that in.
[5:57] I found I had to fetch the full data set
[6:00] for compute training scale and I only
[6:04] got five or six or seven rows when
[6:06] Claude went and searched for it from
[6:08] Excel. So there are definitely raw
[6:11] materials that Claude will sometimes
[6:12] need you to go get. To my mind, getting
[6:14] the whole task done in 5 or 10 minutes
[6:16] made that very much worth it. Charting
[6:18] is another interesting area. Claude
[6:20] absolutely structures data for
[6:21] visualization well. It has the right
[6:23] columns, proper ranges, correct
[6:25] references. It does not necessarily make
[6:27] pretty charts, but it makes very
[6:29] functional charts. If you want to make
[6:31] truly beautiful Excel charts, you will
[6:34] be doing the last mile yourself right
[6:35] now. And that&#39;s, you know, it&#39;s taking
[6:37] the existing chart and it&#39;s about five
[6:39] minutes of formatting work. Given that
[6:40] you might have saved a couple of weeks
[6:41] on constructing an 11 tab spreadsheet
[6:43] model, I think it&#39;s a trade-off I&#39;ll
[6:45] take. As I mentioned earlier, memory
[6:47] limits are a factor. So complex builds
[6:49] will max out chat windows. And when that
[6:51] happens, it&#39;s easiest just to start
[6:53] fresh and tell Claude to examine the
[6:55] existing work and infer a build plan
[6:57] from there that you can check. And I
[6:58] find that that&#39;s very effective. At the
[7:00] scale of transformation we&#39;re talking
[7:02] about, most of the limitations I&#39;m
[7:04] discussing here, to be very honest with
[7:06] you, feel like rounding errors. If
[7:08] someone offered to compress your
[7:09] workload in Excel by a,000x, but you&#39;d
[7:11] occasionally need to paste in some data,
[7:13] you&#39;d take that trade all day. And that
[7:15] is the world we&#39;re living in. I want to
[7:17] talk a little bit more broadly though.
[7:19] What is the shift that no one&#39;s talking
[7:20] about when it comes to this launch?
[7:22] Because I feel like these launches often
[7:23] get portrayed as an individual launch
[7:25] instead of as part of a larger pattern.
[7:27] So for the past 3 years, AI competition
[7:29] has been very legible. You train bigger
[7:32] models, you score higher on benchmarks,
[7:34] you ship faster inference, and you rinse
[7:36] and you repeat. Open AI and Anthropic
[7:38] and Google all race to build better
[7:40] reasoning engines while everybody else
[7:42] watched the leaderboards. The
[7:43] competition was real and it mattered and
[7:46] the capability gains were definitely
[7:48] eyeopening, but it was always going to
[7:50] hit diminishing returns if you stayed
[7:52] just inside the model world and never
[7:54] touched workflows. And so the ultimate
[7:56] question was never whether foundation
[7:58] models would get good enough for the
[8:01] tasks that we do every day. It was what
[8:03] would happen when they did and how we
[8:05] would make the jump from model to
[8:07] workflow. We&#39;re now living in that
[8:09] moment. Frontier models can all write
[8:11] competent code. They can analyze
[8:13] documents. They can reason through
[8:14] multi-step problems. They can maintain
[8:16] coherent context over long
[8:18] conversations. The differences between
[8:20] GPT 5.2 2 and Claude Opus 4.5 and Gemini
[8:24] 3 on most practical tasks ends up being
[8:27] marginal unless you find areas where a
[8:29] particular model was trained in ways
[8:31] that give it exceptional strengths that
[8:33] are often noticeable to researchers and
[8:35] invisible to users trying to get work
[8:37] done. So when the models are starting to
[8:38] converge in this way, the competitive
[8:40] moat has to come from somewhere else.
[8:43] Enthropic&#39;s answer is the competitive
[8:45] mode is workflow integration backed by
[8:47] data partnerships. So don&#39;t just build a
[8:50] better model, embed it where work
[8:51] happens and connect it to information
[8:53] that competitors have trouble accessing.
[8:55] Excel was a very obvious first target.
[8:58] Not because spreadsheets are
[8:59] particularly sexy, but because Excel is
[9:01] the operational nervous system of
[9:03] business worldwide. Every investment
[9:05] bank, every asset manager, every FPNA
[9:08] team, every SAS business, every
[9:11] consultant, every entrepreneur, they all
[9:13] touch Excel at some point. Trillions of
[9:16] dollars in decisions flow through cells
[9:18] and formulas maintained by analysts in
[9:20] Microsoft&#39;s 40-year-old software. If you
[9:23] can become the default intelligence
[9:25] layer for that workflow, you&#39;ve captured
[9:27] something far more durable than a
[9:28] benchmark score. And what makes Claude
[9:30] and Excel especially interesting is how
[9:32] Claude connects to data sources. Since
[9:35] last summer, and most people haven&#39;t
[9:37] been paying attention to this, Anthropic
[9:39] has been assembling licensed
[9:41] partnerships with institutional data
[9:43] providers that professional finance
[9:45] actually runs on. So through the model
[9:47] context protocol, the open standard for
[9:49] AI to system connections, Claude can now
[9:51] pull from LSCG for live market data,
[9:54] Moody&#39;s for credit ratings, and company
[9:56] information across 600 million entities.
[9:58] It can grab the S&amp;P Capital IQ for
[10:01] financials. that can grab fact set and
[10:02] Morning Star for research pitchbook for
[10:04] private company intelligence. The list
[10:06] goes on. These are not API integrations
[10:09] cobbled together by a team of PMs.
[10:11] They&#39;re actual formal partnerships where
[10:13] major financial data pro providers have
[10:16] enabled information flow into Claude&#39;s
[10:18] reasoning. And this matters because any
[10:21] language model can help you write a sumf
[10:23] formula table stakes these days. What a
[10:26] generic model cannot do is pull this
[10:28] morning&#39;s pricing from the London Stock
[10:30] Exchange, cross reference it against
[10:31] current Moody&#39;s credit ratings, check it
[10:33] against the fundamentals of the S&amp;P, and
[10:36] update your comparable company analysis,
[10:38] all in one fluid workflow inside the
[10:40] application you&#39;re already used to
[10:42] working in. That requires access to data
[10:45] that doesn&#39;t exist on the public
[10:46] internet. And frankly, it requires the
[10:48] intelligence to use that well in a
[10:50] spreadsheet format. The strategic logic
[10:52] is really simple here. The quality of AI
[10:54] outputs depends entirely on the quality
[10:56] of inputs. Enthropic may not be able to
[10:59] outtrain OpenAI on base model
[11:01] capabilities, but they can outconnect
[11:03] them. They can outworkflow them. By
[11:05] securing these data partnerships,
[11:07] Enthropic has built capabilities that
[11:09] competitors will take time to replicate
[11:12] at best. Not because Microsoft or Google
[11:14] or OpenAI lack the technical ability,
[11:16] but because replicating requires
[11:18] negotiating these licenses with
[11:20] institutional providers who have already
[11:21] committed to someone else. Relationships
[11:24] compound, and that allows Anthropic
[11:25] Smoke to deepen over time. On top of the
[11:27] connectors, Anthropic also packaged six
[11:30] pre-built agent skills that productize
[11:32] the workflows junior analysts spend
[11:34] their days performing. Stuff like a
[11:35] discounted cash flow model or comparable
[11:38] company analysis. These were chosen
[11:40] deliberately because each represents
[11:42] hours of analyst drudgery compressed
[11:45] into a prompt. The models need human
[11:47] review. Claude is good at first drafts
[11:49] here. But the productivity multiplier is
[11:51] real and that&#39;s how we get to the big
[11:53] number of 213,000 hours saved by
[11:55] Norway&#39;s sovereign wealth fund. And now
[11:57] for the part that really breaks
[11:59] conventional competitive analysis.
[12:01] Microsoft and Anthropic are currently in
[12:04] a $30 billion partnership where
[12:06] Anthropic has committed to purchasing
[12:08] massive Azure compute capacity.
[12:10] Microsoft gets to host Anthropic&#39;s
[12:12] models and collect infrastructure
[12:13] revenue. Cloud is now available inside
[12:15] Copilot Studio, meaning enterprises can
[12:18] build agents powered by Claude on
[12:20] Microsoft&#39;s platform. And Claude Opus
[12:22] powers Microsoft&#39;s researcher agent in
[12:24] Microsoft 365 C-pilot as an alternative
[12:27] to OpenAI. So Microsoft is
[12:29] simultaneously hosting Claude as an
[12:32] alternative model in its flagship
[12:33] productivity suite, competing against
[12:36] Claude with its own co-pilot for Excel
[12:38] and collecting billions from anthropic
[12:40] for Azure infrastructure. This is
[12:43] coopetition at a scale that has no
[12:45] historical precedent. The companies are
[12:47] partners at the infrastructure layer,
[12:49] competitors at the product layer, and
[12:51] intertwined in ways that make winning
[12:53] and losing almost meaningless
[12:54] categories. The dynamics get even
[12:56] weirder when you examine the product
[12:58] overlap. Copilot for Excel requires
[13:01] files saved to one drive with autosave
[13:03] enabled, so every change commits
[13:05] immediately to the cloud. Many finance
[13:07] teams really hate this because they want
[13:09] control over when work gets saved and
[13:11] the ability to experiment without making
[13:13] permanent changes. Claude and Excel
[13:15] works with local files. This is not a
[13:18] technical limitation. It&#39;s a product
[13:19] decision that reflects Microsoft&#39;s cloud
[13:22] first strategy versus Anthropic&#39;s
[13:24] willingness to meet users where they
[13:25] are. Micros Microsoft&#39;s own strategic
[13:28] choices created a gap that a competitor
[13:31] could exploit from inside Microsoft&#39;s
[13:34] own application. So what does this tell
[13:36] us about where AI is heading? First, the
[13:38] model providers and platforms are
[13:40] separating. Microsoft doesn&#39;t need to
[13:42] win the model war anymore. They can
[13:43] offer multiple models and let the market
[13:46] decide. Open AAI, Anthropic, whoever&#39;s
[13:48] next. Microsoft wins if any of them win
[13:50] because Microsoft controls the
[13:52] distribution surface. This is the same
[13:54] strategy that made Windows dominant
[13:56] because the platform everyone builds on
[13:58] is the one that gets to profit.
[14:00] Microsoft is betting that the model
[14:02] layer is becoming a commodity even as
[14:03] Anthropic is betting that the
[14:05] application layer is becoming a
[14:06] commodity. Second, that vertical
[14:08] integration is now where the competition
[14:11] is happening. So, Anthropic is not
[14:13] trying to beat Copilot by building a
[14:15] better general purpose assistant.
[14:16] They&#39;re building a specialized tool
[14:18] that&#39;s better for finance than anything
[14:20] Microsoft can offer by combining model
[14:23] capability with domain specific data and
[14:25] workflows. Microsoft has native
[14:27] integration with the rest of the
[14:29] Microsoft ecosystem. But Anthropic has
[14:31] the proprietary data feeds. They have
[14:34] the intelligence that Opus 4.5 and
[14:36] harness brings to the table. Different
[14:38] advantages, different modes. Both can
[14:40] win because they&#39;re competing on
[14:42] different dimensions. Third, the one AI
[14:44] to rule them all thesis just keeps on
[14:46] dying the death of a thousand cuts. The
[14:48] future looks like multiple specialized
[14:50] AI systems optimized for different
[14:52] domains and workflows. Cloud for
[14:54] finance, maybe copilot for quick edits,
[14:56] something else for legal work. The
[14:58] question is not necessarily which AI is
[15:00] best, but which AI is best for this
[15:02] specific job with this data in this
[15:04] context. This is good news for
[15:06] enterprises who get choice and
[15:08] specialization. It&#39;s very complicated
[15:10] news for AI companies who have to decide
[15:12] when and where to compete horizontally
[15:15] versus vertically with specific
[15:16] industries. Fourth and finally, the
[15:18] infrastructure providers win regardless
[15:20] of which AI models succeed. Microsoft
[15:23] collects Azure revenue from Anthropic.
[15:25] Amazon hosts Anthropic on AWS. Google
[15:27] has its own models but also partners
[15:29] with others. The hyperscalers have
[15:31] positioned themselves to profit from AI
[15:34] regardless of which model provider
[15:36] dominates because all the model
[15:38] providers need massive compute. And this
[15:40] is perhaps the most important structural
[15:42] insight. The AI wars may matter less for
[15:45] infrastructure returns than most
[15:47] investors probably assume. Let me make
[15:50] this concrete by showing you what I
[15:52] built using Claude. Here&#39;s the rent
[15:53] versus buy calculator. It&#39;s an 11 tab
[15:56] model that actually thinks through the
[15:57] home ownership decision properly. You
[16:00] get a summary dashboard with a
[16:01] recommendation. You get an opportunity
[16:03] cost analysis comparing your down
[16:05] payment against S&amp;P 500 returns. Here&#39;s
[16:08] the sensitivity analysis tab. I don&#39;t
[16:10] want to dwell too long on the numbers. I
[16:12] will call out that I did nothing to
[16:14] format this and so you do have these
[16:16] tiny structural column issues to adjust
[16:19] as you get there. And I will also call
[16:20] out much more importantly, the
[16:22] sensitivity analysis itself was an idea
[16:25] developed by Claude that I think makes
[16:28] this overall perspective strong. Here&#39;s
[16:30] the summary tab I was referring to. This
[16:32] is cued to New York and Manhattan, but
[16:34] obviously you can adjust it with your
[16:36] input tab into whatever you would like.
[16:38] One of the things I especially
[16:39] appreciate is that all of these pieces
[16:42] are pre-built to adjust based on your
[16:47] inputs. And so, for example, the tax
[16:50] analysis tab bases itself on your input
[16:53] in cell B72 so that you actually can
[16:56] describe your other itemized expenses
[16:58] and deductions in ways that help the
[17:00] model estimate the tax implication of
[17:03] renting versus buying. This is such a
[17:05] detailed analysis that you could build
[17:08] an entire personal rent versus buy app
[17:11] using another tool like Lovable right
[17:13] off of this spreadsheet. That&#39;s how
[17:15] detailed Opus was able to get. And if
[17:17] you&#39;re wondering how complicated it was,
[17:19] yes, it&#39;s a lengthy chat, but Claude
[17:21] made it easy. This is not me producing
[17:23] lengthy prompts. This is Claude talking
[17:26] to itself and building out these pieces.
[17:29] And you can actually see the parameters
[17:30] it&#39;s using to adjust. It makes it easy
[17:32] to audit and understand what&#39;s going on.
[17:35] But Claude will collapse those by
[17:36] default. So it&#39;s easy to scan the chat.
[17:38] This is really thoughtful product design
[17:40] because you can look at the overall arc
[17:42] of what Claude is working on as it
[17:45] builds these out. And this is fast. As I
[17:49] was sharing, Claude built this entire 11
[17:51] tab spreadsheet in just 10 minutes. I
[17:55] just love how each of these is dynamic.
[17:56] Again, it&#39;s pulling from appropriate
[17:58] spots so that if I change something in
[18:00] the input tab, I actually see this
[18:02] cascade through. If you&#39;re wondering how
[18:04] to build it or how to grab this
[18:05] spreadsheet, I will have a full guide on
[18:08] building spreadsheets and also of course
[18:10] this spreadsheet and the other ones I&#39;ve
[18:11] referenced in the Substack that goes
[18:13] with this video. So that&#39;s what you can
[18:15] build in 10 minutes in clot with Excel.
[18:17] And on Friday, that capability opened up
[18:20] to everyone willing to pay $20 a month.
[18:23] And I think almost nobody noticed that.
[18:25] If you understand what Anthropic
[18:27] actually built, you&#39;re going to see how
[18:30] transformative this is. The question is
[18:32] not are the models good enough. The
[18:34] question now is who controls the
[18:36] workflows, who owns the data
[18:38] relationships, who gets embedded in
[18:40] places like Excel where real work
[18:42] happens. This is a bigger launch to me
[18:45] as an AI watcher than Claude MCP was,
[18:48] than Claude Skills was. It&#39;s bigger than
[18:51] many of the major model launches because
[18:53] the number of people who use Excel on a
[18:56] daily basis, the install base is vastly
[18:59] higher than we have for anything in the
[19:02] AI world. There are more than a billion
[19:04] people on Excel because Windows has a
[19:07] phenomenal distribution. And for all of
[19:10] those billions of people, the tools to
[19:12] do weeks of analytical work in minutes
[19:14] are now accessible at a cost of just 20
[19:17] bucks a month. And it&#39;s frankly
[19:18] something that any corporation in their
[19:20] right mind is going to be racing to
[19:22] anthropic with a wallet to if you were
[19:24] an organization building the strategic
[19:26] implications I think are very clear. Do
[19:28] not wait any longer for model
[19:30] developments to make plans. Instead,
[19:33] think about where AI is embedded in core
[19:35] tools and connect it to proprietary data
[19:38] that gives you compounding advantages.
[19:40] If you are building a product with AI,
[19:43] that is a proven path forward. And if
[19:45] you are building a product with AI and
[19:47] you don&#39;t have that workflow native
[19:50] integration, you don&#39;t have the data
[19:51] partnerships, you may well find yourself
[19:54] locked out of the workflow positions
[19:56] that really matter. If you&#39;re in the AI
[19:58] industry, keep in mind that the model
[19:59] race was just act one. And even if it&#39;s
[20:02] still ongoing, it is not the whole play.
[20:05] The capabilities are now converging
[20:07] around workflow leverage and how data
[20:09] modes compound. So the winners of the
[20:12] next phase in the race won&#39;t be who
[20:14] trains the best model. It will be
[20:16] whoever builds the most durable
[20:18] relationships with the industries they
[20:20] seek to serve. The spreadsheet is where
[20:22] numbers become decisions. It&#39;s an
[20:24] incredibly powerful leverage point. any
[20:26] AI that lives there and understands the
[20:28] dependencies and connects to
[20:30] institutional data, that&#39;s not a
[20:32] chatbot. That has just become
[20:33] infrastructure. And as of Friday, that
[20:36] infrastructure is now available to all
[20:38] of us, to anyone who wants it. And so my
[20:40] question to you is, where are you saving
[20:43] weeks of work with Excel right now?
[20:45] Because all of us should be asking that
[20:47] question. Have fun. I have a complete
[20:49] write up on this on the Substack. got
[20:51] multiple example spreadsheets that all
[20:53] got built with Claude. Lots of tips and
[20:55] tricks, including the stuff that&#39;s
[20:57] challenging to work with right now. I
[20:59] know that the speed up is real, but we
[21:00] need to be honest about where the bumps
[21:02] in the road are as well. Have fun and uh
[21:04] congrats to the Anthrop team. This one
[21:06] really shipped.
