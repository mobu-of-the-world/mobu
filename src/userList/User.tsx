import React from "react";
import Emoji, { EmojiName } from "../common/Emoji";
import Text from "../common/Text";
import UserProfileIcon from "../userList/UserProfileIcon";
import "./User.css";

const User: React.FunctionComponent<{
  isDriver: boolean;
  user: string;
}> = ({ isDriver, user }) => {
  return (
    <div className="user">
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
