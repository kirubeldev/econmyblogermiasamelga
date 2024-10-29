"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoDownload } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import DOMPurify from 'dompurify';
import axios from "axios";
import getToken from "../lib/tocken";

const AdminArticle1Card = ({ id, date, type, title, desc, img , params }) => {
    const [show, setShow] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false); // State to control delete dialog visibility

    const handleToggle = () => {
        setShow(!show);
    };

    const handleDeleteClick = () => {
        setShowDeleteDialog(true); // Show delete confirmation dialog
    };

    const handleCancelDelete = () => {
        setShowDeleteDialog(false); // Close dialog without deleting
    };

    // Sanitize the description
    const sanitizedDesc = DOMPurify.sanitize(desc);

    const deleteBlog = async (id) => {
        try {
            const token = await getToken();
            console.log(token, "safdadf");

            if (!token) {
                console.error("No access token found");
                return;
            }

            const res = await axios.delete(`http://localhost:3002/api/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${token?.value}`
                }
            });

            if (res.status === 200) {
                console.log("Blog deleted successfully");
                setIsDeleted(true); // Update state to trigger UI update
            } else {
                console.error("Failed to delete the blog post");
            }
        } catch (error) {
            console.error("Error deleting the blog post:", error.message);
        }
    };

    const confirmDelete = () => {
        deleteBlog(id); // Call delete function if confirmed
        setShowDeleteDialog(false); // Close dialog after deletion
    };

    // If blog is deleted, don’t render the card
    if (isDeleted) return null;

    return (
        <div>
            <div className="max-w-6xl mx-auto mt-[28px] border border-[#BFBFBF] rounded-[10px] flex flex-col md:flex-row gap-6 p-5">
                <Link href={`/admin/detail/${id}`}>
                    <img
                        src={img}
                        alt={title}
                        className="object-cover h-[330px] md:h-[200px] w-[300px] rounded-lg"
                    />
                </Link>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-[16px] mb-2">{date}</p>
                        <div className="flex items-center gap-5">
                            {show && (
                                <div className="flex md:flex-row flex-col items-center gap-6">
                                    <Link className="px-[30px] py-[6px] rounded-md hover:bg-[#f5f5f5] border" href={`/admin/edit/${id}`}>
                                        Edit
                                    </Link>
                                    <button
                                        onClick={handleDeleteClick} // Open delete confirmation dialog
                                        className="px-[30px] py-[6px] rounded-md text-white hover:bg-red-400 bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                            <TbDotsVertical className="text-lg text-bold cursor-pointer" onClick={handleToggle} />
                        </div>
                    </div>

                    <button className="text-white rounded-[6px] flex items-center justify-center mb-4 bg-[#AF001E] py-[5px] px-[35px]">
                        {type}
                    </button>
                    <p className="text-[18px] font-semibold">{title}</p>

                    {/* Render sanitized HTML */}
                    <p dangerouslySetInnerHTML={{ __html: sanitizedDesc }} />

                    <div className="flex items-center gap-6">
                        <Link href={`/admin/detail/${id}`}>
                            <button className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[10px] bg-white hover:text-[#AF001E]">
                                Read More <MdOutlineArrowOutward className="text-[20px]" />
                            </button>
                        </Link>
                        <button
                            className="flex items-center border gap-6 backdrop-blur-sm w-fit rounded-xl py-[6px] px-[15px] transition-colors duration-300 mt-[20px] bg-white text-[#AF001E]"
                        >
                            Download Article <GoDownload className="text-[20px]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            {showDeleteDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <p className="text-lg font-semibold mb-4">Are you sure you want to delete this article?</p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={handleCancelDelete}
                                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminArticle1Card;
