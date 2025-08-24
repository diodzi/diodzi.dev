import type { Metadata } from 'next'
import './globals.css'
import ObserverProvider from '@/components/intersect-observer-provider'
import { Toaster } from '@/components/ui/sonner'

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
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌃</text></svg>'
        />
        <link rel='stylesheet' href='https://use.typekit.net/pgi1ucm.css' />
      </head>
      <ObserverProvider>
        <body className={`font-[Elza] antialiased`}>{children}</body>
      </ObserverProvider>
      <Toaster />
    </html>
  )
}
