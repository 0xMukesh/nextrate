const folderNames = require('../data/folderNames');

// The `fileType` function is used to remove the 's' from the end of the folder name.

function fileType(fileType) {
  if (folderNames.indexOf(fileType) > -1) {
    return fileType.substring(0, fileType.length - 1);
  }
  else {
    return fileType;
  }
}

module.exports = fileType;