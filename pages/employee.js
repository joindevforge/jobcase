import Card3 from "@/components/reusable/Card3";
import Link from "next/link";
import React from "react";

const stroke = [
  {
    number: "120M+",
    desc: "registered members",
    desc2: "",
  },
  {
    number: "20M+",
    desc: "unique visitors per month",
    desc2: "",
  },
  {
    number: "#3",
    desc: "among US online career services¹",
    desc2:
      "¹Comscore Media Metrix®, Career Services and Development, Total Audience, December 2022, U.S.",
  },
];

const cardData = [
  {
    img: "/images/employee/SpotIcons1.png",
    title: "Community engagement",
    desc: "Our team and tools help you and our members get to know each other.",
  },
  {
    img: "/images/employee/SpotIcons2.png",
    title: "Job promotion",
    desc: "Our flexible, multichannel marketing helps you improve application conversion at any scale.",
  },
  {
    img: "/images/employee/Spoticon3-e1650856041379.png",
    title: "Brand awareness",
    desc: "Widen and diversify your audience with brand outreach that makes job promotion more effective.",
  },
  {
    img: "/images/employee/SpotIcons4-e1650855980575.png",
    title: "Hiring events",
    desc: "Draw registrants, drive attendance, and virtually host with no contract and our powerful platform.",
  },
];

function Employee() {
  return (
    <>
      <div className="w-full md:mt-[85px] mt-[56px] h-full">
        <img
          src="/images/employee/employer-hero-2.png"
          alt="Picture of the author"
        />
        <div className="w-full h-full flex justify-center">
          <div className="max-w-[980px] w-full h-full">
            <h1 className="md:text-[4.375rem] text-[3rem] md:mt-[4.6875rem] mt-[40px] font-[700] font-cond  text-bluee w-full text-center leading-[60px] ">
              WORKERS READY WHEN YOU ARE
            </h1>
            <div className="w-full h-full flex justify-center mt-[10px] ">
              <p className="text-center md:text-[1.25rem] text-[1rem] font-Inter w-[95%]  text-[#595959]">
                120M+ hourly, skilled and gig workers in our network and
                community means filling high volume jobs is faster than ever
                before. Let us help you get started today.
              </p>
            </div>
            <div className="w-full h-full flex items-center justify-center font-FoundersA text-[1.1875rem] font-[500] pt-10">
              <div className="lg:w-full w-[90%] h-full flex md:flex-row  flex-col  justify-center">
                <Link
                  href="#"
                  className="py-[12px] px-[32px] bg-[#fc6142] h-[50px] flex justify-center items-center  md:mx-[25px] md:w-auto w-full rounded-[8px] text-white font-500"
                >
                  Contact Us
                </Link>
                <Link
                  href="#"
                  className="py-[12px] px-[32px] border-2 md:mx-[25px] border-bluee text-bluee h-[50px] md:w-auto w-full flex items-center justify-center mt-6 md:mt-0 rounded-[8px]  font-500"
                >
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] w-full mt-14 md:py-[5rem] py-[2.5rem]  flex justify-center items-center overflow-hidden  lg:px-[5.625rem] px-[1rem]">
          <div className="  w-full  grid md:grid-cols-3 grid-cols-1 gap-5 ">
            {stroke.map((item, index) => {
              return (
                <>
                  <div key={index} className="">
                    <p className="md:text-[2.25rem] font-Founders text-[2rem] font-[500] text-bluee text-center">
                      {item.number}
                    </p>
                    <p className="text-[#595959] font-Inter font-[400] text-[1rem] text-center">
                      {item.desc}
                    </p>
                    <p className="mt-3 text-[8px] font-Inter md:pb-5 w-full text-center text-[#595959] ">
                      {item.desc2}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/*  carding start */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="max-w-[1440px] md:pt-[40px] md:px-[40px] pt-[1rem] px-[1rem] pb-0 mx-auto flex flex-col items-center  w-full h-full">
            <div className="flex justify-between md:flex-row flex-col-reverse mx-auto my-0 max-w-[1247px] w-full">
              <div className="max-w-[674px] w-full h-full">
                <h2 className="mt-[2rem] mb-[1.5rem] md:max-w-[580px] max-w-full w-full md:text-[3rem] text-[2rem] leading-[46px] font-[500] text-[#262626] font-Founders">
                  Quickly connect with workers you want to hire
                </h2>
                <p className=" font-Inter font-[400] text-[1rem] text-[#595959] leading-[24px] m-0 ">
                  Jobcase is an online community where workers of all kinds –
                  like hourly employees, tradespeople and healthcare technicians
                  – access jobs, make connections, and support each other in any
                  aspect of their work life. Here, you’ll find real people
                  empowering one another on their way to a better future. That’s
                  why helping you fill your open roles matters to us. Because it
                  matters to our millions of members who work together every day
                  to spread opportunity and land fantastic jobs.
                </p>
              </div>
              <div className="max-w-[400px] w-full flex justify-center pt-8 md:pt-0">
                <img
                  src="/images/employee/quickly-connect.png"
                  alt="hero"
                  className="w-[202px] md:w-full"
                />
              </div>
            </div>
            {/* second  */}
            <div className="flex  md:flex-row-reverse flex-col-reverse mx-auto my-0 max-w-[1247px] w-full pt-[40px]">
              <div className="max-w-[613px] w-full h-full   flex  items-center">
                <div className="w-full h-full md:mt-[105px]">
                  <h2 className="mt-[2rem] mb-[1.5rem] md:max-w-[580px] max-w-full w-full md:text-[3rem] text-[2rem] leading-[46px] font-[500] text-[#262626] font-Founders">
                    Jobcase empowers employers like you
                  </h2>
                  <p className=" font-Inter font-[400] text-[1rem] text-[#595959] leading-[24px] m-0 ">
                    No matter the size of your company, you can quickly find
                    great workers in the Jobcase community. Whether you need one
                    employee around the corner, or want to hire hundreds across
                    the country, we help you find the right people fast.
                  </p>
                </div>
              </div>
              <div className="max-w-[352px] md:ml-[116px] md:mr-[130px] w-full flex justify-center pt-8 md:pt-0">
                <img
                  src="/images/employee/warehouseladies.png"
                  alt="hero"
                  className="w-[202px] md:w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/*  card end */}
        <div className="w-full h-full flex justify-center">
          <div className="w-full max-w-[1440px] h-full pt-[160px] md:px-[40px] px-4 pb-[40px] ">
            <h2 className="md:text-[3rem] pb-[2.5rem] text-[2.125rem] lg:leading-[3rem] leading-[2rem] font-[500] text-center font-Founders w-full ">
              How we connect you with workers
            </h2>
            <div className="w-full h-full flex justify-center max-w-[1086px] mx-auto my-0 mb-[120px]">
              <div className="w-full h-full grid sm:grid-cols-2 grid-cols-1 gap-4">
              {cardData.map((item, index) => {
                return (
                  <>
                    <Card3
                      key={index}
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                    />
                  </>
                );
              })}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[4rem] w-full h-full ">
          <p className="md:text-[2.25rem] pb-[2.5rem] text-[2rem] lg:leading-[3rem] leading-[2rem] font-[500] text-center font-Founders w-full">
            Tap into the power of the Jobcase community
          </p>
          <div className="w-full h-full flex justify-center items-center pb-20">
            <Link
              href="#"
              className="py-[12px] mx-4 px-[40px] font-bold flex items-center justify-center bg-[#fc6142] h-[50px] lg:w-auto w-full rounded-[8px] text-white font-500"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
