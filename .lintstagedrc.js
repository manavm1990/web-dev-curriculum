const path = require('path')

const buildEslintCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')
  return `next lint --fix --file ${files}`
}

// Only type check the staged files and their related imports
const buildTypeCheckCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f)).join(' ')
  return `tsc --noEmit --incremental false ${files}`
}

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand, buildTypeCheckCommand, 'prettier --write'],
}
