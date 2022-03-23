const fs = require('fs');
const listr = require('listr');

const createFile = require('../utils/createFile');

function createComponent(fileName, fileType, path) {
  const tasks = new listr([
    {
      title: `Creating a component at ${path}`,
      task: async () => {
        var fileExtension;
        // Checking where there is a tsconfig.json file in the current directory

        if (!fs.existsSync('tsconfig.json')) {
          fileExtension = 'js';
          if (fs.existsSync(path)) {
            createFile(path, fileName, fileType, fileExtension);
          }
          else {
            fs.mkdirSync(`${path}`);
            createFile(path, fileName, fileType, fileExtension);
          }
        }
        else {
          fileExtension = 'ts';
          console.log(`Found a tsconfig.json file.`)
          if (fs.existsSync(path)) {
            createFile(path, fileName, fileType, fileExtension);
          }
          else {
            fs.mkdirSync(`${path}`);
            createFile(path, fileName, fileType, fileExtension);
          }
        }
      }
    }
  ])
  tasks.run().catch(err => {
    throw new Error(err)
  })
}

module.exports = createComponent;