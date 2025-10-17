/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#875cf5",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
