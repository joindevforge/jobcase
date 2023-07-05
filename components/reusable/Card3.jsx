import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
function Card3({ img, title, desc }) {
  return (
    <div className=" max-w-[515px] lg:p-[2.5rem] p-[1rem] border rounded-[8px] border-zinc-300 flex  flex-col lg:flex-row   lg:mb-[3.5rem] mb-[2.5rem]">
      <div className="flex items-center justify-center lg:w-[50%] w-full mr-10 p-2">
        <img src={img} alt={title} className="w-[99px] h-[99px]" />
      </div>
      <div className="">
        <p className="pb-[8px] text-[1.5rem]  font-bold font-Founders">
          {title}
        </p>
        <p className="text-[#595959]">{desc}</p>
        <Link href="#" className="flex  font-bold text-blue items-center mt-4">
          Learn more <FiArrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default Card3;
