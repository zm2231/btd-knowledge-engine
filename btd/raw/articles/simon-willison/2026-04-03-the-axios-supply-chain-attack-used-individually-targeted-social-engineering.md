---
title: "The Axios supply chain attack used individually targeted social engineering"
creator: "simon-willison"
date: 2026-04-03T13:54:53.000Z
url: "https://simonwillison.net/2026/Apr/3/supply-chain-social-engineering/#atom-everything"
platform: substack
source_type: substack
article_id: "https://simonwillison.net/2026/Apr/3/supply-chain-social-engineering/#atom-everything"
ingested: 2026-04-10
status: ingested
topics: []
meta_patterns: []
---

# The Axios supply chain attack used individually targeted social engineering

**Creator**: simon-willison  
**Date**: 2026-04-03T13:54:53.000Z  
**URL**: https://simonwillison.net/2026/Apr/3/supply-chain-social-engineering/#atom-everything  
**Platform**: Substack

<p>The Axios team have published a <a href="https://github.com/axios/axios/issues/10636">full postmortem</a> on the supply chain attack which resulted in a malware dependency going out <a href="https://simonwillison.net/2026/Mar/31/supply-chain-attack-on-axios/">in a release the other day</a>, and it involved a sophisticated social engineering campaign targeting one of their maintainers directly. Here's Jason Saayman'a description of <a href="https://github.com/axios/axios/issues/10636#issuecomment-4180237789">how that worked</a>:</p>
<blockquote>
<p>so the attack vector mimics what google has documented here: <a href="https://cloud.google.com/blog/topics/threat-intelligence/unc1069-targets-cryptocurrency-ai-social-engineering">https://cloud.google.com/blog/topics/threat-intelligence/unc1069-targets-cryptocurrency-ai-social-engineering</a></p>
<p>they tailored this process specifically to me by doing the following:</p>
<ul>
<li>they reached out masquerading as the founder of a company they had cloned the companys founders likeness as well as the company itself.</li>
<li>they then invited me to a real slack workspace. this workspace was branded to the companies ci and named in a plausible manner. the slack was thought out very well, they had channels where they were sharing linked-in posts, the linked in posts i presume just went to the real companys account but it was super convincing etc. they even had what i presume were fake profiles of the team of the company but also number of other oss maintainers.</li>
<li>they scheduled a meeting with me to connect. the meeting was on ms teams. the meeting had what seemed to be a group of people that were involved.</li>
<li>the meeting said something on my system was out of date. i installed the missing item as i presumed it was something to do with teams, and this was the RAT.</li>
<li>everything was extremely well co-ordinated looked legit and was done in a professional manner.</li>
</ul>
</blockquote>
<p>A RAT is a Remote Access Trojan - this was the software which stole the developer's credentials which could then be used to publish the malicious package.</p>
<p>That's a <em>very effective</em> scam. I join a lot of meetings where I find myself needing to install Webex or Microsoft Teams or similar at the last moment and the time constraint means I always click "yes" to things as quickly as possible to make sure I don't join late.</p>
<p>Every maintainer of open source software used by enough people to be worth taking in this way needs to be familiar with this attack strategy.</p>

        <p>Tags: <a href="https://simonwillison.net/tags/open-source">open-source</a>, <a href="https://simonwillison.net/tags/packaging">packaging</a>, <a href="https://simonwillison.net/tags/security">security</a>, <a href="https://simonwillison.net/tags/social-engineering">social-engineering</a>, <a href="https://simonwillison.net/tags/supply-chain">supply-chain</a></p>
