import type React from "react";

import MenuIcon from "./MenuIcon";

import css from "./HamburgerMenu.module.css";

const HamburgerMenu: React.FunctionComponent<{
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ onClick }) => {
  return (
    <div className={css["hamburger-menu"]} onClick={onClick}>
      <MenuIcon />
      menu
    </div>
  );
};

export default HamburgerMenu;
