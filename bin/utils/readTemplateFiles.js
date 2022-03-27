const fs = require('fs')

// The `readTemplateFiles` function is used to read the template files from the bin/data/templates folder.

function readTemplateFiles(type, extension) {
  if (extension === 'jsx') {
    extension = 'js'
  }
  else if (extension === 'tsx') {
    extension = 'ts'
  }
  else {
    return
  }

  try {
    return fs.readFileSync(`bin/data/templates/${type}-${extension}.txt`, 'utf8')
  }
  catch {
    return ''
  }
}

module.exports = readTemplateFiles