import type React from "react";

const Form: React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement>
> = ({ children, ...rest }) => {
  return <form {...rest}>{children}</form>;
};

export default Form;
