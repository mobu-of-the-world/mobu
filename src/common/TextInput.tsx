import type React from "react";
import { buildClassNames } from "./cssHelpers";

import css from "./TextInput.module.css";

const TextInput: React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ className, ...rest }) => {
  return (
    <input
      className={buildClassNames([
        css["textinput"],
        className && css[className],
      ])}
      {...rest}
    />
  );
};

export default TextInput;
