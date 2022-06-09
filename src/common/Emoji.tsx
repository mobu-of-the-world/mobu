import type React from "react";

import css from "./Emoji.module.css";

const Emoji: React.FunctionComponent<{
  emojiName: EmojiName;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ emojiName, onClick }) => {
  return (
    <div
      className={[css["emoji"], onClick && css["emoji--clickable"]]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
    >
      {emojiByName(emojiName)}
    </div>
  );
};

export const EmojiName = {
  Car: "Car",
  Speaker: "Speaker",
  Wastebasket: "Wastebasket",
  Plus: "Plus",
  CrossMark: "CrossMark",
} as const;

export type EmojiName = typeof EmojiName[keyof typeof EmojiName];

const emojiByName = (name: EmojiName): string => {
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
      const _: never = name;
      return _;
  }
};

export default Emoji;
