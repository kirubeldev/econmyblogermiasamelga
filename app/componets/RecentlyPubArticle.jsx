"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Articles from "./Cards";
import SkeletonArticle from "./skeltion2";

const RecentlyPubArticle = () => {
  const [articles, setArticles] = useState([]); // State to hold articles
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(`http://localhost:3002/api/blog/`);
        const data = await res.json();
        const latestArticles = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);
        setArticles(latestArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchArticles();
  }, []); // Fetch only once on mount

  return (
    <div className="max-w-6xl px-5 md:px-0 mx-auto">
      <div className="max-w-6xl mx-auto mt-[100px] flex justify-between items-center">
        <p className="md:text-[40px] font-semibold">Recently Published Articles</p>
        <button className="flex items-center border gap-6 bg-white backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px]">
          See More <MdOutlineArrowOutward className="text-[20px]" />
        </button>
      </div>

      <div className="flex flex-col justify-center md:gap-6 md:justify-between md:flex-row">
        {loading ? (
          // Show skeletons while loading
          <>
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
          </>
        ) : articles.length > 0 ? (
          articles.map((article, index) => (
            <Articles
              key={index} // Unique key for each article
              dates={formatDate(article.createdAt)} // Format the date
              img={article.img} // Assuming img is part of the article data
              title={article.title}
              desc={truncateDescription(article.description)} // Truncate description
              type={article.category} // Assuming category is part of the article data
              id={article._id} // Article ID
            />
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    </div>
  );
};

// Helper function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'short', month: 'short', year: 'numeric' };
  const day = date.getDate();
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // Special case for teens
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

// Helper function to truncate the description
const truncateDescription = (description) => {
  const words = description.split(' ');
  if (words.length > 50) {
    return words.slice(0, 50).join(' ') + '...';
  }
  return description;
};

export default RecentlyPubArticle;