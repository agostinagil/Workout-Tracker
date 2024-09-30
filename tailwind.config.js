/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./assets/fondo.jpg')",
        gradient:
          "radial-gradient(circle, rgba(255,148,176,1) 9%, rgba(255,214,128,1) 39%, rgba(204,210,255,1) 94%)",
      },
      boxShadow: {
        custom: "0 5px 20px 0 rgba(0, 0, 0, 0.04)",
      },
    },
    colors: {
      primary: "#cf6b6b",
      second: "#dde29b",
      third: "#7f8cf6",
      btnBorder: "#c0c489",
      transparencies: {
        100: "#e1e1e13b",
        200: "#00000070",
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
  },
  plugins: [],
};
