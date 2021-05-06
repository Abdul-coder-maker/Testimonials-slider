const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "clr-grey": "#c0ccca",
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        twitter: "#1da1f2",
      },
      spacing: {
        450: "450px",
        600: "600px",
        90: "90vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
