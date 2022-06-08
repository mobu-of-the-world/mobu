import type React from "react";

import HamburgerMenu from "./HamburgerMenu";

import "./Header.css";

const Header: React.FunctionComponent<{
  onHamburgerMenuClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ onHamburgerMenuClick }) => {
  return (
    <div className="header">
      <div className="header--container header--width">
        <div className="header--logo">mobu</div>
        <HamburgerMenu onClick={onHamburgerMenuClick} />
      </div>
    </div>
  );
};

export default Header;
