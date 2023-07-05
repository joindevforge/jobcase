import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";


function Chips({title}) {
  return (
    <Link href="#" >
    <div className='mx-2 relative bg-white border border-zinc-300 hover:border-zinc-700 hover:bg-zinc-100 rounded-[8px] px-[1rem] py-[0.5rem] flex items-center text-[1rem] '>
        <BiSearch className='text-[24px]'/><p className='mx-1 text whitespace-nowrap  font-[500] md:text-[18px] text-[1rem] font-serif'>{title}</p><IoIosArrowForward className='text-[20px] font-[300]'/>
    </div>
    </Link>
  )
}

export default Chips