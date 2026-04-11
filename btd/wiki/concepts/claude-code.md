---
title: Claude Code
source_count: 5
last_updated: 2026-04-10
sources:
  - mark-kashef/undated-the-complete-beginner-s-guide-to-claude-code-even-if-you-re-not-technical
  - mark-kashef/undated-anthropic-s-full-claude-skills-guide-in-22-minutes
  - mark-kashef/undated-claude-code-turned-obsidian-into-my-dream-second-brain
  - mark-kashef/undated-i-replaced-openclaw-with-claude-code-in-one-day
  - nate-jones/undated-task-queues-are-replacing-chat-interfaces-here-s-why-plus-a-claude-cowork-demo
---

# Claude Code

Claude Code is not a chatbot. It's an agent — an AI that can read your files, understand your instructions, make a plan, and execute a multi-step workflow from start to finish. You describe what you want; it figures out how to do it and does it.

The interface is a terminal (a text window on your computer), but that's incidental. What matters is the underlying behavior: Claude Code can operate on your actual project folder, edit files, run code, connect to external tools, and loop through tasks while showing you its progress. This is the difference between asking someone for advice and hiring someone to do the work.

## It's Not Just for Developers

The name is misleading. "Code" suggests you need to know how to program to use it. You don't.

The underlying capability — an AI that can read your files, understand your instructions, make a plan, and execute a multi-step workflow — works for almost anything that can be expressed as a task with inputs and outputs. Non-technical builders have used it to build apps, automate workflows, manage second brains in Obsidian, and replace entire manual processes, often starting with a single clear sentence describing what they want.

The terminal can look intimidating. But Claude Code can onboard itself once installed. You describe your goal; it does the rest.

## How It Works: The Core Loop

Claude Code operates on a folder on your computer (your "project"). Inside that folder, it:

1. Reads what's there — files, notes, code, docs, anything
2. Receives your instruction (typed or spoken)
3. Makes a plan and shows it to you
4. Executes the plan step by step
5. Loops you in if it hits something uncertain

This is fundamentally different from a chat window. Claude Code isn't just responding — it's acting. It can create and edit files, run commands, connect to services via [[mcp-servers]], and chain together complex tasks you'd normally have to manage yourself.

## CLAUDE.md: The Memory File

Every Claude Code project can have a `CLAUDE.md` file — a plain text file that tells Claude about the project. Think of it as onboarding notes for a new collaborator.

What goes in CLAUDE.md:
- What the project is and what it's for
- How you like to work (tone, format, naming conventions)
- Specific tools or services in use
- Rules you want Claude to always follow
- Shortcuts, slash commands, and context that would take forever to re-explain every session

Without a CLAUDE.md, Claude Code starts from scratch every time. With one, it picks up exactly where you left off. This is why experienced users say Claude Code gets better the longer you use it — the memory file compounds.

## Skills / Slash Commands

Claude Code has a skills system (Anthropic calls them "skills," you invoke them as `/slash-commands`). A skill is like a saved playbook: a set of instructions Claude follows for a specific, repeatable task.

Analogy: think of a skill as an onboarding guide for Claude, specific to your workflow. Instead of re-explaining your process every time, you write it once as a skill and invoke it with `/skill-name`.

Examples of what skills do:
- Run a structured intake interview (like BTD's `/btd-intake`)
- Compile knowledge from raw sources into a wiki
- Ingest new content and rebuild a search index
- Follow a specific review or publishing workflow

Skills live in `.claude/skills/` in your project. They're plain markdown files. You write them; Claude follows them. The better the skill, the more leverage you get — it's like [[prompt-design]] made persistent and reusable.

## The Planning Mode

One of Claude Code's highest-leverage features is planning before building. You can ask Claude to plan in full before writing a single file. It produces what's called a PRD (product requirements document) — a complete spec of what needs to be built, how, and in what order.

This is AI-as-project-manager before AI-as-executor. Non-technical builders especially benefit: the plan surfaces questions and edge cases you'd otherwise hit mid-build.

## What It Unlocks for BTD Builders

Claude Code turns "I have an idea" into "I shipped something" — without needing to know how to code or manage a developer.

Concrete things BTD members have done:
- Built a custom transcription tool from scratch (45 minutes for Claude to figure out the optimal approach; then it built it)
- Connected Claude to an Obsidian vault to create a self-organizing second brain
- Replaced manual workflow tools (OpenClaw, custom bots) by building direct replacements
- Created agents that self-check their own work using MCP server integrations

The shift in mental model: you stop being the executor and become the decision-maker. Claude Code handles the doing; you handle the what and why.

## At Different Levels

**Pre-beginner**: Claude Code is like a very capable assistant you work with on your computer — not through a website. You tell it what you want to build or organize, and it does the work. You don't need to understand how it does it.

**Beginner**: It's a terminal-based AI agent that operates on a folder. You install it, point it at a project, and describe tasks in plain language. CLAUDE.md tells it about your project so it remembers context. Skills let you save and reuse workflows.

**Builder**: Claude Code runs agentic loops with tool access via MCP servers, persists context through CLAUDE.md and skills, can run in plan-then-execute mode (Opus for planning, Sonnet for execution), supports parallel task queues, and can be invoked as a subagent from other Claude instances.

## When to Surface

- User wants to build something but doesn't know where to start
- User is doing repetitive manual tasks that could be automated
- User asks about vibe coding, shipping fast, or building without a developer
- User wants to set up a second brain, CRM, or custom workflow tool
- User has a CLAUDE.md or skills question

## Related Concepts
- [[mcp-servers]] — how Claude Code connects to external services and tools
- [[skills-as-workflows]] — the skills system in depth: writing, refining, and stacking slash commands
- [[vibe-coding]] — the broader practice of building with AI as your primary development tool
- [[prompt-design]] — writing instructions Claude actually follows; applies directly to skills and CLAUDE.md
