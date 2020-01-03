import React from "react";

const Emoji: React.FunctionComponent<{
  name: EmojiName;
}> = ({ name }) => {
  return <>{emojiByName(name)}</>;
};

function emojiByName(name: EmojiName): string {
  switch (name) {
    case EmojiName.Car:
      return "🚗";
    case EmojiName.Speaker:
      return "🗣";
    default:
      return "";
  }
}

export enum EmojiName {
  Car,
  Speaker
}

export default Emoji;
