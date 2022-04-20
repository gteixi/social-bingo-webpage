import React from "react";

import "./NoOption.scss";

function NoOption() {
  return (
    <div className="noOptionContainer">
      <div className="noOptionContainer__container">
        <h1 className="noOptionContainer__container-text">
          OH... NOMÉS ACCEPTEM GANES DE PASSAR-HO BÉ AIXÍ QUE TORNA QUAN
          ESTIGUIS PREPARAT!
        </h1>
        <div className="noOptionContainer__backButton">
          <a href="/" className="noOptionContainer__backButton--back">
            TORNAR ENRERE
          </a>
        </div>
      </div>
    </div>
  );
}

export default NoOption;
