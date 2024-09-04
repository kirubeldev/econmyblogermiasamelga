"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navs from '../componets/nav';
import Atricle1Card from '../componets/Atricle1Card';
import Subscribe from '../componets/Subscribe';

const articlesData = [
  {
    date: "Mon 19th June , 2024",
    desc: "Innovation is crucial for businesses to stay ahead in a competitive market. This article examines how integrating innovative practices can transform business models, enhance efficiency, and lead to long-term success.",
    img: "/kil1.png",
    title: "Business and Innovation: Driving Future Success",
    type: "Business & Innovation",
    language: "English"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "/kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy",
    language: "Amharic"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "/kil4.png",
    title: "የሽያጭ ጉዞ: ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Entrepreneur",
    language: "English"
  }
  ,  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "/kil4.png",
    title: "የሽያጭ ጉዞ lkjs : ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Health",
    language: "English"
  }
  
];

const Page = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    topics: [],
    languages: [],
  });
  const [showFilters, setShowFilters] = useState(false); // State to control filter visibility

  // Filter articles based on selected filters
  const filteredArticles = articlesData.filter((article) => {
    const matchesTopic =
      selectedFilters.topics.length === 0 || selectedFilters.topics.includes(article.type);
    const matchesLanguage =
      selectedFilters.languages.length === 0 || selectedFilters.languages.includes(article.language);
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

  return (
    <div className='mx-auto'>
      <div className='bg-[#A70E28] top-0 md:fixed w-full z-10'>
        <Navs />
      </div>
      <div className='flex flex-col md:flex-row md:max-w-6xl mx-auto mt-[70px]'>
        <div className='w-full px-5 md:px-0 md:w-[328px] md:fixed mt-[70px]'>
          <p>Showing {selectedArticles.length} of {filteredArticles.length} results</p>
          <div className='pt-[23px] flex items-center gap-4 cursor-pointer' onClick={() => setShowFilters(!showFilters)}>
            <Image src="/fil.png" alt="" width={30} height={30} />
            <p className='text-[32px]'>Filters</p>
          </div>
          <hr className="px-6" />
          {/* Filter section, visible on larger screens and toggled on mobile */}
          <div className={`md:block ${showFilters ? 'block' : 'hidden'} md:visible`}>
            <div className='mt-7'>
              <p className='text-[18px] font-semibold'>Topics</p>
            </div>
            <div className='pl-3 pt-1'>
              <div className='flex items-center gap-3'>
                <input
                  type="checkbox"
                  id="business"
                  checked={selectedFilters.topics.includes("Business & Innovation")}
                  onChange={() => handleFilterChange("topics", "Business & Innovation")}
                />
                <label htmlFor="business">Business & Innovation</label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  type="checkbox"
                  id="economy"
                  checked={selectedFilters.topics.includes("Economy")}
                  onChange={() => handleFilterChange("topics", "Economy")}
                />
                <label htmlFor="economy">Economy</label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  type="checkbox"
                  id="entrepreneur"
                  checked={selectedFilters.topics.includes("Entrepreneur")}
                  onChange={() => handleFilterChange("topics", "Entrepreneur")}
                />
                <label htmlFor="entrepreneur">Entrepreneur</label>
              </div>
              <div className='flex items-center gap-3'>
    <input
        type="checkbox"
        id="Health"
        checked={selectedFilters.topics.includes("Health")}
        onChange={() => handleFilterChange("topics", "Health")}
    />
    <label htmlFor="Health">Health</label>
</div>
            </div>
            <div className='mt-7'>
              <p className='text-[18px] font-semibold'>Languages</p>
            </div>
            <div className='pl-3 pt-1'>
              <div className='flex items-center gap-3'>
                <input
                  type="checkbox"
                  id="english"
                  checked={selectedFilters.languages.includes("English")}
                  onChange={() => handleFilterChange("languages", "English")}
                />
                <label htmlFor="english">English</label>
              </div>
              <div className='flex items-center gap-3'>
                <input
                  type="checkbox"
                  id="amharic"
                  checked={selectedFilters.languages.includes("Amharic")}
                  onChange={() => handleFilterChange("languages", "Amharic")}
                />
                <label htmlFor="amharic">Amharic</label>
              </div>
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
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
              </select>
            </div>
            <div className="flex flex-col">
              <p className='font-semibold py-1'>Sort by</p>
              <select name="" id="" className='px-3 py-1 bg-white border rounded-sm'>
                <option value="">Newest to Oldest</option>
                <option className='outline-none rounded-sm' value="">Oldest to Newest</option>
              </select>
            </div>
          </div>
          <div className="">
            {selectedArticles.map(article => (
              <Atricle1Card
                key={article.title} // Ensure you have a unique key
                date={article.date}
                desc={article.desc}
                img={article.img}
                title={article.title}
                type={article.type}
              />
            ))}
          </div>
          <div className='flex item-center max-w-screen px-5 md:px-0 justify-center mt-5'>
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
        </div>
      </div>
      <div className='md:w-fit px-5 md:px-0 mx-auto'>
        <Subscribe />
      </div>
    </div>
  );
}

export default Page;