# Getting Started

You have Claude Code. You want to use the knowledge engine. Here's everything, start to finish.

## Setup (one time, ~5 minutes)

Open your terminal (Claude Code opens one for you) and run these one at a time:

```bash
# Clone the repo
git clone https://github.com/zm2231/btd-knowledge-engine.git
cd btd-knowledge-engine

# Install dependencies
npm install

# Install the search engine
pip install leann

# Install whisper for podcast transcription (Mac only, optional)
pip install lightning-whisper-mlx

# Install YouTube scanning
brew install yt-dlp

# Install Twitter scanning (optional)
brew install steipete/tap/bird
```

If any of those fail, don't worry. You only need `npm install` and `pip install leann` to start. The others are for specific content sources.

## Use the BTD Group's Corpus (already built)

The repo ships with the BTD group's instance already indexed. 48 documents from 5 creators, searchable right now:

```bash
# Search across everything
leann search btd-btd "how to think about building a new project"

# See what's in the corpus
node scripts/status.js
```

That's it. You're searching across Karpathy, 3Blue1Brown, Nate Jones, Mollick, and Lex Fridman.

## Start Your Own Instance

If you want your own separate collection:

```bash
# Create your instance
node scripts/init.js my-kb

# Add a creator you follow
node scripts/add-creator.js karpathy "Andrej Karpathy" \
  --youtube "https://www.youtube.com/@AndrejKarpathy" \
  --instance my-kb --scan

# Pull down their top 10 videos
node scripts/batch-ingest.js karpathy --limit 10 --top --instance my-kb

# Build the search index
node scripts/index.js --instance my-kb

# Search
leann search btd-my-kb "how transformers work"
```

## Run the Intake Interview

This is where it gets personal. The intake interview figures out who you are, what you're trying to do, and what you're missing.

```bash
node scripts/session.js intake your-name
```

This prints out the interview skill. Load it into Claude Code as context (paste it in or reference the file), then start the conversation. Claude will run you through 5 phases:

1. **What are you doing?** — not the feature list, what changes if this works
2. **What do you actually know?** — calibrated by probing, not self-assessment
3. **What aren't you thinking about?** — the blind spot scan
4. **What are your real constraints?** — time, skills, tools, accountability
5. **Synthesis** — plays it back, proposes first experiment

After the interview, Claude produces a constraint profile (YAML block). Save it:

```bash
# Paste the YAML and hit Ctrl+D
node scripts/profile.js save your-name --stdin
```

## Generate Your First Experiment

```bash
node scripts/session.js experiment your-name
```

This pulls your profile, searches the corpus for content that matches your gaps and blind spots, and packages everything Claude needs to generate a week-long experiment with a testable hypothesis.

## Come Back for Check-in

After doing the experiment for a week:

```bash
node scripts/session.js checkin your-name
```

Loads your profile, your experiment, searches for relevant content, and gives Claude the re-entry protocol. It figures out what happened, updates your profile, and generates the next experiment.

## Check Your Status Anytime

```bash
node scripts/session.js status your-name
```

## Using Skills in Claude Code

The skills in this repo (`skills/btd-intake/SKILL.md` and `skills/btd-intake/RE-ENTRY.md`) work directly as Claude Code skills. You can:

1. **Reference them in conversation**: "Use the skill at `skills/btd-intake/SKILL.md` to interview me"
2. **Load as context**: Claude Code reads the file and follows the instructions
3. **Add to your CLAUDE.md**: Reference the skill path so it's always available

The session orchestrator (`session.js`) assembles everything for you — profile, experiments, corpus results, and the right skill — so you don't have to wire it together manually.

## Adding Content

### YouTube
```bash
node scripts/add-creator.js slug "Name" --youtube "https://youtube.com/@channel" --scan
node scripts/batch-ingest.js slug --limit 10 --top
```

### Twitter
```bash
node scripts/add-creator.js slug "Name" --twitter handle --scan
node scripts/ingest-twitter.js slug
```

### Podcasts
```bash
node scripts/add-creator.js slug "Name" --podcast "https://feed-url/rss"
node scripts/ingest-podcast.js slug --feed "https://feed-url/rss" --limit 3
```

### Substack
```bash
node scripts/scan.js slug --substack
node scripts/ingest-substack.js slug --limit 5
```

### Code Repos
```bash
# Preview what would be indexed
node scripts/ingest-repo.js https://github.com/karpathy/minbpe --scan

# Index the repo (clones it, adds to LEANN)
node scripts/ingest-repo.js https://github.com/karpathy/minbpe

# Or a local repo
node scripts/ingest-repo.js /path/to/your/project
```

Now you can search across someone's talks AND their actual code in the same query.

### Manual (articles, transcripts, meeting notes)
Drop any `.md` file into `btd/raw/articles/` or `btd/raw/transcripts/` with basic frontmatter:

```yaml
---
title: "Your Title"
creator: "source-name"
date: 2026-04-10
---

Content here...
```

Then rebuild the index: `node scripts/index.js`

## After adding any content

Always rebuild the index so new content is searchable:

```bash
node scripts/index.js
```
