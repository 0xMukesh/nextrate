const fs = require('fs')
const listr = require('listr')

function checkIsDir(path) {
  const tasks = new listr([
    {
      title: 'Checking if path is a directory',
      task: () => {
        try {
          fs.lstatSync(path).isDirectory()
          return true
        }
        catch (err) {
          throw new Error(`Path ${path} is not a directory`)
        }
      }
    }
  ])
  tasks.run()
}

module.exports = checkIsDir