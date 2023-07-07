import React from "react";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";

function Hero() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className=" max-w-[1280px]  md:pt-[90px] pt-[40px] md:py-0   px-4 md:px-0 ">
        <div className="flex w-full h-full">
        <div className="md:w-[60%] w-full">
        <div className="hidden md:block">
        <Hero1/>
        </div>
        <div className="block md:hidden">
          <Hero2/>
        </div>
        </div>
        <div className="w-[40%] hidden md:block">
            <img
            src="/images/landingPage/heropart2.png"
            alt="as"
            />
        </div>
        </div>
        <div className="pb-[35px]">
            <button className="lg:w-[160px] w-full text-[19px] font-[500] h-[50px] flex items-center justify-center bg-[#fc6142] mt-[1rem] rounded-[8px] text-white">
                Join for free
            </button>
      </div>
      </div>
      
    </div>
  );
}

export default Hero;
