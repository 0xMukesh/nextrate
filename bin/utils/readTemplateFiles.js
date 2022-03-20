const fs = require('fs')

function readTemplateFiles(templateType, fileExtension) {
  try {
    return fs.readFileSync(`bin/data/templates/${templateType}-${fileExtension}.txt`, 'utf8')
  }
  catch {
    return ''
  }
}

console.log(readTemplateFiles('component', 'js'))

module.exports = readTemplateFiles