/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#ff6a00',
        'brand-black': '#0b0b0b',
        'brand-gray': '#1f1f1f'
      }
    },
  },
  plugins: [],
};
