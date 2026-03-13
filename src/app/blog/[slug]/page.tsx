import { blogs } from '@/constants/blogs'
import { BlogLayout } from '@/components/BlogLayout'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

// Static import registry — all MDX files compiled at build time.
// When adding a new post:
//   1. Create src/content/blog/[slug].mdx
//   2. Add metadata to src/constants/blogs.ts
//   3. Add import + registry entry below
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

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogs.find((b) => b.slug === slug)
  if (!post) return { title: 'Blog | Mandy Hale' }
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogs.find((b) => b.slug === slug)
  if (!post) redirect('/blog')

  const PostContent = postComponents[slug]
  if (!PostContent) redirect('/blog')

  return (
    <BlogLayout meta={post}>
      <PostContent />
    </BlogLayout>
  )
}
