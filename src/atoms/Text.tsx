import React from "react";

const Text: React.FunctionComponent = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export default Text;
