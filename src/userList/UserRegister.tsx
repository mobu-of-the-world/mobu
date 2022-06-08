import React from "react";

import Form from "../common/Form";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import Emoji, { EmojiName } from "../common/Emoji";

import "./UserRegister.css";
import { useSetPersistedUsers, useUsers } from "../common/usersContexts";

const emptyUsername = "";
const blankStringsPattern = new RegExp(/^\s*$/);

const UserRegister: React.FunctionComponent = () => {
  const users = useUsers();
  const setPersistedUsers = useSetPersistedUsers();
  const [username, setUsername] = React.useState("");
  const onUsernameChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.currentTarget.value);
    },
    []
  );
  const onUserRegister = React.useCallback(
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
    <div className="userregister">
      <Form className="userregister--form" onSubmit={onUserRegister}>
        <TextInput
          placeholder="Username"
          onChange={onUsernameChange}
          value={username}
        />
        <Button
          className="userregister--button"
          type="submit"
          disabled={registerDisabled}
        >
          <Emoji emojiName={EmojiName.Plus} />
        </Button>
      </Form>
    </div>
  );
};

export default UserRegister;
