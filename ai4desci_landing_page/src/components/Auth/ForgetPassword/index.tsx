"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const [data, setData] = useState({
    email: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!data.email) {
      toast.error("Please enter your email address.");

      return;
    }

    try {
      const res = await axios.post("/api/forget-password/reset", data);

      if (res.status === 404) {
        toast.error("User not found.");
        return;
      }

      if (res.status === 200) {
        toast.success(res.data);
        setData({ email: "" });
      }

      setData({ email: "" });
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };

  return (
    <section className="pt-[120px] lg:pt-[240px]">
      <div className="px-4 xl:container">
        <div className="border-b pb-24 dark:border-[#2E333D]">
          <div className="mx-auto max-w-[750px] rounded border bg-white px-6 py-10 dark:border-transparent dark:bg-[#1D232D] sm:p-[70px]">
            <div className="mb-8 text-center">
              <h1 className="mb-3 font-heading text-2xl font-medium text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-[40px] xl:leading-tight">
                Forgot Password
              </h1>

              <p className="text-center text-dark-text md:px-20">
                Enter the email address associated with your account and
                we&#39;ll send you a link to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 pb-7 lg:justify-between lg:pb-12">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                />

                <button
                  aria-label="reset password"
                  className="inline-flex items-center justify-center rounded bg-primary px-14 py-[14px] text-sm font-semibold text-white"
                  type="submit"
                >
                  Send Reset Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
