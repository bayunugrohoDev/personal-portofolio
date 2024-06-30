/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightPrimary: "#FFEFD6",
        lightSecondary: "#E6F4FE",
        bodyTexter: "#a6a6a6",
        eerieBlack: "#1C1C1C",
        //
        commonWhite: '#ffffff',
        commonWhiteTwo: '#ffffff',
        commonBlack: '#000000',
        themePrimary: '#1b74e4',
        themeSecondary: '#fa5252',
        bodyText: '#44566c',
        bodyHeading: '#000000',
        headingBlack: '#0f172a',
        lightWhite: '#f3f6f6',
        lightWhite2: '#f8fbfb',
        prink: '#fff4f4',
        catkrill: '#eef5fa',
      },
    },
  },
  plugins: [],
};
