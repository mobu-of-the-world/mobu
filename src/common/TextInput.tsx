import type React from "react";

import css from "./TextInput.module.css";

const TextInput: React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ className, ...rest }) => {
  return (
    <input
      className={[css["textinput"], className && css[className]]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
};

export default TextInput;
