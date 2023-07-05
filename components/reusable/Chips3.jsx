import React from 'react'

function Chips3({title,followers}) {
  return (
    <div className='mx-2 relative bg-white border border-zinc-300 hover:border-zinc-700 hover:bg-zinc-100 rounded-[8px] px-[1rem] py-[0.5rem]  text-[1rem] w-[200px] '>
        <p className='font-[600] font-Inter '><span className='text-[18px] text-blue'>#</span>{title}</p>
        <p className='text-[#595959] font-Inter font-[300] whitespace-nowrap'>{followers} followers</p>
    </div>
  )
}

export default Chips3