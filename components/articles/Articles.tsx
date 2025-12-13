import Image from "next/image";
import Link from "next/link";
import React from "react";

function Articles() {
  const articles = [
    {
      title: "Inventory Management System",
      description:
        "A full-stack inventory and sales management platform with admin dashboard, reports, and authentication.",
      imgUrl: "/assets/project/inventory.webp",
      url: "",
    },
    {
      title: "Inventory Management System 2",
      description:
        "A full-stack inventory and sales management platform with admin dashboard, reports, and authentication.",
      imgUrl: "/assets/project/inventory.webp",
      url: "",
    },
  ];
  return (
    <div className="w-10/12 mx-auto py-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 h-auto md:h-20">
        <h2 className="w-full md:w-auto overflow-hidden text-4xl md:text-5xl lg:text-6xl text-[#08080C] font-semibold leading-tight">
          Latest Articles
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
        {articles?.map((a) => (
          <div
            className="w-full h-[500px] overflow-hidden relative"
            key={a.title}
          >
            <div className="relative h-3/5 w-full rounded-xl overflow-hidden">
              <Image
                src={a.imgUrl}
                alt={a.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <span className="text-sm text-black/70 py-3 inline-block">
              Dec 3, 2025
            </span>

            <h2 className="text-2xl text-black font-semibold">{a.title}</h2>
            <p className="text-md text-black/90 py-2">{a.description}</p>
            <Link
              href={a.url}
              className="flex items-center btn btn-white px-4 py-2 shadow-md border border-black/70 rounded-4xl bottom-0 absolute text-sm"
            >
              Read More
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
