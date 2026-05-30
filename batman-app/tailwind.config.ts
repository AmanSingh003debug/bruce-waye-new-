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
        bat: {
          black: "#0a0a0a",
          dark: "#111111",
          gray: "#1a1a1a",
          steel: "#2a2a2a",
          yellow: "#f5c518",
          gold: "#d4a017",
          smoke: "#888888",
          light: "#cccccc",
        },
      },
      fontFamily: {
        batman: ["Georgia", "serif"],
        mono: ["Courier New", "monospace"],
      },
      animation: {
        "flicker": "flicker 3s infinite",
        "bat-signal": "bat-signal 4s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 1s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "75%": { opacity: "0.95" },
        },
        "bat-signal": {
          "0%, 100%": { transform: "rotate(-5deg)", opacity: "0.8" },
          "50%": { transform: "rotate(5deg)", opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(245,197,24,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(245,197,24,0.7)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
