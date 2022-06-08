import React from "react";

import Emoji, { EmojiName } from "../atoms/Emoji";
import User from "../molecules/User";

import "./UserList.css";
import "../atoms/Button.css";

const UserList: React.FunctionComponent<{
  users: string[];
  onUserRemove: (event: React.MouseEvent<HTMLDivElement>) => void;
  updateUsersOrderAfterDropped: (
    currentUser: string,
    droppedUser: string
  ) => void;
  userRegister: React.ReactElement;
  shuffleButton: React.ReactElement;
}> = ({
  userRegister,
  shuffleButton,
  users,
  onUserRemove,
  updateUsersOrderAfterDropped,
}) => {
  return (
    <div className="userlist">
      {userRegister}
      <div className="userlist--divider" />
      {shuffleButton}
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
                updateUsersOrderAfterDropped(user, droppedUsername);
              }
              return false;
            }}
          >
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
