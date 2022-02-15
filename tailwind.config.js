module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      translate: {
        0.25: '0.075rem',
      },
      spacing: {
        104: '28rem',
        128: '32rem',
      },
      minWidth: {
        56: '14rem',
        64: '16rem',
        72: '18rem',
      },
      maxWidth: {
        '3xs': '5rem',
        '2xs': '10rem',
      },
      maxHeight: {
        '3xs': '5rem',
        '2xs': '10rem',
      },
      animation: {
        slideFromLeft: 'slideFromLeft',
        appear: 'appear',
      },
      keyframes: {
        slideFromLeft: {
          '0%': { transform: '-translate-x-4' },
          '100%': { transform: 'translate-x-0' },
        },
        appear: {
          '0%': { transform: 'opacity-0' },
          '33%': { transform: 'opacity-70' },
          '66%': { transform: 'opacity-85' },
          '100%': { transform: 'opacity-100' },
        },
      },
    },
  },
  plugins: [],
}
