const path = require('path')

const buildEslintCommand = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')
  return `next lint --fix --file ${files}`
}

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand, 'prettier --write'],
}
