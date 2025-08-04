/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ctf: "#053746",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sant-serif"],
        inter: ["Inter", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
