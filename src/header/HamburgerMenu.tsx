import type { MouseEvent as ReactMouseEvent } from "react";

import MenuIcon from "./MenuIcon";

import css from "./HamburgerMenu.module.css";

const HamburgerMenu = ({
  onClick,
}: {
  onClick: (event: ReactMouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div className={css["hamburger-menu"]} onClick={onClick}>
      <MenuIcon />
      menu
    </div>
  );
};

export default HamburgerMenu;
