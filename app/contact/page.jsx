import React from 'react'
import Navs from '../componets/nav'
import Image from 'next/image'

const page = () => {
  return (

  

<div className="flex  max-w-6xl mx-auto  -mb-[100px] gap-6 ">
<div className='mt-[10px] '>

<img
  src="/fotlog.png"
  alt="Logo"
  
  className="size-[40px] text-red-500"
  />
<p className="text-[18px]">Konwledge is <span className='text-[#AF001E]'> Power</span> </p>

  <div className='mt-[10px] md:mt-[40px]'>
<p className='text-4xl font-semibold ' >Get in Touch</p>
  </div>


  <form action="" className='shadow-xl mt-9 rounded-md px-3 py-10'>
 
   <div className='flex items-center gap-8'>
   <div className='flex flex-col '>

<label htmlFor="fullname">Full Name</label>
<input type="text" className='bg-[#F3F3F3] max-w-[253px] px-3 rounded-xl mt-2 h-[40px]' />
</div>
 
 <div className='flex flex-col '>

   <label htmlFor="fullname">Email</label>
   <input type="text" className='bg-[#F3F3F3] max-w-[253px] px-3 rounded-xl mt-2 h-[40px]' />
   </div>


   
 </div>
 <div className='flex flex-col mt-7'>

   <label htmlFor="fullname">Subject</label>
   <input type="text" className='bg-[#F3F3F3]  rounded-xl mt-2 px-3 h-[40px]' />
 </div>



 <div className='flex flex-col mt-7 '>

<label htmlFor="fullname">Message</label>
<textarea type="text" className='bg-[#F3F3F3] px-3 py-3 min-h-[154px]  rounded-xl mt-2 h-[40px]' />
</div>

<button className='text-center w-full mt-6 bg-[#AF001E] text-white rounded-md py-2'>Submit</button>
  </form>



  </div>
  <div className=''>
    <img src="/plant.png" alt="" className='h-full w-[667px] object-cover'/>
  </div>
  </div>

    
  )
}

export default page
