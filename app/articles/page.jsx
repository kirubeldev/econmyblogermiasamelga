"use client"

import React, { useState } from 'react';
import Navs from '../componets/nav';
import Atricle1Card from '../componets/Atricle1Card';
import Subscribe from '../componets/Subscribe';
import Footer from '../componets/Footer';

const articlesData = [
  {
    date: "Mon 19th June , 2024",
    desc: "Innovation is crucial for businesses to stay ahead in a competitive market. This article examines how integrating innovative practices can transform business models, enhance efficiency, and lead to long-term success.",
    img: "./kil1.png",
    title: "Business and Innovation: Driving Future Success",
    type: "Business & Innovation"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "./kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "./kil4.png",
    title: "የሽያጭ ጉዞ: ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Entrepreneur"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "True health goes beyond physical fitness; it encompasses mental, emotional, and social well-being. This article explores the importance of a holistic approach to health, emphasizing the need for balance and self-care.",
    img: "./kil2.png",
    title: "The Path to Wellness: Embracing a Holistic Approach to Health",
    type: "Health"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "Innovation is crucial for businesses to stay ahead in a competitive market. This article examines how integrating innovative practices can transform business models, enhance efficiency, and lead to long-term success.",
    img: "./kil1.png",
    title: "Business and Innovation: Driving Future Success",
    type: "Business & Innovation"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "./kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "./kil4.png",
    title: "የሽያጭ ጉዞ: ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Entrepreneur"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "./kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "True health goes beyond physical fitness; it encompasses mental, emotional, and social well-being. This article explores the importance of a holistic approach to health, emphasizing the need for balance and self-care.",
    img: "./kil2.png",
    title: "The Path to Wellness: Embracing a Holistic Approach to Health",
    type: "Health"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "./kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "Innovation is crucial for businesses to stay ahead in a competitive market. This article examines how integrating innovative practices can transform business models, enhance efficiency, and lead to long-term success.",
    img: "./kil1.png",
    title: "Business and Innovation: Driving Future Success",
    type: "Business & Innovation"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "./kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "./kil4.png",
    title: "የሽያጭ ጉዞ: ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Entrepreneur"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "True health goes beyond physical fitness; it encompasses mental, emotional, and social well-being. This article explores the importance of a holistic approach to health, emphasizing the need for balance and self-care.",
    img: "./kil2.png",
    title: "The Path to Wellness: Embracing a Holistic Approach to Health",
    type: "Health"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "./kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "Innovation is crucial for businesses to stay ahead in a competitive market. This article examines how integrating innovative practices can transform business models, enhance efficiency, and lead to long-term success.",
    img: "./kil1.png",
    title: "Business and Innovation: Driving Future Success",
    type: "Business & Innovation"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "./kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "./kil4.png",
    title: "የሽያጭ ጉዞ: ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Entrepreneur"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "True health goes beyond physical fitness; it encompasses mental, emotional, and social well-being. This article explores the importance of a holistic approach to health, emphasizing the need for balance and self-care.",
    img: "./kil2.png",
    title: "The Path to Wellness: Embracing a Holistic Approach to Health",
    type: "Health"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "Innovation is crucial for businesses to stay ahead in a competitive market. This article examines how integrating innovative practices can transform business models, enhance efficiency, and lead to long-term success.",
    img: "./kil1.png",
    title: "Business and Innovation: Driving Future Success",
    type: "Business & Innovation"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "./kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy"
  },

  {
    date: "Mon 19th June , 2024",
    desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
    img: "./kil4.png",
    title: "የሽያጭ ጉዞ: ራእይን ወቅታዊ እውነት ለማድረግ",
    type: "Entrepreneur"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
    img: "./kil3.png",
    title: "Strengthening the Economy: Ensuring Sustainable Growth",
    type: "Economy"
  },
  {
    date: "Mon 19th June , 2024",
    desc: "True health goes beyond physical fitness; it encompasses mental, emotional, and social well-being. This article explores the importance of a holistic approach to health, emphasizing the need for balance and self-care.",
    img: "./kil2.png",
    title: "The Path to Wellness: Embracing a Holistic Approach to Health",
    type: "Health"
  }

  // Add more articles if needed
];

const page = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articlesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedArticles = articlesData.slice(startIndex, startIndex + itemsPerPage);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className='mx-auto'>
      <div className='bg-[#A70E28] top-0 fixed w-full z-10'>
        <Navs />
      </div>
      <div className='flex max-w-6xl mx-auto mt-[70px] gap-12'>
        <div className='w-[328px] fixed mt-[70px]'>
          <p>Showing 1-7 of 7 results</p>
          <div className='pt-[23px] flex items-center gap-4'>
            <img src="./fil.png" alt="" />
            <p className='text-[32px]'>Filters</p>
          </div>
          <hr />
          <div className='mt-7'>
            <p className='text-[18px] font-semibold'>Topics</p>
          </div>
          <div className='pl-3 pt-1'>
            <div className='flex items-center gap-3'>
              <input type="checkbox" id="business" />
              <label htmlFor="business">Business & Innovation</label>
            </div>
            <div className='flex items-center gap-3'>
              <input type="checkbox" id="economy" />
              <label htmlFor="economy">Economy</label>
            </div>
            <div className='flex items-center gap-3'>
              <input type="checkbox" id="entrepreneur" />
              <label htmlFor="entrepreneur">Entrepreneur</label>
            </div>
          </div>
          <div className='mt-7'>
            <p className='text-[18px] font-semibold'>Languages</p>
          </div>
          <div className='pl-3 pt-1'>
            <div className='flex items-center gap-3'>
              <input type="checkbox" id="english" />
              <label htmlFor="english">English</label>
            </div>
            <div className='flex items-center gap-3'>
              <input type="checkbox" id="amharic" />
              <label htmlFor="amharic">Amharic</label>
            </div>
          </div>
        </div>
        <div className='ml-[328px] mt-[70px]'>
            <div className='flex justify-end gap-7'>
           
        <div classname='outline-none'>
            <p className='font-semibold py-1'> Show per page</p>
            
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className='outline-none w-[50p] text-start px-10 py-1 bg-white border rounded-sm'
              >
                <option className='' value={2}>2</option>
                <option className='px-5' value={3}>3</option>
                <option className='px-5' value={5}>4</option>
                <option className='px-5' value={6}>5</option>
                <option className='px-5' value={4}>6</option>
                <option className='px-5' value={1}>7</option>
                <option className='px-5' value={8}>8</option>
                <option className='px-5' value={9}>10</option>
                <option className='px-5' value={10}>4</option>
                <option className='px-5' value={11}>4</option>
                <option className='px-5' value={12}>4</option>
                <option className='px-5' value={13}>4</option>
                <option className='px-5' value={14}>4</option>
                <option className='px-5' value={15}>4</option>
              </select>
            </div>
            <div>

            <p className='font-semibold py-1'>Sort by</p>
           <select name="" id="" className='px-3 py-1 bg-white border rounded-sm'>
            <option value="">Newst to Oldest</option>
            <option value=""> Oldest to  Newst</option>
           </select>
            </div>
            </div>
          {selectedArticles.map(article => (
            <Atricle1Card
             
              date={article.date}
              desc={article.desc}
              img={article.img}
              title={article.title}
              type={article.type}
            />
          ))}
          <div className='flex justify-center mt-5'>
  <button onClick={handlePrevPage} disabled={currentPage === 1} className='border px-4 py-2 rounded'>
    &lt; Back
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
  
  <button onClick={handleNextPage} disabled={currentPage === totalPages} className='border px-4 py-2 rounded'>
    Next &gt;
  </button>
</div>
        </div>
      </div>
<div className='w-fit mx-auto'>

      <Subscribe/>
</div>

    </div>
  );
}

export default page;