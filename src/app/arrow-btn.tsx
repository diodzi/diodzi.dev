'use client'

import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/lib/hooks/useIsMobile'
import { cn } from '@/lib/utils'
import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function ArrowBtn({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const isMobile = useIsMobile()

  return (
    <Button variant={'link'} className='hover:cursor-pointer p-0'>
      <Link href={href} className='flex items-center gap-x-1 group'>
        <span className={cn(!isMobile ? 'text-xl' : 'text-md')}>
          {children}
        </span>
        <ArrowUpRightIcon
          strokeWidth={2}
          className='group-hover:-motion-translate-y-loop-25 group-hover:motion-translate-x-loop-25 motion-duration-[1s] motion-ease-spring-smooth'
        />
      </Link>
    </Button>
  )
}
