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
        rivian: {
          black: "#121315",
          dark: "#1A1C1E",
          slate: "#24272B",
          stone: "#F5F5F3",
          bone: "#EAEAE6",
          border: "#E0E0DC",
          "border-dark": "#2C3035",
          yellow: "#FFAC00",
          "yellow-hover": "#E59B00",
          forest: "#24332C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        mega: "9999px",
      },
      boxShadow: {
        rivian: "0 1px 3px rgba(0, 0, 0, 0.05), 0 20px 40px -15px rgba(0, 0, 0, 0.08)",
        "rivian-card": "0 4px 20px -2px rgba(18, 19, 21, 0.06)",
        "rivian-nav": "0 2px 20px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
