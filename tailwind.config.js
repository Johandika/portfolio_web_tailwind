const plugin = require('tailwind-scrollbar');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			Poppins: ['Poppins','sans-serif'],
  			SpaceMono: ['SpaceMono','monospace']
  		},
  		colors: {
  			Red: '#FE2E2E',
  			RedDarkest: '#C21823',
  			Black: '#121212',
  			Gray: '#24272C'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [plugin, require("tailwindcss-animate")],
}