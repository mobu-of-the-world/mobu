import type React from "react";

import css from "./Menu.module.css";

const visibilityClassname = (isVisible: boolean): "visible" | "hidden" =>
  isVisible ? "visible" : "hidden";

const Menu: React.FunctionComponent<{
  isVisible: boolean;
  onCloseClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}> = ({ isVisible, onCloseClick }) => {
  return (
    <div
      className={[
        css["menu--container"],
        css[visibilityClassname(isVisible)],
      ].join(" ")}
      onClick={onCloseClick}
    >
      <div className={css["menu--container-place-adjuster"]}>
        <div
          className={css["menu--content-container"]}
          // Don't close the opened menu if clicked point is
          // within the menu container. Otherwise (clicked point
          // is out of menu container) close the menu.
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
          }}
        >
          <div className={css["menu--content-item-header"]}>
            <div
              className={css["menu--content-item-header-close"]}
              onClick={onCloseClick}
            >
              ✗
            </div>
          </div>
          <div className={css["menu--content-item-container"]}>
            <div className={css["menu--content-item"]}>
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
