import { StaticImageData } from 'next/image'

export type Project = {
  title: string
  description: string
  thumbnail: StaticImageData
  images: StaticImageData[] | string[]
  href: string
  slug?: string
  stack?: string[]
  content?: React.ReactNode | string
  cta?: string
}
