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
      live: "",
      title: "Window Seat",
      description:
        "A mobile application connecting travelers with local guides, where I led and built most of the backend system.",
      imgUrl: "/assets/project/window-seat.webp",
      tag: ["NestJS", "PostgreSQL", "TypeORM", "JWT", "Razorpay"],

      role: "Backend Developer (90% ownership)",

      status:
        "Previously live on Google Play Store for 3 months (early-stage production). Later unpublished due to business closure.",

      overview:
        "Designed and developed the core backend system powering a travel app that allowed users to search and directly connect with local guides.",

      responsibilities: [
        "Designed complete database schema using PostgreSQL",
        "Architected backend structure using NestJS",
        "Built RESTful APIs for user registration and authentication (JWT)",
        "Implemented guide search and profile management APIs",
        "Developed direct contact communication endpoints",
        "Integrated Razorpay payment gateway",
        "Handled validation, security, and API optimization",
      ],

      impact: [
        "Supported early-stage production users (~100 users)",
        "Built scalable backend foundation for mobile app launch",
      ],

      duration: "3 months (Production phase)",
    },
    {
      gitClient: "https://github.com/faridulhaque/Heaven-Chat-FE",
      gitServer: "https://github.com/faridulhaque/Heaven-Chat-BE",
      videoDemo: "",
      live: "https://heaven-chat-fe.vercel.app/",
      title: "Heaven Chat",
      description:
        "A real-time messaging and WebRTC calling application with online presence tracking and AI assistant integration.",
      imgUrl: "/assets/project/chat.webp",
      tag: [
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Socket.IO",
        "WebRTC",
        "TypeORM",
        "AI",
      ],

      role: "Full-Stack Developer (Solo Project)",

      status: "Live",

      overview:
        "A real-time communication platform built from scratch featuring WebSocket-based messaging, WebRTC peer-to-peer calling, presence tracking, and AI-powered assistance.",

      responsibilities: [
        "Designed PostgreSQL database schema using TypeORM",
        "Architected backend using NestJS with WebSocket gateways",
        "Implemented real-time messaging using Socket.IO",
        "Built peer-to-peer audio calling using WebRTC signaling via Socket.IO",
        "Developed online presence tracking system",
        "Integrated Google OAuth authentication",
        "Integrated AI assistant using OpenRouter API",
        "Built responsive frontend with Next.js and Tailwind CSS",
        "Deployed backend on Railway (planning migration to Render) and frontend on Vercel",
      ],

      challenges: [
        "Managing WebRTC signaling and peer connection lifecycle",
        "Synchronizing real-time presence updates across clients",
        "Handling socket reconnections and edge cases",
        "Securing authentication flow across REST and WebSocket layers",
      ],

      impact: [
        "Demonstrates real-time system architecture knowledge",
        "Shows understanding of WebRTC signaling and socket-based communication",
        "Showcases full-stack ownership from database to deployment",
      ],
    },

    {
      gitClient: "https://github.com/faridulhaque/Taskflow-FE",
      gitServer: "https://github.com/faridulhaque/Taskflow-BE",
      videoDemo: "https://www.loom.com/share/2cf921599b7c4f37af09c2c34bbfd582",
      live: "https://taskflow-fe-five.vercel.app/",
      title: "Task Flow",
      description:
        "A full-stack task management application featuring secure authentication, CRUD operations, and email-based password recovery.",
      imgUrl: "/assets/project/todo.webp",
      tag: ["Next.js", "Express.js", "MongoDB", "JWT", "Firebase", "Tailwind"],

      role: "Full-Stack Developer (Solo Project)",

      status: "Live",

      overview:
        "A complete task management system built from scratch to demonstrate authentication flows, protected APIs, and scalable backend architecture.",

      responsibilities: [
        "Designed MongoDB schema and structured backend architecture",
        "Built RESTful APIs using Express.js",
        "Implemented JWT-based authentication system",
        "Integrated Firebase for Google OAuth login",
        "Developed password reset flow using Mailjet",
        "Built responsive frontend using Next.js and Tailwind CSS",
        "Connected frontend with protected backend APIs",
        "Deployed backend on Railway (migrating to Render) and frontend on Vercel",
      ],

      challenges: [
        "Handling secure authentication flow across JWT and Firebase",
        "Managing email reset token validation and expiration",
        "Coordinating frontend-backend communication securely",
      ],

      impact: [
        "Demonstrates complete authentication lifecycle implementation",
        "Shows ability to architect and deploy full-stack applications independently",
      ],
    },
    {
      gitClient: "https://github.com/faridulhaque/The-Coffee",
      gitServer: "",
      videoDemo: "",
      live: "https://the-coffee-three.vercel.app/",
      title: "The Coffee",
      description:
        "A responsive coffee shop showcase website built with Next.js and raw CSS, focusing on UI structure and smooth scroll animations.",
      imgUrl: "/assets/project/coffee.webp",
      tag: ["Next.js", "TypeScript", "CSS", "AOS"],

      role: "Frontend Developer",

      status: "Personal project (Live)",

      overview:
        "A simple, elegant multi-language showcase site inspired by modern coffee shop designs, built to practice UI structuring and animation implementation.",

      responsibilities: [
        "Built fully responsive layout using raw CSS (no UI frameworks)",
        "Implemented hardcoded multi-language toggle system",
        "Integrated AOS for smooth scroll-based animations",
        "Structured reusable React components",
        "Organized clean folder architecture",
      ],

      challenges: [
        "Managing layout responsiveness without utility frameworks",
        "Handling language toggle state manually",
      ],

      impact: [
        "Strengthened frontend fundamentals (layout, CSS structuring)",
        "Improved understanding of component reusability",
      ],
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
