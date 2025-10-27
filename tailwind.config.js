/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          500: '#3b5a80',
          600: '#2a4a6f',
          700: '#1a365d',
          800: '#0f2744',
          900: '#0a1929',
        },
      },
    },
  },
  plugins: [],
};
