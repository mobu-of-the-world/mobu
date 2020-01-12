import React from "react";

import Form from "../atoms/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Emoji, { EmojiName } from "../atoms/Emoji";

import "./UserRegister.css";

const UserRegister: React.FunctionComponent<{
  onUserRegister: (event: React.FormEvent<HTMLFormElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  username: string;
  registerDisabled: boolean;
}> = ({ onUserRegister, onUsernameChange, username, registerDisabled }) => {
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
