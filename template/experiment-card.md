---
user: "{user_id}"
track: "{track_name}"
experiment_number: 1
start_date: "{date}"
end_date: "{date + 7 days}"
status: active
outcome: null
---

# Experiment #{experiment_number}: {title}

## Hypothesis
"If I {do this specific thing}, I will {achieve this observable outcome} by {end_date}."

## Content to Consume
1. **[Video/Article Title]({url})** — {creator}, {duration}
   - Focus on: {specific section/timestamp}
   - Key concept: {concept name}
   
2. **[Video/Article Title]({url})** — {creator}, {duration}
   - Focus on: {specific section/timestamp}
   - Key concept: {concept name}

## Exercises
- [ ] After content #1: {specific exercise — write, build, explain, apply}
- [ ] After content #2: {specific exercise}
- [ ] End of week: {synthesis exercise — connect concepts, apply to your context}

## Observable Outcome
By {end_date}, I should be able to: {specific, testable claim}

**How to test**: {concrete way to verify — explain to someone, solve a problem, build something}

## Daily Check-ins
| Day | Content | Exercise Done? | Notes |
|-----|---------|---------------|-------|
| Mon | | | |
| Tue | | | |
| Wed | | | |
| Thu | | | |
| Fri | | | |

## Reflection
- Did the hypothesis hold? 
- What surprised me?
- What's still unclear?
- What should the next experiment focus on?

---

## Outcome (structured — fill at check-in)

<!-- 
  This block is what the system reads to generate the next experiment.
  The reflection above is for you. This block is for the machine.
  Fill it during the check-in conversation, not on your own.
-->

```yaml
outcome:
  status: success | partial | failed | abandoned
  
  # Was the hypothesis right?
  hypothesis_validated: true | false | unclear
  hypothesis_note: "{one sentence — what actually happened vs what you expected}"
  
  # What changed about you?
  level_change: none | up | down
  level_evidence: "{what specifically showed the change — could you do the thing or not?}"
  
  # What opened up?
  new_gap: "{something you now know you don't know that you didn't know before}"
  resolved_gap: "{something from your profile blind_spots that this experiment addressed}"
  
  # What got in the way? (only if partial/failed/abandoned)
  blocker: "{what specifically stopped you — wrong experiment, not enough time, missing prerequisite, lost motivation}"
  blocker_type: experiment_wrong | time | prerequisite | motivation | life | other
  
  # Constraint changes (did your situation change?)
  constraint_changes:
    time: "{same | more | less — and why}"
    tools: "{any new tools picked up or dropped}"
    goal_shift: "{null if same, or new direction if goal changed}"
  
  # What should come next?
  next_seed: "{what you think the next experiment should be — system uses this as input, not as the answer}"
  
  # Profile update trigger
  profile_updates:
    - field: "{which profile field to update — calibrated_level, blind_spots, constraints.time, actual_goal, etc}"
      old: "{previous value}"
      new: "{new value}"
      reason: "{what from this experiment justified the change}"
```
