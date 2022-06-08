import React from "react";

import { UsersProvider } from "../contexts/users-contexts";

import UserList from "../organisms/UserList";
import Session from "../organisms/Session";
import Header from "../molecules/Header";
import Menu from "../organisms/Menu";

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
