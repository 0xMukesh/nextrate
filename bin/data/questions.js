const fs = require("fs");

const cwd = process.cwd();
const configFilePath = `${cwd}/.nextrate/config.json`;

var questions;

if (fs.existsSync(configFilePath)) {
  questions = [
    {
      type: 'text',
      name: 'component',
      message: 'Enter the component name'
    },
    {
      type: 'text',
      name: 'path',
      message: 'Enter the folder path where you want to generate the component'
    }
  ]
}

else {
  questions = [
    {
      type: 'text',
      name: 'component',
      message: 'Enter the component name'
    },
    {
      type: 'text',
      name: 'path',
      message: 'Enter the folder path where you want to generate the component'
    },
    {
      type: 'input',
      name: 'config',
      message: '✨ config: Do you want to use the .jsx and .tsx file format for the component? (y/n)',
      choices: ['y', 'n'],
    }
  ]
}

module.exports = questions