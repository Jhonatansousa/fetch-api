/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'main-color': '#242424',
        'btn-color': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
