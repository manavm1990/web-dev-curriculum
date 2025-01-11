const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildTscCommand = () => "tsc --noEmit --skipLibCheck";

module.exports = {
  "*.{ts,tsx}": [buildEslintCommand, buildTscCommand],
};