import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Chips2({title}) {
  return (
    <Link href="#" >
    <div className='mx-2  bg-white border border-zinc-300 hover:border-zinc-700 hover:bg-zinc-100 rounded-[8px] px-[1rem] py-[1rem] flex items-center justify-between text-[1rem] w-full '>
       <p className='mx-1 text whitespace-nowrap w-full flex justify-between  font-[500] md:text-[18px] text-[1rem] font-serif'>{title}</p><IoIosArrowForward className='text-[20px] font-[300]'/>
    </div>
    </Link>
  )
}

export default Chips2