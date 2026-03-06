"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

export type TProject = {
  gitClient: string;
  gitServer: string;
  videoDemo: string;
  live: string;
  title: string;
  description: string;
  imgUrl: string;
  tag: string[];
  role?: string;
  status?: string;
  overview?: string;
  responsibilities?: string[];
  impact?: string[];
  challenges?: string[];
  duration?: string;
};

export default function Project({ d }: { d: TProject }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="w-full min-h-[500px] md:min-h-[600px] flex flex-col pb-10 group"
      key={d.title}
    >
      <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <svg
          onClick={() => setIsModalOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6 absolute top-3 right-3 z-30 cursor-pointer hover:scale-110 transition-transform bg-black/20 rounded-full p-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>

        <Image
          src={d.imgUrl}
          alt={d.title}
          fill
          className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
        />

        {/* Commented out the old overlay as requested */}
        {/* <div
          className={`absolute inset-0 bg-white/50 rounded-xl opacity-0 
          ${
            overlay ? "opacity-100" : ""
          } transition-opacity duration-300 flex flex-col items-center justify-center`}
        >
          <div className="flex gap-6">
            ... links ...
          </div>
        </div> */}
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-y-2 w-full min-h-14 py-4">
          {d.tag?.map((t) => (
            <span
              className="mr-2 py-1 px-3 text-black/40 border-black/40 border text-xs rounded-3xl whitespace-nowrap"
              key={t}
            >
              {t}
            </span>
          ))}
        </div>

        <h2 className="text-2xl text-black font-semibold">{d.title}</h2>
        <p className="text-md text-black/90 py-2">
          {d.description}
        </p>
      </div>

      <div className="mt-auto">
        <button
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer inline-flex items-center justify-center gap-2 btn btn-white px-4 shadow-md border border-black/70 rounded-4xl py-1 text-sm mt-5 w-fit"
        >
          View Case Study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <ProjectModal d={d} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
