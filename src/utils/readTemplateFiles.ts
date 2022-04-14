import fs from "fs";
import objectPath from "object-path";

import constants from "../data/constants";
import { extensions, shortHandExtensions } from "../data/extensions";

const readTemplateFiles = (type: string, extension: string) => {
  if (extensions.includes(extension)) {
    extension = shortHandExtensions.get(extension) || extension;
  }

  try {
    if (!fs.existsSync(constants.boilerplateConfigFilePath)) {
      return fs.readFileSync(
        `${constants.templateFolderPath}/${type}-${extension}.txt`,
        "utf8"
      );
    } else {
      const config = JSON.parse(
        fs.readFileSync(constants.boilerplateConfigFilePath, "utf8")
      );
      if (objectPath.get(config, `${type}`) === undefined) {
        return "";
      }
      return objectPath.get(config, `${type}`);
    }
  } catch {
    return "";
  }
};

export default readTemplateFiles;
