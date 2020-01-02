import React from "react";

const Button: React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
