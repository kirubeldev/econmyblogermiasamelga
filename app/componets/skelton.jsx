import React from "react";

const SkeletonArticle = () => (
  <div className="flex mt-6 flex-col md:flex-row md:gap-6 mb-6 animate-pulse">
    <div className="bg-gray-200 h-48 w-full md:w-2/4 rounded-md"></div>
    <div className="flex flex-col justify-between p-4 w-full space-y-4">
      <div className="bg-gray-200 h-6 w-3/4 rounded-md mb-2"></div>
      <div className="bg-gray-200 h-4 w-full rounded-md mb-2"></div>
      <div className="bg-gray-200 h-4 w-5/6 rounded-md mb-2"></div>
      <div className="bg-gray-200 h-4 w-3/4 rounded-md mb-2"></div>
      <div className="bg-gray-200 h-4 w-1/2 rounded-md"></div>
    </div>
  </div>
);

export default SkeletonArticle;