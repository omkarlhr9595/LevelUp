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
    },
    extend: {
      colors: {
        primary: "#1a56db",
        secondary: "#ffc017",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
