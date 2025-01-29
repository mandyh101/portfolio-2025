import Image from 'next/image'
import React from 'react'
import { Heading } from './Heading'
import { Paragraph } from '@/components/Paragraph'
import { twMerge } from 'tailwind-merge'

export const TechStack = () => {
  const stack = [
    {
      title: 'Laravel',
      src: '/images/logos/next.png',

      className: 'h-10 w-14',
    },
    {
      title: 'TypeScript',
      src: '/images/logos/next.png',

      className: 'h-10 w-14',
    },
    {
      title: 'React JS',
      src: '/images/logos/aws.webp',

      className: 'h-10 w-10',
    },
    {
      title: 'PHP',
      src: '/images/logos/aws.webp',

      className: 'h-10 w-10',
    },
    {
      title: 'Vue JS',
      src: '/images/logos/aws.webp',

      className: 'h-10 w-10',
    },
    {
      title: 'Framer Motion',
      src: '/images/logos/framer.webp',

      className: 'h-10 w-10',
    },
    {
      title: 'Tailwind',
      src: '/images/logos/tailwind.png',

      className: 'h-10 w-24',
    },
    {
      title: 'Git',
      src: '/images/logos/tailwind.png',

      className: 'h-10 w-24',
    },
    {
      title: 'RESTful APIs',
      src: '/images/logos/aws.webp',

      className: 'h-10 w-10',
    },
    {
      title: 'MySQL',
      src: '/images/logos/aws.webp',

      className: 'h-10 w-10',
    },
    {
      title: 'Microsoft Azure',
      src: '/images/logos/aws.webp',

      className: 'h-10 w-10',
    },
    {
      title: 'Figma',
      src: '/images/logos/figma.png',

      className: 'h-10 w-8',
    },
    {
      title: 'Miro',
      src: '/images/logos/figma.png',

      className: 'h-10 w-8',
    },
  ]
  return (
    <div className="section-padding">
      <Heading as="h2" className="text-3xl md:text-4xl">
        My favourite Tech and Tools
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        On top of foundations of Javascript, CSS and HTML, below is a list of
        the tech that makes up my current workflows and stack.
      </Paragraph>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge('object-contain mr-4 mb-4', item.className)}
          />
        ))}
      </div>
    </div>
  )
}
