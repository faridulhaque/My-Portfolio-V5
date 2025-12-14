import Image from "next/image";
import Link from "next/link";
import React from "react";

function Articles() {
  const articles = [
    {
      title: "Mystery of useEffect in React: Why We Use It",
      description:
        "A few days ago, I read a LinkedIn post where a recruiter was complaining that, in an interview for web developer interns, when he asked about...",
      imgUrl: "/assets/article/use-effect.webp",
      url: "https://medium.com/@faridmurshed11/mystery-of-useeffect-in-react-why-we-use-itmystery-of-useeffect-in-react-why-we-use-it-d1ca28977ce9",
      date: "Nov 12, 2025",
    },
    {
      title: "The Real Lessons I Learned Building Projects",
      description:
        "I have been working as a Fullstack developer for years. I started as a Frontend developer — if saying explicitly, a React Developer — then...",
      imgUrl: "/assets/article/lessons.webp",
      url: "https://medium.com/@faridmurshed11/from-react-to-nestjs-the-real-lessons-i-learned-building-projects-c3fe91df0a6d",
      date: "Dec 3, 2025",
    },
  ];
  return (
    <div id="articles" className="w-11/12 md:w-10/12 mx-auto py-5 md:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 h-auto md:h-20">
        <h2 className="w-full md:w-auto overflow-hidden text-4xl md:text-5xl lg:text-6xl text-[#08080C] font-semibold leading-tight">
          Latest Articles
        </h2>

        <Link
          target="_blank"
          href="https://medium.com/@faridmurshed11"
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 py-5 md:py-16 lg:py-20 ">
        {articles?.map((a) => (
          <div className="w-full h-fit overflow-hidden relative" key={a.title}>
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden">
              <Image
                src={a.imgUrl}
                alt={a.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <span className="text-sm text-black/70 py-3 inline-block">
              {a.date}
            </span>

            <h2 className="text-2xl text-black font-semibold">{a.title}</h2>
            <p className="text-md text-black/90 py-2">{a.description.slice(0, 100)} ...</p>
            <Link
              href={a.url}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 btn btn-white px-4 shadow-md border border-black/70 rounded-4xl py-1 text-sm mt-5 w-fit"
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
