const fs = require('fs')

function dirHasContent(path) {
  if (!fs.existsSync(path)) {
    return false
  }
  const files = fs.readdirSync(path)
  return files.length > 0
}

module.exports = {
  dirHasContent
}
