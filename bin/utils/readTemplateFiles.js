const fs = require('fs')

// The `readTemplateFiles` function is used to read the template files from the bin/data/templates folder.

function readTemplateFiles(templateType, fileExtension) {
  try {
    return fs.readFileSync(`bin/data/templates/${templateType}-${fileExtension}.txt`, 'utf8')
  }
  catch {
    return ''
  }
}

module.exports = readTemplateFiles