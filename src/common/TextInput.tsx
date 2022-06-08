import React from "react";

import "./TextInput.css";

const TextInput: React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ className, ...rest }) => {
  className = "textinput" + (className != null ? " " + className : "");
  return <input className={className} {...rest} />;
};

export default TextInput;
