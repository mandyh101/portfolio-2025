import { Container } from '@/components/Container'
import { SingleProject } from '@/components/Project'
import { projects } from '@/constants/projects'
import { Project } from '@/types/project'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const project = projects.find((p) => p.slug === slug) as Project | undefined
  if (project) {
    return {
      title: project.title,
      description: project.description,
    }
  } else {
    return {
      title:
        'Projects | Mandy Hale | Web development | Digital sustainability | AI for good',
      description:
        'Mandy Hale is a full stack web developer developer, laravel developer, and writes about digital sustainability and AI.',
    }
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params.slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    redirect('/projects')
  }
  return (
    <Container>
      <SingleProject project={project} />
    </Container>
  )
}
