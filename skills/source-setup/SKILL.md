---
name: source-setup
description: >
  Help a user build their personal knowledge corpus from scratch. Use this skill when someone
  says "I want to add my own sources," "set up my instance," "who should I follow," "I want
  to track [creator]," "add my favorite podcast," "I read this newsletter," "index my notes,"
  or anything about populating a new or existing instance with content they care about. Also
  triggers when someone just ran btd init and has an empty instance. Works for ANY instance,
  not just btd.
---

# Source Setup

You're helping someone build their personal knowledge corpus. This isn't about adding everything; it's about adding the right things for this specific person. If they have a constraint profile, use it. If they don't, figure out what they need through conversation.

## First: Who Are They?

Before suggesting any sources, understand the person:

```bash
btd profile list --instance {instance}
btd profile show {user} --instance {instance}
```

If they have a profile, their `domain`, `goal_type`, `calibrated_level`, and `blind_spots` tell you exactly what content to prioritize. If they don't have a profile yet, ask:

- "What are you trying to learn or build?"
- "Who do you already follow that you find useful?"
- "What format do you prefer? Videos, articles, podcasts?"

## The Setup Flow

### Step 1: Start with who they already follow

Don't suggest creators. Ask who they already consume. The best corpus starts with content they already trust; the system just makes it searchable and cross-referenced.

"Name 3-5 people whose content you find yourself going back to. YouTube channels, newsletters, podcasts, Twitter accounts, whatever."

For each one:
```bash
btd add {slug} "{Name}" --youtube {url} --instance {instance}
btd scan {slug} --instance {instance}
```

### Step 2: Audit what the scan found

After scanning, review the catalog with them:
```bash
btd status --instance {instance}
```

Help them pick what to ingest. Not everything. The canonical pieces:
- "Which 5-10 videos/articles from this creator changed how you think about something?"
- "If you could only keep 10 pieces of their content, which ones?"

```bash
btd ingest {slug} --top --limit 10 --instance {instance}
```

### Step 3: Fill gaps based on profile

If they have a profile, check whether their sources cover their needs:

| Profile field | What to look for |
|---|---|
| `domain` | Do they have sources that go deep on their domain? |
| `goal_type: learn` | Do they have learning science content? (study methods, habits) |
| `goal_type: build` | Do they have builder content? (architecture, shipping, decisions) |
| `calibrated_level: pre-beginner` | Do they have beginner-accessible sources? |
| `blind_spots` | Do they have sources that address what they're not thinking about? |
| `accountability_pattern` | Do they have sources on habits, systems, follow-through? |

Suggest creators that fill the gaps. Be specific about why: "Your profile shows you want to learn ML but you're a pre-beginner. 3Blue1Brown's deep learning series is the visual foundation before you touch Karpathy's code."

### Step 4: Build the index

```bash
btd index --instance {instance}
```

### Step 5: Test with their actual questions

Ask them to search for something they actually want to know:
```bash
leann search btd-{instance} "their question" --top-k 5 --non-interactive
```

If results are weak (< 0.5 scores) on topics they care about, that's a gap. Go back to step 3.

## Source Types and How to Add Them

Walk them through whichever platforms they use:

**YouTube creator:**
```bash
btd add {slug} "{Name}" --youtube "https://www.youtube.com/@{channel}" --instance {instance} --scan
btd ingest {slug} --top --limit 10 --instance {instance}
```

**Newsletter/Substack:**
```bash
btd add {slug} "{Name}" --substack "https://{publication}.substack.com/" --instance {instance} --scan
btd ingest:substack {slug} --limit 10 --instance {instance}
```

**Podcast:**
```bash
btd add {slug} "{Name}" --podcast "{rss-feed-url}" --instance {instance} --scan
btd ingest:podcast {slug} --limit 5 --instance {instance}
```
Note: podcast ingestion requires whisper transcription. Warn them it's slower.

**Twitter/X:**
```bash
btd add {slug} "{Name}" --twitter "{handle}" --instance {instance} --scan
btd ingest:twitter {slug} --instance {instance}
```

**Code repo:**
```bash
btd ingest:repo https://github.com/{owner}/{repo} --instance {instance}
```

**Manual content (articles, notes, meeting transcripts):**
Drop `.md` files with YAML frontmatter into the right directory:
```
{instance}/raw/articles/{creator}/
{instance}/raw/transcripts/
```

Frontmatter template:
```yaml
---
title: "Title of the piece"
creator: creator-slug
platform: article
url: "https://..."
---
```

## Multi-Platform Creators

When a creator publishes across platforms, register all of them at once:
```bash
btd add karpathy "Andrej Karpathy" \
  --youtube "https://www.youtube.com/@AndrejKarpathy" \
  --twitter karpathy \
  --instance {instance} --scan
```

Then ingest from each platform. The value is cross-source search: a query returns the video explanation AND the tweet AND the code.

## When They're Done

Run status and do a search audit:
```bash
btd status --instance {instance}
btd wiki status --instance {instance}
```

Then tell Claude to compile the wiki:
```
Compile wiki pages from the recent sources
```

Or: open Obsidian pointed at the instance folder to browse everything visually.

## What NOT to Do

- Don't bulk-ingest a creator's entire catalog. Most of it is noise.
- Don't suggest creators the user doesn't resonate with. Trust their taste.
- Don't skip the search test. If search doesn't return useful results, the corpus isn't done.
- Don't add sources just for volume. 50 well-chosen pieces beat 500 random ones.
