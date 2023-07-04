import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Card1 from "@/components/reusable/Card1";

const card1data = [
  {
    img:"/images/landingPage/better.svg",
    title:"A better Job- faster",
    desc:"Find job listings from multiple sites - all in one place.",
    link:"Search Job Postings"
  },
  {
    img:"/images/landingPage/community.svg",
    title:"A helpful community",
    desc:"Get answers & support from millions of workers like you.",
    link:"Explore Community"
  },
  {
    img:"/images/landingPage/profile.svg",
    title:"A standout profile",
    desc:"Complete your profile and get better job matches.",
    link:"Start your profile"
  },
  
]


export default function Home() {
  return (
    <div className=" font-Founders ">
      <Header />
      <Hero />
      <div className="bg-[#DBEFFE] py-[4rem] ">
        <h3 className="w-full text-center text-[1.75rem] pb-[24px] lg:text-[3rem] font-[500] px-4">
          Top ways to help you get ahead
        </h3>
        <div className="w-full h-full flex items-center justify-center pt-[10px]">
          <div className="container   grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-5   px-4">
              {
                  card1data.map((item,index)=>{
                      return(
                       
                        <Card1 key={index} img={item.img} title={item.title} desc={item.desc} link={item.link}/>
                       
                      )})}
          </div>
        </div>
      </div>
    </div>
  );
}
