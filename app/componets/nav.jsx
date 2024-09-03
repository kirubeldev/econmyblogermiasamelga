"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navs = () => {
  const [show, setShow] = useState(false);

  const handelshow = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="bg-white/10 backdrop-blur-md shadow-lg flex justify-between items-center w-full p-[21px]">
        <div className="flex justify-between items-center max-w-6xl mx-auto ">
          <div className="flex items-center gap-[70px]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="size-[40px]"
            />
            <nav>
              <ul className="text-white flex gap-10 relative ">
                <li className="relative" onClick={handelshow}>
                  <Link
                    className="text-[18px] font-semibold flex items-center gap-4"
                    href="#home"
                  >
                    Articles <IoIosArrowDown />
                  </Link>
                  {show && (
                    <ul className="absolute left-0 bg-white p-[20px] mt-2 text-black rounded-md space-y-1 shadow-lg z-10 min-w-[224px]">
                      <li>
                        <Link href={""}>Business and innovation</Link>
                      </li>
                      <hr />
                      <li>
                        <Link href={""}>Economy</Link>
                      </li>
                      <hr />
                      <li>
                        <Link href={""}>Entrepreneur</Link>
                      </li>
                      <hr />
                      <li>
                        <Link href={""}>Health</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link className="text-[18px] font-semibold" href="#about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-[18px] font-semibold" href="#services">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-[40px] max-w-6xl mx-auto">
          <div className="flex items-center rounded-md gap-2 px-[12px] bg-white backdrop-blur-sm">
            <input
              type="text"
              className="py-[7px] px-[12px] outline-none rounded-md"
              placeholder="search"
            />
            <IoSearch className="text-[20px]" />
          </div>
          <button className="flex items-center gap-6 bg-white backdrop-blur-sm rounded-xl py-[7px] px-[15px]">
            Login <MdOutlineArrowOutward className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navs;
