const fs = require('fs');
const listr = require('listr');
const chalk = require('chalk');
const shelljs = require('shelljs')

const createFile = require('../utils/createFile');

function createComponent(name, type, path) {
  const tasks = new listr([
    {
      title: `Creating a component at ${path}`,
      task: async () => {
        var extension;
        // Checking where there is a tsconfig.json file in the current directory

        if (!fs.existsSync('tsconfig.json')) {
          extension = 'js';
          if (fs.existsSync(path)) {
            createFile(path, name, type, extension);
          }
          else {
            console.log(chalk.red(`🦄 Directory not found! Creating the directory...`));
            shelljs.mkdir('-p', path);
            console.log(chalk.green(`🦄 Directory created! Adding the component...`))
            createFile(path, name, type, extension);
          }
        }
        else {
          fileExtension = 'ts';
          console.log(`Found a tsconfig.json file.`)
          if (fs.existsSync(path)) {
            console.log(`🦄 Directory found! Adding the component...`)
            createFile(path, name, type, extension);
          }
          else {
            console.log(chalk.red(`🦄 Directory not found! Creating the directory...`))
            shelljs.mkdir('-p', path);
            console.log(chalk.green(`🦄 Directory created! Adding the component...`))
            createFile(path, name, type, extension);
          }
        }
      }
    }
  ])
  tasks.run().catch(err => {
    throw new Error(err)
  })
}

module.exports = createComponent;