const folderNames = require('../data/folderNames');

function fileType(fileType) {
  if (folderNames.indexOf(fileType) > -1) {
    return fileType.substring(0, fileType.length - 1);
  }
  else {
    return fileType;
  }
}

module.exports = fileType;