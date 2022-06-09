import type React from "react";

import css from "./MenuIcon.module.css";

const MenuIcon: React.FunctionComponent = () => {
  return (
    <div className={css["menuicon"]}>
      <span className={css["menuicon--line"]}></span>
      <span className={css["menuicon--line"]}></span>
      <span className={css["menuicon--line"]}></span>
    </div>
  );
};

export default MenuIcon;
