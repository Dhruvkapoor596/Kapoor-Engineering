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
        oswald: ['var(--font-oswald)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        // Add the new font here:
        'roboto-slab': ['var(--font-roboto-slab)', 'serif'], 
      },
      colors: {
        industrial: {
          950: '#020617', 
          900: '#0f172a', 
          800: '#1e293b', 
          100: '#e2e8f0', 
        },
        accent: {
          DEFAULT: '#EAB308', 
          hover:   '#CA8A04', 
        }
      }
    },
  },
  plugins: [],
};
export default config;