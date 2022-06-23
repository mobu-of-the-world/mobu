import { useCallback, useState } from "react";

import TextInput from "../common/TextInput";
import Button from "../common/Button";
import Emoji, { EmojiName } from "../common/Emoji";

import css from "./UserRegister.module.css";
import { useSetPersistedUsers, useUsers } from "../common/usersContexts";

const emptyUsername = "";
const blankStringsPattern = new RegExp(/^\s*$/);

const UserRegister = () => {
  const users = useUsers();
  const setPersistedUsers = useSetPersistedUsers();
  const [username, setUsername] = useState("");
  const onUsernameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.currentTarget.value);
    },
    []
  );
  const onUserRegister = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setPersistedUsers([...users, username.trim()]);
      setUsername(emptyUsername);
    },
    [setPersistedUsers, username, users]
  );
  const registerDisabled =
    username === emptyUsername ||
    blankStringsPattern.test(username) ||
    users.includes(username);

  return (
    <div className={css["userregister"]}>
      <form className={css["userregister--form"]} onSubmit={onUserRegister}>
        <TextInput
          placeholder="Username"
          onChange={onUsernameChange}
          value={username}
        />
        <Button
          className={css["userregister--button"]}
          type="submit"
          disabled={registerDisabled}
        >
          <Emoji emojiName={EmojiName.Plus} />
        </Button>
      </form>
    </div>
  );
};

export default UserRegister;
