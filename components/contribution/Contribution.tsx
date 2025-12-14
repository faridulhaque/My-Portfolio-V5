import Link from "next/link";
import React from "react";

function Contribution() {
  const resources = [
    {
      url: "https://nurui.vercel.app/",
      title: "Nur/ui",
      description: "Contributed UI and UX improvements to the project.",
      tags: ["UI", "animation", "css"],
    },
    {
      url: "https://zenui.net/",
      title: "ZenUI Library",
      description: "Added a new animated feature to the library.",
      tags: ["TypeScript", "React", "Tailwind"],
    },
  ];

  return (
    <div id="contribution" className="bg-[#F8F5FE] py-10">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-black font-semibold">
          Open Source Contribution
        </h2>

        <p className="text-center text-sm md:text-md lg:text-lg text-black/50 w-11/12 lg:w-3/5 py-3 mx-auto">
          Recently started contributing to open-source projects, focusing on
          small improvements and learning through real-world codebases.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 py-5 md:py-15 lg:py-20">
          {resources?.map((r) => (
            <div
              className="relative w-full h-64 pb-1 md:pb-0 md:h-96 overflow-hidden bg-black rounded-xl flex items-center justify-center"
              key={r.url}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,167,167,0.6),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,136,255,0.6),transparent_60%)]" />

              <div className="h-11/12 w-11/12 md:h-4/5 md:w-4/5 relative">
                <div className="flex justify-between w-full h-12 items-center">
                  <h3 className="text-white font-semibold text-3xl">
                    {r.title}
                  </h3>
                  <Link
                    target="_blank"
                    className="cursor-pointer relative z-10"
                    href={r.url}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6 text-white cursor-pointer"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.34 3.44 9.86 8.2 11.47.6.12.82-.27.82-.58v-2.1c-3.34.74-4.04-1.63-4.04-1.63-.54-1.4-1.32-1.77-1.32-1.77-1.1-.78.1-.76.1-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.9 2.84 1.35 3.54 1.03.1-.78.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.46-2.49 1.22-3.37-.12-.32-.54-1.62.12-3.38 0 0 1.02-.34 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.64 3.34-1.3 3.34-1.3.66 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.37 0 4.82-2.8 5.88-5.48 6.2.44.38.82 1.14.82 2.32v3.43c0 .3.22.7.82.58A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5z" />
                    </svg>
                  </Link>
                </div>
                <p className="leading-5 text-white/60 py-3 w-11/12">
                  {r.description}
                </p>
                <div className="flex items-center h-14 w-full">
                  {r.tags?.map((t) => (
                    <span
                      className="mr-2 py-1 px-2 text-white/60 border-white/40 border text-xs rounded-3xl"
                      key={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  target="_blank"
                  href={r.url}
                  className="absolute z-10 bottom-0 py-1 md:py-3 w-full rounded-md shadow-md text-white bg-white/60 cursor-pointer flex items-center justify-center"
                >
                  View On Github
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6 text-white cursor-pointer ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.34 3.44 9.86 8.2 11.47.6.12.82-.27.82-.58v-2.1c-3.34.74-4.04-1.63-4.04-1.63-.54-1.4-1.32-1.77-1.32-1.77-1.1-.78.1-.76.1-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.9 2.84 1.35 3.54 1.03.1-.78.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.46-2.49 1.22-3.37-.12-.32-.54-1.62.12-3.38 0 0 1.02-.34 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.64 3.34-1.3 3.34-1.3.66 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.37 0 4.82-2.8 5.88-5.48 6.2.44.38.82 1.14.82 2.32v3.43c0 .3.22.7.82.58A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contribution;
