import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Card1 from "@/components/reusable/Card1";
import Carousel from "@/components/reusable/Carousel";
import Chips from "@/components/reusable/Chips";
import Chips2 from "@/components/reusable/Chips2";
import Chips3 from "@/components/reusable/Chips3";
import Image from "next/image";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const card1data = [
  {
    img: "/images/landingPage/better.svg",
    title: "A better Job- faster",
    desc: "Find job listings from multiple sites - all in one place.",
    link: "Search Job Postings",
  },
  {
    img: "/images/landingPage/community.svg",
    title: "A helpful community",
    desc: "Get answers & support from millions of workers like you.",
    link: "Explore Community",
  },
  {
    img: "/images/landingPage/profile.svg",
    title: "A standout profile",
    desc: "Complete your profile and get better job matches.",
    link: "Start your profile",
  },
];

const search = [
  "Cashier",
  "Truck Driver",
  "Retail sales",
  "Stock clerk",
  "Sales floor",
  "Accountant",
];

const images = [
  "/images/landingPage/b1.svg",
  "/images/landingPage/b2.svg",
  "/images/landingPage/b3.svg",
  "/images/landingPage/b4.svg",
  "/images/landingPage/b5.svg",
  "/images/landingPage/b6.svg",
];

const search2 = [
  {
    title: "hiringevents",
    followers: "450k",
  },
  {
    title: "Hiringnews",
    followers: "5.6m",
  },
  {
    title: "motivation",
    followers: "5.6m",
  },
  {
    title: "jobsearch",
    followers: "6.6m",
  },
  {
    title: "interview",
    followers: "6.2m",
  },
  {
    title: "resume",
    followers: "5.8m",
  },
];

const resources = [
  "Tips to get hired",
  "Job search strategies",
  "Work from home",
  "Avoiding scams",
  "Popular places to work",
  "Career discovery",
  "Building your network"
];

export default function Home() {
  return (
    <div className=" font-Founders ">
      <Hero />
      <div className="bg-[#DBEFFE] md:pt-[74px] pt-[40px]  pb-[40px] md:pb-[90px] ">
        <h3 className="w-full text-center text-[1.75rem] pb-[24px] md:text-[3rem] font-[500] px-4">
          Top ways to help you get ahead
        </h3>
        <div className="w-full h-full flex items-center justify-center  md:px-20 px-4">
          <div className="max-w-[1296px] w-full px-4 md:px-0  grid lg:grid-cols-3 grid-cols-1 gap-4 items-center justify-center">
            {card1data.map((item, index) => {
              return (
                <Card1
                  key={index}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  link={item.link}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] md:p-[5rem] p-[2.5rem] px-4 flex justify-center">
        <div className="  md:max-w-[1296] w-full pt-3  ">
          <h3 className="w-full text-start text-[1.75rem] whitespace-nowrap pb-[10px] lg:text-[3rem] font-[500] ">
            Job searching made easy
          </h3>
          <div className="md:flex md:flex-row w-full    items-center justify-between">
            <div className="relative w-full h-full my-1 md:my-0">
              <input
                className="py-[13px] pr-[16px] pl-[48px] font-Inter text-[1rem] rounded-[4px] h-[50px] md:w-[97%] w-full placeholder:text-zinc-700 bg-white border border-zinc-500 "
                placeholder="Enter your Job title"
              />
              <BiSearch className="absolute top-[30%] left-[4%] h-[1.5rem] w-[1.5rem] text-zinc-500" />
            </div>
            <div className="relative w-full h-full  my-3 md:my-0">
              <input
                className="py-[13px] pr-[16px] font-Inter text-[1rem] pl-[48px] rounded-[4px] h-[50px] md:w-[97%] w-full bg-white border border-zinc-500 "
                value="Lucknow,"
              />
              <GrLocation className="absolute top-[30%] left-[4%] h-[1.5rem] w-[1.5rem] text-zinc-500" />
            </div>
            <button className="h-[50px]  bg-bluee hover:bg-blue-800 rounded-[10px] text-[1.1875rem] md:w-[50%] w-full text-white font-[500] my-1 md:my-0 ">
              Search jobs
            </button>
          </div>
          <div className="pt-[3rem] w-full h-full">
            <p className="text-[1.1875rem] font-[500]">Popular search</p>
            <div className="py-[1rem]  flex flex-col items-center w-full">
              <ul className="flex md:flex-wrap items-center w-full no-scrollbar   h-full  overflow-x-scroll">
                {search.map((item, index) => {
                  return (
                    <>
                      <Chips key={index} title={item} />
                    </>
                  );
                })}
              </ul>
              <div className="w-full h-full   flex justify-center mt-8">
                <button className=" h-[50px] rounded-[8px] px-[2rem] w-full flex items-center justify-center md:w-[18%] whitespace-nowrap border-2 border-bluee text-blueee text-bluee hover:bg-indigo text-[1.1875rem] font-[500]  ">
                  Explore more jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new section start */}
      <div className="pt-[3rem] flex flex-col items-center">
        <h3 className="  text-[1.75rem] pb-[10px] text-center lg:text-[3rem] w-[80%] md:w-full font-[500] px-4">
          See what millions of workers are saying
        </h3>
        <div className="pt-[1rem] w-full h-full flex flex-col items-center">
          <div className="max-w-[1296px] w-full">
            <Carousel />
          </div>

          <div className="w-full h-full flex justify-center py-8">
            <button className=" h-[50px] rounded-[8px] mx-4 px-[2rem] w-full md:w-[25%] border-2 border-bluee font-[500]  text-bluee hover:bg-indigo text-[1.1875rem]">
              Explore the jobcase community
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[2rem]">
        <h3 className="w-full   pb-[10px] font-FoundersA text-center md:text-[3rem] text-[2rem] leading-[38px] font-[500] px-4">
          Work with top employers & local businesses
        </h3>
        <div className="my-10 pb-[2rem] md:pb-[4rem] flex justify-center  ">
          <div className="grid md2:grid-cols-6  grid-cols-3 gap-5 items-center justify-center mx-4 w-full max-w-[1280px]  ">
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex items-center justify-center"
                >
                  <div className="md:w-[150px]   max-w-full max-h-full flex justify-center overflow-hidden md:h-[48px]">
                    <img src={item} alt="as" className="flex justify-center" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" bg-bluee ass  p-0 px-8  py-[3rem]  md:max-h-[162px] md:p-[3.5rem] flex items-center  justify-center flex-wrap">
        <p className="lg:text-[3.5rem] text-[3.5rem]   leading-[3.125rem] mt-4 mr-6 font-[700] font-cond   as text-white text-center">
          GET TOGETHER. GET AHEAD.
        </p>
        <button className="md:w-[160px] w-full h-[50px] bg-[#FC6142] mt-2 lg:mt-0 text-white font-Inter font-[700] rounded-[12px]">
          Join for free
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center md:p-[5rem] p-0 pt-[2rem] ">
        <div className="max-w-[1280px] w-full px-4 md:px-0 h-full ">
          <div className="w-full flex  ">
            <div className="md2:flex-[50%]   flex-[100%]">
              <h3 className="md2:text-[2.25rem] text-[1.5rem] font-[500] md:pb-[2.25rem] pb-[1rem] ">
                Discover free resources
              </h3>
              <div className=" w-full md:w-[660px] resources md:flex grid grid-cols-1 resources   flex-wrap ">
                {resources.map((item, index) => {
                 return(<>
                 <div key={index} className="mr-[1rem]">
                 <Chips2  title={item} />
                 </div>
                 </>)
                })}
              </div>
            </div>
            <div className="hidden md2:block w-full">
              <img src="/images/landingPage/last.svg" alt="as" />
            </div>
          </div>
          <Link
            href="#"
            className="text-bluee flex items-center text-[18px] font-[500]"
          >
            See them all
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="pt-[3rem] flex justify-center  items-center">
        <div className="max-w-[1280px] w-full">
          <h3 className="text-[2.25rem] w-full text-start  font-[500]  px-2">
            Trending topics
          </h3>
      <div className="pt-[1rem] w-full md:px-0 px-4  pb-[5rem]">
        <ul className="flex  md:flex-wrap   overflow-x-scroll no-scrollbar ">
          {search2.map((item, index) => {
            return (
              <>
              <li key={index} className="mx-2">
              <Chips3
                  
                  title={item.title}
                  followers={item.followers}
                />
              </li>
              </>
            );
          })}
        </ul>
        <Link
          href="#"
          className="text-bluee flex items-center text-[19px]  font-[500] mt-1"
        >
          See what people are talking about
          <FiArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
}
