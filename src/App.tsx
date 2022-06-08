import React from "react";

import { UsersProvider } from "./common/usersContexts";

import UserList from "./userList/UserList";
import Session from "./session/Session";
import Header from "./nav/Header";
import Menu from "./nav/Menu";

import "./App.css";

const App: React.FunctionComponent = () => {
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
          <UsersProvider>
            <>
              <UserList />
              <div className="divider"></div>
              <Session />
            </>
          </UsersProvider>
        </div>
      </div>
    </>
  );
};

export default App;
