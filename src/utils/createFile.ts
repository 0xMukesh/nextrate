import fs from "fs";
import chalk from "chalk";

import fileType from "./fileType";
import readTemplateFiles from "./readTemplateFiles";

import { restrictedFileTypeFolders } from "../data/folders";

const createFile = (
  path: string,
  name: string,
  type: string,
  extension: string
) => {
  let filePath;
  let fileName;

  if (restrictedFileTypeFolders.includes(type)) {
    filePath = `${path}/${name}.${extension}`;
    fileName = `${name}.${extension}`;
  } else {
    filePath = `${path}/${name}.${fileType(type)}.${extension}`;
    fileName = `${name}.${fileType(type)}.${extension}`;
  }
  fs.appendFileSync(filePath, "");
  console.log(chalk.green(`🎉 Created ${fileName} at ${path}`));
  fs.writeFileSync(filePath, readTemplateFiles(type, extension));
  console.log(chalk.green(`🌈 Added boilerplate to ${fileName} at ${path}`));
};

export default createFile;
