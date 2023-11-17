const plugin = require('tailwind-scrollbar');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ['Poppins','sans-serif'],
        SpaceMono: ['SpaceMono','monospace']
      },
       colors: {
        Red: '#FE2E2E',
        RedDarkest: '#C21823',
        Black: '#121212',
        Gray: '#24272C',
    },
    },
  },
  plugins: [plugin],
}