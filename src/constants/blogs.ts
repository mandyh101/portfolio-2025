export type BlogMeta = {
  slug: string
  title: string
  description: string
  date: string
  image: string
  tags?: string[]
}

export const blogs: BlogMeta[] = [
  {
    slug: 'til-agentic-coding-system',
    title: 'Agentic Coding Essentials Week 2: Building an agentic coding toolkit',
    description:
      "Week two of learning agentic coding and the big takeaway isn't about the AI — it's about the system around it. Retros, deterministic checks, external AI reviews, and human eyes.",
    date: '2026-04-16',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80',
    tags: ['til', 'agentic-coding'],
  },
  {
    slug: 'til-claude-skills',
    title: 'Agentic Coding Essentials Week 1: New Skill',
    description:
      "My first go at crafting an Agent Skill following the software development practice of TDD.",
    date: '2026-04-07',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    tags: ['til', 'agentic-coding', 'claude-code'],
  },
]
