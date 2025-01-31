/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        gradient: "var(--primary-gradient)",
        "primary-light": "var(--primary-light)",
        "primary-lighter": "var(--primary-lighter)",
        "primary-lightest": "var(--primary-lightest)",
        "primary-dark": "var(--primary-dark)",
        "primary-darker": "var(--primary-darker)",
        "primary-darkest": "var(--primary-darkest)",
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          // You can keep adding more shades
        }
      }
    },
  },

  // plugins: [
  //   require('@tailwindcss/forms'), // For styling forms
  //   require('@tailwindcss/typography'), // For typography utilities
  // ],

});

