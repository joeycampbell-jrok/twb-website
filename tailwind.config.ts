import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "twb-black": "#0D0D0D",
        "twb-yellow": "#FFE000",
        "twb-red": "#E63946",
        "twb-white": "#F8F9FA",
        "twb-panel": "#1A1A1A",
        "twb-gray": "#2A2A2A",
      },
      fontFamily: {
        bangers: ["var(--font-bangers)", "cursive"],
        comic: ["var(--font-comic-neue)", "Comic Sans MS", "cursive"],
      },
      boxShadow: {
        comic: "4px 4px 0px 0px #000000",
        "comic-yellow": "4px 4px 0px 0px #FFE000",
        "comic-red": "4px 4px 0px 0px #E63946",
        "comic-lg": "6px 6px 0px 0px #000000",
      },
      backgroundImage: {
        "halftone": "radial-gradient(circle, #FFE000 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
