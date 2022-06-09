import type { FC } from "react";

const Checkbox: FC<JSX.IntrinsicElements["input"]> = (props) => {
  return <input type="checkbox" {...props} />;
};

export default Checkbox;
