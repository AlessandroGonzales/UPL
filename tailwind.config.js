/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],     
      },
      colors: {
        primary: '#1F2A44',
        primaryDark: '#162036',
        gold: '#D4AF37',
      },
      animation: {
        'fade-in': 'fadeIn 3.2s ease-out forwards',
      }
    },
  },
  plugins: [],
}