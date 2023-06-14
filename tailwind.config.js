/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
  theme: {
    extend: {
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
