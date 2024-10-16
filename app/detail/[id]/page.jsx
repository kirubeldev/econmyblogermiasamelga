import ArticleDetailcard from "@/app/componets/detailArticle";
import Navs from "@/app/componets/nav";
import React from "react";
import { GoDownload } from "react-icons/go";

const Page = async ({ params }) => {
  const { id } = params;

  // Fetch a specific article
  const fetchArticle = async () => {
    const response = await fetch(`http://localhost:3002/api/blog/${id}`, {
      next: { revalidate: 10 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }
    return response.json();
  };

  // Fetch all articles
  const fetchArticleall = async () => {
    const response = await fetch(`http://localhost:3002/api/blog`, {
      next: { revalidate: 10 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }
    return response.json();
  };

  const article = await fetchArticle();
  const allArticles = await fetchArticleall();

  // Get the latest 5 articles, excluding the current article
  const relatedArticles = allArticles
    .filter(relatedArticle => relatedArticle._id !== id) // Exclude the current article
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort latest first
    .slice(0, 5); // Get the first 5 articles


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
              src={article.coverImage} // Use the fetched article image
              alt={article.title} // Use the fetched article title for alt text
              className="rounded-md object-cover object-center md:max-w-[900px] mx-auto md:h-[400px] sm:w-[550px] 2xl:w-[700px] 2xl:h-[483px]"
            />
          </div>

          <div className="flex items-center justify-between mt-7">
            <button className="px-[30px] py-[10px] bg-[#AF001E] text-white rounded-md">
              {article.category} {/* Display the article type dynamically */}
            </button>
            <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 bg-white">
              Download Article <GoDownload className="text-[20px]" />
            </button>
          </div>

          <p className="mt-9 pl-5 text-2xl font-semibold">{article.title}</p>

          <article className="mt-4 text-justify max-w-[660px] mx-auto">
            {article.description} {/* Display the article description dynamically */}
          </article>

          <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[20px] bg-white">
            Download Article <GoDownload className="text-[20px]" />
          </button>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-start justify-start">
          <p className="text-2xl font-semibold">Related Articles</p>

          {relatedArticles.map((relatedArticle, index) => (
            <ArticleDetailcard
              key={relatedArticle._id || index} // Use unique id if available, else index
              img={relatedArticle.coverImage}
              title={relatedArticle.title}
              id={relatedArticle._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;