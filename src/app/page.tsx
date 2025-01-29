import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { TechStack } from '@/components/TechStack'

export default function Home() {
  return (
    <Container>
      <Hero />
      <Products />
      <TechStack />
    </Container>
  )
}
