import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      heading: "'Lexend', sans-serif",
      body: "'Inter', sans-serif",
    },
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      screens: {
        xs: "500px",
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        primary: "#4A6CF7",
        "dark-text": "#79808A",
        dark: "#111722",
        stroke: "#e5e7eb",
      },
      backgroundImage: {
        "noise-pattern": "url('/images/NoisePattern.svg')",
      },
      dropShadow: {
        light: "drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
