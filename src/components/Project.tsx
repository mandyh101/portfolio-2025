'use client'
import { Project } from '@/types/project'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'
import { motion } from 'framer-motion'

export const SingleProject = ({ project }: { project: Project }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    project.thumbnail
  )
  return (
    <div className="py-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={project.slug}
        className="relative rounded-md overflow-hidden"
      >
        <Image
          src={activeImage}
          alt="thumbnail"
          height="1000"
          width="1000"
          className="rounded-md object-contain max-h-[600px]"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap">
        {project.images.map((image, idx) => (
          <button
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image}
              alt="project thumbnail"
              height="1000"
              width="1000"
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
            />
          </button>
        ))}
      </div>
      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <Heading className="h1 py-4"> {project.title}</Heading>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0 self-end">
          {project.stack?.map((stack: string) => (
            <span
              key={stack}
              className="font-heading text-xs md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className="max-w-xl mt-4">{project.description}</Paragraph>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">
        {project?.content}
      </div>

      <a
        href={project.href}
        target="__blank"
        className="font-heading inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-mono-grey-400 bg-tropical-indigo-600 text-white shadow-lg shadow-mono-grey-400/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-tropical-indigo-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
      >
        {project.cta ? project.cta : 'Live Preview'}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
    </div>
  )
}
