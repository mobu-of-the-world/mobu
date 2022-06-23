import css from "./Button.module.css";
import { buildClassNames } from "./cssHelpers";

const Button:  = ({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) => {
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
