---
title: "GLM-5.1: Towards Long-Horizon Tasks"
creator: simon-willison
platform: articles
date: 2026-04-07
url: https://simonwillison.net/2026/Apr/7/glm-51/#atom-everything
---

# GLM-5.1: Towards Long-Horizon Tasks

Willison tests Z.ai's 754B MIT-licensed GLM-5.1 model using his pelican-on-a-bicycle benchmark. The model produced an excellent SVG unprompted with CSS animations, then correctly diagnosed and fixed its own animation bug when prompted — including understanding the SVG coordinate system difference between `transform` attributes and CSS transforms. A snapshot of open-weights frontier quality.

## Key Ideas
- GLM-5.1 (754B, MIT license) is available via OpenRouter and competitive with top closed models on SVG generation tasks
- The model self-diagnosed a CSS/SVG coordinate system conflict and fixed it correctly in a follow-up — good evidence of multi-turn reasoning on technical problems
- The pelican benchmark is a useful quick test of model capability across spatial reasoning, code generation, and self-correction
- MIT licensing on a 754B model matters for builders who need deployment flexibility

## Concepts
[[how-llms-work]], [[prompt-design]]

## Creator
[[simon-willison]]
