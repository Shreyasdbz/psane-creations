module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        104: '28rem',
        128: '32rem',
      },
      maxWidth: {
        '3xs': '5rem',
        '2xs': '10rem',
      },
      maxHeight: {
        '3xs': '5rem',
        '2xs': '10rem',
      },
    },
  },
  plugins: [],
}
