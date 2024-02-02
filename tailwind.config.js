/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'btn-color': '#1a1a1a',
        'menu-bg': '#1a1a1a',
      },
      colors: {
        'highlight-color': 'rgb(251, 146, 60)',
        'main-color': '#242424',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Titles
        '.span-highlight': {
          color: 'rgb(251, 146, 60)',
          fontWeight: '500',
        },
        '.main-title': {
          fontWeight: '500',
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
        },
        '.secondary-title': {
          fontWeight: '500',
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
