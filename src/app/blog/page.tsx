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
      <Heading className="h1 pb-4">Notes from my journey into tech</Heading>
      <Paragraph className="pb-10">
        {' '}
        I share my experiences navigating web development and AI without a
        traditional technical background. No computer science degree to see
        here. Just curiousity and a willingness to try some things.
      </Paragraph>
      {/* <Blogs blogs={data} /> */}
      <Paragraph className="font-xl font-semibold">Coming soon!</Paragraph>
    </Container>
  )
}
