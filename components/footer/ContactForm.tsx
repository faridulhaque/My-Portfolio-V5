"use client";
import React, { useState } from "react";

function ContactForm() {
  const [res, setRes] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values: { name: string; email: string; message: string } =
      Object.fromEntries(formData) as any;

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      setRes(
        data?.success
          ? "Thanks for messaging. I will reach you soon"
          : "Sorry! Something went wrong. Please try again later."
      );
    } catch (error: any) {
      console.log(error.message);
      setRes("Sorry! Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full py-10 px-6 md:px-10 bg-black/50 rounded-md mt-6 h-fit"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          <input
            className="outline-none rounded-2xl h-10 bg-[#333333] p-3 text-white"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="outline-none rounded-2xl h-10 bg-[#333333] p-3 text-white"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            minLength={10}
            className="md:col-span-2 outline-none rounded-2xl h-24 bg-[#333333] p-3 text-white resize-none"
            placeholder="Your Text"
            required
            name="message"
          />
        </div>

        <button
          type="submit"
          className="text-white/80 bg-[#5700EF] rounded-2xl w-full h-9 mt-5 cursor-pointer"
        >
          Send
        </button>
      </form>

      {res && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl w-11/12 md:w-1/3 p-6 shadow-xl">
            <p className={`"text-black/70 mt-2"`}>
              Thanks for sending message. I wil reach you soon.
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setRes("")}
                className="px-4 py-2 text-sm rounded-md border border-black/30 cursor-pointer"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
