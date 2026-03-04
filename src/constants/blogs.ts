export type BlogMeta = {
  slug: string
  title: string
  description: string
  date: string
  image: string
  tags?: string[]
}

export const blogs: BlogMeta[] = [
  {
    slug: 'dark-mode-with-nextjs',
    title: 'Creating a Dark Mode Toggle with Next.js and Tailwind CSS',
    description:
      'As a web developer, you may be wondering how to create a dark mode toggle for your web application. In this tutorial, we will explore how to implement a dark mode toggle with Next.js and Tailwind CSS.',
    date: '2023-04-19',
    image:
      'https://images.unsplash.com/photo-1607799632518-da91dd151b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    tags: ['tailwindcss', 'css', 'frontend'],
  },
  {
    slug: 'clean-code',
    title: 'Writing Clean Code With React',
    description:
      'Effective and efficient ways to write clean code with React while keeping in mind the performance and maintainability of the codebase.',
    date: '2023-08-18',
    image:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Clean Code'],
  },
  {
    slug: 'how-to-win-clients',
    title: 'How to win clients',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. One more lorem so it looks good.',
    date: '2023-08-18',
    image:
      'https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2332&q=80',
    tags: ['tailwindcss', 'css', 'frontend'],
  },
  {
    slug: 'tailwindcss-tips-and-tricks',
    title: 'Tailwindcss tips and tricks to conquer the world',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. One more lorem so it looks good.',
    date: '2023-08-18',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    tags: ['tailwindcss', 'css', 'frontend'],
  },
]
