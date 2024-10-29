"use client";

import Navs from '@/app/componets/nav';
import React, { useEffect, useState } from 'react';

import { FaRegUserCircle, FaUserAlt } from "react-icons/fa";
const Page = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search filter
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [subscribersPerPage] = useState(20); // Subscribers per page

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('http://localhost:3002/contact');
        const data = await response.json(); // Parse JSON from the response
        setSubscribers(data); // Set the subscriber data to state
      } catch (error) {
        console.error("Error fetching subscribers:", error); // Handle errors
      }
    };

    fetchSubscribers(); // Call the function to fetch subscribers
  }, []);

  // Filter subscribers based on search term
  const filteredSubscribers = subscribers.filter(subscriber =>
    subscriber.Email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastSubscriber = currentPage * subscribersPerPage;
  const indexOfFirstSubscriber = indexOfLastSubscriber - subscribersPerPage;
  const currentSubscribers = filteredSubscribers.slice(indexOfFirstSubscriber, indexOfLastSubscriber);

  const totalSubscribers = filteredSubscribers.length; // Total filtered subscribers
  const totalPages = Math.ceil(totalSubscribers / subscribersPerPage); // Total number of pages

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=''>
          <div className='bg-[#A70E28] top-0 md:fixed w-full z-10'>
        <Navs />
      </div>
      <div className='max-w-6xl mx-auto p-6 mt-[100px]'>

      <h1 className='text-3xl font-bold text-center text-amber-950 mb-4'>Subscribers Dashboard</h1>

      {/* Total Subscribers Count */}
      <div className='bg-amber-100 text-center py-2 rounded-lg mb-4'>
        <span className='text-lg font-semibold'>Total Subscribers: {totalSubscribers}</span>
      </div>

      {/* Search Filter */}
      <input
        type="text"
        placeholder="Search by email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border rounded-lg px-4 py-2 mb-4 w-full max-w-xs mx-auto'
      />



<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
  {currentSubscribers.map((subscriber, index) => (
    <div key={index} className='flex items-center border rounded-lg shadow-md p-4 bg-white'>
      <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4'>
        <FaUserAlt  className='text-gray-500 w-8 h-8' /> {/* User icon */}
      </div>
      <p className='text-md font-medium'>{subscriber.Email}</p>
    </div>
  ))}
</div>

      {/* Pagination Controls */}
      <div className='flex justify-center space-x-4 mt-4'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className='bg-amber-950 text-white px-4 py-2 rounded-lg disabled:opacity-50'
        >
          Previous
        </button>
        <span className='self-center'>Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='bg-amber-950 text-white px-4 py-2 rounded-lg disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default Page;
 