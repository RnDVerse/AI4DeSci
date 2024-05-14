import Support from "@/components/Support";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Support Page | ${siteName}`,
  description: "This is Support page for Go Next.js",
  // other metadata
};

export default function SupportPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Support />
        </div>
      </section>
    </>
  );
}
