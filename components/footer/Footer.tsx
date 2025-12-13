import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const navItems = ["about", "projects", "contribute", "articles", "contact"];
  return (
    <div className="relative h-fit bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,167,167,0.6),transparent_60%)]" />
      </div>

      <div className="pb-10 w-11/12 md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 mt-20 border-b border-white/50">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            Let&apos;s connect
          </h2>
          <p className="text-sm md:text-md text-white/60 py-2">
            Get in touch with me by filling out this form regarding any inquiry
            you have.
          </p>

          <h3 className="text-white text-xl md:text-2xl font-semibold pt-8 pb-5">
            Get in touch
          </h3>

          <div className="flex items-center h-8 w-full md:w-3/4 justify-between">
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-white/70 rounded-full ml-5" />
              <span className="text-xs text-white/70 ml-3">
                + 880160090809234
              </span>
            </div>
            <Image
              className="ml-5"
              src="/assets/footer/arrow.png"
              alt="arrow"
              width={16}
              height={16}
            />
          </div>

          <div className="flex items-center h-8 w-full md:w-3/4 justify-between">
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-white/70 rounded-full ml-5" />
              <span className="text-xs text-white/70 ml-3">
                faridmurshed9@gmail.com
              </span>
            </div>
            <Image
              className="ml-5"
              src="/assets/footer/arrow.png"
              alt="arrow"
              width={16}
              height={16}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <ul className="hidden lg:flex text-lg text-white/80 w-full h-12 items-center justify-between">
            {navItems.map((n) => (
              <li key={n}>
                <Link
                  className="cursor-pointer capitalize text-sm"
                  href={`#${n}`}
                >
                  {n}
                </Link>
              </li>
            ))}
          </ul>

          <form className="w-full py-10 px-6 md:px-10 bg-black/50 rounded-md mt-6 h-fit">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <input
                className="outline-none rounded-2xl h-10 bg-[#333333] p-3 text-white"
                type="text"
                placeholder="Name"
              />
              <input
                className="outline-none rounded-2xl h-10 bg-[#333333] p-3 text-white"
                type="text"
                placeholder="Email"
              />
              <textarea
                className="md:col-span-2 outline-none rounded-2xl h-24 bg-[#333333] p-3 text-white resize-none"
                placeholder="Your Text"
              />
            </div>

            <button
              type="submit"
              className="text-white/70 bg-[#5700EF] rounded-2xl w-full h-9 mt-5"
            >
              Send
            </button>
          </form>

          <ul className="flex lg:hidden justify-between text-sm text-white/80 w-full mt-16">
            {navItems.map((n) => (
              <li key={n}>
                <Link className="cursor-pointer capitalize" href={`#${n}`}>
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-auto md:h-16 flex flex-col md:flex-row items-center justify-between w-11/12 md:w-10/12 mx-auto py-4 gap-4">
        <div className="text-white/80 text-xs text-center md:text-left">
          © Faridul Haque Murshed 2023. All rights reserved.
        </div>

        <div className="flex items-center justify-center md:justify-end h-full relative z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-4 mr-5 cursor-pointer"
          >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6C22.4 8.43 24 11 24 15.25V24h-5v-7.6c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.96-2.9 4v7.74h-5V8.98z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-4 mr-5 cursor-pointer"
          >
            <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.34 3.44 9.86 8.2 11.47.6.12.82-.27.82-.58v-2.1c-3.34.74-4.04-1.63-4.04-1.63-.54-1.4-1.32-1.77-1.32-1.77-1.1-.78.1-.76.1-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.9 2.84 1.35 3.54 1.03.1-.78.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.46-2.49 1.22-3.37-.12-.32-.54-1.62.12-3.38 0 0 1.02-.34 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.64 3.34-1.3 3.34-1.3.66 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.37 0 4.82-2.8 5.88-5.48 6.2.44.38.82 1.14.82 2.32v3.43c0 .3.22.7.82.58A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-4 cursor-pointer"
          >
            <path d="M2 4.5h3l4.7 10.3L14 4.5h3l-1.6 3.9L21 19.5h-3l-3.6-8.4-3.7 8.4H8L2 4.5z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
