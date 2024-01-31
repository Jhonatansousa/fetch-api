/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'main-color': '#242424',
        'btn-color': '#1a1a1a',
        'menu-bg': '#3d240c',
      },
      colors: {
        'highlight-color': 'rgb(251, 146, 60)',
      },
    },
  },
  plugins: [],
}
