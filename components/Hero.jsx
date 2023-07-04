import React from "react";
import Hero1 from "./Hero1";

function Hero() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="container flex pt-[60px] items-center justify-center px-4">
        <div className="flex-[60%]">
        <Hero1/>
        </div>
        <div className="flex-[40%] hidden md:block">
            <img
            src="/images/landingPage/heropart2.png"
            alt="as"
            />
        </div>
      </div>
      <div className="container px-4 pb-[2rem]">
            <button className="lg:w-[160px] w-full text-[19px] font-[500] h-[50px] flex items-center justify-center bg-[#fc6142] mt-[1.5rem] rounded-[10px] text-white">
                Join for free
            </button>
      </div>
    </div>
  );
}

export default Hero;
