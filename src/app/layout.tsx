import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ObserverProvider from '@/components/intersect-observer-provider'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dio Dziban',
  description: 'Software Engineer and Computer Science student.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/pgi1ucm.css' />
      </head>
      <ObserverProvider>
        <body className={`font-[Elza] antialiased`}>{children}</body>
      </ObserverProvider>
      <Toaster />
    </html>
  )
}
