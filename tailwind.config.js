import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9538E2",
        primaryText: "rgba(9,8,15,.6)",
      },
    },
  },
  plugins: [daisyui],
};
