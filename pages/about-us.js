import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/core';
import React, { useEffect, useState } from 'react'

const stroke = [
  {
    number: "120M+",
    desc: "registered members",
  },
  {
    number: "20M+",
    desc: "unique visitors per month",
  },
  {
    number: "#3",
    desc: "among US online career services¹",
  },
];

const cardData = [
    {
        title:"Tools",
        desc:"Jobcase provides lots of capabilities for job seeking and self-improvement, like - access to jobs, an online profile and resume builder, important learning resources, and other great ways to help you take action and create a better future.",
        img:"/images/about/icontool.png"
    },
    {
        title:"Community",
        desc:"No one should have to go it alone, and we can all learn from each other. That's why Jobcase offers a positive place to share experiences. If you need advice, support, or inspiration, you'll find millions of people across the US who are willing to help you.",
        img:"/images/about/icon-1.png"
    },
    {
        title:"Advocacy",
        desc:"As a community of millions, Jobcase has the power to elevate the voices and needs of America's workers. We promote business practices and technology that put people first, and foster an economy that rewards all stakeholders.",
        img:"/images/about/icon2.png"
    }
]

function Aboutus() {
    const [page,setPage] = useState(3)
    useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
  
       setPage(1)
      } else {
       setPage(3)
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="w-full h-full">
        <h1 className="lg:text-[4.375rem] text-[2.5rem] pt-10 font-[700] font-cond  text-blue w-full text-center ">
          EMPOWERING EVERY WORKER.
        </h1>
        <p className="pt-4 text-center text-[#212529] text-[1rem]">
          Jobcase is an online community dedicated to empowering the
          world&apos;s workers.
        </p>
        <div className="w-full h-full pt-12">
          <img
            src="/images/about/hero1.png"
            alt="hero"
            className="hidden md:block"
          />
          <img
            src="/images/about/about-mobile.png"
            alt="hero"
            className="block md:hidden"
          />
        </div>
        <div className="lg:pt-[5rem] py-[1rem] flex w-full justify-center flex-col items-center">
          <div className="container lg:w-[75%] md:w-[85%] w-full grid md:grid-cols-3 grid-cols-1 gap-5 ">
            {stroke.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <p className="lg:text-[2.25rem] text-[2rem] font-bold text-blue text-center">
                      {item.number}
                    </p>
                    <p className="text-[#595959] font-[400] text-[1rem] text-center">
                      {item.desc}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="container lg:w-[75%] md:w-[85%] w-[95%] lg:py-[4rem] pt-[1rem]  ">
            <p>
              Millions of members connect on Jobcase to seize opportunities,
              share advice, and navigate the work landscape together. Online or
              in the Jobcase app, workers can find jobs, apply instantly, and
              get and give the support everyone needs on their way to success.
            </p>
            <p className="text-[10px] pt-[2rem]">
              ¹Comscore Media Metrix®, Career Services and Development, Total
              Audience, December 2022, U.S.
            </p>
          </div>
        </div>
        <div className="bg-[#f2f2f2] py-[3rem]">
        <h3 className="w-full  text-[1.75rem] pb-[10px] lg:text-[3rem] font-bold text-[#262626] px-4 text-center">
        What does empowering workers mean?
          </h3>
          <p className=" font-Inter text-center lg:text-[1.25rem] text-[1rem] ">Our approach is a combination of the following things:</p>
          <div className="w-full h-full flex justify-center">
            <div className="container mt-10">
            <Splide hasTrack={ false } aria-label="..."
            options={{
                perPage:page,
                padding:true,
            }}
            >
  <div className="custom-wrapper">
    <SplideTrack>
    {
                            cardData.map((item,index)=>{
                                    return(
                                         <SplideSlide key={index}>
                                        <div className="bg-[#fff] border border-[#e5e5e5] rounded-[12px] max-w-[410px] py-[24px] px-[40px]">
                                            <div className="w-full flex items-center justify-center">
                                                <img 
                                                src={item.img}
                                                alt="icon"
                                                className="w-[100px] h-[100px]"
                                                />
                                            </div>
                                            <div className="w-full pt-5">
                                            <p className="text-[36px] font-[500] font-Founders">{item.title}</p>
                                            <p className="text-[#262626]  font-[400] pb-[34px]">{item.desc}</p>
                                            </div>
                                        </div>
                                        </SplideSlide>

                                    )
                            })

                        }

    </SplideTrack>

    <div className="splide__arrows hidden" />
  </div>
</Splide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
