import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Metadata } from 'next'

import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About | Mandy Hale',
  description:
    'Laravel, react, typescript developer. I write about digital sustainability and AI.',
}

export default function AboutPage() {
  return (
    <Container>
      <Heading className="h1 pb-6">Working with me</Heading>
      <About />
    </Container>
  )
}
