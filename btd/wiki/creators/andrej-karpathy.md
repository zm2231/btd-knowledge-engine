---
title: Andrej Karpathy
source_count: 23
last_updated: 2026-04-10
platforms: youtube, twitter, repos
---

# Andrej Karpathy

Former Tesla AI director, OpenAI founding member. His content is the most technically dense in the corpus but also the most pedagogically intentional. He builds things from scratch, on camera, and explains every decision. His repos ARE his teaching; the code and the videos cover the same ground from different angles.

## Key Contributions

### [[building-from-scratch]]
His signature approach: implement something from zero to understand it. "Let's build GPT from scratch" doesn't skip the hard parts; it IS the hard parts. The makemore series, micrograd, nanoGPT, the tokenizer — each one is a full implementation that you follow line by line.

### [[tokenization]]
Covered in both video ("Let's Build the GPT Tokenizer") and code (minbpe repo). The video explains why tokenization matters and how BPE works conceptually. The repo has the actual implementation. Searching across both gives you "here's the idea" + "here's the code."

### [[llm-knowledge-bases]]
His April 2026 Twitter thread on using LLMs to build personal knowledge bases is the direct inspiration for this project's wiki layer. Raw data → LLM-compiled wiki → operated on by CLIs → viewable in Obsidian. The wiki compounds over time.

### [[how-llms-work]]
His "Deep Dive into LLMs like ChatGPT" and "Intro to Large Language Models" are the most comprehensive single-video explanations of LLM internals. Pre-training on internet text → instruction tuning → RLHF → deployment. He covers it all without simplifying away the important parts.

## Cross-Source Value
Karpathy is the strongest example of why multi-source search matters. Query "how does tokenization work" and you get his video explanation AND his Python implementation AND his tweets about why it matters. No other creator in the corpus has this depth across formats.

## Sources in Corpus
- 15 YouTube videos (deep ML tutorials, 1-6 hours each)
- 8 Twitter threads (AI commentary, knowledge base patterns)
- 3 code repos: minbpe (tokenizer), nanoGPT (GPT training), llm.c (C implementation)
