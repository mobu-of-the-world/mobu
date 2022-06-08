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
  onIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  intervalMinutes: number;
  soundConfigProps: SoundConfigProps;
}> = ({ timerProps, onIntervalChange, intervalMinutes, soundConfigProps }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  const onHamburgerMenuClick = React.useCallback(() => {
    setShowMenu(true);
  }, []);

  const onHamburgerMenuCloseClick = React.useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <>
      <Menu
        menuVisibility={showMenu}
        onMenuCloseClick={onHamburgerMenuCloseClick}
      />
      <Header onHamburgerMenuClick={onHamburgerMenuClick} />
      <div className="main--container">
        <div className="main">
          <UserList />
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
