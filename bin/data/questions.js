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
      default: 'y',
      validate: function (value) {
        var pass = value.match(/^(y|n)$/i);
        if (pass) {
          return true;
        }
        return 'Please enter "y" or "n" only';
      }
    }
  ]
}

module.exports = questions