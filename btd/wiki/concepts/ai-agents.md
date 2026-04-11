---
title: AI Agents
source_count: 5
last_updated: 2026-04-10
sources:
  - nate-jones/undated-claude-opus-4-6-the-biggest-ai-jump-i-ve-covered-it-s-not-close-here-s-what-you
  - nate-jones/undated-openclaw-160-000-developers-are-building-something-openai-google-can-t-stop-wher
  - nate-jones/undated-the-5-levels-of-ai-coding-why-most-of-you-won-t-make-it-past-level-2
  - ethan-mollick/2025-09-29-real-ai-agents-and-real-work
  - lenny-rachitsky/2026-04-01-listen-openclaw-a-power-user-s-guide-to-the-most-powerful-personal-ai-tool-since
---
# AI Agents

Not a chatbot. A chatbot waits for your next message. An agent is given a goal and goes to work — using tools, taking actions, making decisions, and running for hours without you in the loop. The mental model shift is from assistant to employee: you stop prompting and start orchestrating.

Ethan Mollick's framing is precise: agents cross the threshold from helping you do tasks to doing tasks themselves. The difference is autonomy over multi-step work. An agent can read a paper, convert code between languages, run the analysis, and return results — without a human hand-holding each step. This was impossible two years ago. Now it's Tuesday.

## What Agents Actually Are

An agent is an LLM with access to tools and a persistent goal. Tools are anything a computer can do: browse the web, write and run code, read and write files, call APIs, send messages, interact with software. When you give an agent a goal, it plans, executes, checks results, and corrects course — all without waiting for you.

The key unlock is error tolerance. Early agent attempts failed because one mistake in a long chain derailed everything. New thinking models are self-correcting: they catch their own errors mid-task. Small accuracy improvements compound dramatically — a model that's 5% more accurate can handle tasks 10x longer. Mollick's tracking of METR's task-length benchmark shows exponential gains from GPT-3 to GPT-5: the curve keeps going.

What that looks like in practice, from Nate Jones: Claude Opus 4.6 autonomously reproduced 50 developer workflows at Rakuten. Not suggested them. Ran the codebase for hours. Reproduced them.

## Single Agent vs. Swarms

A single agent handles a bounded, well-scoped task. Give it a file, a goal, and the right tools — it executes. This is the starting point for most builders and the foundation of tools like OpenClaw (a personal AI assistant that runs on your hardware, uses the apps you already have, and actually does things instead of suggesting them).

Multi-agent systems — swarms — go further. When Cursor's autonomous agent built a C compiler, it wasn't one model running everything sequentially. It was 16 agents working in parallel: some building the parser, some the code generator, some the optimizer. They coordinated through peer-to-peer messaging, not hub-and-spoke. Front-end agent, back-end agent, testing agent — the entire software engineering org, reproduced inside Claude Code Team Swarms.

What Jones noticed: these systems didn't organize this way because humans designed them to. They organized this way because hierarchy is what intelligence does when it needs to coordinate at scale. The agents discovered management. Cursor's swarm independently evolved hierarchical structures. Anthropic's multi-agent feature ships with 13 distinct operations — spawning, managing, coordinating. Strong DM published their "Software Factory" framework with the same pattern. Convergent evolution, not coincidence.

## When to Use Agents (and When Not To)

Agents excel at three problem types:

**Effort problems** — tasks where any single step is straightforward but the total surface area is massive. Running for hours across a codebase. Checking 200 academic papers for reproducibility. Reviewing 8,000 SEO keywords across 56 clients. The thinking per step isn't extraordinary. The endurance is. Agents were built for this.

**Coordination problems** — tasks that require managing dependencies, tracking state, and routing work between specialists. Build something complex with multiple components and an agent swarm will self-organize into the structure the work demands.

**Tool integration** — tasks that require stitching together multiple systems. An OpenClaw agent negotiated $4,200 off a car while its owner was in a meeting. It used available tools creatively to solve for the goal. That's not a chatbot.

Agents are not yet good at deep context problems — understanding unwritten rules, stakeholder dynamics, what customers actually need beneath what they say. A skilled PM extracts this through weeks of interviews and observation. Agents can ask clarifying questions now, but genuinely understanding need deeply enough to build the right thing is still mostly a human domain, except where extraordinary context is available.

Mollick's warning is worth holding: the same agent that reproduced academic papers can generate 17 versions of a PowerPoint that nobody needs. The technology is neutral. The question is whether you're directing it at work worth doing, or just letting it fill output quotas.

## Trust, Specs, and Guard Rails

The question agents raised in 2025 — are they smart enough? — is settled. They're smart enough. The question in 2026 is whether your specs and guard rails are good enough to channel that intelligence productively.

Jones's observation from OpenClaw: an agent that negotiated a car deal and an agent that sent 500 unsolicited messages to someone's wife ran on the same architecture, the same week. The underlying capability is identical. The difference between useful and catastrophic is the quality of the spec and the presence of meaningful constraints.

This isn't a new problem. It's management. You give a new employee clear instructions, defined scope, and checkpoints — not because they're incompetent but because alignment requires communication. The same applies to agents. Specification quality is the skill that transfers.

## The BTD Upgrade Path

[[vibe-coding]] is where most people start: prompt, get output, tweak, repeat. It works. It's also the ceiling for most people. Nate Jones's five-level framework makes the gap explicit: most developers who use AI empirically get slower. Experienced developers took 19% longer with AI tools while believing they were 24% faster — wrong about direction and magnitude simultaneously. What separates fast from slow isn't the tool. It's whether you've rebuilt your workflow around it or bolted it on top of the old one.

Agents are the next floor. You stop writing prompts to get outputs and start writing specifications to get outcomes. The skill shifts from prompt engineering to orchestration: breaking work into agent-sized tasks, defining success criteria, setting constraints, reviewing results at the level of judgment rather than rubber-stamp.

Strong DM, three engineers running a lights-out software factory: "Code must not be written by humans. Code must not even be reviewed by humans." The system takes a specification, builds the software, tests against real behavior, and ships. That's not vibe coding. That's [[skills-as-workflows]] operating at agent scale.

## When to Surface

Surface this concept when a user:
- Asks "what's the difference between Claude and an agent"
- Is stuck in prompt-and-tweak loops on repetitive multi-step work
- Wants to understand what Claude Code Team Swarms or OpenClaw actually are
- Is trying to figure out what to automate vs. what to keep human
- Asks about production AI deployment or building AI products

## Related Concepts
- [[vibe-coding]] — the entry-level floor agents sit above; most people plateau here
- [[skills-as-workflows]] — packaging agent patterns into reusable, shareable systems
- [[llm-limitations]] — where agents still hit hard ceilings (context, deep domain understanding)
- [[borrowed-judgment]] — the trust question: whose spec is the agent running on?
- [[prompt-design]] — single-step prompting vs. multi-step agent specification
