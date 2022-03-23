// The `splitPath` function is used to convert the file path from 'bin/data' to 'data'

function spiltPath(path) {
  if (path.includes('/')) {
    var spiltArray = path.split('/');
    var folderName = spiltArray[spiltArray.length - 1];
    return folderName;
  }
  else {
    return path
  }
}

module.exports = spiltPath