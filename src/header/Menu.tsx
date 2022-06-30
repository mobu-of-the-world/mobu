import type { MouseEvent as ReactMouseEvent } from "react";
import { GITHUB_REPOSITORY_URL } from "../common/constants";
import { buildClassNames } from "../common/cssHelpers";

import css from "./Menu.module.css";

const visibilityClassname = (isVisible: boolean): "visible" | "hidden" => isVisible ? "visible" : "hidden";

const Menu = ({
  isVisible,
  onCloseClick,
}: {
  isVisible: boolean;
  onCloseClick: (event: ReactMouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div
      className={buildClassNames([
        css["menu--container"],
        css[visibilityClassname(isVisible)],
      ])}
      onClick={onCloseClick}
    >
      <div className={css["menu--container-place-adjuster"]}>
        <div
          className={css["menu--content-container"]}
          // Don't close the opened menu if clicked point is
          // within the menu container. Otherwise (clicked point
          // is out of menu container) close the menu.
          onClick={(event: ReactMouseEvent<HTMLDivElement>) => {
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
              <a href={GITHUB_REPOSITORY_URL} target="blank">
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
