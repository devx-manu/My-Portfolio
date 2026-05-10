import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manu SH - Java Full Stack Developer',
  description:
    'Cosmic portfolio of Manu SH, a Java full stack developer, DevOps explorer, and community builder',
  keywords:
    'Java, Full Stack, DevOps, Spring Boot, React, Web Development, Kannada Developer',
  authors: [{ name: 'Manu SH' }],
  creator: 'Manu SH',
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a15',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-slate-950 text-foreground"
        style={{
          '--font-sans': geist.style.fontFamily,
          '--font-mono': geistMono.style.fontFamily,
        } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  )
}
