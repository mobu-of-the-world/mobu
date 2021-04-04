import React, { FC, ChangeEvent } from "react";
import Checkbox from "../atoms/Checkbox";
import Text from "../atoms/Text";

import "./SoundConfig.css";

type Props = {
  defaultChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SoundConfig: FC<Props> = ({ defaultChecked, onChange }) => {
  return (
    <div className="sound-config">
      <span className={"sound-config-label"}>
        <Text>Bell 🛎 : </Text>
      </span>
      <Checkbox
        className={"sound-config-checkbox"}
        name={"BellCheckbox"}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
    </div>
  );
};

export default SoundConfig;
