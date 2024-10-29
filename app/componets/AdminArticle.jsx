"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import DOMPurify from 'dompurify'; // Import DOMPurify

const AdminAtricle1Card = ({ id, date, type, title, desc, img }) => {
    const [show, Setshow] = useState(false);

    const handleToggle = () => {
        Setshow(!show);
    };

    // Sanitize the description
    const sanitizedDesc = DOMPurify.sanitize(desc);

    return (
        <div>
            <div className="max-w-6xl mx-auto mt-[28px] border border-[#BFBFBF] rounded-[10px] flex flex-col md:flex-row gap-6 p-5">
            <Link href={`/admin/detail/${id}`}>
              
                <img
                    src={img}
                    alt=""
                    className="object-cover h-[330px] md:h-[200px] w-[300px] rounded-lg"
                />
                </Link>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-[16px] mb-2">{date}</p>
                        <div className="flex items-center gap-5">
                            {show && (
                                <div className="flex md:flex-row flex-col items-center gap-6">
                                    <Link className="px-[30px] py-[6px] rounded-md hover:bg-[#f5f5f5] border" href={`/admin/edit/${id}`}>Edit</Link>
                                    <Link href={""}>
                                        <button className="px-[30px] py-[6px] rounded-md text-white hover:bg-red-400 bg-red-600">Delete</button>
                                    </Link>
                                </div>
                            )}
                            <TbDotsVertical className="text-lg text-bold cursor-pointer" onClick={handleToggle} />
                        </div>
                    </div>

                    <button className="text-white rounded-[6px] flex items-center justify-center mb-4 bg-[#AF001E] py-[5px] px-[35px]">
                        {type}
                    </button>
                    <p className="text-[18px] font-semibold">{title}</p>

                    {/* Use dangerouslySetInnerHTML to render sanitized HTML */}
                    <p dangerouslySetInnerHTML={{ __html: sanitizedDesc }} />

                    <div className="flex items-center gap-6">
                        <Link href={`/admin/detail/${id}`}>
                            <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[10px] bg-white hover:text-[#AF001E]">
                                Read More <MdOutlineArrowOutward className="text-[20px]" />
                            </button>
                        </Link>
                        <button
                            className={`flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[20px] bg-white text-[#AF001E]`}
                        >
                            Download Article <GoDownload className="text-[20px]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAtricle1Card;
