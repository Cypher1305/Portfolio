/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#000814',
        'custom-green': '#14AE5C',
        'custom-lightgreen': '#9BFFC8',
        'gray': '#adb5bd',
        'blue': '#14213d',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Ajouter le plugin pour les barres de défilement
  ],
}

