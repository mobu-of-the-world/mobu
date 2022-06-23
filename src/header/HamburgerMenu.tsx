import { FunctionComponent, MouseEvent as ReactMouseEvent } from "react";

import MenuIcon from "./MenuIcon";

import css from "./HamburgerMenu.module.css";

const HamburgerMenu: FunctionComponent<{
  onClick: (event: ReactMouseEvent<HTMLDivElement>) => void;
}> = ({ onClick }) => {
  return (
    <div className={css["hamburger-menu"]} onClick={onClick}>
      <MenuIcon />
      menu
    </div>
  );
};

export default HamburgerMenu;
