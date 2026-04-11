---
title: "SQLite WAL Mode Across Docker Containers Sharing a Volume"
creator: "simon-willison"
date: 2026-04-07T15:41:00.000Z
url: "https://simonwillison.net/2026/Apr/7/sqlite-wal-docker-containers/#atom-everything"
platform: substack
source_type: substack
article_id: "https://simonwillison.net/2026/Apr/7/sqlite-wal-docker-containers/#atom-everything"
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# SQLite WAL Mode Across Docker Containers Sharing a Volume

**Creator**: simon-willison  
**Date**: 2026-04-07T15:41:00.000Z  
**URL**: https://simonwillison.net/2026/Apr/7/sqlite-wal-docker-containers/#atom-everything  
**Platform**: Substack

<p><strong>Research:</strong> <a href="https://github.com/simonw/research/tree/main/sqlite-wal-docker-containers#readme">SQLite WAL Mode Across Docker Containers Sharing a Volume</a></p>
    <p>Inspired by <a href="https://news.ycombinator.com/item?id=47637353">this conversation</a> on Hacker News about whether two SQLite processes in separate Docker containers that share the same volume might run into problems due to WAL shared memory. The answer is that everything works fine - Docker containers on the same host and filesystem share the same shared memory in a way that allows WAL to collaborate as it should.</p>

        <p>Tags: <a href="https://simonwillison.net/tags/docker">docker</a>, <a href="https://simonwillison.net/tags/sqlite">sqlite</a></p>
