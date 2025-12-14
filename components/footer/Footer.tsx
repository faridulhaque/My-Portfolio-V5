import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";

export default function Footer() {
  const navItems = ["about", "projects", "contribution", "articles", "contact"];
  return (
    <div id="contact" className="relative h-fit bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,167,167,0.6),transparent_60%)]" />
      </div>

      <div className="pb-10 w-11/12 md:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 mt-20 border-b border-white/50">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            Let&apos;s connect
          </h2>
          <p className="text-sm md:text-md text-white/60 py-2">
            Get in touch with me by filling out this form regarding any inquiry
            you have.
          </p>

          <h3 className="text-white text-xl md:text-2xl font-semibold pt-8 pb-5">
            Get in touch
          </h3>

          <div className="flex items-center h-8 w-full md:w-3/5 justify-between">
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-white/70 rounded-full ml-5" />
              <Link
                target="_blank"
                href="tel:+880160090809234"
                className="text-xs text-white/70 ml-3"
              >
                + 880 1600 523 338
              </Link>
            </div>
            <Image
              className="ml-5"
              src="/assets/footer/arrow.png"
              alt="arrow"
              width={16}
              height={16}
            />
          </div>

          <div className="flex items-center h-8 w-full md:w-3/5 justify-between">
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 bg-white/70 rounded-full ml-5" />
              <Link
                href="mailto:faridmurshed9@gmail.com"
                className="text-xs text-white/70 ml-3 cursor-pointer"
              >
                faridmurshed9@gmail.com
              </Link>
            </div>
            <Image
              className="ml-5"
              src="/assets/footer/arrow.png"
              alt="arrow"
              width={16}
              height={16}
            />
          </div>
        </div>

        <div className="flex flex-col">
          {/* <ul className="hidden lg:flex text-lg text-white/80 w-full h-12 items-center justify-between">
            {navItems.map((n) => (
              <li key={n}>
                <Link
                  className="cursor-pointer capitalize text-sm"
                  href={`#${n}`}
                >
                  {n}
                </Link>
              </li>
            ))}
          </ul> */}

        <ContactForm></ContactForm>

          {/* <ul className="flex lg:hidden justify-between text-sm text-white/80 w-full mt-16">
            {navItems.map((n) => (
              <li key={n}>
                <Link className="cursor-pointer capitalize" href={`#${n}`}>
                  {n}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      </div>

      <div className="h-auto md:h-16 flex flex-col md:flex-row items-center justify-between w-11/12 md:w-10/12 mx-auto py-4 gap-4">
        <div className="text-white/80 text-xs text-center md:text-left">
          © Faridul Haque Murshed {new Date().getFullYear()}. All rights reserved.
        </div>

        <div className="flex items-center justify-center md:justify-end h-full relative z-20">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/faridulhaquemurshed/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-4 mr-3 cursor-pointer"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.8v2.05h.07c.67-1.27 2.3-2.6 4.73-2.6C22.4 8.43 24 11 24 15.25V24h-5v-7.6c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.96-2.9 4v7.74h-5V8.98z" />
            </svg>
          </Link>

          <Link href="https://github.com/faridulhaque" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="size-4 mr-3 cursor-pointer"
            >
              <path d="M12 .5A12 12 0 0 0 0 12.6c0 5.34 3.44 9.86 8.2 11.47.6.12.82-.27.82-.58v-2.1c-3.34.74-4.04-1.63-4.04-1.63-.54-1.4-1.32-1.77-1.32-1.77-1.1-.78.1-.76.1-.76 1.22.09 1.86 1.3 1.86 1.3 1.08 1.9 2.84 1.35 3.54 1.03.1-.78.42-1.35.76-1.66-2.67-.32-5.47-1.4-5.47-6.2 0-1.37.46-2.49 1.22-3.37-.12-.32-.54-1.62.12-3.38 0 0 1.02-.34 3.34 1.3a11.3 11.3 0 0 1 6.08 0c2.32-1.64 3.34-1.3 3.34-1.3.66 1.76.24 3.06.12 3.38.76.88 1.22 2 1.22 3.37 0 4.82-2.8 5.88-5.48 6.2.44.38.82 1.14.82 2.32v3.43c0 .3.22.7.82.58A12.1 12.1 0 0 0 24 12.6 12 12 0 0 0 12 .5z" />
            </svg>
          </Link>
          <Link href="https://medium.com/@faridmurshed11" target="_blank">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="size-4 mr-3 cursor-pointer"
            >
              <title>Medium</title>
              <path d="M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
