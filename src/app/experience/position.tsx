import { MoveRightIcon } from 'lucide-react'
import { ReactNode } from 'react'

export function Position({
  title,
  from,
  to,
  children,
}: {
  title: string
  from: string
  to: string
  children: ReactNode
}) {
  return (
    <>
      <div className='pt-8 pb-2 border-b-[1px]'>
        <h2 className='text-xl md:text-3xl font-medium leading-9 flex justify-between'>
          {title}
          <span>
            {from} <MoveRightIcon className='inline' /> {to}
          </span>
        </h2>
      </div>
      {children}
    </>
  )
}

export function PositionList({ children }: { children: ReactNode }) {
  return <ul className='list-disc ml-6 space-y-2 font-medium'>{children}</ul>
}
