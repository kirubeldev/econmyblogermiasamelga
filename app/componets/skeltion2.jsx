import React from 'react';

const SkeletonArticle = () => (
  <div className="w-full mx-auto border h-[630px] space-y-5 bg-white p-4 rounded-lg shadow-md overflow-hidden mt-10 animate-pulse">
    <div className='relative'>
      <div className="bg-gray-200 h-56 w-full rounded-xl"></div>
      <p className='border bg-gray-200 h-4 w-24 rounded-md absolute bottom-3 left-3'></p>
    </div>
    <div className="mt-6 flex flex-col space-y-5">
      <button className='bg-gray-200 rounded-[6px] flex items-center justify-center mt-6 py-[5px] px-[35px]'></button>
      <h5 className="bg-gray-200 h-6 w-3/4 rounded-md pt-3"></h5>
      <p className="bg-gray-200 h-4 w-5/6 rounded-md text-gray-600 text-[16px]"></p>
    </div>

    <div className="mt-6 flex flex-col space-y-5">
      <button className='bg-gray-200 rounded-[6px] flex items-center justify-center mt-6 py-[5px] px-[35px]'></button>
      <h5 className="bg-gray-200 h-6 w-3/4 rounded-md pt-3"></h5>
      <p className="bg-gray-200 h-4 w-5/6 rounded-md text-gray-600 text-[16px]"></p>
    </div>
    <div className='flex gap-3  pb-3 justify-between mt-5'>
      <button className="flex items-center border-gray border gap-2 bg-gray-200 rounded-2xl py-[5px] px-[15px]"></button>
      <button className="flex items-center border-gray border gap-2 bg-gray-200 rounded-2xl py-[5px] px-[15px]"></button>
    </div>
  </div>
);

export default SkeletonArticle;