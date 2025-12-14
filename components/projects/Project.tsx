"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type TProject = {
  gitClient: string;
  gitServer: string;
  videoDemo: string;
  live: string;
  title: string;
  description: string;
  imgUrl: string;
  tag: string[];
};

export default function Project({ d }: { d: TProject }) {
  const [overlay, setOverlay] = useState(false);
  return (
    <div
      className="w-full min-h-[400px] md:h-[500px]  pb-5 overflow-hidden group"
      key={d.title}
    >
      <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
        <svg
          onClick={() => setOverlay(!overlay)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-6 absolute top-3 right-3 z-30 cursor-pointer"
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
          className="object-cover rounded-xl"
        />

        <div
          className={`absolute inset-0 bg-white/50 rounded-xl opacity-0 
${
  overlay ? "opacity-100" : ""
} transition-opacity duration-300 flex flex-col items-center justify-center`}
        >
          <div className="flex gap-6">
            {d.gitClient && (
              <div className="flex flex-col items-center cursor-pointer">
                <Link target="_blank" href={d.gitClient}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.34 3.44 9.86 8.2 11.47.6.12.82-.27.82-.58v-2.1c-3.34.74-4.04-1.63-4.04-1.63-.54-1.4-1.32-1.77-1.32-1.77-1.1-.78.1-.76.1-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.9 2.84 1.35 3.54 1.03.1-.78.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.46-2.49 1.22-3.37-.12-.32-.54-1.62.12-3.38 0 0 1.02-.34 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.64 3.34-1.3 3.34-1.3.66 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.37 0 4.82-2.8 5.88-5.48 6.2.44.38.82 1.14.82 2.32v3.43c0 .3.22.7.82.58A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5z" />
                  </svg>
                </Link>
                <span className="text-xs text-black mt-1">Client</span>
              </div>
            )}

            {d.gitServer && (
              <div className="flex flex-col items-center cursor-pointer">
                <Link target="_blank" href={d.gitServer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.34 3.44 9.86 8.2 11.47.6.12.82-.27.82-.58v-2.1c-3.34.74-4.04-1.63-4.04-1.63-.54-1.4-1.32-1.77-1.32-1.77-1.1-.78.1-.76.1-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.9 2.84 1.35 3.54 1.03.1-.78.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.46-2.49 1.22-3.37-.12-.32-.54-1.62.12-3.38 0 0 1.02-.34 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.64 3.34-1.3 3.34-1.3.66 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.37 0 4.82-2.8 5.88-5.48 6.2.44.38.82 1.14.82 2.32v3.43c0 .3.22.7.82.58A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5z" />
                  </svg>
                </Link>
                <span className="text-xs text-black mt-1">Server</span>
              </div>
            )}

            {d.live && (
              <div className="flex flex-col items-center cursor-pointer">
                <Link target="_blank" href={d.live}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zm0-18c2.5 2.33 4 5.5 4 9s-1.5 6.67-4 9m0-18c-2.5 2.33-4 5.5-4 9s1.5 6.67 4 9m-7-9h14"
                    />
                  </svg>
                </Link>

                <span className="text-xs text-black mt-1">Live</span>
              </div>
            )}

            {d.videoDemo && (
              <div className="flex flex-col items-center cursor-pointer">
                <Link target="_blank" href={d.videoDemo}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4v16h18V4H3zm3 4h12v8H6V8z"
                    />
                  </svg>
                </Link>
                <span className="text-xs text-black mt-1">Watch</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center w-full h-14">
        {d.tag?.map((t) => (
          <span
            className="mr-2 py-1 px-2 text-black/40 border-black/40 border text-xs rounded-3xl"
            key={t}
          >
            {t}
          </span>
        ))}
      </div>

      <h2 className="text-2xl text-black font-semibold">{d.title}</h2>
      <p className="text-md text-black/90 py-2">{d.description}</p>
    </div>
  );
}
