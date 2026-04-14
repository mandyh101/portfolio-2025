---
name: retro
description: Use when the user asks for a retrospective, session review, or wants to capture what went well, what went wrong, and what should change after a working session
---

# Retro

## Overview

Reviews the current conversation session and produces a structured retrospective as a markdown file. Identifies patterns, waste, root causes, and concrete next actions — so lessons are captured and acted on, not forgotten.

## When to Use

- User says `/retro`, "let's do a retro", "review this session", or "what should we change"
- End of a meaningful working session
- After a frustrating session where things went wrong
- After a session that went unusually well and the approach should be repeated

**NOT for:** Mid-task pauses, simple Q&A sessions with no meaningful arc

## Output File

Write the retrospective to:
```
.claude/retros/YYYY-MM-DD-HH-MM.md
```

Use the current date/time. Create the `retros/` directory if it doesn't exist. Confirm the file path to the user after writing.

## Retrospective Structure

```markdown
# Session Retro — YYYY-MM-DD

## What Went Well
[Techniques, decisions, or interactions that produced good outcomes — be specific]

## What Went Wrong
[Mistakes, misunderstandings, wrong turns — be honest, not diplomatic]

## Time Wasted
[Specific things that burned time without producing value, with rough estimates if possible]

## Root Causes
[The underlying WHY behind what went wrong — not symptoms, actual causes]

## Changes to Make

### CLAUDE.md Updates
[Specific additions or edits to CLAUDE.md that would prevent these issues — include the proposed text]

### New Skills to Create
[Skill ideas: name, description, what it would encode]

### Scripts to Write
[Automation ideas: what manual step was repeated or error-prone]

### Other Actions
[Anything that doesn't fit above: memory updates, config changes, process changes]
```

## Analysis Guidelines

**Scan the full conversation for:**
- Repeated back-and-forth on the same point (misalignment, missing context)
- Tool calls that failed, were retried, or took multiple attempts (brittleness)
- Moments the user corrected direction (wrong assumptions, over-engineering)
- Long stretches without user interaction (may signal lost context or going in circles)
- Things the user praised or confirmed as exactly right (repeat these)

**Root causes to probe:**
- Was information missing from CLAUDE.md?
- Was there a skill that should have existed?
- Was context lost mid-session?
- Did Claude over-engineer, under-read, or skip a step?
- Was a manual step done repeatedly that could be automated?

**What a good retro surfaces:**
- Prompts that consistently fail → rewrite them or encode them in a skill
- Tasks you did more than twice → should be a skill
- Context that was missing → add it to CLAUDE.md
- Handoff gaps → fix the memory or artifact pattern
- Time sinks → automate with a script

**Changes section — be specific:**
- For CLAUDE.md: propose the exact text to add/change, not just "add something about X"
- For new skills: give a draft `name` and `description` field, not just a topic
- For scripts: describe the exact manual action being automated

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Writing vague "went well" items like "communication was good" | Name the specific technique or decision: "Reading the file before editing it prevented a destructive overwrite" |
| Listing symptoms as root causes | Ask *why* — if tests failed, why did they fail? Missing context? Wrong assumption? |
| Proposing CLAUDE.md changes without text | Always include the exact proposed text so the user can accept it immediately |
| Skipping the Changes section because "it was fine" | Even good sessions have at least one thing to capture — if truly nothing, say so explicitly |
| Writing the retro as a narrative | Use the structured sections — they're easier to act on |
