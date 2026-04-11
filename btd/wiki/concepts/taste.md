---
title: Taste
source_count: 5
last_updated: 2026-04-10
sources:
  - beware-the-defaults/the-ai-skill-nobodys-practicing
  - nate-jones/claude-opus-4-6-the-biggest-ai-jump
  - nate-jones/google-new-ai-smarter-build-taste
  - nate-jones/the-5-levels-of-ai-coding
  - ethan-mollick/giving-your-ai-a-job-interview
---

# Taste

The ability to tell good from great. In code, in products, in ideas. When everyone can generate, the differentiator is knowing what good looks like — and being willing to say when it doesn't.

## The Shift Nobody Prepared For

For most of software history, the bottleneck was implementation. Could you build it? Could you build it fast enough? The scarce resource was execution.

AI flipped this. Nate Jones puts it plainly:

> "The bottleneck has moved from implementation speed to spec quality. And spec quality is a function of how deeply you understand the system, your customer, and your problem."

And from his analysis of the agentic era:

> "It's great judgment. It's what we call taste, which is vague, but typically means deeply understanding what the customer wants and being able to build it... the ability to know whether the output is actually really, really good. And those skills now have 100x leverage because they are multiplied by the number of agents that person can direct."

This is the core insight. When AI does the generation, the human role becomes evaluation. Taste is the skill that makes that role worth having.

## Why Nobody's Practicing It

The BTD Substack *The AI Skill Nobody's Practicing* names the failure mode directly: as AI output gets better-looking, people check it less carefully.

Speed erodes the review. AI drafts in 8 seconds; the review compresses to match. What used to be ten minutes with a pen becomes ten seconds with a thumb hovering over send. The form is technically reviewed. Nothing actually got caught.

Then something worse happens: the output starts *looking* right, consistently. Clean formatting, confident tone, citations that sound real. The brain starts using surface quality as a proxy for substance. "Looks right" quietly replaces "is right," and the swap goes unnoticed.

The research label for this is automation complacency. Raja Parasuraman spent two decades on it at George Mason: the more reliable an automated system, the worse humans become at catching its errors. The better the tool gets, the worse you get at catching it.

The result: people are generating more than ever and evaluating less than ever. Taste — the capacity to actually assess whether something is good — is atrophying precisely when it's becoming the only thing that matters.

## Taste Is Trained, Not Innate

The key thing BTD emphasizes: taste is not a fixed trait. It's a buildable skill.

Nate Jones: "Build the taste, and yes, it's a buildable skill to evaluate AI output in your domain."

The training path has three components:

**1. Exposure to great work.** You cannot evaluate against a standard you've never encountered. The corpus — what BTD is built on — is partly a taste-training library. Karpathy's code, 3Blue1Brown's explanations, Ethan Mollick's frameworks: these are examples of high quality in their domains. You absorb the standard by spending time with it.

**2. Deliberate evaluation.** Ethan Mollick's approach is a model here: he develops idiosyncratic benchmarks to test AI output — the same prompt across different models, over time, to build calibrated expectations. This is taste being built through repeated judgment calls. You have to actually decide: is this good? Why? What would better look like?

**3. Building a lot and being honest.** Taste develops fastest when you're producing work and getting feedback that tells you when it misses. The [[build-in-public]] operating mode accelerates this: sharing forces evaluation, and external feedback creates signals your own judgment might have missed.

## The One Question

From the BTD piece:

> "Before you send the next thing AI wrote for you... ask yourself one thing. Could I explain why this is right? Not 'does this look right.' Not 'did I read it.' Could you sit across from someone, point to any sentence, and explain why it's right?"

That question is a taste calibration. If the honest answer is no, you've rubber-stamped it. The inspection happened. The judgment didn't.

Zapier's updated AI fluency rubric captures the four behaviors that operationalize taste:

1. Define what good looks like before you start
2. Evaluate outputs critically
3. Catch what's wrong before it ships
4. Own the outcomes

The first one — defining what good looks like before you start — is taste applied prospectively. That's the hardest, and the most important.

## The Relationship to Borrowed Judgment

[[borrowed-judgment]] is how you access expert taste before you've developed your own. You load the patterns of people who have built well — their architectural instincts, their red flags, their "this will break at scale" intuitions — and use them to ask better questions at the beginning of a build.

Borrowed judgment is the near-term move. Developing taste is the long game.

The BTD Knowledge Engine is designed for both: the corpus gives you access to others' taste immediately (borrowed judgment); building experiments, evaluating outputs, and building in public over time develops your own.

Eventually, the goal is to not need borrowed judgment for a given domain — because you've built enough, evaluated enough, and been honest enough about what didn't work that your own taste is reliable.

## When to Surface

Surface this concept when a user:

- Accepts AI output without meaningful evaluation ("it looks good to me")
- Is iterating on prompts to get better output but can't articulate what "better" means
- Has technical skill but struggles to decide when something is actually done
- Is advancing in an agentic workflow and needs to know when to stop the agent
- Is confused about what skill to develop when AI can already do the generation
- Has been building for a while and is ready to move from borrowed judgment toward their own

## Related Concepts

- [[borrowed-judgment]] — accessing others' taste before developing your own
- [[build-in-public]] — how taste gets trained through visible work and honest feedback
- [[building-from-scratch]] — Karpathy's approach is taste-in-action: deep understanding, deliberate evaluation, no shortcuts until you understand the thing you're skipping
