import { FunctionComponent } from "react";

const Form: FunctionComponent<React.FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  ...rest
}) => {
  return <form {...rest}>{children}</form>;
};

export default Form;
