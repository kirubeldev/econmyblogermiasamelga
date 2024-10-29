"use client";
import axios from 'axios';
import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // State for error message
  const [showError, setShowError] = useState(false); // State to manage error dialog visibility
  const [success, setSuccess] = useState(false); // State to manage success dialog visibility

  const handleSub = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);
    setShowError(false); // Reset error dialog

    try {
      await axios.post("http://localhost:3002/contact", {
        Email: email,
      });
      setSuccess(true); // Show success dialog
      setEmail(""); // Clear input after successful subscription
    } catch (error) {
      setError("Failed to subscribe. Please try again. / may be the email already exists");
      setShowError(true); // Show error dialog
      console.error("Error subscribing:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='flex text-center mx-auto px-5 md:px-0 max-w-6xl mt-[80px] justify-center items-center'>
        <div>
          <p className='font-bold text-[30px] md:text-[48px]'>Subscribe To Get In Touch</p>
          <p className='max-w-[536px]'>Subscribe to stay updated with the latest news, exclusive offers, and valuable insights directly to your inbox.</p>

          <div className="flex items-center justify-between border rounded-2xl mt-[30px] gap-2 px-[12px] bg-white backdrop-blur-sm x-5 md:px-0 max-w-fit md:max-w-[384px] mx-auto">
            <input
              type="text"
              className="py-[7px] px-[12px] outline-none rounded-2xl"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              onClick={handleSub}
              disabled={loading}
              className={`flex items-center gap-6 backdrop-blur-sm rounded-xl py-[7px] px-[15px] ${loading ? 'bg-gray-400' : 'bg-white'}`}
            >
              {loading ? 'Subscribing...' : 'Subscribe'} <MdOutlineArrowOutward className="text-[20px]" />
            </button>
          </div>

          {/* Error Dialog */}
          {showError && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
                <h2 className="text-lg font-bold">Error!</h2>
                <p className="mt-2">{error}</p>
                <button 
                  onClick={() => setShowError(false)} // Close error dialog
                  className="mt-4 bg-[#AF001E] text-white rounded px-4 py-2"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Success Dialog */}
          {success && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto text-center">
                <h2 className="text-lg font-bold">Congratulations!</h2>
                <p className="mt-2">
                  You have successfully subscribed! You will now receive email notifications whenever a new blog post is published.
                </p>
                <button 
                  onClick={() => setSuccess(false)} // Close success dialog
                  className="mt-4 bg-[#32af00] text-white rounded px-4 py-2"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
