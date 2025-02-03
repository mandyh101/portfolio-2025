import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Highlight } from '@/components/Highlight'
import { Paragraph } from '@/components/Paragraph'
import { Projects } from '@/components/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Projects | Mandy Hale | Web development | laravel | react | typescript',
  description:
    'Mandy Hale is a full stack web developer and likes to write about technology, innovation and being human in a digital world.',
}

export default function ProjectPage() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {' '}
        What I&apos;ve been working on
      </Heading>

      <Projects />
    </Container>
  )
}
