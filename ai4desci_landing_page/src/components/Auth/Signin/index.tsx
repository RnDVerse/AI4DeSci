"use client";
import { signIn } from "next-auth/react";
import { SignIn } from "@clerk/nextjs";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Signin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const loginUser = async (e: any) => {
    e.preventDefault();

    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Logged in successfully");
        router.push("/auth/success");
      }
    });
  };

  return (
    <section className="pt-[120px] lg:pt-[240px]">
      <div className="px-4 xl:container">
        <div className="border-b pb-20 dark:border-[#2E333D] lg:pb-[130px]">
        <a>Something here, like prebuild portal</a>
        {/* create things in modal mode */}
        </div>
      </div>
    </section>
  );
}
