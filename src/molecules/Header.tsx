import React from "react";

import HamburgerMenu from "./HamburgerMenu";

import "./Header.css";

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="header--container header--width">
        <div className="header--logo">mobu</div>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
