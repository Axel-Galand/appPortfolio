module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0,0,0.2,1) infinite'
      }
    },
    container: {
      center: true,
    },
    textColor: {
      'warning': '#ffd54f',
      'white': '#ffffff',
      'grey': '#494c4c'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
