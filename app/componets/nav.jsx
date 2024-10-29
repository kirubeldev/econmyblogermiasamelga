"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import getToken from "../lib/tocken";
import { CiLogout } from "react-icons/ci";
import axios from "axios";
import { useRouter } from "next/navigation";

const Navs = () => {
  const [show, setShow] = useState(false);
  const [token, setToken] = useState(null);


const router = useRouter()
  const handleLogout = async () => {
    try {
        const response = await fetch('http://localhost:3002/logout', {
            method: 'POST',
            credentials: 'include', // Important for cookies to be sent
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        router.push("/admin/login")
    } catch (error) {
        console.error('Logout error:', error);
    }
};

  useEffect(() => {
    const fetchToken = async () => {
      const fetchedToken = await getToken();
      setToken(fetchedToken);
      console.log("Token value:", fetchedToken); // Ensure this shows the token correctly
    };

    fetchToken();
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {/* Mobile Navigation */}
      <div className="lg:hidden bg-white/10 backdrop-blur-md shadow-lg py-4 flex px-5 justify-between items-center w-full md:p-[21px]">
        <div className="flex items-center gap-[10px]">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
          <p className="text-white">Knowledge is Power</p>
        </div>
        <RxHamburgerMenu className="text-white text-3xl" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden bg-white/10 backdrop-blur-md shadow-lg lg:flex justify-between items-start w-full md:p-[21px]">
        <div className="flex justify-between items-start max-w-6xl pl-[100px]">
          <div className="flex items-center justify- w-screen gap-[70px]">
            <div className="flex items-center gap-3">
              <Link href={"/"}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </Link>
              <p className="text-[18px] text-white">Knowledge is Power</p>
            </div>

            <nav className="flex justify-between items-center">
              <ul className="text-white flex gap-10 relative">
                <li className="relative" onClick={handleShow}>
                  <Link
                    className="text-[18px] font-semibold flex items-center gap-4"
                    href="#home"
                    aria-haspopup="true"
                    aria-expanded={show}
                  >
                    Articles <IoIosArrowDown />
                  </Link>
                  {show && (
                    <ul className="absolute left-0 bg-white p-[20px] mt-2 text-black rounded-md space-y-1 shadow-lg z-10 min-w-[224px]">
                      <li>
                        <Link href={"/articles"}>Business and Innovation</Link>
                      </li>
                      <hr />
                      <li>
                        <Link href={"/articles"}>Economy</Link>
                      </li>
                      <hr />
                      <li>
                        <Link href={"/articles"}>Entrepreneur</Link>
                      </li>
                      <hr />
                      <li>
                        <Link href={"/articles"}>Health</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link className="text-[18px] font-semibold" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-[18px] font-semibold" href="/contact">
                    Contact
                  </Link>
                </li>

                {/* Conditionally render subscribers link */}
                {token && (
                  <li>
                    <Link className="text-[18px] font-semibold" href={"/admin/subscribers"}>
                      Subscribers
                    </Link>
                  </li>
                )}
              </ul>

             
            </nav>
            {token && (
              <ul onClick={handleLogout} className="list-none text-white flex items-center  border rounded-md  p-2 gap-2">
<CiLogout  className="text-[24px] cursor-pointer"/>
                  <li>
                    <button onClick={handleLogout} className="text-[18px] font-semibold" href={"/admin/subscribers"}>
                      logout
                    </button>
                  </li>
              </ul>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navs;    