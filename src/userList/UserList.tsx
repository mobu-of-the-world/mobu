import { useCallback } from "react";

import Emoji from "../common/Emoji";
import User from "./User";

import css from "./UserList.module.css";
import buttonCss from "../common/Button.module.css";
import UserRegister from "./UserRegister";
import { useSetPersistedUsers, useUsers } from "../common/usersContexts";
import Button from "../common/Button";
import { movePosition, shuffleArray } from "../common/listHelpers";

const UserList = () => {
  const users = useUsers();
  const setPersistedUsers = useSetPersistedUsers();
  const onShuffle = useCallback(() => {
    setPersistedUsers(shuffleArray<string>(users));
  }, [setPersistedUsers, users]);

  return (
    <div className={css["userlist"]}>
      <UserRegister />
      <div className={css["userlist--divider"]} />
      <Button
        className={buttonCss["button--width-max"]}
        onClick={onShuffle}
        disabled={users.length < 2}
      >
        Shuffle
      </Button>
      <div className={css["userlist--divider"]} />
      <ul className={css["userlist__list"]}>
        {users.map((user, index) => (
          <li
            className={css["userlist__listitem"]}
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
              const droppedMatchedGroups = droppedData.match(
                /^user-(?<droppedUsername>.+)$/,
              )?.groups;
              const droppedUsername = droppedMatchedGroups?.["droppedUsername"];
              if (typeof droppedUsername === "string") {
                setPersistedUsers(
                  movePosition(users, user, droppedUsername),
                );
              }
              return false;
            }}
          >
            <User isDriver={index === 0} user={user} />
            <Emoji
              emojiName={"CrossMark"}
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
