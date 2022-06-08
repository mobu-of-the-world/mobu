import React from "react";

import "./Text.css";

const Text: React.FunctionComponent<JSX.IntrinsicElements["div"]> = ({
  children,
  ...rest
}) => {
  return (
    <div className="text" {...rest}>
      {children}
    </div>
  );
};

export default Text;
