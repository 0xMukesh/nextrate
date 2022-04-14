// spiltPath takes in a path and returns the main parent directory.
// spiltPath("component/subcomponent/subsubcomponent") returns "component"

const spiltPath = (path: string) => {
  if (path.includes("/")) {
    const pathArray = path.split("/");
    const mainParentDir = pathArray[0];
    return mainParentDir;
  } else {
    return path;
  }
};

export default spiltPath;
