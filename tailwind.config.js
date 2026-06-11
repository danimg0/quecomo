/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  // 'class' permite controlar el tema manualmente (Sistema/Claro/Oscuro desde Ajustes)
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Color de marca (mismo valor que Colors.primary en utils/constants.ts)
        primary: '#F97316',
        'primary-dark': '#EA580C',
      }
    },
  },
  plugins: [],
}
