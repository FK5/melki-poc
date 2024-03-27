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
        'primary': '#2C318B',
        'b-gray': '#EAEEF3',
        'b-white': '#F5F5FA',
        't-gray': '#9191A0',
      },
      height: {
        '1/8': '12.5%',
        '7/8': '87.5%'
      },
      width: {
        '1/14': '7%',
        '13/14': '93%'
      }
    },
  },
  plugins: [],
};
