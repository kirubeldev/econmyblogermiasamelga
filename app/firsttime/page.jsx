"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Modal = ({ message, isError, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`bg-white p-6 rounded shadow-lg ${isError ? 'border-red-500' : 'border-green-500'} border`}>
        <p className="text-center">{message}</p>
        <div className="flex justify-center mt-4">
          <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalMessage("");
    setIsError(false);

    try {
      const response = await axios.post("http://localhost:3002/sendverification");
      setModalMessage(response.data); // Set success message from response
      setIsModalOpen(true);
      router.push("/firsttime/reset")
    } catch (err) {
      console.error(err);
      setModalMessage(err.response?.data || "Failed to send password reset email. Please try again.");
      setIsError(true);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#ECF1F4] pt-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-[#161C2D] font-bold text-[20px]"> Reset page</h1>
        </Link>
       
      </div>
      <div className="bg-[#ECF1F4] h-[95vh] flex items-center justify-center flex-col">
        <div className="mt-[50px] flex items-center justify-center">
          <div className="py-5 px-12 bg-white shadow-md">
            <div className="text-center text-[24px] pb-4 font-semibold">
              <p>HI, Ermyas , you can now Reset password and  first time </p>
            </div>
            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
             
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary mt-[40px] rounded-md bg-red-600 text-white py-[7px] px-[30px]"
                >
                  Reset credentials
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal message={modalMessage} isError={isError} onClose={closeModal} />
      )}
    </div>
  );
};

export default Page;