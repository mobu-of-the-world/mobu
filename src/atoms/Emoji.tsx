import React from "react";

import "./Emoji.css";

const Emoji: React.FunctionComponent<{
  name: EmojiName;
}> = ({ name }) => {
  return <div className="emoji">{emojiByName(name)}</div>;
};

export enum EmojiName {
  Car,
  Speaker,
  Wastebasket
}

function emojiByName(name: EmojiName): string {
  switch (name) {
    case EmojiName.Car:
      return "🚗";
    case EmojiName.Speaker:
      return "🗣";
    case EmojiName.Wastebasket:
      return "🗑";
    default:
      return "";
  }
}

export default Emoji;
