import type { FormHTMLAttributes } from "react";

const Form = ({ children, ...rest }: FormHTMLAttributes<HTMLFormElement>) => {
  return <form {...rest}>{children}</form>;
};

export default Form;
