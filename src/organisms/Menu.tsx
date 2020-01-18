import React from "react";

import "./Menu.css";

const Menu: React.FunctionComponent = () => {
  return (
    <div className="menu--container hidden">
      <div className="menu--content-container">
        <div className="menu--content-item-header">
          <div className="menu--content-item-header-close">閉</div>
        </div>
        <div className="menu--content-item-container">
          <div className="menu--content-item">Hoge</div>
          <div className="menu--content-item">Fuga</div>
          <div className="menu--content-item">Piyo</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
