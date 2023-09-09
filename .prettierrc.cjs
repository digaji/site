/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  bracketSpacing: false,
  bracketSameLine: true,
  singleQuote: false,
  semi: true,
  trailingComma: "all",
  arrowParens: "avoid",
  endOfLine: "auto",
};
