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

