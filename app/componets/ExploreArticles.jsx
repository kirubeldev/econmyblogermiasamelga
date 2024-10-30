"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Atricle1Card from "./Atricle1Card";
import Link from "next/link";
import SkeletonArticle from "./skelton";
import DOMPurify from "dompurify";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: "short", month: "short", year: "numeric" };
  const day = date.getDate();

  // Determine the appropriate suffix for the day
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Special case for teens
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  // Format the day with the suffix
  const formattedDay = `${day}${getDaySuffix(day)}`;

  // Format the full date with options
  const formattedDate = date.toLocaleDateString("en-GB", options);

  // Combine weekday, day with suffix, month, and year
  return `${formattedDate.split(" ")[0]} ${formattedDay} ${formattedDate.split(" ")[1]}, ${formattedDate.split(" ")[2]}`;
};

const ExploreArticles = () => {
  const [response, setResponse] = useState([]); // Initialize as an array

  useEffect(() => {
    // Fetch the blog details when the component mounts
    const fetchBlogDetail = async () => {
      try {
        const res = await fetch(`http://localhost:3002/api/blog/`);
        const data = await res.json();
        setResponse(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetail();
  }, []); // Empty dependency array to fetch only once on mount

  const [activeButton, setActiveButton] = useState("all");

  // Sort by creation date in descending order and filter articles
  const filteredArticles = activeButton === "all"
    ? response.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort latest first
    : response
        .filter((article) => article.category.trim() === activeButton)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort latest first

  // Get the latest 5 articles
  const latestArticles = filteredArticles.slice(0, 5);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const truncateDescription = (description) => {
    // Sanitize description and remove <p> tags
    const sanitizedDescription = DOMPurify.sanitize(description).replace(/<\/?p>/g, '');
    const words = sanitizedDescription.split(" ");
    return words.length > 50 ? words.slice(0, 50).join(" ") + "..." : sanitizedDescription;
  };

  return (
    <div>
      <div className="max-w-6xl px-5 md:px-0 mx-auto mt-[100px] flex justify-between items-center">
        <p className="text-[20px] md:text-[40px] font-thin">Explore Articles</p>
        <Link href="/articles">
          <button className={`flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 ${activeButton === "seeMore" ? "bg-[#AF001E] text-white" : "bg-white text-[#000]"}`}>
            See More <MdOutlineArrowOutward className="text-[20px]" />
          </button>
        </Link>
      </div>

      <div className="max-w-6xl flex-col md:flex-row px-5 md:px-0 mt-[30px] mx-auto flex gap-4 md:gap-12 md:items-center">
        <p className="text-[24px] mr-4">Topics</p>
        <ul className="flex px-5 md:px-0 flex-wrap gap-4 md:gap-12 list-none">
          {["all", "Business", "Economy", "Mindset", "Health and Wellbeing"].map((topic) => (
            <li key={topic}>
              <button
                onClick={() => handleButtonClick(topic)}
                className={`py-[5px] px-[15px] rounded-md cursor-pointer transition-colors duration-300 ${activeButton === topic ? "bg-[#AF001E] text-white" : "bg-transparent border text-[#000]"}`}
              >
                {topic === "all" ? "All" : topic}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-0 gap-6">
        {latestArticles.length > 0 ? (
          latestArticles.map((article, index) => (
            <Atricle1Card
              key={index}
              date={formatDate(article.createdAt)} // Example: "Mon 19th June, 2024"
              desc={truncateDescription(article.description)} // Truncated description
              img={article.coverImage}
              title={article.title}
              type={article.category}
              id={article._id}
            />
          ))
        ) : (
          <>
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
            <SkeletonArticle />
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreArticles;
