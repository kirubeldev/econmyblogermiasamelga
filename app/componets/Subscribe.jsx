import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Subscribe = () => {
  return (
    <div>
    
      <div className='flex text-center mx-auto  px-5 md:px-0 max-w-6xl mt-[80px] justify-center items-center'>
 <div>

 <p className='font-bold text-[30px] md:text-[48px]'>Subscribe To Get In Touch </p>
    <p className='max-w-[536px]'>Subscribe to stay updated with the latest news, exclusive offers, and valuable insights directly to your inbox.</p>
 
    <div className="flex items-center justify-between border rounded-2xl mt-[30px] gap-2 px-[12px] bg-white backdrop-blur-sm x-5 md:px-0  max-w-fit  md:max-w-[384px] mx-auto">
            <input
              type="text"
              className="py-[7px] px-[12px] outline-none rounded-2xl"
              placeholder="search"
            />
        <button className="flex items-center gap-6 bg-white backdrop-blur-sm rounded-xl py-[7px] px-[15px]">
            Subscribe <MdOutlineArrowOutward className="text-[20px]" />
          </button>
          </div>
 </div>
      </div>
    </div>
  )
}

export default Subscribe
