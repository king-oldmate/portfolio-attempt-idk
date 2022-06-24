/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        noto: ["Noto Emoji", "sans-serif"],
      },
      colors: {
        LinkedIn: "#0072b1",
        Github: "#2dba4e",
        Twitter: "#08a0e9",
      },
    },
  },
  plugins: [],
};
