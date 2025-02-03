'use client'
import { navlinks } from '@/constants/navlinks'
import { Navlink } from '@/types/navlink'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { Heading } from './Heading'
import { socials } from '@/constants/socials'
import { Badge } from './Badge'
import { AnimatePresence, motion } from 'framer-motion'
import { IconLayoutSidebarRightCollapse } from '@tabler/icons-react'
import { isMobile } from '@/lib/utils'

export const Sidebar = () => {
  const [open, setOpen] = useState(true)

  // Update the state after component mounts on client side to prevent hydration mismatch and close the sidebar by default when on mobile devices
  useEffect(() => {
    setOpen(!isMobile())
  }, [])

  return (
    <>
      <button
        className={`fixed top-4 ${
          open ? 'left-[11rem]' : 'left-2'
        } h-8 w-8 border-1 bg-tropical-indigo-200 border-tropical-indigo-400 rounded-full backdrop-blur-sm shadow-sm flex items-center justify-center z-[101]`}
        onClick={() => setOpen(!open)}
      >
        <IconLayoutSidebarRightCollapse
          className={`h-6 w-6 text-secondary transition duration-500 ${
            !open ? 'rotate-180' : ''
          }`}
        />
        <span className="sr-only">
          {open ? 'Close sidebar menu' : 'Open sidebar menu'}
        </span>
      </button>

      <AnimatePresence>
        <motion.div
          initial={{ width: open ? '14rem' : '2rem' }}
          animate={{ width: open ? '14rem' : '2rem' }}
          transition={{ duration: 0.2, ease: 'linear' }}
          className={`px-6 z-[100] bg-neutral-100 shadow-md lg:w-fit fixed lg:relative min-h-screen left-0 flex flex-col justify-between ${
            !open && 'items-center px-1'
          }`}
        >
          <div className="flex-1 overflow-auto relative space-y-6 py-12">
            <SidebarHeader open={open} />
            <Navigation setOpen={setOpen} open={open} />
          </div>
          {/* TODO: bring back this link with resume? Also fix bug so that isOpen cannot be toggled on non-mobile devices */}
          {/* <div onClick={() => isMobile() && setOpen(false)}>
            <Badge href="/resume" text="Read Resume" />
          </div> */}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export const Navigation = ({
  setOpen,
  open,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
}) => {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <div
      className={`flex flex-col space-y-2 my-10 relative z-[100] ${
        !open && 'space-y-4'
      }`}
    >
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            `font-heading text-primary hover:text-tropical-indigo-800 transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm`,
            !open && '',
            isActive(link.href) && 'bg-white shadow-lg text-primary'
          )}
        >
          <link.icon
            className={twMerge(
              `h-6 w-6 flex-shrink-0 ${!open && 'mx-auto'}`,
              isActive(link.href) && 'text-tropical-indigo-600'
            )}
          />
          <span className={`${!open && 'hidden'}`}>{link.label}</span>
        </Link>
      ))}

      <Heading
        as="h3"
        className={`h4 text-sm md:text-sm lg:text-sm pt-10 px-2 ${
          !open && 'hidden'
        }`}
      >
        Connect with me
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          className={twMerge(
            `font-sans text-primary hover:text-tropical-indigo-900 transition duration-200 flex items-center space-x-2 py-2 px-2 text-sm ${
              !open && 'bg-tropical-indigo-200 rounded-full'
            }`
          )}
        >
          <link.icon
            className={twMerge(
              `h-6 w-6 flex-shrink-0`,
              isActive(link.href) && 'text-tropical-indigo-600'
            )}
          />
          <span className={`${!open && 'hidden'}`}>{link.label}</span>
        </Link>
      ))}
    </div>
  )
}

const SidebarHeader = ({ open }: { open: boolean }) => {
  return (
    <div className={`flex space-x-2 ${!open && 'pt-4 mx-auto'}`}>
      <div
        className={`overflow-hidden rounded-full ${
          !open ? 'mx-auto w-10 h-10' : 'w-14 h-14'
        }`}
      >
        <Image
          src="/images/mandy_hale_circl.png"
          alt=""
          height="40"
          width="40"
          className="object-cover flex-shrink-0"
        />
      </div>
      <div className={`flex text-sm flex-col ${!open && 'hidden'}`}>
        <p className="font-bold text-primary">Mandy Hale</p>
        <p className="font-light text-secondary">
          Full stack developer & innovator
        </p>
      </div>
    </div>
  )
}
