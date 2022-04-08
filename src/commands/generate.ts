import { Command } from "@oclif/core";

import inquirer from "inquirer";
import fs from "fs";

import createComponent from "../lib/createComponent";

import spiltPath from "../utils/splitPath";
import questions from "../data/questions";

const cwd = process.cwd();
const configFilePath = `${cwd}/.nextrate/config.json`;

export default class Generate extends Command {
  static description = "👀 Generate a new Next.js component using nextrate";

  async run() {
    inquirer.prompt(questions).then((answers: any) => {
      if (answers.config !== undefined) {
        fs.mkdirSync(".nextrate");
        fs.writeFileSync(
          configFilePath,
          JSON.stringify({ extension: answers.config })
        );
        createComponent(
          answers.component,
          spiltPath(answers.path),
          answers.path
        );
      } else {
        createComponent(
          answers.component,
          spiltPath(answers.path),
          answers.path
        );
      }
    });
  }
}
