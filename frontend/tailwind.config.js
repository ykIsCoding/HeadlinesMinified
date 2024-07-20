/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Special Elite"'],
        'body': ['"Work Sans"'],
      },
      colors: {
        'beige-1': '#F2E8D5',
        'beige-2': '#E5D3AF',
        'beige-3': '#D7BE8A',
        'beige-4': '#C9A865',
        'beige-5': '#B99142',
        'brown-1':'#503500'
      },
    },
  },
  plugins: [],
}

