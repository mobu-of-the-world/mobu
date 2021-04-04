import React, { FC } from "react";

type Props = {
  className?: string;
  name: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<Props> = ({
  className,
  name,
  defaultChecked = false,
  onChange = (event) => {},
}) => {
  return (
    <input
      className={className}
      type="checkbox"
      name={name}
      defaultChecked={defaultChecked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
