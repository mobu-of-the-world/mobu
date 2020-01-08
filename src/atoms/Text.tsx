import React from "react";

import "./Text.css";

const Text: React.FunctionComponent = ({ children, ...rest }) => {
  return (
    <div className="text" {...rest}>
      {children}
    </div>
  );
};

export default Text;
