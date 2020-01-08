import React from "react";

import "./Button.css";

const Button: React.FunctionComponent<React.ButtonHTMLAttributes<
  HTMLButtonElement
>> = ({ children, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
