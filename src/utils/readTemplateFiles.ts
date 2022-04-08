import fs from "fs";

const readTemplateFiles = (type: string, extension: string) => {
  if (extension === "jsx") {
    extension = "js";
  }
  if (extension === "tsx") {
    extension = "ts";
  }
  try {
    return fs.readFileSync(
      `src/data/templates/${type}-${extension}.txt`,
      "utf8"
    );
  } catch {
    return "";
  }
};

export default readTemplateFiles;
