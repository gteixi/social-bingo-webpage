import React from "react";

import "./Welcome.css";

function Welcome() {
  return (
    <div className="mainContainer">
      {/* UNMUTE COMPONENT */}
      <div className="header">[ UNMUTE ]</div>
      <div className="block">
        <div className="block__text">
          <h1>PREPARAT PER CANTAR BINGO?</h1>
        </div>
        <div className="block__answers">
          <h1>SI</h1>
          <h1>/</h1>
          <h1>NO</h1>
        </div>
      </div>
      <div className="socialMedia">
        <p>redes</p>
        <p>redes</p>
        <p>redes</p>
        <p>redes</p>
      </div>
    </div>
  );
}

export default Welcome;
