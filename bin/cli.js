#! /usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs')

const questions = require('./data/questions');
const spiltPath = require('./lib/splitPath');
const createComponent = require('./lib/createComponent');

const path = process.cwd();

inquirer.prompt(questions).then(async (answers) => {
  createComponent(answers.component, spiltPath(answers.path), answers.path)
});