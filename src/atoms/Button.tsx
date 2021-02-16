import React from "react";

import "./Button.css";

const Button: React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, disabled, ...rest }) => {
  className = "button " + className;
  className += disabled ? " button--disabled" : "";

  return (
    <button className={className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
