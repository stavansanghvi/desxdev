import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "hero-logo-bg": "url('../assets/logo-bg.svg')",
      },
      screens: {
        "2xl": "1921px", // greater than 1920px
      },
    },
  },
  plugins: [],
} satisfies Config;
