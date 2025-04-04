import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Raleway, Inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { Footer } from '@/components/Footer'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Mandy Hale - Web developer | laravel | react | typescript',
  description:
    'Mandy Hale is a full stack developer who loves to create useful, intuitive technology to improve the way we live and work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          // inter.className,
          raleway.variable,
          inter.variable,
          'flex antialiased h-screen overflow-hidden bg-seasalt-white'
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 flex-1 overflow-y-auto">
          <div className="flex-1 bg-seasalt-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 overflow-y-auto ml-[3rem] md:ml-[2rem] lg:ml-0">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
