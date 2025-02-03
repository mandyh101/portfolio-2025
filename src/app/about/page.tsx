import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Metadata } from 'next'

import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About | Mandy Hale | Web development | laravel | react | typescript',
  description:
    'Mandy Hale is a full stack web developer and likes to write about technology, innovation and being human in a digital world.',
}

export default function AboutPage() {
  return (
    <Container>
      <Heading className="h1 pb-6">Working with me</Heading>
      <About />
    </Container>
  )
}
