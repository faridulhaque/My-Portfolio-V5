import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navItems = ["about", "projects", "contribution", "articles", "contact"];

  return (
    <nav className="hidden lg:flex py-4 items-center justify-between relative z-10 w-10/12 mx-auto">
      <Image src="/assets/name-logo.png" alt="logo" width={175} height={60} />

      <ul className="flex gap-10 text-md text-black">
        {navItems.map((n) => (
          <li key={n}>
            <Link
              className="cursor-pointer hover:text-[#5700EF] capitalize"
              href={`#${n}`}
            >
              {n}
            </Link>
          </li>
        ))}
      </ul>

      <button className="cursor-pointer flex items-center gap-1 bg-[#5700EF] px-2 py-2 rounded-md text-white">
        Download Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>
    </nav>
  );
}
