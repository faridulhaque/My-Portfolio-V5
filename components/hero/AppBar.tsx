"use client";
import React, { useState } from "react";

function AppBar() {
  const [openBar, setOpenBar] = useState(false);

  console.log(openBar);

  return (
    <div className="lg:hidden w-full h-[80px] flex items-center relative z-10">
      <span
        onClick={() => setOpenBar(!openBar)}
        className="ml-3 rounded-lg p-2 flex items-center justify-center"
      >
        {openBar ? (
          <svg
          
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#5700EF"
            className="size-7 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#5700EF"
            className="size-7 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        )}
      </span>

      <div
        className={`w-full h-[calc(100vh-80px)] 
      backdrop-blur-lg bg-white/10 
      absolute top-[80px] z-20 
      transition-all duration-500 
      ${openBar ? "left-0" : "-left-full"}`}
      >
        <ul className="w-full flex flex-col mt-6 space-y-5 px-6">
          <a
            onClick={() => setOpenBar(false)}
            href="#about"
            className="text-black text-xl font-medium cursor-pointer"
          >
            About
          </a>

          <a
            onClick={() => setOpenBar(false)}
            href="#projects"
            className="text-black text-xl font-medium cursor-pointer"
          >
            Projects
          </a>

          <a
            onClick={() => setOpenBar(false)}
            href="#articles"
            className="text-black text-xl font-medium cursor-pointer"
          >
            Articles
          </a>

          <a
            onClick={() => setOpenBar(false)}
            href="#contribute"
            className="text-black text-xl font-medium cursor-pointer"
          >
            Contribute
          </a>

          <a
            onClick={() => setOpenBar(false)}
            href="#contact"
            className="text-black text-xl font-medium cursor-pointer"
          >
            Contact
          </a>
        </ul>

        <div className="w-full px-6 mt-10">
          <button className="w-full bg-[#5700EF] text-white py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-medium cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
