import React from "react";

import Emoji, { EmojiName } from "../atoms/Emoji";
import User from "../molecules/User";

import "./UserList.css";
import "../atoms/Button.css";
import UserRegister from "../molecules/UserRegister";
import { useSetPersistedUsers, useUsers } from "../contexts/users-contexts";
import Button from "../atoms/Button";
import { newUsersAfterDropped } from "./UserListHelpers";
import { shuffleArray } from "../utils/listHelpers";

const UserList: React.FunctionComponent = () => {
  const users = useUsers();
  const setPersistedUsers = useSetPersistedUsers();
  const onShuffle = React.useCallback(() => {
    setPersistedUsers(shuffleArray<string>([...users]));
  }, [setPersistedUsers, users]);

  return (
    <div className="userlist">
      <UserRegister />
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
          <li
            className="userlist__listitem"
            key={user}
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
                setPersistedUsers(
                  newUsersAfterDropped(users, user, droppedUsername)
                );
              }
              return false;
            }}
          >
            <User isDriver={index === 0} user={user} />
            <Emoji
              emojiName={EmojiName.CrossMark}
              onClick={() => {
                setPersistedUsers(users.filter((elem) => elem !== user));
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
