import React from "react";

import HamburgerMenu from "./HamburgerMenu";

import "./Header.css";
import Menu from "./Menu";

const Header: React.FunctionComponent = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const onHamburgerMenuClick = React.useCallback(() => {
    setShowMenu(true);
  }, []);
  const onHamburgerMenuCloseClick = React.useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <>
      <Menu isVisible={showMenu} onCloseClick={onHamburgerMenuCloseClick} />
      <div className="header">
        <div className="header--container header--width">
          <div className="header--logo">mobu</div>
          <HamburgerMenu onClick={onHamburgerMenuClick} />
        </div>
      </div>
    </>
  );
};

export default Header;
