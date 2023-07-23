import Emoji from "../common/Emoji";
import Text from "../common/Text";
import UserProfileIcon from "../userList/UserProfileIcon";
import css from "./User.module.css";

const User = ({ isDriver, user }: { isDriver: boolean; user: string }) => {
  return (
    <div className={css.user}>
      <Emoji emojiName={isDriver ? "Car" : "Speaker"} />
      <UserProfileIcon user={user} />
      <Text>{user}</Text>
    </div>
  );
};

export default User;
