---
title: "scan-for-secrets 0.2"
creator: "simon-willison"
date: 2026-04-05T04:07:13.000Z
url: "https://simonwillison.net/2026/Apr/5/scan-for-secrets/#atom-everything"
platform: substack
source_type: substack
article_id: "https://simonwillison.net/2026/Apr/5/scan-for-secrets/#atom-everything"
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# scan-for-secrets 0.2

**Creator**: simon-willison  
**Date**: 2026-04-05T04:07:13.000Z  
**URL**: https://simonwillison.net/2026/Apr/5/scan-for-secrets/#atom-everything  
**Platform**: Substack

<p><strong>Release:</strong> <a href="https://github.com/simonw/scan-for-secrets/releases/tag/0.2">scan-for-secrets 0.2</a></p>
    <ul>
<li>CLI tool now streams results as they are found rather than waiting until the end, which is better for large directories.</li>
<li><code>-d/--directory</code> option can now be used multiple times to scan multiple directories.</li>
<li>New <code>-f/--file</code> option for specifying one or more individual files to scan.</li>
<li>New <code>scan_directory_iter()</code>, <code>scan_file()</code> and <code>scan_file_iter()</code> Python API functions.</li>
<li>New <code>-v/--verbose</code> option which shows each directory that is being scanned.</li>
</ul>
