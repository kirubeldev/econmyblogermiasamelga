"use client"

import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Atricle1Card from './Atricle1Card';

const ExploreArticles = () => {
  // Initialize state with 'all' to make the "All" button active by default
  const [activeButton, setActiveButton] = useState('all');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto mt-[100px] flex justify-between items-center">
        <p className="text-[40px] font-thin">Explore Articles</p>
        <button 
          
          className={`flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 ${activeButton === 'seeMore' ? 'bg-[#AF001E] text-white' : 'bg-white text-[#AF001E]'}`}
        >
          See More <MdOutlineArrowOutward className="text-[20px]" />
        </button>
      </div>

      <div className='max-w-6xl mt-[30px] mx-auto flex gap-4 md:gap-12 items-center'>
        <p className='text-[24px] mr-4'>Topics</p>
        <ul className='flex gap-4 md:gap-12 list-none'>
          <li>
            <button 
              onClick={() => handleButtonClick('all')}
              className={`py-[5px] px-[15px] rounded-md cursor-pointer transition-colors duration-300 ${activeButton === 'all' ? 'bg-[#AF001E] text-white' : 'bg-transparent border text-[#AF001E]'}`}
            >
              All
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleButtonClick('business')}
              className={`py-[5px] px-[15px] rounded-md cursor-pointer transition-colors duration-300 ${activeButton === 'business' ? 'bg-[#AF001E] text-white' : 'bg-transparent border text-[#AF001E]'}`}
            >
              Business & Innovation
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleButtonClick('economy')}
              className={`py-[5px] px-[15px] rounded-md cursor-pointer transition-colors duration-300 ${activeButton === 'economy' ? 'bg-[#AF001E] text-white' : 'bg-transparent border text-[#AF001E]'}`}
            >
              Economy
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleButtonClick('entrepreneur')}
              className={`py-[5px] px-[15px] rounded-md cursor-pointer transition-colors duration-300 ${activeButton === 'entrepreneur' ? 'bg-[#AF001E] text-white' : 'bg-transparent border text-[#AF001E]'}`}
            >
              Entrepreneur
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleButtonClick('health')}
              className={`py-[5px] px-[15px] rounded-md cursor-pointer transition-colors duration-300 ${activeButton === 'health' ? 'bg-[#AF001E] text-white' : 'bg-transparent border text-[#AF001E]'}`}
            >
              Health
            </button>
          </li>
        </ul>
      </div>
<div className='max-w-6xl mx-auto    gap-6 '>

      <Atricle1Card date={"Mon 19th June , 2024 "} desc={"Innovation is crucial for businesses to stay ahead in a competitive market. This article examines how integrating innovative practices can transform business models, enhance efficiency, and lead to long-term success." } img={"./kil1.png"} title={"Business and Innovation: Driving Future Success"} type={" Business & Innovation "}  />
      <Atricle1Card date={"Mon 19th June , 2024 "} desc={"The economy is rapidly evolving, presenting both challenges and opportunities for future development. This article explores strategies to secure sustainable growth, adapt to changing market conditions, and achieve long-term economic prosperity." } img={"./kil3.png"} title={"Strengthening the Economy: Ensuring Sustainable Growth"} type={"Economy "}  />
      <Atricle1Card date={"Mon 19th June , 2024 "} desc={"እንቅስቃሴ የማህበረሰብ እውቀትን እና እውነተኛ ድርጅት ማስተካከል ነው። ይህ ጽሑፍ በንግድ የምርመራ እና የመንግስት ሰላምና ስኬት ማግኘት በመሰረት እንዴት እንደሚገባ ተሞልቷል።" } img={"./kil4.png"} title={"የሽያጭ ጉዞ: ራእይን ወቅታዊ እውነት ለማድረግ"} type={"Entrepreneur  "}  />
      <Atricle1Card date={"Mon 19th June , 2024 "} desc={"True health goes beyond physical fitness; it encompasses mental, emotional, and social well-being. This article explores the importance of a holistic approach to health, emphasizing the need for balance and self-care" } img={"./kil2.png"} title={"The Path to Wellness: Embracing a Holistic Approach to Health"} type={"Health  "}  />
        
</div>
    </div>
  );
};

export default ExploreArticles;
