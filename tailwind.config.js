module.exports = {
  mode: "jit",
  purge: [
    "components/**/*.tsx",
    "pages/**/*.tsx",
    "stores/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
