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

export default function Home() {
  return (
    <div className=" font-Founders ">
      <Hero />
      <div className="bg-[#DBEFFE] py-[3rem] ">
        <h3 className="w-full text-center text-[1.75rem] pb-[24px] lg:text-[3rem] font-[500] px-4">
          Top ways to help you get ahead
        </h3>
        <div className="w-full h-full flex items-center justify-center pt-[10px]">
          <div className="container   grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-5   px-4">
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
      <div className="bg-[#fafafa] md:p-[5rem] p-[2.5rem] flex justify-center">
        <div className=" w-full  ">
          <h3 className="w-full text-start text-[1.75rem] pb-[10px] lg:text-[3rem] font-[500] px-4">
            Job searching made easy
          </h3>
          <div className="md:flex md:flex-row    items-center justify-between">
            <div className="relative w-full h-full mx-2 my-3 md:my-0">
              <input
                className="py-[13px] pr-[16px] pl-[48px] rounded-[4px] h-[50px] w-full bg-white border border-zinc-300 "
                placeholder="enter your Job title"
              />
              <BiSearch className="absolute top-[35%] left-[2%] h-[1rem] w-[1rem] text-zinc-500" />
            </div>
            <div className="relative w-full h-full  mx-2 my-3 md:my-0">
              <input
                className="py-[13px] pr-[16px] pl-[48px] rounded-[4px] h-[50px] w-full bg-white border border-zinc-300 "
                value="lucknow,"
              />
              <GrLocation className="absolute top-[35%] left-[2%] h-[1rem] w-[1rem] text-zinc-500" />
            </div>
            <button className="h-[50px]  bg-blue rounded-[12px] md:w-[50%] w-full text-white font-[500] my-3 md:my-0 ">
              search jobs
            </button>
          </div>
          <div className="pt-[3rem] w-full h-full">
            <p className="text-[1.5rem] font-[500]">Popular search</p>
            <div className="pt-[1rem]">
              <ul className="flex md:flex-wrap justify-between w-full  overflow-x-scroll">
                {search.map((item, index) => {
                  return (
                    <>
                      <Chips key={index} title={item} />
                    </>
                  );
                })}
              </ul>
              <div className="w-full h-full flex justify-center mt-8">
                <button className=" h-[50px] rounded-[8px] px-[2rem] w-full lg:w-[20%] border-2 border-blue  text-blue hover:bg-blue hover:text-white">
                  Explore more jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new section start */}
      <div className="pt-[3rem]">
        <h3 className="w-full  text-[1.75rem] pb-[10px] text-center lg:text-[3rem] font-[500] px-4">
          See what millions of workers are saying
        </h3>
        <div className="pt-[1rem] w-full h-full">
          <Carousel />
          <div className="w-full h-full flex justify-center py-8">
            <button className=" h-[50px] rounded-[8px] mx-4 px-[2rem] w-full lg:w-[25%] border-2 border-blue font-[500]  text-blue hover:bg-blue hover:text-white">
              Explore the jobcase community
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[2rem]">
        <h3 className="w-full  text-[1.75rem] pb-[10px] text-center lg:text-[3rem] font-[500] px-4">
          Work with top employers & local businesses
        </h3>
        <div className="my-5 pb-[4rem] flex justify-center ">
          <div className="grid lg:grid-cols-6 grid-cols-3 gap-5 mx-4 container ">
            {images.map((item, index) => {
              return (
                <div key={index} className="lg:w-[150px] lg:h-[48px]">
                  <img
                    src={item}
                    alt="as"
                    className="flex w-full h-[40px] justify-center"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:p-[3.5rem] p-[2rem] bg-blue flex items-center justify-center flex-wrap">
        <p className="lg:text-[3.5rem] text-[2rem] font-[700] text-white text-center pr-12">
          GET TOGETHER. GET AHEAD.
        </p>
        <button className="lg:w-[160px] w-full h-[50px] bg-orange-600 mt-10 lg:mt-0 text-white font-[500] rounded-[12px]">
          Join for free
        </button>
      </div>
      <div className="w-full h-full flex items-center justify-center pt-[3rem]">
        <div className="container h-full ">
          <div className="w-full flex  ">
            <div className="lg:flex-[50%] flex-[100%]">
              <h3 className="text-[2.25rem] font-[500] pb-[2.25rem] px-2">
                Discover free resources
              </h3>
              <div className="grid lg:grid-cols-3 grid-cols-1 w-full lg:gap-6 gap-4 px-4">
                <Chips2 title="Tips to get hired" />
                <Chips2 title="Tips to get hired" />
                <Chips2 title="Tips to get hired" />
                <Chips2 title="Tips to get hired" />
                <Chips2 title="Tips to get hired" />
                <Chips2 title="Tips to get hired" />
                <Chips2 title="Tips to get hired" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/landingPage/last.svg" alt="as" />
            </div>
          </div>
          <Link
            href="#"
            className="text-blue flex items-center text-[18px] font-[500] mt-5"
          >
            See them all
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
      <div className="pt-[4rem] flex justify-center  items-center">
        <div className="container">
          <h3 className="text-[2.25rem] text-start font-[500] pb-[2.25rem] px-2">
            Trending topics
          </h3>
        </div>
      </div>
      <div className="pt-[1rem] w-full lg:px-12 px-4  pb-[5rem]">
            <ul className="flex md:flex-wrap   justify-between  overflow-x-scroll">
              {search2.map((item, index) => {
                return (
                  <>
                    <Chips3
                      key={index}
                      title={item.title}
                      followers={item.followers}
                    />
                  </>
                );
              })}
            </ul>
            <Link
            href="#"
            className="text-blue flex items-center text-[18px]  font-[500] mt-5"
          >
           See what people are talking about
            <FiArrowRight className="ml-2" />
          </Link>
          </div>

    </div>
    
  );
}
