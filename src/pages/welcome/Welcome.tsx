import React from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import "./Welcome.scss";

function Welcome() {
  return (
    <div className="welcomeContainer">
      {/* UNMUTE COMPONENT */}
      <div className="welcomeContainer__header">[ UNMUTE ]</div>
      <div className="welcomeContainer__block">
        <div className="welcomeContainer__block__text">
          <h1>PREPARAT PER CANTAR BINGO?</h1>
        </div>
        <div className="welcomeContainer__block__answers">
          <a href="/home" className="welcomeContainer__block__answers--yes">
            SI
          </a>
          <p className="welcomeContainer__block__answers--or">/</p>
          <a href="/" className="welcomeContainer__block__answers--no">
            NO
          </a>
        </div>
      </div>
      <div className="welcomeContainer__socialMedia">
        <SocialMedia />
      </div>
    </div>
  );
}

export default Welcome;
