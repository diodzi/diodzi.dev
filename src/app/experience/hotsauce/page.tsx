import { ArrowUpRightIcon } from 'lucide-react'
import { Position, PositionList } from '../position'

export default async function HotsaucePage() {
  return (
    <main className='intersect-once intersect:motion-preset-slide-up-sm p-4 pt-6 md:py-16 md:max-w-[70vw] space-y-6'>
      <h1 className='text-5xl font-semibold tracking-tight'>
        <a
          href='https://www.hotsaucepos.com'
          className='flex items-center gap-x-3 hover:underline'
        >
          HotSauce Technologies <ArrowUpRightIcon />
        </a>
      </h1>
      <div className='pt-8 space-y-2'>
        <h2 className='text-xl md:text-3xl font-medium leading-9 border-b-[1px]'>
          TL;DR
        </h2>
        <p className='font-medium'>
          I currently work as a full-stack software engineer for HotSauce
          technologies, a company that provides point-of-sale hardware and
          software to thousands of merchants across the country. I used to also
          work in the technical support department, both in a managerial
          capacity and boots on the ground.
        </p>
      </div>

      <Position title='Software Engineer' from='Jul 2023' to='Present'>
        <PositionList>
          <li>
            Develop <b>full-stack web applications</b> for customer use and
            internal use.
          </li>
          <li>
            Develop customer-facing <b>user interfaces</b> using{' '}
            <b>React, TypeScript, NextJS, and Tailwind.</b>
          </li>
          <li>
            Develop <b>back-end infrastructure</b> and APIs using{' '}
            <b>Node.JS, SpringBoot Java and Postgres SQL.</b>
          </li>
          <li>
            Design <b>prototypes</b> and mock-ups for new products and feature
            additions to existing products using <b>Figma.</b>
          </li>
          <li>
            Work within a <b>multi-continental</b> team environment managed
            using industry-standard <b>Agile Sprint based format.</b>
          </li>
          <li>
            Develop for our legacy product using{' '}
            <b>C# and Microsoft SQL Server.</b>
          </li>
        </PositionList>
      </Position>

      <Position title='Assistant Support Manager' from='Sep 2023' to='Nov 2024'>
        <PositionList>
          <li>
            Led various initiatives within the company to clean up our
            processes, including streamlining our Work Order system, our
            shipping and inventory management system, and our cancellation
            procedures.
          </li>
          <li>
            Oversaw lower-level technicians and ensure they have the proper
            information and tools necessary to solve customer issues.
          </li>
          <li>
            Handle scheduling conflicts, manage appointments, assign personnel
            to projects and initiatives.
          </li>
          <li>
            Created databases in order to better analyze, organize, and maintain
            customer data.
          </li>
        </PositionList>
      </Position>

      <Position title='Support Technician' from='Aug 2022' to='Jul 2023'>
        <PositionList>
          <li>
            Troubleshot problems customers were having with our products,
            including but not limited to SQL errors, credit card processing
            issues, system configuration, Windows-related problems, and internet
            connectivity issues.
          </li>
        </PositionList>
      </Position>
    </main>
  )
}
