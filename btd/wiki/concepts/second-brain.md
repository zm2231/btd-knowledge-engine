---
title: Second Brain
source_count: 3
last_updated: 2026-04-10
sources:
  - nate-jones/you-don-t-need-saas-the-0-10-system-that-replaced-my-ai-workflow
  - nate-jones/prompt-engineering-is-dead-context-engineering-is-dying-what-comes-next-changes-everything
  - mark-kashef/claude-code-turned-obsidian-into-my-dream-second-brain
---

# Second Brain

A second brain started as a solution to a cognitive problem — you can't hold everything in your head, and patterns only emerge when you can see accumulated thinking over time. In the agent era, it's become something more: the foundation of your entire AI infrastructure. The people building persistent, searchable, AI-accessible knowledge systems are compounding. Everyone else is starting from zero in every chat window.

## The Problem It Solves

"Think about how much of your prompting is asking AI to catch up on what you know already." — Nate Jones

Every time you open a new chat, you re-explain context. Every time you switch tools — Claude to ChatGPT to Cursor — you lose continuity. Every AI you use has built a walled garden of memory and none of them talk to each other. That's not memory. That's five separate piles of sticky notes on five separate desks.

The compounding gap: Person A uses AI sometimes, starts fresh each session. Person B has a persistent, searchable, AI-accessible knowledge system. Every thought Person B captures makes the next search smarter, the next connection more likely to surface. The gap gets wider every week.

## The Original Version vs. the Agent-Readable Version

Nate Jones describes building his original second brain guide before the agent revolution went mainstream. It solved the human cognitive problem: capture what you're learning, see patterns over time, make thinking searchable. Tools like Obsidian, Notion, and Roam fit this model — human-readable, human-navigated.

When the agent revolution arrived, the requirement changed. The second brain now needs to be **agent-readable**: structured so AI tools can reliably access it, not just humans. The original Obsidian vault solved capture and organization. What it didn't solve — because it wasn't necessary yet — was the agent-readable problem.

The upgrade: a database-backed, AI-accessible knowledge system you own outright. No SaaS middlemen that can break, reprice, or disappear. One brain that every AI you use — Claude, ChatGPT, Cursor, whatever ships next month — can plug into via MCP. Cost: roughly $0.10–$0.30/month.

## What Goes In

A second brain isn't just notes. The most valuable entries are:

- **Decisions and reasoning** — what you decided and why. Agents need this to avoid re-litigating settled questions.
- **Constraints and preferences** — your working style, non-negotiables, context about your situation. The things you'd tell a new collaborator on day one.
- **Experiment outcomes** — what you tried, what worked, what didn't. Raw material for [[build-in-public]] and for surfacing patterns.
- **Key relationships and context** — who the important people in your work and life are, what matters to them.
- **Accumulated domain knowledge** — the things you've learned in a domain that you'd otherwise re-derive from scratch each time.

When this system is working, "your AI in every single part of the system starts to know you. Not in the creepy corporate surveillance way — in the 'hey, we were thinking about this last week and it's relevant to what you're asking me now' kind of way. The way a great colleague remembers what matters." — Nate Jones

## The BTD Knowledge Engine IS a Second Brain

This repo is the community-scale version of the same pattern. Instead of one person's thinking, it's the curated output of Karpathy, 3Blue1Brown, Nate Jones, Ethan Mollick, and others — ingested, indexed, and made searchable by meaning. The wiki layer (this file is part of it) applies the Karpathy LLM wiki pattern: compile knowledge once, keep it current, answer from it rather than re-deriving from chunks each time.

Your personal second brain and the BTD knowledge engine are complementary: BTD surfaces [[borrowed-judgment]] — distilled wisdom from people who've thought hard about something — and your personal second brain records how that wisdom intersects with your specific constraints and experiments.

## Obsidian + Claude Code

Mark Kashef's video on this combination addresses a common failure mode: "I've personally tried to use Obsidian five times in my life. Every single time I'd set it up, use it religiously for a whole week, and then forget it existed." The sixth attempt stuck because Claude Code was involved — AI handles the friction of capture and organization, which is where most note-taking systems die.

Opening a Claude Code instance directly in your Obsidian vault means the AI is fully contextualized with your notes before any conversation starts. The vault becomes a living context layer rather than an archive.

## At Different Levels

**Pre-beginner**: You have a second brain problem right now. All those browser tabs, half-finished notes, and re-explained AI contexts are symptoms. Start simple: pick one place where your thinking lives. Doesn't matter what tool yet.

**Beginner**: Pick Obsidian or Notion. The discipline is capture — write down decisions, what you learned, what didn't work. Even a flat folder of markdown files beats nothing. The value compounds slowly at first, then visibly.

**Builder**: Build the agent-readable version. Database-backed (SQLite or Postgres), exposed via MCP server, searchable by meaning (vector embeddings, not just text search). Every AI you use connects to it. Your context infrastructure becomes a genuine competitive advantage. The architecture is in Nate Jones' **"You Don't Need SaaS"** video.

## When to Surface

- User mentions re-explaining context to AI in every session
- User is frustrated that switching AI tools means "starting over"
- User is building an agent and wondering how to give it memory
- User has tried note-taking apps and abandoned them
- User asks about [[context-engineering]] at the infrastructure level — a second brain is a prerequisite
- User is at the "builder" calibrated level and ready for compounding advantages

## Related Concepts

- [[llm-knowledge-bases]] — the technical architecture underlying an agent-readable second brain
- [[build-in-public]] — experiment outcomes captured in a second brain become shareable artifacts
- [[borrowed-judgment]] — the second brain helps you retain and apply wisdom borrowed from creators you've learned from
- [[context-engineering]] — the second brain is your personal contribution to the context layer every AI operates within
