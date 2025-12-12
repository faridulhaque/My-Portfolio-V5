import React from "react";

function About() {
  return (
    <div>
      <div id="about" className="h-10 w-full"></div>

      <div className="w-10/12 mx-auto py-20">
        <span className="py-3 text-md text-[#0F0F0F]">(About Me)</span>

        <h2 className="w-full md:w-4/5 lg:w-1/2 overflow-hidden text-4xl md:text-5xl lg:text-6xl text-[#08080C] font-semibold leading-tight">
          About Faridul Haque Murshed
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div>
            <p className="py-6 leading-7 text-[15px] md:text-base text-[#0F0F0F]">
              I’m Faridul Haque Murshed, a full-stack developer specializing in
              Next.js, NestJS, TypeScript, and modern backend tooling. I enjoy
              building fast, clean, and user-focused web applications that solve
              real problems.
              <br />
              <br />I focus on writing maintainable code, staying aligned with
              current technologies, and constantly improving my craft. Outside
              work, I explore new tools, contribute to open source, and refine
              my skills to grow as a developer.
            </p>

            <button className="cursor-pointer flex items-center gap-2 bg-[#5700EF] px-5 py-3 rounded-md text-white mt-4 text-sm md:text-base">
              Let&apos;s Talk
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-0 md:gap-4 w-full items-start">
            <div className="inline-flex flex-col items-center justify-center border-r border-black/40 py-3">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                3+
              </h2>
              <span className="text-sm md:text-base text-black/60 text-center mt-1">
                Years
                <br />
                Experience
              </span>
            </div>

            <div className="inline-flex flex-col items-center justify-center border-r border-black/40 py-3">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                10+
              </h2>
              <span className="text-sm md:text-base text-black/60 text-center mt-1">
                Tech
                <br />
                Stacks
              </span>
            </div>

            <div className="inline-flex flex-col items-center justify-center py-3">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
                9+
              </h2>
              <span className="text-sm md:text-base text-black/60 text-center mt-1">
                Real
                <br />
                Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
