import React from "react";

import UserList from "../organisms/UserList";
import Session from "../organisms/Session";
import Header from "../molecules/Header";
import Menu from "../organisms/Menu";

import "./AppComponent.css";
import { SoundConfigProps } from "../molecules/SoundConfig";
import { TimerProps } from "../molecules/Timer";

const AppComponent: React.FunctionComponent<{
  timerProps: TimerProps;
  onShuffle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onUserRegister: (event: React.FormEvent<HTMLFormElement>) => void;
  onUserRemove: (event: React.MouseEvent<HTMLDivElement>) => void;
  onHamburgerMenuClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  onHamburgerMenuCloseClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  updateUsersOrderAfterDropped: (
    currentUser: string,
    droppedUser: string
  ) => void;
  username: string;
  users: string[];
  intervalMinutes: number;
  registerDisabled: boolean;
  showMenu: boolean;
  soundConfigProps: SoundConfigProps;
}> = ({
  timerProps,
  onShuffle,
  onUsernameChange,
  onIntervalChange,
  onUserRegister,
  onUserRemove,
  onHamburgerMenuClick,
  onHamburgerMenuCloseClick,
  username,
  users,
  intervalMinutes,
  registerDisabled,
  showMenu,
  soundConfigProps,
  updateUsersOrderAfterDropped,
}) => {
  return (
    <>
      <Menu
        menuVisibility={showMenu}
        onMenuCloseClick={onHamburgerMenuCloseClick}
      />
      <Header onHamburgerMenuClick={onHamburgerMenuClick} />
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
            updateUsersOrderAfterDropped={updateUsersOrderAfterDropped}
          />
          <div className="divider"></div>
          <Session
            timerProps={timerProps}
            onIntervalChange={onIntervalChange}
            intervalMinutes={intervalMinutes}
            soundConfigProps={soundConfigProps}
          />
        </div>
      </div>
    </>
  );
};

export default AppComponent;
