import fs from "fs";

const cwd = process.cwd();
const configFilePath = `${cwd}/.nextrate/config.json`;

var questions: Array<any>;
var fileExtensions;

if (fs.existsSync("tsconfig.json")) {
  fileExtensions = ["ts", "tsx"];
} else {
  fileExtensions = ["js", "jsx"];
}

if (fs.existsSync(configFilePath)) {
  questions = [
    {
      type: "text",
      name: "component",
      message: "Enter the component name",
      validate: function (value: string) {
        if (value === "") {
          return "😿 please enter the component name";
        }
        return true;
      },
    },
    {
      type: "text",
      name: "path",
      message: "enter the folder path where you want to generate the component",
      validate: function (value: string) {
        if (value === "") {
          return "😿 please enter the folder path";
        }
        return true;
      },
    },
  ];
} else {
  questions = [
    {
      type: "text",
      name: "component",
      message: "enter the component name",
      validate: function (value: string) {
        if (value === "") {
          return "😿 please enter the component name";
        } else {
          return true;
        }
      },
    },
    {
      type: "text",
      name: "path",
      message: "enter the folder path where you want to generate the component",
      validate: function (value: string) {
        if (value === "") {
          return "😿 please enter the folder path";
        } else {
          return true;
        }
      },
    },
    {
      type: "list",
      name: "config",
      message: "✨ config: choose which type of extension do you want to use ?",
      choices: fileExtensions,
      default: fileExtensions[0],
      validate: function (value: string) {
        if (value === "") {
          return "😿 please choose any option";
        } else {
          return true;
        }
      },
    },
  ];
}

export default questions;
