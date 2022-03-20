const fs = require('fs');
const chalk = require('chalk');

const readTemplateFiles = require('./readTemplateFiles')

function createFile(path, fileName, fileType, fileExtension) {
  fs.appendFileSync(`${path}/${fileName}.${fileType}.${fileExtension}`, '');
  console.log(chalk.green(`🎉 Created ${fileName}.${fileType}.${fileExtension} at ${path}`));
  fs.writeFileSync(`${path}/${fileName}.${fileType}.${fileExtension}`, readTemplateFiles(fileType, fileExtension));
  console.log(chalk.green(`🌈 Added boilerplate to ${fileName}.${fileType}.${fileExtension} at ${path}`));
}

module.exports = createFile;