import React from "react";

import Button from "../atoms/Button";
import Emoji, { EmojiName } from "../atoms/Emoji";
import User from "../molecules/User";
import UserRegister from "../molecules/UserRegister";

import "./UserList.css";
import "../atoms/Button.css";

const UserList: React.FunctionComponent<{
  onUserRegister: (event: React.FormEvent<HTMLFormElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  username: string;
  registerDisabled: boolean;
  onShuffle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  users: string[];
  onUserRemove: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
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
      <UserRegister
        onUserRegister={onUserRegister}
        onUsernameChange={onUsernameChange}
        username={username}
        registerDisabled={registerDisabled}
      />
      <div className="userlist--divider" />
      <Button
        className="button--width-max"
        onClick={onShuffle}
        disabled={users.length < 2}
      >
        Shuffle
      </Button>
      <div className="userlist--divider" />
      <ul className="userlist__list">
        {users.map((user, index) => (
          <li className="userlist__listitem" key={user}>
            <User isDriver={index === 0} user={user} />
            <Emoji
              emojiName={EmojiName.CrossMark}
              {...{ onClick: onUserRemove, value: user }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
