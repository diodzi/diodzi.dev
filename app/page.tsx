import Image from 'next/image'
import Pfp from '@/public/pfp.png'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export default function Home() {
  return (
    <main className={`${GeistSans.className} space-y-8 my-8`}>
      <header className='mx-5 md:mx-auto mt-5 space-y-8 max-w-[1000px] flex flex-col md:flex-row md:space-x-8'>
        <div className='relative w-40 aspect-square rounded-md overflow-hidden'>
          <Image
            src={Pfp}
            fill
            style={{ objectFit: 'contain' }}
            alt='Picture of Dio Dziban'
          ></Image>
        </div>

        <div className='space-y-2'>
          <h1 className='text-5xl font-black'>Dio Dziban</h1>
          <div>
            <h2 className='text-[14px] md:text-xl font-semibold'>
              Computer Science → Georgia State University
            </h2>
            <h2 className='text-[14px] md:text-xl font-semibold'>
              Software Engineer → HotSauce Technologies
            </h2>
          </div>
        </div>
      </header>

      <section className='mx-5 md:mx-auto p-3 bg-white rounded-md max-w-[1000px]'>
        <h2
          className={`text-[10px] md:text-base font-extrabold ${GeistMono.className}`}
        >
          about me
        </h2>
        <p className='text-[10px] md:text-lg font-medium tracking-tight'>
          I am a full-time <b>computer science student</b> at Georgia State
          University. I also work as a{' '}
          <b>software engineer at HotSauce Technologies</b>, a restaurant
          Point-of-Sale solutions provider. I have a passion for
          <b>
            satisfying users and delivering products that are visually appealing
            and intuitive.
          </b>{' '}
          I am looking for an internship opportunity to continue to grow
          professionally and learn new skills.{' '}
          <b>
            I am confident I can adapt to new environments quickly and
            meaningfully contribute to any team or product.
          </b>
        </p>
      </section>

      <section className='bg-gradient-to-br from-stone-700 to-black text-stone-200'>
        <section className='p-5 md:px-0 space-y-3 max-w-[1000px] md:mx-auto'>
          <h2
            className={`text-[10px] md:text-base font-extrabold ${GeistMono.className}`}
          >
            contact
          </h2>
          <div className='bg-stone-100/10 shadow-lg px-3 py-2 rounded-md backdrop-blur-lg flex items-center justify-between'>
            <div className='flex flex-col'>
              <h2
                className={`text-[10px] md:text-base font-extrabold ${GeistMono.className}`}
              >
                email
              </h2>
              <h3 className='font-semibold md:text-xl'>me@diodzi.dev</h3>
            </div>
            <div className='font-semibold md:text-xl'>→</div>
            <h2 className={`${GeistMono.className} font-semibold md:text-xl`}>
              PREFERRED
            </h2>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <h2
                className={`text-[10px] md:text-base font-extrabold ${GeistMono.className}`}
              >
                LinkedIn
              </h2>
              <h3 className='font-semibold md:text-xl'>/in/diodzi</h3>
            </div>
            <div className='flex flex-col'>
              <h2
                className={`text-[10px] md:text-base font-extrabold ${GeistMono.className}`}
              >
                Phone Number
              </h2>
              <h3 className='font-semibold md:text-xl'>Upon Request</h3>
            </div>
            <div className='flex flex-col'>
              <h2
                className={`text-[10px] md:text-base font-extrabold ${GeistMono.className}`}
              >
                Instagram
              </h2>
              <h3 className='font-semibold md:text-xl'>@diodzi</h3>
            </div>
          </div>
        </section>
      </section>

      <section className='mx-5 space-y-3 max-w-[1000px] md:mx-auto'>
        <h2
          className={`text-[10px] md:text-base font-extrabold ${GeistMono.className}`}
        >
          experience
        </h2>
        <h3
          className={`${GeistMono.className} text-2xl md:text-5xl font-black`}
        >
          HotSauce Technologies
        </h3>

        <div className='space-y-6'>
          <div className='space-y-2'>
            <div
              className={`flex justify-between text-[14px] md:text-xl ${GeistMono.className} font-extrabold`}
            >
              <h4>Software Engineer</h4>
              <h4>Jul 2023 → Present</h4>
            </div>
            <ul className='list-disc mx-3 text-[12px] md:text-lg font-medium tracking-tight'>
              <li>
                Develop customer-facing user interfaces using React, TypeScript,
                and Tailwind.
              </li>
              <li>
                Develop back-end infrastructure and API endpoints using
                SpringBoot Java and Postgres SQL.
              </li>
              <li>
                Design prototypes and mock-ups for new products and feature
                additions to existing products using Figma.
              </li>
              <li>
                Work within a multi-continental team environment managed using
                industry-standard Agile Sprint based format.
              </li>
              <li>
                Develop C# Visual Basic code to accommodate new feature requests
                on our previous product.
              </li>
            </ul>
          </div>

          <div className='space-y-2'>
            <div
              className={`flex justify-between text-[14px] md:text-xl ${GeistMono.className} font-extrabold items-center`}
            >
              <h4 className='max-w-[40%]'>Assistant Support Manager</h4>
              <h4>Sep 2023 → Present</h4>
            </div>
            <ul className='list-disc mx-3 text-[12px] md:text-lg font-medium tracking-tight'>
              <li>
                Oversee lower-level technicians and ensure they have the proper
                information and tools necessary to solve customer issues.
              </li>
              <li>
                Handle scheduling conflicts, manage appointments, assign
                personnel to projects and initiatives.
              </li>
              <li>
                Led various initiatives within the company to clean up our
                processes, including streamlining our Work Order system, our
                shipping and inventory management system, and our cancellation
                procedures.
              </li>
              <li>
                Troubleshoot problems customers were having with our products,
                including but not limited to system configuration,
                Windows-related problems, internet connectivity issues, SQL
                errors, and credit card processing issues.
              </li>
            </ul>
          </div>

          <div className='space-y-2'>
            <div
              className={`flex justify-between text-[14px] md:text-xl ${GeistMono.className} font-extrabold items-center`}
            >
              <h4 className='max-w-[40%]'>Support Technician</h4>
              <h4>Aug 2022 → Jul 2023</h4>
            </div>
            <ul className='list-disc mx-3 text-[12px] md:text-lg font-medium tracking-tight'>
              <li>
                Troubleshoot problems customers were having with our products,
                including but not limited to system configuration,
                Windows-related problems, internet connectivity issues, SQL
                errors, and credit card processing issues.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
