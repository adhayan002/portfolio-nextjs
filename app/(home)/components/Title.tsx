import React from 'react'

function Title({text,className}:{text:string,className?:string}) {
  return (
    <div className={className}>
        <h1 className='text-3xl font-bold group-hover:text-bg-sky-300'>{text}</h1>
        <div className='w-40 h-2 bg-sky-300 rounded-full'></div>
        <div className='w-40 h-2 bg-[#D0FCB3] rounded-full ml-2'></div>
    </div>
  )
}

export default Title