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
        grey: ['#FFFFFFBF', '#000000E5', '#ACACAC', '#D9D9D9'],
        orange: ['#AF5118', '#AF7240'],
        success: ["#00be70"],
        error: ['#eb0043'],
        info: ['#002A95']
      }
    },
  },
  plugins: [],
}