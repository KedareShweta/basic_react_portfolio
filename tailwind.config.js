// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// // ===========================================================================

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#00FFFF', // Aqua
          background: '#FFFFFF',
          text: '#000000'
        },
        dark: {
          primary: '#FFA500', // Orange
          background: '#000000',
          text: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}