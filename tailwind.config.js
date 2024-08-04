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
           'custom-beige': '#F5EEE3',
      'custom-darkblue':"#1a3462",
      "custom-blue":"#0E88E2",
      'custom-Almond': '#F5EEE3'
      },
    },
  },
  plugins: [],
}