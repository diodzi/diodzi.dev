import Email from '@/components/email'
import HomePicture from '../../public/home.jpg'
import Image from 'next/image'
import { CopyrightIcon } from 'lucide-react'
import ArrowBtn from './arrow-btn'

export default function Home() {
  return (
    <main className='h-[100dvh] overflow-hidden flex flex-col bg-background bg-grain-mobile xl:bg-grain text-primary'>
      <div className='intersect-once intersect:motion-preset-slide-down-lg'>
        <header className='p-6 lg:py-8 lg:pl-3'>
          <h2 className='lg:text-4xl font-medium lg:pl-5 tracking-tight'>
            let's talk :)
          </h2>
          <Email size='lg' className='hidden lg:flex' />
          <Email size='sm' className='lg:hidden' />
        </header>
        <nav className='px-6 pb-2 lg:px-8 lg:pb-8 w-full flex justify-between items-center text-2xl font-medium'>
          <ArrowBtn href='personal'>Personal</ArrowBtn>
          <ArrowBtn href='experience'>Experience</ArrowBtn>
          <ArrowBtn href='projects'>Projects</ArrowBtn>
        </nav>
      </div>
      <div className='relative flex-grow w-full'>
        <Image
          src={HomePicture}
          alt='Picture of Dio Dziban standing in front of a sunset.'
          fill
          objectFit='cover'
          className='intersect-once intersect:motion-blur-in-3xl'
        />
      </div>
      <footer className='intersect-once intersect:motion-preset-slide-up-lg px-6 py-2 flex justify-between items-center font-medium'>
        <div className='text-lg'>ATL - NYC - BOS</div>
        <div className='hidden lg:block'>
          <ArrowBtn href='https://github.com/diodzi/diodzi.dev'>
            View this repo
          </ArrowBtn>
        </div>
        <div className='flex items-center gap-x-2'>
          <CopyrightIcon size={15} strokeWidth={2.5} />{' '}
          <span>2025 Dio Dziban</span>
        </div>
      </footer>
    </main>
  )
}
