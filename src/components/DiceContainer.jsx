import React from 'react'

function DiceContainer({children}) {
  return (
    <div className='grid grid-cols-5  z-[2]  place-items-center lg:pb-14 pb-52 max-w-[700px] place-content-center lg:gap-8 gap-4'>{children}</div>
  )
}

export default DiceContainer