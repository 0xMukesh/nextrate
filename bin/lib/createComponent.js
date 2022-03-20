const fs = require('fs');
const listr = require('listr');

const cwdPath = process.cwd();

function createComponent(fileName, fileType, path) {
  const tasks = new listr([
    {
      title: `Creating a component at ${path}`,
      task: async () => {
        if (!fs.existsSync('tsconfig.json')) {
          if (fs.existsSync(path)) {
            fs.appendFileSync(`${path}/${fileName}.${fileType}.js`, '');
          }
          else {
            fs.mkdirSync(`${path}`);
            fs.appendFileSync(`${path}/${fileName}.${fileType}.js`, '');
            console.log(`Created ${fileName}.${fileType}.js at ${path}`);
          }
        }
        else {
          console.log(`Found a tsconfig.json file.`)
          if (fs.existsSync(path)) {
            fs.appendFileSync(`${path}/${fileName}.${fileType}.ts`, '');
          }
          else {
            fs.mkdirSync(`${path}`);
            fs.appendFileSync(`${path}/${fileName}.${fileType}.ts`, '');
            console.log(`Created ${fileName}.${fileType}.ts at ${path}`);
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