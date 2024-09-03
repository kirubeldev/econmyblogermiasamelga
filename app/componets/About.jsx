import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const About = () => {
  return (
    <div>
      <div className='flex max-w-6xl mx-auto mt-[100px] flex-col-reverse items-center justify-center md:justify-between md:flex-row'>
<div className='relative'>
    <img src="./rec.png" className='h-[459px] w-[365px]' alt="" />
    <img src="./ermi.png" className='absolute -top-[45px] left-[42px]'  alt="" />
</div>


<div className='md:-mt-12'>
    <p className='text-[40px] font-semibold '>About</p>
    <p className='max-w-[578px] text-[18px]'>
         Ermyas Amelga is a distinguished entrepreneur, economist, and financial expert whose vision and leadership have made significant impacts on Ethiopia&#39;s economic landscape and the broader African continent. 
<br />
<br />
With a unique blend of academic excellence, Wall Street experience, and entrepreneurial spirit, Ermyas has successfully navigated and shaped various industries, including banking, real estate, manufacturing, and agriculture.
        </p>

        <button className="flex mt-6 border items-center gap-6 bg-white backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px]">
            See More <MdOutlineArrowOutward className="text-[20px]" />
          </button>
</div>
      </div>
    </div>
  )
}

export default About
