import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import "./Home.scss";

function Home() {
  return (
    <div className="homeContainer">
      {/* UNMUTE COMPONENT */}
      <div className="header">[ UNMUTE ]</div>
      <div className="homeContainer__menu">
        <Link className="homeContainer__menu__text" to="/about">
          QUI SOM
        </Link>
        <Link className="homeContainer__menu__text" to="/description">
          QUÈ ÉS UN BINGO MUSICAL
        </Link>
        {/* <Link className="homeContainer__menu__text" to="/description_more">INSTRUCCIONS</Link> */}
        <Link className="homeContainer__menu__text" to="/pictures">
          FOTOS
        </Link>
        <Link className="homeContainer__menu__text" to="/contact">
          CONTRACTANS
        </Link>
      </div>
      <div className="socialMedia">
        <SocialMedia />
      </div>
    </div>
  );
}

export default Home;
