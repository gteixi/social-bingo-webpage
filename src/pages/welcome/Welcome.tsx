import React from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import "./Welcome.scss";

function Welcome() {
  // return (
  //   <div className="welcomeContainer">
  //     {/* UNMUTE COMPONENT */}
  //     <div className="welcomeContainer__header"> {/* UNMUTE COMPONENT */}</div>
  //     <div className="welcomeContainer__block">
  //       <div className="welcomeContainer__block__text">
  //         <h1>READY PER CANTAR BINGO?</h1>
  //       </div>
  //       <div className="welcomeContainer__block__answers">
  //         <a href="/home" className="welcomeContainer__block__answers--yes">
  //           SI
  //         </a>
  //         <p className="welcomeContainer__block__answers--or">/</p>
  //         <a
  //           href="/com-que-no?"
  //           className="welcomeContainer__block__answers--no"
  //         >
  //           NO
  //         </a>
  //       </div>
  //     </div>
  //     <div className="welcomeContainer__socialMedia">
  //       <SocialMedia />
  //     </div>
  //   </div>
  // );

  return (
    <div className="welcomeContainer">
      <a href="/about">
      <div className="welcomeContainer__header">
        <img
          src="./../../assets/lettering.png"
          className="welcomeContainer__header__img"
          alt="Logo"
        />
      </div>
        </a>
      <div className="welcomeContainer__block">
        <a href="/about" className="welcomeContainer__img">
          <img src="./../../assets/main-logo.png" alt="Logo" />
        </a>
      </div>
      <div className="welcomeContainer__socialMedia">
        <SocialMedia />
      </div>
    </div>
  );
}

export default Welcome;
