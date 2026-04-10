---
title: Borrowed Judgment
source_count: 4
last_updated: 2026-04-10
sources:
  - btd-group/group-idea
  - btd-group/build-lab-skill-development-rag
  - btd-group/group-session-ai-systems-product
  - btd-group/group-session-deconstructing-greatness
---

# Borrowed Judgment

The core thesis of the BTD Knowledge Engine: the most expensive mistakes in any build happen in the first 10%. Borrowed judgment is the act of loading expert thinking into your head *before* you write a line of code — not to imitate the expert, but to ask better questions at the moment they matter most.

## The Insight

The value isn't the corpus. The value is accessing the judgment of people who have already made the mistakes you're about to make.

From the BTD group session: "Z's brain is valuable because Z has built things and knows which decisions matter at which stage. The corpus is a proxy for that judgment when you don't have a Z in the room."

Most builders skip the first 10%. They start building because starting feels like progress. But the architectural decisions you make in hour one — your data model, your tool choices, what you're deferring — get baked into everything that follows. Borrowed judgment is about making those decisions with expert-level context instead of first-timer defaults.

## What It Actually Does

You show up with: "I'm building a client intelligence tool that pulls from transcripts, surfaces patterns, and feeds a pre-call brief."

The system does:

1. **Interviews you** through the lens of the corpus — not generic questions, but the questions the best builders would ask: "What's the smallest version that proves the core loop works? What are you deferring that will bite you in week three?"
2. **Returns an architecture** grounded in how the people in the corpus actually build — tool choices, file structure, where to put state, what to skip in v1
3. **Flags the traps** before you hit them — "Karpathy's pattern here would be X. You're about to do Y. Here's why Y breaks at scale."
4. **Gives you a build order** that reflects taste, not just a checklist

## Why It Works for BTD

Two builders can show up with the same project idea and get completely different architectures, because the interview surfaces different constraints: your stack, your team, your time horizon, your risk tolerance, what you've already tried. The corpus is the same. The output diverges through the interview.

The experiment *is* the build. The feedback is immediate and concrete: did the architecture hold up, did you avoid the trap you would have fallen into otherwise.

## The Moat

The interview layer has to be good, not performative. The scarce ingredient is the question bank — the 15 questions a great builder asks before starting that every first-timer skips. The corpus gives you the answers. The interview gives you the questions. Without the right questions, the best corpus in the world produces generic output.

The intake skill (SKILL.md) is that question bank.

## Related Concepts
- [[accountability-pattern]] — constraints surface through the interview
- [[building-from-scratch]] — Karpathy's approach is borrowed judgment in action
- [[llm-knowledge-bases]] — the technical layer underneath
