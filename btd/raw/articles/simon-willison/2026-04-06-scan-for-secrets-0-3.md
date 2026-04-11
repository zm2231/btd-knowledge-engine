---
title: "scan-for-secrets 0.3"
creator: "simon-willison"
date: 2026-04-06T02:59:28.000Z
url: "https://simonwillison.net/2026/Apr/6/scan-for-secrets/#atom-everything"
platform: substack
source_type: substack
article_id: "https://simonwillison.net/2026/Apr/6/scan-for-secrets/#atom-everything"
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# scan-for-secrets 0.3

**Creator**: simon-willison  
**Date**: 2026-04-06T02:59:28.000Z  
**URL**: https://simonwillison.net/2026/Apr/6/scan-for-secrets/#atom-everything  
**Platform**: Substack

<p><strong>Release:</strong> <a href="https://github.com/simonw/scan-for-secrets/releases/tag/0.3">scan-for-secrets 0.3</a></p>
    <blockquote>
<ul>
<li>New <code>-r/--redact</code> option which shows the list of matches, asks for confirmation and then replaces every match with <code>REDACTED</code>, taking escaping rules into account.</li>
<li>New Python function <code>redact_file(file_path: str | Path, secrets: list[str], replacement: str = "REDACTED") -> int</code>.</li>
</ul>
</blockquote>

        <p>Tags: <a href="https://simonwillison.net/tags/projects">projects</a></p>
