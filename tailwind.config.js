module.exports = {
  purge: ["./src/*/.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/background.jpg')",
      },
      boxShadow: {
        "2xl": "0 0 1rem #ffc600",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
