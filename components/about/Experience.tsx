import Image from "next/image";
import React from "react";

function Experience() {
  const experienceData = [
    {
      period: "Jan 2021 – Feb 2022",
      role: "Frontend Developer",
      company: "AIDE Business solution",
      details:
        "Developed and maintained 8+ full-stack projects using Next.js, NestJS, and PostgreSQL. Implemented complex API logic, optimized database queries, and integrated authentication flows. Led the migration of two major apps from REST to a modular service-based structure.",
    },
    {
      period: "Jan 2022 – Apr 2023",
      role: "Frontend Developer",
      company: "AIDE Business solution",
      details:
        "Developed and maintained multiple products with improved UI/UX, built dashboards, automated internal tools, and enhanced system performance across several services.",
    },
    {
      period: "Apr 2023 – Present",
      role: "Full-Stack Developer",
      company: "AIDE Business solution",
      details:
        "Building scalable web apps using Next.js, NestJS, PostgreSQL, Prisma, and microservice-oriented architecture. Improved deployment workflows, CI/CD, caching, and performance tuning across multiple systems.",
    },
  ];

  return (
    <div className="relative h-fit bg-black w-full overflow-hidden pt-10 pb-20">
      <div
        className="absolute h-3/5 w-[125%] top-80 -left-20 bg-[linear-gradient(to_right,rgba(87,0,239,0.50),rgba(87,0,239,0))]
 rotate-20 rounded-full blur-2xl"
      ></div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-white font-semibold">
        My Experience
      </h2>

      <p className="text-center text-sm md:text-md lg:text-lg text-white/50 w-11/12 lg:w-3/5 py-3 mx-auto">
        I have worked on multiple full-stack projects over the last three years
        across three different companies, including a solid two-year role in my
        most recent position.
      </p>

      <div className="relative z-10 h-fit w-11/12 md:w-10/12 mx-auto mt-5 py-5 border-l-2 border-[#D1D1D1] space-y-10">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between relative space-y-4 lg:space-y-0"
          >
            <Image
              className="absolute top-[2.55rem] md:top-8 lg:top-8 -left-[0.38rem]"
              width={10}
              height={10}
              alt=""
              src="/assets/experience/orange-dot.png"
            />

            <div className="w-full lg:w-3/12 pl-6 lg:pl-10 lg:border-r lg:border-[#D1D1D1]">
              <h3 className="text-xs md:text-sm text-white/40">
                {item.period}
              </h3>
              <h2 className="text-white text-lg md:text-xl font-semibold">
                {item.role}
              </h2>
              <h3 className="text-sm text-white/90">({item.company})</h3>
            </div>

            <div className="w-11/12 ml-3 lg:ml-0 lg:w-8/12 bg-[#2E1A56] rounded-md shadow-2xl flex items-center py-4 h-24">
              <p className="mx-5 text-white text-xs md:text-sm leading-5">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
