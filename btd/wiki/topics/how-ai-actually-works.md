---
title: How AI Actually Works
type: topic
concepts: [how-llms-work, tokenization, attention-mechanism, backpropagation, llm-limitations]
last_updated: 2026-04-10
---

# How AI Actually Works

You don't need to implement a transformer to build with AI. But you do need a working mental model of what's happening under the hood — because when AI does something surprising (good or bad), that model is what lets you diagnose it, fix it, and build around it instead of just being confused.

This is not academic background reading. This is why prompts fail, why context windows fill up, why the model hallucinates on some questions but not others, and why longer conversations sometimes produce worse results. Every one of those phenomena has a mechanical cause. Once you know the pipeline, the failure modes stop feeling random.

Karpathy is the primary source here. Nobody in the corpus has explained this pipeline more clearly — and nobody has gone deeper, from 1-hour overview to line-by-line implementation from scratch.

---

## The Pipeline

Text goes in. A prediction comes out. Between those two things, there's a chain of specific operations. Here's the full chain.

**Step 1: Text becomes tokens.**
The model never reads words — it reads numbers. [[tokenization]] is the translation step: text gets split into subword chunks (tokens), each assigned an integer ID. "tokenization" might become ["token", "ization"]. The vocabulary is fixed at training time. This matters immediately for builders: cost is measured in tokens, not characters; rare words cost more tokens than common ones; a non-English sentence uses more tokens than its English equivalent.

**Step 2: Tokens get embedded.**
Each token ID maps to a high-dimensional vector — a point in mathematical space where similar meanings cluster together. "king" and "queen" land near each other; "dog" and "cat" do too. These starting vectors carry rough semantic meaning, but they're generic — the same vector for "mole" regardless of whether you're talking about a rodent or a skin condition or a unit of chemistry. The next step fixes that.

**Step 3: Attention transforms the embeddings in context.**
The [[attention-mechanism]] is the transformer's core innovation. Every token looks at every other token in the sequence and updates its own embedding based on what's relevant. "Mole" in "one mole of carbon dioxide" ends up with a very different vector than "mole" in "the mole on her arm." This context-sensitivity is why LLMs can track long-range dependencies in text — and why what you write earlier in a prompt influences how the model interprets what you write later. 3Blue1Brown's "Attention in Transformers, Step by Step" makes this visual; Karpathy codes it from scratch in "Let's build GPT."

**Step 4: The model was trained via backpropagation.**
The weights that drive steps 2 and 3 didn't arrive by design — they were learned. [[backpropagation]] is the algorithm that trained them: run text through the network, compare the predicted next token to the actual next token, compute how wrong each weight was, nudge everything slightly in the direction that reduces the error. Do that across trillions of tokens of internet text and the weights converge to something that encodes an enormous amount of world knowledge as statistical patterns. This is "pre-training." Instruction tuning and RLHF are additional rounds of the same process on curated conversation data — they shape the model into an assistant rather than a raw text predictor.

**Step 5: Limitations emerge from the structure.**
None of this is magic, and none of it looks up facts. [[llm-limitations]] are structural, not accidental. The model pattern-completes — it produces whatever text is most statistically plausible given the training distribution. That works extremely well most of the time. It produces confident-sounding hallucinations on rare facts or edge cases because plausible and correct are not the same thing. The context window — the maximum number of tokens the model can attend to at once — is finite, so long conversations eventually lose their early context. Knowing this is built in means you can design around it.

---

## What This Changes About How You Build

**Context windows are working memory, not storage.**
Karpathy's analogy: the context window is RAM. The model can only reason about what's currently in it. Dump 40 pages of documentation into the context and ask a question at the end — the answer may not reflect what was on page 3, because earlier tokens lose salience as the window fills. Build context-aware applications by being selective about what you put in the window, not by stuffing it.

**Tokenization affects your costs and your outputs.**
Tokens are the unit of billing for every major LLM API. A piece of code with lots of whitespace, a foreign-language prompt, an unusual proper noun — these all use more tokens than their character count suggests. More importantly: the tokenization boundary affects how the model processes the text. Karpathy's "Let's Build the GPT Tokenizer" documents specific bugs that are tokenization artifacts — arithmetic errors, worse performance on code indentation, multilingual degradation. If you're seeing a model do something weird with a specific kind of input, tokenization is worth checking.

**Hallucinations are predictable, not random.**
The model hallucinates on things that are rare in training data: obscure names, precise statistics, citations, anything from after its training cutoff. It doesn't hallucinate on things it's seen millions of times: common code patterns, well-known historical facts, standard prose structures. This means you can build a habit around the failure pattern — high trust for synthesis and drafts, verification required for specifics, and code execution for anything numerical. Karpathy's rule: don't let the model do arithmetic in prose; route it through code.

**The jagged frontier is real.**
Mollick's term for this: AI capability is uneven in ways that are hard to predict. A model that handles complex logical reasoning may stumble on basic formatting tasks. A model that writes excellent code may hallucinate a library's API. You only learn where the frontier falls in your specific domain by working in it. Which means the skill you're building is evaluative taste — knowing when to trust the output and when to check it.

---

## How Deep to Go

**Pre-beginner**: Start with one video. Karpathy's **"Intro to Large Language Models"** (1hr talk, 2023) is the fastest path from "I use ChatGPT" to "I understand what it is." He covers the full pipeline — pre-training, context window, hallucinations, agents — in accessible terms with no code. Watch this before anything else. Then 3Blue1Brown's **"But what is a neural network?"** if you want the visual intuition for the underlying math.

**Beginner**: Karpathy's **"Deep Dive into LLMs like ChatGPT"** runs ~3 hours and is the most thorough non-technical walkthrough of the pipeline in the corpus. He covers tokenization, transformer architecture, instruction tuning, RLHF, and practical limitations. Watch this in order. Take notes on the context window and hallucination sections — those directly apply to building. Pair it with 3Blue1Brown's **"Transformers, the tech behind LLMs"** (Deep Learning Chapter 5) and **"Attention in Transformers, Step by Step"** (Chapter 6) for the visual complement.

**Builder**: **"Let's build GPT: from scratch, in code, spelled out"** by Karpathy. You implement tokenization, the attention mechanism, the transformer blocks, the training loop. By the end you have a working language model in ~300 lines of Python. This is the session where all the abstractions collapse and you see what an LLM actually is. Follow with **"Let's Reproduce GPT-2 (124M)"** where he scales it up and covers Flash Attention and modern training infrastructure. The nanoGPT repo (`repos/nanogpt`) and minbpe repo (`repos/minbpe`) are the reference implementations.

---

## Related Topics

- [[ai-tooling-for-builders]] — once you have the mental model, the tools: which LLMs to use, API access, evals, prompt infrastructure
- [[btd-builder-arc]] — the full learning arc for BTD builders: from first LLM call to shipping something real
