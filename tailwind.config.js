module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(253, 234, 241)",
          border: "rgb(255, 153, 201)",
          dark: "rgb(255, 0, 122)",
        },
        accent: {
          border: "rgb(237, 238, 242)",
          light: "rgb(247, 248, 250)",
          bg: "rgb(245,243,246)",
          gray: "rgb(86, 90, 105)",
          hover: "#888D9B",
          inputhover: "rgb(206, 208, 217)",
        },
      },

      gridTemplateColumns: {
       'nav': '120px 1fr 120px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
