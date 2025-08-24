'use client'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { ClipboardIcon, MailIcon, SendIcon } from 'lucide-react'
import { toast } from 'sonner'

export default function ({
  size,
  className,
}: {
  size: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('hello@diodzi.dev')

    toast.message(
      <span className='font-[Elza]'>Copied email to clipboard</span>,
      {
        description: (
          <span className='font-[Elza] text-primary'>See you soon! :)</span>
        ),
      },
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            'group lg:p-4 relative w-fit lg:overflow-hidden',
            className,
          )}
        >
          <span
            className={cn(
              'w-fit relative z-10 duration-200 ease-out group-hover:text-white intersect-once intersect:motion-preset-slide-up-lg font-medium tracking-tight text-primary flex items-center hover:underline hover:cursor-pointer',
              size === 'lg'
                ? 'text-8xl font-semibold gap-x-6'
                : size === 'md'
                  ? 'text-6xl font-semibold gap-x-4'
                  : 'text-4xl font-semibold gap-x-2',
            )}
          >
            hello@diodzi.dev
            <SendIcon
              className='-motion-translate-y-loop-25 motion-translate-x-loop-25 motion-duration-[1s] motion-ease-spring-smooth'
              size={size === 'lg' ? 72 : 20}
              strokeWidth={2}
            />
          </span>
          <div className='absolute inset-0 z-0 h-full w-0 bg-black duration-200 ease-out group-hover:w-full'></div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>See you soon!</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={copyToClipboard}>
          <div className='flex items-center gap-x-4'>
            <ClipboardIcon />
            <span className='font-medium'>Copy email to Clipboard</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href='mailto:hello@diodzi.dev'
            className='flex items-center gap-x-4'
          >
            <MailIcon />
            <span className='font-medium'>Open your default email app</span>
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
