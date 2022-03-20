const fs = require('fs');

const boilerplate = require('../data/boilerplate');

function createFile(path, fileName, fileType, fileExtension) {
  fs.appendFileSync(`${path}/${fileName}.${fileType}.${fileExtension}`, '');
  console.log(`Created ${fileName}.${fileType}.${fileExtension} at ${path}`);
  fs.writeFileSync(`${path}/${fileName}.${fileType}.${fileExtension}`, boilerplate[`${fileExtension}`]);
  console.log(`Added boilerplate to ${fileName}.${fileType}.${fileExtension} at ${path}`);
}

module.exports = createFile;