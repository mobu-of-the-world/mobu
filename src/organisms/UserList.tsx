import React from "react";

import Button from "../atoms/Button";
import Form from "../atoms/Form";
import TextInput from "../atoms/TextInput";
import Emoji, { EmojiName } from "../atoms/Emoji";
import User from "../molecules/User";

import "./UserList.css";

const UserList: React.FunctionComponent<{
  onUserRegister: (event: React.FormEvent<HTMLFormElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  username: string;
  registerDisabled: boolean;
  onShuffle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  users: string[];
  onUserRemove: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({
  onUserRegister,
  onUsernameChange,
  username,
  registerDisabled,
  onShuffle,
  users,
  onUserRemove
}) => {
  return (
    <div className="userlist">
      <Form onSubmit={onUserRegister}>
        <TextInput
          placeholder="Username"
          onChange={onUsernameChange}
          value={username}
        />
        <Button type="submit" disabled={registerDisabled}>
          Register
        </Button>
      </Form>
      <Button onClick={onShuffle} disabled={users.length < 2}>
        Shuffle
      </Button>
      <ul className="userlist__list">
        {users.map((user, index) => (
          <li className="userlist__listitem" key={user}>
            <User isDriver={index === 0} user={user} />
            <Button onClick={onUserRemove} value={user}>
              <Emoji name={EmojiName.Wastebasket} />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
