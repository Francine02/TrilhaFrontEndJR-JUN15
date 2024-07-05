/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { right: '-110%' },
          '100%': {right: 'calc(+100% + 60rem)' }, // Adicionando margem extra para telas maiores
        },
      },
      animation: {
        slide: 'slide 17s linear infinite',
      },
    },
  },
  plugins: [],
};
