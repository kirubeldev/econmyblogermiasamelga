import React from 'react'
import { GoDownload } from 'react-icons/go'

import Navs from '@/app/componets/nav';

const Page = () => {

   
  return (
    <div>
      {/* Navbar */}
      <div className='bg-[#A70E28] top-0 md:fixed w-full z-10'>
        <Navs />
      </div>

      {/* Main content */}
      <div className='flex px-5 md:px-0   flex-col lg:flex-row lg:justify-center mx-auto max-w-6xl gap-[120px] 2xl:gap-[180px] md:mt-[100px] 2xl:max-w-7xl mt-[20px] lg:mt-[120px]'>
 
        {/* Left side */}
        <div className='  '>
          <div>
            <img src="/art1.png" alt="" className=' rounded-md md:max-w-[900px] mx-auto md:h-[400px] sm:w-[550px]  2xl:w-[700px] 2xl:h-[483px]' />
          </div>

          <div className='flex items-center justify-between mt-7'>
            <button className='px-[30px] py-[10px] bg-[#AF001E] text-white rounded-md'>Economy</button>
            <button className='flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300  bg-white '>
              Download Article <GoDownload className="text-[20px]" />
            </button>
          </div>

          <p className='mt-9 pl-5 text-2xl font-semibold'>Business and Innovation: Driving Future Success</p>

          <article className='mt-4 text-justify max-w-[660px] mx-auto' >
            The business landscape is evolving faster than ever before, and those who embrace innovation are the ones thriving in this new age. Whether you’re running a startup or steering a large enterprise, the key to long-term success lies in your ability to adapt, innovate, and create value in unexpected ways. But how do you foster a culture of innovation? How can you leverage emerging technologies to stay ahead of the curve?
            <br /><br />
            In this comprehensive article, we break down the essential strategies that forward-thinking businesses are using to drive growth and remain competitive. From leveraging **AI and automation** to building **flexible business models**, we’ll explore real-world examples of companies that have successfully turned innovation into a core part of their success. You’ll also learn about the role of **creative leadership** in fostering an environment where new ideas can flourish.
            <br /><br />
            Whether you're looking to pivot your current operations or seeking fresh inspiration, this article will equip you with actionable insights to fuel your future success. **Download the full article now** and start transforming the way you think about business and innovation—because the future belongs to those who are ready to shape it!
          </article>


          <button className='flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[20px] bg-white '>
              Download Article <GoDownload className="text-[20px]" />
            </button>
        </div>

        {/* Right side */}
    
      </div>
    </div>
  )
}

export default Page;
