"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";

const Atricle1Card = ({ id, date, type, title, desc, img }) => {
 
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-[28px] border border-[#BFBFBF] rounded-[10px] flex flex-col md:flex-row gap-6 p-5">
        <img
 src={img}
alt=""
          className="object-cover h-[330px] md:h-[200px] w-[300px] rounded-lg"
        />
        <div>
          <p className="text-[16px] mb-2">{date}</p>
          <button className="text-white rounded-[6px] flex items-center justify-center mb-2 bg-[#AF001E] py-[5px] px-[35px]">
            {type}
          </button>
          <p className="text-[18px] font-semibold">{title}</p>
          <p>{desc}</p>
          <div className="flex items-center gap-6">
            <Link href={`/detail/${id}`}>
              <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[10px] bg-white hover:text-[#AF001E]">
                Read More <MdOutlineArrowOutward className="text-[20px]" />
              </button>
            </Link>
            <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[10px] bg-white hover:text-[#AF001E]">
              Download Article <GoDownload className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atricle1Card;
