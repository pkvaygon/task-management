import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xlin": "inset 10px 10px 20px 10px rgb(0 0 0 / 0.05)",
      },
      colors: {
        darkbg: "#3F3F46",
        zinc500: "#71717A",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
