"use client";

import Link from "next/link";
import React from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";
import DOMPurify from "dompurify";

const Article1Card2 = ({ id, date, type, title, desc, img }) => {
  // Sanitize the description to remove any unwanted HTML
  const sanitizedDesc = DOMPurify.sanitize(desc);

  return (
    <article className="max-w-6xl mx-auto mt-7 border border-gray-300 rounded-lg flex flex-col md:flex-row gap-6 p-5">
          <Link href={`/detail/${id}`} legacyBehavior>
     
      <img
        src={img}
        alt="Article Cover"
        className="object-cover h-80 md:h-64 w-72 rounded-lg cursor-pointer"
      />
      </Link>
      <div>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <span className="text-white bg-red-700 rounded-md px-5 py-1 inline-block mb-4">
          {type}
        </span>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        {/* Render sanitized description */}
        <p className="text-base text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: sanitizedDesc }} />
        <div className="flex items-center gap-4">
          <Link href={`/detail/${id}`} legacyBehavior>
            <button className="flex items-center gap-2 border border-gray-300 rounded-lg py-2 px-4 bg-white hover:bg-red-50 transition-colors duration-300">
              Read More <MdOutlineArrowOutward className="text-lg" />
            </button>
          </Link>
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg py-2 px-4 bg-white hover:bg-red-50 transition-colors duration-300">
            Download Article <GoDownload className="text-lg" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Article1Card2;
