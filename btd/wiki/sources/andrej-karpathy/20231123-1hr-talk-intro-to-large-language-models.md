---
title: "[1hr Talk] Intro to Large Language Models"
creator: andrej-karpathy
platform: youtube
date: 20231123
url: "https://www.youtube.com/watch?v=zjkBMFhNj_g"
---

# [1hr Talk] Intro to Large Language Models

Karpathy's "busy person's intro" to LLMs — a 60-minute standalone talk that covers what an LLM actually is (two files: weights + code), how training works at a high level, how inference happens, and what the practical limits of these systems are. The talk is pitched at a general technical audience, not ML practitioners, making it the single best entry point in the corpus for anyone trying to build a mental model of LLMs before touching one.

## Key Ideas
- An LLM is just weights + a small inference script — the "magic" is entirely in the numbers baked into the parameters during training
- Training is lossy compression of the internet into a neural network; the model doesn't "know" facts, it reconstructs plausible text
- LLMs are "dream machines" that hallucinate by default — grounding them (via retrieval, tools, or careful prompting) is a necessary engineering step, not an optional add-on
- The model has a "System 1" fast pattern-match mode and no reliable "System 2" slow deliberation — prompting techniques like chain-of-thought try to compensate
- Security threats (prompt injection, jailbreaks, data poisoning) are structural properties of how these models work, not bugs that will be patched

## Concepts
[[how-llms-work]], [[llm-limitations]], [[prompt-design]]

## Creator
[[andrej-karpathy]]
