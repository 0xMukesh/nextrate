function spiltPath(path) {
  var spiltArray = path.split('/');
  var folderName = spiltArray[spiltArray.length - 1];
  return folderName;
}

module.exports = spiltPath