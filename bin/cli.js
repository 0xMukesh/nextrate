#! /usr/bin/env node

const inquirer = require('inquirer');
const os = require("os");
const fs = require("fs");

const questions = require('./data/questions');
const spiltPath = require('./utils/splitPath');
const createComponent = require('./lib/createComponent');

const cwd = process.cwd();
const configFilePath = `${cwd}/.nextrate/config.json`;

inquirer.prompt(questions).then(async (answers) => {
  createComponent(answers.component, spiltPath(answers.path), answers.path)

  if (answers.config === 'y') {
    if (!fs.existsSync("tsconfig.json")) {
      fs.mkdirSync(".nextrate");
      fs.writeFileSync(configFilePath, JSON.stringify({ reactExtension: "jsx" }));
    }
    else {
      fs.mkdirSync(".nextrate");
      fs.writeFileSync(configFilePath, JSON.stringify({ reactExtension: "tsx" }));
    }
  }
  else if (answers.config === 'n') {
    if (!fs.existsSync("tsconfig.json")) {
      fs.mkdirSync(".nextrate");
      fs.writeFileSync(configFilePath, JSON.stringify({ reactExtension: "js" }));
    }
    else {
      fs.mkdirSync(".nextrate");
      fs.writeFileSync(configFilePath, JSON.stringify({ reactExtension: "ts" }));
    }
  }
  else {
    return
  }
});