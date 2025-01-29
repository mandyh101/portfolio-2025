import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { TechStack } from '@/components/TechStack'

export default function Home() {
  return (
    <Container>
      <Hero />
      <Projects />
      <TechStack />
    </Container>
  )
}
