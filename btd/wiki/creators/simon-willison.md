---
title: Simon Willison
source_count: 30
last_updated: 2026-04-10
platforms: substack
---

# Simon Willison

Independent software developer, prolific blogger at simonwillison.net, and the most technically precise voice in the corpus on what LLMs actually do vs. what people think they do. Co-created Django (the web framework behind Instagram and Pinterest). Creator of Datasette, a data exploration tool used by investigative journalists worldwide. Coined "prompt injection," popularized "AI slop" and "agentic engineering." Has shipped over 100 open source projects. In November 2025 he crossed what he calls the inflection point — the moment coding agents went from "mostly works" to "almost always does what you told it to do" — and has been documenting the implications daily ever since. His blog is the closest thing to a live field report from a senior engineer who went AI-native and kept his critical faculties intact.

## Key Contributions

### The November 2025 Inflection Point
Willison's framing from his Lenny Rachitsky podcast appearance: GPT 5.1 and Claude Opus 4.5 in November 2025 crossed a threshold where agents stopped being a liability you had to babysit and started being a leverage multiplier you could trust on well-scoped tasks. He now writes 95% of his code from his phone. This is the single most grounded "why now" argument for [[vibe-coding]] in the corpus — not hype, but a specific capability threshold with a specific date.

### "Eight Years of Wanting, Three months of Building with AI"
Willison curates and annotates Lalit Maganti's landmark post on building syntaqlite with Claude Code. The piece is the most honest account of vibe-coding tradeoffs in the corpus: AI excels at tedious, checkable implementation tasks; it is "somewhere between unhelpful and harmful" when you don't yet know what you want; the architecture has to come from the human. Willison highlights it as required reading. Directly relevant for BTD users whose `blind_spot` is over-delegating design decisions to the agent. Links: [[vibe-coding]], [[llm-limitations]].

### Agentic Engineering Patterns
Three patterns Willison uses daily (from the Lenny podcast highlights): red/green TDD with agents, template-first development, and "hoarding" — building small reusable tools that compound over time. The "dark factory" concept (AI does its own QA, no human reviews the code) is his term for where this is heading and why it's dangerous. Useful framing for [[ai-agents]] users thinking about how to structure agent workflows that stay auditable.

### Prompt Injection and the Lethal Trifecta
Willison coined "prompt injection" and considers it an unsolved security problem. In the Lenny episode and associated posts he describes the "lethal trifecta" — the combination of conditions that will likely produce an AI Challenger-disaster-scale failure. For BTD users building [[ai-agents]] with external tool access, this is the non-optional security literacy content.

### Responsible Vibe Coding
Willison's term "responsible vibe coding" draws the line between using agents to ship faster (fine, valuable) and using agents to write code you can't evaluate (dangerous, especially for non-engineers who lack the taste to spot bad architecture). The cognitive debt angle — from his "Cognitive Impact of Coding Agents" post, which went viral at 1.1M views — is the clearest articulation of why [[claude-code]] exhausts experienced engineers: the bottleneck moved from writing to reviewing. Links: [[llm-limitations]], [[build-in-public]].

### Daily Shipping as a Practice
scan-for-secrets (a CLI tool to scan Claude Code transcript logs for accidentally exposed API keys), cleanup-claude-code-paste (a web tool for cleaning terminal copy-paste artifacts), datasette-ports, syntaqlite-playground — all built and shipped within days of each other. His blog is a live example of [[build-in-public]] at the pace AI enables. Each tool is small, purpose-specific, and built to solve a problem he hit personally.

## When to Surface This Creator

- User is technically experienced and needs the most precise account of what agents actually do → start with the Lenny podcast highlights
- User's `blind_spot` is "AI will figure out the architecture for me" → "Eight Years of Wanting" curation post
- User is building agents with external tool access → prompt injection / lethal trifecta content
- User asks about [[llm-limitations]] or why their vibe-coded app has hidden bugs → cognitive impact post + responsible vibe coding framing
- User wants to see what daily [[build-in-public]] looks like at high velocity → scan-for-secrets, cleanup tools, datasette-ports
- `calibrated_level` is builder or advanced → Willison is their peer, not their explainer

## Sources in Corpus
- 30 simonwillison.net posts: Lenny podcast highlights and full conversation, "Eight Years of Wanting" curation, cognitive impact of coding agents, scan-for-secrets (0.1 / 0.1.1 / 0.2 / 0.3), cleanup-claude-code-paste, datasette-ports, syntaqlite-playground, vulnerability research, supply chain attacks, and daily short-form notes on LLMs, Claude, security, and tooling
