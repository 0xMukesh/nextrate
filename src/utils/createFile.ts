import fs from "fs";
import chalk from "chalk";

import fileType from "./fileType";
import readTemplateFiles from "./readTemplateFiles";

const createFile = (
  path: string,
  name: string,
  type: string,
  extension: string
) => {
  const filePath = `${path}/${name}.${fileType(type)}.${extension}`;
  const fileName = `${name}.${fileType(type)}.${extension}`;
  fs.appendFileSync(filePath, "");
  console.log(chalk.green(`🎉 Created ${fileName} at ${path}`));
  fs.writeFileSync(filePath, readTemplateFiles(type, extension));
  console.log(chalk.green(`🌈 Added boilerplate to ${fileName} at ${path}`));
};

export default createFile;
