import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

export const metadata: Metadata = {
  title: 'Dio Dziban',
  description: 'Dio Dziban is a freelance web developer.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased bg-stone-200`}>{children}</body>
    </html>
  )
}
