"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ResetPassword = ({ token }: { token: string }) => {
  const [data, setData] = useState({
    password: "",
  });
  const [error, setError] = useState("");
  const [verified, setVerified] = useState(false);
  const [user, setUser] = useState({
    email: "",
  });

  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(`/api/forget-password/verify-token`, {
          token,
        });

        if (res.status === 200) {
          setUser({
            email: res.data.email,
          });
          setVerified(true);
        }
      } catch (error: any) {
        toast.error(error.response.data);
        router.push("/auth/forget-password");
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (data.password === "") {
      toast.error("Please enter your password.");
      return;
    }

    try {
      const res = await axios.post(`/api/forget-password/update`, {
        email: user?.email,
        password: data.password,
      });

      if (res.status === 200) {
        toast.success(res.data);
        setVerified(true);
        setData({ password: "" });
        router.push("/auth/signin");
      }
    } catch (error: any) {
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
                Update Password
              </h1>

              <p className="text-center text-dark-text md:px-20">
                Enter your new password
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 pb-7 lg:justify-between">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                  className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                />

                <button
                  aria-label="login with email and password"
                  className={`inline-flex items-center justify-center rounded bg-primary px-14 py-[14px] text-sm font-semibold text-white ${
                    error.length > 0 || !data.password
                      ? "bg-gray-600"
                      : "bg-black  "
                  }`}
                  type="submit"
                >
                  Save Password
                </button>

                {error.length > 0 && <p className="text-red-500">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
