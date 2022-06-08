import type React from "react";

import MenuIcon from "../nav/MenuIcon";

import "./HamburgerMenu.css";

const HamburgerMenu: React.FunctionComponent<{
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ onClick }) => {
  return (
    <div className="hamburger-menu" onClick={onClick}>
      <MenuIcon />
      menu
    </div>
  );
};

export default HamburgerMenu;
