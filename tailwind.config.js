const purge = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
  purge: { enabled: purge, content: ["./**/*.html"] },
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
