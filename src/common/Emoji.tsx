import type { MouseEvent as ReactMouseEvent } from "react";
import { buildClassNames } from "./cssHelpers";

import css from "./Emoji.module.css";

const Emoji = ({
  emojiName,
  onClick,
}: {
  emojiName: keyof typeof EmojiName;
  onClick?: (event: ReactMouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div
      className={buildClassNames([
        css["emoji"],
        onClick && css["emoji--clickable"],
      ])}
      onClick={onClick}
    >
      {EmojiName[emojiName]}
    </div>
  );
};

export const EmojiName = {
  Car: "🚗",
  Speaker: "🗣",
  Wastebasket: "🗑",
  Plus: "➕",
  CrossMark: "❌",
} as const;

export default Emoji;
