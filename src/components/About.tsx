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

export default function About({ isAvailable = true }: AboutProps) {
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
          With a non-traditional path into full-stack development, I bring a
          unique blend of human and technical skills to every project. My
          experience in web development, marketing, and communications has
          shaped how I see technology—through the lens of a developer, a
          communicator focused on understanding the user, and a relationship
          builder who values collaboration. These perspectives drive me to
          create solutions that are intuitive and user-centered. Based in
          Ōtautahi (Christchurch), Aotearoa (New Zealand) and with extensive
          experience as a remote worker, I&apos;m able to effectively
          collaborate across cross-functional teams across hybrid and fully
          remote environments.
        </Paragraph>
        <Paragraph>
          My approach is built on three core values: growth, collaboration, and
          communication. I thrive in challenging environments where I can learn
          from and be inspired by others—seeing complex problems as
          opportunities for continuous improvement and innovation. I believe
          strong teamwork drives success, so I prioritise collaboration and aim
          to support colleagues in achieving shared goals. Clear communication
          is essential for alignment across teams, goals, and outcomes, ensuring
          everyone is included in the development journey. I achieve this
          through active listening, documentation, and establishing feedback
          loops with clients and stakeholders.
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
          When I&apos;m not at my computer, you&apos;ll find me embracing the
          outdoors as a water woman, mountain biker, and trail runner. I&apos;m
          also a yoga teacher and actively contribute to my community as a
          member of Climate Action Tech, Women in Tech Christchurch, and as a
          volunteer Surf Life Guard at Taylors Mistake Surf Life Saving Club.
        </Paragraph>
      </div>
    </div>
  )
}
