import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      gitClient: "",
      gitServer: "",
      videoDemo: "",
      live: "https://play.google.com/store/apps/details?id=com.app.windowseat",
      title: "Window Seat",
      description:
        "An Android and iOS app that helps travelers find local guides, where I built most of the backend as part of the team.",
      imgUrl: "/assets/project/window-seat.webp",
      tag: ["NestJS", "TypeORM", "RazorPay"],
    },
    {
      gitClient: "https://github.com/faridulhaque/The-Coffee",
      gitServer: "",
      videoDemo: "",
      live: "https://the-coffee-three.vercel.app/",
      title: "The Coffee",
      description:
        "A frontend-only coffee shop project built with raw CSS, featuring smooth animations and a visually appealing design.",
      imgUrl: "/assets/project/coffee.webp",
      tag: ["Next.js", "TypeScript", "CSS"],
    },
    {
      gitClient: "https://github.com/faridulhaque/Taskflow-FE",
      gitServer: "https://github.com/faridulhaque/Taskflow-BE",
      videoDemo: "",
      live: "https://taskflow-fe-five.vercel.app/",
      title: "Task Flow",
      description:
        "A full-stack project featuring complete CRUD operations built with Next.js and NestJS.",
      imgUrl: "/assets/project/todo.webp",
      tag: ["Next.js", "Tailwind", "ExpressJs", "MongoDB"],
    },
    {
      gitClient: "https://github.com/faridulhaque/Heaven-Chat-FE",
      gitServer: "https://github.com/faridulhaque/Heaven-Chat-BE",
      videoDemo: "",
      live: "https://heaven-chat-fe.vercel.app/",
      title: "Heaven Chat",
      description:
        "A real-time communication app featuring peer-to-peer chat, calling, and AI integration, built with Next.js, NestJS, and Socket.IO.",
      imgUrl: "/assets/project/chat.webp",
      tag: ["Next.js", "Tailwind", "NestJs", "Socket.io"],
    },
  ];

  return (
    <div
      id="projects"
      className="w-11/12 md:w-10/12 py-10 mx-auto md:py-15 lg:py-20"
    >
      <span className="py-3 text-md text-[#0F0F0F]">(My Projects)</span>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 h-auto md:h-20">
        <h2 className="w-full md:w-auto overflow-hidden text-4xl md:text-5xl lg:text-6xl text-[#08080C] font-semibold leading-tight">
          Featured Projects
        </h2>

        <Link
          href="https://github.com/faridulhaque"
          target="_blank"
          className="self-start md:self-center border border-[#0F0F0F] cursor-pointer flex items-center gap-2 bg-white px-4 py-2 rounded-md text-[#0f0f0f]"
        >
          View More
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 md:gap-y-20 py-10 ">
        {projects?.map((d) => (
          <Project key={d.title} d={d}></Project>
        ))}
      </div>
    </div>
  );
}

export default Projects;
