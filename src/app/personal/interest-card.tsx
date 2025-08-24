import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'

export default function InterestCard({
  title,
  description,
  fav,
  icon,
  picture,
  colour,
}: {
  title: string
  description: string
  fav: string
  icon: React.ReactNode
  picture: StaticImageData
  colour: string
}) {
  return (
    <div
      className={cn(
        'p-6 w-full flex flex-col lg:flex-row lg:items-end gap-x-6 rounded-xs intersect-once intersect:motion-preset-slide-up-lg',
        colour,
      )}
    >
      <div className='relative h-80 w-full lg:w-64'>
        <Image
          src={picture}
          alt='Picture of a plane wing above the clouds overlooking a sunset.'
          fill
          objectFit='cover'
          className='intersect-once intersect:motion-blur-in-3xl'
        />
      </div>
      <div className='flex-1 flex flex-col gap-y-4 bg-primary text-white p-4 lg:rounded-xs'>
        <div className='flex items-center gap-x-2'>
          {icon}
          <h2 className='font-semibold text-4xl'>{title}</h2>
        </div>
        <h3 className='font-medium text-sm'>{description}</h3>
        <h4 className='text-sm font-medium'>Fav {fav}</h4>
      </div>
    </div>
  )
}
