/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#3E507A",
        lightblue: "#54B6F9",
      },
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 320px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
