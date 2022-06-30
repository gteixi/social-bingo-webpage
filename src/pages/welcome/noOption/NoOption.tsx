import React from "react";

import "./NoOption.scss";

function NoOption() {
  return (
    <div className="noOptionContainer">
      <header className="noOptionContainer__goBack">
        <a className="noOptionContainer__goBack--text" href="/">
          tornar al bingo
        </a>
      </header>
      <div className="noOptionContainer__instagramButton">
        <a
          href="https://www.instagram.com/lasocialdisfunktion/"
          className="noOptionContainer__instagramButton--back"
        >
          CLICA AQUI
        </a>
      </div>
    </div>
  );
}

export default NoOption;
