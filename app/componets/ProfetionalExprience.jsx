"use client"
import React from 'react';

const ProfetionalExprience = () => {
  return (
    <div>
      <div className='flex px-5 md-px-0 max-w-6xl  flex-col md:flex-row justify-center mx-auto md:mt-[100px] mt-[50px] md:justify-between '>
        <div className='md:mr-8 lg:mr-0'>
          <p className='text-[30px] md:text-[40px] '>Professional Experience</p>
          <p className='max-w-[450px] text-justify text-[14px]'>
            Ermyas Amelga&#39;s career path is marked by noteworthy accomplishments and revolutionary contributions in a range of fields, both in Ethiopia and the United States. His wealth of Wall Street experience and his business endeavors in Ethiopia demonstrate his proficiency in finance, investing, and economic growth.
          </p>
        </div>

        <div className='overflow-y-scroll mt-7 md-mt-0 flex flex-col h-[430px] custom-scrollbar'>
          {Array(7).fill('').map((_, index) => (
            <div key={index} className='p-4 rounded-[21px] border mb-[20px] border-[#BFBFBF]'>
              <div className='flex gap-4 justify-start'>
                <p className="text-[#AF001E] text-[40px] h-fit font-bold md:text-[64px]">{`0${index + 1}`}</p>
                <div className='flex flex-col'>
                  <p className='text-[24px]'>WALL STREET EXPERIENCE</p>
                  <p className='text-[20px]'>Investment Banker</p>
                  <p className='text-[#464646]'>Kidder Peabody & Company, Wall Street</p>
                </div>
              </div>
              <p className='max-w-[510px] text-[14px]'>
                Ermyas Amelga worked at a prestigious Wall Street investment bank, Kidder Peabody & Company, for twelve years. He raised money for some of the biggest US corporations and provided advice on a number of high-profile deals during his time there.
              </p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
  /* Custom scrollbar styles */
  .custom-scrollbar::-webkit-scrollbar {
    display: none; /* Hide the scrollbar in WebKit browsers */
  }

  .custom-scrollbar {
    -ms-overflow-style: none;  /* Hide scrollbar in IE and Edge */
    scrollbar-width: none;  /* Hide scrollbar in Firefox */
  }
`}</style>

    </div>
  );
}

export default ProfetionalExprience;
