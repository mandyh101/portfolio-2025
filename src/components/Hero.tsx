'use client'
import React from 'react'
import { Heading } from './Heading'
import { Highlight } from '@/components/Highlight'
import { Paragraph } from './Paragraph'
import { Badge } from './Badge'

export const Hero = () => {
  return (
    <div className="section-padding">
      <Heading>
        <span className="text-sea-green-600">Kia ora!</span> I&apos;m Mandy
      </Heading>
      <div className="max-w-xl mt-4 flex flex-col space-y-4">
        <Paragraph>
          I&apos;m a full-stack developer and innovator on a mission to{' '}
          <Highlight>positively impact people and communities</Highlight>{' '}
          through meaningful tech solutions.
        </Paragraph>
        <Paragraph>
          My path to becoming a developer wasn&apos;t linear -{' '}
          <Highlight>
            I&apos;ve worked across marketing, sales, operations, and customer
            support.
          </Highlight>{' '}
          This diverse background helps me see technology from different
          perspectives, enabling me to empathise with users and build{' '}
          <Highlight>intuitive, user-centered web solutions</Highlight>.
        </Paragraph>
      </div>
    </div>
  )
}
