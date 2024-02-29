import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export default function Container({children}: Props) {
  return (
    <div className=' flex items-center justify-between w-full max-w-[1246px] pl-[2%] mx-auto'>
      {children}
    </div>
  )
}
