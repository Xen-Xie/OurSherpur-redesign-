const {heroui} = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1677BD",
        secondary: "#5D5D5D",
        tertiary: "#8F8F8F",
        default: "#232323",
        foreground : "#FFFFFF",
      },
      fontFamily: {
        roboto: "Roboto",
        league: "League Spartan",
        robotoslab: "Roboto Slab",
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

