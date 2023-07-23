import type { MouseEvent as ReactMouseEvent } from "react";
import { buildClassNames } from "./cssHelpers";

import css from "./Emoji.module.css";

const Emoji = ({
  emojiName,
  onClick,
}: {
  emojiName: keyof typeof EmojiByName;
  onClick?: (event: ReactMouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div
      className={buildClassNames([
        css.emoji,
        onClick && css["emoji--clickable"],
      ])}
      onClick={onClick}
    >
      {EmojiByName[emojiName]}
    </div>
  );
};

const EmojiByName = {
  Car: "🚗",
  Speaker: "🗣",
  Wastebasket: "🗑",
  Plus: "➕",
  CrossMark: "❌",
} as const;

export default Emoji;
