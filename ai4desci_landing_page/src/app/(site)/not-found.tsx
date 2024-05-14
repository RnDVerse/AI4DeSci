import Error from "@/components/Error";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `File Missing | ${siteName}`,
  description: "AI4DeSci is still a bit faulty eigh...",
  // other metadata
};

export default function NotFound() {
  return (
    <>
      <Error />
    </>
  );
}
