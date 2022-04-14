import fs from "fs";
import shelljs from "shelljs";
import objectPath from "object-path";

import constants from "../data/constants";

const addCustomBoilerplate = (customBoilerplate: string, type: string) => {
  if (!fs.existsSync(constants.boilerplateConfigFilePath)) {
    shelljs.mkdir("-p", ".nextrate");
    fs.writeFileSync(constants.boilerplateConfigFilePath, "{}");
  }
  let config = JSON.parse(
    fs.readFileSync(constants.boilerplateConfigFilePath, "utf8")
  );

  objectPath.set(config, `${type}`, customBoilerplate);

  fs.writeFileSync(constants.boilerplateConfigFilePath, JSON.stringify(config));
};

export default addCustomBoilerplate;
