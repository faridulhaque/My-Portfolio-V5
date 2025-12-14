"use client";
import React, { useEffect, useState } from "react";

function AppBar() {
  const [openBar, setOpenBar] = useState(false);
  const navItems = ["about", "projects", "contribution", "articles", "contact"];

  useEffect(() => {
    if (!openBar) {
      // setModalInfo(null)
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [openBar]);

  return (
    <div className="lg:hidden w-full h-20 flex items-center relative z-50">
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
        className={`fixed left-0 top-20 w-full h-[calc(100vh-80px)] 
  backdrop-blur-xl bg-white/30  
  shadow-xl border-t border-white/20 
  z-99999 transition-transform duration-500 
  flex flex-col justify-between
  ${openBar ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="w-full flex flex-col mt-6 space-y-6 px-6">
          {navItems?.map((n) => (
            <a
              key={n}
              onClick={() => setOpenBar(false)}
              href={`#${n}`}
              className="text-black text-2xl font-semibold cursor-pointer hover:text-[#5700EF] transition"
            >
              {n}
            </a>
          ))}
        </ul>

        <div className="w-full px-6 mb-8">
          <button className="w-full bg-[#5700EF] text-white py-3 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold cursor-pointer hover:bg-[#4500c5] transition shadow-lg">
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
