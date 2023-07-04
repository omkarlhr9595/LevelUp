/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Abril Fatface", "cursive"],
      lable: ["Poppins", "cursive"],
    },
    extend: {
      colors: {
        primary: "#1a56db",
        secondary: "#ffc017",
        fuchsia: "#ff90e8",
        gblack: "#242423",
        ablack: "#1d1d1f",
        awhite: "#f5f5f7",
      },
    },
  },
  plugins: [ require("prettier-plugin-tailwindcss")],
};
