/** @type {import('tailwindcss').Config} */
import remToPxPlugin from "tailwindcss-rem-to-px";
export default {
  content: ["./**/*.{js,json,liquid}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};
