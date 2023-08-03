import './globals.css'

import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Providers } from '@/redux/provider'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audiophile',
  description:
    "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={manrope.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
