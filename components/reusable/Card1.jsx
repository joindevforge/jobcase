import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiArrowRight} from "react-icons/fi"
function Card1({img,title,desc,link}) {
  return (
    <div className='text-black bg-white rounded-[8px] lg:max-w-[424px] w-full lg:pt-[32px] pt-[22px] lg:pb-[24px] pb-[14px] px-[28px] flex'>
        <div className='flex items-center justify-center  h-full  '>
            <img
            src={img}
            className='w-[120px] h-[100px] my-[11px] mx-[13px]  '
            alt={title}
            
            />
        </div>
        <div className='w-full h-full ml-3'>
        <h3 className='md:text-[1.625rem] text-[1.375rem] font-[500]'>{title}</h3>
        <p className='text-[#595959]  text-[1rem] font-[400] mb-[1rem] w-[100%] font-Inter'>{desc}</p>
        <Link 
        href="#"
        className='text-bluee text-[1.1875rem] font-Founders font-[500] whitespace-nowrap flex items-center'
        >
            {link}{" "}<FiArrowRight className='ml-2'/>
        </Link>
        </div>
    </div>
  )
}

export default Card1