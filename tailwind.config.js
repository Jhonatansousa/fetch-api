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
        'highlight-color': '#fb923c',
        'main-color': '#242424',
      },
      width: {
        largeCodeWidth: '43.75rem',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Titles
        '.span-highlight': {
          color: '#fb923c',
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
