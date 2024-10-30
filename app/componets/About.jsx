import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div>
      <div className="flex max-w-6xl px-5 md-px-0  mx-auto mt-[100px] md:mt-[200px] flex-col-reverse items-center justify-center md:justify-between md:flex-row">
        <div className="relative -ml-10  md:ml-2 lg:pl-4 ">
          <Image
            width={200}
            height={459}
            src="/rec.png"
            className="  lg:w-[400px] lg:h-[459px] rounded-md"
            alt=""
          />
          <Image
            width={400} // Set to actual width of the image
            height={300} // Set to actual height of the image
            src="/ermi.png"
            className="absolute -top-[45px] left-[42px] object-cover rounded-md lg:w-[400px] lg:h-[459px]"
            alt=""
          />
          <div className="absolute flex item-center gap-3 md:hidden lg:flex -top-[44px] md:top-10 -right-[80px] bg-white rounded-2xl border px-4 py-[5px]">
            <Image
              src={"/oo3.png"}
              width={0}
              height={0}
              className="md:w-[20px] md:h-[20px] h-[15px] w-[15px]"
            />
            <p className="text-[12px]  md:text-[14px] ">Entrepeneur</p>{" "}
          </div>

          <div className="absolute flex items-center gap-3 md:hidden lg:flex bottom-[160px] md:bottom-[200px]  bg-white rounded-2xl border md:px-4 px-2 py-1 md:py-[5px]">
            <Image
              src={"/oo2.png"}
              width={0}
              height={0}
              className="md:w-[20px] md:h-[20px] h-[15px] w-[15px]"
            />
            <p className="text-[12px]  md:text-[14px] ">Strategist</p>{" "}
          </div>

          <div className="absolute flex items-center gap-3 md:hidden lg:flex bottom-9 left-[45%]  bg-white rounded-2xl border px-4 py-[5px]">
            <Image
              src={"/oo1.png"}
              width={0}
              height={0}
              className="md:w-[20px] md:h-[20px] h-[15px] w-[15px]"
            />
            <p className="text-[12px]  md:text-[14px] ">Visionary</p>{" "}
          </div>
        </div>

        <div className="md:ml-[60px] md:-mt-12 lg:ml-[100px] xl:ml-0">
          <p className="text-[40px] font-semibold ">About</p>
          <p className="max-w-[578px] text-[18px]">
            Ermyas Amelga is a distinguished Mindset, economist, and financial
            expert whose vision and leadership have made significant impacts on
            Ethiopia&#39;s economic landscape and the broader African continent.
            <br />
            <br />
            With a unique blend of academic excellence, Wall Street experience,
            and Mindsetial spirit, Ermyas has successfully navigated and shaped
            various industries, including banking, real estate, manufacturing,
            and agriculture.
          </p>

          {/* <button className="flex mt-6 border items-center gap-6 mb-[100px] md:mb-0 bg-white  w-fit rounded-xl py-[6px] px-[15px]">
            See More <MdOutlineArrowOutward className="text-[20px]" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
