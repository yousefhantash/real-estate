/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      overflow: {
        'clip': 'clip',
      },
      colors: {
        customDarkGray: '#212529',
        customBeige: '#EADDCA',
      },
    },
  },
  plugins: [],
}