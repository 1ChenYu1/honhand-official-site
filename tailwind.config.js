export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00e4ff',
        'neon-pink': '#ff4d94',
        'main-bg-from': '#0a1f3a',
        'main-bg-to': '#001a33',
        'main-title': '#ffffff',
        'main-text': '#b3c6e0',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(135deg, #0a1f3a 0%, #001a33 100%)',
      },
    },
  },
  plugins: [],
}; 