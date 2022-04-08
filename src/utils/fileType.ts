import folderNames from "../data/folderNames";

const fileType = (type: string) => {
  if (folderNames.indexOf(type) > -1) {
    return type.substring(0, type.length - 1).toLowerCase();
  } else {
    return type.toLowerCase();
  }
};

export default fileType;
