import Emoji, { EmojiName } from "../common/Emoji";
import Text from "../common/Text";
import UserProfileIcon from "../userList/UserProfileIcon";
import css from "./User.module.css";

const User = ({ isDriver, user }: { isDriver: boolean; user: string }) => {
  return (
    <div className={css["user"]}>
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
