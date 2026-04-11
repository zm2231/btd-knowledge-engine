---
title: MCP Servers
source_count: 3
last_updated: 2026-04-10
sources:
  - mark-kashef/undated-how-to-use-claude-mcps-to-instantly-build-n8n-ai-agents-masterclass
  - mark-kashef/undated-the-complete-beginner-s-guide-to-claude-code-even-if-you-re-not-technical
  - mark-kashef/undated-claude-code-turned-obsidian-into-my-dream-second-brain
---

# MCP Servers

An MCP server is a bridge between Claude and a real-world tool or service. It's what turns Claude from a chatbot that talks about your work into an agent that can actually do things in your workflow — read from your Notion, write to your database, send a Slack message, search GitHub, or open a file in Obsidian.

Without MCP, Claude can reason about things. With MCP, it can act on them.

## The Architecture (Plain Version)

Before MCP, if you wanted an AI to interact with a service (say, Slack), it needed a separate connection for each individual action: one for sending a message, one for reading channels, one for scheduling, and so on. Every connection was hardcoded. Brittle, unscalable, and broke whenever the service changed.

MCP changes this with one clean model:

- **A service** (Notion, Obsidian, GitHub, a database) exposes its capabilities through an MCP server
- **Claude connects to the server once**, getting access to every capability the server exposes
- **One key, many doors** — instead of one key per door, you authenticate once and Claude can use all the tools the server provides

The "MCP" acronym stands for Model Context Protocol. The "protocol" part is just a standard way for Claude and external services to talk to each other. You don't need to understand the protocol to use it. You just need to know: install the server, give it credentials, restart Claude, and it will show up as a set of available tools.

## What MCP Servers Actually Look Like

You configure MCP servers by editing a JSON config file (a settings file) inside Claude Desktop or Claude Code. Copy a snippet from the server's documentation, paste it in, add your credentials, restart — and the tools appear.

What "tools" means in practice: a Notion MCP server might give Claude 30+ actions — create page, query database, update properties, search workspace, and so on. The n8n MCP server exposes 38 functionalities from one server connection.

From there, Claude knows what tools it has available and uses them when relevant. You don't have to specify which tool to use. You just describe what you want done, and Claude picks the right tool.

## Why This Matters: The Agent Shift

The limit of a chatbot is that it only lives inside the conversation. Everything it does exists in text, in that window. It can't reach out and touch your actual systems.

MCP breaks that wall.

Once you connect Claude to your tools via MCP servers, the conversation becomes a control interface for your entire workflow. Tell Claude to check your Notion project tracker, pull the three tasks marked urgent, draft updates for each, and send a summary to the relevant Slack channel — and it can actually do that, in sequence, using the tools it has available.

This is the architecture underneath most serious AI agents. The agent isn't magic — it's a model with a good instruction set, connected to real tools through a protocol like MCP.

## Common MCP Servers for BTD Builders

| Server | What it unlocks |
|---|---|
| **Obsidian** | Read/write notes, search vault, update daily logs |
| **Notion** | Query databases, create pages, update properties |
| **GitHub** | Read repos, create issues, review PRs |
| **Supabase / Postgres** | Query and write to databases |
| **Playwright (by Microsoft)** | Autonomous browser control — Claude clicks around the web as a human would |
| **Firecrawl (YC-backed)** | Web scraping and content extraction |
| **n8n** | Connect to 38+ automation workflow tools from one server |
| **Context7** | Real-time updated documentation for Claude and OpenAI models |
| **Slack** | Send messages, read channels, schedule posts |

A note on trust: there are now thousands of MCP servers available. Stick to servers from established providers (Anthropic's official list, YC companies, Microsoft-backed tools) until you know what you're evaluating.

## Local vs. Remote

There are two kinds of MCP servers:

- **Local** — runs on your machine, talks to local apps and files (Obsidian, local databases). More privacy, more control.
- **Remote** — runs on a hosted service, connects to cloud tools (Notion, GitHub, Slack). Requires credentials; data leaves your machine.

For most BTD builders starting out, remote servers are easier (no local server management required) and cover the most common tools.

## MCP + Skills: The Compound Effect

MCP servers give Claude access to tools. [[skills-as-workflows]] tell Claude exactly how to use those tools in your specific workflow.

On their own, MCP servers mean Claude can reach Supabase or n8n. A skill that describes exactly which tools to call, in what order, with what logic, turns that raw access into a reliable, repeatable workflow — like a recipe that uses the right ingredients in the right sequence.

Mark Kashef's framing: instead of having Claude load an entire MCP server and iterate through every possible tool, write a skill that scopes the usage: "when invoking the Supabase MCP, focus on these five methods." This preserves Claude's context window and makes the behavior predictable.

The pattern — MCP for access, skills for behavior — is the foundation of any serious [[ai-agents]] setup.

## Setup in 3 Steps

1. Find an MCP server for the tool you want (Anthropic's docs, the server's own docs, or the Claude Desktop marketplace)
2. Copy the JSON config snippet, paste it into Claude's settings file, add your API key or credentials
3. Restart Claude — the tools appear

For Claude Code: run `claude mcp add` from your terminal, or use `claude mcp add --from-desktop` to import servers you've already configured in Claude Desktop.

## At Different Levels

**Pre-beginner**: MCP is how you connect Claude to the apps you already use. Once connected, you can ask Claude to do things in those apps — like "add this to my Notion project" or "search my Obsidian notes for X" — and it actually does it.

**Beginner**: MCP servers are integrations that give Claude access to external tools. You configure them in a settings file, restart Claude, and the tools show up. Each server can expose many capabilities — one connection, many actions.

**Builder**: MCP follows a standardized protocol where servers expose a tool manifest that Claude reads at session start. Local servers use stdio transport; remote use SSE. Scope server capabilities via skills to preserve context window and ensure deterministic tool selection. Layer agents on top of servers for quality assurance and self-verification loops.

## When to Surface

- User wants Claude to interact with their actual tools (Notion, Obsidian, GitHub, databases)
- User is asking why Claude "can't" do something (usually: it's not connected to the right tool)
- User wants to automate a workflow across multiple services
- User is setting up Claude Code for a real project for the first time
- User is confused about the difference between Claude as a chatbot vs. Claude as an agent

## Related Concepts
- [[ai-agents]] — what agents are and how MCP fits into the broader agent architecture
- [[claude-code]] — the primary interface where MCP servers get used for serious work
- [[skills-as-workflows]] — how to write skills that scope and direct MCP tool usage effectively
