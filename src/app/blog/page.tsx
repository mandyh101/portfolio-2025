import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Paragraph } from '@/components/Paragraph'
import { Blogs } from '@/components/Blogs'
import { blogs } from '@/constants/blogs'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Mandy Hale | Web development',
  description:
    'Mandy Hale is a full stack web developer and likes to write about technology, innovation and being human in a digital world.',
}

export default function BlogPage() {
  return (
    <Container>
      <Heading className="h1 pb-4">Blog</Heading>
      <Paragraph className="pb-10">
        I share my experiences navigating web development and AI without a
        traditional technical background. No computer science degree to see
        here, just curiosity and a willingness to try some things.
      </Paragraph>
      {/* <Blogs blogs={blogs} /> */}
      <Paragraph className="pb-10">
      Coming soon!
      </Paragraph>
    </Container>
  )
}
