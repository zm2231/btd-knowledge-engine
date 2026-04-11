---
title: Context Engineering
source_count: 3
last_updated: 2026-04-10
sources:
  - nate-jones/prompt-engineering-is-dead-context-engineering-is-dying-what-comes-next-changes-everything
  - nate-jones/you-don-t-need-saas-the-0-10-system-that-replaced-my-ai-workflow
  - mark-kashef/the-complete-beginner-s-guide-to-claude-code-even-if-you-re-not-technical
---

# Context Engineering

Prompt engineering was always the wrong frame. The words you type matter far less than the information architecture you give AI to work with. Context engineering is the shift from crafting isolated instructions to crafting the entire information state an AI operates within — and it's the skill separating builders who plateau from builders who compound.

## What It Is

Anthropic's foundational piece (September 2025) defined context engineering as the shift from crafting isolated instructions to crafting the entire information state an AI operates within. Harrison Chase (LangChain) put it bluntly: "Everything's context engineering. It describes everything we've done at LangChain without knowing the term existed."

The evolution Nate Jones lays out in **"Prompt Engineering Is Dead"**:

1. **Prompt craft** — the words you choose in a single message. Session-based, personal, ephemeral. The era of "1,000 how-to-write-the-perfect-prompt blog posts, most of them terrible."
2. **Context engineering** — the information architecture surrounding the prompt: RAG pipelines, MCP servers, system prompts, CLAUDE.md files, examples, constraints, project history. Where the industry is now.
3. **Intent engineering** — encoding organizational purpose into infrastructure. Not prose in a system prompt, but structured parameters that shape how agents make decisions autonomously. Where things are going.

## What It Looks Like in Practice

**The memory problem underneath prompting**: "The best prompt in the world cannot compensate for an AI that does not know what you've been working on, what you've already tried, what your constraints are, who the key people in your life are, or what you decided last Tuesday." — Nate Jones

Concrete layers of context infrastructure:

- **CLAUDE.md files** — project-level instructions that load automatically, telling the AI what this repo is, how it works, what conventions to follow. The [[claude-code]] equivalent of a project README written for an AI collaborator.
- **System prompts** — persistent instructions that frame every interaction before the user types anything.
- **Examples (few-shot)** — showing the AI the desired output format, tone, or reasoning pattern rather than describing it.
- **RAG / retrieval** — dynamically pulling relevant documents, history, or data into the context window when needed. This is [[llm-knowledge-bases]] applied to real-time AI interaction.
- **MCP servers** — the emerging standard for giving AI agents structured, live access to external knowledge and tools.
- **Conversation history and memory** — the logged record of what's been tried, decided, and learned. Without this, every chat starts from zero.

## The Vibe Coder Plateau

Builders who stay at the prompt-craft level hit a ceiling. They keep re-explaining themselves in every chat window. They switch tools and lose everything. They wonder why AI still "feels like a party trick" — same model, wildly different outcomes.

The variable is infrastructure, not cleverness. The 10x-more-effective peers aren't writing better prompts — they've built context infrastructure that does the heavy lifting before they type a single word.

## At Different Levels

**Pre-beginner**: Prompts are what you type. Context is everything else the AI knows before you type it. Better context means better results, automatically.

**Beginner**: Start with a CLAUDE.md in every project. Write it as if you're onboarding a very capable new hire who has no memory of your previous conversations. Describe the project, the conventions, the constraints, and what not to do.

**Builder**: Layer the full stack — CLAUDE.md for project context, a [[second-brain]] or open brain for personal/cross-project memory via MCP, system prompts for agent behavior, and retrieval for dynamic knowledge access. At this level, you spend more time building context infrastructure than writing individual prompts.

## When to Surface

- User is re-explaining the same project constraints in every session
- AI outputs feel generic despite good prompts
- User is building with [[claude-code]] and hasn't set up a CLAUDE.md
- User mentions frustration that switching AI tools means "starting over"
- User is asking about agents — context engineering is the prerequisite for reliable agent behavior

## Related Concepts

- [[prompt-design]] — the craft-level precursor; still useful, but not sufficient on its own
- [[claude-code]] — the primary environment where context engineering plays out for builders (CLAUDE.md, slash commands, project structure)
- [[llm-knowledge-bases]] — the architectural pattern for making knowledge retrievable by AI systems
- [[second-brain]] — the personal knowledge layer that feeds into context infrastructure over time
