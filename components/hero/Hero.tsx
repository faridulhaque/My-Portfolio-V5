import React from "react";
import Navbar from "./Navbar";
import AppBar from "./AppBar";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const items = [
    "html5",
    "css3",
    "tailwindcss",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "nodejs",
    "express",
    "nestjs",
    "prisma",
    "mongodb",
  ];
  return (
    <div className="relative w-full h-screen bg-linear-to-t from-[#C7A9FF] to-[#F5EFFF] overflow-hidden">
      <div className="absolute top-0 left-1/2 w-full h-[150%] -translate-x-1/2 z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0.6)_30%,rgba(255,255,255,0)_70%)]"></div>

      <Navbar />
      <AppBar />

      <div className="w-10/12 md:w-9/12 h-fit py-10 mx-auto right-0 left-0 top-[18%] absolute z-10">
        <div className="w-full relative">
          <h2 className="text-4xl md:text-6xl lg:text-8xl text-black font-extrabold text-center leading-tight relative inline-block mx-auto">
            <span className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 rotate-45 bg-[#FEF3B5] text-[#010101] py-1 px-3 md:px-4 rounded-2xl text-[9px] md:text-xs font-semibold constant-tilt-shake">
              Frontend
            </span>
            I&apos;m Faridul Haque Murshed
            <span className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 rotate-45 bg-[#F8C9C5] text-[#010101] py-1 px-3 md:px-4 rounded-2xl text-[9px] md:text-xs font-semibold constant-tilt-shake">
              Backend
            </span>
          </h2>

          <p className="text-[#0F0F0F] text-center overflow-hidden py-5 text-sm md:text-base leading-relaxed px-2">
            I’m a passionate full-stack developer focused on building modern,
            high-performance web applications. My core strengths are Next.js,
            NestJS, TypeScript, and TypeORM, which I use to create clean,
            scalable solutions across both frontend and backend. I’m also
            comfortable working with Prisma and MongoDB, and I enjoy bringing
            everything together to ship reliable, production-ready products.
          </p>
        </div>

        <div className="w-full h-20 flex items-center justify-center space-x-4 mt-2">
          <Link
            target="_blank"
            href="https://wa.me/8801600523338
"
            className="cursor-pointer flex items-center gap-2 bg-[#5700EF] px-4 py-2 rounded-md text-white"
          >
            Let&apos;s Talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>

          <Link
            href="https://github.com/faridulhaque"
            className="border border-[#0F0F0F] cursor-pointer flex items-center gap-2 bg-white px-4 py-2 rounded-md text-[#0f0f0f]"
          >
            My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="w-10/12 h-10 absolute bottom-40 flex justify-between mx-auto left-0 right-0 ">
        <div className="text-xl font-semibold text-[#0F0F0F]">
          3+ years Experience
        </div>

        <div className="flex justify-end relative z-20 mt-2">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/faridulhaquemurshed/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 mr-3 cursor-pointer"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6C22.4 8.43 24 11 24 15.25V24h-5v-7.6c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.96-2.9 4v7.74h-5V8.98z" />
            </svg>
          </Link>

          <Link href="https://github.com/faridulhaque" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 mr-3 cursor-pointer"
            >
              <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.34 3.44 9.86 8.2 11.47.6.12.82-.27.82-.58v-2.1c-3.34.74-4.04-1.63-4.04-1.63-.54-1.4-1.32-1.77-1.32-1.77-1.1-.78.1-.76.1-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.9 2.84 1.35 3.54 1.03.1-.78.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.46-2.49 1.22-3.37-.12-.32-.54-1.62.12-3.38 0 0 1.02-.34 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.64 3.34-1.3 3.34-1.3.66 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.37 0 4.82-2.8 5.88-5.48 6.2.44.38.82 1.14.82 2.32v3.43c0 .3.22.7.82.58A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5z" />
            </svg>
          </Link>
          <Link href="https://medium.com/@faridmurshed11" target="_blank">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-4 mr-3 cursor-pointer"
            >
              <title>Medium</title>
              <path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="absolute overflow-hidden h-30 bg-white bottom-0">
        <div className="flex animate-slide whitespace-nowrap mt-5">
          {[...items, ...items].map((i, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 mx-10">
              <Image
                width={80}
                height={40}
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${i}/${i}-original.svg`}
                alt={i}
                className="w-12 h-12 cursor-pointer"
              />
              <span className="text-sm">
                {i.charAt(0).toUpperCase() + i.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
