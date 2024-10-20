/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./app/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#0C0C0C', // Add your custom color here
      },
    },
  },
  plugins: [],
};
