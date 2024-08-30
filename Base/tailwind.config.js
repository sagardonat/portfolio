// tailwind.config.js
module.exports = {
  content: ["./templates/**/*.html", "./static/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        darkGray: '#1a1a1d',
        cyan: '#00bcd4',
        lightCoral: '#ff6f61',
        softWhite: '#f5f5f5',
        paleYellow: '#ffeb3b',
        success: '#22c55e',
        error: '#ef4444',
        warning: '#eab308',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, 10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      animation: {
        floatingIcon: 'float 5s ease-in-out infinite',
      },
      boxShadow: {
        'glow': '0 0 9px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6), 0 0 45px rgba(255, 255, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
