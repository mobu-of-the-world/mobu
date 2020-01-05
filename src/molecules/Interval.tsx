import React from "react";

import TextInput from "../atoms/TextInput";
import Text from "../atoms/Text";

const Interval: React.FunctionComponent<{
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  interval: number;
}> = ({ onIntervalChange, interval }) => {
  return (
    <p>
      <Text>Interval(sec)</Text>
      <TextInput onChange={onIntervalChange} type="number" value={interval} />
    </p>
  );
};

export default Interval;
