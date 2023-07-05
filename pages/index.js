import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Card1 from "@/components/reusable/Card1";
import Chips from "@/components/reusable/Chips";
import { BiSearch } from "react-icons/bi";
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


const search = ["Cashier","Truck Driver","Retail sales","Stock clerk","Sales floor","Accountant"]

export default function Home() {
  return (
    <div className=" font-Founders ">
      <Header />
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
                <input className="py-[13px] pr-[16px] pl-[48px] rounded-[4px] h-[50px] w-full bg-white border border-zinc-300 " placeholder="enter your Job title" />
                <BiSearch className="absolute top-[35%] left-[2%] h-[1rem] w-[1rem] text-zinc-500"/>
              </div>
              <div className="relative w-full h-full  mx-2 my-3 md:my-0">
                <input className="py-[13px] pr-[16px] pl-[48px] rounded-[4px] h-[50px] w-full bg-white border border-zinc-300 " value="lucknow," />
                <GrLocation className="absolute top-[35%] left-[2%] h-[1rem] w-[1rem] text-zinc-500"/>
              </div>
              <button className="h-[50px]  bg-blue rounded-[12px] md:w-[50%] w-full text-white font-[500] my-3 md:my-0 ">
                search jobs
              </button>
          </div>
          <div className="pt-[3rem] w-full h-full">
            <p className="text-[1.5rem] font-[500]">Popular search</p>
            <div className="pt-[1rem]">
              <ul className="flex md:flex-wrap justify-between w-full  overflow-x-scroll">
               {
                  search.map((item,index)=>{
                      return(
                        <>
                            <Chips key={index} title={item}/>
                        </>
                      )})}
                </ul>
                <div className="w-full h-full flex justify-center mt-8">
                  <button className=" h-[50px] rounded-[8px] px-[2rem] w-full lg:w-[20%] border-2 border-blue  text-blue hover:bg-blue hover:text-white">Explore more jobs</button>
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
            
          </div>
      </div>
    </div>
  );
}
