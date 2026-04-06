---
name: today-i-learned
description: Use when the user wants to write a Today I Learned blog post from their personal reflections for the portfolio website at /Users/mandyhale/projects/portfolio-2025
---

# Today I Learned (TIL) Blog Post

## Overview

A structured workflow for turning raw reflections into a published TIL blog post on the portfolio. Covers the interview phase, content structure, and the three-file update required to publish.

## Audience and Tone

**Audience:** Friends, other developers, and non-technical colleagues. Write for someone smart who may not know the specific technology — not for an expert looking for documentation.

**Tone:** Casual, friendly, inquisitive, and plain English.
- **Stay close to the user's own words.** Use their phrasing from the Step 1 answers as much as possible — don't paraphrase into cleaner prose
- **Keep personal asides and digressions.** If they say "Huzzah" or "TBC if this was worth it, honestly", keep it — these are the voice, not noise to remove
- **Don't trim details without asking.** If the user mentioned something in their reflection, include it unless they explicitly say to cut it
- Write like you're explaining it to a curious friend over coffee, not presenting at a conference
- Use contractions ("I didn't", "it's", "you'd")
- Say "it clicked" not "I understood the concept"
- Prefer plain words: "change" over "mutate", "check" over "validate", "store" over "persist"
- It's fine to admit confusion, doubt, or unresolved questions: "I'd always assumed...", "Honestly not sure if this was worth it..."
- Section headings should be colloquial and a bit irreverent — "What the heck is X?" not "Understanding X"

**What to avoid:**
- Smoothing out the user's quirky phrasing into polished prose
- Cutting tangential details or personal asides — these are the personality of the post
- Tutorial voice ("In this post, we will explore...")
- Academic hedging ("It is worth noting that...")
- Buzzwords ("leverage", "robust", "seamless")
- Assuming the reader knows what you know

## Workflow

### Step 1: Gather the Reflection

Ask these questions before writing anything. Do not skip this step even if the user has already shared some context.

1. **What did you learn?** (the core insight in one sentence)
2. **What were you doing when you learned it?** (the real-world context — this makes TIL posts feel authentic)
3. **What did you think before, and what do you think now?** (the "aha" — the shift in understanding)
4. **Is there a code example that shows it clearly?** (yes/no — if yes, ask them to share it or describe it)
5. **Is there an image that would help?** (yes/no — if no, suggest an Unsplash photo that fits the topic)
6. **What tag fits best?** (e.g. `css`, `javascript`, `react`, `tooling`, `dx`, `career`, `til`)

Only proceed to Step 2 once you have answers to all six.

### Step 2: Draft the Structure

Confirm the following with the user before writing any files:

| Field | Content |
|-------|---------|
| **Title** | `TIL: [The core insight, max ~10 words]` |
| **Summary** | 1–2 sentences for the blog listing card. Curiosity-gap style — hint at the insight, don't fully reveal it. |
| **Slug** | `til-[kebab-case-topic]` |
| **Tags** | 2–3 tags including `til` |
| **Date** | Today's date (YYYY-MM-DD) |

Show the user the proposed title and summary. Wait for approval or adjustments before writing files.

### Step 3: Write the MDX Content

**Required sections:**

1. **Opening hook** — 1–3 sentences. The real-world situation that triggered the learning. No heading.
2. **The core concept** — `## What is [X]?` — brief, clear definition with a code example if applicable.
3. **The insight** — `## The part that clicked` or a descriptive heading. This is the "aha" — what's non-obvious or surprising.
4. **Practical application** — `## How I use this now` or similar. Concrete, actionable. Include a code example if the topic allows it.
5. **Optional: comparison or contrast** — `## How this differs from [Y]` — only include if the user mentioned comparing to something else.

**Code examples:** Use fenced code blocks with the language tag (` ```tsx `, ` ```css `, etc.). For longer files or complete components, wrap in `<CodeWindow title="Filename.tsx">`. For short inline snippets (< 20 lines), plain fenced blocks are cleaner.

**Images:** Add images inline with standard markdown `![alt text](url)`. Unsplash works well — use `?auto=format&fit=crop&w=1200&q=80` query params.

### Step 4: Update the Three Required Files

Every new blog post requires exactly three file changes:

**1. Create `src/content/blog/[slug].mdx`**
The MDX content from Step 3.

**2. Edit `src/constants/blogs.ts`**
Add a new entry to the `blogs` array. Put it first (newest at top):
```ts
{
  slug: 'til-[topic]',
  title: 'TIL: ...',
  description: '...', // The summary from Step 2
  date: 'YYYY-MM-DD',
  image: 'https://images.unsplash.com/...?auto=format&fit=crop&w=1200&q=80',
  tags: ['til', '...'],
},
```

**3. Edit `src/app/blog/[slug]/page.tsx`**
Add the import and registry entry:
```ts
// Add with other imports
import TilTopicName from '@/content/blog/til-[topic].mdx'

// Add to postComponents object
'til-[topic]': TilTopicName,
```

### Step 5: Confirm

After writing all three files, tell the user:
- The blog URL the post will be at (`/blog/[slug]`)
- That the blog page navigation is currently commented out in `src/constants/navlinks.tsx` — the post exists but the blog tab won't appear until that's re-enabled

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Writing content before gathering reflections | Always run the Step 1 questions first |
| Forgetting to update `page.tsx` static registry | Post 404s at runtime — all three files are required |
| Tutorial voice ("In this post, we will...") | Use casual first person: "I didn't realise...", "Turns out..." |
| Jargon without explanation | Define any technical term in plain English before using it — write for non-technical readers too |
| Generic title like "CSS Variables" | Lead with the insight: "TIL: CSS Variables Are Scoped to the Cascade, Not Just `:root`" |
| Skipping Step 2 confirmation | Avoids rewriting content after the user rejects the framing |
