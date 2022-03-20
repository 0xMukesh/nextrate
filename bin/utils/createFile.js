const fs = require('fs');
const chalk = require('chalk');

const fileType = require('./fileType')
const readTemplateFiles = require('./readTemplateFiles')

function createFile(path, name, type, extension) {
  const filePath = `${path}/${name}.${fileType(type)}.${extension}`;
  const fileName = `${name}.${fileType(type)}.${extension}`;
  fs.appendFileSync(filePath, '');
  console.log(chalk.green(`🎉 Created ${fileName} at ${path}`));
  fs.writeFileSync(filePath, readTemplateFiles(type, extension));
  console.log(chalk.green(`🌈 Added boilerplate to ${fileName} at ${path}`));
}

module.exports = createFile;