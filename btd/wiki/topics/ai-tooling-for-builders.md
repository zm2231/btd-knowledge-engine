---
title: AI Tooling for Builders
type: topic
concepts: [vibe-coding, prompt-design, context-engineering, skills-as-workflows, claude-code, mcp-servers]
last_updated: 2026-04-10
---

# AI Tooling for Builders

Most AI tool guides are written for one of two audiences: developers who already know what a terminal is, or curious non-technical people who want to "try AI." BTD builders are neither. They're people who want to ship something real — a custom tool, an automated workflow, an app that does exactly what they need — and they want to understand just enough to not get stuck.

This topic cluster is for them. Six concepts that, taken individually, each explain one thing. Taken together, they explain a progression: how a builder goes from "I keep re-prompting and getting mediocre results" to "I have a system that gets better every time I use it."

The value isn't in each concept — it's in understanding how they layer.

---

## The Stack

Think of it as layers. Each one depends on the one below it. You can start at the top, but you'll hit ceilings you can't explain until you understand what's underneath.

### 1. Vibe Coding — the philosophy

[[vibe-coding]] is where most people start. The promise: describe what you want, AI builds it. No code required. That's real — but so is the plateau.

Karpathy coined the term, and he has a foundation under it: he built nanoGPT from scratch. He knows what he's asking the AI to edit. Most vibe coders don't have that foundation, and they feel it when things go sideways and they can't figure out why.

The levels framework (0 = autocomplete → 5 = dark factory) is the honest map of where builders actually are versus where they think they are. Most people plateau at level 2. Crossing to level 3 requires the rest of this stack.

### 2. Prompt Design — the craft

[[prompt-design]] is not about finding the magic phrase. It's about giving the AI enough to work with.

The practical shift: prompts aren't search queries — they're job descriptions. Role, task, output format, one example. That four-part structure handles most cases. For anything you'll run repeatedly, a prompt is a contract: fixed inputs, fixed outputs, no surprises.

Prompt design is the first thing you can improve right now, regardless of what tools you're using. But it's also a ceiling — you can write perfect individual prompts and still get mediocre results if the AI has no memory of your project, preferences, or prior work. That's where the next layer comes in.

### 3. Context Engineering — the scale layer

[[context-engineering]] is what separates builders who plateau from builders who compound.

Nate Jones's framing: "The best prompt in the world cannot compensate for an AI that does not know what you've been working on, what you've already tried, what your constraints are, or what you decided last Tuesday." Most people writing prompts are solving a context problem, not a wording problem.

The practical layer: a CLAUDE.md file in every project (onboarding notes for the AI, persistent across every session), system prompts that set agent behavior before the user types anything, few-shot examples, and retrieval for dynamic knowledge. The 10x-more-effective builders aren't writing better prompts — they've built context infrastructure that does the heavy lifting before they type a single word.

Context engineering is the operating layer. The next two layers are how you encode that infrastructure as reusable process.

### 4. Skills as Workflows — the operational layer

[[skills-as-workflows]] is the BTD meta-principle: encode your workflow once, invoke it forever.

A skill is a markdown file — plain language — that tells Claude how to do something specific. Not just what to do, but the protocol, the decision points, the anti-patterns, the output format. When you invoke `/skill-name`, Claude loads that knowledge and runs the process.

The shift: most AI users carry their workflow in their head and re-explain it every session. Skills flip this. The workflow lives in the file. The AI loads it. You invoke it. You iterate on the file when the process improves.

This is how the BTD Knowledge Engine is built. `/btd-intake` is a five-phase interview encoded as a skill. `/btd-reentry` is the returning-user protocol. `/wiki-compiler` is the content compilation process. Each one took work to build, and now it runs reliably every time.

Mollick's description captures it: a skill loads the relevant capability, executes the process, then moves on. Like Neo getting martial arts uploaded — the AI doesn't start from scratch. It loads what it needs.

### 5. Claude Code — the environment

[[claude-code]] is where this stack runs.

It's not a chatbot. It's an agent that operates on a real folder on your computer — reads files, edits them, runs commands, chains multi-step tasks, loops in for decisions, and connects to external services. The interface is a terminal, but that's incidental. What matters is the behavior: you describe a goal, Claude makes a plan, executes it, and shows you the work.

Claude Code is the environment where CLAUDE.md lives (context engineering), where skills are loaded and invoked (skills-as-workflows), and where MCP servers are connected (the next layer). It's also built for non-technical builders — the name is misleading. If you can describe what you want to build clearly, Claude Code can often do the building.

The unlock: you stop being the executor and become the decision-maker. Claude handles the doing; you handle the what and why.

### 6. MCP Servers — the extensibility layer

[[mcp-servers]] are what connect Claude to the tools you actually use.

Without MCP, Claude can reason about your work. With MCP, it can act on it — read your Notion, write to your database, search GitHub, open an Obsidian file, run browser automation. One server connection gives Claude access to many tools. You configure it in a settings file, restart, and the tools appear.

The agent shift: once Claude is connected to your workflow tools via MCP, the conversation becomes a control interface for your entire system. "Check my Notion tracker, pull urgent tasks, draft updates, send a summary to Slack" — actually executable, in sequence.

MCP + skills is the compound effect. MCP gives Claude access to tools. A well-written skill tells Claude exactly which tools to call, in what order, with what logic. Raw access becomes reliable, repeatable workflow. This is the foundation of any serious agent setup.

---

## Where to Start

### Pre-beginner

You don't need to understand the full stack to get value. Start here:

1. **Read [[vibe-coding]]** — specifically the levels framework. Know which level you're at. That's more valuable than any tool tip.
2. **Try Claude Code** with one small, concrete task. Don't install MCP servers yet. Don't write skills. Just describe what you want and see what happens.
3. **Watch Mark Kashef's beginner guide** — *The Complete Beginner's Guide to Claude Code* is the most accessible full walkthrough in the corpus. No technical background required.

The goal at this stage: get one real thing shipped, no matter how small. A simple tool. An organized folder. A draft you couldn't have written alone. The foundation is doing it, not studying it.

### Beginner

You've shipped something. Now you keep hitting the same friction — re-explaining yourself every session, getting inconsistent results, spending more time correcting output than using it.

1. **Start a CLAUDE.md** in every project. Write it as onboarding notes for a capable new collaborator. Describe the project, the conventions, what not to do. This is your first real context engineering move.
2. **Apply the four-part prompt structure** — role, task, output format, one example. Consistent on every prompt. See [[prompt-design]].
3. **Use an existing skill** before writing one. Run `/btd-intake` or `/btd-reentry` and pay attention to what the skill is actually doing — the phases, the decision points, the output format. You're building intuition for when a process is worth encoding.

The goal at this stage: stop re-explaining yourself. Your context infrastructure should compound between sessions, not reset.

### Builder

You have a working setup. Now you want it to get better automatically.

1. **Write a skill for any process you've done three times.** If you've explained the same workflow to Claude three times, it belongs in a skill. The act of writing it forces you to articulate it precisely enough for an AI to follow. That precision is the real learning.
2. **Add one MCP server** for the tool you spend the most time in. Obsidian, Notion, GitHub — start with one. See the setup walkthrough in [[mcp-servers]].
3. **Move toward level 3 on the [[vibe-coding]] scale** — writing tests and specifications before code, not after. The shift from reviewing output to defining success criteria in advance. This is the threshold where the system starts compounding automatically.

The goal at this stage: your AI setup gets meaningfully better each week because your skills, CLAUDE.md, and context infrastructure compound — not because you're getting cleverer at prompting.

---

## Sources in Corpus

This topic is primarily covered by two creators:

- **Nate Jones** — the context engineering hierarchy, the vibe coding levels, the 10x-effective-builder analysis. Start with *"The 5 Levels of AI Coding"* and *"Prompt Engineering Is Dead."*
- **Mark Kashef** — the most practical Claude Code implementation content in the corpus. Beginner guide, MCP masterclass, skills tutorial. Hands-on, non-technical, shows real setups.

Ethan Mollick contributes the skills-as-workflows framing and the management/delegation angle. Andrej Karpathy provides the ground truth on what vibe coding actually requires — and what foundation it rests on.

---

## Related Topics

- [[how-ai-actually-works]] — understanding what's under the hood matters when things go wrong. The levels framework makes more sense once you know what LLMs are actually doing.
- [[btd-builder-arc]] — how the tooling stack fits into a member's full learning journey: from first experiment to compound system.
