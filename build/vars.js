const path = require('path')

module.exports = {
  rootPath: path.resolve(__dirname, '../'),
  mainOutputPath: path.resolve(__dirname, '../dist/main'),
  dllOutputPath: path.resolve(__dirname, '../dist/dll'),
  childOutputPath: path.resolve(__dirname, '../dist/child')
}
