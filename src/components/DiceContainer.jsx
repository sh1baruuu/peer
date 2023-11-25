import React from 'react'

function DiceContainer({children}) {
  return (
    <div className='grid grid-cols-5 place-items-center pb-14 max-w-[700px] place-content-center gap-[30px]'>{children}</div>
  )
}

export default DiceContainer