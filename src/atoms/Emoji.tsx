import React from "react";

import "./Emoji.css";

const Emoji: React.FunctionComponent<{
  emojiName: EmojiName;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  rest?: React.HTMLAttributes<HTMLDivElement>;
}> = ({ emojiName, onClick, ...rest }) => {
  const className = "emoji" + (onClick != null ? " emoji--clickable" : "");
  return (
    <div className={className} onClick={onClick} {...rest}>
      {emojiByName(emojiName)}
    </div>
  );
};

export enum EmojiName {
  Car,
  Speaker,
  Wastebasket,
  Plus,
  CrossMark,
}

function emojiByName(name: EmojiName): string {
  switch (name) {
    case EmojiName.Car:
      return "🚗";
    case EmojiName.Speaker:
      return "🗣";
    case EmojiName.Wastebasket:
      return "🗑";
    case EmojiName.Plus:
      return "➕";
    case EmojiName.CrossMark:
      return "❌";
    default:
      return "";
  }
}

export default Emoji;
