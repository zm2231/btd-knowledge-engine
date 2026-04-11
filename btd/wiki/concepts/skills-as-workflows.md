---
title: Skills as Workflows
source_count: 4
last_updated: 2026-04-10
sources:
  - ethan-mollick/claude-code-and-what-comes-next
  - nate-jones/openclaw-160000-developers-are-building
  - beware-the-defaults/building-with-the-garage-door-open
  - beware-the-defaults/the-death-of-how-to-content
---

# Skills as Workflows

"Everything's a skill" — the BTD meta-principle for working with Claude Code. Not just using AI, but encoding *how* you use AI into something reusable, nameable, and shareable.

## What a Skill Actually Is

Mollick's description from **Claude Code and What Comes Next** is the clearest: Skills are instructions that the AI decides when to use. They contain not just prompts, but the sets of tools the AI needs to accomplish a task — essentially loading the right knowledge and context for a specific job.

His analogy: when Neo in The Matrix gets martial arts instructions uploaded to his head and acquires a new skill — "I know kung fu." The AI doesn't start from scratch each time. It loads the relevant capability, executes the process, then moves on.

Technically, a Claude Code skill is a markdown file in `.claude/skills/`. Plain language. The AI can read it, load it when relevant, and invoke it as a slash command. Creation is easy enough that the AI can help you write the skill itself.

## The BTD Insight: Encode Your Workflow Once

The shift from using AI to working with AI at level 3+ is about moving from ad-hoc prompting to encoded process. Instead of reconstructing your reasoning every session — here's my context, here's what I need, here's how I want you to approach it — you capture that reasoning once in a skill file and invoke it.

This is BTD's meta-workflow:

1. Identify a repeatable process (an intake interview, a content ingestion pipeline, a wiki compilation run, a re-entry check-in)
2. Write the process down as a skill: the protocol, the anti-patterns, the output format, the decision points
3. Name it and invoke it as `/skill-name` from anywhere in Claude Code
4. Iterate on the skill as you learn what works

The BTD Knowledge Engine is itself built this way. `/btd-intake` encodes the 5-phase interview protocol. `/btd-reentry` encodes the returning-user check-in. `/btd-ingest` encodes the full content operations pipeline. `/wiki-compiler` encodes how to turn raw sources into structured knowledge. Each one captures work that used to require reconstructing context from scratch.

## Why This Matters More Than Prompting

Most people using AI are working at the level of individual prompts. Each session starts fresh. The human carries all the workflow knowledge in their head and re-explains it every time.

Skills invert this. The workflow knowledge lives in the skill file. The human's job is to invoke the right skill at the right time — and then guide the AI when it hits decision points the skill doesn't fully specify.

This is what the OpenClaw skills marketplace revealed: 3,000 community-built integrations with 50,000 monthly installs. Nobody filled out a survey about what they wanted from AI agents. They built it, and the builds revealed their actual needs. The number one use case was email management — not "help me write emails" but a workflow for handling email systematically, with rules and routing and judgment built in.

Nate Jones framed this as a revealed preference engine. The skills people build show what work they actually want to delegate, structured in ways that actually hold up under load.

## Skills as Institutional Memory

When you write a skill, you're not just documenting a prompt. You're encoding judgment — what questions to ask, what anti-patterns to avoid, what the output should look like and why, where human review is required and where the AI can proceed autonomously.

For BTD, this means the community's accumulated understanding of how to run an intake interview, how to personalize experiments to a constraint profile, how to ingest and compile content — all of that lives in version-controlled skill files. New members inherit it immediately. The workflow compounds across sessions and across members rather than living only in individual memory.

Mollick noted that skill creation is done in plain language and the AI can help you write skills — which is the most BTD-coded thing about the whole system. You use the tool to improve how you use the tool.

## The Build-in-Public Connection

BTD's Friday Build Labs are skills-as-workflows made visible. The community watches practitioners work through real problems in real time — not polished demos, but live discovery. When something works and gets written down as a repeatable process, that's a skill in the making.

The shift the Garage Door Open post identifies: the people who learn fastest aren't the ones with the best tutorials. They're the ones willing to look stupid together, figure out what actually works, and encode it. "That's the skill that compounds. Not 'here's my system.' But 'here's how I navigate when I don't have a system yet.'"

Skills are what you get when you've navigated enough times that you've found the system.

## At Different Levels

**Pre-beginner**: A skill is just a document that tells Claude how to do something consistently. Think of it as a checklist the AI reads before starting a task. You don't need to write one yet — you benefit from the ones that already exist.

**Beginner**: Start using existing skills. Run `/btd-intake` or `/btd-reentry` and pay attention to *what the skill is doing* — the phases, the questions, the decision points. You're building the intuition for when a process is worth encoding.

**Builder**: Write your own. When you've done the same AI-assisted task three times, write a skill for it. You'll find gaps in your own thinking — skills force you to articulate the process precisely enough that an AI can follow it. That precision is the learning.

## When to Surface

- When a member asks "how do I make Claude remember my context" — skills are part of the answer, alongside profiles
- When someone is repeating the same setup explanation every session — that's a skill waiting to be written
- When someone wants to share their workflow with the community — skills are the format
- When a new content type or process gets added to BTD — capture it as a skill before the knowledge disperses

## Related Concepts
- [[vibe-coding]] — skills are how you move from level 2 (prompting and hoping) to level 3+ (encoding process and specifying outcomes)
- [[borrowed-judgment]] — skills are one mechanism for borrowing judgment: encode how an expert approaches a problem, invoke that approach on demand
- [[llm-knowledge-bases]] — skills are process knowledge; knowledge bases are content knowledge; both feed the same system
- [[claude-code]] — the environment where BTD skills run as slash commands
- See also: [[mark-kashef]] — best source in corpus for Claude skills implementation tutorials
