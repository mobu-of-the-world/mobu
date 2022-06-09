import type React from "react";

import css from "./Text.module.css";

const Text: React.FunctionComponent<JSX.IntrinsicElements["div"]> = ({
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
