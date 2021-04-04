import React, { FC, ChangeEvent } from "react";
import Checkbox from "../atoms/Checkbox";
import Text from "../atoms/Text";

type Props = {
  defaultChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SoundConfig: FC<Props> = ({ defaultChecked, onChange }) => {
  return (
    <div>
      <Checkbox
        name={"foo"}
        value={"foo"}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <Text>Sound</Text>
    </div>
  );
};

export default SoundConfig;
