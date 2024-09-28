import Link from "next/link";
import React from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";

const AdminArticleDetailcard = ({ id ,date, type, title, desc, img }) => {
  return (
    <div>
        
      <div
        className="  border-[#BFBFBF
]  rounded-[10px] flex flex-col md:flex-row gap-6 py-2 md:w-full w-[300px] mx-auto justify-center text-center x-5"
      >
        <img
          src={img}
          alt=""
          className="object-cover h-[200px] md:h-[110px] w-[200px] rounded-lg"
        />
        <div>
          {/* <p className="text-[16px] mb-2">{date}</p> */}
          {/* <button className="text-white rounded-[6px] flex items-center justify-center mb-4 bg-[#AF001E] py-[5px] px-[35px]">
            {type}
          </button> */}
          <p className="text-[15px] font-semibold font-serif text-start  lg:max-w-[228px]"> {title}</p>

          {/* <p> {desc}</p> */}

          <div className="flex items-center  gap-6">
         
          <Link href={`/admin/detail/${id}`}>
              <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[10px] bg-white hover:text-[#AF001E]">
                Read More <MdOutlineArrowOutward className="text-[20px]" />
              </button>
            </Link>

         
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminArticleDetailcard;
