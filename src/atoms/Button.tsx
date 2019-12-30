import React from "react";

const Button: React.FunctionComponent<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...rest
}) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
