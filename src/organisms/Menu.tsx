import React from "react";

import "./Menu.css";

const Menu: React.FunctionComponent<{
  menuVisibility: boolean;
  onMenuCloseClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ menuVisibility, onMenuCloseClick }) => {
  const containerClassName = "menu--container " + visibility(menuVisibility);
  return (
    <div className={containerClassName}>
      <div className="menu--container-place-adjuster">
        <div className="menu--content-container">
          <div className="menu--content-item-header">
            <div
              className="menu--content-item-header-close"
              onClick={onMenuCloseClick}
            >
              ✗
            </div>
          </div>
          <div className="menu--content-item-container">
            <div className="menu--content-item">menu 1</div>
            <div className="menu--content-item">menu 2</div>
            <div className="menu--content-item">menu 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

function visibility(menuVisibility: boolean): string {
  if (menuVisibility) {
    return "visible";
  }
  return "hidden";
}

export default Menu;
