"use client";

import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Atricle1Card from './Atricle1Card';
import Link from 'next/link';

const ExploreArticles = () => {
  const [activeButton, setActiveButton] = useState('all');

  const articles = [
    {
      date: "Mon 19th June, 2024",
      desc: "Innovation is crucial for businesses to stay ahead in a competitive market. This article examines how integrating innovative practices can transform business models, enhance efficiency, and lead to long-term success.",
      img: "./kil1.png",
      title: "Business and Innovation: Driving Future Success",
      type: "Business & Innovation"
    },
    {
      date: "Mon 19th June, 2024",
      desc: "The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity.",
      img: "./kil3.png",
      title: "Strengthening the Economy: Ensuring Sustainable Growth",
      type: "Economy"
    },
    {
      date: "Mon 19th June, 2024",
      desc: "እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።",
      img: "./kil4.png",
      title: "የሽያጭ ጉዞ: ራእይን ወቅታዊ እውነት ለማድረግ",
      type: "Entrepreneur"
    },
    {
      date: "Mon 19th June, 2024",
      desc: "True health goes beyond physical fitness; it encompasses mental, emotional, and social well-being. This article explores the importance of a holistic approach to health, emphasizing the need for balance and self-care.",
      img: "./kil2.png",
      title: "The Path to Wellness: Embracing a Holistic Approach to Health",
      type: "Health"
    }
  ];

  const filteredArticles = activeButton === 'all' 
    ? articles 
    : articles.filter(article => article.type.trim() === activeButton);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="max-w-6xl px-5 md:px-0 mx-auto mt-[100px] flex justify-between items-center">
        <p className="text-[20px] md:text-[40px] font-thin">Explore Articles</p>
     <Link href={"/articles"}>
        <button 
          className={`flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 ${activeButton === 'seeMore' ? 'bg-[#AF001E] text-white' : 'bg-white text-[#000]'}`}
          >
          See More <MdOutlineArrowOutward className="text-[20px]" />
        </button>
          </Link>
      </div>

      <div className='max-w-6xl flex-col md:flex-row px-5 md:px-0 mt-[30px] mx-auto flex gap-4 md:gap-12 md:items-center'>
        <p className='text-[24px] mr-4'>Topics</p>
        <ul className='flex px-5 md:px-0 flex-wrap gap-4 md:gap-12 list-none'>
          {['all', 'Business & Innovation', 'Economy', 'Entrepreneur', 'Health'].map(topic => (
            <li key={topic}>
              <button 
                onClick={() => handleButtonClick(topic)}
                className={`py-[5px] px-[15px] rounded-md cursor-pointer transition-colors duration-300 ${activeButton === topic ? 'bg-[#AF001E] text-white' : 'bg-transparent border text-[#000]'}`}
              >
                {topic === 'all' ? 'All' : topic}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='max-w-6xl mx-auto px-5 md:px-0 gap-6'>
        {filteredArticles.map((article, index) => (
          <Atricle1Card 
            key={index}
            date={article.date}
            desc={article.desc}
            img={article.img}
            title={article.title}
            type={article.type}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreArticles;