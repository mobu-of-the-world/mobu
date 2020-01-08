import React from "react";

import Menu from "./Menu";

import "./Header.css";

const Header: React.FunctionComponent = ({}) => {
  return (
    <div className="header">
      <div className="header--container">
        <div className="header--logo">mobu</div>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
