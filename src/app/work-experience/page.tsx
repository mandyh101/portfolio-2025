import { Badge } from '@/components/Badge'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Highlight } from '@/components/Highlight'
import { Paragraph } from '@/components/Paragraph'
import { WorkHistory } from '@/components/WorkHistory'
import { IconBrandGithub } from '@tabler/icons-react'

export default function Home() {
  return (
    <Container>
      <Heading className="h1">Work Experience</Heading>
      <Paragraph className="max-w-xl mt-4">
        In 2022, I made the leap from Marketing Manager to Web Developer.
        Mid-career transitions are never easy, but I&apos;ve been doing the work
        and I&apos;m so proud of where I am right now and excited about all the
        growth opportunities ahead of me. Below are the teams and projects
        I&apos;ve had the privilege of working with so far -{' '}
        <Highlight>could your team be next?</Highlight>
      </Paragraph>
      <WorkHistory />
      <Paragraph className="max-w-xl my-4">
        Connect with me on LinkedIn for more information about my work history
        and experience.
      </Paragraph>
      <Badge
        href="https://www.linkedin.com/in/mandyhale88/"
        text="LinkedIn"
        icon={<IconBrandGithub size={14} />}
      />
    </Container>
  )
}
