import { FunctionComponent } from "react";

import css from "./Text.module.css";

const Text: FunctionComponent<JSX.IntrinsicElements["div"]> = ({
  children,
  ...rest
}) => {
  return (
    <div className={css["text"]} {...rest}>
      {children}
    </div>
  );
};

export default Text;
