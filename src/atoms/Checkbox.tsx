import React, { FC } from "react";

type Props = {
  name: string;
  value: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<Props> = ({
  name,
  value,
  defaultChecked = false,
  onChange = (event) => {},
}) => {
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
