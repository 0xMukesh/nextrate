// The initial questions which are been asked to the user when he runs the `nextrate` command

const questions = [
  {
    type: 'text',
    name: 'component',
    message: 'Enter the component name'
  },
  {
    type: 'text',
    name: 'path',
    message: 'Enter the folder path where you want to generate the component'
  }
]

module.exports = questions