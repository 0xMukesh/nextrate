import { Command } from "@oclif/core";

import inquirer from "inquirer";
import fs from "fs";

import createComponent from "../lib/createComponent";

import spiltPath from "../utils/splitPath";

import questions from "../data/questions";
import constants from "../data/constants";

const configFilePath = constants.configFilePath;

export default class Generate extends Command {
  static description = "👀 Generate a new Next.js component using nextrate";

  async run() {
    inquirer.prompt(questions).then((answers: any) => {
      if (answers.config !== undefined) {
        try {
          fs.mkdirSync(".nextrate");
        } catch (err) {
          if (err.code !== "EEXIST") {
            throw err;
          }
        }
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
