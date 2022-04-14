import { Command, Flags } from "@oclif/core";

import customizeBoilerplate from "../lib/customizeBoilerplate";

import templateTypes from "../data/templateTypes";
import fileExists from "../utils/fileExists";

export default class Boilerplate extends Command {
  static description = "🌈 Customize the default nextrate boilerplate";

  static examples = [
    "$ nextrate boilerplate -file=boilerplate.txt -type=components",
  ];

  static flags = {
    file: Flags.string({
      char: "f",
      description: "📦 Path to the file which contains the boilerplate",
      required: true,
    }),
    type: Flags.string({
      char: "t",
      description:
        "🌀 Type of boilerplate, whether it is a boilerplate for 'components' or 'pages'",
      required: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(Boilerplate);

    if (!fileExists(flags.file)) {
      throw new Error(`❌ File ${flags.file} does not exist`);
    }

    if (!templateTypes.includes(flags.type)) {
      throw new Error(
        `❌ Invalid template type! Valid templates types are: ${templateTypes.join(
          ", "
        )}`
      );
    }

    customizeBoilerplate(flags.file, flags.type);
  }
}
