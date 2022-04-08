import fs from "fs";
import listr from "listr";
import chalk from "chalk";
import shelljs from "shelljs";
import objectPath from "object-path";

import createFile from "../utils/createFile";

const cwd = process.cwd();
const configFilePath = `${cwd}/.nextrate/config.json`;

function createComponent(name: string, type: string, path: string) {
  const tasks = new listr([
    {
      title: `Creating a component at ${path}`,
      task: async () => {
        var extension = objectPath.get(
          JSON.parse(fs.readFileSync(configFilePath, "utf8")),
          "extension"
        );

        if (fs.existsSync(path)) {
          createFile(path, name, type, extension);
        } else {
          console.log(
            chalk.red(`🦄 Directory not found! Creating the directory...`)
          );
          shelljs.mkdir("-p", path);
          console.log(
            chalk.green(`🦄 Directory created! Adding the component...`)
          );
          createFile(path, name, type, extension);
        }
      },
    },
  ]);
  tasks.run().catch((err: string) => {
    throw new Error(err);
  });
}

export default createComponent;
