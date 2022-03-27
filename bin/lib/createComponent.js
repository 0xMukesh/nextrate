const fs = require('fs');
const listr = require('listr');
const chalk = require('chalk');
const shelljs = require('shelljs');
const objectPath = require('object-path');

const createFile = require('../utils/createFile');

const cwd = process.cwd();
const configFilePath = `${cwd}/.nextrate/config.json`;

function createComponent(name, type, path) {
  const tasks = new listr([
    {
      title: `Creating a component at ${path}`,
      task: async () => {
        var extension;
        // Checking where there is a tsconfig.json file in the current directory

        if (!fs.existsSync('tsconfig.json')) {
          if (!fs.existsSync(configFilePath)) {
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
            extension = objectPath.get(JSON.parse(fs.readFileSync(configFilePath, "utf8")), "reactExtension");
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
        }
        else {
          if (!fs.existsSync(configFilePath)) {
            extension = 'ts';
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
            extension = objectPath.get(JSON.parse(fs.readFileSync(configFilePath, "utf8")), "reactExtension");
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
        }
      }
    }
  ])
  tasks.run().catch(err => {
    throw new Error(err)
  })
}

module.exports = createComponent;