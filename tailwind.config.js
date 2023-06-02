/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        shirt: {
          100: '#f9fafc',
          200: '#d8dcea',
          300: '#b7bed8',
          400: '#96a0c6',
          500: '#5666a0',
          600: '#44517f',
          700: '#323c5e',
          800: '#21273c',
          900: '#0f111b',
        },
      },
      fontFamily: {
        notoSans: ['Noto Sans', 'sans-serif'],
      },
      maxWidth: {
        a4: '793px',
      },
      minHeight: {
        a4: '1122px',
      },
    },
  },
};
