/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "var(--primary-color)",
        "highlight": "var(--secondary-color)",
        "white-primary" : "var(--white-primary)",
        "white-secondary" : "var(--white-secondary)",
        "white-grey" : "var(--white-grey)",
        "grey" : "var(--grey)",
        "background-red": "#FFCFCF",
        "placeholder" : "#A5A5A5",
        "body-bg" : "#F4F3F6"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
