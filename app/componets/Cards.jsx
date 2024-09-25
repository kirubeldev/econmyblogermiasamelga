import React from 'react';
import { SlArrowRight } from "react-icons/sl";
import { GoDownload } from "react-icons/go";
import Link from 'next/link';
const Articles = ({id, img, dates, title, desc, type }) => {
  const imgs = "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="w-fit mx-auto border bg-white p-4 rounded-lg shadow-md overflow-hidden mt-10">
      <div className='relative'>
        <img 
          className="object-cover rounded-xl w-full" 
          src={img} 
          alt="Article" 
          width={330}
          height={227}
        />
        <p className='border text-[12px] py-1 px-3 rounded-md absolute bottom-3 left-3 bg-white w-fit'>
          {dates}  
        </p>
      </div>
      <div className="">
        <button className='text-white rounded-[6px] flex items-center justify-center mt-6 bg-[#AF001E] py-[5px] px-[35px]'>{type}</button>
        <h5 className="text-[18px] font-semibold pt-3 max-w-[330px]">{title}</h5>
        <p className="text-gray-600 text-[16px] max-w-[330px]">
          {desc} 
        </p>
      </div>
      <div className='flex gap-3 pb-3 justify-between mt-5'>
      <button className="flex items-center border-gray border gap-2 bg-white backdrop-blur-sm rounded-2xl py-[5px] px-[15px]">
          Download Article <GoDownload />
        </button>
        <Link href={`/detail/${id}`}>

        <button className="flex items-center border-gray border gap-2 bg-white backdrop-blur-sm rounded-2xl py-[5px] px-[15px]">
          Read Article <SlArrowRight />
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Articles;