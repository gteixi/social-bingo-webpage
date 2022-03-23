import React from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import "./Welcome.scss";

function Welcome() {
  return (
    <div className="welcomeContainer">
      {/* UNMUTE COMPONENT */}
      <div className="header">[ UNMUTE ]</div>
      <div className="block">
        <div className="block__text">
          <h1>PREPARAT PER CANTAR BINGO?</h1>
        </div>
        <div className="block__answers">
          <a href="/home" className="block__answers__yes">
            SI
          </a>
          <p className="block__answers__or">/</p>
          <a href="/" className="block__answers__no">
            NO
          </a>
        </div>
      </div>
      <div className="socialMedia">
        <SocialMedia />
      </div>
    </div>
  );
}

export default Welcome;
