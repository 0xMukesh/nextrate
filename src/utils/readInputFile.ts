import fs from "fs";

const readInputFile = (filePath: string) => {
  return fs.readFileSync(filePath, "utf8");
};

export default readInputFile;
