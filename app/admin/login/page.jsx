"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { CiMail } from "react-icons/ci";
import { IoLockClosed } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);  // Clear any previous error

    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include credentials (cookies, sessions)
        body: JSON.stringify({ Email, password }),
      });

      // Check if response status is OK (200)
      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }

      // Check if status code is 200
      if (response.status === 200) {
        console.log("Login successful, redirecting...");
        router.push("/admin/posts");
      } else {
        console.log("Login failed with status:", response.status);
        throw new Error(`Unexpected response status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Login successful:", data);  // Log the successful response

    } catch (error) {
      setError(error.message); // Show error message to user
      console.error("Error during login:", error); // Log error for debugging
    } finally {
      setLoading(false); // Reset loading state after request completes
    }
  };

  return (
    <div className="flex mt-8 items-center justify-center min-h-screen px-4">
      <div className="md:border items-center justify-center max-w-6xl md:mb-0 flex gap-[10px] md:gap-0 flex-col md:flex-row mx-auto w-full max-h-screen">
        {/* Left Section with Image */}
        <div className="relative w-full md:w-3/5 flex items-center justify-center max-h-screen">
          <img src="/loginn.png" alt="Login Illustration" className="object-cover mb-12 w-full lg:h-[100vh]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-white font-semibold text-2xl md:text-3xl">Ready to Share</p>
            <p className="text-white">Log in to start posting your latest articles and ideas.</p>
          </div>
        </div>

        {/* Right Section with Login Form */}
        <form onSubmit={handleLogin} className="h-full border pt-5 md:border-none md:mb-0 md:pb-0 pb-6 px-6 flex flex-col justify-center items-center w-full md:w-2/5">
          <div className="flex flex-col w-fit px-12">
            <p className="text-3xl font-bold">Hello Again!</p>
            <p className="text-xl">Welcome Back</p>
          </div>

          {/* Email Input */}
          <div className="w-full md:py-3 py-1 flex items-center px-3 border-2 rounded-2xl mt-7 gap-6">
            <CiMail className="text-2xl text-zinc-400" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
              type="email"
              placeholder="Email Address"
              className="outline-none flex-1"
              required
            />
          </div>

          {/* Password Input */}
          <div className="w-full md:py-3 py-1 flex items-center px-3 border-2 rounded-2xl mt-7 gap-6">
            <IoLockClosed className="text-2xl text-zinc-400" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="outline-none flex-1"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="mt-5 bg-red-500 text-white py-3 text-lg px-8 rounded-2xl">
            {loading ? "Logging in..." : "Login"}
          </button>


<div className='flex content-end mt-12 underline items-end'>
  <Link href={"/admin/login/forgotpassword"}> 
<p className='text-[13px] text-blue-500 '> 
  forgot Password?
</p>
  </Link>
</div>
          {/* Error Message */}
          {error && <p className="mt-2 text-red-500">{error}</p>}

        </form>
      </div>
    </div>
  );
};

export default Page;
