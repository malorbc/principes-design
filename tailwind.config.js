const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E0FFFA',
          100: '#C2FFF5',
          200: '#85FFEB',
          300: '#47FFE0',
          400: '#0AFFD6',
          500: '#00C9A9',
          600: '#00A388',
          700: '#007A66',
          800: '#005244',
          900: '#002922',
        },
        secondary: {
          50: '#EBE3F7',
          100: '#D7C8EF',
          200: '#AC8DDE',
          300: '#8355CD',
          400: '#6032AA',
          500: '#3F2171',
          600: '#331B5B',
          700: '#261443',
          800: '#180D2B',
          900: '#0D0718',
        },
      },
    },
    fontFamily: {
      sans: ['Poppins'],
    },
  },
  plugins: [],
};
