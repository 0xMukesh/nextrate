#! /usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs')

const questions = require('./data/questions');
const checkIsDir = require('./lib/checkIsDir');

const path = process.cwd();

inquirer.prompt(questions).then(answers => {
  checkIsDir(answers.path)
});