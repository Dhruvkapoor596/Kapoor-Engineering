/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-archivo-black)", "Helvetica Neue", "sans-serif"],
        sans: ["var(--font-ibm-plex)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        kew: {
          bg: "#FFFFFF",
          paper: "#F4F4F0",
          ink: "#0A0A0A",
          muted: "#4A4A4A",
          line: "rgba(10,10,10,0.15)",
          gray: "#E5E5E5",
        },
        safety: {
          DEFAULT: "#FF3B00",
          hover: "#CC2F00",
        },
      },
      borderRadius: {
        none: "0px",
      },
      letterSpacing: {
        brutal: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
