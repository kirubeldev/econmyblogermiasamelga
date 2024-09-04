import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";








const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col-reverse   md:justify-between md:flex-row justify-center gap-10    items-center max-w-6xl md:px-8 h-[100vh] md:h-[70vh] mx-auto md:mt-[74px]">
        <div className="flex  flex-col space-y-3">
          <div className="bg-white/10 backdrop-blur-md shadow-lg rounded-md gap-3 text-white flex  items-center w-fit py-4 px-[36px]">
            <img src="logo.png" alt="" className="size-[24px]" />
            <p>Knowledge Is Power</p>
          </div>

          <h1 className="text-[32px] text-white font-semibold">
            Ermias Amelga
          </h1>
          <p className="text-[24px] text-white">
            A Visionary Leader in African <br />
            economic development
          </p>

          <button className="flex items-center gap-6 bg-white backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px]">
            See More <MdOutlineArrowOutward className="text-[20px]" />
          </button>
        </div>

        <div>
          <img
            src="./herooermi.svg"
            className="w-[300px] object-cover md:w-[251px] xl:w-[401px]  2xl:w-[501px]  "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
