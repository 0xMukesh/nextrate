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