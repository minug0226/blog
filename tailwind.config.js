/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black20: "#525252",
        black40: "#303030",
        black60: "#1C1C1C",
        gray20: "#EBEBEB",
        gray100: "#8C8C8C",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { color: "text-red-500", marginBottom: 0 },
          },
        },
      },
      aspectRatio: {
        thumbnail: "344 / 250",
        contents: "1080 / 617",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
