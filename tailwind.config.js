/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      screens: {
        laptop: '1440px',
        desktop: '1920px',
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),  // Adds RTL support
  ],
};

