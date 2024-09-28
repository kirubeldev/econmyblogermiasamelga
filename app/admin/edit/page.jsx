'use client'
import Navs from '@/app/componets/nav';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles
import { MdOutlineArrowOutward } from "react-icons/md";
const Page = () => {
  const [description, setDescription] = useState('');
 
  

  return (
    <div className=' '>
      <div className='bg-[#A70E28] top-0 md:fixed w-full z-10'>
        <Navs />
      </div>
      <div className='mx-auto w-full flex items-center justify-center '>


      <div className='max-w-6xl flex items-center justify-center flex-col mx-auto px-5 lg:px-0'>

        <div className='mt-[130px] flex items-center px-5'>
          <p>Blogs</p> 
          <MdKeyboardArrowRight /> 
          <p>Create Blog</p>
        </div>

        <div>
          <p className='mt-7 text-[40px]'>Create New Article</p>
        </div>

        <form action="">
          <div className='flex flex-col lg:flex-row w-full mx-auto  md:px-0 lg:gap-[40px] items-start'>

            <div className='w-full'>
              <div className='flex w-full flex-col my-4'>
                <label htmlFor="articleTitle">Article Title</label>
                <input 
                  type="text" 
                  id="articleTitle" 
                  className='border  outline-none px-3 py-1 rounded-md  w-full md:w-[545px]' 
                  placeholder='Title' 
                  />
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="category">Category</label>
                <input 
                  type="text" 
                  id="category" 
                  className='border  outline-none px-3 py-1 rounded-md  w-full md:w-[545px]' 
                  placeholder='Category' 
                />
              </div>
            </div>

            <div className='flex flex-col mt-3 w-full'>
              <div className='flex flex-col mb-4'>
                <label htmlFor="coverImage">Upload Cover Image</label>
                <input 
                  type="file" 
                  accept='image'
                  id="coverImage" 
                  className='border  outline-none px-3 py-1 rounded-md  w-full md:w-[545px] bg-transparent' 
                  placeholder='Upload Cover Image' 
                />
              </div>

              <div className='flex flex-col mb-4'>
                <label htmlFor="articleFile">Upload Article File</label>
                <input 
  type="file" 
  accept='.pdf'
  id="articleFile" 
  className='border outline-none px-3 py-1 rounded-md  w-full md:w-[545px] bg-transparent transition duration-200 ease-in-out hover:border-[#A70E28] focus:border-[#A70E28]' 
  placeholder='Upload Article File' 
/>

              </div>
            </div>

          </div>

          <div className='flex flex-col mb-4 lg:pr-5'>
            <label htmlFor="status">Status</label>
            <input 
              type="text" 
              id="status" 
              className='border  outline-none px-3 py-1 w-[200px]  rounded-md' 
              placeholder='Draft' 
            />
          </div>

          {/* React Quill Text Editor for Description */}
          <div className='flex flex-col mb-4'>
            <label htmlFor="description">Description</label>
            <ReactQuill 
              theme="snow"
              value={description}
              onChange={setDescription}
              placeholder="Write your article description here..."
              className=" rounded-md mb-12 h-[200px]"
            />
          </div>



        </form>
<div className='flex items-center gap-6  mt-8 justify-end'>

        <Link href="/admin/post" className='border px-[20px] py-[8px] rounded-md'>  Cancel </Link>
<div className='flex items-center gap-4 border px-[20px] py-[8px] rounded-2xl ' >

 <button className=''> Publish Post </button>
 <MdOutlineArrowOutward />
</div>
</div>

      </div>
              </div>

      
    </div>
  )
}

export default Page;
