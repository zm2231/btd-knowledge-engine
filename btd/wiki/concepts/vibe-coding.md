---
title: Vibe Coding
source_count: 4
last_updated: 2026-04-10
sources:
  - andrej-karpathy/how-i-use-llms
  - nate-jones/the-5-levels-of-ai-coding-why-most-of-you-wont-make-it-past-level-2
  - nate-jones/the-285-billion-crash
  - beware-the-defaults/building-with-the-garage-door-open
---

# Vibe Coding

Karpathy coined the term — but that's not the interesting part. What's interesting is the gap it exposed: most people get stuck at the bottom of the ladder and think they've arrived.

## Where the Term Came From

Karpathy was demoing Cursor's composer feature — an AI that could edit across multiple files, run commands, and make changes autonomously. "The name for this is called Vibe coding, a name that I think I probably minted," he said in **How I Use LLMs**. "Vibe coding just refers to letting — giving in, giving the control to composer and just telling it what to do and hoping that it works."

Hoping that it works. That qualifier matters. Karpathy said it himself: worst case, you fall back to programming because you have the files, you can inspect the CSS, and if you're a programmer you can change things arbitrarily. The fallback is available to him. For most people, there is no fallback.

## The Five Levels (Dan Shapiro / Nate Jones Framework)

Nate Jones covered Dan Shapiro's framework in **The 5 Levels of AI Coding** — the clearest taxonomy for where you actually are versus where you think you are.

**Level 0 — Spicy Autocomplete**: GitHub Copilot in its original form. AI suggests the next line, you accept or reject. Just a faster tab key. The human is still writing the software.

**Level 1 — Coding Intern**: You hand the AI a discrete, well-scoped task. Write this function. Build this component. Refactor this module. You review everything that comes back. The AI handles tasks. The human handles architecture, judgment, and integration.

**Level 2 — Junior Developer**: The AI handles multi-file changes. It can navigate a codebase, understand dependencies, build features that span modules. You're reviewing more complicated output, but you're still reading all the code. This is where most organizations are stuck — and where the J-curve hits hardest.

**Level 3 — Senior Developer**: You're writing tests and specifications, not code. The AI builds toward your specifications. You review whether the tests pass, not whether you understand each line.

**Level 4 — Developer as Product Manager**: You write a specification. You leave. You come back hours later and check whether the tests pass. The code is a black box. You care whether it works. This requires a level of trust in the system — and a quality of spec writing that almost nobody has developed yet.

**Level 5 — The Dark Factory**: No human writes code. No human reviews code. A spec goes in, working software comes out. The factory runs autonomously with the lights off. Almost nobody operates here. The industry is mostly between levels 1 and 3.

## The Wall Most Vibe Coders Hit

The gap between levels 1-2 and levels 3-5 isn't a technical problem. It's a judgment problem.

Jones documented it with data: in an MER randomized control trial, open-source developers using AI coding tools completed their tasks 19% *slower*. AI made experienced developers slower. The workflow disruption outweighed the generation speed — developers spent time evaluating suggestions, correcting almost-right code, context-switching between their own mental model and the model's output, debugging subtle errors that looked correct but weren't.

Most organizations are sitting in the bottom of the J-curve and interpreting the dip as evidence that AI tools don't work. They're using a new engine with an old transmission.

The teams that got to level 3 and above rewrote their workflow around agents as central — different testing strategies, different review processes, different deployment gates. They're shipping production code that improves with every model generation. The feedback loop is closed. They're going faster and faster. Everyone else is going measurably slower while convincing themselves they're speeding up.

The critical shift Jones names: from coordination to articulation. From making sure people are rowing in the same direction to making sure the direction is described precisely enough that machines can execute it. "If you think this is a trivial shift, you have never tried to write a specification detailed enough for an AI agent to implement correctly without human intervention."

## The BTD Angle

BTD exists partly because most vibe coders plateau at level 2. The promise of vibe coding is real — when software engineering costs approach zero, the economics of build vs. buy flip. A custom CRM built in an afternoon. Tools designed for your workflow rather than every company's workflow. That's the promise Nate Jones articulates: "Why pay Salesforce per-seat fees for a tool designed to serve every company on earth when you could have a tool designed to serve your company?"

But the honest answer to "does it work?" is: it depends. It depends on whether an AI agent can take the vague, implicit, half-articulated thing a human actually wants and turn it — quickly — into workable software with minimal sustainment costs.

Crossing that gap is not about learning more prompting tricks. It's about developing judgment. Judgment about what you're building, why specific design decisions exist, what the fallback is when the AI goes sideways. That's what Karpathy has that most vibe coders don't. He built nanoGPT from scratch. He understands the files he's asking the AI to edit. The vibe works because there's a foundation underneath it.

The BTD community is a place to develop that foundation — borrowed from creators who've built it, tested in live sessions where things break and you figure out why, not rehearsed demos where everything works on cue.

## At Different Levels

**Pre-beginner**: Start with 3Blue1Brown to build an intuition for what computation and learning actually look like. Don't worry about vibe coding yet — the vibe doesn't work if you have no model of what the code should be doing.

**Beginner**: You're at level 1-2. That's fine. The goal isn't to race to level 5 — it's to understand why the AI made each choice. When it builds something, ask it to explain the decision. Build the foundation Karpathy has.

**Builder**: You're working toward level 3 — writing specs and tests before code, not after. The shift is from reviewing output to defining success criteria in advance. Lean into [[borrowed-judgment]]: watch how Karpathy approaches problems, then apply that judgment to your domain.

## When to Surface

- When a member says "I just vibe code everything" — ask what level they're at and where they've gotten stuck
- When someone hits the J-curve (AI making them slower, not faster) — this is the level 1→2 transition problem
- When someone asks whether to learn to code or just use AI — the levels framework gives an honest answer: you need enough understanding to operate at level 3+
- When someone is ready to stop prompting and start speccing — the transition from level 2 to level 3

## Related Concepts
- [[borrowed-judgment]] — how you build the judgment to operate above level 2 without years of programming
- [[building-from-scratch]] — Karpathy's pedagogy for understanding what you're building
- [[skills-as-workflows]] — how BTD encodes the level 3+ workflow pattern into reusable Claude Code skills
