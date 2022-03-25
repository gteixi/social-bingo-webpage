import React from "react";

import "./MenuHeader.scss";

function MenuHeader() {
  return (
    <header className="headerContainer">
      <img
        className="headerContainer__logo"
        src="./../assets/music-menu.png"
        alt="Music Logo"
      />
      <p className="headerContainer__text">menú</p>
    </header>
  );
}

export default MenuHeader;
