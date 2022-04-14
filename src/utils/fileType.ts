import { pluralFormFolders } from "../data/folders";

// fileType takes in the main parent directory and returns the file type.
// fileType("components") returns "component"
// file type is generally a notation which indicates whether the file contains code for a component or a file contains code for a page.

const fileType = (type: string) => {
  if (pluralFormFolders.indexOf(type) > -1) {
    return type.substring(0, type.length - 1).toLowerCase();
  } else {
    return type.toLowerCase();
  }
};

export default fileType;
