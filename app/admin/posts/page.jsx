"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Atricle1Card from '@/app/componets/Atricle1Card';
import Subscribe from '@/app/componets/Subscribe';
import Navs from '@/app/componets/nav';
import { FiPlus } from "react-icons/fi";
import AdminAtricle1Card from '@/app/componets/AdminArticle';

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
    language: "Amharic"
  }
  ,  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "/kil4.png",
    title: "የሽያጭ ጉዞ lkjs : ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Health",
    language: "Amharic"
  }
  , {
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
    language: "Amharic"
  }
  ,  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "/kil4.png",
    title: "የሽያጭ ጉዞ lkjs : ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Health",
    language: "Amharic"
  }, {
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
    language: "Amharic"
  }
  ,  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "/kil4.png",
    title: "የሽያጭ ጉዞ lkjs : ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Health",
    language: "Amharic"
  }, {
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
    language: "Amharic"
  }
  ,  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "/kil4.png",
    title: "የሽያጭ ጉዞ lkjs : ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Health",
    language: "Amharic"
  }
];

const Page = () => {
  const [publishedblog, setpublishedblog] = useState("All Job Posts");
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    topics: [],
    languages: [],
  });
  const [showFilters, setShowFilters] = useState(false); // State to control filter visibility
  const [filter, setFilter] = useState('all'); // Default to showing all blogs

  // Filtered articles based on the selected filter
  const filteredArticles = articlesData.filter((article) => {
    if (filter === 'all') return true; // Show all articles
    if (filter === 'draft') return article.isDraft; // Show only drafts
    return false;
  });
  // Filter articles based on selected filters
  

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
      <div className='max-w-6xl mx-auto mt-[70px]'>
    
        <div className=' px-5 md:px-0 mt-[140px] '>
          <div className='flex md:justify-between items-center gap-7 '>
          <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 ${filter === 'all' ? 'text-black border-b border-blue-500 ' : ' '}`}
        >
          All Blogs
        </button>
        <button
          onClick={() => setFilter('draft')}
          className={`px-4 py-2 ${filter === 'draft' ? 'text-black border-b border-blue-500 ' : ' '}`}
        >
          Drafts
        </button>
      </div>

        <div className='flex items-center  gap-5 '>

            <div className='outline-none  bg-[#B2B2B536] px-6  py-2 rounded-2xl cursor-pointer flex items-center gap-4'>
              <img src="/filter.png" alt="" className='text-white' />
            <button className=''>Filter</button>
            
            </div>
            <div className='flex items-center h-[40px] gap-1 border  py-[8] rounded-2xl cursor-pointer px-[40px]'>

           <button > Post a Blog</button>
           <FiPlus className='text-xl  '/>
            </div>
        </div>

          </div>



          {filter === "draft" ? 
  (
    <div className='h-[100vh] flex items-center justify-center'>
      <p className='text-6xl'>No Draft found</p>
    </div>
  ) : (
    <div>
      <div className="">
        {selectedArticles.map((article) => (
          <AdminAtricle1Card
            key={article.title} // Unique key to prevent errors
            date={article.date}
            desc={article.desc}
            img={article.img}
            title={article.title}
            type={article.type}
          />
        ))}
      </div>

      {/* Pagination Section */}
      <div className='flex items-center max-w-screen px-5 md:px-0 justify-center mt-5'>
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className='border px-4 py-2 rounded'
        >
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

        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className='border px-2 py-2 rounded'
        >
          Next
        </button>
      </div>
      
      <div className='md:w-fit px-5 max-w-6xl md:px-0 flex mx-auto'>
        {/* Any additional content here */}
      </div>
    </div>
  )
}

        <Subscribe />
      </div>
        </div>
      </div>
     
  );
}

export default Page;