import React from "react";

import Emoji, { EmojiName } from "../atoms/Emoji";

const User: React.FunctionComponent<{
  isDriver: boolean;
  user: string;
}> = ({ isDriver, user }) => {
  return (
    <span>
      <Emoji name={emojiNameByRole(isDriver)} />
      {user}
    </span>
  );
};

function emojiNameByRole(isDriver: boolean): EmojiName {
  if (isDriver) {
    return EmojiName.Car;
  }
  return EmojiName.Speaker;
}

export default User;
