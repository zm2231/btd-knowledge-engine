# Question Bank

The IP of the product. Everything else is infrastructure to serve this.

## How This Works

The question bank is a directed graph, not a flat list. Each question:
- Has a **purpose** (what constraint it surfaces)
- Has **conditional next questions** (based on the answer)
- Maps to **corpus queries** (what builder judgment becomes relevant)
- Has **early termination conditions** (skip whole branches when irrelevant)

## Structure

- `decision-tree.json` — The state machine definition. Questions, transitions, branches.
- `questions/` — Individual question cards with full context.
- `VALIDATION.md` — Results from manual testing against real projects.

## Validation Protocol

Before building ANY system:
1. Run 5 real projects through the question bank manually (you interviewing, using these questions)
2. For each: did the questions surface meaningfully different constraints?
3. For each: did the output architecture actually differ based on answers?
4. If two people get the same architecture for different constraint profiles, the questions are too shallow.
