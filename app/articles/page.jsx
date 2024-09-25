"use client";

import React, { useEffect, useState } from 'react'; // Ensure useEffect is imported
import Image from 'next/image';
import Navs from '../componets/nav';
import SkeletonArticle from '../componets/skelton';
import Subscribe from '../componets/Subscribe';
import Atricle1Card from '../componets/Atricle1Card';
import Atricle1Card2 from '../componets/articlecard2';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'short', month: 'short', year: 'numeric' };
  const day = date.getDate();

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; 
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const formattedDay = `${day}${getDaySuffix(day)}`;
  const formattedDate = date.toLocaleDateString('en-GB', options);
  return `${formattedDate.split(' ')[0]} ${formattedDay} ${formattedDate.split(' ')[1]}, ${formattedDate.split(' ')[2]}`;
};

const Page = () => {
  const [articlesData, setArticlesData] = useState([]); // State for fetched articles
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    topics: [],
    languages: [],
  });
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const fetchArticles = async () => {
    try {
      const res = await fetch(`http://localhost:3002/api/blog/`);
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setArticlesData(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchArticles(); // Fetch articles on component mount
  }, []);

  const filteredArticles = articlesData.filter((article) => {
    const matchesTopic = selectedFilters.topics.length === 0 || selectedFilters.topics.includes(article.type);
    const matchesLanguage = selectedFilters.languages.length === 0 || selectedFilters.languages.includes(article.language);
    return matchesTopic && matchesLanguage;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      const isSelected = prev[category].includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      };
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    return words.length > 20 ? words.slice(0, 20).join(' ') + '...' : description;
  };

  return (
    <div className='mx-auto'>
      <div className='bg-[#A70E28] top-0 md:fixed w-full z-10'>
        <Navs />
      </div>
      <div className='flex flex-col md:flex-row md:max-w-6xl mx-auto mt-[70px]'>
        <div className='w-full px-5 md:w-[328px] md:fixed mt-[70px] '>
          <p>Showing {selectedArticles.length} of {filteredArticles.length} results</p>
          <div className='pt-[23px] flex items-center gap-4 cursor-pointer' onClick={() => setShowFilters(!showFilters)}>
            <Image src="/fil.png" alt="" width={30} height={30} />
            <p className='text-[32px]'>Filters</p>
          </div>
          <hr className="px-6" />
          <div className={`md:block ${showFilters ? 'block' : 'hidden'} md:visible`}>
            <div className='mt-7'>
              <p className='text-[18px] font-semibold'>Topics</p>
            </div>
            <div className='pl-3 pt-1'>
              {["Business & Innovation", "Economy", "Entrepreneur", "Health"].map(topic => (
                <div className='flex items-center gap-3' key={topic}>
                  <input
                    type="checkbox"
                    id={topic.toLowerCase()}
                    checked={selectedFilters.topics.includes(topic)}
                    onChange={() => handleFilterChange("topics", topic)}
                  />
                  <label htmlFor={topic.toLowerCase()}>{topic}</label>
                </div>
              ))}
            </div>
            <div className='mt-7'>
              <p className='text-[18px] font-semibold'>Languages</p>
            </div>
            <div className='pl-3 pt-1'>
              {["English", "Amharic"].map(language => (
                <div className='flex items-center gap-3' key={language}>
                  <input
                    type="checkbox"
                    id={language.toLowerCase()}
                    checked={selectedFilters.languages.includes(language)}
                    onChange={() => handleFilterChange("languages", language)}
                  />
                  <label htmlFor={language.toLowerCase()}>{language}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='md:ml-[328px] px-5 md:px-0 mt-[70px]'>
          <div className='flex md:justify-end gap-7'>
            <div className='outline-none'>
              <p className='font-semibold py-1'>Show per page</p>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1); // Reset to first page
                }}
                className='outline-none w-[50p] text-start px-10 py-1 bg-white border rounded-sm'
              >
                {[...Array(15).keys()].map((value) => (
                  <option key={value + 2} value={value + 2}>{value + 2}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <p className='font-semibold py-1'>Sort by</p>
              <select className='px-3 py-1 bg-white border rounded-sm'>
                <option value="">Newest to Oldest</option>
                <option value="">Oldest to Newest</option>
              </select>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-5 md:px-0 gap-6">
            {isLoading ? ( // Show loading state
              <>
                <SkeletonArticle />
                <SkeletonArticle />
                <SkeletonArticle />
                <SkeletonArticle />
              </>
            ) : selectedArticles.length > 0 ? (
              selectedArticles.map((article, index) => (
                <Atricle1Card2
                  key={index}
                  date={formatDate(article.createdAt)}
                  desc={truncateDescription(article.description)}
                  img={article.img}
                  title={article.title}
                  type={article.category}
                  id={article._id}
                />
              ))
            ) : (
              <p>No articles found.</p>
            )}
          </div>
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
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
