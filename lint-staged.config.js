module.exports = {
  "**/*.ts?(x)": (files) => `yarn type-check && yarn lint ${files.join(" ")}`,
}
