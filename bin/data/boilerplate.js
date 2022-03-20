const boilerplate = {
  "ts": `import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const Component: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div></div>
  )
}

export default Component`,
  "js": `const Component = () => {
  return <div></div>;
};
  
export default Component;`
}

module.exports = boilerplate;