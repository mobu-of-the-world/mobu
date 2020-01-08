import React from "react";

import MenuIcon from "../atoms/MenuIcon";

import "./Header.css";

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <div className="header--container">
        <div className="header--logo">mobu</div>
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
