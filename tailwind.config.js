/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
         'grey': '#EDEFF1',
         'black': '#000000',
         'white': '#ffffff',
         'pink': '#C0345E',
         'dark-grey': '#506473',
         'off-black': '#19293A'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

