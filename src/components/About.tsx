'use client'
import { Paragraph } from '@/components/Paragraph'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heading } from './Heading'
import { Badge } from './Badge'

//create a props object
type AboutProps = {
  isAvailable?: Boolean
}

export default function About({ isAvailable = false }: AboutProps) {
  const images = [
    '/images/about/surfing2.jpg',
    '/images/about/biking.jpg',
    '/images/about/running.jpg',
  ]
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-12">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={300}
              height={400}
              alt=""
              className="rounded-sm object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>
      <div className="space-y-4 my-4">
        <div className="flex flex-row gap-2 items-center">
          <div className="relative w-4 h-4">
            <div
              className={`h-4 w-4 rounded-full blur-sm ${
                isAvailable
                  ? 'bg-sea-green-400 group-hover:bg-sea-green-500'
                  : 'bg-red-400 group-hover:bg-red-500'
              }`}
            />
            {/* First pulse ring for rippling pulse effect */}
            <div
              className={`absolute -inset-2 rounded-full blur-sm animate-pulse ${
                isAvailable ? 'bg-sea-green-400/20' : 'bg-red-400/20'
              }`}
            />
            {/* second pulse ring for rippling pulse effect  */}
            <div
              className={`absolute -inset-1 rounded-full blur-sm animate-pulse ${
                isAvailable ? 'bg-sea-green-300/30' : 'bg-red-400/30'
              }`}
            />
          </div>
          <p className="text-xl font-light">
            {isAvailable ? 'Available ' : 'Unavailable '}
            for work
          </p>
        </div>
        <Paragraph>
          Hi there, I&apos;m Mandy - a web developer on a mission to build
          technology and solutions that have a{' '}
          <span className="text-sea-green-700">positive impact</span> on people
          and communities.
        </Paragraph>
        <Paragraph>
          I started my career working in roles across sales, operations, marketing and communications. My curiosity around how tech products were built lead me to jump onto a new path and learn to code. With this non-traditional path into full-stack development, I bring a
          combo of human and technical skills to every project. My
          experience helps me approach building tech solutions from different perspectives, as a developer seeking to understand the best technical path,
          a communicator focused on understanding who the solution is for, and a relationship
          builder who values collaboration across stakeholders to achieve the best outcomes. These perspectives drive me to
          create solutions that are intuitive, the right fit, and user-centered.
        </Paragraph>
        <Paragraph>
          My approach is built on three core values: growth, collaboration, and
          communication. I thrive in challenging environments where I can learn
          from and be inspired by others. I seek a collaborative approach to solving complex problems as I believe this supports
          continuous improvement and innovation. And I believe clear communication
          is essential for alignment across teams, goals, and outcomes when building software, and this motivates me to work to ensure
          everyone is included in the software development journey, technical and non-technical.
        </Paragraph>
        <Paragraph className="font-semibold">
          I&apos;m always keen to chat tech and hear about new opportunities and
          projects. If you&apos;re looking for a collaborator or someone to join
          your team please get in touch!
        </Paragraph>
        <Badge href="mailto:mandyhale10@gmail.com" text="Send me an email" />
      </div>
      <div className="space-y-4 my-4">
        <Heading as="h2" className="h2 pt-4 text-sea-green-800">
          Out of office
        </Heading>
        <Paragraph>
          When I&apos;m not at my computer, you&apos;ll find me hanging out with my baby boy or embracing the
          outdoors. With so much of my work life spent at a computer, I take every opportunity to be present with my family and to connect with nature when I'm off the clock.
        </Paragraph>
      </div>
    </div>
  )
}
