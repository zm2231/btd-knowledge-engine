---
title: LLM Limitations
source_count: 5
last_updated: 2026-04-10
sources:
  - andrej-karpathy/undated-deep-dive-into-llms-like-chatgpt
  - andrej-karpathy/undated-how-i-use-llms
  - andrej-karpathy/2026-03-28-2037921699824607591
  - ethan-mollick/2025-10-19-an-opinionated-guide-to-using-ai-right-now
  - nate-jones/undated-google-s-new-ai-is-smarter-than-everyone-s-but-it-costs-half-as-much-here-s-why-
---

# LLM Limitations

AI will tell you something confidently wrong with the same tone it uses when it's right. That's not a bug they're working on — it's structural. Understanding why it happens is the difference between using AI well and being burned by it.

## The Core Problem: Confident Incorrectness

LLMs don't retrieve facts. They predict what text should come next based on patterns in their training data. When a model "knows" something, that knowledge is stored as statistical associations across billions of parameters — a vague recollection, not a lookup.

Karpathy puts it plainly: information that appears frequently in training data is more likely to be recalled correctly. Rare facts, obscure names, precise numbers — these are exactly the things models are most likely to get wrong, and they'll produce them with the same confident fluency as things they get right.

The result: hallucination. Not lying, not guessing — the model genuinely pattern-completing toward plausible text. A hallucinated citation looks like a real citation. A wrong date sounds like the right date.

## Karpathy's Self-Experiment

In a 2026 tweet, Karpathy documented this perfectly. He spent four hours using an LLM to meticulously improve an argument for a blog post. It was compelling. He then asked the same LLM to argue the opposite position. The LLM demolished his entire argument and convinced him the opposite was true.

The lesson: LLMs are persuasion machines, not truth machines. They will construct a convincing case for whatever position they're completing toward. Fluency is not accuracy. A well-structured argument from an AI is evidence that the AI can write arguments — not that the argument is correct.

## What Specifically Goes Wrong

**Hallucinated facts**: Names, citations, statistics, dates — especially obscure ones. The more specific and rare, the higher the risk. Karpathy explicitly distrusts mental arithmetic by LLMs on large numbers and recommends routing that work through code execution instead.

**Confident self-misrepresentation**: Models can hallucinate about their own capabilities and actions. Mollick notes this explicitly: asking an AI to explain its own reasoning does not get you reliable insight into its logic. The explanation is another completion, not an introspective report.

**Knowledge cutoffs**: Every model has a training cutoff. Events, papers, software versions, people's current roles — anything that changed after training is either missing or wrong. The model won't always signal this; it may produce a plausible-sounding answer based on older information.

**Context window limits**: Every model has a maximum amount of text it can process at once. Long documents, long conversations — once you exceed the window, earlier content effectively disappears. Conclusions drawn at the end of a long session may not reflect what was said at the start.

**The jagged frontier**: Mollick's phrase for this. AI is very good at some things and unexpectedly poor at others, in ways that are hard to predict without experience. A model that can review a complex mathematics paper for logical errors may stumble on basic formatting tasks. The capability profile is uneven and changes with each model update.

## Not a Reason to Avoid AI

This is the fine print most people never read — in both directions. The people who over-trust AI miss errors they should catch. But the people who under-trust AI (or avoid it because "it makes things up") are leaving enormous value on the table.

Mollick's framing: hallucinations are far less of a concern than they used to be. Newer models are substantially better. Answers are more likely to be right when they come from advanced models and especially when the model has done a web search. The failure mode is real but manageable.

The correct response to LLM limitations is not skepticism of AI as a category — it's a verification habit. Use AI for what it's genuinely good at (drafts, synthesis, exploration, code, analysis). Build in checkpoints where you verify outputs that matter. The skill is knowing which outputs need verification and which don't.

## Nate Jones on Evaluative Taste

Jones makes a point worth sitting with: as models get stronger, the bottleneck shifts from "can AI do it" to "can you tell whether what AI produced is actually good." This is a skill — buildable, but not automatic. Domain expertise matters here. A non-expert can't catch a subtle error in a domain they don't know.

The implication: using AI in a domain you don't understand is higher risk than using it in one you do. Not because the model performs differently, but because your ability to catch its errors is lower.

## The Default That's Wrong in Both Directions

Most people who haven't thought carefully about this land in one of two broken defaults:

1. **Over-trust**: treat AI output as factual, skip verification, get burned on details that matter.
2. **Under-trust**: avoid AI or use it only for low-stakes tasks because "you can't trust it," leaving the leverage on the table.

The correct calibration is task-specific. For brainstorming and drafts: high trust, low verification burden. For facts, citations, numbers, technical specifications that will be acted on: verify before relying.

## At Different Levels

**Pre-beginner**: AI can be confidently wrong. Always double-check specific facts — especially names, dates, numbers, and anything you'll share publicly or act on.

**Beginner**: Understand the jagged frontier: AI is extremely good at some things and surprisingly bad at others. Build a sense for where it excels in your domain versus where it regularly stumbles. Treat its output like a smart first draft from someone who sometimes invents sources.

**Builder**: Design workflows with verification built in. For factual outputs: ask the model to flag uncertainty ("if you're not sure about this, say so"). Use web search to ground factual claims. For structured outputs, run a validation step. Karpathy's move: route numerical computation through code execution, not the model's arithmetic. The model is a reasoning layer, not a calculation engine.

## When to Surface

- User treats AI output as ground truth without checking → over-trust default; this page resets calibration
- User says "AI makes stuff up, I don't use it" → under-trust default; the limitations are real but manageable
- `goal_type` involves anything public-facing, factual, or consequential → verification habits matter immediately
- User working in an unfamiliar domain and relying on AI → flag that evaluative taste is the bottleneck
- Post-check-in: user reports being burned by AI output → diagnose whether it was a hallucination, cutoff, or jagged frontier issue

## Related Concepts
- [[prompt-design]] — knowing the limitations shapes how you write prompts to catch errors before they propagate
- [[defaults]] — most AI usage defaults are wrong; this is the technical version of why
- [[how-llms-work]] — the statistical pattern-completion mechanism is why confident incorrectness is structural, not accidental
- [[borrowed-judgment]] — limitations define the conditions under which borrowed judgment can be trusted
