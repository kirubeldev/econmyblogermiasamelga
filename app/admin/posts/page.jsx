"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Atricle1Card from '@/app/componets/Atricle1Card';
import Subscribe from '@/app/componets/Subscribe';
import Navs from '@/app/componets/nav';
import { FiPlus } from "react-icons/fi";
import AdminAtricle1Card from '@/app/componets/AdminArticle';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import SkeletonArticle from '@/app/componets/skelton';
import axios from 'axios';
import getToken from '@/app/lib/tocken';

const getDaySuffix = (day) => {
  if (day > 3 && day < 21) return 'th'; // Special case for teens
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'short', month: 'short', year: 'numeric' };
  const day = date.getDate();
  const formattedDay = `${day}${getDaySuffix(day)}`;
  const formattedDate = date.toLocaleDateString('en-GB', options);
  return `${formattedDate.split(' ')[0]} ${formattedDay} ${formattedDate.split(' ')[1]}, ${formattedDate.split(' ')[2]}`;
};

const Page = () => {
  const [response, setResponse] = useState([]); // Initialize as an array
  const [filter, setFilter] = useState('all');
  const [activeButton, setActiveButton] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5; // Specify how many articles per page

  useEffect(() => {
    // Fetch the blog details when the component mounts
    const fetchBlogDetail = async () => {
      try {
        const res = await fetch(` http://localhost:3002/api/blog/`);
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetail();
  }, []); // Empty dependency array to fetch only once on mount


 

  // Sort and filter articles
  const filteredArticles = response
    .filter(article => filter === 'all' || article.status === filter) // Adjust as per your status
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort latest first

  // Get the latest articles for the current page
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const latestArticles = filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.length > 50 ? words.slice(0, 50).join(' ') + '...' : description;
  };


  return (
    <div className='mx-auto'>
      <div className='bg-[#A70E28] top-0 md:fixed w-full z-10'>
        <Navs />
      </div>
      <div className='max-w-6xl mx-auto mt-[70px]'>
        <div className='px-5 md:px-0 mt-[140px]'>
          <div className='flex md:justify-between items-center gap-7'>
            <div className="flex space-x-4 mb-4">
              <button onClick={() => setFilter('all')} className={`px-4 py-2 ${filter === 'all' ? 'text-black border-b border-blue-500' : ''}`}>
                All Blogs
              </button>
          
            </div>
            <div className='flex items-center gap-5'>
            
               <Link href="/admin/post">
              <div className='flex items-center h-[40px] gap-1 border py-[8] rounded-2xl cursor-pointer px-[40px]'>
                <button>Post a Blog</button>
                <FiPlus className='text-xl' />
              </div>
               </Link>
            </div>
          </div>

          {filter === "draft" ? (
            <div className='h-[100vh] flex items-center justify-center'>
              <p className='text-6xl'>No Draft found</p>
            </div>
          ) : (
            <div>
            

              <div className="max-w-6xl mx-auto px-5 md:px-0 gap-6">
                {latestArticles.length > 0 ? (
                  latestArticles.map((article, index) => (
                    <AdminAtricle1Card
                      key={index}
                      date={formatDate(article.createdAt)}
                      desc={truncateDescription(article.description)}
                      img={article.coverImage}
                      title={article.title}
                      type={article.category}
                      id={article._id}
                    />
                  ))

                ) : (
                  <>
                    <SkeletonArticle />
                    <SkeletonArticle />
                    <SkeletonArticle />
                    <SkeletonArticle />
                  </>
                )}
              </div>

              {/* Pagination Section */}
              <div className='flex items-center max-w-screen px-5 md:px-0 justify-center mt-5'>
                <button onClick={handlePrevPage} disabled={currentPage === 1} className='border px-4 py-2 rounded'>
                  Back
                </button>
                <div className='flex items-center mx-4'>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`border px-3 py-1 rounded mx-1 ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-white text-black'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className='border px-2 py-2 rounded'>
                  Next
                </button>
              </div>

              <div className='md:w-fit px-5 max-w-6xl md:px-0 flex mx-auto'>
                {/* Any additional content here */}
              </div>
            </div>
          )}
          {/* <Subscribe /> */}
        </div>
      </div>
    </div>
  );
};

export default Page;