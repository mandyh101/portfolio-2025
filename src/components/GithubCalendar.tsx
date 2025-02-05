'use client'

import GitHubCalendar from 'react-github-calendar'

import { Heading } from './Heading'
const GitHubCalendarComponent = ({ username }: { username: string }) => {
  return (
    <div className="mt-12 bg-sea-green-300/10 rounded-lg p-6">
      <Heading as="h3" className="h3 mb-6">
        <span className="text-sea-green-600">Github</span> contributions
      </Heading>
      <GitHubCalendar
        username="mandyh101"
        aria-label={`GitHub contributions calendar for ${username}`}
        colorScheme="light"
        blockSize={12}
        blockMargin={5}
        fontSize={16}
        style={{ fontFamily: 'var(--font-inter)' }}
      />
    </div>
  )
}

export default GitHubCalendarComponent
