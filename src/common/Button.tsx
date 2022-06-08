import { FC } from "react";

import "./Button.css";

const Button: FC<JSX.IntrinsicElements["button"]> = ({
  className,
  ...props
}) => {
  return (
    <button className={"button " + className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
