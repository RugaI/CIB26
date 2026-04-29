/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#082F49',
          light: '#1F6F8B',
        },
        teal: {
          DEFAULT: '#0EA5A5',
        },
        sky: {
          accent: '#0284C7',
        },
      },
    },
  },
  plugins: [],
};
