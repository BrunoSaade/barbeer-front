/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        blue: ["#6CE1F4"],
        primary: ["#17241D"],
        grey: ['#FFFFFFBF', '#000000E5'],
        orange: ['#AF5118'],
      }
    },
  },
  plugins: [],
}