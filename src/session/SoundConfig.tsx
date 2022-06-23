import Checkbox from "../common/Checkbox";
import Text from "../common/Text";

import css from "./SoundConfig.module.css";

export type SoundConfigProps = {
  soundEnabled: boolean;
  onChangeSoundConfig: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SoundConfig = (props: SoundConfigProps) => {
  const inputProps: JSX.IntrinsicElements["input"] = {
    className: css["sound-config-checkbox"],
    name: "BellCheckbox",
    defaultChecked: props.soundEnabled,
    onChange: props.onChangeSoundConfig,
  };
  return (
    <div className={css["sound-config"]}>
      <span className={css["sound-config-label"]}>
        <Text>Bell 🛎 : </Text>
      </span>
      <Checkbox {...inputProps} />
    </div>
  );
};

export default SoundConfig;
