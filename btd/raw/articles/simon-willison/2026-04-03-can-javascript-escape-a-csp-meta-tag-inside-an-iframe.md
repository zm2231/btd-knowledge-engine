---
title: "Can JavaScript Escape a CSP Meta Tag Inside an Iframe?"
creator: "simon-willison"
date: 2026-04-03T16:05:00.000Z
url: "https://simonwillison.net/2026/Apr/3/test-csp-iframe-escape/#atom-everything"
platform: substack
source_type: substack
article_id: "https://simonwillison.net/2026/Apr/3/test-csp-iframe-escape/#atom-everything"
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# Can JavaScript Escape a CSP Meta Tag Inside an Iframe?

**Creator**: simon-willison  
**Date**: 2026-04-03T16:05:00.000Z  
**URL**: https://simonwillison.net/2026/Apr/3/test-csp-iframe-escape/#atom-everything  
**Platform**: Substack

<p><strong>Research:</strong> <a href="https://github.com/simonw/research/tree/main/test-csp-iframe-escape#readme">Can JavaScript Escape a CSP Meta Tag Inside an Iframe?</a></p>
    <p>In trying to build my own version of Claude Artifacts I got curious about options for applying CSP headers to content in sandboxed iframes without using a separate domain to host the files. Turns out you can inject <code><meta http-equiv="Content-Security-Policy"...></code> tags at the top of the iframe content and they'll be obeyed even if subsequent untrusted JavaScript tries to manipulate them.</p>

        <p>Tags: <a href="https://simonwillison.net/tags/iframes">iframes</a>, <a href="https://simonwillison.net/tags/security">security</a>, <a href="https://simonwillison.net/tags/javascript">javascript</a>, <a href="https://simonwillison.net/tags/content-security-policy">content-security-policy</a>, <a href="https://simonwillison.net/tags/sandboxing">sandboxing</a></p>
