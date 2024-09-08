/** @type {import('tailwindcss').Config} */

import Colors from 'tsv2-library/src/colors.config.json';

module.exports = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...Colors,
      },
    },
  },
  plugins: [],
};
