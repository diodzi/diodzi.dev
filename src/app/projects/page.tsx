import ArrowBtn from '../arrow-btn'

export default async function ProjectsPage() {
  return (
    <div className='h-[100dvh] px-6 py-2 lg:p-8 bg-grain-mobile xl:bg-grain flex flex-col text-primary'>
      <header className='space-y-8 pb-8 intersect-once intersect:motion-preset-slide-down-lg'>
        <nav className=' w-full flex justify-between'>
          <ArrowBtn href='/'>Home</ArrowBtn>
          <ArrowBtn href='/experience'>Personal</ArrowBtn>
          <ArrowBtn href='/projects'>Experience</ArrowBtn>
        </nav>
        <section className='space-y-8'>
          <h1 className='text-8xl font-semibold hidden lg:block intersect-once intersect:motion-preset-slide-up-lg'>
            wait don't look yet
          </h1>
          <p className='font-medium text-xl lg:w-1/2'>
            I have projects I promise...
          </p>
        </section>
      </header>
    </div>
  )
}
