"use client";

import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { MdOutlineArrowOutward } from "react-icons/md";
import Articles from "./Cards";
import SkeletonArticle from "./skeltion2";

const RecentlyPubArticle = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

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
          <>
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
          </>
        ) : articles.length > 0 ? (
          articles.map((article) => (
            <Articles
              key={article._id}
              dates={formatDate(article.createdAt)}
              img={article.coverImage}
              title={article.title}
              desc={truncateDescription(article.description)}
              type={article.category}
              id={article._id}
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
  const options = { weekday: "short", month: "short", year: "numeric" };
  const day = date.getDate();
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };
  const formattedDay = `${day}${getDaySuffix(day)}`;
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return `${formattedDate.split(" ")[0]} ${formattedDay} ${formattedDate.split(" ")[1]}, ${formattedDate.split(" ")[2]}`;
};

// Helper function to sanitize and truncate the description without <p> tags
// Helper function to sanitize and truncate the description without any HTML tags
const truncateDescription = (description) => {
  // Sanitize the description to remove harmful scripts
  const sanitizedDescription = DOMPurify.sanitize(description);
  
  // Use a regular expression to remove any remaining HTML tags
  const strippedDescription = sanitizedDescription.replace(/<\/?[^>]+(>|$)/g, "");

  const words = strippedDescription.split(" ");
  return words.length > 20 ? words.slice(0, 20).join(" ") + "..." : strippedDescription;
};
export default RecentlyPubArticle;
