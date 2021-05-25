module.exports = {
  "**/*.ts?(x)": (files) => `yarn pre ${files.join(" ")}`,
}
