import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";


function Chips({title}) {
  return (
    <Link href="#" >
    <div className='m-2 min-w-max overflow-hidden relative bg-white border border-zinc-300 hover:border-zinc-700 hover:bg-zinc-100 rounded-[8px] p-[1rem] font-Inter font-[600] flex items-center text-[1rem] '>
        <BiSearch className='text-[24px]'/><p className='mx-1 text whitespace-nowrap  font-[600]  text-[1rem] font-Inter'>{title}</p><IoIosArrowForward className='text-[20px] font-[300]'/>
    </div>
    </Link>
  )
}

export default Chips