import { useCallback, useState } from "react";
import { buildClassNames } from "../common/cssHelpers";

import HamburgerMenu from "./HamburgerMenu";

import css from "./Header.module.css";
import Menu from "./Menu";

const Header: React.FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onHamburgerMenuClick = useCallback(() => {
    setShowMenu(true);
  }, []);
  const onHamburgerMenuCloseClick = useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <>
      <Menu isVisible={showMenu} onCloseClick={onHamburgerMenuCloseClick} />
      <div className={css["header"]}>
        <div
          className={buildClassNames([
            css["header--container"],
            css["header--width"],
          ])}
        >
          <div className={css["header--logo"]}>mobu</div>
          <HamburgerMenu onClick={onHamburgerMenuClick} />
        </div>
      </div>
    </>
  );
};

export default Header;
