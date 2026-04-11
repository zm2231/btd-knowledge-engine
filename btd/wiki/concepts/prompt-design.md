---
title: Prompt Design
source_count: 5
last_updated: 2026-04-10
sources:
  - andrej-karpathy/undated-how-i-use-llms
  - andrej-karpathy/undated-deep-dive-into-llms-like-chatgpt
  - ethan-mollick/2026-01-27-management-as-ai-superpower
  - ethan-mollick/2026-01-07-claude-code-and-what-comes-next
  - nate-jones/undated-why-2026-is-the-year-to-build-a-second-brain-and-why-you-need-one
---

# Prompt Design

Most people treat prompts like search queries — short, vague, hopeful. The people getting dramatically better results are treating prompts like job descriptions, contracts, and specifications. That shift is the whole skill.

## Context Over Cleverness

The single most impactful change you can make to a prompt is adding context. Not tricks or special phrases — context. Who you are, what you're trying to do, what good output looks like, what you've already tried.

Ethan Mollick's framing is useful here: giving an AI a task without context is like hiring someone brilliant and then refusing to tell them anything about the job. The AI will make assumptions to fill the gaps. Those assumptions are the default — and the default is often wrong.

Mollick's research shows that many prompt engineering "tricks" (chain-of-thought, specific phrasing) matter much less than they used to as models get stronger. What doesn't go away: clear task definition, relevant examples, and explicit output format.

## Few-Shot Examples: Show, Don't Just Tell

Karpathy's consistent practice: when giving instructions to an LLM, always include concrete examples. Not just "extract vocabulary from this text" — but four examples of input → output pairs. This is called a few-shot prompt, and it reliably increases accuracy.

The mechanism makes sense once you understand how LLMs work. The model is pattern-completing. Examples show it the pattern you actually want, rather than the pattern it would infer from your description alone. Zero-shot (description only) is fine for simple tasks; few-shot is the move for anything nuanced.

A practical implementation: Karpathy builds custom GPT configurations with saved system prompts + examples for tasks he runs repeatedly. The goal is to avoid copy-pasting the same setup prompt over and over — encode it once, reuse it.

## Prompts as APIs, Not Creative Writing

Nate Jones articulates this clearly: a scalable agentic prompt is a contract. Fixed input format. Fixed output format. No surprises.

When you're building something that needs to run reliably — a workflow, an automation, anything where AI output feeds into the next step — creative flexibility is a bug, not a feature. You want the model to fill out a form, not improvise.

The practical implementation: give the model a schema, define valid values for each field, specify how to handle ambiguous cases, and instruct it to return structured output (JSON, YAML) with no extra explanation. Reliable beats creative in these systems.

This reframes what a "good" prompt even is. For one-off questions, a good prompt is conversational and clear. For anything you'll run repeatedly or pipe into another system, a good prompt looks like a spec document.

## The Job Description Frame

Mollick's broader frame: AI delegation works like human delegation, just faster and more forgiving of incomplete specs. Every field has developed paperwork for this: product requirements docs, shot lists, design intent documents, five-paragraph orders. All of them are attempts to get what's in one person's head into someone else's actions.

These documents work remarkably well as AI prompts. A well-structured PRD handed to an AI gets better results than a casual request, for the same reason it gets better results from a human: it forces you to think through what you actually want.

A tip from practitioners: at the end of any PRD or spec you hand to AI, add "Review this and tell me anything that's ambiguous that the AI might make a decision on its own." The AI will reliably surface 7-12 assumptions hidden in your document. Fix those before running it.

## At Different Levels

**Pre-beginner**: The more specific you are about what you want and why, the better the AI does. Think of it like giving directions to someone new to town — you have to say more than you'd expect.

**Beginner**: Give the AI a role, a task, the format you want the output in, and at least one example of good output. That four-part structure handles most cases. For tasks you do repeatedly, save that structure as a reusable template.

**Builder**: Distinguish between prompts you run interactively (where flexibility helps) and prompts that are part of a pipeline (where structured output is required). For pipeline prompts: define a schema, enumerate valid values, specify error handling, and version-control the prompt like you version-control code. A prompt that feeds an automated system is an API — design it like one.

## When to Surface

- User is frustrated that AI "keeps giving the wrong thing" — almost always a context problem, not a model problem
- User is building something where AI output feeds into another step → prompts-as-APIs framing
- User does the same AI task repeatedly → custom system prompts and few-shot templates
- `goal_type` is "ship" or "build" → structured output and reliable contracts matter immediately
- `calibrated_level` is pre-beginner/beginner → the job description frame is the most actionable entry point

## Related Concepts
- [[borrowed-judgment]] — prompts are how you access the AI's judgment; what you ask shapes what judgment you get
- [[context-engineering]] — context in a prompt is compounding; the right context unlocks dramatically better output
- [[ai-for-non-technical]] — prompt design is the primary skill that separates non-technical users who get value from those who don't
- [[llm-limitations]] — knowing what AI gets wrong shapes how you write prompts to catch it
