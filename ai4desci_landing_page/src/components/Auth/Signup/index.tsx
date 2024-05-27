"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const { name, email, password, rePassword } = data;

  const registerUser = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("Something went wrong!");
    }
    if (password !== rePassword) {
      return toast.error("Password not match!");
    }

    axios
      .post("/api/register", {
        name,
        email,
        password,
      })
      .then(() => {
        toast.success("User has been registered.");
        router.push("/auth/signin");
        setData({
          name: "",
          email: "",
          password: "",
          rePassword: "",
        });
      })
      .catch(() => toast.error("Something went wrong"));
  };
  return (
    <section className="pt-[120px] lg:pt-[240px]">
      <div className="px-4 xl:container">
        <div className="border-b pb-24 dark:border-[#2E333D]">
          <a>Something here, like prebuild portal</a> 
          {/* create things in modal mode */}
        </div>
      </div>
    </section>
  );
}
