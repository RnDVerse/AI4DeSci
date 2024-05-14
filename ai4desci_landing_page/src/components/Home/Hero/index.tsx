"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-40 overflow-hidden pb-24 pt-28 sm:pt-36 lg:pb-[120px] lg:pt-[170px]"
    >
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-3 lg:w-1/2">
            <div className="mx-auto mb-12 max-w-[530px] text-center lg:mb-0 lg:ml-0 lg:text-left">
              <span className="mb-8 inline-block rounded-full bg-primary bg-opacity-5 px-5 py-[10px] font-heading text-base text-primary dark:bg-white dark:bg-opacity-10 dark:text-white">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary"></span>
                AI4DeSci
              </span>
              <h1 className="mb-5 font-heading text-2xl font-semibold dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                Integrated Infrastructure for your {" "}
                <Typewriter
                  words={["DeSci Collaborative Cloud", "Science Crowdfunding", "AI4S Application"]}
                  cursor
                  loop={0}
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="mb-12 text-base text-dark-text">
              AI4DeSci (www.AI4DeSci.com) is an ecosystem that is dedicated to continuously building sustainable infrastructure 
              to support AI-empowered open & collaborative decentralized science. The ecosystem mission aims to build infrastructure 
              that accelerate DeSci, to develop use cases of scientific impact, and promote DeSci through actions. 
              The ecosystem aims to reinforce and facilitate both the Ideation and Actions that happen throughout DeSci project lifetime. 
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                <a
                  href="#features"
                  className="inline-flex items-center rounded bg-primary px-6 py-[10px] font-heading text-base text-white hover:bg-opacity-90 md:px-8 md:py-[14px]"
                >
                  Get Started
                  <span className="pl-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center rounded px-8 py-[14px] font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="pr-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current"
                    >
                      <path d="M19.376 12.416L8.777 19.482C8.70171 19.5321 8.61423 19.5608 8.52389 19.5652C8.43355 19.5695 8.34373 19.5492 8.264 19.5065C8.18427 19.4639 8.1176 19.4003 8.07111 19.3228C8.02462 19.2452 8.00005 19.1564 8 19.066V4.934C8.00005 4.84356 8.02462 4.75482 8.07111 4.67724C8.1176 4.59966 8.18427 4.53615 8.264 4.49346C8.34373 4.45077 8.43355 4.43051 8.52389 4.43483C8.61423 4.43915 8.70171 4.46789 8.777 4.518L19.376 11.584C19.4445 11.6297 19.5006 11.6915 19.5395 11.7641C19.5783 11.8367 19.5986 11.9177 19.5986 12C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3085 19.4445 12.3703 19.376 12.416Z" />
                    </svg>
                  </span>
                  How it Work
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInRight relative z-30 mx-auto h-[560px] w-full max-w-[700px] lg:ml-0">
              <div className="absolute right-0 top-0 lg:w-11/12">
                <Image
                  src="/images/hero/ai4desci_image_1.png"
                  alt="hero-image"
                  width={560}
                  height={520}
                />
              </div>
              <div className="absolute bottom-0 left-0 z-10">
                <Image
                  src="/images/hero/ai4desci_image_2.jpeg"
                  alt="hero-image"
                  width={350}
                  height={420}
                />
                <div className="absolute -right-6 -top-6 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
              </div>
              <div className="absolute bottom-0 left-0">
                <svg
                  width="72"
                  height="38"
                  viewBox="0 0 72 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z"
                    fill="#4A6CF7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.0035 11.9726C59.6808 11.6895 57.4524 12.6321 55.1508 14.6049C51.3631 17.8514 44.7908 19.4664 38.8668 14.6196C36.329 12.5432 34.117 12.2149 32.2894 12.5195C30.3972 12.8349 28.8057 13.8437 27.5547 14.6776C25.5734 15.9985 23.3915 17.3866 20.8786 17.7123C18.2847 18.0485 15.515 17.2431 12.3598 14.6138C9.71804 12.4123 7.45748 11.9889 5.72104 12.256C3.94436 12.5294 2.56003 13.5501 1.76341 14.4915C1.40666 14.9131 0.775686 14.9657 0.354079 14.609C-0.0675277 14.2522 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6412 5.41692 10.2793C7.80979 9.91114 10.6326 10.571 13.6402 13.0774C16.485 15.4481 18.7154 15.976 20.6215 15.7289C22.6086 15.4713 24.4266 14.3594 26.4453 13.0136L27 13.8456L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5467C34.383 10.143 37.1711 10.648 40.1333 13.0716C45.1548 17.1801 50.6369 15.8397 53.8492 13.0863C56.3795 10.9176 59.1512 9.61012 62.2455 9.98733C65.3089 10.3608 68.4333 12.357 71.7557 16.1906C72.1174 16.608 72.0723 17.2395 71.655 17.6012C71.2376 17.9629 70.606 17.9178 70.2443 17.5005C67.0668 13.834 64.3571 12.2595 62.0035 11.9726Z"
                    fill="#4A6CF7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.0035 21.8954C59.6808 21.6123 57.4524 22.5548 55.1508 24.5276C51.3631 27.7742 44.7908 29.3892 38.8668 24.5423C36.329 22.4659 34.117 22.1377 32.2894 22.4423C30.3972 22.7576 28.8057 23.7664 27.5547 24.6004C25.5734 25.9213 23.3915 27.3093 20.8786 27.6351C18.2847 27.9713 15.515 27.1659 12.3598 24.5366C9.71804 22.3351 7.45748 21.9117 5.72104 22.1788C3.94436 22.4521 2.56003 23.4728 1.76341 24.4143C1.40666 24.8359 0.775686 24.8885 0.354079 24.5318C-0.0675277 24.175 -0.120109 23.544 0.236635 23.1224C1.27334 21.8972 3.0643 20.564 5.41692 20.2021C7.80979 19.8339 10.6326 20.4938 13.6402 23.0002C16.485 25.3708 18.7154 25.8988 20.6215 25.6517C22.6086 25.3941 24.4266 24.2821 26.4453 22.9363L27 23.7684L26.4453 22.9363C27.6943 22.1036 29.6028 20.8624 31.9606 20.4695C34.383 20.0658 37.1711 20.5708 40.1333 22.9944C45.1548 27.1029 50.6369 25.7624 53.8492 23.0091C56.3795 20.8403 59.1512 19.5329 62.2455 19.9101C65.3089 20.2835 68.4333 22.2798 71.7557 26.1134C72.1174 26.5307 72.0723 27.1623 71.655 27.524C71.2376 27.8857 70.606 27.8406 70.2443 27.4232C67.0668 23.7568 64.3571 22.1823 62.0035 21.8954Z"
                    fill="#4A6CF7"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.697 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0605 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5579C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5745C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3923C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0257 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0362C72.1174 36.4535 72.0723 37.0851 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z"
                    fill="#4A6CF7"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-1/2">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.9"
                    d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z"
                    fill="url(#paint0_angular_300_926)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_300_926"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(60 60) rotate(90) scale(60)"
                    >
                      <stop stopColor="#4A6CF7" />
                      <stop offset="1" stopColor="#111722" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
      <div className="absolute right-0 top-0 -z-10">
        <svg
          width="1356"
          height="860"
          viewBox="0 0 1356 860"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_201_2181)">
            <rect
              x="450.088"
              y="-126.709"
              width="351.515"
              height="944.108"
              transform="rotate(-34.6784 450.088 -126.709)"
              fill="url(#paint0_linear_201_2181)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_201_2181"
              x="0.0878906"
              y="-776.711"
              width="1726.24"
              height="1876.4"
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
                result="effect1_foregroundBlur_201_2181"
              />
            </filter>
            <linearGradient
              id="paint0_linear_201_2181"
              x1="417.412"
              y1="59.4717"
              x2="966.334"
              y2="603.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABBCFF" />
              <stop offset="0.859375" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <svg
          width="1469"
          height="498"
          viewBox="0 0 1469 498"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3" filter="url(#filter0_f_201_2182)">
            <rect
              y="450"
              width="1019"
              height="261"
              fill="url(#paint0_linear_201_2182)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_201_2182"
              x="-450"
              y="0"
              width="1919"
              height="1161"
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
                result="effect1_foregroundBlur_201_2182"
              />
            </filter>
            <linearGradient
              id="paint0_linear_201_2182"
              x1="-94.7239"
              y1="501.47"
              x2="-65.8058"
              y2="802.2"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ABBCFF" />
              <stop offset="0.859375" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
