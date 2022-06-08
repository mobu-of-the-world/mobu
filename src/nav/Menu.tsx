import type React from "react";

import "./Menu.css";

const Menu: React.FunctionComponent<{
  menuVisibility: boolean;
  onMenuCloseClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ menuVisibility, onMenuCloseClick }) => {
  const containerClassName = "menu--container " + visibility(menuVisibility);
  return (
    <div className={containerClassName} onClick={onMenuCloseClick}>
      <div className="menu--container-place-adjuster">
        <div
          className="menu--content-container"
          // Don't close the opened menu if clicked point is
          // within the menu container. Otherwise (clicked point
          // is out of menu container) close the menu.
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
          }}
        >
          <div className="menu--content-item-header">
            <div
              className="menu--content-item-header-close"
              onClick={onMenuCloseClick}
            >
              ✗
            </div>
          </div>
          <div className="menu--content-item-container">
            <div className="menu--content-item">
              <a
                href="https://github.com/mobu-of-the-world/mobu"
                target="blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const visibility = (menuVisibility: boolean): string => {
  if (menuVisibility) {
    return "visible";
  }
  return "hidden";
};

export default Menu;
