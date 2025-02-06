import { Container } from '@/components/Container'
import GithubCalendar from '@/components/GithubCalendar'
import { Heading } from '@/components/Heading'

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
      <Heading className="h1 pb-2">
        {' '}
        What I&apos;ve been <span className="text-sea-green-800">work</span>ing
        on
      </Heading>

      <Projects showHeading={false} />
      <GithubCalendar username="mandyh101" />
    </Container>
  )
}
