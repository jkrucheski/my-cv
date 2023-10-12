/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cool: {
          50: "#fbfbfe",
          100: "#e5eafa",
          200: "#d0d7f5",
          300: "#b3beee",
          400: "#949de5",
          500: "#7a7dda",
          600: "#6560cb",
          700: "#5650b2",
          800: "#464390",
          900: "#3c3b74",
          950: "#252343",
        },
      },
    },
  },
  plugins: [],
};
