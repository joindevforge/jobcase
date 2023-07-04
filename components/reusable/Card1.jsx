import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiArrowRight} from "react-icons/fi"
function Card1({img,title,desc,link}) {
  return (
    <div className='text-black bg-white rounded-[8px] lg:min-w-[400px] w-full pt-[32px] pb-[24px] px-[28px] flex'>
        <div className='flex items-center justify-center my-[11px] mx-[16px]'>
            <Image
            src={img}
            width={100}
            height={100}
            alt={title}
            />
        </div>
        <div>
        <h3 className='text-[1.625rem] font-[500]'>{title}</h3>
        <p className='text-[#595959]  text-[1rem] font-[400] w-[80%]'>{desc}</p>
        <Link 
        href="#"
        className='text-blue text-[1.1875rem] flex items-center'
        >
            {link}{" "}<FiArrowRight className='ml-2'/>
        </Link>
        </div>
    </div>
  )
}

export default Card1