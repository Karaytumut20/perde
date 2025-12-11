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
          black: "#111111",      // Tam siyah değil, 'Off-Black'
          offwhite: "#F2F2F2",   // Biraz daha koyu bir kırık beyaz
          gray: "#999999",       // Ara ton
          sage: "#8A9A90",       // Daha soluk, doğal yeşil
          terra: "#C87A65",      // Terracotta
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Fontu Inter yaptık
      },
      letterSpacing: {
        tighter: "-0.04em", // Harfleri birbirine daha çok yaklaştır
        tight: "-0.02em",
      },
      borderRadius: {
        lg: "0px", // Tüm yuvarlaklıkları iptal et (Keskin hatlar)
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
      }
    },
  },
  plugins: [],
};
export default config;