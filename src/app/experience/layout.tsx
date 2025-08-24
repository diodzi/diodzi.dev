import ArrowBtn from '../arrow-btn'
import Tab from './tab'

export default async function ExperienceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='px-6 py-2 lg:p-8 flex flex-col bg-grain-mobile xl:bg-grain'>
      <nav className=' w-full flex justify-between'>
        <ArrowBtn href='/'>Home</ArrowBtn>
        <ArrowBtn href='/personal'>Personal</ArrowBtn>
        <ArrowBtn href='/projects'>Projects</ArrowBtn>
      </nav>
      <div className='flex flex-col flex-grow items-center overflow-y-scroll'>
        {children}
      </div>
    </div>
  )
}
