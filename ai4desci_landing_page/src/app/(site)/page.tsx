import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Brands from "@/components/Brands";
import CallToAction from "@/components/Home/CallToAction";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import Team from "@/components/Team";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `AI4DeSci | ${siteName}`,
  description: "Sustainable Infrastructure for AI-Empowered Open and Collaborative Decentralized Science",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Team />
      <Portfolio />
      <Testimonials />
      <Brands />
      <Pricing />
      <HomeBlogSection />
      <Support />
      <CallToAction />
    </>
  );
}
