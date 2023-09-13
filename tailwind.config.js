/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#000',
      'blue100': '#377FE9',
      'blue200': '#4E8FEE',
      'gray': '#F3F3F3',
      'gray100': '#F3F3F2',
      'gray200': '#F5F5F5',
      'gray300': '#F8F8F8',
      'gray400': '#A3A3A3',
      'gray500': '#33333399',
      'gray600': '#5E5E5E',
      'gray700': '#1B1B18',
      'light-gray100': '#706F6C',
      'light-gray200': '#F9F9F8',
      'light-gray300': '#868683',
      'light-gray400': '#FAFAFA',
      'white': '#fff'
    }
  },
  plugins: [],
}

