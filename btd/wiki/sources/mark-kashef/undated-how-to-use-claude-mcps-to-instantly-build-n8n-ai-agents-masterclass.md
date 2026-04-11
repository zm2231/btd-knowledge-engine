---
title: "How to Use Claude & MCPs to INSTANTLY Build n8n AI Agents (MASTERCLASS)"
creator: mark-kashef
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=yfpVU_uEpy4"
---

# How to Use Claude & MCPs to INSTANTLY Build n8n AI Agents (MASTERCLASS)

41-minute masterclass on using Claude with MCP servers to design, generate, and debug n8n AI agent workflows. Covers how to connect the n8n MCP to Claude, use it to introspect available nodes and build valid JSON, and chain multiple services. Builds on Kashef's earlier n8n content with a more structured methodology and deeper coverage of MCP-to-skill coordination.

## Key Ideas
- n8n MCP lets Claude introspect live node types and methods, reducing hallucinated tool calls
- Workflow: connect n8n MCP → ask Claude to inventory available AI agent tools → generate JSON from business description
- MCPs provide the tooling; skills provide the recipe for using that tooling reliably
- Debug cycle: import JSON → identify errors → feed error back to Claude with the node spec → iterate
- This approach scales to multi-agent systems with orchestrators and specialized subworkflows

## Concepts
[[mcp-servers]], [[ai-agents]], [[skills-as-workflows]], [[claude-code]]

## Creator
[[mark-kashef]]
