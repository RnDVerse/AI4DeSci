import Error from "@/components/Error";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Error Page | ${siteName}`,
  description: "This is Error page ",
  // other metadata
};

export default function NotFound() {
  return (
    <>
      <Error />
    </>
  );
}
