/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: { color: "text-red-500", marginBottom: 0 },
          },
        },
      },
      aspectRatio: {
        thumbnail: "344 / 250",
      },
    },
    plugins: [require("@tailwindcss/typography")],
  },
};
