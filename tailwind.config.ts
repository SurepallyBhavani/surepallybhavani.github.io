import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#f8fafc",
        deep: "#05070b",
        teal: "#2dd4bf",
        aqua: "#38bdf8",
        coral: "#fb7185",
        amber: "#fbbf24",
        violet: "#7c3aed",
        mint: "#99f6e4",
        cloud: "#111827",
        paper: "#060a0f",
        moss: "#2dd4bf",
        sage: "#111827",
        clay: "#fb7185",
        gold: "#fbbf24"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(0, 0, 0, 0.32)",
        card: "0 28px 90px rgba(0, 0, 0, 0.38)",
        glow: "0 24px 90px rgba(45, 212, 191, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
