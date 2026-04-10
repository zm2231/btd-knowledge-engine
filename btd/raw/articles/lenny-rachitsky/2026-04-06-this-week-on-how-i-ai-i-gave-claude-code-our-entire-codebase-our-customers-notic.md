---
title: "🎙️ This week on How I AI: I gave Claude Code our entire codebase. Our customers noticed."
creator: "lenny-rachitsky"
date: 2026-04-06T15:03:07.000Z
url: "https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-i-gave-claude"
platform: substack
source_type: substack
article_id: "https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-i-gave-claude"
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# 🎙️ This week on How I AI: I gave Claude Code our entire codebase. Our customers noticed.

**Creator**: lenny-rachitsky  
**Date**: 2026-04-06T15:03:07.000Z  
**URL**: https://www.lennysnewsletter.com/p/this-week-on-how-i-ai-i-gave-claude  
**Platform**: Substack

[![](https://substackcdn.com/image/fetch/$s_!gWeJ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F361d81ef-7faf-4d8e-8028-5d5e03432a9a_2329x551.png)](https://substackcdn.com/image/fetch/$s_!gWeJ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F361d81ef-7faf-4d8e-8028-5d5e03432a9a_2329x551.png)

### I gave Claude Code our entire codebase. Our customers noticed. \| Al Chen (Galileo)

Listen now on **[YouTube](https://youtu.be/AI1FLDY3q5s) • [Spotify](https://open.spotify.com/episode/5PiftAoMfb1qJhMSQ6GrYq) • [Apple Podcasts](https://podcasts.apple.com/us/podcast/i-gave-claude-code-our-entire-codebase-our-customers/id1809663079?i=1000759656756)**

[![](https://substackcdn.com/image/fetch/$s_!P21z!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fba33c305-2fd7-42c9-af9b-e430be545df3_1600x114.png)](https://substackcdn.com/image/fetch/$s_!P21z!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fba33c305-2fd7-42c9-af9b-e430be545df3_1600x114.png)

> **Brought to you by:**
>
> - **[Orkes](https://www.orkes.io/)**—The enterprise platform for reliable applications and agentic workflows
>
> - **[Tines](https://tines.com/howiai)**—Start building intelligent workflows today

**[Al Chen](http://linkedin.com/in/thealchen)** is a field engineer at Galileo who works directly with enterprise customers asking highly technical questions. In this episode, Claire talks with Al about how he uses Claude Code to query Galileo’s entire codebase across 15 repositories, combine it with Confluence and Slack, and deliver accurate, real-time answers without relying on documentation or constantly pinging engineering. They cover why code is often a better source of truth than docs, how to turn customer questions into scalable knowledge, and how AI is changing what customer-facing teams can do.

#### Biggest takeaways:

1. **Write a script to pull the latest code from all repos daily—and let Claude Code write it.** Al uses a 16-line script (written entirely by Claude Code) that pulls the latest main branch from all 15 repositories every morning. This ensures that he’s always querying current code instead of outdated information, solving the “docs are stale” problem that plagues most technical support teams.

2. **Maintain a “customer quirks” page to make AI answers customer-specific.** Al keeps a Confluence page listing each enterprise customer’s unique deployment requirements: how they handle secrets, namespaces, encryption, air-gapped environments. His Claude Code custom commands reference this page first, generating highly tailored deployment instructions instead of generic answers anyone could Google.

3. **Combine code repositories with Confluence MCP for maximum context.** Al’s custom Claude Code commands first check Confluence for deployment documentation, then query the code repositories if needed. This multi-source approach means Claude Code pulls from official docs, tribal knowledge, and actual implementation—delivering answers no single source could provide.

4. **Your code is better documentation than your docs.** Al realized public documentation couldn’t answer his enterprise customers’ detailed technical questions. By pulling all 15 of Galileo’s repositories into VS Code and querying them with Claude Code, he can now answer questions about how services cascade together, how features actually work, and deployment specifics that aren’t captured anywhere else.

5. **Turn Slack support threads into knowledge base articles automatically.** Using Pylon, Al converts detailed customer conversations into abstracted help articles with one click. These articles are more in-depth and current than official docs because they’re based on real customer questions and don’t require the overhead of PR reviews and approval processes.

6. **Reduce engineering interruptions to near-zero by self-serving answers.** Before this system, Al constantly pinged engineering with customer questions, creating frustration on both sides. Now he queries the code directly, only reaching out to validate answers or when Claude Code can’t find information (usually because it exists only in meeting notes or hallway conversations).

7. **The human value-add is making AI answers sound human, and knowing when to validate.** Al doesn’t blindly copy-paste Claude Code responses. He proofreads everything, removes telltale AI phrases like “in summary,” condenses verbose answers to what customers actually need, and validates complex technical answers with engineering when he doesn’t fully understand the implementation.

8. **Compete on customer experience, not just product velocity.** Everyone uses AI to ship faster products. Al uses AI to show up differently in customer relationships—delivering custom deployment documentation that accounts for each customer’s specific security requirements and infrastructure constraints. This differentiation in service quality is harder to replicate than product features.


#### Detailed workflow walkthroughs from this episode:

- How Al Chen Uses Claude Code and 15 Repos to Answer Any Customer Question: [https://www.chatprd.ai/how-i-ai/claude-code-and-repos-to-answer-any-customer-question](https://www.chatprd.ai/how-i-ai/claude-code-and-repos-to-answer-any-customer-question)

- Automatically Create a Knowledge Base from Slack Support Threads: [https://www.chatprd.ai/how-i-ai/workflows/automatically-create-a-knowledge-base-from-slack-support-threads](https://www.chatprd.ai/how-i-ai/workflows/automatically-create-a-knowledge-base-from-slack-support-threads)

- How to Use AI to Answer Customer Questions from Your Entire Codebase: [https://www.chatprd.ai/how-i-ai/workflows/how-to-use-ai-to-answer-customer-questions-from-your-entire-codebase](https://www.chatprd.ai/how-i-ai/workflows/how-to-use-ai-to-answer-customer-questions-from-your-entire-codebase)


* * *

If you’re enjoying these episodes, reply and let me know what you’d love to learn more about: AI workflows, hiring, growth, product strategy—anything.

Catch you next week,

Lenny

_P.S. Want every new episode delivered the moment it drops? Hit “Follow” on your favorite podcast app._
