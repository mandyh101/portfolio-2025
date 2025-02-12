'use client'
import { timeline } from '@/constants/timeline'
import React from 'react'
import { Paragraph } from './Paragraph'
import { Heading } from './Heading'
import { IconCircleCheckFilled } from '@tabler/icons-react'

export const WorkHistory = () => {
  return (
    <div>
      {/* TODO add a connecting line between the timeline items */}
      {timeline.map((item, index) => (
        <div
          className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
          key={`timeline-${index}`}
        >
          <Paragraph className="w-full md:w-32 md:flex-shrink-0 italic">
            {item.date}
          </Paragraph>
          <div>
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            {/* TODO should probably extract this to a component... */}
            {item.technologies && (
              <div className="flex gap-2 my-2 flex-wrap">
                {item.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs font-heading md:text-sm bg-mono-grey-100 px-2 py-1 rounded-sm text-secondary shadow-sm text-night"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {item.responsibilities.map((responsibility, index) => (
              <Step key={index}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-4 w-4 mt-1 text-neutral-300 flex-shrink-0" />
      <Paragraph className="text-sm">{children}</Paragraph>
    </div>
  )
}
