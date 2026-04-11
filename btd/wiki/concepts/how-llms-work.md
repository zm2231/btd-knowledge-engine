---
title: How LLMs Work
source_count: 4
last_updated: 2026-04-10
sources:
  - andrej-karpathy/deep-dive-into-llms-like-chatgpt
  - andrej-karpathy/intro-to-large-language-models
  - andrej-karpathy/lets-build-gpt
  - repos/nanogpt
---

# How LLMs Work

The full pipeline from internet text to conversational AI. Karpathy's corpus covers this more thoroughly than anyone else in our collection, from the 1-hour overview to the line-by-line implementation.

## The Pipeline

1. **Pre-training**: scrape the internet, predict the next token. The model learns patterns in language (grammar, facts, reasoning) by trying to complete text. This is where the bulk of "knowledge" comes from.

2. **[[tokenization]]**: text gets split into tokens before the model sees it. BPE (Byte Pair Encoding) is standard. Tokenization decisions affect everything downstream.

3. **Architecture**: transformer with attention mechanism. Karpathy builds a full GPT from scratch in "Let's build GPT" and the nanoGPT repo. ~300 lines of Python for a working language model.

4. **Instruction tuning**: the pre-trained model is a text completer, not an assistant. Fine-tuning on human-written conversations turns it into something that follows instructions.

5. **RLHF / alignment**: reinforcement learning from human feedback. Humans rank model outputs; the model learns to produce outputs humans prefer. This is where "personality" comes from.

## At Different Levels

**Pre-beginner**: an LLM is a text prediction machine trained on the internet. It doesn't "know" things the way you do; it learned patterns. 3Blue1Brown's neural network video is the prerequisite.

**Beginner**: Karpathy's "Deep Dive into LLMs like ChatGPT" walks the full pipeline in ~2 hours. Best single video on the topic.

**Builder**: "Let's build GPT from scratch" + nanoGPT repo. You implement attention, layer normalization, the training loop. By the end you have a working (tiny) language model.

## Related Concepts
- [[tokenization]] — step 1 of the pipeline
- [[building-from-scratch]] — Karpathy's approach to teaching this
- [[attention-mechanism]] — the transformer's core operation
- [[backpropagation]] — how the model learns from training data
