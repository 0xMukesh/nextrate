import listr from "listr";

import addCustomBoilerplate from "../utils/addCustomBoilerplate";
import readInputFile from "../utils/readInputFile";

const customizeBoilerplate = (filePath: string, type: string) => {
  const tasks = new listr([
    {
      title: "🌈 Customizing the default nextrate boilerplate",
      task: () => {
        addCustomBoilerplate(readInputFile(filePath), type);
      },
    },
  ]);
  tasks.run().catch((err) => {
    throw new Error(err);
  });
};

export default customizeBoilerplate;
