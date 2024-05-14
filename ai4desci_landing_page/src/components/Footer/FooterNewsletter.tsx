"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || email == "") {
      toast.error("Please enter your email address.");

      return;
    }

    try {
      const res = await axios.post("/api/newsletter", { email });

      if (res.data.status == 400) {
        toast.error(res.data?.detail);
        setEmail("");
      } else {
        toast.success("Thanks for signing up!");
        setEmail("");
      }
    } catch (error: any) {
      toast.error(error?.response?.data);
    }
  };

  return (
    <div className="mb-20">
      <h3 className="mb-9 font-heading text-2xl font-medium text-dark dark:text-white">
        Newsletter
      </h3>
      <p className="mb-6 font-heading text-base text-dark-text">
        Subscribe to receive future updates
      </p>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="pladeholder-opacity-40 w-full rounded border py-3 pl-5 pr-12 text-base text-dark-text outline-none focus:border-primary dark:border-transparent dark:bg-[#2C3443]"
        />
        <button className="absolute right-0 top-0 flex h-full w-12 items-center justify-center border-l text-dark-text dark:border-[#1F2633]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="fill-current"
          >
            <path d="M3.1175 1.17367L18.5025 9.63533C18.5678 9.6713 18.6223 9.72414 18.6602 9.78834C18.6982 9.85255 18.7182 9.92576 18.7182 10.0003C18.7182 10.0749 18.6982 10.1481 18.6602 10.2123C18.6223 10.2765 18.5678 10.3294 18.5025 10.3653L3.1175 18.827C3.05406 18.8619 2.98262 18.8797 2.91023 18.8785C2.83783 18.8774 2.76698 18.8575 2.70465 18.8206C2.64232 18.7838 2.59066 18.7313 2.55478 18.6684C2.51889 18.6056 2.50001 18.5344 2.5 18.462V1.53867C2.50001 1.46626 2.51889 1.39511 2.55478 1.33222C2.59066 1.26934 2.64232 1.21689 2.70465 1.18005C2.76698 1.1432 2.83783 1.12324 2.91023 1.12212C2.98262 1.121 3.05406 1.13877 3.1175 1.17367ZM4.16667 10.8337V16.3478L15.7083 10.0003L4.16667 3.65283V9.167H8.33333V10.8337H4.16667Z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
