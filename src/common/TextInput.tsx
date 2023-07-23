import type { InputHTMLAttributes } from "react";
import { buildClassNames } from "./cssHelpers";

import css from "./TextInput.module.css";

const TextInput = ({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={buildClassNames([
        css.textinput,
        className && css[className],
      ])}
      {...rest}
    />
  );
};

export default TextInput;
