import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
function Card3({ img, title, desc }) {
  return (
    <div className=" max-w-[515px] w-full md:p-[2.5rem] p-[2rem] border rounded-[8px] border-zinc-300 flex  flex-col md:flex-row h-[225px] ">
      <div className=" w-[50%] flex items-center h-full ">
        <img src={img} alt={title} className="w-[99px] h-[99px]" />
      </div>
      <div className="text-left w-full">
        <p className="pb-[8px] text-[1.5rem]  font-[500] font-Founders">
          {title}
        </p>
        <p className="text-[#595959]">{desc}</p>
        <Link href="#" className="flex  font-Founders text-[1.1875rem] font-[500] text-bluee items-center mt-4">
          Learn more <FiArrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default Card3;
