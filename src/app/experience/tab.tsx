'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Tab({ label, href }: { label: string; href: string }) {
  const pathname = usePathname()
  const onThisPage = pathname.split('/').at(-1) === href
  const category = pathname.split('/').at(-2)

  return (
    <Link
      href={`/${category}/${href}`}
      className={cn(
        'py-2 px-4 text-nowrap font-medium tracking-tight text-sm border-r-1',
        onThisPage ? 'bg-zinc-800' : null,
      )}
    >
      {label}
    </Link>
  )
}
