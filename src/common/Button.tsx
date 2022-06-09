import type { FC } from "react";

import css from "./Button.module.css";
import { buildClassNames } from "./cssHelpers";

const Button: FC<JSX.IntrinsicElements["button"]> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={buildClassNames([css["button"], className && css[className]])}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
