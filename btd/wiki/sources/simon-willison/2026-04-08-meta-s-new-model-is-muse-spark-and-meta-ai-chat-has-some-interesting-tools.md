---
title: "Meta's new model is Muse Spark, and meta.ai chat has some interesting tools"
creator: simon-willison
platform: articles
date: 2026-04-08
url: https://simonwillison.net/2026/Apr/8/muse-spark/#atom-everything
---

# Meta's new model is Muse Spark, and meta.ai chat has some interesting tools

A thorough exploration of Meta's Muse Spark model and the surprisingly capable 16-tool harness wired into meta.ai chat, including web browsing, Python code execution, image generation, sub-agent spawning, visual grounding (point/bbox/count), and Meta social media search. Willison's hands-on testing reveals the full tool surface by simply asking the model to describe it.

## Key Ideas
- Asking the model "what tools do you have access to — give me exact names and parameters" is a fast way to reverse-engineer any AI chat harness
- Meta AI includes `container.visual_grounding` for object detection, bounding boxes, and counting — natively baked in, not a separate API
- The `subagents.spawn_agent` tool confirms the sub-agent-as-tool pattern is now deployed in consumer AI products
- Code Interpreter (`container.python_execution`) + image generation + visual grounding in one harness enables powerful multi-modal analysis workflows

## Concepts
[[ai-agents]], [[mcp-servers]], [[prompt-design]]

## Creator
[[simon-willison]]
