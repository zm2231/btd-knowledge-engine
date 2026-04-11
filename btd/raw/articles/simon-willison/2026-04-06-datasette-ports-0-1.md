---
title: "datasette-ports 0.1"
creator: "simon-willison"
date: 2026-04-06T00:23:55.000Z
url: "https://simonwillison.net/2026/Apr/6/datasette-ports/#atom-everything"
platform: substack
source_type: substack
article_id: "https://simonwillison.net/2026/Apr/6/datasette-ports/#atom-everything"
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# datasette-ports 0.1

**Creator**: simon-willison  
**Date**: 2026-04-06T00:23:55.000Z  
**URL**: https://simonwillison.net/2026/Apr/6/datasette-ports/#atom-everything  
**Platform**: Substack

<p><strong>Release:</strong> <a href="https://github.com/datasette/datasette-ports/releases/tag/0.1">datasette-ports 0.1</a></p>
    <p>Another <a href="https://gisthost.github.io/?f92d8a6bdadee1c77972b5e51954144e">example</a> of README-driven development, this time solving a problem that might be unique to me.</p>
<p>I often find myself running a bunch of different <a href="https://datasette.io">Datasette</a> instances with different databases and different in-development plugins, spreads across dozens of different terminal windows - enough that I frequently lose them!</p>
<p>Now I can run this:</p>
<pre><code>datasette install datasette-ports
datasette ports
</code></pre>
<p>And get a list of every running instance that looks something like this:</p>
<pre><code>http://127.0.0.1:8333/ - v1.0a26
  Databases: data
  Plugins: datasette-enrichments, datasette-enrichments-llm, datasette-llm, datasette-secrets
http://127.0.0.1:8001/ - v1.0a26
  Databases: creatures
  Plugins: datasette-extract, datasette-llm, datasette-secrets
http://127.0.0.1:8900/ - v0.65.2
  Databases: logs
</code></pre>

        <p>Tags: <a href="https://simonwillison.net/tags/datasette">datasette</a></p>
