import type { FC } from "react";

import css from "./Button.module.css";

const Button: FC<JSX.IntrinsicElements["button"]> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={[css["button"], className && css[className]]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
