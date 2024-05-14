import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Signin Page | ${siteName}`,
  description: "This is Signin page description",
};

export default function SigninPage() {
  return (
    <>
      <Signin />
    </>
  );
}
