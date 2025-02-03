import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Highlight } from '@/components/Highlight'
import { Paragraph } from '@/components/Paragraph'
import { getAllBlogs } from '../../../lib/getAllBlogs'
import { Blogs } from '@/components/Blogs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs | Mandy Hale | Web development | laravel | react | typescript',
  description:
    'Mandy Hale is a full stack web developer and likes to write about technology, innovation and being human in a digital world.',
}

export default async function Blog() {
  const blogs = await getAllBlogs()
  const data = blogs.map(({ component, ...meta }) => meta)

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4">I write about technology</Heading>
      <Paragraph className="pb-10">
        Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  )
}
