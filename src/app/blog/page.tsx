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
        Welcome to the place where I share my experiences navigating web development and AI.
      </Paragraph>
      <Blogs blogs={blogs} />
    </Container>
  )
}
