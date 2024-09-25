// /app/[detail]/page.jsx

import React from "react";
import { GoDownload } from "react-icons/go";
import Navs from "../../componets/nav";
import ArticleDetailcard from "../../componets/detailArticle";

const Page = async ({ params }) => {
  // Fetch the article data
  const {id} = params;
  const fetchArticle = async () => {
    const response = await fetch(`http://localhost:3002/api/blog/${id}`, {
      next: { revalidate: 10 }, // Optional revalidation
    });
    if (!response.ok) {
      console.log(response);
      throw new Error('Failed to fetch article');
      
    }
    console.log(response + "work") ;
    return response.json();

  };

  const article = await fetchArticle(params.detail);

  // Sample related articles; ideally fetch these from your API
  const selectedArticles = [
    // Your existing related articles array here
  ];

  // Using the last 5 for demonstration
  const relatedArticles = selectedArticles.slice(-5);

  return (
    <div>
      {/* Navbar */}
      <div className="bg-[#A70E28] top-0 md:fixed w-full z-10">
        <Navs />
      </div>

      {/* Main content */}
      <div className="flex px-5 md:px-0 flex-col lg:flex-row lg:justify-between mx-auto max-w-6xl gap-[120px] 2xl:gap-[180px] md:mt-[100px] 2xl:max-w-7xl mt-[20px] lg:mt-[120px]">
        {/* Left side */}
        <div>
          <div>
            <img
              src={article.img} // Use the fetched article image
              alt={article.title} // Use the fetched article title for alt text
              className="rounded-md md:max-w-[900px] mx-auto md:h-[400px] sm:w-[550px] 2xl:w-[700px] 2xl:h-[483px]"
            />
          </div>

          <div className="flex items-center justify-between mt-7">
            <button className="px-[30px] py-[10px] bg-[#AF001E] text-white rounded-md">
              {article.type} {/* Display the article type dynamically */}
            </button>
            <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 bg-white">
              Download Article <GoDownload className="text-[20px]" />
            </button>
          </div>

          <p className="mt-9 pl-5 text-2xl font-semibold">{article.title}</p>

          <article className="mt-4 text-justify max-w-[660px] mx-auto">
            {article.desc} {/* Display the article description dynamically */}
          </article>

          <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[20px] bg-white">
            Download Article <GoDownload className="text-[20px]" />
          </button>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-start justify-start">
          <p className="text-2xl font-semibold">Related Articles</p>

          {relatedArticles.map((relatedArticle) => (
            <ArticleDetailcard
              key={relatedArticle.id} // Use unique key based on id
              img={relatedArticle.img}
              title={relatedArticle.title}
              id={relatedArticle.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
