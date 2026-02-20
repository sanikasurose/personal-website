import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hero: {
          bg: "#FCF5EE",
          accent: "#FFC4C4",
        },
        orb: {
          pink: "#EE6983",
          dark: "#850E35",
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        blink: "blink 1s step-end infinite",
        "slide-up": "slideUp 0.7s ease-out both",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
