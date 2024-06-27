/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'heroMain': "url('./images/hero.png')",
      },
    },
  },
  plugins: [],
};
