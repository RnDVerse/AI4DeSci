"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import { testimonialData } from "@/static-data/testimonial-data";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleTestimonial from "./SingleTestimonial";

export default function Testimonials() {
  return (
    <section id="testimonial" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        <SectionTitle
          mainTitle="How it Works"
          title="Learn how the AI4DeSci can work to your benefit"
          paragraph="We help Researchers and Entrepreur in developing their own AI-empowered infrastructure for DeSci collaboration and Science Crowdsourcing"
        />

        <div className="w-full px-4">
          <div className="relative z-10 overflow-hidden rounded bg-cover bg-center px-10 pb-28 pt-[60px] drop-shadow-light dark:drop-shadow-none sm:px-14 md:p-[70px] md:pb-28 lg:pb-[70px]">
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
            <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
              <svg
                width="1174"
                height="560"
                viewBox="0 0 1174 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4" filter="url(#filter0_f_41_257)">
                  <rect
                    x="450.531"
                    y="279"
                    width="272.933"
                    height="328.051"
                    fill="url(#paint0_linear_41_257)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_41_257"
                    x="0.531494"
                    y="-171"
                    width="1172.93"
                    height="1228.05"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="225"
                      result="effect1_foregroundBlur_41_257"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_41_257"
                    x1="425.16"
                    y1="343.693"
                    x2="568.181"
                    y2="660.639"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ABBCFF" />
                    <stop offset="0.859375" stopColor="#32A1B0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <Swiper
              slidesPerView={1}
              modules={[Autoplay]}
              // spaceBetween={64}
              // loop={true}
              // speed={5000}
              // noSwiping={true}
              // autoplay={{
              //   delay: 0,
              //   disableOnInteraction: true,
              // }}
            >
              {testimonialData.map((testimonial) => (
                <SwiperSlide key={testimonial?.id}>
                  <iframe 
                    width="1120" 
                    height="630" 
                    src="https://www.youtube.com/embed/GEZJPqxpQLc?si=l8bqu22F-N7ipWKl" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
