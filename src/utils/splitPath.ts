const spiltPath = (path: string) => {
  if (path.includes("/")) {
    var spiltArray = path.split("/");
    var folderName = spiltArray[spiltArray.length - 1];
    return folderName;
  } else {
    return path;
  }
};

export default spiltPath;
