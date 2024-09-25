import React from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
const AdminAtricle1Card = ({ date, type, title, desc, img }) => {
  return (
    <div>
      <div
        className="max-w-6xl mx-auto mt-[28px] border border-[#BFBFBF
]  rounded-[10px] flex flex-col md:flex-row gap-6 p-5"
      >
        <img
          src={img}
          alt=""
          className="object-cover h-[330px] md:h-[200px] rounded-lg"
        />
        <div>
            <div className="flex items-center justify-between ">

          <p className="text-[16px] mb-2">{date}</p>
          <TbDotsVertical className="text-lg text-bold cursor-pointer" />
            </div>
          <button className="text-white rounded-[6px] flex items-center justify-center mb-4 bg-[#AF001E] py-[5px] px-[35px]">
            {type}
          </button>
          <p className="text-[18px] font-semibold"> {title}</p>

          <p> {desc}</p>

          <div className="flex items-center  gap-6">
         
          <button
            className={`flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[20px]  bg-white text-[#AF001E]'}`}
            >
            See More <MdOutlineArrowOutward className="text-[20px]" />
          </button>
          <button
            className={`flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[20px]  bg-white text-[#AF001E]'}`}
            >
            Download Article <GoDownload className="text-[20px]" />
          </button>
         
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAtricle1Card;
