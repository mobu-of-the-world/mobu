import React from "react";
import Emoji, { EmojiName } from "../atoms/Emoji";
import Text from "../atoms/Text";
import UserProfileIcon from "../atoms/UserProfileIcon";
import "./User.css";

const User: React.FunctionComponent<{
  isDriver: boolean;
  user: string;
  changeDroppedUserPosition: (currentUser: string, droppedUser: string) => void;
}> = ({ isDriver, user, changeDroppedUserPosition }) => {
  return (
    <div
      className="user"
      draggable={true}
      onDragStart={(ev) => {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text/plain", `user-${user}`);
      }}
      onDragEnter={(ev) => {
        ev.preventDefault();
        return false;
      }}
      onDragOver={(ev) => {
        ev.preventDefault();
        return false;
      }}
      onDrop={(ev) => {
        ev.preventDefault();
        const droppedData = ev.dataTransfer.getData("text/plain");
        const droppedUsername = droppedData.match(
          /^user-(?<droppedUsername>.+)$/
        )?.groups?.droppedUsername;
        if (typeof droppedUsername === "string") {
          changeDroppedUserPosition(user, droppedUsername);
        }
        return false;
      }}
    >
      <Emoji emojiName={emojiNameByRole(isDriver)} />
      <UserProfileIcon user={user} />
      <Text>{user}</Text>
    </div>
  );
};

const emojiNameByRole = (isDriver: boolean): EmojiName => {
  if (isDriver) {
    return EmojiName.Car;
  }
  return EmojiName.Speaker;
};

export default User;
