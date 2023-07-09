import Community from "@/components/Community";
import Leadership from "@/components/Leadership";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import React, { useEffect, useState } from "react";

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
    title: "Tools",
    desc: "Jobcase provides lots of capabilities for job seeking and self-improvement, like - access to jobs, an online profile and resume builder, important learning resources, and other great ways to help you take action and create a better future.",
    img: "/images/about/icontool.png",
  },
  {
    title: "Community",
    desc: "No one should have to go it alone, and we can all learn from each other. That's why Jobcase offers a positive place to share experiences. If you need advice, support, or inspiration, you'll find millions of people across the US who are willing to help you.",
    img: "/images/about/icon-1.png",
  },
  {
    title: "Advocacy",
    desc: "As a community of millions, Jobcase has the power to elevate the voices and needs of America's workers. We promote business practices and technology that put people first, and foster an economy that rewards all stakeholders.",
    img: "/images/about/icon2.png",
  },
];

function Aboutus() {
  const [page, setPage] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPage(1);
      } else {
        setPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="w-full h-full mt-10">
        <h1 className="md:text-[4.375rem] text-[2.5rem] pt-10 font-[700] font-cond  text-bluee w-full text-center ">
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
        <div className="md:pt-[5rem] py-[1rem] flex w-full justify-center flex-col items-center">
          <div className="container md:w-[75%]  w-full grid md:grid-cols-3 grid-cols-1 gap-5 ">
            {stroke.map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <p className="md:text-[2.25rem] text-[2rem] font-bold text-bluee font-Founders text-center">
                      {item.number}
                    </p>
                    <p className="text-[#595959] font-[400] font-Inter text-[1rem] text-center">
                      {item.desc}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="container font-Inter lg:w-[75%] md:w-[85%] w-[95%] md:py-[5rem]  pl-[40px]  pt-10 pr-5 text-left  ">
            <p>
              Millions of members connect on Jobcase to seize opportunities,
              share advice, and navigate the work landscape together. Online or
              in the Jobcase app, workers can find jobs, apply instantly, and
              get and give the support everyone needs on their way to success.
            </p>
            <p className="text-[10px] font-Inter pt-[2rem]">
              ¹Comscore Media Metrix®, Career Services and Development, Total
              Audience, December 2022, U.S.
            </p>
          </div>
        </div>
        <div className="bg-[#f2f2f2] py-[3rem]">
          <h3 className="w-full  text-[1.75rem] pb-[10px] md:text-[3rem] font-bold text-[#262626] px-4 text-center">
            What does empowering workers mean?
          </h3>
          <p className=" font-Inter text-center md:text-[1.25rem] text-[1rem] px-4 ">
            Our approach is a combination of the following things:
          </p>
          <div className="w-full h-full flex justify-center">
            <div className="w-full h-full mt-10 md:mx-4">
              <Splide
                hasTrack={false}
                aria-label="..."
                options={{
                  perPage: page,
                  padding: true,
                }}
              >
                <div className="custom-wrapper">
                  <SplideTrack>
                    {cardData.map((item, index) => {
                      return (
                        <SplideSlide key={index}>
                          <div className="bg-[#fff] border border-[#e5e5e5] rounded-[12px] max-w-[410px] mx-2 py-[24px] px-[40px]">
                            <div className="w-full flex items-center justify-center">
                              <img
                                src={item.img}
                                alt="icon"
                                className="w-[100px] h-[100px]"
                              />
                            </div>
                            <div className="w-full pt-5">
                              <p className="text-[36px] font-[500] font-Founders">
                                {item.title}
                              </p>
                              <p className="text-[#262626]  font-[400] pb-[34px]">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </SplideSlide>
                      );
                    })}
                  </SplideTrack>

                  <div className="splide__arrows hidden" />
                </div>
              </Splide>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-[48px] pt-[40px] md:px-[80px] px-[1rem]">
        <h1 className=" font-Founders md:leading-[54px] leading-[32px] md:text-[3rem] text-[2rem]  font-[500] mb-[1rem] text-[#262626] ">
          Meet Jobcase
        </h1>
        <p className=" font-Inter text-[1rem] pr-[25px] font-[400] text-[#262626]  pb-[40px] md:pb-[48px] ">
          Our goal at Jobcase is to help all workers get ahead. Motivated by our
          strong mission focus and unique company culture, our team is
          passionate about building a platform where workers can connect to
          create more opportunities for themselves and each other. Recent
          acquisitions of Upward.net and Recruitology have propelled us –
          advancing our mission even further so we can help more workers and
          employers connect every day. Jobcase is headquartered just outside of
          Boston in Cambridge, MA, with a satellite office in the Bay Area and a
          large – work from anywhere – remote team.{" "}
        </p>
        <div>
          <h2 className=" font-Founders text-[2.25rem] font-[500] leading-[42px] mb-[3.75rem] ">
            Jobcase Leadership
          </h2>
          <div className="w-full h-full mt-[40px] md1:px-[5rem] mb-[87px]">
            <Leadership />
          </div>
        </div>
      </div>
      <div className="bg-[#f4f4f4] md:py-[5rem] py-[2.5rem] md:pl-[3.4375rem] px-4">
        <h2 className="md:mb-[74px] mb-[32px] text-center font-Founders md:text-[3rem] text-[1.75rem] font-[500] ">
          One team. One community.
        </h2>
        <div className="w-full h-full">
          <Community />
        </div>
      </div>
      <div className="w-full h-full py-[40px] px-[1rem]">
        <h2 className="text-center mb-[3.75rem]  font-Founders font-[500] text-[1.5rem]">
          Jobcase is proud to have the support of our investment partners
        </h2>
        <div className="flex items-center justify-between">
          <div className="w-full h-full  object-cover flex justify-center">
            <img
              src="/images/about/last/psg-logo.png"
              alt="logo"
              className="md:max-w-[300px] w-full"
            />
          </div>
          <div className="w-full h-full object-cover flex justify-center">
            <img
              src="/images/about/last/wd.png"
              alt="logo"
              className="md:max-w-[300px] w-full"
            />
          </div>
          <div className="w-full h-full object-cover flex justify-center">
            <img
              src="/images/about/last/Savano.png"
              alt="logo"
              className="md:max-w-[300px] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
