import React from "react";

const TextInput: React.FunctionComponent<{
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}> = ({ onChange, value }) => {
  return <input onChange={onChange} value={value} />;
};

export default TextInput;
