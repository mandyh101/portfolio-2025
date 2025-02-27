import Image from 'next/image'
import React from 'react'
import { Heading } from './Heading'
import { Paragraph } from '@/components/Paragraph'
import { twMerge } from 'tailwind-merge'

export const TechStack = () => {
  const stack = [
    {
      title: 'Laravel',
      src: '/images/logos/laravel.svg',
      className: 'h-10 w-14',
    },
    {
      title: 'TypeScript',
      src: '/images/logos/typescript.svg',
      className: 'h-10 w-14',
    },
    {
      title: 'React JS',
      src: '/images/logos/react.svg',
      className: 'h-10 w-10',
    },
    {
      title: 'PHP',
      src: '/images/logos/php.svg',
      className: 'h-10 w-10',
    },
    {
      title: 'Vue JS',
      src: '/images/logos/vue.svg',
      className: 'h-10 w-10',
    },
    {
      title: 'Tailwind',
      src: '/images/logos/tailwind.png',
      className: 'h-10 w-24',
    },
    {
      title: 'Framer Motion',
      src: '/images/logos/framer.webp',
      className: 'h-10 w-10',
    },
    {
      title: 'Git',
      src: '/images/logos/git.svg',
      className: 'h-10 w-24',
    },
    {
      title: 'RESTful APIs',
      src: '/images/logos/rest-api.png',
      className: 'h-10 w-10',
    },
    {
      title: 'MySQL',
      src: '/images/logos/mysql.svg',
      className: 'h-10 w-10',
    },
    {
      title: 'Figma',
      src: '/images/logos/figma.png',
      className: 'h-10 w-8',
    },
    {
      title: 'Miro',
      src: '/images/logos/miro.svg',
      className: 'h-10 w-8',
    },
  ]
  return (
    <div className="section-padding">
      <Heading as="h2" className="text-3xl md:text-4xl">
        My favourite <span className="text-sea-green-600">Tech and Tools</span>
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        On top of my foundations of Javascript, CSS and HTML, these are the
        technologies that makes up my current workflows and stack.
      </Paragraph>
      <div className="flex flex-wrap mt-8 gap-y-6">
        {stack.map((item) => (
          <div
            className="flex flex-col items-center justify-center mx-3 min-w-[100px]"
            key={item.src}
          >
            <Image
              src={item.src}
              width={`200`}
              height={`200`}
              alt={item.title}
              className={twMerge('object-contain', item.className)}
            />
            <p className="text-xs mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
