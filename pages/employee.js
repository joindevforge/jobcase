import Card3 from "@/components/reusable/Card3";
import Link from "next/link";
import React from "react";

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
      <div className="w-full h-full">
        <img
          src="/images/employee/employer-hero-2.png"
          alt="Picture of the author"
        />
        <h1 className="lg:text-[4.375rem] text-[2.5rem] pt-10 font-[700] font-cond  text-blue w-full text-center ">
          WORKERS READY WHEN YOU ARE
        </h1>
        <div className="w-full h-full flex justify-center ">
          <p className="text-center text-[1.24rem] font-Inter lg:w-[63%] md:w-[85%] w-[95%]  text-[#595959]">
            120M+ hourly, skilled and gig workers in our network and community
            means filling high volume jobs is faster than ever before. Let us
            help you get started today.
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-center pt-10">
          <div className="lg:w-[30%] w-[90%] h-full flex lg:flex-row  flex-col justify-evenly">
            <Link
              href="#"
              className="py-[12px] px-[32px] bg-[#fc6142] h-[50px] lg:w-auto w-full rounded-[8px] text-white font-500"
            >
              Contact us
            </Link>
            <Link
              href="#"
              className="py-[12px] px-[32px] border-2 border-blue text-blue h-[50px] lg:w-auto w-full mt-6 lg:mt-0 rounded-[8px]  font-500"
            >
              Post a Job
            </Link>
          </div>
        </div>
        <div className="bg-[#F4F4F4] w-full mt-10 py-[5rem] flex justify-center items-center overflow-hidden  lg:px-[6rem] px-2">
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
        </div>
        {/*  carding start */}
        <div className="lg:p-[2.5rem] p-0 pb-0 mx-auto  my-0 flex items-center justify-center">
          <div className=" lg:w-[90%] px-2 w-full flex lg:flex-row  flex-col-reverse ">
            <div className="lg:flex-[60%]  mt-4 lg:mt-0 flex-[100%]  w-full flex  flex-col justify-center">
              <h2 className="md:text-[3rem] text-[2.125rem] lg:leading-[3rem] leading-[2rem] font-[500] font-Founders lg:w-[80%] w-full ">
                Quickly connect with workers you want to hire
              </h2>
              <p className="text-[1rem] text-[#595959] font-[400] font-Inter lg:w-[90%] w-full mt-6">
                Jobcase is an online community where workers of all kinds – like
                hourly employees, tradespeople and healthcare technicians –
                access jobs, make connections, and support each other in any
                aspect of their work life. Here, you’ll find real people
                empowering one another on their way to a better future. That’s
                why helping you fill your open roles matters to us. Because it
                matters to our millions of members who work together every day
                to spread opportunity and land fantastic jobs.
              </p>
            </div>
            <div className="lg:flex-[40%] flex items-center justify-center mt-6 lg:mt-0 flex-[100%]">
              <img
                src="/images/employee/quickly-connect.png"
                alt="Picture of the author"
                className="lg:w-[443px] w-[70%] h-[70%] lg:h-[380px]"
              />
            </div>
          </div>
        </div>
        <div className="lg:p-[2.5rem] p-0 pb-0 mx-auto  my-0 flex items-center justify-center">
          <div className=" lg:w-[90%] px-2 w-full flex lg:flex-row  flex-col ">
            <div className="lg:flex-[40%] flex items-center justify-center mt-6 lg:mt-0 flex-[100%]">
              <img
                src="/images/employee/warehouseladies.png"
                alt="Picture of the author"
                className="lg:w-[443px] w-[70%] h-[70%] lg:h-[380px]"
              />
            </div>
            <div className="lg:flex-[60%]  mt-4 lg:mt-0 flex-[100%]  w-full flex  flex-col justify-center">
              <h2 className="md:text-[3rem] text-[2.125rem] lg:leading-[3rem] leading-[2rem] font-[500] font-Founders lg:w-[80%] w-full ">
                Jobcase empowers employers like you
              </h2>
              <p className="text-[1rem] text-[#595959] font-[400] font-Inter lg:w-[90%] w-full mt-6">
                No matter the size of your company, you can quickly find great
                workers in the Jobcase community. Whether you need one employee
                around the corner, or want to hire hundreds across the country,
                we help you find the right people fast.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full pt-[4rem] ">
          <h2 className="md:text-[3rem] pb-[2.5rem] text-[2.125rem] lg:leading-[3rem] leading-[2rem] font-[500] text-center font-Founders w-full ">
            How we connect you with workers
          </h2>
          <div className="w-full h-full flex items-center justify-center">
            <div className=" container lg:px-12 px-2 grid lg:grid-cols-2 grid-cols-1">
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
        <div className="pt-[4rem] w-full h-full ">
            <p className="md:text-[2.25rem] pb-[2.5rem] text-[2rem] lg:leading-[3rem] leading-[2rem] font-[500] text-center font-Founders w-full">Tap into the power of the Jobcase community</p>
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
