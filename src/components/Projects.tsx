'use client'
import React from 'react'
import { Heading } from './Heading'
import { Project } from '@/types/project'
import { projects } from '@/constants/projects'
import Link from 'next/link'
import Image from 'next/image'
import { Paragraph } from './Paragraph'
import { motion } from 'framer-motion'

interface ProjectsProps {
  showHeading?: boolean
}
export const Projects = ({ showHeading = true }: ProjectsProps) => {
  return (
    <div className="section-padding">
      {showHeading && (
        <Heading as="h2" className="text-3xl md:text-4xl">
          What I&apos;ve been <span className="text-sea-green-600">work</span>
          ing on
        </Heading>
      )}
      <div className="grid grid-cols-1 gap-10 mt-6">
        {projects.map((project: Project, idx: number) => (
          <motion.div
            key={project.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <div
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 
              bg-tropical-indigo-100
              hover:bg-tropical-indigo-200 
              rounded-2xl transition duration-200 pt-4 
              shadow-md relative"
            >
              <Image
                src={project.thumbnail}
                alt="thumbnail"
                height="200"
                width="200"
                className="rounded-md"
              />
              <div className="flex flex-col justify-between p-2 md:p-0">
                <div>
                  <Heading as="h3" className="h3">
                    <Link
                      href={
                        project.slug
                          ? `/projects/${project.slug}`
                          : project.href
                      }
                      key={project.href}
                    >
                      {project.title}
                      <span className="absolute inset-0 z-10" />
                    </Link>
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {project.description}
                  </Paragraph>
                </div>
                <div className="flex gap-2 mt-2 md:mb-1 md:mt-0 flex-wrap">
                  {project.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs font-heading md:text-sm bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
