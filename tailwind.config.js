/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html" ,"*.js"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          '0%, 100%': { width: '20%' },
          '50%': { width:'40%' },
        },
      },
      animation: {
        pulse: 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

