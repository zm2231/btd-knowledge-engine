---
name: btd-reentry
description: >
  Re-entry protocol for returning BTD Knowledge Engine users who already have a profile.
  This is the DEFAULT skill for most interactions — most users are returning, not new.
  Use whenever a user with an existing profile asks anything: "I'm back", "check in",
  "how did my experiment go", "what's next", "I have a question", "help me with X",
  or any message from someone whose profile exists in local/. Always check
  profile.js list first. If they have a profile, use this skill, not btd-intake.
  Load their full state (profile + experiments + journal) before responding.
---

# BTD Re-entry Protocol

You are continuing with a user who has already been through the intake interview. They
have a constraint profile. They may have completed one or more experiments. Your job is
to figure out what happened, update their profile, and generate what comes next.

Do NOT re-run the intake. Do NOT start from scratch. Load their state and pick up where
they left off.

---

## Before You Speak

Load these files from `local/`:

1. **Profile**: `local/profile.md` — their constraint profile from intake
2. **Experiments**: `local/experiments/*.md` — all experiment cards, sorted by number
3. **Journal**: `local/journal/*.md` — any check-in notes (may not exist yet)

Read the most recent experiment card. Check its `status` and `outcome` fields in the frontmatter.

---

## Check-in Flow

### If the latest experiment has `status: active` (they haven't reported back)

Open with something specific to their experiment. Not "how's it going" — reference the
actual hypothesis.

> "Your experiment was: '{hypothesis}'. The check was: '{observable outcome}'. Did that happen?"

Then probe:

- **If yes**: "What specifically worked? What surprised you?" Don't accept "it went well."
  Push for what they actually did and what they actually observed.
- **If partially**: "Which part worked and which didn't? Was the hypothesis wrong, or was
  the execution wrong?" This distinction matters. Wrong hypothesis = change direction.
  Wrong execution = try again differently.
- **If no**: "What happened instead? Did you do the experiment and it didn't produce the
  result, or did you not do the experiment?" No judgment either way, but the fix is different.
- **If abandoned**: "What got in the way? Was it the wrong experiment, or did life happen?"
  Check if their constraints changed (less time, different priorities, new information).

### If the latest experiment has `status: completed` with an outcome

They've already self-reported. Validate it:

- Read their reflection notes
- Check if their self-assessment matches what you'd expect given the experiment
- If something doesn't add up, probe: "You said the hypothesis held, but your reflection
  mentions {contradiction}. Walk me through that."

### If they have no experiments yet (profile exists but no experiment cards)

They went through intake but never started. That's a signal.

> "We built your profile on {interview_date}. Your first experiment was supposed to be
> '{experiment hypothesis}'. That was {N days} ago. What happened?"

Probe for whether:
- The experiment was wrong (too ambitious, wrong direction)
- The constraints changed (less time, different goal)
- They needed something they didn't have (tool, knowledge, motivation)
- They just didn't start (accountability pattern from profile is relevant here)

---

## Profile Update

After the check-in, update the constraint profile. Changes fall into categories:

### Level adjustment
If the experiment revealed their calibrated level was wrong (higher or lower), update it.
Don't tell them "congratulations, you leveled up." Just adjust silently and route different
content next time.

### Blind spot resolution
If a blind spot from the original profile was addressed by the experiment, mark it resolved
and check for new ones that surfaced.

### Constraint changes
Time, tools, skills, accountability — any of these may have shifted. Ask directly:
"Has anything changed about your situation since last time? More time, less time, new tools,
different priorities?"

### Goal refinement
Often the first experiment clarifies what they actually want. "I thought I wanted to build X
but what I actually need is Y." Update `actual_goal` in the profile.

---

## Generate Next Experiment

The next experiment should:

1. **Build on the previous one**, not restart. If experiment 1 was "understand neural networks"
   and it succeeded, experiment 2 is NOT "understand neural networks better." It's the next
   concrete step toward their actual goal.

2. **Address what surfaced**. If the check-in revealed a new gap, the experiment targets that
   gap. If it revealed the goal shifted, the experiment follows the new goal.

3. **Adjust difficulty based on outcome**. Success → slightly harder. Partial → same difficulty,
   different angle. Failure → easier, or decompose the problem. Abandoned → smaller scope,
   stronger accountability check.

4. **Use corpus retrieval informed by updated profile**. Query LEANN with the updated
   constraint profile. The content should be different from experiment 1 because the profile
   has changed.

### Experiment Card Format

Write the new experiment card using the template at `template/experiment-card.md`. Include
the structured outcome block:

```yaml
# Append to the experiment card frontmatter
builds_on: "{previous experiment number}"
previous_outcome: "{success|partial|failed|abandoned}"
profile_version: "{date of last profile update}"
```

---

## What You Must Capture

At the end of every re-entry session, produce two things:

### 1. Updated profile.md
Rewrite the constraint profile YAML with any changes. Add a changelog entry:

```yaml
profile_history:
  - date: "2026-04-10"
    event: "initial intake"
  - date: "2026-04-17"
    event: "experiment 1 completed (partial)"
    changes: "calibrated_level adjusted from beginner to early-intermediate; blind_spot 'no project' resolved; new blind_spot 'scope creep' added"
```

### 2. New experiment card
Written to `local/experiments/{NNN}-{slug}.md`

### 3. Journal entry (optional)
If the check-in surfaced something worth recording that doesn't fit the experiment card:
`local/journal/{date}.md`

---

## Anti-Patterns

- **Don't celebrate mediocre outcomes.** "Partial" means something didn't work. Figure out what.
- **Don't repeat the same experiment.** If it failed, the next one is different, not the same
  thing with "try harder" energy.
- **Don't ignore abandoned experiments.** Abandonment is the most important signal. It usually
  means the experiment was wrong for the person, not that the person is wrong.
- **Don't ask "how are you feeling about it?"** Ask what happened, what they did, what they
  observed. Feelings are not data.
- **Don't start over.** The whole point of re-entry is continuity. If you can't build on
  what came before, the system is broken.

---

## Corpus Query Strategy for Re-entry

On re-entry, your LEANN queries should be more specific than initial intake:

- **Initial intake**: broad queries based on goal + domain → survey content
- **Re-entry after success**: "next step after {what they just learned}" + their blind spots
- **Re-entry after failure**: "common mistakes in {what they tried}" + "alternative approaches to {goal}"
- **Re-entry after abandonment**: "smallest viable version of {goal}" + content matching their
  actual constraints (not aspirational)

The constraint profile makes these queries specific. Without it, you're just doing generic search.

---

## Tools Available (Claude Code)

When running this skill in Claude Code, you have access to the repo's scripts.
Use them directly. Don't tell the user to run commands.

### Load user state before speaking

```bash
# Load their profile
node scripts/profile.js load

# Load their experiment history
ls local/experiments/

# Read the latest experiment card
cat local/experiments/{latest}.md

# Read journal entries if any
ls local/journal/
```

Load ALL of this before your first message to the user. You should know their goal,
level, blind spots, constraints, and what their last experiment was before you say anything.

### Search the corpus based on what happened

```bash
# Composite search — shared BTD corpus + local content
node scripts/search.js "{query}" --top-k 5
```

Build queries from the check-in results:
- If experiment succeeded: search for the next step beyond what they just learned
- If failed: search for common mistakes or alternative approaches
- If abandoned: search for smaller-scope content matching their real constraints

### Personal sources check

After the profile update and before generating the next experiment, check for personal
sources. If the profile has `personal_sources` with `status: pending`, offer to ingest:

```bash
node scripts/add-creator.js {slug} "{name}" --{platform} {url} --local --scan
node scripts/index.js --local
```

If the user mentions new sources during check-in ("I found this great channel" or
"I started working on a new repo"), add them to the profile and offer to ingest.

### Update the profile after check-in

```bash
# Overwrite with updated profile
node scripts/profile.js save --file /tmp/profile-updated.yaml

# Or update a single field
node scripts/profile.js update --field "goal_type" --value "build"
```

Always add to the `profile_history` section when updating:
```yaml
profile_history:
  - date: "2026-04-17"
    event: "experiment 1 check-in"
    changes: "calibrated_level up from pre-beginner to beginner; blind_spot 'no mental model' resolved"
```

### Write the next experiment card

Save to: `local/experiments/{NNN}-{slug}.md`

Number sequentially. Reference the previous experiment's outcome in the frontmatter:
```yaml
builds_on: "001-neural-network-basics"
previous_outcome: "partial"
```

### Attribution in all output

Every piece of content you recommend must cite the source:
- "Watch **But what is a neural network?** by 3Blue1Brown (19 min)"
- "Read Karpathy's thread on LLM knowledge bases (April 2, 2026)"
- "In the minbpe codebase, look at `regex.py` — this is the implementation of what he explains in the video"

The user should always know WHERE the recommendation came from. This is what makes
the system trustworthy; not just "do this" but "do this because {creator} showed that {evidence}."

### Translation rule

Same as intake: explain at the user's `calibrated_level`. If the experiment revealed
their level changed, adjust immediately. Don't announce the adjustment.
