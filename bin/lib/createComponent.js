const fs = require('fs');
const listr = require('listr');

const createFile = require('../utils/createFile');
const boilerplate = require('../data/boilerplate');

function createComponent(fileName, fileType, path) {
  const tasks = new listr([
    {
      title: `Creating a component at ${path}`,
      task: async () => {
        var fileExtension;
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