# Getting Started

You have Claude Code. You want to use the knowledge engine. Here's everything, start to finish.

## Setup (one time, ~5 minutes)

| Goal                        | Required                          |
|-----------------------------|-----------------------------------|
| Search existing btd corpus  | npm + leann                       |
| Add YouTube creators        | + yt-dlp                          |
| Add Twitter creators        | + bird                            |
| Add podcasts                | + podcast-dl (npm) + whisper      |
| Add Substack                | + sbstck-dl (optional, RSS works) |
| Add code repos              | + git (usually pre-installed)     |

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

The repo ships with the BTD group's instance already indexed and searchable:

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

This is where it gets personal. Open Claude Code in the repo directory and just tell it what you want:

> "I want to learn how to evaluate AI tools for my team"

or

> "I have an idea for a product but I don't know where to start"

Claude reads `CLAUDE.md` on session start, checks if you have a profile, and automatically runs the right flow. For new users, it runs the intake interview (5 phases: goal, calibration, blind spots, constraints, synthesis). It saves your profile, searches the corpus, and generates your first experiment — all without you running any commands.

If you want to check your status manually:

```bash
node scripts/session.js status your-name
```

## Coming Back

After doing your experiment for a week, open Claude Code in the repo again. Claude loads your profile and latest experiment automatically. Just say:

> "I'm back" or "How did my experiment go" or even just ask a question

Claude picks up where you left off: runs the check-in, updates your profile, generates the next experiment. Your history is preserved across sessions in `btd/users/your-name/`.

## Browse in Obsidian

The repo ships with `.obsidian/` config pre-configured. Open the repo folder (or your instance folder) as a vault in Obsidian and you get:

- **Graph view** of the wiki — see how concepts connect to each other and to creators
- **Backlinks** — click on any concept and see every page that references it
- **File explorer** — browse raw sources, wiki pages, user profiles, experiment cards
- **Dataview** queries — if you install the Dataview plugin, you can query frontmatter across all pages

The wiki pages use `[[wiki-links]]` that Obsidian renders as clickable cross-references. This is how you browse the knowledge base without searching; you follow the links from concept to concept.

To set up: open Obsidian → "Open folder as vault" → select the repo root (or `btd/` for just the content).

## How It Works Under the Hood

Claude Code has access to all the repo's scripts and runs them directly:

- **Profile management**: `node scripts/profile.js save/load/update`
- **Corpus search**: `leann search btd-btd "query"` — returns results with source attribution
- **Experiment cards**: written to `btd/users/{name}/experiments/`
- **Skills**: `skills/btd-intake/SKILL.md` (new users) and `skills/btd-intake/RE-ENTRY.md` (returning users)

You don't need to run these yourself. Claude does it.

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
