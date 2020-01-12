import React from "react";

import UserList from "../organisms/UserList";
import Session from "../organisms/Session";
import Header from "../molecules/Header";

import "./AppComponent.css";

const AppComponent: React.FunctionComponent<{
  elapsedTime: string;
  onStartOrPause: (event: React.MouseEvent<HTMLElement>) => void;
  onReset: (event: React.MouseEvent<HTMLElement>) => void;
  onShuffle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUserRegister: (event: React.FormEvent<HTMLFormElement>) => void;
  onUserRemove: (event: any) => void;
  username: string;
  users: string[];
  interval: number;
  registerDisabled: boolean;
}> = ({
  elapsedTime,
  onStartOrPause,
  onReset,
  onShuffle,
  onUsernameChange,
  onIntervalChange,
  onUserRegister,
  onUserRemove,
  username,
  users,
  interval,
  registerDisabled
}) => {
  return (
    <>
      <Header />
      <div className="main--container">
        <div className="main">
          <UserList
            onUserRegister={onUserRegister}
            onUsernameChange={onUsernameChange}
            username={username}
            registerDisabled={registerDisabled}
            onShuffle={onShuffle}
            users={users}
            onUserRemove={onUserRemove}
          />
          <div className="divider"></div>
          <Session
            elapsedTime={elapsedTime}
            onStartOrPause={onStartOrPause}
            onReset={onReset}
            onIntervalChange={onIntervalChange}
            interval={interval}
          />
        </div>
      </div>
    </>
  );
};

export default AppComponent;
