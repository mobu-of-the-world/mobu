import React from "react";

import "./Menu.css";

const visibilityCSSClassSuffix = (isVisible: boolean): "visible" | "hidden" =>
  isVisible ? "visible" : "hidden";

const Menu: React.FunctionComponent<{
  isVisible: boolean;
  onCloseClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ isVisible, onCloseClick }) => {
  const containerClassName =
    "menu--container " + visibilityCSSClassSuffix(isVisible);
  return (
    <div className={containerClassName} onClick={onCloseClick}>
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
              onClick={onCloseClick}
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

export default Menu;
