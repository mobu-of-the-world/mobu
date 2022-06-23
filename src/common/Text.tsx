import css from "./Text.module.css";

const Text = ({ children, ...rest }: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={css["text"]} {...rest}>
      {children}
    </div>
  );
};

export default Text;
