import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        autex: {
          black: "#111111",      // Orijinal Siyah
          offwhite: "#F4F4F4",   // Orijinal Kırık Beyaz
          gray: "#878787",       // Orijinal Gri
          sage: "#8FA395",       // Sage Green (Vurgu)
          terra: "#C27C68",      // Terracotta
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em", // Autex tarzı sıkı harfler
      },
      borderRadius: {
        lg: "0px", // Köşeleri keskinleştiriyoruz (Autex stili)
        xl: "0px",
        "2xl": "0px",
      }
    },
  },
  plugins: [],
};
export default config;
