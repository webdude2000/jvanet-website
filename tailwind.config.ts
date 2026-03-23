import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0f1c",
        card: "#111827",
        "accent-blue": "#3b82f6",
        "accent-cyan": "#06b6d4",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
