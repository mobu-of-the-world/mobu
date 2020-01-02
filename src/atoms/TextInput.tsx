import React from "react";

const TextInput: React.FunctionComponent<React.InputHTMLAttributes<
  HTMLInputElement
>> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default TextInput;
