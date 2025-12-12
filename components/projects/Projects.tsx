import Image from "next/image";
import React from "react";

function Projects() {
  const projects = [
    {
      gitClient: "https://github.com/farid/client-repo",
      gitServer: "https://github.com/farid/server-repo",
      videoDemo: "https://youtu.be/demo1",
      live: "https://project-one.live",
      title: "Inventory Management System",
      description:
        "A full-stack inventory and sales management platform with admin dashboard, reports, and authentication.",
      imgUrl: "/assets/project/inventory.webp",
      tag: ["Next.js", "NestJS", "MongoDB"],
    },
    {
      gitClient: "https://github.com/farid/client-repo2",
      gitServer: "https://github.com/farid/server-repo2",
      videoDemo: "https://youtu.be/demo2",
      live: "https://project-two.live",
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce platform with cart, orders, payments, and role-based admin panel.",
      imgUrl: "/assets/project/inventory.webp",
      tag: ["Next.js", "Prisma", "Stripe"],
    },
    {
      gitClient: "https://github.com/farid/client-repo3",
      gitServer: "https://github.com/farid/server-repo3",
      videoDemo: "https://youtu.be/demo3",
      live: "https://project-three.live",
      title: "Task Management App",
      description:
        "A productivity tool featuring real-time sync, drag-and-drop tasks, and team collaboration.",
      imgUrl: "/assets/project/inventory.webp",
      tag: ["Next.js", "NestJS", "PostgreSQL"],
    },
    {
      gitClient: "https://github.com/farid/client-repo4",
      gitServer: "https://github.com/farid/server-repo4",
      videoDemo: "https://youtu.be/demo4",
      live: "https://project-four.live",
      title: "Portfolio Generator",
      description:
        "A customizable developer portfolio generator with themes, animations, and SEO-optimized pages.",
      imgUrl: "/assets/project/inventory.webp",
      tag: ["Next.js", "Tailwind", "TypeScript"],
    },
  ];

  return (
    <div className="w-10/12 mx-auto py-20">
      <span className="py-3 text-md text-[#0F0F0F]">(My Projects)</span>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 h-auto md:h-20">
        <h2 className="w-full md:w-auto overflow-hidden text-4xl md:text-5xl lg:text-6xl text-[#08080C] font-semibold leading-tight">
          Featured Projects
        </h2>

        <button className="self-start md:self-center border border-[#0F0F0F] cursor-pointer flex items-center gap-2 bg-white px-4 py-2 rounded-md text-[#0f0f0f]">
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
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 py-20 ">
        {projects?.map((d) => (
          <div className="w-full h-[500px] overflow-hidden group" key={d.title}>
            <div className="relative h-3/5 w-full rounded-xl overflow-hidden">
              <Image
                src={d.imgUrl}
                alt={d.title}
                fill
                className="object-cover rounded-xl"
              />

              <div
                className="absolute inset-0 bg-white/50 rounded-xl opacity-0 
group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center"
              >
                <div className="flex gap-6">
                  <div className="flex flex-col items-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.34 3.44 9.86 8.2 11.47.6.12.82-.27.82-.58v-2.1c-3.34.74-4.04-1.63-4.04-1.63-.54-1.4-1.32-1.77-1.32-1.77-1.1-.78.1-.76.1-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.9 2.84 1.35 3.54 1.03.1-.78.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.46-2.49 1.22-3.37-.12-.32-.54-1.62.12-3.38 0 0 1.02-.34 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.64 3.34-1.3 3.34-1.3.66 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.37 0 4.82-2.8 5.88-5.48 6.2.44.38.82 1.14.82 2.32v3.43c0 .3.22.7.82.58A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5z" />
                    </svg>
                    <span className="text-xs text-black mt-1">Client</span>
                  </div>

                  <div className="flex flex-col items-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.34 3.44 9.86 8.2 11.47.6.12.82-.27.82-.58v-2.1c-3.34.74-4.04-1.63-4.04-1.63-.54-1.4-1.32-1.77-1.32-1.77-1.1-.78.1-.76.1-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.9 2.84 1.35 3.54 1.03.1-.78.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.46-2.49 1.22-3.37-.12-.32-.54-1.62.12-3.38 0 0 1.02-.34 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.64 3.34-1.3 3.34-1.3.66 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.37 0 4.82-2.8 5.88-5.48 6.2.44.38.82 1.14.82 2.32v3.43c0 .3.22.7.82.58A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5z" />
                    </svg>
                    <span className="text-xs text-black mt-1">Server</span>
                  </div>

                  <div className="flex flex-col items-center cursor-pointer">
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

                    <span className="text-xs text-black mt-1">Live</span>
                  </div>

                  <div className="flex flex-col items-center cursor-pointer">
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
                    <span className="text-xs text-black mt-1">Watch</span>
                  </div>
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
        ))}
      </div>
    </div>
  );
}

export default Projects;
