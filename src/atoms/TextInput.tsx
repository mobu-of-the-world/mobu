import React from "react";

import "./TextInput.css";

const TextInput: React.FunctionComponent<React.InputHTMLAttributes<
  HTMLInputElement
>> = ({ ...rest }) => {
  return <input className="textinput" {...rest} />;
};

export default TextInput;
