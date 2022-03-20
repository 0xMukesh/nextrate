#! /usr/bin/env node

const inquirer = require('inquirer');

const questions = require('./data/questions');
const spiltPath = require('./utils/splitPath');
const createComponent = require('./lib/createComponent');

inquirer.prompt(questions).then(async (answers) => {
  createComponent(answers.component, spiltPath(answers.path), answers.path)
});