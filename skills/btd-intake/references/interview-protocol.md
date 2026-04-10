# Interview Protocol — Intake Assessment

## Purpose
Establish the user's current state, goals, and context so the system can personalize content and experiments. This is the anti-"false personalization" layer.

## Phase 1: Goal Setting (2-3 minutes)

### Opening
> "I'd like to understand where you're at and where you want to go so I can build something useful for you specifically — not generic advice. This takes about 10 minutes."

### Questions
1. **What brought you here?** What specific problem or goal are you trying to address?
   - Listen for: concrete vs. vague goals
   - Follow up: "If this worked perfectly, what would be different in 3 months?"

2. **Why now?** What changed that makes this urgent or important?
   - Listen for: trigger events, pain points, opportunities

3. **What have you tried?** What resources/approaches have you already used?
   - Listen for: learning history, what worked/didn't, frustration points

## Phase 2: Current State Assessment (3-5 minutes)

### Domain-Specific Probing
Based on the stated goal, probe current knowledge level:

**For Systems Thinking:**
- "Can you give me an example of a feedback loop in your work/life?"
- "When you have a complex problem, what's your go-to approach?"
- "Have you heard of mental models? Which ones do you use?"

**For AI/ML:**
- "What's your technical background? (scale: non-technical → ML researcher)"
- "Have you built anything with AI? What?"
- "What specific AI capability are you trying to understand or build?"

**For Business/Strategy:**
- "What's your role and industry?"
- "What decisions do you need to make better?"
- "What data/information do you wish you had?"

### Meta-Learning Questions
4. **How do you learn best?** (video, reading, doing, discussing)
5. **How much time can you commit?** (per day/week, be realistic)
6. **What's your accountability style?** (self-driven, need check-ins, social learning)

## Phase 3: Gap Identification (2-3 minutes)

After the above, the LLM synthesizes:

### Output: Gap Assessment
```yaml
user_id: {generated}
interview_date: {today}
primary_goal: "{synthesized from responses}"
goal_clarity: high|medium|low
current_level:
  domain: "{topic}"
  self_assessed: beginner|intermediate|advanced
  probed: beginner|intermediate|advanced  # from question responses
  gap: "{specific knowledge/skill gaps identified}"
learning_context:
  time_available: "{hours/week}"
  preferred_format: [video, reading, exercises, discussion]
  accountability: self|checkin|social
prior_attempts:
  - what: "{previous approach}"
    result: "{what happened}"
key_constraints:
  - "{any blockers: time, technical, access, etc.}"
```

### Output: Initial Experiment
Based on the gap, propose first 1-week experiment:
- 3-5 specific content pieces from corpus (with timestamps if video)
- 1 concrete exercise per piece
- 1 observable outcome to check at end of week
- Check-in schedule

## Adaptive Rules

- If goal is vague → spend more time on Phase 1, use "5 Whys" technique
- If self-assessed level doesn't match probed level → note discrepancy, calibrate content accordingly
- If time available is <2 hrs/week → focus on highest-leverage single concept
- If they've tried many things → focus on what was missing (usually: experiment frame or tracking)

## Anti-Patterns to Avoid

- ❌ Asking too many questions (>15 min feels like a survey)
- ❌ Making assumptions without probing ("you mentioned AI so you must want to code")
- ❌ Generic track assignment (the whole point is THIS person's gap)
- ❌ Overwhelming first experiment (should feel easy to start)
