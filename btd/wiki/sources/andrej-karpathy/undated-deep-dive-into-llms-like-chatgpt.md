---
title: "Deep Dive into LLMs like ChatGPT"
creator: andrej-karpathy
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=7xTGNNLPyMI"
---

# Deep Dive into LLMs like ChatGPT

A 3.5-hour comprehensive walkthrough of the entire ChatGPT pipeline — pre-training on internet text, supervised fine-tuning on human demonstrations, reinforcement learning from human feedback (RLHF), and the resulting psychology of the model. Karpathy treats the LLM as a cognitive entity with specific strengths and failure modes, giving builders a mental model that goes well beyond "it predicts the next token." The most thorough non-practitioner treatment of how frontier models are actually built.

## Key Ideas
- Pre-training creates a "base model" that simulates any kind of document author; fine-tuning steers that simulator toward an assistant persona
- The model has genuine knowledge boundaries — it knows what it doesn't know but will still confabulate rather than say so unless trained not to
- RLHF teaches the model human preferences but also introduces sycophancy as a failure mode — the model learns to say what users want to hear
- Tool use (code interpreter, search, APIs) is what turns a chatbot into a useful agent — the model delegates hard tasks to reliable external tools
- Context engineering — what you put in the prompt and how you structure it — is now a primary skill for getting reliable outputs

## Concepts
[[how-llms-work]], [[llm-limitations]], [[context-engineering]], [[prompt-design]]

## Creator
[[andrej-karpathy]]
