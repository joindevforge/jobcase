import React, { useEffect, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const testinomy = [
  {
    img: "/images/landingPage/Christopher_Zettlemoyer.png",
    name: "Christopher Zettlemoyer",
    role: "AAA Dispatcher",
    desc: "Every time I go onto Jobcase I learn something new from other members.”",
  },
  {
    img: "/images/landingPage/Edith_Graham.png",
    name: "Edith Graham",
    role: "Job Seeker",
    desc: "The experience on Jobcase feels very personalized and the members are like a support team.”",
  },
  {
    img: "/images/landingPage/Arnie_Nelson.png",
    name: "Arnie Nelson",
    role: "Home Care Provider",
    desc: "Jobcase is a safe environment and the best place to go if you're looking for a job.”",
  },
];

function Carousel() {
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

    // Set initial perPage value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className=" flex items-center justify-center  relative w-full  h-full">
        <div className=" container w-full h-full relative ">
          <Splide
            hasTrack={false}
            aria-label="..."
            options={{
              rewind: true,
              perPage: page,
            }}
          >
            <div className="custom-wrapper">
              <SplideTrack>
                {testinomy.map((item, index) => {
                  return (
                    <SplideSlide key={index}>
                      <div className="min-w-[380px] ml-10   py-[40px] px-[32px] flex flex-col justify-between mr-[1rem]">
                        <div className="max-w-[280px]  min-h-[180px]  mb-[2rem] ">
                          <p className="  font-cond whitespace-pre-wrap leading-[12px] inline-block text-bluee  text-[86px] font-bold transform translate-y-6">
                            “
                          </p>
                          <p className="text-[1.25rem] font-Inter  ">
                            {item.desc}
                          </p>
                        </div>
                        <div className="flex items-center ">
                          <Image
                            src={item.img}
                            width={50}
                            height={50}
                            alt="as"
                            className="rounded-[50%] mr-5"
                          />
                          <div>
                            <p className=" font-Inter font-[500] text-[19px] text-bluee">
                              {item.name}
                            </p>
                            <p className=" font-Inter font-[400] text-[14px] text-zinc-700">
                              {item.role}
                            </p>
                          </div>
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
    </>
  );
}

export default Carousel;
