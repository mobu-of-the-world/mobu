import { FC } from "react";
import Checkbox from "../common/Checkbox";
import Text from "../common/Text";

import "./SoundConfig.css";

export type SoundConfigProps = {
  soundEnabled: boolean;
  onChangeSoundConfig: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SoundConfig: FC<SoundConfigProps> = (props) => {
  const inputProps: JSX.IntrinsicElements["input"] = {
    className: "sound-config-checkbox",
    name: "BellCheckbox",
    defaultChecked: props.soundEnabled,
    onChange: props.onChangeSoundConfig,
  };
  return (
    <div className="sound-config">
      <span className={"sound-config-label"}>
        <Text>Bell 🛎 : </Text>
      </span>
      <Checkbox {...inputProps} />
    </div>
  );
};

export default SoundConfig;
