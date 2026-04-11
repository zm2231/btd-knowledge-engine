---
title: "Claude Code's Document Skills Are an UNFAIR ADVANTAGE"
creator: mark-kashef
platform: youtube
date: undated
url: "https://www.youtube.com/watch?v=F6JTJ9GeSOY"
---

# Claude Code's Document Skills Are an UNFAIR ADVANTAGE

Shows how to use Claude Code's document-generation skills (from Anthropic's GitHub skills repo) to produce polished PDFs, PowerPoint decks, Excel files, and Word docs from a single prompt. Includes an Easter egg: scraping a site's branding via Firecrawl, converting it to JSON, and feeding it to Claude Code to match a publication's visual style. Also covers the reverse-engineering path — extracting how Claude generated a document on the front end, packaging it as a zip, and recreating it in Claude Code without GitHub.

## Key Ideas
- Clone Anthropic's skills repo to get 15+ document-generation skills ready to use in Claude Code
- Documents are just code — Claude writes Python to generate DOCX, XLSX, PDF, PPTX
- Scrape any site's brand JSON via Firecrawl and inject it to style documents to match
- Reverse-engineer a document by asking Claude to package all code/architecture as a zip, then recreate in a new session
- Claude Code's context window stays clean with `/context`; open separate sessions per document type

## Concepts
[[claude-code]], [[skills-as-workflows]], [[prompt-design]], [[context-engineering]]

## Creator
[[mark-kashef]]
