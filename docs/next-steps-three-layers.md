# Three Architectural Decisions — Next Steps

**Context:** We've locked in the product direction. Primary: borrowed brain for non-technical builders using Claude Code. Secondary: personalized learning engine for anyone trying to learn/apply ideas. The question bank and intake skill are the right first pieces.

Now we need to answer three questions that determine how the system actually works end-to-end.

---

## 1. Synthesis — How does corpus + constraints become useful output?

The user runs through the intake interview. We have a constraint profile. We have a corpus of extracted builder patterns. **What happens next?**

### Options to test

| Approach | How it works | Tradeoff |
|----------|-------------|----------|
| **Real-time LLM synthesis** | Constraint profile → semantic search across corpus → LLM synthesizes results per query | Flexible, but slow and expensive. Output quality depends on retrieval quality. |
| **Pre-compiled wiki lookup** | Corpus is already extracted into `wiki/concepts/` and `wiki/topics/`. Constraint profile routes to the right pages. LLM stitches them together. | Fast, but wiki must be comprehensive. Gaps in wiki = gaps in output. |
| **Hybrid** | Wiki provides the base knowledge. Real-time search fills gaps. Constraint profile determines which wiki pages + which raw sources get pulled. | Best of both but more complex to build. |

### What we need to decide
- Do we trust the wiki to be complete enough for v1, or do we need real-time corpus search from day one?
- How much does the constraint profile actually change the retrieval? (e.g., does "non-technical + 5 hrs/week" pull fundamentally different content than "technical + launching in 2 weeks"?)
- Is LEANN sufficient for retrieval quality, or do we need something else?

### Action item
**Z:** Take the constraint profile output from the intake skill, manually write the corpus queries it would generate for 3 different user profiles, and run those queries against whatever content we have. Does the retrieval actually return meaningfully different results per profile? If yes, LEANN + hybrid works. If no, the routing logic needs to be sharper.

**Max:** Pick 3 real people from the group (different skill levels, different goals). Run each through the intake skill. Collect the 3 constraint profiles. We'll use these as test cases for everything else.

---

## 2. Tracking — How does the system remember across sessions?

Session 1 produces a constraint profile + first experiment. The user goes and does the experiment. They come back. **What does the system know about them?**

### Minimum user state (v1)

```
local/
  profile.yaml        ← constraint profile from intake (updated over time)
  experiments/
    001-{slug}.md     ← experiment card + outcome
    002-{slug}.md
  journal/
    2026-04-10.md     ← check-in notes, what worked, what didn't
```

### What gets tracked per experiment
- **Hypothesis:** what they were testing
- **Outcome:** success / partial / failed / abandoned
- **What they learned:** free-text, captured at check-in
- **Profile update:** did this change their calibrated level, surface a new blind spot, or shift their goal?

### What does NOT need tracking in v1
- Full conversation transcripts (too much noise)
- Granular content consumption (which minute of which video)
- Analytics/dashboards

### What we need to decide
- Is the experiment card template sufficient as the tracking unit, or do we need something lighter for daily check-ins?
- Who triggers the check-in — user comes back and the system asks, or we push a reminder?
- How does the profile actually get updated? Manual edit, or LLM reads experiment outcomes and rewrites the profile?

### Action item
**Z:** Propose the schema for the experiment outcome — what fields does the system need to generate experiment #2 from the results of experiment #1? The `templates/experiment-card.md` has a reflection section but it's not structured enough for machine consumption. We need a YAML block at the end.

**Max:** After running 3 people through intake, have them actually do the first experiment for a week. Then do a manual check-in. Write down what you'd need to know from that check-in to generate their next experiment. That's the tracking schema.

---

## 3. Translation — How does knowledge get delivered to the user?

The system has synthesized an answer. **What does the user actually receive?**

### The core tension
Non-technical builders need the judgment without the jargon. But if you strip too much context, the output becomes "do X" without understanding why — and they can't adapt when something doesn't fit.

### Output format by user type

**Builders (primary product):**
```
## Your Build Plan

### Architecture
- Start with: {component}. Here's why: {1-sentence reasoning from corpus}.
- Skip for now: {component}. Reason: {constraint from their profile}.
- Watch out for: {trap}. This is where {corpus builder} got burned.

### Build Order (week 1)
1. {specific action} — proves {what}
2. {specific action} — unlocks {what}
3. DO NOT: {thing they'd naturally do first and shouldn't}

### If it breaks
- If {scenario}: {what to do}
- If {scenario}: {what to do}
```

**Learners (secondary product):**
```
## Your Experiment (Week of {date})

### Hypothesis
If I {do X}, I will {observable outcome} by {date}.

### Content
1. {title} by {creator} — {duration}. Focus on {specific section}.
2. {title} by {creator} — {duration}. Focus on {specific section}.

### Exercise
After watching: {specific thing to do — build, write, explain}

### How you'll know it worked
{concrete test — can you explain it, can you build it, can you spot it}
```

### What we need to decide
- How much "why" do we include? Builders want directives. Learners want understanding. What's the right ratio for each?
- Do we include the source attribution inline ("Karpathy says X") or keep it as a reference section? Non-technical users might not know who Karpathy is.
- Does the output include a "what I didn't tell you" section — things the system knows are relevant but the user isn't ready for yet?

### Action item
**Max:** Write 3 sample outputs by hand. Same project idea, 3 different user profiles. Don't use AI — write what you'd actually tell each person if they asked you. That becomes the gold standard for what the system should produce.

**Z:** Take Max's handwritten outputs and reverse-engineer the template. What's consistent across all 3? What varies? The consistent parts are the template. The variable parts are where the constraint profile plugs in.

---

## Proposed Build Order

```
Week 1:  Max runs 3 real people through intake → 3 constraint profiles
         Z adds structured outcome fields to experiment card template
         Max writes 3 sample outputs by hand (gold standard)

Week 2:  Z tests retrieval quality — do different profiles get different results?
         Z reverse-engineers output templates from Max's samples
         Max does manual check-ins with the 3 test users

Week 3:  Build the synthesis pipeline (constraint profile → corpus query → output)
         Test against the 3 profiles — does automated output match handwritten?
         If not: fix the question bank, the routing, or the templates (in that order)
```

The question bank is already built. The intake skill is already built. We're not building new infrastructure — we're testing whether the pieces we have actually produce different, useful output for different people. If they don't, we fix the questions before building anything else.

---

*Written April 10, 2026 — Max + Z alignment doc*
