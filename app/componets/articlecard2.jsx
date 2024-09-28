"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";

const Atricle1Card2 = ({ id, date, type, title, desc, img }) => {
 
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-[28px] border border-[#BFBFBF] rounded-[10px] flex flex-col md:flex-row gap-6 p-5">
        <img
          // src="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
           src={img}
          alt=""
          className="object-cover h-[340px] md:h-[250px] w-[300px] rounded-lg"
        />
        <div>
          <p className="text-[16px] mb-2">{date}</p>
          <button className="text-white rounded-[6px] flex items-center justify-center mb-4 bg-[#AF001E] py-[5px] px-[35px]">
            {type}
          </button>
          <p className="text-[18px] font-semibold">{title}</p>
          <p>{desc}</p>
          <div className="flex items-center gap-6">
            <Link href={`/detail/${id}`}>
              <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[20px] bg-white hover:text-[#AF001E]">
                Read More <MdOutlineArrowOutward className="text-[20px]" />
              </button>
            </Link>
            <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[20px] bg-white hover:text-[#AF001E]">
              Download Article <GoDownload className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atricle1Card2;
