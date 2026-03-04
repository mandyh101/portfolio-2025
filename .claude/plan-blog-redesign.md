# Plan: Blog System Redesign

## Context

The blog section exists in the codebase but is entirely disabled — the nav link is commented out and the listing page shows "Coming soon!" The current implementation has several problems:
- Each post requires two files (`page.tsx` + `content.mdx`) in separate per-post static directories
- Metadata is embedded inside MDX files as exports, making it hard to query without loading full post content
- `getAllBlogs.ts` uses `fast-glob` + template-literal dynamic imports, which is unreliable with the Rust MDX compiler (`mdxRs: true`)
- `BlogLayout.tsx` is unnecessarily a Client Component (uses `useRouter` but never calls it), blocking SSR
- `Blogs.tsx` has a React key bug on tags and uses deprecated `objectFit` Image prop
- No date is shown on the listing cards despite the type including it

Goal: replace with a clean, simple system — client-side only, MDX for rich content, matching the project data-file pattern.

---

## Architecture

**Metadata** → `src/constants/blogs.ts` (static typed array, mirrors `projects.tsx`)
**Content** → `src/content/blog/[slug].mdx` (pure MDX body, no meta boilerplate)
**Listing route** → `src/app/blog/page.tsx` (sync server component, reads constants directly)
**Detail route** → `src/app/blog/[slug]/page.tsx` (single dynamic route with static import registry)

**Why a static import registry instead of dynamic imports:**
`experimental.mdxRs: true` in `next.config.mjs` does not support rehype/remark plugin `options`, meaning `rehype-prism` (syntax highlighting) silently breaks. Removing `mdxRs: true` restores highlighting. Additionally, template-literal dynamic imports (`import(\`.../${slug}.mdx\`)`) are unreliable — Webpack may fail to bundle them correctly. A static import map is explicit, build-time safe, and type-checkable.

**Tradeoff:** Adding a new post is 3 steps instead of 1, but each step is simple and documented:
1. Create `src/content/blog/[slug].mdx`
2. Add metadata entry to `src/constants/blogs.ts`
3. Add one import + one registry entry to `src/app/blog/[slug]/page.tsx`

---

## Files

### Create

**`src/constants/blogs.ts`** — Metadata array (mirrors projects.tsx pattern)
```ts
export type BlogMeta = {
  slug: string
  title: string
  description: string
  date: string        // ISO: "2024-01-15"
  image: string       // URL string (Unsplash or local /images/...)
  tags?: string[]
}

export const blogs: BlogMeta[] = [
  // sorted newest first
  {
    slug: 'clean-code',
    title: 'Writing Clean Code With React',
    description: '...',
    date: '2023-08-18',
    image: 'https://...',
    tags: ['Clean Code'],
  },
  // remaining 3 migrated posts...
]
```

**`src/content/blog/clean-code.mdx`** (and 3 more) — Pure content, no meta/layout boilerplate. Body only:
```mdx
Velit cillum fugiat proident...

## Subheading

Regular markdown content, headings, images, code fences all work.

```tsx
const example = 'code with syntax highlighting'
```
```

**`src/app/blog/[slug]/page.tsx`** — Single dynamic route with static import registry:
```tsx
import { blogs } from '@/constants/blogs'
import { BlogLayout } from '@/components/BlogLayout'
import { redirect } from 'next/navigation'

// Static import registry — all MDX compiled at build time
// When adding a new post: add import here + entry in postComponents below
import CleanCode from '@/content/blog/clean-code.mdx'
import DarkMode from '@/content/blog/dark-mode-with-nextjs.mdx'
import HowToWinClients from '@/content/blog/how-to-win-clients.mdx'
import TailwindTips from '@/content/blog/tailwindcss-tips-and-tricks.mdx'

const postComponents: Record<string, React.ComponentType> = {
  'clean-code': CleanCode,
  'dark-mode-with-nextjs': DarkMode,
  'how-to-win-clients': HowToWinClients,
  'tailwindcss-tips-and-tricks': TailwindTips,
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogs.find((b) => b.slug === params.slug)
  if (!post) return { title: 'Blog | Mandy Hale' }
  return { title: post.title, description: post.description }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogs.find((b) => b.slug === params.slug)
  if (!post) redirect('/blog')

  const PostContent = postComponents[params.slug]
  if (!PostContent) redirect('/blog')

  return (
    <BlogLayout meta={post}>
      <PostContent />
    </BlogLayout>
  )
}
```

### Modify

**`src/app/blog/page.tsx`** — Remove `getAllBlogs` call, import constants directly, enable `<Blogs>`, remove "Coming soon!" text, update metadata title:
```tsx
import { blogs } from '@/constants/blogs'
// Remove: getAllBlogs import, async, Highlight import
// Change: sync function, pass blogs directly to <Blogs>
```

**`src/components/Blogs.tsx`** — Design updates to match project card pattern:
- Card: change from floating `AnimatePresence` overlay to `bg-tropical-indigo-100 hover:bg-tropical-indigo-200 rounded-2xl shadow-md p-4` on the Link (matches `Projects.tsx` cards)
- Tags: change from `border border-neutral-200 bg-white rounded-md` → `font-heading bg-mono-grey-100 text-night px-2 py-1 rounded-sm shadow-sm` (matches project stack tags)
- Fix React key bug: `key={\`tag-${blog.slug}\`}` → `key={tag}` (was causing duplicate key warnings for posts with multiple tags)
- Fix deprecated `objectFit` prop: remove it (already on className)
- Add date display below tags: `<time dateTime={blog.date}>{formatDate(blog.date)}</time>`
- Remove `max-w-5xl` wrapper (page Container already handles max-width)
- Update type import: `Blog` from `@/types/blog` → `BlogMeta` from `@/constants/blogs`

**`src/components/BlogLayout.tsx`** — Cleanup and improvements:
- Remove `"use client"` directive — no client hooks needed; component becomes a Server Component
- Remove unused `useRouter`, `Head` imports (Head is App Router-incompatible)
- Remove dead props: `isRssFeed`, `previousPathname`, replace `any` with `{ children: React.ReactNode, meta: BlogMeta }`
- Back button: add `"All posts"` text label alongside arrow icon (icon-only is low affordance)
- Add tags display in the post header (currently shown in listing but not in post detail — inconsistent)
- Hero image: change container to `rounded-2xl shadow-md` (matches project image treatment); add `priority` prop for LCP

**`src/constants/navlinks.tsx`** — Uncomment blog link, update label from `'Blog - coming soon!'` to `'Blog'`

**`mdx-components.tsx`** — Register `CodeWindow` globally so MDX files can use `<CodeWindow>` without per-file imports:
```tsx
import { CodeWindow } from '@/components/CodeWindow'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { CodeWindow, ...components }
}
```

**`next.config.mjs`** — Remove `experimental.mdxRs: true`. The Rust compiler ignores the `options.rehypePlugins` array, breaking `rehype-prism` syntax highlighting (a stated requirement). Removing it restores the JS compiler with full plugin support. No other changes needed.

### Delete

- `src/app/blog/clean-code/` (entire directory — page.tsx + content.mdx)
- `src/app/blog/dark-mode-with-nextjs/` (entire directory)
- `src/app/blog/how-to-win-clients/` (entire directory)
- `src/app/blog/tailwindcss-tips-and-tricks/` (entire directory)
- `lib/getAllBlogs.ts` — replaced by constants array

---

## Implementation Order

1. Read content from all 4 existing MDX directories before deletion
2. Remove `mdxRs: true` from `next.config.mjs`
3. Create `src/constants/blogs.ts`
4. Create `src/content/blog/` and write 4 migrated `.mdx` files (content only)
5. Update `mdx-components.tsx`
6. Create `src/app/blog/[slug]/page.tsx`
7. Update `src/app/blog/page.tsx`
8. Update `src/components/Blogs.tsx`
9. Update `src/components/BlogLayout.tsx`
10. Update `src/constants/navlinks.tsx`
11. Delete the 4 old per-post directories and `lib/getAllBlogs.ts`

---

## Workflow: Adding a New Post

```
1. Create src/content/blog/my-new-post.mdx
   — Write Markdown body; use <CodeWindow> for syntax-highlighted code (no import needed)

2. Add to src/constants/blogs.ts:
   { slug: 'my-new-post', title: '...', description: '...', date: 'YYYY-MM-DD', image: '...', tags: [...] }

3. In src/app/blog/[slug]/page.tsx, add:
   import MyNewPost from '@/content/blog/my-new-post.mdx'
   'my-new-post': MyNewPost,  // in postComponents map
```

---

## Critical Files

| File | Action | Reason |
|------|--------|--------|
| `src/constants/blogs.ts` | Create | Metadata source of truth |
| `src/content/blog/*.mdx` | Create | Pure MDX post bodies |
| `src/app/blog/[slug]/page.tsx` | Create | Single dynamic route + static import registry |
| `src/app/blog/page.tsx` | Modify | Enable listing |
| `src/components/Blogs.tsx` | Modify | Design + bug fixes |
| `src/components/BlogLayout.tsx` | Modify | Server component + design + typed props |
| `src/constants/navlinks.tsx` | Modify | Enable nav link |
| `mdx-components.tsx` | Modify | Register CodeWindow globally |
| `next.config.mjs` | Modify | Remove mdxRs to restore rehype-prism |
| `lib/getAllBlogs.ts` | Delete | Replaced by constants |
| 4× `src/app/blog/[slug]/` | Delete | Replaced by dynamic route |

---

## Future DB Migration Path

When you add a database and API, here's what changes and what stays the same:

**Metadata layer (trivial — 2-3 lines):**
- `src/constants/blogs.ts` → deleted; replaced by API fetch (`const blogs = await api.fetchBlogs()`)
- `blog/page.tsx` → becomes `async`, calls API instead of importing constants
- `Blogs.tsx` and `BlogLayout.tsx` → **zero changes** (same `BlogMeta` data shape)

**Content/body layer (isolated rewrite of one file):**
- `[slug]/page.tsx` → remove static import registry; fetch markdown string from API; render with `react-markdown` or `@mdx-js/mdx`'s `evaluate()` for runtime MDX
- `BlogLayout.tsx` → `children` continues to work the same way

Everything else — components, types, layout, nav — is unchanged.

---

## Implementation Notes

### Created
- `src/constants/blogs.ts` — `BlogMeta` type and `blogs` array with metadata for all 4 posts, sorted newest first
- `src/content/blog/clean-code.mdx` — migrated body content from old `clean-code/content.mdx`; includes `<CodeWindow>` usage
- `src/content/blog/dark-mode-with-nextjs.mdx` — migrated and cleaned up code snippets from old `dark-mode-with-nextjs/content.mdx`
- `src/content/blog/how-to-win-clients.mdx` — migrated body from old `how-to-win-clients/content.mdx`
- `src/content/blog/tailwindcss-tips-and-tricks.mdx` — migrated body from old `tailwindcss-tips-and-tricks/content.mdx`
- `src/app/blog/[slug]/page.tsx` — single dynamic route with static import registry, `generateStaticParams`, and `generateMetadata`
- `.claude/plan-1.md` — this file

### Modified
- `next.config.mjs` — removed `experimental.mdxRs: true` to restore rehype-prism syntax highlighting
- `src/app/blog/page.tsx` — replaced `getAllBlogs()` async call with direct constants import; enabled `<Blogs>`; removed "Coming soon!" text; updated metadata title
- `src/components/Blogs.tsx` — updated card styling to `bg-tropical-indigo-100 hover:bg-tropical-indigo-200 rounded-2xl shadow-md`; updated tags to match project stack tag style (`font-heading bg-mono-grey-100`); fixed React key bug on tags; removed deprecated `objectFit` prop; added date display; removed competing `max-w-5xl` wrapper; updated type import to `BlogMeta`
- `src/components/BlogLayout.tsx` — removed `"use client"` directive, `useRouter`, `Head`, dead props (`isRssFeed`, `previousPathname`); replaced `any` types with `BlogMeta`; added "All posts" text label to back button; added tags display in post header; updated hero image container to `rounded-2xl shadow-md` with `priority` prop
- `src/constants/navlinks.tsx` — uncommented blog nav link; updated label from `'Blog - coming soon!'` to `'Blog'`
- `mdx-components.tsx` — registered `CodeWindow` globally so MDX files can use `<CodeWindow>` without per-file imports

### Deleted
- `src/app/blog/clean-code/` (page.tsx + content.mdx)
- `src/app/blog/dark-mode-with-nextjs/` (page.tsx + content.mdx)
- `src/app/blog/how-to-win-clients/` (page.tsx + content.mdx)
- `src/app/blog/tailwindcss-tips-and-tricks/` (page.tsx + content.mdx)
- `lib/getAllBlogs.ts` — replaced by direct constants import

---

## Verification

1. `npm run dev` — confirm no build errors
2. Visit `/blog` — listing page shows all 4 posts with title, image, date, tags, description
3. Click a post — detail page renders with hero image, tags in header, MDX body content
4. Check a post with a code block — syntax highlighting should be active (coloured tokens)
5. Click "All posts" back link — returns to `/blog`
6. Check sidebar — Blog link appears and is active when on `/blog`
7. Verify `generateStaticParams` — `npm run build` should show 4 static blog routes generated
