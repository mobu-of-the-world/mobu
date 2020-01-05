import React from "react";

import Button from "../atoms/Button";
import Form from "../atoms/Form";
import TextInput from "../atoms/TextInput";
import User from "../molecules/User";

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
    <div>
      <Form onSubmit={onUserRegister}>
        Username
        <TextInput onChange={onUsernameChange} value={username} />
        <Button type="submit" disabled={registerDisabled}>
          Register
        </Button>
      </Form>
      <Button onClick={onShuffle} disabled={users.length < 2}>
        Shuffle
      </Button>
      <ul>
        {users.map((user, index) => (
          <li key={user}>
            <User isDriver={index === 0} user={user} />
            <Button onClick={onUserRemove} value={user}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
